/* Export-Dateien der Lehrerseiten (CSV, Excel) um die Namen ergänzen.
 *
 * Der Server kennt nur Codes: In seinen Export-Dateien steht „Code 326“ in der Spalte „Vorname“, „Nachname“ ist leer.
 * Die Namensliste liegt nur in diesem Browser (localStorage „lf-nt9-namen“, siehe js/namen-sync.js). Deshalb trägt
 * der Browser die Namen ein, nachdem er die Datei geladen hat und bevor er sie speichert – kein Name geht zum Server.
 *
 *   GrumiExportNamen.datei(blob[, namen])   -> Promise<Blob>      namen: { "326": "Alea" }, sonst die Liste des Browsers
 *
 * Aus den Spalten „Nachname“ | „Vorname“ werden „Name“ | „Code“:
 *   Abgabe mit Code    Name aus der Liste (leer, wenn zum Code keiner eingetragen ist) | Code
 *   Abgabe ohne Code   „Vorname Nachname“ (ältere Abgaben, die noch mit Namen geschrieben wurden) | leer
 * CSV (Semikolon) und Excel (.xlsx, alle Tabellenblätter). Geht dabei etwas schief oder hat die Datei diese Spalten
 * nicht, bleibt sie, wie der Server sie geliefert hat.
 */
