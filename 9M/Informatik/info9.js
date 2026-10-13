/* Bausteine für Informatik 9 – ergänzen ../../7M/NT/modul-basis.js (window.Modul) und ../../7M/Informatik/praxis.js.
 * Einbinden nach themen.js, modul-basis.js und praxis.js.
 *
 *   Modul.start9(cfg)                 wie Modul.init (KI-Route /api/inf9/uebung/feedback voreingestellt); meldet jeden
 *                                     Fortschritt an den Lernweg
 *   Modul.lernweg(el)                 EIN-AUFGABEN-NAVIGATION: immer nur eine Aufgabe sichtbar („Aufgabe 4 von 10“),
 *                                     darunter Vorwissen, Hinweis 1–3, Zurück, Weiter. Aufbau der Seite:
 *        const W = Modul.lernweg("#weg");
 *        W.teil("Regelheft", "Schreiben");                          // Abschnitt (= Station im Lernstand)
 *        W.regelheft({ titel, html, lehrer });                      // Eintrag zum Abschreiben und Abhaken – erst danach geht es weiter
 *        W.teil("Üben", "Ausprobieren");
 *        W.aufgabe({ titel, auftrag: "kurzer Arbeitsauftrag (HTML)", vorwissen: "HTML", hinweise: ["…", "…", "…"],
 *                    lehrer: { ziel, anleitung, loesung, fehler: ["…"], bedienung, test },
 *                    bild: { src: "assets/bilder/x.jpg", alt, text },  // wahlweise: Bild über der Aufgabe (ki: false = ohne Vermerk)
 *                    bau(box) { Modul.makeMC(box, …, "a1"); } });   // jeder vorhandene Baustein passt hinein
 *        W.karten({ karten: [["Begriff", "Erklärung"], …] });       // Wortspeicher als Lernkarten (Ende des Moduls)
 *        W.fertig();   Modul.ready();
 *   Modul.makeRegelheft(el, {titel, html}, id)    liniertes Blatt mit Knopf „Ich habe den Eintrag … geschrieben“
 *   Modul.makeLernkarten(el, karten, id)          Karten umdrehen, „Gewusst“ / „Noch einmal“
 *   Modul.makeEingabe(el, cfg, id)                Eingabe-Frage (wie Informatik 8)
 *
 * LEHRERANSICHT: In der Vorschau (?vorschau=1, Link aus der Verwaltung) und mit dem Lehrercode steht unter jeder
 * Aufgabe: Lernziel, kurze Unterrichtsanleitung, erwartete Lösung, mögliche Fehler, Bedienung, Teststatus – und der
 * Knopf „Musterlösung vorführen“ (nutzt Modul.loeser[id], den auch der Einheiten-Prüfer benutzt).
 *
 * R9 und M9 bekommen dieselben Aufgaben und dieselben Hilfen: keine Wartezeiten, keine Plus-Aufgaben.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve, load, save} = M;
M.loeser = M.loeser || {};
const K = window.INF9 || {};
const warte = ms => new Promise(r => setTimeout(r, ms));

const glatt = v => String(v == null ? "" : v).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
  .replace(/\buhr\b/g, "").replace(/\s+/g, "").replace(/[.!?;,]+$/g, "");
const zahl = v => parseFloat(String(v).replace(/\s/g, "").replace(/[€%]/g, "").replace(",", "."));

/* ---------- Start ---------- */
const hoerer = [];
let EINHEIT = "";   // Kennung der Einheit („netz-start“) für die KI-Lernhilfe
function start9(cfg) {
  EINHEIT = K.idAusKey ? K.idAusKey(cfg.key) : String(cfg.key || "");
  M.init(Object.assign({api: "/api/inf9/uebung/feedback"}, cfg, {
    onProgress: (n, t, x) => { hoerer.forEach(f => { try { f(x); } catch (_e) {} }); if (cfg.onProgress) cfg.onProgress(n, t, x); }
  }));
}

