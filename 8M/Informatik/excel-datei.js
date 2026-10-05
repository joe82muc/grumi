/* Excel-Datei im Browser auswerten – für die Ergebnisprüfung der Excel-Aufträge (Modul.makeAuftrag, pruefung.art "datei").
 * Bei den Excel-Aufträgen wird die Datei hochgeladen und auf dem Server geprüft (pruefung.server). Diese Datei ist der
 * Ersatzweg: Ist der Server nicht erreichbar, wird die Datei hier auf dem Gerät gelesen und geprüft.
 *
 * Eine .xlsx-Datei ist ein ZIP-Archiv. Darin stehen xl/workbook.xml (Blätter), xl/worksheets/sheetN.xml (Zellen) und
 * xl/sharedStrings.xml (Texte). Formeln sind in englischer Schreibweise gespeichert; kopierte Formeln stehen nur in der
 * ersten Zelle („shared formula“) – hier werden sie für jede Zelle ausgeschrieben und in die deutsche Schreibweise
 * übersetzt (SUMME, Dezimalkomma, Strichpunkt).
 *
 *   Modul.liesExcel(datei) -> Promise({
 *     blaetter: [{ name, zellen: { A1: { f: "=B2*C2" | "", v: 36 | "Text" | "#DIV/0!" } } }],
 *     formel(adresse, blatt = 0)   "=B2*C2" (groß, ohne Leerzeichen) oder ""
 *     wert(adresse, blatt = 0)     Zahl, Text oder undefined (leer)
 *     istZahl(adresse), istText(adresse), leer(adresse)
 *     istDatum(adresse), istProzent(adresse), istWaehrung(adresse)   Anzeige der Zelle (Zahlenformat)
 *     fett(adresse)                Schrift der Zelle ist fett
 *     bezuege(adresse)             ["B2", "$B$1"] – Zellbezüge der Formel, wie geschrieben
 *     hatFormel(adresse)
 *     gleich(adresse, zahl, tol)   Wert stimmt (Standard: auf 0,005 genau)
 *     formelWie(adresse, ["=B2*C2", "=C2*B2"])   Formel entspricht einer der Fassungen
 *   })
 * Einbinden nach praxis.js. Geprüft mit Dateien aus Microsoft 365 Excel (Version 16.0, deutsch).
 * Modul.zipInhalt(bytes) liefert den Zugriff auf die Einträge eines ZIP-Archivs (auch für Scratch-Dateien .sb3).
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;

const FEHLER_DATEI = "Das ist keine Excel-Datei. Wähle die Datei mit der Endung .xlsx, die du in Excel gespeichert hast.";

/* ---------- ZIP lesen ---------- */
// liefert { namen: [...], text(name) -> Promise(String) }; text() wirft, wenn es den Eintrag nicht gibt
function zipInhalt(bytes, fehlerText) {
  const fehler = () => new Error(fehlerText || "Diese Datei lässt sich nicht öffnen.");
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), n = bytes.length;
  const dek = new TextDecoder("utf-8");
  if (n < 30 || v.getUint32(0, true) !== 0x04034b50) throw fehler();
  const liste = {};
  // Inhaltsverzeichnis am Ende der Datei: dort stehen die Größen sicher
  for (let i = n - 22; i >= Math.max(0, n - 70000); i--) {
    if (v.getUint32(i, true) !== 0x06054b50) continue;
    let p = v.getUint32(i + 16, true); const anzahl = v.getUint16(i + 10, true);
    for (let k = 0; k < anzahl && p + 46 <= n && v.getUint32(p, true) === 0x02014b50; k++) {
      const nameLen = v.getUint16(p + 28, true), extra = v.getUint16(p + 30, true), komm = v.getUint16(p + 32, true);
      liste[dek.decode(bytes.subarray(p + 46, p + 46 + nameLen))] = {methode: v.getUint16(p + 10, true), gross: v.getUint32(p + 20, true), kopf: v.getUint32(p + 42, true)};
      p += 46 + nameLen + extra + komm;
    }
    break;
  }
  async function text(name) {
    const e = liste[name];
    if (!e || e.kopf + 30 > n) throw fehler();
    const k = e.kopf, start = k + 30 + v.getUint16(k + 26, true) + v.getUint16(k + 28, true);
    const roh = bytes.subarray(start, start + e.gross);
    if (e.methode === 0) return dek.decode(roh);
    if (e.methode !== 8) throw fehler();
    if (typeof DecompressionStream === "undefined") throw new Error("Dieser Browser kann die Datei nicht öffnen. Nimm einen aktuellen Browser oder beantworte die Frage darunter.");
    return new Response(new Blob([roh]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
  }
  return {namen: Object.keys(liste), text, hat: name => !!liste[name]};
}

/* ---------- Formeln ---------- */
const BUCHST = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const spalteNr = s => s.split("").reduce((x, c) => x * 26 + BUCHST.indexOf(c) + 1, 0) - 1;
const spalteName = n => { let s = ""; n++; while (n > 0) { s = BUCHST[(n - 1) % 26] + s; n = Math.floor((n - 1) / 26); } return s; };
const teile = a => { const m = /^([A-Z]+)(\d+)$/.exec(a); return m ? {s: spalteNr(m[1]), z: +m[2]} : null; };
// Bezüge ohne $ um ds Spalten und dz Zeilen verschieben (für kopierte Formeln)
function verschiebe(f, ds, dz) {
  return f.replace(/(\$?)([A-Z]{1,3})(\$?)(\d+)(?![A-Za-z(])/g, (_m, fs, sp, fz, ze) => {
    const s = spalteNr(sp) + (fs ? 0 : ds), z = +ze + (fz ? 0 : dz);
    return s < 0 || z < 1 ? "#BEZUG!" : fs + spalteName(s) + fz + z;
  });
}
const NAMEN = {SUM: "SUMME", AVERAGE: "MITTELWERT", COUNT: "ANZAHL", IF: "WENN", ROUND: "RUNDEN", PRODUCT: "PRODUKT", COUNTA: "ANZAHL2", TODAY: "HEUTE", AND: "UND", OR: "ODER"};
const FEHLERWERT = {"#REF!": "#BEZUG!", "#VALUE!": "#WERT!", "#NAME?": "#NAME?", "#DIV/0!": "#DIV/0!", "#N/A": "#NV", "#NUM!": "#ZAHL!", "#NULL!": "#NULL!"};
// englische Schreibweise der Datei -> deutsche Schreibweise, groß und ohne Leerzeichen
function deutsch(f) {
  let s = String(f).replace(/\s+/g, "");
  s = s.replace(/,/g, ";").replace(/(\d)\.(\d)/g, "$1,$2");
  s = s.replace(/#REF!/g, "#BEZUG!").replace(/#VALUE!/g, "#WERT!");
  s = s.replace(/[A-Z][A-Z0-9.]*(?=\()/g, n => NAMEN[n] || n);
  return "=" + s.toUpperCase();
}

function blattLesen(xml, texte, formate, fette) {
  const doc = new DOMParser().parseFromString(xml, "application/xml"), zellen = {}, gemeinsam = {};
  const cs = doc.getElementsByTagName("c");
  for (let i = 0; i < cs.length; i++) {
    const c = cs[i], a = c.getAttribute("r"), typ = c.getAttribute("t") || "n";
    const fEl = c.getElementsByTagName("f")[0], vEl = c.getElementsByTagName("v")[0];
    let f = "";
    if (fEl) {
      const si = fEl.getAttribute("si");
      if (fEl.getAttribute("t") === "shared" && si != null) {
        if (fEl.textContent) { gemeinsam[si] = {f: fEl.textContent, a}; f = fEl.textContent; }
        else if (gemeinsam[si]) { const von = teile(gemeinsam[si].a), nach = teile(a); f = von && nach ? verschiebe(gemeinsam[si].f, nach.s - von.s, nach.z - von.z) : ""; }
      } else f = fEl.textContent || "";
    }
    let v;
    if (typ === "s") v = vEl ? texte[+vEl.textContent] || "" : "";
    else if (typ === "inlineStr") { const t = c.getElementsByTagName("t")[0]; v = t ? t.textContent : ""; }
    else if (typ === "str") v = vEl ? vEl.textContent : "";
    else if (typ === "e") v = vEl ? (FEHLERWERT[vEl.textContent] || vEl.textContent) : "#WERT!";
    else if (typ === "b") v = vEl ? vEl.textContent === "1" : false;
    else v = vEl && vEl.textContent !== "" ? parseFloat(vEl.textContent) : undefined;
    if (f || v !== undefined) zellen[a] = {f: f ? deutsch(f) : "", v, art: (formate || [])[+c.getAttribute("s") || 0] || "", fett: !!(fette || [])[+c.getAttribute("s") || 0]};
  }
  return zellen;
}

async function liesExcel(datei) {
  const bytes = new Uint8Array(await datei.arrayBuffer());
  let zip;
  try { zip = zipInhalt(bytes, FEHLER_DATEI); } catch (_e) { throw new Error(FEHLER_DATEI); }
  if (!zip.hat("xl/workbook.xml")) throw new Error(FEHLER_DATEI);
  const xml = t => new DOMParser().parseFromString(t, "application/xml");
  const mappe = xml(await zip.text("xl/workbook.xml"));
  const bez = zip.hat("xl/_rels/workbook.xml.rels") ? xml(await zip.text("xl/_rels/workbook.xml.rels")) : null;
  const ziel = {};
  if (bez) { const rs = bez.getElementsByTagName("Relationship"); for (let i = 0; i < rs.length; i++) ziel[rs[i].getAttribute("Id")] = rs[i].getAttribute("Target"); }
  let texte = [];
  if (zip.hat("xl/sharedStrings.xml")) {
    const sis = xml(await zip.text("xl/sharedStrings.xml")).getElementsByTagName("si");
    for (let i = 0; i < sis.length; i++) { const ts = sis[i].getElementsByTagName("t"); let s = ""; for (let k = 0; k < ts.length; k++) s += ts[k].textContent; texte.push(s); }
  }
  // Zahlenformate: Wie zeigt Excel die Zelle an? (Datum, Prozent, Währung) – wichtig, wenn eine Zahl als Datum erscheint
  const formate = [], fette = [];
  if (zip.hat("xl/styles.xml")) {
    const st = xml(await zip.text("xl/styles.xml")), roh = {};
    const schriften = st.getElementsByTagName("fonts")[0], fett = [];
    for (const f of (schriften ? schriften.getElementsByTagName("font") : [])) { const b = f.getElementsByTagName("b")[0]; fett.push(!!b && b.getAttribute("val") !== "0" && b.getAttribute("val") !== "false"); }
    const nf = st.getElementsByTagName("numFmt");
    for (let i = 0; i < nf.length; i++) roh[nf[i].getAttribute("numFmtId")] = (nf[i].getAttribute("formatCode") || "").toLowerCase();
    const xfs = st.getElementsByTagName("cellXfs")[0], liste = xfs ? xfs.getElementsByTagName("xf") : [];
    for (let i = 0; i < liste.length; i++) {
      const id = +liste[i].getAttribute("numFmtId") || 0, voll = roh[id] || "";
      fette.push(!!fett[+liste[i].getAttribute("fontId") || 0]);
      // für die Datumserkennung zählen nur die Platzhalter: Texte in Anführungszeichen und eckige Klammern weglassen
      const code = voll.replace(/"[^"]*"/g, "").replace(/\[[^\]]*\]/g, "");
      const eingebautesDatum = (id >= 14 && id <= 22) || (id >= 27 && id <= 36) || (id >= 45 && id <= 47) || (id >= 50 && id <= 58);
      formate.push(eingebautesDatum || /(^|[^a-z])(d{1,4}|m{3,5}|yy(yy)?)([^a-z]|$)/.test(code) ? "datum"
        : id === 9 || id === 10 || code.indexOf("%") >= 0 ? "prozent"
        : (id >= 5 && id <= 8) || id === 42 || id === 44 || /€|eur/.test(voll) ? "waehrung" : "");   // 37–41 und 43 („000“) zeigen kein Währungszeichen
    }
  }
  const blaetter = [], sheets = mappe.getElementsByTagName("sheet");
  for (let i = 0; i < sheets.length; i++) {
    const id = sheets[i].getAttribute("r:id") || sheets[i].getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id");
    let pfad = ziel[id] || ("worksheets/sheet" + (i + 1) + ".xml");
    pfad = pfad.charAt(0) === "/" ? pfad.slice(1) : "xl/" + pfad;
    blaetter.push({name: sheets[i].getAttribute("name") || "", zellen: zip.hat(pfad) ? blattLesen(await zip.text(pfad), texte, formate, fette) : {}});
  }
  if (!blaetter.length) throw new Error(FEHLER_DATEI);
  const z = (a, b) => (blaetter[b || 0] || {zellen: {}}).zellen[String(a).toUpperCase().replace(/\$/g, "")] || null;
  const glatt = s => String(s || "").replace(/\s/g, "").toUpperCase();
  const info = {
    name: datei.name, blaetter,
    zelle: z,
    formel: (a, b) => { const c = z(a, b); return c ? c.f : ""; },
    wert: (a, b) => { const c = z(a, b); return c ? c.v : undefined; },
    hatFormel: (a, b) => !!info.formel(a, b),
    istZahl: (a, b) => typeof info.wert(a, b) === "number",
    istText: (a, b) => typeof info.wert(a, b) === "string" && info.wert(a, b) !== "" && !info.hatFormel(a, b),
    istDatum: (a, b) => { const c = z(a, b); return !!c && c.art === "datum"; },
    istProzent: (a, b) => { const c = z(a, b); return !!c && c.art === "prozent"; },
    istWaehrung: (a, b) => { const c = z(a, b); return !!c && c.art === "waehrung"; },
    fett: (a, b) => { const c = z(a, b); return !!c && c.fett; },
    leer: (a, b) => { const c = z(a, b); return !c || (c.v === undefined || c.v === "") && !c.f; },
    bezuege: (a, b) => info.formel(a, b).match(/\$?[A-Z]{1,3}\$?\d+/g) || [],
    gleich: (a, zahl, tol, b) => typeof info.wert(a, b) === "number" && Math.abs(info.wert(a, b) - zahl) <= (tol == null ? 0.005 : tol),
    formelWie: (a, liste, b) => (liste || []).some(f => glatt(f) === info.formel(a, b))
  };
  return info;
}

Object.assign(M, {liesExcel, zipInhalt});
})();
