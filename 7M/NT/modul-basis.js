/* Gemeinsame Bausteine der Lernmodule 2 und 3 (Windkraft).
 * Übernommen aus luft-modul.html und verallgemeinert: Sterne-Fortschritt, Fachbegriffe,
 * Ankreuzen, Lückentext, Zuordnen, Richtig/Falsch, Reihenfolge, Bild beschriften,
 * Kreuzworträtsel, offene Fragen mit KI-Rückmeldung, Abschlussquiz und Konfetti.
 * Die Seite ruft Modul.init({...}) auf, baut ihre Übungen und zum Schluss Modul.ready().
 */
(function(){
"use strict";

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

let KEY = "grumi-nt7-modul", THEMA = "", GLOSSARY = {};
let solved = {};
const tasks = new Set();
function load(k, d){ try { const v = localStorage.getItem(KEY + k); return v === null ? d : v; } catch (_) { return d; } }
function save(k, v){ try { localStorage.setItem(KEY + k, v); } catch (_) {} }
function register(id){ tasks.add(id); updateStars(); }
function solve(id){ if (!solved[id]) { solved[id] = 1; save("", JSON.stringify(solved)); } updateStars(); }
function updateStars(){ const n = [...tasks].filter(t => solved[t]).length; const s = $("#stars"); if (s) s.textContent = `⭐ ${n} / ${tasks.size}`; save("-total", tasks.size); }

/* ---------- Grundgerüst ---------- */
function init(cfg){
  KEY = cfg.key; THEMA = cfg.thema || ""; GLOSSARY = cfg.glossary || {};
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

  // Hero: vorbeiziehende Windlinien
  const c = $("#heroCanvas");
  if (c) {
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
function ready(){ if (Modul._onScroll) Modul._onScroll(); updateStars(); }

/* ---------- Ankreuzen ---------- */
function makeMC(container, list, idPrefix, tag){
  container.innerHTML = tag ? `<span class="task-tag ${tag.probe ? "probe" : ""}">${esc(tag.t)}</span>` : "";
  list.forEach((q, qi) => {
    const id = idPrefix + "-" + qi; register(id);
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
  register(id);
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
    if (all) { solve(id); if (cfg.onDone) cfg.onDone(); }
  });
  $(".reset", container).addEventListener("click", () => { toks.forEach(t => { t.classList.remove("right", "wrong", "picked"); pool.appendChild(t); }); fb.className = "fb"; picked = null; markTargets(false); });
}

/* ---------- Richtig / Falsch ---------- */
function makeTF(box, list, id){
  register(id);
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

/* ---------- Bild beschriften (Arbeitsblatt) ---------- */
// cfg: {img, alt, w, h, slots:[{x,y,px,py,a,arrow}], extra:[Ablenker]}
// x/y = Mitte des Kästchens, px/py = Bauteil, auf das die Linie zeigt (alles in Prozent)
function makeLabel(box, cfg, id){
  register(id);
  const lines = cfg.slots.map(s => `<line x1="${s.x}" y1="${s.y}" x2="${s.px}" y2="${s.py}" stroke="${s.arrow ? "#e0453a" : "#0d77c2"}" stroke-width="${s.arrow ? 4 : 2.5}" vector-effect="non-scaling-stroke" ${s.arrow ? 'stroke-dasharray="7 5"' : ""}/>`).join("");
  box.innerHTML = `<div class="label-wrap"><div class="label-img"><img src="${cfg.img}" width="${cfg.w}" height="${cfg.h}" alt="${esc(cfg.alt)}"><svg class="leads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>${cfg.slots.map(s => `<span class="dot" style="left:${s.px}%;top:${s.py}%"></span>`).join("")}${cfg.slots.map((s, i) => `<button class="slot${s.arrow ? " arrow-slot" : ""}" data-i="${i}" style="left:${s.x}%;top:${s.y}%">?</button>`).join("")}</div>
    <div><p class="hint">Tippe zuerst auf einen Begriff und dann auf das passende Kästchen im Bild. Die Pfeile (➜) zeigen, wo Energie hinein- oder hinausgeht.</p><div class="label-pool"></div>
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
  register(id);
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
// cfg: {words:[{w,r,c,d:"a"|"d",q}], sol:[[r,c],...], solWord, pre:["r,c"]}
function makeCrossword(box, cfg, id){
  register(id);
  const W = cfg.words.slice().sort((a, b) => a.r - b.r || a.c - b.c);
  let n = 0; const starts = {};
  W.forEach(w => { const k = w.r + "," + w.c; if (!starts[k]) starts[k] = ++n; w.n = starts[k]; });
  const ROWS = Math.max(...W.map(w => w.r + (w.d === "d" ? w.w.length : 1))), COLS = Math.max(...W.map(w => w.c + (w.d === "a" ? w.w.length : 1)));
  const grid = {};
  W.forEach(w => [...w.w].forEach((ch, i) => { const k = (w.r + (w.d === "d" ? i : 0)) + "," + (w.c + (w.d === "a" ? i : 0)); (grid[k] = grid[k] || {ch, words: []}).words.push(w); }));
  const pre = new Set(cfg.pre || []);
  const byDir = d => W.filter(w => w.d === d).map(w => `<li value="${w.n}" data-id="${W.indexOf(w)}">${esc(w.q)} <span class="hint">(${w.w.length})</span></li>`).join("");
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
      let v = cell.inp.value.toUpperCase().replace(/Ä/g, "AE").replace(/Ö/g, "OE").replace(/Ü/g, "UE").replace(/ß/g, "SS").replace(/[^A-Z]/g, "");
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
const API = (location.hostname.endsWith("onrender.com") ? "" : "https://englisch-9.onrender.com") + "/api/nt7/uebung/feedback";
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
    const id = prefix + i; register(id);
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
  isSolved: id => !!solved[id], askKI, makeMC, makeGap, makeSort, makeTF, makeOrder, makeLabel, makeHotspots, makeCrossword, makeOpen, makeQuiz, confetti};
})();
