/* Notenliste als Excel-Datei (.xlsx) – im Browser gebaut, weil die Namen nur hier liegen (Namensliste der Lehrkraft,
 * localStorage „lf-nt9-namen“). Kein Name geht dafür zum Server. Genutzt von der Verwaltung (Reiter „Noten“,
 * lernfortschritt.js) und von den Lehrerseiten der Proben (js/probe-rueckgabe-lehrer.js).
 *
 *   GrumiNotenExcel.probe({ fach, titel, inhalt, klasse, datum,
 *                           zeilen: [{ name, code, note, punkte, max, prozent, bemerkung, fehlt }] })      -> Blatt
 *   GrumiNotenExcel.uebersicht({ klasse, proben: [{ fach, titel, datum, inhalt, noten: { "<code>": note } }],
 *                                kinder: [{ name, code, bemerkung }] })                                    -> Blatt
 *   GrumiNotenExcel.mappe([Blatt, …])              -> Blob
 *   GrumiNotenExcel.laden([Blatt, …], "datei.xlsx")   baut die Mappe und speichert sie
 *
 * Blatt einer Probe: oben Thema, Module, Klasse, Datum, Abgaben und Schnitt; darunter Nr. | Name | Note | Punkte |
 * von | % | Bemerkung, nach Namen geordnet (Kinder ohne Namen am Ende); unten der Notenspiegel.
 * Noten farbig: 1 dunkelgrün, 2 hellgrün, 3 gelb, 4 dunkelorange, 5 rot, 6 dunkelrot. A4, auf eine Seitenbreite.
 */
