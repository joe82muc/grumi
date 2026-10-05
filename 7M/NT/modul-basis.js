/* Gemeinsame Bausteine der NT-7-Lernmodule (alle außer luft-modul.html).
 * Übernommen aus luft-modul.html und verallgemeinert: Sterne-Fortschritt, Fachbegriffe,
 * Ankreuzen, Lückentext, Zuordnen, Richtig/Falsch, Reihenfolge, Bild beschriften,
 * Kreuzworträtsel, offene Fragen mit KI-Rückmeldung, Abschlussquiz und Konfetti.
 * Dazu: Film mit Stopp-Fragen (makeFilm), Animation in Schritten (makeSchritte), Paare finden (makePaare),
 * M7-Aufgaben (Modul.plus: für M-Klassen Pflicht, für R-Klassen freiwillig), Lernfortschritt nach Stationen
 * (Element #modulStand) und die Freischaltung durch die Lehrkraft (themen.js, Server /api/nt7/freigabe).
 * Die Seite ruft Modul.init({...}) auf, baut ihre Übungen und zum Schluss Modul.ready().
 * Mit Bezeichnungen der Übungen (register mit Element und Text) und Aufgabenkatalog für die Lehreransicht.
 * NT 7: Anmeldung mit Code über js/lernstand.js (eigener Speicherstand je Kind, Meldung an die Lehrkraft).
 * Kopien ohne die Anmeldung liegen in 9M/ und 9R/NT_9/App12_Organische_Rohstoffe (NT 9 hat fortschritt.js).
 * Andere Kurse (Informatik 7: 7M/Informatik/themen.js) nutzen diese Datei mit: Sie setzen window.GRUMI_KURS auf
 * eine Kursliste mit derselben Schnittstelle wie window.NT7 und den Angaben KURS, PREFIX, WORT, DAS, SPERRE, ZURUECK.
 */
(function(){
"use strict";
const LS_SKRIPT = document.currentScript && document.currentScript.src;
// Kursliste der Seite: NT 7 (themen.js) oder ein anderer Kurs (window.GRUMI_KURS)
const KL = () => window.GRUMI_KURS || window.NT7;

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const fmt = (n, d=1) => n.toFixed(d).replace(".", ",");
const norm = s => String(s).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/₂/g, "2");
const setText = (el, t) => { if (el.textContent !== t) el.textContent = t; };
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
function onVisible(el, cb){
  if (!("IntersectionObserver" in window)) { cb(true); return; }
  new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting)), {threshold: 0.05}).observe(el);
}

let KEY = "grumi-nt7-modul", THEMA = "", GLOSSARY = {}, onProgress = null;
let solved = {};
const tasks = new Set();
// M7-Aufgaben: Modul.plus(() => { Modul.makeOpen(...); }) – für M-Klassen Pflicht, für R-Klassen freiwillig
const plusTasks = new Set();
let PLUS = false, ZUG = "";
function plus(fn){ PLUS = true; try { fn(); } finally { PLUS = false; } }
const freiwillig = id => ZUG === "R" && plusTasks.has(id);
function load(k, d){ try { const v = localStorage.getItem(KEY + k); return v === null ? d : v; } catch (_) { return d; } }
function save(k, v){ try { localStorage.setItem(KEY + k, v); } catch (_) {} }
// el: Element oder CSS-Selektor der Übung, text: Bezeichnung für die Lehreransicht,
// typ: Art der Übung (ergibt mit der Überschrift der Karte die Bezeichnung, wenn text fehlt)
const meta = {};
function register(id, el, text, typ){ tasks.add(id); if (PLUS) plusTasks.add(id); if (el || text || typ) meta[id] = {el, text, typ}; updateStars(); }
function solve(id){ if (!solved[id]) { solved[id] = 1; save("", JSON.stringify(solved)); } updateStars(); if (window.Lernstand) window.Lernstand.geloest(id); }
function updateStars(){
  // Freiwillige Aufgaben (M7-Niveau für R-Klassen) zählen nicht zur Gesamtzahl, gelöste stehen als „+1“ dabei
  const pflicht = [...tasks].filter(t => !freiwillig(t)), n = pflicht.filter(t => solved[t]).length;
  const extra = [...tasks].filter(t => freiwillig(t) && solved[t]).length;
  const s = $("#stars"); if (s) s.textContent = `⭐ ${n} / ${pflicht.length}` + (extra ? ` +${extra}` : ""); save("-total", pflicht.length);
  // Für die Übersicht: genauer Stand (gelöste Pflichtaufgaben, Pflichtaufgaben)
  if (plusTasks.size) save("-stand", JSON.stringify({g: n, t: pflicht.length}));
  // dritter Wert: gelöste Aufgaben und der Aufgabenkatalog (als Funktion, wird nur bei Bedarf berechnet)
  if (onProgress) onProgress(n, pflicht.length, {geloest: [...tasks].filter(t => solved[t]), katalog});
  standPanel(pflicht, n);
}
// Lernfortschritt nach Stationen (nur wenn die Seite ein Element #modulStand hat): Prozent, Balken und je Station
// ein Feld mit ✓ (alles gelöst), ◐ (begonnen) oder ○. Antippen springt zur Station.
let standGeplant = false;
function standPanel(pflicht, n){
  const box = $("#modulStand"); if (!box || standGeplant) return;
  standGeplant = true;
  requestAnimationFrame(() => {
    standGeplant = false;
    const pf = [...tasks].filter(t => !freiwillig(t)), geloest = pf.filter(t => solved[t]).length;
    const pct = pf.length ? Math.round(geloest / pf.length * 100) : 0, kat = katalog(), st = {};
    pf.forEach(id => { const k = kat[id][1] || "?"; (st[k] = st[k] || {g: 0, t: 0}).t++; if (solved[id]) st[k].g++; });
    const namen = {}; $$("#stations a").forEach(a => { const b = $("b", a); if (b) namen[b.textContent.trim()] = a.textContent.replace(b.textContent, "").trim(); });
    box.innerHTML = `<div class="ms-kopf"><strong>Lernfortschritt: ${pct} %</strong><span>${geloest} von ${pf.length} Aufgaben gelöst</span></div>
      <div class="ms-bar"><div style="width:${pct}%"></div></div>
      <div class="ms-teile">${Object.keys(st).sort((a, b) => parseFloat(a) - parseFloat(b)).map(k => { const x = st[k], z = x.g === x.t ? "✓" : x.g ? "◐" : "○";
        return `<a href="#s${esc(k)}" class="${x.g === x.t ? "fertig" : x.g ? "teil" : ""}"><b>${z}</b> ${esc(namen[k] || "Station " + k)} <small>${x.g}/${x.t}</small></a>`; }).join("")}</div>`;
  });
}
// Aufgabenkatalog für die Lehreransicht: { id: [Bezeichnung, Station] }
function katalog(){
  const out = {};
  tasks.forEach(id => {
    const m = meta[id] || {};
    const el = typeof m.el === "string" ? $(m.el) : m.el;
    const sec = el && el.closest ? el.closest("section.station") : null;
    const num = sec ? $(".st-num", sec) : null;
    let h = "";
    if (el && el.closest) {
      const card = el.closest(".card, .sim");
      const hd = card && ($("h3", card) || $(".task-tag", card));
      if (hd) h = hd.textContent.replace(/✨\s*KI prüft/g, "").replace(/\s+/g, " ").trim();
    }
    const label = m.text || (m.typ ? m.typ + (h ? ": " + h : "") : h) || id;
    out[id] = [label.slice(0, 140), num ? num.textContent.trim() : ""];
  });
  return out;
}
// Gelöste Aufgaben von einem anderen Gerät übernehmen (Anmeldung mit Code)
function mehrGeloest(ids){
  let neu = 0;
  (ids || []).forEach(id => { if (tasks.has(id) && !solved[id]) { solved[id] = 1; neu++; } });
  if (neu) { save("", JSON.stringify(solved)); updateStars(); }
  return neu;
}

