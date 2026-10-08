/* NT-LABOR (NT 8): virtuelle Versuche zu Elektrizität, Magnetismus und Elektromagnetismus – wiederverwendbar in
 * Lernmodulen, in der Probe-Vorbereitung, in Proben und (als stehendes Bild) in Korrektur und Ausdruck.
 *
 *   NTLabor.stromkreis(el, opts)     Stromkreis bauen: Anschluss antippen → zweiten Anschluss antippen → Kabel
 *   NTLabor.elektromagnet(el, opts)  Strom an/aus, Windungszahl, Stromstärke, Eisenkern – Büroklammern zeigen die Stärke
 *   NTLabor.induktion(el, opts)      Magnet in die Spule schieben, herausziehen, stillhalten; Tempo, Windungen, Magnet
 *   NTLabor.generator(el, opts)      Magnet dreht sich vor der Spule: Wechselspannung, Lampe, Frequenz
 *   NTLabor.trafo(el, opts)          Transformator: Windungszahlen, Wechsel- oder Gleichspannung, Eisenkern
 *
 * opts.modus  "frei" (Vorgabe): ausprobieren · "bau": Bauaufgabe, es zählt der Endzustand · "film": festgelegter Ablauf
 *             zum Ansehen (opts.schritte = [{ z: Zustand, t: Text, ms }]), beliebig oft abspielbar · "bild": stehendes Bild
 * opts.start  Anfangszustand, opts.fest = Angaben, die nicht verändert werden können (z. B. { kern: false })
 * Rückgabe:   { zustand(), setze(z), beschreibe(), entdeckt(), beiAenderung(fn), loese(), spiele() }
 *             entdeckt(): was das Kind im Versuch schon herausgefunden hat (für Forscheraufträge, siehe nt8.js)
 * NTLabor.statisch(el, art, zustand, opts)  Endzustand als Bild mit Beschreibung – für Lehrkraft, Rückgabe und Druck.
 *
 * Bedienung ohne Genauigkeit: große Knöpfe und Antippen statt Ziehen (Ziehen geht zusätzlich). Nichts hängt am
 * Darüberfahren mit der Maus. Die Rechenmodelle sind bewusst einfach und zeigen nur die Zusammenhänge des Lehrplans.
 */
