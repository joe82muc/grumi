/* Lehrerseite einer Probe (z. B. unit1/test/lehrer.html in Englisch): korrigierte Abgaben an die Kinder zurückgeben
 * und als Elternansicht drucken – wie bei Deutsch 7 und in der Verwaltung (Reiter „Noten“).
 *
 *   ProbeRueckgabeLehrer.start({ api, modul, passwort: () => PW, wer: r => "Name (Code 123)", namen: { "123": "Name" },
 *                                neuLaden: loadResults, fach: "Englisch", wurzel: "../../../../" })
 *   ProbeRueckgabeLehrer.zelle(td, abgabe)      beim Zeichnen jeder Zeile der Ergebnisliste
 *
 * - Zurückgeben: /api/proben/rueckgabe/freigeben (proben-rueckgabe.js auf dem Server). Das Kind sieht die Probe dann
 *   auf seiner Startseite unter „Zurückbekommen“ (korrektur.html) und kann sie für die Eltern drucken.
 * - Elternansicht: Die Lehrkraft druckt dieselbe Ansicht selbst – einzeln oder für alle angezeigten Abgaben. Dazu
 *   öffnet sich korrektur.html#druck; die Abgaben werden über window.GrumiDruck übergeben (nichts steht in der Adresse).
 * - Speicher-Hinweis: Die Abgaben liegen dauerhaft in der Datenbank der Proben (proben-speicher.js). Nur wenn der
 *   Server meldet, dass sie nicht verbunden ist, erscheint die Warnung, die CSV-Datei zu sichern.
 */
