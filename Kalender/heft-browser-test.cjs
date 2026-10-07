"use strict";
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||"playwright");
const assert=require("node:assert/strict");
const fs=require("node:fs"), os=require("node:os"), path=require("node:path");
let express; try {express=require("express");} catch(_){express=require("../.codex-build/englisch_9-deploy/backend/node_modules/express");}
const {registerKalenderRoutes}=require("./server/kalender");
const {registerKlasseRoutes}=require("../.codex-build/englisch_9-deploy/backend/api/klasse");
const root=path.resolve(__dirname,".."), out=path.join(root,".codex-build","kalender-heft-qa");
const dir=fs.mkdtempSync(path.join(os.tmpdir(),"grumi-heft-browser-")), PW="Heft-Demo-2026!";
const child=async code=>code==="101"?{code,klasse:"7aM",zug:"7M"}:code==="202"?{code,klasse:"8c",zug:"8R"}:null;
const app=express(); let server, browser, base, offline=false;
app.use(express.json());
const kalender=registerKalenderRoutes(app,{dataDir:dir,teacherPassword:PW,kindZumCode:child});
registerKlasseRoutes(app,{dataDir:dir,teacherPassword:PW,kindZumCode:child,jetzt:()=>new Date("2026-10-07T08:00:00Z"),kalenderTermine:klasse=>{if(offline)throw new Error("Test offline");return kalender.heft(klasse);}});
app.post("/api/nt9/fortschritt/anmelden",async(req,res)=>{const k=await child(req.body.code);res.status(k?200:401).json(k?{ok:true,...k,fortschritt:{}}:{ok:false,error:"Falscher Testcode"});});
app.post("/api/nt9/fortschritt/lehrer/liste",(req,res)=>res.status(req.body.password===PW?200:401).json({ok:req.body.password===PW,klassenInfo:[{klasse:"7aM",stufe:7,anzahl:1},{klasse:"8c",stufe:8,anzahl:1}],kurse:[],schueler:[{code:"101",klasse:"7aM"},{code:"202",klasse:"8c"}],speicher:"upstash"}));
app.post("/api/proben/noten",(_req,res)=>res.json({ok:true,proben:[],schueler:[],noten:[]}));
app.use("/api",(_req,res)=>res.status(404).json({ok:false,error:"Nicht in dieser lokalen Pruefung"}));
app.use(express.static(root,{dotfiles:"deny",index:false}));
async function post(route,body,token){const r=await fetch(base+route,{method:"POST",headers:{"Content-Type":"application/json",...(token?{Authorization:"Bearer "+token}:{})},body:JSON.stringify(body)}); const d=await r.json();assert.equal(r.status,200,JSON.stringify(d));return d;}
async function loginKid(page,code){await page.goto(base+"/hausaufgaben.html");await page.locator('form input').first().fill(code);await page.locator('form button[type=submit]').click();await page.locator('.kb-reiter').waitFor();}
async function fit(page){assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.equal(await page.locator('.kb-eintrag,.kv-zeile').evaluateAll(ns=>ns.some(n=>{const r=n.getBoundingClientRect();return r.width>0&&(r.left<0||r.right>innerWidth+1);})),false);assert.equal(await page.locator('#kb-titel').evaluateAll(ns=>ns.every(n=>n.scrollWidth<=n.clientWidth+1)),true);}
(async()=>{
  fs.mkdirSync(out,{recursive:true});
  await new Promise(resolve=>{server=app.listen(0,"127.0.0.1",resolve);}); base="http://127.0.0.1:"+server.address().port;
  try{
    for(const id of ["demo","kollegin"])await post("/api/kalender/admin/speichern",{password:PW,benutzer:id,name:id,passwort:PW});
    const token=(await post("/api/kalender/anmelden",{benutzer:"demo",passwort:PW})).token;
    const token2=(await post("/api/kalender/anmelden",{benutzer:"kollegin",passwort:PW})).token;
    const own=(await post("/api/kalender/speichern",{datum:"2026-10-08",klasse:"7aM",fach:"Deutsch",titel:"Erzaehlung",stunde:"2. Stunde",hinweis:"Schreibplan vorbereiten",bestaetigt:true},token)).eintrag;
    await post("/api/kalender/import",{eintraege:[{datum:"2026-10-09",klasse:"8c",fach:"Informatik",titel:"Netzwerke"}],bestaetigt:true},token);
    const other=(await post("/api/kalender/speichern",{datum:"2026-10-10",klasse:"7aM",fach:"Englisch",titel:"Unit 1",bestaetigt:true},token2)).eintrag;
    await post("/api/klasse/lehrer/heft/speichern",{password:PW,klasse:"7aM",fach:"Mathematik",text:"Seite 12",faellig:"2026-10-08"});
    await post("/api/klasse/lehrer/heft/speichern",{password:PW,klasse:"7aM",fach:"GPG",text:"Manuelle Probe",faellig:"2026-10-09",typ:"probe"});
    await post("/api/klasse/heft/eigen/speichern",{code:"101",fach:"Kunst",text:"Pinsel mitbringen",faellig:"2026-10-09"});
    browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||"C:/Program Files/Google/Chrome/Application/chrome.exe"});
    const page=await browser.newPage({viewport:{width:1280,height:900}}), errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await loginKid(page,"101");
    const ownCard=page.locator('[data-id="kalender:'+own.id+'"]');
    assert.match(await ownCard.textContent(),/Probentermin/);assert.match(await ownCard.textContent(),/2\. Stunde/);
    assert.equal(await ownCard.locator('input,[data-weg]').count(),0);
    assert.ok((await page.locator('.kb-eintrag').allTextContents()).some(t=>t.includes('Pinsel mitbringen')));
    assert.ok(!(await page.locator('.kb-eintrag').allTextContents()).some(t=>t.includes('Netzwerke')));
    await page.locator('[data-ansicht=termine]').click();assert.equal(await page.locator('.kb-eintrag').count(),3);
    await page.screenshot({path:path.join(out,'kind-desktop.png'),fullPage:true});
    for(const width of [320,375,768]){await page.setViewportSize({width,height:850});await fit(page);await page.screenshot({path:path.join(out,'kind-'+width+'.png'),fullPage:true});}
    const updated=(await post("/api/kalender/speichern",{...own,datum:"2026-10-20",klasse:"8c",titel:"Erzaehlung verschoben",hinweis:'<script>window.__heftXss=true</script>',bestaetigt:true},token)).eintrag;
    await page.reload();await page.locator('.kb-reiter').waitFor();await page.locator('[data-ansicht=termine]').click();assert.equal(await ownCard.count(),0);
    const second=await browser.newPage({viewport:{width:375,height:850}});second.on('pageerror',e=>errors.push(e.message));await loginKid(second,'202');await second.locator('[data-ansicht=termine]').click();
    assert.equal(await second.locator('.kb-eintrag').count(),2);assert.match(await second.locator('[data-id="kalender:'+own.id+'"]').textContent(),/Erzaehlung verschoben/);
    assert.equal(await second.evaluate(()=>window.__heftXss),undefined);assert.equal(await second.locator('.kb-eigen').count(),0);await fit(second);await second.screenshot({path:path.join(out,'klasse8-mobil.png'),fullPage:true});
    await post("/api/kalender/loeschen",{id:updated.id,version:updated.version},token);await second.reload();await second.locator('.kb-reiter').waitFor();await second.locator('[data-ansicht=termine]').click();assert.equal(await second.locator('.kb-eintrag').count(),1);
    console.log('Kinder: passende Klasse, Probentermin mit Stunde, Import, Klassenwechsel, Verschieben, Loeschen und private Notizen korrekt; 320/375/768 px ohne Ueberlauf.');
    const admin=await browser.newPage({viewport:{width:1280,height:900}});admin.on('pageerror',e=>errors.push(e.message));
    await admin.goto(base+'/proben-verwalten.html');await admin.locator('#pw').fill(PW);await admin.locator('#btn-login').click();await admin.locator('[data-ansicht=heft]').click();await admin.locator('#kv-heft-liste .kv-zeile').first().waitFor();
    const linked=admin.locator('.kv-zeile').filter({hasText:'Unit 1'});assert.match(await linked.textContent(),/Probentermin/);assert.equal(await linked.locator('[data-bearbeiten],[data-loeschen]').count(),0);assert.equal(await linked.locator('a[href="kalender-verwalten.html"]').count(),1);
    assert.ok(await admin.locator('[data-bearbeiten]').count()>0);await admin.screenshot({path:path.join(out,'verwaltung-desktop.png'),fullPage:true});
    for(const width of [320,375,768]){await admin.setViewportSize({width,height:850});await fit(admin);await admin.screenshot({path:path.join(out,'verwaltung-'+width+'.png'),fullPage:true});}
    offline=true;await page.reload();await page.locator('.kb-reiter').waitFor();await page.locator('[data-ansicht=woche]').click();assert.match(await page.locator('[role=status]').textContent(),/Probentermine/);assert.ok((await page.locator('.kb-eintrag').allTextContents()).some(t=>t.includes('Seite 12')));
    await admin.locator('[data-ansicht=heft]').click();await admin.locator('#kv-heft-kalender-msg').getByText(/Probentermine/).waitFor();assert.equal(await admin.locator('#kv-heft-liste .kv-zeile').count(),2);
    assert.deepEqual(errors,[]);console.log('Lehrkraft: Probentermine im Heft, Aenderungen im Kalender, normale Aufgaben editierbar. Ausfallwarnungen geprueft; keine Browserfehler. Screenshots: '+out);
  } finally {
    if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));
    assert.equal(path.dirname(path.resolve(dir)),path.resolve(os.tmpdir()));fs.rmSync(dir,{recursive:true,force:true});
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