(function (global) {
  "use strict";

  function gespeichert() {
    try { return JSON.parse(global.localStorage.getItem("lf-nt9-namen") || "{}") || {}; } catch (_e) { return {}; }
  }
  // -> [Name, Code]
  function paar(nachname, vorname, namen) {
    var n = String(nachname || "").trim(), v = String(vorname || "").trim(), m = /^Code\s+(\S+)$/.exec(v);
    if (m && !n) return [String(namen[m[1]] || "").trim(), m[1]];
    return [[v, n].filter(Boolean).join(" "), ""];
  }

  /* ---------- CSV ---------- */
  // Zeilen aus Feldern; Felder dürfen in "…" stehen (mit "" für ein Anführungszeichen und mit Zeilenumbruch)
  function csvLesen(text) {
    var zeilen = [], zeile = [], feld = "", inText = false, c;
    for (var i = 0; i < text.length; i++) {
      c = text[i];
      if (inText) {
        if (c !== '"') feld += c;
        else if (text[i + 1] === '"') { feld += '"'; i++; }
        else inText = false;
      } else if (c === '"') inText = true;
      else if (c === ";") { zeile.push(feld); feld = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        zeile.push(feld); feld = ""; zeilen.push(zeile); zeile = [];
      } else feld += c;
    }
    if (feld !== "" || zeile.length) { zeile.push(feld); zeilen.push(zeile); }
    return zeilen;
  }
  function csvMitNamen(text, namen) {
    var zeilen = csvLesen(text);
    if (!zeilen.length) return text;
    var kopf = zeilen[0].map(function (s) { return s.trim().toLowerCase(); }), n = kopf.indexOf("nachname"), v = kopf.indexOf("vorname");
    if (n < 0 || v < 0) return text;
    zeilen[0][n] = "Name"; zeilen[0][v] = "Code";
    zeilen.slice(1).forEach(function (z) {
      if (z.length <= Math.max(n, v)) return;
      var p = paar(z[n], z[v], namen);
      // Text, der mit = + - @ beginnt, würde Excel als Formel lesen
      z[n] = /^[=+\-@]/.test(p[0]) ? "'" + p[0] : p[0]; z[v] = p[1];
    });
    return zeilen.map(function (z) { return z.map(function (f) { return '"' + String(f).replace(/"/g, '""') + '"'; }).join(";"); }).join("\r\n");
  }

  /* ---------- Excel (.xlsx = ZIP mit XML-Tabellenblättern, wie xlsx-mini.js auf dem Server sie schreibt) ---------- */
  function xmlText(s) {
    return String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function klartext(s) { return String(s).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&amp;/g, "&"); }
  function spaltenNr(buchstaben) { var n = 0; for (var i = 0; i < buchstaben.length; i++) n = n * 26 + buchstaben.charCodeAt(i) - 64; return n; }
  function blattMitNamen(xml, namen) {
    var kopf = /<row r="1"[^>]*>[\s\S]*?<\/row>/.exec(xml);
    if (!kopf) return xml;
    function spalte(titel) { var m = new RegExp('<c r="([A-Z]+)1"[^>]*><is><t[^>]*>' + titel + "</t></is></c>").exec(kopf[0]); return m ? m[1] : ""; }
    var N = spalte("Nachname"), V = spalte("Vorname");
    // Die neue Namenszelle kommt an die Stelle der alten: Das geht nur, wenn beide Spalten nebeneinanderstehen
    if (!N || !V || spaltenNr(V) !== spaltenNr(N) + 1) return xml;
    function zelle(sp) { return new RegExp('<c r="' + sp + '\\d+"[^>]*><is><t[^>]*>([^<]*)</t></is></c>'); }
    var reN = zelle(N), reV = zelle(V);
    return xml.replace(/<row r="(\d+)"[^>]*>[\s\S]*?<\/row>/g, function (zeile, nr) {
      if (nr === "1") return zeile.replace(">Nachname</t>", ">Name</t>").replace(">Vorname</t>", ">Code</t>");
      var mn = reN.exec(zeile), mv = reV.exec(zeile);
      if (!mn && !mv) return zeile;
      var p = paar(mn ? klartext(mn[1]) : "", mv ? klartext(mv[1]) : "", namen);
      function bau(sp, text) { return text ? '<c r="' + sp + nr + '" t="inlineStr"><is><t xml:space="preserve">' + xmlText(text) + "</t></is></c>" : ""; }
      var neu = bau(N, p[0]) + bau(V, p[1]), rest = mn && mv ? zeile.replace(mv[0], "") : zeile;
      return rest.replace((mn || mv)[0], function () { return neu; });
    });
  }

  function entpacken(bytes) {
    var dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), ende = bytes.length - 22;
    while (ende >= 0 && dv.getUint32(ende, true) !== 0x06054b50) ende--;
    if (ende < 0) throw new Error("kein ZIP");
    var anzahl = dv.getUint16(ende + 10, true), pos = dv.getUint32(ende + 16, true), dec = new global.TextDecoder("utf-8"), liste = [];
    for (var k = 0; k < anzahl; k++) {
      if (dv.getUint32(pos, true) !== 0x02014b50) throw new Error("ZIP beschädigt");
      var nameLaenge = dv.getUint16(pos + 28, true), lokal = dv.getUint32(pos + 42, true);
      var start = lokal + 30 + dv.getUint16(lokal + 26, true) + dv.getUint16(lokal + 28, true);
      liste.push({ name: dec.decode(bytes.subarray(pos + 46, pos + 46 + nameLaenge)), verfahren: dv.getUint16(pos + 10, true),
        roh: bytes.subarray(start, start + dv.getUint32(pos + 20, true)) });
      pos += 46 + nameLaenge + dv.getUint16(pos + 30, true) + dv.getUint16(pos + 32, true);
    }
    return Promise.all(liste.map(function (e) {
      if (e.verfahren === 0) return { name: e.name, data: e.roh };
      if (e.verfahren !== 8 || typeof global.DecompressionStream !== "function") throw new Error("ZIP-Verfahren nicht unterstützt");
      return new global.Response(new global.Blob([e.roh]).stream().pipeThrough(new global.DecompressionStream("deflate-raw"))).arrayBuffer()
        .then(function (b) { return { name: e.name, data: new Uint8Array(b) }; });
    }));
  }
  var CRC = (function () {
    var t = [], c;
    for (var n = 0; n < 256; n++) { c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(b) { var c = 0xffffffff; for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
  // ZIP ohne Verdichtung (die Tabellen sind klein) – liefert die Teile für new Blob([...])
  function packen(dateien) {
    var enc = new global.TextEncoder(), teile = [], verzeichnis = [], versatz = 0, tag = ((2020 - 1980) << 9) | (1 << 5) | 1;
    dateien.forEach(function (d) {
      var name = enc.encode(d.name), crc = crc32(d.data), kopf = new DataView(new ArrayBuffer(30)), z = new DataView(new ArrayBuffer(46));
      kopf.setUint32(0, 0x04034b50, true); kopf.setUint16(4, 20, true); kopf.setUint16(6, 0x0800, true); kopf.setUint16(12, tag, true);
      kopf.setUint32(14, crc, true); kopf.setUint32(18, d.data.length, true); kopf.setUint32(22, d.data.length, true); kopf.setUint16(26, name.length, true);
      z.setUint32(0, 0x02014b50, true); z.setUint16(4, 20, true); z.setUint16(6, 20, true); z.setUint16(8, 0x0800, true); z.setUint16(14, tag, true);
      z.setUint32(16, crc, true); z.setUint32(20, d.data.length, true); z.setUint32(24, d.data.length, true); z.setUint16(28, name.length, true); z.setUint32(42, versatz, true);
      teile.push(new Uint8Array(kopf.buffer), name, d.data); verzeichnis.push(new Uint8Array(z.buffer), name);
      versatz += 30 + name.length + d.data.length;
    });
    var ende = new DataView(new ArrayBuffer(22));
    ende.setUint32(0, 0x06054b50, true); ende.setUint16(8, dateien.length, true); ende.setUint16(10, dateien.length, true);
    ende.setUint32(12, verzeichnis.reduce(function (s, b) { return s + b.length; }, 0), true); ende.setUint32(16, versatz, true);
    return teile.concat(verzeichnis, [new Uint8Array(ende.buffer)]);
  }
  // -> Teile der neuen Datei oder null, wenn kein Blatt die Namensspalten hat
  function xlsxMitNamen(bytes, namen) {
    return entpacken(bytes).then(function (dateien) {
      var dec = new global.TextDecoder("utf-8"), enc = new global.TextEncoder(), geaendert = false;
      dateien.forEach(function (d) {
        if (!/^xl\/worksheets\/sheet\d+\.xml$/.test(d.name)) return;
        var alt = dec.decode(d.data), neu = blattMitNamen(alt, namen);
        if (neu !== alt) { d.data = enc.encode(neu); geaendert = true; }
      });
      return geaendert ? packen(dateien) : null;
    });
  }

  function datei(blob, namen) {
    namen = namen || gespeichert();
    if (!blob || typeof blob.arrayBuffer !== "function") return Promise.resolve(blob);
    return blob.arrayBuffer().then(function (puffer) {
      var bytes = new Uint8Array(puffer);
      if (bytes[0] === 0x50 && bytes[1] === 0x4b) {            // „PK“: ZIP, also Excel
        return xlsxMitNamen(bytes, namen).then(function (teile) {
          return teile ? new global.Blob(teile, { type: blob.type || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }) : blob;
        });
      }
      var text = new global.TextDecoder("utf-8").decode(bytes), neu = csvMitNamen(text, namen);
      // mit Kennung für UTF-8 am Anfang, sonst zeigt Excel die Umlaute falsch
      return neu === text ? blob : new global.Blob(["\uFEFF" + neu], { type: blob.type || "text/csv;charset=utf-8" });
    }).catch(function () { return blob; });
  }

  global.GrumiExportNamen = { datei: datei };
})(window);
