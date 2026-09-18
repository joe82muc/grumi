"use strict";

const {test,after} = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(),"nt7-test-"));
process.env.NT_DATA_DIR = dataDir;
process.env.TEACHER_PASSWORD = "test-teacher-secret";
delete process.env.ANTHROPIC_API_KEY;
const app = require("./server");
const server = app.listen(0);
const base = `http://127.0.0.1:${server.address().port}`;
const httpFetch = global.fetch;
after(() => { server.close(); fs.rmSync(dataDir,{recursive:true,force:true}); });

async function api(route, body) {
  const response = await httpFetch(base+"/api/nt7/"+route, body ? {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)} : {});
  return {status:response.status,data:await response.json()};
}

test("locked probes hide answers, then allow one graded submission", async () => {
  const list = await api("list");
  assert.equal(list.status,200);
  assert.equal(list.data.tests.length,2);
  assert.equal(list.data.tests[0].unlocked,false);

  const student = {testId:"nt7-luft-1",firstName:"Lena",lastName:"Beispiel",className:"7M"};
  assert.equal((await api("start",student)).status,403);
  assert.equal((await api("teacher/unlock",{password:"wrong",testId:student.testId,open:true})).status,401);
  assert.equal((await api("teacher/unlock",{password:process.env.TEACHER_PASSWORD,testId:student.testId,open:true})).status,200);

  const started = await api("start",student);
  assert.equal(started.status,200);
  assert.equal(started.data.items.length,10);
  assert.ok(!JSON.stringify(started.data).includes("expected"));
  assert.ok(!JSON.stringify(started.data).includes('"answer"'));
  assert.equal(started.data.items.filter(item => item.type === "match").length,3);

  const answers = [0,1,2,1,["78 %","21 %","1 %"],["Stickstoff","Sauerstoff","Kohlenstoffdioxid"],
    ["Luft nimmt Raum ein","Luft ist zusammendrückbar","Außenluft drückt ihn an"],
    "Ein Ballon zeigt, dass Luft Platz braucht. Luft hat auch Masse und lässt sich wiegen.",
    "Auf dem Berg liegt weniger Luft über uns, also drückt die kleinere Luftsäule weniger.",
    "Wind bewegt Rotorblätter, der Generator erzeugt Strom. Bei Windstille gibt es wenig Strom."];
  const submitted = await api("submit",{...student,answers});
  assert.equal(submitted.status,200);
  assert.equal(submitted.data.result.total,22);
  assert.equal(submitted.data.result.details[0].points,1);
  assert.equal(submitted.data.result.details[4].points,3);
  assert.equal(submitted.data.result.needsReview,true);
  assert.ok(submitted.data.result.details[0].expected);
  assert.equal((await api("submit",{...student,answers})).status,409);

  const results = await api("teacher/results",{password:process.env.TEACHER_PASSWORD});
  assert.equal(results.data.submissions.length,1);
  const id = results.data.submissions[0].id;
  assert.equal((await api("teacher/override",{password:process.env.TEACHER_PASSWORD,submissionId:id,nr:8,points:2})).status,200);
  assert.equal((await api("teacher/delete",{password:process.env.TEACHER_PASSWORD,submissionId:id})).status,200);
  assert.equal((await api("start",student)).status,200);
});

test("backend files are not served publicly", async () => {
  const response = await fetch(base+"/backend/questions.js");
  assert.equal(response.status,404);
});

test("probe 2 grades matching individually and uses AI for free text", async () => {
  process.env.ANTHROPIC_API_KEY = "test-key";
  global.fetch = async (url, options) => {
    if (String(url).startsWith("https://api.anthropic.com/")) {
      const body = JSON.parse(options.body);
      assert.match(body.system,/Rechtschreibung/);
      return {ok:true,json:async()=>({content:[{type:"text",text:'{"points":2,"comment":"Zwei Kriterien sind erfüllt."}'}]})};
    }
    return httpFetch(url,options);
  };
  try {
    await api("teacher/unlock",{password:process.env.TEACHER_PASSWORD,testId:"nt7-luft-2",open:true});
    const student = {testId:"nt7-luft-2",firstName:"=Mara",lastName:"Probe",className:"7M"};
    const started = await api("start",student);
    assert.equal(started.data.items[0].nr,1);
    assert.equal(started.data.items.filter(i=>i.image).length,3);
    const answers = [1,1,0,1,["Holz","Luftzufuhr","falsch"],["giftiges Gas","Treibhausgas","winzige Teilchen in der Luft"],
      ["Sauerstoff wird gebunden","Sauerstoff und Enzyme wirken zusammen","Sauerstoffzufuhr wird unterbrochen"],
      "Eine Löschdecke nimmt den Sauerstoff weg.","Eisen nimmt Sauerstoff auf und bildet Eisenoxid.","Kleine Teilchen aus Autoabgasen gelangen in die Atemwege."];
    const submitted = await api("submit",{...student,answers});
    assert.equal(submitted.status,200);
    assert.equal(submitted.data.result.details[4].points,2);
    assert.equal(submitted.data.result.details[7].source,"ki");
    assert.equal(submitted.data.result.details[7].points,2);
    assert.equal(submitted.data.result.needsReview,false);
    const csv = await httpFetch(base+"/api/nt7/teacher/export",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:process.env.TEACHER_PASSWORD,testId:"nt7-luft-2"})}).then(r=>r.text());
    assert.match(csv,/"'=Mara"/);
  } finally {
    global.fetch = httpFetch;
    delete process.env.ANTHROPIC_API_KEY;
  }
});
