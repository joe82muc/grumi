/* Scratch-Blöcke als eigene Zeichnungen (HTML und CSS) und eine kleine Bühne, auf der einfache Programme laufen.
 * Für „Code lesen“, „Blöcke ordnen“ und zum Ausprobieren am Tablet (Informatik 8, Modul 5). Die Bühne ersetzt Scratch
 * nicht – programmiert wird im echten Scratch. Sie rechnet aber wie Scratch (geprüft im Editor, siehe SCRATCH.md):
 * „Antwort“ enthält nur die letzte Eingabe, „verbinde“ klebt ohne Leerzeichen zusammen, beim Vergleich von Texten ist
 * die Groß- und Kleinschreibung egal, mit Eingaben lässt sich rechnen.
 * Einbinden nach modul-basis.js, praxis.js und info8.js; dazu scratch.css.
 *
 * Ein Programm ist eine Liste von Blöcken, jeder Block eine Liste:
 *   ["flagge"]                                  Wenn (Fahne) angeklickt wird
 *   ["sage", wert]   ["sageFuer", wert, sek]    ["denke", wert]
 *   ["gehe", n]   ["geheZu", x, y]   ["richtung", grad]   ["groesse", n]   ["warte", sek]
 *   ["frage", text]                             frage … und warte
 *   ["setze", "name", wert]   ["aendere", "name", wert]
 *   ["falls", bedingung, [blöcke]]   ["fallsSonst", bedingung, [blöcke], [blöcke]]
 *   ["bis", bedingung, [blöcke]]   ["mal", n, [blöcke]]
 * Werte: Text oder Zahl, oder ["antwort"], ["var", "name"], ["verbinde", a, b], ["+", a, b], ["-", a, b], ["*", a, b],
 *        ["/", a, b], ["zufall", von, bis]. Bedingungen: ["=", a, b], [">", a, b], ["<", a, b].
 *
 *   Modul.scratchBloecke(el, programm)                    zeichnet die Blöcke
 *   Modul.scratchBuehne(el, { programm, variablen, eigenschaften: true })      Bühne mit Start-Knopf; liefert { starte(antworten, schnell) }
 *                                                         eigenschaften: zeigt x, y, Größe und Richtung der Figur unter der Bühne
 *   Modul.makeScratchVersuch(el, { text, programm, variablen, fertig: (lauf, alle) => true | "Hinweis", loesung: [[antworten]], erfolg, name }, id)
 *   Modul.makeBlockReihe(el, { text, bloecke, fest: 1, erfolg, name }, id)     Blöcke in die richtige Reihenfolge bringen
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve} = M;
M.loeser = M.loeser || {};
const warte = ms => new Promise(r => setTimeout(r, ms));

/* ---------- Blöcke zeichnen ---------- */
const FAHNE = '<svg class="scr-fahne" viewBox="0 0 20 20" aria-label="grüne Fahne" role="img"><path d="M4 2v17" stroke="#2e7d32" stroke-width="2.4" stroke-linecap="round"/><path d="M5 3c4-2 6 2 11 0v8c-5 2-7-2-11 0z" fill="#4caf50" stroke="#2e7d32" stroke-width="1"/></svg>';
const ART = {flagge: "ereignis", sage: "aussehen", sageFuer: "aussehen", denke: "aussehen", groesse: "aussehen", gehe: "bewegung", geheZu: "bewegung", richtung: "bewegung",
  frage: "fuehlen", antwort: "fuehlen", setze: "variablen", aendere: "variablen", var: "variablen", falls: "steuerung", fallsSonst: "steuerung", bis: "steuerung", mal: "steuerung", warte: "steuerung",
  verbinde: "operator", "+": "operator", "-": "operator", "*": "operator", "/": "operator", zufall: "operator", "=": "operator", ">": "operator", "<": "operator"};
