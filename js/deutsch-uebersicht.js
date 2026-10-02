/* Deutsch 7, 8 und 9 · Übersichtsseiten: Fortschritt je Modul wie bei NT 7 (Balken, „⭐ n / m“, „Weiterlernen →“).
 * Ein Modul-Link <a class="mod" data-key="grumi-d9-sb-01" data-total="10"> (oder eine Karte .skarte) liest den Stand, den js/grammatik.js
 * auf diesem Gerät speichert – mit Code angemeldet je Kind (Schlüssel + "~code-123~"). */
(function () {
  "use strict";
  // Code-Anmeldung gilt nur für den Seitenaufruf, in dem der Code eingetippt wurde (Schul-iPads, siehe js/lernstand.js)
  function anmeldungLadung() {
    var p = window.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (window.__grumiLadung = window.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === anmeldungLadung()) return s;
    if (s.frisch && s.frisch === location.pathname && Date.now() - (s.seit || 0) < 120000) {
      delete s.frisch; s.ladung = anmeldungLadung();
      try { localStorage.setItem("grumi-code-anmeldung", JSON.stringify(s)); } catch (_e) {}
      return s;
    }
    return null;
  }
  var kennung = "";
  try {
    var a = anmeldungGueltig(JSON.parse(localStorage.getItem("grumi-code-anmeldung") || "null"));
    if (a && a.code && a.kennung) kennung = "~" + a.kennung + "~";
  } catch (_e) {}
  Array.prototype.forEach.call(document.querySelectorAll(".mod[data-key], .skarte[data-key]"), function (m) {
    var total = +m.getAttribute("data-total") || 0, n = 0;
    try { n = Object.keys(JSON.parse(localStorage.getItem(m.getAttribute("data-key") + kennung) || "{}") || {}).length; } catch (_e) { n = 0; }
    if (!total || !n) return;
    n = Math.min(n, total);
    var pct = Math.round(n / total * 100), body = m.classList.contains("skarte") ? m : m.children[1];
    if (body) body.insertAdjacentHTML("beforeend", '<div class="prog"><div class="bar"><div style="width:' + pct + '%"></div></div><span>⭐ ' + n + " / " + total + "</span></div>");
    var go = m.querySelector(".mod-go");
    if (go) go.textContent = n >= total ? "Wiederholen →" : "Weiterlernen →";
  });
})();