(function (global) {
  "use strict";
  var doc = global.document, EIGENES = doc.currentScript ? doc.currentScript.src : "";
  var C = null, STAND = null, ZELLEN = [], geplant = false;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function datum(iso) { var d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }); }
  function post(route, body) {
    body = body || {}; body.password = C.passwort();
    return global.fetch(C.api + "/api/proben/rueckgabe/" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || (r.status === 404 ? "Der Server kennt das Zurückgeben noch nicht (alter Stand)." : "HTTP " + r.status));
        return d;
      }); });
  }
  function stil() {
    if (doc.getElementById("prl-stil")) return;
    var s = doc.createElement("style"); s.id = "prl-stil";
    s.textContent = ".prl{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center;margin-top:.35rem}" +
      ".prl button{border:1.5px solid #cbd5e1;border-radius:999px;background:#fff;color:#1e293b;font:700 .76rem inherit;font-family:inherit;padding:.25rem .6rem;cursor:pointer;white-space:nowrap}" +
      ".prl button.haupt{background:#15803d;border-color:#15803d;color:#fff}.prl button[disabled]{opacity:.55;cursor:default}" +
      ".prl .stand{flex-basis:100%;font-size:.76rem;font-weight:800;color:#17633a}" +
      ".prl-leiste{display:flex;flex-wrap:wrap;gap:.5rem .8rem;align-items:center;margin:.9rem 0 .6rem;padding:.7rem .9rem;border:1.5px solid #cfe8d6;border-radius:12px;background:#f3fbf5;font-size:.88rem}" +
      ".prl-leiste b{color:#17633a}.prl-leiste label{display:inline-flex;gap:.35rem;align-items:center;font-weight:700;margin:0}" +
      ".prl-leiste .platz{flex:1}.prl-leiste p{flex-basis:100%;margin:0;color:#475569;font-size:.82rem}" +
      ".prl-leiste button{border:1.5px solid #15803d;border-radius:999px;background:#15803d;color:#fff;font:800 .82rem inherit;font-family:inherit;padding:.4rem .9rem;cursor:pointer}" +
      ".prl-leiste button.neben{background:#fff;color:#17633a}.prl-leiste button[disabled]{opacity:.5;cursor:default}" +
      "#prl-msg{flex-basis:100%;font-weight:700}" +
      ".prl button.auffaellig{border-color:#d97706;background:#fffbeb;color:#92400e}" +
      "#prl-dlg{width:min(640px,calc(100vw - 24px));border:0;border-radius:16px;padding:16px 18px;box-shadow:0 20px 60px rgba(0,0,0,.3);font:16px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
      "#prl-dlg::backdrop{background:rgba(15,23,42,.45)}#prl-dlg h3{margin:0 0 2px;font-size:1.1rem}#prl-dlg .zu{float:right;border:1.5px solid #cbd5e1;border-radius:999px;background:#fff;font:700 .85rem inherit;font-family:inherit;padding:.3rem .8rem;cursor:pointer}";
    doc.head.appendChild(s);
  }
  var schluessel = function (r) { return C.modul + "|" + r.id; };
  var eintrag = function (r) { return (STAND || {})[schluessel(r)] || null; };
  var mitLoesung = function () { var h = doc.getElementById("prl-loesung"); return !h || h.checked; };

  // Antwort oder Lösung als Text. Zuordnen und Reihenfolge (Liste mit labels): „links → rechts“ je Paar – wie auf dem
  // Server (proben-rueckgabe.js), damit Kind, Eltern und Lehrkraft dasselbe lesen.
  function text(v, labels) {
    if (Array.isArray(v) && Array.isArray(labels) && labels.length) return labels.map(function (l, j) { return String(l) + " → " + (v[j] == null || v[j] === "" ? "–" : String(v[j])); }).join("; ");
    if (Array.isArray(v)) return v.join(", ");
    return v == null ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
  }
  // Abgabe so aufbereiten, wie korrektur.html sie zeigt (gleiche Felder wie /api/proben/rueckgabe/ansehen)
  function blattDaten(r) {
    var e = eintrag(r), name = (C.namen || {})[r.code] || [r.firstName, r.lastName].filter(Boolean).join(" ");
    return {
      fach: C.fach || "", titel: r.testTitle || r.testId || "", klasse: r.className || "", code: r.code || "", name: name || "",
      datum: r.testDate || r.submittedAt || "", freigegebenAm: e ? e.freigegebenAm : "", kommentar: e && e.kommentar ? e.kommentar : "",
      score: r.score, total: r.total, percent: r.percent, grade: r.grade,
      aufgaben: (r.details || []).map(function (d, i) {
        var max = typeof d.maxPoints === "number" ? d.maxPoints : 1, punkte = typeof d.points === "number" ? d.points : d.correct ? 1 : 0;
        var a = { nr: d.nr != null ? d.nr : i + 1, prompt: d.prompt || "", given: text(d.given, d.labels), points: punkte, max: max, comment: d.comment || "" };
        if (punkte < max && d.expected != null && d.expected !== "") { a.loesung = text(d.expected, d.labels); a.beispiel = d.type === "text"; }
        return a;
      })
    };
  }
  function drucken(rows) {
    if (!rows.length) return;
    global.GrumiDruck = rows.map(blattDaten);
    var w = global.open((C.wurzel || "") + "korrektur.html#druck", "_blank");
    if (!w) meldung("Das neue Fenster wurde vom Browser blockiert. Erlaube Pop-ups für diese Seite und versuche es noch einmal.", "bad");
  }

  function meldung(text, art) {
    var m = doc.getElementById("prl-msg");
    if (m) { m.textContent = text || ""; m.style.color = art === "bad" ? "#b3261e" : "#17633a"; }
    else if (text && art === "bad") global.alert(text);
  }
  function freigeben(rows, offen, kommentar) {
    var body = { eintraege: rows.map(function (r) { return { modul: C.modul, id: r.id }; }), offen: offen, mitLoesung: mitLoesung() };
    if (offen && typeof kommentar === "string") body.kommentar = kommentar;
    return post("freigeben", body).then(function (d) { STAND = d.stand || {}; standZeit = Date.now(); zeichnen(); return d; });
  }

  function widget(z) {
    var r = z.r, e = eintrag(r), el = z.el;
    var h = "";
    if (e) h += '<span class="stand" title="Das Kind findet die Probe auf seiner Startseite unter „Zurückbekommen“">📤 zurückgegeben am ' + esc(datum(e.freigegebenAm)) + (e.geoeffnetAm ? " · geöffnet am " + esc(datum(e.geoeffnetAm)) : " · noch nicht geöffnet") + "</span>";
    h += '<button type="button" data-prl="druck" title="Korrigierte Probe mit Unterschriftsfeld – zum Mitgeben für die Eltern">🖨 Elternansicht</button>';
    // Probenmodus: Hat der Browser des Kindes etwas festgehalten (Verlassen mit Uhrzeit und Dauer, Einfügen, Kopieren)?
    var auffaellig = global.ProbeProtokoll ? global.ProbeProtokoll.kurz(r) : "";
    if (auffaellig || r.verlassen) h += '<button type="button" class="auffaellig" data-prl="prot" title="Probenüberwachung ansehen">🔎 ' + esc(auffaellig || r.verlassen + "× verlassen") + "</button>";
    if (!r.code) h += '<button type="button" disabled title="Diese Abgabe wurde ohne Code geschrieben – zurückgeben geht nur mit Code">📤 Zurückgeben</button>';
    else if (e) h += '<button type="button" data-prl="nehmen">Rückgabe zurücknehmen</button>';
    else h += '<button type="button" class="haupt" data-prl="geben" title="Das Kind sieht dann Antworten, Punkte und bei Fehlern die Lösung">📤 Zurückgeben</button>';
    el.innerHTML = h;
    var druck = el.querySelector('[data-prl="druck"]'), geben = el.querySelector('[data-prl="geben"]'), nehmen = el.querySelector('[data-prl="nehmen"]');
    if (druck) druck.addEventListener("click", function () { drucken([r]); });
    var prot = el.querySelector('[data-prl="prot"]');
    if (prot) prot.addEventListener("click", function () { protokollZeigen(r); });
    if (geben) geben.addEventListener("click", function () {
      var k = global.prompt("Kommentar für " + C.wer(r) + " (erscheint über der Korrektur – kann leer bleiben):", "");
      if (k === null) return;
      geben.disabled = true;
      freigeben([r], true, k).then(function () { meldung("Die Probe ist an " + C.wer(r) + " zurückgegeben."); }).catch(function (x) { geben.disabled = false; meldung("Zurückgeben hat nicht geklappt: " + x.message, "bad"); });
    });
    if (nehmen) nehmen.addEventListener("click", function () {
      if (!global.confirm("Rückgabe an " + C.wer(r) + " zurücknehmen?\n\nDas Kind sieht die korrigierte Probe dann nicht mehr.")) return;
      nehmen.disabled = true;
      freigeben([r], false).then(function () { meldung("Die Rückgabe an " + C.wer(r) + " ist zurückgenommen."); }).catch(function (x) { nehmen.disabled = false; meldung("Das hat nicht geklappt: " + x.message, "bad"); });
    });
  }

  function protokollZeigen(r) {
    var dlg = doc.getElementById("prl-dlg");
    if (!dlg) { dlg = doc.createElement("dialog"); dlg.id = "prl-dlg"; doc.body.appendChild(dlg); }
    dlg.innerHTML = '<button type="button" class="zu">Schließen</button><h3>' + esc(C.wer(r)) + '</h3><p style="margin:0;color:#64748b;font-size:.9rem">' + esc(r.testTitle || "") + "</p>" +
      (global.ProbeProtokoll ? global.ProbeProtokoll.html(r) : "<p>" + esc(r.verlassen || 0) + "× verlassen</p>");
    dlg.querySelector(".zu").addEventListener("click", function () { dlg.close(); });
    if (typeof dlg.showModal === "function") { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute("open", "");
  }

  function leiste() {
    // Die Leiste steht über der Ergebnistabelle – oder über der Liste der Abgaben, die die Seite nennt (cfg.liste)
    var tabelle = ZELLEN.length ? (ZELLEN[0].td.closest("table") || (C.liste && C.liste()) || null) : null;
    var alt = doc.getElementById("prl-leiste");
    if (!tabelle) { if (alt) alt.remove(); return; }
    var rows = ZELLEN.map(function (z) { return z.r; }), mitCode = rows.filter(function (r) { return r.code; });
    var zurueck = mitCode.filter(eintrag).length, offen = mitCode.filter(function (r) { return !eintrag(r); });
    var haken = alt ? mitLoesung() : true, text = alt ? (doc.getElementById("prl-msg") || {}).textContent || "" : "";
    if (alt) alt.remove();
    var el = doc.createElement("div"); el.id = "prl-leiste"; el.className = "prl-leiste";
    el.innerHTML = "<span><b>📤 " + zurueck + " von " + mitCode.length + "</b> an die Kinder zurückgegeben</span>" +
      '<label><input type="checkbox" id="prl-loesung"' + (haken ? " checked" : "") + '> mit Lösungen</label><span class="platz"></span>' +
      '<button type="button" class="neben" id="prl-alle-druck">🖨 Alle für die Eltern drucken</button>' +
      '<button type="button" id="prl-alle"' + (offen.length ? "" : " disabled") + ">📤 Alle zurückgeben</button>" +
      "<p>Zurückgegebene Proben sehen die Kinder mit ihrem Code auf der Startseite unter „Zurückbekommen“: Antworten, Punkte, bei Fehlern die richtige Lösung – zum Ansehen und zum Drucken für die Eltern. " +
      "Die Elternansicht kannst du auch selbst drucken, einzeln oder für alle Abgaben der Liste (je Kind ein Blatt mit Unterschriftsfeld). " +
      "🔎 Probenmodus: Hat ein Kind die Probe verlassen oder etwas einfügen wollen, steht das mit Uhrzeit und Dauer bei seiner Abgabe.</p>" +
      '<span id="prl-msg" role="status"></span>';
    tabelle.parentNode.insertBefore(el, tabelle);
    meldung(text);
    doc.getElementById("prl-alle-druck").addEventListener("click", function () { drucken(rows); });
    doc.getElementById("prl-alle").addEventListener("click", function () {
      if (!offen.length) return;
      if (!global.confirm(offen.length + (offen.length === 1 ? " Probe" : " Proben") + " der Liste an die Kinder zurückgeben?\n\nDie Kinder sehen dann ihre Antworten, die Punkte und " +
        (mitLoesung() ? "bei Fehlern die richtige Lösung" : "ihre Fehler (ohne Lösungen)") + " – auf der Startseite unter „Zurückbekommen“.")) return;
      var knopf = doc.getElementById("prl-alle"); knopf.disabled = true;
      freigeben(offen, true).then(function (d) { meldung(d.anzahl + (d.anzahl === 1 ? " Probe ist" : " Proben sind") + " zurückgegeben."); })
        .catch(function (x) { knopf.disabled = false; meldung("Zurückgeben hat nicht geklappt: " + x.message, "bad"); });
    });
  }
  function zeichnen() {
    geplant = false;
    ZELLEN = ZELLEN.filter(function (z) { return doc.body.contains(z.td); });
    ZELLEN.forEach(widget);
    leiste();
  }

  // Wird beim Zeichnen jeder Zeile gerufen; die Knöpfe erscheinen, sobald der Stand der Rückgaben geladen ist
  function zelle(td, r) {
    if (!C || !td || !r) return;
    var el = doc.createElement("div"); el.className = "prl";
    td.appendChild(el);
    ZELLEN.push({ td: td, r: r, el: el });
    if (geplant) return;
    geplant = true;
    global.setTimeout(function () {
      if (!STAND) { geplant = false; return; }          // start() zeichnet, sobald der Stand da ist
      // Liste neu geladen („Aktualisieren“): auch den Stand der Rückgaben neu holen – z. B. „geöffnet am …“
      if (Date.now() - standZeit > 1500) standLaden().then(zeichnen); else zeichnen();
    }, 0);
  }
  var standZeit = 0;
  function standLaden() {
    return post("stand", {}).then(function (d) { STAND = d.stand || {}; standZeit = Date.now(); }).catch(function () { STAND = STAND || {}; });
  }

  function speicherHinweis() {
    var box = doc.getElementById("speicher-hinweis");
    if (!box) return;
    // data-klasse: Grundklasse der Seite für Hinweise („note“ oder „notice“), data-datei: „CSV-Datei“ oder „Excel-Datei“
    var klasse = box.getAttribute("data-klasse") || "note", datei = box.getAttribute("data-datei") || "CSV-Datei";
    global.fetch(C.api + "/api/proben-speicher/status").then(function (r) { return r.json(); }).then(function (d) {
      box.hidden = false;
      if (d && d.ok && d.verbunden) {
        box.className = klasse + " ok";
        box.innerHTML = "<strong>✓ Die Abgaben sind dauerhaft gespeichert.</strong><br>Sie liegen in der Datenbank der Proben und bleiben auch nach einem Neustart des Servers erhalten. Die " + esc(datei) + " ist eine zusätzliche Kopie für deine Unterlagen.";
      } else {
        box.className = klasse + " bad";
        box.innerHTML = "<strong>Ergebnisse gleich nach der Stunde als " + esc(datei) + " sichern.</strong><br>Die Datenbank der Proben ist gerade nicht verbunden: Bei einem Neustart des Servers können die Abgaben verloren gehen. Die " + esc(datei) + " auf deinem Rechner ist dann die dauerhafte Kopie.";
      }
    }).catch(function () {});
  }

  function start(cfg) {
    C = cfg; STAND = null; ZELLEN = [];
    stil();
    speicherHinweis();
    // Anzeige des Probenmodus (js/probe-protokoll.js) nachladen – liegt neben diesem Skript
    if (!global.ProbeProtokoll && EIGENES && !doc.getElementById("prl-protokoll-skript")) {
      var ps = doc.createElement("script"); ps.id = "prl-protokoll-skript"; ps.src = EIGENES.replace(/[^/]*$/, "") + "probe-protokoll.js";
      ps.onload = function () { if (STAND) zeichnen(); };
      doc.head.appendChild(ps);
    }
    return standLaden().then(zeichnen);
  }

  global.ProbeRueckgabeLehrer = { start: start, zelle: zelle, blattDaten: blattDaten };
})(window);
