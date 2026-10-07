"use strict";
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname,".."), out = path.join(root,".codex-build","kalender-qa");
fs.mkdirSync(out,{recursive:true});
const base = process.env.KALENDER_TEST_URL || "http://127.0.0.1:5187";
const supplied = path.join(__dirname,'Proben_bis_18_01_2027-2.ics');
const importFile = fs.existsSync(supplied) ? supplied : path.join(__dirname,'test-fixture.ics');
const importCount = fs.existsSync(supplied) ? 25 : 2;
async function noOverflow(page) {
  const size=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
  assert.ok(size.scroll<=size.width+1,JSON.stringify(size));
  const bad=await page.locator('.gk button,.gk input,.gk select').evaluateAll((nodes)=>nodes.filter((n)=>{
    const r=n.getBoundingClientRect();return r.width&&r.height&&(r.left<0||r.right>innerWidth+1);
  }).map(n=>n.outerHTML.slice(0,120)));
  assert.deepEqual(bad,[]);
}
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe"});
  try {
    const context=await browser.newContext({viewport:{width:1440,height:1000}}), page=await context.newPage(), errors=[];
    page.on('pageerror',(e)=>errors.push(e.message));
    await page.goto(base+'/kalender-verwalten.html');
    await page.locator('input[name=benutzer]').fill('demo');
    await page.locator('input[name=passwort]').fill('falsch');
    await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    await page.getByText('Benutzername oder Passwort stimmt nicht.',{exact:true}).waitFor();
    await page.locator('input[name=passwort]').fill('Demo-2026!');
    await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    await page.locator('.gk-grid').waitFor();
    assert.ok(await page.locator('.gk svg').count()>10,'Lucide icons render');
    await page.locator('[data-filter=class]').selectOption('7aM');
    await page.locator('.gk-month').selectOption('2026-10');
    await page.locator('[data-day="2026-10-20"]').first().click();
    await page.locator('.gk-aside').getByRole('button',{name:'Details',exact:true}).first().click();
    assert.equal(await page.locator('dialog').getByRole('button',{name:'Speichern',exact:true}).count(),0);
    await page.locator('[data-close]').click();
    await page.screenshot({path:path.join(out,'desktop.png'),fullPage:true});
    await noOverflow(page);
    console.log('Desktop: Login, Filter, Kollegium nur lesbar, Icons OK');

    await page.getByRole('button',{name:'Probe',exact:true}).click();
    const form=page.locator('dialog form');
    await form.locator('[name=datum]').fill('2026-11-18');
    await form.locator('[name=klasse]').fill('7aM');
    await form.locator('[name=fach]').fill('Mathematik');
    await form.locator('[name=titel]').fill('Browserprüfung');
    await form.locator('[name=stunde]').fill('2. Stunde');
    await form.locator('[name=hinweis]').fill('<script>alert("nicht ausführen")</script>');
    await page.locator('[data-warnings]').getByText('Buß- und Bettag · unterrichtsfrei',{exact:true}).waitFor();
    await form.locator('[name=bestaetigt]').check();
    await page.screenshot({path:path.join(out,'termin-dialog.png'),fullPage:true});
    await form.getByRole('button',{name:'Speichern',exact:true}).click();
    await page.getByText('Probe gespeichert.',{exact:true}).waitFor();
    await page.locator('.gk-aside').getByRole('button',{name:'Bearbeiten',exact:true}).click();
    await page.locator('dialog [name=titel]').fill('Browserprüfung bearbeitet');
    await page.locator('dialog [name=bestaetigt]').check();
    await page.locator('dialog').getByRole('button',{name:'Speichern',exact:true}).click();
    await page.getByText('Probe gespeichert.',{exact:true}).waitFor();
    await page.locator('.gk-aside').getByRole('button',{name:'Bearbeiten',exact:true}).click();
    page.once('dialog',d=>d.accept());
    await page.locator('[data-delete]').click();
    await page.getByText('Probe gelöscht.',{exact:true}).waitFor();
    console.log('Termin: Unterrichtsfrei-Warnung, Speichern, Bearbeiten, Löschen OK');

    await page.getByRole('button',{name:'Import',exact:true}).click();
    await page.locator('[data-file]').setInputFiles(importFile);
    await page.locator('[data-import-confirm]').waitFor();
    assert.equal(await page.locator('[data-row]').count(),importCount);
    await page.screenshot({path:path.join(out,'import-desktop.png'),fullPage:true});
    if (await page.locator('[data-row]:checked').count()) {
      await page.locator('[data-import-confirm]').check();
      await page.locator('[data-do-import]').click();
      await page.locator('[data-message]').filter({hasText:'Termine importiert'}).waitFor();
    } else {
      assert.equal(await page.locator('[data-row]:disabled').count(),importCount);
      assert.equal(await page.locator('[data-do-import]').isDisabled(),true);
      await page.locator('[data-close]').click();
    }
    await page.locator('.gk-month').selectOption('2026-10');
    await page.locator('[data-view=liste]').click();
    const downloadPromise=page.waitForEvent('download'); await page.getByRole('button',{name:'TXT exportieren',exact:true}).click();
    const download=await downloadPromise; assert.match(download.suggestedFilename(),/7aM\.txt$/);
    await page.locator('[data-view=monat]').click();
    console.log('ICS-Vorschau mit 25 Terminen, Import, Liste, TXT-Export OK');

    await page.getByRole('button',{name:'Zugänge',exact:true}).click();
    await page.locator('[data-admin-login] [name=password]').fill('Vorschau-2026!');
    await page.locator('[data-admin-login]').getByRole('button',{name:'Öffnen',exact:true}).click();
    await page.locator('.gk-account-form').waitFor();
    assert.equal(await page.locator('[data-edit-account]').count(),2);
    await page.locator('[data-close]').click();
    console.log('Zugangsverwaltung separat geschützt OK');

    for (const width of [320,375,768]) {
      await page.setViewportSize({width,height:900}); await noOverflow(page);
      await page.screenshot({path:path.join(out,'kalender-'+width+'.png'),fullPage:true});
    }
    await page.setViewportSize({width:375,height:812});
    await page.getByRole('button',{name:'Import',exact:true}).click();
    await page.locator('[data-file]').setInputFiles(path.join(__dirname,'import-vorlage.txt'));
    await page.locator('[data-import-confirm]').waitFor();
    await noOverflow(page); await page.screenshot({path:path.join(out,'import-mobile.png'),fullPage:true});
    await page.locator('[data-close]').click();
    console.log('320/375/768 px, Importdialog mobil ohne horizontalen Überlauf OK');

    const studentContext=await browser.newContext({viewport:{width:390,height:844}}), student=await studentContext.newPage();
    student.on('pageerror',e=>errors.push(e.message));
    await student.goto(base+'/kalender.html');
    await student.locator('input').first().fill('101');
    await student.locator('form').getByRole('button').click();
    await student.getByRole('heading',{name:'Proben · Klasse 7aM',exact:true}).waitFor();
    await student.locator('.gk-month').selectOption('2026-10');
    assert.equal(await student.locator('[data-action=new]').count(),0);
    assert.equal(await student.locator('[data-filter=class]').count(),0);
    const texts=await student.locator('.gk-event').allTextContents();
    assert.ok(texts.length>0); assert.ok(texts.every(x=>x.includes('7aM')));
    await noOverflow(student); await student.screenshot({path:path.join(out,'schueler-mobile.png'),fullPage:true});
    console.log('Schülercode 101: nur 7aM, keine Schreibrechte, mobile Ansicht OK');

    await page.setViewportSize({width:1280,height:1000});
    await page.route('**/api/nt9/fortschritt/lehrer/liste',r=>r.fulfill({json:{ok:true,klassenInfo:[{klasse:'7aM',stufe:7,anzahl:1}],kurse:[],schueler:[{code:'101',klasse:'7aM'}],speicher:'upstash'}}));
    await page.route('**/api/vokabeltest/unlock',r=>r.fulfill({status:404,json:{ok:false,error:'Unknown test'}}));
    await page.route('**/api/proben/noten',r=>r.fulfill({json:{ok:true,proben:[],schueler:[],noten:[]}}));
    await page.goto(base+'/proben-verwalten.html');
    await page.locator('#pw').fill('Vorschau-2026!'); await page.locator('#btn-login').click();
    await page.locator('[data-ansicht=kalender]').click();
    await page.locator('#vw-teil .gk-grid').waitFor();
    assert.equal(await page.locator('#vw-teil [data-filter=class]').inputValue(),'7aM');
    await page.screenshot({path:path.join(out,'verwaltung-integriert.png'),fullPage:true}); await noOverflow(page);
    await page.getByRole('button',{name:'Probe',exact:true}).click();
    await page.screenshot({path:path.join(out,'verwaltung-dialog.png'),fullPage:true});
    assert.deepEqual(errors,[],'Keine Browserfehler');
    console.log('Bestehende Verwaltung: Klassenreiter, Filter und Dialog integriert OK');
    console.log('Alle Browserprüfungen erfolgreich. Screenshots: '+out);
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
