"use strict";
const path = require("node:path");
let express;
try { express = require("express"); }
catch (_) { express = require("../.codex-build/englisch_9-deploy/backend/node_modules/express"); }
const { registerKalenderRoutes } = require("./server/kalender");
const { registerKlasseRoutes } = require("../.codex-build/englisch_9-deploy/backend/api/klasse");
const app = express(), root = path.resolve(__dirname,".."), port = Number(process.env.KALENDER_PORT || 5187);
const admin = process.env.KALENDER_DEMO_ADMIN || "Vorschau-2026!";
const demoPass = "Demo-2026!";
const child = async (code) => code === "101" ? { code, klasse:"7aM", zug:"7M" } : code === "202" ? { code, klasse:"8c", zug:"8R" } : code === "000" ? { code, lehrer:true, klasse:"Lehrkraft" } : null;
app.use(express.json({ limit:"1mb" }));
app.use((_req,res,next) => { res.set("X-Content-Type-Options","nosniff"); next(); });
const dataDir=process.env.KALENDER_DEMO_DATADIR || path.join(root,".codex-build","kalender-vorschau");
const kalender=registerKalenderRoutes(app,{ dataDir, teacherPassword:admin, kindZumCode:child, klassenLaden:async () => ["7aM","7b","7c","7d","8b","8c","9aM","9d"], vorschau:true });
registerKlasseRoutes(app,{ dataDir, teacherPassword:admin, kindZumCode:child, kalenderTermine:(klasse) => kalender.heft(klasse) });
app.post("/api/nt9/fortschritt/anmelden", async (req,res) => {
  const k = await child(req.body.code);
  res.status(k&&!k.lehrer?200:401).json(k&&!k.lehrer?{ok:true,...k,fortschritt:{}}:{ok:false,error:"Lokale Vorschau: Schülercode 101 (7aM) oder 202 (8c)."});
});
app.use((req,res,next) => {
  if (/^\/(\.codex-build|\.git|Kalender\/server|Kalender\/.*\.ics|9M\/Englisch_9\/backend)(\/|$)/i.test(req.path)) return res.sendStatus(404);
  next();
});
app.use(express.static(root,{ dotfiles:"deny", index:false }));
app.get("/",(_req,res)=>res.redirect("/kalender-verwalten.html"));
app.listen(port,"127.0.0.1",async () => {
  const base="http://127.0.0.1:"+port;
  async function post(route,body,token) { const r=await fetch(base+"/api/kalender/"+route,{method:"POST",headers:{"Content-Type":"application/json",...(token?{Authorization:"Bearer "+token}:{})},body:JSON.stringify(body)});return r.json(); }
  try {
    const existing=await post("admin/liste",{password:admin});
    for (const [id,name] of [["demo","Demo Lehrkraft"],["kollegin","Demo Kollegium"]]) {
      if (!existing.konten.some((k)=>k.id===id)) await post("admin/speichern",{password:admin,benutzer:id,name,passwort:demoPass});
      const login=await post("anmelden",{benutzer:id,passwort:demoPass});
      if (login.ok) {
        const event=id==="demo"?{datum:"2026-10-23",klasse:"7aM",fach:"Englisch",titel:"Unit 1",stunde:"5. Stunde",hinweis:"Vokabeln und Grammatik"}:{datum:"2026-10-20",klasse:"7aM",fach:"Deutsch",titel:"Erzählung",stunde:"1.–2. Stunde",hinweis:"Schreibplan und Überarbeitung"};
        await post("import",{eintraege:[event],bestaetigt:true},login.token);
        await post("abmelden",{},login.token);
      }
    }
    console.log("Lokale Vorschau: "+base+"/kalender-verwalten.html");
    console.log("Lehrkraft: demo oder kollegin / "+demoPass+" · Verwaltung: "+admin+" · Schüler: 101 oder 202");
  } catch(e) { console.error("Vorschau konnte nicht initialisiert werden:",e.message); }
});
