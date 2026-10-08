/* Deutsch 8: Start der Übersicht (index.html).
 * Die Übersicht selbst zeichnet ../../7M/Deutsch/uebersicht.js – dasselbe Skript wie in Deutsch 7. Es erwartet von der
 * Seite das Objekt „Modul“ (Hilfen und Anmeldung). In Deutsch 7 liefert das de-modul.js mit der alten Anmeldung des
 * Argumentationstrainers; Deutsch 8 kennt nur die Anmeldung mit Code (js/lernstand.js) und stellt hier bereit, was
 * die Übersicht braucht. Reihenfolge in index.html: themen.js, ../../js/lernstand.js, dieses Skript, uebersicht.js.
 */
(function () {
  "use strict";
  var SITZUNG = "grumi-code-anmeldung";
  var esc = function (s) { return String(s === undefined || s === null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  // Einmal anmelden: Im selben Browser-Tab gilt die Code-Anmeldung weiter, bis das Kind sich abmeldet, den Tab
  // schließt oder länger als 10 Minuten nichts tippt oder anklickt. Ein neuer Tab fragt wieder nach dem Code.
  // Derselbe Block steht in allen Skripten, die die Anmeldung lesen (js/lernstand.js, js/klasse.js, NT, Deutsch …).
  function grumiTab() {
    if (window.GrumiTab) return window.GrumiTab;
    var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
    function lies() { try { return JSON.parse(sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
    function merken(code) { try { sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
    function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
    ["pointerdown", "keydown"].forEach(function (n) { document.addEventListener(n, taetig, true); });
    return (window.GrumiTab = {
      merken: merken,
      gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
      ende: function () { try { sessionStorage.removeItem(K); } catch (_e) {} }
    });
  }
  function anmeldungLadung() {
    var p = window.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (window.__grumiLadung = window.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === anmeldungLadung()) { grumiTab().merken(s.code); return s; }
    if ((s.frisch && s.frisch === location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
      delete s.frisch; s.ladung = anmeldungLadung();
      try { localStorage.setItem(SITZUNG, JSON.stringify(s)); } catch (_e) {}
      grumiTab().merken(s.code); return s;
    }
    return null;
  }
  function codeSitzung() {
    try { var s = anmeldungGueltig(JSON.parse(localStorage.getItem(SITZUNG) || "null")); return s && s.code && s.kennung ? s : null; } catch (_e) { return null; }
  }

  window.Modul = {
    $: function (sel, root) { return (root || document).querySelector(sel); },
    esc: esc,
    API_BASE: window.D8 ? window.D8.API : "",
    // Die Anmeldung mit Vor- und Nachname (Argumentationstrainer in Deutsch 7) gibt es hier nicht
    session: { token: "", student: null },
    codeSitzung: codeSitzung,
    // Anmeldefenster von js/lernstand.js; auf der Übersicht lässt es sich auch wieder schließen
    openLogin: function () {
      if (!window.Lernstand) return;
      window.Lernstand.anmelden();
      var dlg = document.getElementById("ls-login"), los = document.getElementById("ls-los");
      if (!dlg || !los || document.getElementById("d8-login-zu")) return;
      var zu = document.createElement("button"); zu.type = "button"; zu.id = "d8-login-zu"; zu.className = "ls-ohne"; zu.textContent = "Abbrechen";
      zu.addEventListener("click", function () { dlg.close(); });
      los.parentNode.insertBefore(zu, los.nextSibling);
    },
    abmelden: function () { if (window.Lernstand) window.Lernstand.abmelden(); else { try { localStorage.removeItem(SITZUNG); } catch (_e) {} location.reload(); } },
    mitCodeStarten: function () {}
  };
})();
