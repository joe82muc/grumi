/* Vorschau einer Probe für die Lehrkraft – in der Verwaltung (proben-verwalten.html, nt7-verwaltung.js), für alle Fächer.
 *
 * Zwei Fassungen derselben Probe:
 *   „So bekommt es das Kind“  Aufgaben mit Platz zum Ankreuzen und Schreiben (auch als Papierfassung druckbar)
 *   „Mit Lösungen“            Lösungsschlüssel und Erwartungshorizont je Aufgabe
 * Drucken oder als PDF speichern über den Druckdialog des Browsers („Als PDF speichern“, iPad: „In Dateien sichern“).
 *
 * Die Aufgaben kommen nur mit dem Lehrerpasswort vom Server und werden nirgends gespeichert. Der Server bringt jede
 * Probenart in dieselbe Form (backend/api/proben-vorschau.js, Route /api/proben/vorschau); dort steht auch die Liste
 * der Aufgabenarten. Welche Probenarten eine Vorschau haben, meldet der Server unter /api/health (probenVorschau).
 *
 *   GrumiProbeVorschau.zeigen({ api, password, modul, testId, fach, basis, labor, pfad })
 *     api    Adresse des Servers ("" = dieselbe Herkunft)
 *     modul  Name der Probenart wie in js/proben-module.js (z. B. "nt8", "vokabeltest")
 *     fach   Zeile über dem Titel, z. B. "Natur und Technik · Klasse 8M"
 *     basis  Ordner der Bilder zu den Aufgaben von der aufrufenden Seite aus, z. B. "8M/NT/"
 *     labor  Ordner mit labor.js und darstellung.js (nur NT 8: Diagramme, Messwerttabellen, Versuche)
 *     pfad   eigene Vorschau-Route der Probenart (nur solange der Server die gemeinsame Route noch nicht hat)
 *
 * Auswahlantworten, Zuordnungen, Reihenfolgen und Auswahlwörter werden für das Blatt fest gemischt (bei jedem Öffnen
 * gleich) – die Lösungsfassung zeigt dieselbe Reihenfolge und nennt den passenden Schlüssel.
 */
