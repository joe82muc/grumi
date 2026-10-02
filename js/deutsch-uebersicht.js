/* Deutsch 7, 8 und 9 · Übersichtsseiten: Fortschritt je Modul wie bei NT 7 (Balken, „⭐ n / m“, „Weiterlernen →“).
 * Ein Modul-Link <a class="mod" data-key="grumi-d9-sb-01" data-total="10"> (oder eine Karte .skarte) liest den Stand, den js/grammatik.js
 * auf diesem Gerät speichert – mit Code angemeldet je Kind (Schlüssel + "~code-123~"). */
(function () {
  "use strict";
  var kennung = "";
  try {
    var a = JSON.parse(localStorage.getItem("grumi-code-anmeldung") || "null");
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
