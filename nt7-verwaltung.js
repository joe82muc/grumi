/* Verwaltung für die Lehrkraft (proben-verwalten.html, Klasse der 7. Stufe → Reiter „Natur und Technik“):
 * Themenbereiche und Module von NT 7 für diese Klasse freischalten oder sperren.
 * Aufruf aus lernfortschritt.js:  NT7Verwaltung.freigabe(el, { api, pw, klasse })
 * Themen und Module: 7M/NT/themen.js (window.NT7). Server: /api/nt7/lehrer/freigabe (englisch_9, nt7-freigabe.js).
 * Die Proben des Fachs stehen unter den Modulen, die sie enthalten (js/proben-module.js: liste, probeModule in themen.js),
 * und lassen sich dort freischalten (einen eigenen Reiter „Proben“ gibt es nicht mehr). Eine Probe gilt für alle
 * Klassen ihres Zugs. Ist sie offen, steht der Link für die Kinder dabei.
 *
 * Auch für Informatik 7 (Module und Einheiten, 7M/Informatik/themen.js, Server /api/inf7):
 *   NT7Verwaltung.freigabe(el, { api, pw, klasse, liste: window.INF7, pfad: "/api/inf7", ordner: "7M/Informatik/",
 *                                worte: { titel, das, neu, von, plan } })
 * und für Deutsch 7 (Themenbereiche und Module, 7M/Deutsch/themen.js, Server /api/d7; worte.ohneProben: kein Hinweis auf Proben).
 *
 * Extra-Module (in der Liste mit extra: "<Kennung ihres Moduls>", z. B. „Zeitformen wiederholen“ in Deutsch 7) stehen
 * eingerückt unter ihrem Modul. Sie zählen bei „x von y offen“ nicht mit und folgen nicht „Alle freischalten“ –
 * jedes wird einzeln geschaltet.
 */
