/* GRUMI-SCRATCH (Informatik 9): ein eigener Blockeditor mit Bühne. Alle Blöcke und die Figur sind selbst gezeichnet
 * (HTML, CSS, SVG) – keine Grafiken, Namen oder Formen-Dateien von Scratch. Ein Programm ist eine Liste von Blöcken,
 * jeder Block eine Liste (wie in ../../8M/Informatik/scratch.js, dort steht auch die Beschreibung des Rechnens).
 * Einbinden nach themen.js, modul-basis.js, praxis.js und info9.js; dazu bloecke9.css. Ausführliche Beschreibung:
 * progress/informatik9/baustein_bloecke9.md
 *
 *   Modul.blockEditor(el, cfg)             Editor mit Palette, Arbeitsbereich und Bühne → { programm(), setze(p), starte(opt),
 *                                          stopp(), zuruecksetzen(), lauf(opt), laeuft(), auswahl() }
 *   Modul.makeBlockAufgabe(el, cfg, id)    Aufgabe mit Editor, „Prüfen“, „Zurücksetzen“, Rückmeldung und Musterlösung
 *   Modul.blockBild(el, programm)          nur die gezeichneten Blöcke (für Erklärungen)
 *   Modul.blockLauf(programm, opt)         Programm ohne Editor und ohne Bühne ausführen (wie e.lauf)
 *   Modul.blockHat / blockAnzahl / blockGleich / blockListe    Hilfen für Prüfungen
 *
 * Programm: ["flagge"] ["gehe",n] ["drehe",grad] ["richtung",grad] ["geheZu",x,y] ["aendereX",n] ["aendereY",n]
 *   ["sage",w] ["sageFuer",w,sek] ["denke",w] ["groesse",n] ["aendereGroesse",n] ["kostuem",name] ["naechstesKostuem"]
 *   ["zeige"] ["verstecke"] ["warte",sek] ["frage",text] ["setze","name",w] ["aendere","name",w] ["mal",n,[bl]]
 *   ["bis",bed,[bl]] ["falls",bed,[bl]] ["fallsSonst",bed,[bl],[bl]] ["definiere","name",[bl]] ["rufe","name"]
 * Werte: Zahl/Text, ["antwort"], ["var","name"], ["+"|"-"|"*"|"/",a,b], ["verbinde",a,b], ["zufall",von,bis], ["xPos"], ["yPos"]
 * Bedingungen: ["=",a,b] ["<",a,b] [">",a,b] ["und",b1,b2] ["oder",b1,b2] ["nicht",b]
 * Ein Stapel beginnt mit einem Kopfblock („flagge“ oder „definiere“) und reicht bis zum nächsten Kopfblock.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve, load, save} = M;
M.loeser = M.loeser || {};
let zaehler = 0;

/* ================= Farben, Blockarten ================= */
const GRUPPEN = {
  ereignis: {name: "Ereignisse", c: "#f2b01e", t: "#3a2a00"},
  bewegung: {name: "Bewegung", c: "#2f6fe0", t: "#ffffff"},
  aussehen: {name: "Aussehen", c: "#8a4fd6", t: "#ffffff"},
  steuerung: {name: "Steuerung", c: "#ee8a2a", t: "#3a2000"},
  fuehlen: {name: "Fühlen", c: "#0f8199", t: "#ffffff"},
  variablen: {name: "Variablen", c: "#d6453b", t: "#ffffff"},
  eigene: {name: "Meine Blöcke", c: "#c0398a", t: "#ffffff"},
  rechnen: {name: "Rechnen", c: "#2a8f46", t: "#ffffff"}
};
const ICO = {i: "start"};
const DEF = {
  flagge: {g: "ereignis", hut: 1, et: ["Wenn", ICO, "Start angeklickt wird"], neu: () => []},
  definiere: {g: "eigene", hut: 1, art: "c", et: ["Definiere", {eig: 1}], neu: c => [c.eigene[0] || "block", []]},
  gehe: {g: "bewegung", et: ["gehe", {z: 1}, "Schritte"], neu: () => [10]},
  drehe: {g: "bewegung", et: ["drehe dich um", {z: 1}, "Grad ↻"], neu: () => [15]},
  richtung: {g: "bewegung", et: ["setze Richtung auf", {z: 1}, "Grad"], neu: () => [90]},
  geheZu: {g: "bewegung", et: ["gehe zu x:", {z: 1}, "y:", {z: 2}], neu: () => [0, 0]},
  aendereX: {g: "bewegung", et: ["ändere x um", {z: 1}], neu: () => [10]},
  aendereY: {g: "bewegung", et: ["ändere y um", {z: 1}], neu: () => [10]},
  sage: {g: "aussehen", et: ["sage", {t: 1}], neu: () => ["Hallo!"]},
  sageFuer: {g: "aussehen", et: ["sage", {t: 1}, "für", {z: 2}, "Sekunden"], neu: () => ["Hallo!", 2]},
  denke: {g: "aussehen", et: ["denke", {t: 1}], neu: () => ["Hmm …"]},
  groesse: {g: "aussehen", et: ["setze Größe auf", {z: 1}, "%"], neu: () => [100]},
  aendereGroesse: {g: "aussehen", et: ["ändere Größe um", {z: 1}], neu: () => [10]},
  kostuem: {g: "aussehen", et: ["wechsle zu Kostüm", {kost: 1}], neu: c => [c.kostueme[0]]},
  naechstesKostuem: {g: "aussehen", et: ["wechsle zum nächsten Kostüm"], neu: () => []},
  zeige: {g: "aussehen", et: ["zeige dich"], neu: () => []},
  verstecke: {g: "aussehen", et: ["verstecke dich"], neu: () => []},
  warte: {g: "steuerung", et: ["warte", {z: 1}, "Sekunden"], neu: () => [1]},
  mal: {g: "steuerung", art: "c", et: ["wiederhole", {z: 1}, "mal"], neu: () => [5, []]},
  bis: {g: "steuerung", art: "c", et: ["wiederhole bis", {bed: 1}], neu: c => [c.stdBed(), []]},
  falls: {g: "steuerung", art: "c", et: ["falls", {bed: 1}, "dann"], neu: c => [c.stdBed(), []]},
  fallsSonst: {g: "steuerung", art: "cs", et: ["falls", {bed: 1}, "dann"], neu: c => [c.stdBed(), [], []]},
  frage: {g: "fuehlen", et: ["frage", {t: 1}, "und warte"], neu: () => ["Wie heißt du?"]},
  setze: {g: "variablen", et: ["setze", {var: 1}, "auf", {t: 2}], neu: c => [c.variablen[0] || "punkte", 0]},
  aendere: {g: "variablen", et: ["ändere", {var: 1}, "um", {z: 2}], neu: c => [c.variablen[0] || "punkte", 1]},
  rufe: {g: "eigene", et: ["führe", {eig: 1}, "aus"], neu: c => [c.eigene[0] || "block"]}
};
const REIHE = ["flagge", "gehe", "drehe", "richtung", "geheZu", "aendereX", "aendereY", "sage", "sageFuer", "denke", "groesse", "aendereGroesse",
  "kostuem", "naechstesKostuem", "zeige", "verstecke", "warte", "mal", "bis", "falls", "fallsSonst", "frage", "setze", "aendere", "definiere", "rufe"];
const WERTE = ["antwort", "var", "+", "-", "*", "/", "verbinde", "zufall", "xPos", "yPos"];
const OPS = {"+": "+", "-": "−", "*": "·", "/": ":"};
const KOSTUEME = ["froh", "staunend"];

/* ================= Rechnen wie Scratch ================= */
const alsZahl = v => { const n = typeof v === "number" ? v : parseFloat(String(v == null ? "" : v).trim().replace(",", ".")); return Number.isFinite(n) ? n : 0; };
const istZahl = v => typeof v === "number" ? Number.isFinite(v) : (String(v == null ? "" : v).trim() !== "" && Number.isFinite(Number(String(v).trim().replace(",", "."))));
const rund = n => Number.isFinite(n) ? Math.round(n * 1e6) / 1e6 : n;
const txt = v => v == null ? "" : typeof v === "number" ? String(rund(v)) : String(v);
const klemme = (v, a, b) => Math.max(a, Math.min(b, v));
const norm = r => rund(((r + 179) % 360 + 360) % 360 - 179);
const klon = o => JSON.parse(JSON.stringify(o));
function vergleich(a, b) {
  if (istZahl(a) && istZahl(b)) return alsZahl(a) - alsZahl(b);
  const x = txt(a).toLowerCase(), y = txt(b).toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
}
const GRENZ = {grenze: true};
const W = (art, ms) => ({t: "w", art, ms});
const istKopf = b => Array.isArray(b) && (b[0] === "flagge" || b[0] === "definiere");

