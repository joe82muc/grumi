/* GPG 8: Zusatzbausteine der Lernmodule. GPG ist ein Materialfach – die Module arbeiten mit Fotos, Plakaten,
 * Karikaturen, Karten, Quellen, Zeitleisten und Diagrammen. Grundlage sind die gemeinsamen Bausteine aus
 * ../../7M/NT/modul-basis.js (Modul.makeMC, makeGap, makeSort …) und ../NT/nt8.js (Hilfestufen, offene Fragen mit KI,
 * Duell, Film). Eingebunden nach themen.js, bilder/quellen.js, modul-basis.js und nt8.js.
 *
 *   GPG8M.start({ id, thema, glossary })   wie NT8M.start; füllt dazu alle Bilder der Seite
 *   GPG8M.fertig()                         wie NT8M.fertig; dazu die Bildnachweise des Moduls
 *   GPG8M.plus / hilfen / offen / duell / film   unverändert aus nt8.js (M8-Aufgaben: GPG8M.plus)
 *
 * Bilder (Angaben stehen in bilder/quellen.js, geschrieben vom Werkzeug bild.js – nie von Hand):
 *   <figure class="gbild" data-bild="kennung"></figure>     Bild mit Bildart, Unterschrift, Urheber, Lizenz, Quelle;
 *        Antippen vergrößert (Zoom, ganz zeigen, zurück). data-text="…" = eigene Unterschrift;
 *        data-verdeckt = Unterschrift und Quelle erst nach Antippen von „Bildinfo“ (wenn die Aufgabe lautet: Was siehst du?)
 *   <div class="hero" data-bild="kennung">                  Titelbild im Kopf des Moduls
 *   GPG8M.galerie(el, ["a", "b", "c"], { titel, id })       Bildergalerie; mit id zählt sie als Aufgabe (alle ansehen)
 *   GPG8M.bildpunkte(el, "kennung", [{ x, y, t, s }], id)   Einzelheiten im Bild entdecken (x, y in Prozent)
 *   GPG8M.karte(el, "kennung", [{ x, y, a }], { extra, id, hinweis })   stumme Karte: Begriffe den Nummern zuordnen
 *
 * Zeit und Zahlen:
 *   GPG8M.zeitleiste(el, [{ j, t, s, bild }], { titel, id })   Zeitleiste zum Antippen; mit id zählt sie als Aufgabe
 *   GPG8M.balken(el, { titel, einheit, werte: [[name, zahl, farbe]], quelle })      waagrechte Balken
 *   GPG8M.saeulen(el, { titel, einheit, werte: [[name, zahl, farbe]], quelle })     Säulen (z. B. Jahre)
 *   GPG8M.linie(el, { titel, einheit, x: [...], reihen: [{ n, w: [...], f }], quelle })
 *   GPG8M.klima(el, { ort, hoehe, t: [12 Werte °C], n: [12 Werte mm], quelle })     Klimadiagramm
 *
 * Textquellen: <blockquote class="gquelle"><span class="gq-art">QUELLE · Rede, 1933</span><p>…</p><footer>…</footer></blockquote>
 */
