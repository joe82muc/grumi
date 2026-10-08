/* Aufsatzeditor für Deutsch (Aussehen: aufsatz-editor.css) – eine Schreibfläche für längere Texte.
 * Genutzt im Lernmodus (Baustein „aufsatz“, 8/Deutsch/d8-aufsatz.js) und im Probenmodus (probe.js, Schreibaufgaben
 * der Proben von Deutsch 8). Der Editor selbst speichert nichts und spricht mit keinem Server: Er meldet jede
 * Änderung an die Seite (onChange), die sichert – und er zeigt den Stand, den die Seite ihm nennt (status).
 *
 * Werkzeuge (mehr gibt es mit Absicht nicht): Rückgängig · Wiederholen · Aufgabenstellung · Meine Planung ·
 * Material (nur wenn es eines gibt) · Vollbild. Dauernd zu sehen: Wörter, Zeichen, Speicherstand.
 *
 *   const ed = AufsatzEditor.bauen(box, {
 *     name: "Dein Text",                 Bezeichnung des Textfelds für Vorleseprogramme
 *     auftrag: "<p>…</p>",               Aufgabenstellung (HTML)
 *     material: "<…>",                   Material (HTML), z. B. ein Lesetext; ohne Angabe gibt es den Knopf nicht
 *     form: "stellungnahme", plan: […],  Planungswerkzeug: Felder der Schreibform oder eigene [{ id, label, hilfe, zeilen }]
 *     zug: "R" | "M",                    R bekommt bei einigen Schreibformen ein Feld weniger bzw. mehr Hilfe
 *     min: 120, max: 12000,              Mindestzahl der Wörter (nur Anzeige), Höchstzahl der Zeichen
 *     text: "", planWerte: {},           Startwerte
 *     klasse: "lang",                    zusätzliche Klasse des Textfelds (die Probe-Seite braucht „lang“)
 *     onChange(stand),                   stand = { text, plan } – bei jeder Änderung
 *     gesetzt(feld)                      der Editor hat das Feld selbst gefüllt (Rückgängig/Wiederholen)
 *   });
 *   ed.wert() -> { text, plan }     ed.setze({ text, plan })     ed.status("ok" | "laeuft" | "offen" | "lokal", text?)
 *   ed.zeige("auftrag" | "plan" | "material", an)     ed.nurPlan(an)     ed.vollbild(an)     ed.feld (das Textfeld)
 *
 * Schreibformen und ihre Planungsfelder stehen unten (PLAENE). Der Server kennt nur die Namen der Schreibformen
 * (d7-proben.js: SCHREIBFORMEN) – wer hier eine ergänzt, trägt sie dort nach.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var esc = function (s) { return String(s === undefined || s === null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  function woerter(s) {
    if (global.D7Zeilen && global.D7Zeilen.woerter) return global.D7Zeilen.woerter(String(s || ""));
    var m = String(s || "").match(/[A-Za-zÄÖÜäöüß0-9][A-Za-zÄÖÜäöüß0-9'’\-]*/g);
    return m ? m.length : 0;
  }

  /* ---------- Planungswerkzeuge je Schreibform ---------- */
  // f(id, label, hilfe, zeilen, nur) – nur: "M" = Feld nur für M-Klassen, "R" = nur für R-Klassen
  function f(id, label, hilfe, zeilen, nur) { return { id: id, label: label, hilfe: hilfe || "", zeilen: zeilen || 2, nur: nur || "" }; }
  var ARG = "Behauptung – Begründung (weil …) – Beispiel oder Beleg";
  var PLAENE = {
    stellungnahme: { name: "Begründete Stellungnahme", felder: [
      f("thema", "Worum geht es?", "Die Streitfrage in einem Satz – und für wen du schreibst."),
      f("meinung", "Meine Meinung", "Dein Standpunkt als klarer Satz: Ich bin dafür / dagegen, dass …"),
      f("arg-1", "Argument 1", ARG, 3), f("arg-2", "Argument 2", ARG, 3),
      f("arg-3", "Argument 3 – mein stärkstes", "Das überzeugendste Argument steht am Schluss.", 3),
      f("gegen", "Was die Gegenseite sagt", "Ein Einwand der anderen Seite – und was du darauf antwortest.", 3, "M"),
      f("schluss", "Schluss", "Fazit, Wunsch oder Aufforderung – ohne neues Argument.")] },
    argumentation: { name: "Argumentierender Text", felder: [
      f("thema", "Worum geht es?", "Streitfrage, Anlass, Adressat."),
      f("meinung", "Meine These", "Dein Standpunkt als klarer Satz."),
      f("arg-1", "Argument 1", ARG, 3), f("arg-2", "Argument 2", ARG, 3),
      f("arg-3", "Argument 3 – mein stärkstes", "Ordne steigernd: das stärkste zuletzt.", 3),
      f("gegen", "Gegenargument", "Ein ernst zu nehmender Einwand – und wie du ihn entkräftest.", 3),
      f("schluss", "Abwägen und Fazit", "Warum überwiegt deine Seite? Fazit oder Appell.")] },
    zusammenfassung: { name: "Zusammenfassung", felder: [
      f("quelle", "Einleitungssatz", "Titel, Verfasser, Textsorte, Erscheinungsort – und das Thema."),
      f("kern-1", "Wichtige Aussage 1", "In eigenen Worten, im Präsens."), f("kern-2", "Wichtige Aussage 2"), f("kern-3", "Wichtige Aussage 3"),
      f("kern-4", "Wichtige Aussage 4", "", 2, "M"),
      f("absicht", "Was will der Text?", "Informieren, überzeugen, warnen …? Woran erkennst du das?")] },
    inhaltsangabe: { name: "Inhaltsangabe", felder: [
      f("quelle", "Einleitungssatz", "Titel, Autor, Textsorte – und worum es im Kern geht."),
      f("figuren", "Wer? Wo? Wann?", "Die wichtigen Figuren, Ort und Zeit."),
      f("schritt-1", "Handlungsschritt 1", "Sachlich, im Präsens, ohne wörtliche Rede."), f("schritt-2", "Handlungsschritt 2"), f("schritt-3", "Handlungsschritt 3"),
      f("ende", "Wie endet es?", "Der Schluss – und was der Text zeigen will.")] },
    bericht: { name: "Bericht", felder: [
      f("was", "Was ist geschehen?", "Das Ereignis in einem Satz."),
      f("wer", "Wer war beteiligt?"), f("wo-wann", "Wo und wann?"),
      f("ablauf", "Wie lief es ab?", "Stichpunkte in der richtigen Reihenfolge.", 4),
      f("folgen", "Warum? Welche Folgen?", "Ursache und Ergebnis – sachlich, ohne eigene Meinung.")] },
    charakterisierung: { name: "Charakterisierung", felder: [
      f("figur", "Wer ist die Figur?", "Name, Alter, Lebensumstände."),
      f("aussen", "Äußeres und Auftreten"),
      f("verhalten", "Verhalten – mit Textstellen", "Was tut und sagt die Figur? Notiere Zeilen (Z. …).", 3),
      f("eigenschaften", "Eigenschaften", "Was schließt du aus dem Verhalten? Jede Eigenschaft braucht einen Beleg.", 3),
      f("beziehung", "Beziehung zu anderen Figuren"),
      f("urteil", "Mein Gesamteindruck", "Wie wirkt die Figur auf dich – und warum?")] },
    monolog: { name: "Innerer Monolog", felder: [
      f("situation", "In welcher Situation ist die Figur?", "Was ist gerade geschehen? Wo ist sie?"),
      f("gefuehle", "Was fühlt sie?"),
      f("gedanken", "Was geht ihr durch den Kopf?", "Fragen, Zweifel, Erinnerungen, Wünsche.", 3),
      f("sprache", "Wie spricht sie mit sich selbst?", "Ich-Form, Präsens, Ausrufe, Fragen, abgebrochene Sätze."),
      f("ende", "Womit endet der Monolog?", "Ein Entschluss – oder eine offene Frage.")] },
    perspektive: { name: "Perspektivwechsel", felder: [
      f("figur", "Aus wessen Sicht erzähle ich?"),
      f("wissen", "Was weiß diese Figur – und was nicht?"),
      f("gefuehle", "Was fühlt und denkt sie?"),
      f("ablauf", "Was geschieht der Reihe nach?", "Halte dich an die Handlung des Textes.", 3),
      f("sprache", "Wie erzählt diese Figur?", "Wörter und Ton, die zu ihr passen.")] },
    brief: { name: "Brief oder E-Mail", felder: [
      f("adressat", "An wen schreibe ich?", "Anrede und Ton: förmlich oder persönlich?"),
      f("anlass", "Warum schreibe ich?", "Der Anlass gehört in den ersten Satz."),
      f("punkt-1", "Was will ich mitteilen? (1)"), f("punkt-2", "Was will ich mitteilen? (2)"), f("punkt-3", "Was will ich erreichen?", "Bitte, Frage oder Vorschlag."),
      f("schluss", "Schlusssatz und Gruß")] },
    material: { name: "Schreiben mit Material", felder: [
      f("thema", "Thema und Schreibziel", "Worüber schreibst du, für wen und wozu?"),
      f("mat-1", "Das nehme ich aus Material 1"), f("mat-2", "Das nehme ich aus Material 2"), f("mat-3", "Das nehme ich aus Material 3", "", 2, "M"),
      f("aufbau", "Reihenfolge meiner Abschnitte", "", 3),
      f("schluss", "Schluss")] },
    frei: { name: "Mein Text", felder: [
      f("idee", "Meine Idee"), f("aufbau", "Anfang – Mitte – Schluss", "", 3), f("woerter", "Wörter und Formulierungen, die ich verwenden will")] }
  };
  function planFelder(form, eigene, zug) {
    var liste = Array.isArray(eigene) && eigene.length ? eigene : (PLAENE[form] || PLAENE.frei).felder;
    return liste.filter(function (x) { return !x.nur || !zug || x.nur === zug; });
  }

  /* ---------- Editor ---------- */
  var offenVoll = null;
  function bauen(box, cfg) {
    cfg = cfg || {};
    var felder = planFelder(cfg.form, cfg.plan, cfg.zug), min = Number(cfg.min) || 0, max = Number(cfg.max) || 12000;
    var name = cfg.name || "Dein Text";
    box.innerHTML = '<div class="ae">' +
      '<div class="ae-leiste" role="toolbar" aria-label="Werkzeuge">' +
        '<button type="button" class="ae-k ae-undo" disabled aria-label="Rückgängig"><span aria-hidden="true">↶</span><span class="ae-wort">Rückgängig</span></button>' +
        '<button type="button" class="ae-k ae-redo" disabled aria-label="Wiederholen"><span aria-hidden="true">↷</span><span class="ae-wort">Wiederholen</span></button>' +
        '<span class="ae-trenner" aria-hidden="true"></span>' +
        '<button type="button" class="ae-k ae-auf" aria-expanded="false" data-klappe="auftrag"><span aria-hidden="true">📋</span><span class="ae-wort">Aufgabenstellung</span></button>' +
        '<button type="button" class="ae-k ae-pl" aria-expanded="false" data-klappe="plan"><span aria-hidden="true">🗂</span><span class="ae-wort">Meine Planung</span></button>' +
        (cfg.material ? '<button type="button" class="ae-k ae-mat" aria-expanded="false" data-klappe="material"><span aria-hidden="true">📖</span><span class="ae-wort">Material</span></button>' : "") +
        '<button type="button" class="ae-k ae-voll" aria-pressed="false"><span aria-hidden="true">⛶</span><span class="ae-wort">Vollbild</span></button>' +
      "</div>" +
      '<div class="ae-flaeche">' +
        '<div class="ae-klappen">' +
          '<section class="ae-klappe" data-klappe="auftrag" hidden aria-label="Aufgabenstellung"><h4>📋 Aufgabenstellung</h4><div class="ae-auftrag">' + (cfg.auftrag || "") + "</div></section>" +
          '<section class="ae-klappe" data-klappe="plan" hidden aria-label="Meine Planung"><h4>🗂 Meine Planung' + (PLAENE[cfg.form] && !(cfg.plan && cfg.plan.length) ? " · " + esc(PLAENE[cfg.form].name) : "") + "</h4>" +
            '<p class="ae-plan-hinweis">Stichpunkte genügen. Die Planung hilft dir beim Schreiben – bewertet wird dein Text.</p>' +
            felder.map(function (x) {
              return '<label class="ae-feld"><span class="ae-label">' + esc(x.label) + "</span>" + (x.hilfe ? '<span class="ae-hilfe">' + esc(x.hilfe) + "</span>" : "") +
                '<textarea class="ae-plan-feld" data-plan="' + esc(x.id) + '" rows="' + (x.zeilen || 2) + '" maxlength="800"></textarea></label>';
            }).join("") + "</section>" +
          (cfg.material ? '<section class="ae-klappe" data-klappe="material" hidden aria-label="Material"><h4>📖 Material</h4><div class="ae-material">' + cfg.material + "</div></section>" : "") +
        "</div>" +
        '<div class="ae-schreib"><textarea class="ae-text' + (cfg.klasse ? " " + esc(cfg.klasse) : "") + '" aria-label="' + esc(name) + '" maxlength="' + max + '" placeholder="Schreibe hier deinen Text."' +
          (min ? ' data-min="' + min + '"' : "") + "></textarea></div>" +
      "</div>" +
      '<div class="ae-fuss"><span class="ae-zahl" aria-live="off"></span><span class="ae-stand" role="status"></span></div>' +
      "</div>";
    var root = box.firstChild, ta = root.querySelector(".ae-text"), zahl = root.querySelector(".ae-zahl"), stand = root.querySelector(".ae-stand");
    var undo = root.querySelector(".ae-undo"), redo = root.querySelector(".ae-redo"), voll = root.querySelector(".ae-voll");
    var planEl = function () { return Array.prototype.slice.call(root.querySelectorAll(".ae-plan-feld")); };

    /* --- Zähler --- */
    function zaehle() {
      var n = woerter(ta.value), z = ta.value.length;
      zahl.innerHTML = "<b>" + n + "</b> " + (n === 1 ? "Wort" : "Wörter") + (min ? " · mindestens " + min : "") + ' <span class="ae-zeichen">· ' + z + " Zeichen</span>";
      zahl.classList.toggle("gut", min > 0 && n >= min);
      return n;
    }

    /* --- Rückgängig / Wiederholen: eigener Verlauf (verlässlich auch auf dem iPad) --- */
    var hist = [""], pos = 0, takt = null, intern = false;
    function knoepfe() { undo.disabled = !(pos > 0 || ta.value !== hist[pos]); redo.disabled = !(pos < hist.length - 1 && ta.value === hist[pos]); }
    function festhalten() {
      clearTimeout(takt); takt = null;
      if (ta.value !== hist[pos]) { hist = hist.slice(0, pos + 1); hist.push(ta.value); if (hist.length > 300) hist.shift(); pos = hist.length - 1; }
      knoepfe();
    }
    function schreibe(v) {
      intern = true;
      ta.value = v;
      if (typeof cfg.gesetzt === "function") { try { cfg.gesetzt(ta); } catch (_e) {} }
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      intern = false;
      try { ta.focus(); ta.setSelectionRange(v.length, v.length); } catch (_e) {}
    }
    function zurueck() { festhalten(); if (pos > 0) { pos--; schreibe(hist[pos]); } knoepfe(); }
    function vor() { if (ta.value !== hist[pos]) { festhalten(); return; } if (pos < hist.length - 1) { pos++; schreibe(hist[pos]); } knoepfe(); }
    undo.addEventListener("click", zurueck);
    redo.addEventListener("click", vor);
    ta.addEventListener("keydown", function (e) {
      var z = (e.ctrlKey || e.metaKey) && !e.altKey && (e.key === "z" || e.key === "Z"), y = (e.ctrlKey || e.metaKey) && !e.altKey && (e.key === "y" || e.key === "Y");
      if (z && !e.shiftKey) { e.preventDefault(); zurueck(); }
      else if (y || (z && e.shiftKey)) { e.preventDefault(); vor(); }
    });

    /* --- Änderungen melden --- */
    function wert() { var plan = {}; planEl().forEach(function (el) { if (el.value.trim()) plan[el.dataset.plan] = el.value; }); return { text: ta.value, plan: plan }; }
    function melde() { if (typeof cfg.onChange === "function") { try { cfg.onChange(wert()); } catch (_e) {} } }
    ta.addEventListener("input", function () {
      zaehle();
      if (!intern) {
        clearTimeout(takt);
        // ein Schritt = ein Schreibzug: nach einer kurzen Pause, spätestens nach etwa 40 Zeichen an einem Wortende
        if (Math.abs(ta.value.length - hist[pos].length) >= 40 && /\s$/.test(ta.value)) festhalten();
        else takt = setTimeout(festhalten, 700);
      }
      knoepfe(); melde();
    });
    root.addEventListener("input", function (e) { if (e.target.classList && e.target.classList.contains("ae-plan-feld")) melde(); });

    /* --- Klappen: Aufgabenstellung, Planung, Material --- */
    var nurPlanAn = false;
    function klappe(name) { return root.querySelector('.ae-klappe[data-klappe="' + name + '"]'); }
    function zeige(name, an) {
      var k = klappe(name), b = root.querySelector('.ae-k[data-klappe="' + name + '"]');
      if (!k) return;
      k.hidden = !an; if (b) { b.setAttribute("aria-expanded", an ? "true" : "false"); b.classList.toggle("an", !!an); }
      root.classList.toggle("ae-mit-klappe", !!root.querySelector(".ae-klappe:not([hidden])"));
    }
    root.querySelector(".ae-leiste").addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".ae-k[data-klappe]") : null;
      if (!b) return;
      var name = b.dataset.klappe, auf = klappe(name).hidden;
      // im Vollbild steht immer nur eine Klappe neben dem Text
      if (auf && root.classList.contains("ae-voll-an")) ["auftrag", "plan", "material"].forEach(function (n) { if (n !== name) zeige(n, false); });
      zeige(name, auf);
      if (auf && !root.classList.contains("ae-voll-an")) { try { klappe(name).scrollIntoView({ block: "nearest" }); } catch (_e) {} }
    });
    // Nur die Planung zeigen (Schritt „Planen“ im Lernmodus): Schreibfläche und Werkzeuge treten zurück
    function nurPlan(an) {
      nurPlanAn = !!an;
      root.classList.toggle("ae-nur-plan", nurPlanAn);
      if (nurPlanAn) { zeige("plan", true); zeige("auftrag", true); }
    }

    /* --- Vollbild: die Schreibfläche füllt das Fenster (ohne Vollbild-Schnittstelle des Browsers – läuft so überall) --- */
    function hoehe() {
      var v = global.visualViewport;
      root.style.setProperty("--ae-h", (v ? v.height : global.innerHeight) + "px");
      root.style.setProperty("--ae-top", (v ? v.offsetTop : 0) + "px");
    }
    function vollbild(an) {
      an = !!an;
      if (an && offenVoll && offenVoll !== api) offenVoll.vollbild(false);
      root.classList.toggle("ae-voll-an", an);
      doc.documentElement.classList.toggle("ae-vollbild", an);
      voll.setAttribute("aria-pressed", an ? "true" : "false"); voll.classList.toggle("an", an);
      voll.querySelector(".ae-wort").textContent = an ? "Vollbild beenden" : "Vollbild";
      offenVoll = an ? api : null;
      if (an) {
        hoehe();
        // neben dem Text ist Platz für höchstens eine Klappe
        var offen = ["plan", "auftrag", "material"].filter(function (n) { var k = klappe(n); return k && !k.hidden; });
        offen.slice(1).forEach(function (n) { zeige(n, false); });
        try { ta.focus(); } catch (_e) {}
      } else { root.style.removeProperty("--ae-h"); root.style.removeProperty("--ae-top"); try { root.scrollIntoView({ block: "nearest" }); } catch (_e) {} }
    }
    voll.addEventListener("click", function () { vollbild(!root.classList.contains("ae-voll-an")); });
    root.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("ae-voll-an")) { e.preventDefault(); vollbild(false); } });
    var neuMessen = function () { if (root.classList.contains("ae-voll-an")) hoehe(); };
    if (global.visualViewport) { global.visualViewport.addEventListener("resize", neuMessen); global.visualViewport.addEventListener("scroll", neuMessen); }
    global.addEventListener("resize", neuMessen);

    /* --- Speicherstand --- */
    var STAND = {
      ok: ["ok", "Gespeichert ✓"], laeuft: ["laeuft", "Speichert …"],
      offen: ["offen", "Noch nicht synchronisiert – Verbindung prüfen."], lokal: ["lokal", "Auf diesem Gerät gespeichert ✓"]
    };
    function status(art, text) {
      var s = STAND[art] || ["", ""];
      stand.className = "ae-stand" + (s[0] ? " " + s[0] : "");
      stand.textContent = text || s[1];
    }

    function setze(w) {
      w = w || {};
      if (typeof w.text === "string" && w.text !== ta.value) { intern = true; ta.value = w.text.slice(0, max); if (typeof cfg.gesetzt === "function") { try { cfg.gesetzt(ta); } catch (_e) {} } intern = false; }
      if (w.plan && typeof w.plan === "object") planEl().forEach(function (el) { if (typeof w.plan[el.dataset.plan] === "string") el.value = w.plan[el.dataset.plan]; });
      hist = [ta.value]; pos = 0; zaehle(); knoepfe();
    }

    var api = { wert: wert, setze: setze, status: status, zeige: zeige, nurPlan: nurPlan, vollbild: vollbild, zaehle: zaehle, feld: ta, root: root, planFelder: felder,
      // Der Text wurde von außen geändert (z. B. hat die Seite einen gesicherten Stand zurückgeholt): Anzeige und Verlauf nachziehen
      geaendert: function () { hist = [ta.value]; pos = 0; zaehle(); knoepfe(); } };
    setze({ text: cfg.text || "", plan: cfg.planWerte || {} });
    return api;
  }

  // Planung zum Lesen (Korrektur, Ansicht der Lehrkraft): [{ label, text }] in der Reihenfolge der Schreibform
  function planListe(form, eigene, werte) {
    var w = werte || {}, liste = Array.isArray(eigene) && eigene.length ? eigene : (PLAENE[form] || PLAENE.frei).felder, aus = [], da = {};
    liste.forEach(function (x) { if (w[x.id]) { aus.push({ label: x.label, text: w[x.id] }); da[x.id] = 1; } });
    // Felder, die nicht zur genannten Schreibform gehören (oder die Form ist unbekannt): Name aus irgendeiner Schreibform
    var alle = {};
    Object.keys(PLAENE).forEach(function (n) { PLAENE[n].felder.forEach(function (x) { if (!alle[x.id]) alle[x.id] = x.label; }); });
    Object.keys(w).forEach(function (k) { if (!da[k] && w[k]) aus.push({ label: alle[k] || k, text: w[k] }); });
    return aus;
  }

  global.AufsatzEditor = { bauen: bauen, PLAENE: PLAENE, planFelder: planFelder, planListe: planListe, woerter: woerter };
})(window);