/* ================= Der Interpreter (ein Generator für Ablauf mit und ohne Animation) ================= */
function neuerZustand(cfg) {
  const b = (cfg && cfg.buehne) || {}, k = cfg && cfg.kostueme && cfg.kostueme.length ? cfg.kostueme : KOSTUEME, v = {};
  ((cfg && cfg.variablen) || []).forEach(n => { v[n] = 0; });
  return {x: b.x || 0, y: b.y || 0, richtung: b.richtung == null ? 90 : b.richtung, groesse: 100, kostuem: b.kostuem || k[0], sichtbar: true, blase: "", denkt: false,
    vars: v, gesagt: [], fragen: [], schritte: 0, ende: ""};
}
function wert(v, cx) {
  if (!Array.isArray(v)) return v;
  const S = cx.S, [t, a, b] = v;
  switch (t) {
    case "antwort": return cx.antwort;
    case "var": return a in S.vars ? S.vars[a] : 0;
    case "xPos": return S.x;
    case "yPos": return S.y;
    case "verbinde": return txt(wert(a, cx)) + txt(wert(b, cx));
    case "+": return rund(alsZahl(wert(a, cx)) + alsZahl(wert(b, cx)));
    case "-": return rund(alsZahl(wert(a, cx)) - alsZahl(wert(b, cx)));
    case "*": return rund(alsZahl(wert(a, cx)) * alsZahl(wert(b, cx)));
    case "/": return rund(alsZahl(wert(a, cx)) / alsZahl(wert(b, cx)));
    case "zufall": {
      let u = alsZahl(wert(a, cx)), o = alsZahl(wert(b, cx)); if (u > o) [u, o] = [o, u];
      if (cx.zufall) return cx.zufall(u, o);
      return Number.isInteger(u) && Number.isInteger(o) ? u + Math.floor(Math.random() * (o - u + 1)) : rund(u + Math.random() * (o - u));
    }
    case "=": return vergleich(wert(a, cx), wert(b, cx)) === 0;
    case "<": return vergleich(wert(a, cx), wert(b, cx)) < 0;
    case ">": return vergleich(wert(a, cx), wert(b, cx)) > 0;
    case "und": return !!wert(a, cx) && !!wert(b, cx);
    case "oder": return !!wert(a, cx) || !!wert(b, cx);
    case "nicht": return !wert(a, cx);
    default: return "";
  }
}
function* reihe(liste, von, bis, pf, cx) {
  for (let i = von; i < bis; i++) { if (cx.stopp) return; yield* block(liste[i], pf + i, cx); }
}
function* block(b, pfad, cx) {
  if (!Array.isArray(b)) return;
  const S = cx.S, [t, a, c, d] = b, w = v => wert(v, cx);
  if (++S.schritte > cx.max) throw GRENZ;
  if (cx.marke) cx.marke(pfad);
  const kurz = () => W("bew", 220);
  switch (t) {
    case "flagge": case "definiere": break;
    case "gehe": {
      const n = alsZahl(w(a)), r = S.richtung * Math.PI / 180;
      S.x = klemme(rund(S.x + n * Math.sin(r)), -240, 240); S.y = klemme(rund(S.y + n * Math.cos(r)), -180, 180);
      const ms = klemme(Math.abs(n) * 8, 200, 450); cx.zeichne(ms); yield W("bew", ms + 40); break;
    }
    case "drehe": S.richtung = norm(S.richtung + alsZahl(w(a))); cx.zeichne(300); yield W("bew", 340); break;
    case "richtung": S.richtung = norm(alsZahl(w(a))); cx.zeichne(300); yield W("bew", 340); break;
    case "geheZu": S.x = klemme(alsZahl(w(a)), -240, 240); S.y = klemme(alsZahl(w(c)), -180, 180); cx.zeichne(350); yield W("bew", 390); break;
    case "aendereX": S.x = klemme(rund(S.x + alsZahl(w(a))), -240, 240); cx.zeichne(300); yield W("bew", 340); break;
    case "aendereY": S.y = klemme(rund(S.y + alsZahl(w(a))), -180, 180); cx.zeichne(300); yield W("bew", 340); break;
    case "sage": case "denke": { const v = txt(w(a)); S.blase = v; S.denkt = t === "denke"; if (v !== "") S.gesagt.push(v); cx.zeichne(0); yield W("bew", 260); break; }
    case "sageFuer": {
      const v = txt(w(a)); S.blase = v; S.denkt = false; if (v !== "") S.gesagt.push(v); cx.zeichne(0);
      yield W("zeit", Math.min(10, Math.max(0, alsZahl(w(c)))) * 1000); S.blase = ""; cx.zeichne(0); break;
    }
    case "groesse": S.groesse = klemme(alsZahl(w(a)), 5, 400); cx.zeichne(250); yield W("bew", 290); break;
    case "aendereGroesse": S.groesse = klemme(rund(S.groesse + alsZahl(w(a))), 5, 400); cx.zeichne(250); yield W("bew", 290); break;
    case "kostuem": S.kostuem = String(a); cx.zeichne(0); yield kurz(); break;
    case "naechstesKostuem": { const k = cx.kostueme, i = k.indexOf(S.kostuem); S.kostuem = k[(i + 1) % k.length]; cx.zeichne(0); yield kurz(); break; }
    case "zeige": S.sichtbar = true; cx.zeichne(0); yield kurz(); break;
    case "verstecke": S.sichtbar = false; cx.zeichne(0); yield kurz(); break;
    case "warte": yield W("zeit", Math.min(10, Math.max(0, alsZahl(w(a)))) * 1000); break;
    case "frage": {
      const q = txt(w(a)); S.fragen.push(q); S.blase = q; S.denkt = false; cx.zeichne(0);
      const r = yield {t: "f", text: q}; cx.antwort = r == null ? "" : String(r); S.blase = ""; cx.zeichne(0); break;
    }
    case "setze": S.vars[a] = w(c); cx.zeichne(0); yield kurz(); break;
    case "aendere": S.vars[a] = rund(alsZahl(a in S.vars ? S.vars[a] : 0) + alsZahl(w(c))); cx.zeichne(0); yield kurz(); break;
    case "mal": {
      const n = Math.max(0, Math.round(alsZahl(w(a)))); yield W("bew", 120);
      for (let i = 0; i < n; i++) {
        if (cx.stopp) return;
        yield* reihe(c || [], 0, (c || []).length, pfad + ".c.", cx);
        if (++S.schritte > cx.max) throw GRENZ;
        yield W("schleife", 40);
      }
      break;
    }
    case "bis": {
      yield W("bew", 120);
      while (!w(a)) {
        if (cx.stopp) return;
        yield* reihe(c || [], 0, (c || []).length, pfad + ".c.", cx);
        if (++S.schritte > cx.max) throw GRENZ;
        yield W("schleife", 40);
      }
      break;
    }
    case "falls": yield W("bew", 260); if (w(a)) yield* reihe(c || [], 0, (c || []).length, pfad + ".c.", cx); break;
    case "fallsSonst": {
      yield W("bew", 260);
      if (w(a)) yield* reihe(c || [], 0, (c || []).length, pfad + ".c.", cx); else yield* reihe(d || [], 0, (d || []).length, pfad + ".e.", cx);
      break;
    }
    case "rufe": {
      const df = cx.defs[a]; yield kurz();
      if (df) { if (++cx.tiefe > 40) throw GRENZ; yield* reihe(df.liste, 0, df.liste.length, df.pfad, cx); cx.tiefe--; }
      break;
    }
    default: break;
  }
}
function* haupt(prog, cx) {
  const defs = cx.defs = {}, starts = [];
  prog.forEach((b, i) => { if (Array.isArray(b) && b[0] === "definiere") defs[b[1]] = {liste: Array.isArray(b[2]) ? b[2] : [], pfad: i + ".c."}; if (Array.isArray(b) && b[0] === "flagge") starts.push(i); });
  if (!starts.length) { cx.S.ende = "keinStart"; return; }
  for (const i of starts) {
    let j = i + 1; while (j < prog.length && !istKopf(prog[j])) j++;
    yield* reihe(prog, i, j, "", cx);
  }
}
function abbild(S) {
  return {x: rund(S.x), y: rund(S.y), richtung: rund(S.richtung), groesse: rund(S.groesse), kostuem: S.kostuem, sichtbar: S.sichtbar, blase: S.blase, gesagt: S.gesagt.slice(),
    variablen: Object.assign({}, S.vars), fragen: S.fragen.slice(), schritte: S.schritte, ende: S.ende};
}
function neuerKontext(cfg, S, opt) {
  return {S, antwort: "", stopp: false, tiefe: 0, defs: {}, max: opt.grenze || 20000, zufall: opt.zufall, vorrat: (opt.antworten || []).slice(),
    kostueme: cfg && cfg.kostueme && cfg.kostueme.length ? cfg.kostueme : KOSTUEME, zeichne: () => {}, marke: null};
}
function lauf(programm, cfg, opt) {
  opt = opt || {};
  const S = neuerZustand(cfg), cx = neuerKontext(cfg, S, opt);
  try {
    const gen = haupt(programm, cx); let r = gen.next();
    while (!r.done) {
      let rueck;
      if (r.value && r.value.t === "f") { rueck = cx.vorrat.length ? cx.vorrat.shift() : ""; if (typeof rueck === "function") rueck = rueck(S.vars); }
      r = gen.next(rueck);
    }
    if (!S.ende) S.ende = "fertig";
  } catch (e) { if (e === GRENZ) S.ende = "grenze"; else throw e; }
  return abbild(S);
}