(function (global) {
  "use strict";
  var doc = global.document, NR = 0;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var komma = function (n, d) { return Number(n).toFixed(d === undefined ? 1 : d).replace(".", ","); };
  var ruhig = function () { try { return global.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (_e) { return false; } };

  // Grundgerüst: Zeichnung, Bedienleiste, Meldezeile; Zustand mit Sperren (fest), Hörer und Film-Modus
  function gestell(el, vb, opts, start) {
    if (typeof el === "string") el = doc.querySelector(el);
    var o = opts || {}, modus = o.modus || "frei", bild = modus === "bild";
    el.classList.add("lab"); el.setAttribute("data-labor", o.art || "");
    el.innerHTML = '<svg viewBox="0 0 ' + vb[0] + " " + vb[1] + '" role="img" aria-label="' + esc(o.alt || "Versuch im NT-Labor") + '"></svg>' +
      (bild || modus === "film" ? "" : '<div class="lab-ctrl"></div>') + (modus === "film" ? '<div class="lab-ctrl lab-film"><button type="button" data-film="start">▶ Start</button><button type="button" data-film="neu">↺ Nochmal</button></div>' : "") +
      '<p class="lab-mess" aria-live="polite"></p>';
    var g = { el: el, svg: el.querySelector("svg"), ctrl: el.querySelector(".lab-ctrl:not(.lab-film)"), mess: el.querySelector(".lab-mess"), o: o, modus: modus, bild: bild,
      z: Object.assign({}, start, o.start || {}, o.fest || {}), hoerer: [], gefunden: {} };
    g.q = function (s) { return el.querySelector(s); };
    g.qq = function (s) { return Array.prototype.slice.call(el.querySelectorAll(s)); };
    g.fest = function (k) { return !!(o.fest && k in o.fest) || bild || modus === "film"; };
    g.melde = function () { g.hoerer.forEach(function (f) { try { f(g.z); } catch (e) { global.console && console.error(e); } }); };
    g.finde = function (k) { if (!g.gefunden[k]) { g.gefunden[k] = true; } };
    // Knopfgruppe: name = Schlüssel im Zustand, werte = [[Wert, Beschriftung], …]
    g.gruppe = function (titel, name, werte) {
      if (!g.ctrl || g.fest(name)) return;
      var d = doc.createElement("div"); d.className = "gruppe";
      d.innerHTML = "<span>" + esc(titel) + "</span>" + werte.map(function (w) { return '<button type="button" data-k="' + name + '" data-w="' + esc(JSON.stringify(w[0])) + '">' + esc(w[1]) + "</button>"; }).join("");
      g.ctrl.appendChild(d);
      Array.prototype.forEach.call(d.querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () { var neu = {}; neu[name] = JSON.parse(b.getAttribute("data-w")); g.aendere(neu, name); });
      });
    };
    g.knoepfe = function () {
      g.qq(".lab-ctrl button[data-k]").forEach(function (b) { b.classList.toggle("sel", JSON.stringify(g.z[b.getAttribute("data-k")]) === b.getAttribute("data-w")); });
    };
    return g;
  }
  // gemeinsame Schnittstelle nach außen
  function nachAussen(g, extra) {
    var api = {
      zustand: function () { return Object.assign({}, g.z); },
      setze: function (z) { Object.assign(g.z, z || {}); g.zeichne(); g.melde(); },
      beschreibe: function () { return g.text ? g.text() : ""; },
      entdeckt: function () { return Object.assign({}, g.gefunden); },
      beiAenderung: function (f) { g.hoerer.push(f); },
      loese: function () {}, spiele: function () {}
    };
    // Film: festgelegte Zustände nacheinander zeigen (beliebig oft)
    if (g.modus === "film") {
      var S = g.o.schritte || [], timer = null, anfang = Object.assign({}, g.z);
      var lauf = function (i) {
        clearTimeout(timer);
        if (i >= S.length) { g.q('[data-film="start"]').disabled = false; return; }
        if (S[i].tu && g.tu) g.tu(S[i].tu); else { Object.assign(g.z, S[i].z || {}); g.zeichne(); }
        if (S[i].t) g.mess.innerHTML = S[i].t;
        timer = setTimeout(function () { lauf(i + 1); }, ruhig() ? 900 : S[i].ms || 2200);
      };
      api.spiele = function () { g.q('[data-film="start"]').disabled = true; lauf(0); };
      g.q('[data-film="start"]').addEventListener("click", api.spiele);
      g.q('[data-film="neu"]').addEventListener("click", function () { clearTimeout(timer); if (g.halt) g.halt(); g.z = Object.assign({}, anfang); g.zeichne(); g.mess.innerHTML = g.o.filmStart || "Tippe auf „Start“. Du kannst die Animation so oft ansehen, wie du willst."; g.q('[data-film="start"]').disabled = false; });
      g.mess.innerHTML = g.o.filmStart || "Tippe auf „Start“. Du kannst die Animation so oft ansehen, wie du willst.";
    }
    return Object.assign(api, extra || {});
  }

  /* ================= Elektromagnet ================= */
  function elektromagnet(el, opts) {
    var g = gestell(el, [640, 300], Object.assign({ art: "elektromagnet", alt: "Elektromagnet aus Batterie, Schalter, Spule und Eisenkern mit Büroklammern" }, opts), { an: false, n: 50, i: 1, kern: false });
    var N = (opts && opts.windungen) || [50, 100, 200, 400], I = (opts && opts.stroeme) || [1, 2, 3];
    var staerke = function (z) { return z.an ? z.n * z.i * (z.kern ? 5 : 1) / 50 : 0; };
    var klammern = function (z) { return !z.an ? 0 : z.kern ? clamp(Math.round(z.n * z.i / 100), 1, 12) : Math.floor(z.n * z.i / 400); };
    var bogen = { 50: 6, 100: 10, 200: 16, 400: 24 };
    g.zeichne = function () {
      var z = g.z, s = staerke(z), k = klammern(z), w = bogen[z.n] || clamp(Math.round(z.n / 16), 5, 26), h = "";
      var linien = z.an ? clamp(Math.round(Math.log(s + 1) / Math.log(2)), 1, 6) : 0, farbe = z.an ? "#e0453a" : "#5f6770";
      // Feldlinien (je stärker, desto mehr)
      for (var a = 0; a < linien; a++) h += '<ellipse cx="350" cy="146" rx="' + (150 + a * 20) + '" ry="' + (58 + a * 15) + '" fill="none" stroke="#2f6fdb" stroke-width="1.6" stroke-dasharray="7 5" opacity="' + komma(.75 - a * .09, 2).replace(",", ".") + '"/>';
      // Tisch und lose Büroklammern
      h += '<line x1="0" y1="282" x2="640" y2="282" stroke="#b9cbd8" stroke-width="3"/>';
      for (var b = 0; b < 12 - k; b++) h += klammer(500 + (b % 6) * 20, 270 - Math.floor(b / 6) * 9, (b * 37) % 50 - 25);
      // Batterie, Schalter, Leitungen
      h += '<rect x="34" y="196" width="84" height="46" rx="8" fill="#f2b632" stroke="#8a5a00" stroke-width="2"/><text x="76" y="224" text-anchor="middle" font-size="13" font-weight="700" fill="#5a3b00">Batterie</text>' +
        '<text x="62" y="190" font-size="15" font-weight="800" fill="#c0392b">+</text><text x="110" y="260" font-size="15" font-weight="800" fill="#2f6fdb">−</text>' +
        '<path d="M52 196 V70 H150" fill="none" stroke="' + farbe + '" stroke-width="4"/>' +
        '<circle cx="150" cy="70" r="6" fill="#15212b"/><circle cx="200" cy="70" r="6" fill="#15212b"/>' +
        '<line x1="150" y1="70" x2="' + (z.an ? 200 : 194) + '" y2="' + (z.an ? 70 : 44) + '" stroke="#15212b" stroke-width="5" stroke-linecap="round"/>' +
        '<text x="175" y="' + (z.an ? 56 : 34) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">Schalter ' + (z.an ? "zu" : "offen") + "</text>" +
        '<path d="M200 70 H256 V118" fill="none" stroke="' + farbe + '" stroke-width="4"/><path d="M444 174 V258 H100 V242" fill="none" stroke="' + farbe + '" stroke-width="4"/>';
      // Kern und Spule
      h += z.kern ? '<rect x="226" y="132" width="252" height="28" rx="5" fill="#8795a1" stroke="#4a5a67" stroke-width="2"/><text x="352" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="#4a5a67">Eisenkern</text>'
        : '<rect x="226" y="132" width="252" height="28" rx="5" fill="none" stroke="#9aa9b5" stroke-width="1.5" stroke-dasharray="5 4"/><text x="352" y="205" text-anchor="middle" font-size="12" font-weight="700" fill="#6c7c89">ohne Kern (nur Luft)</text>';
      for (var c = 0; c < w; c++) { var x = 256 + c * (188 / (w - 1)); h += '<ellipse cx="' + komma(x, 1).replace(",", ".") + '" cy="146" rx="5" ry="28" fill="none" stroke="#b9722a" stroke-width="' + (w > 16 ? 2.4 : 3.4) + '"/>'; }
      h += '<text x="350" y="104" text-anchor="middle" font-size="13" font-weight="700" fill="#7a4a14">Spule: ' + z.n + " Windungen · " + z.i + " A</text>";
      // hängende Büroklammern an der Spitze
      for (var d = 0; d < k; d++) h += klammer(482 + (d % 3) * 13 + (z.kern ? 0 : -8), 150 + Math.floor(d / 3) * 17 + (d % 3 === 1 ? 6 : 0), 80 + (d % 3) * 8);
      if (z.an) h += '<text x="244" y="128" font-size="13" font-weight="800" fill="#2f6fdb">S</text><text x="456" y="128" font-size="13" font-weight="800" fill="#c0392b">N</text>';
      g.svg.innerHTML = h;
      g.knoepfe();
      var sw = g.q('[data-k="an"]'); if (sw) { g.qq('[data-k="an"]').forEach(function (b) { b.classList.remove("sel"); b.classList.toggle("an", JSON.stringify(z.an) === b.getAttribute("data-w") && z.an); b.classList.toggle("sel", JSON.stringify(z.an) === b.getAttribute("data-w") && !z.an); }); }
      if (g.modus !== "film") g.mess.innerHTML = g.text();
    };
    function klammer(x, y, dreh) { return '<g transform="translate(' + x + " " + y + ") rotate(" + dreh + ')"><rect x="-9" y="-3.5" width="18" height="7" rx="3.5" fill="none" stroke="#56677a" stroke-width="1.8"/><line x1="-5" y1="0" x2="6" y2="0" stroke="#56677a" stroke-width="1.6"/></g>'; }
    g.text = function () {
      var z = g.z, k = klammern(z);
      if (!z.an) return "Der Schalter ist offen: Es fließt kein Strom – kein Magnetfeld, keine Büroklammer hängt.";
      return "Strom an · " + z.n + " Windungen · " + z.i + " A · " + (z.kern ? "mit Eisenkern" : "ohne Eisenkern") + ": Der Elektromagnet hält <b>" + k + (k === 1 ? " Büroklammer" : " Büroklammern") + "</b>." + (k === 0 ? " Das Magnetfeld ist noch zu schwach." : "");
    };
    g.aendere = function (neu, name) {
      var vor = klammern(g.z), warAn = g.z.an;
      Object.assign(g.z, neu);
      var nach = klammern(g.z);
      if (name === "an") { if (g.z.an) g.finde("an"); else if (warAn && vor > 0) g.finde("aus"); }
      else if (g.z.an && warAn && nach !== vor) g.finde(name === "n" ? "windungen" : name === "i" ? "strom" : "kern");
      g.zeichne(); g.melde();
    };
    g.gruppe("Strom", "an", [[true, "AN"], [false, "AUS"]]);
    g.gruppe("Windungen", "n", N.map(function (n) { return [n, String(n)]; }));
    g.gruppe("Stromstärke", "i", I.map(function (i) { return [i, i + " A"]; }));
    g.gruppe("Eisenkern", "kern", [[true, "mit"], [false, "ohne"]]);
    g.zeichne();
    return nachAussen(g, {
      zustand: function () { return Object.assign({}, g.z, { klammern: klammern(g.z) }); },
      loese: function () { [{ an: true }, { n: N[N.length - 1] }, { i: I[I.length - 1] }, { kern: true }, { an: false }, { an: true }].forEach(function (s) { var k = Object.keys(s)[0]; if (!g.fest(k)) g.aendere(s, k); }); }
    });
  }

  /* ================= Induktion ================= */
  function induktion(el, opts) {
    var g = gestell(el, [640, 280], Object.assign({ art: "induktion", alt: "Stabmagnet vor einer Spule, die mit einem Spannungsmesser verbunden ist" }, opts), { pos: 40, n: 600, stark: false, tempo: "langsam", pol: 1 });
    var AUSSEN = 40, INNEN = 250, V = { langsam: 70, schnell: 210 }, striche = { 300: 8, 600: 14, 1200: 22 };
    var lauf = { v: 0, u: 0, winkel: 0, max: 0, raf: 0, zuletzt: 0, ruheSeit: 0, zieht: null };
    var spannung = function (v) { var spitze = g.z.pos + 150, nah = clamp((spitze - 255) / 65, 0, 1); return v / 70 * (g.z.n / 100) * (g.z.stark ? 2 : 1) * g.z.pol * nah; };
    function rahmen() {
      g.svg.innerHTML = '<rect x="330" y="104" width="140" height="92" rx="10" fill="#fff4dc" stroke="#b9722a" stroke-width="3"/><rect x="330" y="128" width="140" height="44" fill="#f7fbfe" stroke="#b9722a" stroke-width="1.5"/><g data-r="striche"></g>' +
        '<text x="400" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#7a4a14" data-r="ntext"></text>' +
        '<path d="M350 104 V52 H500" fill="none" stroke="#5f6770" stroke-width="3"/><path d="M450 104 V84 H520 V96" fill="none" stroke="#5f6770" stroke-width="3"/>' +
        '<circle cx="548" cy="66" r="50" fill="#fff" stroke="#15212b" stroke-width="3"/><path d="M510 66 A38 38 0 0 1 586 66" fill="none" stroke="#9aa9b5" stroke-width="2"/>' +
        '<text x="548" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="#15212b">0</text><text x="514" y="60" text-anchor="middle" font-size="12" font-weight="800" fill="#2f6fdb">−</text><text x="582" y="60" text-anchor="middle" font-size="12" font-weight="800" fill="#c0392b">+</text>' +
        '<line data-r="zeiger" x1="548" y1="84" x2="548" y2="34" stroke="#c0392b" stroke-width="3.5" stroke-linecap="round"/><circle cx="548" cy="84" r="5" fill="#15212b"/>' +
        '<text x="548" y="134" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">Spannungsmesser</text><text x="548" y="152" text-anchor="middle" font-size="13" font-weight="800" fill="#095a93" data-r="wert"></text>' +
        '<g data-r="magnet" style="cursor:grab"><rect data-r="links" x="0" y="132" width="75" height="36" rx="4"/><rect data-r="rechts" x="75" y="132" width="75" height="36" rx="4"/>' +
        '<text data-r="tl" x="37" y="156" text-anchor="middle" font-size="17" font-weight="800" fill="#fff"></text><text data-r="tr" x="112" y="156" text-anchor="middle" font-size="17" font-weight="800" fill="#fff"></text>' +
        '<rect x="-12" y="118" width="174" height="64" fill="transparent"/></g>' +
        '<text x="115" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="#566674" data-r="mtext"></text>';
    }
    var r = function (n) { return g.svg.querySelector('[data-r="' + n + '"]'); };
    g.zeichne = function () {
      var z = g.z, n = striche[z.n] || clamp(Math.round(z.n / 55), 6, 24), s = "";
      for (var i = 0; i < n; i++) { var x = 340 + i * (120 / (n - 1)); s += '<line x1="' + x.toFixed(1) + '" y1="106" x2="' + x.toFixed(1) + '" y2="194" stroke="#b9722a" stroke-width="' + (n > 16 ? 2 : 3) + '"/>'; }
      r("striche").innerHTML = s; r("striche").setAttribute("opacity", ".55");
      r("ntext").textContent = "Spule: " + z.n + " Windungen";
      r("magnet").setAttribute("transform", "translate(" + z.pos.toFixed(1) + " 0)");
      r("links").setAttribute("fill", z.pol > 0 ? "#1b8a4b" : "#c0392b"); r("rechts").setAttribute("fill", z.pol > 0 ? "#c0392b" : "#1b8a4b");
      r("tl").textContent = z.pol > 0 ? "S" : "N"; r("tr").textContent = z.pol > 0 ? "N" : "S";
      r("mtext").textContent = z.stark ? "starker Magnet" : "Stabmagnet";
      r("zeiger").setAttribute("transform", "rotate(" + lauf.winkel.toFixed(1) + " 548 84)");
      r("wert").textContent = Math.abs(lauf.u) < .3 ? "0" : (lauf.u > 0 ? "+" : "−") + komma(Math.abs(lauf.u), 0);
      g.knoepfe();
    };
    function schritt(t) {
      // dt bis 0,15 s: Auch auf langsamen Geräten (wenige Bilder je Sekunde) dauert die Bewegung gleich lang
      var dt = Math.min(.15, (t - (lauf.zuletzt || t)) / 1000); lauf.zuletzt = t;
      if (lauf.v && !lauf.zieht) {
        var neu = clamp(g.z.pos + lauf.v * dt, AUSSEN, INNEN);
        g.z.pos = neu;
        if ((lauf.v > 0 && neu >= INNEN) || (lauf.v < 0 && neu <= AUSSEN)) { lauf.v = 0; lauf.ruheSeit = t; ende(); }   // am Anschlag: Der Magnet ruht
      }
      // Beim Ziehen zählt das Tempo des Fingers; hält er still, geht der Zeiger zurück auf 0
      if (lauf.zieht) { lauf.u = lauf.zieht.u; lauf.zieht.u *= .86; lauf.zieht.v *= .86; }
      else lauf.u = spannung(lauf.v);
      merke(t);
      var ziel = clamp(lauf.u / 40, -1, 1) * 58;
      lauf.winkel += (ziel - lauf.winkel) * Math.min(1, dt * 14);
      g.zeichne();
      if (lauf.v || lauf.zieht || Math.abs(lauf.winkel) > .4) lauf.raf = global.requestAnimationFrame(schritt); else { lauf.raf = 0; lauf.winkel = 0; g.zeichne(); }
    }
    function merke(t) {
      var a = Math.abs(lauf.u);
      if (a > .8) { lauf.max = Math.max(lauf.max, a); g.finde("bewegt"); g.finde(lauf.u * g.z.pol > 0 ? "hinein" : "heraus"); lauf.ruheSeit = 0;
        var tempo = lauf.zieht ? (Math.abs(lauf.zieht.v) > 150 ? "schnell" : "langsam") : g.z.tempo;
        g.finde("tempo-" + tempo); g.finde("n-" + g.z.n); if (g.z.stark) g.finde("stark"); }
      if (g.gefunden.hinein && g.gefunden.heraus) g.finde("richtung");
      if (g.gefunden["tempo-langsam"] && g.gefunden["tempo-schnell"]) g.finde("tempo");
      if (Object.keys(g.gefunden).filter(function (k) { return /^n-/.test(k); }).length > 1) g.finde("windungen");
    }
    function ende() {
      if (g.modus !== "film") g.mess.innerHTML = g.text();
      g.melde();
      // Ruht der Magnet eine knappe Sekunde in der Spule, ist „in Ruhe entsteht keine Spannung“ beobachtet
      if (g.gefunden.bewegt && g.z.pos > 200) setTimeout(function () { if (!lauf.v && !lauf.zieht && g.z.pos > 200 && !g.gefunden.ruhe) { g.finde("ruhe"); g.melde(); } }, 900);
    }
    function los(v) { lauf.v = v; lauf.max = 0; lauf.zuletzt = 0; if (!lauf.raf) lauf.raf = global.requestAnimationFrame(schritt); if (g.modus !== "film") g.mess.innerHTML = "Der Magnet bewegt sich " + (v * 1 > 0 ? "in die Spule hinein" : "aus der Spule heraus") + " …"; }
    g.halt = function () { lauf.v = 0; lauf.u = 0; lauf.winkel = 0; global.cancelAnimationFrame(lauf.raf); lauf.raf = 0; };
    g.tu = function (was) {
      if (was === "rein") { if (g.z.pos >= INNEN) g.z.pos = AUSSEN; los(V[g.z.tempo]); }
      else if (was === "raus") { if (g.z.pos <= AUSSEN) g.z.pos = INNEN; los(-V[g.z.tempo]); }
      else if (was === "halt") { lauf.v = 0; lauf.max = 0; if (!lauf.raf) lauf.raf = global.requestAnimationFrame(schritt); ende(); }
      else if (was === "umdrehen") { g.z.pol = -g.z.pol; g.zeichne(); }
      else if (was && typeof was === "object") { Object.assign(g.z, was); g.zeichne(); }
    };
    g.text = function () {
      var z = g.z;
      if (lauf.max > .8) return "Bewegung " + z.tempo + " · " + z.n + " Windungen" + (z.stark ? " · starker Magnet" : "") + ": größter Ausschlag <b>" + komma(lauf.max, 0) + " Skalenteile</b>. Jetzt ruht der Magnet – der Zeiger steht auf 0.";
      return z.pos > 200 ? "Der Magnet ruht in der Spule: Der Zeiger steht auf 0 – es entsteht keine Spannung." : "Der Magnet ruht vor der Spule: Der Zeiger steht auf 0.";
    };
    g.aendere = function (neu) { Object.assign(g.z, neu); g.zeichne(); g.melde(); };
    rahmen();
    if (g.ctrl) {
      var d = doc.createElement("div"); d.className = "gruppe";
      d.innerHTML = "<span>Magnet</span><button type=\"button\" data-tu=\"rein\">→ hineinschieben</button><button type=\"button\" data-tu=\"raus\">← herausziehen</button><button type=\"button\" data-tu=\"halt\">⏸ stillhalten</button>" +
        (g.fest("pol") ? "" : '<button type="button" data-tu="umdrehen">⇄ umdrehen</button>');
      g.ctrl.appendChild(d);
      Array.prototype.forEach.call(d.querySelectorAll("button"), function (b) { b.addEventListener("click", function () { g.tu(b.getAttribute("data-tu")); }); });
      g.gruppe("Tempo", "tempo", [["langsam", "langsam"], ["schnell", "schnell"]]);
      g.gruppe("Windungen", "n", [[300, "300"], [600, "600"], [1200, "1200"]]);
      if (!g.o.ohneStark) g.gruppe("Magnet", "stark", [[false, "normal"], [true, "stark"]]);
      // Ziehen mit Finger oder Maus (zusätzlich zu den Knöpfen)
      var m = r("magnet"), start = null;
      m.addEventListener("pointerdown", function (e) { start = { x: e.clientX, pos: g.z.pos, t: e.timeStamp, lx: e.clientX }; lauf.zieht = { v: 0, u: 0 }; lauf.v = 0; lauf.max = 0; try { m.setPointerCapture(e.pointerId); } catch (_e) {} if (!lauf.raf) lauf.raf = global.requestAnimationFrame(schritt); });
      m.addEventListener("pointermove", function (e) {
        if (!start) return;
        var f = 640 / g.svg.getBoundingClientRect().width, dt = Math.max(8, e.timeStamp - start.t) / 1000, alt = g.z.pos;
        g.z.pos = clamp(start.pos + (e.clientX - start.x) * f, AUSSEN, INNEN);
        var v = clamp((g.z.pos - alt) / dt, -400, 400); start.t = e.timeStamp;
        lauf.zieht = { v: v, u: spannung(v) };
      });
      var losgelassen = function () { if (!start) return; start = null; lauf.zieht = null; lauf.u = 0; ende(); };
      m.addEventListener("pointerup", losgelassen); m.addEventListener("pointercancel", losgelassen);
    }
    g.zeichne();
    if (g.modus !== "film") g.mess.innerHTML = "Schiebe den Magneten in die Spule – mit den Knöpfen oder mit dem Finger. Beobachte den Zeiger.";
    return nachAussen(g, {
      zustand: function () { return { pos: Math.round(g.z.pos), n: g.z.n, stark: g.z.stark, tempo: g.z.tempo, pol: g.z.pol, max: Math.round(lauf.max) }; },
      // für den Modul-Prüfer: alles einmal „erlebt“ (ohne die Animation abzuwarten)
      loese: function () { ["bewegt", "hinein", "heraus", "richtung", "ruhe", "tempo-langsam", "tempo-schnell", "tempo", "n-300", "n-600", "n-1200", "windungen", "stark"].forEach(g.finde); g.melde(); }
    });
  }

  /* ================= Stromkreis bauen ================= */
  function stromkreis(el, opts) {
    var o = opts || {}, teile = o.teile || ["batterie", "schalter", "lampe"];
    var g = gestell(el, [640, 340], Object.assign({ art: "stromkreis", alt: "Baukasten: Batterie, Schalter und Lampe mit Anschlüssen für Kabel" }, opts), { kabel: [], zu: false });
    var ORT = { batterie: { x: 320, y: 280, a: ["b+", "b-"], name: "Batterie" }, schalter: { x: 150, y: 80, a: ["s1", "s2"], name: "Schalter" }, lampe: { x: 490, y: 80, a: ["l1", "l2"], name: "Lampe" },
      lampe2: { x: 320, y: 150, a: ["m1", "m2"], name: "Lampe 2" }, motor: { x: 320, y: 150, a: ["m1", "m2"], name: "Motor" } };
    var P = {}, gewaehlt = null, hilfe = 0;
    teile.forEach(function (t) { var T = ORT[t]; P[T.a[0]] = { x: T.x - 56, y: T.y }; P[T.a[1]] = { x: T.x + 56, y: T.y }; });
    var hat = function (t) { return teile.indexOf(t) >= 0; };
    var kante = function (a, b) { return a < b ? a + "~" + b : b + "~" + a; };
    // Auswertung: Kabel und geschlossener Schalter verbinden ohne Widerstand; Lampe und Motor sind Verbraucher
    function auswertung() {
      var z = g.z, eltern = {};
      var find = function (x) { while (eltern[x] !== x) { eltern[x] = eltern[eltern[x]]; x = eltern[x]; } return x; };
      Object.keys(P).forEach(function (p) { eltern[p] = p; });
      var verb = function (a, b) { eltern[find(a)] = find(b); };
      z.kabel.forEach(function (k) { var e = k.split("~"); if (P[e[0]] && P[e[1]]) verb(e[0], e[1]); });
      if (hat("schalter") && z.zu) verb("s1", "s2");
      var plus = find("b+"), minus = find("b-"), kurz = plus === minus;
      var verbraucher = [["lampe", "l1", "l2"], ["lampe2", "m1", "m2"], ["motor", "m1", "m2"]].filter(function (v) { return hat(v[0]); }).map(function (v) { return { name: v[0], u: find(v[1]), v: find(v[2]) }; });
      var erreicht = function (von, nach, ohne) {
        var offen = [von], gesehen = {}; gesehen[von] = 1;
        while (offen.length) { var x = offen.pop(); if (x === nach) return true;
          verbraucher.forEach(function (c) { if (c === ohne) return; var y = c.u === x ? c.v : c.v === x ? c.u : null; if (y !== null && !gesehen[y]) { gesehen[y] = 1; offen.push(y); } }); }
        return false;
      };
      var aus = { kurz: kurz, aktiv: {} };
      verbraucher.forEach(function (c) { aus.aktiv[c.name] = !kurz && c.u !== c.v && ((erreicht(plus, c.u, c) && erreicht(c.v, minus, c)) || (erreicht(plus, c.v, c) && erreicht(c.u, minus, c))); });
      aus.geschlossen = !kurz && Object.keys(aus.aktiv).some(function (k) { return aus.aktiv[k]; });
      return aus;
    }
    function offeneAnschluesse() { var benutzt = {}; g.z.kabel.forEach(function (k) { k.split("~").forEach(function (p) { benutzt[p] = 1; }); }); return Object.keys(P).filter(function (p) { return !benutzt[p]; }); }
    g.zeichne = function () {
      var z = g.z, A = auswertung(), h = "", offen = hilfe >= 3 && !A.geschlossen ? offeneAnschluesse() : [];
      z.kabel.forEach(function (k) {
        var e = k.split("~"), a = P[e[0]], b = P[e[1]]; if (!a || !b) return;
        var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 + (Math.abs(a.y - b.y) < 20 ? -38 : 0);
        h += '<path class="kabel" data-kabel="' + k + '" d="M' + a.x + " " + a.y + " Q" + mx + " " + my + " " + b.x + " " + b.y + '" fill="none" stroke="' + (A.kurz ? "#e0453a" : A.geschlossen ? "#e08a1e" : "#5f6770") + '" stroke-width="5" stroke-linecap="round" style="cursor:pointer"/>' +
          '<path data-kabel="' + k + '" d="M' + a.x + " " + a.y + " Q" + mx + " " + my + " " + b.x + " " + b.y + '" fill="none" stroke="transparent" stroke-width="26" style="cursor:pointer"/>';
      });
      if (hat("batterie")) h += '<rect x="278" y="256" width="84" height="48" rx="8" fill="#f2b632" stroke="#8a5a00" stroke-width="2"/><text x="320" y="285" text-anchor="middle" font-size="13" font-weight="700" fill="#5a3b00">Batterie</text><text x="258" y="262" font-size="16" font-weight="800" fill="#c0392b">+</text><text x="374" y="262" font-size="16" font-weight="800" fill="#2f6fdb">−</text>';
      if (hat("schalter")) h += '<g data-schalter="1" style="cursor:pointer"><rect x="100" y="44" width="100" height="62" rx="10" fill="#fff" stroke="#b9cbd8" stroke-width="2"/><circle cx="126" cy="80" r="5" fill="#15212b"/><circle cx="174" cy="80" r="5" fill="#15212b"/>' +
        '<line x1="126" y1="80" x2="' + (z.zu ? 174 : 168) + '" y2="' + (z.zu ? 80 : 56) + '" stroke="#15212b" stroke-width="5" stroke-linecap="round"/><text x="150" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">Schalter: ' + (z.zu ? "zu" : "offen") + " (antippen)</text></g>";
      var lampe = function (x, y, an, name) { return (an ? '<circle cx="' + x + '" cy="' + y + '" r="46" fill="#ffe27a" opacity=".55"/>' : "") + '<circle cx="' + x + '" cy="' + y + '" r="26" fill="' + (an ? "#ffd23a" : "#fff") + '" stroke="#15212b" stroke-width="3"/>' +
        '<path d="M' + (x - 18) + " " + (y - 18) + " L" + (x + 18) + " " + (y + 18) + " M" + (x + 18) + " " + (y - 18) + " L" + (x - 18) + " " + (y + 18) + '" stroke="#15212b" stroke-width="2.5"/><text x="' + x + '" y="' + (y + 48) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">' + name + (an ? " leuchtet" : "") + "</text>"; };
      if (hat("lampe")) h += lampe(490, 80, A.aktiv.lampe, "Lampe");
      if (hat("lampe2")) h += lampe(320, 150, A.aktiv.lampe2, "Lampe 2");
      if (hat("motor")) h += '<circle cx="320" cy="150" r="26" fill="' + (A.aktiv.motor ? "#bfe6c9" : "#fff") + '" stroke="#15212b" stroke-width="3"/><text x="320" y="156" text-anchor="middle" font-size="18" font-weight="800" fill="#15212b">M</text><text x="320" y="198" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">Motor' + (A.aktiv.motor ? " dreht sich" : "") + "</text>";
      Object.keys(P).forEach(function (p) {
        h += '<g class="anschluss' + (gewaehlt === p ? " picked" : "") + '" data-p="' + p + '"><circle class="punkt' + (offen.indexOf(p) >= 0 ? " problem" : "") + '" cx="' + P[p].x + '" cy="' + P[p].y + '" r="9" fill="#fff" stroke="#15212b" stroke-width="3"/><circle class="treffer" cx="' + P[p].x + '" cy="' + P[p].y + '" r="24"/></g>';
      });
      g.svg.innerHTML = h;
      if (g.modus !== "film") g.mess.innerHTML = g.text() + (hilfe ? "<br><b>Hilfe " + Math.min(hilfe, 3) + ":</b> " + ["Ist dein Stromkreis geschlossen?", "Prüfe den Weg von der Lampe zurück zur Spannungsquelle.", "Die rot gestrichelten Anschlüsse sind noch nicht verbunden."][Math.min(hilfe, 3) - 1] : "");
    };
    g.text = function () {
      var A = auswertung(), n = g.z.kabel.length;
      if (A.kurz) return "⚠️ <b>Kurzschluss!</b> Ein Kabel verbindet Plus- und Minuspol direkt – ohne Lampe. Entferne es.";
      if (A.geschlossen) return "✅ Der Stromkreis ist geschlossen" + (A.aktiv.lampe ? " – die Lampe leuchtet." : ".") + " " + n + " Kabel.";
      if (!n) return "Tippe einen Anschluss an, dann einen zweiten – so legst du ein Kabel. Ein Kabel antippen entfernt es.";
      return "Der Stromkreis ist noch nicht geschlossen" + (hat("schalter") && !g.z.zu ? " (oder der Schalter ist offen)" : "") + ". " + n + " Kabel.";
    };
    function tipp(e) {
      if (g.bild || g.modus === "film") return;
      var t = e.target.closest ? e.target : e.target.parentNode, p = t.closest("[data-p]"), k = t.closest("[data-kabel]"), s = t.closest("[data-schalter]");
      if (p) {
        var id = p.getAttribute("data-p");
        if (!gewaehlt) gewaehlt = id;
        else if (gewaehlt === id) gewaehlt = null;
        else { var neu = kante(gewaehlt, id); if (g.z.kabel.indexOf(neu) < 0 && g.z.kabel.length < 12) g.z.kabel = g.z.kabel.concat(neu).sort(); gewaehlt = null; }
      } else if (k) { g.z.kabel = g.z.kabel.filter(function (x) { return x !== k.getAttribute("data-kabel"); }); gewaehlt = null; }
      else if (s) g.z.zu = !g.z.zu;
      else return;
      var A = auswertung();
      if (A.geschlossen) { g.finde("geschlossen"); hilfe = 0; }
      if (A.kurz) g.finde("kurz");
      if (g.gefunden.geschlossen && !A.geschlossen && !g.z.zu) g.finde("schalter");
      g.zeichne(); g.melde();
    }
    g.svg.addEventListener("click", tipp);
    if (g.ctrl) {
      g.ctrl.innerHTML = '<div class="gruppe"><button type="button" data-tu="hilfe">💡 Hilfe</button><button type="button" data-tu="leer">🗑 Alle Kabel entfernen</button></div>';
      g.q('[data-tu="hilfe"]').addEventListener("click", function () { hilfe = Math.min(3, hilfe + 1); g.zeichne(); });
      g.q('[data-tu="leer"]').addEventListener("click", function () { g.z.kabel = []; gewaehlt = null; hilfe = 0; g.zeichne(); g.melde(); });
      if (g.modus === "bau") g.q('[data-tu="hilfe"]').remove();   // Bauaufgabe in der Probe: keine Hilfen
    }
    g.zeichne();
    return nachAussen(g, {
      zustand: function () { var A = auswertung(); return { kabel: g.z.kabel.slice(), zu: g.z.zu, geschlossen: A.geschlossen, kurz: A.kurz, leuchtet: !!A.aktiv.lampe, anzahl: g.z.kabel.length }; },
      loese: function () { g.z.kabel = [kante("b+", "s1"), kante("s2", "l1"), kante("l2", "b-")].sort(); g.z.zu = true; g.finde("geschlossen"); g.finde("schalter"); g.zeichne(); g.melde(); }
    });
  }

  /* ================= Generator ================= */
  function generator(el, opts) {
    var g = gestell(el, [640, 300], Object.assign({ art: "generator", alt: "Generatormodell: Ein Magnet dreht sich vor einer Spule, eine Lampe und ein Diagramm zeigen die Wechselspannung" }, opts), { f: 0 });
    var lauf = { phi: 0, raf: 0, zuletzt: 0, spur: [] };
    g.svg.innerHTML = '<circle cx="130" cy="150" r="92" fill="none" stroke="#d8e2ea" stroke-width="2" stroke-dasharray="4 5"/>' +
      '<g data-r="rotor"><rect x="52" y="132" width="78" height="36" rx="5" fill="#1b8a4b"/><rect x="130" y="132" width="78" height="36" rx="5" fill="#c0392b"/><text x="91" y="157" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">S</text><text x="169" y="157" text-anchor="middle" font-size="17" font-weight="800" fill="#fff">N</text></g>' +
      '<circle cx="130" cy="150" r="7" fill="#15212b"/><text x="130" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="#566674">Magnet (dreht sich)</text>' +
      '<rect x="244" y="126" width="92" height="48" rx="6" fill="#8795a1" stroke="#4a5a67" stroke-width="2"/><g data-r="spule"></g><text x="290" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="#7a4a14">Spule mit Eisenkern</text>' +
      '<path d="M262 122 V56 H372" fill="none" stroke="#5f6770" stroke-width="3"/><path d="M318 122 V86 H372" fill="none" stroke="#5f6770" stroke-width="3"/>' +
      '<circle data-r="schein" cx="400" cy="70" r="42" fill="#ffe27a" opacity="0"/><circle data-r="lampe" cx="400" cy="70" r="24" fill="#fff" stroke="#15212b" stroke-width="3"/><path d="M383 53 L417 87 M417 53 L383 87" stroke="#15212b" stroke-width="2.5"/>' +
      '<rect x="380" y="134" width="244" height="130" rx="8" fill="#0f2233"/><line x1="388" y1="199" x2="616" y2="199" stroke="#4a6a85" stroke-width="1.5"/><path data-r="kurve" d="" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>' +
      '<text x="388" y="150" font-size="11" font-weight="700" fill="#9fc3df">Spannung</text><text x="616" y="258" text-anchor="end" font-size="11" font-weight="700" fill="#9fc3df">Zeit →</text>' +
      '<text data-r="wert" x="502" y="290" text-anchor="middle" font-size="13" font-weight="800" fill="#095a93"></text>';
    var s = ""; for (var i = 0; i < 9; i++) s += '<line x1="' + (252 + i * 9.5) + '" y1="122" x2="' + (252 + i * 9.5) + '" y2="178" stroke="#b9722a" stroke-width="3"/>';
    g.svg.querySelector('[data-r="spule"]').innerHTML = s;
    var r = function (n) { return g.svg.querySelector('[data-r="' + n + '"]'); };
    function male(u) {
      r("rotor").setAttribute("transform", "rotate(" + (lauf.phi * 180 / Math.PI).toFixed(1) + " 130 150)");
      r("schein").setAttribute("opacity", clamp(Math.abs(u) * .8, 0, .8).toFixed(2));
      r("lampe").setAttribute("fill", Math.abs(u) > .08 ? "rgb(255," + Math.round(255 - Math.abs(u) * 50) + "," + Math.round(255 - Math.abs(u) * 200) + ")" : "#fff");
      var d = ""; lauf.spur.forEach(function (v, i) { d += (i ? "L" : "M") + (388 + i * 2) + " " + (199 - v * 52).toFixed(1); });
      r("kurve").setAttribute("d", d);
      r("wert").textContent = g.z.f ? "Frequenz: " + komma(g.z.f, 1) + " Hz · höchste Spannung: " + komma(g.z.f * 2, 1) + " V" : "Der Magnet steht: 0 V";
    }
    function schritt(t) {
      // Die Kurve wird in festen Zeitschritten (1/60 s) fortgeschrieben – unabhängig davon, wie schnell das Gerät zeichnet
      var dt = Math.min(.25, (t - (lauf.zuletzt || t)) / 1000), u = lauf.spur.length ? lauf.spur[lauf.spur.length - 1] : 0; lauf.zuletzt = t;
      lauf.rest = (lauf.rest || 0) + dt;
      while (lauf.rest >= 1 / 60) {
        lauf.rest -= 1 / 60;
        lauf.phi += 2 * Math.PI * g.z.f / 60;
        u = g.z.f ? Math.sin(lauf.phi) * clamp(g.z.f / 3, 0, 1) : 0;
        lauf.spur.push(u); if (lauf.spur.length > 114) lauf.spur.shift();
      }
      male(u);
      lauf.raf = g.z.f || lauf.spur.some(function (v) { return Math.abs(v) > .01; }) ? global.requestAnimationFrame(schritt) : 0;
    }
    g.zeichne = function () { g.knoepfe(); if (!lauf.raf) { if (g.bild || ruhig()) { lauf.spur = []; for (var i = 0; i < 114; i++) lauf.spur.push(g.z.f ? Math.sin(i / 114 * 2 * Math.PI * g.z.f * 1.6) * clamp(g.z.f / 3, 0, 1) : 0); male(lauf.spur[113]); } else { lauf.zuletzt = 0; lauf.raf = global.requestAnimationFrame(schritt); } } if (g.modus !== "film") g.mess.innerHTML = g.text(); };
    g.halt = function () { global.cancelAnimationFrame(lauf.raf); lauf.raf = 0; lauf.spur = []; };
    g.text = function () {
      var f = g.z.f;
      if (!f) return "Der Magnet steht still: Das Magnetfeld in der Spule ändert sich nicht – keine Spannung, die Lampe bleibt dunkel.";
      return "Der Magnet dreht sich " + (f >= 3 ? "schnell" : f >= 2 ? "mittelschnell" : "langsam") + " (" + komma(f, 1) + " Umdrehungen je Sekunde): Die Spannung wechselt ständig ihre Richtung – <b>Wechselspannung mit " + komma(f, 1) + " Hz</b>. Die Lampe " + (f >= 2 ? "leuchtet hell" : "flackert schwach") + ".";
    };
    g.aendere = function (neu) { var vor = g.z.f; Object.assign(g.z, neu); if (g.z.f) { g.finde("dreht"); g.finde("f-" + g.z.f); } else if (vor) g.finde("stopp"); if (Object.keys(g.gefunden).filter(function (k) { return /^f-/.test(k); }).length > 1) g.finde("schneller"); g.zeichne(); g.melde(); };
    g.gruppe("Kurbel", "f", [[0, "Stopp"], [1, "langsam"], [2, "mittel"], [3, "schnell"]]);
    g.zeichne();
    return nachAussen(g, { loese: function () { [1, 3, 0].forEach(function (f) { g.aendere({ f: f }); }); } });
  }

  /* ================= Transformator ================= */
  function trafo(el, opts) {
    var o = opts || {}, WERTE = o.windungen || [100, 200, 400, 600, 1200], TEILE = ["quelle", "primaer", "kern", "sekundaer", "messer"];
    var NAME = { quelle: "Spannungsquelle", primaer: "Primärspule", kern: "Eisenkern", sekundaer: "Sekundärspule", messer: "Spannungsmesser" };
    var g = gestell(el, [640, 300], Object.assign({ art: "trafo", alt: "Transformator: zwei Spulen auf einem geschlossenen Eisenkern, links die Spannungsquelle, rechts ein Spannungsmesser" }, opts),
      { u1: 12, n1: 400, n2: 200, art: "wechsel", kern: true, gebaut: !(o.modus === "bau" || o.zusammenbauen) });
    var platz = {}, gewaehlt = null;
    if (!g.z.gebaut) TEILE.forEach(function (t) { platz[t] = null; });
    var u2 = function (z) { return !z.gebaut || z.art !== "wechsel" ? 0 : z.u1 * z.n2 / z.n1 * (z.kern ? 1 : .08); };
    g.zeichne = function () {
      var z = g.z, h = "", da = function (t) { return z.gebaut || platz[t] === t; };
      var spule = function (x, n, farbe) { var s = "", k = clamp(Math.round(n / 50), 3, 26); for (var i = 0; i < k; i++) { var y = 82 + i * (136 / (k - 1 || 1)); s += '<line x1="' + (x - 26) + '" y1="' + y.toFixed(1) + '" x2="' + (x + 26) + '" y2="' + y.toFixed(1) + '" stroke="' + farbe + '" stroke-width="' + (k > 16 ? 2.4 : 3.6) + '" stroke-linecap="round"/>'; } return s; };
      var rahmen = function (t, x, y, w, hh) { return z.gebaut ? "" : '<g class="platz" data-platz="' + t + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="10" fill="' + (platz[t] ? "none" : "#fffaeb") + '" stroke="' + (platz[t] ? (platz[t] === t ? "#1b8a4b" : "#e0453a") : "#f2b632") + '" stroke-width="2.5" stroke-dasharray="' + (platz[t] ? "0" : "7 5") + '"/>' +
        (platz[t] ? "" : '<text x="' + (x + w / 2) + '" y="' + (y + hh / 2 + 4) + '" text-anchor="middle" font-size="12" font-weight="800" fill="#8a5a00">Platz ' + (TEILE.indexOf(t) + 1) + "</text>") + "</g>"; };
      // Eisenkern
      if (da("kern")) h += z.kern ? '<path d="M222 56 H418 V244 H222 Z M256 90 V210 H384 V90 Z" fill="#8795a1" stroke="#4a5a67" stroke-width="2" fill-rule="evenodd"/>'
        : '<path d="M222 56 H256 V244 H222 Z M384 56 H418 V244 H384 Z" fill="#8795a1" stroke="#4a5a67" stroke-width="2"/><text x="320" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#c0392b">Kern offen</text>';
      else if (platz.kern) h += falsch(320, 150, platz.kern);
      h += rahmen("kern", 214, 48, 212, 204);
      if (da("primaer")) h += spule(239, z.n1, "#c0392b") + '<text x="239" y="270" text-anchor="middle" font-size="12" font-weight="800" fill="#c0392b">N₁ = ' + z.n1 + "</text>"; else if (platz.primaer) h += falsch(239, 150, platz.primaer);
      h += rahmen("primaer", 200, 72, 78, 156);
      if (da("sekundaer")) h += spule(401, z.n2, "#2f6fdb") + '<text x="401" y="270" text-anchor="middle" font-size="12" font-weight="800" fill="#2f6fdb">N₂ = ' + z.n2 + "</text>"; else if (platz.sekundaer) h += falsch(401, 150, platz.sekundaer);
      h += rahmen("sekundaer", 362, 72, 78, 156);
      // Quelle links, Messgerät rechts
      if (da("quelle")) h += '<path d="M213 96 H110 V120 M213 204 H110 V180" fill="none" stroke="#5f6770" stroke-width="3"/><circle cx="110" cy="150" r="30" fill="#fff" stroke="#15212b" stroke-width="3"/><text x="110" y="160" text-anchor="middle" font-size="26" font-weight="800" fill="#15212b">' + (z.art === "wechsel" ? "~" : "=") + "</text>" +
        '<text x="110" y="204" text-anchor="middle" font-size="12" font-weight="800" fill="#15212b">U₁ = ' + komma(z.u1, 0) + ' V</text><text x="110" y="220" text-anchor="middle" font-size="11" font-weight="700" fill="#566674">' + (z.art === "wechsel" ? "Wechselspannung" : "Gleichspannung") + "</text>";
      else if (platz.quelle) h += falsch(110, 150, platz.quelle);
      h += rahmen("quelle", 62, 104, 96, 96);
      if (da("messer")) h += '<path d="M427 96 H530 V120 M427 204 H530 V180" fill="none" stroke="#5f6770" stroke-width="3"/><circle cx="530" cy="150" r="30" fill="#fff" stroke="#15212b" stroke-width="3"/><text x="530" y="159" text-anchor="middle" font-size="22" font-weight="800" fill="#15212b">V</text>' +
        '<text x="530" y="204" text-anchor="middle" font-size="13" font-weight="800" fill="#095a93">U₂ = ' + komma(u2(z), u2(z) < 10 && u2(z) % 1 ? 1 : 0) + " V</text>";
      else if (platz.messer) h += falsch(530, 150, platz.messer);
      h += rahmen("messer", 482, 104, 96, 96);
      g.svg.innerHTML = h;
      g.knoepfe();
      g.qq(".lab-teile button").forEach(function (b) { var t = b.getAttribute("data-teil"); b.classList.toggle("picked", gewaehlt === t); b.classList.toggle("weg", Object.keys(platz).some(function (p) { return platz[p] === t; })); });
      g.qq(".lab-ctrl .gruppe").forEach(function (d) { d.style.display = z.gebaut ? "" : "none"; });
      if (g.modus !== "film") g.mess.innerHTML = g.text();
    };
    function falsch(x, y, t) { return '<text x="' + x + '" y="' + (y + 4) + '" text-anchor="middle" font-size="11" font-weight="800" fill="#c0392b">' + esc(NAME[t]) + "?</text>"; }
    g.text = function () {
      var z = g.z, u = u2(z);
      if (!z.gebaut) { var n = TEILE.filter(function (t) { return platz[t] === t; }).length; return "Baue den Transformator zusammen: Bauteil antippen, dann den passenden Platz antippen. " + n + " von 5 Teilen sitzen richtig."; }
      if (z.art !== "wechsel") return "Gleichspannung: Das Magnetfeld im Eisenkern ändert sich nicht – an der Sekundärspule entsteht <b>keine Spannung</b> (0 V). Ein Transformator braucht Wechselspannung.";
      if (!z.kern) return "Ohne geschlossenen Eisenkern erreicht nur wenig Magnetfeld die Sekundärspule: nur etwa <b>" + komma(u, 1) + " V</b>.";
      return "U₁ = " + komma(z.u1, 0) + " V · N₁ = " + z.n1 + " · N₂ = " + z.n2 + ": An der Sekundärspule liegen <b>" + komma(u, u % 1 ? 1 : 0) + " V</b>. " +
        (z.n2 > z.n1 ? "Mehr Windungen auf der Sekundärseite – die Spannung wird <b>hochtransformiert</b>." : z.n2 < z.n1 ? "Weniger Windungen auf der Sekundärseite – die Spannung wird <b>heruntertransformiert</b>." : "Gleich viele Windungen – die Spannung bleibt gleich.");
    };
    g.aendere = function (neu, name) {
      Object.assign(g.z, neu); var z = g.z;
      if (z.gebaut && z.art === "wechsel" && z.kern) { if (z.n2 > z.n1) g.finde("hoch"); if (z.n2 < z.n1) g.finde("runter"); if (z.n2 === z.n1) g.finde("gleichviel"); }
      if (z.gebaut && z.art !== "wechsel") g.finde("gleichspannung");
      if (z.gebaut && !z.kern) g.finde("ohnekern");
      g.zeichne(); g.melde();
    };
    if (g.ctrl) {
      if (!g.z.gebaut) {
        var tray = doc.createElement("div"); tray.className = "lab-teile";
        var gemischt = TEILE.slice().sort(function (a, b) { return NAME[a].localeCompare(NAME[b], "de"); });
        tray.innerHTML = gemischt.map(function (t) { return '<button type="button" data-teil="' + t + '">' + NAME[t] + "</button>"; }).join("");
        g.el.insertBefore(tray, g.ctrl);
        Array.prototype.forEach.call(tray.querySelectorAll("button"), function (b) { b.addEventListener("click", function () { var t = b.getAttribute("data-teil"); Object.keys(platz).forEach(function (p) { if (platz[p] === t) platz[p] = null; }); gewaehlt = gewaehlt === t ? null : t; g.zeichne(); }); });
        g.svg.addEventListener("click", function (e) {
          var p = e.target.closest ? e.target.closest("[data-platz]") : null; if (!p || g.z.gebaut) return;
          var ort = p.getAttribute("data-platz");
          if (gewaehlt) { platz[ort] = gewaehlt; gewaehlt = null; } else platz[ort] = null;
          if (TEILE.every(function (t) { return platz[t] === t; })) { g.z.gebaut = true; g.finde("gebaut"); tray.remove(); }
          g.zeichne(); g.melde();
        });
      }
      g.gruppe("N₁ (Primär)", "n1", WERTE.map(function (n) { return [n, String(n)]; }));
      g.gruppe("N₂ (Sekundär)", "n2", WERTE.map(function (n) { return [n, String(n)]; }));
      g.gruppe("Spannung", "art", [["wechsel", "~ Wechsel"], ["gleich", "= Gleich"]]);
      if (!o.ohneKernwahl) g.gruppe("Eisenkern", "kern", [[true, "geschlossen"], [false, "offen"]]);
    }
    g.zeichne();
    return nachAussen(g, {
      zustand: function () { return Object.assign({}, g.z, { u2: Math.round(u2(g.z) * 10) / 10, richtig: TEILE.filter(function (t) { return g.z.gebaut || platz[t] === t; }).length }); },
      loese: function () {
        if (!g.z.gebaut) { TEILE.forEach(function (t) { platz[t] = t; }); g.z.gebaut = true; g.finde("gebaut"); var tr = g.q(".lab-teile"); if (tr) tr.remove(); }
        [{ n1: 200, n2: 400 }, { n1: 400, n2: 200 }, { art: "gleich" }, { art: "wechsel" }].forEach(function (s) { if (!Object.keys(s).some(g.fest)) g.aendere(s); });
      }
    });
  }

  /* ---------- Stehendes Bild eines Endzustands (Lehrkraft, Rückgabe, Druck) ---------- */
  var ARTEN = { elektromagnet: elektromagnet, induktion: induktion, stromkreis: stromkreis, generator: generator, trafo: trafo };
  function statisch(el, art, zustand, opts) {
    if (!ARTEN[art]) { el.textContent = ""; return null; }
    el.classList.add("lab-statisch");
    var lab = ARTEN[art](el, Object.assign({}, opts, { modus: "bild", start: zustand || {} }));
    var p = el.querySelector(".lab-mess"); if (p) p.innerHTML = lab.beschreibe();
    return lab;
  }
  // Baut den Versuch zu einer Angabe { art, modus, … } (so stehen Versuche in den Aufgaben einer Probe)
  function baue(el, angabe) { var f = ARTEN[angabe && angabe.art]; return f ? f(el, angabe) : null; }

  global.NTLabor = { elektromagnet: elektromagnet, induktion: induktion, stromkreis: stromkreis, generator: generator, trafo: trafo, statisch: statisch, baue: baue, ARTEN: Object.keys(ARTEN) };
})(window);
