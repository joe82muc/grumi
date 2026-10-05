/* Kleine Tabelle auf der Seite – wie ein Ausschnitt aus Excel: Spaltenbuchstaben, Zeilennummern, Namenfeld,
 * Bearbeitungsleiste, Ausfüllkästchen. Für Versuche, Animationen und Aufgaben am Tablet (Informatik 8, Module 3 und 4).
 * Einbinden nach modul-basis.js, praxis.js und info8.js.
 *
 *   const t = Modul.tabelle(el, {
 *     spalten: 4, zeilen: 6,
 *     zellen: { A1: "Artikel", B2: "0,9", D2: "=B2*C2" },      Inhalte, wie man sie eintippt (deutsche Schreibweise)
 *     eingabe: ["D2", "D3"] | true,                             diese Zellen darf das Kind ändern (true = alle, Standard: keine)
 *     format: { D: "euro", "B1": "prozent" },                   Anzeige je Spalte oder Zelle: euro | prozent | standard
 *     breit: { A: 120 },                                        Spaltenbreite in px
 *     griff: true,                                              Ausfüllkästchen zum Ziehen
 *     aendern(adresse, t) {…}, waehlen(adresse, t) {…}, fuellen(von, bis, t) {…}
 *   });
 *   t.roh("D2") -> "=B2*C2"      t.wert("D2") -> 36 | "Text" | "#WERT!"      t.text("D2") -> "36"
 *   t.formel("D2") -> "=B2*C2" (groß, ohne Leerzeichen; "" wenn keine Formel)   t.bezuege("D2") -> ["B2", "C2"]
 *   t.setze("D2", "=B2*C2")   t.waehle("D2")   t.fuelle("D2", "D5")   t.markiere(["B2"], "bz1")   t.formelnZeigen(true)
 *   t.formatiere(["C2", "C3"], "prozent")   t.formatVon("C2") -> "prozent"   (loesung: { format: { prozent: ["C2"] } })
 *
 * Rechnet wie das deutsche Excel (geprüft in Microsoft 365): + − * /, Klammern, Punkt vor Strich, Dezimalkomma,
 * Prozent (19%), Zellbezüge mit und ohne $, SUMME / MITTELWERT / MIN / MAX mit Bereichen; Fehlerwerte #DIV/0!,
 * #WERT!, #NAME?, #BEZUG!; „3.5“ wird wie in Excel zu einem Datum. Beim Ausfüllen passen sich Bezüge ohne $ an.
 *
 *   Modul.makeTabellenAufgabe(el, { text, tabelle: {…}, pruefe: t => [{ok, text}], loesung: { setze: {D2: "=B2*C2"}, fuelle: [["D2", "D5"]] }, erfolg }, "id")
 *   Aufgabe mit Tabelle und Knopf „Prüfen“; gelöst, wenn alle Prüfpunkte stimmen.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve} = M;
M.loeser = M.loeser || {};

const BUCHST = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MONAT = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
const FEHLER = v => typeof v === "string" && v.charAt(0) === "#";
// "B$2" -> { s: 1, z: 1, fs: false, fz: true } (Spalte und Zeile ab 0; fs/fz = mit Dollar festgehalten)
function adr(a) {
  const m = /^(\$?)([A-Z])(\$?)(\d+)$/.exec(String(a).toUpperCase().replace(/\s/g, ""));
  return m ? {s: BUCHST.indexOf(m[2]), z: +m[4] - 1, fs: !!m[1], fz: !!m[3]} : null;
}
const name = (s, z) => BUCHST[s] + (z + 1);
const zahlText = n => { const r = Math.round(n * 1e9) / 1e9; return String(r).replace(".", ","); };

/* ---------- Formel zerlegen ---------- */
function zeichen(f) {
  const out = []; let i = 0; const s = f;
  while (i < s.length) {
    const c = s[i];
    if (c === " ") { i++; continue; }
    if ("+-*/();:".includes(c)) { out.push({a: c}); i++; continue; }
    if (c === '"') { const j = s.indexOf('"', i + 1); if (j < 0) return null; out.push({a: "text", w: s.slice(i + 1, j)}); i = j + 1; continue; }
    let m = /^\d+(,\d+)?%?/.exec(s.slice(i));
    if (m) { let v = parseFloat(m[0].replace(",", ".")); if (m[0].endsWith("%")) v /= 100; out.push({a: "zahl", w: v}); i += m[0].length; continue; }
    m = /^\$?[A-Za-z]\$?\d+/.exec(s.slice(i));
    if (m) { out.push({a: "bezug", w: m[0].toUpperCase()}); i += m[0].length; continue; }
    m = /^[A-Za-zÄÖÜäöü]+/.exec(s.slice(i));
    if (m) { out.push({a: "name", w: m[0].toUpperCase()}); i += m[0].length; continue; }
    return null;
  }
  return out;
}

