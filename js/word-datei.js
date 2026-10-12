/* Word-Datei (.docx) im Browser erzeugen – ohne Server und ohne fremde Bibliothek.
 * Gedacht für Blätter, die Kinder am Gerät weiterbearbeiten und dann drucken (zuerst: „Where I live“, Blatt für den
 * Vortrag in Englisch 7). Die Datei entsteht auf dem Gerät; nichts wird hochgeladen.
 *
 * Eine .docx-Datei ist ein ZIP mit ein paar XML-Dateien. Hier gibt es nur, was ein einfaches Blatt braucht:
 * Absätze, Schriftgröße, fett, Farbe, Linie unter einem Absatz, Tabulator rechts und eine Tabelle mit festen
 * Zeilenhöhen (damit z. B. die Faltlinie genau in der Blattmitte liegt). Maße: Schrift in Punkt, Abstände in Punkt,
 * Höhen und Ränder in Millimetern.
 *
 *   var W = GrumiWord;
 *   var blatt = W.tabelle([
 *     W.zeile(W.absatz(W.lauf("Titel", { fett: true, pt: 17 })) + W.absatz(W.lauf("Text …", { pt: 20 })), { hoehe: 130 }),
 *     W.zeile(W.absatz(W.lauf("Notizen", { fett: true })), { hoehe: 130 })
 *   ], W.breite({ links: 16, rechts: 16 }));
 *   W.laden(W.blob(blatt, { raender: { oben: 10, unten: 6, links: 16, rechts: 16 } }), "Blatt.docx");
 */
