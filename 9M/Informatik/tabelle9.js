/* GRUMI-EXCEL (Informatik 9): kleine Tabellenkalkulation auf der Seite, Weiterentwicklung von 8M/Informatik/tabelle.js.
 * Gleiche Schnittstelle (Modul.tabelle, Modul.makeTabellenAufgabe, Modul.formelGleich, Modul.loeser[id]), dazu Funktionen,
 * Vergleiche, WENN, Text-Ergebnisse und Diagramme. Einbinden nach modul-basis.js und diagramm9.js; Stile: tabelle9.css
 * (und ../../8M/Informatik/einheit8.css für die .tab8-Klassen).
 *
 *   const t = Modul.tabelle(el, {
 *     spalten: 5 (A–E, höchstens 26), zeilen: 8, erweiterbar: true (Knopf „＋ Zeile“),
 *     zellen: { A1: "Artikel", B2: "0,9", D2: "=B2*C2" },       Inhalte, wie man sie eintippt (deutsche Schreibweise)
 *     eingabe: ["D2", "D3"] | true,                              diese Zellen darf das Kind ändern (Standard: keine)
 *     format: { D: "euro", "B1": "prozent" }, breit: { A: 120 }, griff: true, start: "D2",
 *     aendern(adresse, t) {…}, waehlen(adresse, t) {…}, fuellen(von, bis, t) {…}
 *   });
 *   t.roh("D2") "=B2*C2" · t.wert("D2") Zahl | Text | true/false | "#WERT!" · t.text("D2") Anzeige · t.formel("D2") · t.bezuege("D2")
 *   t.setze("D2", "=B2*C2") (false bei Formelfehler) · t.waehle("D2") · t.fuelle("D2", "D5") · t.markiere(["B2"], "bz1") ·
 *   t.formelnZeigen(true) · t.formatiere(["C2"], "prozent") · t.formatVon("C2") · t.zeileDazu() · t.zeilen() · t.spalten()
 *   t.bereich() -> "A1:B5" (markierter Bereich) · t.bereichSetze("A1:B5") · t.bereichZeilen("A1:B5") -> [[Wert, …], …]
 *
 * Funktionen (Groß/Klein egal, Trenner „;“): SUMME MITTELWERT MIN MAX MEDIAN PRODUKT QUOTIENT RUNDEN AUFRUNDEN ABRUNDEN
 * GANZZAHL WURZEL POTENZ ABS ANZAHL ANZAHL2 WENN UND ODER NICHT, dazu WAHR/FALSCH. Rechenzeichen + − * / ^ % & = <> < > <= >=.
 * Fehlerwerte wie Excel: #NAME? #DIV/0! #WERT! #ZAHL! #BEZUG!. Es gibt kein eval und kein Function: Eingaben werden in
 * Zeichen zerlegt, zu einem Baum geordnet und von Hand berechnet.
 *
 *   Modul.makeTabellenAufgabe(el, { text, tabelle: {…}, pruefe: t => [{ok, text}], loesung: { setze: {D2: "=B2*C2"}, fuelle: [["D2", "D5"]], format: {prozent: ["C2"]} }, erfolg, name }, "id")
 *   Modul.makeDiagrammAufgabe(el, { text, tabelle: {…}, typen: ["saeule", …], pruefe: z => [{ok, text}], loesung: { bereich: "A1:B5", typ: "saeule", titel: "…", setze: {…} }, erfolg, name }, "id")
 *      z = { typ, bereich, titel, kategorien, reihen: [{name, werte}], t, hatKopf, zeilen, spalten }
 *   Modul.bereichGleich("a1:b5", "B5:A1") -> true        Modul.formelGleich(t.formel("C2"), ["=A2+B2", "=B2+A2"])
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve} = M;
M.loeser = M.loeser || {};

const BUCHST = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MONAT = ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
const FEHLERNAMEN = /^#(NAME\?|DIV\/0!|WERT!|ZAHL!|BEZUG!)$/;
const FEHLER = v => typeof v === "string" && FEHLERNAMEN.test(v);
// "B$2" -> { s: 1, z: 1, fs: false, fz: true } (Spalte und Zeile ab 0; fs/fz = mit Dollar festgehalten)
function adr(a) {
  const m = /^(\$?)([A-Z])(\$?)(\d+)$/.exec(String(a).toUpperCase().replace(/\s/g, ""));
  return m ? {s: BUCHST.indexOf(m[2]), z: +m[4] - 1, fs: !!m[1], fz: !!m[3]} : null;
}
const name = (s, z) => BUCHST[s] + (z + 1);

/* ---------- Zahlen und Texte ---------- */
class Fehl { constructor(c) { this.c = c; } }
const F = c => new Fehl(c);
const glaette = x => { if (!isFinite(x)) throw F("#ZAHL!"); return Number(x.toPrecision(15)); };
// Anzeige: deutsches Komma, höchstens 9 Nachkommastellen, keine Rundungsreste (0,1+0,2 = 0,3)
function zahlText(n) {
  let s = Number(n).toPrecision(15);
  if (/e/i.test(s)) return Number(Number(n).toPrecision(6)).toExponential().replace("e", "E").replace(".", ",").replace("E+", "E");
  if (/\.\d{10,}$/.test(s)) s = Number(s).toFixed(9);
  if (s.indexOf(".") >= 0) s = s.replace(/0+$/, "").replace(/\.$/, "");
  return (s === "-0" ? "0" : s).replace(".", ",");
}
// Runden mit dem Dezimalstring (1,005 -> 1,01 wie in Excel); art: "r" kaufmännisch, "auf", "ab"
function runde(x, stellen, art) {
  stellen = Math.trunc(stellen);
  if (stellen > 15) return x;
  if (stellen < -15) return 0;
  const sch = (w, e) => /e/i.test(String(w)) ? w * Math.pow(10, e) : Number(w + "e" + e);
  const v = Math.abs(x), t = sch(v, stellen), g = art === "auf" ? Math.ceil(t) : art === "ab" ? Math.floor(t) : Math.round(t);
  const r = sch(g, -stellen);
  return (x < 0 ? -r : r) || 0;
}

