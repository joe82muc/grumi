/* Deutsch 7 (7M und 7R): die drei Themenbereiche und ihre Module an einer Stelle.
 * Genutzt von der Übersicht (index.html mit uebersicht.js), den Modulseiten (de-modul.js, app.js, Grammatik/themen.js,
 * Rechtschreibung/themen.js) und der Verwaltung (nt7-verwaltung.js in proben-verwalten.html).
 * Aufbau und Logik wie 7M/NT/themen.js:
 *   Thema  = Themenbereich (Argumentieren, Grammatik, Rechtschreibung)
 *   Modul  = eine Seite in diesem Ordner
 *            id    = Kennung in der Freischaltung; der Lernstand heißt „d7-<id>“
 *            key   = Speicherschlüssel des Fortschritts auf dem Gerät
 *            href  = Datei in 7M/Deutsch
 *            basis, plus = Zahl der Aufgaben (Grammatik und Rechtschreibung; Plus ist für R-Klassen freiwillig)
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Themenbereiche oder einzelne Module frei (Verwaltung → Klasse →
 * Deutsch, Server /api/d7/freigabe). Ein Eintrag für das Modul geht vor dem Eintrag seines Themenbereichs; ohne
 * Eintrag ist ein Modul gesperrt. Das ist eine Lernsteuerung, kein Geheimnisschutz.
 * Neues Modul: hier eintragen – dann steht es in Übersicht und Verwaltung.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "argumentieren", nr: "01", titel: "Argumentieren und diskutieren", kurz: "Argumentieren", icon: "🗣️",
      text: "Meinungen begründen, auf andere eingehen, fair streiten und überzeugen – vom einzelnen Argument bis zur ganzen Diskussion.",
      module: [
        { id: "argumentationstrainer", titel: "Argumentations-Führerschein", href: "argumentationstrainer.html", tab: "Grundkurs", grund: true, trainer: true,
          text: "In vier Stufen vom einzelnen Argument zur freien Argumentation: Argument bauen, zwei Seiten sehen, Argument-Duell und eigener Text. Ab zwei Sternen geht es weiter.",
          tags: ["8 Streitfragen", "✨ KI-Feedback", "Führerschein"] },
        { id: "argumente-formulieren", titel: "Argumente formulieren", href: "argumente-formulieren.html", key: "grumi-de7-argumente-formulieren-v1", tab: "Sprache",
          text: "Radtour mit Übernachtung – ja oder nein? Pro und Kontra sortieren, Behauptung, Begründung und Beispiel markieren, mit Konjunktionen auf andere eingehen.",
          tags: ["Markieren", "✨ KI prüft Freitexte", "⚔️ Duell gegen die KI"] },
        { id: "angemessen-ausdruecken", titel: "Sich angemessen ausdrücken", href: "angemessen-ausdruecken.html", key: "grumi-de7-angemessen-ausdruecken-v1", tab: "Sprache",
          text: "Kränkende Sätze erkennen und freundlicher sagen, unsachliche Stellen im Streitgespräch finden, Ich-Botschaften statt Du-Botschaften.",
          tags: ["Ich-Botschaften", "✨ KI prüft Freitexte", "🧯 Streit-Entschärfer-Duell"] },
        { id: "ueberzeugend-argumentieren", titel: "Überzeugend argumentieren", href: "ueberzeugend-argumentieren.html", key: "grumi-de7-ueberzeugend-argumentieren-v1", tab: "Anwenden",
          text: "Tag ohne Technik oder Übernachtung im Schulhaus: Pro- und Kontra-Argumente notieren, Einwände entkräften, Text ausformulieren, Körpersprache, Feedback.",
          tags: ["Checkliste", "✨ KI prüft Freitexte", "⚔️ Duell gegen die KI"] },
        { id: "sachlich-diskutieren", titel: "Sachlich diskutieren", href: "sachlich-diskutieren.html", key: "grumi-de7-sachlich-diskutieren-v1", tab: "Anwenden",
          text: "Wer entscheidet, was wir lesen? Diskussion vorbereiten, mit dem Beobachtungsbogen arbeiten, Diskussionsleitung, Diskussion mit KI-Mitschülern und Auswertung.",
          tags: ["Beobachtungsbogen", "✨ KI prüft Freitexte", "🗣️ KI-Diskussion"] },
        { id: "tisch-duell", titel: "Tisch-Duell zu zweit", href: "tisch-duell.html", key: "grumi-de7-tisch-duell-v1", tab: "Partnerarbeit",
          text: "Zwei an einem Tisch, jeder am eigenen iPad: Einer ist dafür, einer dagegen. Ihr schickt euch abwechselnd Argumente – die KI prüft jeden Beitrag, bevor er beim Partner ankommt.",
          tags: ["👥 Zu zweit am Tisch", "✨ KI prüft jeden Beitrag", "⚔️ Pro gegen Kontra"] }
      ]
    },
    {
      id: "grammatik", nr: "02", titel: "Grammatik", kurz: "Grammatik", icon: "✍️",
      text: "Sieben Themen nach dem Lehrplan: erst die Merkkästen lesen, dann üben. Basis für alle, Plus für den M-Zug – für R-Klassen freiwillig.",
      module: [
        { id: "gr-01", titel: "Wortarten und Pronomen", href: "Grammatik/gr_01.html", key: "grumi-d7-gr-01", basis: 6, plus: 4,
          text: "Wortarten wiederholen, Demonstrativ- und Relativpronomen, Relativsätze bilden." },
        { id: "gr-02", titel: "Zeitformen bis Futur II", href: "Grammatik/gr_02.html", key: "grumi-d7-gr-02", basis: 6, plus: 4,
          text: "Alle sechs Zeitformen bilden und bestimmen – neu: das Futur II." },
        { id: "gr-03", titel: "Aktiv und Passiv", href: "Grammatik/gr_03.html", key: "grumi-d7-gr-03", basis: 6, plus: 4,
          text: "Wer handelt, was passiert? Das Passiv bilden und Sätze umformen." },
        { id: "gr-04", titel: "Konjunktiv", href: "Grammatik/gr_04.html", key: "grumi-d7-gr-04", basis: 6, plus: 4,
          text: "Konjunktiv I für die indirekte Rede – im M-Zug auch Konjunktiv II." },
        { id: "gr-05", titel: "Satzglieder und Kausaladverbiale", href: "Grammatik/gr_05.html", key: "grumi-d7-gr-05", basis: 6, plus: 3,
          text: "Umstellprobe, Satzglieder bestimmen, Adverbiale des Grundes, Satz-Detektiv." },
        { id: "gr-06", titel: "Satzreihe und Satzgefüge", href: "Grammatik/gr_06.html", key: "grumi-d7-gr-06", basis: 6, plus: 3,
          text: "Haupt- und Nebensatz, Sätze verbinden, Kommas setzen." },
        { id: "gr-07", titel: "Gliedsätze", href: "Grammatik/gr_07.html", key: "grumi-d7-gr-07", basis: 6, plus: 3,
          text: "Subjektsatz und Objektsatz – im M-Zug auch Adverbialsätze." }
      ]
    },
    {
      id: "rechtschreibung", nr: "03", titel: "Rechtschreibung", kurz: "Rechtschreibung", icon: "📝",
      text: "Sieben Themen mit Strategien, Regeln und vielen Übungen. Jede Karte zeigt dir ein kurzes Beispiel.",
      module: [
        { id: "rs-01", titel: "Rechtschreibstrategien", href: "Rechtschreibung/rs_01.html", key: "grumi-d7-rs-01", basis: 6, plus: 3, icon: "🧭",
          bsp: "Hun<b>d</b> → Hun-<b>d</b>e · B<b>äu</b>me ← B<b>au</b>m" },
        { id: "rs-02", titel: "Groß- und Kleinschreibung", href: "Rechtschreibung/rs_02.html", key: "grumi-d7-rs-02", basis: 6, plus: 3, icon: "🔠",
          bsp: "beim <b>S</b>chwimmen · etwas <b>N</b>eues · <b>a</b>bends" },
        { id: "rs-03", titel: "Getrennt oder zusammen?", href: "Rechtschreibung/rs_03.html", key: "grumi-d7-rs-03", basis: 5, plus: 2, icon: "🔗",
          bsp: "<b>Rad fahren</b> · <b>mit</b>nehmen · <b>irgend</b>wo" },
        { id: "rs-04", titel: "s-Laute und das/dass", href: "Rechtschreibung/rs_04.html", key: "grumi-d7-rs-04", basis: 6, plus: 3, icon: "🐍",
          bsp: "Ro<b>s</b>e · Wa<b>ss</b>er · Stra<b>ß</b>e · Ich hoffe, <b>dass</b> …" },
        { id: "rs-05", titel: "Fremdwörter und Merkwörter", href: "Rechtschreibung/rs_05.html", key: "grumi-d7-rs-05", basis: 6, plus: 3, icon: "🌍",
          bsp: "<b>Th</b>eater · Phy<b>sik</b> · U<b>h</b>r · M<b>ee</b>r" },
        { id: "rs-06", titel: "Kommasetzung", href: "Rechtschreibung/rs_06.html", key: "grumi-d7-rs-06", basis: 6, plus: 3, icon: "✒️",
          bsp: "Ich weiß<b>,</b> dass du recht hast." },
        { id: "rs-07", titel: "Worttrennung", href: "Rechtschreibung/rs_07.html", key: "grumi-d7-rs-07", basis: 5, plus: 2, icon: "✂️",
          bsp: "Zu-<b>ck</b>er · Fens-ter · Was-ser" }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var SPEICHER = "grumi-d7-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt ein Modul, auch wenn es für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  function modulVon(id) {
    for (var i = 0; i < THEMEN.length; i++) for (var j = 0; j < THEMEN[i].module.length; j++) {
      if (THEMEN[i].module[j].id === id) return { modul: THEMEN[i].module[j], thema: THEMEN[i], nr: j + 1 };
    }
    return null;
  }

  // Ist das Modul für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
  function offen(modul, thema, stand) {
    if (VORSCHAU) return true;
    var s = stand || {}, m = (s.module || {})[modul.id], t = (s.themen || {})[thema.id];
    if (m === true || m === false) return m;
    if (t === true || t === false) return t;
    return Boolean(modul.offen);
  }

  function liesSpeicher(klasse) {
    try { return JSON.parse(global.localStorage.getItem(SPEICHER + klasse) || "null"); } catch (_e) { return null; }
  }
  // Stand der Klasse holen. cb(stand, quelle) kommt bis zu zweimal: sofort aus dem Speicher des Geräts
  // (quelle "speicher"), dann vom Server ("server"). Ohne Anmeldung: cb(null, "gast").
  // Antwortet der Server nicht, bleibt es beim Speicher; fehler(text) meldet das (z. B. „Server wacht auf“).
  function freigabe(anmeldung, cb, fehler) {
    if (!anmeldung || !anmeldung.code) { cb(null, "gast"); return; }
    var alt = liesSpeicher(anmeldung.klasse);
    if (alt) cb(alt, "speicher");
    var ctl = global.AbortController ? new AbortController() : null;
    var zeit = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = setTimeout(function () { if (fehler) fehler("Der Server wacht gerade auf – das kann bis zu einer Minute dauern.", true); }, 6000);
    global.fetch(API + "/api/d7/freigabe", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: anmeldung.code }),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) { return r.json().then(function (d) { d.status = r.status; return d; }); }).then(function (d) {
      if (!d.ok) throw new Error(d.error || "Fehler " + d.status);
      var stand = { themen: d.themen || {}, module: d.module || {}, klasse: d.klasse, zeit: Date.now() };
      try { global.localStorage.setItem(SPEICHER + d.klasse, JSON.stringify(stand)); } catch (_e) {}
      cb(stand, "server");
    }).catch(function () {
      if (fehler) fehler(alt ? "" : "Der Server antwortet gerade nicht. Was freigeschaltet ist, lässt sich nicht prüfen.", false);
    }).then(function () { clearTimeout(zeit); clearTimeout(langsam); });
  }

  /* ---------- Sperre auf einer Modulseite ----------
     Ist das Modul für die Klasse des Kindes nicht offen, verdeckt ein Hinweis den Inhalt. Erst gilt der zuletzt
     bekannte Stand des Geräts, dann der vom Server. Die Seite ruft D7.sperre(id, anmeldung, opt) auf – auch erneut,
     wenn sich die Anmeldung ändert. anmeldung: gültige Code-Anmeldung der Seite ({ code, klasse, zug }) oder null.
     opt: verstecken (CSS-Selektoren des Inhalts), vor (Element, vor dem der Hinweis steht), uebersicht und start
     (Links), anmelden (Funktion: öffnet die Code-Eingabe der Seite). */
  var lauf = 0;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function sperre(id, anmeldung, opt) {
    var doc = global.document, reg = modulVon(id);
    if (!reg || !doc.body) return;
    opt = opt || {};
    var nr = ++lauf;
    var stil = doc.getElementById("d7-sperre-stil");
    if (!stil) {
      stil = doc.createElement("style"); stil.id = "d7-sperre-stil";
      stil.textContent = (opt.verstecken || "main, .stations, .hero-cta").split(",").map(function (s) { return "body.d7-zu " + s.trim(); }).join(",") + "{display:none!important}" +
        ".d7-sperre{box-sizing:border-box;max-width:640px;margin:26px auto;padding:26px 22px;border:1px solid #ecc7cc;border-radius:20px;background:#fff;color:#2b2226;text-align:center;box-shadow:0 4px 18px rgba(60,20,30,.08);font-family:inherit}" +
        ".d7-sperre .big{font-size:3rem;line-height:1}.d7-sperre h2{margin:10px 0 6px;font-size:1.35rem}.d7-sperre p{margin:0 auto;max-width:46ch;color:#5f5257;line-height:1.5}" +
        ".d7-sperre nav{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:16px}" +
        ".d7-sperre nav a,.d7-sperre nav button{display:inline-block;padding:9px 16px;border:1.5px solid #ecc7cc;border-radius:999px;background:#fff;color:#8e2a37;font:700 .95rem inherit;font-family:inherit;text-decoration:none;cursor:pointer}" +
        ".d7-sperre nav button{background:#b23a48;border-color:#b23a48;color:#fff}" +
        ".d7-sperre-rand{padding:0 16px}" +
        ".d7-vorschau{background:#fff4dc;color:#7a5200;border-bottom:1px solid #f1d9a0;padding:8px 16px;font:700 .92rem system-ui,sans-serif;text-align:center}";
      doc.head.appendChild(stil);
    }
    if (VORSCHAU) {
      if (!doc.getElementById("d7Vorschau")) {
        var v = doc.createElement("div"); v.id = "d7Vorschau"; v.className = "d7-vorschau";
        v.textContent = "👁 Vorschau für Lehrkräfte – ob die Klasse dieses Modul sieht, steht in der Verwaltung.";
        doc.body.insertBefore(v, doc.body.firstChild);
      }
      return;
    }
    // art: "warten" (Stand wird geholt), "fehler" (Server antwortet nicht), sonst gesperrt
    function zeig(zu, text, art) {
      if (nr !== lauf) return;
      var box = doc.getElementById("d7Sperre");
      doc.body.classList.toggle("d7-zu", zu);
      if (!zu) { if (box) box.remove(); return; }
      if (!box) {
        box = doc.createElement("div"); box.id = "d7Sperre"; box.className = "d7-sperre-rand";
        var vor = opt.vor || doc.querySelector("main");
        if (vor && vor.parentNode) vor.parentNode.insertBefore(box, vor); else doc.body.appendChild(box);
      }
      box.innerHTML = '<div class="d7-sperre" role="status"><div class="big" aria-hidden="true">' + (art === "warten" ? "⏳" : art === "fehler" ? "📡" : "🔒") + "</div>" +
        "<h2>" + (art === "warten" ? "Einen Moment …" : art === "fehler" ? "Das lässt sich gerade nicht prüfen" : "„" + esc(reg.modul.titel) + "“ ist noch nicht freigeschaltet") + "</h2>" +
        "<p>" + esc(text) + "</p><nav>" +
        (art === "fehler" ? '<button type="button" data-d7="nochmal">↻ Noch einmal versuchen</button>' : "") +
        (!anmeldung && typeof opt.anmelden === "function" ? '<button type="button" data-d7="an">🔑 Mit Code anmelden</button>' : "") +
        '<a href="' + esc(opt.uebersicht || "index.html") + '">📚 Zur Übersicht Deutsch 7</a><a href="' + esc(opt.start || "../../index.html") + '">🏠 Startseite</a></nav></div>';
      var nochmal = box.querySelector('[data-d7="nochmal"]'), an = box.querySelector('[data-d7="an"]');
      if (nochmal) nochmal.addEventListener("click", function () { global.location.reload(); });
      if (an) an.addEventListener("click", function () { opt.anmelden(); });
    }
    if (!anmeldung || !anmeldung.code) {
      zeig(!offen(reg.modul, reg.thema, null), "Deine Lehrkraft schaltet die Module für deine Klasse frei. Melde dich mit deinem Code an, dann siehst du, was für dich offen ist.");
      return;
    }
    var bekannt = false;
    if (!reg.modul.offen) zeig(true, "Ich sehe nach, ob deine Lehrkraft das für deine Klasse freigeschaltet hat.", "warten");
    freigabe(anmeldung, function (stand) {
      bekannt = true;
      zeig(!offen(reg.modul, reg.thema, stand), "Deine Lehrkraft schaltet das frei, wenn ihr im Unterricht so weit seid. Frag sie, wenn du schon weiterlernen möchtest.");
    }, function (text, wachtAuf) {
      if (!bekannt && !reg.modul.offen) zeig(true, text || "Der Server antwortet gerade nicht. Versuche es gleich noch einmal.", wachtAuf ? "warten" : "fehler");
    });
  }

  global.D7 = {
    THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, offen: offen, freigabe: freigabe, sperre: sperre
  };
})(window);