/* ---------- Eingabe-Frage ---------- */
// cfg: { frage, antworten: ["192.168.0.11"] | wert: 12.5 (dazu tol: 0.01, einheit: "€"), tipp, erfolg, platz, name }
function makeEingabe(box, cfg, id) {
  register(id, box, cfg.name || "Eingabe: " + cfg.frage);
  const istZahl = typeof cfg.wert === "number";
  const wrap = document.createElement("div"); wrap.className = "eingabe8";
  wrap.innerHTML = `<label class="pruef-frage" for="ein-${esc(id)}">${cfg.frage}</label>
    <div class="pruef-zeile"><input type="text" class="pruef-eingabe" id="ein-${esc(id)}" ${istZahl ? 'inputmode="decimal"' : ""} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(cfg.platz || "")}">
    ${cfg.einheit ? `<span class="pruef-einheit">${esc(cfg.einheit)}</span>` : ""}<button type="button" class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  box.appendChild(wrap);
  const feld = $(".pruef-eingabe", wrap), fb = $(".fb", wrap);
  const stimmt = v => istZahl ? Math.abs(zahl(v) - cfg.wert) <= (cfg.tol || 0) : (cfg.antworten || []).some(a => glatt(a) === glatt(v));
  function pruefen() {
    if (!feld.value.trim()) { fb.className = "fb show mid"; fb.textContent = "Trag zuerst dein Ergebnis ein."; return; }
    const ok = stimmt(feld.value);
    fb.className = "fb show " + (ok ? "ok" : "bad");
    const ohneGleich = !ok && !istZahl && (cfg.antworten || []).some(a => a.charAt(0) === "=" && glatt(a) === glatt("=" + feld.value.trim()));
    fb.textContent = ok ? "✅ Richtig!" + (cfg.erfolg ? " " + cfg.erfolg : "") : ohneGleich ? "❌ Fast! Am Anfang fehlt das Gleichheitszeichen. Ohne = ist es für Excel nur ein Text." : "❌ Das passt noch nicht. " + (cfg.tipp || "Sieh noch einmal genau nach.");
    if (ok) { save("-wert-" + id, feld.value); solve(id); }
  }
  $(".check", wrap).addEventListener("click", pruefen);
  feld.addEventListener("keydown", e => { if (e.key === "Enter") pruefen(); });
  if (M.isSolved(id)) { feld.value = load("-wert-" + id, ""); fb.className = "fb show ok"; fb.textContent = "✅ Das hast du schon richtig gelöst."; }
  M.loeser[id] = async () => { if (M.isSolved(id)) return; feld.value = istZahl ? String(cfg.wert).replace(".", ",") : cfg.antworten[0]; pruefen(); };
}

/* ---------- Regelhefteintrag ---------- */
// cfg: { titel: "Überschrift im Heft", html: "<p>…</p>" (kurz! zwei bis fünf Aussagen, ein Beispiel), name }
function makeRegelheft(box, cfg, id) {
  register(id, box, cfg.name || "Regelhefteintrag: " + cfg.titel);
  const w = document.createElement("div"); w.className = "rh9";
  w.innerHTML = `<div class="rh9-kopf">📓 Regelheft – schreibe diesen Eintrag in dein Heft</div>
    <div class="rh9-blatt"><h4>${esc(cfg.titel)}</h4>${cfg.html}</div>
    <button type="button" class="btn rh9-fertig">✅ Ich habe den Eintrag in mein Regelheft geschrieben</button><div class="fb"></div>`;
  box.appendChild(w);
  const knopf = $(".rh9-fertig", w), fb = $(".fb", w);
  const zeig = () => { knopf.disabled = true; fb.className = "fb show ok"; fb.textContent = "✅ Abgehakt – der Eintrag steht in deinem Regelheft. Weiter geht es mit der ersten Aufgabe."; };
  knopf.addEventListener("click", () => { solve(id); zeig(); });
  if (M.isSolved(id)) zeig();
  M.loeser[id] = async () => { if (!M.isSolved(id)) knopf.click(); };
}

/* ---------- Wortspeicher als Lernkarten ---------- */
// karten: [["Switch", "Verbindet mehrere Computer in einem Netzwerk."], …] – fertig, wenn jede Karte einmal „gewusst“ ist
function makeLernkarten(box, karten, id, name) {
  register(id, box, name || "Wortspeicher: Lernkarten");
  const w = document.createElement("div"); w.className = "lk9";
  w.innerHTML = `<div class="lk9-stand"></div>
    <button type="button" class="lk9-karte" aria-live="polite"><span class="lk9-seite"></span><b class="lk9-wort"></b><span class="lk9-text"></span></button>
    <div class="lk9-knoepfe"><button type="button" class="btn small lk9-dreh">🔄 Umdrehen</button><button type="button" class="btn small lk9-ja" hidden>✓ Gewusst</button><button type="button" class="btn small ghost lk9-nein" hidden>↺ Noch einmal</button></div>
    <div class="fb"></div>
    <details class="lk9-alle"><summary>Alle Begriffe auf einen Blick</summary><div class="words">${karten.map(k => `<div class="word"><b>${esc(k[0])}</b><p>${esc(k[1])}</p></div>`).join("")}</div></details>`;
  box.appendChild(w);
  const karte = $(".lk9-karte", w), stand = $(".lk9-stand", w), fb = $(".fb", w), dreh = $(".lk9-dreh", w), ja = $(".lk9-ja", w), nein = $(".lk9-nein", w);
  let stapel = karten.map((_, i) => i), gewusst = 0, offen = false;
  function zeig() {
    const fertig = !stapel.length;
    stand.textContent = fertig ? `Alle ${karten.length} Begriffe gewusst` : `Karte ${karten.length - stapel.length + 1} von ${karten.length} · ${gewusst} gewusst`;
    karte.hidden = fertig; dreh.hidden = fertig || offen; ja.hidden = nein.hidden = fertig || !offen;
    if (fertig) { fb.className = "fb show ok"; fb.innerHTML = "✅ Geschafft – du kennst alle Begriffe. <button type=\"button\" class=\"btn small ghost lk9-neu\">↺ Noch einmal üben</button>"; $(".lk9-neu", fb).addEventListener("click", () => { stapel = karten.map((_, i) => i); gewusst = 0; offen = false; fb.className = "fb"; fb.textContent = ""; zeig(); }); return; }
    const k = karten[stapel[0]];
    karte.classList.toggle("offen", offen);
    $(".lk9-seite", karte).textContent = offen ? "Erklärung" : "Begriff – was bedeutet das?";
    $(".lk9-wort", karte).textContent = k[0]; $(".lk9-text", karte).textContent = offen ? k[1] : "Tippe auf die Karte";
  }
  const drehe = () => { offen = true; zeig(); };
  karte.addEventListener("click", () => { if (!offen) drehe(); });
  dreh.addEventListener("click", drehe);
  ja.addEventListener("click", () => { stapel.shift(); gewusst++; offen = false; if (!stapel.length) solve(id); zeig(); });
  nein.addEventListener("click", () => { stapel.push(stapel.shift()); offen = false; zeig(); });
  zeig();
  if (M.isSolved(id)) { fb.className = "fb show ok"; fb.textContent = "✅ Du hast den Wortspeicher schon einmal ganz geschafft. Zum Wiederholen einfach weiterblättern."; }
  M.loeser[id] = async () => { let n = 0; while (stapel.length && n++ < 200) { if (!offen) dreh.click(); ja.click(); } };
}

/* ---------- Musterlösung vorführen (Lehreransicht) ----------
   Eigene Bausteine bringen ihren Löser mit (Modul.loeser[id]). Die Bausteine aus modul-basis.js (Ankreuzen, Lücken,
   Zuordnen, Richtig/Falsch, Reihenfolge, Paare, Beschriften, offene Frage, Animation) werden hier über die Oberfläche
   gelöst – so, wie es auch der Einheiten-Prüfer tut. Ankreuzen ohne Probieren: Die richtigen Antworten merkt sich
   der Aufruf von makeMC. */
const mcAlt = M.makeMC, filmAlt = M.makeFilm;
M.makeMC = function (container, list, prefix, tag) { mcAlt(container, list, prefix, tag); container.__mc9 = list; };
// Film: Die Stopp-Fragen baut modul-basis.js selbst – hier die richtigen Antworten den Fragen zuordnen
M.makeFilm = function (box, cfg, prefix) { filmAlt(box, cfg, prefix); $$(".film-q", box).forEach((w, i) => { const q = w.firstElementChild; if (q && cfg.stops[i]) q.__mc9 = [cfg.stops[i].q]; }); };
async function loeseIn(box) {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const klar = h => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent.replace(/\s+/g, " ").trim(); };
  // Ankreuzen
  const mcBoxen = [box].concat($$("*", box)).filter(e => e.__mc9);
  for (const c of mcBoxen) {
    const fragen = $$(".q:not(.ki)", c).filter(q => !q.closest("#quiz"));
    for (let i = 0; i < fragen.length && i < c.__mc9.length; i++) {
      const q = fragen[i], d = c.__mc9[i]; if ($(".fb.ok", q)) continue;
      const soll = [].concat(d.a).map(k => klar(String(d.o[k])));
      for (const o of $$(".opt", q)) { const t = klar(($("span:last-child", o) || o).innerHTML), an = soll.indexOf(t) >= 0; if (an !== o.classList.contains("sel") && !o.disabled && (an || $(".check", q))) { o.click(); await wait(120); } }
      const check = $(".check", q); if (check) { check.click(); await wait(120); }
    }
  }
  // Lückentext (makeGap schreibt Wortbank, Text und „Prüfen“ in sein Element – egal, welche Klasse es trägt)
  for (const bank of $$(".bank", box)) {
    const b = bank.parentElement, check = $(".check", b);
    if (!check || !$(".gap", b)) continue;
    for (const g of $$(".gap", b)) for (const t of $$(".tok", bank)) { if (g.classList.contains("right")) break; if (t.classList.contains("used")) continue; g.click(); t.click(); check.click(); await wait(20); }
    check.click();
  }
  // Zuordnen
  for (const c of $$(".buckets", box).map(b => b.parentElement)) {
    const buckets = $$(".bucket", c);
    if ($(".buckets.pairs", c)) { for (const t of $$(".tok", c)) for (const b of buckets) { if (t.classList.contains("right")) break; if ($(".tok.right", b)) continue; if (t.closest(".bucket")) t.click(); t.click(); b.click(); $(".check", c).click(); await wait(20); } }
    else for (let b = 0; b < buckets.length; b++) { for (const t of $$(".tok", c).filter(t => !t.classList.contains("right"))) { if (t.closest(".bucket")) t.click(); t.click(); buckets[b].click(); } $(".check", c).click(); await wait(40); if ($(".fb.ok", c)) break; }
    $(".check", c).click();
  }
  // Richtig / Falsch
  for (const b of $$(".tf", box).map(t => t.parentElement)) {
    $$(".tf-row", b).forEach(r => $('button[data-v="1"]', r).click()); $(".check", b).click(); await wait(40);
    $$(".tf-row.wrong", b).forEach(r => $('button[data-v="0"]', r).click()); $(".check", b).click();
  }
  // Reihenfolge
  for (const b of $$(".order-list", box).map(o => o.parentElement)) {
    for (let n = 0; n < 400; n++) { const rows = $$(".order-item", b), k = rows.map(r => +r.dataset.k), i = k.findIndex((v, j) => j < k.length - 1 && v > k[j + 1]); if (i < 0) break; $('button[data-m="1"]', rows[i]).click(); }
    $(".check", b).click();
  }
  // Bild beschriften
  for (const b of $$(".label-wrap", box).map(l => l.parentElement)) {
    for (const s of $$(".slot", b)) for (const t of $$(".label-pool .tok", b)) { if (s.classList.contains("right")) break; if (t.hidden) continue; t.click(); s.click(); $(".check", b).click(); await wait(20); if (!s.classList.contains("right")) s.click(); }
    $(".check", b).click();
  }
  $$(".hs", box).forEach(b => b.click());
  // Paare
  for (const b of $$(".paare", box).map(p => p.parentElement)) for (const l of $$('.tok[data-s="l"]', b)) for (const r of $$('.tok[data-s="r"]', b)) { if (l.classList.contains("right")) break; if (r.classList.contains("right")) continue; l.click(); r.click(); await wait(20); }
  // Animation in Schritten
  for (const s of $$(".schritte", box)) { const n = $$(".schritt-punkte button", s).length; for (let i = 0; i < n; i++) { const w = $(".next", s); if (w) w.click(); await wait(150); } }
  // Offene Frage: Musterlösung eintragen und prüfen lassen
  for (const q of $$(".q.ki", box)) {
    const ta = $("textarea", q), model = $(".model", q); if (!ta || !model || $(".fb.ok", q)) continue;
    ta.value = model.textContent.replace(/^\s*Musterlösung:\s*/, ""); ta.dispatchEvent(new Event("input", {bubbles: true})); $(".go", q).click();
    for (let n = 0; n < 150 && !$(".fb.show", q); n++) await wait(100);
  }
}

/* ---------- Ein-Aufgaben-Navigation ---------- */
// opt.lehrer: true/false erzwingt die Lehreransicht bzw. die Schüleransicht (nur für Tests; sonst Vorschau/Lehrercode)
function lernweg(ziel, opt) {
  const host = typeof ziel === "string" ? $(ziel) : ziel;
  host.classList.add("weg9");
  const schritte = [], teile = [], nav = $("#stations");
  let teilAkt = null, akt = 0, lehrer = opt && opt.lehrer !== undefined ? !!opt.lehrer : !!K.VORSCHAU, rhId = "", gebaut = false;
  const lehrerFest = !!(opt && opt.lehrer !== undefined);

  function teil(titel, unter) {
    const nr = teile.length + 1, sec = document.createElement("section");
    sec.className = "station weg9-teil"; sec.id = "s" + nr;
    sec.innerHTML = `<div class="st-head"><div class="st-num">${nr}</div><div><div class="eyebrow">${esc(unter || "")}</div><h2>${esc(titel)}</h2></div></div>`;
    host.appendChild(sec);
    teilAkt = {nr, titel, sec}; teile.push(teilAkt);
    if (nav) { const a = document.createElement("a"); a.href = "#s" + nr; a.innerHTML = `<b>${nr}</b>${esc(titel)}`; nav.appendChild(a); }
    return api;
  }

  // art: "aufgabe" (zählt in „Aufgabe k von n“), "regelheft", "karten", "ende"
  function schritt(cfg, art) {
    if (!teilAkt) teil("Aufgaben", "");
    const vorher = Object.keys(M.katalog());
    const el = document.createElement("div"); el.className = "card weg9-schritt weg9-" + art; el.hidden = true;
    el.innerHTML = `<div class="weg9-kopf"><span class="weg9-zahl"></span><div class="weg9-punkte"></div></div>
      <h3 class="weg9-titel">${esc(cfg.titel || "")}</h3>${cfg.auftrag ? `<div class="weg9-auftrag">${cfg.auftrag}</div>` : ""}
      ${cfg.bild ? `<figure class="bild9"><img class="zoomable" src="${esc(cfg.bild.src)}" width="${cfg.bild.breit || 1280}" height="${cfg.bild.hoch || 853}" loading="lazy" alt="${esc(cfg.bild.alt || "")}"><figcaption>${esc(cfg.bild.text || "")}${cfg.bild.ki === false ? "" : " (Bild mit KI erstellt)"}</figcaption></figure>` : ""}
      <div class="weg9-inhalt"></div>
      <div class="weg9-hilfe"></div><div class="weg9-hilfetext" aria-live="polite"></div>
      <div class="weg9-fuss"><button type="button" class="btn ghost weg9-zurueck">← Zurück</button><span class="weg9-stand"></span><button type="button" class="btn weg9-weiter">Weiter →</button></div>
      <div class="weg9-lehrer"></div>`;
    teilAkt.sec.appendChild(el);
    const inhalt = $(".weg9-inhalt", el);
    if (cfg.bau) cfg.bau(inhalt);
    // Bilder zum Vergrößern (Modul.init kennt nur Bilder, die schon in der Seite standen)
    $$("img.zoomable", el).forEach(img => img.addEventListener("click", () => { const lb = $("#lb"); if (!lb) return; $("img", lb).src = img.src; $("img", lb).alt = img.alt; lb.classList.add("show"); }));
    const ids = Object.keys(M.katalog()).filter(i => vorher.indexOf(i) < 0);
    const s = {cfg, art, el, ids, teil: teilAkt, nr: schritte.length, key: cfg.id || art.charAt(0) + schritte.length};
    schritte.push(s);
    // „Prüfen“ heißt hier überall „Lösung überprüfen“ (auch bei Knöpfen, die ein Baustein erst später einsetzt)
    const umbenennen = () => $$("button.check", inhalt).forEach(b => { if (b.textContent.trim() === "Prüfen") b.textContent = "Lösung überprüfen"; });
    umbenennen();
    if (window.MutationObserver) new MutationObserver(umbenennen).observe(inhalt, {childList: true, subtree: true});
    hilfen(s);
    $(".weg9-zurueck", el).addEventListener("click", () => zeige(s.nr - 1, true));
    $(".weg9-weiter", el).addEventListener("click", () => zeige(s.nr + 1, true));
    return s;
  }

  // Vorwissen und Hinweis 1–3: zuerst verborgen; Hinweis 2 gibt es erst nach Hinweis 1 usw. Für alle Klassen gleich.
  function hilfen(s) {
    const leiste = $(".weg9-hilfe", s.el), text = $(".weg9-hilfetext", s.el), c = s.cfg, liste = [];
    if (c.vorwissen) liste.push({k: "v", knopf: "📖 Vorwissen anzeigen", zu: "📖 Vorwissen ausblenden", titel: "Vorwissen", html: c.vorwissen});
    (c.hinweise || []).slice(0, 3).forEach((h, i) => liste.push({k: "h" + (i + 1), knopf: "💡 Hinweis " + (i + 1), zu: "💡 Hinweis " + (i + 1) + " ausblenden", titel: "Hinweis " + (i + 1), html: h}));
    const mitKi = s.art === "aufgabe" && c.ki !== false;
    if (!liste.length && !mitKi) { leiste.hidden = true; return; }
    const gesehen = String(load("-hilfe-" + s.key, "")).split(",").filter(Boolean);
    let kiKnopf = null;
    liste.forEach((h, i) => {
      const b = document.createElement("button"); b.type = "button"; b.className = "btn small ghost weg9-h weg9-h-" + h.k; b.textContent = h.knopf; b.setAttribute("aria-expanded", "false");
      const kasten = document.createElement("div"); kasten.className = "weg9-hinweis weg9-hinweis-" + h.k.charAt(0); kasten.hidden = true;
      kasten.innerHTML = `<b>${esc(h.titel)}</b><div>${h.html}</div>`;
      h.b = b; h.kasten = kasten; leiste.appendChild(b); text.appendChild(kasten);
      b.addEventListener("click", () => {
        const auf = kasten.hidden; kasten.hidden = !auf; b.textContent = auf ? h.zu : h.knopf; b.setAttribute("aria-expanded", String(auf));
        if (auf && gesehen.indexOf(h.k) < 0) { gesehen.push(h.k); save("-hilfe-" + s.key, gesehen.join(",")); }
        sperren();
      });
    });
    function sperren() {
      liste.forEach((h, i) => { const vor = liste[i - 1]; h.b.disabled = h.k.charAt(0) === "h" && vor && vor.k.charAt(0) === "h" && gesehen.indexOf(vor.k) < 0; });
      // Die KI gibt es erst nach dem ersten Hinweis der Seite (oft hilft der schon)
      if (kiKnopf) { const braucht = liste.some(h => h.k === "h1") && gesehen.indexOf("h1") < 0; kiKnopf.disabled = braucht; kiKnopf.title = braucht ? "Öffne zuerst Hinweis 1 – oft hilft der schon." : ""; }
    }
    if (mitKi) kiKnopf = kiHilfe(s, leiste, text, liste);
    sperren();
  }

  // KI-Lernhilfe (Server /api/inf9/hilfe): eigene Frage zur Aufgabe. Erste Frage = kleiner Tipp, zweite = konkreter
  // Hinweis, ab der dritten Schritt für Schritt. Die Lösung nennt die KI nie; c.geheim (genaue Lösungswerte) verdeckt
  // der Server zusätzlich. Braucht die Anmeldung mit Code.
  function kiHilfe(s, leiste, text, liste) {
    const c = s.cfg, STUFEN = ["kleiner Tipp", "konkreter Hinweis", "Schritt für Schritt"];
    const b = document.createElement("button"); b.type = "button"; b.className = "btn small ghost weg9-h weg9-ki"; b.textContent = "🤖 KI fragen"; b.setAttribute("aria-expanded", "false");
    const kasten = document.createElement("div"); kasten.className = "weg9-hinweis weg9-kibox"; kasten.hidden = true;
    kasten.innerHTML = `<b>Frag die KI</b><label for="ki-${esc(s.key)}">Was verstehst du nicht? Schreib deine Frage in einem Satz.</label>
      <textarea id="ki-${esc(s.key)}" rows="2" maxlength="300" placeholder="z. B. Warum klappt mein ping nicht?"></textarea>
      <div class="weg9-kizeile"><button type="button" class="btn small weg9-kisenden">Frage senden</button><span class="weg9-kistufe"></span></div>
      <div class="weg9-kiantwort" aria-live="polite"></div>`;
    leiste.appendChild(b); text.appendChild(kasten);
    const feld = $("textarea", kasten), senden = $(".weg9-kisenden", kasten), stufeEl = $(".weg9-kistufe", kasten), aus = $(".weg9-kiantwort", kasten);
    let n = parseInt(load("-ki-" + s.key, "0"), 10) || 0;
    const stufe = () => Math.min(3, n + 1), zeigStufe = () => { stufeEl.textContent = "Hilfe-Stufe " + stufe() + " von 3: " + STUFEN[stufe() - 1]; };
    zeigStufe();
    b.addEventListener("click", () => { const auf = kasten.hidden; kasten.hidden = !auf; b.setAttribute("aria-expanded", String(auf)); b.textContent = auf ? "🤖 KI ausblenden" : "🤖 KI fragen"; if (auf) feld.focus(); });
    const klar = h => { const d = document.createElement("div"); d.innerHTML = String(h || ""); return d.textContent.replace(/\s+/g, " ").trim(); };
    async function frag() {
      const frage = feld.value.trim(), a = M.anmeldung ? M.anmeldung() : null;
      if (frage.length < 5) { aus.className = "weg9-kiantwort mid"; aus.textContent = "Schreib deine Frage in einem ganzen Satz – dann kann ich dir helfen."; return; }
      if (!a || !a.code) { aus.className = "weg9-kiantwort mid"; aus.textContent = "Die KI-Hilfe gibt es nach der Anmeldung mit deinem Code."; return; }
      senden.disabled = true; aus.className = "weg9-kiantwort"; aus.textContent = "Die KI denkt nach …";
      const langsam = setTimeout(() => { aus.textContent = "Die KI denkt nach … Der Server wacht gerade auf, das kann bis zu einer Minute dauern."; }, 7000);
      const ctl = window.AbortController ? new AbortController() : null, ende = setTimeout(() => { if (ctl) ctl.abort(); }, 75000);
      const L = c.lehrer || {};
      try {
        const r = await fetch((K.API || "") + "/api/inf9/hilfe", { method: "POST", headers: {"Content-Type": "application/json"}, signal: ctl ? ctl.signal : undefined,
          body: JSON.stringify({ code: a.code, einheit: EINHEIT, aufgabe: s.key, titel: c.titel || "", auftrag: klar(c.auftrag), frage, stufe: stufe(),
            kontext: [(c.hinweise || []).map((h, i) => "Hinweis " + (i + 1) + ": " + klar(h)).join(" "), L.loesung ? "Erwartete Lösung: " + klar(L.loesung) : "", L.fehler ? "Typische Fehler: " + klar([].concat(L.fehler).join("; ")) : ""].filter(Boolean).join(" · "),
            geheim: c.geheim || [] }) });
        const d = await r.json();
        if (!d.ok) { aus.className = "weg9-kiantwort mid"; aus.textContent = d.error || "Das hat gerade nicht geklappt."; }
        // die KI setzt manchmal Zeichen für Fettdruck (**so**) – hier steht reiner Text, also ohne die Zeichen zeigen
        else { aus.className = "weg9-kiantwort ok"; aus.textContent = "🤖 " + String(d.antwort || "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/^#{1,4}\s+/gm, ""); n++; save("-ki-" + s.key, String(n)); zeigStufe(); }
      } catch (_e) { aus.className = "weg9-kiantwort mid"; aus.textContent = "Die KI ist gerade nicht erreichbar. Nutze die Hinweise unter der Aufgabe."; }
      clearTimeout(langsam); clearTimeout(ende); senden.disabled = false;
    }
    senden.addEventListener("click", frag);
    return b;
  }

  // Teststatus für Aufträge im echten Programm (erkannt am Kennzeichen „Windows-PC mit … erforderlich“)
  const PROGRAMM_TEST = {
    Filius: "Die Schritte sind mit Filius 2.14.0 (deutsch) geprüft; Musterlösung und falsche Dateien wurden im echten Programm gebaut. Auf den Schul-PCs sollte dieselbe Version laufen.",
    Excel: "Die Schritte sind mit Excel 16 (Microsoft 365, deutsch) geprüft; Musterlösung und falsche Dateien wurden im echten Programm gebaut. Bitte einmal an einem Schul-PC ansehen: der gelbe Balken „Bearbeitung aktivieren“, die Taste F12 für „Speichern unter“ und die Einträge in den aufgeklappten Diagramm-Listen – diese Wortlaute sind nicht am Programm abgelesen.",
    Scratch: "Die Schritte sind im Scratch-Editor im Browser geprüft (Chrome unter Windows, Stand 13.10.2026); Musterlösung und falsche Projekte wurden dort gebaut und gestartet. Scratch Desktop und andere Browser sind nicht geprüft."
  };
  // Lehreransicht unter der Aufgabe (nur Vorschau oder Lehrercode)
  function lehrerKasten(s) {
    const box = $(".weg9-lehrer", s.el), L = s.cfg.lehrer;
    if (!lehrer || !L || box.firstChild) return;
    const zeile = (t, v) => v ? `<dt>${t}</dt><dd>${Array.isArray(v) ? "<ul>" + v.map(x => `<li>${x}</li>`).join("") + "</ul>" : v}</dd>` : "";
    const kat = M.katalog(), namen = s.ids.map(i => kat[i] ? kat[i][0] : i);
    // Aufträge im echten Programm: ehrlich sagen, woran die Schritte geprüft sind und was am Schul-PC noch anzusehen ist
    const tag = $(".pc-tag", s.el), prog = tag ? Object.keys(PROGRAMM_TEST).find(p => tag.textContent.indexOf(p) >= 0) : "";
    const test = (L.test || "Aufgabe und Musterlösung automatisch geprüft (Chrome und Safari-Testbrowser).") + (prog ? " " + PROGRAMM_TEST[prog] : "");
    box.innerHTML = `<details class="lehrer9" open><summary>👩‍🏫 Lehreransicht zu dieser Aufgabe</summary><dl>
      ${zeile("Lernziel", L.ziel)}${zeile("So gehst du vor", L.anleitung)}${zeile("Erwartete Lösung", L.loesung)}${zeile("Mögliche Fehler", L.fehler)}${zeile("Bedienung", L.bedienung)}
      ${zeile("Teststatus", test)}
      ${zeile("Schülerfortschritt", `Verwaltung → Klasse → Informatik: Diese Aufgabe heißt dort „${esc(namen.join("“, „"))}“. <a href="../../proben-verwalten.html" target="_blank" rel="noopener">Verwaltung öffnen ↗</a>`)}</dl>
      <div class="lehrer9-knoepfe"><button type="button" class="btn small vorfuehren">▶ Musterlösung vorführen</button><span class="lehrer9-meldung"></span></div></details>`;
    const knopf = $(".vorfuehren", box), meld = $(".lehrer9-meldung", box);
    if (!s.ids.length) { knopf.hidden = true; return; }
    knopf.addEventListener("click", async () => {
      knopf.disabled = true; meld.textContent = "läuft …";
      try {
        // Löser eines Bausteins: Kennung der Aufgabe oder ihr Anfang („fehler“ löst „fehler-0“, „fehler-1“ …)
        for (const k of Object.keys(M.loeser)) if (s.ids.some(i => i === k || i.indexOf(k + "-") === 0)) await M.loeser[k]();
        await loeseIn($(".weg9-inhalt", s.el));
        meld.textContent = s.ids.every(i => M.isSolved(i)) ? "✓ So sieht die richtige Lösung aus." : "Diese Aufgabe lässt sich nicht automatisch vorführen – die erwartete Lösung steht oben.";
      } catch (e) { meld.textContent = "Das Vorführen hat nicht geklappt: " + e.message; }
      knopf.disabled = false;
    });
  }

  const istGeloest = s => s.ids.length > 0 && s.ids.every(i => M.isSolved(i));
  const gesperrt = i => !lehrer && rhId && !M.isSolved(rhId) && i > schritte.findIndex(s => s.art === "regelheft");
  const aufgaben = () => schritte.filter(s => s.art === "aufgabe");

  function zeige(i, rollen) {
    i = Math.max(0, Math.min(schritte.length - 1, i));
    while (i > 0 && gesperrt(i)) i--;
    akt = i; save("-weg", String(i));
    schritte.forEach(s => { s.el.hidden = s.nr !== i; });
    teile.forEach(t => { t.sec.hidden = t !== schritte[i].teil; });
    if (nav) $$("a", nav).forEach((a, n) => a.classList.toggle("active", teile[n] === schritte[i].teil));
    aktualisiere();
    lehrerKasten(schritte[i]);
    if (rollen) { const y = host.getBoundingClientRect().top + window.scrollY - 86; window.scrollTo({top: Math.max(0, y), behavior: M.reduced ? "auto" : "smooth"}); }
  }

  function aktualisiere() {
    if (!gebaut) return;
    const s = schritte[akt], A = aufgaben(), k = A.indexOf(s);
    $(".weg9-zahl", s.el).textContent = s.art === "aufgabe" ? `Aufgabe ${k + 1} von ${A.length}` : s.art === "regelheft" ? "Zuerst: Regelheft" : s.art === "karten" ? "Wortspeicher" : "Geschafft";
    $(".weg9-punkte", s.el).innerHTML = schritte.map(x => `<button type="button" class="weg9-punkt${x === s ? " akt" : ""}${istGeloest(x) ? " fertig" : ""}" data-i="${x.nr}" ${gesperrt(x.nr) ? "disabled" : ""}
      title="${esc(x.art === "aufgabe" ? "Aufgabe " + (A.indexOf(x) + 1) : x.cfg.titel || "")}${istGeloest(x) ? " – gelöst" : ""}" aria-label="${esc(x.art === "aufgabe" ? "Aufgabe " + (A.indexOf(x) + 1) : x.cfg.titel || "")}">${x.art === "regelheft" ? "📓" : x.art === "karten" ? "🗂" : x.art === "ende" ? "🏁" : istGeloest(x) ? "✓" : A.indexOf(x) + 1}</button>`).join("");
    const st = $(".weg9-stand", s.el);
    st.textContent = s.art === "ende" ? "" : istGeloest(s) ? "✓ gelöst" : s.ids.length ? "noch offen" : "";
    st.className = "weg9-stand" + (istGeloest(s) ? " ok" : "");
    $(".weg9-zurueck", s.el).disabled = akt === 0;
    const weiter = $(".weg9-weiter", s.el);
    weiter.hidden = akt === schritte.length - 1;
    weiter.disabled = gesperrt(akt + 1);
    weiter.classList.toggle("bereit", istGeloest(s));
    if (s.art === "ende") endeText(s);
  }

  // Letzte Karte: Was ist geschafft, was fehlt noch, wie geht es weiter
  function endeText(s) {
    const offen = schritte.filter(x => x.ids.length && !istGeloest(x)), A = aufgaben();
    $(".weg9-inhalt", s.el).innerHTML = offen.length
      ? `<p class="lead">Du bist am Ende der Einheit. <strong>${offen.length === 1 ? "Eine Aufgabe ist" : offen.length + " Aufgaben sind"} noch offen:</strong></p>
         <div class="weg9-offen">${offen.map(x => `<button type="button" class="btn small ghost" data-i="${x.nr}">${esc(x.art === "aufgabe" ? "Aufgabe " + (A.indexOf(x) + 1) + ": " : "")}${esc(x.cfg.titel || "")}</button>`).join("")}</div>`
      : `<p class="lead">🎉 <strong>Alles gelöst!</strong> Du hast die Einheit geschafft.</p>`;
    $(".weg9-inhalt", s.el).insertAdjacentHTML("beforeend", `<p><a class="btn" href="${esc(($("a.brand") || {getAttribute: () => "index.html"}).getAttribute("href"))}">💻 Zur Übersicht Informatik 9</a></p>`);
  }

  function fertig() {
    schritt({titel: "Ende der Einheit"}, "ende");
    gebaut = true;
    // nur die eigenen Sprungknöpfe (Punkte-Leiste, Liste „noch offen“) – auch Bausteine wie Paare oder
    // Richtig/Falsch tragen data-i an ihren Knöpfen, die dürfen keinen Schritt wechseln
    host.addEventListener("click", e => { const p = e.target.closest(".weg9-punkt, .weg9-offen [data-i]"); if (p && host.contains(p) && !p.disabled) zeige(+p.dataset.i, true); });
    // Sprünge aus der Stationsleiste und dem Lernfortschritt-Kasten („#s2“): zur ersten offenen Aufgabe dieses Teils
    document.addEventListener("click", e => {
      const a = e.target.closest('a[href^="#s"]'); if (!a) return;
      const m = /^#s(\d+)$/.exec(a.getAttribute("href")), t = m && teile[+m[1] - 1]; if (!t) return;
      e.preventDefault();
      const eigene = schritte.filter(s => s.teil === t), zielS = eigene.find(s => !istGeloest(s)) || eigene[0];
      if (zielS) zeige(zielS.nr, true);
    });
    // „Das fehlt dir noch“ (js/lernstand.js) lässt eine Aufgabe aufblinken: dann ihren Schritt zeigen
    if (window.MutationObserver) new MutationObserver(ms => ms.forEach(m => {
      const t = m.target; if (!t.classList || !t.classList.contains("ls-blink")) return;
      const s = schritte.find(x => x.el.contains(t)); if (s && s.nr !== akt && !gesperrt(s.nr)) { zeige(s.nr, false); t.scrollIntoView({block: "center"}); }
    })).observe(host, {attributes: true, attributeFilter: ["class"], subtree: true});
    hoerer.push(aktualisiere);
    zeige(parseInt(load("-weg", "0"), 10) || 0, false);
    // Lehrercode: Der Server meldet „alles“ – dann die Lehreransicht zeigen und nichts sperren
    if (!lehrer && !lehrerFest && K.freigabe && M.anmeldung) { try { K.freigabe(M.anmeldung(), st => { if (st && st.alles && !lehrer) { lehrer = true; zeige(akt, false); } }); } catch (_e) {} }
    return api;
  }

  const api = {
    teil,
    regelheft(cfg) { rhId = cfg.id || "rh"; schritt({titel: "Regelhefteintrag", id: "rh", lehrer: cfg.lehrer || {ziel: "Die wichtigsten Aussagen der Stunde stehen im Heft.", anleitung: "Die Klasse schreibt den Eintrag ab (etwa 5 Minuten). Erst nach dem Abhaken erscheint die erste Aufgabe.", loesung: "Der Eintrag steht vollständig im Heft."},
      bau: b => makeRegelheft(b, cfg, rhId)}, "regelheft"); return api; },
    aufgabe(cfg) { schritt(cfg, "aufgabe"); return api; },
    karten(cfg) { schritt({titel: cfg.titel || "Wortspeicher: Fachbegriffe wiederholen", auftrag: cfg.auftrag || "Kennst du den Begriff? Überlege zuerst, dann dreh die Karte um.", id: "wk",
      lehrer: cfg.lehrer || {ziel: "Die Fachbegriffe des Moduls sicher erklären können.", anleitung: "Zu zweit: Eine Person liest den Begriff, die andere erklärt. Erst dann umdrehen.", loesung: "Jede Karte wurde einmal mit „Gewusst“ abgelegt."},
      bau: b => makeLernkarten(b, cfg.karten, cfg.id || "karten", cfg.name)}, "karten"); return api; },
    fertig, zeige: i => zeige(i, false), schritte: () => schritte.map(s => ({art: s.art, titel: s.cfg.titel, ids: s.ids.slice(), nr: s.nr})), aktuell: () => akt
  };
  return api;
}

/* ---------- Navigation zum eigenen Zug ---------- */
// Der Inhalt ist für 9M und 9R gleich; nur der Rückweg führt zur eigenen Übersicht.
(function () {
  let z = "";
  try { z = K.zug ? K.zug(M.anmeldung ? M.anmeldung() : null) : ""; } catch (_e) {}
  if (!z) return;
  const eigene = z === "R" ? "../../9R/Informatik/index.html" : "index.html", andere = z === "R" ? "index.html" : "../../9R/Informatik/index.html";
  document.querySelectorAll('.navlinks a[href="' + andere + '"]').forEach(a => a.remove());
  document.querySelectorAll('a.brand[href="index.html"]').forEach(a => a.setAttribute("href", eigene));
})();

Object.assign(M, {start9, lernweg, makeRegelheft, makeLernkarten, makeEingabe, warte, glatt, loeseIn});
})();