/* ---------- Eingabe zerlegen (kein eval!) ---------- */
function zeichen(f) {
  const out = []; let i = 0; const s = f;
  if (s.length > 1000) return null;
  while (i < s.length) {
    const c = s[i];
    if (c === " " || c === "\t") { i++; continue; }
    if (c === '"') {
      let j = i + 1, w = "";
      for (;;) {
        if (j >= s.length) return null;
        if (s[j] === '"') { if (s[j + 1] === '"') { w += '"'; j += 2; continue; } break; }
        w += s[j++];
      }
      out.push({a: "text", w}); i = j + 1; continue;
    }
    const zwei = s.substr(i, 2);
    if (zwei === "<=" || zwei === ">=" || zwei === "<>") { out.push({a: zwei}); i += 2; continue; }
    if ("+-*/^&=<>();:%".includes(c)) { out.push({a: c}); i++; continue; }
    let m = /^\d+(,\d+)?/.exec(s.slice(i));
    if (m) { out.push({a: "zahl", w: parseFloat(m[0].replace(",", "."))}); i += m[0].length; continue; }
    m = /^#(NAME\?|DIV\/0!|WERT!|ZAHL!|BEZUG!)/i.exec(s.slice(i));
    if (m) { out.push({a: "fehler", w: m[0].toUpperCase()}); i += m[0].length; continue; }
    m = /^\$?[A-Za-z]\$?\d+(?![A-Za-zÄÖÜäöüß0-9_])/.exec(s.slice(i));
    if (m) { out.push({a: "bezug", w: m[0].toUpperCase()}); i += m[0].length; continue; }
    m = /^[A-Za-zÄÖÜäöüß_][A-Za-zÄÖÜäöüß0-9_.]*/.exec(s.slice(i));
    if (m) { out.push({a: "name", w: m[0].toUpperCase()}); i += m[0].length; continue; }
    return null;
  }
  return out;
}

/* ---------- zu einem Baum ordnen ---------- */
const SYN = {};
const baumSpeicher = new Map();
function parse(f) {
  if (baumSpeicher.has(f)) return baumSpeicher.get(f);
  let baum = null;
  try {
    const Tk = zeichen(f);
    if (Tk && Tk.length) {
      let i = 0;
      const sieh = a => Tk[i] && Tk[i].a === a, nimm = a => { if (!sieh(a)) throw SYN; i++; };
      const stufe = (ops, naechste) => () => { let l = naechste(); while (Tk[i] && ops.includes(Tk[i].a)) { const o = Tk[i++].a; l = {t: "op", o, l, r: naechste()}; } return l; };
      const atom = () => {
        const t = Tk[i++]; if (!t) throw SYN;
        if (t.a === "zahl") return {t: "z", v: t.w};
        if (t.a === "text") return {t: "z", v: t.w};
        if (t.a === "fehler") return {t: "e", c: t.w};
        if (t.a === "bezug") {
          if (sieh(":")) { i++; const b = Tk[i++]; if (!b || b.a !== "bezug") throw SYN; return {t: "r", von: t.w, bis: b.w}; }
          return {t: "b", a: t.w};
        }
        if (t.a === "(") { const x = vergleich(); nimm(")"); return x; }
        if (t.a === "name") {
          if (!sieh("(")) return {t: "n", n: t.w};
          i++; const args = [];
          if (!sieh(")")) for (;;) {
            args.push(sieh(";") || sieh(")") ? {t: "leer"} : vergleich());
            if (sieh(";")) { i++; continue; }
            break;
          }
          nimm(")");
          return {t: "f", n: t.w, args};
        }
        throw SYN;
      };
      const prozent = () => { let x = atom(); while (sieh("%")) { i++; x = {t: "pct", x}; } return x; };
      const minus = () => { if (sieh("-")) { i++; return {t: "neg", x: minus()}; } if (sieh("+")) { i++; return minus(); } return prozent(); };
      const potenz = stufe(["^"], minus), produkt = stufe(["*", "/"], potenz), summe = stufe(["+", "-"], produkt), verkette = stufe(["&"], summe);
      const vergleich = stufe(["=", "<>", "<", ">", "<=", ">="], verkette);
      baum = vergleich();
      if (i < Tk.length) baum = null;
    }
  } catch (e) { baum = null; }
  if (baumSpeicher.size > 400) baumSpeicher.clear();
  baumSpeicher.set(f, baum);
  return baum;
}

/* ---------- Namen der Funktionen: kleinste und größte Zahl der Argumente ---------- */
const ARGS = {SUMME: [1, 255], MITTELWERT: [1, 255], MIN: [1, 255], MAX: [1, 255], MEDIAN: [1, 255], PRODUKT: [1, 255], ANZAHL: [1, 255], ANZAHL2: [1, 255],
  QUOTIENT: [2, 2], RUNDEN: [2, 2], AUFRUNDEN: [2, 2], ABRUNDEN: [2, 2], GANZZAHL: [1, 1], WURZEL: [1, 1], POTENZ: [2, 2], ABS: [1, 1],
  WENN: [2, 3], UND: [1, 255], ODER: [1, 255], NICHT: [1, 1]};

