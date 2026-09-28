/* Gemeinsame Bausteine der Deutsch-7-Lernmodule „Argumentieren und diskutieren“ (Buch S. 22–25).
 * Aufgebaut wie modul-basis.js der NT-7M-Module: Sterne-Fortschritt, Fachbegriffe, Ankreuzen,
 * Zuordnen, Lückentext, Richtig/Falsch, Reihenfolge, Abschlussquiz und Konfetti.
 * Neu für Deutsch: Anmeldung „Dein Training starten“ (gemeinsam mit dem Argumentationstrainer),
 * Markieren mit Farbstiften, Freitexte mit KI-Checkliste, Duell gegen die KI, Beobachtungsbogen,
 * Lerntagebuch und Vorlesen.
 * Die Seite ruft Modul.init({...}) auf, baut ihre Übungen und zum Schluss Modul.ready().
 */
(function(){
"use strict";

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const norm = s => String(s).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
const words = s => String(s || "").trim().split(/\s+/).filter(Boolean).length;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const API_BASE = new URLSearchParams(location.search).get("api") ||
  ((location.hostname === "localhost" || location.hostname === "127.0.0.1") ? `${location.protocol}//${location.hostname}:3000` : "https://englisch-9.onrender.com");
const SESSION_KEY = "grumi-de7-argument-session-v1"; // gleiche Anmeldung wie im Argumentationstrainer

let KEY = "grumi-de7-modul", MODUL = "", GLOSSARY = {};
let solved = {};
const tasks = new Set();
function load(k, d){ try { const v = localStorage.getItem(KEY + k); return v === null ? d : v; } catch (_) { return d; } }
function save(k, v){ try { localStorage.setItem(KEY + k, v); } catch (_) {} }
function register(id){ tasks.add(id); updateStars(); }
function solve(id){ if (!solved[id]) { solved[id] = 1; save("", JSON.stringify(solved)); } updateStars(); }
function updateStars(){ const n = [...tasks].filter(t => solved[t]).length; const s = $("#stars"); if (s) s.textContent = `⭐ ${n} / ${tasks.size}`; if (MODUL) save("-total", tasks.size); }

/* ---------- Anmeldung „Dein Training starten“ ---------- */
const session = {
  read(){ try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null") || {}; } catch (_) { return {}; } },
  get token(){ return this.read().token || ""; },
  get student(){ return this.read().student || null; },
  write(token, student){
    const old = this.read();
    try { localStorage.setItem(SESSION_KEY, JSON.stringify({token, student, exerciseIds: old.exerciseIds || {}})); } catch (_) {}
  },
  clear(){ try { localStorage.removeItem(SESSION_KEY); } catch (_) {} }
};
let loginWaiters = [];
function buildLogin(){
  if ($("#loginDialog")) return;
  document.body.insertAdjacentHTML("beforeend", `
  <dialog id="loginDialog" class="login-dialog" aria-labelledby="lgTitle">
    <form id="loginForm" method="dialog" novalidate>
      <div class="d-icon" aria-hidden="true">✍️</div>
      <p class="eyebrow">Deutsch 7 · Argumentieren</p>
      <h2 id="lgTitle">Dein Training starten</h2>
      <p>Trage deine Daten ein, damit deine Texte und Verbesserungen zusammenbleiben.</p>
      <label>Vorname<input id="lgFirst" autocomplete="given-name" maxlength="60" required></label>
      <label>Nachname<input id="lgLast" autocomplete="family-name" maxlength="60" required></label>
      <label>Klasse<select id="lgClass"><option>7M</option><option>7R</option></select></label>
      <p class="err" id="lgErr" role="alert"></p>
      <button class="btn" id="lgGo" type="submit">➜ Training öffnen</button>
      <p class="privacy">Deine Antworten werden mit deinem Namen gespeichert, nur für dich und deine Lehrkraft.</p>
    </form>
  </dialog>`);
  const dlg = $("#loginDialog"), go = $("#lgGo"), err = $("#lgErr");
  const st = session.student; if (st && st.className && [...$("#lgClass").options].some(o => o.value === st.className)) $("#lgClass").value = st.className;
  dlg.addEventListener("cancel", e => { if (!session.token) e.preventDefault(); });
  $("#loginForm").addEventListener("submit", async e => {
    e.preventDefault();
    const body = {firstName: $("#lgFirst").value.trim(), lastName: $("#lgLast").value.trim(), className: $("#lgClass").value};
    if (!body.firstName || !body.lastName) { err.textContent = "Bitte Vor- und Nachnamen eintragen."; return; }
    err.textContent = ""; go.disabled = true; go.textContent = "Wird geöffnet …";
    const slow = setTimeout(() => { err.style.color = "var(--muted)"; err.textContent = "Der Server wacht gerade auf – das kann bis zu einer Minute dauern."; }, 6000);
    try {
      const res = await api("/api/de7-argument/start", body, false);
      session.write(res.token, res.student);
      dlg.close(); renderWho();
      loginWaiters.splice(0).forEach(f => f());
    } catch (x) {
      err.style.color = ""; err.textContent = x.message || "Die Anmeldung hat nicht geklappt. Versuche es noch einmal.";
    } finally { clearTimeout(slow); go.disabled = false; go.textContent = "➜ Training öffnen"; }
  });
}
function openLogin(){
  buildLogin();
  const dlg = $("#loginDialog");
  if (!dlg.open) dlg.showModal();
  setTimeout(() => $("#lgFirst").focus(), 60);
  return new Promise(res => loginWaiters.push(res));
}
function renderWho(){
  const el = $("#who");
  if (el) {
    const st = session.student;
    el.hidden = false;
    el.innerHTML = st ? `<span>👤 ${esc(st.firstName)} · ${esc(st.className)}</span><button type="button" id="whoOut">Abmelden</button>` : `<button type="button" id="whoIn">Training starten</button>`;
    const out = $("#whoOut"), inn = $("#whoIn");
    if (out) out.addEventListener("click", () => { session.clear(); renderWho(); if (MODUL) openLogin(); });
    if (inn) inn.addEventListener("click", () => openLogin());
  }
  document.dispatchEvent(new CustomEvent("de7-login"));
}
async function api(route, body, auth = true){
  const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 75000);
  try {
    const r = await fetch(API_BASE + route, {method: "POST", signal: ctl.signal,
      headers: Object.assign({"content-type": "application/json"}, auth && session.token ? {authorization: "Bearer " + session.token} : {}),
      body: JSON.stringify(body)});
    let data = {}; try { data = await r.json(); } catch (_) {}
    if (!r.ok) { const e = new Error(data.error || "HTTP " + r.status); e.status = r.status; throw e; }
    return data;
  } finally { clearTimeout(to); }
}
// Schickt eine Anfrage an die KI-Kontrolle. Fehlt die Anmeldung, öffnet sich zuerst „Dein Training starten“.
async function askServer(route, body, onSlow){
  if (!session.token) await openLogin();
  const slow = setTimeout(() => onSlow && onSlow(), 7000);
  try { return await api(route, Object.assign({modul: MODUL}, body)); }
  catch (e) {
    if (e.status === 401) { session.clear(); renderWho(); await openLogin(); return askServer(route, body, onSlow); }
    if (e.status === 400) throw e;
    return null; // Server nicht erreichbar: die Seite prüft offline
  } finally { clearTimeout(slow); }
}
const WAKE = '<span class="dots">Der KI-Server wacht gerade auf – das kann bis zu einer Minute dauern</span>';

/* ---------- Grundgerüst ---------- */
function init(cfg){
  KEY = cfg.key; MODUL = cfg.modul || ""; GLOSSARY = cfg.glossary || {};
  try { solved = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (_) { solved = {}; }

  const pop = $("#pop");
  if (pop) {
    const showTerm = btn => {
      const g = GLOSSARY[btn.dataset.t]; if (!g) return;
      $("h5", pop).textContent = g[0]; $("p", pop).textContent = g[1];
      pop.style.display = "block";
      const r = btn.getBoundingClientRect(), w = Math.min(320, innerWidth - 24);
      pop.style.left = clamp(r.left + scrollX, 12, scrollX + innerWidth - w - 12) + "px";
      pop.style.top = (r.bottom + scrollY + 8) + "px";
    };
    document.addEventListener("click", e => {
      const t = e.target.closest(".term");
      if (t) { showTerm(t); e.stopPropagation(); return; }
      if (!e.target.closest("#pop") || e.target.closest(".x")) pop.style.display = "none";
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") pop.style.display = "none"; });
  }
  const w = $("#words");
  if (w) w.innerHTML = Object.values(GLOSSARY).sort((a, b) => a[0].localeCompare(b[0], "de"))
    .map(g => `<div class="word"><b>${esc(g[0])}</b><p>${esc(g[1])}</p></div>`).join("");

  if (!$("#lb")) document.body.insertAdjacentHTML("beforeend", '<div id="lb" role="dialog" aria-label="Bild vergrößert"><img alt=""></div>');
  $$(".zoomable").forEach(img => img.addEventListener("click", () => { $("#lb img").src = img.src; $("#lb img").alt = img.alt; $("#lb").classList.add("show"); }));
  $("#lb").addEventListener("click", () => $("#lb").classList.remove("show"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") $("#lb").classList.remove("show"); });

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold: .06});
    $$(".reveal").forEach(el => io.observe(el));
  } else $$(".reveal").forEach(el => el.classList.add("in"));

  const navLinks = $$("#stations a"), stationNav = $("#stations"), sections = $$("section.station"), readbar = $("#readbar");
  let queued = false, cur;
  function onScroll(){
    queued = false;
    const h = document.documentElement;
    if (readbar) readbar.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
    let c = null;
    for (const sec of sections) { if (sec.getBoundingClientRect().top < 140) c = sec.id; else break; }
    if (c === cur) return;
    cur = c;
    navLinks.forEach(a => {
      const on = a.getAttribute("href") === "#" + c;
      a.classList.toggle("active", on);
      if (on && stationNav) stationNav.scrollTo({left: a.offsetLeft - (stationNav.clientWidth - a.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth"});
    });
  }
  addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, {passive: true});
  Modul._onScroll = onScroll;

  buildLogin(); renderWho();
  if (MODUL && !session.token) openLogin();
}
function ready(){ if (Modul._onScroll) Modul._onScroll(); updateStars(); }

/* ---------- Ankreuzen ---------- */
function makeMC(container, list, idPrefix, tag){
  container.innerHTML = tag ? `<span class="task-tag ${tag.buch ? "buch" : ""}">${esc(tag.t)}</span>` : "";
  list.forEach((q, qi) => {
    const id = idPrefix + "-" + qi; register(id);
    const multi = Array.isArray(q.a);
    const el = document.createElement("div"); el.className = "q";
    const order = shuffle(q.o.map((t, i) => ({t, i})));
    el.innerHTML = `<div class="q-title">${qi + 1}. ${esc(q.q)}${multi ? ' <span class="hint">(mehrere Antworten richtig)</span>' : ""}</div>${q.ctx ? `<div class="q-ctx">${esc(q.ctx)}</div>` : ""}
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
  register(id);
  const answers = [];
  const html = paras.map(p => "<p>" + p.map(part => typeof part === "string" ? esc(part) : `<button class="gap" data-i="${answers.push(part.g) - 1}">&nbsp;</button>`).join("") + "</p>").join("");
  const bank = answers.map((w, i) => ({w, i})).concat((extra || []).map((w, i) => ({w, i: "x" + i})));
  box.classList.add("gaptext");
  box.innerHTML = `<div class="bank">${shuffle(bank).map(o => `<button class="tok" data-w="${esc(o.w)}" data-k="${o.i}">${esc(o.w)}</button>`).join("")}</div>${html}
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
    g.dataset.v = t.dataset.w; g.dataset.k = t.dataset.k; g.textContent = t.dataset.w; t.classList.add("used");
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
  register(id);
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
    if (all) solve(id);
  });
  $(".reset", container).addEventListener("click", () => { toks.forEach(t => { t.classList.remove("right", "wrong", "picked"); pool.appendChild(t); }); fb.className = "fb"; picked = null; markTargets(false); });
}

/* ---------- Richtig / Falsch ---------- */
function makeTF(box, list, id, labels){
  register(id);
  const [yes, no] = labels || ["richtig", "falsch"];
  box.innerHTML = `<div class="tf">${list.map((t, i) => `<div class="tf-row" data-i="${i}"><span>${esc(t[0])}</span><div class="tf-btns"><button data-v="1">${esc(yes)}</button><button data-v="0">${esc(no)}</button></div></div>`).join("")}</div>
    <div class="row-btns"><button class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  $$(".tf-row", box).forEach(row => $$("button", row).forEach(b => b.addEventListener("click", () => { $$("button", row).forEach(x => x.classList.toggle("sel", x === b)); row.classList.remove("right", "wrong"); })));
  $(".check", box).addEventListener("click", () => {
    let ok = 0, open = 0;
    $$(".tf-row", box).forEach(row => { const s = $("button.sel", row); row.classList.remove("right", "wrong"); if (!s) { open++; return; } const r = (s.dataset.v === "1") === list[row.dataset.i][1]; row.classList.add(r ? "right" : "wrong"); if (r) ok++; });
    const fb = $(".fb", box); fb.className = "fb show " + (ok === list.length ? "ok" : "bad");
    fb.textContent = ok === list.length ? "✅ Perfekt – alles richtig eingeschätzt!" : `${ok} von ${list.length} richtig.${open ? ` ${open} noch offen.` : ""}`;
    if (ok === list.length) solve(id);
  });
}

/* ---------- Reihenfolge ordnen ---------- */
function makeOrder(box, steps, id){
  register(id);
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

/* ---------- Markieren mit Farbstiften ---------- */
// cfg: {pens:[{k:"b",label:"Behauptung"}], rows:[{who, av, segs:[[text, lösung]]}]}
// Lösung: Stift-Kürzel, "" = soll unmarkiert bleiben, null = frei (wird nicht bewertet)
function makeMark(box, cfg, id){
  register(id);
  let pen = cfg.pens[0].k;
  box.innerHTML = `<div class="pens" role="radiogroup" aria-label="Farbstift wählen">${cfg.pens.map(p => `<button class="pen ${p.k}" data-k="${p.k}" role="radio"><i></i>${esc(p.label)}</button>`).join("")}<button class="pen e" data-k="" role="radio"><i></i>Radiergummi</button></div>
    <div class="mark-text">${cfg.rows.map((r, ri) => `<div class="mark-row">${r.av ? `<span class="av" aria-hidden="true">${r.av}</span>` : ""}${r.who ? `<span class="who-l">${esc(r.who)}:</span>` : ""}<div class="txt">${r.segs.map((s, si) => `<button class="seg" data-r="${ri}" data-s="${si}">${esc(s[0])}</button>`).join(" ")}</div></div>`).join("")}</div>
    <div class="row-btns"><button class="btn small check">Prüfen</button><button class="btn small ghost reset">Alles löschen</button></div><div class="fb"></div>`;
  const pens = $$(".pen", box), segs = $$(".seg", box), fb = $(".fb", box);
  const setPen = k => { pen = k; pens.forEach(p => { p.classList.toggle("sel", p.dataset.k === k); p.setAttribute("aria-checked", p.dataset.k === k); }); };
  setPen(pen);
  pens.forEach(p => p.addEventListener("click", () => setPen(p.dataset.k)));
  const setMark = (s, k) => { s.dataset.m = k; s.className = "seg" + (k ? " m-" + k : ""); };
  segs.forEach(s => s.addEventListener("click", () => { setMark(s, s.dataset.m === pen ? "" : pen); fb.className = "fb"; }));
  $(".check", box).addEventListener("click", () => {
    let ok = 0, n = 0;
    segs.forEach(s => {
      const sol = cfg.rows[s.dataset.r].segs[s.dataset.s][1];
      s.classList.remove("right", "wrong");
      if (sol === null || sol === undefined) return;
      n++;
      const r = (s.dataset.m || "") === sol;
      if (r) ok++;
      if (r && sol) s.classList.add("right"); else if (!r) s.classList.add("wrong");
    });
    fb.className = "fb show " + (ok === n ? "ok" : "bad");
    fb.innerHTML = ok === n ? (cfg.done || "✅ Alles richtig markiert!") : `${ok} von ${n} Stellen stimmen. Rot gestrichelt = noch falsch (falsche Farbe, fehlt oder zu viel).${cfg.hint ? " " + esc(cfg.hint) : ""}`;
    if (ok === n) { solve(id); confetti(); }
  });
  $(".reset", box).addEventListener("click", () => { segs.forEach(s => { setMark(s, ""); s.classList.remove("right", "wrong"); }); fb.className = "fb"; });
}

/* ---------- Freitexte mit KI-Checkliste ---------- */
// o: {id, q, ctx, m, kriterien[], k[] (Stichwortgruppen für den Notfall), min, minWords, ph, fields:[{label, ph}], rows}
function pushTip(q, tipp){
  if (!tipp) return;
  let list = []; try { list = JSON.parse(load("-tipps", "[]")) || []; } catch (_) {}
  list = list.filter(t => t.q !== q).concat({q, tipp}).slice(-12);
  save("-tipps", JSON.stringify(list));
}
function checklistHtml(kriterien, title){
  if (!kriterien || !kriterien.length) return "";
  return `<div class="checklist"><h5><span>${esc(title || "Checkliste")}</span><span>Ja / Nein</span></h5>${kriterien.map(k => `<div><span>${esc(k.text)}</span><span class="${k.ok ? "yes" : "no"}">${k.ok ? "✓" : "✗"}</span></div>`).join("")}</div>`;
}
function localCheck(text, o){
  const t = norm(text), groups = o.k || [];
  const hits = groups.filter(g => g.split("|").some(w => t.includes(norm(w)))).length;
  const need = o.min || groups.length || 1, long = words(text) >= (o.minWords || 6);
  if (groups.length ? hits >= need && long : words(text) >= 15) return {richtig: true, rueckmeldung: "Die wichtigen Bausteine sind enthalten.", tipp: "", quelle: "lokal"};
  if (hits || long) return {teilweise: true, rueckmeldung: "Ein guter Anfang – es fehlt aber noch etwas.", tipp: "Vergleiche mit der Aufgabe und der Checkliste und ergänze, was fehlt.", quelle: "lokal"};
  return {rueckmeldung: "Hier fehlt noch der wichtigste Gedanke.", tipp: "Lies die Aufgabe noch einmal genau.", quelle: "lokal"};
}
function makeOpen(box, list, prefix){
  list.forEach((o, i) => {
    const id = o.id || prefix + i; register(id);
    const el = document.createElement("div"); el.className = "q ki";
    const fields = o.fields || [{label: "", ph: o.ph || "Deine Antwort …"}];
    el.innerHTML = `<div class="q-title">${o.nr === false ? "" : (o.nr || i + 1) + ". "}${esc(o.q)}</div>${o.ctx ? `<div class="q-ctx">${esc(o.ctx)}</div>` : ""}
      ${o.starter ? `<div class="starthilfe"><b>Starthilfe</b>${o.starter.map(s => `<p>${esc(s)}</p>`).join("")}</div>` : ""}
      <div class="fields">${fields.map((f, fi) => `<div class="field">${f.label ? `<label for="${id}-f${fi}">${esc(f.label)}<span class="wc" id="${id}-f${fi}-wc"></span></label>` : ""}<textarea id="${id}-f${fi}" rows="${o.rows || (f.label ? 2 : 3)}" placeholder="${esc(f.ph || "")}" aria-label="${esc(f.label || o.q)}"></textarea></div>`).join("")}</div>
      <div class="row-btns"><button class="btn small teal go">✨ Von der KI prüfen lassen</button>${o.m ? '<button class="btn small ghost show-model" hidden>Musterlösung</button>' : ""}</div>
      <div class="status"></div><div class="fb"></div><div class="cl"></div>${o.m ? `<div class="model"><strong>So könnte es aussehen:</strong> ${esc(o.m)}</div>` : ""}`;
    const tas = $$("textarea", el), go = $(".go", el), st = $(".status", el), fb = $(".fb", el), cl = $(".cl", el), sm = $(".show-model", el), model = $(".model", el);
    let version = 0;
    tas.forEach((ta, fi) => {
      ta.value = load(`-${id}-${fi}`, "");
      const wc = $(`#${CSS.escape(id)}-f${fi}-wc`, el);
      const upd = () => { if (wc) wc.textContent = words(ta.value) ? words(ta.value) + " Wörter" : ""; };
      ta.addEventListener("input", () => { save(`-${id}-${fi}`, ta.value); upd(); });
      upd();
    });
    if (sm) sm.addEventListener("click", () => model.classList.toggle("show"));
    go.addEventListener("click", async () => {
      const parts = tas.map((ta, fi) => ({label: fields[fi].label, v: ta.value.trim()}));
      if (parts.some(p => words(p.v) < (fields.length > 1 ? 2 : 3))) { fb.className = "fb show mid"; fb.textContent = fields.length > 1 ? "Fülle zuerst alle Felder aus." : "Schreib zuerst deine Antwort (mindestens einen ganzen Satz)."; return; }
      const antwort = fields.length > 1 ? parts.map(p => `${p.label}: ${p.v}`).join("\n") : parts[0].v;
      go.disabled = true; fb.className = "fb"; cl.innerHTML = ""; st.innerHTML = '<span class="dots">Die KI liest deinen Text</span>';
      let res;
      try {
        res = await askServer("/api/de7-argument/modul/check", {aufgabe: id, titel: o.titel || o.q, frage: o.q, kontext: o.ctx || "", erwartet: o.m || "", kriterien: o.kriterien || [], keywords: o.k || [], min: o.min, antwort}, () => st.innerHTML = WAKE);
      } catch (e) { res = null; }
      const offline = !res;
      if (offline) res = localCheck(antwort, o);
      go.disabled = false; version++;
      st.textContent = res.quelle === "ki" ? `✨ Rückmeldung der KI · Fassung ${version} gespeichert` : offline ? "Offline-Prüfung nach Stichworten (der Server war nicht erreichbar)" : `Prüfung nach Stichworten · Fassung ${version} gespeichert`;
      fb.className = "fb show " + (res.richtig ? "ok" : res.teilweise ? "mid" : "bad");
      fb.innerHTML = (res.richtig ? "✅ " : res.teilweise ? "🟡 " : "❌ ") + esc(res.rueckmeldung || "") + (res.tipp ? `<br><strong>Tipp:</strong> ${esc(res.tipp)}` : "") + (!res.richtig ? "<br><em>Überarbeite deinen Text und lass ihn noch einmal prüfen.</em>" : "");
      cl.innerHTML = checklistHtml(res.kriterien, o.checkTitel);
      if (sm) sm.hidden = false;
      pushTip(o.q, res.tipp);
      if (res.richtig) { solve(id); if (o.onDone) o.onDone(antwort); }
    });
    box.appendChild(el);
  });
}

/* ---------- Duell gegen die KI ---------- */
// cfg: {id, titel, thema, auftrag, kriterien[], intro, seiten:{key:{label, emoji, hint, rolle, runden[], schluss}}} oder ohne seiten: {rolle, runden[], schluss}
// Runde: {wer, av, arg, m (Beispiel-Antwort), k[] (Stichworte für den Notfall), tips[], yes, no}
function makeDuel(box, cfg){
  const id = cfg.id || "duell"; register(id);
  let S, side, r, me, ki, tipN, verlauf;
  function pick(){
    if (!cfg.seiten) return start(null);
    const keys = Object.keys(cfg.seiten);
    box.innerHTML = `<h3 style="margin:0">Wähle deine Seite</h3>
      <div class="sidepick">${keys.map(k => `<button data-s="${k}"><span>${cfg.seiten[k].emoji || ""}</span>${esc(cfg.seiten[k].label)}<br><small class="hint">${esc(cfg.seiten[k].hint || "")}</small></button>`).join("")}</div>
      <p class="hint" style="margin:0">Probiere danach auch die andere Seite aus. Gute Diskutierer kennen die Argumente beider Seiten.</p>`;
    $$("[data-s]", box).forEach(b => b.addEventListener("click", () => start(b.dataset.s)));
  }
  function start(s){
    side = s; S = s ? cfg.seiten[s] : cfg; r = 0; me = 0; ki = 0; verlauf = [];
    box.innerHTML = `<div class="score"><span>🧑 Du <span class="pts me">0</span></span><span class="chip rnd"></span><span><span class="pts ki">0</span> KI 🤖</span></div>
      <div class="chat" aria-live="polite"></div><div class="input"></div>`;
    const intro = S.intro || cfg.intro;
    if (intro) say(S.av || "🤖", intro, "", S.wer);
    round();
  }
  function say(av, html, cls, name){
    const chat = $(".chat", box), m = document.createElement("div");
    m.className = "msg " + (cls || "");
    m.innerHTML = `<div class="av" aria-hidden="true">${av}</div><div class="b">${name ? `<small>${esc(name)}</small>` : ""}${html}</div>`;
    chat.appendChild(m); chat.scrollTop = chat.scrollHeight;
  }
  function scores(){ $(".pts.me", box).textContent = me; $(".pts.ki", box).textContent = ki; }
  function round(){
    const R = S.runden[r];
    $(".rnd", box).textContent = `Runde ${r + 1} / ${S.runden.length}`;
    say(R.av || S.av || "🤖", esc(R.arg), "", R.wer || S.wer);
    verlauf.push({wer: R.wer || S.wer || "KI", text: R.arg});
    tipN = 0;
    const tips = R.tips || [];
    $(".input", box).innerHTML = `<div class="ki"><textarea placeholder="${esc(R.ph || cfg.ph || "Deine Antwort …")}" aria-label="Deine Antwort"></textarea></div>
      <div class="tips"><strong>💡 Das kannst du sagen:</strong><ul></ul></div>
      <div class="row-btns"><button class="btn small teal go">${esc(cfg.goLabel || "⚔️ Antworten")}</button>${tips.length ? '<button class="btn small ghost tip">💡 Tipp</button>' : ""}</div><div class="ki"><div class="status"></div></div>`;
    const ta = $("textarea", box), go = $(".go", box), tipBtn = $(".tip", box), st = $(".status", box);
    ta.focus({preventScroll: true});
    if (tipBtn) tipBtn.addEventListener("click", () => {
      if (tipN >= tips.length) return;
      $(".tips", box).classList.add("show"); $(".tips ul", box).insertAdjacentHTML("beforeend", `<li>${esc(tips[tipN++])}</li>`);
      if (tipN >= tips.length) { tipBtn.disabled = true; tipBtn.textContent = "💡 Keine weiteren Tipps"; }
    });
    go.addEventListener("click", async () => {
      const a = ta.value.trim();
      if (words(a) < 4) { st.textContent = "Schreib mindestens einen ganzen Satz."; return; }
      go.disabled = true; if (tipBtn) tipBtn.disabled = true; ta.disabled = true;
      say("🧑", esc(a), "me");
      st.innerHTML = '<span class="dots">Die KI denkt nach</span>';
      let res = null;
      try {
        res = await askServer("/api/de7-argument/modul/duell", {duell: id, titel: cfg.titel, thema: cfg.thema, rolle: `${R.wer || S.wer || "Gesprächspartner"}: ${R.rolle || S.rolle || ""}`,
          auftrag: cfg.auftrag, kriterien: cfg.kriterien || [], keywords: R.k || [], aussage: R.arg, antwort: a, verlauf: verlauf.slice(-6)}, () => st.innerHTML = WAKE);
      } catch (e) { st.textContent = e.message; go.disabled = false; ta.disabled = false; if (tipBtn) tipBtn.disabled = tipN >= tips.length; $(".chat", box).lastChild.remove(); return; }
      verlauf.push({wer: "Kind", text: a});
      let grade;
      if (res && res.bewertung) grade = res.bewertung;
      else { // Offline: passendes Stichwort + ganzer Satz = überzeugend
        const t = norm(a), hit = (R.k || []).some(g => g.split("|").some(w => t.includes(norm(w))));
        grade = hit ? (words(a) >= 8 ? "good" : "mid") : words(a) >= 12 ? "mid" : "bad";
      }
      st.textContent = res && res.quelle === "ki" ? "✨ Bewertet von der KI" : "Bewertung nach Stichworten (die KI war nicht erreichbar)";
      if (grade === "good") me += 2; else if (grade === "mid") { me += 1; ki += 1; } else ki += 2;
      scores();
      const reaction = (res && res.reaktion) || (grade === "good" ? R.yes : grade === "bad" ? R.no : R.mid) || (grade === "good" ? "Hm, da hast du recht." : "Das überzeugt mich noch nicht.");
      say(R.av || S.av || "🤖", esc(reaction), grade, R.wer || S.wer);
      verlauf.push({wer: R.wer || S.wer || "KI", text: reaction});
      const pts = grade === "good" ? "✅ +2 Punkte für dich." : grade === "mid" ? "🟡 Je 1 Punkt." : "❌ +2 Punkte für die KI.";
      const ref = res && res.schiedsrichter ? " " + esc(res.schiedsrichter) : "";
      const chips = res && res.kriterien && res.kriterien.length ? `<span style="display:block;margin-top:4px">${res.kriterien.map(k => `${k.ok ? "✓" : "✗"} ${esc(k.text)}`).join(" · ")}</span>` : "";
      say("🧑‍⚖️", `<b>${pts}</b>${ref}${chips}${grade !== "good" && R.m ? `<span style="display:block;margin-top:6px"><em>So hättest du antworten können:</em> ${esc(R.m)}</span>` : ""}`, "ref", "Schiedsrichter");
      const last = r >= S.runden.length - 1;
      $(".input", box).innerHTML = `<div class="row-btns"><button class="btn small next">${last ? "Ergebnis ansehen" : "Nächste Runde →"}</button></div>`;
      $(".next", box).addEventListener("click", () => { r++; last ? end() : round(); });
    });
  }
  function end(){
    $(".rnd", box).textContent = "Ende";
    const msg = me > ki ? (cfg.win || "🏆 Du hast das Duell gewonnen!") : me === ki ? (cfg.draw || "🤝 Unentschieden! Beide Seiten haben gute Argumente.") : (cfg.lose || "🤖 Diesmal hat die KI gewonnen. Lies die Tipps und Beispiel-Antworten und versuch es noch einmal!");
    say("🧑‍⚖️", `<b>Endstand: Du ${me} – KI ${ki}</b><br>${esc(msg)}${S.schluss ? "<br>" + esc(S.schluss) : ""}`, me >= ki ? "good" : "mid", "Schiedsrichter");
    $(".input", box).innerHTML = `<div class="row-btns"><button class="btn small again">🔁 Nochmal</button>${cfg.seiten ? '<button class="btn small ghost switch">🔄 Seite wechseln</button>' : ""}</div>`;
    $(".again", box).addEventListener("click", () => start(side));
    const sw = $(".switch", box);
    if (sw) sw.addEventListener("click", () => { const keys = Object.keys(cfg.seiten); start(keys[(keys.indexOf(side) + 1) % keys.length]); });
    solve(id);
    if (me > ki) confetti();
  }
  pick();
}

/* ---------- Beobachtungsbogen ---------- */
// cfg: {persons:["Ben", …], rows:[{t, sol:[true,false,…]}]}
function makeObs(box, cfg, id){
  register(id);
  box.innerHTML = `<div class="table-scroll"><table class="obs-table"><thead><tr><th>Beobachtungsbogen</th>${cfg.persons.map(p => `<th>${esc(p)}</th>`).join("")}</tr></thead><tbody>
    ${cfg.rows.map((row, ri) => `<tr><td>– ${esc(row.t)}</td>${cfg.persons.map((_, pi) => `<td><span class="yn" data-r="${ri}" data-p="${pi}"><button data-v="1">Ja</button><button data-v="0">Nein</button></span></td>`).join("")}</tr>`).join("")}
    </tbody></table></div><div class="row-btns"><button class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  $$(".yn", box).forEach(yn => $$("button", yn).forEach(b => b.addEventListener("click", () => { $$("button", yn).forEach(x => x.classList.toggle("sel", x === b)); yn.classList.remove("right", "wrong"); })));
  $(".check", box).addEventListener("click", () => {
    let ok = 0, open = 0; const all = $$(".yn", box);
    all.forEach(yn => { const s = $("button.sel", yn); yn.classList.remove("right", "wrong"); if (!s) { open++; return; } const r = (s.dataset.v === "1") === cfg.rows[yn.dataset.r].sol[yn.dataset.p]; yn.classList.add(r ? "right" : "wrong"); if (r) ok++; });
    const fb = $(".fb", box); fb.className = "fb show " + (ok === all.length ? "ok" : "bad");
    fb.innerHTML = ok === all.length ? (cfg.done || "✅ Genau beobachtet!") : `${ok} von ${all.length} Kreuzen stimmen.${open ? ` ${open} noch offen.` : ""} Lies die markierten Stellen im Gespräch noch einmal.`;
    if (ok === all.length) { solve(id); confetti(); }
  });
}

/* ---------- Meinungsbarometer ---------- */
function makeVote(box, key, onVote){
  const opts = [["😍", "unbedingt"], ["🙂", "eher ja"], ["😐", "weiß nicht"], ["🙁", "eher nein"], ["😖", "auf keinen Fall"]];
  const cur = load("-vote-" + key, "");
  box.innerHTML = opts.map((o, i) => `<button data-v="${i}" class="${String(i) === cur ? "sel" : ""}"><span class="e">${o[0]}</span>${o[1]}</button>`).join("");
  $$("button", box).forEach(b => b.addEventListener("click", () => { $$("button", box).forEach(x => x.classList.toggle("sel", x === b)); save("-vote-" + key, b.dataset.v); if (onVote) onVote(+b.dataset.v, opts[+b.dataset.v][1]); }));
  return {get: () => load("-vote-" + key, ""), label: i => opts[i] ? opts[i][1] : ""};
}

/* ---------- Lerntagebuch ---------- */
function makeDiary(box, id){
  register(id);
  box.innerHTML = `<div class="diary"><textarea aria-label="Lerntagebuch" placeholder="Das nehme ich mir vor: …"></textarea></div>
    <div class="row-btns"><button class="btn small ghost take">📋 Tipps aus den KI-Rückmeldungen übernehmen</button><button class="btn small teal go">💾 Im Lerntagebuch speichern</button></div><div class="fb"></div>`;
  const ta = $("textarea", box), fb = $(".fb", box);
  ta.value = load("-diary", "");
  ta.addEventListener("input", () => save("-diary", ta.value));
  $(".take", box).addEventListener("click", () => {
    let list = []; try { list = JSON.parse(load("-tipps", "[]")) || []; } catch (_) {}
    if (!list.length) { fb.className = "fb show mid"; fb.textContent = "Noch keine Tipps gesammelt. Lass zuerst ein paar Texte von der KI prüfen."; return; }
    ta.value = (ta.value.trim() ? ta.value.trim() + "\n" : "") + list.map(t => "• " + t.tipp).join("\n");
    save("-diary", ta.value); fb.className = "fb";
  });
  $(".go", box).addEventListener("click", async () => {
    if (words(ta.value) < 3) { fb.className = "fb show mid"; fb.textContent = "Schreib zuerst mindestens einen Tipp für dich auf."; return; }
    const go = $(".go", box); go.disabled = true;
    let res = null;
    try { res = await askServer("/api/de7-argument/modul/tagebuch", {text: ta.value.trim()}); } catch (e) { res = null; }
    go.disabled = false;
    fb.className = "fb show " + (res ? "ok" : "mid");
    fb.textContent = res ? "✅ Gespeichert! Deine Lehrkraft kann deinen Eintrag sehen." : "Auf diesem Gerät gespeichert. Der Server war gerade nicht erreichbar – versuche es später noch einmal.";
    solve(id);
  });
}

/* ---------- Abschlussquiz ---------- */
function makeQuiz(box, pool, id, profi){
  register(id);
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
    const qb = $(".qbox", box); qb.innerHTML = `<div class="q-title" style="font-size:1.1rem">${esc(q.q)}</div>${q.ctx ? `<div class="q-ctx">${esc(q.ctx)}</div>` : ""}<div class="opts">${order.map(o => `<button class="opt round" data-k="${o.k}"><span class="box"></span><span>${esc(o.t)}</span></button>`).join("")}</div><div class="fb"></div>`;
    $$(".opt", qb).forEach(b => b.addEventListener("click", () => {
      const ok = +b.dataset.k === q.a; if (ok) score++;
      $$(".opt", qb).forEach(o => { o.disabled = true; if (+o.dataset.k === q.a) { o.classList.add("right"); $(".box", o).textContent = "✓"; } });
      if (!ok) b.classList.add("wrong");
      const fb = $(".fb", qb); fb.className = "fb show " + (ok ? "ok" : "bad"); fb.innerHTML = (ok ? "✅ " : "❌ ") + esc(q.e || "") + `<div class="row-btns"><button class="btn small next">${i < N - 1 ? "Weiter →" : "Ergebnis"}</button></div>`;
      $(".next", fb).addEventListener("click", () => { i++; i < N ? show() : end(); });
    }));
  }
  function end(){
    const msg = score >= N - 1 ? `${profi}! 🏆` : score >= N - 3 ? "Sehr gut! Schau dir die Fehler noch einmal an." : score >= N / 2 ? "Ordentlich – wiederhole die Stationen, bei denen du unsicher warst." : "Geh die Stationen noch einmal durch und versuch es erneut.";
    box.innerHTML = `<div class="result-big">${score} / ${N}</div><p class="lead" style="text-align:center">${esc(msg)}</p><div class="row-btns" style="justify-content:center"><button class="btn again">Neue Runde</button></div>`;
    $(".again", box).addEventListener("click", start);
    if (score >= N - 2) { solve(id); confetti(); }
  }
  start();
}

/* ---------- Konfetti ---------- */
function confetti(){
  const c = $("#confetti"); if (reduced || !c) return;
  const ctx = c.getContext("2d"); c.width = innerWidth; c.height = innerHeight;
  const cols = ["#b23a48", "#dd6a2c", "#f2b632", "#1b8a4b", "#2f6fdb"];
  const P = Array.from({length: 140}, () => ({x: innerWidth / 2, y: innerHeight * .4, vx: (Math.random() - .5) * 16, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 3, c: cols[Math.floor(Math.random() * 5)], a: Math.random() * 6}));
  let f = 0;
  (function loop(){
    ctx.clearRect(0, 0, c.width, c.height);
    P.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .45; p.vx *= .99; p.a += .2; ctx.fillStyle = p.c; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
    if (++f < 150) requestAnimationFrame(loop); else ctx.clearRect(0, 0, c.width, c.height);
  })();
}

const Modul = window.Modul = {$, $$, esc, shuffle, norm, words, load, save, init, ready, register, solve, session, openLogin, renderWho, api, API_BASE,
  isSolved: id => !!solved[id], makeMC, makeGap, makeSort, makeTF, makeOrder, makeMark, makeOpen, makeDuel, makeObs, makeVote, makeDiary, makeQuiz, confetti};
})();
