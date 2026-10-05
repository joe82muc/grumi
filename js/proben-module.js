/* Alle Proben-Module an einer Stelle – für die Verwaltung (proben-verwalten.html) und für die
 * Proben-Kachel auf der Startseite (js/klasse.js).
 *
 * Jede Probenart hat auf dem Server ein eigenes Modul mit eigenen Endpunkten.
 *   listPath   Liste der Proben mit „unlocked“ (ohne Passwort lesbar)
 *   unlockPath Freischalten/Sperren (nur Verwaltung, mit Lehrkraft-Passwort); weicht bei nt7 ab
 *   klasse     "7" = alle 7. Klassen, "7M"/"7R" = nur dieser Zug
 *   stufen     Jahrgangsstufen, in denen das Modul Proben haben kann (die Startseite fragt nur diese ab)
 *   link       Lehrerseite (Ergebnisse), schueler = Seite für die Kinder
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

  var MODULES = [
    {
      key: "vokabeltest", subject: "Englisch", stufen: [7, 8, 9],
      listPath: "/api/vokabeltest/list", unlockPath: "/api/vokabeltest/unlock",
      klasse: idKlasse, link: function (t) { return englischSeite(t, "test/lehrer.html"); },
      schueler: function (t) { return englischSeite(t, "test/vokabeltest.html") + "?test=" + encodeURIComponent(t.id); }
    },
    {
      /* Englisch 9R, 9M, 7M und 7R: Grammatikprobe und Grammatiktests G1-G4 (Unit 1) */
      key: "grammatik9r", subject: "Englisch", stufen: [7, 9],
      listPath: "/api/grammatik9r/list", unlockPath: "/api/grammatik9r/unlock",
      klasse: idKlasse, link: function (t) { return englischSeite(t, "probe/lehrer.html"); },
      schueler: function (t) { return englischSeite(t, "probe/grammatikprobe.html") + "?test=" + encodeURIComponent(t.id); }
    },
    {
      key: "nt7", subject: "Natur und Technik", stufen: [7],
      listPath: "/api/nt7/list", unlockPath: "/api/nt7/teacher/unlock",
      /* Proben 1 bis 4 gibt es je Zug (t.zug = "R" oder "M"); die beiden ersten Luft-Proben sind für 7M */
      klasse: function (t) { return t.zug ? "7" + t.zug : "7M"; }, link: function () { return "7M/NT/lehrer.html"; },
      schueler: function (t) {
        return t.zug ? "7M/NT/probe.html?test=" + encodeURIComponent(t.id) + "&zug=" + t.zug
          : "7M/NT/probe.html?probe=" + (/-2$/.test(t.id) ? "2" : "1");
      }
    },
    {
      /* Informatik 7: je Modul eine Probe, in einer Fassung für 7R und für 7M (t.zug) */
      key: "inf7", subject: "Informatik", stufen: [7],
      listPath: "/api/inf7/list", unlockPath: "/api/inf7/teacher/unlock",
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
      key: "infoaustausch", subject: "Informatik", stufen: [7],
      listPath: "/api/infoaustausch/list", unlockPath: "/api/infoaustausch/unlock",
      klasse: function () { return "7"; }, link: function () { return "7/Informatik_7/probe/lehrer.html"; },
      schueler: function () { return "7/Informatik_7/probe/probe.html"; }
    },
    {
      /* Informatik 8, Version 2: je Modul eine Probe, in einer Fassung für 8R und für 8M (t.zug) */
      key: "inf8", subject: "Informatik", stufen: [8],
      listPath: "/api/inf8/list", unlockPath: "/api/inf8/teacher/unlock",
      klasse: function (t) { return "8" + (t.zug || ""); }, link: function () { return "8M/Informatik/lehrer.html"; },
      schueler: function (t) { return "8M/Informatik/probe.html?test=" + encodeURIComponent(t.id) + (t.zug ? "&zug=" + t.zug : ""); }
    },
    {
      key: "informatik8", subject: "Informatik", stufen: [8],
      listPath: "/api/informatik8/list", unlockPath: "/api/informatik8/unlock",
      klasse: function () { return "8"; }, link: function () { return "8/Informatik_8/probe/lehrer.html"; },
      schueler: function () { return "8/Informatik_8/probe/probe.html"; }
    },
    {
      /* NT 9M/9R: Probe Organische Rohstoffe (Module 1-7), je eine Fassung pro Zug */
      key: "nt9probe", subject: "Natur und Technik", stufen: [9],
      listPath: "/api/nt9probe/list", unlockPath: "/api/nt9probe/unlock",
      klasse: nt9Zug,
      link: function (t) { return nt9Zug(t) + "/NT_9/App12_Organische_Rohstoffe/lehrer.html"; },
      schueler: function (t) { return nt9Zug(t) + "/NT_9/App12_Organische_Rohstoffe/probe.html"; }
    },
    {
      key: "netzwerktest", subject: "Informatik", stufen: [9],
      listPath: "/api/netzwerktest/list", unlockPath: "/api/netzwerktest/unlock",
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

  global.GrumiProbenModule = { MODULES: MODULES, idKlasse: idKlasse, englischSeite: englischSeite };
})(window);