function tabelle(el, cfg) {
  const S = Math.min(26, Math.max(1, cfg.spalten || 5));
  let Z = cfg.zeilen || 8;
  const Z0 = Z, ZMAX = 60;
  const roh = Object.create(null), format = Object.assign({}, cfg.format || {});
  Object.keys(cfg.zellen || {}).forEach(k => { roh[k.toUpperCase()] = String(cfg.zellen[k]); });
  const darf = a => {
    if (cfg.eingabe === true) return true;
    if (Array.isArray(cfg.eingabe)) return cfg.eingabe.includes(a) || (cfg.erweiterbar && (adr(a) || {z: 0}).z >= Z0 && cfg.eingabe.length > 0);
    return false;
  };
  let wahl = "", formelnAn = false, bereit = false, bereichZellen = [], anker = "";

  /* ---------- rechnen ---------- */
  // Inhalt einer Zelle als Wert: Zahl, Text oder "" (leer); { datum: true } merkt sich die Datumsanzeige
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
  // Wert einer Zelle: null (leer) | Zahl | Text | true/false | Fehl
  function zelle(a, weg) {
    const r = roh[a];
    if (r == null || r === "") return null;
    if (r.charAt(0) !== "=") return eingabeWert(r).v;
    if (weg.includes(a)) return 0;                      // Zirkelbezug: Excel warnt und zeigt 0
    const baum = parse(r.slice(1));
    if (!baum) return F("#NAME?");
    try { const v = ausw(baum, weg.concat(a)); return v === null ? 0 : v; }
    catch (e) { return e instanceof Fehl ? e : F("#WERT!"); }
  }
  function zellen(von, bis) {
    const p = adr(von), q = adr(bis), out = [];
    if (!p || !q || p.z < 0 || q.z < 0) throw F("#BEZUG!");
    for (let z = Math.min(p.z, q.z); z <= Math.min(Math.max(p.z, q.z), Z - 1); z++) for (let s = Math.min(p.s, q.s); s <= Math.min(Math.max(p.s, q.s), S - 1); s++) out.push(name(s, z));
    return out;
  }
  const zahlVon = v => {
    if (v instanceof Fehl) throw v;
    if (v === null) return 0;
    if (typeof v === "number") return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    const n = eingabeWert(v).v;
    if (typeof n === "number") return n;
    throw F("#WERT!");
  };
  const textVon = v => v === null ? "" : typeof v === "boolean" ? (v ? "WAHR" : "FALSCH") : typeof v === "number" ? zahlText(v) : String(v);
  const wahr = v => {
    if (v instanceof Fehl) throw v;
    if (v === null) return false;
    if (typeof v === "boolean") return v;
    if (typeof v === "number") return v !== 0;
    const t = String(v).toUpperCase();
    if (t === "WAHR") return true;
    if (t === "FALSCH") return false;
    throw F("#WERT!");
  };
  function potenz(a, b) {
    if (a === 0 && b === 0) throw F("#ZAHL!");
    if (a === 0 && b < 0) throw F("#DIV/0!");
    if (a < 0 && b !== Math.floor(b)) throw F("#ZAHL!");
    return glaette(Math.pow(a, b));
  }
  // Vergleich wie in Excel: Zahl < Text < Wahrheitswert; Texte ohne Groß/Klein; leere Zelle gilt als 0 oder ""
  function vergleiche(a, b, o) {
    if (a === null) a = typeof b === "string" ? "" : typeof b === "boolean" ? false : 0;
    if (b === null) b = typeof a === "string" ? "" : typeof a === "boolean" ? false : 0;
    const rang = v => typeof v === "number" ? 0 : typeof v === "string" ? 1 : 2;
    let c;
    if (rang(a) !== rang(b)) c = rang(a) < rang(b) ? -1 : 1;
    else if (typeof a === "string") { const x = a.toLowerCase(), y = b.toLowerCase(); c = x < y ? -1 : x > y ? 1 : 0; }
    else c = a < b ? -1 : a > b ? 1 : 0;
    return o === "=" ? c === 0 : o === "<>" ? c !== 0 : o === "<" ? c < 0 : o === ">" ? c > 0 : o === "<=" ? c <= 0 : c >= 0;
  }
  // Zahlen aus den Argumenten sammeln: in Bereichen und Bezügen zählen nur Zahlen, direkt eingegebene Werte werden umgewandelt
  function sammle(args, weg) {
    const out = [];
    args.forEach(a => {
      if (a.t === "r" || a.t === "b") {
        (a.t === "r" ? zellen(a.von, a.bis) : [bezugAdr(a.a)]).forEach(c => { const v = zelle(c, weg); if (v instanceof Fehl) throw v; if (typeof v === "number") out.push(v); });
      } else if (a.t === "leer") out.push(0);
      else out.push(zahlVon(ausw(a, weg)));
    });
    return out;
  }
  function bezugAdr(t) { const p = adr(t); if (!p || p.s < 0 || p.s >= 26 || p.z < 0) throw F("#BEZUG!"); return name(p.s, p.z); }
  function funk(n, weg) {
    const f = n.n, ar = Object.prototype.hasOwnProperty.call(ARGS, f) ? ARGS[f] : null, A = n.args;
    if (!ar) throw F("#NAME?");
    if (A.length < ar[0] || A.length > ar[1]) throw F("#WERT!");
    const x = i => zahlVon(ausw(A[i], weg));
    switch (f) {
      case "SUMME": return glaette(sammle(A, weg).reduce((s, v) => s + v, 0));
      case "MITTELWERT": { const w = sammle(A, weg); if (!w.length) throw F("#DIV/0!"); return glaette(w.reduce((s, v) => s + v, 0) / w.length); }
      case "MIN": { const w = sammle(A, weg); return w.length ? Math.min(...w) : 0; }
      case "MAX": { const w = sammle(A, weg); return w.length ? Math.max(...w) : 0; }
      case "MEDIAN": { const w = sammle(A, weg).sort((a, b) => a - b); if (!w.length) throw F("#ZAHL!"); const m = w.length >> 1; return w.length % 2 ? w[m] : glaette((w[m - 1] + w[m]) / 2); }
      case "PRODUKT": { const w = sammle(A, weg); return w.length ? glaette(w.reduce((s, v) => s * v, 1)) : 0; }
      case "QUOTIENT": { const a = x(0), b = x(1); if (b === 0) throw F("#DIV/0!"); return Math.trunc(Number((a / b).toPrecision(14))) || 0; }
      case "RUNDEN": return runde(x(0), x(1), "r");
      case "AUFRUNDEN": return runde(x(0), x(1), "auf");
      case "ABRUNDEN": return runde(x(0), x(1), "ab");
      case "GANZZAHL": return Math.floor(Number(x(0).toPrecision(15)));
      case "WURZEL": { const a = x(0); if (a < 0) throw F("#ZAHL!"); return glaette(Math.sqrt(a)); }
      case "POTENZ": return potenz(x(0), x(1));
      case "ABS": return Math.abs(x(0));
      case "ANZAHL": case "ANZAHL2": {
        let k = 0;
        A.forEach(a => {
          if (a.t === "r" || a.t === "b") (a.t === "r" ? zellen(a.von, a.bis) : [bezugAdr(a.a)]).forEach(c => { const v = zelle(c, weg); if (f === "ANZAHL" ? typeof v === "number" : v !== null) k++; });
          else if (a.t !== "leer") {
            let v; try { v = ausw(a, weg); } catch (e) { if (e instanceof Fehl && f === "ANZAHL2") { k++; return; } if (e instanceof Fehl) return; throw e; }
            if (f === "ANZAHL2" ? true : (typeof v === "number" || typeof v === "boolean" || (typeof v === "string" && typeof eingabeWert(v).v === "number"))) k++;
          }
        });
        return k;
      }
      case "WENN": {
        const b = wahr(ausw(A[0], weg));
        const zweig = b ? A[1] : A[2];
        if (!zweig) return b;
        if (zweig.t === "leer") return 0;
        const v = ausw(zweig, weg);
        return v === null ? 0 : v;
      }
      case "UND": case "ODER": {
        const w = [];
        A.forEach(a => {
          if (a.t === "r" || a.t === "b") (a.t === "r" ? zellen(a.von, a.bis) : [bezugAdr(a.a)]).forEach(c => { const v = zelle(c, weg); if (v instanceof Fehl) throw v; if (typeof v === "number" || typeof v === "boolean") w.push(!!v); });
          else w.push(wahr(a.t === "leer" ? null : ausw(a, weg)));
        });
        if (!w.length) throw F("#WERT!");
        return f === "UND" ? w.every(Boolean) : w.some(Boolean);
      }
      case "NICHT": return !wahr(ausw(A[0], weg));
    }
    throw F("#NAME?");
  }
  function ausw(n, weg) {
    switch (n.t) {
      case "z": return n.v;
      case "e": throw F(n.c);
      case "leer": return null;
      case "b": { const v = zelle(bezugAdr(n.a), weg); if (v instanceof Fehl) throw v; return v; }
      case "r": throw F("#WERT!");
      case "n": if (n.n === "WAHR") return true; if (n.n === "FALSCH") return false; throw F("#NAME?");
      case "neg": return -zahlVon(ausw(n.x, weg)) || 0;
      case "pct": return glaette(zahlVon(ausw(n.x, weg)) / 100);
      case "f": return funk(n, weg);
      case "op": {
        const a = ausw(n.l, weg), b = ausw(n.r, weg), o = n.o;
        if (o === "&") return textVon(a) + textVon(b);
        if (o === "=" || o === "<>" || o === "<" || o === ">" || o === "<=" || o === ">=") return vergleiche(a, b, o);
        const p = zahlVon(a), q = zahlVon(b);
        if (o === "+") return glaette(p + q);
        if (o === "-") return glaette(p - q);
        if (o === "*") return glaette(p * q);
        if (o === "/") { if (q === 0) throw F("#DIV/0!"); return glaette(p / q); }
        return potenz(p, q);
      }
    }
    throw F("#WERT!");
  }
  const wertIntern = a => { const v = zelle(a.toUpperCase(), []); return v === null ? "" : v instanceof Fehl ? v.c : v; };
  const istFormel = a => String(roh[a.toUpperCase()] || "").charAt(0) === "=";
  // Formel groß geschrieben und ohne Leerzeichen; Texte in Anführungszeichen bleiben, wie sie sind
  const formel = a => istFormel(a) ? roh[a.toUpperCase()].replace(/"(?:[^"]|"")*"|[^"]+/g, x => x.charAt(0) === '"' ? x : x.replace(/\s/g, "").toUpperCase()) : "";
  function bezugGruppen(a) {
    const Tk = zeichen(formel(a).slice(1)) || [], out = [];
    for (let i = 0; i < Tk.length; i++) {
      if (Tk[i].a !== "bezug" || (Tk[i - 1] && Tk[i - 1].a === ":")) continue;
      out.push(Tk[i + 1] && Tk[i + 1].a === ":" && Tk[i + 2] && Tk[i + 2].a === "bezug" ? [Tk[i].w, Tk[i + 2].w] : [Tk[i].w]);
    }
    return out;
  }
  const bezuege = a => [].concat(...bezugGruppen(a));
  function fmt(a) { return format[a] || format[a.charAt(0)] || ""; }
  function text(a) {
    a = a.toUpperCase(); const r = roh[a];
    if (r == null || r === "") return "";
    if (formelnAn && istFormel(a)) return r;
    const v = wertIntern(a);
    if (FEHLER(v)) return v;
    if (typeof v === "boolean") return v ? "WAHR" : "FALSCH";
    if (typeof v !== "number") return String(v);
    const e = istFormel(a) ? {} : eingabeWert(r), f = fmt(a) || e.art || "";
    if (e.datum) return e.anzeige;
    if (f === "euro") return runde(v, 2, "r").toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €";
    if (f === "prozent") return runde(v * 100, 0, "r") + "%";     // wie das Prozentformat in Excel: auf ganze Prozent gerundet
    return zahlText(v);
  }

  /* ---------- Formel beim Kopieren anpassen ---------- */
  function verschiebe(f, ds, dz) {
    return f.replace(/"(?:[^"]|"")*"|[^"]+/g, teil => teil.charAt(0) === '"' ? teil : teil.replace(/(^|[^A-Za-zÄÖÜäöüß0-9_$.])(\$?)([A-Za-z])(\$?)(\d+)(?![A-Za-zÄÖÜäöüß0-9_(])/g, (_m, vor, fs, sp, fz, ze) => {
      const s = BUCHST.indexOf(sp.toUpperCase()) + (fs ? 0 : ds), z = +ze + (fz ? 0 : dz);
      return vor + (s < 0 || s > 25 || z < 1 ? "#BEZUG!" : fs + BUCHST[s] + fz + z);
    }));
  }

  /* ---------- Oberfläche ---------- */
  el.classList.add("tab8", "tab9");
  el.setAttribute("translate", "no");   // Sprachfahnen: Tabelle und Formeln bleiben, wie sie sind (wie in Excel auf den Schul-PCs)
  const kopfZelle = s => `<th data-s="${s}"${cfg.breit && cfg.breit[BUCHST[s]] ? ` style="min-width:${cfg.breit[BUCHST[s]]}px"` : ""}>${BUCHST[s]}</th>`;
  const zeileHtml = z => `<tr><th data-zn="${z}">${z + 1}</th>${Array.from({length: S}, (_, s) => `<td data-z="${name(s, z)}" tabindex="-1"></td>`).join("")}</tr>`;
  el.innerHTML = `<div class="tab8-leiste"><span class="tab8-name" title="Namenfeld">&nbsp;</span><span class="tab8-fx" aria-hidden="true">fx</span>
      <input class="tab8-eingabe" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Bearbeitungsleiste" disabled>
      <button type="button" class="tab8-ok" aria-label="Eingabe bestätigen" disabled>✓</button></div>
    <div class="tab8-rahmen"><table><thead><tr><th class="ecke"></th>${Array.from({length: S}, (_, s) => kopfZelle(s)).join("")}</tr></thead>
    <tbody>${Array.from({length: Z}, (_, z) => zeileHtml(z)).join("")}</tbody></table></div>
    ${cfg.erweiterbar ? '<div class="tab9-mehr"><button type="button" class="btn small ghost tab9-zeile">＋ Zeile</button></div>' : ""}
    <div class="tab8-hinweis" aria-live="polite"></div>`;
  const feld = $(".tab8-eingabe", el), okKnopf = $(".tab8-ok", el), nameFeld = $(".tab8-name", el), hinweis = $(".tab8-hinweis", el), tbody = $("tbody", el);
  const td = a => $(`td[data-z="${a}"]`, el);
  const api = {};
  function zeichne() {
    $$("td", el).forEach(c => {
      const a = c.dataset.z, t = text(a), v = wertIntern(a), griff = c.querySelector(".tab8-griff");
      c.textContent = t;
      c.classList.toggle("zahl", typeof v === "number" && !(formelnAn && istFormel(a)));
      c.classList.toggle("bool", typeof v === "boolean" && !(formelnAn && istFormel(a)));
      c.classList.toggle("fehler", FEHLER(v));
      c.classList.toggle("offen", darf(a));
      if (griff) c.appendChild(griff);
    });
    if (bereit && cfg.nachZeichnen) cfg.nachZeichnen(api);
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
    // Bezüge der Formel farbig zeigen (wie in Excel beim Bearbeiten); ein Bereich bekommt eine Farbe
    const gesehen = new Set();
    bezugGruppen(a).map(g => g.map(b => b.replace(/\$/g, ""))).filter(g => { const k = g.join(":"); if (gesehen.has(k)) return false; gesehen.add(k); return true; }).slice(0, 3).forEach((g, i) => {
      try { (g.length > 1 ? zellen(g[0], g[1]) : [g[0]]).forEach(b => { const z = td(b); if (z) z.classList.add("bz" + (i + 1)); }); } catch (e) { /* #BEZUG! */ }
    });
    if (cfg.griff && (darf(a) || a === String(cfg.start || "").toUpperCase())) { const g = document.createElement("span"); g.className = "tab8-griff"; g.title = "Ausfüllkästchen: ziehen, um zu kopieren"; c.appendChild(g); ziehbar(g); }
    if (!still && cfg.waehlen) cfg.waehlen(a, api);
  }
  function setze(a, inhalt, still) {
    a = a.toUpperCase(); inhalt = String(inhalt == null ? "" : inhalt).trim();
    if (inhalt.charAt(0) === "=" && !parse(inhalt.slice(1))) { hinweis.textContent = "⚠️ Diese Formel versteht GRUMI-EXCEL nicht. Prüfe Klammern, Anführungszeichen und Rechenzeichen."; return false; }
    // wie Excel: Bezüge und Funktionsnamen werden groß geschrieben (Texte in Anführungszeichen bleiben)
    if (inhalt === "") delete roh[a]; else roh[a] = inhalt.charAt(0) === "=" ? inhalt.replace(/"(?:[^"]|"")*"|[^"]+/g, x => x.charAt(0) === '"' ? x : x.toUpperCase()) : inhalt;
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
        zellen(start, ziel).forEach(a => { const x = td(a); if (x) x.classList.add("zieh"); });
      };
      const ende = () => {
        document.removeEventListener("pointermove", bewegen); document.removeEventListener("pointerup", ende); document.removeEventListener("pointercancel", ende);
        $$("td.zieh", el).forEach(x => x.classList.remove("zieh"));
        if (ziel !== start) {
          const frei = zellen(start, ziel).every(a => a === start || darf(a));
          if (frei) fuelle(start, ziel); else hinweis.textContent = "Dorthin kannst du hier nicht ausfüllen – diese Zellen sind gesperrt.";
        }
      };
      document.addEventListener("pointermove", bewegen); document.addEventListener("pointerup", ende); document.addEventListener("pointercancel", ende);
    });
  }
  tbody.addEventListener("click", e => { const c = e.target.closest("td[data-z]"); if (!c || e.target.classList.contains("tab8-griff")) return; waehle(c.dataset.z); if (darf(c.dataset.z)) feld.focus({preventScroll: true}); });
  const bestaetige = () => { if (!wahl || !darf(wahl)) return; if (setze(wahl, feld.value)) { const p = adr(wahl), unten = name(p.s, p.z + 1); if (td(unten) && darf(unten)) waehle(unten); } };
  feld.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); bestaetige(); } if (e.key === "Escape") { feld.value = roh[wahl] || ""; } });
  okKnopf.addEventListener("click", bestaetige);
  const mehr = $(".tab9-zeile", el);
  function zeileDazu() {
    if (Z >= ZMAX) { hinweis.textContent = "Mehr als " + ZMAX + " Zeilen gibt es hier nicht."; return false; }
    tbody.insertAdjacentHTML("beforeend", zeileHtml(Z)); Z++;
    zeichne(); if (wahl) waehle(wahl, true);
    return true;
  }
  if (mehr) mehr.addEventListener("click", zeileDazu);

  /* ---------- Bereich markieren (für Diagramme): Ziehen oder erst die erste, dann die letzte Zelle antippen ---------- */
  function zeigeBereich(t) {
    const n = bereichNorm(t);
    $$("td.dg-anker, td.dg-bereich", el).forEach(x => x.classList.remove("dg-anker", "dg-bereich"));
    bereichZellen = [];
    if (!n) return null;
    const [von, bis] = n.split(":");
    try { bereichZellen = zellen(von, bis); } catch (e) { return null; }
    bereichZellen.forEach(a => { const c = td(a); if (c) c.classList.add("dg-bereich"); });
    return n;
  }
  if (cfg.bereichWahl) {
    el.classList.add("tab9-wahl");
    let start = null, bewegt = false;
    const zelleBei = ev => { const z = document.elementFromPoint(ev.clientX, ev.clientY), c = z && z.closest ? z.closest("td[data-z]") : null; return c && el.contains(c) ? c.dataset.z : null; };
    tbody.addEventListener("pointerdown", e => {
      const c = e.target.closest("td[data-z]"); if (!c || e.target.classList.contains("tab8-griff") || e.button) return;
      start = c.dataset.z; bewegt = false; let ziel = start;
      const bewegen = ev => { const a = zelleBei(ev); if (a && a !== ziel) { ziel = a; bewegt = true; zeigeBereich(start + ":" + ziel); } };
      const ende = ev => {
        document.removeEventListener("pointermove", bewegen); document.removeEventListener("pointerup", ende); document.removeEventListener("pointercancel", abbruch);
        const a = zelleBei(ev) || ziel;
        if (bewegt && a !== start) { anker = ""; $$("td.dg-anker", el).forEach(x => x.classList.remove("dg-anker")); cfg.bereichWahl(start + ":" + a, api, true); }
        else if (anker && anker !== a) { const v = anker; anker = ""; $$("td.dg-anker", el).forEach(x => x.classList.remove("dg-anker")); cfg.bereichWahl(v + ":" + a, api, true); }
        else if (anker === a) { anker = ""; $$("td.dg-anker", el).forEach(x => x.classList.remove("dg-anker")); cfg.bereichWahl("", api, null); }
        else { anker = a; $$("td.dg-anker", el).forEach(x => x.classList.remove("dg-anker")); const c2 = td(a); if (c2) c2.classList.add("dg-anker"); cfg.bereichWahl(a, api, false); }
      };
      const abbruch = () => { document.removeEventListener("pointermove", bewegen); document.removeEventListener("pointerup", ende); document.removeEventListener("pointercancel", abbruch); };
      document.addEventListener("pointermove", bewegen); document.addEventListener("pointerup", ende); document.addEventListener("pointercancel", abbruch);
    });
  }
  // Werte eines Bereichs als Zeilen: [[Text-oder-Zahl, …], …]
  function bereichZeilen(t) {
    const n = bereichNorm(t); if (!n) return [];
    const [von, bis] = n.split(":"), p = adr(von), q = adr(bis), out = [];
    for (let z = p.z; z <= Math.min(q.z, Z - 1); z++) { const zeile = []; for (let s = p.s; s <= Math.min(q.s, S - 1); s++) zeile.push(wertIntern(name(s, z))); out.push(zeile); }
    return out;
  }

  Object.assign(api, {
    el, roh: a => roh[a.toUpperCase()] || "", wert: wertIntern, text, formel, bezuege, istFormel,
    setze, waehle, fuelle, verschiebe, gewaehlt: () => wahl, zeileDazu, zeilen: () => Z, spalten: () => S, bereichZeilen,
    markiere(liste, klasse) { $$("td." + klasse, el).forEach(x => x.classList.remove(klasse)); (liste || []).forEach(a => { const c = td(a.toUpperCase()); if (c) c.classList.add(klasse); }); },
    formelnZeigen(an) { formelnAn = !!an; zeichne(); if (wahl) waehle(wahl, true); },
    hinweis(tx) { hinweis.textContent = tx || ""; },
    // Anzeige ändern wie mit den Schaltflächen in Excel: formatiere(["C2", "C3"], "prozent" | "euro" | "")
    formatiere(liste, art) { (liste || []).forEach(a => { if (art) format[a.toUpperCase()] = art; else delete format[a.toUpperCase()]; }); zeichne(); if (wahl) waehle(wahl, true); },
    formatVon: a => fmt(a.toUpperCase()),
    bereich: () => bereichZellen.length ? bereichNorm(bereichZellen[0] + ":" + bereichZellen[bereichZellen.length - 1]) : "",
    bereichSetze(t) { anker = ""; return zeigeBereich(t); },
    ankerSetze(a) { anker = a || ""; }
  });
  zeichne();
  bereit = true;
  if (cfg.start) waehle(cfg.start, true);
  return api;
}