const feld = (w, zahl) => Array.isArray(w) ? wertHtml(w) : `<span class="scr-ein${zahl ? " zahl" : ""}">${esc(String(w))}</span>`;
function wertHtml(w) {
  const [typ, a, b] = w, k = ART[typ] || "operator";
  if (typ === "antwort") return `<span class="scr-wert ${k}">Antwort</span>`;
  if (typ === "var") return `<span class="scr-wert ${k}">${esc(a)}</span>`;
  if (typ === "verbinde") return `<span class="scr-wert ${k}">verbinde ${feld(a)} und ${feld(b)}</span>`;
  if (typ === "zufall") return `<span class="scr-wert ${k}">Zufallszahl von ${feld(a, 1)} bis ${feld(b, 1)}</span>`;
  if ("+-*/".includes(typ)) return `<span class="scr-wert ${k}">${feld(a, 1)} ${typ} ${feld(b, 1)}</span>`;
  if ("=><".includes(typ)) return `<span class="scr-bed ${k}">${feld(a)} ${typ} ${feld(b)}</span>`;
  return "";
}
const stapel = liste => `<div class="scr-stapel">${(liste || []).map(blockHtml).join("")}</div>`;
function blockHtml(b) {
  const [typ, a, c, d] = b, k = ART[typ] || "steuerung", zeile = (inhalt, extra) => `<div class="scr-block ${k}${extra || ""}">${inhalt}</div>`;
  switch (typ) {
    case "flagge": return zeile(`Wenn ${FAHNE} angeklickt wird`, " hut");
    case "sage": return zeile(`sage ${feld(a)}`);
    case "sageFuer": return zeile(`sage ${feld(a)} für ${feld(c, 1)} Sekunden`);
    case "denke": return zeile(`denke ${feld(a)}`);
    case "gehe": return zeile(`gehe ${feld(a, 1)} er Schritt`);
    case "geheZu": return zeile(`gehe zu x: ${feld(a, 1)} y: ${feld(c, 1)}`);
    case "richtung": return zeile(`setze Richtung auf ${feld(a, 1)} Grad`);
    case "groesse": return zeile(`setze Größe auf ${feld(a, 1)}`);
    case "warte": return zeile(`warte ${feld(a, 1)} Sekunden`);
    case "frage": return zeile(`frage ${feld(a)} und warte`);
    case "setze": return zeile(`setze <span class="scr-wahl">${esc(a)} ▾</span> auf ${feld(c)}`);
    case "aendere": return zeile(`ändere <span class="scr-wahl">${esc(a)} ▾</span> um ${feld(c, 1)}`);
    case "falls": return `<div class="scr-klammer ${k}"><div class="scr-block ${k}">falls ${wertHtml(a)}, dann</div>${stapel(c)}<div class="scr-fuss ${k}"></div></div>`;
    case "fallsSonst": return `<div class="scr-klammer ${k}"><div class="scr-block ${k}">falls ${wertHtml(a)}, dann</div>${stapel(c)}<div class="scr-block ${k} mitte">sonst</div>${stapel(d)}<div class="scr-fuss ${k}"></div></div>`;
    case "bis": return `<div class="scr-klammer ${k}"><div class="scr-block ${k}">wiederhole bis ${wertHtml(a)}</div>${stapel(c)}<div class="scr-fuss ${k}">↩</div></div>`;
    case "mal": return `<div class="scr-klammer ${k}"><div class="scr-block ${k}">wiederhole ${feld(a, 1)} mal</div>${stapel(c)}<div class="scr-fuss ${k}">↩</div></div>`;
    default: return zeile(esc(String(typ)));
  }
}
function scratchBloecke(el, programm) { el.classList.add("scr-programm"); el.innerHTML = stapel(programm); return el; }

/* ---------- Rechnen wie Scratch ---------- */
const alsZahl = v => { const n = typeof v === "number" ? v : parseFloat(String(v).trim().replace(",", ".")); return Number.isFinite(n) ? n : 0; };
const istZahl = v => typeof v === "number" || (String(v).trim() !== "" && Number.isFinite(Number(String(v).trim().replace(",", "."))));
const rund = n => Math.round(n * 1e6) / 1e6;
function vergleich(a, b) {     // < 0, 0, > 0 – Zahlen als Zahlen, sonst Texte ohne Groß-/Kleinschreibung
  if (istZahl(a) && istZahl(b)) return alsZahl(a) - alsZahl(b);
  const x = String(a).toLowerCase(), y = String(b).toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
}

