"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");
const D = require("./kalender-daten");
const I = require("./kalender-import");
const { registerKalenderRoutes } = require("./server/kalender");
const { kalenderSpeicher } = require("./server/speicher");

test("Ferien inklusive Grenzen, Feiertage und Buss-/Bettag getrennt", () => {
  assert.equal(D.markierungen("2026-09-14")[0].art, "ferien");
  assert.equal(D.markierungen("2026-09-15").length, 0);
  assert.equal(D.markierungen("2027-01-08")[0].art, "ferien");
  assert.equal(D.markierungen("2027-01-09").length, 0);
  assert.equal(D.markierungen("2026-11-18")[0].art, "frei");
  assert.equal(D.markierungen("2026-11-19").length, 0);
  assert.equal(D.markierungen("2027-03-26").length, 2);
  assert.equal(D.markierungen("2027-08-15").length, 2);
  assert.equal(D.markierungen("2027-08-08").filter((m) => m.art === "feiertag").length, 0);
});
test("Datum und Klassennormalisierung", () => {
  assert.equal(D.datumOk("2027-02-29"), false);
  assert.equal(D.datumOk("2026-10-07"), true);
  assert.equal(D.klasse(" 7 A m "), "7aM");
  assert.equal(D.klasse("9dR"), "9d");
  assert.equal(D.klasse("7M"), "");
  assert.equal(D.plus("2026-12-31", 1), "2027-01-01");
});
test("TXT mit BOM, Kopfzeile, Anfuehrungszeichen, Semikolon im Feld", () => {
  const r = I.parse('\uFEFFDatum;Klasse;Fach;Titel;Stunde;Hinweis\r\n23.10.2026;7am;Deutsch;"Lesen; Schreiben";1.;"Text mit\nUmbruch"', "p.txt");
  assert.equal(r.length, 1); assert.equal(r[0].fehler, "");
  assert.equal(r[0].eintrag.datum, "2026-10-23");
  assert.equal(r[0].eintrag.titel, "Lesen; Schreiben");
  assert.equal(r[0].eintrag.hinweis, "Text mit\nUmbruch");
});
test("TXT ohne Kopfzeile mit Tab, Pipe und Komma", () => {
  for (const delimiter of ["\t", "|", ","]) {
    const r = I.parse(["2026-10-23", "7aM", "Englisch", "Unit 1", "5.", ""].join(delimiter), "p.txt");
    assert.equal(r[0].fehler, ""); assert.equal(r[0].eintrag.klasse, "7aM");
  }
});
test("Import meldet ungueltige Zeilen, Duplikate und Schuljahresgrenzen", () => {
  const r = I.parse("31.02.2027;7aM;Deutsch;Probe\n2026-08-31;7aM;Deutsch;Probe\n2026-10-23;7aM;Deutsch;Probe\n2026-10-23;7aM;Deutsch;Probe", "p.txt");
  assert.match(r[0].fehler, /Datum/); assert.match(r[1].fehler, /Außerhalb/);
  assert.equal(r[2].fehler, ""); assert.match(r[3].fehler, /Doppelt/);
  assert.throws(() => I.parse(" ", "p.txt"), /Keine Termine/);
  assert.throws(() => I.parse("x".repeat(1000001), "p.txt"), /1 MB/);
});
test("Mitgelieferte ICS: 25 Tagesproben, Faltung, Umlaute und Stunden", { skip:!fs.existsSync(path.join(__dirname, "Proben_bis_18_01_2027-2.ics")) }, () => {
  const r = I.parse(fs.readFileSync(path.join(__dirname, "Proben_bis_18_01_2027-2.ics"), "utf8"), "p.ics");
  assert.equal(r.length, 25); assert.equal(r.filter((e) => e.fehler).length, 0);
  assert.equal(r[0].eintrag.klasse, "9d"); assert.equal(r[0].eintrag.datum, "2026-10-23");
  assert.equal(r[0].eintrag.stunde, "1.–2. Stunde");
  assert.match(r[0].eintrag.hinweis, /Größe/); assert.match(r[0].eintrag.hinweis, /vorläufig/);
});
test("Synthetische ICS-Fixture: Faltung, Escape und Umlaute ohne Schuldaten", () => {
  const r = I.parse(fs.readFileSync(path.join(__dirname, "test-fixture.ics"), "utf8"), "p.ics");
  assert.equal(r.length, 2); assert.equal(r[0].fehler, "");
  assert.match(r[0].eintrag.hinweis, /Größe\nGefaltete Zeile/);
});
function ics(extra, start = "DTSTART;VALUE=DATE:20261023") {
  return "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\n" + start + "\r\nSUMMARY:7aM – Englisch – Test\r\n" + extra + "\r\nEND:VEVENT\r\nEND:VCALENDAR";
}
test("ICS: Serien, mehrtaegige Termine, UTC-Zeitzone ablehnen", () => {
  assert.match(I.parse(ics("RRULE:FREQ=WEEKLY"), "p.ics")[0].fehler, /Serientermin/);
  assert.match(I.parse(ics("DTEND;VALUE=DATE:20261025"), "p.ics")[0].fehler, /Mehrtagestermin/);
  assert.match(I.parse(ics("", "DTSTART:20261023T230000Z"), "p.ics")[0].fehler, /Zeitzone/);
  assert.match(I.parse(ics("", "DTSTART;TZID=America/New_York:20261023T090000"), "p.ics")[0].fehler, /Zeitzone/);
  assert.equal(I.parse(ics("", "DTSTART;TZID=Europe/Berlin:20261023T090000"), "p.ics")[0].fehler, "");
});
test("Windows-TXT: UTF-16 mit BOM und Windows-1252 korrekt dekodieren", () => {
  assert.equal(I.decode(Buffer.from([0xff,0xfe,0xfc,0x00])), "ü");
  assert.equal(I.decode(Buffer.from([0xfc])), "ü");
  assert.equal(I.decode(Buffer.from("Größe", "utf8")), "Größe");
});
test("Planungshinweise pro Klasse und Woche, eigenen Termin nicht mitzählen", () => {
  const e = { id:"a", datum:"2026-10-23", klasse:"7aM", fach:"Deutsch" };
  assert.equal(D.warnungen(e, [e]).length, 0);
  const w = D.warnungen(e, [e, { id:"b", datum:e.datum, klasse:e.klasse, fach:"Englisch" }, { id:"c", datum:"2026-10-20", klasse:e.klasse, fach:"NT" }, { id:"d", datum:e.datum, klasse:"8c", fach:"NT" }]);
  assert.equal(w.length, 2); assert.match(w[0], /Englisch/); assert.match(w[1], /2 weitere/);
});

