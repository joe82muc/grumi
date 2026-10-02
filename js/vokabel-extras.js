/* Bausteine für die Vokabeltrainer der Klassen 7 bis 9
 * - „📕 Meine Fehlerwörter“: Ein Wort kommt in die Liste, wenn es falsch angeklickt, falsch geschrieben,
 *   übersprungen oder bei den Karteikarten mit „Nochmal“ markiert wird. Es verschwindet, wenn es zweimal
 *   hintereinander richtig war. Mit Code geht die Liste mit dem Lernstand an den Server (js/lernstand.js) und
 *   ist auf jedem Gerät da; die Lehrkraft sieht die häufigsten Fehlerwörter der Klasse. Ohne Code nur auf dem Gerät.
 * - Stimme wählen: Azure-Stimmen vom Server (gleich auf allen Geräten) oder eine englische Stimme des Geräts
 *   (speechSynthesis.getVoices()). Antwortet der Server nicht schnell genug (er schläft), spricht sofort das Gerät.
 * - KI-Beispielsatz (für Trainer, die noch keinen haben): Niveau und Art wählen, Satz anhören.
 *
 * Trainer: VokabelExtras.init({ modul, vocab, ueben(liste), anker, stimme, vorAntwort(), beispiel: { box, frage, klasse } })
 *          VokabelExtras.falsch(wort)  VokabelExtras.richtig(wort)  VokabelExtras.sprechen(text) -> Promise
 *          Lernstand.seite({ …, fehlerGeladen: VokabelExtras.vomServer })
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var API = (global.location.hostname.indexOf("github.io") >= 0 || global.location.protocol === "file:") ? "https://englisch-9.onrender.com" : "";
  var STIMME_KEY = "grumi-vok-stimme";
  var AZURE = [
    ["en-GB-SoniaNeural", "Sonia · britisch"], ["en-GB-RyanNeural", "Ryan · britisch"],
    ["en-US-JennyNeural", "Jenny · amerikanisch"], ["en-US-GuyNeural", "Guy · amerikanisch"]
  ];
  var C = null, F = {}, offenAnzeigen = false;

  function $(s) { return doc.querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]; }); }
  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); } catch (_e) {} }
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
  function sitzung() { try { var s = anmeldungGueltig(JSON.parse(lies("grumi-code-anmeldung") || "null")); return s && s.code && s.kennung ? s : null; } catch (_e) { return null; } }
  function dekodieren(t) { var d = doc.createElement("textarea"); d.innerHTML = String(t || ""); return d.value; }

  var CSS = "" +
    ".vx-leiste{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:center;margin:.6rem 0}" +
    ".vx-btn{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem .9rem;border:1.5px solid #f3c98b;border-radius:999px;background:#fff8ec;color:#7a4a00;font:inherit;font-weight:800;font-size:.9rem;cursor:pointer}" +
    ".vx-btn b{display:inline-block;min-width:1.4rem;padding:0 .35rem;border-radius:99px;background:#e8a33d;color:#fff;text-align:center}" +
    ".vx-btn:hover{background:#ffefd2}" +
    ".vx-stimme{display:inline-flex;align-items:center;gap:.35rem;font-weight:700;font-size:.85rem;color:#40506a}" +
    ".vx-stimme select{max-width:230px;padding:.4rem .55rem;border:1.5px solid #d8e1e8;border-radius:999px;background:#fff;font:inherit;font-size:.82rem;font-weight:700;color:#15212b}" +
    ".vx-klein{border:1.5px solid #d8e1e8;background:#fff;border-radius:999px;padding:.35rem .6rem;font:inherit;font-size:.82rem;font-weight:800;cursor:pointer;color:#15212b}" +
    ".vx-panel{margin:.4rem auto 1rem;max-width:640px;background:#fff;border:1.5px solid #f3c98b;border-radius:16px;padding:1rem 1.1rem;box-shadow:0 6px 18px rgba(16,26,46,.06);text-align:left;color:#15212b}" +
    ".vx-panel h3{margin:0 0 .3rem;font-size:1.05rem}" +
    ".vx-panel p{margin:.2rem 0 .6rem;color:#5d6b84;font-size:.88rem}" +
    ".vx-liste{list-style:none;margin:0;padding:0;display:grid;gap:.3rem;max-height:320px;overflow:auto}" +
    ".vx-liste li{display:flex;align-items:center;gap:.5rem;padding:.35rem .5rem;border:1px solid #eef1f5;border-radius:10px;font-size:.93rem}" +
    ".vx-liste li span{flex:1;min-width:0;overflow-wrap:anywhere}" +
    ".vx-liste li small{color:#8a5a00;font-weight:800;white-space:nowrap}" +
    ".vx-aktionen{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.7rem}" +
    ".vx-haupt{padding:.55rem 1rem;border:0;border-radius:999px;background:#e8a33d;color:#fff;font:inherit;font-weight:800;cursor:pointer}" +
    ".vx-haupt:disabled{opacity:.5;cursor:default}" +
    ".vx-ki{display:flex;flex-wrap:wrap;gap:.45rem;justify-content:center;align-items:center;margin-top:.7rem}" +
    ".vx-ki select{padding:.42rem .6rem;border:1.5px solid #d8e1e8;border-radius:999px;background:#fff;font:inherit;font-weight:700;font-size:.8rem}";
  function stil() {
    if (doc.getElementById("vx-stil")) return;
    var s = doc.createElement("style"); s.id = "vx-stil"; s.textContent = CSS; doc.head.appendChild(s);
  }

  /* ---------- Fehlerwörter ---------- */
  function fKey() { var s = sitzung(); return "grumi-vok-f-" + C.modul + (s ? "~" + s.kennung + "~" : ""); }
  function laden() { try { F = JSON.parse(lies(fKey()) || "{}") || {}; } catch (_e) { F = {}; } }
  function wortId(w) { var i = C.vocab.indexOf(w); return i >= 0 ? "w" + i : ""; }
  function wortVon(id) { return C.vocab[+String(id).slice(1)] || null; }
  function offen() { return Object.keys(F).filter(function (id) { return F[id] && F[id][1] < 2 && wortVon(id); }); }
  function sichern(melden) {
    schreib(fKey(), JSON.stringify(F));
    zeichnen();
    if (melden !== false && global.Lernstand && global.Lernstand.schueler && global.Lernstand.fehlerMelden) global.Lernstand.fehlerMelden(F);
  }
  function falsch(w) {
    if (!C) return;
    var id = wortId(w); if (!id) return;
    var e = F[id] || [0, 0];
    F[id] = [Math.min(999, e[0] + 1), 0];
    sichern();
  }
  function richtig(w) {
    if (!C) return;
    var id = wortId(w); if (!id || !F[id] || F[id][1] >= 2) return;
    F[id] = [F[id][0], F[id][1] + 1];
    sichern();
  }
  // Stand vom Server (anderes Gerät) mit dem Gerät zusammenführen
  function vomServer(f) {
    if (!C || !f) return;
    var anders = false;
    Object.keys(f).forEach(function (id) {
      var s = f[id], l = F[id];
      if (!l) { F[id] = s; return; }
      var neu = l[0] >= s[0] ? l : s;
      if (neu !== l) F[id] = [s[0], s[1]];
      if (l[0] > s[0] || l[1] !== s[1]) anders = true;
    });
    if (Object.keys(F).some(function (id) { return !f[id]; })) anders = true;
    sichern(anders);
  }

  function zeichnen() {
    var n = offen().length, b = doc.getElementById("vx-fehler");
    if (b) b.innerHTML = "📕 Meine Fehlerwörter <b>" + n + "</b>";
    if (offenAnzeigen) liste();
  }
  function liste() {
    var p = doc.getElementById("vx-panel");
    if (!p) return;
    var ids = offen().sort(function (a, b) { return F[b][0] - F[a][0]; });
    var gelernt = Object.keys(F).filter(function (id) { return F[id][1] >= 2 && wortVon(id); }).length;
    p.innerHTML = "<h3>📕 Meine Fehlerwörter (" + ids.length + ")</h3>" +
      "<p>Wörter, die du falsch hattest. Ein Wort verschwindet, wenn du es zweimal hintereinander richtig weißt." +
      (sitzung() ? " Die Liste ist mit deinem Code gespeichert." : " Melde dich mit deinem Code an, dann ist die Liste auf jedem Gerät da.") +
      (gelernt ? " Schon gelernt: " + gelernt + "." : "") + "</p>" +
      (ids.length ? '<ul class="vx-liste">' + ids.map(function (id) {
        var w = wortVon(id);
        return '<li><button type="button" class="vx-klein" data-sprich="' + esc(id) + '" aria-label="anhören">🔊</button><span><b>' + esc(dekodieren(w.de)) + "</b> – " + esc(dekodieren(w.en)) + "</span><small>" + F[id][0] + "× falsch" + (F[id][1] ? " · 1× richtig" : "") + "</small></li>";
      }).join("") + "</ul>" : '<p style="color:#15803d;font-weight:800">🎉 Gerade keine Fehlerwörter.</p>') +
      '<div class="vx-aktionen"><button type="button" class="vx-haupt" id="vx-ueben"' + (ids.length ? "" : " disabled") + ">▶ Nur diese Wörter üben</button>" +
      '<button type="button" class="vx-klein" id="vx-zu">Schließen</button></div>';
    Array.prototype.forEach.call(p.querySelectorAll("[data-sprich]"), function (btn) {
      btn.addEventListener("click", function () { var w = wortVon(btn.getAttribute("data-sprich")); if (w) sprechen(dekodieren(w.en).replace(/\([^)]*\)/g, " ")); });
    });
    doc.getElementById("vx-ueben").addEventListener("click", function () {
      var woerter = offen().map(wortVon).filter(Boolean);
      if (!woerter.length) return;
      offenAnzeigen = false; p.hidden = true;
      C.ueben(woerter);
      var ziel = doc.getElementById("quiz-card") || doc.getElementById("qword");
      if (ziel && ziel.scrollIntoView) ziel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    doc.getElementById("vx-zu").addEventListener("click", function () { offenAnzeigen = false; p.hidden = true; });
  }

  /* ---------- Stimmen ---------- */
  function gewaehlt() { return lies(STIMME_KEY) || "azure:" + (C && C.stimme || "en-GB-SoniaNeural"); }
  function geraeteStimmen() {
    if (!("speechSynthesis" in global)) return [];
    return (global.speechSynthesis.getVoices() || []).filter(function (v) { return /^en([-_]|$)/i.test(v.lang); });
  }
  function stimmenFuellen() {
    var sel = doc.getElementById("vx-stimme");
    if (!sel) return;
    var wahl = gewaehlt(), g = geraeteStimmen();
    sel.innerHTML = '<optgroup label="Server (Azure)">' + AZURE.map(function (a) {
      return '<option value="azure:' + a[0] + '">' + esc(a[1]) + "</option>";
    }).join("") + "</optgroup>" + (g.length ? '<optgroup label="Dieses Gerät">' + g.map(function (v) {
      return '<option value="geraet:' + esc(v.voiceURI) + '">' + esc(v.name.replace(/^(Microsoft|Google)\s+/, "") + " (" + v.lang + ")") + "</option>";
    }).join("") + "</optgroup>" : "");
    sel.value = wahl;
    if (sel.value !== wahl) sel.value = "azure:" + (C.stimme || "en-GB-SoniaNeural");
  }
  function geraetSprechen(text, uri) {
    return new Promise(function (ok, fehler) {
      if (!("speechSynthesis" in global) || typeof SpeechSynthesisUtterance === "undefined") { fehler(new Error("kein-tts")); return; }
      var g = geraeteStimmen(), v = null;
      if (uri) v = g.filter(function (x) { return x.voiceURI === uri; })[0] || null;
      if (!v) v = g.filter(function (x) { return /en-GB/i.test(x.lang); })[0] || g[0] || null;
      var u = new SpeechSynthesisUtterance(text);
      u.lang = v ? v.lang : "en-GB"; if (v) u.voice = v; u.rate = 0.9;
      var gestartet = false;
      u.onstart = function () { gestartet = true; };
      u.onend = function () { ok(true); };
      u.onerror = function () { fehler(new Error("tts-fehler")); };
      try {
        global.speechSynthesis.cancel();
        global.speechSynthesis.speak(u);
        setTimeout(function () { if (!gestartet) fehler(new Error("tts-zeit")); }, 1500);
      } catch (e) { fehler(e); }
    });
  }
  var audio = null;
  function azureSprechen(text, stimme) {
    return new Promise(function (ok, fehler) {
      if (audio) { try { audio.pause(); } catch (_e) {} }
      audio = new Audio(API + "/api/speech/speak?voice=" + encodeURIComponent(stimme) + "&text=" + encodeURIComponent(text));
      var fertig = false;
      // Schläft der Server, dauert es zu lange: dann lieber gleich die Gerätestimme
      var uhr = setTimeout(function () { if (!fertig) { fertig = true; try { audio.pause(); } catch (_e) {} fehler(new Error("azure-zeit")); } }, 2500);
      audio.onplaying = function () { if (!fertig) { fertig = true; clearTimeout(uhr); } };
      audio.onended = function () { clearTimeout(uhr); ok(true); };
      audio.onerror = function () { if (!fertig) { fertig = true; clearTimeout(uhr); fehler(new Error("azure-fehler")); } };
      var p = audio.play();
      if (p && typeof p.catch === "function") p.catch(function (e) { if (!fertig) { fertig = true; clearTimeout(uhr); fehler(e); } });
    });
  }
  function sprechen(text) {
    var t = String(text || "").trim();
    if (!t) return Promise.resolve(false);
    var wahl = gewaehlt();
    if (/^geraet:/.test(wahl)) {
      return geraetSprechen(t, wahl.slice(7)).catch(function () { return azureSprechen(t, C && C.stimme || "en-GB-SoniaNeural"); });
    }
    return azureSprechen(t, wahl.replace(/^azure:/, "")).catch(function () { return geraetSprechen(t, ""); });
  }

  /* ---------- KI-Beispielsatz ---------- */
  var KI = { satz: "", wort: "", verlauf: {} };
  function kiAufbauen(cfg) {
    var box = doc.querySelector(cfg.box);
    if (!box || doc.getElementById("vx-ki")) return;
    box.insertAdjacentHTML("beforebegin",
      '<div class="vx-ki" id="vx-ki"><select id="vx-ki-niveau" aria-label="Sprachniveau des Beispielsatzes"><option value="A1">Level A1</option><option value="A2" selected>Level A2</option></select>' +
      '<select id="vx-ki-art" aria-label="Art des Beispielsatzes"><option value="mixed" selected>Gemischt</option><option value="daily">Alltag</option><option value="definition">Worterklärung</option><option value="paraphrase">Umschreibung</option></select>' +
      '<button type="button" class="vx-klein" id="vx-ki-los">🧠 Beispielsatz</button><button type="button" class="vx-klein" id="vx-ki-hoeren" disabled>🔊 Satz anhören</button></div>');
    doc.getElementById("vx-ki-los").addEventListener("click", function () { kiSatz(cfg, box); });
    doc.getElementById("vx-ki-hoeren").addEventListener("click", function () { if (KI.satz) sprechen(KI.satz.replace(/[„“"]/g, "")); });
    // Neue Karte: KI-Satz zurücksetzen
    var frage = doc.querySelector(cfg.frage || "#qword");
    if (frage && global.MutationObserver) new MutationObserver(function () {
      if (KI.wort && KI.wort !== frage.textContent) { KI.satz = ""; KI.wort = ""; doc.getElementById("vx-ki-hoeren").disabled = true; }
    }).observe(frage, { childList: true, characterData: true, subtree: true });
  }
  function kiSatz(cfg, box) {
    var w = cfg.wort && cfg.wort();
    if (!w) return;
    var wort = dekodieren(w.en), niveau = doc.getElementById("vx-ki-niveau").value, art = doc.getElementById("vx-ki-art").value;
    var schluessel = (wort + "|" + niveau).toLowerCase(), vorher = KI.verlauf[schluessel] || [];
    var los = doc.getElementById("vx-ki-los"), hoeren = doc.getElementById("vx-ki-hoeren");
    los.disabled = true; box.textContent = "KI erstellt Beispielsatz …"; box.classList.remove("empty");
    var frage = doc.querySelector(cfg.frage || "#qword");
    fetch(API + "/api/vocab/example", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word: wort, meaning: dekodieren(w.de), topic: w.topic || "unit", level: niveau, sentenceMode: art, provider: "anthropic",
        classLevel: cfg.klasse || "grade7", variationSeed: Date.now(), previousSentences: vorher.slice(-5) })
    }).then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }).then(function (d) {
      var satz = String((d && d.sentence) || "").trim();
      if (!satz) throw new Error("leer");
      KI.satz = satz; KI.wort = frage ? frage.textContent : wort;
      KI.verlauf[schluessel] = vorher.concat([satz]).slice(-8);
      box.textContent = satz; box.classList.remove("empty"); hoeren.disabled = false;
    }).catch(function () {
      if (w.ex) { KI.satz = w.ex; KI.wort = frage ? frage.textContent : wort; box.textContent = "„" + w.ex + "“"; box.classList.remove("empty"); hoeren.disabled = false; }
      else { box.textContent = "Der Beispielsatz ist gerade nicht verfügbar. Bitte noch einmal versuchen."; box.classList.add("empty"); }
    }).then(function () { los.disabled = false; });
  }

  /* ---------- Start ---------- */
  function init(cfg) {
    C = cfg;
    stil();
    laden();
    var anker = cfg.anker;
    if (anker && anker.parentNode) {
      anker.insertAdjacentHTML("afterend",
        '<div class="vx-leiste"><button type="button" class="vx-btn" id="vx-fehler"></button>' +
        '<label class="vx-stimme">🔊 Stimme <select id="vx-stimme" aria-label="Stimme für die Aussprache"></select></label>' +
        '<button type="button" class="vx-klein" id="vx-probe" title="Stimme anhören">▶ Probe</button></div>' +
        '<div class="vx-panel" id="vx-panel" hidden></div>');
      doc.getElementById("vx-fehler").addEventListener("click", function () {
        var p = doc.getElementById("vx-panel");
        offenAnzeigen = p.hidden; p.hidden = !p.hidden;
        if (offenAnzeigen) liste();
      });
      var sel = doc.getElementById("vx-stimme");
      sel.addEventListener("change", function () { schreib(STIMME_KEY, sel.value); sprechen("Hello! This is my voice."); });
      doc.getElementById("vx-probe").addEventListener("click", function () { sprechen("Hello! This is my voice."); });
      stimmenFuellen();
      if ("speechSynthesis" in global && "onvoiceschanged" in global.speechSynthesis) global.speechSynthesis.addEventListener("voiceschanged", stimmenFuellen);
    }
    if (cfg.beispiel) kiAufbauen(cfg.beispiel);
    // Deutsch -> Englisch: „anhören“ würde vor der Antwort die Lösung verraten
    if (typeof cfg.vorAntwort === "function") doc.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest("#speak-btn");
      if (!btn || !cfg.vorAntwort()) return;
      e.stopImmediatePropagation(); e.preventDefault();
      if (btn.dataset.vxText === undefined) btn.dataset.vxText = btn.textContent;
      btn.textContent = "Erst antworten 🙂";
      clearTimeout(btn.vxUhr);
      btn.vxUhr = setTimeout(function () { btn.textContent = btn.dataset.vxText; }, 1600);
    }, true);
    zeichnen();
  }

  global.VokabelExtras = {
    init: init, falsch: falsch, richtig: richtig, vomServer: vomServer, sprechen: sprechen,
    kiSatzAktiv: function () { return Boolean(KI.satz); }, offen: offen
  };
})(window);
