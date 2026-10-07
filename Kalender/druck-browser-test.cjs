"use strict";
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||"playwright");
const assert=require("node:assert/strict");
const path=require("node:path");
const fs=require("node:fs");
const out=path.resolve(__dirname,"..",".codex-build","kalender-druck-qa"); fs.mkdirSync(out,{recursive:true});
const base=process.env.KALENDER_TEST_URL||"http://127.0.0.1:5187";
const e={id:"own7",lehrerId:"demo",lehrer:"Demo Lehrkraft",datum:"2026-10-08",klasse:"7aM",fach:"Deutsch",titel:"Erzählung",stunde:"2. Stunde"};
const events=[e,{...e,id:"own8",datum:"2026-10-16",klasse:"8c",fach:"Informatik",titel:"Netzwerke",stunde:"4. Stunde"},{...e,id:"own9",datum:"2026-10-23",klasse:"9d",fach:"Englisch",titel:"Unit 1",stunde:"1. Stunde"},{...e,id:"sep",datum:"2026-09-30",klasse:"7b",fach:"Mathematik",titel:"Monatsgrenze"},{...e,id:"nov",datum:"2026-11-18",fach:"Natur und Technik",titel:"November-Termin"},{...e,id:"foreign",lehrerId:"kollegin",lehrer:"Andere Lehrkraft",titel:"FREMDER_KALENDER_TERMIN"}];
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||"C:/Program Files/Google/Chrome/Application/chrome.exe"});
  try {
    const page=await browser.newPage({viewport:{width:1120,height:790}}),errors=[];
    page.on("pageerror",e=>errors.push(e.message));
    await page.route("**/api/kalender/liste",route=>route.fulfill({json:{ok:true,konto:{id:"demo",name:"Demo Lehrkraft"},eintraege:events,lehrer:[{id:"demo",name:"Demo Lehrkraft"},{id:"kollegin",name:"Andere Lehrkraft"}],klassen:["7aM","7b","8c","9d"],speicher:"datei",vorschau:true}}));
    await page.goto(base+"/kalender-verwalten.html");
    await page.locator('[name=benutzer]').fill("demo"); await page.locator('[name=passwort]').fill("Demo-2026!"); await page.getByRole("button",{name:"Anmelden",exact:true}).click();
    await page.locator(".gk-grid").waitFor();
    await page.locator(".gk-month").selectOption("2026-10"); await page.locator('[data-filter=class]').selectOption("7aM"); await page.locator('[data-filter=teacher]').selectOption("kollegin"); await page.locator('[data-search]').fill("FREMDER");
    await page.evaluate(()=>{window.print=()=>{window.__printCalled=(window.__printCalled||0)+1;window.dispatchEvent(new Event("beforeprint"));};});
    async function openPrint(year) {
      await page.getByRole("button",{name:"Meine Kalenderübersicht drucken",exact:true}).click();
      if(year) await page.locator('dialog [name=zeitraum]').selectOption("schuljahr");
      await page.locator('dialog').getByRole("button",{name:"Drucken",exact:true}).click();
    }
    await openPrint(false);
    assert.equal(await page.locator('.gkp-event').count(),3);
    for(const id of ["own7","own8","own9"]) assert.equal(await page.locator('[data-print-event="'+id+'"]').count(),1);
    assert.equal((await page.locator('.gk-print-root').textContent()).includes("FREMDER_KALENDER_TERMIN"),false);
    await page.emulateMedia({media:"print"}); await page.screenshot({path:path.join(out,"monat-screen.png"),fullPage:true});
    await page.pdf({path:path.join(out,"monat.pdf"),preferCSSPageSize:true,printBackground:true});
    await page.evaluate(()=>window.dispatchEvent(new Event("afterprint"))); await page.emulateMedia({media:"screen"});
    assert.equal(await page.locator('.gk-print-root').count(),0);
    assert.equal(await page.locator('[data-filter=class]').inputValue(),"7aM"); assert.equal(await page.locator('[data-filter=teacher]').inputValue(),"kollegin"); assert.equal(await page.locator('[data-search]').inputValue(),"FREMDER");
    console.log("Monatsdruck: nur eigene Termine, alle 3 Klassen trotz fremdem Bildschirmfilter; Filter nach Druck erhalten.");
    await openPrint(true); assert.equal(await page.locator('.gkp-month').count(),12); assert.equal(await page.locator('.gkp-event').count(),5);
    await page.emulateMedia({media:"print"}); await page.pdf({path:path.join(out,"schuljahr.pdf"),preferCSSPageSize:true,printBackground:true});
    await page.evaluate(()=>window.dispatchEvent(new Event("afterprint"))); await page.emulateMedia({media:"screen"});
    console.log("Schuljahresdruck: 12 Monatskalender, Monatsgrenze nicht doppelt, Ferien/Feiertage vorhanden.");
    await page.evaluate(()=>window.dispatchEvent(new Event("beforeprint"))); assert.equal(await page.locator('.gkp-month').count(),1);
    assert.equal(await page.locator('.gkp-event').count(),3); await page.evaluate(()=>window.dispatchEvent(new Event("afterprint")));
    console.log("Browser-Drucken/Ctrl+P: ebenfalls nur eigene Termine.");
    for(const width of [320,375,768]) {
      await page.setViewportSize({width,height:850}); await page.getByRole("button",{name:"Meine Kalenderübersicht drucken",exact:true}).click();
      const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth); assert.equal(overflow,false);
      await page.screenshot({path:path.join(out,"druck-dialog-"+width+".png"),fullPage:true}); await page.locator('[data-close]').click();
    }
    await page.setViewportSize({width:1120,height:790});
    await page.route('**/api/nt9/fortschritt/lehrer/liste',r=>r.fulfill({json:{ok:true,klassenInfo:[{klasse:'7aM',stufe:7,anzahl:1}],kurse:[],schueler:[{code:'101',klasse:'7aM'}],speicher:'upstash'}}));
    await page.route('**/api/vokabeltest/unlock',r=>r.fulfill({status:404,json:{ok:false,error:'Unknown test'}}));
    await page.route('**/api/proben/noten',r=>r.fulfill({json:{ok:true,proben:[],schueler:[],noten:[]}}));
    await page.goto(base+'/proben-verwalten.html');
    await page.locator('#pw').fill('Vorschau-2026!'); await page.locator('#btn-login').click();
    await page.locator('[data-ansicht=kalender]').click(); await page.locator('#vw-teil .gk-grid').waitFor();
    await page.locator('.gk-month').selectOption('2026-10');
    await page.evaluate(()=>{window.print=()=>window.dispatchEvent(new Event('beforeprint'));});
    await openPrint(false); assert.equal(await page.locator('.gkp-event').count(),3);
    await page.emulateMedia({media:'print'});
    assert.equal(await page.evaluate(()=>[...document.body.children].filter(n=>!n.classList.contains('gk-print-root')).every(n=>getComputedStyle(n).display==='none')),true);
    await page.screenshot({path:path.join(out,'verwaltung-druck.png'),fullPage:true});
    await page.evaluate(()=>window.dispatchEvent(new Event('afterprint'))); await page.emulateMedia({media:'screen'});
    assert.equal(await page.locator('.gk-print-root').count(),0);
    console.log('Verwaltungsbereich: ebenfalls alle eigenen Klassen, keine Verwaltungsdaten oder Zugangsfelder im Ausdruck.');
    const densePage=await browser.newPage({viewport:{width:1120,height:790}});
    await densePage.goto(base+"/kalender-verwalten.html");
    await densePage.evaluate((e)=>{
      const dense=Array.from({length:8},(_,i)=>({...e,id:"dense-"+i,titel:"DICHTE_PROBE_"+i+" "+"Langer Titel ".repeat(10)}));
      const node=document.createElement("div");node.className="gk-print-root";node.innerHTML=GrumiKalenderDruck.render({id:"demo",name:"Demo Lehrkraft"},dense,"2026-10",false);document.body.appendChild(node);document.body.classList.add("gk-print-mode");
    },e);
    await densePage.emulateMedia({media:"print"}); await densePage.pdf({path:path.join(out,"dichter-monat.pdf"),preferCSSPageSize:true,printBackground:true});
    assert.deepEqual(errors,[]); console.log("Mobile Druckauswahl und dichter Monat geprueft. PDFs: "+out);
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
