/* Englisch 9R: Arbeitsblätter zum Drucken (u<N>_blaetter.html, erzeugt von .codex-build/englisch9r-werkzeug/bau-blaetter.js).
 *
 * Die Blätter entstehen aus den Aufgaben der Lernmodule der Unit – es gibt keine zweite Aufgabensammlung: Die Seite
 * lädt die Inhaltsdateien (inhalt/u<N>-….js) und die Texte (texte/u<N>/….js). Hier werden sie nicht als Modul gezeigt,
 * sondern gesammelt und als sieben Blätter gesetzt:
 *   Vocabulary · Grammar · Reading · Listening · Writing · Mediation · Mixed revision
 * Jedes Blatt hat einen Kopf (Name, Klasse, Datum) und beginnt auf einer neuen Seite. Lehrkräfte (Vorschau aus der
 * Verwaltung, ?vorschau=1) können zu jedem Blatt die Lösungen mitdrucken – beim Listening steht dort auch der Hörtext
 * zum Vorlesen. Ankreuzantworten, Paare und Reihenfolgen werden fest gemischt (auf jedem Gerät gleich).
 * Fehlt ein Modul noch, fehlt das Blatt (mit Hinweis).
 */
(function (global) {
  "use strict";
  var doc = global.document, MODULE = {};
  // Die Inhaltsdateien rufen D7Kit.seite({ … }) auf – auf dieser Seite werden sie nur gesammelt.
  global.D7Kit = { seite: function (cfg) { if (cfg && cfg.id) MODULE[cfg.id] = cfg; } };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function mische(liste, saat) {
    var a = liste.slice(), s = 7, i, j, t;
    for (i = 0; i < saat.length; i++) s = (s * 31 + saat.charCodeAt(i)) >>> 0;
    for (i = a.length - 1; i > 0; i--) { s = (s * 1664525 + 1013904223) >>> 0; j = s % (i + 1); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  var ABC = "abcdefghijklmnopqrstuvwxyz";
  function linien(n) { var h = ""; for (var i = 0; i < n; i++) h += '<div class="ab-linie"></div>'; return h; }
  function text(id) { return global.D7Texte ? global.D7Texte.get(id) : null; }
  var SPRACHE = /language|grammar|past|if &|tense/i;

  // alle Teile eines Moduls der Reihe nach: { teil, st (Nummer der Station), station, hoer (Text-ID bei Höraufgaben) }
  function teile(mod) {
    var aus = [];
    (mod.stationen || []).forEach(function (st, i) {
      (st.teile || []).forEach(function (t) {
        if (t.zusatz) return;
        aus.push({ teil: t, st: i, station: st });
        if (t.art === "hoertext") (t.fragen || []).forEach(function (f) { aus.push({ teil: f, st: i, station: st, hoer: t.hoertext }); });
      });
    });
    return aus;
  }

  /* ---------- eine Aufgabe setzen: { a: Aufgabe, l: Lösung } ---------- */
  function setze(t, saat) {
    var kopf = (t.titel ? "<b>" + esc(t.titel) + "</b> " : "") + (t.lead ? '<span class="ab-lead">' + t.lead + "</span>" : ""), a = "", l = "";
    if (t.art === "mc") {
      (t.fragen || []).forEach(function (f, i) {
        var opt = mische(f.o.map(function (o, k) { return { o: o, r: k === (f.a || 0) }; }), saat + i);
        a += '<div class="ab-frage"><p>' + ABC[i] + ") " + esc(f.q) + '</p><div class="ab-opt">' + opt.map(function (o) { return "<span>☐ " + esc(o.o) + "</span>"; }).join("") + "</div></div>";
        l += "<li>" + ABC[i] + ") " + esc(f.o[f.a || 0]) + "</li>";
      });
      l = "<ul>" + l + "</ul>";
    } else if (t.art === "tf") {
      a = '<table class="ab-tf"><tr><th></th><th>true</th><th>false</th></tr>' + (t.aussagen || []).map(function (x, i) { return "<tr><td>" + (i + 1) + ". " + esc(x[0]) + "</td><td>☐</td><td>☐</td></tr>"; }).join("") + "</table>";
      l = (t.aussagen || []).map(function (x, i) { return (i + 1) + " " + (x[1] ? "true" : "false"); }).join(" · ");
    } else if (t.art === "luecke") {
      var woerter = [];
      (t.absaetze || []).forEach(function (z) { z.forEach(function (x) { if (x && x.g) woerter.push(String(x.g).split("|")[0]); }); });
      woerter = woerter.concat(t.extra || []).sort(function (x, y) { return x.toLowerCase().localeCompare(y.toLowerCase()); });
      a = '<div class="ab-kasten">' + woerter.map(esc).join(" &nbsp;·&nbsp; ") + "</div>" + (t.absaetze || []).map(function (z) { return "<p>" + z.map(function (x) { return x && x.g ? '<span class="ab-luecke"></span>' : esc(x); }).join("") + "</p>"; }).join("");
      l = (t.absaetze || []).map(function (z) { return "<p>" + z.map(function (x) { return x && x.g ? "<b>" + esc(String(x.g).split("|")[0]) + "</b>" : esc(x); }).join("") + "</p>"; }).join("");
    } else if (t.art === "sort") {
      a = '<div class="ab-kasten">' + mische((t.items || []).map(function (x) { return x.t; }), saat).map(esc).join(" &nbsp;·&nbsp; ") + '</div><table class="ab-sort"><tr>' + (t.buckets || []).map(function (b) { return "<th>" + esc(b) + "</th>"; }).join("") + "</tr><tr>" + (t.buckets || []).map(function () { return "<td></td>"; }).join("") + "</tr></table>";
      l = (t.buckets || []).map(function (b, i) { return "<p><b>" + esc(b) + ":</b> " + (t.items || []).filter(function (x) { return x.b === i; }).map(function (x) { return esc(x.t); }).join(" · ") + "</p>"; }).join("");
    } else if (t.art === "ordnen") {
      a = '<div class="ab-ordnen">' + mische(t.schritte || [], saat).map(function (s) { return '<p><span class="ab-nr"></span>' + esc(s) + "</p>"; }).join("") + "</div>";
      l = "<ol>" + (t.schritte || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>";
    } else if (t.art === "paare") {
      var rechts = mische((t.paare || []).map(function (p, i) { return { t: p[1], i: i }; }), saat);
      a = '<table class="ab-paare">' + (t.paare || []).map(function (p, i) { return "<tr><td>" + (i + 1) + ". " + esc(p[0]) + "</td><td>" + ABC[i] + ") " + esc(rechts[i].t) + "</td></tr>"; }).join("") + '</table><p class="ab-antwort">' + (t.paare || []).map(function (_p, i) { return (i + 1) + " ___"; }).join(" &nbsp; ") + "</p>";
      l = (t.paare || []).map(function (_p, i) { return (i + 1) + ABC[rechts.map(function (r) { return r.i; }).indexOf(i)]; }).join(" · ");
    } else if (t.art === "offen") {
      (t.fragen || []).forEach(function (f, i) { a += '<div class="ab-frage"><p>' + ((t.fragen || []).length > 1 ? ABC[i] + ") " : "") + esc(f.q) + "</p>" + linien(3) + "</div>"; l += "<p>" + ((t.fragen || []).length > 1 ? ABC[i] + ") " : "") + '<i>Example:</i> ' + esc(f.m || "") + "</p>"; });
    } else if (t.art === "beleg") {
      (t.fragen || []).forEach(function (f, i) { a += '<p class="ab-beleg">' + ABC[i] + ") " + esc(f.q) + ' <span>line(s) ______</span></p>'; l += "<li>" + ABC[i] + ") ll. " + f.zeilen[0] + (f.zeilen[1] > f.zeilen[0] ? "–" + f.zeilen[1] : "") + (f.e ? " – " + esc(f.e) : "") + "</li>"; });
      l = "<ul>" + l + "</ul>";
    } else if (t.art === "markieren") {
      var saetze = [].concat(t.satz || t.saetze || []);
      kopf += (t.finde ? ' <span class="ab-lead">Underline ' + esc(t.finde) + ".</span>" : "");
      a = saetze.map(function (s) { return '<p class="ab-satz">' + esc(String(s).replace(/\[\[|\]\]/g, "")) + "</p>"; }).join("");
      l = saetze.map(function (s) { return "<p>" + esc(String(s)).replace(/\[\[(.+?)\]\]/g, "<u>$1</u>") + "</p>"; }).join("");
    } else if (t.art === "schreiben") {
      a = '<div class="ab-auftrag">' + (t.auftrag || "") + "</div>" + (Array.isArray(t.kriterien) ? '<ul class="ab-check">' + t.kriterien.map(function (k) { return "<li>☐ " + esc(k) + "</li>"; }).join("") + "</ul>" : "") + linien(Math.max(6, Math.ceil((t.min || 40) / 7) + 2));
      l = "<p><i>Individual answer.</i> Check it with the list on the worksheet.</p>";
    } else if (t.art === "formular") {
      a = '<div class="ab-karte">' + (t.kopf ? "<b>" + esc(t.kopf) + "</b>" : "") + (t.felder || []).map(function (f) { return "<p>" + esc(f.label) + ': <span class="ab-luecke lang"></span>' + (f.wahl ? ' <small>(' + f.wahl.map(esc).join(" / ") + ")</small>" : "") + "</p>"; }).join("") + "</div>";
      l = (t.felder || []).map(function (f) { return esc(f.label) + ": <b>" + esc(f.loesung[0]) + "</b>"; }).join(" · ");
    } else return null;
    return { a: kopf ? '<div class="ab-kopfzeile">' + kopf + "</div>" + a : a, l: l };
  }
  function lesetext(id) { var t = text(id); return t && global.D7Lesetext ? global.D7Lesetext.html(t) : ""; }
  function mitschrift(id) {
    var t = text(id); if (!t || !t.sprecher) return "";
    var rollen = {}; t.sprecher.forEach(function (s) { rollen[s.rolle] = 1; });
    return '<div class="ab-mitschrift"><b>' + esc(t.titel || "Listening") + "</b>" + t.sprecher.map(function (s) { return "<p>" + (Object.keys(rollen).length > 1 ? "<b>" + esc(s.rolle) + ":</b> " : "") + esc(s.text) + "</p>"; }).join("") + "</div>";
  }

  /* ---------- Blatt aus einer Auswahl von Teilen ---------- */
  function blatt(auswahl, opt) {
    var a = "", l = "", nr = 0, texte = {}, hoer = {};
    auswahl.forEach(function (x) {
      var t = x.teil;
      if (t.art === "lesetext") { if (!texte[t.lesetext]) { texte[t.lesetext] = 1; a += lesetext(t.lesetext); } return; }
      if (t.art === "hoertext") { var ht = text(t.hoertext); if (!hoer[t.hoertext]) { hoer[t.hoertext] = 1; a += '<div class="ab-hoer">🎧 <b>' + esc(ht ? ht.titel : "Listening") + "</b> – listen to the text in GRUMI (" + esc(opt.modulTitel || "module") + ") or your teacher reads it to you. Read the tasks first.</div>"; l += mitschrift(t.hoertext); } return; }
      if (t.art === "text") { if (opt.mitText || /<blockquote|sprech-karte/.test(t.html || "")) a += '<div class="ab-text">' + (t.html || "") + "</div>"; return; }
      if (t.art === "merke") { if (opt.mitMerke) a += '<div class="ab-merke">' + (t.kopf ? "<b>" + esc(t.kopf) + "</b> " : "") + (t.html || "") + "</div>"; return; }
      if (t.art === "karten") { if (opt.mitText) a += '<div class="ab-karten">' + (t.karten || []).map(function (k) { return "<div>" + (k.titel ? "<b>" + esc(k.titel) + "</b><br>" : "") + esc(k.text || "") + "</div>"; }).join("") + "</div>"; return; }
      if (t.art === "aufsatz") {
        var R = function (v) { return v && typeof v === "object" && !Array.isArray(v) ? v.R : v; };
        nr++;
        a += '<div class="ab-auf"><div class="ab-n">' + nr + '</div><div class="ab-inh"><div class="ab-kopfzeile"><b>' + esc(t.titel || "Writing") + '</b></div><div class="ab-auftrag">' + (R(t.auftrag) || "") + '</div>' +
          '<p class="ab-zw">1 · Plan (key words)</p><table class="ab-plan">' + (t.plan || []).map(function (p) { return "<tr><td><b>" + esc(p.label) + "</b>" + (p.hilfe ? "<br><small>" + esc(p.hilfe) + "</small>" : "") + "</td><td>" + linien(p.zeilen || 1) + "</td></tr>"; }).join("") + "</table>" +
          (t.starter ? '<p class="ab-zw">Useful phrases</p><div class="ab-kasten">' + t.starter.map(esc).join(" &nbsp;·&nbsp; ") + "</div>" : "") +
          '<p class="ab-zw">2 · Write (at least ' + (R(t.min) || 60) + " words)</p>" + linien(Math.ceil((R(t.min) || 60) / 7) + 4) +
          '<p class="ab-zw">3 · Check</p><ul class="ab-check">' + (R(t.kriterien) || []).map(function (k) { return "<li>☐ " + esc(k) + "</li>"; }).join("") + "</ul></div></div>";
        l += "<p><b>" + nr + "</b> <i>Individual text.</i> Use the checklist; a model text for a different task is in the module.</p>";
        return;
      }
      var s = setze(t, (opt.saat || "") + (t.id || nr));
      if (!s) return;
      nr++;
      a += '<div class="ab-auf"><div class="ab-n">' + nr + '</div><div class="ab-inh">' + s.a + "</div></div>";
      l += '<div class="ab-los"><b>' + nr + "</b> " + s.l + "</div>";
    });
    return nr ? { a: a, l: l, n: nr } : null;
  }

  /* ---------- die sieben Blätter einer Unit ---------- */
  function baue(N) {
    var m = function (art) { return MODULE["u" + N + "-" + art] || null; }, B = [];
    var ohne = function (x) { return !x.teil.m7; };
    // 1 Vocabulary: die Wortpaare aus der ersten Station der Module, dazu Lücken aus „Words“-Stationen
    var vok = [];
    ["land", "listening", "reading", "speaking", "mediation", "writing", "revision"].forEach(function (art) { var mod = m(art); if (!mod) return; teile(mod).filter(ohne).forEach(function (x) { if ((x.teil.art === "paare" && x.st <= 1) || (x.teil.art === "luecke" && /word/i.test(x.station.kurz || x.station.titel || ""))) vok.push(x); }); });
    B.push({ key: "vocabulary", name: "Vocabulary", inhalt: blatt(vok.slice(0, 7), { saat: "v" + N }) });
    // 2 Grammar: die Stationen „Language“ der Module (höchstens zwei Aufgaben je Modul), mit den Merkkästen
    var gr = [];
    ["revision", "land", "listening", "reading", "speaking", "mediation", "writing"].forEach(function (art) {
      var mod = m(art), k = 0, merk = 0; if (!mod) return;
      teile(mod).filter(ohne).forEach(function (x) {
        if (!SPRACHE.test((x.station.kurz || "") + " " + (x.station.titel || ""))) return;
        if (x.teil.art === "merke") { if (merk++ < 1 && art !== "revision") gr.push(x); return; }
        if (["luecke", "mc", "sort", "ordnen", "markieren"].indexOf(x.teil.art) >= 0 && k++ < (art === "revision" ? 6 : 1)) gr.push(x);
      });
    });
    gr = gr.slice(0, 11);
    B.push({ key: "grammar", name: "Grammar", inhalt: blatt(gr, { saat: "g" + N, mitMerke: true }) });
    // 3 Reading: Lesetext und Aufgaben des Reading-Moduls (ohne Wortpaare und ohne die Station „Language“)
    var lesen = m("reading"), le = [];
    if (lesen) {
      var haupt = lesen.haupttext || (teile(lesen).filter(function (x) { return x.teil.art === "lesetext"; })[0] || { teil: {} }).teil.lesetext;
      if (haupt) le.push({ teil: { art: "lesetext", lesetext: haupt }, station: {}, st: 0 });
      teile(lesen).filter(ohne).forEach(function (x) { if (SPRACHE.test((x.station.kurz || "") + " " + (x.station.titel || ""))) return; if (["mc", "ordnen", "tf", "beleg", "luecke", "offen"].indexOf(x.teil.art) >= 0) le.push(x); });
    }
    B.push({ key: "reading", name: "Reading", inhalt: lesen ? blatt(le.slice(0, 10), { saat: "r" + N }) : null });
    // 4 Listening: Aufgaben zu den Hörtexten; der Hörtext steht bei den Lösungen (zum Vorlesen)
    var hoeren = m("listening"), ho = [];
    if (hoeren) teile(hoeren).filter(ohne).forEach(function (x) { if (x.teil.art === "hoertext" || x.hoer) ho.push(x); });
    B.push({ key: "listening", name: "Listening", inhalt: hoeren ? blatt(ho.slice(0, 12), { saat: "h" + N, modulTitel: hoeren.titel }) : null });
    // 5 Writing: Auftrag, Planung, Wendungen, Schreiblinien, Checkliste
    var schr = m("writing"), sc = [];
    if (schr) teile(schr).forEach(function (x) { if (x.teil.art === "aufsatz") sc.push(x); });
    B.push({ key: "writing", name: "Writing", inhalt: schr ? blatt(sc, { saat: "w" + N, mitText: true }) : null });
    // 6 Mediation: Ausgangstexte und Aufgaben ab der zweiten Station
    var med = m("mediation"), me = [];
    if (med) teile(med).filter(ohne).forEach(function (x) { if (x.st < 1 || SPRACHE.test((x.station.kurz || "") + " " + (x.station.titel || ""))) return; if (["text", "lesetext", "sort", "markieren", "mc", "paare", "offen", "schreiben", "beleg"].indexOf(x.teil.art) >= 0) me.push(x); });
    B.push({ key: "mediation", name: "Mediation", inhalt: med ? blatt(me.slice(0, 14), { saat: "m" + N, mitText: true }) : null });
    // 7 Mixed revision: das Wiederholungsmodul (solange es fehlt, die Quali-Fit-Aufgaben) – ohne die Aufgaben, die
    // schon auf dem Vocabulary- oder dem Grammar-Blatt stehen; so bleibt das Blatt bei zwei bis drei Seiten
    var wdh = m("revision") || m("qualifit"), wd = [], schonDa = vok.slice(0, 7).concat(gr).map(function (x) { return x.teil; });
    if (wdh) teile(wdh).filter(ohne).forEach(function (x) { if (x.teil.art !== "merke" && schonDa.indexOf(x.teil) < 0) wd.push(x); });
    B.push({ key: "revision", name: "Mixed revision", inhalt: wdh ? blatt(wd.slice(0, 12), { saat: "x" + N, mitText: true, modulTitel: wdh.titel }) : null });
    return B;
  }

  function start(N, unitTitel) {
    var app = doc.getElementById("blaetter-app"), lehrer = /[?&]vorschau=1/.test(global.location.search), B = baue(N);
    var da = B.filter(function (b) { return b.inhalt; });
    app.innerHTML = '<div class="ab-leiste kein-druck"><h1>Arbeitsblätter · ' + esc(unitTitel) + "</h1><p>Sieben Blätter zum Drucken – sie entstehen aus den Aufgaben der Lernmodule dieser Unit. Wähle die Blätter aus und drucke sie (im Druckfenster geht auch „Als PDF speichern“).</p>" +
      '<div class="ab-wahl">' + B.map(function (b) { return '<label class="' + (b.inhalt ? "" : "fehlt") + '"><input type="checkbox" data-blatt="' + b.key + '"' + (b.inhalt ? " checked" : " disabled") + "> " + esc(b.name) + (b.inhalt ? " <small>(" + b.inhalt.n + " Aufgaben)</small>" : " <small>(folgt mit dem Modul)</small>") + "</label>"; }).join("") + "</div>" +
      (lehrer ? '<label class="ab-lsg"><input type="checkbox" id="ab-loesungen"> Lösungen mitdrucken (nur in der Vorschau für Lehrkräfte; beim Listening mit dem Hörtext zum Vorlesen)</label>' : "") +
      '<p><button type="button" class="ab-knopf" id="ab-drucken">🖨 Ausgewählte Blätter drucken</button> <a class="ab-zurueck" href="index.html#thema-u' + N + '">Zur Übersicht</a></p></div>' +
      da.map(function (b, i) {
        var kopf = '<header class="ab-kopf"><div><small>GRUMI · Englisch 9R · ' + esc(unitTitel) + "</small><h2>Worksheet " + (i + 1) + ": " + esc(b.name) + '</h2></div><div class="ab-name">Name: ____________________ &nbsp; Class: ______ &nbsp; Date: __________</div></header>';
        return '<section class="ab-blatt" data-blatt="' + b.key + '">' + kopf + b.inhalt.a + "</section>" +
          '<section class="ab-blatt ab-loesung" data-blatt="' + b.key + '" hidden><header class="ab-kopf"><div><small>GRUMI · Englisch 9R · ' + esc(unitTitel) + " · nur für die Lehrkraft</small><h2>Solutions – Worksheet " + (i + 1) + ": " + esc(b.name) + "</h2></div></header>" + b.inhalt.l + "</section>";
      }).join("");
    function zeige() {
      var mitL = lehrer && doc.getElementById("ab-loesungen").checked, an = {};
      Array.prototype.forEach.call(app.querySelectorAll(".ab-wahl input"), function (c) { an[c.getAttribute("data-blatt")] = c.checked; });
      Array.prototype.forEach.call(app.querySelectorAll(".ab-blatt"), function (s) { s.hidden = !an[s.getAttribute("data-blatt")] || (s.classList.contains("ab-loesung") && !mitL); });
    }
    app.addEventListener("change", zeige);
    doc.getElementById("ab-drucken").addEventListener("click", function () { global.print(); });
    zeige();
    if (global.D7Lesetext) global.D7Lesetext.einpassen(app);
    global.Blaetter.fertig = { blaetter: da.map(function (b) { return b.key + ":" + b.inhalt.n; }), fehlen: B.filter(function (b) { return !b.inhalt; }).map(function (b) { return b.key; }) };
  }

  global.Blaetter = { start: start, module: MODULE };
})(window);
