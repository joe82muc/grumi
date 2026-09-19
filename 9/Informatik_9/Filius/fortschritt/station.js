/* GRUMI Informatik 9 - Filius-Workshop
   Baut eine Stationsseite aus der Konfiguration STATION auf:
   Arbeitsschritte zum Abhaken, Videos, Kontrollfragen und Speicher-Feld.

   Erwartet im Seitenkopf:
     <div class="wrap"> ... <div id="station"></div> ... </div>
   und eine globale Variable STATION (siehe die einzelnen Stationsseiten).
*/
(function () {
  var F = window.GrumiFilius;
  var S = window.STATION;
  if (!S) return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- Stationsnavigation ---------- */
  function navBauen() {
    var nav = el("nav", "stationen");
    nav.setAttribute("aria-label", "Stationen");
    (S.alleStationen || []).forEach(function (st) {
      var a = el("a", st.id === S.id ? "current" : null);
      a.href = st.datei;
      var lbl=document.createElement("span"); lbl.innerHTML=st.kurz; a.appendChild(lbl);
      if (F && F.istGeschafft(st.id, st.schritte)) {
        var hk = el("span", "fertig", "✓");
        hk.setAttribute("aria-label", "geschafft");
        a.appendChild(hk);
      }
      nav.appendChild(a);
    });
    return nav;
  }

  /* ---------- Video (datenschutzfreundlich, siehe js/yt-embed.js) ---------- */
  function videoBauen(v) {
    var box = el("div", "video-box");
    var huelle = el("div", "yt-embed");

    /* Bewusst ein <a>: Falls yt-embed.js fehlt oder das Schulnetz das
       Einbetten blockiert, oeffnet der Link das Video im neuen Tab. */
    var knopf = el("a", "yt-facade");
    knopf.href = "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id);
    knopf.target = "_blank";
    knopf.rel = "noopener noreferrer";
    knopf.setAttribute("data-yt", v.id);
    knopf.setAttribute("data-title", v.titel);
    knopf.setAttribute("aria-label", "Video ansehen: " + v.titel);

    var ico = el("span", "yt-ico", "▶");
    ico.setAttribute("aria-hidden", "true");
    knopf.appendChild(ico);

    var label = el("span", "yt-label", v.titel);
    label.appendChild(el("small", null, v.quelle || "Video zum Workshop"));
    knopf.appendChild(label);

    huelle.appendChild(knopf);
    box.appendChild(huelle);
    return box;
  }

  /* ---------- Arbeitsschritte ---------- */
  function schritteBauen() {
    var liste = el("ul", "schritte");
    S.schritte.forEach(function (sch) {
      var li = el("li", "schritt");
      var box = document.createElement("input");
      box.type = "checkbox";
      box.id = "sch-" + S.id + "-" + sch.id;
      if (F && F.istGehakt(S.id, sch.id)) {
        box.checked = true;
        li.classList.add("done");
      }

      var txt = el("div", "txt");
      txt.innerHTML = sch.text;

      var label = document.createElement("label");
      label.setAttribute("for", box.id);
      label.style.cssText = "display:flex;gap:11px;align-items:flex-start;flex:1;cursor:pointer";
      label.appendChild(txt);

      box.addEventListener("change", function () {
        li.classList.toggle("done", box.checked);
        if (F) F.haken(S.id, sch.id, box.checked);
        balkenAktualisieren();
      });

      li.appendChild(box);
      li.appendChild(label);
      liste.appendChild(li);
    });
    return liste;
  }

  /* ---------- Kontrollfragen ---------- */
  var quizRichtig = 0, quizBeantwortet = 0;

  function fragenBauen() {
    var box = el("div");
    S.fragen.forEach(function (fr, i) {
      var d = el("div", "frage");
      d.dataset.i = i;

      var q = el("div", "frage-q");
      var nr = el("span", "frage-nr", String(i + 1));
      q.appendChild(nr);
      q.appendChild(document.createTextNode(fr.frage));
      d.appendChild(q);

      var opts = el("div", "opts");
      fr.optionen.forEach(function (o, k) {
        var b = el("button", "opt");
        b.type = "button";
        b.dataset.k = k;
        var kk = el("span", "opt-k", "ABCD"[k]);
        b.appendChild(kk);
        b.appendChild(el("span", null, o));
        opts.appendChild(b);
      });
      d.appendChild(opts);
      d.appendChild(el("div", "erklaerung"));
      box.appendChild(d);
    });

    box.addEventListener("click", function (e) {
      var b = e.target.closest(".opt");
      if (!b) return;
      var karte = b.closest(".frage");
      if (karte.dataset.fertig === "1") return;
      karte.dataset.fertig = "1";

      var i = +karte.dataset.i;
      var fr = S.fragen[i];
      var k = +b.dataset.k;
      var ok = k === fr.richtig;

      karte.querySelectorAll(".opt").forEach(function (x) {
        x.disabled = true;
        if (+x.dataset.k === fr.richtig) x.classList.add(ok ? "richtig" : "zeigen");
      });
      if (!ok) b.classList.add("falsch");
      karte.classList.add(ok ? "ok" : "bad");

      var er = karte.querySelector(".erklaerung");
      er.className = "erklaerung show";
      er.textContent = (ok ? "Richtig! " : "Nicht ganz. ") + fr.warum;

      quizBeantwortet++;
      if (ok) quizRichtig++;
      if (quizBeantwortet === S.fragen.length) {
        if (F) F.quiz(S.id, quizRichtig, S.fragen.length);
        var res = document.getElementById("quiz-ergebnis");
        var q = quizRichtig / S.fragen.length;
        res.className = "ergebnis show " + (q >= 0.8 ? "good" : q >= 0.5 ? "mid" : "low");
        res.textContent = quizRichtig + " von " + S.fragen.length + " richtig. " +
          (q >= 0.8 ? "Sehr gut - weiter zur nächsten Station."
                    : "Schau dir die markierten Stellen noch einmal an.");
        balkenAktualisieren();
      }
    });
    return box;
  }

  /* ---------- Fortschrittsbalken ---------- */
  function balkenAktualisieren() {
    var e = F ? F.holen(S.id) : null;
    var hak = e && e.haken ? e.haken.length : 0;
    var ges = S.schritte.length;
    document.getElementById("f-zahl").textContent = hak;
    document.getElementById("f-gesamt").textContent = ges;
    document.getElementById("f-balken").style.width = ges ? (hak / ges * 100) + "%" : "0%";
  }

  /* ---------- Seite zusammensetzen ---------- */
  var ziel = document.getElementById("station");

  ziel.appendChild(navBauen());

  // Fortschritt
  var fort = el("div", "fortschritt");
  fort.innerHTML =
    '<span class="txt">Erledigt: <b id="f-zahl">0</b> von <b id="f-gesamt">0</b> Schritten</span>' +
    '<span class="balken"><span id="f-balken"></span></span>';
  ziel.appendChild(fort);

  // Erklaerung + Video
  var p1 = el("section", "panel");
  p1.appendChild(el("span", "sec-label", "Das lernst du hier"));
  p1.appendChild(el("h2", null, S.titel));
  var hint = el("p", "hint");
  hint.textContent = S.ziel;
  p1.appendChild(hint);

  if (S.erklaerung) {
    var erk = el("div");
    erk.innerHTML = S.erklaerung;
    p1.appendChild(erk);
  }
  (S.videos || []).forEach(function (v) { p1.appendChild(videoBauen(v)); });
  ziel.appendChild(p1);

  // Arbeitsschritte
  var p2 = el("section", "panel");
  p2.appendChild(el("span", "sec-label", "In Filius machen"));
  p2.appendChild(el("h2", null, "Deine Arbeitsschritte"));
  var h2 = el("p", "hint");
  h2.textContent = "Hake jeden Schritt ab, sobald du ihn erledigt hast. Dein Haken bleibt gespeichert.";
  p2.appendChild(h2);
  p2.appendChild(schritteBauen());

  if (S.speichern !== false) {
    var sp = el("div", "speichern");
    sp.innerHTML =
      "<h4>Zum Schluss speichern</h4>" +
      "<p>Speichere deine Filius-Datei nach dem Schema <b>JJMMTT-Aufg-Name</b>, " +
      "zum Beispiel <b>260918-" + (S.aufgabenNr || "01") + "-Anna</b>. " +
      "Trage den Namen hier ein, damit du ihn später wiederfindest.</p>" +
      '<div class="feld"><input type="text" id="datei-name" placeholder="260918-' +
      (S.aufgabenNr || "01") + '-DeinName" autocomplete="off">' +
      '<button class="btn btn-ghost" id="datei-merken">Merken</button></div>';
    p2.appendChild(sp);
  }
  ziel.appendChild(p2);

  // Kontrollfragen
  if (S.fragen && S.fragen.length) {
    var p3 = el("section", "panel");
    p3.appendChild(el("span", "sec-label", "Kontrollfragen"));
    p3.appendChild(el("h2", null, "Hast du es verstanden?"));
    var h3 = el("p", "hint");
    h3.textContent = "Klicke die richtige Antwort an. Du bekommst sofort eine Rückmeldung.";
    p3.appendChild(h3);
    p3.appendChild(fragenBauen());
    var res = el("div", "ergebnis");
    res.id = "quiz-ergebnis";
    res.setAttribute("role", "status");
    p3.appendChild(res);
    ziel.appendChild(p3);
  }

  // Weiter
  var w = el("nav", "weiter");
  w.setAttribute("aria-label", "Weiter im Workshop");
  if (S.zurueck) {
    var a1 = el("a", null, "← " + S.zurueck.text);
    a1.href = S.zurueck.datei;
    w.appendChild(a1);
  } else {
    w.appendChild(el("span"));
  }
  if (S.vor) {
    var a2 = el("a", "next", S.vor.text + " →");
    a2.href = S.vor.datei;
    w.appendChild(a2);
  }
  ziel.appendChild(w);

  // Dateiname merken
  var merken = document.getElementById("datei-merken");
  if (merken) {
    var feld = document.getElementById("datei-name");
    var vorhanden = F ? F.holen(S.id) : null;
    if (vorhanden && vorhanden.datei) feld.value = vorhanden.datei;
    merken.addEventListener("click", function () {
      if (F) F.datei(S.id, feld.value);
      merken.textContent = "Gemerkt ✓";
      setTimeout(function () { merken.textContent = "Merken"; }, 1600);
    });
  }

  balkenAktualisieren();
})();