(function (global) {
  "use strict";

  /* ---------- Formate (Reihenfolge = Nummer in styles.xml) ---------- */
  var FARBE = { 1: "FF1E7B34", 2: "FFC6EFCE", 3: "FFFFE74D", 4: "FFE8730C", 5: "FFE53935", 6: "FF8E0000" };
  var S = { std: 0, titel: 1, label: 2, kopf: 3, text: 4, mitte: 5, n1: 6, n2: 7, n3: 8, n4: 9, n5: 10, n6: 11, grau: 12, schnitt: 13,
    wert: 14, kopfLinks: 15, fett: 16, grauMitte: 17, umbruch: 18 };
  var RAND = '<border><left style="thin"><color rgb="FFB8C2CC"/></left><right style="thin"><color rgb="FFB8C2CC"/></right>' +
    '<top style="thin"><color rgb="FFB8C2CC"/></top><bottom style="thin"><color rgb="FFB8C2CC"/></bottom><diagonal/></border>';
  function schrift(extra) { return "<font>" + (extra || "") + '<sz val="11"/><name val="Calibri"/><family val="2"/></font>'; }
  function fuellung(rgb) { return '<fill><patternFill patternType="solid"><fgColor rgb="' + rgb + '"/><bgColor indexed="64"/></patternFill></fill>'; }
  function xf(font, fill, border, ausrichtung, zahl) {
    return '<xf numFmtId="' + (zahl || 0) + '" fontId="' + font + '" fillId="' + fill + '" borderId="' + border + '" xfId="0"' +
      (font ? ' applyFont="1"' : "") + (fill ? ' applyFill="1"' : "") + (border ? ' applyBorder="1"' : "") + (zahl ? ' applyNumberFormat="1"' : "") +
      (ausrichtung ? ' applyAlignment="1"><alignment ' + ausrichtung + "/></xf>" : "/>");
  }
  var MITTE = 'horizontal="center" vertical="center"', LINKS = 'horizontal="left" vertical="center"';
  var STYLES = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<fonts count="6">' + schrift() + schrift("<b/>") +
    '<font><b/><sz val="16"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><color rgb="FF6B7280"/><sz val="10"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><b/><sz val="12"/><name val="Calibri"/><family val="2"/></font></fonts>' +
    '<fills count="9"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>' +
    fuellung("FFDDEBF7") + [1, 2, 3, 4, 5, 6].map(function (n) { return fuellung(FARBE[n]); }).join("") + "</fills>" +
    '<borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border>' + RAND + "</borders>" +
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
    '<cellXfs count="19">' +
    xf(0, 0, 0) +                                           // std
    xf(2, 0, 0, 'vertical="center"') +                      // titel
    xf(1, 0, 0, 'vertical="top"') +                         // label
    xf(1, 2, 1, MITTE + ' wrapText="1"') +                  // kopf
    xf(0, 0, 1, LINKS) +                                    // text
    xf(0, 0, 1, MITTE) +                                    // mitte
    xf(3, 3, 1, MITTE) + xf(1, 4, 1, MITTE) + xf(1, 5, 1, MITTE) + xf(3, 6, 1, MITTE) + xf(3, 7, 1, MITTE) + xf(3, 8, 1, MITTE) +   // n1 … n6
    xf(4, 0, 0, 'vertical="center"') +                      // grau
    xf(1, 0, 1, MITTE, 2) +                                 // schnitt (0,00)
    xf(5, 0, 0, 'vertical="top" wrapText="1"') +            // wert
    xf(1, 2, 1, LINKS + ' wrapText="1"') +                  // kopfLinks
    xf(1, 0, 1, LINKS) +                                    // fett
    xf(4, 0, 1, MITTE) +                                    // grauMitte
    xf(0, 0, 0, 'vertical="top" wrapText="1"') +            // umbruch
    "</cellXfs>" +
    '<cellStyles count="1"><cellStyle name="Standard" xfId="0" builtinId="0"/></cellStyles></styleSheet>';

  /* ---------- Tabellenblatt ---------- */
  function xmlText(s) {
    return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function spalte(i) { var s = ""; for (var n = i + 1; n > 0; n = Math.floor((n - 1) / 26)) s = String.fromCharCode(65 + ((n - 1) % 26)) + s; return s; }
  // Zelle: null | Text | Zahl | { v, s }   (s = Name eines Formats aus S)
  function zelleXml(ref, z) {
    if (z == null || z === "") return "";
    var v = typeof z === "object" ? z.v : z, s = typeof z === "object" && z.s ? ' s="' + S[z.s] + '"' : "";
    if (v == null || v === "") return s ? '<c r="' + ref + '"' + s + "/>" : "";
    if (typeof v === "number" && isFinite(v)) return '<c r="' + ref + '"' + s + "><v>" + v + "</v></c>";
    return '<c r="' + ref + '" t="inlineStr"' + s + '><is><t xml:space="preserve">' + xmlText(v) + "</t></is></c>";
  }
  // blatt: { name, breiten: [..], zeilen: [[Zelle, …] | { hoehe, zellen }], verbunden: ["A1:G1"], fest: Zahl der festen Zeilen, quer }
  function blattXml(b) {
    var daten = b.zeilen.map(function (z, r) {
      var zellen = Array.isArray(z) ? z : z.zellen, hoehe = Array.isArray(z) ? 0 : z.hoehe;
      return '<row r="' + (r + 1) + '"' + (hoehe ? ' ht="' + hoehe + '" customHeight="1"' : "") + ">" +
        zellen.map(function (c, i) { return zelleXml(spalte(i) + (r + 1), c); }).join("") + "</row>";
    }).join("");
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      '<sheetPr><pageSetUpPr fitToPage="1"/></sheetPr>' +
      '<sheetViews><sheetView workbookViewId="0">' + (b.fest ? '<pane ySplit="' + b.fest + '" topLeftCell="A' + (b.fest + 1) + '" activePane="bottomLeft" state="frozen"/>' : "") + "</sheetView></sheetViews>" +
      '<sheetFormatPr defaultRowHeight="18" customHeight="1"/>' +
      "<cols>" + b.breiten.map(function (w, i) { return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; }).join("") + "</cols>" +
      "<sheetData>" + daten + "</sheetData>" +
      (b.verbunden && b.verbunden.length ? '<mergeCells count="' + b.verbunden.length + '">' + b.verbunden.map(function (m) { return '<mergeCell ref="' + m + '"/>'; }).join("") + "</mergeCells>" : "") +
      '<pageMargins left="0.5" right="0.5" top="0.6" bottom="0.6" header="0.3" footer="0.3"/>' +
      '<pageSetup paperSize="9" orientation="' + (b.quer ? "landscape" : "portrait") + '" fitToWidth="1" fitToHeight="0"/></worksheet>';
  }

  /* ---------- ZIP ohne Verdichtung (die Tabellen sind klein) ---------- */
  var CRC = (function () {
    var t = [], c;
    for (var n = 0; n < 256; n++) { c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(b) { var c = 0xffffffff; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
  function packen(dateien) {
    var enc = new global.TextEncoder(), teile = [], verzeichnis = [], versatz = 0, tag = ((2020 - 1980) << 9) | (1 << 5) | 1;
    dateien.forEach(function (d) {
      var name = enc.encode(d.name), data = enc.encode(d.text), crc = crc32(data), kopf = new DataView(new ArrayBuffer(30)), z = new DataView(new ArrayBuffer(46));
      kopf.setUint32(0, 0x04034b50, true); kopf.setUint16(4, 20, true); kopf.setUint16(6, 0x0800, true); kopf.setUint16(12, tag, true);
      kopf.setUint32(14, crc, true); kopf.setUint32(18, data.length, true); kopf.setUint32(22, data.length, true); kopf.setUint16(26, name.length, true);
      z.setUint32(0, 0x02014b50, true); z.setUint16(4, 20, true); z.setUint16(6, 20, true); z.setUint16(8, 0x0800, true); z.setUint16(14, tag, true);
      z.setUint32(16, crc, true); z.setUint32(20, data.length, true); z.setUint32(24, data.length, true); z.setUint16(28, name.length, true); z.setUint32(42, versatz, true);
      teile.push(new Uint8Array(kopf.buffer), name, data); verzeichnis.push(new Uint8Array(z.buffer), name);
      versatz += 30 + name.length + data.length;
    });
    var ende = new DataView(new ArrayBuffer(22));
    ende.setUint32(0, 0x06054b50, true); ende.setUint16(8, dateien.length, true); ende.setUint16(10, dateien.length, true);
    ende.setUint32(12, verzeichnis.reduce(function (s, b) { return s + b.length; }, 0), true); ende.setUint32(16, versatz, true);
    return teile.concat(verzeichnis, [new Uint8Array(ende.buffer)]);
  }

  // Blattname: höchstens 31 Zeichen, ohne : \ / ? * [ ], jeder nur einmal
  function blattName(name, schon) {
    var ganz = String(name || "Tabelle").replace(/[:\\/?*[\]]/g, " ").replace(/\s+/g, " ").replace(/^'+|'+$/g, "").trim() || "Tabelle", basis = ganz.slice(0, 31);
    // nicht mitten im Wort abschneiden
    if (ganz.length > 31 && ganz.charAt(31) !== " " && basis.lastIndexOf(" ") > 12) basis = basis.slice(0, basis.lastIndexOf(" "));
    basis = basis.replace(/[\s·–-]+$/, "");
    var n = basis, k = 2;
    while (schon[n.toLowerCase()]) n = basis.slice(0, 28).trim() + " " + k++;
    schon[n.toLowerCase()] = true;
    return n;
  }
  function mappe(blaetter) {
    var schon = {}, namen = blaetter.map(function (b) { return blattName(b.name, schon); });
    var KOPF = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
    var dateien = [
      { name: "[Content_Types].xml", text: KOPF + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
        blaetter.map(function (_b, i) { return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'; }).join("") + "</Types>" },
      { name: "_rels/.rels", text: KOPF + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="' + REL + '/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
      { name: "xl/workbook.xml", text: KOPF + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="' + REL + '"><bookViews><workbookView/></bookViews><sheets>' +
        namen.map(function (n, i) { return '<sheet name="' + xmlText(n) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>'; }).join("") + "</sheets></workbook>" },
      { name: "xl/_rels/workbook.xml.rels", text: KOPF + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
        blaetter.map(function (_b, i) { return '<Relationship Id="rId' + (i + 1) + '" Type="' + REL + '/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>'; }).join("") +
        '<Relationship Id="rId' + (blaetter.length + 1) + '" Type="' + REL + '/styles" Target="styles.xml"/></Relationships>' },
      { name: "xl/styles.xml", text: STYLES }
    ].concat(blaetter.map(function (b, i) { return { name: "xl/worksheets/sheet" + (i + 1) + ".xml", text: blattXml(b) }; }));
    return new global.Blob(packen(dateien), { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
  function laden(blaetter, dateiname) {
    var doc = global.document, a = doc.createElement("a");
    a.href = global.URL.createObjectURL(mappe(blaetter));
    a.download = dateiname || "Notenliste.xlsx";
    doc.body.appendChild(a); a.click(); a.remove();          // Firefox braucht den Link im Dokument
    global.setTimeout(function () { global.URL.revokeObjectURL(a.href); }, 4000);   // erst später freigeben, sonst bricht Safari ab
  }

  /* ---------- Inhalte ---------- */
  function datumText(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || ""));
    return m ? m[3] + "." + m[2] + "." + m[1] : String(iso || "");
  }
  function noteZahl(n) { n = Number(n); return n >= 1 && n <= 6 && Math.floor(n) === n ? n : 0; }
  function noteZelle(n) { var z = noteZahl(n); return z ? { v: z, s: "n" + z } : n == null || n === "" ? { v: "–", s: "grauMitte" } : { v: String(n), s: "mitte" }; }
  function schnitt(noten) {
    var z = noten.map(noteZahl).filter(Boolean);
    return z.length ? Math.round(z.reduce(function (a, b) { return a + b; }, 0) / z.length * 100) / 100 : null;
  }
  function zahl(v) { var n = Number(v); return v === "" || v == null || !isFinite(n) ? "" : n; }
  // nach Namen; Kinder ohne Namen am Ende nach Code
  function nachNamen(a, b) { return (a.name || "￿").localeCompare(b.name || "￿", "de") || String(a.code || "").localeCompare(String(b.code || "")); }
  var KOPF_ZEILE = function (texte) { return { hoehe: 22, zellen: texte.map(function (t) { return { v: t, s: "kopf" }; }) }; };

  function probe(p) {
    var liste = (p.zeilen || []).slice().sort(nachNamen), da = liste.filter(function (z) { return !z.fehlt; });
    var mitCode = liste.some(function (z) { return z.code; }), noten = da.map(function (z) { return z.note; }), mittel = schnitt(noten);
    var thema = [p.fach, p.titel].filter(Boolean).join(" · ");
    var Z = [], verbunden = [];
    function info(label, wert, hoehe) {
      Z.push({ hoehe: hoehe || 20, zellen: [{ v: label, s: "label" }, { v: wert, s: "wert" }] });
      verbunden.push("B" + Z.length + ":G" + Z.length);
    }
    Z.push({ hoehe: 28, zellen: [{ v: "Notenliste", s: "titel" }] }); verbunden.push("A1:G1");
    info("Thema", thema || "Probe");
    if (p.inhalt) info("Module", p.inhalt, 20 * Math.min(4, Math.ceil(String(p.inhalt).length / 70)));
    info("Klasse", p.klasse || "");
    info("Datum", datumText(p.datum));
    info("Abgaben", da.length + (liste.length > da.length ? " von " + liste.length : "") + (mittel == null ? "" : "   ·   Schnitt " + mittel.toFixed(2).replace(".", ",")));
    Z.push([]);
    Z.push(KOPF_ZEILE(["Nr.", "Name", "Note", "Punkte", "von", "%", "Bemerkung"]));
    var fest = Z.length;
    liste.forEach(function (z, i) {
      var name = z.name || (z.code ? "Code " + z.code : "");
      if (z.fehlt) { Z.push([{ v: i + 1, s: "mitte" }, { v: name, s: "text" }, { v: "–", s: "grauMitte" }, { s: "mitte" }, { s: "mitte" }, { s: "mitte" }, { v: z.bemerkung || "nicht abgegeben", s: "text" }]); return; }
      Z.push([{ v: i + 1, s: "mitte" }, { v: name, s: "fett" }, noteZelle(z.note), { v: zahl(z.punkte), s: "mitte" }, { v: zahl(z.max), s: "mitte" }, { v: zahl(z.prozent), s: "mitte" },
        { v: [z.name && z.code && mitCode ? "Code " + z.code : "", z.bemerkung || ""].filter(Boolean).join(" · "), s: "text" }]);
    });
    Z.push([]);
    Z.push([null, { v: "Notenspiegel", s: "label" }]);
    [1, 2, 3, 4, 5, 6].forEach(function (n) {
      Z.push([null, { v: "Note " + n, s: "text" }, { v: noten.filter(function (x) { return noteZahl(x) === n; }).length, s: "n" + n }]);
    });
    Z.push([null, { v: "Schnitt", s: "fett" }, mittel == null ? { v: "–", s: "grauMitte" } : { v: mittel, s: "schnitt" }]);
    return { name: [p.klasse, p.titel].filter(Boolean).join(" ") || "Probe", breiten: [6, 28, 9, 9, 7, 7, 34], zeilen: Z, verbunden: verbunden, fest: fest };
  }

  function uebersicht(u) {
    var proben = u.proben || [], kinder = (u.kinder || []).slice().sort(nachNamen), heute = new Date();
    var Z = [], breit = 2 + proben.length + 1, ende = spalte(Math.max(breit, 4) - 1);
    Z.push({ hoehe: 28, zellen: [{ v: "Noten · Klasse " + (u.klasse || ""), s: "titel" }] });
    Z.push([{ v: "Stand " + datumText(heute.getFullYear() + "-" + ("0" + (heute.getMonth() + 1)).slice(-2) + "-" + ("0" + heute.getDate()).slice(-2)) +
      " · " + kinder.length + (kinder.length === 1 ? " Kind" : " Kinder") + " · " + proben.length + (proben.length === 1 ? " Probe" : " Proben"), s: "grau" }]);
    Z.push([]);
    Z.push({ hoehe: 64, zellen: [{ v: "Name", s: "kopfLinks" }, { v: "Code", s: "kopf" }].concat(proben.map(function (p) {
      return { v: [p.titel, [p.fach, datumText(p.datum)].filter(Boolean).join(" · ")].filter(Boolean).join("\n"), s: "kopf" };
    }), [{ v: "Ø", s: "kopf" }]) });
    var fest = Z.length;
    kinder.forEach(function (k) {
      var noten = proben.map(function (p) { return p.noten ? p.noten[k.code] : null; }), mittel = schnitt(noten);
      Z.push([{ v: k.name || "", s: "fett" }, { v: String(k.code || ""), s: "mitte" }].concat(noten.map(noteZelle), [mittel == null ? { v: "–", s: "grauMitte" } : { v: mittel, s: "schnitt" }]));
    });
    Z.push([{ v: "Schnitt", s: "fett" }, { s: "mitte" }].concat(proben.map(function (p) {
      var m = schnitt(kinder.map(function (k) { return p.noten ? p.noten[k.code] : null; }));
      return m == null ? { v: "–", s: "grauMitte" } : { v: m, s: "schnitt" };
    }), [{ s: "mitte" }]));
    return { name: "Übersicht " + (u.klasse || ""), breiten: [26, 8].concat(proben.map(function () { return 17; }), [8]), zeilen: Z,
      verbunden: ["A1:" + ende + "1", "A2:" + ende + "2"], fest: fest, quer: proben.length > 4 };
  }

  global.GrumiNotenExcel = { probe: probe, uebersicht: uebersicht, mappe: mappe, laden: laden, FARBE: FARBE };
})(window);