/* ---------- Bühne ---------- */
const FIGUR = '<svg viewBox="0 0 60 70" aria-hidden="true"><rect x="27" y="2" width="6" height="10" rx="3" fill="#5b6b7a"/><circle cx="30" cy="3" r="4" fill="#ff8c1a"/><rect x="10" y="10" width="40" height="30" rx="10" fill="#4c97ff" stroke="#2f6fd6" stroke-width="2"/><circle cx="22" cy="24" r="5" fill="#fff"/><circle cx="38" cy="24" r="5" fill="#fff"/><circle cx="23" cy="25" r="2.2" fill="#15212b"/><circle cx="39" cy="25" r="2.2" fill="#15212b"/><path d="M22 33q8 5 16 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><rect x="15" y="42" width="30" height="20" rx="6" fill="#5cb1d6" stroke="#3d8fb4" stroke-width="2"/><rect x="18" y="62" width="8" height="7" rx="3" fill="#5b6b7a"/><rect x="34" y="62" width="8" height="7" rx="3" fill="#5b6b7a"/></svg>';
function scratchBuehne(el, cfg) {
  el.classList.add("scr-buehne");
  el.innerHTML = `<div class="scr-flaeche" role="img" aria-label="Bühne mit einer Figur"><div class="scr-figur">${FIGUR}<div class="scr-blase" hidden></div></div></div>
    <div class="scr-eig" hidden></div>
    <div class="scr-vars"></div>
    <form class="scr-frage" hidden><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Deine Antwort"><button type="submit" class="btn small" aria-label="Antwort bestätigen">✓</button></form>
    <div class="scr-leiste"><button type="button" class="btn small scr-start">${FAHNE} Start</button><button type="button" class="btn small ghost scr-stopp" disabled>■ Stopp</button><span class="scr-status hint"></span></div>`;
  const flaeche = $(".scr-flaeche", el), eig = $(".scr-eig", el), figur = $(".scr-figur", el), blase = $(".scr-blase", el), varsEl = $(".scr-vars", el), frageForm = $(".scr-frage", el), frageFeld = $("input", frageForm);
  const startKnopf = $(".scr-start", el), stoppKnopf = $(".scr-stopp", el), status = $(".scr-status", el);
  let lauf = null, nr = 0;
  const z = {x: 0, y: 0, richtung: 90, groesse: 100};
  const dauer = {};   // Variablen behalten ihren Wert bis zum nächsten Start – wie in Scratch
  function stelle() {
    figur.style.left = (50 + z.x / 4.8) + "%"; figur.style.top = (50 - z.y / 3.6) + "%";
    figur.style.transform = `translate(-50%, -50%) scale(${Math.max(0.2, Math.min(3, z.groesse / 100))})`;
    // Eigenschaften der Figur wie unter der Bühne in Scratch
    if (cfg.eigenschaften) { eig.hidden = false; eig.innerHTML = [["x", z.x], ["y", z.y], ["Größe", z.groesse], ["Richtung", z.richtung]].map(e => `<span><b>${e[0]}</b> ${esc(String(e[1]).replace(".", ","))}</span>`).join(""); }
  }
  function zeigeVars(vars) { varsEl.innerHTML = (cfg.variablen || []).map(n => `<span class="scr-var"><b>${esc(n)}</b> ${esc(String(vars[n]))}</span>`).join(""); }
  function sag(text, denke) { if (text === "" || text == null) { blase.hidden = true; return; } blase.hidden = false; blase.className = "scr-blase" + (denke ? " denke" : ""); blase.textContent = String(text); }
  // antworten: vorgegebene Eingaben (für den Prüfer), schnell: ohne Wartezeiten
  async function starte(antworten, schnell) {
    if (lauf) lauf.stopp = true;
    const meiner = lauf = {stopp: false}, id = ++nr, tempo = schnell ? 0 : 1;
    const vars = dauer; (cfg.variablen || []).forEach(n => { if (!(n in vars)) vars[n] = 0; });
    const p = {gesagt: [], fragen: [], antworten: [], vars, fertig: false};
    let antwort = "";
    Object.assign(z, {x: 0, y: 0, richtung: 90, groesse: 100}); stelle(); sag(""); zeigeVars(vars);
    frageForm.hidden = true; startKnopf.disabled = true; stoppKnopf.disabled = false; status.textContent = "läuft …";
    const vorrat = (antworten || []).slice();
    const wert = w => {
      if (!Array.isArray(w)) return w;
      const [t, a, b] = w;
      switch (t) {
        case "antwort": return antwort;
        case "var": return vars[a];
        case "verbinde": return String(wert(a)) + String(wert(b));
        case "+": return rund(alsZahl(wert(a)) + alsZahl(wert(b)));
        case "-": return rund(alsZahl(wert(a)) - alsZahl(wert(b)));
        case "*": return rund(alsZahl(wert(a)) * alsZahl(wert(b)));
        case "/": return rund(alsZahl(wert(a)) / alsZahl(wert(b)));
        case "zufall": { const u = Math.round(alsZahl(wert(a))), o = Math.round(alsZahl(wert(b))); return (cfg.zufall ? cfg.zufall(u, o) : u + Math.floor(Math.random() * (o - u + 1))); }
        case "=": return vergleich(wert(a), wert(b)) === 0;
        case ">": return vergleich(wert(a), wert(b)) > 0;
        case "<": return vergleich(wert(a), wert(b)) < 0;
        default: return "";
      }
    };
    const frag = text => new Promise(fertig => {
      p.fragen.push(String(text)); sag(text);
      const nimm = a => { frageForm.hidden = true; frageForm.onsubmit = null; antwort = String(a); p.antworten.push(antwort); sag(""); fertig(); };
      if (vorrat.length) { const a = vorrat.shift(); return setTimeout(() => nimm(typeof a === "function" ? a(vars) : a), tempo ? 400 : 0); }
      if (schnell) return nimm("");
      frageForm.hidden = false; frageFeld.value = ""; frageFeld.focus({preventScroll: true});
      frageForm.onsubmit = e => { e.preventDefault(); nimm(frageFeld.value); };
      meiner.abbruch = () => nimm("");
    });
    async function fuehre(liste) {
      for (const b of liste || []) {
        if (meiner.stopp) return;
        const [t, a, c, d] = b;
        switch (t) {
          case "flagge": break;
          case "sage": sag(wert(a)); p.gesagt.push(String(wert(a))); break;
          case "denke": sag(wert(a), true); p.gesagt.push(String(wert(a))); break;
          case "sageFuer": { const s = String(wert(a)); sag(s); p.gesagt.push(s); await warte(tempo * Math.min(4, alsZahl(wert(c))) * 800); if (!meiner.stopp) sag(""); break; }
          case "warte": await warte(tempo * Math.min(4, alsZahl(wert(a))) * 800); break;
          case "gehe": { const n = alsZahl(wert(a)), w = (90 - z.richtung) * Math.PI / 180; z.x = rund(z.x + n * Math.cos(w)); z.y = rund(z.y + n * Math.sin(w)); stelle(); await warte(tempo * 350); break; }
          case "geheZu": z.x = alsZahl(wert(a)); z.y = alsZahl(wert(c)); stelle(); await warte(tempo * 350); break;
          case "richtung": z.richtung = alsZahl(wert(a)); break;
          case "groesse": z.groesse = alsZahl(wert(a)); stelle(); await warte(tempo * 250); break;
          case "frage": await frag(wert(a)); break;
          case "setze": vars[a] = wert(c); zeigeVars(vars); break;
          case "aendere": vars[a] = rund(alsZahl(vars[a]) + alsZahl(wert(c))); zeigeVars(vars); break;
          case "falls": if (wert(a)) await fuehre(c); break;
          case "fallsSonst": await fuehre(wert(a) ? c : d); break;
          case "mal": for (let i = 0, n = Math.min(50, alsZahl(wert(a))); i < n && !meiner.stopp; i++) { await fuehre(c); await warte(tempo * 30); } break;
          case "bis": for (let i = 0; i < 60 && !meiner.stopp && !wert(a); i++) { await fuehre(c); await warte(tempo * 30); } break;
        }
      }
    }
    await fuehre(cfg.programm);
    if (id !== nr) return p;                       // inzwischen neu gestartet
    p.fertig = !meiner.stopp; Object.assign(p, {x: z.x, y: z.y, richtung: z.richtung, groesse: z.groesse, vars: Object.assign({}, vars)});
    lauf = null; frageForm.hidden = true; startKnopf.disabled = false; stoppKnopf.disabled = true;
    status.textContent = p.fertig ? "Programm beendet." : "gestoppt";
    if (p.fertig && cfg.ende) cfg.ende(p);
    return p;
  }
  startKnopf.addEventListener("click", () => { starte(); });
  stoppKnopf.addEventListener("click", () => { if (lauf) { lauf.stopp = true; if (lauf.abbruch) lauf.abbruch(); } });
  stelle(); zeigeVars(Object.fromEntries((cfg.variablen || []).map(n => [n, 0])));
  return {starte, el};
}

