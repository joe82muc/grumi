/* NT 8: Zusatzbausteine der Lernmodule. Die Module nutzen die gemeinsamen Bausteine aus ../../7M/NT/modul-basis.js
 * (Modul.makeMC, makeGap, makeSort …) und dazu diese hier – eingebunden nach themen.js, modul-basis.js, karten.js:
 *
 *   NT8M.start({ id, thema, glossary, hero })   statt Modul.init: Speicherschlüssel und KI-Route kommen aus themen.js.
 *        glossary: { schluessel: ["Begriff", "einfache Erklärung", "Mehr wissen (für M8, optional)"] }
 *   NT8M.fertig()                               statt Modul.ready: dazu die Lernkarten des Moduls (Element #lernkarten)
 *   NT8M.plus(() => …)                          = Modul.plus: Aufgaben auf M8-Niveau (für 8R freiwillig)
 *   NT8M.hilfen(el, ["Hilfe 1", "Hilfe 2", …])  Hilfestufen: Jeder Klick zeigt die nächste – nie gleich die Lösung
 *   NT8M.offen(el, [{ q, m, k, min, satz }], prefix, tipp)   offene Fragen mit KI-Rückmeldung: erst ein kurzer Tipp,
 *        die Musterlösung gibt es nach dem zweiten Versuch oder wenn die Antwort stimmt. satz = Satzanfang (8R sieht ihn
 *        sofort, 8M auf Wunsch).
 *   NT8M.entdecke({ id, labor, auftrag, ziel, frage, sicherung })   entdeckendes Lernen: Forscherauftrag → Versuch im
 *        NT-Labor → Beobachtung → erst dann erscheint die Sicherung (Merke-Kasten).
 *   NT8M.duell(el, { titel, runden: [{ b, stimmt, o, a, e }] }, id)   Duell: Der KI-Gegner stellt Behauptungen auf,
 *        manche sind falsch. Wer erwischt ihn? (Die Behauptungen sind vorbereitet, nicht live erzeugt.)
 *   NT8M.film(el, { titel, quelle, dauer, seite, einbetten, abschnitt, stops: [{ t, q, o, a, e }] })   Film aus einer
 *        Mediathek mit Stopp-Fragen: lädt erst nach dem Antippen, zählt nicht zu den Aufgaben. Nur mit geprüften Untertiteln.
 *
 * R8 und M8: Abschnitte mit data-zug="R" oder data-zug="M" sieht nur dieser Zug (ohne bekannten Zug: beide, mit
 * Marke). In solchen Abschnitten stehen nur Texte und Hilfen, keine Aufgaben – Aufgaben für M8 kommen in NT8M.plus.
 */
