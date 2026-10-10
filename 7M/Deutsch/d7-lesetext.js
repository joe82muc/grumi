/* Deutsch 7: Lesetext mit festen Zeilennummern anzeigen (Aussehen: d7-lesetext.css, Zeilen: d7-zeilen.js).
 *
 *   D7Lesetext.html(text)        HTML eines Textes, Gedichts, einer Tabelle oder eines Diagramms
 *                                text: { id, typ, titel, art, quelle, hinweis, zeilen | absaetze | verse | kopf+reihen | werte+einheit }
 *   D7Lesetext.einpassen(root)   Schriftgröße so wählen, dass jede Zeile in ihren Kasten passt (auch nach Drehen des iPads)
 *   D7Lesetext.antippen(root)    Zeile antippen = hervorheben, ihre Nummer wird sichtbar
 *   D7Lesetext.zeige(root, id, von, bis)   Zeilen eines Textes markieren und hinrollen (z. B. „Hier steht es“)
 *   D7Lesetext.hoerHtml(text), D7Lesetext.hoeren(root, opt)   Hörtext in einer Probe abspielen (siehe unten)
 * Die Zeilen sind fest (60 Zeichen): Zeile 12 ist auf jedem Gerät dieselbe Stelle. Nur jede fünfte Nummer steht da.
 * Passt eine Zeile bei kleinster Schrift nicht in den Kasten (Handy), bricht sie um – ihre Nummer bleibt.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; });
  }
  function zeilenVon(t) { return t.zeilen || (global.D7Zeilen ? global.D7Zeilen.umbrechen(t) : []); }
  function kopf(t, extra) {
    return '<div class="lt-kopf">' + (t.art ? '<span class="lt-art">' + esc(t.art) + "</span>" : "") + (t.titel ? "<h3>" + esc(t.titel) + "</h3>" : "") + (t.autor ? "<small>" + esc(t.autor) + "</small>" : "") + (extra || "") + "</div>";
  }
  function fuss(t) { return (t.hinweis ? '<p class="lt-hinweis">' + esc(t.hinweis) + "</p>" : "") + (t.quelle ? '<div class="lt-quelle">' + esc(t.quelle) + "</div>" : ""); }
  function istZahl(v) { return /^[\s\d.,%€–-]+$/.test(String(v)) && /\d/.test(String(v)); }

  function html(t) {
    var id = esc(t.id || "");
    if (t.typ === "tabelle") {
      return '<div class="lt tabelle" data-text="' + id + '">' + kopf(t) + '<div class="lt-tabwrap"><table class="lt-tab"><thead><tr>' +
        (t.kopf || []).map(function (h, i) { return '<th' + (i && (t.reihen || []).every(function (r) { return istZahl(r[i]); }) ? ' class="zahl"' : "") + ">" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        (t.reihen || []).map(function (r) { return "<tr>" + r.map(function (z, i) { return "<td" + (i && istZahl(z) ? ' class="zahl"' : "") + ">" + esc(z) + "</td>"; }).join("") + "</tr>"; }).join("") +
        "</tbody></table></div>" + fuss(t) + "</div>";
    }
    if (t.typ === "diagramm") {
      var max = Math.max.apply(null, (t.werte || []).map(function (w) { return +w[1] || 0; }).concat([1]));
      return '<div class="lt diagramm" data-text="' + id + '">' + kopf(t) + '<div class="lt-dia" role="img" aria-label="Balkendiagramm: ' + esc(t.titel || "") + '">' +
        (t.werte || []).map(function (w) { return '<div class="lt-dia-zeile"><span>' + esc(w[0]) + '</span><span class="lt-dia-balken"><i style="width:' + Math.round((+w[1] || 0) / max * 100) + '%"></i></span><b>' + esc(String(w[1]).replace(".", ",")) + "</b></div>"; }).join("") +
        (t.einheit ? "<small>Angaben in " + esc(t.einheit) + "</small>" : "") + "</div>" + fuss(t) + "</div>";
    }
    // Hörtext als Mitschrift (Korrektur, Lehrkraft). In der Probe selbst steht stattdessen der Spieler: hoerHtml(t)
    if (t.typ === "hoertext") {
      var mehrere = hoerRollen(t).length > 1;
      return '<div class="lt hoertext mitschrift" data-text="' + id + '">' + kopf(t, '<small>🎧 Hörtext – in der Probe wurde er abgespielt' + (t.mal ? " (höchstens " + t.mal + "-mal)" : "") + ", nicht gezeigt</small>") + '<div class="lt-mitschrift">' +
        (t.sprecher || []).map(function (s) { return "<p>" + (mehrere ? "<b>" + esc(s.rolle) + ":</b> " : "") + esc(s.text) + "</p>"; }).join("") + "</div>" + fuss(t) + "</div>";
    }
    var z = zeilenVon(t);
    return '<div class="lt' + (t.typ === "gedicht" ? " gedicht" : "") + '" data-text="' + id + '">' + kopf(t) + '<div class="lt-zeilen">' +
      z.map(function (x) {
        if (x.kopf) return '<div class="lz kopf neu"><span class="zn"></span><span class="zt">' + esc(x.t) + "</span></div>";
        return '<div class="lz' + (x.neu ? " neu" : "") + '" data-n="' + x.n + '"><span class="zn" data-n="' + x.n + '">' + (x.n % 5 === 0 ? x.n : "") + '</span><span class="zt">' + esc(x.t) + "</span></div>";
      }).join("") + "</div>" + fuss(t) + "</div>";
  }

  // Schriftgröße je Textkasten: größte Schrift (höchstens 18 px), bei der die breiteste Zeile noch passt
  function passe(box) {
    var breit = box.clientWidth;
    if (!breit) return;                                   // nicht sichtbar – später noch einmal
    var cs = global.getComputedStyle(box), innen = breit - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    box.classList.add("passt"); box.style.fontSize = "18px";
    var weit = 0;
    Array.prototype.forEach.call(box.querySelectorAll(".lz"), function (z) { weit = Math.max(weit, z.firstElementChild.getBoundingClientRect().width + z.lastElementChild.scrollWidth); });
    if (!weit) { box.style.fontSize = ""; box.classList.remove("passt"); return; }
    // Passt alles, ist „weit“ die Breite des Kastens; läuft eine Zeile über, ist es ihre wahre Breite
    var px = weit <= innen + 1 ? 18 : Math.floor(18 * (innen - 2) / weit * 10) / 10;
    if (px < 12.5) { px = 13; box.classList.remove("passt"); }     // zu schmal: Zeilen dürfen umbrechen
    box.style.fontSize = px + "px";
  }
  var beobachter = null;
  function einpassen(root) {
    var boxen = (root || doc).querySelectorAll(".lt-zeilen");
    if (!beobachter && global.ResizeObserver) {
      beobachter = new global.ResizeObserver(function (liste) {
        liste.forEach(function (e) { var b = e.target, w = Math.round(e.contentRect.width); if (b._ltBreite !== w) { b._ltBreite = w; passe(b); } });
      });
    }
    Array.prototype.forEach.call(boxen, function (b) {
      passe(b);
      if (beobachter && !b._ltBeob) { b._ltBeob = true; beobachter.observe(b); }
    });
  }

  function antippen(root) {
    (root || doc).addEventListener("click", function (e) {
      var z = e.target.closest && e.target.closest(".lz[data-n]");
      if (!z || z.closest(".lt.waehlbar")) return;
      var an = z.classList.contains("an");
      Array.prototype.forEach.call(z.parentNode.querySelectorAll(".lz.an"), function (x) { x.classList.remove("an"); });
      if (!an) z.classList.add("an");
    });
  }

  function zeige(root, id, von, bis) {
    var box = (root || doc).querySelector('.lt[data-text="' + id + '"]');
    if (!box) return;
    var erste = null;
    Array.prototype.forEach.call(box.querySelectorAll(".lz[data-n]"), function (z) {
      var n = +z.getAttribute("data-n"), drin = n >= von && n <= (bis || von);
      z.classList.toggle("zeig", drin);
      if (drin && !erste) erste = z;
    });
    if (erste && erste.scrollIntoView) erste.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  /* ---------- Hörtext in der Probe (Englisch 9): abspielen, höchstens „mal“-mal, ohne den Text zu zeigen ----------
     hoerHtml(t)            der Spieler-Kasten für einen Text mit typ "hoertext" (sprecher, stimmen, mal, sprache)
     hoeren(root, opt)      macht alle Spieler in root startklar. opt: { server, texte: [t …], schluessel: id => Name im
                            Gerätespeicher (damit Neuladen keinen Durchgang schenkt), beiEnde(id, durchgang) }
     Ein Durchgang zählt, sobald er beginnt; wird er unterbrochen (Seite neu geladen), geht er an der Stelle weiter.
     Die Tonspur kommt vom Server (/api/speech/speak, je Satz) – antwortet er nicht, liest das Gerät mit einer
     englischen Stimme vor. Kann das Gerät gar nicht vorlesen, steht der Text einmal zum Lesen da.
     Die Lernmodule spielen ihre Hörtexte in d7-spiel.js ab (dort mit Pause, langsamer, Mitschrift nach den Aufgaben). */
  var STIMMEN_EN = ["en-GB-SoniaNeural", "en-GB-RyanNeural", "en-GB-LibbyNeural", "en-US-GuyNeural", "en-US-JennyNeural"];
  var SPASS = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|organ|pipe organ|princess|superstar|trinoids|whisper|wobble|zarvox|agnes|bruce|fred|junior|kathy|ralph|vicki|victoria|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i;
  function hoerRollen(t) { var r = []; (t.sprecher || []).forEach(function (s) { if (r.indexOf(s.rolle) < 0) r.push(s.rolle); }); return r; }
  function hoerStuecke(t) {
    var st = [];
    (t.sprecher || []).forEach(function (s) { (String(s.text).match(/[^.!?…]+[.!?…]+["“”]?|[^.!?…]+$/g) || [s.text]).forEach(function (satz) { if (satz.trim()) st.push({ rolle: s.rolle, text: satz.trim() }); }); });
    return st;
  }
  function hoerHtml(t) {
    var id = esc(t.id || ""), mal = t.mal || 2, rollen = hoerRollen(t);
    return '<div class="lt hoertext" data-text="' + id + '" data-hoer="' + id + '">' + kopf(t, "<small>🎧 Listening · you can listen " + (mal === 1 ? "once" : mal === 2 ? "twice" : mal + " times") + "</small>") +
      '<div class="lt-hoer">' + (rollen.length > 1 ? '<div class="lt-hoer-rollen">' + rollen.map(function (r) { return '<span data-r="' + esc(r) + '">' + esc(r) + "</span>"; }).join("") + "</div>" : "") +
      '<button type="button" class="btn lt-hoer-play">▶ Play</button><div class="lt-hoer-lauf" aria-hidden="true"><i></i></div>' +
      '<p class="lt-hoer-status" role="status">Read the tasks first. Then listen. <span lang="de">Lies zuerst die Aufgaben, dann höre zu.</span></p><div class="lt-hoer-ersatz" hidden></div></div>' + fuss(t) + "</div>";
  }
  function hoeren(root, opt) {
    opt = opt || {};
    var synth = global.speechSynthesis, server = String(opt.server || "").replace(/\/$/, "");
    Array.prototype.forEach.call((root || doc).querySelectorAll(".lt.hoertext[data-hoer]"), function (box) {
      var t = (opt.texte || []).filter(function (x) { return x.id === box.getAttribute("data-hoer"); })[0];
      if (!t || box._hoer) return;
      box._hoer = true;
      var stuecke = hoerStuecke(t), rollen = hoerRollen(t), MAL = t.mal || 2, EN = String(t.sprache || "en").slice(0, 2).toLowerCase() === "en";
      var play = box.querySelector(".lt-hoer-play"), lauf = box.querySelector(".lt-hoer-lauf i"), status = box.querySelector(".lt-hoer-status"), ersatz = box.querySelector(".lt-hoer-ersatz");
      var name = opt.schluessel ? opt.schluessel(t.id) : "", stand = { n: 0, i: -1 };       // n: begonnene Durchgänge · i: Stelle im laufenden Durchgang (-1 = keiner offen)
      try { var roh = name && JSON.parse(global.localStorage.getItem(name) || "null"); if (roh && roh.n >= 0) stand = { n: Math.min(MAL, +roh.n || 0), i: +roh.i >= 0 && +roh.i < stuecke.length ? +roh.i : -1 }; } catch (_e) {}
      function merke() { try { if (name) global.localStorage.setItem(name, JSON.stringify(stand)); } catch (_e) {} }
      var ton = null, serverGeht = EN && !!server && typeof global.Audio === "function", laeuft = false, i = 0, nurLesen = false;
      function stimmen() {
        var alle = synth ? synth.getVoices().filter(function (v) { return new RegExp("^" + (EN ? "en" : "de"), "i").test(v.lang); }) : [];
        if (!EN) return alle;
        var ernst = alle.filter(function (v) { return !SPASS.test(String(v.name || "").trim()); });
        return (ernst.length ? ernst : alle).sort(function (a, b) { return (/GB/i.test(b.lang) ? 1 : 0) - (/GB/i.test(a.lang) ? 1 : 0); });
      }
      function kann() { return serverGeht || Boolean(synth && global.SpeechSynthesisUtterance && stimmen().length); }
      function adresse(s) { return server + "/api/speech/speak?voice=" + encodeURIComponent((t.stimmen && t.stimmen[s.rolle]) || STIMMEN_EN[Math.max(0, rollen.indexOf(s.rolle)) % STIMMEN_EN.length]) + "&text=" + encodeURIComponent(s.text); }
      function rolle(r) { Array.prototype.forEach.call(box.querySelectorAll(".lt-hoer-rollen span"), function (s) { s.classList.toggle("an", s.getAttribute("data-r") === r); }); }
      function zeichne() {
        var offen = stand.i >= 0, rest = MAL - stand.n;
        play.disabled = laeuft || (!offen && rest <= 0);
        play.textContent = nurLesen ? (rest <= 0 ? "✓ Read " + MAL + " times" : "📄 Read the text again (" + (stand.n + 1) + " of " + MAL + ")")
          : laeuft ? "🔊 Playing … (" + stand.n + " of " + MAL + ")" : offen ? "▶ Go on listening (" + stand.n + " of " + MAL + ")" : rest <= 0 ? "✓ Listened " + MAL + " times" : stand.n ? "▶ Play again (" + (stand.n + 1) + " of " + MAL + ")" : "▶ Play (1 of " + MAL + ")";
        box.setAttribute("data-durchgang", String(stand.n));
      }
      function ende() {
        laeuft = false; stand.i = -1; merke(); rolle(""); lauf.style.width = "100%";
        status.textContent = stand.n >= MAL ? "You have listened " + MAL + " times. Now finish the tasks." : "Finished. You can listen once more.";
        zeichne(); if (opt.beiEnde) opt.beiEnde(t.id, stand.n);
      }
      function ohneStimme() {
        // weder Server noch Gerät können vorlesen: Der Text steht zum Lesen da – jedes Lesen zählt als ein Durchgang,
        // danach wird er wieder zugedeckt (so oft, wie die Probe das Anhören erlaubt)
        laeuft = false; nurLesen = true; play.hidden = true; box.querySelector(".lt-hoer-lauf").hidden = true; rolle("");
        if (stand.i < 0 && stand.n < MAL) { stand.n++; } stand.i = -1; merke();
        status.textContent = "This device cannot read the text aloud. Read it carefully. Dieses Gerät kann nicht vorlesen – lies den Text aufmerksam und sag deiner Lehrkraft Bescheid.";
        ersatz.hidden = false;
        ersatz.innerHTML = '<div class="lt-mitschrift">' + (t.sprecher || []).map(function (s) { return "<p>" + (rollen.length > 1 ? "<b>" + esc(s.rolle) + ":</b> " : "") + esc(s.text) + "</p>"; }).join("") + '</div><button type="button" class="btn secondary lt-hoer-zu">I have read it – hide the text</button>';
        box.setAttribute("data-durchgang", String(stand.n));
        ersatz.querySelector(".lt-hoer-zu").addEventListener("click", function () {
          ersatz.hidden = true; ersatz.innerHTML = ""; play.hidden = false; zeichne();
          status.textContent = stand.n >= MAL ? "Now do the tasks from memory." : "Now do the tasks from memory. You can read the text once more.";
          if (opt.beiEnde) opt.beiEnde(t.id, stand.n);
        });
      }
      function sprich() {
        if (!laeuft) return;
        if (i >= stuecke.length) { ende(); return; }
        var s = stuecke[i], weiter = false;
        stand.i = i; merke(); rolle(s.rolle); lauf.style.width = Math.round(i / stuecke.length * 100) + "%";
        function naechstes() { if (weiter) return; weiter = true; i++; sprich(); }
        if (serverGeht) {
          // ein einziges Audio-Element für alle Sätze (Safari spielt nur weiter, was einmal durch Antippen gestartet wurde)
          if (!ton) { ton = new global.Audio(); ton.preload = "auto"; }
          var wechsel = i > 0 && stuecke[i - 1].rolle !== s.rolle;
          ton.onended = function () { global.setTimeout(naechstes, wechsel || /[.!?]$/.test(s.text) ? 380 : 150); };
          ton.onerror = function () { if (!laeuft || weiter) return; serverGeht = false; if (kann()) sprich(); else ohneStimme(); };
          ton.src = adresse(s);
          var p = ton.play(); if (p && p.catch) p.catch(function () { if (ton.error) ton.onerror(); });
          if (stuecke[i + 1] && global.fetch) global.fetch(adresse(stuecke[i + 1])).catch(function () {});
          return;
        }
        var u = new global.SpeechSynthesisUtterance(s.text), v = stimmen(), k = Math.max(0, rollen.indexOf(s.rolle));
        u.lang = EN ? "en-GB" : "de-DE"; u.rate = 0.95;
        if (v.length > 1) { u.voice = v[k % v.length]; u.pitch = k >= v.length ? 1.2 : 1; } else if (v.length) { u.voice = v[0]; u.pitch = [1, 1.35, 0.75, 1.15][k % 4]; }
        u.onend = naechstes; u.onerror = function (e) { if (e.error === "interrupted" || e.error === "canceled") return; naechstes(); };
        synth.speak(u);
      }
      play.addEventListener("click", function () {
        if (laeuft) return;
        if (!kann()) { ohneStimme(); return; }
        if (stand.i >= 0) i = stand.i;                              // unterbrochener Durchgang: an der Stelle weiter
        else { if (stand.n >= MAL) return; stand.n++; i = 0; }
        laeuft = true; status.textContent = "Listen carefully …"; if (synth) synth.cancel(); zeichne(); merke(); sprich();
      });
      global.addEventListener("pagehide", function () { laeuft = false; if (ton) { ton.onended = null; ton.onerror = null; ton.pause(); } if (synth) synth.cancel(); });
      // für Tests: den laufenden Durchgang sofort beenden, ohne die Sprachausgabe abzuwarten
      box._hoerFertig = function () { if (!laeuft) return; i = stuecke.length; if (ton) { ton.onended = null; ton.onerror = null; ton.pause(); } if (synth) synth.cancel(); ende(); };
      if (stand.i >= 0) status.textContent = "Your listening was interrupted. Go on from where it stopped.";
      zeichne();
    });
  }

  /* Textdatenbank der Lernmodule: Jede Datei im Ordner texte/ meldet ihren Text mit D7Texte.add({ … }) an.
     Pflichtangaben (Metadaten): id, titel, textsorte, zug ("R7" | "M7" | "R7/M7"), modul, unterthema, woerter,
     schwierigkeit, lehrplan, thema, quelle, lizenz, erstellung, zeilennummern, probe – dazu der Text selbst:
     absaetze (Fließtext), verse (Gedicht) oder sprecher (Hörtext). Die Texte der Proben stehen nicht hier,
     sondern nur auf dem Server. */
  var TEXTE = {};
  global.D7Texte = {
    alle: TEXTE,
    add: function (t) { if (t && t.id) { if (!t.art) t.art = t.textsorte; if (!t.typ) t.typ = t.verse ? "gedicht" : t.sprecher ? "hoertext" : "text"; TEXTE[t.id] = t; } return t; },
    get: function (id) { return TEXTE[id] || null; }
  };

  global.D7Lesetext = { html: html, einpassen: einpassen, antippen: antippen, zeige: zeige, esc: esc, hoerHtml: hoerHtml, hoeren: hoeren };
})(window);
