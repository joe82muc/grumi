/* Kursliste – gemeinsames Gerüst für Fächer, deren Lernseiten die Lehrkraft je Klasse freischaltet.
 * Zuerst für Englisch 7 bis 9: Die Listen stehen in 7/Englisch_7/themen.js (E7), 8R/Englisch/themen.js (E8),
 * 9M/Englisch_9/themen.js (E9M) und 9R/Englisch/themen.js (E9R). NT 7, Informatik 7/8 und Deutsch 7 haben
 * dieselben Funktionen noch in ihrer eigenen themen.js – die Verwaltung spricht alle Listen gleich an.
 *
 *   GrumiKursliste.bauen({
 *     name: "E7",              Name der Liste (window.E7)
 *     kurs: "e7",              Kurs im Lernstand (js/lernstand.js)
 *     stufe: 7, zuege: ["M", "R"], fach: "Englisch", titel: "Englisch 7",
 *     pfad: "/api/e7",         Freischaltung auf dem Server (nt7-freigabe.js)
 *     ordner: "7/Englisch_7/", Ordner der Liste, vom Wurzelordner der Website aus; uebersicht: Datei der Übersicht dort (index.html)
 *     themen: [{ id, nr, titel, kurz, icon, text, module: [{ id, kz, titel, href, text, art, ls, auch }] }],
 *     probeInhalt: { "<test>": ["<modul>", …] }    Proben, die nicht nach der Regel unten zugeordnet werden
 *     proben: { "<test>": "<themenbereich>" }      Proben, die einen ganzen Themenbereich abdecken (z. B. NT 9)
 *   })
 *
 * Modul: kz = festes Kürzel (nur in der Verwaltung zu sehen), href = Seite (vom Ordner der Liste aus), auch = weitere
 * Adressen derselben Seite, art = Wortschatz | Grammatik | …, ls = Kennung im Lernstand (endet sie mit „-“, gilt sie
 * als Anfang mehrerer Kennungen), offen: true = von sich aus offen (NT 9), ohne href = in Vorbereitung. Sonst ist
 * alles zuerst gesperrt; die Lehrkraft schaltet je Klasse frei oder sperrt (Verwaltung → Klasse → Fach). Das ist eine
 * Lernsteuerung, kein Geheimnisschutz: Die Seiten sind öffentliche Dateien.
 * NT 9 nutzt das Gerüst auch: 9M/NT_9/themen.js (NT9M) und 9R/NT_9/themen.js (NT9R), Server /api/n9.
 *
 * Englisch-Tests heißen e<Stufe><Zug>-u<Unit>-<Art>: „kt-g2“ gehört zum Grammatik-Modul G2 der Unit, „probe“ zu
 * allen Grammatik-Modulen der Unit, alles andere (test1, probe1, versuch) zum Vokabeltrainer der Unit.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var SITZUNG = "grumi-code-anmeldung";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt eine Seite, auch wenn sie für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }

  // Einmal anmelden: Im selben Browser-Tab gilt die Code-Anmeldung weiter, bis das Kind sich abmeldet, den Tab
  // schließt oder länger als 10 Minuten nichts tippt oder anklickt. Ein neuer Tab fragt wieder nach dem Code.
  // Derselbe Block steht in allen Skripten, die die Anmeldung lesen (js/lernstand.js, js/klasse.js, NT, Deutsch …).
  function grumiTab() {
    if (global.GrumiTab) return global.GrumiTab;
    var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
    function lies() { try { return JSON.parse(global.sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
    function merken(code) { try { global.sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
    function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
    ["pointerdown", "keydown"].forEach(function (n) { doc.addEventListener(n, taetig, true); });
    return (global.GrumiTab = {
      merken: merken,
      gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
      ende: function () { try { global.sessionStorage.removeItem(K); } catch (_e) {} }
    });
  }
  function anmeldungLadung() {
    var p = global.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (global.__grumiLadung = global.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === anmeldungLadung()) { grumiTab().merken(s.code); return s; }
    if ((s.frisch && s.frisch === global.location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
      delete s.frisch; s.ladung = anmeldungLadung();
      try { global.localStorage.setItem(SITZUNG, JSON.stringify(s)); } catch (_e) {}
      grumiTab().merken(s.code); return s;
    }
    return null;
  }
  function zugVon(k) { var m = /^(\d+)/.exec(String(k || "")); return m ? m[1] + (/M$/.test(k) ? "M" : "R") : ""; }
  // Gültige Code-Anmeldung auf diesem Gerät ({ code, kennung, klasse, zug, name }) oder null
  function anmeldung() {
    try { return anmeldungGueltig(JSON.parse(global.localStorage.getItem(SITZUNG) || "null")); } catch (_e) { return null; }
  }
  // Mit dem Code anmelden: Der Server nennt Klasse und Zug. Die Antwort enthält auch den Lernstand (d.fortschritt).
  function anmelden(code) {
    return global.fetch(API + "/api/nt9/fortschritt/anmelden", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: code })
    }).then(function (r) { return r.json().then(function (d) { d.status = r.status; return d; }); }).then(function (d) {
      if (d.status === 200 && d.ok && d.code) {
        var s = { name: "Code " + d.code, kennung: "code-" + d.code, klasse: d.klasse, zug: d.zug || zugVon(d.klasse), code: d.code, seit: Date.now(), ladung: anmeldungLadung() };
        try { global.localStorage.setItem(SITZUNG, JSON.stringify(s)); } catch (_e) {}
        grumiTab().merken(s.code);
        return { sitzung: s, antwort: d };
      }
      throw new Error(d.error || (d.status === 429 ? "Zu viele falsche Codes. Warte ein paar Minuten." : "Das hat nicht geklappt. Versuche es noch einmal."));
    });
  }
  function abmelden() { try { global.localStorage.removeItem(SITZUNG); } catch (_e) {} grumiTab().ende(); }

  // Adresse vergleichbar machen: ohne ?…/#…, entschlüsselt, Umlaute in einer Form, kleingeschrieben
  function norm(p) {
    var s = String(p || "").split("#")[0].split("?")[0];
    try { s = decodeURIComponent(s); } catch (_e) {}
    if (s.normalize) s = s.normalize("NFC");
    return s.toLowerCase();
  }
  // „a/b/../c“ -> „a/c“
  function glatt(p) {
    var teile = [];
    String(p).split("/").forEach(function (t) { if (t === "..") teile.pop(); else if (t && t !== ".") teile.push(t); });
    return teile.join("/");
  }

  function bauen(cfg) {
    var THEMEN = cfg.themen, PFAD = cfg.pfad, STUFE = String(cfg.stufe), SPEICHER = "grumi-" + cfg.name.toLowerCase() + "-freigabe~";
    var INHALT = cfg.probeInhalt || {}, PROBEN = cfg.proben || {};

    function modulVon(id) {
      for (var i = 0; i < THEMEN.length; i++) for (var j = 0; j < THEMEN[i].module.length; j++) {
        if (THEMEN[i].module[j].id === id) return { modul: THEMEN[i].module[j], thema: THEMEN[i], nr: j + 1 };
      }
      return null;
    }
    // Modul zu einer Seite (Adresse im Browser): über href oder eine der weiteren Adressen (auch)
    function modulZurSeite(pfadname) {
      var seite = norm(pfadname), treffer = null;
      THEMEN.forEach(function (t) {
        t.module.forEach(function (m) {
          [m.href].concat(m.auch || []).forEach(function (h) {
            if (!h || treffer) return;
            var ziel = "/" + norm(glatt(cfg.ordner + h));
            if (seite.slice(-ziel.length) === ziel) treffer = { modul: m, thema: t };
          });
        });
      });
      return treffer;
    }
    // Modul zu einer Kennung im Lernstand („e7-u1-g1“)
    function modulZumLernstand(lsId) {
      var treffer = null;
      THEMEN.forEach(function (t) {
        t.module.forEach(function (m) {
          if (!m.ls || treffer) return;
          if (m.ls === lsId || (m.ls.slice(-1) === "-" && String(lsId).indexOf(m.ls) === 0)) treffer = { modul: m, thema: t };
        });
      });
      return treffer;
    }

    // Ist das Modul für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
    function offen(modul, thema, stand) {
      if (VORSCHAU) return true;
      if (stand && stand.alles) return true;      // Lehrercode
      var s = stand || {}, m = (s.module || {})[modul.id], t = (s.themen || {})[thema.id];
      if (modul.extra) return m === true;
      if (m === true || m === false) return m;
      if (t === true || t === false) return t;
      return Boolean(modul.offen);
    }

    function liesSpeicher(klasse) {
      try { return JSON.parse(global.localStorage.getItem(SPEICHER + klasse) || "null"); } catch (_e) { return null; }
    }
    // Stand der Klasse holen. cb(stand, quelle) kommt bis zu zweimal: sofort aus dem Speicher des Geräts
    // (quelle "speicher"), dann vom Server ("server"). Ohne Anmeldung: cb(null, "gast").
    var laufend = {};
    function freigabe(a, cb, fehler) {
      if (!a || !a.code) { cb(null, "gast"); return; }
      var alt = liesSpeicher(a.klasse);
      if (alt) cb(alt, "speicher");
      var code = String(a.code);
      if (laufend[code]) { laufend[code].push([cb, fehler]); return; }
      var warten = laufend[code] = [];
      var cbAlle = function (stand, quelle) { cb(stand, quelle); warten.forEach(function (w) { w[0](stand, quelle); }); };
      var fehlerAlle = function (text, wachtAuf) { if (fehler) fehler(text, wachtAuf); warten.forEach(function (w) { if (w[1]) w[1](text, wachtAuf); }); };
      var ctl = global.AbortController ? new AbortController() : null;
      var zeit = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
      var langsam = setTimeout(function () { fehlerAlle("Der Server wacht gerade auf – das kann bis zu einer Minute dauern.", true); }, 6000);
      global.fetch(API + PFAD + "/freigabe", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code }),
        signal: ctl ? ctl.signal : undefined
      }).then(function (r) { return r.json().then(function (d) { d.status = r.status; return d; }); }).then(function (d) {
        if (!d.ok) throw new Error(d.error || "Fehler " + d.status);
        var stand = { themen: d.themen || {}, module: d.module || {}, klasse: d.klasse, zeit: Date.now() };
        if (d.alles) stand.alles = true;
        try { global.localStorage.setItem(SPEICHER + d.klasse, JSON.stringify(stand)); } catch (_e) {}
        cbAlle(stand, "server");
      }).catch(function () {
        fehlerAlle(alt ? "" : "Der Server antwortet gerade nicht. Was freigeschaltet ist, lässt sich nicht prüfen.", false);
      }).then(function () { clearTimeout(zeit); clearTimeout(langsam); delete laufend[code]; });
    }

    // Themenbereich(e) einer Probe und die Module, die sie enthält
    function probeTeile(testId) {
      if (PROBEN[testId]) return { thema: PROBEN[testId], art: "alle" };
      var m =/^e\d+[mr]?-u(\d+)-(.+)$/i.exec(String(testId || ""));
      return m ? { thema: "u" + m[1], art: m[2].toLowerCase() } : null;
    }
    function probeThemen(testId) {
      var p = probeTeile(testId);
      return p && THEMEN.some(function (t) { return t.id === p.thema; }) ? [p.thema] : [];
    }
    function probeModule(testId) {
      var ids = INHALT[testId], p = probeTeile(testId), liste = [];
      THEMEN.forEach(function (t) {
        t.module.forEach(function (m) {
          if (ids) { if (ids.indexOf(m.id) >= 0) liste.push(m); return; }
          if (!p || t.id !== p.thema) return;
          if (p.art === "alle") { if (!m.extra) liste.push(m); return; }
          var g = /^kt-g(\d+)$/.exec(p.art);
          if (g) { if (m.id === t.id + "-g" + g[1]) liste.push(m); }
          else if (p.art === "probe") { if (m.art === "Grammatik") liste.push(m); }
          else if (m.trainer) liste.push(m);
        });
      });
      return liste;
    }

    var L = {
      THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, NAME: cfg.name, KURS: cfg.kurs, STUFE: STUFE, ZUEGE: cfg.zuege || ["M", "R"], PFAD: PFAD,
      FACH: cfg.fach || "", TITEL: cfg.titel || "", ORDNER: cfg.ordner, UEBERSICHT: cfg.uebersicht || "index.html", INTRO: cfg.intro || "", ANDERE: cfg.andere || null, FARBE: cfg.farbe || "",
      modulVon: modulVon, modulZurSeite: modulZurSeite, modulZumLernstand: modulZumLernstand, offen: offen, freigabe: freigabe,
      probeModule: probeModule, probeThemen: probeThemen
    };
    global[cfg.name] = L;
    // Auf den Seiten des Kurses arbeiten Sperre und Übersicht mit dieser Liste. Die Verwaltung der Lehrkraft lädt
    // mehrere Listen und spricht sie mit ihrem Namen an.
    if (!/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURSLISTE = L;
    return L;
  }

  global.GrumiKursliste = { bauen: bauen, anmeldung: anmeldung, anmelden: anmelden, abmelden: abmelden, zugVon: zugVon, esc: esc, API: API, VORSCHAU: VORSCHAU };
})(window);