(function (global) {
  "use strict";
  var doc = global.document, M = global.Modul, L = global.NT8;
  if (!M || !L) return;
  var $ = M.$, $$ = M.$$, esc = M.esc;
  var ZUG = "", GLOSSAR = {}, MODUL = "";
  M.loeser = M.loeser || {};   // für den Modul-Prüfer: löst eigene Bausteine über die Oberfläche

  function start(cfg) {
    var reg = L.modulVon(cfg.id);
    if (!reg) throw new Error("NT 8: Modul „" + cfg.id + "“ steht nicht in themen.js");
    MODUL = cfg.id; GLOSSAR = cfg.glossary || {};
    M.init({ key: reg.modul.key, hero: cfg.hero, thema: cfg.thema || reg.modul.titel, glossary: GLOSSAR, api: "/api/nt8/uebung/feedback", onProgress: cfg.onProgress });
    ZUG = M.zug();
    if (ZUG) doc.body.classList.add("zug-" + ZUG);
    // 8R: Alle Wege zur Übersicht führen zur Übersicht der eigenen Klasse
    if (ZUG === "R") $$('a[href="index.html"]').forEach(function (a) { a.setAttribute("href", "../../8R/NT/index.html"); });
    // „Mehr wissen“ im Fachbegriff-Fenster (dritter Eintrag im Glossar): für M8 und für alle, die mehr wollen
    doc.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target.closest(".term") : null, pop = $("#pop");
      if (!t || !pop) return;
      var alt = $(".pop-mehr", pop); if (alt) alt.remove();
      var g = GLOSSAR[t.dataset.t];
      if (!g || !g[2]) return;
      var d = doc.createElement("details"); d.className = "pop-mehr"; d.open = ZUG === "M";
      d.innerHTML = "<summary>Mehr wissen</summary><div>" + esc(g[2]) + "</div>";
      pop.appendChild(d);
    });
  }

  function fertig() {
    var lk = $("#lernkarten");
    if (lk && global.NT8Karten) global.NT8Karten.trainer(lk, { module: [MODUL], titel: "Lernkarten zu diesem Modul", zug: ZUG });
    // Verweise auf Lernset und Probe-Vorbereitung des Themenbereichs
    var reg = L.modulVon(MODUL);
    $$("[data-lernset]").forEach(function (a) { a.setAttribute("href", "lernkarten.html?probe=" + encodeURIComponent(reg.thema.id)); });
    $$("[data-vorbereitung]").forEach(function (a) { a.setAttribute("href", "vorbereitung.html?probe=" + encodeURIComponent(reg.thema.id)); });
    M.ready();
  }

  /* ---------- Hilfestufen ---------- */
  function hilfen(el, liste) {
    if (typeof el === "string") el = $(el);
    if (!el || !liste || !liste.length) return;
    el.classList.add("hilfen");
    el.innerHTML = '<button type="button" class="hilfen-knopf">💡 Hilfe 1 von ' + liste.length + '</button><ul class="hilfen-liste"></ul>';
    var n = 0, knopf = $("button", el), ul = $("ul", el);
    knopf.addEventListener("click", function () {
      if (n >= liste.length) return;
      var li = doc.createElement("li"); li.innerHTML = "<b>Hilfe " + (n + 1) + ":</b> " + esc(liste[n]); ul.appendChild(li); n++;
      if (n >= liste.length) { knopf.disabled = true; knopf.textContent = "Alle Hilfen sind offen"; }
      else knopf.textContent = "💡 Hilfe " + (n + 1) + " von " + liste.length;
    });
  }

  /* ---------- Offene Fragen: erst Tipp, Musterlösung später ---------- */
  function offen(el, liste, prefix, tipp) {
    if (typeof el === "string") el = $(el);
    M.makeOpen(el, liste, prefix, tipp);
    $$(".q.ki", el).forEach(function (q, i) {
      var o = liste[i] || {}, fb = $(".fb", q), sm = $(".show-model", q), go = $(".go", q), versuche = 0;
      if (o.satz) {
        var s = doc.createElement("div");
        if (ZUG === "M") { hilfen(s, ["Du kannst so anfangen: " + o.satz]); }
        else { s.className = "satzstarter"; s.innerHTML = "<b>Satzanfang:</b> " + esc(o.satz); }
        q.insertBefore(s, $("textarea", q));
      }
      go.addEventListener("click", function () { versuche++; });
      // Die gemeinsame Übung blendet den Knopf „Musterlösung“ nach jeder Prüfung ein – hier erst ab dem zweiten Versuch
      if (global.MutationObserver) new MutationObserver(function () {
        if (!fb.classList.contains("show")) return;
        var frei = fb.classList.contains("ok") || versuche >= 2;
        if (sm.hidden === frei) sm.hidden = !frei;
        if (!frei && !$(".model", q).classList.contains("show") && !$(".noch", q)) {
          var p = doc.createElement("p"); p.className = "hint noch"; p.textContent = "Überarbeite deine Antwort mit dem Tipp. Die Musterlösung gibt es nach dem zweiten Versuch.";
          q.appendChild(p);
        }
        if (frei) { var n = $(".noch", q); if (n) n.remove(); }
      }).observe(fb, { attributes: true, attributeFilter: ["class"] });
    });
  }

  /* ---------- Entdeckendes Lernen: Forscherauftrag → Versuch → Beobachtung → Sicherung ---------- */
  // cfg: { id, labor (Rückgabe von NTLabor.…), el (Element unter dem Versuch), auftrag, ziel: (entdeckt) => { fertig, text },
  //        frage: { q, o: [4], a: 0, e }, sicherung: "#merke1" }
  function entdecke(cfg) {
    var box = typeof cfg.el === "string" ? $(cfg.el) : cfg.el, sich = cfg.sicherung ? $(cfg.sicherung) : null, lab = cfg.labor;
    M.register(cfg.id, box, cfg.text || "Forscherauftrag: " + cfg.auftrag);
    var warten = null;
    if (sich && !M.isSolved(cfg.id)) {
      sich.hidden = true; sich.classList.add("sicherung");
      warten = doc.createElement("p"); warten.className = "sicherung-warten"; warten.textContent = "🔒 Die Erklärung erscheint, sobald du den Forscherauftrag gelöst hast.";
      sich.parentNode.insertBefore(warten, sich);
    }
    box.innerHTML = '<div class="forscher"><h4>🔎 FORSCHERAUFTRAG</h4><p>' + esc(cfg.auftrag) + '</p></div><p class="hint forscher-stand"></p><div class="forscher-frage"></div>';
    var standEl = $(".forscher-stand", box), frageEl = $(".forscher-frage", box), gezeigt = false;
    function zeigeFrage() {
      if (gezeigt) return; gezeigt = true;
      var f = cfg.frage, order = M.shuffle(f.o.map(function (t, i) { return { t: t, i: i }; }));
      frageEl.innerHTML = '<div class="q"><div class="q-title">Deine Beobachtung: ' + esc(f.q) + '</div><div class="opts">' +
        order.map(function (o) { return '<button class="opt round" data-i="' + o.i + '"><span class="box"></span><span>' + esc(o.t) + "</span></button>"; }).join("") + '</div><div class="fb"></div></div>';
      var fb = $(".fb", frageEl);
      $$(".opt", frageEl).forEach(function (b) {
        b.addEventListener("click", function () {
          var ok = +b.dataset.i === f.a;
          $$(".opt", frageEl).forEach(function (o) { o.classList.remove("wrong"); });
          b.classList.add(ok ? "right" : "wrong");
          fb.className = "fb show " + (ok ? "ok" : "bad");
          fb.textContent = (ok ? "✅ Genau beobachtet! " : "❌ Schau im Versuch noch einmal genau hin. ") + (ok ? f.e || "" : "");
          if (ok) { $$(".opt", frageEl).forEach(function (o) { o.disabled = true; }); geschafft(); }
        });
      });
    }
    function geschafft() {
      if (sich) { sich.hidden = false; if (warten) { warten.remove(); warten = null; } }
      M.solve(cfg.id);
    }
    function pruefe() {
      var z = cfg.ziel ? cfg.ziel(lab ? lab.entdeckt() : {}) : { fertig: true, text: "" };
      standEl.textContent = z.text || "";
      if (z.fertig) zeigeFrage();
    }
    if (lab && lab.beiAenderung) lab.beiAenderung(pruefe);
    pruefe();
    if (M.isSolved(cfg.id)) { zeigeFrage(); var r = $('.opt[data-i="' + cfg.frage.a + '"]', frageEl); if (r) { r.classList.add("right"); $$(".opt", frageEl).forEach(function (o) { o.disabled = true; }); } }
    M.loeser[cfg.id] = function () {
      if (lab && lab.loese) lab.loese();
      pruefe(); zeigeFrage();
      var b = $('.opt[data-i="' + cfg.frage.a + '"]', frageEl); if (b && !b.disabled) b.click();
    };
  }

  /* ---------- Duell gegen den KI-Gegner ---------- */
  function duell(el, cfg, id) {
    if (typeof el === "string") el = $(el);
    M.register(id, el, "Duell gegen die KI: " + (cfg.titel || ""));
    var R = cfg.runden, N = R.length, ziel = Math.ceil(N * 0.6), i, ich, ki;
    el.classList.add("duell");
    function kopf() { return '<div class="duell-kopf"><span>Du <b>' + ich + '</b></span><span>Runde ' + Math.min(i + 1, N) + " / " + N + '</span><span><b>' + ki + "</b> KI</span></div>"; }
    function startDuell() { i = 0; ich = 0; ki = 0; runde(); }
    function runde() {
      var r = R[i];
      el.innerHTML = kopf() + '<div class="duell-runde"><p class="lead" style="margin:0 0 4px"><b>🤖 Die KI behauptet:</b></p><p style="font-size:1.08rem;font-weight:700">„' + esc(r.b) + '“</p>' +
        '<div class="wahl"><button type="button" data-v="1">✅ Das stimmt</button><button type="button" data-v="0">❌ Das stimmt nicht</button></div><div class="duell-mehr"></div></div>';
      var mehr = $(".duell-mehr", el);
      $$(".wahl button", el).forEach(function (b) {
        b.addEventListener("click", function () {
          $$(".wahl button", el).forEach(function (x) { x.disabled = true; });
          b.classList.add("sel");
          var meint = b.dataset.v === "1";
          if (meint !== r.stimmt) return ende(false, r.stimmt ? "Die KI hatte recht." : "Reingefallen – die Behauptung war falsch.");
          if (r.stimmt || !r.o) return ende(true, r.stimmt ? "Richtig: Diese Behauptung stimmt." : "Erwischt!");
          // Die Behauptung ist falsch – was ist richtig?
          var order = M.shuffle(r.o.map(function (t, k) { return { t: t, k: k }; }));
          mehr.innerHTML = '<p style="margin:10px 0 6px;font-weight:700">Erwischt! Und was ist richtig?</p><div class="opts">' +
            order.map(function (o) { return '<button class="opt round" data-k="' + o.k + '"><span class="box"></span><span>' + esc(o.t) + "</span></button>"; }).join("") + "</div>";
          $$(".opt", mehr).forEach(function (o) {
            o.addEventListener("click", function () { $$(".opt", mehr).forEach(function (x) { x.disabled = true; }); var ok = +o.dataset.k === r.a; o.classList.add(ok ? "right" : "wrong"); ende(ok, ok ? "Punkt für dich!" : "Fast – die Begründung stimmt nicht."); });
          });
        });
      });
      function ende(gewonnen, text) {
        if (gewonnen) ich++; else ki++;
        var p = doc.createElement("div"); p.className = "duell-ki " + (gewonnen ? "richtig" : "falsch");
        p.innerHTML = "<b>" + (gewonnen ? "✅ " : "❌ ") + esc(text) + "</b> " + esc(r.e || "") + '<div class="row-btns" style="margin-top:8px"><button type="button" class="btn small weiter">' + (i + 1 < N ? "Nächste Runde →" : "Ergebnis ansehen →") + "</button></div>";
        mehr.appendChild(p);
        $(".duell-kopf", el).outerHTML = kopf();
        $(".weiter", p).addEventListener("click", function () { i++; if (i < N) runde(); else schluss(); });
      }
    }
    function schluss() {
      var gut = ich >= ziel;
      el.innerHTML = kopf() + '<div class="duell-ende"><div class="gross">' + (gut ? "🏆" : "🤖") + "</div><h3>" + (gut ? "Du hast die KI geschlagen!" : "Diesmal war die KI besser.") + "</h3><p>" + ich + " : " + ki + " – " +
        (gut ? "Du lässt dir nichts vormachen." : "Für den Sieg brauchst du mindestens " + ziel + " Punkte.") + '</p><button type="button" class="btn small ghost nochmal">↺ ' + (gut ? "Noch einmal spielen" : "Revanche") + "</button></div>";
      $(".nochmal", el).addEventListener("click", startDuell);
      if (gut) M.solve(id);
    }
    startDuell();
    M.loeser[id] = function () {
      for (var n = 0; n < N * 3 && !M.isSolved(id); n++) {
        var r = R[i], knopf = $('.wahl button[data-v="' + (r.stimmt ? 1 : 0) + '"]', el);
        if (knopf && !knopf.disabled) knopf.click();
        var richtig = $('.duell-mehr .opt[data-k="' + r.a + '"]', el); if (richtig && !richtig.disabled) richtig.click();
        var w = $(".weiter", el); if (w) w.click(); else break;
      }
    };
  }

  // Film aus einer Mediathek mit Stopp-Fragen. Geladen wird erst nach dem Antippen – vorher geht nichts an fremde Server.
  // cfg: { titel, quelle, dauer, seite (Adresse in der Mediathek), einbetten (Adresse des Einbett-Players; fehlt sie,
  //        öffnet der Knopf die Mediathek in einem neuen Tab), abschnitt (z. B. "von 0:40 bis 3:10"),
  //        hinweis (ein Satz zum Film), mitschrift: [["0:42", "eigene Zusammenfassung der Stelle"], …],
  //        stops: [{ t: "1:20", q: "Frage", o: ["richtig oder falsch …"], a: Index der richtigen Antwort, e: "Erklärung" }] }
  // Ein Film kommt nur hinein, wenn seine Untertitel vollständig gelesen und geprüft sind (progress/nt8/12_videos).
  // Die Stopp-Fragen sind ein Zusatz und zählen nicht zu den Aufgaben des Moduls: In manchen Schulnetzen sind Filme
  // gesperrt, das Modul muss trotzdem ganz zu schaffen sein.
  function film(el, cfg) {
    el = typeof el === "string" ? $(el) : el; if (!el || !cfg || !cfg.seite) return;
    var stops = cfg.stops || [], yt = /youtube/.test(cfg.seite), woher = yt ? "YouTube" : "der Mediathek";
    el.classList.add("nt8-film");
    el.innerHTML = '<div class="film"><button class="film-poster" type="button"><span class="play">▶</span><b>Film starten</b><small>' + esc(cfg.quelle || "") + ': „' + esc(cfg.titel || "Film") + "“" + (cfg.dauer ? " (" + esc(cfg.dauer) + ")" : "") +
      ". Erst mit diesem Klick wird der Film von " + woher + " geladen.</small></button></div>" +
      '<p class="hint nf-hinweis">' + (cfg.abschnitt ? "Sieh dir den Abschnitt " + esc(cfg.abschnitt) + " an. " : "") + (stops.length ? "Halte an den genannten Stellen an und beantworte die Frage. " : "") +
      'Lädt der Film nicht? <a href="' + esc(cfg.seite) + '" target="_blank" rel="noopener">' + (yt ? "Auf YouTube öffnen" : "In der Mediathek öffnen") + "</a>.</p>" +
      // hinweis: was man zu diesem Film wissen muss (Tonspur, Werbung, Versprecher)
      (cfg.hinweis ? '<p class="hint nf-zusatz">ℹ️ ' + esc(cfg.hinweis) + "</p>" : "") +
      // mitschrift: [["0:42", "eigene Zusammenfassung dieser Stelle"], …] – zum Nachlesen, auch wenn der Film nicht lädt.
      // Eigene Worte mit Zeitmarken, kein Abdruck der Untertitel (die gehören dem Kanal).
      (cfg.mitschrift && cfg.mitschrift.length ? '<details class="nf-text"><summary>📄 Mitschrift zum Film – zum Nachlesen</summary><p class="hint">Was im Film an welcher Stelle passiert, mit eigenen Worten zusammengefasst.</p><ol>' +
        cfg.mitschrift.map(function (z) { return "<li><b>" + esc(z[0]) + "</b> " + esc(z[1]) + "</li>"; }).join("") + "</ol></details>" : "") +
      '<div class="nf-fragen"></div>';
    var flaeche = $(".film", el);
    $(".film-poster", el).addEventListener("click", function () {
      if (!cfg.einbetten) { global.open(cfg.seite, "_blank", "noopener"); return; }
      var f = doc.createElement("iframe");
      f.title = cfg.titel || "Film"; f.allow = "fullscreen; encrypted-media; picture-in-picture"; f.setAttribute("allowfullscreen", ""); f.referrerPolicy = "strict-origin-when-cross-origin"; f.src = cfg.einbetten;
      flaeche.innerHTML = ""; flaeche.appendChild(f);
    });
    var box = $(".nf-fragen", el);
    stops.forEach(function (s, i) {
      var wrap = doc.createElement("div"); wrap.className = "film-q";
      var reihe = s.o.map(function (text, k) { return { text: text, k: k }; }), dreh = (i + 1) % reihe.length;
      reihe = reihe.slice(dreh).concat(reihe.slice(0, dreh));       // die richtige Antwort steht nicht immer oben
      wrap.innerHTML = '<span class="task-tag">⏸ Film-Stopp' + (s.t ? " bei " + esc(s.t) : " " + (i + 1)) + '</span><p style="margin:8px 0"><b>' + esc(s.q) + '</b></p><div class="nf-opts">' +
        reihe.map(function (r) { return '<button type="button" class="opt" data-k="' + r.k + '">' + esc(r.text) + "</button>"; }).join("") + '</div><div class="fb" aria-live="polite"></div>';
      wrap.addEventListener("click", function (e) {
        var b = e.target.closest(".opt"); if (!b || b.disabled) return;
        var fb = $(".fb", wrap);
        if (+b.dataset.k === s.a) { b.classList.add("right"); $$(".opt", wrap).forEach(function (x) { x.disabled = true; }); fb.className = "fb ok show"; fb.textContent = "Richtig. " + (s.e || ""); }
        else { b.classList.add("wrong"); b.disabled = true; fb.className = "fb bad show"; fb.textContent = "Noch nicht. Sieh dir die Stelle im Film noch einmal an."; }
      });
      box.appendChild(wrap);
    });
  }

  global.NT8M = { start: start, fertig: fertig, plus: M.plus, hilfen: hilfen, offen: offen, entdecke: entdecke, duell: duell, film: film, zug: function () { return ZUG; } };
})(window);