/* ---------- Bereiche vergleichen: „a1:b5“ = „B5:A1“ ---------- */
function bereichNorm(t) {
  const teile = String(t == null ? "" : t).replace(/[\s$]/g, "").toUpperCase().split(":");
  if (teile.length > 2 || !teile[0]) return null;
  const p = adr(teile[0]), q = adr(teile[teile.length - 1]);
  if (!p || !q || p.z < 0 || q.z < 0) return null;
  return name(Math.min(p.s, q.s), Math.min(p.z, q.z)) + ":" + name(Math.max(p.s, q.s), Math.max(p.z, q.z));
}
const bereichGleich = (a, b) => { const x = bereichNorm(a); return !!x && x === bereichNorm(b); };

/* ---------- Aufgabe mit Tabelle ---------- */
// cfg: { text: "HTML", tabelle: {…}, pruefe: t => [{ ok, text }], loesung: { setze: {D2: "=B2*C2"}, fuelle: [["D2", "D5"]], format: {prozent: ["C2"]} },
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
    let punkte; try { punkte = cfg.pruefe(t) || []; } catch (e) { punkte = [{ok: false, text: "Die Tabelle konnte nicht geprüft werden."}]; }
    const ok = punkte.length > 0 && punkte.every(p => p.ok);
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
  return {tabelle: () => t, pruefen};
}