/* ================= Hilfen für Prüfungen ================= */
const arme = b => [b[2], b[3]].filter(Array.isArray);
function blockAnzahl(p, typ) { let n = 0; (p || []).forEach(b => { if (!Array.isArray(b)) return; if (b[0] === typ) n++; if (DEF[b[0]] && DEF[b[0]].art) arme(b).forEach(l => { n += blockAnzahl(l, typ); }); }); return n; }
const blockHat = (p, typ) => blockAnzahl(p, typ) > 0;
function blockListe(p) { const r = []; (p || []).forEach(b => { if (!Array.isArray(b)) return; r.push(b[0]); if (DEF[b[0]] && DEF[b[0]].art) arme(b).forEach(l => r.push(...blockListe(l))); }); return r; }
function gleich(a, b) {
  if (Array.isArray(a) || Array.isArray(b)) return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((x, i) => gleich(x, b[i]));
  if (a === b) return true;
  if (istZahl(a) && istZahl(b)) return alsZahl(a) === alsZahl(b);
  return txt(a) === txt(b);
}
const blockGleich = (p, soll) => gleich(p, soll);
function istProgramm(p) {
  return Array.isArray(p) && p.every(b => Array.isArray(b) && typeof b[0] === "string" && DEF[b[0]] && (!DEF[b[0]].art || (Array.isArray(b[2]) && istProgramm(b[2]) && (DEF[b[0]].art !== "cs" || (Array.isArray(b[3]) && istProgramm(b[3]))))));
}

/* ================= Zeichnen der Blöcke ================= */
const ICON_START = '<svg class="bl9-ico" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#fff"/><path d="M7.4 5.2l7.2 4.8-7.2 4.8z" fill="#1c9a55"/></svg>';
const klar = h => String(h).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
function figurSvg(i) {
  const gruen = i % 2 === 1;
  const koerper = gruen ? "#27a36b" : "#2f7be6", rand = gruen ? "#166b45" : "#1a4fa6", ball = gruen ? "#ff4f8b" : "#ff7a1a";
  const augen = gruen
    ? '<circle cx="33" cy="29" r="4.6" fill="#fff" stroke="#14233a" stroke-width="1.6"/><circle cx="44" cy="29" r="4.6" fill="#fff" stroke="#14233a" stroke-width="1.6"/><circle cx="34.2" cy="29" r="2.2" fill="#14233a"/><circle cx="45.2" cy="29" r="2.2" fill="#14233a"/><ellipse cx="39" cy="39.5" rx="3.4" ry="4" fill="#14233a"/><path d="M12 14l-5-4M9 22H3" stroke="#14233a" stroke-width="2" stroke-linecap="round" fill="none"/>'
    : '<circle cx="33" cy="29" r="3.2" fill="#14233a"/><circle cx="44" cy="29" r="3.2" fill="#14233a"/><path d="M32 37q7 6 14 0" fill="none" stroke="#14233a" stroke-width="2.4" stroke-linecap="round"/>';
  return `<svg viewBox="0 0 66 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><line x1="20" y1="12" x2="17" y2="4" stroke="#44546a" stroke-width="2.5" stroke-linecap="round"/><circle cx="17" cy="4" r="3.4" fill="${ball}"/>
    <circle cx="27" cy="33" r="21" fill="${koerper}" stroke="${rand}" stroke-width="2.5"/><rect x="23" y="19" width="26" height="25" rx="9" fill="#eaf4ff" stroke="${rand}" stroke-width="2"/>${augen}
    <path d="M51 22l10 10-10 10z" fill="#ff7a1a" stroke="#c4560a" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
}

// o: { modus: "arbeit" | "stat", kontext: Einstellungen des Editors, auswahl, marke }
function ausdrucksArt(v) { return Array.isArray(v) ? v[0] : null; }
function wertHtml(v, adr, art, o) {
  if (Array.isArray(v)) return ausdruck(v, adr, o, art);
  const s = v == null ? "" : String(v), klasse = art === "z" ? "rund" : "eck";
  if (o.modus === "stat") return `<span class="bl9-w ${klasse}"><span class="bl9-st">${s === "" ? "&nbsp;" : esc(s)}</span></span>`;
  const breite = Math.max(2, Math.min(24, s.length + 1));
  const menue = o.k.werteMenue.length ? `<button type="button" class="bl9-m" data-m="w" data-a="${adr}" data-art="${art}" aria-label="Wert wählen" aria-haspopup="true">▾</button>` : "";
  return `<span class="bl9-w ${klasse}"><input class="bl9-in" type="text" data-a="${adr}" data-art="${art}" value="${esc(s)}" style="width:calc(${breite}ch + 14px)" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Wert">${menue}</span>`;
}
function wahlHtml(adr, liste, aktuell, o, klasse) {
  const l = liste.indexOf(aktuell) < 0 ? liste.concat([aktuell]) : liste;
  if (o.modus === "stat") return `<span class="bl9-w eck"><span class="bl9-st">${esc(String(aktuell))}</span></span>`;
  return `<select class="bl9-sel ${klasse || ""}" data-a="${adr}" aria-label="Auswahl">${l.map(x => `<option${x === aktuell ? " selected" : ""}>${esc(String(x))}</option>`).join("")}</select>`;
}
function ausdruck(v, adr, o, art) {
  const t = v[0], menue = o.modus !== "stat" && o.k.werteMenue.length ? `<button type="button" class="bl9-m" data-m="w" data-a="${adr}" data-art="${art || "t"}" aria-label="Wertart ändern" aria-haspopup="true">▾</button>` : "";
  let inner = "";
  if (t === "antwort") inner = "Antwort";
  else if (t === "xPos") inner = "x-Position";
  else if (t === "yPos") inner = "y-Position";
  else if (t === "var") inner = o.modus === "stat" ? esc(String(v[1])) : wahlHtml(adr + ".1", o.k.variablen, v[1], o, "bl9-var");
  else if (OPS[t]) inner = wertHtml(v[1], adr + ".1", "z", o) + (o.modus === "stat" ? `<span class="bl9-tx">${OPS[t]}</span>` :
    `<select class="bl9-sel bl9-op" data-a="${adr}" data-rechenzeichen="1" aria-label="Rechenzeichen">${Object.keys(OPS).map(k => `<option value="${k}"${k === t ? " selected" : ""}>${OPS[k]}</option>`).join("")}</select>`) + wertHtml(v[2], adr + ".2", "z", o);
  else if (t === "verbinde") inner = `<span class="bl9-tx">verbinde</span>${wertHtml(v[1], adr + ".1", "t", o)}<span class="bl9-tx">und</span>${wertHtml(v[2], adr + ".2", "t", o)}`;
  else if (t === "zufall") inner = `<span class="bl9-tx">Zufallszahl von</span>${wertHtml(v[1], adr + ".1", "z", o)}<span class="bl9-tx">bis</span>${wertHtml(v[2], adr + ".2", "z", o)}`;
  else inner = esc(String(t));
  return `<span class="bl9-r">${inner}${menue}</span>`;
}
function bedHtml(v, adr, o) {
  if (!Array.isArray(v)) v = ["=", 0, 0];
  const t = v[0], menue = o.modus !== "stat" && o.k.bedMenue.length ? `<button type="button" class="bl9-m" data-m="b" data-a="${adr}" aria-label="Bedingung ändern" aria-haspopup="true">▾</button>` : "";
  let inner;
  if (t === "und" || t === "oder") inner = bedHtml(v[1], adr + ".1", o) + `<span class="bl9-tx">${t}</span>` + bedHtml(v[2], adr + ".2", o);
  else if (t === "nicht") inner = `<span class="bl9-tx">nicht</span>` + bedHtml(v[1], adr + ".1", o);
  else inner = wertHtml(v[1], adr + ".1", "t", o) + (o.modus === "stat" ? `<span class="bl9-tx bl9-vgl">${esc(t)}</span>` :
    `<select class="bl9-sel bl9-op" data-a="${adr}" data-vergleich="1" aria-label="Vergleich">${["=", "<", ">"].map(k => `<option${k === t ? " selected" : ""}>${esc(k)}</option>`).join("")}</select>`) + wertHtml(v[2], adr + ".2", "t", o);
  return `<span class="bl9-bed">${inner}${menue}</span>`;
}
function klartext(b, d) {
  return d.et.map(t => typeof t === "string" ? t : t.i ? "Start" : (() => { const v = b[Object.values(t)[0]]; return Array.isArray(v) ? "…" : String(v); })()).join(" ");
}
function etikettHtml(b, d, p, o) {
  return d.et.map(tok => {
    if (typeof tok === "string") return `<span class="bl9-tx">${esc(tok)}</span>`;
    if (tok.i) return ICON_START;
    const k = Object.keys(tok)[0], i = tok[k], adr = p + ":" + i, v = b[i];
    if (k === "z" || k === "t") return wertHtml(v, adr, k, o);
    if (k === "bed") return bedHtml(v, adr, o);
    if (k === "var") return wahlHtml(adr, o.k.variablen, v, o, "bl9-var");
    if (k === "eig") return wahlHtml(adr, o.k.eigene, v, o, "bl9-eig");
    if (k === "kost") return wahlHtml(adr, o.k.kostueme, v, o, "bl9-kost");
    return "";
  }).join("");
}
function listeHtml(liste, lp, o) {
  if (o.modus === "stat") return `<div class="bl9-liste">${liste.map((b, i) => blockHtml(b, "", o)).join("")}</div>`;
  const top = lp === "", fest = top ? o.fest : 0;
  let s = `<div class="bl9-liste" data-lp="${lp}">`;
  const luecke = (i, leer) => {
    const aktiv = o.marke && o.marke.lp === lp && o.marke.idx === i;
    return `<div class="bl9-luecke${aktiv ? " aktiv" : ""}${leer ? " leer" : ""}" data-lp="${lp}" data-i="${i}" aria-hidden="true"></div>`;
  };
  if (!liste.length) s += luecke(0, true);
  else {
    liste.forEach((b, i) => { if (i >= fest) s += luecke(i, false); s += blockHtml(b, lp === "" ? String(i) : lp + "." + i, o, top && i > 0); });
    s += luecke(liste.length, false);
  }
  return s + "</div>";
}
function blockHtml(b, p, o, neuerStapel) {
  const typ = b[0], d = DEF[typ];
  if (!d) return `<div class="bl9-b bl9-k bl9-form" style="--c:#888;--t:#fff">${esc(String(typ))}</div>`;
  const g = GRUPPEN[d.g], stil = `--c:${g.c};--t:${g.t}`, arbeit = o.modus === "arbeit";
  const gewaehlt = arbeit && o.auswahl === p, klasse = (gewaehlt ? " gewaehlt" : "") + (neuerStapel && d.hut ? " neu" : "");
  const attr = arbeit ? ` data-p="${p}" data-typ="${typ}"` : "";
  const griff = '<span class="bl9-griff" aria-hidden="true"></span>';
  const et = etikettHtml(b, d, p, o), label = ` role="group" aria-label="${esc(klartext(b, d))}"`;
  if (!d.art) return `<div class="bl9-b bl9-k bl9-form${d.hut ? " hut" : ""}${klasse}"${attr}${arbeit ? ' tabindex="0"' : ""} style="${stil}"${label}>${griff}${et}</div>`;
  const arm = (liste, lp) => `<div class="bl9-rumpf"><div class="bl9-seite"></div>${o.modus === "stat" ? (liste && liste.length ? listeHtml(liste, lp, o) : '<div class="bl9-liste bl9-leerstat"></div>') : listeHtml(liste || [], lp, o)}</div>`;
  return `<div class="bl9-b bl9-cb${klasse}"${attr} style="${stil}"><div class="bl9-kopf bl9-form${d.hut ? " hut" : ""}"${arbeit ? ' tabindex="0"' : ""}${label}>${griff}${et}</div>${arm(b[2], p + ".c")}` +
    (d.art === "cs" ? `<div class="bl9-mitte bl9-form"><span class="bl9-tx">sonst</span></div>${arm(b[3], p + ".e")}` : "") + `<div class="bl9-fuss bl9-form"></div></div>`;
}
function einstellungen(cfg) {
  return {variablen: cfg.variablen || [], eigene: cfg.eigene || [], kostueme: cfg.kostueme && cfg.kostueme.length ? cfg.kostueme : KOSTUEME, werteMenue: [], bedMenue: []};
}

