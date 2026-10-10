/* Alle Proben-Module an einer Stelle – für die Verwaltung (proben-verwalten.html) und für die
 * Proben-Kachel auf der Startseite (js/klasse.js).
 *
 * Jede Probenart hat auf dem Server ein eigenes Modul mit eigenen Endpunkten.
 *   listPath   Liste der Proben mit „unlocked“ (ohne Passwort lesbar)
 *   unlockPath Freischalten/Sperren (nur Verwaltung, mit Lehrkraft-Passwort); weicht bei nt7 ab
 *   vorschauBasis Ordner der Bilder zu den Aufgaben (Text oder Funktion der Probe) – für „Vorschau · PDF“ in der
 *              Verwaltung (js/probe-vorschau.js). Welche Probenarten eine Vorschau haben, meldet der Server
 *              (/api/health: probenVorschau; Route /api/proben/vorschau). vorschauLabor = Ordner mit labor.js und
 *              darstellung.js (NT 8), vorschauPath = eigene Route der Probenart, falls der Server die gemeinsame
 *              noch nicht kennt
 *   klasse     "7" = alle 7. Klassen, "7M"/"7R" = nur dieser Zug
 *   stufen     Jahrgangsstufen, in denen das Modul Proben haben kann (die Startseite fragt nur diese ab)
 *   link       Lehrerseite (Ergebnisse), schueler = Seite für die Kinder
 *   liste      Name der Modulliste des Fachs (window.NT7, INF7, INF8, D7 aus den themen.js) oder Funktion, die ihn
 *              für eine Probe liefert: Die Verwaltung zeigt damit bei jeder Probe, welche Module sie enthält (feste
 *              Kürzel wie „L3“, nur dort zu sehen), und stellt die Probe beim Freischalten unter diese Module
 *   inhalt     dasselbe für Proben ohne Modulliste: Funktion, die [{ kz, titel }] liefert
 * Neue Probenart: hier eintragen – dann steht sie in der Verwaltung und auf der Startseite der Kinder.
 */
