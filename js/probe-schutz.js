/* Proben auf Schul-iPads absichern (für alle Probe-Seiten, ohne Server):
 * - Autokorrektur, Wortvorschläge, Rechtschreibprüfung und automatische Großschreibung aus – in allen
 *   Textfeldern, auch in denen, die die Seite erst später baut.
 * - Antworten zwischenspeichern: Lädt Safari die Seite neu (wenig Speicher, Zurückwischen, Absturz), holt
 *   ProbeSchutz.start() sie zurück. Gespeichert wird nur auf diesem Gerät, je Probe und Code; nach der Abgabe
 *   oder spätestens nach 6 Stunden wird gelöscht. (Die beforeunload-Warnung zeigt Safari auf dem iPad nicht.)
 * - Verlassen zählen: Wechselt das Kind während der Probe in einen anderen Tab oder eine andere App, zählt
 *   ProbeSchutz.verlassen() mit; die Zahl geht mit der Abgabe an die Lehrkraft.
 *
 * Die Seite ruft nach dem Aufbau der Aufgaben auf:
 *   ProbeSchutz.start({ testId, code, box, extra?: { holen(), setzen(x) } })  -> true, wenn ein Stand zurückkam
 *   ProbeSchutz.verlassen()   Anzahl, mit der Abgabe schicken
 *   ProbeSchutz.ende()        nach erfolgreicher Abgabe
 * Gesichert werden Textfelder, Auswahllisten, Radio-Knöpfe und gewählte Antwortknöpfe (.opt mit .sel/.richtig),
 * jeweils in der Reihenfolge der Seite. Wiederherstellen löst dieselben Ereignisse aus wie eine Eingabe.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var PREFIX = "grumi-probe~";
  var MAX_ALTER = 6 * 60 * 60 * 1000;
  var FELD = "input[type=text], input:not([type]), textarea";
  var aktiv = null, zahl = 0, draussen = false, timer = null;

  function lies(k) { try { return JSON.parse(global.localStorage.getItem(k) || "null"); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, JSON.stringify(v)); } catch (_e) {} }
  function loesch(k) { try { global.localStorage.removeItem(k); } catch (_e) {} }

  /* ---------- Autokorrektur aus ---------- */
  function ohneHilfen(el) {
    if (el.getAttribute("autocorrect") === "off" && el.getAttribute("spellcheck") === "false") return;
    el.setAttribute("autocorrect", "off");
    el.setAttribute("autocapitalize", "off");
    el.setAttribute("autocomplete", "off");
    el.setAttribute("spellcheck", "false");
  }
  function alleFelder(root) {
    if (!root) return;
    if (root.matches && root.matches(FELD)) ohneHilfen(root);
    if (root.querySelectorAll) Array.prototype.forEach.call(root.querySelectorAll(FELD), ohneHilfen);
  }
  function beobachten() {
    alleFelder(doc);
    if (!global.MutationObserver || !doc.body) return;
    new MutationObserver(function (liste) {
      liste.forEach(function (m) { Array.prototype.forEach.call(m.addedNodes, function (n) { if (n.nodeType === 1) alleFelder(n); }); });
    }).observe(doc.body, { childList: true, subtree: true });
  }

  // Zwischenstände, die älter als 6 Stunden sind, von geteilten Geräten entfernen
  function aufraeumen() {
    try {
      var weg = [];
      for (var i = 0; i < global.localStorage.length; i++) {
        var k = global.localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0) { var s = lies(k); if (!s || Date.now() - (s.zeit || 0) > MAX_ALTER) weg.push(k); }
      }
      weg.forEach(loesch);
    } catch (_e) {}
  }

  /* ---------- Zwischenspeichern ---------- */
  function schluessel() { return PREFIX + aktiv.testId + "~" + aktiv.code; }
  function felder() { return aktiv.box.querySelectorAll("input[type=text], input:not([type]), textarea, select"); }
  function knoepfe() { return aktiv.box.querySelectorAll(".opt"); }
  function haken() { return aktiv.box.querySelectorAll("input[type=radio], input[type=checkbox]"); }
  function stand() {
    var s = { zeit: Date.now(), verlassen: zahl, f: [], k: [], r: [] };
    Array.prototype.forEach.call(felder(), function (el) { s.f.push(el.value); });
    Array.prototype.forEach.call(knoepfe(), function (b, i) {
      if (b.classList.contains("sel") || b.classList.contains("richtig") || b.getAttribute("aria-pressed") === "true") s.k.push(i);
    });
    Array.prototype.forEach.call(haken(), function (el, i) { if (el.checked) s.r.push(i); });
    if (aktiv.extra) { try { s.x = aktiv.extra.holen(); } catch (_e) {} }
    return s;
  }
  function sichern() { if (aktiv) schreib(schluessel(), stand()); }
  function bald() { clearTimeout(timer); timer = setTimeout(sichern, 300); }
  function ausloesen(el, art) { el.dispatchEvent(new Event(art, { bubbles: true })); }

  function wiederherstellen(s) {
    var f = felder();
    (s.f || []).forEach(function (v, i) {
      var el = f[i];
      if (!el || v === "" || v == null || el.value === v) return;
      el.value = v; ausloesen(el, "input"); ausloesen(el, "change");
    });
    var k = knoepfe();
    (s.k || []).forEach(function (i) { if (k[i]) k[i].click(); });
    var r = haken();
    (s.r || []).forEach(function (i) { if (r[i] && !r[i].checked) { r[i].checked = true; ausloesen(r[i], "change"); } });
    if (s.x && aktiv.extra) { try { aktiv.extra.setzen(s.x); } catch (_e) {} }
    zahl = s.verlassen || 0;
  }

  /* ---------- Hinweise ---------- */
  function hinweis(text) {
    var t = doc.createElement("div");
    t.setAttribute("role", "status");
    t.textContent = text;
    t.style.cssText = "position:fixed;left:50%;bottom:22px;z-index:9999;max-width:calc(100vw - 32px);padding:12px 18px;border-radius:14px;" +
      "background:#15212b;color:#fff;font:600 15px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;" +
      "box-shadow:0 10px 30px rgba(0,0,0,.25);transform:translateX(-50%);transition:opacity .4s";
    doc.body.appendChild(t);
    setTimeout(function () { t.style.opacity = "0"; setTimeout(function () { t.remove(); }, 500); }, 5000);
  }

  /* ---------- Verlassen zählen ---------- */
  doc.addEventListener("visibilitychange", function () {
    if (!aktiv) return;
    if (doc.visibilityState === "hidden") {
      if (!draussen) { draussen = true; zahl++; }
      sichern();
    } else if (draussen) {
      draussen = false;
      hinweis("Du hast die Probe verlassen (" + zahl + "×). Das sieht deine Lehrkraft bei der Abgabe.");
    }
  });
  global.addEventListener("pagehide", sichern);

  /* ---------- Schnittstelle ---------- */
  global.ProbeSchutz = {
    start: function (cfg) {
      aktiv = { testId: String(cfg.testId), code: String(cfg.code), box: cfg.box, extra: cfg.extra || null };
      zahl = 0; draussen = false;
      alleFelder(aktiv.box);
      var s = lies(schluessel()), zurueck = false;
      if (s && Date.now() - (s.zeit || 0) < MAX_ALTER) { wiederherstellen(s); zurueck = true; }
      ["input", "change", "click", "focusout"].forEach(function (art) { aktiv.box.addEventListener(art, bald); });
      sichern();
      if (zurueck) hinweis("Deine Antworten von vorhin sind wieder da. Mach einfach weiter.");
      return zurueck;
    },
    verlassen: function () { return zahl; },
    ende: function () { if (aktiv) loesch(schluessel()); aktiv = null; clearTimeout(timer); }
  };

  aufraeumen();
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", beobachten);
  else beobachten();
})(window);