function tabelle(el, cfg) {
  const S = cfg.spalten || 4, Z = cfg.zeilen || 6;
  const roh = {}, format = Object.assign({}, cfg.format || {});
  Object.keys(cfg.zellen || {}).forEach(k => { roh[k.toUpperCase()] = String(cfg.zellen[k]); });
  const darf = a => cfg.eingabe === true || (Array.isArray(cfg.eingabe) && cfg.eingabe.includes(a));
  let wahl = "", formelnAn = false;

  /* ---------- rechnen ---------- */
  // Inhalt einer Zelle als Wert: Zahl, Text, "" (leer) oder Fehlerwert; { datum: true } merkt sich die Datumsanzeige
  function eingabeWert(r) {
    const s = String(r == null ? "" : r).trim();
    if (s === "") return {v: ""};
    let m = /^(\d{1,2})\.(\d{1,2})\.?$/.exec(s);      // „3.5“ -> 03. Mai (wie Excel bei Punkt statt Komma)
    if (m && +m[2] >= 1 && +m[2] <= 12 && +m[1] >= 1 && +m[1] <= 31) {
      const jahr = new Date().getFullYear();
      return {v: Math.round(Date.UTC(jahr, +m[2] - 1, +m[1]) / 864e5) + 25569, anzeige: String(m[1]).padStart(2, "0") + ". " + MONAT[+m[2] - 1], datum: true};
    }
    m = /^(\d{1,2})\.(\d{2})$/.exec(s);                // „3.50“ -> Mrz 50 (Monat und Jahr, wie Excel)
    if (m && +m[1] >= 1 && +m[1] <= 12) {
      const jahr = (+m[2] < 30 ? 2000 : 1900) + +m[2];
      return {v: Math.round(Date.UTC(jahr, +m[1] - 1, 1) / 864e5) + 25569, anzeige: MONAT[+m[1] - 1] + " " + m[2], datum: true};
    }
    m = /^-?\d{1,3}(\.\d{3})+(,\d+)?$/.exec(s);          // 1.000 -> 1000
    if (m) return {v: parseFloat(s.replace(/\./g, "").replace(",", "."))};
    m = /^(-?\d+(?:,\d+)?)\s*(%|€)?$/.exec(s);
    if (m) { const n = parseFloat(m[1].replace(",", ".")); return m[2] === "%" ? {v: n / 100, art: "prozent"} : m[2] === "€" ? {v: n, art: "euro"} : {v: n}; }
    return {v: s};
  }
  function wert(a, weg) {
    a = a.toUpperCase(); const r = roh[a];
    if (r == null || r === "") return "";
    if (r.charAt(0) !== "=") return eingabeWert(r).v;
    weg = weg || [];
    if (weg.includes(a)) return 0;                      // Zirkelbezug: Excel warnt und zeigt 0
    return rechne(r.slice(1), weg.concat(a));
  }
  function bereich(von, bis) {
    const p = adr(von), q = adr(bis), out = [];
    if (!p || !q) return null;
    for (let z = Math.min(p.z, q.z); z <= Math.max(p.z, q.z); z++) for (let s = Math.min(p.s, q.s); s <= Math.max(p.s, q.s); s++) out.push(name(s, z));
    return out;
  }
  function rechne(f, weg) {
    const T = zeichen(f); if (!T || !T.length) return "#SYNTAX";
    let i = 0;
    const zahl = v => { if (FEHLER(v)) return v; if (v === "") return 0; if (typeof v === "number") return v; const n = eingabeWert(v).v; return typeof n === "number" ? n : "#WERT!"; };
    function bezugWert(t) { const p = adr(t.w); if (!p || p.s < 0 || p.s >= 26) return "#BEZUG!"; return wert(name(p.s, p.z), weg); }
    function faktor() {
      const t = T[i++]; if (!t) return "#SYNTAX";
      if (t.a === "zahl") return t.w;
      if (t.a === "text") return t.w;
      if (t.a === "bezug") return bezugWert(t);
      if (t.a === "-") { const v = zahl(faktor()); return FEHLER(v) ? v : -v; }
      if (t.a === "+") return zahl(faktor());
      if (t.a === "(") { const v = ausdruck(); if (!T[i] || T[i].a !== ")") return "#SYNTAX"; i++; return v; }
      if (t.a === "name") {
        if (!T[i] || T[i].a !== "(") return "#NAME?";
        i++; const werte = [];
        while (T[i] && T[i].a !== ")") {
          if (T[i].a === "bezug" && T[i + 1] && T[i + 1].a === ":" && T[i + 2] && T[i + 2].a === "bezug") {
            const b = bereich(T[i].w, T[i + 2].w); if (!b) return "#BEZUG!";
            b.forEach(z => { const v = wert(z, weg); if (FEHLER(v)) werte.push(v); else if (typeof v === "number") werte.push(v); });
            i += 3;
          } else { const v = ausdruck(); werte.push(FEHLER(v) ? v : zahl(v)); }
          if (T[i] && T[i].a === ";") i++;
        }
        if (!T[i]) return "#SYNTAX"; i++;
        const f1 = werte.find(FEHLER); if (f1) return f1;
        if (t.w === "SUMME") return werte.reduce((s, v) => s + v, 0);
        if (t.w === "MITTELWERT") return werte.length ? werte.reduce((s, v) => s + v, 0) / werte.length : "#DIV/0!";
        if (t.w === "MIN") return werte.length ? Math.min(...werte) : 0;
        if (t.w === "MAX") return werte.length ? Math.max(...werte) : 0;
        return "#NAME?";
      }
      return "#SYNTAX";
    }
    function produkt() {
      let v = faktor();
      while (T[i] && (T[i].a === "*" || T[i].a === "/")) {
        const op = T[i++].a, a = zahl(v), b = zahl(faktor());
        if (FEHLER(a)) return a; if (FEHLER(b)) return b;
        if (op === "/" && b === 0) return "#DIV/0!";
        v = op === "*" ? a * b : a / b;
      }
      return v;
    }
    function ausdruck() {
      let v = produkt();
      while (T[i] && (T[i].a === "+" || T[i].a === "-")) {
        const op = T[i++].a, a = zahl(v), b = zahl(produkt());
        if (FEHLER(a)) return a; if (FEHLER(b)) return b;
        v = op === "+" ? a + b : a - b;
      }
      return v;
    }
    const v = ausdruck();
    if (i < T.length) return "#SYNTAX";
    return v === "" ? 0 : v;
  }
  const istFormel = a => String(roh[a.toUpperCase()] || "").charAt(0) === "=";
  const formel = a => istFormel(a) ? roh[a.toUpperCase()].replace(/\s/g, "").toUpperCase() : "";
  const bezuege = a => (formel(a).match(/\$?[A-Z]\$?\d+/g) || []);
  function fmt(a) { return format[a] || format[a.charAt(0)] || ""; }
  function text(a) {
    a = a.toUpperCase(); const r = roh[a];
    if (r == null || r === "") return "";
    if (formelnAn && istFormel(a)) return r;
    const v = wert(a);
    if (FEHLER(v)) return v === "#SYNTAX" ? "#NAME?" : v;
    if (typeof v !== "number") return String(v);
    const e = istFormel(a) ? {} : eingabeWert(r), f = fmt(a) || e.art || "";
    if (e.datum) return e.anzeige;
    if (f === "euro") return v.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
    if (f === "prozent") return Math.round(v * 100) + "%";     // wie das Prozentformat in Excel: auf ganze Prozent gerundet
    return zahlText(v);
  }

  /* ---------- Formel beim Kopieren anpassen ---------- */
  function verschiebe(f, ds, dz) {
    return f.replace(/(\$?)([A-Za-z])(\$?)(\d+)/g, (_m, fs, sp, fz, ze) => {
      const s = BUCHST.indexOf(sp.toUpperCase()) + (fs ? 0 : ds), z = +ze + (fz ? 0 : dz);
      return s < 0 || s > 25 || z < 1 ? "#BEZUG!" : fs + BUCHST[s] + fz + z;
    });
  }

  /* ---------- Oberfläche ---------- */
  el.classList.add("tab8");
  el.innerHTML = `<div class="tab8-leiste"><span class="tab8-name" title="Namenfeld">&nbsp;</span><span class="tab8-fx" aria-hidden="true">fx</span>
      <input class="tab8-eingabe" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Bearbeitungsleiste" disabled>
      <button type="button" class="tab8-ok" aria-label="Eingabe bestätigen" disabled>✓</button></div>
    <div class="tab8-rahmen"><table><thead><tr><th class="ecke"></th>${Array.from({length: S}, (_, s) => `<th data-s="${s}"${cfg.breit && cfg.breit[BUCHST[s]] ? ` style="min-width:${cfg.breit[BUCHST[s]]}px"` : ""}>${BUCHST[s]}</th>`).join("")}</tr></thead>
    <tbody>${Array.from({length: Z}, (_, z) => `<tr><th data-zn="${z}">${z + 1}</th>${Array.from({length: S}, (_, s) => `<td data-z="${name(s, z)}" tabindex="-1"></td>`).join("")}</tr>`).join("")}</tbody></table></div>
    <div class="tab8-hinweis" aria-live="polite"></div>`;
  const feld = $(".tab8-eingabe", el), okKnopf = $(".tab8-ok", el), nameFeld = $(".tab8-name", el), hinweis = $(".tab8-hinweis", el);
  const td = a => $(`td[data-z="${a}"]`, el);
  const api = {};
  function zeichne() {
    $$("td", el).forEach(c => {
      const a = c.dataset.z, t = text(a), v = wert(a), griff = c.querySelector(".tab8-griff");
      c.textContent = t;
      c.classList.toggle("zahl", typeof v === "number" && !(formelnAn && istFormel(a)));
      c.classList.toggle("fehler", FEHLER(v));
      c.classList.toggle("offen", darf(a));
      if (griff) c.appendChild(griff);
    });
  }
  function waehle(a, still) {
    a = String(a || "").toUpperCase(); if (!td(a)) return;
    wahl = a;
    $$("td.tab8-aktiv, th.tab8-aktiv", el).forEach(x => x.classList.remove("tab8-aktiv"));
    $$("td.bz1, td.bz2, td.bz3", el).forEach(x => x.classList.remove("bz1", "bz2", "bz3"));
    $$(".tab8-griff", el).forEach(g => g.remove());
    const c = td(a), p = adr(a);
    c.classList.add("tab8-aktiv"); $(`th[data-s="${p.s}"]`, el).classList.add("tab8-aktiv"); $(`th[data-zn="${p.z}"]`, el).classList.add("tab8-aktiv");
    nameFeld.textContent = a; feld.value = roh[a] || ""; feld.disabled = okKnopf.disabled = !darf(a);
    hinweis.textContent = "";
    // Bezüge der Formel farbig zeigen (wie in Excel beim Bearbeiten)
    [...new Set(bezuege(a).map(b => b.replace(/\$/g, "")))].slice(0, 3).forEach((b, i) => { const z = td(b); if (z) z.classList.add("bz" + (i + 1)); });
    if (cfg.griff && darf(a)) { const g = document.createElement("span"); g.className = "tab8-griff"; g.title = "Ausfüllkästchen: ziehen, um zu kopieren"; c.appendChild(g); ziehbar(g); }
    if (!still && cfg.waehlen) cfg.waehlen(a, api);
  }
  function setze(a, inhalt, still) {
    a = a.toUpperCase(); inhalt = String(inhalt == null ? "" : inhalt).trim();
    if (inhalt.charAt(0) === "=" && rechne(inhalt.slice(1), [a]) === "#SYNTAX") { hinweis.textContent = "⚠️ Diese Formel versteht Excel nicht. Prüfe Klammern und Rechenzeichen."; return false; }
    // wie Excel: Bezüge und Funktionsnamen werden groß geschrieben (Texte in Anführungszeichen bleiben)
    if (inhalt === "") delete roh[a]; else roh[a] = inhalt.charAt(0) === "=" ? inhalt.replace(/"[^"]*"|[^"]+/g, x => x.charAt(0) === '"' ? x : x.toUpperCase()) : inhalt;
    zeichne(); if (wahl) waehle(wahl, true);
    if (!still && cfg.aendern) cfg.aendern(a, api);
    return true;
  }
  function fuelle(von, bis, still) {
    const p = adr(von), q = adr(bis); if (!p || !q) return;
    const quelle = roh[name(p.s, p.z)] || "";
    for (let z = Math.min(p.z, q.z); z <= Math.max(p.z, q.z); z++) for (let s = Math.min(p.s, q.s); s <= Math.max(p.s, q.s); s++) {
      const ziel = name(s, z); if (ziel === name(p.s, p.z) || !td(ziel)) continue;
      if (quelle === "") delete roh[ziel]; else roh[ziel] = quelle.charAt(0) === "=" ? verschiebe(quelle, s - p.s, z - p.z) : quelle;
      if (format[name(p.s, p.z)]) format[ziel] = format[name(p.s, p.z)];
    }
    zeichne(); waehle(name(p.s, p.z), true);
    if (!still && cfg.fuellen) cfg.fuellen(name(p.s, p.z), name(q.s, q.z), api);
    if (!still && cfg.aendern) cfg.aendern(name(q.s, q.z), api);
  }
  // Ausfüllkästchen ziehen: nach unten oder nach rechts (nur in freigegebene Zellen)
  function ziehbar(g) {
    g.addEventListener("pointerdown", e => {
      e.preventDefault(); e.stopPropagation();
      const start = wahl, p = adr(start); let ziel = start;
      const bewegen = ev => {
        const z = document.elementFromPoint(ev.clientX, ev.clientY), c = z && z.closest ? z.closest("td[data-z]") : null;
        if (!c || !el.contains(c)) return;
        const q = adr(c.dataset.z), senkrecht = Math.abs(q.z - p.z) >= Math.abs(q.s - p.s);
        ziel = senkrecht ? name(p.s, q.z) : name(q.s, p.z);
        $$("td.zieh", el).forEach(x => x.classList.remove("zieh"));
        (bereich(start, ziel) || []).forEach(a => { const x = td(a); if (x) x.classList.add("zieh"); });
      };
      const ende = () => {
        document.removeEventListener("pointermove", bewegen); document.removeEventListener("pointerup", ende); document.removeEventListener("pointercancel", ende);
        $$("td.zieh", el).forEach(x => x.classList.remove("zieh"));
        if (ziel !== start) {
          const frei = (bereich(start, ziel) || []).every(a => a === start || darf(a));
          if (frei) fuelle(start, ziel); else hinweis.textContent = "Dorthin kannst du hier nicht ausfüllen – diese Zellen sind gesperrt.";
        }
      };
      document.addEventListener("pointermove", bewegen); document.addEventListener("pointerup", ende); document.addEventListener("pointercancel", ende);
    });
  }
  $("tbody", el).addEventListener("click", e => { const c = e.target.closest("td[data-z]"); if (!c || e.target.classList.contains("tab8-griff")) return; waehle(c.dataset.z); if (darf(c.dataset.z)) feld.focus({preventScroll: true}); });
  const bestaetige = () => { if (!wahl || !darf(wahl)) return; if (setze(wahl, feld.value)) { const p = adr(wahl), unten = name(p.s, p.z + 1); if (td(unten) && darf(unten)) waehle(unten); } };
  feld.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); bestaetige(); } if (e.key === "Escape") { feld.value = roh[wahl] || ""; } });
  okKnopf.addEventListener("click", bestaetige);

  Object.assign(api, {
    el, roh: a => roh[a.toUpperCase()] || "", wert: a => { const v = wert(a); return v === "#SYNTAX" ? "#NAME?" : v; }, text, formel, bezuege, istFormel,
    setze, waehle, fuelle, verschiebe, gewaehlt: () => wahl,
    markiere(liste, klasse) { $$("td." + klasse, el).forEach(x => x.classList.remove(klasse)); (liste || []).forEach(a => { const c = td(a.toUpperCase()); if (c) c.classList.add(klasse); }); },
    formelnZeigen(an) { formelnAn = !!an; zeichne(); if (wahl) waehle(wahl, true); },
    hinweis(tx) { hinweis.textContent = tx || ""; },
    // Anzeige ändern wie mit den Schaltflächen in Excel: formatiere(["C2", "C3"], "prozent" | "euro" | "")
    formatiere(liste, art) { (liste || []).forEach(a => { if (art) format[a.toUpperCase()] = art; else delete format[a.toUpperCase()]; }); zeichne(); if (wahl) waehle(wahl, true); },
    formatVon: a => fmt(a.toUpperCase())
  });
  zeichne();
  if (cfg.start) waehle(cfg.start, true);
  return api;
}