function blockBild(el, programm) {
  const k = einstellungen({}); k.werteMenue = [];
  el.innerHTML = `<div class="bl9-bild bl9-prog">${listeHtml(programm || [], "", {modus: "stat", k, fest: 0})}</div>`;
  el.classList.add("bl9"); el.setAttribute("translate", "no");   // Sprachfahnen: Blöcke bleiben deutsch (wie in Scratch auf den Schul-PCs)
  return el;
}

/* ================= Der Editor ================= */
function blockEditor(el, cfg) {
  cfg = cfg || {};
  const nr = ++zaehler;
  const k = einstellungen(cfg), fest = cfg.fest || 0, max = cfg.max || 0;
  // Palette lesen
  const gelesen = [], hat = new Set();
  const eintraege = cfg.palette || REIHE.filter(n => (cfg.eigene && cfg.eigene.length) || (n !== "definiere" && n !== "rufe")).concat(["antwort", "var", "+", "verbinde", "zufall", "xPos", "yPos", "und", "oder", "nicht"]);
  const gruppenFolge = Object.keys(GRUPPEN), gruppen = {};
  eintraege.forEach(e => {
    if (typeof e === "string") { hat.add(e); if (DEF[e]) { const gk = DEF[e].g; (gruppen[gk] = gruppen[gk] || {name: GRUPPEN[gk].name, farbe: gk, bloecke: [], ord: gruppenFolge.indexOf(gk)}).bloecke.push(e); } }
    else if (e && e.bloecke) {
      const gr = {name: e.gruppe || "Blöcke", farbe: (DEF[e.bloecke[0]] || {g: "bewegung"}).g, bloecke: e.bloecke.filter(n => DEF[n]), ord: 100 + gelesen.length};
      e.bloecke.forEach(n => hat.add(n)); gelesen.push(gr); gruppen["x" + gelesen.length] = gr;
    }
  });
  const gruppenListe = Object.values(gruppen).sort((a, b) => a.ord - b.ord);
  gruppenListe.forEach(gr => gr.bloecke.sort((a, b) => (REIHE.indexOf(a) - REIHE.indexOf(b))));
  const alleBloecke = new Set(); gruppenListe.forEach(gr => gr.bloecke.forEach(n => alleBloecke.add(n)));
  const hatWert = n => !cfg.palette || hat.has(n);
  if (hatWert("antwort") || hat.has("frage")) k.werteMenue.push("antwort");
  if (k.variablen.length && hatWert("var")) k.werteMenue.push("var");
  if (hatWert("+") || hat.has("rechne")) k.werteMenue.push("rechne");
  if (hatWert("verbinde")) k.werteMenue.push("verbinde");
  if (hatWert("zufall")) k.werteMenue.push("zufall");
  if (hatWert("xPos")) k.werteMenue.push("xPos");
  if (hatWert("yPos")) k.werteMenue.push("yPos");
  ["und", "oder", "nicht"].forEach(n => { if (hatWert(n)) k.bedMenue.push(n); });
  if (k.werteMenue.length) k.werteMenue.unshift("lit");
  k.stdBed = () => (k.werteMenue.indexOf("antwort") >= 0 ? ["=", ["antwort"], 1] : k.werteMenue.indexOf("var") >= 0 ? ["=", ["var", k.variablen[0]], 0] : ["=", 1, 1]);
  const neuerBlock = n => [n].concat(DEF[n].neu(k));

  // Zustand
  let prog = klon(cfg.start || []);
  let auswahl = null, marke = {lp: "", idx: prog.length}, aktGruppe = 0, laeuft = false, ablauf = null, gezogen = 0;
  const dauer = {B: neuerZustand(cfg), winkel: 0, kostuemNr: -1};
  const reduziert = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sprachfahnen (js/uebersetzen.js): Der Editor bleibt deutsch – er baut sich bei jeder Änderung neu auf, und die
  // Blöcke heißen wie im deutschen Scratch der Schul-PCs
  el.setAttribute("translate", "no");
  el.classList.add("bl9"); el.innerHTML = `
    <div class="bl9-pal"><button type="button" class="bl9-pal-kopf" aria-expanded="true">➕ Blöcke</button><div class="bl9-pal-inhalt"><div class="bl9-tabs" role="tablist" aria-label="Blockarten"></div><div class="bl9-pal-liste"></div></div></div>
    <div class="bl9-arbeit"><div class="bl9-knoepfe-a"></div>
      <div class="bl9-leiste" role="toolbar" aria-label="Ausgewählter Block"><span class="bl9-leiste-text">Block antippen, dann:</span>
        <button type="button" class="btn small ghost" data-akt="hoch" aria-label="Block nach oben" title="nach oben">▲</button><button type="button" class="btn small ghost" data-akt="runter" aria-label="Block nach unten" title="nach unten">▼</button>
        <button type="button" class="btn small ghost" data-akt="dupl" aria-label="Block verdoppeln" title="verdoppeln">⧉</button><button type="button" class="btn small ghost" data-akt="weg" aria-label="Block löschen" title="löschen">✕</button></div>
      <div class="bl9-prog" data-bl9-prog></div><div class="bl9-meld" aria-live="polite"></div></div>
    <div class="bl9-buehne"><div class="bl9-flaeche" role="img" aria-label="Bühne mit dem Roboter"><div class="bl9-pos"><div class="bl9-drehen"></div><div class="bl9-blase" hidden></div></div><div class="bl9-vars"></div></div>
      <div class="bl9-eig"></div><form class="bl9-frage" hidden><label>Deine Antwort: <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Deine Antwort"></label><button type="submit" class="btn small">OK</button></form>
      <div class="bl9-knoepfe"><button type="button" class="btn small bl9-start">▶ Programm starten</button><button type="button" class="btn small ghost bl9-stopp" disabled>■ Stopp</button><button type="button" class="btn small ghost bl9-reset">↺ Bühne zurücksetzen</button></div>
      <div class="bl9-status" aria-live="polite"></div></div>`;
  const q = s => $(s, el);
  const palEl = q(".bl9-pal"), tabsEl = q(".bl9-tabs"), palListe = q(".bl9-pal-liste"), progEl = q(".bl9-prog"), meld = q(".bl9-meld"), leiste = q(".bl9-leiste"),
    pos = q(".bl9-pos"), dreh = q(".bl9-drehen"), blase = q(".bl9-blase"), varsEl = q(".bl9-vars"), eigEl = q(".bl9-eig"), frageForm = q(".bl9-frage"), frageFeld = $("input", frageForm),
    knoepfe = q(".bl9-knoepfe"), startK = q(".bl9-start"), stoppK = q(".bl9-stopp"), resetK = q(".bl9-reset"), status = q(".bl9-status"), buehne = q(".bl9-buehne"), palKopf = q(".bl9-pal-kopf");

  /* ---------- Pfade ---------- */
  function sucheListe(lp) {
    if (lp === "") return prog;
    const t = lp.split("."); let liste = prog;
    for (let i = 0; i < t.length; i += 2) { const b = liste[+t[i]]; if (!b) return null; liste = t[i + 1] === "e" ? b[3] : b[2]; if (!Array.isArray(liste)) return null; }
    return liste;
  }
  const listenPfad = p => { const t = p.split("."); return t.slice(0, -1).join("."); };
  const nummer = p => +p.split(".").pop();
  const sucheBlock = p => { const l = sucheListe(listenPfad(p)); return l ? l[nummer(p)] : undefined; };
  const bauePfad = (lp, i) => lp === "" ? String(i) : lp + "." + i;
  function findePfad(ziel, liste, lp) {
    liste = liste || prog; lp = lp || "";
    for (let i = 0; i < liste.length; i++) {
      const b = liste[i], p = bauePfad(lp, i);
      if (b === ziel) return p;
      if (Array.isArray(b) && DEF[b[0]] && DEF[b[0]].art) { let r = findePfad(ziel, b[2], p + ".c"); if (!r && b[3]) r = findePfad(ziel, b[3], p + ".e"); if (r) return r; }
    }
    return null;
  }
  function wertAdresse(adr) {
    const [bp, rest] = adr.split(":"), idx = rest.split(".").map(Number); let cur = sucheBlock(bp);
    for (let i = 0; i < idx.length - 1; i++) { if (!Array.isArray(cur)) return null; cur = cur[idx[i]]; }
    return Array.isArray(cur) ? {eltern: cur, i: idx[idx.length - 1]} : null;
  }
  const zaehleAlle = (l) => { let n = 0; (l || []).forEach(b => { n++; if (DEF[b[0]] && DEF[b[0]].art) arme(b).forEach(a => { n += zaehleAlle(a); }); }); return n; };

  /* ---------- Zeichnen ---------- */
  const optionen = () => ({modus: "arbeit", k, fest, auswahl, marke});
  function pruefeMarke() {
    const l = sucheListe(marke.lp);
    if (!l) marke = {lp: "", idx: prog.length}; else marke.idx = Math.max(marke.lp === "" ? fest : 0, Math.min(marke.idx, l.length));
    if (marke.lp === "" && marke.idx < fest) marke.idx = fest;
  }
  function zeichne() {
    const hatFokus = progEl.contains(document.activeElement), fokusP = hatFokus && document.activeElement.closest(".bl9-b") ? document.activeElement.closest(".bl9-b").dataset.p : null;
    if (auswahl && !sucheBlock(auswahl)) auswahl = null;
    pruefeMarke();
    progEl.innerHTML = listeHtml(prog, "", optionen());
    if (!prog.length) progEl.classList.add("leer"); else progEl.classList.remove("leer");
    $$("[data-akt]", leiste).forEach(b => { b.disabled = !auswahl; });
    if (auswahl) {
      const l = sucheListe(listenPfad(auswahl)), i = nummer(auswahl), festB = listenPfad(auswahl) === "" && i < fest;
      $("[data-akt=weg]", leiste).disabled = festB;
      $("[data-akt=hoch]", leiste).disabled = i === 0 || (listenPfad(auswahl) === "" && i <= fest);
      $("[data-akt=runter]", leiste).disabled = festB || i >= l.length - 1;
      $("[data-akt=dupl]", leiste).disabled = festB || istKopf(l[i]) || (max && zaehleAlle(prog) + zaehleAlle([l[i]]) > max);
    }
    $(".bl9-leiste-text", leiste).textContent = auswahl ? "Ausgewählt:" : "Block antippen, dann:";
    if (fokusP) { const e = $(`.bl9-b[data-p="${fokusP}"]`, progEl); const f = e && (e.classList.contains("bl9-cb") ? $(".bl9-kopf", e) : e); if (f) f.focus({preventScroll: true}); }
  }
  function sagMeld(s) { meld.textContent = s; }
  function zeichnePalette() {
    const wenige = alleBloecke.size <= 9;   // kleine Aufgaben: alle Blöcke auf einmal, ohne Registerkarten
    tabsEl.innerHTML = !wenige && gruppenListe.length > 1 ? gruppenListe.map((g, i) => `<button type="button" class="bl9-tab${i === aktGruppe ? " akt" : ""}" role="tab" aria-selected="${i === aktGruppe}" data-g="${i}" style="--c:${GRUPPEN[g.farbe].c}"><i></i>${esc(g.name)}</button>`).join("") : "";
    const g = wenige ? {bloecke: [].concat(...gruppenListe.map(x => x.bloecke))} : (gruppenListe[aktGruppe] || {bloecke: []});
    palListe.innerHTML = g.bloecke.map(n => `<div class="bl9-pb" role="button" tabindex="0" data-name="${n}" aria-label="${esc(klartext(neuerBlock(n), DEF[n]))} einfügen">${blockHtml(neuerBlock(n), "", {modus: "stat", k, fest: 0})}</div>`).join("");
  }

  /* ---------- Ändern ---------- */
  function aenderung(zeichnen) {
    if (laeuft) stoppen("Du hast die Blöcke verändert – das Programm wurde angehalten.");
    zeichne();
    if (cfg.onChange) { try { cfg.onChange(klon(prog)); } catch (_e) {} }
    el.dispatchEvent(new CustomEvent("bloecke", {bubbles: true}));
  }
  function eingefuegt(blk, lp, idx) {
    const l = sucheListe(lp); l.splice(idx, 0, blk);
    const p = findePfad(blk); auswahl = p;
    marke = DEF[blk[0]].art ? {lp: p + ".c", idx: 0} : {lp, idx: idx + 1};
    aenderung(); return p;
  }
  function einfuegenName(name, lp, idx) {
    if (!DEF[name]) return;
    if (max && zaehleAlle(prog) >= max) { sagMeld("Du darfst höchstens " + max + " Blöcke benutzen."); return; }
    pruefeMarke();
    const blk = neuerBlock(name);
    if (lp === undefined) { lp = marke.lp; idx = marke.idx; }
    if (DEF[name].hut) {   // Kopfblöcke stehen immer ganz außen
      const t = lp === "" ? idx : +lp.split(".")[0] + 1; lp = ""; idx = Math.max(fest, Math.min(t, prog.length));
    }
    if (lp === "" && idx < fest) idx = fest;
    const p = eingefuegt(blk, lp, idx);
    sagMeld(klar(klartext(blk, DEF[name])) + " eingefügt.");
    return p;
  }
  function loesche(p) {
    const l = sucheListe(listenPfad(p)), i = nummer(p);
    if (!l || (listenPfad(p) === "" && i < fest)) return;
    l.splice(i, 1); auswahl = null; marke = {lp: listenPfad(p), idx: i}; aenderung();
  }
  function schiebe(p, richtung) {
    const lp = listenPfad(p), l = sucheListe(lp), i = nummer(p), j = i + richtung;
    if (!l || (lp === "" && i < fest) || j < 0 || j >= l.length || (lp === "" && j < fest)) return;
    [l[i], l[j]] = [l[j], l[i]]; auswahl = bauePfad(lp, j); marke = {lp, idx: j + 1}; aenderung();
  }
  function verdoppele(p) {
    const lp = listenPfad(p), l = sucheListe(lp), i = nummer(p);
    if (!l || (lp === "" && i < fest) || istKopf(l[i])) return;
    if (max && zaehleAlle(prog) + zaehleAlle([l[i]]) > max) { sagMeld("Du darfst höchstens " + max + " Blöcke benutzen."); return; }
    const kopie = klon(l[i]); l.splice(i + 1, 0, kopie); auswahl = bauePfad(lp, i + 1); marke = {lp, idx: i + 2}; aenderung();
  }
  function waehle(p) {
    auswahl = p; const lp = listenPfad(p); marke = {lp, idx: nummer(p) + 1}; zeichne();
    const e = $(`.bl9-b[data-p="${p}"]`, progEl); if (e) { const f = e.classList.contains("bl9-cb") ? $(".bl9-kopf", e) : e; if (f && document.activeElement !== f) f.focus({preventScroll: true}); }
  }
  function setzeMarke(lp, idx) { marke = {lp, idx}; zeichne(); }

  /* ---------- Werte ändern ---------- */
  function parseWert(s, art) {
    const t = art === "z" ? s.trim().replace(",", ".") : s.trim();
    if (/^-?\d+(\.\d+)?$/.test(t) && (art === "z" || String(Number(t)) === t)) return Number(t);
    return s;
  }
  progEl.addEventListener("input", e => {
    const f = e.target.closest("input.bl9-in"); if (!f) return;
    const ad = wertAdresse(f.dataset.a); if (!ad) return;
    ad.eltern[ad.i] = parseWert(f.value, f.dataset.art);
    f.style.width = `calc(${Math.max(2, Math.min(24, f.value.length + 1))}ch + 14px)`;
    if (laeuft) stoppen("Du hast die Blöcke verändert – das Programm wurde angehalten.");
    if (cfg.onChange) { try { cfg.onChange(klon(prog)); } catch (_e) {} }
  });
  progEl.addEventListener("change", e => {
    const s = e.target.closest("select.bl9-sel"); if (!s) return;
    const ad = wertAdresse(s.dataset.a), blkSel = s.dataset.a;
    if (s.dataset.rechenzeichen || s.dataset.vergleich) { const r = sucheAusdruck(blkSel); if (r) { r[0] = s.value; aenderung(); } return; }
    if (ad) { ad.eltern[ad.i] = s.value; aenderung(); }
  });
  function sucheAusdruck(adr) {   // der Ausdruck selbst (nicht sein Platz), z. B. ["+", a, b]
    const [bp, rest] = adr.split(":"), idx = rest.split(".").map(Number); let cur = sucheBlock(bp);
    for (const i of idx) { if (!Array.isArray(cur)) return null; cur = cur[i]; }
    return Array.isArray(cur) ? cur : null;
  }

  /* ---------- Menü ▾ ---------- */
  let menue = null;
  function schliesseMenue() { if (menue) { menue.remove(); menue = null; document.removeEventListener("pointerdown", aussen, true); document.removeEventListener("keydown", menueTaste, true); } }
  function aussen(e) { if (menue && !menue.contains(e.target)) schliesseMenue(); }
  function menueTaste(e) { if (e.key === "Escape") { const b = menue && menue.__knopf; schliesseMenue(); if (b) b.focus(); } }
  const WERT_TEXT = {lit: "Zahl / Text", antwort: "Antwort", var: "Variable …", rechne: "Rechnung  ○ + ○", verbinde: "verbinde ○ und ○", zufall: "Zufallszahl von ○ bis ○", xPos: "x-Position", yPos: "y-Position"};
  const BED_TEXT = {vergleich: "Vergleich  ○ = ○", und: "… und …", oder: "… oder …", nicht: "nicht …"};
  function oeffneMenue(knopf) {
    if (menue) { const gleichKnopf = menue.__knopf === knopf; schliesseMenue(); if (gleichKnopf) return; }
    const art = knopf.dataset.m, adr = knopf.dataset.a, items = art === "w" ? k.werteMenue : ["vergleich"].concat(k.bedMenue);
    menue = document.createElement("div"); menue.className = "bl9-menue"; menue.setAttribute("role", "menu"); menue.__knopf = knopf;
    menue.innerHTML = items.map(i => `<button type="button" role="menuitem" data-w="${i}">${esc((art === "w" ? WERT_TEXT : BED_TEXT)[i])}</button>`).join("");
    el.appendChild(menue);
    const r = knopf.getBoundingClientRect(), er = el.getBoundingClientRect();
    menue.style.top = (r.bottom - er.top + 4) + "px"; menue.style.left = Math.max(4, Math.min(r.left - er.left, er.width - menue.offsetWidth - 4)) + "px";
    menue.addEventListener("click", ev => {
      const b = ev.target.closest("button[data-w]"); if (!b) return;
      wandle(adr, art, b.dataset.w, knopf); schliesseMenue();
    });
    document.addEventListener("pointerdown", aussen, true); document.addEventListener("keydown", menueTaste, true);
    const erste = $("button", menue); if (erste) erste.focus({preventScroll: true});
  }
  function wandle(adr, art, wie, knopf) {
    const ad = wertAdresse(adr); if (!ad) return;
    const alt = ad.eltern[ad.i];
    if (art === "b") {
      const ein = Array.isArray(alt) ? alt : ["=", 0, 0], vgl = a => Array.isArray(a) && ["=", "<", ">"].indexOf(a[0]) >= 0;
      if (wie === "vergleich") ad.eltern[ad.i] = vgl(ein) ? ein : vgl(ein[1]) ? ein[1] : ["=", 0, 0];
      else if (wie === "nicht") ad.eltern[ad.i] = ["nicht", ein];
      else ad.eltern[ad.i] = [wie, ein, k.stdBed()];
    } else {
      const neu = {lit: knopf.dataset.art === "z" ? 0 : "", antwort: ["antwort"], var: ["var", k.variablen[0] || "punkte"], rechne: ["+", 1, 1], verbinde: ["verbinde", "", ""], zufall: ["zufall", 1, 10], xPos: ["xPos"], yPos: ["yPos"]}[wie];
      ad.eltern[ad.i] = neu;
    }
    aenderung();
  }

  /* ---------- Klicks, Tasten ---------- */
  el.addEventListener("click", e => {
    if (Date.now() - gezogen < 400) return;
    const t = e.target;
    const m = t.closest(".bl9-m"); if (m && el.contains(m)) { oeffneMenue(m); return; }
    const tab = t.closest(".bl9-tab"); if (tab) { aktGruppe = +tab.dataset.g; zeichnePalette(); return; }
    const pb = t.closest(".bl9-pb"); if (pb) { einfuegenName(pb.dataset.name); return; }
    const ak = t.closest("[data-akt]"); if (ak && auswahl) { ({hoch: () => schiebe(auswahl, -1), runter: () => schiebe(auswahl, 1), dupl: () => verdoppele(auswahl), weg: () => loesche(auswahl)})[ak.dataset.akt](); return; }
    if (t.closest("input,select,.bl9-menue,button")) return;
    if (!progEl.contains(t)) return;
    const l = t.closest(".bl9-luecke"); if (l) { setzeMarke(l.dataset.lp, +l.dataset.i); return; }
    const b = t.closest(".bl9-b[data-p]"); if (b) { waehle(b.dataset.p); return; }
    if (t.classList.contains("bl9-liste") && t.dataset.lp !== undefined && !t.querySelector(":scope > .bl9-luecke.leer")) { setzeMarke(t.dataset.lp, (sucheListe(t.dataset.lp) || []).length); return; }
    if (t === progEl) { auswahl = null; zeichne(); }
  });
  palKopf.addEventListener("click", () => { const zu = palEl.classList.toggle("zu"); palKopf.setAttribute("aria-expanded", String(!zu)); });
  el.addEventListener("keydown", e => {
    const pb = e.target.closest && e.target.closest(".bl9-pb");
    if (pb && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); einfuegenName(pb.dataset.name); return; }
    if (!progEl.contains(e.target) || e.target.closest("input,select,button")) return;
    const b = e.target.closest(".bl9-b[data-p]"); if (!b) return;
    const p = b.dataset.p;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); waehle(p); }
    else if (e.key === "Delete" || e.key === "Backspace") { e.preventDefault(); loesche(p); }
    else if ((e.key === "d" || e.key === "D") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); verdoppele(p); }
    else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      if (e.altKey) { schiebe(p, e.key === "ArrowUp" ? -1 : 1); return; }
      const alle = $$(".bl9-b[data-p]", progEl), i = alle.indexOf(b), z = alle[i + (e.key === "ArrowUp" ? -1 : 1)];
      if (z) { const f = z.classList.contains("bl9-cb") ? $(".bl9-kopf", z) : z; f.focus(); }
    }
  });

  /* ---------- Ziehen (Zeigerereignisse: Maus, Stift, Touch am Griff) ---------- */
  let zug = null;
  el.addEventListener("pointerdown", e => {
    gezogen = 0;   // ein neues Antippen ist nie der Nachklick eines Ziehens
    if (e.button > 0 || zug) return;
    const pb = e.target.closest(".bl9-pb"), wb = e.target.closest(".bl9-prog .bl9-b[data-p]");
    if (!pb && !wb) return;
    if (e.target.closest("input,select,.bl9-m")) return;
    if (e.pointerType === "touch" && !e.target.closest(".bl9-griff")) return;
    if (wb && !pb && listenPfad(wb.dataset.p) === "" && nummer(wb.dataset.p) < fest) return;
    const name = pb ? pb.dataset.name : wb.dataset.typ;
    zug = {quelle: pb ? {art: "pal", name, el: pb} : {art: "arb", p: wb.dataset.p, name, el: wb}, x0: e.clientX, y0: e.clientY, aktiv: false, ziel: null, pid: e.pointerId};
    document.addEventListener("pointermove", zugBewegt); document.addEventListener("pointerup", zugEnde); document.addEventListener("pointercancel", zugAbbruch); document.addEventListener("keydown", zugTaste, true);
  });
  function zugStart(e) {
    const qe = zug.quelle.el, ziel = zug.quelle.art === "pal" ? $(".bl9-b", qe) : qe, r = ziel.getBoundingClientRect();
    const geist = ziel.cloneNode(true); geist.removeAttribute("data-p"); $$("[data-p],[tabindex]", geist).forEach(x => { x.removeAttribute("data-p"); x.removeAttribute("tabindex"); });
    geist.classList.remove("gewaehlt"); geist.classList.add("bl9-geist");
    geist.style.width = r.width + "px"; zug.dx = Math.min(e.clientX - r.left, 80); zug.dy = Math.min(e.clientY - r.top, 30);
    const huelle = document.createElement("div"); huelle.className = "bl9-geisthuelle"; huelle.appendChild(geist); document.body.appendChild(huelle);
    zug.geist = huelle; zug.aktiv = true; el.classList.add("bl9-zieht"); if (zug.quelle.art === "arb") qe.classList.add("bl9-quelle");
    try { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); } catch (_e) {}
  }
  function findeZiel(px, py) {
    const q = zug.quelle, hut = DEF[q.name].hut;
    if (q.art === "arb") { const pr = palEl.getBoundingClientRect(); if (px >= pr.left && px <= pr.right && py >= pr.top && py <= pr.bottom) return {weg: true}; }
    const ar = progEl.getBoundingClientRect();
    if (px < ar.left - 30 || px > ar.right + 30 || py < ar.top - 40 || py > ar.bottom + 40) return null;
    let beste = null, bd = 1e9;
    $$(".bl9-luecke", progEl).forEach(l => {
      if (q.art === "arb" && q.el.contains(l)) return;
      if (hut && l.dataset.lp !== "") return;
      const r = l.getBoundingClientRect(), cy = r.top + r.height / 2, dx = Math.max(r.left - px, 0, px - r.right), d = Math.hypot(dx, py - cy);
      if (d < bd) { bd = d; beste = l; }
    });
    return bd < 140 ? {luecke: beste} : null;
  }
  function zugBewegt(e) {
    if (!zug || e.pointerId !== zug.pid) return;
    if (!zug.aktiv) { if (Math.hypot(e.clientX - zug.x0, e.clientY - zug.y0) < 6) return; zugStart(e); }
    zug.geist.style.transform = `translate(${e.clientX - zug.dx}px, ${e.clientY - zug.dy}px)`;
    const z = findeZiel(e.clientX, e.clientY);
    if (zug.ziel && zug.ziel.luecke) zug.ziel.luecke.classList.remove("ziel");
    palEl.classList.toggle("loeschen", !!(z && z.weg));
    if (z && z.luecke) z.luecke.classList.add("ziel");
    zug.ziel = z;
    if (e.clientY < 70) window.scrollBy(0, -14); else if (e.clientY > window.innerHeight - 70) window.scrollBy(0, 14);
    if (e.cancelable) e.preventDefault();
  }
  function zugAufraeumen() {
    document.removeEventListener("pointermove", zugBewegt); document.removeEventListener("pointerup", zugEnde); document.removeEventListener("pointercancel", zugAbbruch); document.removeEventListener("keydown", zugTaste, true);
    if (zug && zug.geist) zug.geist.remove();
    if (zug && zug.ziel && zug.ziel.luecke) zug.ziel.luecke.classList.remove("ziel");
    el.classList.remove("bl9-zieht"); palEl.classList.remove("loeschen"); $$(".bl9-quelle", el).forEach(x => x.classList.remove("bl9-quelle"));
  }
  function zugAbbruch() { if (zug && zug.aktiv) gezogen = Date.now(); zugAufraeumen(); zug = null; }
  function zugTaste(e) { if (e.key === "Escape") { e.preventDefault(); zugAbbruch(); } }
  function zugEnde(e) {
    if (!zug || e.pointerId !== zug.pid) return;
    const z = zug, ziel = z.ziel, war = z.aktiv; zugAufraeumen(); zug = null;
    if (!war) return;
    gezogen = Date.now();
    if (!ziel) { sagMeld("Dort kann der Block nicht eingefügt werden."); return; }
    if (z.quelle.art === "pal") {
      if (ziel.luecke) einfuegenName(z.quelle.name, ziel.luecke.dataset.lp, +ziel.luecke.dataset.i);
    } else if (ziel.weg) { loesche(z.quelle.p); sagMeld("Block gelöscht."); }
    else if (ziel.luecke) {
      const lp = ziel.luecke.dataset.lp, nach = sucheListe(lp), blk = sucheBlock(z.quelle.p), quellListe = sucheListe(listenPfad(z.quelle.p)), qi = nummer(z.quelle.p);
      let idx = +ziel.luecke.dataset.i;
      if (!nach || !blk || !quellListe) return;
      quellListe.splice(qi, 1); if (nach === quellListe && qi < idx) idx--;
      if (nach === prog && idx < fest) idx = fest;
      nach.splice(idx, 0, blk);
      auswahl = findePfad(blk); marke = {lp, idx: idx + 1}; if (auswahl) marke = {lp: listenPfad(auswahl), idx: nummer(auswahl) + 1};
      aenderung();
    }
  }

  /* ---------- Bühne ---------- */
  function zeichneBuehne(ms) {
    const S = dauer.B, d = reduziert() ? 0 : (ms || 0);
    pos.style.setProperty("--dauer", d + "ms");
    pos.style.left = ((240 + klemme(S.x, -222, 222)) / 480 * 100) + "%"; pos.style.top = ((180 - klemme(S.y, -158, 158)) / 360 * 100) + "%";
    const soll = S.richtung - 90, diff = ((soll - dauer.winkel) % 360 + 540) % 360 - 180; dauer.winkel += diff;
    const s = S.groesse / 100; dreh.style.transform = `rotate(${dauer.winkel}deg) scale(${s})`; pos.style.setProperty("--s", String(s));
    pos.classList.toggle("weg", !S.sichtbar);
    const ki = Math.max(0, k.kostueme.indexOf(S.kostuem));
    if (dauer.kostuemNr !== ki) { dreh.innerHTML = figurSvg(ki); dauer.kostuemNr = ki; }
    if (S.blase !== "" && S.sichtbar) {
      blase.hidden = false; blase.textContent = S.blase; blase.className = "bl9-blase" + (S.denkt ? " denke" : "") + (S.x > 80 ? " rechts" : S.x < -80 ? " links" : "") + (S.y > 70 ? " unten" : "");
    } else blase.hidden = true;
    const namen = Object.keys(S.vars);
    varsEl.innerHTML = namen.map(n => `<span class="bl9-var-an"><b>${esc(n)}</b><i>${esc(txt(S.vars[n]))}</i></span>`).join("");
    eigEl.innerHTML = [["x", S.x], ["y", S.y], ["Richtung", S.richtung], ["Größe", S.groesse]].map(e => `<span><b>${e[0]}</b> ${esc(String(rund(e[1])).replace(".", ","))}</span>`).join("");
    flaecheText(S);
  }
  function flaecheText(S) { q(".bl9-flaeche").setAttribute("aria-label", `Bühne: Roboter bei x ${rund(S.x)}, y ${rund(S.y)}, Richtung ${rund(S.richtung)} Grad${S.blase !== "" ? ", sagt: " + S.blase : ""}`); }
  const MELDUNG = {
    fertig: "Programm beendet.", gestoppt: "Angehalten.",
    keinStart: "Dein Programm hat keinen Startblock. Setze „Wenn ▶ Start angeklickt wird“ an den Anfang.",
    grenze: "Stopp! Das Programm hat sehr viele Schritte gemacht – vielleicht läuft eine Schleife ohne Ende. Prüfe die Bedingung bei „wiederhole bis“."
  };
  function marke_(pfad) {
    $$(".leuchtet", progEl).forEach(x => x.classList.remove("leuchtet"));
    if (pfad) { const e = $(`.bl9-b[data-p="${pfad}"]`, progEl); if (e) e.classList.add("leuchtet"); }
  }
  function stoppen(grund) {
    if (!ablauf) return;
    ablauf.grund = grund || ablauf.grund; ablauf.stopp = true; if (ablauf.weck) ablauf.weck(); if (ablauf.frageAb) ablauf.frageAb("");
    if (grund) status.textContent = grund;
  }
  async function starte(opt) {
    opt = opt || {}; stoppen();
    const sofort = !!opt.schnell;
    if (!cfg.behalte) dauer.B = neuerZustand(cfg); else { dauer.B.gesagt = []; dauer.B.fragen = []; dauer.B.schritte = 0; dauer.B.blase = ""; dauer.B.ende = ""; }
    const S = dauer.B, cx = neuerKontext(cfg, S, Object.assign({grenze: sofort ? 20000 : 3000}, opt));
    cx.zeichne = ms => zeichneBuehne(sofort ? 0 : ms);
    cx.marke = sofort ? null : marke_;
    cx.takt = 0; const mein = ablauf = cx; laeuft = true;
    startK.disabled = true; stoppK.disabled = false; frageForm.hidden = true; status.textContent = "Programm läuft …";
    zeichneBuehne(0);
    if (!sofort && el.classList.contains("schmal")) { try { buehne.scrollIntoView({block: "nearest", behavior: reduziert() ? "auto" : "smooth"}); } catch (_e) {} }
    const tempo = opt.tempo || 1;
    cx.warte = v => new Promise(res => {
      const f = S.schritte > 400 ? 0 : S.schritte > 120 ? 0.05 : S.schritte > 40 ? 0.3 : 1;   // lange Läufe werden schneller
      let ms = v.art === "zeit" ? v.ms : v.ms * f;
      if (reduziert() && v.art !== "zeit") ms = v.art === "schleife" ? 0 : Math.min(ms, 60);
      ms /= tempo; cx.weck = res;
      if (ms < 1 && (++cx.takt % 200)) res(); else setTimeout(res, ms);
    });
    cx.frage = text => new Promise(res => {
      const nimm = a => { frageForm.hidden = true; frageForm.onsubmit = null; cx.frageAb = null; res(String(a)); };
      if (cx.vorrat.length) { const a = cx.vorrat.shift(); setTimeout(() => nimm(typeof a === "function" ? a(S.vars) : a), 350 / tempo); cx.frageAb = nimm; return; }
      frageForm.hidden = false; frageFeld.value = ""; frageFeld.focus({preventScroll: true});
      frageForm.onsubmit = ev => { ev.preventDefault(); nimm(frageFeld.value); }; cx.frageAb = nimm;
    });
    let ende;
    try {
      const gen = haupt(prog, cx); let r = gen.next();
      while (!r.done) {
        if (cx.stopp) break;
        let rueck;
        if (r.value && r.value.t === "w") { if (!sofort) await cx.warte(r.value); }
        else if (r.value && r.value.t === "f") rueck = sofort ? (cx.vorrat.length ? String(cx.vorrat.shift()) : "") : await cx.frage(r.value.text);
        r = gen.next(rueck);
      }
      ende = cx.stopp ? "gestoppt" : (S.ende || "fertig");
    } catch (err) { if (err === GRENZ) ende = "grenze"; else { ende = "fertig"; console.error(err); } }
    S.ende = ende;
    if (ablauf === mein) {
      ablauf = null; laeuft = false; marke_(null); frageForm.hidden = true; startK.disabled = false; stoppK.disabled = true;
      status.textContent = mein.grund || MELDUNG[ende] || ""; zeichneBuehne(0);
    }
    return abbild(S);
  }
  function zuruecksetzen() {
    stoppen(); dauer.B = neuerZustand(cfg); dauer.winkel = 0; marke_(null); zeichneBuehne(0); status.textContent = "";
    pos.style.setProperty("--dauer", "0ms"); frageForm.hidden = true;
  }
  startK.addEventListener("click", () => { starte(); });
  stoppK.addEventListener("click", () => { stoppen("Angehalten."); });
  resetK.addEventListener("click", zuruecksetzen);

  /* ---------- Anordnung je nach Breite ---------- */
  function anordnen() {
    const w = el.clientWidth || el.getBoundingClientRect().width, breit = w >= 880;
    el.classList.toggle("breit", breit); el.classList.toggle("schmal", !breit);
    const ziel = breit ? buehne : q(".bl9-knoepfe-a");
    if (knoepfe.parentNode !== ziel) { if (breit) ziel.insertBefore(knoepfe, q(".bl9-status")); else ziel.appendChild(knoepfe); }
    if (breit) { palEl.classList.remove("zu"); palKopf.setAttribute("aria-expanded", "true"); }
  }
  anordnen();
  // erst im nächsten Bild neu anordnen: Wer im Beobachter selbst die Größe ändert, löst in Safari den Skriptfehler
  // „ResizeObserver loop completed with undelivered notifications“ aus
  let ordnet = 0;
  if (window.ResizeObserver) new ResizeObserver(() => { if (!ordnet) ordnet = requestAnimationFrame(() => { ordnet = 0; anordnen(); }); }).observe(el); else window.addEventListener("resize", anordnen);

  zeichnePalette(); zeichne(); zeichneBuehne(0);

  const api = {
    programm: () => klon(prog),
    setze(p) { if (!istProgramm(p)) return false; prog = klon(p); auswahl = null; marke = {lp: "", idx: prog.length}; stoppen(); aenderung(); return true; },
    starte, stopp: () => stoppen("Angehalten."), zuruecksetzen,
    lauf: opt => lauf(prog, cfg, opt), laeuft: () => laeuft, auswahl: () => auswahl, el
  };
  el.__bloecke9 = api;
  return api;
}

