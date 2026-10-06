/* Sprachfahnen: Lernseiten in einer anderen Sprache lesen – zuerst für Informatik 8.
 * Einbinden am Ende der Seite:  <script src="../../js/uebersetzen.js"></script>
 *
 * Oben auf der Seite erscheint eine Leiste mit fünf Fahnen: Deutsch (Original), Englisch, Ukrainisch, Ungarisch,
 * Kroatisch. Tippt ein Kind auf eine Fahne, werden die Texte der Seite übersetzt; die Wahl gilt auf diesem Gerät
 * auch für die nächsten Seiten („grumi-sprache“), bis es wieder Deutsch wählt.
 *
 * - Übersetzt wird über den eigenen Server (POST /api/uebersetzen, backend/api/uebersetzen.js): Jedes Textstück
 *   wird einmal von der KI übersetzt und dann gespeichert. Neues übersetzt der Server nur für angemeldete Kinder
 *   (Code); was schon gespeichert ist, bekommt jeder. Dieses Gerät merkt sich die Übersetzungen zusätzlich selbst.
 * - Die Seite bleibt, wie sie ist: Es werden nur Texte ausgetauscht. Fett, Kursiv, Verweise und Bilder in einem
 *   Satz bleiben dieselben Bausteine (als Markierungen <g1>…</g1>, <x1/> mitgeschickt) – Knöpfe, Felder und
 *   Aufgaben funktionieren weiter. Programmcode, Formeln, Eingabefelder und Zeichnungen bleiben unverändert.
 * - Was das Kind selbst geschrieben hat und Rückmeldungen dazu werden übersetzt, aber nicht gespeichert (fest: false).
 * - Die Antworten schreiben die Kinder weiter auf Deutsch; die Leiste sagt das in der gewählten Sprache.
 * - Nicht übersetzen: Elemente mit translate="no" oder class="notranslate".
 */