/* ---------- Versuch: Programm lesen, starten, beobachten ---------- */
// cfg.fertig(lauf, alleLaeufe): true = Versuch geschafft; ein Text = Hinweis, was noch fehlt; sonst nichts
// cfg.loesung: [[Antworten des ersten Laufs], [Antworten des zweiten Laufs] …] für den Einheiten-Prüfer
function makeScratchVersuch(box, cfg, id) {
  register(id, box, cfg.name || "Scratch-Versuch: " + String(cfg.text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90));
  box.classList.add("scr-versuch");
  box.innerHTML = `${cfg.text ? `<p class="scr-text">${cfg.text}</p>` : ""}<div class="scr-zwei"><div class="scr-links"></div><div class="scr-rechts"></div></div><div class="fb"></div>`;
  const fb = $(".fb", box), alle = [];
  scratchBloecke($(".scr-links", box), cfg.programm);
  function ende(p) {
    alle.push(p);
    const r = cfg.fertig ? cfg.fertig(p, alle) : true;
    if (r === true) { fb.className = "fb show ok"; fb.textContent = "✅ " + (cfg.erfolg || "Das Programm ist durchgelaufen."); solve(id); }
    else if (typeof r === "string") { fb.className = "fb show mid"; fb.textContent = "🟡 " + r; }
  }
  const b = scratchBuehne($(".scr-rechts", box), Object.assign({}, cfg, {ende}));
  if (M.isSolved(id)) { fb.className = "fb show ok"; fb.textContent = "✅ Diesen Versuch hast du schon gemacht. Du kannst das Programm trotzdem noch einmal starten."; }
  M.loeser[id] = async () => { if (M.isSolved(id)) return; for (const antworten of (cfg.loesung || [[]])) await b.starte(antworten, true); };
  return b;
}