(function (global) {
  "use strict";
  var doc = global.document;

  var CSS = "" +
    ".nt7f{border:1.5px solid var(--line);border-radius:14px;padding:.2rem 1rem .9rem;margin:0 0 1.2rem;background:#fafbfd}" +
    ".nt7f>summary{cursor:pointer;font-weight:900;padding:.7rem 0;font-size:1.02rem}" +
    ".nt7f>summary small{font-weight:700;color:var(--muted)}" +
    ".nt7f-thema{border:1.5px solid var(--line);border-radius:12px;background:#fff;margin:.7rem 0 0;overflow:hidden}" +
    ".nt7f-kopf{display:flex;flex-wrap:wrap;gap:.5rem .8rem;align-items:center;justify-content:space-between;padding:.7rem .9rem;background:#f3f6fb}" +
    ".nt7f-kopf b{font-size:1rem}.nt7f-kopf small{display:block;color:var(--muted);font-weight:700;font-size:.8rem}" +
    ".nt7f-knoepfe{display:flex;flex-wrap:wrap;gap:.4rem}" +
    ".nt7f-zeile{display:grid;grid-template-columns:3.1rem 1fr auto auto;gap:.5rem .8rem;align-items:center;padding:.5rem .9rem;border-top:1px solid var(--line)}" +
    ".nt7f-zeile .nr{font-weight:900;color:var(--muted)}" +
    ".nt7f-zeile .nr.kz{justify-self:start;background:#eef2ff;color:#3730a3;border-radius:7px;padding:.12rem .4rem;font-size:.82rem;white-space:nowrap}" +
    ".nt7f-zeile.plan{color:var(--muted)}" +
    ".nt7f-zeile.extra{background:#fffaf2;padding-left:1.7rem}.nt7f-zeile.extra .nr{color:#b7791f}" +
    ".nt7f-extra-kopf{padding:.45rem .9rem .35rem 1.7rem;border-top:1px solid var(--line);background:#fffaf2;font-size:.86rem;color:#6b4e16}" +
    ".nt7f-extra-kopf b{display:block}" +
    ".nt7f-zeile a{font-size:.82rem;font-weight:800;color:var(--accent);white-space:nowrap}" +
    ".nt7f-probe{display:grid;grid-template-columns:3.1rem 1fr auto auto;gap:.5rem .8rem;align-items:center;padding:.55rem .9rem;border-top:1px solid var(--line);background:#f4f7ff}" +
    ".nt7f-probe .nr{font-size:1.05rem}.nt7f-probe a{font-size:.82rem;font-weight:800;color:var(--accent);white-space:nowrap}" +
    ".nt7f-probe small{display:block;color:var(--muted);font-weight:700;font-size:.78rem;line-height:1.4}" +
    ".nt7f-schalter{border:1.5px solid var(--line);border-radius:999px;padding:.32rem .8rem;font:800 .82rem inherit;font-family:inherit;cursor:pointer;background:#eef1f5;color:#4b5563;min-width:7.4rem}" +
    ".nt7f-schalter.offen{background:#e9f8ee;border-color:#9bd3ae;color:#15803d}" +
    ".nt7f-schalter[disabled]{opacity:.6;cursor:wait}" +
    ".nt7f-plan{font-size:.78rem;font-weight:800;color:var(--muted);white-space:nowrap}" +
    "@media(max-width:640px){.nt7f-zeile,.nt7f-probe{grid-template-columns:2.9rem 1fr auto}.nt7f-zeile a,.nt7f-probe a{grid-column:2}}";

  function stil() {
    if (doc.getElementById("nt7f-stil")) return;
    var s = doc.createElement("style");
    s.id = "nt7f-stil"; s.textContent = CSS;
    doc.head.appendChild(s);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function post(ctx, route, body) {
    body = body || {};
    body.password = ctx.pw; body.klasse = ctx.klasse;
    return fetch(ctx.api + (ctx.pfad || "/api/nt7") + "/lehrer/freigabe" + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || (r.status === 404 ? "Der Server kennt das Freischalten noch nicht (alter Stand)." : "HTTP " + r.status));
        return d;
      });
    });
  }

  function freigabe(el, ctx) {
    var N = ctx.liste || global.NT7;
    if (!N) { el.innerHTML = ""; return; }
    // Bezeichnungen: NT 7 spricht von Themen und Modulen, Informatik 7 von Modulen und Einheiten
    var W = ctx.worte || { titel: "Themen und Module", das: "das Modul", neu: "Neue Themenbereiche", von: "Modulen", plan: "Module in Vorbereitung" };
    var ORDNER = ctx.ordner || "7M/NT/";
    stil();
    var STAND = null, offenGeklappt = true;
    el.innerHTML = '<details class="nt7f" open><summary>🔓 ' + esc(W.titel) + ' freischalten <small>für Klasse ' + esc(ctx.klasse) + '</small></summary><div class="skel">Stand wird geladen …</div></details>';

    // Festes Kürzel des Moduls (themen.js: kz, z. B. „L3“) – nur hier in der Verwaltung zu sehen
    function nr(m, ersatz) {
      return m.kz ? '<span class="nr kz" title="Festes Kürzel dieses Moduls – nur in der Verwaltung zu sehen">' + esc(m.kz) + "</span>" : '<span class="nr">' + ersatz + "</span>";
    }
    // Proben des Fachs für den Zug dieser Klasse: [{ mod, id, titel, offen, aufgaben, punkte, klasse, link }]
    var G = global.GrumiProbenModule, PROBEN = [];
    var STUFE = parseInt(ctx.klasse, 10) || 0, ZUG = /M$/.test(ctx.klasse) ? "M" : "R";
    function listeVon(mod, t) { var n = typeof mod.liste === "function" ? mod.liste(t) : mod.liste; return n ? global[n] : null; }
    function probenLaden() {
      var mods = G && N.probeModule ? G.MODULES.filter(function (m) {
        return m.liste && m.listPath && m.unlockPath && (!m.stufen || m.stufen.indexOf(STUFE) >= 0) && (typeof m.liste === "function" || global[m.liste] === N);
      }) : [];
      return Promise.all(mods.map(function (mod) {
        return fetch(ctx.api + mod.listPath).then(function (r) { return r.ok ? r.json() : { tests: [] }; }).then(function (d) {
          return (d.tests || []).filter(function (t) { var k = mod.klasse(t); return listeVon(mod, t) === N && (k === String(STUFE) || k === STUFE + ZUG); })
            .map(function (t) { return { mod: mod, id: t.id, titel: t.title || t.id, offen: !!t.unlocked, aufgaben: t.itemCount, punkte: t.maxPoints, klasse: mod.klasse(t), link: mod.link ? mod.link(t) : "", schueler: mod.schueler ? mod.schueler(t) : "" }; });
        }).catch(function () { return []; });
      })).then(function (teile) { PROBEN = [].concat.apply([], teile); });
    }
    function fuerWen(p) { return /\d$/.test(p.klasse) ? "für alle " + p.klasse + ". Klassen" : "für alle " + p.klasse + "-Klassen"; }
    // Zeilen der Proben, die Module dieses Themenbereichs enthalten – sie stehen unter den Modulen
    function probenZeilen(t) {
      return PROBEN.filter(function (p) {
        // Englisch nennt den Bereich der Probe selbst (Unit aus der Test-ID), sonst zählen die enthaltenen Module
        return N.probeThemen ? N.probeThemen(p.id).indexOf(t.id) >= 0 : N.probeModule(p.id).some(function (m) { return t.module.indexOf(m) >= 0; });
      }).map(function (p) {
        var teile = [], inhalt = N.probeModule(p.id).map(function (m) { return m.kz; }).join(" ");
        if (p.aufgaben) teile.push(p.aufgaben + " Aufgaben");
        if (p.punkte) teile.push(p.punkte + " Punkte");
        if (inhalt) teile.push("enthält " + inhalt);
        teile.push("gilt " + fuerWen(p));
        return '<div class="nt7f-probe"><span class="nr" aria-hidden="true">📝</span><span><b>' + esc(p.titel) + "</b><small>" + esc(teile.join(" · ")) +
          (p.offen && p.schueler ? ' · <a href="' + esc(p.schueler) + '" target="_blank" rel="noopener">🔗 Seite für die Kinder ↗</a>' : "") + "</small></span>" +
          '<button class="nt7f-schalter' + (p.offen ? " offen" : "") + '" type="button" data-probe="' + esc(p.id) + '" data-offen="' + (p.offen ? "0" : "1") + '" aria-pressed="' + p.offen + '">' + (p.offen ? "✓ offen" : "🔒 gesperrt") + "</button>" +
          (p.link ? '<a href="' + esc(p.link) + '">Ergebnisse →</a>' : "<span></span>") + "</div>";
      }).join("");
    }
    function zeichnen(meldung) {
      var h = '<summary>🔓 ' + esc(W.titel) + ' freischalten <small>für Klasse ' + esc(ctx.klasse) + "</small></summary>" +
        '<p class="sub" style="margin:0 0 .2rem">Offen heißt: Die Kinder der ' + esc(ctx.klasse) + " sehen " + esc(W.das) + " nach der Anmeldung mit ihrem Code in ihrer Übersicht. " +
        esc(W.neu) + " sind zuerst gesperrt, damit du sie vorher ansehen kannst („Vorschau“)." + (W.ohneProben ? "" : " Die Proben (📝) stehen unter den Modulen, die sie enthalten – eine Probe gilt immer für alle Klassen ihres Zugs und schließt sich 3 Stunden nach dem Freischalten von selbst.") +
        " Das Kürzel vorn (z. B. " + esc(beispielKz()) + ") ist der feste Name des Moduls: Die Kinder sehen es nicht, bei jeder Probe steht damit, welche Module sie enthält.</p>" +
        '<div id="nt7f-msg">' + (meldung ? '<div class="note ' + meldung[1] + '" style="margin:.5rem 0 0">' + esc(meldung[0]) + "</div>" : "") + "</div>";
      N.THEMEN.forEach(function (t) {
        var haupt = t.module.filter(function (m) { return !m.extra; });
        var fertig = haupt.filter(function (m) { return m.href; });
        var offen = fertig.filter(function (m) { return N.offen(m, t, STAND); }).length;
        h += '<div class="nt7f-thema"><div class="nt7f-kopf"><div><b>' + t.icon + " " + esc(t.titel) + "</b><small>" +
          (fertig.length ? offen + " von " + fertig.length + " " + esc(W.von) + " offen" : esc(W.plan)) + "</small></div>" +
          (fertig.length ? '<div class="nt7f-knoepfe"><button class="btn btn-sm btn-ok" type="button" data-thema="' + esc(t.id) + '" data-offen="1"' + (offen === fertig.length ? " disabled" : "") + ">Alle freischalten</button>" +
            '<button class="btn btn-sm btn-ghost" type="button" data-thema="' + esc(t.id) + '" data-offen="0"' + (offen === 0 ? " disabled" : "") + ">Alle sperren</button></div>" : "") + "</div>";
        haupt.forEach(function (m, i) {
          if (!m.href) { h += '<div class="nt7f-zeile plan">' + nr(m, i + 1) + "<span>" + esc(m.titel) + '</span><span class="nt7f-plan">in Vorbereitung</span><span></span></div>'; return; }
          var o = N.offen(m, t, STAND);
          h += '<div class="nt7f-zeile">' + nr(m, i + 1) + "<span>" + esc(m.titel) + "</span>" +
            '<button class="nt7f-schalter' + (o ? " offen" : "") + '" type="button" data-modul="' + esc(m.id) + '" data-offen="' + (o ? "0" : "1") + '" aria-pressed="' + o + '">' + (o ? "✓ offen" : "🔒 gesperrt") + "</button>" +
            '<a href="' + esc(ORDNER) + esc(m.href) + '?vorschau=1" target="_blank" rel="noopener">Vorschau ↗</a></div>';
          // Extra-Module dieses Moduls: eingerückt, jedes einzeln schaltbar
          var extras = t.module.filter(function (x) { return x.extra === m.id && x.href; });
          if (extras.length) {
            h += '<div class="nt7f-extra-kopf"><b>＋ Extra zu „' + esc(m.titel) + "“ – einzeln freischalten</b>" +
              (m.extraFrage ? "Die Kinder sehen sie unter diesem Modul: „" + esc(m.extraFrage) + "“ Sie zählen nicht zum Lernfortschritt." : "") + "</div>";
          }
          extras.forEach(function (x) {
            var xo = N.offen(x, t, STAND);
            h += '<div class="nt7f-zeile extra">' + nr(x, "↳") + "<span>" + esc(x.titel) + "</span>" +
              '<button class="nt7f-schalter' + (xo ? " offen" : "") + '" type="button" data-modul="' + esc(x.id) + '" data-offen="' + (xo ? "0" : "1") + '" aria-pressed="' + xo + '">' + (xo ? "✓ offen" : "🔒 gesperrt") + "</button>" +
              '<a href="' + esc(ORDNER) + esc(x.href) + '?vorschau=1" target="_blank" rel="noopener">Vorschau ↗</a></div>';
          });
        });
        h += probenZeilen(t) + "</div>";
      });
      var d = el.querySelector("details");
      d.innerHTML = h;
      d.open = offenGeklappt;
      d.addEventListener("toggle", function () { offenGeklappt = d.open; });
      Array.prototype.forEach.call(d.querySelectorAll("[data-modul]"), function (b) {
        b.addEventListener("click", function () { setzen(b, { art: "modul", id: b.getAttribute("data-modul"), offen: b.getAttribute("data-offen") === "1" }); });
      });
      Array.prototype.forEach.call(d.querySelectorAll("[data-probe]"), function (b) {
        b.addEventListener("click", function () {
          var p = PROBEN.filter(function (x) { return x.id === b.getAttribute("data-probe"); })[0], auf = b.getAttribute("data-offen") === "1";
          if (!p) return;
          b.disabled = true;
          fetch(ctx.api + p.mod.unlockPath, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: ctx.pw, testId: p.id, open: auf }) })
            .then(function (r) { return r.json().catch(function () { return {}; }).then(function (x) { if (!r.ok || !x.ok) throw new Error(x.error || "HTTP " + r.status); }); })
            .then(probenLaden)
            .then(function () { zeichnen(["„" + p.titel + "“ ist jetzt " + (auf ? "freigeschaltet – " + fuerWen(p) + ". Die Kinder finden sie auf ihrer Startseite und in der Übersicht des Fachs; der Link steht auch bei der Probe." : "gesperrt."), "ok"]); })
            .catch(function (x) { b.disabled = false; zeichnen(["Die Probe ließ sich nicht umschalten: " + x.message, "bad"]); });
        });
      });
      Array.prototype.forEach.call(d.querySelectorAll("[data-thema]"), function (b) {
        b.addEventListener("click", function () {
          var t = N.THEMEN.filter(function (x) { return x.id === b.getAttribute("data-thema"); })[0];
          // Das Thema gilt danach für alle seine Module: Einzel-Einträge der Module räumt der Server mit auf
          // (Extra-Module bleiben, wie sie sind: Sie werden nur einzeln geschaltet)
          setzen(b, { art: "thema", id: t.id, offen: b.getAttribute("data-offen") === "1", module: t.module.filter(function (m) { return !m.extra; }).map(function (m) { return m.id; }) });
        });
      });
    }
    function beispielKz() {
      for (var i = 0; i < N.THEMEN.length; i++) for (var j = 0; j < N.THEMEN[i].module.length; j++) if (N.THEMEN[i].module[j].kz) return N.THEMEN[i].module[Math.min(2, N.THEMEN[i].module.length - 1)].kz || N.THEMEN[i].module[j].kz;
      return "A3";
    }
    function setzen(knopf, body) {
      knopf.disabled = true;
      post(ctx, "/setzen", body).then(function (d) {
        STAND = { themen: d.themen || {}, module: d.module || {} };
        zeichnen(["Gespeichert. Die Kinder der " + ctx.klasse + " sehen die Änderung, sobald sie ihre Übersicht öffnen oder neu laden.", "ok"]);
      }).catch(function (x) { knopf.disabled = false; zeichnen(["Das Freischalten hat nicht geklappt: " + x.message, "bad"]); });
    }

    Promise.all([post(ctx, "", {}), probenLaden()]).then(function (teile) {
      var d = teile[0];
      STAND = { themen: d.themen || {}, module: d.module || {} };
      zeichnen();
    }).catch(function (x) {
      el.querySelector("details").innerHTML = "<summary>🔓 " + esc(W.titel) + " freischalten</summary>" +
        '<div class="note bad">Der Stand konnte nicht geladen werden: ' + esc(x.message) + "</div>";
    });
  }

  global.NT7Verwaltung = { freigabe: freigabe };
})(window);