/* ---------- Grundgerüst ---------- */
// cfg.api: eigene KI-Route (Standard: NT 7), cfg.onProgress(gelöst, gesamt): z. B. für eine Kursübersicht
let BASIS = "";
function init(cfg){
  BASIS = cfg.key;
  // Zug des Kindes (M oder R) für die M7-Aufgaben: aus der Anmeldung oder aus dem Link der Übersicht (themen.js)
  ZUG = KL() ? KL().zug(lsAnmeldung()) : "";
  // Mit Code angemeldet: eigener Stand je Kind auf geteilten Geräten
  KEY = cfg.key + (lsKennung() ? "~" + lsKennung() + "~" : ""); THEMA = cfg.thema || ""; GLOSSARY = cfg.glossary || {};
  if (cfg.api) API = (location.hostname.endsWith("onrender.com") ? "" : "https://englisch-9.onrender.com") + cfg.api;
  onProgress = cfg.onProgress || null;
  try { solved = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (_) { solved = {}; }

  const pop = $("#pop");
  function showTerm(btn){
    const g = GLOSSARY[btn.dataset.t]; if (!g) return;
    $("h5", pop).textContent = g[0]; $("p", pop).textContent = g[1];
    pop.style.display = "block";
    const r = btn.getBoundingClientRect(), w = Math.min(320, innerWidth - 24);
    pop.style.left = clamp(r.left + scrollX, 12, scrollX + innerWidth - w - 12) + "px";
    pop.style.top = (r.bottom + scrollY + 8) + "px";
  }
  document.addEventListener("click", e => {
    const t = e.target.closest(".term");
    if (t) { showTerm(t); e.stopPropagation(); return; }
    if (!e.target.closest("#pop") || e.target.closest(".x")) pop.style.display = "none";
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { pop.style.display = "none"; $("#lb").classList.remove("show"); } });
  const words = $("#words");
  if (words) words.innerHTML = Object.values(GLOSSARY).sort((a, b) => a[0].localeCompare(b[0], "de"))
    .map(g => `<div class="word"><b>${esc(g[0])}</b><p>${esc(g[1])}</p></div>`).join("");

  $$(".zoomable").forEach(img => img.addEventListener("click", () => { $("#lb img").src = img.src; $("#lb img").alt = img.alt; $("#lb").classList.add("show"); }));
  $("#lb").addEventListener("click", () => $("#lb").classList.remove("show"));
  $$("[data-toggle]").forEach(b => b.addEventListener("click", () => $("#" + b.dataset.toggle).classList.toggle("show")));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold: .08});
    $$(".reveal").forEach(el => io.observe(el));
  } else $$(".reveal").forEach(el => el.classList.add("in"));

  const navLinks = $$("#stations a"), stationNav = $("#stations"), sections = $$("section.station"), readbar = $("#readbar");
  let queued = false, cur = undefined;
  function onScroll(){
    queued = false;
    const h = document.documentElement;
    readbar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
    let c = null;
    for (const sec of sections) { if (sec.getBoundingClientRect().top < 140) c = sec.id; else break; }
    if (c === cur) return;
    cur = c;
    navLinks.forEach(a => {
      const on = a.getAttribute("href") === "#" + c;
      a.classList.toggle("active", on);
      // Nur die Stationsleiste waagrecht verschieben – nie die Seite
      if (on) stationNav.scrollTo({left: a.offsetLeft - (stationNav.clientWidth - a.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth"});
    });
  }
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, {passive: true});
  Modul._onScroll = onScroll;

  // Hero: aufsteigende Funken (cfg.hero === "funken") oder vorbeiziehende Windlinien
  const c = $("#heroCanvas");
  if (c && cfg.hero === "funken") {
    const ctx = c.getContext("2d"); let W, H, run = true;
    const P = Array.from({length: 46}, () => ({x: Math.random(), y: Math.random(), r: .8 + Math.random() * 2.2, v: .0012 + Math.random() * .003, a: Math.random() * 6, h: 20 + Math.random() * 30}));
    const size = () => { W = c.width = c.offsetWidth * devicePixelRatio; H = c.height = c.offsetHeight * devicePixelRatio; };
    size(); addEventListener("resize", size);
    onVisible(c, v => { run = v; if (v) requestAnimationFrame(tick); });
    function tick(){
      if (!run) return;
      ctx.clearRect(0, 0, W, H);
      P.forEach(p => {
        if (!reduced) { p.y -= p.v; p.a += .04; if (p.y < -.05) { p.y = 1.05; p.x = Math.random(); } }
        const x = (p.x + Math.sin(p.a) * .01) * W, y = p.y * H, al = Math.min(1, p.y * 1.3) * .75;
        ctx.fillStyle = `hsla(${p.h},100%,65%,${al.toFixed(2)})`;
        ctx.beginPath(); ctx.arc(x, y, p.r * devicePixelRatio, 0, 7); ctx.fill();
      });
      requestAnimationFrame(tick);
    }
  } else if (c) {
    const ctx = c.getContext("2d"); let W, H, run = true;
    const L = Array.from({length: 26}, () => ({x: Math.random(), y: Math.random(), l: .04 + Math.random() * .1, v: .0015 + Math.random() * .003, a: Math.random() * 6}));
    const size = () => { W = c.width = c.offsetWidth * devicePixelRatio; H = c.height = c.offsetHeight * devicePixelRatio; };
    size(); addEventListener("resize", size);
    onVisible(c, v => { run = v; if (v) requestAnimationFrame(tick); });
    function tick(){
      if (!run) return;
      ctx.clearRect(0, 0, W, H); ctx.lineCap = "round"; ctx.lineWidth = 2.5 * devicePixelRatio;
      L.forEach(p => {
        if (!reduced) { p.x += p.v; p.a += .03; if (p.x > 1.15) { p.x = -.15; p.y = Math.random(); } }
        const x = p.x * W, y = p.y * H, len = p.l * W;
        ctx.strokeStyle = "rgba(255,255,255,.22)";
        ctx.beginPath(); ctx.moveTo(x, y);
        ctx.bezierCurveTo(x + len * .33, y + Math.sin(p.a) * 8, x + len * .66, y - Math.sin(p.a) * 8, x + len, y);
        ctx.stroke();
      });
      requestAnimationFrame(tick);
    }
  }
}
/* ---------- Lernstand mit Code (js/lernstand.js) ----------
   Mit Code angemeldet: eigener Speicherstand je Kind (Schlüssel + "~code-123~", wie in NT 9), gelöste Aufgaben
   gehen an die Lehrkraft, oben steht „Das fehlt dir noch“. Kennung „nt7-<Seite>“ aus dem Speicherschlüssel. */
const LS_MODULE = {
  "luft-modul": [1, "Luft – unsichtbar, aber lebenswichtig"], "windkraft-strom": [2, "Windkraft: Strom aus bewegter Luft"],
  "windkraft-procontra": [3, "Windkraft – pro und contra"], "luft-verbrennung": [4, "Luft und Verbrennung"],
  "achtung-explosiv": [5, "Achtung, explosiv!"]
};
// Einmal anmelden: Im selben Browser-Tab gilt die Code-Anmeldung weiter, bis das Kind sich abmeldet, den Tab
// schließt oder länger als 10 Minuten nichts tippt oder anklickt. Ein neuer Tab fragt wieder nach dem Code.
// Derselbe Block steht in allen Skripten, die die Anmeldung lesen (js/lernstand.js, js/klasse.js, NT, Deutsch …).
function grumiTab() {
  if (window.GrumiTab) return window.GrumiTab;
  var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
  function lies() { try { return JSON.parse(sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
  function merken(code) { try { sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
  function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
  ["pointerdown", "keydown"].forEach(function (n) { document.addEventListener(n, taetig, true); });
  return (window.GrumiTab = {
    merken: merken,
    gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
    ende: function () { try { sessionStorage.removeItem(K); } catch (_e) {} }
  });
}
function anmeldungLadung() {
  var p = window.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
  return t ? String(t) : (window.__grumiLadung = window.__grumiLadung || String(Math.random()));
}
function anmeldungGueltig(s) {
  if (!s || !s.code || !s.kennung) return null;
  if (s.ladung && s.ladung === anmeldungLadung()) { grumiTab().merken(s.code); return s; }
  if ((s.frisch && s.frisch === location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
    delete s.frisch; s.ladung = anmeldungLadung();
    try { localStorage.setItem("grumi-code-anmeldung", JSON.stringify(s)); } catch (_e) {}
    grumiTab().merken(s.code); return s;
  }
  return null;
}
function lsAnmeldung(){
  try { const s = anmeldungGueltig(JSON.parse(localStorage.getItem("grumi-code-anmeldung") || "null")); return s && s.code && s.kennung ? s : null; } catch (_) { return null; }
}
function lsKennung(){ const s = lsAnmeldung(); return s ? s.kennung : ""; }
function lernstand(basis){
  const K = KL() || {}, kurs = K.KURS || "nt7", pre = K.PREFIX || "grumi-nt7-";
  const name = (String(basis).indexOf(pre) === 0 ? String(basis).slice(pre.length) : String(basis)).replace(/-v\d+$/, "");
  // Nummer, Titel und Themenbereich kommen aus themen.js; die fünf ersten Module stehen zur Sicherheit auch hier
  const reg = KL() ? KL().modulVon(name) : null;
  const info = reg ? [reg.nr, reg.modul.titel] : (LS_MODULE[name] || [0, document.title.split("|")[0].trim()]);
  const bereich = reg ? reg.thema.titel : "Luft", bnr = reg ? parseInt(reg.thema.nr, 10) || 1 : 1;
  const kat = katalog(), zaehler = {};
  const aufgaben = [...tasks].map(id => {
    // „Plus“ = M7-Aufgabe: zählt für R-Klassen nicht (so wertet auch die Verwaltung der Lehrkraft)
    const teil = plusTasks.has(id) ? "Plus" : kat[id][1] ? "Station " + kat[id][1] : "Aufgaben";
    zaehler[teil] = (zaehler[teil] || 0) + 1;
    const m = meta[id] || {}, el = typeof m.el === "string" ? $(m.el) : m.el;
    return {id, teil, kurz: String(zaehler[teil]), text: kat[id][0], label: kat[id][0], el: el || null};
  });
  const los = () => window.Lernstand.seite({kurs, modul: kurs + "-" + name, bereich, bnr, nr: info[0], kurz: (K.WORT || "Modul") + " " + info[0],
    titel: info[1], aufgaben, anker: $("section.station"), mehrGeloest: ids => mehrGeloest(ids),
    freiwillig: a => ZUG === "R" && a.teil === "Plus"});
  if (window.Lernstand) { los(); return; }
  const s = document.createElement("script");
  s.src = new URL("../../js/lernstand.js", LS_SKRIPT || location.href).href;
  s.onload = () => { if (window.Lernstand) los(); };
  document.head.appendChild(s);
}
/* ---------- Freischaltung durch die Lehrkraft (themen.js) ----------
   Ist das Modul für die Klasse des Kindes gesperrt, verdeckt ein Hinweis die Stationen. Erst gilt der zuletzt
   bekannte Stand des Geräts, dann der vom Server. Lernsteuerung, kein Geheimnisschutz. */
function sperre(){
  const N = KL(), reg = N ? N.modulVon(N.idAusKey(BASIS)) : null;
  if (!reg) return;
  const main = $("main"); if (!main) return;
  let box = $("#nt7Sperre");
  // art: "warten" (Stand wird geholt), "fehler" (Server antwortet nicht), sonst gesperrt
  const zeig = (zu, text, art) => {
    document.body.classList.toggle("nt7-zu", zu);
    if (!zu) { if (box) box.remove(); box = null; return; }
    if (!box) { box = document.createElement("div"); box.id = "nt7Sperre"; box.className = "wrap"; main.parentNode.insertBefore(box, main); }
    box.innerHTML = `<div class="card nt7-sperre"><div class="big">${art === "warten" ? "⏳" : art === "fehler" ? "📡" : "🔒"}</div>
      <h2>${art === "warten" ? "Einen Moment …" : art === "fehler" ? "Das lässt sich gerade nicht prüfen" : esc(N.SPERRE || "Dieses Modul ist noch nicht freigeschaltet")}</h2>
      <p class="lead">${esc(text)}</p><nav class="navlinks light">${art === "fehler" ? '<a href="#" class="nochmal">↻ Noch einmal versuchen</a>' : ""}<a href="index.html">${esc(N.ZURUECK || "📘 Zur Übersicht NT 7")}</a><a href="../../index.html">🏠 Startseite</a></nav></div>`;
    const nochmal = $(".nochmal", box); if (nochmal) nochmal.addEventListener("click", e => { e.preventDefault(); location.reload(); });
  };
  if (N.VORSCHAU) {
    const v = document.createElement("div"); v.className = "nt7-vorschau"; v.textContent = "👁 Vorschau für Lehrkräfte – ob die Klasse " + (N.WORT === "Einheit" ? "diese Einheit" : "dieses Modul") + " sieht, steht in der Verwaltung.";
    document.body.insertBefore(v, document.body.firstChild); return;
  }
  const a = lsAnmeldung(), es = N.ES || "es";
  if (!a) { zeig(!N.offen(reg.modul, reg.thema, null), "Deine Lehrkraft schaltet " + es + " für deine Klasse frei. Melde dich mit deinem Code an, dann siehst du, was für dich offen ist."); return; }
  let bekannt = false;
  if (!reg.modul.offen) zeig(true, "Ich sehe nach, ob deine Lehrkraft " + (N.DAS || "das Modul") + " für deine Klasse freigeschaltet hat.", "warten");
  N.freigabe(a, stand => { bekannt = true; zeig(!N.offen(reg.modul, reg.thema, stand), "Deine Lehrkraft schaltet " + es + " frei, wenn ihr im Unterricht so weit seid. Frag sie, wenn du schon weiterlernen möchtest."); },
    (text, wachtAuf) => { if (!bekannt && !reg.modul.offen) zeig(true, text || "Der Server antwortet gerade nicht. Versuche es gleich noch einmal.", wachtAuf ? "warten" : "fehler"); });
}
function ready(){
  if (Modul._onScroll) Modul._onScroll(); updateStars();
  // Ältere Module binden themen.js nicht selbst ein: nachladen, dann Lernstand und Freischaltung
  // In der Vorschau für Lehrkräfte (?vorschau=1) gibt es keine Anmeldung und keinen Lernstand
  const weiter = () => { ZUG = ZUG || (KL() ? KL().zug(lsAnmeldung()) : ""); if (!(KL() && KL().VORSCHAU)) lernstand(BASIS); sperre(); };
  if (KL()) { weiter(); return; }
  const s = document.createElement("script");
  s.src = new URL("themen.js", LS_SKRIPT || location.href).href;
  s.onload = weiter; s.onerror = () => lernstand(BASIS);
  document.head.appendChild(s);
}

/* ---------- Ankreuzen ---------- */
function makeMC(container, list, idPrefix, tag){
  container.innerHTML = tag ? `<span class="task-tag ${tag.probe ? "probe" : ""}">${esc(tag.t)}</span>` : "";
  list.forEach((q, qi) => {
    const id = idPrefix + "-" + qi; register(id, container, "Ankreuzen: " + q.q);
    const multi = Array.isArray(q.a);
    const el = document.createElement("div"); el.className = "q";
    const order = shuffle(q.o.map((t, i) => ({t, i})));
    el.innerHTML = `<div class="q-title">${qi + 1}. ${esc(q.q)}${multi ? ' <span class="hint">(mehrere Antworten richtig)</span>' : ""}</div>${q.h || ""}
      <div class="opts">${order.map(o => `<button class="opt ${multi ? "" : "round"}" data-i="${o.i}"><span class="box"></span><span>${esc(o.t)}</span></button>`).join("")}</div>
      ${multi ? '<div class="row-btns"><button class="btn small check">Prüfen</button></div>' : ""}<div class="fb"></div>`;
    const fb = $(".fb", el), opts = $$(".opt", el);
    const finish = ok => { fb.className = "fb show " + (ok ? "ok" : "bad"); fb.innerHTML = (ok ? "✅ Richtig! " : "❌ Noch nicht. ") + esc(q.e || ""); if (ok) solve(id); };
    if (!multi) {
      opts.forEach(b => b.addEventListener("click", () => {
        const ok = +b.dataset.i === q.a;
        opts.forEach(o => o.classList.remove("wrong"));
        b.classList.add(ok ? "right" : "wrong"); if (ok) { opts.forEach(o => o.disabled = true); $(".box", b).textContent = "✓"; }
        finish(ok);
      }));
    } else {
      opts.forEach(b => b.addEventListener("click", () => { b.classList.toggle("sel"); $(".box", b).textContent = b.classList.contains("sel") ? "✓" : ""; opts.forEach(o => o.classList.remove("right", "wrong")); fb.className = "fb"; }));
      $(".check", el).addEventListener("click", () => {
        let ok = true;
        opts.forEach(o => { const should = q.a.includes(+o.dataset.i), sel = o.classList.contains("sel"); if (sel) o.classList.add(should ? "right" : "wrong"); if (should !== sel) ok = false; });
        finish(ok);
      });
    }
    container.appendChild(el);
  });
}

/* ---------- Lückentext: erst Lücke, dann Wort antippen ---------- */
function makeGap(box, paras, id, extra){
  register(id, box, null, "Lückentext");
  const answers = [];
  const html = paras.map(p => "<p>" + p.map(part => typeof part === "string" ? part : `<button class="gap" data-i="${answers.push(part.g) - 1}">&nbsp;</button>`).join("") + "</p>").join("");
  const bank = answers.map((w, i) => ({w, i})).concat((extra || []).map((w, i) => ({w, i: "x" + i})));
  box.innerHTML = `<div class="bank">${shuffle(bank).map(o => `<button class="tok" data-w="${esc(o.w)}" data-k="${o.i}">${o.w}</button>`).join("")}</div>${html}
    <div class="row-btns"><button class="btn small check">Prüfen</button><button class="btn small ghost reset">Zurücksetzen</button></div><div class="fb"></div>`;
  let active = null;
  const gaps = $$(".gap", box), toks = $$(".bank .tok", box), fb = $(".fb", box);
  const setActive = g => { active = g; gaps.forEach(x => x.classList.toggle("active", x === g)); };
  function clear(g){ const t = toks.find(t => t.dataset.k === g.dataset.k); if (t) t.classList.remove("used"); delete g.dataset.v; delete g.dataset.k; g.innerHTML = "&nbsp;"; g.classList.remove("right", "wrong"); }
  gaps.forEach(g => g.addEventListener("click", () => { if (g.dataset.v) clear(g); setActive(g); }));
  setActive(gaps[0]);
  toks.forEach(t => t.addEventListener("click", () => {
    if (t.classList.contains("used")) return;
    const g = active || gaps.find(x => !x.dataset.v); if (!g) return;
    if (g.dataset.v) clear(g);
    g.dataset.v = t.dataset.w; g.dataset.k = t.dataset.k; g.innerHTML = t.innerHTML; t.classList.add("used");
    fb.className = "fb"; setActive(gaps.find(x => !x.dataset.v) || null);
  }));
  $(".check", box).addEventListener("click", () => {
    let ok = 0; gaps.forEach((g, i) => { const r = g.dataset.v === answers[i]; g.classList.toggle("right", r); g.classList.toggle("wrong", !!g.dataset.v && !r); if (r) ok++; });
    fb.className = "fb show " + (ok === gaps.length ? "ok" : "bad");
    fb.textContent = ok === gaps.length ? "✅ Alles richtig!" : `${ok} von ${gaps.length} richtig. Tippe auf eine rote Lücke, um sie zu leeren.`;
    if (ok === gaps.length) solve(id);
  });
  $(".reset", box).addEventListener("click", () => { gaps.forEach(clear); setActive(gaps[0]); fb.className = "fb"; });
}

/* ---------- Zuordnen (Tippen oder Ziehen) ---------- */
function makeSort(container, cfg, id){
  register(id, container, null, "Zuordnen");
  container.innerHTML = `<div class="pool"></div><div class="buckets ${cfg.pairs ? "pairs" : ""}" ${cfg.cols ? `style="grid-template-columns:repeat(auto-fit,minmax(${cfg.cols}px,1fr))"` : ""}>${cfg.buckets.map((b, i) => `<div class="bucket" data-b="${i}"><h5>${b}</h5><div class="in"></div></div>`).join("")}</div>
    <div class="row-btns"><button class="btn small check">Prüfen</button><button class="btn small ghost reset">Zurücksetzen</button></div><div class="fb"></div>`;
  const pool = $(".pool", container), buckets = $$(".bucket", container), fb = $(".fb", container);
  let picked = null;
  const toks = shuffle(cfg.items).map(it => { const t = document.createElement("button"); t.className = "tok"; t.textContent = it.t; t.dataset.b = it.b; t.draggable = true; pool.appendChild(t); return t; });
  const markTargets = on => buckets.forEach(b => b.classList.toggle("target", on));
  function place(t, bucket){
    t.classList.remove("picked", "right", "wrong");
    const inBox = $(".in", bucket);
    if (cfg.pairs && inBox.children.length) pool.appendChild(inBox.firstElementChild);
    inBox.appendChild(t); picked = null; markTargets(false); fb.className = "fb";
  }
  toks.forEach(t => {
    t.addEventListener("click", e => {
      e.stopPropagation();
      if (picked === t) { t.classList.remove("picked"); picked = null; markTargets(false); return; }
      if (t.parentElement !== pool && !picked) { pool.appendChild(t); t.classList.remove("right", "wrong"); return; }
      if (picked) picked.classList.remove("picked");
      picked = t; t.classList.add("picked"); markTargets(true);
    });
    t.addEventListener("dragstart", e => { picked = t; e.dataTransfer.setData("text/plain", ""); markTargets(true); });
    t.addEventListener("dragend", () => markTargets(false));
  });
  buckets.forEach(b => {
    b.addEventListener("click", () => { if (picked) place(picked, b); });
    b.addEventListener("dragover", e => e.preventDefault());
    b.addEventListener("drop", e => { e.preventDefault(); if (picked) place(picked, b); });
  });
  pool.addEventListener("dragover", e => e.preventDefault());
  pool.addEventListener("drop", e => { e.preventDefault(); if (picked) { pool.appendChild(picked); picked.classList.remove("picked"); picked = null; markTargets(false); } });
  $(".check", container).addEventListener("click", () => {
    let ok = 0;
    toks.forEach(t => { const b = t.closest(".bucket"); t.classList.remove("right", "wrong"); if (b) { const r = b.dataset.b === String(t.dataset.b); t.classList.add(r ? "right" : "wrong"); if (r) ok++; } });
    const all = ok === toks.length;
    fb.className = "fb show " + (all ? "ok" : "bad");
    fb.textContent = all ? (cfg.done || "✅ Alles richtig zugeordnet!") : `${ok} von ${toks.length} richtig. Tippe falsche Karten an, um sie zurückzulegen.`;
    if (all) { solve(id); if (cfg.onDone) cfg.onDone(); }
  });
  $(".reset", container).addEventListener("click", () => { toks.forEach(t => { t.classList.remove("right", "wrong", "picked"); pool.appendChild(t); }); fb.className = "fb"; picked = null; markTargets(false); });
}

/* ---------- Richtig / Falsch ---------- */
function makeTF(box, list, id){
  register(id, box, null, "Richtig oder falsch");
  box.innerHTML = `<div class="tf">${list.map((t, i) => `<div class="tf-row" data-i="${i}"><span>${esc(t[0])}</span><div class="tf-btns"><button data-v="1">richtig</button><button data-v="0">falsch</button></div></div>`).join("")}</div>
    <div class="row-btns"><button class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  $$(".tf-row", box).forEach(row => $$("button", row).forEach(b => b.addEventListener("click", () => { $$("button", row).forEach(x => x.classList.toggle("sel", x === b)); row.classList.remove("right", "wrong"); })));
  $(".check", box).addEventListener("click", () => {
    let ok = 0, open = 0;
    $$(".tf-row", box).forEach(row => { const s = $("button.sel", row); row.classList.remove("right", "wrong"); if (!s) { open++; return; } const r = (s.dataset.v === "1") === list[row.dataset.i][1]; row.classList.add(r ? "right" : "wrong"); if (r) ok++; });
    const fb = $(".fb", box); fb.className = "fb show " + (ok === list.length ? "ok" : "bad");
    fb.textContent = ok === list.length ? "✅ Perfekt – alle Aussagen richtig bewertet!" : `${ok} von ${list.length} richtig.${open ? ` ${open} noch offen.` : ""}`;
    if (ok === list.length) solve(id);
  });
}

/* ---------- Reihenfolge ordnen ---------- */
function makeOrder(box, steps, id){
  register(id, box, null, "Reihenfolge");
  let order = shuffle(steps.map((t, i) => i));
  while (steps.length > 1 && order.every((v, i) => v === i)) order = shuffle(order);
  box.innerHTML = `<div class="order-list"></div><div class="row-btns"><button class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  const list = $(".order-list", box), fb = $(".fb", box);
  function draw(){
    list.innerHTML = order.map((k, i) => `<div class="order-item" data-k="${k}"><span class="n">${i + 1}</span><span class="t">${esc(steps[k])}</span><span class="mv"><button data-m="-1" aria-label="nach oben" ${i ? "" : "disabled"}>▲</button><button data-m="1" aria-label="nach unten" ${i < order.length - 1 ? "" : "disabled"}>▼</button></span></div>`).join("");
    $$(".order-item", list).forEach((row, i) => $$("button", row).forEach(b => b.addEventListener("click", () => {
      const j = i + +b.dataset.m; [order[i], order[j]] = [order[j], order[i]]; fb.className = "fb"; draw();
    })));
  }
  draw();
  $(".check", box).addEventListener("click", () => {
    let ok = 0; $$(".order-item", list).forEach((row, i) => { const r = +row.dataset.k === i; row.classList.add(r ? "right" : "wrong"); if (r) ok++; });
    fb.className = "fb show " + (ok === steps.length ? "ok" : "bad");
    fb.textContent = ok === steps.length ? "✅ Richtige Reihenfolge!" : `${ok} von ${steps.length} stehen schon richtig. Verschiebe die roten Schritte.`;
    if (ok === steps.length) solve(id);
  });
}

/* ---------- Bild beschriften (Arbeitsblatt) ---------- */
// cfg: {img, alt, w, h, slots:[{x,y,px,py,a,arrow}], extra:[Ablenker], hint}
// x/y = Mitte des Kästchens, px/py = Bauteil, auf das die Linie zeigt (alles in Prozent)
function makeLabel(box, cfg, id){
  register(id, box, null, "Beschriften");
  const lines = cfg.slots.map(s => `<line x1="${s.x}" y1="${s.y}" x2="${s.px}" y2="${s.py}" stroke="${s.arrow ? "#e0453a" : "#0d77c2"}" stroke-width="${s.arrow ? 4 : 2.5}" vector-effect="non-scaling-stroke" ${s.arrow ? 'stroke-dasharray="7 5"' : ""}/>`).join("");
  box.innerHTML = `<div class="label-wrap"><div class="label-img"><img src="${cfg.img}" width="${cfg.w}" height="${cfg.h}" alt="${esc(cfg.alt)}"><svg class="leads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${cfg.slots.map(s => `<span class="dot" style="left:${s.px}%;top:${s.py}%"></span>`).join("")}${cfg.slots.map((s, i) => `<button class="slot${s.arrow ? " arrow-slot" : ""}" data-i="${i}" style="left:${s.x}%;top:${s.y}%">?</button>`).join("")}</div>
    <div><p class="hint">${cfg.hint || "Tippe zuerst auf einen Begriff und dann auf das passende Kästchen im Bild. Die Pfeile (➜) zeigen, wo Energie hinein- oder hinausgeht."}</p><div class="label-pool"></div>
    <div class="row-btns"><button class="btn small check">Prüfen</button><button class="btn small ghost reset">Zurücksetzen</button></div><div class="fb"></div></div></div>`;
  const pool = $(".label-pool", box), slots = $$(".slot", box), fb = $(".fb", box);
  let picked = null;
  const words = shuffle(cfg.slots.map(s => s.a).concat(cfg.extra || []));
  const toks = words.map(w => { const t = document.createElement("button"); t.className = "tok"; t.textContent = w; pool.appendChild(t); return t; });
  const mark = on => slots.forEach(s => s.classList.toggle("target", on && !s.dataset.v));
  function empty(s){ const t = toks.find(t => t.dataset.slot === s.dataset.i); if (t) { t.hidden = false; delete t.dataset.slot; } delete s.dataset.v; s.textContent = "?"; s.classList.remove("filled", "right", "wrong"); }
  toks.forEach(t => t.addEventListener("click", () => {
    if (picked === t) { t.classList.remove("picked"); picked = null; mark(false); return; }
    if (picked) picked.classList.remove("picked");
    picked = t; t.classList.add("picked"); mark(true);
  }));
  slots.forEach(s => s.addEventListener("click", () => {
    if (!picked) { if (s.dataset.v) empty(s); return; }
    if (s.dataset.v) empty(s);
    s.dataset.v = picked.textContent; s.innerHTML = (cfg.slots[s.dataset.i].arrow ? '<span class="ar">➜</span>' : "") + esc(picked.textContent); s.classList.add("filled");
    picked.hidden = true; picked.dataset.slot = s.dataset.i; picked.classList.remove("picked"); picked = null; mark(false); fb.className = "fb";
  }));
  $(".check", box).addEventListener("click", () => {
    let ok = 0; slots.forEach(s => { const r = s.dataset.v === cfg.slots[s.dataset.i].a; s.classList.toggle("right", r); s.classList.toggle("wrong", !!s.dataset.v && !r); if (r) ok++; });
    fb.className = "fb show " + (ok === slots.length ? "ok" : "bad");
    fb.textContent = ok === slots.length ? "✅ Alles richtig beschriftet!" : `${ok} von ${slots.length} richtig. Tippe auf ein rotes Kästchen, um es zu leeren.`;
    if (ok === slots.length) { solve(id); confetti(); }
  });
  $(".reset", box).addEventListener("click", () => { slots.forEach(empty); fb.className = "fb"; });
}

/* ---------- Bild mit Hotspots ---------- */
function makeHotspots(box, info, countEl, list, id){
  register(id, box, null, "Bild erkunden");
  const seen = new Set();
  list.forEach((h, i) => {
    const b = document.createElement("button"); b.className = "hs"; b.style.left = h.x + "%"; b.style.top = h.y + "%";
    b.textContent = i + 1; b.setAttribute("aria-label", h.t);
    b.addEventListener("click", () => {
      seen.add(i); b.classList.add("seen");
      info.innerHTML = `<div class="big">${h.i}</div><h3 style="margin:.3em 0 .2em">${esc(h.t)}</h3><p class="lead" style="margin:0">${h.s}</p>`;
      info.animate && info.animate([{opacity: 0, transform: "translateY(8px)"}, {opacity: 1, transform: "none"}], {duration: 250});
      countEl.textContent = seen.size === list.length ? `🎉 Alle ${list.length} entdeckt!` : `${seen.size} von ${list.length} entdeckt`;
      if (seen.size === list.length) solve(id);
    });
    box.appendChild(b);
  });
}

/* ---------- Kreuzworträtsel ---------- */
// cfg: {words:[{w,r,c,d:"a"|"d",q,num}], sol:[[r,c],...], solWord, pre:["r,c"], umlaut}
// num: feste Nummer wie auf dem Arbeitsblatt; umlaut: Ä, Ö, Ü stehen in einem eigenen Kästchen
function makeCrossword(box, cfg, id){
  register(id, box, null, "Kreuzworträtsel");
  const W = cfg.words.slice().sort((a, b) => a.r - b.r || a.c - b.c);
  let n = 0; const starts = {};
  W.forEach(w => { const k = w.r + "," + w.c; if (!starts[k]) starts[k] = w.num || ++n; w.n = starts[k]; });
  const ROWS = Math.max(...W.map(w => w.r + (w.d === "d" ? w.w.length : 1))), COLS = Math.max(...W.map(w => w.c + (w.d === "a" ? w.w.length : 1)));
  const grid = {};
  W.forEach(w => [...w.w].forEach((ch, i) => { const k = (w.r + (w.d === "d" ? i : 0)) + "," + (w.c + (w.d === "a" ? i : 0)); (grid[k] = grid[k] || {ch, words: []}).words.push(w); }));
  const pre = new Set(cfg.pre || []);
  const byDir = d => W.filter(w => w.d === d).sort((a, b) => a.n - b.n).map(w => `<li value="${w.n}" data-id="${W.indexOf(w)}">${esc(w.q)} <span class="hint">(${w.w.length})</span></li>`).join("");
  box.innerHTML = `<div class="cw-wrap"><div><div class="cw" style="--cols:${COLS}"></div></div><div class="clues">
    <strong>Waagrecht →</strong><ol>${byDir("a")}</ol><strong style="display:block;margin-top:10px">Senkrecht ↓</strong><ol>${byDir("d")}</ol>
    ${cfg.sol ? `<p style="margin:14px 0 0"><strong>Lösungswort</strong> (graue Kästchen der Reihe nach):</p><div class="solword">${cfg.sol.map(() => "<span></span>").join("")}</div>` : ""}
    <div class="row-btns"><button class="btn small check">Prüfen</button><button class="btn small ghost hint1">Tipp: ein Buchstabe</button><button class="btn small ghost clear">Leeren</button></div><div class="fb"></div></div></div>`;
  const cw = $(".cw", box), cells = {};
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
    const k = r + "," + c, g = grid[k], div = document.createElement("div");
    if (!g) { cw.appendChild(div); continue; }
    div.className = "cell" + (pre.has(k) ? " pre" : "");
    if (cfg.sol && cfg.sol.some(([a, b]) => a === r && b === c)) div.classList.add("sol");
    div.innerHTML = (starts[k] ? `<span class="num">${starts[k]}</span>` : "") + `<input maxlength="2" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Zeile ${r + 1}, Spalte ${c + 1}">`;
    const inp = $("input", div);
    if (pre.has(k)) { inp.value = g.ch; inp.readOnly = true; }
    cells[k] = {div, inp, g, r, c}; cw.appendChild(div);
  }
  let dir = "a", curWord = null;
  const cellsOf = w => [...w.w].map((_, i) => cells[(w.r + (w.d === "d" ? i : 0)) + "," + (w.c + (w.d === "a" ? i : 0))]);
  function highlight(w){
    curWord = w;
    Object.values(cells).forEach(x => x.div.classList.toggle("hl", !!w && x.g.words.includes(w)));
    $$(".clues li", box).forEach(li => li.classList.toggle("cur", !!w && W[li.dataset.id] === w));
  }
  const wordAt = (cell, prefer) => cell.g.words.find(w => w.d === prefer) || cell.g.words[0];
  function focusNext(cell, back){
    if (!curWord) return;
    const list = cellsOf(curWord); let j = list.indexOf(cell) + (back ? -1 : 1);
    while (list[j] && list[j].inp.readOnly) j += back ? -1 : 1;
    if (list[j]) list[j].inp.focus();
  }
  function update(){
    if (cfg.sol) { const sp = $$(".solword span", box); cfg.sol.forEach(([r, c], i) => sp[i].textContent = cells[r + "," + c].inp.value); }
    $$(".clues li", box).forEach(li => li.classList.toggle("done", cellsOf(W[li.dataset.id]).every(x => x.inp.value === x.g.ch)));
  }
  Object.values(cells).forEach(cell => {
    cell.inp.addEventListener("focus", () => highlight(wordAt(cell, dir)));
    cell.inp.addEventListener("click", () => {
      if (cell.g.words.length > 1 && cell.clicked) { dir = dir === "d" ? "a" : "d"; highlight(wordAt(cell, dir)); }
      cell.clicked = true; setTimeout(() => cell.clicked = false, 1500);
      if (curWord) dir = curWord.d;
    });
    cell.inp.addEventListener("input", () => {
      let v = cell.inp.value.toUpperCase();
      v = cfg.umlaut ? v.replace(/ß/g, "SS").replace(/[^A-ZÄÖÜ]/g, "") : v.replace(/Ä/g, "AE").replace(/Ö/g, "OE").replace(/Ü/g, "UE").replace(/ß/g, "SS").replace(/[^A-Z]/g, "");
      v = v.slice(-1); cell.inp.value = v; cell.div.classList.remove("wrong", "right");
      update(); if (v) focusNext(cell);
    });
    cell.inp.addEventListener("keydown", e => {
      const mv = {ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1]}[e.key];
      if (mv) { e.preventDefault(); const nx = cells[(cell.r + mv[0]) + "," + (cell.c + mv[1])]; if (nx) { dir = mv[0] ? "d" : "a"; nx.inp.focus(); } }
      if (e.key === "Backspace" && !cell.inp.value) { e.preventDefault(); focusNext(cell, true); }
    });
  });
  $$(".clues li", box).forEach(li => li.addEventListener("click", () => { const w = W[li.dataset.id]; dir = w.d; highlight(w); (cellsOf(w).find(x => !x.inp.value && !x.inp.readOnly) || cellsOf(w)[0]).inp.focus(); }));
  const fb = $(".fb", box);
  $(".check", box).addEventListener("click", () => {
    let emptyN = 0, wrong = 0;
    Object.values(cells).forEach(x => { x.div.classList.remove("wrong", "right"); if (!x.inp.value) emptyN++; else if (x.inp.value !== x.g.ch) { wrong++; x.div.classList.add("wrong"); } else if (!x.inp.readOnly) x.div.classList.add("right"); });
    if (!emptyN && !wrong) { fb.className = "fb show ok"; fb.innerHTML = "🎉 Alles richtig!" + (cfg.solWord ? ` Das Lösungswort ist <strong>${esc(cfg.solWord)}</strong>.` : ""); const sw = $(".solword", box); if (sw) sw.classList.add("win"); solve(id); confetti(); }
    else { fb.className = "fb show " + (wrong ? "bad" : "mid"); fb.textContent = (wrong ? `${wrong} Buchstabe(n) sind falsch (rot markiert). ` : "") + (emptyN ? `${emptyN} Kästchen sind noch leer.` : ""); }
  });
  $(".hint1", box).addEventListener("click", () => {
    const open = Object.values(cells).filter(x => x.inp.value !== x.g.ch); if (!open.length) return;
    const x = open[Math.floor(Math.random() * open.length)];
    x.inp.value = x.g.ch; x.div.classList.remove("wrong"); x.div.animate && x.div.animate([{background: "#fff3c4"}, {background: ""}], {duration: 900}); update();
  });
  $(".clear", box).addEventListener("click", () => { Object.values(cells).forEach(x => { if (!x.inp.readOnly) x.inp.value = ""; x.div.classList.remove("wrong", "right"); }); const sw = $(".solword", box); if (sw) sw.classList.remove("win"); fb.className = "fb"; update(); });
  update();
}

/* ---------- Offene Fragen mit KI-Rückmeldung ---------- */
let API = (location.hostname.endsWith("onrender.com") ? "" : "https://englisch-9.onrender.com") + "/api/nt7/uebung/feedback";
// Fragt die KI-Rückmeldung ab. Liefert das Ergebnis nur, wenn wirklich die KI geantwortet hat, sonst null.
// onSlow wird aufgerufen, wenn der Server erst aufwachen muss.
async function askKI(body, onSlow){
  const slow = setTimeout(() => onSlow && onSlow(), 7000);
  try {
    const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 75000);
    const r = await fetch(API, {method: "POST", headers: {"Content-Type": "application/json"}, signal: ctl.signal, body: JSON.stringify(Object.assign({thema: THEMA}, body))});
    clearTimeout(to);
    if (!r.ok) return null;
    const res = await r.json();
    return res && res.quelle === "ki" ? res : null;
  } catch (_) { return null; } finally { clearTimeout(slow); }
}
function makeOpen(box, list, prefix, fallbackTip){
  list.forEach((o, i) => {
    const id = prefix + i; register(id, box, "Offene Frage: " + o.q);
    const el = document.createElement("div"); el.className = "q ki";
    el.innerHTML = `<div class="q-title">${i + 1}. ${esc(o.q)}</div><textarea placeholder="Deine Antwort …" aria-label="Antwort zu Frage ${i + 1}"></textarea>
      <div class="row-btns"><button class="btn small teal go">✨ Antwort prüfen</button><button class="btn small ghost show-model" hidden>Musterlösung</button></div>
      <div class="status"></div><div class="fb"></div><div class="model"><strong>Musterlösung:</strong> ${esc(o.m)}</div>`;
    const ta = $("textarea", el), go = $(".go", el), st = $(".status", el), fb = $(".fb", el), sm = $(".show-model", el), model = $(".model", el);
    ta.value = load("-" + id, "");
    ta.addEventListener("input", () => save("-" + id, ta.value));
    sm.addEventListener("click", () => model.classList.toggle("show"));
    go.addEventListener("click", async () => {
      const antwort = ta.value.trim();
      if (antwort.length < 3) { fb.className = "fb show mid"; fb.textContent = "Schreib zuerst eine Antwort."; return; }
      go.disabled = true; fb.className = "fb"; st.innerHTML = '<span class="dots">Die KI liest deine Antwort</span>';
      const res = await askKI({frage: o.q, erwartet: o.m, antwort, keywords: o.k.map(x => x.split("|")[0])},
        () => st.innerHTML = '<span class="dots">Der KI-Server wacht gerade auf – das kann bis zu einer Minute dauern</span>') || localCheck(antwort, o);
      go.disabled = false;
      st.textContent = res.quelle === "ki" ? "✨ Rückmeldung der KI" : "Offline-Prüfung nach Fachbegriffen (die KI war nicht erreichbar)";
      fb.className = "fb show " + (res.richtig ? "ok" : res.teilweise ? "mid" : "bad");
      fb.innerHTML = (res.richtig ? "✅ " : res.teilweise ? "🟡 " : "❌ ") + esc(res.rueckmeldung || "") + (res.tipp ? `<br><strong>Tipp:</strong> ${esc(res.tipp)}` : "");
      sm.hidden = false;
      if (res.richtig) solve(id);
    });
    box.appendChild(el);
  });
  function localCheck(text, o){
    // o.min: so viele der Begriffsgruppen genügen (z. B. „nenne drei von fünf Nachteilen“)
    const t = norm(text), hits = o.k.filter(g => g.split("|").some(w => t.includes(norm(w)))).length;
    if (hits >= (o.min || o.k.length)) return {richtig: true, teilweise: false, rueckmeldung: "Die wichtigen Fachinhalte sind enthalten.", tipp: "", quelle: "lokal"};
    if (hits >= 1) return {richtig: false, teilweise: true, rueckmeldung: "Ein guter Anfang – es fehlt aber noch etwas Wichtiges.", tipp: "Vergleiche mit dem Merke-Kasten und ergänze den fehlenden Teil.", quelle: "lokal"};
    return {richtig: false, teilweise: false, rueckmeldung: "Hier fehlen die wichtigen Fachbegriffe noch.", tipp: fallbackTip || "Lies die passende Station noch einmal.", quelle: "lokal"};
  }
}

/* ---------- Abschlussquiz ---------- */
function makeQuiz(box, pool, id, profi){
  register(id, box, "Profi-Check (Abschlussquiz)");
  pool = pool.filter(q => !Array.isArray(q.a));
  const N = Math.min(10, pool.length);
  let qs, i, score;
  function start(){
    qs = shuffle(pool).slice(0, N); i = 0; score = 0;
    box.innerHTML = `<p class="lead" style="margin:0 0 8px">${N} zufällige Fragen aus allen Stationen. Schaffst du ${N - 2} oder mehr?</p><div class="quiz-top"><div class="qbar"><div style="width:0"></div></div><span class="chip qc">1 / ${N}</span></div><div class="qbox"></div>`;
    show();
  }
  function show(){
    const q = qs[i], order = shuffle(q.o.map((t, k) => ({t, k})));
    $(".qbar div", box).style.width = (i / N * 100) + "%"; $(".qc", box).textContent = `${i + 1} / ${N}`;
    const qb = $(".qbox", box); qb.innerHTML = `<div class="q-title" style="font-size:1.1rem">${esc(q.q)}</div><div class="opts">${order.map(o => `<button class="opt round" data-k="${o.k}"><span class="box"></span><span>${esc(o.t)}</span></button>`).join("")}</div><div class="fb"></div>`;
    qb.animate && qb.animate([{opacity: 0, transform: "translateX(20px)"}, {opacity: 1, transform: "none"}], {duration: 250});
    $$(".opt", qb).forEach(b => b.addEventListener("click", () => {
      const ok = +b.dataset.k === q.a; if (ok) score++;
      $$(".opt", qb).forEach(o => { o.disabled = true; if (+o.dataset.k === q.a) { o.classList.add("right"); $(".box", o).textContent = "✓"; } });
      if (!ok) b.classList.add("wrong");
      const fb = $(".fb", qb); fb.className = "fb show " + (ok ? "ok" : "bad"); fb.innerHTML = (ok ? "✅ " : "❌ ") + esc(q.e) + `<div class="row-btns"><button class="btn small next">${i < N - 1 ? "Weiter →" : "Ergebnis"}</button></div>`;
      $(".next", fb).addEventListener("click", () => { i++; i < N ? show() : end(); });
    }));
  }
  function end(){
    const msg = score >= N - 1 ? `${profi}! Du bist bestens vorbereitet. 🏆` : score >= N - 3 ? "Sehr gut! Schau dir die Fehler noch einmal an." : score >= N / 2 ? "Ordentlich – wiederhole die Stationen, bei denen du unsicher warst." : "Geh die Stationen noch einmal durch und versuch es erneut.";
    box.innerHTML = `<div class="result-big">${score} / ${N}</div><p class="lead" style="text-align:center">${msg}</p><div class="row-btns" style="justify-content:center"><button class="btn again">Neue Runde</button></div>`;
    $(".again", box).addEventListener("click", start);
    if (score >= N - 2) { solve(id); confetti(); }
  }
  start();
}

/* ---------- Paare finden ---------- */
// pairs: [[links, rechts], ...] – erst links antippen, dann das passende Gegenstück rechts
function makePaare(box, pairs, id){
  register(id, box, null, "Paare finden");
  const L = shuffle(pairs.map((p, i) => ({t: p[0], i}))), R = shuffle(pairs.map((p, i) => ({t: p[1], i})));
  box.innerHTML = `<div class="paare"><div class="paare-sp">${L.map(o => `<button class="tok" data-i="${o.i}" data-s="l">${esc(o.t)}</button>`).join("")}</div>
    <div class="paare-sp">${R.map(o => `<button class="tok" data-i="${o.i}" data-s="r">${esc(o.t)}</button>`).join("")}</div></div><div class="fb"></div>`;
  const fb = $(".fb", box); let wahl = null, fertig = 0;
  $$(".tok", box).forEach(b => b.addEventListener("click", () => {
    if (b.classList.contains("right")) return;
    if (!wahl || wahl.dataset.s === b.dataset.s) { if (wahl) wahl.classList.remove("picked"); wahl = wahl === b ? null : b; if (wahl) wahl.classList.add("picked"); return; }
    const a = wahl; wahl = null; a.classList.remove("picked");
    if (a.dataset.i === b.dataset.i) {
      [a, b].forEach(x => { x.classList.add("right"); x.disabled = true; }); fertig++;
      fb.className = "fb show ok"; fb.textContent = fertig === pairs.length ? "✅ Alle Paare gefunden!" : `✅ Richtig! Noch ${pairs.length - fertig}.`;
      if (fertig === pairs.length) solve(id);
    } else {
      [a, b].forEach(x => { x.classList.add("wrong"); setTimeout(() => x.classList.remove("wrong"), 700); });
      fb.className = "fb show bad"; fb.textContent = "❌ Das passt nicht zusammen. Versuch es noch einmal.";
    }
  }));
}

/* ---------- Animation in Schritten ---------- */
// cfg: {steps: ["Text zu Schritt 1", ...] oder [{t: "Text"}], zeige(i, box): stellt das Bild für Schritt i ein (0 = Anfang),
//       ms: Dauer je Schritt beim Abspielen (Standard 2600)}
// Zählt als bearbeitet, wenn der letzte Schritt erreicht wurde (abgespielt oder Schritt für Schritt).
function makeSchritte(box, cfg, id){
  register(id, box, null, "Animation");
  const steps = cfg.steps.map(x => typeof x === "string" ? {t: x} : x), N = steps.length;
  const ctrl = document.createElement("div"); ctrl.className = "schritte";
  ctrl.innerHTML = `<div class="schritt-text" aria-live="polite"></div>
    <div class="schritt-punkte">${steps.map((_, i) => `<button type="button" data-i="${i}" aria-label="Schritt ${i + 1}">${i + 1}</button>`).join("")}</div>
    <div class="row-btns"><button class="btn small play" type="button">▶ Start</button><button class="btn small ghost next" type="button">Schritt für Schritt →</button><button class="btn small ghost again" type="button">↺ Nochmal</button></div>`;
  box.appendChild(ctrl);
  const text = $(".schritt-text", ctrl), play = $(".play", ctrl), dots = $$(".schritt-punkte button", ctrl);
  let i = -1, timer = null;
  function geh(k){
    i = clamp(k, 0, N - 1);
    text.innerHTML = `<b>Schritt ${i + 1} von ${N}:</b> ${steps[i].t}`;
    dots.forEach((d, j) => { d.classList.toggle("an", j === i); d.classList.toggle("war", j < i); });
    try { cfg.zeige(i, box); } catch (e) { console.error(e); }
    if (i === N - 1) { halt(); solve(id); }
  }
  function halt(){ clearInterval(timer); timer = null; play.textContent = "▶ Start"; }
  play.addEventListener("click", () => {
    if (timer) { halt(); play.textContent = "▶ Weiter"; return; }
    if (i >= N - 1) i = -1;
    geh(i + 1); if (i < N - 1) { play.textContent = "⏸ Pause"; timer = setInterval(() => geh(i + 1), cfg.ms || 2600); }
  });
  $(".next", ctrl).addEventListener("click", () => { halt(); geh(i >= N - 1 ? 0 : i + 1); });
  $(".again", ctrl).addEventListener("click", () => { halt(); i = -1; text.innerHTML = cfg.start || "Tippe auf „Start“ oder gehe Schritt für Schritt."; dots.forEach(d => d.classList.remove("an", "war")); try { cfg.zeige(-1, box); } catch (e) { console.error(e); } });
  dots.forEach(d => d.addEventListener("click", () => { halt(); geh(+d.dataset.i); }));
  text.innerHTML = cfg.start || "Tippe auf „Start“ oder gehe Schritt für Schritt.";
  try { cfg.zeige(-1, box); } catch (e) { console.error(e); }
}

/* ---------- Film mit Stopp-Fragen (YouTube) ---------- */
// cfg: {vid: "YouTube-Kennung", titel, quelle, dauer: "etwa 4 Minuten", stops: [{t: Sekunde, q: {q, o, a, e}}]}
// Der Film wird erst nach dem Antippen von YouTube geladen (youtube-nocookie). An jedem Stopp hält er an, bis die
// Frage richtig beantwortet ist. Lädt er nicht, stehen der Link zu YouTube und alle Fragen offen da.
// Jede Stopp-Frage ist eine Aufgabe (prefix + Nummer); der Film gilt als bearbeitet, wenn alle beantwortet sind.
function makeFilm(box, cfg, prefix){
  const VID = cfg.vid, STOPS = cfg.stops, pid = prefix + "-yt";
  box.innerHTML = `<div class="film"><div id="${pid}"></div>
      <button class="film-poster" type="button"><span class="play">▶</span><b>Film starten</b><small>${esc(cfg.quelle || "")}${cfg.quelle ? ": " : ""}„${esc(cfg.titel || "Film")}“${cfg.dauer ? " (" + esc(cfg.dauer) + ")" : ""}. Erst mit diesem Klick wird der Film von YouTube geladen.</small></button>
      <div class="film-stop">⏸ Film-Stopp!<br>Beantworte die Frage unter dem Film.</div></div>
    <div class="film-chips" aria-label="Film-Stopps"></div>
    <p class="hint film-hint" style="margin:8px 0 0">Der Film hält an ${STOPS.length} Stellen an. Die Knöpfe mit ❓ springen direkt zu einem Film-Stopp.</p><div class="film-qs"></div>`;
  const qs = $(".film-qs", box), chipsBox = $(".film-chips", box), stopEl = $(".film-stop", box), startBtn = $(".film-poster", box), hint = $(".film-hint", box);
  const mmss = t => Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");
  let player = null, bereit = false, last = 0, cur = -1, failed = false;
  STOPS.forEach((s, i) => {
    const id = prefix + i + "-0";
    s.wrap = document.createElement("div"); s.wrap.className = "film-q"; s.wrap.hidden = true;
    const q = document.createElement("div"); s.wrap.appendChild(q);
    makeMC(q, [s.q], prefix + i, {t: `Film-Stopp ${i + 1} · bei ${mmss(s.t)}`});
    s.go = document.createElement("button"); s.go.className = "btn small"; s.go.type = "button"; s.go.textContent = "▶ Weiter im Film"; s.go.hidden = true;
    s.go.addEventListener("click", () => resume(i));
    s.wrap.appendChild(s.go); qs.appendChild(s.wrap);
    s.chip = document.createElement("button"); s.chip.type = "button"; s.chip.textContent = `❓ ${mmss(s.t)}`;
    s.chip.addEventListener("click", () => jump(i)); chipsBox.appendChild(s.chip);
    const check = () => { if (solved[id]) { s.done = true; s.chip.classList.add("done"); s.chip.textContent = `✓ ${mmss(s.t)}`; if (!failed) s.go.hidden = false; } };
    s.wrap.addEventListener("click", () => setTimeout(check, 0));
    check();
  });
  function stopAt(i){
    cur = i;
    STOPS.forEach((s, k) => { s.wrap.hidden = k !== i; });
    if (bereit) { player.pauseVideo(); stopEl.classList.add("show"); }
    STOPS[i].wrap.scrollIntoView({block: "nearest", behavior: reduced ? "auto" : "smooth"});
  }
  function resume(i){
    cur = -1; stopEl.classList.remove("show"); STOPS[i].wrap.hidden = true;
    if (bereit) player.playVideo();
  }
  function jump(i){
    if (bereit) { player.seekTo(STOPS[i].t, true); last = STOPS[i].t; }
    stopAt(i);
  }
  function poll(){
    if (!bereit) return;
    const t = player.getCurrentTime();
    if (cur < 0) for (let i = 0; i < STOPS.length; i++) {
      const s = STOPS[i];
      if (!s.done && last < s.t && t >= s.t && t - last < 3) { stopAt(i); break; }
    }
    last = t;
  }
  // Film lädt nicht oder darf nicht abgespielt werden: Link zu YouTube, alle Fragen offen zeigen
  function fail(){
    if (failed) return;
    failed = true; cur = -1; stopEl.classList.remove("show");
    if (!bereit) {
      startBtn.disabled = false; $("b", startBtn).textContent = "Film auf YouTube öffnen";
      startBtn.onclick = () => window.open("https://www.youtube.com/watch?v=" + VID, "_blank", "noopener");
    }
    hint.innerHTML = `Der Film lässt sich hier nicht abspielen. <a href="https://www.youtube.com/watch?v=${esc(VID)}" target="_blank" rel="noopener">Öffne ihn auf YouTube</a> und beantworte danach die Fragen hier.`;
    STOPS.forEach(s => { s.wrap.hidden = false; s.go.hidden = true; });
  }
  function make(){
    player = new YT.Player(pid, {
      host: "https://www.youtube-nocookie.com", videoId: VID,
      playerVars: {rel: 0, playsinline: 1, modestbranding: 1},
      events: {
        onReady: e => { bereit = true; startBtn.remove(); setInterval(poll, 250); e.target.playVideo(); },
        onStateChange: e => {
          if (e.data === 1 && cur >= 0) player.pauseVideo();
          if (e.data === 0) { const offen = STOPS.findIndex(s => !s.done); if (offen >= 0) stopAt(offen); }
        },
        onError: fail
      }
    });
  }
  startBtn.addEventListener("click", () => {
    if (failed) return;
    startBtn.disabled = true; $("b", startBtn).textContent = "Film wird geladen …";
    if (window.YT && YT.Player) make();
    else {
      const vorher = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (vorher) vorher(); make(); };
      const s = document.createElement("script"); s.src = "https://www.youtube.com/iframe_api"; s.onerror = fail; document.head.appendChild(s);
    }
    setTimeout(() => { if (!bereit) fail(); }, 20000);
  });
}

/* ---------- Konfetti ---------- */
function confetti(){
  if (reduced) return;
  const c = $("#confetti"), ctx = c.getContext("2d"); c.width = innerWidth; c.height = innerHeight;
  const cols = ["#0d77c2", "#e0453a", "#f2b632", "#1b8a4b", "#8e55c7"];
  const P = Array.from({length: 140}, () => ({x: innerWidth / 2, y: innerHeight * .4, vx: (Math.random() - .5) * 16, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 3, c: cols[Math.floor(Math.random() * 5)], a: Math.random() * 6}));
  let f = 0;
  (function loop(){
    ctx.clearRect(0, 0, c.width, c.height);
    P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .45; p.vx *= .99; p.a += .2; ctx.fillStyle = p.c; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
    if (++f < 150) requestAnimationFrame(loop); else ctx.clearRect(0, 0, c.width, c.height);
  })();
}

const Modul = window.Modul = {$, $$, esc, shuffle, clamp, fmt, norm, setText, reduced, onVisible, load, save, init, ready, register, solve,
  isSolved: id => !!solved[id], katalog, mehrGeloest, askKI, makeMC, makeGap, makeSort, makeTF, makeOrder, makeLabel, makeHotspots, makeCrossword, makeOpen, makeQuiz, confetti,
  plus, zug: () => ZUG, makePaare, makeSchritte, makeFilm, anmeldung: lsAnmeldung};
})();
