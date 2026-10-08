/* Proben auf Schul-iPads absichern (für alle Probe-Seiten, ohne Server):
 * - Autokorrektur, Wortvorschläge, Rechtschreibprüfung und automatische Großschreibung aus – in allen
 *   Textfeldern, auch in denen, die die Seite erst später baut.
 * - Antworten zwischenspeichern: Lädt Safari die Seite neu (wenig Speicher, Zurückwischen, Absturz), holt
 *   ProbeSchutz.start() sie zurück. Gespeichert wird nur auf diesem Gerät, je Probe und Code; nach der Abgabe
 *   oder spätestens nach 6 Stunden wird gelöscht. (Die beforeunload-Warnung zeigt Safari auf dem iPad nicht.)
 * - Verlassen zählen: Wechselt das Kind während der Probe in einen anderen Tab oder eine andere App, zählt
 *   ProbeSchutz.verlassen() mit; die Zahl geht mit der Abgabe an die Lehrkraft.
 * - Nicht einfügen, nicht kopieren: Während der Probe lässt sich in die Antwortfelder nichts einfügen oder
 *   hineinziehen, und Aufgabentexte lassen sich nicht markieren oder kopieren (z. B. in einen Übersetzer).
 *
 * Die Seite ruft nach dem Aufbau der Aufgaben auf:
 *   ProbeSchutz.start({ testId, code, box, extra?: { holen(), setzen(x) } })  -> true, wenn ein Stand zurückkam
 *   ProbeSchutz.verlassen()   Anzahl, mit der Abgabe schicken
 *   ProbeSchutz.protokoll()   was während der Probe technisch aufgefallen ist (siehe unten), mit der Abgabe schicken
 *   ProbeSchutz.ende()        nach erfolgreicher Abgabe
 *
 * Protokoll (immer mitgeschrieben, nur auf diesem Gerät, bis zur Abgabe):
 *   wechsel   [{ art: "verborgen" | "fokus" | "geschlossen", von, bis, sekunden }]  Seite war nicht sichtbar, das Fenster hatte
 *             den Fokus verloren (nicht mit ueberwachung: false; ab 2 Sekunden). Welche Seite oder App stattdessen offen
 *             war, kann ein Browser nicht erkennen – das steht deshalb nirgends.
 *   einfuegen [{ zeit, zeichen, woerter, erlaubt }]   Der eingefügte Text selbst wird nie gespeichert.
 *   kopieren  [{ zeit, art: "copy" | "cut", zeichen }]
 *   spruenge  [{ zeit, woerter, sekunden, vorher, nachher }]   sehr viel neuer Text in sehr kurzer Zeit
 * Zusätzliche Angaben für start():
 *   ueberwachung: false           nur ein kurzer Hinweis nach der Rückkehr. Vorgabe (seit 06.10.2026 für alle Proben): nach
 *                                 der Rückkehr ein deutlicher Hinweis mit „Weiter“ (1., 2., ab dem 3. Mal), auch der verlorene
 *                                 Fensterfokus zählt, und über den Aufgaben steht, was im Probenmodus festgehalten wird
 *   einfuegen: "protokollieren"   Einfügen ist erlaubt und wird protokolliert (Vorgabe: "sperren")
 *   wechsel: false                Verlassen der Seite wird nicht festgehalten (Vorgabe: wird festgehalten)
 *   warnen: false                 nach der Rückkehr nur der kurze Hinweis statt des Fensters mit „Weiter“
 *   kopieren: "erlauben"          Kopieren ist erlaubt (Vorgabe: "sperren", mit Vermerk)
 *   ausschneiden: "erlauben"      Ausschneiden ist erlaubt (Vorgabe: wie kopieren)
 *   kontextmenue: "sperren"       Kontextmenü auch in den Antwortfeldern gesperrt; "erlauben": nirgends gesperrt
 *                                 (Vorgabe: nur außerhalb der Antwortfelder gesperrt)
 *   spruenge: false               große Texteingaben in kurzer Zeit werden nicht vermerkt
 *   ProbeSchutz.gesetzt(feld)     Die Seite hat ein Feld selbst gefüllt (Rückgängig, Zwischenstand): kein Textsprung
 * Nichts davon gibt eine Probe ab oder bewertet sie: Was die Ereignisse bedeuten, entscheidet die Lehrkraft.
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
  var LEER = function () { return { wechsel: [], einfuegen: [], kopieren: [], spruenge: [] }; };
  var prot = LEER(), weg = null, stumm = false, ebenEingefuegt = 0;
  var MAX_EINTRAEGE = 200, SPRUNG_WOERTER = 30, SPRUNG_MS = 3000, FOKUS_MIN_SEK = 2, NEULADEN_MAX_SEK = 30;
  var sockel = 0, entladen = 0;
  function jetzt() { return new Date().toISOString(); }
  function woerter(t) { var m = String(t || "").trim().match(/\S+/g); return m ? m.length : 0; }
  function merke(liste, eintrag) { if (liste.length < MAX_EINTRAEGE) liste.push(eintrag); }

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
    var s = { zeit: Date.now(), verlassen: zahl, f: [], k: [], r: [], p: prot, o: weg };
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
    stumm = true;
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
    // Stand einer älteren Fassung dieser Datei: Dort gab es nur die Zahl
    sockel = s.p && s.p.wechsel ? 0 : s.verlassen || 0;
    if (s.p && s.p.wechsel) { prot = LEER(); ["wechsel", "einfuegen", "kopieren", "spruenge"].forEach(function (k) { if (Array.isArray(s.p[k])) prot[k] = s.p[k].slice(0, MAX_EINTRAEGE); }); }
    zahl = sockel + prot.wechsel.length;
    // Die Seite wurde neu geladen, während sie verlassen war: Die Rückkehr ist jetzt
    if (s.o && s.o.von) { weg = s.o; kommt(); }
    setTimeout(function () { stumm = false; }, 0);
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

  /* ---------- Verlassen zählen (mit Zeitpunkt und Dauer) ---------- */
  var WARNUNG = [
    "Hinweis: Du hast während der Probe GRUMI verlassen. Dieser Vorgang wurde protokolliert.",
    "Achtung: Du hast GRUMI bereits zweimal während der Probe verlassen.",
    "Mehrfacher Wechsel während der Probe erkannt. Der Lehrer kann diese Vorgänge einsehen."
  ];
  function warnung(n) {
    var alt = doc.getElementById("probe-schutz-warnung"); if (alt) alt.remove();
    var w = doc.createElement("div");
    w.id = "probe-schutz-warnung"; w.setAttribute("role", "alertdialog"); w.setAttribute("aria-modal", "true"); w.setAttribute("aria-label", "Hinweis zur Probe");
    w.style.cssText = "position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(21,33,43,.62);" +
      "font:16px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";
    var karte = doc.createElement("div");
    karte.style.cssText = "max-width:460px;width:100%;padding:22px 22px 18px;border-radius:18px;background:#fff;color:#15212b;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.35);" +
      "border-top:8px solid " + (n >= 3 ? "#b91c1c" : n === 2 ? "#d97706" : "#2563eb");
    var p = doc.createElement("p"); p.style.cssText = "margin:0 0 6px;font-weight:800;font-size:1.12rem"; p.textContent = WARNUNG[Math.min(n, 3) - 1];
    var klein = doc.createElement("p"); klein.style.cssText = "margin:0 0 16px;color:#52606d;font-size:.92rem";
    klein.textContent = "Wechsel bisher: " + n + ". Deine Probe läuft weiter – deine Antworten sind noch da.";
    var knopf = doc.createElement("button"); knopf.type = "button"; knopf.textContent = "Weiter";
    knopf.style.cssText = "min-width:150px;padding:11px 20px;border:0;border-radius:999px;background:#15212b;color:#fff;font:800 1rem inherit;font-family:inherit;cursor:pointer";
    knopf.addEventListener("click", function () { w.remove(); });
    karte.appendChild(p); karte.appendChild(klein); karte.appendChild(knopf); w.appendChild(karte); doc.body.appendChild(w);
    try { knopf.focus(); } catch (_e) {}
  }
  // art: "verborgen" (Seite nicht mehr sichtbar), "fokus" (Fenster ohne Eingabefokus), "neuladen" (Seite wird gerade
  // neu geladen oder geschlossen – ein Wechsel ist das erst, wenn sie länger als NEULADEN_MAX_SEK weg bleibt)
  function geht(art) {
    if (!aktiv || !aktiv.wechsel) return;
    if (art === "verborgen" && Date.now() - entladen < 1500) art = "neuladen";
    if (weg) { if (art !== "fokus") weg.art = art; }
    else weg = { art: art, von: jetzt() };
    if (weg.art === "verborgen" && !draussen) { draussen = true; zahl++; }
    sichern();
  }
  function kommt() {
    if (!aktiv || !weg) return;
    var w = weg, bis = jetzt(), sek = Math.max(0, Math.round((Date.parse(bis) - Date.parse(w.von)) / 1000));
    weg = null; draussen = false;
    // kein Wechsel: Fenster nur kurz ohne Fokus (Adresszeile, Systemmeldung) oder Seite nur neu geladen
    if ((w.art === "fokus" && sek < FOKUS_MIN_SEK) || (w.art === "neuladen" && sek < NEULADEN_MAX_SEK)) { zahl = sockel + prot.wechsel.length; sichern(); return; }
    merke(prot.wechsel, { art: w.art === "neuladen" ? "geschlossen" : w.art, von: w.von, bis: bis, sekunden: sek });
    zahl = sockel + prot.wechsel.length;
    sichern();
    if (aktiv.ueberwachung && aktiv.warnen) warnung(zahl);
    else hinweis("Du hast die Probe verlassen (" + zahl + "×). Das sieht deine Lehrkraft bei der Abgabe.");
  }
  doc.addEventListener("visibilitychange", function () {
    if (!aktiv) return;
    if (doc.visibilityState === "hidden") geht("verborgen"); else kommt();
  });
  // Fenster verliert den Fokus, bleibt aber sichtbar (zweites Fenster, geteilter Bildschirm): nur mit ueberwachung
  global.addEventListener("blur", function () {
    if (!aktiv || !aktiv.ueberwachung) return;
    setTimeout(function () { if (aktiv && !weg && doc.visibilityState === "visible" && doc.hasFocus && !doc.hasFocus()) geht("fokus"); }, 300);
  });
  global.addEventListener("focus", function () { if (aktiv && weg && doc.visibilityState === "visible") kommt(); });
  // Neu laden oder schließen: Der Browser meldet die Seite dabei als „verborgen“ – das ist kein Wechsel in eine andere App
  global.addEventListener("pagehide", function () {
    entladen = Date.now();
    if (aktiv && weg && weg.art === "verborgen" && Date.now() - Date.parse(weg.von) < 1500) { weg.art = "neuladen"; draussen = false; zahl = sockel + prot.wechsel.length; }
    sichern();
  });

  /* ---------- Nicht einfügen, nicht kopieren ---------- */
  var STIL = "body.probe-laeuft:not(.probe-kopieren-frei) *:not(input):not(textarea):not(select){-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}";
  function istFeld(el) { return el && el.matches && el.matches(FELD); }
  var gemeldet = 0;
  function gesperrt(e, text) {
    e.preventDefault();
    if (Date.now() - gemeldet > 4000) { gemeldet = Date.now(); hinweis(text); }
  }
  function einfuegenErlaubt() { return aktiv && aktiv.einfuegen === "protokollieren"; }
  function einfuegeText() { return aktiv && aktiv.ueberwachung ? "Das Einfügen von kopiertem Text ist im Probenmodus nicht erlaubt. Bitte schreibe deinen Text selbst." : "Einfügen ist in der Probe gesperrt. Schreib deine Antwort selbst."; }
  ["paste", "drop"].forEach(function (art) {
    doc.addEventListener(art, function (e) {
      if (!aktiv || !istFeld(e.target)) return;
      // nur die Menge festhalten – der Text der Zwischenablage wird nicht gespeichert
      var quelle = e.clipboardData || e.dataTransfer, text = "";
      try { text = quelle ? quelle.getData("text") || "" : ""; } catch (_e) {}
      merke(prot.einfuegen, { zeit: jetzt(), zeichen: text.length, woerter: woerter(text), erlaubt: einfuegenErlaubt() });
      if (einfuegenErlaubt()) { ebenEingefuegt = Date.now(); bald(); return; }
      gesperrt(e, einfuegeText());
    }, true);
  });
  doc.addEventListener("beforeinput", function (e) {
    if (aktiv && !einfuegenErlaubt() && istFeld(e.target) && /^insertFrom(Paste|Drop|Yank)/.test(e.inputType || "")) gesperrt(e, einfuegeText());
  }, true);
  ["copy", "cut"].forEach(function (art) {
    doc.addEventListener(art, function (e) {
      if (!aktiv || (art === "copy" ? aktiv.kopieren : aktiv.ausschneiden) === "erlauben") return;
      var el = e.target, n = 0;
      try { n = istFeld(el) && typeof el.selectionStart === "number" ? Math.abs(el.selectionEnd - el.selectionStart) : String(global.getSelection ? global.getSelection() : "").length; } catch (_e) {}
      merke(prot.kopieren, { zeit: jetzt(), art: art, zeichen: n });
      gesperrt(e, "Kopieren ist in der Probe gesperrt.");
    }, true);
  });

  /* ---------- Auffällig große Texteingaben ---------- */
  // Erscheinen in einem Feld binnen SPRUNG_MS mindestens SPRUNG_WOERTER neue Wörter, wird das vermerkt (ohne den Text).
  var verlauf = global.WeakMap ? new WeakMap() : null;
  doc.addEventListener("input", function (e) {
    var el = e.target;
    if (!aktiv || stumm || !aktiv.spruenge || !verlauf || !istFeld(el) || !aktiv.box.contains(el)) return;
    var t = Date.now(), w = woerter(el.value), v = verlauf.get(el);
    if (!v) { v = []; verlauf.set(el, v); }
    while (v.length && t - v[0].t > SPRUNG_MS) v.shift();
    var tief = w; v.forEach(function (x) { if (x.w < tief) tief = x.w; });
    v.push({ t: t, w: w });
    if (w - tief >= SPRUNG_WOERTER && t - ebenEingefuegt > 800) {
      merke(prot.spruenge, { zeit: jetzt(), woerter: w - tief, sekunden: Math.round(SPRUNG_MS / 1000), vorher: tief, nachher: w });
      v.length = 0; v.push({ t: t, w: w }); bald();
    }
  }, true);
  doc.addEventListener("dragstart", function (e) { if (aktiv && !(e.target && e.target.closest && e.target.closest("input[type=file]"))) e.preventDefault(); }, true);
  // Kontextmenü: außerhalb der Antwortfelder immer gesperrt; mit kontextmenue: "sperren" auch in den Feldern
  doc.addEventListener("contextmenu", function (e) { if (aktiv && aktiv.menue !== "erlauben" && (aktiv.menue === "sperren" || !istFeld(e.target))) e.preventDefault(); }, true);
  function stilEinmal() {
    if (doc.getElementById("probe-schutz-stil")) return;
    var s = doc.createElement("style"); s.id = "probe-schutz-stil"; s.textContent = STIL; doc.head.appendChild(s);
  }

  /* ---------- Schnittstelle ---------- */
  global.ProbeSchutz = {
    start: function (cfg) {
      aktiv = { testId: String(cfg.testId), code: String(cfg.code), box: cfg.box, extra: cfg.extra || null,
        ueberwachung: cfg.ueberwachung !== false, einfuegen: cfg.einfuegen === "protokollieren" ? "protokollieren" : "sperren",
        // je Probe einstellbar (Deutsch 8); ohne Angabe gilt das bisherige Verhalten
        wechsel: cfg.wechsel !== false, warnen: cfg.warnen !== false, spruenge: cfg.spruenge !== false,
        kopieren: cfg.kopieren === "erlauben" ? "erlauben" : "sperren",
        ausschneiden: cfg.ausschneiden === "erlauben" || (cfg.ausschneiden === undefined && cfg.kopieren === "erlauben") ? "erlauben" : "sperren",
        menue: cfg.kontextmenue === "sperren" || cfg.kontextmenue === "erlauben" ? cfg.kontextmenue : "aussen" };
      zahl = 0; sockel = 0; draussen = false; prot = LEER(); weg = null;
      alleFelder(aktiv.box);
      stilEinmal(); doc.body.classList.add("probe-laeuft");
      doc.body.classList.toggle("probe-kopieren-frei", aktiv.kopieren === "erlauben");
      // Offen sagen, was im Probenmodus festgehalten wird (eine Seite mit eigenem Hinweis – Kennung „schutz-hinweis“ – behält ihn)
      if (aktiv.ueberwachung && !doc.getElementById("schutz-hinweis") && aktiv.box.parentNode) {
        var sh = doc.createElement("p");
        sh.id = "schutz-hinweis"; sh.className = "schutz-hinweis"; sh.setAttribute("data-von", "probe-schutz");
        sh.style.cssText = "margin:0 0 12px;padding:8px 12px;border-radius:10px;background:#f1f5f9;color:#334155;font-size:.88rem;font-weight:600;line-height:1.4";
        sh.textContent = "🔒 Probenmodus: Verlässt du diese Seite (anderer Tab, andere App), wird das mit Uhrzeit und Dauer für deine Lehrkraft festgehalten. " +
          (aktiv.einfuegen === "protokollieren" ? "Eingefügter Text wird mit Uhrzeit und Länge vermerkt." : "Einfügen und Kopieren sind gesperrt.");
        aktiv.box.parentNode.insertBefore(sh, aktiv.box);
      }
      var s = lies(schluessel()), zurueck = false;
      if (s && Date.now() - (s.zeit || 0) < MAX_ALTER) { wiederherstellen(s); zurueck = true; }
      // was beim Aufbau oder nach dem Zurückholen schon in den Feldern steht, ist kein Textsprung
      if (verlauf) Array.prototype.forEach.call(aktiv.box.querySelectorAll(FELD), function (el) { verlauf.set(el, [{ t: Date.now(), w: woerter(el.value) }]); });
      ["input", "change", "click", "focusout"].forEach(function (art) { aktiv.box.addEventListener(art, bald); });
      sichern();
      if (zurueck) hinweis("Deine Antworten von vorhin sind wieder da. Mach einfach weiter.");
      return zurueck;
    },
    verlassen: function () { return zahl; },
    protokoll: function () { return JSON.parse(JSON.stringify(prot)); },
    // Die Seite hat ein Feld selbst gefüllt (Rückgängig/Wiederholen, Zwischenstand vom Server): Das ist kein
    // Textsprung. Der neue Inhalt wird wie eine Eingabe gesichert.
    gesetzt: function (el) {
      if (!aktiv || !el) return;
      if (verlauf) verlauf.set(el, [{ t: Date.now(), w: woerter(el.value) }]);
      bald();
    },
    ende: function () {
      if (aktiv) loesch(schluessel());
      aktiv = null; clearTimeout(timer); doc.body.classList.remove("probe-laeuft", "probe-kopieren-frei");
      prot = LEER(); weg = null;
      var w = doc.getElementById("probe-schutz-warnung"); if (w) w.remove();
      var sh = doc.querySelector('#schutz-hinweis[data-von="probe-schutz"]'); if (sh) sh.remove();
    }
  };

  aufraeumen();
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", beobachten);
  else beobachten();
})(window);
