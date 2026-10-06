/* Informatik 8 (8M und 8R): die fünf Module und ihre Einheiten an einer Stelle.
 * Genutzt von der Übersicht (../../7M/Informatik/uebersicht.js), den Einheiten (../../7M/NT/modul-basis.js) und der
 * Verwaltung (nt7-verwaltung.js in proben-verwalten.html). Aufbau und Logik wie 7M/Informatik/themen.js:
 *   Thema  = Modul des Jahresplans (z. B. „Excel Grundlagen“), proben = Kennungen der Proben auf dem Server,
 *            {R: …, M: …} = je Zug eine Fassung
 *   Modul  = Einheit von etwa 40 Minuten (eine Seite in diesem Ordner)
 *            id   = Kennung im Lernstand („i8-<id>“) und in der Freischaltung
 *            key  = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-i8-<id>-v1“)
 *            href = Datei in 8M/Informatik; fehlt sie, steht die Einheit als „in Vorbereitung“ in der Übersicht
 *            pc   = Programm, für das ein Windows-PC nötig ist (Excel, Scratch)
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Module oder einzelne Einheiten frei (Server /api/inf8/freigabe).
 * Ein Eintrag für die Einheit geht vor dem Eintrag ihres Moduls; ohne Eintrag ist eine Einheit gesperrt.
 * Neue Einheit: hier eintragen – dann steht sie in Übersicht, Verwaltung und Lernstand.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "infosys", nr: "01", titel: "Digitale Informationssysteme", kurz: "Informationssysteme", icon: "🔎", zeit: "September bis Oktober",
      text: "Suchmaschine, Fahrplan, Lernplattform, Berufsportal: Du findest heraus, wie solche Systeme arbeiten, und nutzt sie für kluge Entscheidungen.",
      proben: [{ R: "inf8-p1-r", M: "inf8-p1-m" }],
      module: [
        { id: "eva", titel: "Was ist ein Informationssystem?", href: "eva.html", key: "grumi-i8-eva-v1",
          text: "Du fragst, das System antwortet: Eingabe, Verarbeitung, Ausgabe – an einer Fahrplanauskunft zum Ausprobieren.",
          tags: ["Fahrplan ausprobieren", "Animation", "Tablet geeignet"] },
        { id: "aufbau", titel: "Aufbau eines Informationssystems", href: "aufbau.html", key: "grumi-i8-aufbau-v1",
          text: "Nutzer, Anwendung, Server, Daten: Du verfolgst eine Anfrage auf ihrem Weg und findest heraus, wo es klemmt.",
          tags: ["Anfrage verfolgen", "Fehler finden", "Tablet geeignet"] },
        { id: "entscheiden", titel: "Informationen gezielt nutzen", href: "entscheiden.html", key: "grumi-i8-entscheiden-v1",
          text: "Welcher Praktikumsplatz passt? Du filterst, vergleichst und triffst eine Entscheidung, die du begründen kannst.",
          tags: ["Berufsportal", "Filtern und sortieren", "Tablet geeignet"] },
        { id: "vergleichen", titel: "Informationssysteme vergleichen", href: "vergleichen.html", key: "grumi-i8-vergleichen-v1",
          text: "Für jede Aufgabe das passende System: Du wählst aus, bewertest und zeigst im Profi-Check, was du kannst.",
          tags: ["Fälle entscheiden", "Kreuzworträtsel", "Probenstoff"] }
      ]
    },
    {
      id: "daten", nr: "02", titel: "Datenschutz und Big Data", kurz: "Datenschutz", icon: "🛡️", zeit: "November bis Dezember",
      text: "Welche Daten gibst du preis, was machen Unternehmen damit – und wie behältst du die Kontrolle?",
      proben: [{ R: "inf8-p2-r", M: "inf8-p2-m" }],
      module: [
        { id: "spuren", titel: "Welche Daten gebe ich preis?", href: "spuren.html", key: "grumi-i8-spuren-v1",
          text: "Name, Standort, Fotos, Suchverlauf: Ein ganz normaler Tag – und wie viele Daten dabei zusammenkommen.",
          tags: ["Datenspuren sammeln", "Anmeldung ausfüllen", "Tablet geeignet"] },
        { id: "bedingungen", titel: "Datenschutzbedingungen", href: "bedingungen.html", key: "grumi-i8-bedingungen-v1",
          text: "Niemand liest sie – du schon: kurze Ausschnitte prüfen. Was wird gesammelt, wozu, und wem nützt es?",
          tags: ["Texte prüfen", "Stellen finden", "Tablet geeignet"] },
        { id: "bigdata", titel: "Big Data", href: "bigdata.html", key: "grumi-i8-bigdata-v1",
          text: "Viele kleine Daten ergeben ein genaues Bild von dir. Du siehst zu, wie ein Profil entsteht.",
          tags: ["Animation", "Empfehlungs-Maschine", "Tablet geeignet"] },
        { id: "schuetzen", titel: "Wie schütze ich meine Daten?", href: "schuetzen.html", key: "grumi-i8-schuetzen-v1",
          text: "Berechtigungen, Standort, Cookies, Privatsphäre: Du stellst ein Handy so ein, dass es weniger verrät.",
          tags: ["Einstellungen üben", "Kreuzworträtsel", "Probenstoff"] }
      ]
    },
    {
      id: "excel1", nr: "03", titel: "Excel Grundlagen", kurz: "Excel Grundlagen", icon: "📊", zeit: "Januar bis Februar", pc: "Excel",
      text: "Zellen, Zeilen, Spalten und erste Formeln: Du lässt Excel für dich rechnen.",
      proben: [{ R: "inf8-p3-r", M: "inf8-p3-m" }],
      module: [
        { id: "kennenlernen", titel: "Excel kennenlernen", href: "kennenlernen.html", key: "grumi-i8-kennenlernen-v1", pc: "Excel",
          text: "Zelle, Zeile, Spalte, Zelladresse, Arbeitsblatt: Du findest dich in Excel zurecht.",
          tags: ["Excel", "Datei hochladen", "Tabelle zum Antippen"] },
        { id: "eingeben", titel: "Daten eingeben", href: "eingeben.html", key: "grumi-i8-eingeben-v1", pc: "Excel",
          text: "Du legst deine erste kleine Tabelle an: Texte, Zahlen, Überschriften – und speicherst sie.",
          tags: ["Excel", "Startdatei"] },
        { id: "formeln", titel: "Erste Formeln", href: "formeln.html", key: "grumi-i8-formeln-v1", pc: "Excel",
          text: "Plus, minus, mal, geteilt: Mit dem Gleichheitszeichen rechnet Excel für dich.",
          tags: ["Excel", "Startdatei"] },
        { id: "kopieren", titel: "Formeln kopieren", href: "kopieren.html", key: "grumi-i8-kopieren-v1", pc: "Excel",
          text: "Eine Formel schreiben, zwanzigmal benutzen: Excel passt die Zellbezüge beim Kopieren an.",
          tags: ["Excel", "Animation"] },
        { id: "anwendung", titel: "Kleine Anwendung", href: "anwendung.html", key: "grumi-i8-anwendung-v1", pc: "Excel",
          text: "Was kostet das Klassenfest? Du baust eine Tabelle, die alles ausrechnet.",
          tags: ["Excel", "Datei hochladen", "Probenstoff"] }
      ]
    },
    {
      id: "excel2", nr: "04", titel: "Excel: Zellbezüge und Anwendungen", kurz: "Excel Zellbezüge", icon: "🔢", zeit: "März bis April", pc: "Excel",
      text: "Relative und absolute Zellbezüge, Prozentrechnung und ein eigenes kleines Projekt.",
      proben: [{ R: "inf8-p4-r", M: "inf8-p4-m" }],
      module: [
        { id: "relativ", titel: "Relative Zellbezüge", href: "relativ.html", key: "grumi-i8-relativ-v1", pc: "Excel",
          text: "Die Formel wandert mit: Was beim Kopieren nach unten und nach rechts passiert.",
          tags: ["Excel", "Datei hochladen", "Animation"] },
        { id: "absolut", titel: "Absolute Zellbezüge", href: "absolut.html", key: "grumi-i8-absolut-v1", pc: "Excel",
          text: "Manchmal soll eine Zelle fest bleiben. Das Dollarzeichen hält sie fest.",
          tags: ["Excel", "Datei hochladen", "Animation"] },
        { id: "relativ-absolut", titel: "Relativ oder absolut?", href: "relativ-absolut.html", key: "grumi-i8-relativ-absolut-v1",
          text: "Viele kurze Entscheidungen: Wo gehört ein Dollarzeichen hin – und wo nicht?",
          tags: ["Fälle entscheiden", "Tablet geeignet"] },
        { id: "prozent", titel: "Prozentrechnung mit Excel", href: "prozent.html", key: "grumi-i8-prozent-v1", pc: "Excel",
          text: "Anteil und Rabatt: Was du aus Mathe kennst, rechnet jetzt die Tabelle.",
          tags: ["Excel", "Datei hochladen"] },
        { id: "miniprojekt", titel: "Mini-Projekt", href: "miniprojekt.html", key: "grumi-i8-miniprojekt-v1", pc: "Excel",
          text: "Die Abrechnung für den Pausenverkauf: deine eigene Tabelle von Anfang bis Ende.",
          tags: ["Excel", "Datei hochladen", "Probenstoff"] }
      ]
    },
    {
      id: "scratch", nr: "05", titel: "Programmieren mit Scratch", kurz: "Scratch", icon: "🐱", zeit: "Mai bis Juli", pc: "Scratch",
      text: "Programme, die fragen, rechnen und antworten: Eingabe, Variablen, Bedingungen – bis zum eigenen kleinen Projekt.",
      proben: [{ R: "inf8-p5-r", M: "inf8-p5-m" }],
      module: [
        { id: "scratch-start", titel: "Wieder da: Scratch", href: "scratch-start.html", key: "grumi-i8-scratch-start-v1", pc: "Scratch",
          text: "Blöcke, Bühne, grüne Fahne: Du findest dich wieder zurecht und baust dein erstes Programm.",
          tags: ["Scratch", "Projekt hochladen", "Bühne zum Ausprobieren"] },
        { id: "objekte", titel: "Objekte und Eigenschaften", href: "objekte.html", key: "grumi-i8-objekte-v1", pc: "Scratch",
          text: "Jede Figur ist ein Objekt mit Eigenschaften: Position, Größe, Richtung. Blöcke ändern ihre Werte – und du erstellst ein zweites Objekt.",
          tags: ["Scratch", "Projekt hochladen"] },
        { id: "eingabe", titel: "Eingabe", href: "eingabe.html", key: "grumi-i8-eingabe-v1", pc: "Scratch",
          text: "„Wie heißt du?“ – dein Programm fragt und wartet auf deine Antwort.",
          tags: ["Scratch", "Projekt hochladen"] },
        { id: "ausgabe", titel: "Ausgabe", href: "ausgabe.html", key: "grumi-i8-ausgabe-v1", pc: "Scratch",
          text: "„Hallo Mia!“ – dein Programm setzt Texte zusammen und antwortet.",
          tags: ["Scratch", "Projekt hochladen"] },
        { id: "variablen", titel: "Variablen und Dateneingabe", href: "variablen.html", key: "grumi-i8-variablen-v1", pc: "Scratch",
          text: "Zwei Antworten merken und mit einer Eingabe rechnen: Dein Programm bekommt ein Gedächtnis.",
          tags: ["Scratch", "Projekt hochladen", "Animation"] },
        { id: "verzweigung", titel: "Bedingungen und Verschachtelung", href: "verzweigung.html", key: "grumi-i8-verzweigung-v1", pc: "Scratch",
          text: "Richtig oder falsch? Dein Programm entscheidet – auch in zwei Stufen.",
          tags: ["Scratch", "Projekt hochladen"] },
        { id: "zahlenraten", titel: "Mini-Anwendung: Zahlenraten", href: "zahlenraten.html", key: "grumi-i8-zahlenraten-v1", pc: "Scratch",
          text: "Der Computer denkt sich eine Zahl, du rätst. Eingabe, Vergleich und Wiederholung in einem Spiel.",
          tags: ["Scratch", "Projekt hochladen", "Spiel"] },
        { id: "eigenes-projekt", titel: "Mein eigenes kleines Projekt", href: "eigenes-projekt.html", key: "grumi-i8-eigenes-projekt-v1", pc: "Scratch",
          text: "Quiz, Rechentrainer oder eigene Idee: Du planst, baust und testest ein eigenes Programm.",
          tags: ["Scratch", "Projekt hochladen", "Probenstoff"] }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var PREFIX = "grumi-i8-";
  var SPEICHER = "grumi-i8-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt eine Einheit, auch wenn sie für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  function modulVon(id) {
    for (var i = 0; i < THEMEN.length; i++) for (var j = 0; j < THEMEN[i].module.length; j++) {
      if (THEMEN[i].module[j].id === id) return { modul: THEMEN[i].module[j], thema: THEMEN[i], nr: j + 1 };
    }
    return null;
  }
  // „grumi-i8-relativ-absolut-v1“ -> „relativ-absolut“
  function idAusKey(key) { return String(key || "").replace(/^grumi-i8-/, "").replace(/-v\d+$/, ""); }

  // Ist die Einheit für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
  function offen(modul, thema, stand) {
    if (VORSCHAU) return true;
    // Lehrercode: Der Server meldet „alles“ – dann ist jedes Modul offen, auch Extra-Module
    if (stand && stand.alles) return true;
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
    global.fetch(API + "/api/inf8/freigabe", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: anmeldung.code }),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) { return r.json().then(function (d) { d.status = r.status; return d; }); }).then(function (d) {
      if (!d.ok) throw new Error(d.error || "Fehler " + d.status);
      var stand = { themen: d.themen || {}, module: d.module || {}, klasse: d.klasse, zeit: Date.now() };
      if (d.alles) stand.alles = true;
      try { global.localStorage.setItem(SPEICHER + d.klasse, JSON.stringify(stand)); } catch (_e) {}
      cb(stand, "server");
    }).catch(function () {
      if (fehler) fehler(alt ? "" : "Der Server antwortet gerade nicht. Was freigeschaltet ist, lässt sich nicht prüfen.", false);
    }).then(function () { clearTimeout(zeit); clearTimeout(langsam); });
  }

  // Zug des Kindes: aus der Anmeldung („8M“/„8R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab
  function zug(anmeldung) {
    var z = anmeldung && /^8[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-i8-zug", z);
      else z = global.sessionStorage.getItem("grumi-i8-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.INF8 = {
    THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug,
    // Angaben für die gemeinsamen Bausteine (7M/NT/modul-basis.js) und die Übersicht (7M/Informatik/uebersicht.js)
    KURS: "i8", PREFIX: PREFIX, WORT: "Einheit", DAS: "die Einheit", ES: "sie", STUFE: "8", PFAD: "/api/inf8",
    SPERRE: "Diese Einheit ist noch nicht freigeschaltet", ZURUECK: "💻 Zur Übersicht Informatik 8",
    ALT: null,          // die bisherigen Module (8/Informatik_8) sind seit dem 06.10.2026 entfernt
    INTRO: "Fünf Module mit kurzen Einheiten: ausprobieren, anwenden, verstehen, sichern. Bei Excel und Scratch arbeitest du am Windows-PC. Deine Lehrkraft schaltet die Einheiten nach und nach frei.",
    NOCH_NICHTS: "Für deine Klasse ist hier noch nichts freigeschaltet. Deine Lehrkraft schaltet die Einheiten frei.",
    OHNE_CODE: "Ohne Code ist hier noch nichts offen. Melde dich oben mit deinem Code an."
  };
  // Auf den Seiten von Informatik 8 arbeiten die Bausteine mit dieser Liste. Die Verwaltung der Lehrkraft lädt
  // mehrere Kurslisten und spricht sie mit ihrem Namen an (INF8, INF7, NT7).
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.INF8;
})(window);
