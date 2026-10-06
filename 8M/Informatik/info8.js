/* Bausteine für Informatik 8 – ergänzen ../../7M/NT/modul-basis.js (window.Modul) und ../../7M/Informatik/praxis.js.
 * Einbinden nach themen.js, modul-basis.js und praxis.js.
 *
 *   Modul.makeEingabe(el, cfg, id)   Eingabe-Frage: Das Kind trägt einen Wert ein, den es selbst herausgefunden hat
 *                                    (aus einer Simulation der Seite, aus Excel, aus Scratch).
 *   Modul.warte(ms)                  kleine Pause (für Abläufe in den Simulationen)
 *
 * Modul.loeser[id] löst einen Baustein über die Oberfläche (nur für den Einheiten-Prüfer).
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, esc, register, solve, load, save} = M;
M.loeser = M.loeser || {};
const warte = ms => new Promise(r => setTimeout(r, ms));

// Vergleich von Wörtern, Uhrzeiten und Formeln: Groß-/Kleinschreibung, Leerzeichen, „Uhr“ und Satzzeichen am Ende sind egal
const glatt = v => String(v == null ? "" : v).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
  .replace(/\buhr\b/g, "").replace(/\s+/g, "").replace(/[.!?;,]+$/g, "");
const zahl = v => parseFloat(String(v).replace(/\s/g, "").replace(/[€%]/g, "").replace(",", "."));

/* ---------- Eingabe-Frage ---------- */
// cfg: { frage, antworten: ["7:41", "07:41"] | wert: 12.5 (dazu tol: 0.01, einheit: "€"), tipp, erfolg, platz: "z. B. 7:05",
//        name: "Bezeichnung für die Lehrkraft" }
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
    // Formel ohne Gleichheitszeichen: fast richtig – aber für Excel wäre das nur ein Text
    const ohneGleich = !ok && !istZahl && (cfg.antworten || []).some(a => a.charAt(0) === "=" && glatt(a) === glatt("=" + feld.value.trim()));
    fb.textContent = ok ? "✅ Richtig!" + (cfg.erfolg ? " " + cfg.erfolg : "") : ohneGleich ? "❌ Fast! Am Anfang fehlt das Gleichheitszeichen. Ohne = ist es für Excel nur ein Text." : "❌ Das passt noch nicht. " + (cfg.tipp || "Sieh noch einmal genau nach.");
    if (ok) { save("-wert-" + id, feld.value); solve(id); }
  }
  $(".check", wrap).addEventListener("click", pruefen);
  feld.addEventListener("keydown", e => { if (e.key === "Enter") pruefen(); });
  if (M.isSolved(id)) { feld.value = load("-wert-" + id, ""); fb.className = "fb show ok"; fb.textContent = "✅ Das hast du schon richtig gelöst."; }
  M.loeser[id] = async () => { if (M.isSolved(id)) return; feld.value = istZahl ? String(cfg.wert).replace(".", ",") : cfg.antworten[0]; pruefen(); };
}

/* ---------- Navigation zum eigenen Zug ---------- */
// Jede Einheit nennt im Kopf und am Ende beide Übersichten (8M und 8R). Ist der Zug des Kindes bekannt (Anmeldung
// oder Link der Übersicht), bleibt nur die eigene – und die Marke im Kopf führt dorthin statt immer zu 8M.
(function () {
  let z = "";
  try { z = window.INF8 && window.INF8.zug ? window.INF8.zug(M.anmeldung ? M.anmeldung() : null) : ""; } catch (_e) {}
  if (!z) return;
  const eigene = z === "R" ? "../../8R/Informatik/index.html" : "index.html", andere = z === "R" ? "index.html" : "../../8R/Informatik/index.html";
  document.querySelectorAll('.navlinks a[href="' + andere + '"]').forEach(a => a.remove());
  document.querySelectorAll('a.brand[href="index.html"]').forEach(a => a.setAttribute("href", eigene));
})();

Object.assign(M, {makeEingabe, warte, glatt});
})();