// Vergleich einer Formel mit erlaubten Fassungen: Groß-/Kleinschreibung und Leerzeichen sind egal
const formelGleich = (f, erlaubt) => { const n = s => String(s || "").replace(/\s/g, "").toUpperCase(); return (erlaubt || []).some(e => n(e) === n(f)); };

/* ---------- Aufgabe mit Tabelle und Diagramm ---------- */
const TYP_NAMEN = {saeule: "Säulen", balken: "Balken", kreis: "Kreis", streifen: "Streifen", linie: "Linie"};
const TYP_BILD = {
  saeule: '<rect x="3" y="12" width="5" height="9" rx="1"/><rect x="10" y="5" width="5" height="16" rx="1"/><rect x="17" y="9" width="5" height="12" rx="1"/>',
  balken: '<rect x="3" y="3" width="9" height="5" rx="1"/><rect x="3" y="10" width="17" height="5" rx="1"/><rect x="3" y="17" width="13" height="5" rx="1"/>',
  kreis: '<path d="M12 12V3a9 9 0 1 1-8.5 12z"/><path d="M12 12V3a9 9 0 0 1 8.7 6.7z" opacity=".55"/>',
  streifen: '<rect x="2" y="8" width="11" height="9" rx="1"/><rect x="13" y="8" width="6" height="9" opacity=".6"/><rect x="19" y="8" width="3" height="9" rx="1" opacity=".35"/>',
  linie: '<polyline points="3,18 9,10 14,14 21,5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="3" cy="18" r="1.8"/><circle cx="9" cy="10" r="1.8"/><circle cx="14" cy="14" r="1.8"/><circle cx="21" cy="5" r="1.8"/>'
};
const istZahl = v => typeof v === "number";

