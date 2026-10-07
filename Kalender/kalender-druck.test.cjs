"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const P=require("./kalender-druck");
const konto={id:"anna",name:"Anna"};
const e={id:"a",lehrerId:"anna",datum:"2026-10-15",klasse:"7aM",fach:"Deutsch",titel:"Erzählung",stunde:"2. Stunde"};
const events=[e,{...e,id:"b",klasse:"8c",fach:"Informatik"},{...e,id:"c",lehrerId:"ben",titel:"Fremde Probe"},{...e,id:"d",datum:"2026-09-30",klasse:"9d"},{...e,id:"f",datum:"2027-09-01"}];
test("Persoenliche Uebersicht: alle eigenen Klassen, keine fremden Termine",()=>{
  const list=P.eigene(konto,events);
  assert.deepEqual(list.map(x=>x.id),["d","a","b"]);
  const html=P.render(konto,events,"2026-10",false);
  assert.ok(html.includes('data-print-event="a"')); assert.ok(html.includes('data-print-event="b"'));
  assert.equal(html.includes("Fremde Probe"),false); assert.equal(html.includes('data-print-event="d"'),false);
  assert.equal((html.match(/data-print-month=/g)||[]).length,1);
});
test("Schuljahr: 12 Monate, Termin am Monatsrand nicht doppelt",()=>{
  const html=P.render(konto,events,"2026-10",true);
  assert.equal((html.match(/data-print-month=/g)||[]).length,12);
  for(const id of ["a","b","d"]) assert.equal((html.match(new RegExp('data-print-event="'+id+'"','g'))||[]).length,1);
  assert.equal(html.includes('data-print-event="f"'),false);
  assert.deepEqual(P.monate("2026-10",true).slice(-2),["2027-07","2027-08"]);
});
test("Kalendermarkierungen bleiben erhalten, leere Monate sind druckbar",()=>{
  const html=P.render(konto,[],"2026-11",false);
  assert.ok(html.includes("Buß- und Bettag")); assert.ok(html.includes("Herbstferien")); assert.ok(html.includes("Allerheiligen"));
  assert.ok(html.includes("Keine eigenen Termine in diesem Monat"));
});
test("Druckinhalt: keine ausfuehrbaren Namen oder Titel",()=>{
  const html=P.render({...konto,name:'<img src=x onerror=alert(1)>'},[{...e,titel:'<script>alert(1)</script>',klasse:'7aM & 8c'}],"2026-10",false);
  assert.equal(html.includes("<script>"),false); assert.equal(html.includes("<img"),false);
  assert.ok(html.includes("&lt;script&gt;")); assert.ok(html.includes("7aM &amp; 8c"));
});
test("Ungueltige Monate, fehlende Lehrkraft und falsche Datumsangaben abweisen",()=>{
  for(const month of ["2026-99","2026-08","2027-09","2026-2","abc"]) assert.throws(()=>P.monate(month,false),/Druckmonat/);
  assert.throws(()=>P.eigene(null,events),/Lehrkraft/);
  assert.throws(()=>P.eigene({id:""},events),/Lehrkraft/);
  assert.equal(P.eigene(konto,[{...e,datum:"2027-02-30"}]).length,0);
});
test("Keine Aenderung an Quelldaten oder deren Reihenfolge",()=>{
  const raw=JSON.stringify(events); P.render(konto,events,"2026-10",true);
  assert.equal(JSON.stringify(events),raw);
});
test("Viele Termine am selben Tag: kein Abschneiden nach zwei oder drei Proben",()=>{
  const es=Array.from({length:8},(_,i)=>({...e,id:"dense-"+i,titel:"Probe "+i}));
  const html=P.render(konto,es,"2026-10",false);
  assert.equal((html.match(/data-print-event=/g)||[]).length,8);
});