(function (global) {
  "use strict";
  var doc = global.document;
  if (!doc || global.GrumiUebersetzen) return;
  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com") + "/api/uebersetzen";
  var MERK = "grumi-sprache", LAGER = "grumi-uebersetzt-";

  function fahne(inhalt) { return '<svg viewBox="0 0 30 20" width="30" height="20" aria-hidden="true" focusable="false">' + inhalt + "</svg>"; }
  var SPRACHEN = [
    { id: "de", name: "Deutsch", bild: fahne('<rect width="30" height="20" fill="#ffce00"/><rect width="30" height="13.4" fill="#dd0000"/><rect width="30" height="6.7" fill="#000"/>') },
    { id: "en", name: "English", bild: fahne('<rect width="30" height="20" fill="#012169"/><path d="M0 0l30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" stroke-width="1.6"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="6.6"/><path d="M15 0v20M0 10h30" stroke="#c8102e" stroke-width="4"/>') },
    { id: "uk", name: "Українська", bild: fahne('<rect width="30" height="20" fill="#ffd700"/><rect width="30" height="10" fill="#0057b7"/>') },
    { id: "hu", name: "Magyar", bild: fahne('<rect width="30" height="20" fill="#477050"/><rect width="30" height="13.4" fill="#fff"/><rect width="30" height="6.7" fill="#ce2939"/>') },
    { id: "hr", name: "Hrvatski", bild: fahne('<rect width="30" height="20" fill="#171796"/><rect width="30" height="13.4" fill="#fff"/><rect width="30" height="6.7" fill="#ff0000"/><path d="M11.5 6h7v6a3.5 3.5 0 0 1-7 0z" fill="#fff" stroke="#ff0000" stroke-width=".5"/><path d="M11.5 6h2.3v2.3h-2.3zM16.1 6h2.4v2.3h-2.4zM13.8 8.3h2.3v2.3h-2.3zM11.5 10.6h2.3v2.3h-2.3zM16.1 10.6h2.4v2.3h-2.4z" fill="#ff0000"/>') }
  ];
  // Hinweise der Leiste in der gewählten Sprache
  var WORTE = {
    de: { sprache: "Sprache" },
    en: { hinweis: "Automatic translation – buttons and menus in Excel and Scratch stay German. Please write your answers in German.", laeuft: "Translating …", anmelden: "Log in with your code first – then this page can be translated.", fehler: "The translation is not available right now. The page stays in German.", teil: "Some texts could not be translated and stay in German." },
    uk: { hinweis: "Автоматичний переклад – кнопки та меню в Excel і Scratch залишаються німецькою. Відповіді пиши, будь ласка, німецькою.", laeuft: "Перекладаю …", anmelden: "Спочатку увійди зі своїм кодом – тоді цю сторінку можна перекласти.", fehler: "Переклад зараз недоступний. Сторінка залишається німецькою.", teil: "Деякі тексти не вдалося перекласти – вони залишаються німецькою." },
    hu: { hinweis: "Automatikus fordítás – az Excel és a Scratch gombjai és menüi németül maradnak. A válaszaidat kérlek németül írd.", laeuft: "Fordítás …", anmelden: "Előbb jelentkezz be a kódoddal – utána lefordítható ez az oldal.", fehler: "A fordítás most nem érhető el. Az oldal német marad.", teil: "Néhány szöveget nem sikerült lefordítani – ezek németül maradnak." },
    hr: { hinweis: "Automatski prijevod – gumbi i izbornici u Excelu i Scratchu ostaju na njemačkom. Odgovore, molim te, piši na njemačkom.", laeuft: "Prevodim …", anmelden: "Prvo se prijavi svojim kodom – tada se ova stranica može prevesti.", fehler: "Prijevod trenutačno nije dostupan. Stranica ostaje na njemačkom.", teil: "Neke tekstove nije bilo moguće prevesti – ostaju na njemačkom." }
  };

  // Bausteine in einem Satz, die mit übersetzt werden (ihr Text gehört zum Satz) …
  var FORMAT = { B: 1, STRONG: 1, I: 1, EM: 1, U: 1, MARK: 1, SMALL: 1, SUB: 1, SUP: 1, SPAN: 1, A: 1, ABBR: 1, Q: 1, S: 1 };
  // … und Bereiche, die nie übersetzt werden
  var NIE = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, CODE: 1, KBD: 1, PRE: 1, VAR: 1, SAMP: 1, SVG: 1, MATH: 1, IFRAME: 1, CANVAS: 1, VIDEO: 1, AUDIO: 1, OBJECT: 1, TEMPLATE: 1 };
  var BUCHSTABE = /[A-Za-zÄÖÜäöüß]{2}/;

  var sprache = "de", lauf = 0, amWerk = false, zeitgeber = 0, offen = 0;
  var lage = { anmelden: false, fehler: false, teil: false };   // was der Hinweis in der Leiste sagen muss (gilt, bis die Sprache wechselt)
  var einheiten = new Map();        // Element -> { orig: [Knoten], mine: [Knoten] } (auch für die Bausteine im Satz)
  var attribute = [];               // { el, name, orig }
  var meine = new WeakSet();        // Textknoten, die diese Datei gesetzt hat
  var getippt = {};                 // was das Kind in Felder geschrieben hat (wird nicht gespeichert)
  var lager = {};
  var ohne = {};                    // Texte, für die es in dieser Sitzung keine Übersetzung gab (nicht immer wieder fragen)

  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (_e) { return false; } }
  function code() { try { var s = JSON.parse(lies("grumi-code-anmeldung") || "null"); return s && s.code ? String(s.code) : ""; } catch (_e) { return ""; } }
  function kurz(s) { // Prüfsumme als Schlüssel im Speicher des Geräts
    var a = 0xdeadbeef, b = 0x41c6ce57;
    for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); a = Math.imul(a ^ c, 2654435761); b = Math.imul(b ^ c, 1597334677); }
    a = Math.imul(a ^ (a >>> 16), 2246822507) ^ Math.imul(b ^ (b >>> 13), 3266489909);
    b = Math.imul(b ^ (b >>> 16), 2246822507) ^ Math.imul(a ^ (a >>> 13), 3266489909);
    return (b >>> 0).toString(36) + (a >>> 0).toString(36);
  }
  function lagerLaden() { try { lager = JSON.parse(lies(LAGER + sprache) || "{}") || {}; } catch (_e) { lager = {}; } }
  function lagerSichern() {
    var s = JSON.stringify(lager);
    if (s.length > 1500000 || !schreib(LAGER + sprache, s)) { lager = {}; try { global.localStorage.removeItem(LAGER + sprache); } catch (_e) {} }
  }

  function tag(el) { return String(el.nodeName || "").toUpperCase(); }
  function gesperrt(el) {
    return NIE[tag(el)] || el.id === "gu-leiste" || el.getAttribute("translate") === "no" || (el.classList && el.classList.contains("notranslate")) || el.isContentEditable;
  }
  function imSperrbereich(el) { for (var e = el; e && e.nodeType === 1; e = e.parentNode) if (gesperrt(e)) return true; return false; }
  // Rückmeldungen der KI auf eine freie Antwort (das Feld .fb in einer Aufgabe mit class="… ki", oder
  // data-uebersetzen="fluechtig") und alles, worin etwas Getipptes steht: kann Eigenes des Kindes enthalten –
  // übersetzen ja, speichern nein. Die Aufgabe selbst ist fester Seitentext.
  function fluechtig(el, text) {
    var inRueckmeldung = false;
    for (var e = el; e && e.nodeType === 1; e = e.parentNode) {
      if (e.getAttribute("data-uebersetzen") === "fluechtig") return true;
      if (e.classList && (e.classList.contains("fb") || e.classList.contains("ki-antwort") || e.classList.contains("ki-feedback"))) inRueckmeldung = true;
      if (inRueckmeldung && e.classList && e.classList.contains("ki")) return true;
    }
    var klein = text.toLowerCase();
    return Object.keys(getippt).some(function (w) { return klein.indexOf(w) >= 0; });
  }
  // Baustein im Satz, der mit übersetzt wird? (nur Format, kein gesperrter Bereich, enthält selbst nur Format/Atome)
  function istFormat(el) {
    if (!FORMAT[tag(el)] || gesperrt(el) || !BUCHSTABE.test(el.textContent || "")) return false;
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) if (!istFormat(c) && BUCHSTABE.test(c.textContent || "") && !gesperrt(c) && !FORMAT[tag(c)]) return false;
    return true;
  }

  // Ein Element als Text mit Markierungen: Text bleibt Text, Format wird <gN>…</gN>, alles andere <xN/>
  function schreibe(el, teile) {
    var s = "";
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) s += n.nodeValue.replace(/\s+/g, " ");
      else if (n.nodeType === 1) {
        var nr = teile.length + 1;
        teile.push(n);
        if (istFormat(n)) { var innen = schreibe(n, teile); s += "<g" + nr + ">" + innen + "</g" + nr + ">"; n.__guFormat = true; }
        else { s += "<x" + nr + "/>"; n.__guFormat = false; }
      }
    }
    return s;
  }
  // Einheiten sammeln: Elemente mit eigenem, noch nicht übersetztem Text
  function sammeln() {
    var liste = [], belegt = new WeakSet();
    var walker = doc.createTreeWalker(doc.body, 1, { acceptNode: function (el) { return gesperrt(el) ? 2 : 1; } });
    for (var el = walker.nextNode(); el; el = walker.nextNode()) {
      if (belegt.has(el) || el.__guWartet) continue;
      var neu = false;
      for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && !meine.has(n) && BUCHSTABE.test(n.nodeValue)) { neu = true; break; }
      if (!neu) continue;
      var teile = [], roh = schreibe(el, teile);
      teile.forEach(function (t) { if (t.__guFormat) belegt.add(t); });
      var vorn = /^\s/.test(roh) ? " " : "", hinten = /\s$/.test(roh) ? " " : "", text = roh.trim();
      if (!text || text.length > 1400 || ohne[text] || !BUCHSTABE.test(text.replace(/<\/?g\d+>|<x\d+\/>/g, ""))) continue;
      liste.push({ el: el, teile: teile, text: text, vorn: vorn, hinten: hinten, fest: !fluechtig(el, text) });
    }
    // Platzhalter in Eingabefeldern
    Array.prototype.forEach.call(doc.querySelectorAll("input[placeholder],textarea[placeholder]"), function (f) {
      if (f.__guPlatz || f.__guWartet || imSperrbereich(f) || !BUCHSTABE.test(f.placeholder) || ohne[f.placeholder.trim()]) return;
      liste.push({ el: f, attr: "placeholder", text: f.placeholder.trim(), fest: true });
    });
    return liste;
  }

  // Übersetzten Text mit Markierungen wieder in das Element bauen – mit denselben Bausteinen wie vorher
  function einbauen(e, uebersetzt) {
    if (e.attr) { if (!e.el.__guPlatz) attribute.push({ el: e.el, name: e.attr, orig: e.el.getAttribute(e.attr) }); e.el.__guPlatz = true; e.el.setAttribute(e.attr, uebersetzt); return true; }
    // Hat die Seite den Text inzwischen neu geschrieben? Dann nichts einbauen – das Neue wird eigens übersetzt.
    var frisch = [];
    if (schreibe(e.el, frisch).trim() !== e.text) return false;
    e.teile = frisch;
    var marken = /<g(\d+)>|<\/g(\d+)>|<x(\d+)\/>/g, stapel = [{ el: e.el, kinder: [] }], benutzt = {}, pos = 0, m, plan = [];
    var text = function (t) { if (t) { var k = doc.createTextNode(t); meine.add(k); stapel[stapel.length - 1].kinder.push(k); } };
    while ((m = marken.exec(uebersetzt))) {
      text(uebersetzt.slice(pos, m.index)); pos = marken.lastIndex;
      var nr = +(m[1] || m[2] || m[3]), teil = e.teile[nr - 1];
      if (!teil) return false;
      if (m[1]) { if (benutzt[nr] || !teil.__guFormat) return false; benutzt[nr] = 1; stapel[stapel.length - 1].kinder.push(teil); stapel.push({ el: teil, kinder: [], nr: nr }); }
      else if (m[2]) { var oben = stapel.pop(); if (!oben || oben.nr !== nr || !stapel.length) return false; plan.push(oben); }
      else { if (benutzt[nr] || teil.__guFormat) return false; benutzt[nr] = 1; stapel[stapel.length - 1].kinder.push(teil); }
    }
    text(uebersetzt.slice(pos));
    if (stapel.length !== 1 || Object.keys(benutzt).length !== e.teile.length) return false;
    var wurzel = stapel[0];
    if (e.vorn) { var v = doc.createTextNode(" "); meine.add(v); wurzel.kinder.unshift(v); }
    if (e.hinten) { var h = doc.createTextNode(" "); meine.add(h); wurzel.kinder.push(h); }
    plan.push(wurzel);
    // Bausteine zuerst merken (ihre alten Kinder), dann alles umhängen: erst die inneren, zuletzt das Element selbst
    plan.forEach(function (p) { p.orig = Array.prototype.slice.call(p.el.childNodes); });
    plan.forEach(function (p) {
      while (p.el.firstChild) p.el.removeChild(p.el.firstChild);
      p.kinder.forEach(function (k) { p.el.appendChild(k); });
      var alt = einheiten.get(p.el);
      // schon einmal übersetzt und unverändert: das Original von damals behalten
      einheiten.set(p.el, { orig: alt && gleich(p.orig, alt.mine) ? alt.orig : p.orig, mine: p.kinder.slice() });
    });
    return true;
  }
  function gleich(a, b) { if (a.length !== b.length) return false; for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; }

  // Zurück zum Deutschen: nur, was seit dem Übersetzen unverändert ist (sonst hat die Seite den Text schon neu geschrieben)
  function zurueck() {
    amWerk = true;
    einheiten.forEach(function (x, el) {
      if (!el.isConnected || !gleich(Array.prototype.slice.call(el.childNodes), x.mine)) return;
      while (el.firstChild) el.removeChild(el.firstChild);
      x.orig.forEach(function (k) { el.appendChild(k); });
    });
    einheiten.clear();
    attribute.forEach(function (a) { a.el.setAttribute(a.name, a.orig); a.el.__guPlatz = false; });
    attribute = [];
    amWerk = false;
  }

  function meldung(text, art) {
    var m = doc.getElementById("gu-hinweis");
    if (!m) return;
    m.textContent = text || ""; m.hidden = !text; m.className = art || "";
  }
  function post(body) {
    return global.fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json(); });
  }

  // Alles Unübersetzte holen und einbauen. Zuerst aus dem Speicher des Geräts, der Rest in Paketen vom Server.
  function uebersetzen() {
    if (sprache === "de") return;
    var nr = lauf, W = WORTE[sprache], liste = sammeln(), fehlt = [];
    var schluss = function () { meldung(lage.anmelden ? W.anmelden : lage.fehler ? W.fehler : lage.teil ? W.hinweis + " " + W.teil : W.hinweis, lage.anmelden || lage.fehler ? "warn" : ""); };
    if (!liste.length) return;
    amWerk = true;
    liste.forEach(function (e) {
      var da = e.fest ? lager[kurz(e.text)] : null;
      if (!(da && einbauen(e, da))) fehlt.push(e);
    });
    amWerk = false;
    if (!fehlt.length) { if (!offen) schluss(); return; }
    // Pakete: gleiche Texte nur einmal, feste und flüchtige getrennt
    var pakete = [], je = { true: null, false: null };
    fehlt.forEach(function (e) {
      e.el.__guWartet = true;
      var p = je[e.fest];
      if (!p || p.texte.length >= 40 || p.zeichen + e.text.length > 9000) { p = je[e.fest] = { fest: e.fest, texte: [], wo: {}, zeichen: 0 }; pakete.push(p); }
      if (!p.wo[e.text]) { p.wo[e.text] = []; p.texte.push(e.text); p.zeichen += e.text.length; }
      p.wo[e.text].push(e);
    });
    offen++;
    meldung(W.laeuft, "laeuft");
    var i = 0;
    (function weiter() {
      if (nr !== lauf) { offen--; return; }
      if (i >= pakete.length) {
        offen--;
        lagerSichern();
        if (!offen) schluss();
        return;
      }
      var p = pakete[i++], body = { sprache: sprache, texte: p.texte };
      if (p.fest) body.fest = true;
      if (code()) body.code = code();
      post(body).then(function (d) {
        if (nr !== lauf) return;
        if (!d || !d.ok || !Array.isArray(d.texte)) { lage.fehler = true; return; }
        if (d.anmelden) lage.anmelden = true;
        if (d.voll) lage.teil = true;
        amWerk = true;
        p.texte.forEach(function (t, k) {
          var u = d.texte[k];
          if (!u) { lage.teil = true; ohne[t] = 1; return; }
          if (p.fest) lager[kurz(t)] = u;
          p.wo[t].forEach(function (e) { if (e.el.isConnected) einbauen(e, u); });
        });
        amWerk = false;
      }).catch(function () { lage.fehler = true; }).then(function () {
        Object.keys(p.wo).forEach(function (t) { p.wo[t].forEach(function (e) { e.el.__guWartet = false; }); });
        weiter();
      });
    })();
  }

  function waehle(id, merken) {
    if (!WORTE[id]) id = "de";
    lauf++;
    if (sprache !== "de") zurueck();
    sprache = id;
    lage = { anmelden: false, fehler: false, teil: false };
    ohne = {};
    if (merken) schreib(MERK, id);
    doc.documentElement.setAttribute("lang", id);
    Array.prototype.forEach.call(doc.querySelectorAll("#gu-leiste [data-sprache]"), function (b) {
      var an = b.getAttribute("data-sprache") === id; b.classList.toggle("an", an); b.setAttribute("aria-pressed", an);
    });
    if (id === "de") { meldung(""); return; }
    lagerLaden();
    uebersetzen();
  }

  function leiste() {
    var stil = doc.createElement("style");
    stil.textContent = "#gu-leiste{box-sizing:border-box;display:flex;flex-wrap:wrap;align-items:center;gap:6px 10px;padding:7px 14px;background:#f3f5fb;border-bottom:1px solid #d9deea;font:600 .9rem/1.3 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#26304d}" +
      "#gu-leiste .gu-fahnen{display:flex;flex-wrap:wrap;gap:6px}" +
      "#gu-leiste button{display:inline-flex;align-items:center;gap:6px;padding:4px 9px 4px 5px;border:2px solid #cfd6e6;border-radius:999px;background:#fff;color:#26304d;font:inherit;cursor:pointer}" +
      "#gu-leiste button svg{display:block;border-radius:3px;box-shadow:0 0 0 1px rgba(0,0,0,.18)}" +
      "#gu-leiste button:hover{border-color:#2f3a8f}#gu-leiste button.an{border-color:#2f3a8f;background:#e8ebff;box-shadow:0 0 0 2px rgba(47,58,143,.18)}" +
      "#gu-leiste button:focus-visible{outline:3px solid #ffb703;outline-offset:2px}" +
      "#gu-hinweis{flex:1 1 260px;min-width:0;font-weight:500;color:#4a5573}#gu-hinweis.warn{color:#8a4b00;font-weight:700}#gu-hinweis.laeuft{color:#2f3a8f;font-weight:700}" +
      "@media (max-width:640px){#gu-leiste button span{display:none}#gu-leiste button{padding:4px 5px}}@media print{#gu-leiste{display:none}}";
    doc.head.appendChild(stil);
    var l = doc.createElement("div");
    l.id = "gu-leiste"; l.className = "notranslate"; l.setAttribute("translate", "no"); l.setAttribute("role", "group"); l.setAttribute("aria-label", "Sprache der Seite wählen");
    l.innerHTML = '<div class="gu-fahnen">' + SPRACHEN.map(function (s) {
      return '<button type="button" data-sprache="' + s.id + '" lang="' + s.id + '" title="' + s.name + '" aria-pressed="false">' + s.bild + "<span>" + s.name + "</span></button>";
    }).join("") + '</div><div id="gu-hinweis" role="status" hidden></div>';
    doc.body.insertBefore(l, doc.body.firstChild);
    l.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("[data-sprache]") : null;
      if (b) waehle(b.getAttribute("data-sprache"), true);
    });
  }

  function start() {
    leiste();
    // Was das Kind tippt, soll nie im Übersetzungsspeicher landen
    doc.addEventListener("input", function (ev) {
      var v = ev.target && typeof ev.target.value === "string" ? ev.target.value.trim().toLowerCase() : "";
      if (v.length >= 4 && v.length <= 400) { getippt[v] = 1; var k = Object.keys(getippt); if (k.length > 60) delete getippt[k[0]]; }
    }, true);
    // Die Seite schreibt Neues (nächste Aufgabe, Rückmeldung): nachübersetzen
    if (global.MutationObserver) new MutationObserver(function () {
      if (amWerk || sprache === "de") return;
      clearTimeout(zeitgeber);
      zeitgeber = setTimeout(uebersetzen, 350);
    }).observe(doc.body, { childList: true, subtree: true, characterData: true });
    waehle(lies(MERK) || "de", false);
    doc.documentElement.setAttribute("lang", sprache);
  }

  global.GrumiUebersetzen = { waehle: function (id) { waehle(id, true); }, sprache: function () { return sprache; } };
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", function () { setTimeout(start, 60); });
  else setTimeout(start, 60);
})(window);