// Daten eines Bereichs: erste Spalte = Kategorien, weitere Spalten = Reihen, Kopfzeile mit Text = Reihennamen
function bereichDaten(t, bereich) {
  const n = bereichNorm(bereich); if (!n) return null;
  const zeilen = t.bereichZeilen(n), C = zeilen[0] ? zeilen[0].length : 0, R = zeilen.length;
  if (!R || !C) return null;
  const text = (z, s) => { const p = adr(n.split(":")[0]); return t.text(name(p.s + s, p.z + z)); };
  const kopf = C >= 2 ? zeilen[0].slice(1).some(v => typeof v === "string" && v !== "" && !FEHLER(v)) : (R > 1 && typeof zeilen[0][0] === "string" && zeilen[0][0] !== "" && zeilen.slice(1).every(r => istZahl(r[0])));
  const von = kopf ? 1 : 0, kategorien = [], reihen = [];
  for (let z = von; z < R; z++) kategorien.push(C >= 2 ? text(z, 0) : String(z - von + 1));
  for (let s = C >= 2 ? 1 : 0; s < C; s++) reihen.push({name: kopf ? text(0, s) : "", werte: zeilen.slice(von).map(r => istZahl(r[s]) ? r[s] : null)});
  return {bereich: n, kategorien, reihen, hatKopf: kopf, zeilen: R, spalten: C};
}