(function (global) {
  "use strict";
  var doc = global.document, M = global.Modul, K = global.NT8M;
  if (!M || !K) return;
  var $ = M.$, $$ = M.$$, esc = M.esc;
  var ORDNER = "bilder/", benutzt = [], fehlend = [];
  M.loeser = M.loeser || {};

  var ARTEN = {
    foto: "FOTO", hfoto: "HISTORISCHES FOTO", luftbild: "LUFTBILD", satellit: "SATELLITENBILD",
    plakat: "PLAKAT", wahlplakat: "WAHLPLAKAT", propaganda: "PROPAGANDA", karikatur: "KARIKATUR", flugblatt: "FLUGBLATT",
    zeitung: "ZEITUNG", dokument: "DOKUMENT", gegenstand: "GEGENSTAND", gemaelde: "GEMÄLDE", zeichnung: "ZEICHNUNG",
    karte: "KARTE", hkarte: "HISTORISCHE KARTE", schaubild: "SCHAUBILD",
    ki: "DIDAKTISCHE DARSTELLUNG – KEINE HISTORISCHE ORIGINALQUELLE"
  };
  function bilder() { return global.GPG8_BILDER || {}; }
  function bild(id) {
    var b = bilder()[id];
    if (!b && fehlend.indexOf(id) < 0) { fehlend.push(id); if (global.console) global.console.warn("GPG 8: Bild „" + id + "“ fehlt in bilder/quellen.js"); }
    if (b && benutzt.indexOf(id) < 0) benutzt.push(id);
    return b || null;
  }
  function marke(b) { return (ARTEN[b.art] || "BILD") + (b.j && b.art !== "ki" ? " · " + b.j : ""); }
  function link(text, adresse) { return adresse ? '<a href="' + esc(adresse) + '" target="_blank" rel="noopener">' + esc(text) + "</a>" : esc(text); }
  // Urheber · Archiv · Lizenz · Quelle – so, wie es die Lizenzen verlangen
  function nachweis(b) {
    var t = [];
    if (b.u) t.push(esc(b.u));
    if (b.a) t.push(esc(b.a));
    if (b.l) t.push(link(b.l, b.lu));
    if (b.q) t.push(link("Quelle", b.q));
    if (b.ver) t.push(esc(b.ver));
    return t.join(" · ");
  }
  function img(b, klasse) {
    return '<img' + (klasse ? ' class="' + klasse + '"' : "") + ' src="' + ORDNER + esc(b.d) + '" alt="' + esc(b.alt || b.t || "") + '"' +
      (b.w && b.h ? ' width="' + b.w + '" height="' + b.h + '"' : "") + ' loading="lazy" decoding="async">';
  }

  /* ---------- Bild mit Unterschrift, Nachweis und Vergrößerung ---------- */
  function fuelle(fig) {
    var id = fig.dataset.bild, b = bild(id);
    if (!b) { fig.hidden = true; return; }
    var text = fig.dataset.text || b.t || "", verdeckt = fig.hasAttribute("data-verdeckt");
    var unter = '<span class="gbild-text">' + esc(text) + '</span><small class="gbild-quelle">' + nachweis(b) + "</small>";
    fig.classList.add("gbild"); if (b.art === "ki") fig.classList.add("ki");
    fig.innerHTML = '<button type="button" class="gbild-knopf" data-zoom="' + esc(id) + '" aria-label="Bild vergrößern">' + img(b) +
      '<span class="gbild-lupe" aria-hidden="true">🔍 vergrößern</span></button><figcaption>' +
      (verdeckt ? '<details class="gbild-info"><summary>ℹ️ Bildinfo und Quelle zeigen</summary><span class="gbild-art">' + esc(marke(b)) + "</span>" + unter + "</details>"
        : '<span class="gbild-art">' + esc(marke(b)) + "</span>" + unter) + "</figcaption>";
  }
  function fuelleAlle(wurzel) {
    $$("figure[data-bild]", wurzel || doc).forEach(function (f) { if (!f.querySelector("img")) fuelle(f); });
    $$(".hero[data-bild]", wurzel || doc).forEach(function (h) {
      var b = bild(h.dataset.bild); if (!b || h.dataset.gefuellt) return;
      h.dataset.gefuellt = "1"; h.classList.add("hero-bild");
      h.style.backgroundImage = "linear-gradient(160deg,rgba(12,22,34,.86),rgba(12,22,34,.62) 55%,rgba(12,22,34,.38)),url(" + ORDNER + b.d + ")";
      var s = doc.createElement("small"); s.className = "hero-quelle"; s.innerHTML = "Titelbild: " + esc(b.t || "") + " – " + nachweis(b);
      ($(".wrap", h) || h).appendChild(s);
    });
  }

  /* ---------- Vergrößerung: Zoom, ganz zeigen, zurück ---------- */
  var gz = null, stufe = 0, STUFEN = [1, 1.8, 2.8, 4];
  function gzBau() {
    gz = doc.createElement("div"); gz.id = "gz"; gz.className = "gz"; gz.hidden = true;
    gz.setAttribute("role", "dialog"); gz.setAttribute("aria-modal", "true"); gz.setAttribute("aria-label", "Bild vergrößert");
    gz.innerHTML = '<div class="gz-leiste"><button type="button" data-gz="zu" class="gz-zu">← Zurück</button><span class="gz-titel"></span>' +
      '<button type="button" data-gz="-" aria-label="kleiner">−</button><button type="button" data-gz="+" aria-label="größer">+</button><button type="button" data-gz="0">Ganz zeigen</button></div>' +
      '<div class="gz-flaeche"><img alt=""></div><div class="gz-fuss"></div>';
    doc.body.appendChild(gz);
    var fl = $(".gz-flaeche", gz), bildEl = $("img", gz);
    gz.addEventListener("click", function (e) {
      var k = e.target.closest ? e.target.closest("[data-gz]") : null; if (!k) return;
      if (k.dataset.gz === "zu") gzZu(); else if (k.dataset.gz === "0") gzStufe(0); else gzStufe(stufe + (k.dataset.gz === "+" ? 1 : -1));
    });
    bildEl.addEventListener("dblclick", function (e) { gzStufe(stufe ? 0 : 2, e); });
    bildEl.addEventListener("load", function () { if (!gz.hidden) gzStufe(stufe); });
    global.addEventListener("resize", function () { if (gz && !gz.hidden) gzStufe(stufe); });
    // Mit der Maus ziehen (Finger verschieben von selbst)
    var zieh = null;
    fl.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse" && stufe) { zieh = { x: e.clientX, y: e.clientY, l: fl.scrollLeft, t: fl.scrollTop }; fl.classList.add("zieht"); e.preventDefault(); } });
    global.addEventListener("pointermove", function (e) { if (zieh) { fl.scrollLeft = zieh.l - (e.clientX - zieh.x); fl.scrollTop = zieh.t - (e.clientY - zieh.y); } });
    global.addEventListener("pointerup", function () { zieh = null; fl.classList.remove("zieht"); });
    doc.addEventListener("keydown", function (e) { if (e.key === "Escape" && gz && !gz.hidden) gzZu(); });
  }
  function gzStufe(n, e) {
    var fl = $(".gz-flaeche", gz), bildEl = $("img", gz);
    n = Math.max(0, Math.min(STUFEN.length - 1, n));
    var mx = 0.5, my = 0.5;
    if (stufe && fl.scrollWidth) { mx = (fl.scrollLeft + fl.clientWidth / 2) / fl.scrollWidth; my = (fl.scrollTop + fl.clientHeight / 2) / fl.scrollHeight; }
    if (e && bildEl.offsetWidth) { var r = bildEl.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width; my = (e.clientY - r.top) / r.height; }
    stufe = n; gz.classList.toggle("gross", n > 0);
    // „Ganz zeigen“ passt das Bild in Breite UND Höhe ein (auch hohe und quadratische Bilder); jede Stufe vergrößert von dort aus
    var nw = bildEl.naturalWidth, nh = bildEl.naturalHeight;
    if (!nw || !nh) { bildEl.style.width = ""; bildEl.style.height = ""; }
    else {
      var pass = Math.min(fl.clientWidth / nw, fl.clientHeight / nh);
      bildEl.style.width = Math.max(40, Math.floor(nw * pass * STUFEN[n])) + "px"; bildEl.style.height = "auto";
      if (n) { fl.scrollLeft = fl.scrollWidth * mx - fl.clientWidth / 2; fl.scrollTop = fl.scrollHeight * my - fl.clientHeight / 2; }
    }
    $('[data-gz="-"]', gz).disabled = n === 0; $('[data-gz="+"]', gz).disabled = n === STUFEN.length - 1;
  }
  function gzAuf(id) {
    var b = bilder()[id]; if (!b) return;
    if (!gz) gzBau();
    var bildEl = $("img", gz);
    bildEl.style.width = ""; bildEl.style.height = "";
    bildEl.src = ORDNER + b.d; bildEl.alt = b.alt || b.t || "";
    $(".gz-titel", gz).textContent = marke(b);
    $(".gz-fuss", gz).innerHTML = "<b>" + esc(b.t || "") + "</b> " + nachweis(b);
    gz.hidden = false; doc.body.classList.add("gz-offen"); gzStufe(0);
    $(".gz-zu", gz).focus();
  }
  function gzZu() { if (gz) { gz.hidden = true; doc.body.classList.remove("gz-offen"); } }
  doc.addEventListener("click", function (e) {
    var k = e.target.closest ? e.target.closest("[data-zoom]") : null;
    if (k) { e.preventDefault(); gzAuf(k.dataset.zoom); }
  });

  /* ---------- Bildergalerie ---------- */
  function galerie(el, ids, opt) {
    el = typeof el === "string" ? $(el) : el; opt = opt || {};
    ids = (ids || []).filter(function (id) { return bild(id); });
    if (!el || !ids.length) return;
    var id = opt.id, gesehen = {}, nr = 0;
    if (id) M.register(id, el, "Bildergalerie: " + (opt.titel || ""), "Galerie");
    el.classList.add("ggalerie");
    el.innerHTML = '<div class="gg-kopf"><b>' + esc(opt.titel || "Bildergalerie") + '</b><span class="gg-zahl"></span></div><figure class="gbild gg-gross"></figure>' +
      '<div class="gg-leiste">' + ids.map(function (i, k) { var b = bilder()[i]; return '<button type="button" class="gg-th" data-nr="' + k + '" aria-label="Bild ' + (k + 1) + '"><img src="' + ORDNER + esc(b.d) + '" alt="" loading="lazy"><i>' + (k + 1) + "</i></button>"; }).join("") + "</div>" +
      '<div class="row-btns gg-nav"><button type="button" class="btn small ghost" data-gg="-1">← Zurück</button><button type="button" class="btn small" data-gg="1">Nächstes Bild →</button></div>';
    var gross = $(".gg-gross", el);
    function zeige(n) {
      nr = (n + ids.length) % ids.length; gesehen[nr] = 1;
      gross.dataset.bild = ids[nr]; gross.innerHTML = ""; fuelle(gross);
      $$(".gg-th", el).forEach(function (t, k) { t.classList.toggle("sel", k === nr); t.classList.toggle("seen", !!gesehen[k]); });
      var n2 = Object.keys(gesehen).length;
      $(".gg-zahl", el).textContent = "Bild " + (nr + 1) + " von " + ids.length + (id && n2 < ids.length ? " · noch " + (ids.length - n2) + " ansehen" : "");
      if (id && n2 === ids.length) M.solve(id);
    }
    el.addEventListener("click", function (e) {
      var t = e.target.closest(".gg-th"), w = e.target.closest("[data-gg]");
      if (t) zeige(+t.dataset.nr); else if (w) zeige(nr + (+w.dataset.gg));
    });
    zeige(0);
    if (id) M.loeser[id] = function () { for (var k = 0; k < ids.length; k++) zeige(k); };
  }

  /* ---------- Einzelheiten im Bild entdecken ---------- */
  function bildpunkte(el, bildId, liste, id) {
    el = typeof el === "string" ? $(el) : el; var b = bild(bildId);
    if (!el || !b) return;
    el.classList.add("gpunkte");
    el.innerHTML = '<div class="hotimg gp-hot">' + img(b) + '</div><p class="hint gp-zahl">Tippe die Nummern im Bild an.</p><div class="gp-info"></div>' +
      '<small class="gbild-quelle"><span class="gbild-art">' + esc(marke(b)) + "</span> " + esc(b.t || "") + " – " + nachweis(b) + ' · <button type="button" class="gp-zoom" data-zoom="' + esc(bildId) + '">🔍 vergrößern</button></small>';
    M.makeHotspots($(".gp-hot", el), $(".gp-info", el), $(".gp-zahl", el), liste.map(function (p) { return { x: p.x, y: p.y, i: p.i || "🔎", t: p.t, s: esc(p.s || "") }; }), id);
    // In ernsten Modulen kein „🎉 … entdeckt!“: sachlich melden, dass alle Stellen angesehen sind
    var zahlEl = $(".gp-zahl", el);
    if (global.MutationObserver) new MutationObserver(function () {
      if (doc.body.classList.contains("ernst") && /^🎉/.test(zahlEl.textContent)) zahlEl.textContent = "Du hast alle " + liste.length + " Stellen angesehen.";
    }).observe(zahlEl, { childList: true, characterData: true, subtree: true });
    M.loeser[id] = function () { $$(".hs", el).forEach(function (h) { h.click(); }); };
  }

  /* ---------- Stumme Karte: Begriffe den Nummern zuordnen ---------- */
  function karte(el, bildId, punkte, opt) {
    el = typeof el === "string" ? $(el) : el; opt = opt || {}; var b = bild(bildId), id = opt.id;
    if (!el || !b || !id) return;
    M.register(id, el, "Karte: " + (opt.titel || b.t || ""), "Karte");
    el.classList.add("gkarte");
    var woerter = M.shuffle(punkte.map(function (p) { return p.a; }).concat(opt.extra || []));
    el.innerHTML = '<div class="gk-links"><div class="gk-bild">' + img(b) + punkte.map(function (p, i) { return '<button type="button" class="gk-nr" data-nr="' + i + '" style="left:' + p.x + "%;top:" + p.y + '%" aria-label="Nummer ' + (i + 1) + '">' + (i + 1) + "</button>"; }).join("") + "</div>" +
      '<small class="gbild-quelle">' + nachweis(b) + ' · <button type="button" class="gp-zoom" data-zoom="' + esc(bildId) + '">🔍 Karte vergrößern</button></small></div>' +
      '<div class="gk-rechts"><p class="hint">' + esc(opt.hinweis || "Tippe zuerst auf einen Begriff und dann auf die passende Nummer.") + '</p><div class="gk-vorrat"></div><ol class="gk-liste">' +
      punkte.map(function (p, i) { return '<li><button type="button" class="gk-feld" data-nr="' + i + '"><b>' + (i + 1) + '</b><span>?</span></button></li>'; }).join("") + "</ol>" +
      '<div class="row-btns"><button type="button" class="btn small check">Prüfen</button><button type="button" class="btn small ghost reset">Zurücksetzen</button></div><div class="fb"></div></div>';
    var vorrat = $(".gk-vorrat", el), fb = $(".fb", el), gewaehlt = null, belegt = {};
    var chips = woerter.map(function (w) { var c = doc.createElement("button"); c.type = "button"; c.className = "tok"; c.textContent = w; vorrat.appendChild(c); return c; });
    function feld(i) { return $('.gk-feld[data-nr="' + i + '"]', el); }
    function leere(i) {
      var c = belegt[i]; if (c) { c.hidden = false; delete belegt[i]; }
      var f = feld(i); $("span", f).textContent = "?"; f.classList.remove("voll", "right", "wrong");
      $('.gk-nr[data-nr="' + i + '"]', el).classList.remove("voll", "right", "wrong");
    }
    function setze(i, c) {
      if (belegt[i]) leere(i);
      belegt[i] = c; c.hidden = true; c.classList.remove("picked");
      var f = feld(i); $("span", f).textContent = c.textContent; f.classList.add("voll");
      $('.gk-nr[data-nr="' + i + '"]', el).classList.add("voll"); fb.className = "fb";
    }
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        if (gewaehlt) gewaehlt.classList.remove("picked");
        gewaehlt = gewaehlt === c ? null : c; if (gewaehlt) c.classList.add("picked");
        el.classList.toggle("waehlt", !!gewaehlt);
      });
    });
    el.addEventListener("click", function (e) {
      var z = e.target.closest(".gk-nr, .gk-feld"); if (!z) return;
      var i = +z.dataset.nr;
      if (gewaehlt) { setze(i, gewaehlt); gewaehlt = null; el.classList.remove("waehlt"); }
      else if (belegt[i]) leere(i);
      else { $$(".gk-feld", el).forEach(function (f) { f.classList.toggle("zeigt", +f.dataset.nr === i); }); $$(".gk-nr", el).forEach(function (n) { n.classList.toggle("zeigt", +n.dataset.nr === i); }); }
    });
    $(".check", el).addEventListener("click", function () {
      var ok = 0;
      punkte.forEach(function (p, i) {
        var r = !!belegt[i] && belegt[i].textContent === p.a; if (r) ok++;
        [feld(i), $('.gk-nr[data-nr="' + i + '"]', el)].forEach(function (x) { x.classList.toggle("right", r); x.classList.toggle("wrong", !!belegt[i] && !r); });
      });
      fb.className = "fb show " + (ok === punkte.length ? "ok" : "bad");
      fb.textContent = ok === punkte.length ? "✅ Alles richtig zugeordnet!" : ok + " von " + punkte.length + " richtig. Tippe ein rotes Feld an, um es zu leeren.";
      if (ok === punkte.length) M.solve(id);
    });
    $(".reset", el).addEventListener("click", function () { punkte.forEach(function (_p, i) { leere(i); }); fb.className = "fb"; });
    function loese() { punkte.forEach(function (p, i) { if (belegt[i] && belegt[i].textContent === p.a) return; if (belegt[i]) leere(i); var c = chips.filter(function (x) { return !x.hidden && x.textContent === p.a; })[0]; if (c) setze(i, c); }); }
    M.loeser[id] = function () { loese(); $(".check", el).click(); };
    if (M.isSolved(id)) { loese(); punkte.forEach(function (_p, i) { feld(i).classList.add("right"); $('.gk-nr[data-nr="' + i + '"]', el).classList.add("right"); }); }
  }

  /* ---------- Zeitleiste ---------- */
  function zeitleiste(el, liste, opt) {
    el = typeof el === "string" ? $(el) : el; opt = opt || {};
    if (!el || !liste || !liste.length) return;
    var id = opt.id, gesehen = {};
    if (id) M.register(id, el, "Zeitleiste: " + (opt.titel || ""), "Zeitleiste");
    el.classList.add("gzl");
    el.innerHTML = (opt.titel ? '<div class="gzl-titel"><b>' + esc(opt.titel) + '</b><span class="gzl-zahl"></span></div>' : '<div class="gzl-titel"><span class="gzl-zahl"></span></div>') +
      '<div class="gzl-band">' + liste.map(function (z, i) { return '<button type="button" class="gzl-punkt" data-nr="' + i + '"><b>' + esc(z.j) + "</b><span>" + esc(z.k || z.t) + "</span></button>"; }).join("") + '</div><div class="gzl-karte" aria-live="polite"></div>';
    var kartenEl = $(".gzl-karte", el);
    function zeige(i) {
      var z = liste[i]; gesehen[i] = 1;
      $$(".gzl-punkt", el).forEach(function (p, k) { p.classList.toggle("sel", k === i); p.classList.toggle("seen", !!gesehen[k]); });
      kartenEl.innerHTML = '<div class="gzl-text"><span class="gzl-jahr">' + esc(z.j) + "</span><h4>" + esc(z.t) + "</h4><p>" + esc(z.s || "") + "</p></div>" + (z.bild && bilder()[z.bild] ? '<figure class="gbild" data-bild="' + esc(z.bild) + '"></figure>' : "");
      kartenEl.classList.toggle("mit-bild", !!(z.bild && bilder()[z.bild]));
      fuelleAlle(kartenEl);
      var n = Object.keys(gesehen).length;
      $(".gzl-zahl", el).textContent = id && n < liste.length ? n + " von " + liste.length + " angesehen" : "";
      if (id && n === liste.length) M.solve(id);
    }
    el.addEventListener("click", function (e) { var p = e.target.closest(".gzl-punkt"); if (p) zeige(+p.dataset.nr); });
    zeige(0);
    if (id) M.loeser[id] = function () { for (var i = 0; i < liste.length; i++) zeige(i); };
  }

  /* ---------- Diagramme ---------- */
  var FARBEN = ["#0d77c2", "#e0803a", "#1b8a4b", "#8e55c7", "#c93b3b", "#b77a06", "#176b62", "#5f6770"];
  function zahl(n) { return String(Math.round(n * 10) / 10).replace(".", ","); }
  function obergrenze(max) { var p = Math.pow(10, Math.floor(Math.log(max || 1) / Math.LN10)), q = max / p; return (q <= 1 ? 1 : q <= 2 ? 2 : q <= 2.5 ? 2.5 : q <= 5 ? 5 : 10) * p; }
  // Achse mit glatten Schritten: höchstens sechs Abstände (5,6 -> 0 bis 6 in Einerschritten, 43,9 -> 0 bis 50 in Zehnern)
  function skala(max, fest) {
    max = fest || max || 1;
    var p = Math.pow(10, Math.floor(Math.log(max) / Math.LN10)), schritte = [0.1, 0.2, 0.25, 0.5, 1, 2, 2.5, 5, 10], i, s;
    for (i = 0; i < schritte.length; i++) { s = schritte[i] * p; if (Math.ceil(max / s - 1e-9) <= 6) break; }
    return { schritt: s, n: Math.max(1, Math.ceil(max / s - 1e-9)), max: Math.max(1, Math.ceil(max / s - 1e-9)) * s };
  }
  function rahmen(el, cfg, svg, kopf, zeilen) {
    el = typeof el === "string" ? $(el) : el; if (!el) return;
    el.classList.add("gdia");
    el.innerHTML = '<div class="gdia-titel"><span class="gbild-art">' + esc(cfg.art || "DIAGRAMM") + "</span><b>" + esc(cfg.titel || "") + "</b>" + (cfg.einheit ? "<small>" + esc(cfg.einheit) + "</small>" : "") + "</div>" + (cfg.legende || "") + svg +
      '<details class="gdia-tab"><summary>Werte als Tabelle</summary><table><tr>' + kopf.map(function (k) { return "<th>" + esc(k) + "</th>"; }).join("") + "</tr>" +
      zeilen.map(function (z) { return "<tr>" + z.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></details>" +
      (cfg.quelle ? '<small class="gbild-quelle">Zahlen: ' + esc(cfg.quelle) + "</small>" : "");
  }
  function balken(el, cfg) {
    var w = cfg.werte || [], max = cfg.max || obergrenze(Math.max.apply(null, w.map(function (x) { return x[1]; }))), h = 16 + w.length * 34;
    var laengste = Math.max.apply(null, w.map(function (x) { return String(x[0]).length; })), x0 = Math.min(230, Math.max(80, laengste * 8.4 + 22)), br = 560 - x0 - (cfg.kurz ? 96 : 70);
    var svg = '<svg viewBox="0 0 560 ' + h + '" role="img" aria-label="' + esc(cfg.titel || "Balkendiagramm") + '">' + w.map(function (x, i) {
      var y = 10 + i * 34, l = Math.max(2, br * x[1] / max);
      return '<text x="' + (x0 - 10) + '" y="' + (y + 18) + '" text-anchor="end" font-size="14" font-weight="700" fill="#15212b">' + esc(x[0]) + '</text><rect x="' + x0 + '" y="' + (y + 2) + '" width="' + l + '" height="22" rx="4" fill="' + (x[2] || FARBEN[i % FARBEN.length]) + '"/>' +
        '<text x="' + (x0 + l + 8) + '" y="' + (y + 18) + '" font-size="14" font-weight="800" fill="#15212b">' + zahl(x[1]) + (cfg.kurz ? " " + esc(cfg.kurz) : "") + "</text>";
    }).join("") + "</svg>";
    rahmen(el, cfg, svg, ["", cfg.einheit || "Wert"], w.map(function (x) { return [x[0], zahl(x[1])]; }));
  }
  function achsen(max, min, y0, y1, x0, x1, kurz, schritte) {
    var s = "", i, v, y;
    schritte = schritte || 5;
    for (i = 0; i <= schritte; i++) {
      v = min + (max - min) * i / schritte; y = y0 - (y0 - y1) * i / schritte;
      s += '<line x1="' + x0 + '" y1="' + y + '" x2="' + x1 + '" y2="' + y + '" stroke="' + (v === 0 ? "#566674" : "#d8e2ea") + '" stroke-width="1"/><text x="' + (x0 - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="12" fill="#566674">' + zahl(v) + (kurz || "") + "</text>";
    }
    return s;
  }
  function saeulen(el, cfg) {
    var w = cfg.werte || [], sk = skala(Math.max.apply(null, w.map(function (x) { return x[1]; })), cfg.max), max = sk.max, x0 = 52, x1 = 548, y0 = 236, y1 = 24, br = (x1 - x0) / w.length;
    var svg = '<svg viewBox="0 0 560 270" role="img" aria-label="' + esc(cfg.titel || "Säulendiagramm") + '">' + achsen(max, 0, y0, y1, x0, x1, "", sk.n) + w.map(function (x, i) {
      var h = Math.max(1, (y0 - y1) * x[1] / max), cx = x0 + br * (i + 0.5), b = Math.min(56, br * 0.66);
      return '<rect x="' + (cx - b / 2) + '" y="' + (y0 - h) + '" width="' + b + '" height="' + h + '" rx="3" fill="' + (x[2] || cfg.farbe || FARBEN[0]) + '"/><text x="' + cx + '" y="' + (y0 - h - 5) + '" text-anchor="middle" font-size="12" font-weight="800" fill="#15212b">' + zahl(x[1]) + '</text>' +
        '<text x="' + cx + '" y="' + (y0 + 17) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">' + esc(x[0]) + "</text>";
    }).join("") + "</svg>";
    rahmen(el, cfg, svg, ["", cfg.einheit || "Wert"], w.map(function (x) { return [x[0], zahl(x[1])]; }));
  }
  function linie(el, cfg) {
    var xs = cfg.x || [], R = cfg.reihen || [], alle = [].concat.apply([], R.map(function (r) { return r.w; })).filter(function (v) { return v !== null && v !== undefined; });
    var sk = skala(Math.max.apply(null, alle), cfg.max), max = sk.max, x0 = 52, x1 = 530, y0 = 236, y1 = 24, dx = xs.length > 1 ? (x1 - x0) / (xs.length - 1) : 0;
    var svg = '<svg viewBox="0 0 560 270" role="img" aria-label="' + esc(cfg.titel || "Liniendiagramm") + '">' + achsen(max, 0, y0, y1, x0, x1, "", sk.n) +
      xs.map(function (t, i) { return '<text x="' + (x0 + dx * i) + '" y="' + (y0 + 17) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">' + esc(t) + "</text>"; }).join("") +
      R.map(function (r, k) {
        var f = r.f || FARBEN[k % FARBEN.length], pkt = [];
        r.w.forEach(function (v, i) { if (v !== null && v !== undefined) pkt.push([x0 + dx * i, y0 - (y0 - y1) * v / max]); });
        return '<polyline points="' + pkt.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ") + '" fill="none" stroke="' + f + '" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>' +
          pkt.map(function (p) { return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4.5" fill="#fff" stroke="' + f + '" stroke-width="3"/>'; }).join("");
      }).join("") + "</svg>";
    cfg.legende = '<div class="gdia-leg">' + R.map(function (r, k) { return '<span><i style="background:' + (r.f || FARBEN[k % FARBEN.length]) + '"></i>' + esc(r.n) + "</span>"; }).join("") + "</div>";
    rahmen(el, cfg, svg, [""].concat(R.map(function (r) { return r.n; })), xs.map(function (t, i) { return [t].concat(R.map(function (r) { var v = r.w[i]; return v === null || v === undefined ? "–" : zahl(v); })); }));
  }
  // Klimadiagramm: Temperaturkurve (rot, links in °C) und Niederschlagssäulen (blau, rechts in mm); 10 °C entsprechen 20 mm
  function klima(el, cfg) {
    var t = cfg.t || [], n = cfg.n || [], MON = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], NAMEN = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    if (t.length !== 12 || n.length !== 12) return;
    var tMax = Math.max(30, Math.ceil(Math.max.apply(null, t) / 10) * 10, Math.ceil(Math.max.apply(null, n) / 20) * 10);
    var tMin = Math.min(0, Math.floor(Math.min.apply(null, t) / 10) * 10), x0 = 54, x1 = 506, y1 = 26, y0 = 286, br = (x1 - x0) / 12;
    function y(temp) { return y0 - (y0 - y1) * (temp - tMin) / (tMax - tMin); }
    var s = "", v;
    for (v = tMin; v <= tMax; v += 10) {
      s += '<line x1="' + x0 + '" y1="' + y(v) + '" x2="' + x1 + '" y2="' + y(v) + '" stroke="' + (v === 0 ? "#566674" : "#d8e2ea") + '"/><text x="' + (x0 - 6) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="12" font-weight="700" fill="#c0392b">' + v + "</text>" +
        (v >= 0 ? '<text x="' + (x1 + 6) + '" y="' + (y(v) + 4) + '" font-size="12" font-weight="700" fill="#0d6fb8">' + (v * 2) + "</text>" : "");
    }
    s += '<text x="' + (x0 - 6) + '" y="14" text-anchor="end" font-size="12" font-weight="800" fill="#c0392b">°C</text><text x="' + (x1 + 6) + '" y="14" font-size="12" font-weight="800" fill="#0d6fb8">mm</text>';
    s += n.map(function (mm, i) { var h = y(0) - y(mm / 2); return '<rect x="' + (x0 + br * i + 5) + '" y="' + (y(0) - h) + '" width="' + (br - 10) + '" height="' + Math.max(0, h) + '" fill="#4a9be0" opacity=".85"/>'; }).join("");
    s += '<polyline points="' + t.map(function (c, i) { return (x0 + br * (i + 0.5)).toFixed(1) + "," + y(c).toFixed(1); }).join(" ") + '" fill="none" stroke="#c0392b" stroke-width="3.5" stroke-linejoin="round"/>' +
      t.map(function (c, i) { return '<circle cx="' + (x0 + br * (i + 0.5)).toFixed(1) + '" cy="' + y(c).toFixed(1) + '" r="3.5" fill="#c0392b"/>'; }).join("");
    s += MON.map(function (m, i) { return '<text x="' + (x0 + br * (i + 0.5)) + '" y="' + (y0 + 17) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">' + m + "</text>"; }).join("");
    var mittel = t.reduce(function (a, b) { return a + b; }, 0) / 12, summe = n.reduce(function (a, b) { return a + b; }, 0);
    rahmen(el, { art: "KLIMADIAGRAMM", titel: cfg.ort + (cfg.hoehe !== undefined ? " (" + cfg.hoehe + " m)" : ""), einheit: "Jahresmittel " + zahl(mittel) + " °C · Jahresniederschlag " + Math.round(summe) + " mm", quelle: cfg.quelle,
      legende: '<div class="gdia-leg"><span><i style="background:#c0392b"></i>Temperatur in °C (links)</span><span><i style="background:#4a9be0"></i>Niederschlag in mm (rechts)</span></div>' },
      '<svg viewBox="0 0 560 312" role="img" aria-label="Klimadiagramm ' + esc(cfg.ort) + '">' + s + "</svg>", ["Monat", "°C", "mm"], NAMEN.map(function (m, i) { return [m, zahl(t[i]), String(n[i])]; }));
  }

  /* ---------- Start und Ende ---------- */
  // ernst: true (bei Verfolgung, Krieg, Völkermord) – kein Konfetti, kein Jubeltext; Rückmeldungen bleiben sachlich
  function start(cfg) { K.start(cfg); doc.body.classList.add("gpg8"); if (cfg && cfg.ernst) doc.body.classList.add("ernst"); fuelleAlle(doc); }
  function fertig() {
    fuelleAlle(doc);
    if (benutzt.length) {
      var ziel = $("#bildnachweise"), d = doc.createElement("details"); d.className = "card gnachweise";
      d.innerHTML = "<summary>📷 Bildnachweise zu diesem Modul (" + benutzt.length + ")</summary><ul>" + benutzt.map(function (id) { var b = bilder()[id]; return "<li><b>" + esc(b.t || id) + "</b>" + (b.j ? " (" + esc(b.j) + ")" : "") + " – " + nachweis(b) + "</li>"; }).join("") +
        '</ul><p class="hint">Alle Bilder sind für die Website verkleinert. Bilder mit einer CC-Lizenz dürfen unter derselben Lizenz und mit denselben Angaben weiterverwendet werden. <a href="bildnachweise.html">Alle Bildnachweise von GPG 8</a></p>';
      (ziel || $("main") || doc.body).appendChild(d);
    }
    K.fertig();
  }

  var api = { start: start, fertig: fertig, galerie: galerie, bildpunkte: bildpunkte, karte: karte, zeitleiste: zeitleiste, balken: balken, saeulen: saeulen, linie: linie, klima: klima,
    fuelle: fuelleAlle, zoom: gzAuf, nachweis: nachweis, marke: marke, fehlendeBilder: function () { return fehlend.slice(); }, benutzteBilder: function () { return benutzt.slice(); } };
  Object.keys(K).forEach(function (k) { if (!(k in api)) api[k] = K[k]; });
  global.GPG8M = api;
})(window);
