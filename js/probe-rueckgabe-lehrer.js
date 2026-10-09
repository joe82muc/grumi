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
 * - Notenschutz LRS (Vokabeltest): je Abgabe an- oder ausschalten – der Server wertet die Antworten neu, die
 *   Rechtschreibung zählt dann nicht. Für künftige Proben steht LRS in der Verwaltung beim Code.
 * - Punkte ändern (Vokabeltest): jede Antwort selbst als richtig oder falsch werten – vor und nach der Rückgabe.
 *   Nachwerten: Der Server prüft die gespeicherten Antworten nach den aktuellen Regeln und wertet nur auf.
 * - ProbeRueckgabeLehrer.mitNamen(blob): trägt in die Export-Datei des Servers (CSV, Excel) die Namen aus der
 *   Namensliste dieses Browsers ein (js/export-namen.js) – der Server kennt nur Codes.
 * - Speicher-Hinweis: Die Abgaben liegen dauerhaft in der Datenbank der Proben (proben-speicher.js). Nur wenn der
 *   Server meldet, dass sie nicht verbunden ist, erscheint die Warnung, die CSV-Datei zu sichern.
 */
(function (global) {
  "use strict";
  var doc = global.document, EIGENES = doc.currentScript ? doc.currentScript.src : "";
  var C = null, STAND = null, ZELLEN = [], geplant = false;
  // Module, bei denen die Rechtschreibung zählt und sich der Notenschutz LRS je Abgabe nachträglich schalten lässt
  var LRS_ROUTE = { vokabeltest: "/api/vokabeltest/lrs" };
  // Module, bei denen die Lehrkraft hier jede Antwort selbst wertet (richtig = 1 Punkt, falsch = 0) – vor und nach der Rückgabe
  var WERTEN_ROUTE = { vokabeltest: "/api/vokabeltest/override" };
  // Module, deren gespeicherte Abgaben der Server nach den aktuellen Regeln nachwertet (ohne KI, nur aufwerten)
  var NACHWERTEN_ROUTE = { vokabeltest: "/api/vokabeltest/nachwerten" };

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
  // Route eines Proben-Moduls (Werten, Nachwerten) – mit dem Passwort der Lehrkraft
  function modulPost(pfad, body) {
    body = body || {}; body.password = C.passwort();
    return global.fetch(C.api + pfad, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (a) { return a.json().catch(function () { return {}; }).then(function (d) {
        if (!a.ok || d.ok === false) throw new Error(d.message || (a.status === 404 && !d.error ? "Der Server kennt das noch nicht (alter Stand)." : d.error || "HTTP " + a.status));
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
      ".prl button.lrs-an{border-color:#6d28d9;background:#6d28d9;color:#fff}" +
      "#prl-dlg{width:min(640px,calc(100vw - 24px));border:0;border-radius:16px;padding:16px 18px;box-shadow:0 20px 60px rgba(0,0,0,.3);font:16px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
      "#prl-dlg::backdrop{background:rgba(15,23,42,.45)}#prl-dlg h3{margin:0 0 2px;font-size:1.1rem}#prl-dlg .zu{float:right;border:1.5px solid #cbd5e1;border-radius:999px;background:#fff;font:700 .85rem inherit;font-family:inherit;padding:.3rem .8rem;cursor:pointer}" +
      // Dialoge „Punkte ändern“ und „Nachgewertet“
      "#prl-dlg .unter{margin:0;color:#64748b;font-size:.9rem}#prl-dlg .note-stand{margin:.5rem 0 .2rem;font-size:1rem}#prl-dlg .hinw{margin:0 0 .6rem;color:#475569;font-size:.85rem}" +
      ".prl-liste{max-height:min(58vh,560px);overflow:auto;border:1px solid #e2e8f0;border-radius:10px}" +
      ".prl-z{display:flex;flex-wrap:wrap;gap:.3rem .6rem;align-items:center;justify-content:space-between;padding:.45rem .6rem;border-bottom:1px solid #eef2f7;font-size:.9rem}.prl-z:last-child{border-bottom:0}" +
      ".prl-z .was{flex:1 1 220px;min-width:0;display:flex;flex-direction:column;gap:1px;overflow-wrap:anywhere}.prl-z.ok .antw{color:#15803d}.prl-z.nein .antw{color:#b3261e}" +
      ".prl-z .neben{color:#64748b;font-size:.8rem}.prl-z .selbst{color:#6d28d9;font-size:.78rem;font-weight:700}.prl-z .wahl{display:flex;gap:.25rem;flex:none}" +
      ".prl-z .wahl button{border:1.5px solid #cbd5e1;border-radius:999px;background:#fff;color:#475569;font-weight:700;font-size:.78rem;font-family:inherit;padding:.3rem .65rem;cursor:pointer;white-space:nowrap}" +
      ".prl-z .wahl button[aria-pressed=true]{color:#fff;cursor:default}.prl-z .wahl button[aria-pressed=true][data-p='1']{background:#15803d;border-color:#15803d}" +
      ".prl-z .wahl button[aria-pressed=true][data-p='0']{background:#b3261e;border-color:#b3261e}.prl-z .wahl button[disabled]{opacity:.6}" +
      "#prl-wmsg{margin:.5rem 0 0;font-weight:700;font-size:.88rem;min-height:1.2em;color:#17633a}#prl-wmsg.bad{color:#b3261e}";
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
        // Herkunft der Aufgabe (Block-Proben): Modul und „Transfer“ – wie in der Rückgabe an das Kind (proben-rueckgabe.js)
        var teil = String(d.teil || ""), transfer = Boolean(d.transfer) || teil.slice(0, 8).toLowerCase() === "transfer";
        var modul = String(d.modulTitel || (transfer ? "" : teil)).trim();
        if (modul) a.modul = modul;
        if (transfer) a.transfer = true;
        // NT 8: Abbildung, Messwerttabelle, Diagramm, Endzustand einer Bauaufgabe und Lernhinweis (wie proben-rueckgabe.js)
        ["image", "imageAlt", "tabelle", "diagramm", "labor", "zustand", "regeln", "tipp", "kompetenz"].forEach(function (k) { if (d[k] !== undefined && d[k] !== "") a[k] = d[k]; });
        return a;
      }),
      modul: C.modul, variante: r.variante || ""
    };
  }
  function drucken(rows) {
    if (!rows.length) return;
    global.GrumiDruck = rows.map(blattDaten);
    var w = global.open((C.wurzel || "") + "korrektur.html#druck", "_blank");
    if (!w) meldung("Das neue Fenster wurde vom Browser blockiert. Erlaube Pop-ups für diese Seite und versuche es noch einmal.", "bad");
  }

  // Die letzte Meldung übersteht das Neuladen der Liste (die Leiste wird dabei neu gebaut)
  var LETZTE = { text: "", art: "", zeit: 0 };
  function meldung(text, art) {
    LETZTE = { text: text || "", art: art || "", zeit: Date.now() };
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
    // Jede Antwort selbst werten – auch dann noch, wenn die Probe schon zurückgegeben ist (das Kind sieht den neuen Stand)
    if (WERTEN_ROUTE[C.modul] && (r.details || []).length) h += '<button type="button" data-prl="werten" title="Jede Antwort selbst als richtig oder falsch werten – auch nach der Rückgabe. Punkte und Note rechnen sich neu.">✏️ Punkte ändern</button>';
    h += '<button type="button" data-prl="druck" title="Korrigierte Probe mit Unterschriftsfeld – zum Mitgeben für die Eltern">🖨 Elternansicht</button>';
    // Probenmodus: Hat der Browser des Kindes etwas festgehalten (Verlassen mit Uhrzeit und Dauer, Einfügen, Kopieren)?
    var auffaellig = global.ProbeProtokoll ? global.ProbeProtokoll.kurz(r) : "";
    if (auffaellig || r.verlassen) h += '<button type="button" class="auffaellig" data-prl="prot" title="Probenüberwachung ansehen">🔎 ' + esc(auffaellig || r.verlassen + "× verlassen") + "</button>";
    // Notenschutz LRS für diese eine Abgabe an/aus: Der Server wertet die gespeicherten Antworten neu (ohne Rechtschreibung)
    if (LRS_ROUTE[C.modul]) h += '<button type="button" data-prl="lrs"' + (r.lrs ? ' class="lrs-an"' : "") + ' aria-pressed="' + Boolean(r.lrs) + '" title="' +
      (r.lrs ? "Mit Notenschutz LRS gewertet: Rechtschreibung zählt nicht. Klicken schaltet ihn für diese Abgabe wieder aus." : "Notenschutz LRS für diese Abgabe einschalten: Die Rechtschreibung zählt dann nicht, Punkte und Note werden neu berechnet.") + '">' +
      (r.lrs ? "✓ LRS: Rechtschreibung zählt nicht" : "LRS: Rechtschreibung nicht werten") + "</button>";
    if (!r.code) h += '<button type="button" disabled title="Diese Abgabe wurde ohne Code geschrieben – zurückgeben geht nur mit Code">📤 Zurückgeben</button>';
    else if (e) h += '<button type="button" data-prl="nehmen">Rückgabe zurücknehmen</button>';
    else h += '<button type="button" class="haupt" data-prl="geben" title="Das Kind sieht dann Antworten, Punkte und bei Fehlern die Lösung">📤 Zurückgeben</button>';
    el.innerHTML = h;
    var druck = el.querySelector('[data-prl="druck"]'), geben = el.querySelector('[data-prl="geben"]'), nehmen = el.querySelector('[data-prl="nehmen"]');
    if (druck) druck.addEventListener("click", function () { drucken([r]); });
    var prot = el.querySelector('[data-prl="prot"]');
    if (prot) prot.addEventListener("click", function () { protokollZeigen(r); });
    var werten = el.querySelector('[data-prl="werten"]');
    if (werten) werten.addEventListener("click", function () { wertenZeigen(r); });
    var lrs = el.querySelector('[data-prl="lrs"]');
    if (lrs) lrs.addEventListener("click", function () {
      var an = !r.lrs;
      if (!global.confirm(an ? "Notenschutz LRS für " + C.wer(r) + " einschalten?\n\nIn dieser Abgabe zählt die Rechtschreibung dann nicht: Die Antworten werden neu gewertet, Punkte und Note können sich ändern.\n\nFür künftige Proben schaltest du LRS in der Verwaltung beim Code ein (Klasse → Codes & Namen)."
        : "Notenschutz LRS für " + C.wer(r) + " wieder ausschalten?\n\nIn dieser Abgabe zählt die Rechtschreibung dann wieder. Punkte und Note werden neu berechnet.")) return;
      lrs.disabled = true; lrs.textContent = "Wird neu gewertet …";
      global.fetch(C.api + LRS_ROUTE[C.modul], { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: C.passwort(), submissionId: r.id, lrs: an }) })
        .then(function (a) { return a.json().catch(function () { return {}; }).then(function (d) {
          if (!a.ok || !d.ok) throw new Error(d.message || (a.status === 404 && !d.error ? "Der Server kennt das noch nicht (alter Stand)." : d.error || "HTTP " + a.status));
          return d;
        }); })
        .then(function (d) {
          meldung(C.wer(r) + ": Notenschutz LRS ist " + (d.lrs ? "an – Rechtschreibung zählt nicht" : "aus") + ". Neu gewertet: " + d.score + " von " + d.total + " Punkten, Note " + d.grade + ".");
          var neu = C.neuLaden || global.loadResults;
          if (typeof neu === "function") neu(); else { r.lrs = d.lrs; zeichnen(); }
        })
        .catch(function (x) { zeichnen(); meldung("Das hat nicht geklappt: " + x.message, "bad"); });
    });
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

  function dialog(html, beimSchliessen) {
    var dlg = doc.getElementById("prl-dlg");
    if (!dlg) { dlg = doc.createElement("dialog"); dlg.id = "prl-dlg"; doc.body.appendChild(dlg); }
    dlg.innerHTML = '<button type="button" class="zu">Schließen</button>' + html;
    dlg.querySelector(".zu").addEventListener("click", function () { dlg.close(); });
    dlg.onclose = beimSchliessen || null;
    if (typeof dlg.showModal === "function") { if (!dlg.open) dlg.showModal(); } else dlg.setAttribute("open", "");
    return dlg;
  }
  function protokollZeigen(r) {
    dialog("<h3>" + esc(C.wer(r)) + '</h3><p class="unter">' + esc(r.testTitle || "") + "</p>" +
      (global.ProbeProtokoll ? global.ProbeProtokoll.html(r) : "<p>" + esc(r.verlassen || 0) + "× verlassen</p>"));
  }
  // Liste der Abgaben neu laden (die Seite zeichnet sie dann mit dem neuen Stand)
  function listeNeu() {
    var neu = C.neuLaden || global.loadResults;
    if (typeof neu === "function") neu(); else zeichnen();
  }

  /* „Punkte ändern“: jede Antwort einer Abgabe als richtig oder falsch werten. Jeder Klick speichert sofort
     (Route des Moduls, WERTEN_ROUTE); der Server rechnet Punkte und Note neu. Das geht vor und nach der Rückgabe –
     das Kind liest in seiner Korrektur immer den aktuellen Stand der Abgabe. */
  function wertenZeigen(r) {
    var geaendert = false, route = WERTEN_ROUTE[C.modul], ZAEHLT = "Zählt – richtig geschrieben: ";
    var dlg = dialog('<div id="prl-werten"></div>', function () {
      if (!geaendert) return;
      meldung(C.wer(r) + ": neu gewertet – " + r.score + " von " + r.total + " Punkten, Note " + r.grade + ".");
      listeNeu();
    });
    var box = dlg.querySelector("#prl-werten");
    var nrVon = function (d, i) { return d.nr != null ? d.nr : i + 1; };
    function zeile(d, i) {
      var ok = Boolean(d.correct), nr = nrVon(d, i);
      return '<div class="prl-z ' + (ok ? "ok" : "nein") + '"><div class="was"><b>' + esc(nr) + ". " + esc(d.prompt || "") + "</b>" +
        '<span class="antw">' + (d.given ? "„" + esc(text(d.given, d.labels)) + "“" : "<i>keine Antwort</i>") + "</span>" +
        (!ok && d.expected ? '<span class="neben">Lösung: ' + esc(text(d.expected, d.labels)) + "</span>" : "") +
        (d.comment ? '<span class="neben">' + esc(d.comment) + "</span>" : "") +
        (d.scoredBy === "lehrkraft" ? '<span class="selbst">von dir gewertet</span>' : d.ai ? '<span class="neben">von der KI anerkannt' + (d.aiReason ? ": " + esc(d.aiReason) : "") + "</span>" : "") + "</div>" +
        '<div class="wahl"><button type="button" data-nr="' + esc(nr) + '" data-p="1" aria-pressed="' + ok + '">✓ richtig</button>' +
        '<button type="button" data-nr="' + esc(nr) + '" data-p="0" aria-pressed="' + !ok + '">✗ falsch</button></div></div>';
    }
    function zeichne(hinweis, schlecht) {
      var alt = box.querySelector(".prl-liste"), oben = alt ? alt.scrollTop : 0, e = eintrag(r);
      box.innerHTML = "<h3>" + esc(C.wer(r)) + '</h3><p class="unter">' + esc(r.testTitle || "") + "</p>" +
        '<p class="note-stand"><b>Note ' + esc(r.grade) + "</b> · " + esc(r.score) + " von " + esc(r.total) + " Punkten (" + esc(r.percent) + " %)</p>" +
        '<p class="hinw">Mit „richtig“ oder „falsch“ wertest du eine Antwort selbst – jeder Klick wird sofort gespeichert, Punkte und Note rechnen sich neu. ' +
        (e ? "<b>📤 Zurückgegeben am " + esc(datum(e.freigegebenAm)) + ":</b> Das Kind sieht jede Änderung sofort in seiner Korrektur." : "Das geht auch dann noch, wenn die Probe schon zurückgegeben ist.") + "</p>" +
        '<div class="prl-liste">' + (r.details || []).map(zeile).join("") + '</div><p id="prl-wmsg" role="status"' + (schlecht ? ' class="bad"' : "") + ">" + esc(hinweis || "") + "</p>";
      box.querySelector(".prl-liste").scrollTop = oben;
    }
    box.addEventListener("click", function (ev) {
      var b = ev.target && ev.target.closest ? ev.target.closest("button[data-p]") : null;
      if (!b || b.disabled || b.getAttribute("aria-pressed") === "true") return;
      var nr = Number(b.getAttribute("data-nr")), punkte = Number(b.getAttribute("data-p"));
      var d = (r.details || []).filter(function (x, i) { return Number(nrVon(x, i)) === nr; })[0];
      if (!d) return;
      Array.prototype.forEach.call(box.querySelectorAll("button[data-p]"), function (x) { x.disabled = true; });
      modulPost(route, { submissionId: r.id, nr: nr, points: punkte }).then(function (a) {
        // Rückmeldung wie auf dem Server: Der Hinweis der Regel („Großschreibung: …“) steht nur da, solange die Antwort nicht zählt
        var bisher = String(d.comment || "").indexOf(ZAEHLT) === 0 ? "" : d.comment || "";
        if (punkte) { if (bisher && !d.regelHinweis) d.regelHinweis = bisher; d.comment = ""; }
        else d.comment = bisher || d.regelHinweis || "";
        d.correct = punkte === 1; d.scoredBy = "lehrkraft"; d.typo = false; d.ai = false; d.aiReason = "";
        r.score = a.score; r.percent = a.percent; r.grade = a.grade; geaendert = true;
        zeichne("Gespeichert: Nr. " + nr + " zählt jetzt als " + (punkte ? "richtig" : "falsch") + " – " + a.score + " von " + r.total + " Punkten, Note " + a.grade + ".");
      }).catch(function (x) { zeichne("Das hat nicht geklappt: " + x.message, true); });
    });
    zeichne();
  }

  /* „Nachwerten“: Der Server prüft die gespeicherten Antworten der angezeigten Abgaben nach den aktuellen Regeln
     (ohne KI) und wertet nur auf. Der Bericht nennt jede Antwort, die jetzt zählt. */
  function nachwerten(rows, knopf) {
    if (!global.confirm(rows.length + (rows.length === 1 ? " angezeigte Abgabe" : " angezeigte Abgaben") + " nach den aktuellen Regeln nachwerten?\n\n" +
      "Der Server prüft die gespeicherten Antworten noch einmal (ohne KI). Es wird nur aufgewertet: Eine Antwort, die nach den aktuellen Regeln richtig ist, bekommt ihren Punkt – " +
      "zum Beispiel die richtige Vokabel mit einer weiteren richtigen Form dahinter. Was schon zählt und was du selbst gewertet hast, bleibt.\n\n" +
      "Ist eine Probe schon zurückgegeben, sieht das Kind den neuen Stand sofort.")) return;
    knopf.disabled = true;
    modulPost(NACHWERTEN_ROUTE[C.modul], { submissionIds: rows.map(function (r) { return r.id; }) }).then(function (d) {
      var liste = d.abgaben || [];
      knopf.disabled = false;
      if (!liste.length) { meldung("Nachgewertet: keine Änderung – alle Antworten sind schon nach den aktuellen Regeln gewertet."); return; }
      meldung("Nachgewertet: " + d.anzahl + (d.anzahl === 1 ? " Antwort zählt" : " Antworten zählen") + " jetzt als richtig.");
      dialog("<h3>Nachgewertet</h3>" + '<p class="hinw">' + esc(d.anzahl) + (d.anzahl === 1 ? " Antwort zählt" : " Antworten zählen") + " jetzt als richtig – bei " +
        liste.length + (liste.length === 1 ? " Kind" : " Kindern") + ". Alles andere ist unverändert.</p>" + '<div class="prl-liste">' + liste.map(function (a) {
          return '<div class="prl-z ok"><div class="was"><b>' + esc(C.wer(a)) + "</b>" + (a.antworten || []).map(function (x) {
            return '<span class="antw">Nr. ' + esc(x.nr) + " · " + esc(x.prompt) + " → „" + esc(x.given) + "“</span>";
          }).join("") + '<span class="neben">vorher ' + esc(a.vorher.score) + " Punkte, Note " + esc(a.vorher.grade) + " · jetzt " + esc(a.score) + " von " + esc(a.total) + " Punkten, Note " + esc(a.grade) + "</span></div></div>";
        }).join("") + "</div>", listeNeu);
    }).catch(function (x) { knopf.disabled = false; meldung("Nachwerten hat nicht geklappt: " + x.message, "bad"); });
  }

  function leiste() {
    // Die Leiste steht über der Ergebnistabelle – oder über der Liste der Abgaben, die die Seite nennt (cfg.liste)
    var tabelle = ZELLEN.length ? (ZELLEN[0].td.closest("table") || (C.liste && C.liste()) || null) : null;
    var alt = doc.getElementById("prl-leiste");
    if (!tabelle) { if (alt) alt.remove(); return; }
    var rows = ZELLEN.map(function (z) { return z.r; }), mitCode = rows.filter(function (r) { return r.code; });
    var zurueck = mitCode.filter(eintrag).length, offen = mitCode.filter(function (r) { return !eintrag(r); });
    var haken = alt ? mitLoesung() : true, letzte = Date.now() - LETZTE.zeit < 30000 ? LETZTE : { text: "", art: "" };
    if (alt) alt.remove();
    var el = doc.createElement("div"); el.id = "prl-leiste"; el.className = "prl-leiste";
    el.innerHTML = "<span><b>📤 " + zurueck + " von " + mitCode.length + "</b> an die Kinder zurückgegeben</span>" +
      '<label><input type="checkbox" id="prl-loesung"' + (haken ? " checked" : "") + '> mit Lösungen</label><span class="platz"></span>' +
      (NACHWERTEN_ROUTE[C.modul] ? '<button type="button" class="neben" id="prl-nachwerten" title="Die gespeicherten Antworten der angezeigten Abgaben nach den aktuellen Regeln noch einmal prüfen – es wird nur aufgewertet">🔁 Nachwerten</button>' : "") +
      '<button type="button" class="neben" id="prl-alle-druck">🖨 Alle für die Eltern drucken</button>' +
      '<button type="button" id="prl-alle"' + (offen.length ? "" : " disabled") + ">📤 Alle zurückgeben</button>" +
      "<p>Zurückgegebene Proben sehen die Kinder mit ihrem Code auf der Startseite unter „Zurückbekommen“: Antworten, Punkte, bei Fehlern die richtige Lösung – zum Ansehen und zum Drucken für die Eltern. " +
      "Die Elternansicht kannst du auch selbst drucken, einzeln oder für alle Abgaben der Liste (je Kind ein Blatt mit Unterschriftsfeld). " +
      "🔎 Probenmodus: Hat ein Kind die Probe verlassen oder etwas einfügen wollen, steht das mit Uhrzeit und Dauer bei seiner Abgabe." +
      (WERTEN_ROUTE[C.modul] ? " ✏️ Punkte ändern: jede Antwort selbst als richtig oder falsch werten – auch wenn die Probe schon zurückgegeben ist; das Kind sieht dann den neuen Stand." : "") +
      (NACHWERTEN_ROUTE[C.modul] ? " 🔁 Nachwerten: prüft die gespeicherten Antworten nach den aktuellen Regeln und wertet nur auf." : "") + "</p>" +
      '<span id="prl-msg" role="status"></span>';
    tabelle.parentNode.insertBefore(el, tabelle);
    if (letzte.text) { var m = doc.getElementById("prl-msg"); m.textContent = letzte.text; m.style.color = letzte.art === "bad" ? "#b3261e" : "#17633a"; }
    doc.getElementById("prl-alle-druck").addEventListener("click", function () { drucken(rows); });
    var nach = doc.getElementById("prl-nachwerten");
    if (nach) nach.addEventListener("click", function () { nachwerten(rows, nach); });
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

  // Export-Datei des Servers (CSV oder Excel) vor dem Speichern um die Namen ergänzen: Der Server kennt nur Codes, die
  // Namensliste liegt in diesem Browser. js/export-namen.js liegt neben diesem Skript und wird beim ersten Export geladen.
  function mitNamen(blob) {
    return new Promise(function (fertig) {
      if (global.GrumiExportNamen || !EIGENES) return fertig();
      var s = doc.createElement("script"); s.src = EIGENES.replace(/[^/]*$/, "") + "export-namen.js";
      s.onload = fertig; s.onerror = fertig;
      doc.head.appendChild(s);
    }).then(function () { return global.GrumiExportNamen ? global.GrumiExportNamen.datei(blob, C && C.namen) : blob; });
  }

  global.ProbeRueckgabeLehrer = { start: start, zelle: zelle, blattDaten: blattDaten, mitNamen: mitNamen };
})(window);