/* ================= Aufgabe ================= */
function makeBlockAufgabe(box, cfg, id) {
  register(id, box, cfg.name || "Blöcke: " + klar(cfg.text || "").slice(0, 80));
  box.classList.add("bl9-aufgabe");
  box.innerHTML = `${cfg.text ? `<div class="bl9-text">${cfg.text}</div>` : ""}<div class="bl9-ed"></div>
    <div class="row-btns bl9-aknoepfe"><button type="button" class="btn small check">Prüfen</button><button type="button" class="btn small ghost bl9-zurueck">Zurücksetzen</button></div><div class="fb bl9-fb" aria-live="polite"></div>`;
  const fb = $(".bl9-fb", box), festN = cfg.fest || 0, start = cfg.start || [];
  const merge = p => start.slice(0, festN).map(b => klon(b)).concat(p.slice(festN));
  const e = blockEditor($(".bl9-ed", box), Object.assign({}, cfg, {onChange: p => { try { save("-bloecke-" + id, JSON.stringify(p)); } catch (_e) {} }}));
  try {
    const gesp = JSON.parse(load("-bloecke-" + id, "null"));
    if (gesp && istProgramm(gesp)) e.setze(merge(gesp));
  } catch (_e) {}
  const zeige = (klasse, html) => { fb.className = "fb bl9-fb show " + klasse; fb.innerHTML = html; };
  function pruefen() {
    let r;
    try { r = cfg.pruefe ? cfg.pruefe(e) : true; } catch (err) { console.error(err); r = "Beim Prüfen ist etwas schiefgelaufen. Starte dein Programm und versuche es noch einmal."; }
    if (typeof r === "string") { zeige("bad", "❌ " + esc(r)); return false; }
    if (r === true || r === undefined) r = [{ok: true, text: ""}];
    const alle = r.every(x => x.ok);
    const liste = r.filter(x => x.text).map(x => `<li class="${x.ok ? "ok" : "bad"}">${x.ok ? "✓" : "✗"} ${esc(x.text)}</li>`).join("");
    if (alle) { solve(id); zeige("ok", `✅ ${esc(cfg.erfolg || "Richtig gelöst!")}${liste ? `<ul class="bl9-fbliste">${liste}</ul>` : ""}`); return true; }
    zeige("bad", `❌ Noch nicht ganz.<ul class="bl9-fbliste">${liste}</ul>`); return false;
  }
  $(".check", box).addEventListener("click", pruefen);
  $(".bl9-zurueck", box).addEventListener("click", () => { e.setze(start); e.zuruecksetzen(); save("-bloecke-" + id, ""); fb.className = "fb bl9-fb"; fb.innerHTML = ""; });
  if (M.isSolved(id)) zeige("ok", "✅ Diese Aufgabe hast du schon gelöst. Du kannst dein Programm trotzdem noch einmal ausprobieren.");
  M.loeser[id] = async () => { e.setze(cfg.loesung || []); await e.starte({antworten: cfg.loesungAntworten || [], schnell: true}); pruefen(); };
  return e;
}

Object.assign(M, {blockEditor, makeBlockAufgabe, blockBild, blockHat, blockAnzahl, blockGleich, blockListe,
  blockLauf: (programm, opt) => lauf(programm, opt || {}, opt || {})});
})();
