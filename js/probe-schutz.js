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
 *   ProbeSchutz.abgegeben(result, { box, weg, titel })   danach: Bestätigung statt Ergebnis (Note erst nach der Rückgabe)
 *
 * Protokoll (immer mitgeschrieben, nur auf diesem Gerät, bis zur Abgabe):
 *   wechsel   [{ art: "verborgen" | "fokus" | "geschlossen", von, bis, sekunden }]  Seite war nicht sichtbar, das Fenster hatte
 *             den Fokus verloren (nicht mit ueberwachung: false; ab 2 Sekunden). Welche Seite oder App stattdessen offen
 *             war, kann ein Browser nicht erkennen – das steht deshalb nirgends.
 *   einfuegen [{ zeit, zeichen, woerter, erlaubt }]   Der eingefügte Text selbst wird nie gespeichert.
 *   kopieren  [{ zeit, art: "copy" | "cut", zeichen }]
 *   spruenge  [{ zeit, woerter, sekunden, vorher, nachher }]   sehr viel neuer Text in sehr kurzer Zeit
 *   verbindung [{ zeit, art: "weg" | "da" }]   Das Gerät hat die Verbindung verloren bzw. wieder bekommen
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
 *   regel: { verlassen: 5|0, kopieren: 2, wegSekunden: 60, ruheMinuten?: 5, bisher?: { verlassen, kopieren, weg, aktiv },
 *            beenden(info), melden?(stand), api?, modul?, puls? }
 *                                 Testregeln. Vokabeltests seit 16.10.2026, alle Proben seit 17.10.2026 (Wunsch der Lehrkraft:
 *                                 „mehr als 1 minute verlassen automatisch note 6, kopierversuch einmal dann automatisch note 6
 *                                 mit vorwarnungen“):
 *                                 - Länger als wegSekunden am Stück weg (anderer Tab, andere App, Fenster ohne Fokus, Seite zu):
 *                                   Probe beendet – Note 6. Ausnahme: Davor 2 Minuten lang nichts eingegeben oder angetippt
 *                                   (fertig, Bildschirm hat sich gesperrt): Die Probe wird nur abgegeben, ohne Note 6.
 *                                 - Kürzer weg: Warnung beim Zurückkommen. verlassen > 0 (nur Vokabeltests: 5): beim 5. Mal beendet.
 *                                 - Kopieren oder Einfügen: eine Warnung, beim 2. Versuch beendet – Note 6.
 *                                 - ruheMinuten (nur Vokabeltests): so lange nichts eingegeben = automatisch abgegeben (eine Minute
 *                                   vorher ein Hinweis mit „Ich bin noch nicht fertig“).
 *                                 Beendet heißt: Ein Fenster deckt die Seite ab, die Seite gibt über beenden({ grund, … }) sofort
 *                                 ab; mit der Abgabe gehen ProbeSchutz.regelFelder() mit, der Server gibt bei einem Abbruch Note 6.
 *                                 bisher = was der Server schon gezählt hat (anderes Gerät). Meldungen an den Server: melden(stand)
 *                                 der Seite, sonst api + modul -> POST /api/probe-regel/vorfall (Zahlen). puls: true = den Stand
 *                                 auch beim Verlassen, beim Zurückkommen und jede Minute melden (Vokabeltest: Server gibt ab).
 *   ProbeSchutz.kopierversuche()  Zahl der gezählten Kopierversuche (mit der Abgabe schicken)
 *   ProbeSchutz.abbruch()         { grund: "verlassen" | "kopieren" | "weg", zeit, verlassen, kopieren, sekunden? } oder null
 *   ProbeSchutz.regelFelder()     { regel: true, kopierversuche, abbruch, automatisch } – mit jeder Abgabe schicken
 *   ProbeSchutz.endeStatus(text)  Zeile im Fenster „Test beendet“ (z. B. „Keine Verbindung – neuer Versuch …“)
 * Ohne regel gibt nichts davon eine Probe ab oder bewertet sie: Was die Ereignisse bedeuten, entscheidet die Lehrkraft.
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
  var LEER = function () { return { wechsel: [], einfuegen: [], kopieren: [], spruenge: [], verbindung: [] }; };
  var prot = LEER(), weg = null, stumm = false, ebenEingefuegt = 0;
  var MAX_EINTRAEGE = 200, SPRUNG_WOERTER = 30, SPRUNG_MS = 3000, FOKUS_MIN_SEK = 2, NEULADEN_MAX_SEK = 30;
  var sockel = 0, entladen = 0, zuletzt = "";
  // Testregeln (regel): gezählte Kopierversuche, Zeitpunkt des letzten, Ende des Tests (und das der letzten Probe)
  var kopierZahl = 0, letzterVersuch = 0, beendet = null, letztesEnde = null;
  // Letzte Eingabe oder Berührung auf der Seite; wer davor so lange nichts gemacht hat, war fertig oder das Gerät hat sich
  // gesperrt (iPad: frühestens nach 2 Minuten) – dann gibt es beim Verlassen keine Note 6
  var aktivZeit = Date.now(), RUHIG_MS = 110 * 1000, ruheTakt = null, pulsTakt = null;
  var NOTE6 = { verlassen: true, kopieren: true, weg: true };
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
    var s = { zeit: Date.now(), verlassen: zahl, f: [], k: [], r: [], p: prot, o: weg, sk: sockel, kv: kopierZahl, ab: beendet, az: aktivZeit };
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
    // Stand einer älteren Fassung dieser Datei: Dort gab es nur die Zahl (sk: Zählung vom Server, siehe regel.bisher)
    sockel = s.p && s.p.wechsel ? s.sk || 0 : s.verlassen || 0;
    if (s.p && s.p.wechsel) { prot = LEER(); ["wechsel", "einfuegen", "kopieren", "spruenge", "verbindung"].forEach(function (k) { if (Array.isArray(s.p[k])) prot[k] = s.p[k].slice(0, MAX_EINTRAEGE); }); }
    zahl = sockel + prot.wechsel.length;
    kopierZahl = s.kv || 0;
    if (s.az > 0) aktivZeit = s.az;
    if (s.ab && s.ab.grund) beendet = s.ab;
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
  // Fenster über der ganzen Seite: f = { id, farbe, titel, text?, klein, knopf? } – ohne knopf lässt es sich nicht schließen
  function fenster(f) {
    var alt = doc.getElementById(f.id); if (alt) alt.remove();
    var w = doc.createElement("div");
    w.id = f.id; w.setAttribute("role", "alertdialog"); w.setAttribute("aria-modal", "true"); w.setAttribute("aria-label", "Hinweis zur Probe");
    w.style.cssText = "position:fixed;inset:0;z-index:" + (f.knopf ? 10000 : 10001) + ";display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(21,33,43," + (f.knopf ? ".62" : ".82") + ");" +
      "font:16px/1.45 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";
    var karte = doc.createElement("div");
    karte.style.cssText = "max-width:460px;width:100%;padding:22px 22px 18px;border-radius:18px;background:#fff;color:#15212b;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.35);" +
      "border-top:8px solid " + f.farbe;
    function zeile(text, stil) { var p = doc.createElement("p"); p.style.cssText = stil; p.textContent = text; karte.appendChild(p); return p; }
    zeile(f.titel, "margin:0 0 6px;font-weight:800;font-size:1.12rem");
    if (f.text) zeile(f.text, "margin:0 0 8px;font-weight:600");
    var klein = zeile(f.klein, "margin:0 0 16px;color:#52606d;font-size:.92rem");
    if (f.knopf) {
      var knopf = doc.createElement("button"); knopf.type = "button"; knopf.textContent = f.knopf;
      knopf.style.cssText = "min-width:150px;padding:11px 20px;border:0;border-radius:999px;background:#15212b;color:#fff;font:800 1rem inherit;font-family:inherit;cursor:pointer";
      knopf.addEventListener("click", function () { w.remove(); });
      karte.appendChild(knopf);
    }
    w.appendChild(karte); doc.body.appendChild(w);
    try { if (knopf) knopf.focus(); else if (doc.activeElement && doc.activeElement.blur) doc.activeElement.blur(); } catch (_e) {}
    return klein;
  }
  function warnung(n) {
    fenster({ id: "probe-schutz-warnung", farbe: n >= 3 ? "#b91c1c" : n === 2 ? "#d97706" : "#2563eb", titel: WARNUNG[Math.min(n, 3) - 1],
      klein: "Wechsel bisher: " + n + ". Deine Probe läuft weiter – deine Antworten sind noch da.", knopf: "Weiter" });
  }

  /* ---------- Testregeln (regel): Warnungen, dann Test beendet ---------- */
  function kopierWort() {
    var k = aktiv.kopieren !== "erlauben", e = aktiv.einfuegen !== "protokollieren";
    return k && e ? "Kopieren oder Einfügen" : k ? "Kopieren" : e ? "Einfügen" : "";
  }
  function dauerText(sek) { return sek >= 120 && sek % 60 === 0 ? sek / 60 + " Minuten" : sek === 60 ? "1 Minute" : sek + " Sekunden"; }
  function regelText() {
    var r = aktiv.regel, kw = kopierWort();
    return "🔒 Testregeln: Bleib auf dieser Seite, bis du abgegeben hast. " +
      (r.wegSekunden ? "Verlässt du sie (anderer Tab, andere App) länger als " + dauerText(r.wegSekunden) + ", ist die Probe sofort beendet: Note 6. " : "") +
      (r.verlassen ? "Jedes kürzere Verlassen bringt eine Warnung – beim " + r.verlassen + ". Mal ist der Test beendet: Note 6. " : "Jedes kürzere Verlassen bringt eine Warnung und wird festgehalten. ") +
      (kw ? kw + ": " + (r.kopieren - 1 === 1 ? "eine Warnung" : (r.kopieren - 1) + " Warnungen") + ", beim " + r.kopieren + ". Versuch Note 6. " : "") +
      (r.ruheMinuten ? "Gibst du " + r.ruheMinuten + " Minuten nichts ein, wird dein Test automatisch abgegeben. " : "") +
      "Bisher: " + zahl + "× verlassen" + (kw ? ", " + kopierZahl + " Kopierversuch" + (kopierZahl === 1 ? "" : "e") : "") + ".";
  }
  function regelHinweis() {
    var sh = doc.querySelector('#schutz-hinweis[data-von="probe-schutz"]');
    if (sh && aktiv && aktiv.regel) { sh.textContent = regelText(); sh.style.background = zahl || kopierZahl ? "#fef2f2" : "#f1f5f9"; }
  }
  // Stand an den Server: die Seite schickt ihn selbst (regel.melden) oder hier an /api/probe-regel/vorfall (api + modul).
  // Die Antwort nennt, was der Server schon gezählt hat – ist das mehr (anderes Gerät), zählt es hier weiter.
  function melden() {
    if (!aktiv || !aktiv.regel || beendet) return;
    var r = aktiv.regel, z = { verlassen: zahl, kopieren: kopierZahl, sichtbar: !weg, weg: weg ? weg.von : null, aktiv: new Date(aktivZeit).toISOString() };
    if (typeof r.melden === "function") { setTimeout(function () { try { r.melden(z); } catch (_e) {} }, 0); return; }
    if (!r.api || !r.modul || !global.fetch) return;
    var ich = aktiv;
    try {
      global.fetch(r.api + "/api/probe-regel/vorfall", { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
        body: JSON.stringify({ modul: r.modul, testId: ich.testId, code: ich.code, verlassen: z.verlassen, kopieren: z.kopieren }) })
        .then(function (a) { return a.ok ? a.json() : null; })
        .then(function (d) { if (d && d.ok && aktiv === ich) serverZahlen(d.verlassen, d.kopieren); })
        .catch(function () {});
    } catch (_e) {}
  }
  // Was der Server gezählt hat, zählt weiter (auch nach einem Gerätewechsel)
  function serverZahlen(v, k) {
    if (!aktiv || !aktiv.regel || beendet) return;
    v = Math.round(Number(v)) || 0; k = Math.round(Number(k)) || 0;
    var mehr = false;
    if (v > zahl) { sockel += v - zahl; zahl = v; mehr = true; }
    if (k > kopierZahl) { kopierZahl = k; mehr = true; }
    if (!mehr) return;
    sichern(); regelHinweis();
    if (aktiv.regel.verlassen && zahl >= aktiv.regel.verlassen) beenden("verlassen");
    else if (kopierZahl >= aktiv.regel.kopieren) beenden("kopieren");
  }
  function regelWarnung(art, sek) {
    var r = aktiv.regel, kopie = art === "kopieren", n = kopie ? kopierZahl : zahl, max = kopie ? r.kopieren : r.verlassen;
    var letzte = max > 0 && n >= max - 1, kw = kopierWort();
    var minute = r.wegSekunden ? "Bleibst du länger als " + dauerText(r.wegSekunden) + " weg, ist die Probe sofort beendet: Note 6." : "";
    fenster({
      id: "probe-schutz-warnung", farbe: letzte ? "#b91c1c" : n >= 2 ? "#d97706" : "#2563eb",
      titel: kopie ? (letzte ? "⛔ Letzte Warnung: " : "⚠️ Warnung: ") + kw + " ist in der Probe verboten."
        : letzte ? "⛔ " + n + ". und letzte Warnung!" : "⚠️ " + (max ? n + ". Warnung: " : "Warnung: ") + "Du hast " + (max ? "den Test" : "die Probe") + " verlassen" + (sek ? " (" + dauerText(sek) + ")" : "") + ".",
      text: kopie ? (letzte ? "Beim nächsten Versuch ist die Probe sofort beendet und wird mit Note 6 bewertet." : "Beim " + max + ". Versuch ist die Probe beendet und wird mit Note 6 bewertet.")
        : letzte ? "Verlässt du den Test noch einmal, dann ist er sofort beendet und wird mit Note 6 bewertet. " + minute
        : max ? "Bleib im Test! Beim " + max + ". Verlassen ist der Test beendet und wird mit Note 6 bewertet. " + minute
        : "Bleib in der Probe! Das Verlassen wurde mit Uhrzeit festgehalten. " + minute,
      klein: "Bisher: " + zahl + "× verlassen" + (kw ? ", " + kopierZahl + " Kopierversuch" + (kopierZahl === 1 ? "" : "e") : "") + ". Deine Antworten sind noch da.",
      knopf: "Verstanden"
    });
  }
  function endeZeigen() {
    var w = doc.getElementById("probe-schutz-warnung"); if (w) w.remove();
    var r = doc.getElementById("probe-schutz-ruhe"); if (r) r.remove();
    var b = beendet, note6 = NOTE6[b.grund];
    var klein = fenster({ id: "probe-schutz-ende", farbe: note6 ? "#7f1d1d" : "#15803d", titel: note6 ? "⛔ Probe beendet" : "Deine Probe wird abgegeben",
      text: grundText(b) + (note6 ? " Deine Probe wird jetzt abgegeben und mit Note 6 bewertet." : " Deine Probe wird jetzt automatisch abgegeben."),
      klein: "Wird abgegeben … Bitte schließe diese Seite nicht." });
    klein.id = "probe-schutz-ende-status";
    if (aktiv) Array.prototype.forEach.call(felder(), function (el) { el.readOnly = true; });
  }
  // Warum die Probe zu Ende ist – für das Fenster und die Bestätigung nach der Abgabe
  function grundText(b) {
    if (b.grund === "kopieren") return "Du hast zum " + b.kopieren + ". Mal versucht zu kopieren oder einzufügen.";
    if (b.grund === "weg") return "Du warst " + (b.sekunden ? dauerText(b.sekunden) : "länger als 1 Minute") + " am Stück nicht auf der Probenseite.";
    if (b.grund === "ruhe") return "Du hast " + (b.minuten || 5) + " Minuten lang nichts mehr eingegeben.";
    if (b.grund === "gesperrt") return "Du warst länger als 1 Minute weg, nachdem du 2 Minuten lang nichts mehr eingegeben hattest (zum Beispiel hat sich der Bildschirm gesperrt).";
    return "Du hast die Probe " + b.verlassen + "-mal verlassen.";
  }
  // grund: verlassen, kopieren, weg (Note 6) – ruhe, gesperrt (nur abgeben); mehr: { sekunden } usw.
  function beenden(grund, mehr) {
    if (!aktiv || !aktiv.regel || beendet) return;
    beendet = { grund: grund, zeit: jetzt(), verlassen: zahl, kopieren: kopierZahl };
    if (mehr) Object.keys(mehr).forEach(function (k) { beendet[k] = mehr[k]; });
    clearInterval(ruheTakt); clearInterval(pulsTakt);
    sichern(); endeZeigen();
    var cb = aktiv.regel.beenden, b = JSON.parse(JSON.stringify(beendet));
    if (typeof cb === "function") setTimeout(function () { cb(b); }, 0);
  }
  function regelVerlassen(sek) {
    if (beendet) return;
    melden(); regelHinweis();
    if (aktiv.regel.verlassen && zahl >= aktiv.regel.verlassen) beenden("verlassen"); else regelWarnung("verlassen", sek);
  }
  /* 5 Minuten nichts eingegeben (ruheMinuten): eine Minute vorher ein Hinweis, dann automatisch abgeben */
  function ruhePruefen() {
    if (!aktiv || !aktiv.regel || !aktiv.regel.ruheMinuten || beendet || weg || doc.visibilityState === "hidden") return;
    var grenze = aktiv.regel.ruheMinuten * 60000, still = Date.now() - aktivZeit, fenster0 = doc.getElementById("probe-schutz-ruhe");
    if (still >= grenze) { beenden("ruhe", { minuten: aktiv.regel.ruheMinuten }); return; }
    if (still < grenze - 60000) { if (fenster0) fenster0.remove(); return; }
    var rest = Math.max(0, Math.ceil((grenze - still) / 1000));
    if (fenster0) { var z = doc.getElementById("probe-schutz-ruhe-zeit"); if (z) z.textContent = rest + " Sekunden"; return; }
    var klein = fenster({ id: "probe-schutz-ruhe", farbe: "#d97706", titel: "⏳ Bist du fertig?",
      text: "Du hast " + (aktiv.regel.ruheMinuten - 1) + " Minuten lang nichts eingegeben. Wenn du nicht auf „Test abgeben“ tippst, wird dein Test in einer Minute automatisch abgegeben.",
      klein: "", knopf: "Ich bin noch nicht fertig" });
    klein.innerHTML = "Automatische Abgabe in <b id=\"probe-schutz-ruhe-zeit\">" + rest + " Sekunden</b>.";
  }
  function aktivJetzt() {
    if (!aktiv || beendet) return;
    aktivZeit = Date.now();
    var r = doc.getElementById("probe-schutz-ruhe"); if (r) r.remove();
  }
  ["pointerdown", "keydown", "input", "touchstart", "wheel"].forEach(function (art) {
    doc.addEventListener(art, function () { if (aktiv && doc.visibilityState !== "hidden") aktivJetzt(); }, true);
  });
  // Ein Versuch zu kopieren oder einzufügen. true: Die Testregeln gelten (Warnung oder Ende ist erledigt).
  function kopierversuch() {
    if (!aktiv || !aktiv.regel) return false;
    if (beendet) return true;
    if (Date.now() - letzterVersuch < 1500) return true;   // ein Vorgang löst oft mehrere Ereignisse aus (paste + beforeinput)
    letzterVersuch = Date.now(); kopierZahl++;
    sichern(); melden(); regelHinweis();
    if (kopierZahl >= aktiv.regel.kopieren) beenden("kopieren"); else regelWarnung("kopieren");
    return true;
  }
  // art: "verborgen" (Seite nicht mehr sichtbar), "fokus" (Fenster ohne Eingabefokus), "neuladen" (Seite wird gerade
  // neu geladen oder geschlossen – ein Wechsel ist das erst, wenn sie länger als NEULADEN_MAX_SEK weg bleibt)
  function geht(art) {
    if (!aktiv || !aktiv.wechsel) return;
    if (art === "verborgen" && Date.now() - entladen < 1500) art = "neuladen";
    if (weg) { if (art !== "fokus") weg.art = art; }
    else weg = { art: art, von: jetzt(), aktiv: new Date(aktivZeit).toISOString() };
    if (weg.art === "verborgen" && !draussen) { draussen = true; zahl++; }
    sichern();
    if (aktiv.regel && aktiv.regel.puls && art !== "fokus") melden();   // der Server erfährt, seit wann die Seite weg ist
  }
  function kommt() {
    if (!aktiv || !weg) return;
    var w = weg, bis = jetzt(), sek = Math.max(0, Math.round((Date.parse(bis) - Date.parse(w.von)) / 1000));
    weg = null; draussen = false;
    // kein Wechsel: Fenster nur kurz ohne Fokus (Adresszeile, Systemmeldung) oder Seite nur neu geladen
    if ((w.art === "fokus" && sek < FOKUS_MIN_SEK) || (w.art === "neuladen" && sek < NEULADEN_MAX_SEK)) {
      zahl = sockel + prot.wechsel.length; sichern();
      if (aktiv.regel && aktiv.regel.puls) melden();
      return;
    }
    merke(prot.wechsel, { art: w.art === "neuladen" ? "geschlossen" : w.art, von: w.von, bis: bis, sekunden: sek });
    zahl = sockel + prot.wechsel.length;
    sichern();
    if (aktiv.regel) {
      if (beendet) return;
      // Länger als erlaubt weg: Probe beendet. Hatte das Kind davor schon 2 Minuten nichts mehr gemacht (fertig, Bildschirm
      // gesperrt), wird nur abgegeben – es konnte draußen nichts nachschlagen und dann noch eintragen.
      if (aktiv.regel.wegSekunden && sek > aktiv.regel.wegSekunden) {
        var vorher = Date.parse(w.von) - Date.parse(w.aktiv || w.von);
        melden(); regelHinweis();
        if (vorher >= RUHIG_MS) beenden("gesperrt", { sekunden: sek }); else beenden("weg", { sekunden: sek });
        return;
      }
      regelVerlassen(sek);
      // kurz weg, aber insgesamt schon lange nichts eingegeben: automatisch abgeben (ruheMinuten)
      ruhePruefen();
    }
    else if (aktiv.ueberwachung && aktiv.warnen) warnung(zahl);
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

  /* ---------- Verbindung: WLAN weg und wieder da (nur Zeitpunkte) ---------- */
  ["offline", "online"].forEach(function (art) {
    global.addEventListener(art, function () { if (!aktiv) return; merke(prot.verbindung, { zeit: jetzt(), art: art === "offline" ? "weg" : "da" }); sichern(); });
  });

  /* ---------- Nicht einfügen, nicht kopieren ---------- */
  var STIL = "body.probe-laeuft:not(.probe-kopieren-frei) *:not(input):not(textarea):not(select){-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}";
  function istFeld(el) { return el && el.matches && el.matches(FELD); }
  var gemeldet = 0;
  // zaehlt: Bei den Testregeln ist das ein Kopierversuch (etwas markiert und kopiert, Text eingefügt)
  function gesperrt(e, text, zaehlt) {
    e.preventDefault();
    if (zaehlt && kopierversuch()) return;
    if (Date.now() - gemeldet > 4000) { gemeldet = Date.now(); hinweis(text); }
  }
  function einfuegenErlaubt() { return aktiv && aktiv.einfuegen === "protokollieren"; }
  function einfuegeText() { return aktiv && aktiv.ueberwachung ? "Das Einfügen von kopiertem Text ist im Probenmodus nicht erlaubt. Bitte schreibe deinen Text selbst." : "Einfügen ist in der Probe gesperrt. Schreib deine Antwort selbst."; }
  ["paste", "drop"].forEach(function (art) {
    doc.addEventListener(art, function (e) {
      if (!aktiv || !istFeld(e.target)) return;
      // nur die Menge festhalten – der Text der Zwischenablage wird nicht gespeichert
      var quelle = e.clipboardData || e.dataTransfer, text = "", lesbar = false;
      try { text = quelle ? quelle.getData("text") || "" : ""; lesbar = Boolean(quelle); } catch (_e) {}
      merke(prot.einfuegen, { zeit: jetzt(), zeichen: text.length, woerter: woerter(text), erlaubt: einfuegenErlaubt() });
      if (einfuegenErlaubt()) { ebenEingefuegt = Date.now(); bald(); return; }
      gesperrt(e, einfuegeText(), text.length > 0 || !lesbar);
    }, true);
  });
  doc.addEventListener("beforeinput", function (e) {
    if (aktiv && !einfuegenErlaubt() && istFeld(e.target) && /^insertFrom(Paste|Drop|Yank)/.test(e.inputType || "")) gesperrt(e, einfuegeText(), true);
  }, true);
  ["copy", "cut"].forEach(function (art) {
    doc.addEventListener(art, function (e) {
      if (!aktiv || (art === "copy" ? aktiv.kopieren : aktiv.ausschneiden) === "erlauben") return;
      var el = e.target, n = 0;
      try { n = istFeld(el) && typeof el.selectionStart === "number" ? Math.abs(el.selectionEnd - el.selectionStart) : String(global.getSelection ? global.getSelection() : "").length; } catch (_e) {}
      merke(prot.kopieren, { zeit: jetzt(), art: art, zeichen: n });
      gesperrt(e, "Kopieren ist in der Probe gesperrt.", n > 0);
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
        menue: cfg.kontextmenue === "sperren" || cfg.kontextmenue === "erlauben" ? cfg.kontextmenue : "aussen",
        // verlassen: 0 = keine Höchstzahl (nur die Vokabeltests beenden beim 5. Verlassen); wegSekunden: 60 (0 = aus)
        regel: cfg.regel && typeof cfg.regel.beenden === "function" ? {
          verlassen: Number(cfg.regel.verlassen) > 0 ? Math.round(Number(cfg.regel.verlassen)) : 0, kopieren: Math.max(1, Number(cfg.regel.kopieren) || 2),
          wegSekunden: cfg.regel.wegSekunden === 0 ? 0 : Math.max(10, Number(cfg.regel.wegSekunden) || 60),
          ruheMinuten: Math.max(0, Number(cfg.regel.ruheMinuten) || 0),
          api: cfg.regel.api ? String(cfg.regel.api).replace(/\/$/, "") : "", modul: cfg.regel.modul ? String(cfg.regel.modul) : "",
          puls: cfg.regel.puls === true, beenden: cfg.regel.beenden, melden: cfg.regel.melden || null } : null };
      zahl = 0; sockel = 0; draussen = false; prot = LEER(); weg = null;
      kopierZahl = 0; letzterVersuch = 0; beendet = null; letztesEnde = null; aktivZeit = Date.now();
      clearInterval(ruheTakt); clearInterval(pulsTakt);
      alleFelder(aktiv.box);
      stilEinmal(); doc.body.classList.add("probe-laeuft");
      doc.body.classList.toggle("probe-kopieren-frei", aktiv.kopieren === "erlauben");
      // Offen sagen, was im Probenmodus festgehalten wird (eine Seite mit eigenem Hinweis – Kennung „schutz-hinweis“ – behält ihn)
      if (aktiv.ueberwachung && !doc.getElementById("schutz-hinweis") && aktiv.box.parentNode) {
        var sh = doc.createElement("p");
        sh.id = "schutz-hinweis"; sh.className = "schutz-hinweis"; sh.setAttribute("data-von", "probe-schutz");
        sh.style.cssText = "margin:0 0 12px;padding:8px 12px;border-radius:10px;background:#f1f5f9;color:#334155;font-size:.88rem;font-weight:600;line-height:1.4";
        sh.textContent = aktiv.regel ? regelText() : "🔒 Probenmodus: Verlässt du diese Seite (anderer Tab, andere App), wird das mit Uhrzeit und Dauer für deine Lehrkraft festgehalten. " +
          (aktiv.einfuegen === "protokollieren" ? "Eingefügter Text wird mit Uhrzeit und Länge vermerkt." : "Einfügen und Kopieren sind gesperrt.");
        aktiv.box.parentNode.insertBefore(sh, aktiv.box);
      }
      var s = lies(schluessel()), zurueck = false;
      if (s && Date.now() - (s.zeit || 0) < MAX_ALTER) { wiederherstellen(s); zurueck = true; }
      if (aktiv.regel) {
        // Was der Server schon gezählt hat (z. B. auf einem anderen Gerät), zählt weiter
        var bisher = cfg.regel.bisher || {}, v = Math.round(Number(bisher.verlassen)) || 0, k = Math.round(Number(bisher.kopieren)) || 0;
        if (v > zahl) { sockel += v - zahl; zahl = v; }
        if (k > kopierZahl) kopierZahl = k;
        regelHinweis();
        // Der Test war schon beendet, aber noch nicht abgegeben (neu geladen): gleich wieder abgeben. War er es beim
        // Zurückholen eben erst geworden (kommt), hat beenden() das schon angestoßen.
        if (beendet && s && s.ab && s.ab.grund) { endeZeigen(); var cb = aktiv.regel.beenden, b = JSON.parse(JSON.stringify(beendet)); setTimeout(function () { cb(b); }, 0); }
        else if (!beendet && aktiv.regel.verlassen && zahl >= aktiv.regel.verlassen) beenden("verlassen");
        else if (!beendet && kopierZahl >= aktiv.regel.kopieren) beenden("kopieren");
        // Anderes Gerät: Laut Server ist die Probe seit bisher.weg verlassen (hier liegt kein eigener Stand) – die Rückkehr ist jetzt
        if (!beendet && !s && typeof bisher.weg === "string" && !isNaN(Date.parse(bisher.weg))) {
          weg = { art: "verborgen", von: bisher.weg, aktiv: typeof bisher.aktiv === "string" && !isNaN(Date.parse(bisher.aktiv)) ? bisher.aktiv : bisher.weg };
          if (sockel > 0) sockel--;   // dieses Verlassen hat der Server schon mitgezählt – kommt() zählt es jetzt selbst
          kommt();
        }
        if (!beendet) {
          // Zahlen vom Server holen (api + modul) bzw. den Stand melden; 5 Minuten Ruhe prüfen; jede Minute melden (puls)
          melden();
          if (aktiv.regel.ruheMinuten) ruheTakt = setInterval(ruhePruefen, 5000);
          if (aktiv.regel.puls) pulsTakt = setInterval(function () { if (aktiv && !weg && doc.visibilityState !== "hidden") melden(); }, 60000);
        }
      }
      // was beim Aufbau oder nach dem Zurückholen schon in den Feldern steht, ist kein Textsprung
      if (verlauf) Array.prototype.forEach.call(aktiv.box.querySelectorAll(FELD), function (el) { verlauf.set(el, [{ t: Date.now(), w: woerter(el.value) }]); });
      ["input", "change", "click", "focusout"].forEach(function (art) { aktiv.box.addEventListener(art, bald); });
      sichern();
      if (zurueck) hinweis("Deine Antworten von vorhin sind wieder da. Mach einfach weiter.");
      return zurueck;
    },
    verlassen: function () { return zahl; },
    kopierversuche: function () { return kopierZahl; },
    // Abbruch nach den Testregeln (Note 6); automatisch abgegeben ohne Note 6 (ruhe, gesperrt) ist kein Abbruch
    abbruch: function () { return beendet && NOTE6[beendet.grund] ? JSON.parse(JSON.stringify(beendet)) : null; },
    // Mit jeder Abgabe schicken: Der Server erkennt daran, dass die Seite die Testregeln kennt (sonst keine Note 6)
    regelFelder: function () {
      if (!aktiv || !aktiv.regel) return {};
      return { regel: true, kopierversuche: kopierZahl, abbruch: this.abbruch(), automatisch: beendet && !NOTE6[beendet.grund] ? beendet.grund : "" };
    },
    endeStatus: function (text) { var el = doc.getElementById("probe-schutz-ende-status"); if (el) el.textContent = text || ""; },
    protokoll: function () { return JSON.parse(JSON.stringify(prot)); },
    // Die Seite hat ein Feld selbst gefüllt (Rückgängig/Wiederholen, Zwischenstand vom Server): Das ist kein
    // Textsprung. Der neue Inhalt wird wie eine Eingabe gesichert.
    gesetzt: function (el) {
      if (!aktiv || !el) return;
      if (verlauf) verlauf.set(el, [{ t: Date.now(), w: woerter(el.value) }]);
      bald();
    },
    ende: function () {
      if (aktiv) { loesch(schluessel()); zuletzt = aktiv.code; }
      aktiv = null; clearTimeout(timer); doc.body.classList.remove("probe-laeuft", "probe-kopieren-frei");
      clearInterval(ruheTakt); clearInterval(pulsTakt);
      prot = LEER(); weg = null;
      letztesEnde = beendet; beendet = null; kopierZahl = 0;
      var w = doc.getElementById("probe-schutz-warnung"); if (w) w.remove();
      var rw = doc.getElementById("probe-schutz-ruhe"); if (rw) rw.remove();
      var fe = doc.getElementById("probe-schutz-ende"); if (fe) fe.remove();
      var sh = doc.querySelector('#schutz-hinweis[data-von="probe-schutz"]'); if (sh) sh.remove();
    },
    // Note erst nach der Rückgabe: Der Server nennt nach der Abgabe weder Punkte noch Note noch Lösungen
    // (result.abgegeben). Dann zeigt die Seite statt des Ergebnisses diese Bestätigung – überall derselbe Wortlaut.
    //   if (ProbeSchutz.abgegeben(data.result, { box: Ergebnisbereich, weg: Aufgabenbereich(e), titel })) return;
    // Liefert false, wenn doch ein Ergebnis kam; die Seite zeigt es dann wie früher.
    abgegeben: function (result, cfg) {
      if (!result || result.abgegeben !== true || !cfg || !cfg.box) return false;
      [].concat(cfg.weg || []).forEach(function (el) { if (el) { el.hidden = true; el.classList.add("hidden"); } });
      var zeit = new Date(result.submittedAt || Date.now());
      var wann = isNaN(zeit) ? "" : zeit.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }) + " Uhr";
      // ab: nach den Testregeln beendet (Note 6); auto: automatisch abgegeben (5 Minuten Ruhe, Bildschirm gesperrt)
      var karte = doc.createElement("div"), ab = letztesEnde && NOTE6[letztesEnde.grund] ? letztesEnde : null, auto = letztesEnde && !ab ? letztesEnde : null;
      karte.id = "probe-abgegeben"; karte.setAttribute("role", "status");
      karte.style.cssText = "max-width:560px;margin:8px auto;padding:26px 22px;border-radius:18px;border:2px solid " + (ab ? "#f3a8a0;background:#fdf2f1" : "#86d3a4;background:#f0fbf4") + ";color:#15212b;text-align:center;" +
        "font:16px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif";
      function zeile(tag, text, stil) { var e = doc.createElement(tag); e.textContent = text; e.style.cssText = stil; karte.appendChild(e); return e; }
      zeile("div", ab ? "!" : "✓", "width:64px;height:64px;margin:0 auto 10px;border-radius:50%;background:" + (ab ? "#b91c1c" : "#15803d") + ";color:#fff;font-size:38px;font-weight:900;line-height:64px");
      zeile("h2", ab ? "Test beendet" : "Abgegeben!", "margin:0 0 6px;font-size:1.5rem;font-weight:900;color:" + (ab ? "#7f1d1d" : "#14532d"));
      zeile("p", (ab ? "Dein Test ist abgegeben" : "Deine Probe ist gespeichert") + (cfg.titel ? ": " + cfg.titel : "") + ".", "margin:0 0 4px;font-weight:700");
      zeile("p", [zuletzt ? "Code " + zuletzt : "", wann].filter(Boolean).join(" · "), "margin:0 0 14px;color:#52606d;font-size:.92rem");
      // Testregeln: Der Test wurde nach den Warnungen beendet – das Kind erfährt sofort, warum und was das heißt
      if (ab) zeile("p", grundText(ab) + " Deshalb ist die Probe beendet und wird mit Note 6 bewertet. Deine Lehrkraft sieht, was passiert ist.", "margin:0 0 10px;font-weight:700;color:#7f1d1d");
      else {
        if (auto) zeile("p", grundText(auto) + " Deshalb wurde deine Probe automatisch abgegeben.", "margin:0 0 8px;font-weight:700");
        zeile("p", "Deine Note bekommst du von deiner Lehrkraft zurück. Die korrigierte Probe findest du dann auf der GRUMI-Startseite unter „Zurückbekommen“.", "margin:0 0 10px");
      }
      zeile("p", "Du kannst diese Seite jetzt schließen.", "margin:0;color:#52606d;font-size:.92rem");
      cfg.box.textContent = "";
      cfg.box.appendChild(karte);
      cfg.box.hidden = false; cfg.box.classList.remove("hidden");
      try { global.scrollTo(0, 0); } catch (_e) {}
      return true;
    }
  };

  aufraeumen();
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", beobachten);
  else beobachten();
})(window);