function makeDiagrammAufgabe(box, cfg, id) {
  register(id, box, cfg.name || "Diagramm: " + String(cfg.text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90));
  const typen = (cfg.typen && cfg.typen.length ? cfg.typen : ["saeule", "balken", "kreis", "streifen", "linie"]).filter(k => TYP_NAMEN[k]);
  box.classList.add("tab8-aufgabe", "dg9-aufgabe");
  box.innerHTML = `${cfg.text ? `<p class="tab8-text">${cfg.text}</p>` : ""}<div class="tab8-platz"></div>
    <div class="dg9-leiste"><div class="dg9-kopf">Diagramm einfügen</div>
      <div class="dg9-zeile"><label for="${esc(id)}-bereich">Bereich:</label><input type="text" class="dg9-bereich" id="${esc(id)}-bereich" placeholder="z. B. A1:B5" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-describedby="${esc(id)}-bh">
        <span class="dg9-bereich-hinweis" id="${esc(id)}-bh" aria-live="polite">Tippe die erste und dann die letzte Zelle an – oder ziehe über die Zellen.</span></div>
      <div class="dg9-zeile"><span class="dg9-etikett" id="${esc(id)}-tl">Diagrammtyp:</span><div class="dg9-typen" role="group" aria-labelledby="${esc(id)}-tl">${typen.map(k => `<button type="button" class="dg9-typ" data-typ="${k}" aria-pressed="false" title="${TYP_NAMEN[k]}"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">${TYP_BILD[k]}</svg><span>${TYP_NAMEN[k]}</span></button>`).join("")}</div></div>
      <div class="dg9-zeile"><label for="${esc(id)}-titel">Diagrammtitel:</label><input type="text" class="dg9-titel" id="${esc(id)}-titel" maxlength="80" placeholder="Titel eintippen" autocomplete="off"></div>
    </div>
    <div class="dg9-vorschau" aria-live="polite"></div>
    <div class="row-btns"><button type="button" class="btn small check">Prüfen</button><button type="button" class="btn small ghost neu">↺ Zurücksetzen</button></div>
    <ul class="pruef-liste"></ul><div class="fb"></div>`;
  const platz = $(".tab8-platz", box), liste = $(".pruef-liste", box), fb = $(".fb", box), bf = $(".dg9-bereich", box), bh = $(".dg9-bereich-hinweis", box), tf = $(".dg9-titel", box), vor = $(".dg9-vorschau", box);
  const STANDARD_HINWEIS = bh.textContent;
  let t, d, z = {typ: "", bereich: "", titel: ""};
  function daten() {
    const b = z.bereich ? bereichDaten(t, z.bereich) : null;
    return Object.assign({typ: z.typ, bereich: z.bereich, titel: z.titel, kategorien: [], reihen: [], hatKopf: false, zeilen: 0, spalten: 0}, b || {}, {bereich: z.bereich, t});
  }
  function zeige() {
    const dd = daten();
    let leer = "";
    if (!dd.kategorien.length) leer = "Das Diagramm erscheint hier, sobald du Daten (Bereich) und einen Diagrammtyp gewählt hast.";
    else if (!z.typ) leer = "Wähle noch einen Diagrammtyp.";
    if (leer) { d.setze({typ: z.typ || "saeule", titel: z.titel, kategorien: [], reihen: [], leer}); return; }
    d.setze({typ: z.typ, titel: z.titel, kategorien: dd.kategorien, reihen: dd.reihen, leer: ""});
  }
  function bereichUebernehmen(text, vonHand) {
    const n = bereichNorm(text);
    if (!n) { z.bereich = ""; t.bereichSetze(""); bh.textContent = String(text).trim() ? "So schreibt man einen Bereich: erste Zelle, Doppelpunkt, letzte Zelle – zum Beispiel A1:B5." : STANDARD_HINWEIS; zeige(); return; }
    z.bereich = n; t.bereichSetze(n); if (!vonHand) bf.value = n;
    bh.textContent = "Bereich " + n + " ist markiert.";
    zeige();
  }
  function aufbauen() {
    platz.innerHTML = ""; platz.className = "tab8-platz";
    const bisher = cfg.tabelle || {};
    t = tabelle(platz, Object.assign({}, bisher, {
      bereichWahl: (b, tt, fertig) => {
        if (fertig === false) { bh.textContent = "Erste Zelle " + b + " gewählt. Tippe jetzt die letzte Zelle an."; return; }
        if (fertig === null) { bh.textContent = z.bereich ? "Bereich " + z.bereich + " ist markiert." : STANDARD_HINWEIS; return; }
        bereichUebernehmen(b);
      },
      nachZeichnen: tt => { if (d) zeige(); if (bisher.nachZeichnen) bisher.nachZeichnen(tt); }
    }));
    if (cfg.zusatz) cfg.zusatz(t);
  }
  function waehleTyp(k) {
    z.typ = typen.includes(k) ? k : "";
    $$(".dg9-typ", box).forEach(b => { const an = b.dataset.typ === z.typ; b.classList.toggle("an", an); b.setAttribute("aria-pressed", an); });
    zeige();
  }
  function neuStart() {
    z = {typ: "", bereich: "", titel: ""}; bf.value = ""; tf.value = ""; bh.textContent = STANDARD_HINWEIS;
    $$(".dg9-typ", box).forEach(b => { b.classList.remove("an"); b.setAttribute("aria-pressed", "false"); });
    aufbauen(); d = d || M.diagramm(vor, {}); zeige();
    liste.innerHTML = ""; fb.className = "fb";
  }
  d = M.diagramm(vor, {typ: "saeule", kategorien: [], reihen: [], leer: ""});
  aufbauen(); zeige();
  const uebernehmen = () => bereichUebernehmen(bf.value);
  bf.addEventListener("change", uebernehmen);
  bf.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); uebernehmen(); } });
  bf.addEventListener("input", () => { if (bereichNorm(bf.value) && /\d$/.test(bf.value.trim()) && bf.value.includes(":")) bereichUebernehmen(bf.value, true); });
  tf.addEventListener("input", () => { z.titel = tf.value.trim(); zeige(); });
  $$(".dg9-typ", box).forEach(b => b.addEventListener("click", () => waehleTyp(b.dataset.typ)));

  function pruefen() {
    const dd = daten();
    let punkte;
    try { punkte = (cfg.pruefe ? cfg.pruefe(dd) : standardPruefung(dd)) || []; } catch (e) { punkte = [{ok: false, text: "Das Diagramm konnte nicht geprüft werden."}]; }
    const ok = punkte.length > 0 && punkte.every(p => p.ok);
    liste.innerHTML = punkte.map(p => `<li class="${p.ok ? "ok" : "bad"}">${p.ok ? "✓" : "✗"} ${esc(p.text)}</li>`).join("");
    fb.className = "fb show " + (ok ? "ok" : "bad");
    fb.textContent = ok ? "✅ " + (cfg.erfolg || "Alles richtig!") : "❌ Noch nicht ganz. Verbessere die Punkte mit ✗ und prüfe noch einmal.";
    if (ok) solve(id);
  }
  function standardPruefung(dd) {
    const L = cfg.loesung || {};
    return [
      {ok: bereichGleich(dd.bereich, L.bereich), text: dd.bereich ? (bereichGleich(dd.bereich, L.bereich) ? "Der Datenbereich stimmt." : "Der Datenbereich passt noch nicht. Markiere alle Zellen mit den Namen und den Zahlen.") : "Markiere zuerst den Datenbereich."},
      {ok: !!dd.typ && dd.typ === L.typ, text: dd.typ ? (dd.typ === L.typ ? "Der Diagrammtyp passt." : "Der Diagrammtyp passt nicht gut zu diesen Daten.") : "Wähle einen Diagrammtyp."},
      {ok: dd.titel.length >= 3, text: dd.titel.length >= 3 ? "Das Diagramm hat einen Titel." : "Gib dem Diagramm einen Titel."}
    ];
  }
  $(".check", box).addEventListener("click", pruefen);
  $(".neu", box).addEventListener("click", neuStart);
  if (M.isSolved(id)) { fb.className = "fb show ok"; fb.textContent = "✅ Diese Aufgabe hast du schon gelöst."; }
  M.loeser[id] = async () => {
    if (M.isSolved(id)) return;
    const L = cfg.loesung || {};
    Object.keys(L.setze || {}).forEach(a => t.setze(a, L.setze[a]));
    if (L.bereich) { bf.value = L.bereich; bereichUebernehmen(L.bereich); }
    if (L.typ) waehleTyp(L.typ);
    if (L.titel != null) { tf.value = L.titel; z.titel = String(L.titel).trim(); zeige(); }
    pruefen();
  };
  return {tabelle: () => t, diagramm: () => d, pruefen, zustand: daten};
}

Object.assign(M, {tabelle, makeTabellenAufgabe, makeDiagrammAufgabe, formelGleich, bereichGleich, bereichNorm});
})();