/* ---------- Aufgabe mit Tabelle ---------- */
// cfg: { text: "HTML", tabelle: {…}, pruefe: t => [{ ok, text }], loesung: { setze: {D2: "=B2*C2"}, fuelle: [["D2", "D5"]] },
//        erfolg: "Text bei Erfolg", name: "Bezeichnung für die Lehrkraft", zusatz: t => {…} (nach dem Aufbau) }
function makeTabellenAufgabe(box, cfg, id) {
  register(id, box, cfg.name || "Tabelle: " + String(cfg.text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90));
  box.classList.add("tab8-aufgabe");
  box.innerHTML = `${cfg.text ? `<p class="tab8-text">${cfg.text}</p>` : ""}<div class="tab8-platz"></div>
    <div class="row-btns"><button type="button" class="btn small check">Prüfen</button><button type="button" class="btn small ghost neu">↺ Zurücksetzen</button></div>
    <ul class="pruef-liste"></ul><div class="fb"></div>`;
  const platz = $(".tab8-platz", box), liste = $(".pruef-liste", box), fb = $(".fb", box);
  let t = tabelle(platz, cfg.tabelle);
  if (cfg.zusatz) cfg.zusatz(t);
  function pruefen() {
    const punkte = cfg.pruefe(t) || [], ok = punkte.length > 0 && punkte.every(p => p.ok);
    liste.innerHTML = punkte.map(p => `<li class="${p.ok ? "ok" : "bad"}">${p.ok ? "✓" : "✗"} ${esc(p.text)}</li>`).join("");
    fb.className = "fb show " + (ok ? "ok" : "bad");
    fb.textContent = ok ? "✅ " + (cfg.erfolg || "Alles richtig!") : "❌ Noch nicht ganz. Verbessere die Punkte mit ✗ und prüfe noch einmal.";
    if (ok) solve(id);
  }
  $(".check", box).addEventListener("click", pruefen);
  $(".neu", box).addEventListener("click", () => { platz.innerHTML = ""; platz.className = "tab8-platz"; t = tabelle(platz, cfg.tabelle); if (cfg.zusatz) cfg.zusatz(t); liste.innerHTML = ""; fb.className = "fb"; });
  if (M.isSolved(id)) { fb.className = "fb show ok"; fb.textContent = "✅ Diese Aufgabe hast du schon gelöst."; }
  M.loeser[id] = async () => {
    if (M.isSolved(id)) return;
    const L = cfg.loesung || {};
    Object.keys(L.setze || {}).forEach(a => t.setze(a, L.setze[a]));
    (L.fuelle || []).forEach(p => t.fuelle(p[0], p[1]));
    Object.keys(L.format || {}).forEach(art => t.formatiere(L.format[art], art));
    pruefen();
  };
  return { tabelle: () => t, pruefen };
}

// Vergleich einer Formel mit erlaubten Fassungen: Groß-/Kleinschreibung und Leerzeichen sind egal
const formelGleich = (f, erlaubt) => { const n = s => String(s || "").replace(/\s/g, "").toUpperCase(); return (erlaubt || []).some(e => n(e) === n(f)); };

Object.assign(M, {tabelle, makeTabellenAufgabe, formelGleich});
})();
