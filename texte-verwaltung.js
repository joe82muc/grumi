/* Verwaltung für die Lehrkraft (proben-verwalten.html, Klasse der 7. Stufe → Reiter „Deutsch“):
 * - Verweis auf die Korrektur der Deutsch-Proben (7M/Deutsch/proben-lehrer.html)
 * - Schülertexte aus dem Schreibtrainer der Lernmodule: je Kind und Schreibauftrag der Originaltext, die
 *   überarbeiteten Fassungen mit der Rückmeldung der KI und ein Kommentar der Lehrkraft (den das Kind beim Auftrag sieht).
 * Aufruf aus lernfortschritt.js:  TexteVerwaltung.zeige(el, { api, pw, klasse, liste: window.D7, name: code => "…" })
 * Server: /api/d7/lehrer/texte, …/texte/kommentar, …/texte/loeschen (englisch_9, d7-texte.js).
 * Deutsch 8: ctx.stufe = 8, ctx.ordner = "8/Deutsch/" – gleiche Ansicht, Server /api/d8; dazu aus der Schreibwerkstatt
 * der laufende Entwurf mit der Planung und das Kennzeichen „abgegeben“.
 * Der Server kennt nur den Code des Kindes; den Namen dazu hält die Verwaltung im Browser der Lehrkraft (ctx.name).
 */