(function (global) {
  "use strict";

  /* Englisch-Tests: Stufe, Zug und Unit stecken in der Test-ID
     (e7-u1-…, e7m-u1-…, e8r-u2-…, e9r-u1-…, e9m-u1-…) */
  function idKlasse(t) {
    var m = String(t.id || "").match(/^e(\d+)([mr]?)-/i);
    if (m) return m[1] + m[2].toUpperCase();
    return String(t.classLevel || "?");
  }
  function englischSeite(t, datei) {
    var m = String(t.id || "").match(/^e(\d+)([mr]?)-u(\d+)-/i);
    if (!m) return "";
    var st = m[1], zug = m[2].toLowerCase(), unit = "unit" + m[3] + "/";
    if (st === "7") return "7/Englisch_7/" + unit + datei;
    if (st === "8") return "8R/Englisch/" + unit + datei;
    if (st === "9") return (zug === "m" ? "9M/Englisch_9/" : "9R/Englisch/") + unit + datei;
    return "";
  }
  function nt9Zug(t) { return /^nt9r-/.test(t.id) ? "9R" : "9M"; }
  /* Modulliste (themen.js) zu einem Englisch-Test – aus der Test-ID: E7, E8, E9M oder E9R */
  function englischListe(t) {
    var m = String(t.id || "").match(/^e(\d+)([mr]?)-/i);
    if (!m) return "";
    return m[1] === "9" ? (m[2].toLowerCase() === "m" ? "E9M" : "E9R") : "E" + m[1];
  }

  var MODULES = [
    {
      key: "vokabeltest", subject: "Englisch", stufen: [7, 8, 9], liste: englischListe,
      listPath: "/api/vokabeltest/list", unlockPath: "/api/vokabeltest/unlock",
      klasse: idKlasse, link: function (t) { return englischSeite(t, "test/lehrer.html"); },
      schueler: function (t) { return englischSeite(t, "test/vokabeltest.html") + "?test=" + encodeURIComponent(t.id); }
    },
    {
      /* Englisch 9R, 9M, 7M und 7R: Grammatikprobe und Grammatiktests G1-G4 (Unit 1) */
      key: "grammatik9r", subject: "Englisch", stufen: [7, 9], liste: englischListe,
      listPath: "/api/grammatik9r/list", unlockPath: "/api/grammatik9r/unlock",
      klasse: idKlasse, link: function (t) { return englischSeite(t, "probe/lehrer.html"); },
      schueler: function (t) { return englischSeite(t, "probe/grammatikprobe.html") + "?test=" + encodeURIComponent(t.id); }
    },
    {
      key: "nt7", subject: "Natur und Technik", stufen: [7], liste: "NT7",
      listPath: "/api/nt7/list", unlockPath: "/api/nt7/teacher/unlock", vorschauBasis: "7M/NT/",
      /* Proben 1 bis 4 gibt es je Zug (t.zug = "R" oder "M"); die beiden ersten Luft-Proben sind für 7M */
      klasse: function (t) { return t.zug ? "7" + t.zug : "7M"; }, link: function () { return "7M/NT/lehrer.html"; },
      schueler: function (t) {
        return t.zug ? "7M/NT/probe.html?test=" + encodeURIComponent(t.id) + "&zug=" + t.zug
          : "7M/NT/probe.html?probe=" + (/-2$/.test(t.id) ? "2" : "1");
      }
    },
    {
      /* NT 8: je Themenbereich eine Probe über seine Module – für 8R und 8M (t.zug), Variante A und Nachschreibprobe B
         (t.variante). Beginn und Zwischenstand liegen auf dem Server; die KI korrigiert vor, die Lehrkraft prüft und
         gibt die korrigierte Probe zurück (Lehrerseite 8M/NT/lehrer.html). */
      key: "nt8", subject: "Natur und Technik", stufen: [8], liste: "NT8",
      listPath: "/api/nt8/list", unlockPath: "/api/nt8/teacher/unlock",
      vorschauPath: "/api/nt8/teacher/vorschau", vorschauBasis: "8M/NT/", vorschauLabor: "8M/NT/",
      klasse: function (t) { return "8" + (t.zug || ""); }, link: function (t) { return "8M/NT/lehrer.html?test=" + encodeURIComponent(t.id); },
      schueler: function (t) { return "8M/NT/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      /* Informatik 7: je Modul eine Probe, in einer Fassung für 7R und für 7M (t.zug) */
      key: "inf7", subject: "Informatik", stufen: [7], liste: "INF7",
      listPath: "/api/inf7/list", unlockPath: "/api/inf7/teacher/unlock", vorschauBasis: "7M/Informatik/",
      klasse: function (t) { return "7" + (t.zug || ""); }, link: function () { return "7M/Informatik/lehrer.html"; },
      schueler: function (t) { return "7M/Informatik/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      /* Der Argumentationstrainer kennt keine Freischaltung - er ist
         immer offen. Er steht in der Verwaltung nur als Hinweis mit Link. */
      key: "de7-argument", subject: "Deutsch", noUnlock: true, stufen: [7],
      title: "Argumentation üben (immer offen)",
      listPath: null, unlockPath: null,
      klasse: function () { return "7"; }, link: function () { return "7M/Deutsch/lehrer.html"; },
      schueler: function () { return "7M/Deutsch/argumentationstrainer.html"; }
    },
    {
      /* Deutsch 7: Proben 1 bis 8, je für 7R und 7M (t.zug) und in Variante A und B (B = Nachschreiber, für die
         Kinder erst sichtbar, wenn sie offen ist – die Verwaltung fragt deshalb mit „alle=1“). Die KI korrigiert
         vor, die Lehrkraft prüft und gibt die korrigierte Probe zurück (Lehrerseite proben-lehrer.html). */
      key: "d7proben", subject: "Deutsch", stufen: [7], liste: "D7",
      listPath: "/api/d7/proben/list?alle=1", unlockPath: "/api/d7/proben/teacher/unlock",
      klasse: function (t) { return "7" + (t.zug || ""); }, link: function (t) { return "7M/Deutsch/proben-lehrer.html?nr=" + t.nr; },
      schueler: function (t) { return "7M/Deutsch/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      /* Deutsch 8: Proben 1 bis 8, je für 8R und 8M und in Variante A und B – derselbe Ablauf wie Deutsch 7
         (KI-Vorkorrektur, Prüfung durch die Lehrkraft, Rückgabe), dazu Zeit und Zwischenstand auf dem Server. */
      key: "d8proben", subject: "Deutsch", stufen: [8], liste: "D8",
      listPath: "/api/d8/proben/list?alle=1", unlockPath: "/api/d8/proben/teacher/unlock",
      klasse: function (t) { return "8" + (t.zug || ""); }, link: function (t) { return "8/Deutsch/proben-lehrer.html?nr=" + t.nr; },
      schueler: function (t) { return "8/Deutsch/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      /* Englisch 9R: die großen Proben – eine je Unit, Variante A und Nachschreiber B. Derselbe Ablauf wie Deutsch 8
         (KI-Vorkorrektur, Prüfung durch die Lehrkraft, Rückgabe, Zeit und Zwischenstand auf dem Server), dazu ein
         Hörteil. Unter welcher Unit eine Probe steht, sagt die Liste (9R/Englisch/themen.js: proben). */
      key: "e9proben", subject: "Englisch", stufen: [9], liste: "E9R",
      listPath: "/api/e9/proben/list?alle=1", unlockPath: "/api/e9/proben/teacher/unlock",
      klasse: function () { return "9R"; }, link: function (t) { return "9R/Englisch/proben-lehrer.html?nr=" + t.nr; },
      schueler: function (t) { return "9R/Englisch/probe.html?test=" + encodeURIComponent(t.id) + "&zug=R"; }
    },
    {
      key: "infoaustausch", subject: "Informatik", stufen: [7],
      listPath: "/api/infoaustausch/list", unlockPath: "/api/infoaustausch/unlock",
      klasse: function () { return "7"; }, link: function () { return "7/Informatik_7/probe/lehrer.html"; },
      schueler: function () { return "7/Informatik_7/probe/probe.html"; }
    },
    {
      /* Informatik 8, Version 2: je Modul eine Probe, in einer Fassung für 8R und für 8M (t.zug) */
      key: "inf8", subject: "Informatik", stufen: [8], liste: "INF8",
      listPath: "/api/inf8/list", unlockPath: "/api/inf8/teacher/unlock", vorschauBasis: "8M/Informatik/",
      klasse: function (t) { return "8" + (t.zug || ""); }, link: function () { return "8M/Informatik/lehrer.html"; },
      schueler: function (t) { return "8M/Informatik/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      /* NT 9M/9R: Probe Organische Rohstoffe (Module 1-7), je eine Fassung pro Zug */
      /* Modulliste je Zug (9M/NT_9/themen.js, 9R/NT_9/themen.js): Die Probe steht beim Freischalten unter den Modulen O1 bis O7 */
      key: "nt9probe", subject: "Natur und Technik", stufen: [9], liste: function (t) { return /^nt9r-/.test(t.id) ? "NT9R" : "NT9M"; },
      listPath: "/api/nt9probe/list", unlockPath: "/api/nt9probe/unlock",
      vorschauBasis: function (t) { return nt9Zug(t) + "/NT_9/App12_Organische_Rohstoffe/"; },
      klasse: nt9Zug,
      link: function (t) { return nt9Zug(t) + "/NT_9/App12_Organische_Rohstoffe/lehrer.html"; },
      schueler: function (t) { return nt9Zug(t) + "/NT_9/App12_Organische_Rohstoffe/probe.html?test=" + encodeURIComponent(t.id); }
    },
    {
      key: "netzwerktest", subject: "Informatik", stufen: [9],
      listPath: "/api/netzwerktest/list", unlockPath: "/api/netzwerktest/unlock", vorschauBasis: "9/Informatik_9/Netzwerke/",
      klasse: function () { return "9"; }, link: function () { return "9/Informatik_9/Netzwerke/lehrer.html"; },
      schueler: function () { return "9/Informatik_9/Netzwerke/probe.html"; }
    },
    {
      key: "filiuspruefung", subject: "Informatik", stufen: [9],
      listPath: "/api/filiuspruefung/list", unlockPath: "/api/filiuspruefung/unlock",
      klasse: function () { return "9"; }, link: function () { return "9/Informatik_9/Filius/lehrer.html"; },
      schueler: function () { return "9/Informatik_9/Filius/pruefung.html"; }
    }
  ];

  /* Module, die eine Probe enthält: [{ kz, titel }] – aus der Modulliste des Fachs (probeModule in themen.js) */
  function probeInhalt(mod, test) {
    if (!mod) return [];
    if (mod.inhalt) return mod.inhalt(test) || [];
    var L = mod.liste && global[typeof mod.liste === "function" ? mod.liste(test) : mod.liste];
    return L && L.probeModule ? L.probeModule(test.id).map(function (m) { return { kz: m.kz || "", titel: m.titel }; }) : [];
  }

  /* Steht die Probe in der Freischalt-Liste ihres Fachs schon unter Modulen? (Dann braucht sie beim Fach keine eigene
     Karte.) Englisch nennt den Bereich über die Test-ID (probeThemen), sonst zählen die enthaltenen Module. */
  function beiModulen(mod, test) {
    var L = mod && mod.liste && global[typeof mod.liste === "function" ? mod.liste(test) : mod.liste];
    if (!L || !L.probeModule) return false;
    return L.probeThemen ? L.probeThemen(test.id).length > 0 : L.probeModule(test.id).length > 0;
  }

  global.GrumiProbenModule = { MODULES: MODULES, idKlasse: idKlasse, englischSeite: englischSeite, probeInhalt: probeInhalt, beiModulen: beiModulen };
})(window);