/* ---------- Blöcke in die richtige Reihenfolge bringen ---------- */
// cfg.bloecke in der richtigen Reihenfolge; cfg.fest: so viele Blöcke am Anfang stehen schon richtig (z. B. der Hut-Block)
function makeBlockReihe(box, cfg, id) {
  register(id, box, cfg.name || "Blöcke ordnen: " + String(cfg.text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90));
  const fest = cfg.fest || 0, n = cfg.bloecke.length;
  // feste Mischung (nicht zufällig): hintere Hälfte nach vorn, dann jeder zweite getauscht – nie die richtige Reihenfolge
  let reihe = cfg.start ? cfg.start.slice() : (() => { const r = []; for (let i = fest; i < n; i++) r.push(i); const h = Math.ceil(r.length / 2); const m = r.slice(h).concat(r.slice(0, h)); for (let i = 0; i + 1 < m.length; i += 2) [m[i], m[i + 1]] = [m[i + 1], m[i]]; return m.every((v, i) => v === fest + i) ? m.reverse() : m; })();
  box.classList.add("scr-reihe");
  box.innerHTML = `${cfg.text ? `<p class="scr-text">${cfg.text}</p>` : ""}<div class="scr-programm scr-ordnen"></div><div class="row-btns"><button type="button" class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  const platz = $(".scr-ordnen", box), fb = $(".fb", box);
  function zeichne() {
    platz.innerHTML = `<div class="scr-stapel">${cfg.bloecke.slice(0, fest).map(blockHtml).join("")}${reihe.map((i, k) => `<div class="scr-zeile" data-k="${k}"><div class="scr-pfeile"><button type="button" class="hoch" aria-label="Block nach oben" ${k === 0 ? "disabled" : ""}>▲</button><button type="button" class="runter" aria-label="Block nach unten" ${k === reihe.length - 1 ? "disabled" : ""}>▼</button></div>${blockHtml(cfg.bloecke[i])}</div>`).join("")}</div>`;
  }
  platz.addEventListener("click", e => {
    const knopf = e.target.closest("button"); if (!knopf) return;
    const k = +knopf.closest(".scr-zeile").dataset.k, j = knopf.classList.contains("hoch") ? k - 1 : k + 1;
    if (j < 0 || j >= reihe.length) return;
    [reihe[k], reihe[j]] = [reihe[j], reihe[k]]; zeichne(); fb.className = "fb";
  });
  // gleiche Blöcke dürfen ihre Plätze tauschen: verglichen wird der Inhalt, nicht die Nummer
  const gleich = (i, j) => JSON.stringify(cfg.bloecke[i]) === JSON.stringify(cfg.bloecke[j]);
  function pruefen() {
    const ok = reihe.every((i, k) => gleich(i, fest + k));
    fb.className = "fb show " + (ok ? "ok" : "bad");
    fb.textContent = ok ? "✅ " + (cfg.erfolg || "Die Reihenfolge stimmt.") : "❌ Noch nicht. " + (cfg.tipp || "Lies das Programm von oben nach unten: Was muss zuerst passieren?");
    if (ok) solve(id);
  }
  $(".check", box).addEventListener("click", pruefen);
  zeichne();
  if (M.isSolved(id)) { reihe = reihe.map((_, k) => fest + k); zeichne(); fb.className = "fb show ok"; fb.textContent = "✅ Diese Aufgabe hast du schon gelöst."; }
  M.loeser[id] = async () => { if (M.isSolved(id)) return; reihe = reihe.map((_, k) => fest + k); zeichne(); pruefen(); };
}

Object.assign(M, {scratchBloecke, scratchBuehne, makeScratchVersuch, makeBlockReihe});
})();