(function (global) {
  "use strict";
  var MM = 56.6929;                       // Twips je Millimeter (1 Punkt = 20 Twips)
  var A4 = { b: 11906, h: 16838 };        // A4 hoch in Twips
  var twips = function (mm) { return Math.round(mm * MM); };
  // Text für XML: Sonderzeichen maskieren, Steuerzeichen entfernen (die machen eine Word-Datei unlesbar)
  function xml(s) {
    return String(s == null ? "" : s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f￾￿]/g, "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------- Bausteine ---------- */
  // Schrift eines Textstücks: o = { fett, pt, farbe: "444444", sprache: "de-DE" }
  function schrift(o) {
    o = o || {};
    return "<w:rPr>" + (o.fett ? "<w:b/>" : "") + (o.farbe ? '<w:color w:val="' + xml(o.farbe) + '"/>' : "") +
      (o.pt ? '<w:sz w:val="' + Math.round(o.pt * 2) + '"/><w:szCs w:val="' + Math.round(o.pt * 2) + '"/>' : "") +
      (o.sprache ? '<w:lang w:val="' + xml(o.sprache) + '"/>' : "") + "</w:rPr>";
  }
  // Textstück; ein Zeilenumbruch im Text wird ein Umbruch in der Zeile
  function lauf(text, o) {
    var teile = String(text == null ? "" : text).split("\n").map(function (t) { return '<w:t xml:space="preserve">' + xml(t) + "</w:t>"; });
    return "<w:r>" + schrift(o) + teile.join("<w:br/>") + "</w:r>";
  }
  function tab() { return "<w:r><w:tab/></w:r>"; }
  // Absatz: inhalt = Textstücke (lauf, tab) hintereinander
  // o = { vor, nach (Punkt), zeile (Faktor, z. B. 1.3), mitte, tabRechts (Twips), linie: { pt, farbe, art, abstand, zwischen }, schrift }
  // o.linie: Linie unter dem Absatz. Folgen mehrere gleich gestaltete Absätze aufeinander (Schreibzeilen), zeichnet Word
  //          die Linie nur unter den letzten – mit zwischen: true bekommt jede Zeile ihre Linie.
  // o.schrift: Schrift der Absatzmarke – in einem leeren Absatz bestimmt sie, wie hoch die Zeile ist
  function absatz(inhalt, o) {
    o = o || {};
    var p = '<w:spacing w:before="' + Math.round((o.vor || 0) * 20) + '" w:after="' + Math.round((o.nach || 0) * 20) + '"' +
      (o.zeile ? ' w:line="' + Math.round(o.zeile * 240) + '" w:lineRule="auto"' : "") + "/>";
    var strich = o.linie ? ' w:val="' + (o.linie.art || "single") + '" w:sz="' + Math.round((o.linie.pt || 0.75) * 8) + '" w:space="' + (o.linie.abstand || 2) + '" w:color="' + (o.linie.farbe || "000000") + '"/>' : "";
    // Reihenfolge der Angaben wie im Format vorgeschrieben: Linie, Tabulatoren, Abstand, Ausrichtung, Schrift
    return "<w:p><w:pPr>" +
      (o.linie ? "<w:pBdr><w:bottom" + strich + (o.linie.zwischen ? "<w:between" + strich : "") + "</w:pBdr>" : "") +
      (o.tabRechts ? '<w:tabs><w:tab w:val="right" w:pos="' + Math.round(o.tabRechts) + '"/></w:tabs>' : "") +
      p + (o.mitte ? '<w:jc w:val="center"/>' : "") + (o.schrift ? schrift(o.schrift) : "") + "</w:pPr>" + (inhalt || "") + "</w:p>";
  }
  // Tabellenzeile mit einer Zelle über die ganze Breite
  // o = { hoehe (mm), genau: true = Höhe fest (sonst wächst die Zeile mit dem Inhalt), linieUnten: { pt, farbe, art }, unten: true = Inhalt am unteren Rand }
  function zeile(inhalt, o) {
    o = o || {};
    var rand = o.linieUnten ? '<w:tcBorders><w:bottom w:val="' + (o.linieUnten.art || "single") + '" w:sz="' + Math.round((o.linieUnten.pt || 0.75) * 8) + '" w:space="0" w:color="' + (o.linieUnten.farbe || "000000") + '"/></w:tcBorders>' : "";
    return "<w:tr><w:trPr><w:cantSplit/>" + (o.hoehe ? '<w:trHeight w:val="' + twips(o.hoehe) + '" w:hRule="' + (o.genau ? "exact" : "atLeast") + '"/>' : "") + "</w:trPr>" +
      '<w:tc><w:tcPr><w:tcW w:w="{B}" w:type="dxa"/>' + rand + (o.unten ? '<w:vAlign w:val="bottom"/>' : "") + "</w:tcPr>" + (inhalt || absatz("")) + "</w:tc></w:tr>";
  }
  // Tabelle ohne Rahmen und ohne Innenabstand: breiteTwips = Breite des Schreibbereichs (siehe breite())
  function tabelle(zeilen, breiteTwips) {
    var b = Math.round(breiteTwips);
    return '<w:tbl><w:tblPr><w:tblW w:w="' + b + '" w:type="dxa"/><w:tblLayout w:type="fixed"/>' +
      '<w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/></w:tblCellMar></w:tblPr>' +
      '<w:tblGrid><w:gridCol w:w="' + b + '"/></w:tblGrid>' + zeilen.join("").replace(/\{B\}/g, String(b)) + "</w:tbl>";
  }
  // Breite des Schreibbereichs in Twips bei diesen Seitenrändern (mm)
  function breite(raender) { return A4.b - twips((raender && raender.links) || 20) - twips((raender && raender.rechts) || 20); }

  /* ---------- Datei ---------- */
  var KOPF = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
  var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
  var REL = "http://schemas.openxmlformats.org/officeDocument/2006/relationships";
  // koerper: Absätze und Tabellen; o = { raender: { oben, unten, links, rechts } (mm), sprache: "en-GB", schrift: "Arial", pt: 11 }
  function dateien(koerper, o) {
    o = o || {};
    var r = o.raender || {}, m = function (v, vorgabe) { return twips(v === undefined ? vorgabe : v); };
    var schriftart = xml(o.schrift || "Arial"), groesse = Math.round((o.pt || 11) * 2), sprache = xml(o.sprache || "de-DE");
    // Nach einer Tabelle verlangt Word noch einen Absatz – so klein wie möglich, damit kein leeres zweites Blatt entsteht
    var schluss = '<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/><w:rPr><w:sz w:val="2"/><w:szCs w:val="2"/></w:rPr></w:pPr></w:p>';
    return [
      { name: "[Content_Types].xml", text: KOPF + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>' },
      { name: "_rels/.rels", text: KOPF + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="' + REL + '/officeDocument" Target="word/document.xml"/></Relationships>' },
      { name: "word/_rels/document.xml.rels", text: KOPF + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="' + REL + '/styles" Target="styles.xml"/></Relationships>' },
      { name: "word/styles.xml", text: KOPF + "<w:styles " + NS + "><w:docDefaults><w:rPrDefault><w:rPr>" +
        '<w:rFonts w:ascii="' + schriftart + '" w:hAnsi="' + schriftart + '" w:eastAsia="' + schriftart + '" w:cs="' + schriftart + '"/>' +
        '<w:sz w:val="' + groesse + '"/><w:szCs w:val="' + groesse + '"/><w:lang w:val="' + sprache + '" w:eastAsia="' + sprache + '" w:bidi="ar-SA"/></w:rPr></w:rPrDefault>' +
        '<w:pPrDefault><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>' +
        '<w:style w:type="paragraph" w:default="1" w:styleId="Standard"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>' },
      { name: "word/document.xml", text: KOPF + "<w:document " + NS + "><w:body>" + koerper + (/<\/w:tbl>$/.test(koerper) ? schluss : "") +
        '<w:sectPr><w:pgSz w:w="' + A4.b + '" w:h="' + A4.h + '"/><w:pgMar w:top="' + m(r.oben, 20) + '" w:right="' + m(r.rechts, 20) + '" w:bottom="' + m(r.unten, 20) + '" w:left="' + m(r.links, 20) +
        '" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr></w:body></w:document>' }
    ];
  }

  /* ---------- ZIP ohne Verdichtung (wie js/noten-excel.js – die Dateien sind klein) ---------- */
  var CRC = (function () {
    var t = [], c;
    for (var n = 0; n < 256; n++) { c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(b) { var c = 0xffffffff; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
  function packen(liste) {
    var enc = new global.TextEncoder(), teile = [], verzeichnis = [], versatz = 0, tag = ((2020 - 1980) << 9) | (1 << 5) | 1;
    liste.forEach(function (d) {
      var name = enc.encode(d.name), data = enc.encode(d.text), crc = crc32(data), kopf = new DataView(new ArrayBuffer(30)), z = new DataView(new ArrayBuffer(46));
      kopf.setUint32(0, 0x04034b50, true); kopf.setUint16(4, 20, true); kopf.setUint16(6, 0x0800, true); kopf.setUint16(12, tag, true);
      kopf.setUint32(14, crc, true); kopf.setUint32(18, data.length, true); kopf.setUint32(22, data.length, true); kopf.setUint16(26, name.length, true);
      z.setUint32(0, 0x02014b50, true); z.setUint16(4, 20, true); z.setUint16(6, 20, true); z.setUint16(8, 0x0800, true); z.setUint16(14, tag, true);
      z.setUint32(16, crc, true); z.setUint32(20, data.length, true); z.setUint32(24, data.length, true); z.setUint16(28, name.length, true); z.setUint32(42, versatz, true);
      teile.push(new Uint8Array(kopf.buffer), name, data); verzeichnis.push(new Uint8Array(z.buffer), name);
      versatz += 30 + name.length + data.length;
    });
    var ende = new DataView(new ArrayBuffer(22));
    ende.setUint32(0, 0x06054b50, true); ende.setUint16(8, liste.length, true); ende.setUint16(10, liste.length, true);
    ende.setUint32(12, verzeichnis.reduce(function (s, b) { return s + b.length; }, 0), true); ende.setUint32(16, versatz, true);
    return teile.concat(verzeichnis, [new Uint8Array(ende.buffer)]);
  }
  function blob(koerper, o) {
    return new global.Blob(packen(dateien(koerper, o)), { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  }
  function laden(datei, dateiname) {
    var doc = global.document, a = doc.createElement("a");
    a.href = global.URL.createObjectURL(datei);
    a.download = dateiname || "Blatt.docx";
    doc.body.appendChild(a); a.click(); a.remove();          // Firefox braucht den Link im Dokument
    global.setTimeout(function () { global.URL.revokeObjectURL(a.href); }, 4000);   // erst später freigeben, sonst bricht Safari ab
  }

  global.GrumiWord = { lauf: lauf, tab: tab, absatz: absatz, zeile: zeile, tabelle: tabelle, breite: breite, blob: blob, laden: laden, dateien: dateien, twips: twips, xml: xml };
})(window);