(function (global) {
  "use strict";
  var doc = global.document;

  var CSS = "" +
    ".tx-kasten{border:1.5px solid var(--line);border-radius:12px;background:#fff;margin:.9rem 0 0;padding:.8rem .9rem}" +
    ".tx-kasten h3{margin:0 0 .3rem;font-size:1.05rem}" +
    ".tx-proben{display:flex;flex-wrap:wrap;gap:.6rem 1rem;align-items:center;justify-content:space-between;border-color:#f1d9a0;background:#fffaf0}" +
    ".tx-proben a{display:inline-block;padding:.45rem 1rem;border-radius:999px;background:#b23a48;color:#fff;font-weight:800;text-decoration:none}" +
    ".tx-eintrag{border-top:1px solid var(--line);padding:.55rem 0}" +
    ".tx-kopf{display:grid;grid-template-columns:1fr auto;gap:.3rem .8rem;align-items:center}" +
    ".tx-kopf small{display:block;color:var(--muted);font-weight:700;font-size:.8rem}" +
    ".tx-knopf{border:1.5px solid var(--line);border-radius:999px;padding:.3rem .8rem;font:800 .8rem inherit;font-family:inherit;cursor:pointer;background:#fff;color:var(--accent)}" +
    ".tx-knopf.weg{color:#b91c1c}.tx-knopf[disabled]{opacity:.6;cursor:wait}" +
    ".tx-sicht{margin:.5rem 0 0;padding:.7rem .8rem;border:1.5px solid var(--line);border-radius:10px;background:#fafbfd}" +
    ".tx-fassung{margin:0 0 .8rem}.tx-fassung b{display:block;font-size:.8rem;letter-spacing:.04em;text-transform:uppercase;color:#8a2434}" +
    ".tx-text{margin:.2rem 0;padding:.5rem .7rem;border-radius:8px;background:#fff;border:1px solid var(--line);white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.55}" +
    ".tx-ki{margin:.2rem 0 0;padding:.4rem .7rem;border-left:3px solid #8e55c7;background:#f8f5fe;font-size:.88rem}" +
    ".tx-sicht textarea{display:block;width:100%;min-height:60px;margin:.3rem 0;padding:.5rem .6rem;border:1.5px solid var(--line);border-radius:8px;font:inherit}" +
    ".tx-hinweis{color:var(--muted);font-size:.86rem;margin:.3rem 0 0}";

  function stil() {
    if (doc.getElementById("tx-stil")) return;
    var s = doc.createElement("style"); s.id = "tx-stil"; s.textContent = CSS; doc.head.appendChild(s);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function post(ctx, route, body) {
    body = body || {}; body.password = ctx.pw; body.klasse = ctx.klasse;
    return fetch(ctx.api + "/api/d" + (ctx.stufe || 7) + "/lehrer/" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok || !d.ok) throw new Error(d.error || "Der Server antwortet nicht (" + r.status + ")."); return d; }); });
  }
  function zeit(iso) {
    var d = new Date(iso); if (isNaN(d)) return "";
    var z = function (n) { return (n < 10 ? "0" : "") + n; };
    return z(d.getDate()) + "." + z(d.getMonth() + 1) + "., " + z(d.getHours()) + ":" + z(d.getMinutes()) + " Uhr";
  }
  function modulTitel(ctx, id) {
    var t = "";
    ((ctx.liste && ctx.liste.THEMEN) || []).forEach(function (th) { th.module.forEach(function (m) { if (m.id === id) t = th.kurz + " · " + m.titel; }); });
    return t || id;
  }

  function zeige(el, ctx) {
    stil();
    el.innerHTML = '<div class="tx-kasten tx-proben"><div><h3>📄 Proben Deutsch ' + (ctx.stufe || 7) + '</h3><span class="tx-hinweis" style="margin:0">Die KI korrigiert vor, du prüfst, bestätigst und gibst die korrigierte Probe an das Kind zurück. Freischalten kannst du die Proben hier im Reiter „Proben“ oder auf der Korrekturseite.</span></div>' +
      '<a href="' + (ctx.ordner || "7M/Deutsch/") + 'proben-lehrer.html">Proben korrigieren und zurückgeben →</a></div>' +
      '<div class="tx-kasten"><h3>✍️ Schülertexte aus dem Schreibtrainer' + (ctx.stufe === 8 ? " und der Schreibwerkstatt" : "") + '</h3><p class="tx-hinweis">In den Modulen schreiben die Kinder längere Texte. Jede Fassung wird aufbewahrt: der Originaltext, die Überarbeitungen und die Rückmeldung der KI dazu. ' + (ctx.stufe === 8 ? "Aus der Schreibwerkstatt siehst du außerdem den laufenden Entwurf mit der Planung und ob das Kind seinen Text abgegeben hat. " : "") + 'Dein Kommentar erscheint beim Kind unter dem Schreibauftrag.</p><div id="tx-liste"><div class="skel">Texte werden geladen …</div></div></div>';
    var liste = el.querySelector("#tx-liste"), eintraege = [];
    function zeichnen(offenId) {
      if (!eintraege.length) { liste.innerHTML = '<p class="tx-hinweis">Aus dieser Klasse gibt es noch keine Texte. Sie entstehen, sobald ein Kind – mit seinem Code angemeldet – im Schreibtrainer eine Rückmeldung holt.</p>'; return; }
      liste.innerHTML = eintraege.map(function (e) {
        var letzte = e.fassungen[e.fassungen.length - 1] || e.entwurf || {}, offen = e.id === offenId;
        return '<div class="tx-eintrag" data-id="' + esc(e.id) + '"><div class="tx-kopf"><div><b>' + esc((ctx.name && ctx.name(e.code) ? ctx.name(e.code) + " (Code " + e.code + ")" : "Code " + e.code)) + "</b> · " + esc(e.titel || e.aufgabe) +
          "<small>" + esc(modulTitel(ctx, e.modul)) + " · " + e.fassungen.length + (e.fassungen.length === 1 ? " Fassung" : " Fassungen") + " · zuletzt " + zeit(letzte.zeit) + " · " + (letzte.woerter || 0) + " Wörter" + (e.abgegeben ? " · 📤 abgegeben (Fassung " + e.abgegeben.nr + ")" : e.entwurf && !e.fassungen.length ? " · Entwurf, noch nicht abgegeben" : "") + (e.lehrerKommentar ? " · 💬 kommentiert" : "") + "</small></div>" +
          '<button type="button" class="tx-knopf" data-tx="auf">' + (offen ? "schließen" : "ansehen") + "</button></div>" + (offen ? sicht(e) : "") + "</div>";
      }).join("");
    }
    // Schreibwerkstatt (Deutsch 8): Planung und laufender Entwurf – der Entwurf nur, wenn er neuer ist als die letzte Fassung
    function entwurf(e) {
      var w = e.entwurf; if (!w) return "";
      var plan = Object.keys(w.plan || {}), letzte = e.fassungen[e.fassungen.length - 1];
      // Beschriftungen: die das Modul mitgeschickt hat (planNamen), sonst die der bekannten Schreibformen
      var eigene = Object.keys(e.planNamen || {}).map(function (k) { return { id: k, label: e.planNamen[k] }; });
      var namen = global.AufsatzEditor ? global.AufsatzEditor.planListe("", eigene, w.plan) : plan.map(function (k) { return { label: (e.planNamen || {})[k] || k, text: w.plan[k] }; });
      return (plan.length ? '<div class="tx-fassung"><b>Planung des Kindes</b><div class="tx-text">' + namen.map(function (x) { return esc(x.label) + ": " + esc(x.text); }).join("\n") + "</div></div>" : "") +
        (w.text && (!letzte || letzte.text !== w.text) ? '<div class="tx-fassung"><b>Laufender Entwurf · ' + zeit(w.zeit) + " · " + (w.woerter || 0) + ' Wörter (noch nicht abgegeben)</b><div class="tx-text">' + esc(w.text) + "</div></div>" : "");
    }
    function sicht(e) {
      return '<div class="tx-sicht">' + (e.auftrag ? '<p class="tx-hinweis" style="margin:0 0 .6rem"><b>Auftrag:</b> ' + esc(e.auftrag) + "</p>" : "") +
        entwurf(e) +
        e.fassungen.map(function (f, i) {
          var fb = f.feedback || {};
          return '<div class="tx-fassung"><b>' + (i === 0 ? "Originaltext" : "Überarbeitung") + " (Fassung " + f.nr + ") · " + zeit(f.zeit) + " · " + (f.woerter || 0) + " Wörter" + (f.abgegeben ? " · 📤 abgegeben" : "") + "</b>" +
            '<div class="tx-text">' + esc(f.text) + "</div>" +
            (fb.gelungen || fb.naechstes ? '<div class="tx-ki"><b style="display:inline;text-transform:none;letter-spacing:0;color:#5a3a9a">' + (fb.quelle === "ki" ? "Rückmeldung der KI: " : "Ohne KI: ") + "</b>" +
              esc([fb.gelungen, fb.naechstes && "Als Nächstes: " + fb.naechstes, fb.stelle && "Stelle: " + fb.stelle, fb.tipp && "Tipp: " + fb.tipp].filter(Boolean).join(" · ")) + "</div>" : "") + "</div>";
        }).join("") +
        '<label style="font-weight:800;font-size:.86rem">Dein Kommentar für das Kind<textarea data-tx="kommentar">' + esc(e.lehrerKommentar || "") + "</textarea></label>" +
        '<div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center"><button type="button" class="tx-knopf" data-tx="speichern">Kommentar speichern</button><button type="button" class="tx-knopf weg" data-tx="weg">Texte dieses Auftrags löschen</button><span class="tx-hinweis" data-tx="meldung" style="margin:0"></span></div></div>';
    }
    liste.addEventListener("click", function (ev) {
      var knopf = ev.target.closest("[data-tx]"); if (!knopf) return;
      var box = knopf.closest(".tx-eintrag"), id = box.getAttribute("data-id"), e = eintraege.filter(function (x) { return x.id === id; })[0];
      if (!e) return;
      var art = knopf.getAttribute("data-tx");
      if (art === "auf") { zeichnen(box.querySelector(".tx-sicht") ? "" : id); return; }
      var meldung = box.querySelector('[data-tx="meldung"]');
      if (art === "speichern") {
        knopf.disabled = true;
        post(ctx, "texte/kommentar", { id: id, kommentar: box.querySelector('textarea[data-tx="kommentar"]').value }).then(function (d) {
          e.lehrerKommentar = d.eintrag.lehrerKommentar; meldung.textContent = "Gespeichert – das Kind sieht den Kommentar beim Schreibauftrag.";
        }).catch(function (err) { meldung.textContent = err.message; }).then(function () { knopf.disabled = false; });
      }
      if (art === "weg") {
        if (!global.confirm("Alle Fassungen dieses Auftrags von diesem Kind löschen?")) return;
        knopf.disabled = true;
        post(ctx, "texte/loeschen", { id: id }).then(function () { eintraege = eintraege.filter(function (x) { return x.id !== id; }); zeichnen(""); })
          .catch(function (err) { meldung.textContent = err.message; knopf.disabled = false; });
      }
    });
    post(ctx, "texte", {}).then(function (d) { eintraege = d.eintraege || []; zeichnen(""); })
      .catch(function (err) { liste.innerHTML = '<p class="tx-hinweis">Die Texte konnten nicht geladen werden: ' + esc(err.message) + "</p>"; });
  }

  global.TexteVerwaltung = { zeige: zeige };
})(window);