async function fixture(t, overrides = {}) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "grumi-kalender-"));
  t.after(() => {
    if (path.dirname(path.resolve(dir)) !== path.resolve(os.tmpdir()) || !path.basename(dir).startsWith("grumi-kalender-")) throw new Error("Unsicherer Testdatenpfad");
    fs.rmSync(dir, { recursive:true, force:true });
  });
  const routes = new Map(), app = { post(name, fn) { routes.set(name, fn); } };
  const server = registerKalenderRoutes(app, { dataDir:dir, teacherPassword:"Admin-Test-Only", kindZumCode:async (c) => c === "101" ? { klasse:"7aM" } : c === "202" ? { klasse:"8c" } : c === "000" ? { lehrer:true } : c === "999" ? { gesperrt:true } : null, klassenLaden:async () => ["7aM", "8c"], ...overrides });
  async function post(name, body = {}, token, ip = "test") {
    let status = 200, data;
    const res = { set() {}, status(s) { status=s; return this; }, json(d) { data=d; return this; } };
    await routes.get("/api/kalender/"+name)({ body, headers:{ authorization:token?"Bearer "+token:"" }, ip }, res);
    return { status, ...data };
  }
  async function account(id, name) {
    assert.equal((await post("admin/speichern", { password:"Admin-Test-Only", benutzer:id, name, passwort:"Test-Password-42" })).status, 200);
    const login = await post("anmelden", { benutzer:id, passwort:"Test-Password-42" });
    assert.equal(login.status, 200); return login.token;
  }
  return { post, account, dir, store:server.store };
}
const exam = { datum:"2026-10-23", klasse:"7aM", fach:"Englisch", titel:"Unit 1", stunde:"5. Stunde", hinweis:"Üben", bestaetigt:true };
async function gleichzeitig(f, ...calls) {
  const all=f.store.all; let count=0, release;
  const gate=new Promise(resolve=>{release=resolve;});
  f.store.all=async bucket=>{
    const snapshot=await all(bucket);
    if (bucket==="termine" && ++count<=calls.length) {
      if (count===calls.length) release();
      await gate;
    }
    return snapshot;
  };
  try { return await Promise.all(calls.map(call=>call())); }
  finally { f.store.all=all; }
}
test("Gleichzeitige neue Termine zweier Lehrkraefte: nur ein Eintrag", {timeout:10000}, async t=>{
  const f=await fixture(t), a=await f.account("lehrer-a","A"), b=await f.account("lehrer-b","B");
  const results=await gleichzeitig(f,()=>f.post("speichern",exam,a),()=>f.post("speichern",exam,b));
  assert.deepEqual(results.map(r=>r.status).sort(),[200,409]);
  assert.match(results.find(r=>r.status===409).error,/bereits eingetragen/);
  assert.equal((await f.store.all("termine")).length,1);
  for (const response of [await f.post("liste",{},a),await f.post("klasse",{code:"101"})]) {
    assert.ok(response.eintraege.every(e=>e._finger===undefined));
  }
});
test("Speichern und Import gleichzeitig erzeugen keinen doppelten Termin", {timeout:10000}, async t=>{
  const f=await fixture(t), token=await f.account("lehrer","A");
  const [save,imported]=await gleichzeitig(f,()=>f.post("speichern",exam,token),()=>f.post("import",{bestaetigt:true,eintraege:[{...exam,uid:"parallel"}]},token));
  assert.ok([200,409].includes(save.status)); assert.equal(imported.status,200);
  assert.equal((save.status===200?1:0)+imported.anzahl,1);
  assert.equal((await f.store.all("termine")).length,1);
});
test("Parallele Importe mit verschiedenen UIDs deduplizieren den Inhalt", {timeout:10000}, async t=>{
  const f=await fixture(t), token=await f.account("lehrer","A");
  const results=await gleichzeitig(f,...["quelle-a","quelle-b"].map(uid=>()=>f.post("import",{bestaetigt:true,eintraege:[{...exam,uid}]},token)));
  assert.ok(results.every(r=>r.status===200));
  assert.equal(results.reduce((n,r)=>n+r.anzahl,0),1);
  assert.equal((await f.store.all("termine")).length,1);
});
test("Parallele Aenderungen verschiedener Termine duerfen nicht zusammenfallen", {timeout:10000}, async t=>{
  const f=await fixture(t), token=await f.account("lehrer","A");
  const a=(await f.post("speichern",{...exam,titel:"A"},token)).eintrag;
  const b=(await f.post("speichern",{...exam,titel:"B"},token)).eintrag;
  const results=await gleichzeitig(f,...[a,b].map(e=>()=>f.post("speichern",{...e,titel:"Gemeinsam",bestaetigt:true},token)));
  assert.deepEqual(results.map(r=>r.status).sort(),[200,409]);
  assert.equal((await f.store.all("termine")).filter(e=>e.titel==="Gemeinsam").length,1);
});
test("Aenderung oder Loeschung gibt den bisherigen Fingerprint wieder frei", async t=>{
  const f=await fixture(t), token=await f.account("lehrer","A");
  const a=(await f.post("speichern",exam,token)).eintrag;
  const changed=await f.post("speichern",{...a,titel:"Neuer Titel",bestaetigt:true},token);
  assert.equal(changed.status,200);
  assert.equal((await f.post("speichern",exam,token)).status,200);
  assert.equal((await f.post("loeschen",{id:a.id,version:changed.eintrag.version},token)).status,200);
  assert.equal((await f.post("speichern",{...exam,titel:"Neuer Titel"},token)).status,200);
});
test("Zugangsverwaltung geschuetzt, Passwort nur gehasht; Login case-insensitive", async (t) => {
  const f = await fixture(t);
  assert.equal((await f.post("admin/liste")).status, 401);
  const token = await f.account("lehrer", "Lehrkraft A");
  const k = JSON.parse(await f.store.raw("konten", "lehrer"));
  assert.ok(k.salt && k.hash); assert.equal(JSON.stringify(k).includes("Test-Password-42"), false);
  assert.equal((await f.post("anmelden", { benutzer:" LEHRER ", passwort:"Test-Password-42" })).status, 200);
  assert.equal((await f.post("liste")).status, 401);
  const list = await f.post("liste", {}, token); assert.deepEqual(list.klassen, ["7aM", "8c"]);
  assert.equal(JSON.stringify(list).includes(k.hash), false);
});
test("Gemeinsame Termine, Bearbeiten/Loeschen nur eigene; veraltete Version abweisen", async (t) => {
  const f = await fixture(t), a = await f.account("lehrer-a", "A"), b = await f.account("lehrer-b", "B");
  const save = await f.post("speichern", exam, a); assert.equal(save.status, 200);
  assert.equal((await f.post("liste", {}, b)).eintraege.length, 1);
  const event = save.eintrag;
  assert.equal((await f.post("speichern", { ...event, titel:"Fremd" }, b)).status, 403);
  assert.equal((await f.post("loeschen", { id:event.id, version:event.version }, b)).status, 403);
  const edit = await f.post("speichern", { ...event, titel:"Neu", bestaetigt:true }, a); assert.equal(edit.eintrag.version, 2);
  assert.equal((await f.post("speichern", { ...event, titel:"Veraltet" }, a)).status, 409);
  assert.equal((await f.post("loeschen", { id:event.id, version:1 }, a)).status, 409);
  assert.equal((await f.post("loeschen", { id:event.id, version:2 }, a)).status, 200);
});
test("Kind sieht nur serverseitige Code-Klasse, Lehrercode ist kein Schueler", async (t) => {
  const f = await fixture(t), a = await f.account("lehrer", "A");
  await f.post("speichern", exam, a); await f.post("speichern", { ...exam, klasse:"8c", titel:"Inf 8" }, a);
  const child = await f.post("klasse", { code:"101", klasse:"8c" });
  assert.equal(child.klasse, "7aM"); assert.equal(child.eintraege.length, 1);
  assert.equal(child.eintraege[0].klasse, "7aM"); assert.equal(child.eintraege[0].lehrerId, undefined);
  assert.equal((await f.post("klasse", { code:"000" })).status, 401);
  assert.equal((await f.post("klasse", { code:"999" })).status, 429);
  assert.equal((await f.post("klasse", { code:"404" })).status, 401);
});
test("Warnungen brauchen Bestaetigung; ungueltige Klassen/Daten ablehnen", async (t) => {
  const f = await fixture(t), token = await f.account("lehrer", "A");
  assert.equal((await f.post("speichern", { ...exam, datum:"2026-11-18", bestaetigt:false }, token)).status, 409);
  assert.equal((await f.post("speichern", { ...exam, datum:"2026-11-18" }, token)).status, 200);
  assert.equal((await f.post("speichern", { ...exam, datum:"2027-02-30" }, token)).status, 400);
  assert.equal((await f.post("speichern", { ...exam, klasse:"7M" }, token)).status, 400);
  assert.equal((await f.post("speichern", { ...exam, datum:"2027-09-01" }, token)).status, 400);
  assert.equal((await f.post("speichern", { ...exam, titel:"x".repeat(161) }, token)).status, 400);
});
test("Import geprueft, atomar bei Validierungsfehler, dedupliziert pro UID und Fingerprint", async (t) => {
  const f = await fixture(t), token = await f.account("lehrer", "A");
  assert.equal((await f.post("import", { eintraege:[exam] }, token)).status, 400);
  assert.equal((await f.post("import", { bestaetigt:true, eintraege:[exam, { ...exam, datum:"nope" }] }, token)).status, 400);
  assert.equal((await f.post("liste", {}, token)).eintraege.length, 0);
  const body = { bestaetigt:true, eintraege:[{ ...exam, uid:"source-1" }] };
  assert.equal((await f.post("import", body, token)).anzahl, 1);
  assert.equal((await f.post("import", body, token)).doppelt, 1);
  assert.equal((await f.post("import", { ...body, eintraege:[{ ...exam, uid:"source-1", datum:"2026-10-26" }] }, token)).anzahl, 0);
  assert.equal((await f.post("import", { ...body, eintraege:[{ ...exam, uid:"another" }] }, token)).anzahl, 0);
});
test("Deaktivierung/Passwortreset widerruft Sitzungen; keine doppelte Kontouerberschreibung", async (t) => {
  const f = await fixture(t), token = await f.account("lehrer", "A");
  const body = { password:"Admin-Test-Only", benutzer:"lehrer", name:"A", passwort:"Another-Password-42" };
  assert.equal((await f.post("admin/speichern", body)).status, 409);
  assert.equal((await f.post("admin/speichern", { ...body, version:1 })).status, 200);
  assert.equal((await f.post("liste", {}, token)).status, 401);
  const login = await f.post("anmelden", { benutzer:"lehrer", passwort:"Another-Password-42" });
  await f.post("admin/speichern", { ...body, version:2, aktiv:false });
  assert.equal((await f.post("liste", {}, login.token)).status, 401);
  assert.equal((await f.post("anmelden", { benutzer:"lehrer", passwort:"Another-Password-42" })).status, 401);
});
test("Eigenes Passwort aendern und Logout widerrufen Sitzung", async (t) => {
  const f = await fixture(t), token = await f.account("lehrer", "A");
  assert.equal((await f.post("passwort", { alt:"wrong", neu:"New-Password-42" }, token)).status, 401);
  assert.equal((await f.post("passwort", { alt:"Test-Password-42", neu:"New-Password-42" }, token)).status, 200);
  assert.equal((await f.post("liste", {}, token)).status, 401);
  const login = await f.post("anmelden", { benutzer:"lehrer", passwort:"New-Password-42" });
  await f.post("abmelden", {}, login.token); assert.equal((await f.post("liste", {}, login.token)).status, 401);
});
test("Login-Fehlversuche begrenzt", async (t) => {
  const f = await fixture(t);
  for (let i=0;i<10;i++) assert.equal((await f.post("anmelden", { benutzer:"unknown", passwort:"wrong" }, null, "bad-ip")).status, 401);
  assert.equal((await f.post("anmelden", { benutzer:"unknown", passwort:"wrong" }, null, "bad-ip")).status, 429);
});
test("Datei-Neustart behaelt Eintraege/Konten, konkurrierende CAS-Updates nur einmal", async (t) => {
  const f = await fixture(t), token = await f.account("lehrer", "A"); await f.post("speichern", exam, token);
  const again = kalenderSpeicher({ dataDir:f.dir }); assert.equal((await again.all("termine")).length, 1);
  const k = (await again.all("konten"))[0], raw = await again.raw("konten", k.id);
  const results = await Promise.all([again.cas("konten", k.id, raw, { ...k, name:"A1" }), again.cas("konten", k.id, raw, { ...k, name:"A2" })]);
  assert.deepEqual(results, [true,false]);
  assert.equal(await again.raw("konten", "constructor"), null);
  assert.equal(await again.raw("konten", "__proto__"), null);
});
test("Dateispeicher: Altbestand und doppelte IDs/Inhalte innerhalb eines Imports",async t=>{
  const f=await fixture(t), legacy={...exam,id:"old",titel:"GRÖSSE ÜBEN"};
  assert.equal(await f.store.cas("termine","old",null,legacy),true);
  assert.equal(await f.store.save("new",null,{...legacy,id:"new",titel:"grösse üben"}),-1);
  assert.equal(await f.store.import([{...exam,id:"a",titel:"A"},{...exam,id:"a",titel:"B"},{...exam,id:"b",titel:"A"}]),1);
  assert.equal((await f.store.all("termine")).length,2);
  assert.equal(JSON.parse(await f.store.raw("termine","a")).titel,"A");
});
test("Dateispeicher: parallele Kapazitaetsgrenze und kein teilweiser Import",async t=>{
  const f=await fixture(t);
  assert.equal(await f.store.import(Array.from({length:4999},(_,i)=>({...exam,id:"id"+i,titel:"Test "+i}))),4999);
  const results=await Promise.all([f.store.save("last-a",null,{...exam,id:"last-a",titel:"Last A"}),f.store.save("last-b",null,{...exam,id:"last-b",titel:"Last B"})]);
  assert.deepEqual(results.sort(),[-3,1]);
  const raw=await f.store.raw("termine","id0");assert.equal(await f.store.cas("termine","id0",raw,null),true);
  assert.equal(await f.store.import([{...exam,id:"extra-a",titel:"Extra A"},{...exam,id:"extra-b",titel:"Extra B"}]),-3);
  assert.equal((await f.store.all("termine")).length,4999);
  assert.equal(await f.store.raw("termine","extra-a"),null);
});
test("Upstash-Fehler: kein lokaler Fallback, keine Erfolgsmeldung", async (t) => {
  const f = await fixture(t, { redis:{ url:"https://test.upstash.io", token:"test" }, fetch:async () => { throw new Error("offline"); } });
  assert.equal((await f.post("admin/liste", { password:"Admin-Test-Only" })).status, 503);
  assert.equal(fs.existsSync(path.join(f.dir,"kalender-lokal.json")), false);
});
test("Redis-REST-Vertrag: geteilte Konten, Sitzungen, CAS und idempotenter Import", async (t) => {
  const hashes=new Map(), values=new Map();
  const mock=async (_url,options) => {
    assert.equal(options.method,"POST"); assert.equal(options.headers.Authorization,"Bearer test");
    const [cmd,...args]=JSON.parse(options.body); let result;
    function bucket(key) { if (!hashes.has(key)) hashes.set(key,new Map()); return hashes.get(key); }
    if (cmd==="HGET") result=bucket(args[0]).get(args[1])||null;
    else if (cmd==="HVALS") result=[...bucket(args[0]).values()];
    else if (cmd==="GET") result=values.get(args[0])||null;
    else if (cmd==="SET") { assert.equal(args[2],"EX"); assert.equal(args[3],28800); values.set(args[0],args[1]); result="OK"; }
    else if (cmd==="DEL") result=values.delete(args[0])?1:0;
    else if (cmd==="EVAL") {
      const [script,num,key,...params]=args; assert.equal(num,1); const b=bucket(key);
      if (script.startsWith("local old=")) {
        const [id,old,next]=params;
        result=(b.get(id)||"")===old?1:0;
        if (result) { if (next==="") b.delete(id); else b.set(id,next); }
      } else {
        const [legacyRaw,...rest]=params, legacy=JSON.parse(legacyRaw), fingerprints=new Map();
        for (const [id,raw] of b) {
          const e=JSON.parse(raw), fp=e._finger || legacy[crypto.createHash("sha1").update(raw).digest("hex")];
          assert.ok(fp); fingerprints.set(id,fp);
        }
        if (script.startsWith("-- grumi-save")) {
          const [id,old,next]=rest, fp=JSON.parse(next)._finger;
          result=(b.get(id)||"")!==old?0:[...fingerprints].some(([key,value])=>key!==id && value===fp)?-1:b.size>=5000&&!b.has(id)?-3:1;
          if (result===1) b.set(id,next);
        } else {
          assert.ok(script.startsWith("-- grumi-import"));
          const seen=new Set(fingerprints.values()), add=[];
          for (const [id,raw] of JSON.parse(rest[0])) {
            const fp=JSON.parse(raw)._finger;
            if (!b.has(id)&&!seen.has(fp)) { add.push([id,raw]); seen.add(fp); }
          }
          result=b.size+add.length>5000?-3:add.length;
          if (result>=0) for (const [id,raw] of add) b.set(id,raw);
        }
      }
    } else throw new Error("Unexpected Redis command: "+cmd);
    return {ok:true,json:async()=>({result})};
  };
  const f=await fixture(t,{redis:{url:"https://test.upstash.io",token:"test"},fetch:mock}), token=await f.account("lehrer","A");
  const second=kalenderSpeicher({redis:{url:"https://test.upstash.io",token:"test"},fetch:mock});
  assert.equal((await second.all("konten")).length,1);
  const first=await f.post("speichern",exam,token); assert.equal(first.status,200);
  const raw=await second.raw("termine",first.eintrag.id);
  assert.equal(await second.cas("termine",first.eintrag.id,"outdated",null),false);
  assert.equal(await second.cas("termine",first.eintrag.id,raw,null),true);
  const body={bestaetigt:true,eintraege:[{...exam,uid:"redis-test"}]};
  assert.equal((await f.post("import",body,token)).anzahl,1);
  assert.equal((await f.post("import",body,token)).doppelt,1);
  await f.post("abmelden",{},token); assert.equal((await f.post("liste",{},token)).status,401);
  assert.equal(fs.existsSync(path.join(f.dir,"kalender-lokal.json")),false);
});