(function (global) {
  "use strict";
  var doc = document, BUCHSTABEN = "ABCDEFGHIJKL";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var komma = function (n) { return String(n).replace(".", ","); };
  var punktwort = function (n) { return n + (n === 1 ? " Punkt" : " Punkte"); };
  var KOMPETENZ = { fachwissen: "Fachwissen", erkenntnis: "Erkenntnisse gewinnen", kommunikation: "Kommunizieren", bewertung: "Bewerten" };
  var LANG = { vokabeln: 1, schreiben: 1, datei: 1 };   // Aufgaben, die über mehrere Seiten gehen dürfen

  var V = "#probe-vorschau ";
  var CSS = "#probe-vorschau{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9000;background:#eef2f6;overflow:auto;-webkit-overflow-scrolling:touch;color:#15212b;text-align:left}" +
    V + "*{box-sizing:border-box}" +
    V + ".pv-leiste{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 14px;background:#fff;border-bottom:1px solid #d8e2ea;box-shadow:0 2px 10px rgba(0,0,0,.06)}" +
    V + ".pv-leiste > b{margin-right:auto;font-size:1.02rem}" +
    V + ".pv-wahl{display:inline-flex;border:2px solid #0d77c2;border-radius:10px;overflow:hidden}" +
    V + ".pv-wahl button{border:0;background:#fff;color:#0d77c2;font:inherit;font-weight:800;font-size:.9rem;padding:8px 12px;min-height:44px;cursor:pointer}" +
    V + ".pv-wahl button.aktiv{background:#0d77c2;color:#fff}" +
    V + ".pv-knopf{border:2px solid #b9cbd8;background:#fff;color:#15212b;border-radius:10px;font:inherit;font-weight:800;font-size:.9rem;padding:8px 12px;min-height:44px;cursor:pointer}" +
    V + ".pv-knopf.haupt{background:#1b8a4b;border-color:#1b8a4b;color:#fff}" +
    V + ".pv-hinweis{max-width:820px;margin:10px auto 0;padding:0 14px;font-size:.88rem;color:#44525d}" +
    V + ".pv-blatt{max-width:820px;margin:12px auto 30px;background:#fff;border:1px solid #d8e2ea;border-radius:8px;padding:26px 30px;box-shadow:0 6px 24px rgba(0,0,0,.08);font-size:1rem;line-height:1.45}" +
    V + ".pv-meldung{padding:12px 14px;border-radius:10px;background:#fdecea;border:1px solid #f1b5ae;font-weight:700}" +
    V + ".pv-kopf{border-bottom:2px solid #15212b;padding-bottom:10px;margin-bottom:4px}" +
    V + ".pv-kopf h1{font-size:1.35rem;line-height:1.25;margin:2px 0 8px}" +
    V + ".pv-fach{font-size:.78rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#44525d}" +
    V + ".pv-zeile{display:flex;flex-wrap:wrap;gap:6px 22px;margin:8px 0 0;font-size:.95rem;align-items:flex-end}" +
    V + ".pv-strich{display:inline-block;border-bottom:1px solid #15212b;min-width:150px;height:1.3em;vertical-align:bottom}" +
    V + ".pv-strich.kurz{min-width:64px}" +
    V + ".pv-allgemein{margin:10px 0 0;padding:8px 12px;border:1px solid #9aa9b5;border-radius:8px;font-size:.93rem}" +
    V + ".pv-abschnitt{margin:18px 0 0;padding:6px 10px;background:#eef4f9;border-left:4px solid #0d77c2;font-weight:800;font-size:.98rem;break-after:avoid;page-break-after:avoid}" +
    V + ".pv-aufgabe{padding:14px 0;border-bottom:1px solid #d8e2ea;break-inside:avoid;page-break-inside:avoid}" +
    V + ".pv-aufgabe.pv-lang{break-inside:auto;page-break-inside:auto}" +
    V + ".pv-aufgabe h2{font-size:1.02rem;margin:0 0 4px;display:flex;flex-wrap:wrap;gap:2px 10px;align-items:baseline;break-after:avoid;page-break-after:avoid}" +
    V + ".pv-p{margin-left:auto;font-size:.86rem;font-weight:800;white-space:nowrap}" +
    V + ".pv-marken{font-size:.78rem;color:#566674;font-weight:700}" +
    V + ".pv-frage{margin:4px 0 8px;white-space:pre-line}" +
    V + ".pv-anw{margin:4px 0;font-size:.86rem;color:#44525d;font-style:italic}" +
    V + ".pv-hilfe{margin:6px 0;font-size:.9rem;color:#33424e}" +
    V + ".pv-material{margin:8px 0;padding:10px 12px;border:1px solid #9aa9b5;border-radius:8px;background:#fafcfe;white-space:pre-line}" +
    V + ".pv-bild{margin:8px 0}" + V + ".pv-bild img{max-width:100%;max-height:340px;height:auto;border:1px solid #d8e2ea;border-radius:8px;background:#fff}" +
    V + ".pv-kreuz{list-style:none;margin:4px 0;padding:0}" + V + ".pv-kreuz li{display:flex;gap:10px;align-items:flex-start;padding:4px 0}" +
    V + ".pv-box{flex:none;display:inline-block;width:18px;height:18px;border:1.6px solid #15212b;border-radius:3px;margin-top:2px;background:#fff;text-align:center;font-weight:800;line-height:15px;font-size:15px}" +
    V + ".pv-box.gross{width:28px;height:28px;margin-top:0}" +
    V + ".pv-tab{border-collapse:collapse;width:100%;margin:6px 0}" + V + ".pv-tab th," + V + ".pv-tab td{border:1px solid #9aa9b5;padding:6px 8px;text-align:left;font-size:.95rem;overflow-wrap:anywhere;vertical-align:top}" +
    V + ".pv-tab th{background:#eef4f9;font-size:.82rem}" + V + ".pv-tab .m{text-align:center;width:5.2em;vertical-align:middle}" + V + ".pv-tab th.m{width:var(--pvb,5.2em);overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}" + V + ".pv-tab .p{text-align:center;width:4.6em;white-space:nowrap}" +
    V + ".pv-zuordnen{display:grid;grid-template-columns:1fr 1.35fr;gap:10px 26px;margin:6px 0}" +
    V + ".pv-zuordnen ol{margin:0;padding:0;list-style:none}" + V + ".pv-zuordnen li{display:flex;gap:10px;align-items:center;padding:4px 0}" +
    V + ".pv-zuordnen .bst{flex:none;font-weight:800;width:1.4em}" +
    V + ".pv-luecke{display:inline-block;min-width:112px;border-bottom:1px solid #15212b;margin:0 3px;font-size:.72rem;color:#566674;line-height:1.9}" +
    V + ".pv-wahlwoerter{margin:6px 0 0;padding:6px 10px;border:1px dashed #9aa9b5;border-radius:8px;font-size:.92rem}" +
    V + ".pv-linie{border-bottom:1px solid #8795a1;height:2.15em}" +
    V + ".pv-feld{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:flex-end;padding:6px 0}" + V + ".pv-feld .pv-strich{flex:1 1 180px}" +
    V + ".pv-komma{margin:10px 0;font-size:1.06rem;word-spacing:.5em;line-height:2}" + V + ".pv-k{color:#c0392b;font-weight:900;font-size:1.25em}" +
    V + ".pv-vok{column-count:2;column-gap:30px;margin:8px 0}" +
    V + ".pv-vok > div{display:flex;gap:8px;align-items:flex-end;break-inside:avoid;page-break-inside:avoid;padding:6px 0}" +
    V + ".pv-vok .nr{flex:none;width:1.7em;color:#566674;font-size:.82rem;text-align:right}" + V + ".pv-vok .w{flex:0 1 46%}" + V + ".pv-vok small{display:block;color:#566674;font-size:.78rem}" +
    V + ".pv-vok .pv-strich{flex:1;min-width:60px}" + V + ".pv-vok b{flex:1}" +
    V + ".pv-pre{margin:8px 0;padding:10px 12px;border:1px solid #9aa9b5;border-radius:8px;background:#fafcfe;font-family:Consolas,Menlo,monospace;font-size:.8rem;line-height:1.4;white-space:pre-wrap;overflow-wrap:anywhere}" +
    V + ".pv-loesung{margin-top:6px;padding:8px 12px;border-radius:8px;background:#f4fbf6;border:1px solid #bfe0cb}" +
    V + ".pv-loesung ul," + V + ".pv-loesung ol{margin:4px 0;padding-left:22px}" + V + ".pv-loesung li.ok{font-weight:800}" + V + ".pv-loesung p{margin:4px 0}" + V + ".pv-loesung small{color:#44525d}" +
    V + ".pv-labor{max-width:420px;margin:8px 0}" +
    V + ".pv-text{margin:14px 0 6px;padding:12px 14px;border:1.5px solid #15212b;border-radius:8px}" + V + ".pv-text h2{font-size:1.08rem;margin:2px 0 8px}" +
    V + ".pv-z{display:grid;grid-template-columns:2.1em 1fr;gap:0 8px;line-height:1.5}" + V + ".pv-z.neu{margin-top:.55em}" + V + ".pv-z:first-child{margin-top:0}" +
    V + ".pv-z .n{font-size:.72rem;color:#566674;text-align:right;padding-top:.25em}" + V + ".pv-zk{margin:.7em 0 .1em 2.6em;font-weight:800}" +
    V + ".pv-quelle{margin:8px 0 0;font-size:.74rem;color:#566674}" +
    V + ".pv-balken{display:grid;grid-template-columns:minmax(90px,30%) 1fr auto;gap:5px 10px;align-items:center;margin:8px 0;font-size:.93rem}" +
    V + ".pv-balken i{display:block;height:16px;background:#7fb4e0;border:1px solid #15212b;-webkit-print-color-adjust:exact;print-color-adjust:exact}" +
    V + ".pv-fuss{margin-top:12px;font-size:.76rem;color:#566674;text-align:right}" +
    // stehende Bilder des NT-Labors (Auszug aus 8M/NT/nt8.css – die Verwaltung lädt dieses Stilblatt nicht)
    V + ".lab-statisch{border:1px solid #9aa9b5;border-radius:10px;overflow:hidden;max-width:420px;background:#fff}" +
    V + ".lab-statisch svg{display:block;width:100%;height:auto;background:#f7fbfe}" +
    V + ".lab-statisch p{margin:0;padding:6px 10px;font-size:.88rem;border-top:1px solid #d8e2ea}" +
    V + ".lab-ctrl," + V + ".lab-teile{display:none}" +
    "body.pv-offen{overflow:hidden}" +
    "@media (max-width:640px){" + V + ".pv-blatt{padding:16px 14px;border-radius:0;margin:8px 0 24px;border-left:0;border-right:0}" + V + ".pv-zuordnen{grid-template-columns:1fr}" + V + ".pv-vok{column-count:1}" +
    V + ".pv-tab{table-layout:fixed}" + V + ".pv-tab th.m{width:3.9em;font-size:.68rem;padding:4px 2px;overflow-wrap:anywhere}" + V + ".pv-tab td.m{padding:6px 2px}" + V + ".pv-tab td," + V + ".pv-tab th{padding:5px 5px}}" +
    "@media print{body.pv-offen{overflow:visible!important}body.pv-offen > *:not(#probe-vorschau){display:none!important}" +
    "#probe-vorschau{position:static!important;overflow:visible!important;background:#fff!important}" +
    V + ".pv-leiste," + V + ".pv-hinweis{display:none!important}" +
    V + ".pv-blatt{max-width:none;margin:0;border:0;border-radius:0;box-shadow:none;padding:0;font-size:11.5pt}" +
    V + ".pv-loesung," + V + ".pv-material," + V + ".pv-pre{background:#fff}" + V + ".pv-labor{max-width:105mm}" + V + ".pv-bild img{max-height:75mm}}";

  /* ---------- feste Zufallsreihenfolge ---------- */
  function saat(text) { var h = 2166136261; for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function zufall(s) { return function () { s = s + 0x6D2B79F5 | 0; var t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  // Plätze 0 … n-1 fest gemischt; bei mehr als einem Eintrag nie die ursprüngliche Reihenfolge
  function mische(n, schluessel) {
    var r = zufall(saat(schluessel)), idx = [], i, j, t, versuch;
    for (i = 0; i < n; i++) idx.push(i);
    for (versuch = 0; versuch < 6; versuch++) {
      for (i = n - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
      if (n < 2 || idx.some(function (v, p) { return v !== p; })) break;
    }
    return idx;
  }

  function laden(dateien, fertig) {
    (function naechste(i) {
      if (i >= dateien.length) return fertig();
      var s = doc.createElement("script"); s.src = dateien[i]; s.onload = s.onerror = function () { naechste(i + 1); }; doc.head.appendChild(s);
    })(0);
  }
  var linien = function (n) { var h = ""; for (var i = 0; i < n; i++) h += '<div class="pv-linie"></div>'; return h; };
  var liste = function (punkte, ordnen) { return "<" + (ordnen ? "ol" : "ul") + ">" + punkte.join("") + "</" + (ordnen ? "ol" : "ul") + ">"; };
  var auch = function (alle) { return alle.length > 1 ? " <small>(auch: " + alle.slice(1, 5).map(esc).join(" · ") + (alle.length > 5 ? " …" : "") + ")</small>" : ""; };

  // Tabelle zum Ankreuzen: je Zeile ein Text, je Spalte ein Kästchen. mitLoesung setzt das Kreuz in die richtige Spalte.
  // Sind die Spalten ganze Sätze, passt keine Tabelle: dann stehen sie mit Buchstaben daneben (wie bei einer Zuordnung).
  function kreuztabelle(spalten, zeilen, mitLoesung, ohneAnweisung) {
    var lang = Math.max.apply(null, spalten.map(function (s) { return String(s).length; }).concat([0]));
    if (lang > 30 || spalten.length > 5) {
      if (mitLoesung) return liste(zeilen.map(function (z) { return "<li>" + esc(z[0]) + " → <b>" + BUCHSTABEN[z[1]] + "</b> " + esc(spalten[z[1]]) + "</li>"; }));
      return '<p class="pv-anw">Was passt? Schreibe den Buchstaben in das Kästchen. Ein Buchstabe kann mehrmals passen.</p><div class="pv-zuordnen"><ol>' +
        zeilen.map(function (z) { return '<li><span class="pv-box gross"></span><span>' + esc(z[0]) + "</span></li>"; }).join("") + "</ol><ol>" +
        spalten.map(function (s, k) { return '<li><span class="bst">' + BUCHSTABEN[k] + "</span><span>" + esc(s) + "</span></li>"; }).join("") + "</ol></div>";
    }
    var breite = Math.max(5.2, Math.min(11, lang * 0.62 + 1.4)).toFixed(1);
    return (mitLoesung || ohneAnweisung ? "" : '<p class="pv-anw">Kreuze in jeder Zeile an, was passt.</p>') +
      '<table class="pv-tab"><thead><tr><th></th>' + spalten.map(function (s) { return '<th class="m" lang="de" style="--pvb:' + breite + 'em">' + esc(s) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      zeilen.map(function (z) { return "<tr><td>" + esc(z[0]) + "</td>" + spalten.map(function (_s, k) { return '<td class="m"><span class="pv-box">' + (mitLoesung && z[1] === k ? "✗" : "") + "</span></td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
  }
  // Zuordnung, bei der rechts dieselbe Antwort mehrfach vorkommt (z. B. „getrennt“ / „zusammen“): als Tabelle zum Ankreuzen
  function alsKreuz(a) {
    var rechts = []; (a.pairs || []).forEach(function (p) { if (rechts.indexOf(p[1]) < 0) rechts.push(p[1]); });
    if (rechts.length >= (a.pairs || []).length || rechts.length > 5) return null;
    return { spalten: rechts, zeilen: a.pairs.map(function (p) { return [p[0], rechts.indexOf(p[1])]; }) };
  }
  var ohneKommas = function (satz) { return String(satz).replace(/,(?=\s|$)/g, ""); };
  var bereich = function (b) { return b[0] === b[1] ? "Z. " + b[0] : "Z. " + b[0] + "–" + b[1]; };

  /* ---------- Fassung für das Kind: Platz zum Ankreuzen und Schreiben ---------- */
  function feld(a, id) {
    var r, k;
    if (a.type === "choice" || a.type === "multi") {
      r = mische((a.options || []).length, id + "|c");
      return '<p class="pv-anw">' + (a.type === "multi" ? "Kreuze alle richtigen Antworten an." : "Kreuze die richtige Antwort an.") + '</p><ul class="pv-kreuz">' +
        r.map(function (i) { return '<li><span class="pv-box"></span><span>' + esc(a.options[i]) + "</span></li>"; }).join("") + "</ul>";
    }
    if (a.type === "tf") return kreuztabelle(["richtig", "falsch"], (a.statements || []).map(function (s) { return [s[0], s[1] ? 0 : 1]; }), false, true);
    if (a.type === "kreuz") return kreuztabelle(a.spalten || [], a.zeilen || [], false);
    if (a.type === "match") {
      k = alsKreuz(a);
      if (k) return kreuztabelle(k.spalten, k.zeilen, false);
      var paare = a.pairs || []; r = mische(paare.length, id + "|m");
      return '<p class="pv-anw">Was gehört zusammen? Schreibe den passenden Buchstaben in das Kästchen.</p><div class="pv-zuordnen"><ol>' +
        paare.map(function (p) { return '<li><span class="pv-box gross"></span><span>' + esc(p[0]) + "</span></li>"; }).join("") + "</ol><ol>" +
        r.map(function (i, n) { return '<li><span class="bst">' + BUCHSTABEN[n] + "</span><span>" + esc(paare[i][1]) + "</span></li>"; }).join("") + "</ol></div>";
    }
    if (a.type === "order") {
      var schritte = a.steps || []; r = mische(schritte.length, id + "|o");
      return '<p class="pv-anw">Nummeriere in der richtigen Reihenfolge (1, 2, 3 …).</p><ul class="pv-kreuz">' +
        r.map(function (i) { return '<li><span class="pv-box gross"></span><span>' + esc(schritte[i]) + "</span></li>"; }).join("") + "</ul>";
    }
    if (a.type === "gaps") {
      var g = a.gaps || [];
      return '<p class="pv-frage">' + esc(a.text).replace(/\{(\d+)\}/g, function (_m, n) { return '<span class="pv-luecke">(' + n + ")</span>"; }) + "</p>" +
        '<div class="pv-wahlwoerter"><b>Zur Auswahl:</b> ' + g.map(function (w, n) { var q = mische(w.length, id + "|g" + n); return "(" + (n + 1) + ") " + q.map(function (i) { return esc(w[i]); }).join(" · "); }).join(" &nbsp; ") + "</div>";
    }
    if (a.type === "luecke") return '<p class="pv-frage">' + esc(a.prompt).replace(/_{3,}/g, '<span class="pv-luecke">&nbsp;</span>') + "</p>";
    if (a.type === "number") {
      return '<p class="pv-anw">Platz für deine Rechnung oder Überlegung:</p>' + linien(2) + '<p style="margin:12px 0 0"><b>Ergebnis:</b> <span class="pv-strich"></span> ' +
        (Array.isArray(a.units) && a.units.length ? 'Einheit: <span class="pv-strich kurz"></span> <small>(zur Auswahl: ' + esc(a.units.join(" · ")) + ")</small>" : esc(a.unit || "")) + "</p>";
    }
    if (a.type === "labor") return '<p class="pv-anw">Am Gerät bauen die Kinder diesen Versuch im NT-Labor selbst zusammen und stellen ihn ein. Auf Papier: Beschreibe, wie du den Versuch aufbaust und einstellst.</p>' + linien(4);
    if (a.type === "zeile") return '<p style="margin:10px 0 0"><b>Zeile(n):</b> von <span class="pv-strich kurz"></span> bis <span class="pv-strich kurz"></span></p>';
    if (a.type === "felder") return (a.felder || []).map(function (f) { return '<div class="pv-feld"><span>' + esc(f.label) + '</span><span class="pv-strich"></span></div>'; }).join("");
    if (a.type === "komma") return '<p class="pv-anw">Setze die Kommas mit einem deutlichen Strich.</p>' + (a.saetze || []).map(function (s) { return '<p class="pv-komma">' + esc(ohneKommas(s)) + "</p>"; }).join("");
    if (a.type === "vokabeln") {
      return '<div class="pv-vok">' + (a.zeilen || []).map(function (z, n) { return '<div><span class="nr">' + (n + 1) + '</span><span class="w">' + esc(z.prompt) + (z.hint ? "<small>" + esc(z.hint) + "</small>" : "") + '</span><span class="pv-strich"></span></div>'; }).join("") + "</div>";
    }
    if (a.type === "schreiben") {
      return (Array.isArray(a.plan) && a.plan.length ? '<p style="margin:10px 0 2px"><b>Plane zuerst:</b></p>' + a.plan.map(function (f) { return '<div style="margin:6px 0"><span>' + esc(f.label) + (f.hilfe ? ' <small style="color:#566674">(' + esc(f.hilfe) + ")</small>" : "") + "</span>" + linien(2) + "</div>"; }).join("") + '<p style="margin:14px 0 2px"><b>Dein Text:</b></p>' : "") +
        (a.minWoerter ? '<p class="pv-anw">Schreibe mindestens ' + a.minWoerter + " Wörter.</p>" : "") + linien(a.minWoerter >= 100 ? 26 : 20);
    }
    if (a.type === "datei") return '<p class="pv-anw">Diese Aufgabe lösen die Kinder am Gerät und geben ihre Datei dort ab.</p>';
    return linien(a.lines ? Math.max(2, Math.min(12, a.lines + 1)) : Math.max(4, Math.min(10, 2 + (a.points || 1) * 2)));
  }

  /* ---------- Fassung mit Lösungen ---------- */
  function loesung(a, id) {
    var r, k;
    if (a.type === "choice" || a.type === "multi") {
      r = mische((a.options || []).length, id + "|c");
      var richtig = function (i) { return a.type === "multi" ? (a.answers || []).indexOf(i) >= 0 : i === a.answer; };
      return liste(r.map(function (i) { return '<li class="' + (richtig(i) ? "ok" : "") + '">' + (richtig(i) ? "✅ " : "") + esc(a.options[i]) + "</li>"; })) + (a.type === "multi" ? "<p>Für jedes falsche Kreuz wird 1 Punkt abgezogen.</p>" : "");
    }
    if (a.type === "tf") return kreuztabelle(["richtig", "falsch"], (a.statements || []).map(function (s) { return [s[0], s[1] ? 0 : 1]; }), true);
    if (a.type === "kreuz") return kreuztabelle(a.spalten || [], a.zeilen || [], true);
    if (a.type === "match") {
      k = alsKreuz(a);
      if (k) return kreuztabelle(k.spalten, k.zeilen, true);
      var paare = a.pairs || []; r = mische(paare.length, id + "|m");
      return liste(paare.map(function (p, i) { return "<li>" + esc(p[0]) + " → <b>" + BUCHSTABEN[r.indexOf(i)] + "</b> " + esc(p[1]) + "</li>"; })) +
        "<p>Auf dem Blatt des Kindes von oben nach unten: <b>" + paare.map(function (_p, i) { return BUCHSTABEN[r.indexOf(i)]; }).join(" – ") + "</b></p>";
    }
    if (a.type === "order") {
      var schritte = a.steps || []; r = mische(schritte.length, id + "|o");
      return liste(schritte.map(function (s) { return "<li>" + esc(s) + "</li>"; }), true) +
        "<p>Auf dem Blatt des Kindes stehen die Schritte gemischt; richtige Nummern von oben nach unten: <b>" + r.map(function (i) { return i + 1; }).join(" – ") + "</b></p>";
    }
    if (a.type === "gaps") return "<p>" + esc(a.text).replace(/\{(\d+)\}/g, function (_m, n) { var g = (a.gaps || [])[n - 1] || []; return "<b>[" + esc(g[0]) + "]</b>"; }) + "</p>";
    if (a.type === "luecke") { var n = 0; return "<p>" + esc(a.prompt).replace(/_{3,}/g, function () { var s = (a.solutions || [])[n++] || []; return "<b>[" + esc(s[0]) + "]</b>" + auch(s); }) + "</p>"; }
    if (a.type === "number") return "<p><b>" + esc(komma(a.answer)) + " " + esc(a.unit || "") + "</b>" + (a.tolerance ? " (± " + esc(komma(a.tolerance)) + ")" : "") + (Array.isArray(a.units) && a.units.length ? " · die Einheit zählt als eigener Punkt" : "") + "</p>";
    if (a.type === "labor") return "<p>Am Endzustand im NT-Labor wird geprüft (je 1 Punkt):</p>" + liste((a.regeln || []).map(function (x) { return "<li>" + esc(x.text) + "</li>"; }));
    if (a.type === "zeile") return "<p><b>" + (a.bereiche || []).map(bereich).join(" oder ") + "</b></p>";
    if (a.type === "felder") return liste((a.felder || []).map(function (f) { return "<li>" + esc(f.label) + " <b>" + esc(f.loesungen[0]) + "</b>" + auch(f.loesungen) + "</li>"; })) + (a.menge ? "<p>Die Reihenfolge der Antworten ist egal.</p>" : "");
    if (a.type === "komma") return (a.saetze || []).map(function (s) { return '<p style="font-size:1.04rem">' + esc(s).replace(/,/g, '<b class="pv-k">,</b>') + "</p>"; }).join("");
    if (a.type === "vokabeln") {
      return '<div class="pv-vok">' + (a.zeilen || []).map(function (z, i) { return '<div><span class="nr">' + (i + 1) + '</span><span class="w">' + esc(z.prompt) + "</span><b>" + z.solutions.map(esc).join(" / ") + "</b></div>"; }).join("") + "</div>";
    }
    if (a.type === "schreiben") {
      return '<table class="pv-tab"><thead><tr><th style="width:26%">Kriterium</th><th>Erwartung</th><th class="p">Punkte</th></tr></thead><tbody>' +
        (a.raster || []).map(function (x) { return "<tr><td><b>" + esc(x.name) + "</b></td><td>" + esc(x.text || "") + '</td><td class="p">' + x.punkte + "</td></tr>"; }).join("") + "</tbody></table>" +
        (a.minWoerter ? "<p>Verlangt sind mindestens " + a.minWoerter + " Wörter.</p>" : "");
    }
    if (a.type === "datei") return "<p>Ein Prüfprogramm prüft die abgegebene Datei:</p>" + liste((a.checks || []).map(function (c) { return "<li>" + esc(c.text) + " <small>(" + punktwort(c.punkte) + ")</small></li>"; })) +
      (a.kiPunkte ? "<p>Dazu bis zu " + punktwort(a.kiPunkte) + " für die Gesamtlösung (KI-Vorschlag).</p>" : "");
    return (a.expected ? "<p><b>Erwartungshorizont (Beispiel):</b> " + esc(a.expected) + "</p>" : "") +
      ((a.criteria || []).length ? "<p>Kriterien (eigene Worte zählen):</p>" + liste(a.criteria.map(function (c) { return "<li>" + esc(c) + "</li>"; })) : "") +
      (Array.isArray(a.zeilenBezug) ? "<p><small>Textstelle: " + bereich(a.zeilenBezug) + "</small></p>" : "");
  }

  /* ---------- Lesetexte mit Zeilennummern, Diagramme und Tabellen zum Text (Deutsch) ---------- */
  function lesetexte(texte) {
    return (texte || []).map(function (t) {
      var innen = "";
      if (Array.isArray(t.zeilen)) innen = "<div>" + t.zeilen.map(function (z) { return z.kopf ? '<div class="pv-zk">' + esc(z.t) + "</div>" : '<div class="pv-z' + (z.neu ? " neu" : "") + '"><span class="n">' + (z.n === 1 || z.n % 5 === 0 ? z.n : "") + "</span><span>" + esc(z.t) + "</span></div>"; }).join("") + "</div>";
      else if (Array.isArray(t.werte)) { var max = Math.max.apply(null, t.werte.map(function (w) { return Number(w[1]) || 0; }).concat([1])); innen = '<div class="pv-balken">' + t.werte.map(function (w) { return "<span>" + esc(w[0]) + '</span><i style="width:' + Math.max(1, Math.round(100 * (Number(w[1]) || 0) / max)) + '%"></i><b>' + esc(komma(w[1])) + "</b>"; }).join("") + "</div>" + (t.einheit ? '<p class="pv-anw">Angaben in ' + esc(t.einheit) + "</p>" : ""); }
      else if (Array.isArray(t.reihen)) innen = '<table class="pv-tab" style="max-width:420px">' + (t.kopf ? "<thead><tr>" + t.kopf.map(function (k) { return "<th>" + esc(k) + "</th>"; }).join("") + "</tr></thead>" : "") + "<tbody>" + t.reihen.map(function (z) { return "<tr>" + z.map(function (c) { return "<td>" + esc(komma(c)) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
      return '<section class="pv-text"><div class="pv-fach">' + esc(t.art || "Text") + "</div><h2>" + esc(t.titel || "") + "</h2>" + innen + (t.hinweis ? '<p class="pv-anw">' + esc(t.hinweis) + "</p>" : "") + (t.quelle ? '<p class="pv-quelle">' + esc(t.quelle) + "</p>" : "") + "</section>";
    }).join("");
  }

  /* ---------- Blatt zeichnen ---------- */
  function blatt(d, opts, mitLoesung) {
    var D = global.NT8Darstellung, id = d.testId || opts.testId, items = d.items || [];
    var gesamt = d.total != null ? d.total : items.reduce(function (s, a) { return s + (a.points || 0); }, 0);
    var textTitel = {}; (d.texte || []).forEach(function (t) { textTitel[t.id] = t.titel; });
    var kopf = '<header class="pv-kopf"><div class="pv-fach">' + esc(opts.fach || "Probe") + (mitLoesung ? " · Lösungen und Erwartungshorizont – nur für die Lehrkraft" : "") + "</div><h1>" + esc(d.title || id) + "</h1>" +
      (mitLoesung ? "" : '<div class="pv-zeile"><span>Name: <span class="pv-strich"></span></span><span>Klasse: <span class="pv-strich kurz"></span></span><span>Datum: <span class="pv-strich kurz"></span></span></div>') +
      '<div class="pv-zeile"><span>' + (items.length === 1 && items[0].type === "vokabeln" ? items[0].zeilen.length + " Wörter" : items.length + " Aufgaben") + " · " + punktwort(gesamt) + (d.minutes ? " · Arbeitszeit " + d.minutes + " Minuten" : "") + "</span>" +
      (mitLoesung ? "" : '<span style="margin-left:auto">Punkte: <span class="pv-strich kurz"></span> / ' + gesamt + ' &nbsp; Note: <span class="pv-strich kurz"></span></span>') + "</div>" +
      (mitLoesung && d.scope ? '<div class="pv-zeile pv-marken"><span>Stoff: ' + esc(d.scope) + "</span></div>" : "") + "</header>" +
      (!mitLoesung && d.hinweis ? '<p class="pv-allgemein">' + esc(d.hinweis) + "</p>" : "");
    var abschnitt = "";
    var aufgaben = items.map(function (a, i) {
      var marken = mitLoesung ? [a.modulTitel || a.modul, KOMPETENZ[a.kompetenz], a.transfer ? "Transfer" : ""].filter(Boolean).join(" · ") : "";
      var neuerAbschnitt = a.abschnitt && a.abschnitt !== abschnitt ? '<div class="pv-abschnitt">' + esc(a.abschnitt) + "</div>" : ""; if (a.abschnitt) abschnitt = a.abschnitt;
      var zeigeFrage = a.type !== "luecke" && a.type !== "datei";
      var beiwerk = (a.image || a.bild ? '<figure class="pv-bild"><img src="' + esc((opts.basis || "") + (a.image || a.bild)) + '" alt="' + esc(a.imageAlt || "Bild zur Aufgabe") + '"></figure>' : "") + (D ? D.tabelle(a.tabelle) + D.diagramm(a.diagramm) : "");
      var versuch = a.labor ? '<div class="pv-labor" data-pv-labor="' + i + '"></div>' + (!mitLoesung && a.type !== "labor" ? '<p class="pv-anw">Am Gerät sehen die Kinder diesen Versuch als kurzen Film; hier steht das letzte Bild.</p>' : "") : "";
      return neuerAbschnitt + '<section class="pv-aufgabe' + (LANG[a.type] ? " pv-lang" : "") + '"><h2><span>' + (a.type === "vokabeln" ? "Wortliste" : "Aufgabe " + (i + 1)) + "</span>" + (marken ? '<span class="pv-marken">' + esc(marken) + "</span>" : "") +
        '<span class="pv-p">' + (mitLoesung ? "" : "___ / ") + punktwort(a.points || 0) + "</span></h2>" +
        (a.textRef && textTitel[a.textRef] ? '<p class="pv-anw">zu: ' + esc(textTitel[a.textRef]) + "</p>" : "") +
        (a.anweisung ? '<p class="pv-anw">' + esc(a.anweisung) + "</p>" : "") +
        (zeigeFrage ? '<p class="pv-frage">' + esc(a.prompt) + "</p>" : "") + (a.type === "datei" ? '<div class="pv-pre">' + esc(a.prompt) + "</div>" : "") + beiwerk + versuch +
        (a.material ? '<div class="pv-material">' + esc(a.material) + "</div>" : "") + (a.vorgabe ? '<div class="pv-material">' + esc(a.vorgabe) + "</div>" : "") +
        (a.hilfe ? '<p class="pv-hilfe"><b>Hilfe:</b> ' + esc(a.hilfe) + "</p>" : "") +
        (mitLoesung ? '<div class="pv-loesung">' + loesung(a, id + "|" + i) + "</div>" : feld(a, id + "|" + i)) + "</section>";
    }).join("");
    return kopf + lesetexte(d.texte) + aufgaben + '<div class="pv-fuss">GRUMI' + (mitLoesung ? " · Fassung mit Lösungen – nicht an die Kinder ausgeben" : "") + "</div>";
  }

  function zeigen(opts) {
    if (doc.getElementById("probe-vorschau")) return;
    var stil = doc.createElement("style"); stil.id = "probe-vorschau-stil"; stil.textContent = CSS; doc.head.appendChild(stil);
    var vorher = doc.activeElement, modus = "kind", daten = null;
    var box = doc.createElement("div"); box.id = "probe-vorschau"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Vorschau der Probe");
    box.innerHTML = '<div class="pv-leiste"><b>👁 Vorschau der Probe</b>' +
      '<div class="pv-wahl" role="group" aria-label="Fassung"><button type="button" data-pv="kind" class="aktiv" aria-pressed="true">So bekommt es das Kind</button><button type="button" data-pv="loesung" aria-pressed="false">Mit Lösungen</button></div>' +
      '<button type="button" class="pv-knopf haupt" data-pv="druck">🖨 Drucken · als PDF speichern</button><button type="button" class="pv-knopf" data-pv="zu">✕ Schließen</button></div>' +
      '<p class="pv-hinweis">PDF: Im Druckfenster als Drucker „Als PDF speichern“ wählen (iPad: Teilen → „In Dateien sichern“). Die Vorschau wird nur angezeigt – am Stand der Probe ändert sich nichts, und die Kinder sehen sie erst nach dem Freischalten.</p>' +
      '<div class="pv-blatt"><p>Probe wird geladen …</p></div>';
    doc.body.appendChild(box); doc.body.classList.add("pv-offen");
    var blattEl = box.querySelector(".pv-blatt");

    function zeichne() {
      if (!daten) return;
      blattEl.innerHTML = blatt(daten, opts, modus === "loesung");
      var D = global.NT8Darstellung;
      if (D && global.NTLabor) (daten.items || []).forEach(function (a, i) {
        var el = blattEl.querySelector('[data-pv-labor="' + i + '"]'); if (!el || !a.labor) return;
        // Die Liste „Was wird geprüft“ gehört nur in die Lösungsfassung (dort steht sie im Lösungskasten)
        try { D.labor(el, Object.assign({}, a, { regeln: null }), { statisch: true }); } catch (_e) { el.textContent = ""; }
      });
      Array.prototype.forEach.call(box.querySelectorAll(".pv-wahl button"), function (b) { var an = b.getAttribute("data-pv") === modus; b.classList.toggle("aktiv", an); b.setAttribute("aria-pressed", an); });
      box.scrollTop = 0;
    }
    function zu() {
      doc.removeEventListener("keydown", taste);
      box.remove(); stil.remove(); doc.body.classList.remove("pv-offen");
      if (vorher && vorher.focus) try { vorher.focus(); } catch (_e) { /* Knopf gibt es nicht mehr */ }
    }
    function taste(e) { if (e.key === "Escape") zu(); }
    doc.addEventListener("keydown", taste);
    box.addEventListener("click", function (e) {
      var b = e.target.closest("[data-pv]"); if (!b) return;
      var was = b.getAttribute("data-pv");
      if (was === "zu") zu();
      else if (was === "druck") global.print();
      else { modus = was; zeichne(); }
    });
    box.querySelector('[data-pv="zu"]').focus();

    // Gemeinsame Route für alle Fächer; solange der Server sie noch nicht kennt, die eigene Route der Probenart
    var eigene = !opts.modul || opts.nurEigene;
    fetch((opts.api || "") + (eigene ? opts.pfad : "/api/proben/vorschau"), { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eigene ? { password: opts.password, testId: opts.testId } : { password: opts.password, modul: opts.modul, testId: opts.testId }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (x) { if (!r.ok || !x.ok) throw new Error(r.status === 401 ? "Das Passwort wurde nicht angenommen. Bitte neu anmelden." : r.status === 404 ? "Für diese Probe gibt es (noch) keine Vorschau." : "Die Probe ließ sich nicht laden (" + (x.error || "HTTP " + r.status) + ")."); return x; }); })
      .then(function (x) {
        daten = x;
        var braucht = (x.items || []).some(function (a) { return a.tabelle || a.diagramm || a.labor; });
        if (!braucht || !opts.labor || (global.NT8Darstellung && global.NTLabor)) return zeichne();
        laden([global.NTLabor ? null : opts.labor + "labor.js", global.NT8Darstellung ? null : opts.labor + "darstellung.js"].filter(Boolean), zeichne);
      })
      .catch(function (e) { blattEl.innerHTML = '<p class="pv-meldung">' + esc(e.message || "Keine Verbindung zum Server.") + "</p>"; });
  }

  /* ---------- für die Verwaltung: Welche Probenarten haben eine Vorschau? ---------- */
  var bekannt = [], laufend = null;
  // fragt den Server einmal (je Seitenaufruf), welche Probenarten er als Vorschau liefert
  function verfuegbar(api) {
    if (!laufend) laufend = fetch((api || "") + "/api/health").then(function (r) { return r.json(); })
      .then(function (h) { bekannt = Array.isArray(h.probenVorschau) ? h.probenVorschau : []; return bekannt; })
      .catch(function () { bekannt = []; return bekannt; });
    return laufend;
  }
  // mod = Eintrag aus js/proben-module.js. Vorschau gibt es über die gemeinsame Route oder die eigene der Probenart.
  function kann(mod) { return !!mod && (bekannt.indexOf(mod.key) >= 0 || !!mod.vorschauPath); }
  // probe: { id, fach }; ctx: { api, password }
  function oeffnen(mod, probe, ctx) {
    var basis = typeof mod.vorschauBasis === "function" ? mod.vorschauBasis(probe) : mod.vorschauBasis || "";
    zeigen({ api: ctx.api, password: ctx.password, modul: mod.key, testId: probe.id, fach: probe.fach || mod.subject, basis: basis, labor: mod.vorschauLabor || "",
      pfad: mod.vorschauPath, nurEigene: bekannt.indexOf(mod.key) < 0 });
  }

  global.GrumiProbeVorschau = { zeigen: zeigen, verfuegbar: verfuegbar, kann: kann, oeffnen: oeffnen };
})(window);
