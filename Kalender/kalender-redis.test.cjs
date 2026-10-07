"use strict";
const test=require("node:test"), assert=require("node:assert/strict"), crypto=require("node:crypto");
const {kalenderSpeicher}=require("./server/speicher");
const url=process.env.KALENDER_REDIS_TEST_URL;
if (!url) {
  test("Echte Redis-Lua-Pruefung (KALENDER_REDIS_TEST_URL setzen)",{skip:true},()=>{});
} else {
  assert.equal(new URL(url).hostname,"127.0.0.1","Nur einen lokalen Testserver verwenden");
  const {createClient}=require(process.env.KALENDER_REDIS_MODULE||"redis");
  const client=createClient({url,socket:{connectTimeout:5000,reconnectStrategy:false}});
  const prefix="grumi-test:"+crypto.randomBytes(16).toString("hex")+":";
  const event={datum:"2026-10-23",klasse:"7aM",fach:"Englisch",titel:"Unit 1",stunde:"5. Stunde",hinweis:"Test"};
  let n=0;
  client.on("error",()=>{});
  test.before(()=>client.connect());
  test.after(async()=>{
    if (client.isOpen) {
      await client.del((await client.keys(prefix+"*")).concat(prefix+"unused"));
      await client.quit();
    }
  });
  function fixture(beforeEval) {
    const p=prefix+(++n)+":", key=p+"termine";
    const options={prefix:p,redis:{url:"http://local-redis-test",token:"test"},fetch:async(_url,request)=>{
      const args=JSON.parse(request.body);
      if (args[0]==="EVAL" && beforeEval) await beforeEval(args,key);
      const result=await client.sendCommand(args.map(String));
      return {ok:true,json:async()=>({result})};
    }};
    return {key,a:kalenderSpeicher(options),b:kalenderSpeicher(options)};
  }
  test("Lua: getrennte Instanzen speichern denselben Termin nur einmal",async()=>{
    const {a,b}=fixture();
    assert.deepEqual((await Promise.all([a.save("a",null,event),b.save("b",null,event)])).sort(),[-1,1]);
    assert.equal((await a.all("termine")).length,1);
  });
  test("Lua: Speichern und Import sowie zwei UIDs gleichzeitig",async()=>{
    const {a,b}=fixture();
    const [saved,imported]=await Promise.all([a.save("a",null,event),b.import([{...event,id:"b",uid:"different"}])]);
    assert.equal((saved===1?1:0)+imported,1);
    const next={...event,titel:"Unit 2"};
    assert.equal((await Promise.all([a.import([{...next,id:"c"}]),b.import([{...next,id:"d"}])])).reduce((x,y)=>x+y),1);
    assert.equal((await a.all("termine")).length,2);
  });
  test("Lua: CAS und parallele Aenderungen auf denselben Fingerprint",async()=>{
    const {a,b}=fixture();
    assert.equal(await a.save("a",null,{...event,titel:"A"}),1);
    assert.equal(await b.save("b",null,{...event,titel:"B"}),1);
    const rawA=await a.raw("termine","a"), rawB=await b.raw("termine","b");
    assert.deepEqual((await Promise.all([a.save("a",rawA,event),b.save("b",rawB,event)])).sort(),[-1,1]);
    assert.equal(await a.save("a","stale",{...event,titel:"Other"}),0);
    const raw=await a.raw("termine","a");
    assert.equal(await a.cas("termine","a",raw,null),true);
    assert.equal(await b.save("c",null,JSON.parse(raw)),1);
  });
  test("Lua: Altbestand ohne Fingerprint mit Umlauten bleibt dedupliziert",async()=>{
    const {key,a}=fixture();
    const legacy={...event,id:"old",titel:"GRÖSSE ÜBEN"};
    await client.hSet(key,"old",JSON.stringify(legacy));
    assert.equal(await a.save("new",null,{...legacy,titel:"grösse üben"}),-1);
    assert.equal(await a.import([{...legacy,id:"imported",titel:"grösse üben"}]),0);
    assert.equal((await a.all("termine")).length,1);
    assert.equal(await a.save("old",JSON.stringify(legacy),{...legacy,hinweis:"Aktualisiert"}),1);
  });
  test("Lua: Altbestand aendert sich zwischen Snapshot und Mutation",async()=>{
    let injected=false;
    const {a}=fixture(async(_args,key)=>{
      if (!injected) {injected=true;await client.hSet(key,"legacy",JSON.stringify({...event,id:"legacy"}));}
    });
    assert.equal(await a.save("new",null,event),-1);
    assert.equal((await a.all("termine")).length,1);
  });
  test("Lua: instabiler Altbestand schreibt nach begrenzten Retries nichts",async()=>{
    let changes=0;
    const {a}=fixture(async(_args,key)=>{
      await client.hSet(key,"legacy",JSON.stringify({...event,id:"legacy",hinweis:"Version "+(++changes)}));
    });
    await assert.rejects(a.save("new",null,event),/gleichzeitig/);
    assert.equal(changes,4); assert.equal(await a.raw("termine","new"),null);
  });
  test("Lua: 5000-Limit atomar und Import ohne Teilbestand",async()=>{
    const {key,a,b}=fixture();
    const entries=Array.from({length:4999},(_,i)=>({id:"id"+i,...event,titel:"Test "+i}));
    assert.equal(await a.import(entries),4999);
    const results=await Promise.all([a.save("last-a",null,{...event,titel:"Last A"}),b.save("last-b",null,{...event,titel:"Last B"})]);
    assert.deepEqual(results.sort(),[-3,1]);assert.equal(await client.hLen(key),5000);
    const raw=await a.raw("termine","id0");
    assert.equal(await a.cas("termine","id0",raw,null),true);
    assert.equal(await a.import([{...event,id:"too-many-a",titel:"Extra A"},{...event,id:"too-many-b",titel:"Extra B"}]),-3);
    assert.equal(await client.hLen(key),4999);assert.equal(await a.raw("termine","too-many-a"),null);
  });
}
