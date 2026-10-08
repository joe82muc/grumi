/* NT 8: Zusätze der Übersicht (8M/NT/index.html, 8R/NT/index.html) – eingehängt in ../../7M/NT/uebersicht.js über
 * NT8.kachel und NT8.nachZeichnen (siehe dort). Braucht themen.js und karten.js.
 *
 * Je Themenbereich (= Stoff einer Probe), sobald dort etwas offen ist:
 *   „Probe N vorbereiten“: Themen mit Haken, Module bearbeitet, Lernkarten sicher – und die Knöpfe
 *   Lernkarten · Unsichere Karten · Probe-Vorbereitung · Lernkarten drucken.
 * Je Modul: Zeile „Lernkarten: 12 / 15 sicher“ (zählt nicht zum Abschluss des Moduls).
 * Proben: „abgegeben – wartet auf die Korrektur“ und, sobald die Lehrkraft zurückgibt, „Probe korrigiert –
 *   NEUE KORREKTUR“ mit dem Weg zur Korrekturseite (korrektur.html im Hauptordner; dort auch Druck für die Eltern).
 */
(function (global) {
  "use strict";
  var L = global.NT8, K = global.NT8Karten;
  if (!L || !K) return;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var RUECK = null, RUECK_FUER = "", KARTEN_FUER = "", VB = {};

  // Fortschritt eines Moduls auf diesem Gerät (wie in der Übersicht): Prozent oder -1 (noch nie geöffnet)
  function prozent(m, a) {
    try {
      var k = m.key + (a ? "~" + a.kennung + "~" : "");
      var stand = JSON.parse(localStorage.getItem(k + "-stand") || "null");
      if (stand && stand.t) return Math.round(Math.min(stand.g, stand.t) / stand.t * 100);
      var solved = Object.keys(JSON.parse(localStorage.getItem(k) || "{}") || {}).length;
      var total = +localStorage.getItem(k + "-total") || +localStorage.getItem(m.key + "-total") || 0;
      return total ? Math.round(Math.min(solved, total) / total * 100) : -1;
    } catch (_e) { return -1; }
  }
  // Ergebnis der letzten Probe-Vorbereitung (vorbereitung.js legt es auf dem Gerät ab)
  function vorbereitung(thema, a) {
    try { return JSON.parse(localStorage.getItem("grumi-nt8-vb~" + (a ? a.kennung : "gast") + "~" + thema.id) || "null"); } catch (_e) { return null; }
  }
  function abgegeben(a) {
    try { return JSON.parse(localStorage.getItem("grumi-nt8-abgegeben~" + (a ? a.kennung : "gast")) || "{}") || {}; } catch (_e) { return {}; }
  }

  L.kachel = function (thema, ctx) {
    if (!ctx.offen) return "";
    var a = ctx.a, zug = ctx.zug;
    var offene = thema.module.filter(function (m) { return m.href && !m.extra && L.offen(m, thema, ctx.stand); });
    if (!offene.length) return "";
    var ids = offene.map(function (m) { return m.id; }), nr = parseInt(thema.nr, 10);
    var pcts = offene.map(function (m) { return prozent(m, a); });
    var bearbeitet = pcts.filter(function (p) { return p >= 50; }).length;
    var da = K.geladen(ids), st = da ? K.status(ids, zug) : null;
    var vb = vorbereitung(thema, a);
    var base = ctx.base || "", q = "probe=" + encodeURIComponent(thema.id);
    var h = '<div class="vb" data-vb="' + esc(thema.id) + '"><div class="vb-kopf"><strong>🎯 NT 8 – Probe ' + nr + " vorbereiten</strong>" +
      '<span class="mod-status">' + (offene.length < thema.module.length ? offene.length + " von " + thema.module.length + " Modulen freigeschaltet" : "Stoff: alle " + thema.module.length + " Module") + "</span></div>" +
      '<ul class="vb-themen">' + offene.map(function (m, i) { return '<li class="' + (pcts[i] >= 100 ? "fertig" : "") + '">' + (pcts[i] >= 100 ? "✓ " : pcts[i] > 0 ? "◐ " : "○ ") + esc(m.titel) + "</li>"; }).join("") + "</ul>" +
      '<div class="vb-zahlen"><div><span>Module</span><span class="lk-bar"><span style="width:' + Math.round(bearbeitet / offene.length * 100) + '%"></span></span><b>' + bearbeitet + " / " + offene.length + " bearbeitet</b></div>" +
      "<div><span>Lernkarten</span>" + (st ? '<span class="lk-bar"><span style="width:' + st.pct + '%"></span></span><b>' + st.sicher + " / " + st.gesamt + " sicher</b>" : '<span class="lk-bar"></span><b>…</b>') + "</div>" +
      (vb ? "<div><span>Probe-Vorbereitung</span>" + '<span class="lk-bar"><span style="width:' + vb.pct + '%"></span></span><b>' + vb.pct + " % · " + esc(vb.wann || "") + "</b></div>" : "") + "</div>" +
      '<div class="vb-knoepfe"><a class="haupt" href="' + base + "lernkarten.html?" + q + '&modus=lernen">🧠 Lernkarten</a>' +
      '<a href="' + base + "lernkarten.html?" + q + '&modus=unsicher">🎯 Unsichere Karten</a>' +
      '<a href="' + base + "vorbereitung.html?" + q + '">🔁 Probe-Vorbereitung</a>' +
      '<a href="' + base + "lernkarten.html?" + q + '&druck=blatt">📄 Lernkarten drucken</a></div></div>';
    // Probe dieses Themenbereichs: abgegeben oder zurückbekommen?
    var eigene = (thema.proben || []).map(function (p) { return p[zug]; }).filter(Boolean);
    var zurueck = (RUECK || []).filter(function (r) { return r.modul === "nt8" && eigene.indexOf(r.testId) >= 0; });
    if (zurueck.length) {
      h += zurueck.map(function (r) {
        return '<a class="probe korrigiert' + (r.neu ? " neu" : "") + '" href="' + ctx.root + "korrektur.html?modul=nt8&id=" + encodeURIComponent(r.id) + '"><span>📄</span><div><strong>Probe ' + nr + " korrigiert" +
          (r.neu ? '<span class="neu-marke">NEUE KORREKTUR</span>' : "") + "</strong><br>" + esc(r.titel) + " – mit Punkten, Korrektur und deinem nächsten Lernschritt. Zum Drucken für die Eltern.</div>" +
          '<span class="mod-go">Korrektur öffnen →</span></a>';
      }).join("");
    } else {
      var ab = abgegeben(a), wann = eigene.map(function (id) { return ab[id]; }).filter(Boolean)[0];
      if (wann) h += '<div class="probe abgegeben"><span>✅</span><div><strong>Probe ' + nr + " abgegeben</strong><br>Deine Lehrkraft prüft die Korrektur. Sobald sie die Probe zurückgibt, steht sie hier.</div></div>";
    }
    return h;
  };

  L.nachZeichnen = function (app, ctx) {
    var a = ctx.a, zug = ctx.zug, schluessel = (a ? a.kennung : "gast") + "|" + zug;
    // Zeile „Lernkarten“ an jedem offenen Modul (sobald der Kartensatz geladen ist)
    var offene = [];
    Array.prototype.forEach.call(app.querySelectorAll("a.mod.ready[data-modul]"), function (karte) {
      var id = karte.getAttribute("data-modul"); offene.push(id);
      if (!K.geladen([id])) return;
      var st = K.status([id], zug);
      if (!st.gesamt) return;
      var body = karte.querySelector(".mod-body"), z = document.createElement("span");
      z.className = "mod-karten"; z.textContent = "🗂 Lernkarten: " + st.sicher + " / " + st.gesamt + " sicher";
      body.appendChild(z);
    });
    // Kartensätze und Stand vom Server einmal je Anmeldung holen, dann neu zeichnen
    if (offene.length && KARTEN_FUER !== schluessel + "|" + offene.join()) {
      KARTEN_FUER = schluessel + "|" + offene.join();
      K.laden(offene, function () { ctx.neu(); K.holen(offene, function (neu) { if (neu) ctx.neu(); }); });
    }
    // Zurückgegebene Proben (alle Fächer in einer Abfrage – hier zählen nur die von NT 8)
    if (a && !a.lehrer && RUECK_FUER !== a.kennung && global.fetch) {
      RUECK_FUER = a.kennung; RUECK = null;
      fetch(L.API + "/api/proben/rueckgabe/meine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code }) })
        .then(function (r) { return r.json(); }).then(function (d) { if (d && d.ok && Array.isArray(d.rueckgaben)) { RUECK = d.rueckgaben; if (RUECK.some(function (r) { return r.modul === "nt8"; })) ctx.neu(); } }).catch(function () {});
    }
    if (!a) { RUECK = null; RUECK_FUER = ""; }
  };
})(window);
