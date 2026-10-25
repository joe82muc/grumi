/* Informatik 9 (9M und 9R gemeinsam): die fünf Module und ihre Einheiten an einer Stelle.
 * Genutzt von der Übersicht (../../7M/Informatik/uebersicht.js), den Einheiten (../../7M/NT/modul-basis.js) und der
 * Verwaltung (nt7-verwaltung.js in proben-verwalten.html). Aufbau und Logik wie 8M/Informatik/themen.js:
 *   Thema  = Modul des Jahresplans (z. B. „Netzwerke mit Filius“), proben = Kennungen der Proben auf dem Server,
 *            {R: …, M: …} = je Zug eine Kennung – der INHALT ist für beide Züge derselbe (Auftrag vom 13.10.2026:
 *            R9 und M9 lernen dasselbe, schreiben dieselben Proben, Notenschlüssel R für beide: 50 % = Note 3)
 *   Modul  = Einheit von etwa 40 Minuten (eine Seite in diesem Ordner)
 *            id   = Kennung im Lernstand („i9-<id>“) und in der Freischaltung
 *            key  = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-i9-<id>-v1“)
 *            href = Datei in 9M/Informatik; fehlt sie, steht die Einheit als „in Vorbereitung“ in der Übersicht
 *            pc   = Programm, für das ein Windows-PC nötig ist (Filius, Excel, Scratch)
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Module oder einzelne Einheiten frei (Server /api/inf9/freigabe).
 * Ein Eintrag für die Einheit geht vor dem Eintrag ihres Moduls; ohne Eintrag ist eine Einheit gesperrt.
 * Neue Einheit: hier eintragen – dann steht sie in Übersicht, Verwaltung und Lernstand.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "netzwerke", nr: "01", titel: "Netzwerke mit Filius", kurz: "Netzwerke", icon: "🖧", zeit: "September bis November", pc: "Filius",
      text: "Computer verbinden, Adressen vergeben, Netze koppeln: Du baust Netzwerke im Simulationsprogramm Filius und findest Fehler.",
      // Probe 1b (25.10.2026): nur Einheit N1, mit Praxisteil in Filius (Datei abgeben) – siehe PROBE_INHALT
      proben: [{ R: "inf9-p1-r", M: "inf9-p1-m" }, { R: "inf9-p1b-r", M: "inf9-p1b-m" }],
      module: [
        // blatt (seit 18.10.2026): Regelhefteintrag und Arbeitsblatt (Lösung auf Seite 2) in 9M/Informatik/arbeitsblaetter/
        { id: "netz-start", kz: "N1", blatt: "N1", titel: "Netzwerke kennenlernen", href: "netz-start.html", key: "grumi-i9-netz-start-v1", pc: "Filius",
          text: "Computer, Kabel, Switch, Router, Accesspoint: Du liest einen Netzplan und verbindest zwei Computer.",
          tags: ["Filius", "Netzplan", "Regelheft"] },
        { id: "ip-adressen", kz: "N2", titel: "IP-Adressen", href: "ip-adressen.html", key: "grumi-i9-ip-adressen-v1", pc: "Filius",
          text: "Jedes Gerät braucht eine eigene, passende Adresse. Du findest falsche Adressen und reparierst ein Netz.",
          tags: ["Filius", "Fehler finden", "Startdatei"] },
        { id: "switch", kz: "N3", titel: "Der Switch", href: "switch.html", key: "grumi-i9-switch-v1", pc: "Filius",
          text: "Mehr als zwei Computer: Der Switch verteilt die Daten. Du baust ein Sternnetz.",
          tags: ["Filius", "Video", "Animation"] },
        { id: "router", kz: "N4", titel: "Der Router", href: "router.html", key: "grumi-i9-router-v1", pc: "Filius",
          text: "Zwei Netze, ein Router dazwischen: Mit dem richtigen Gateway erreichen sich alle.",
          tags: ["Filius", "Video", "Startdatei"] },
        { id: "netzprojekt", kz: "N5", titel: "Eigenes Netzwerkprojekt", href: "netzprojekt.html", key: "grumi-i9-netzprojekt-v1", pc: "Filius",
          text: "Du baust ein kleines Schulnetz nach einem Netzplan – und wiederholst die Fachbegriffe im Wortspeicher.",
          tags: ["Filius", "Projekt", "Probenstoff"] }
      ]
    },
    {
      id: "internet", nr: "02", titel: "Internet verstehen", kurz: "Internet", icon: "🌐", zeit: "November bis Dezember", pc: "Filius",
      text: "Was passiert, wenn du eine Adresse in den Browser tippst? Du verfolgst den Weg bis zur Webseite – und siehst, welche Spuren du hinterlässt.",
      proben: [{ R: "inf9-p2-r", M: "inf9-p2-m" }],
      module: [
        { id: "internet-aufbau", kz: "I1", titel: "Wie ist das Internet aufgebaut?", href: "internet-aufbau.html", key: "grumi-i9-internet-aufbau-v1", pc: "Filius",
          text: "Computer, Switch, Router, Server: Du verbindest ein Heimnetz mit einem Webserver und rufst eine Seite ab.",
          tags: ["Filius", "Animation", "Startdatei"] },
        { id: "dns", kz: "I2", titel: "Internetadressen und DNS", href: "dns.html", key: "grumi-i9-dns-v1", pc: "Filius",
          text: "Browser, URL, DNS, IP-Adresse, Webserver: Wie aus einem Namen eine Adresse wird.",
          tags: ["Filius", "Video", "Animation"] },
        { id: "http-https", kz: "I3", titel: "HTTP und HTTPS", href: "http-https.html", key: "grumi-i9-http-https-v1",
          text: "Anfrage und Antwort – und warum das Schloss in der Adresszeile wichtig ist.",
          tags: ["Animation", "Mitlesen in Filius", "Tablet geeignet"] },
        { id: "anonym", kz: "I4", titel: "Anonymität im Internet", href: "anonym.html", key: "grumi-i9-anonym-v1",
          text: "Niemand sieht mich? Doch: Der Server kennt deine Adresse. Du entscheidest in echten Situationen.",
          tags: ["Fälle entscheiden", "Wortspeicher", "Probenstoff"] }
      ]
    },
    {
      id: "funktionen", nr: "03", titel: "Excel-Funktionen", kurz: "Excel-Funktionen", icon: "🧮", zeit: "Januar bis Februar", pc: "Excel",
      text: "SUMME, MITTELWERT, RUNDEN, WURZEL, WENN: Du lässt Excel rechnen und entscheiden – erst hier auf der Seite, dann im echten Programm.",
      proben: [{ R: "inf9-p3-r", M: "inf9-p3-m" }],
      module: [
        { id: "excel-start", kz: "E1", titel: "Wiederholung: Zellen, Formeln, Zellbezüge", href: "excel-start.html", key: "grumi-i9-excel-start-v1", pc: "Excel",
          text: "Zelle, Zeile, Spalte, Formel mit =, relativer und absoluter Bezug: alles Wichtige noch einmal.",
          tags: ["GRUMI-EXCEL", "Excel", "Regelheft"] },
        { id: "summe-mittelwert", kz: "E2", titel: "SUMME und MITTELWERT", href: "summe-mittelwert.html", key: "grumi-i9-summe-mittelwert-v1", pc: "Excel",
          text: "Viele Zahlen auf einmal: zusammenzählen und den Durchschnitt berechnen.",
          tags: ["GRUMI-EXCEL", "Excel", "Datei hochladen"] },
        { id: "rechenfunktionen", kz: "E3", titel: "PRODUKT, QUOTIENT, RUNDEN, WURZEL", href: "rechenfunktionen.html", key: "grumi-i9-rechenfunktionen-v1", pc: "Excel",
          text: "Vier Funktionen für Preise, Prozente und Flächen.",
          tags: ["GRUMI-EXCEL", "Excel", "Datei hochladen"] },
        { id: "wenn", kz: "E4", titel: "Die WENN-Funktion", href: "wenn.html", key: "grumi-i9-wenn-v1", pc: "Excel",
          text: "Bestanden oder nicht bestanden? Excel entscheidet nach deiner Regel.",
          tags: ["GRUMI-EXCEL", "Excel", "Datei hochladen"] },
        { id: "excel-projekt", kz: "E5", titel: "Projekt: Abschlussfahrt planen", href: "excel-projekt.html", key: "grumi-i9-excel-projekt-v1", pc: "Excel",
          text: "Kosten berechnen, das Budget prüfen, eine Umfrage auswerten: Du baust eine eigene Tabelle – und wiederholst im Wortspeicher.",
          tags: ["Excel", "Projekt", "Probenstoff"] }
      ]
    },
    {
      id: "diagramme", nr: "04", titel: "Excel-Diagramme", kurz: "Diagramme", icon: "📊", zeit: "März bis April", pc: "Excel",
      text: "Zahlen zeigen statt nur aufschreiben: Du wählst das passende Diagramm und erstellst es selbst.",
      proben: [{ R: "inf9-p4-r", M: "inf9-p4-m" }],
      module: [
        { id: "saeulen-balken", kz: "D1", titel: "Säulen- und Balkendiagramme", href: "saeulen-balken.html", key: "grumi-i9-saeulen-balken-v1", pc: "Excel",
          text: "Werte vergleichen: Wer hat am meisten, wer am wenigsten?",
          tags: ["GRUMI-EXCEL", "Excel", "Regelheft"] },
        { id: "kreis-streifen", kz: "D2", titel: "Kreis- und Streifendiagramme", href: "kreis-streifen.html", key: "grumi-i9-kreis-streifen-v1", pc: "Excel",
          text: "Anteile zeigen: Wie verteilt sich das Ganze?",
          tags: ["GRUMI-EXCEL", "Excel", "Datei hochladen"] },
        { id: "linien", kz: "D3", titel: "Liniendiagramme", href: "linien.html", key: "grumi-i9-linien-v1", pc: "Excel",
          text: "Entwicklungen zeigen: Wie verändert sich etwas im Lauf der Zeit?",
          tags: ["GRUMI-EXCEL", "Excel", "Datei hochladen"] },
        { id: "auswertung", kz: "D4", titel: "Eigene Auswertung", href: "auswertung.html", key: "grumi-i9-auswertung-v1", pc: "Excel",
          text: "Welche Daten, welches Diagramm? Du wählst aus, begründest – und wiederholst im Wortspeicher.",
          tags: ["Excel", "Projekt", "Probenstoff"] }
      ]
    },
    {
      id: "scratch", nr: "05", titel: "Programmieren mit Scratch", kurz: "Scratch", icon: "🧩", zeit: "April bis Juni", pc: "Scratch",
      text: "Objekte, Eingaben, Bedingungen, Wiederholungen, eigene Blöcke: Du baust Programme – erst mit GRUMI-Blöcken, dann in Scratch.",
      proben: [{ R: "inf9-p5-r", M: "inf9-p5-m" }],
      module: [
        { id: "scratch-start", kz: "S1", titel: "Wiederholung: So arbeitet ein Programm", href: "scratch-start.html", key: "grumi-i9-scratch-start-v1", pc: "Scratch",
          text: "Ereignis, Anweisung, Schleife, Bedingung, Variable: Du setzt erste Programme aus Blöcken zusammen.",
          tags: ["GRUMI-Blöcke", "Scratch", "Regelheft"] },
        { id: "objekte", kz: "S2", titel: "Objekte", href: "objekte.html", key: "grumi-i9-objekte-v1", pc: "Scratch",
          text: "Position, Richtung, Größe, Kostüm: Du veränderst eine Figur mit Anweisungen.",
          tags: ["GRUMI-Blöcke", "Scratch", "Projekt hochladen"] },
        { id: "eingabe-ausgabe", kz: "S3", titel: "Eingaben und Ausgaben", href: "eingabe-ausgabe.html", key: "grumi-i9-eingabe-ausgabe-v1", pc: "Scratch",
          text: "Das Programm fragt, du antwortest – und eine Variable merkt sich den Wert.",
          tags: ["GRUMI-Blöcke", "Scratch", "Projekt hochladen"] },
        { id: "bedingungen", kz: "S4", titel: "Bedingungen", href: "bedingungen.html", key: "grumi-i9-bedingungen-v1", pc: "Scratch",
          text: "Falls – dann – sonst: Dein Programm entscheidet. Beispiel: Zahlenraten.",
          tags: ["GRUMI-Blöcke", "Scratch", "Projekt hochladen"] },
        { id: "wiederholungen", kz: "S5", titel: "Wiederholungen", href: "wiederholungen.html", key: "grumi-i9-wiederholungen-v1", pc: "Scratch",
          text: "Schleifen sparen Arbeit – und lassen sich mit Bedingungen verschachteln.",
          tags: ["GRUMI-Blöcke", "Scratch", "Projekt hochladen"] },
        { id: "eigene-bloecke", kz: "S6", titel: "Eigene Blöcke", href: "eigene-bloecke.html", key: "grumi-i9-eigene-bloecke-v1", pc: "Scratch",
          text: "Mehrere Befehle bekommen einen Namen: So bleibt ein Programm übersichtlich.",
          tags: ["GRUMI-Blöcke", "Scratch", "Projekt hochladen"] },
        { id: "fehlersuche", kz: "S7", titel: "Fehlersuche", href: "fehlersuche.html", key: "grumi-i9-fehlersuche-v1", pc: "Scratch",
          text: "Das Programm tut nicht, was es soll? Du findest den Fehler und verbesserst es.",
          tags: ["GRUMI-Blöcke", "Scratch", "Fehler finden"] },
        { id: "scratch-projekt", kz: "S8", titel: "Eigenes Projekt", href: "scratch-projekt.html", key: "grumi-i9-scratch-projekt-v1", pc: "Scratch",
          text: "Spiel oder Quiz: Du planst, baust und testest ein eigenes Programm – und wiederholst im Wortspeicher.",
          tags: ["Scratch", "Projekt", "Probenstoff"] }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var PREFIX = "grumi-i9-";
  var SPEICHER = "grumi-i9-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt eine Einheit, auch wenn sie für die Klasse gesperrt ist.
  // In der Vorschau erscheint zu jeder Aufgabe die Lehreransicht (info9.js).
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  // Feste Kürzel der Einheiten (kz): N = Netzwerke, I = Internet, E = Excel-Funktionen, D = Diagramme, S = Scratch.
  // Zu sehen nur in der Verwaltung. Ein Kürzel bleibt für immer bei seiner Einheit; neue bekommen die nächste freie Nummer.
  //
  // PROBE_INHALT: Proben, die nicht genau die Einheiten ihres Moduls abdecken (sonst: alle Einheiten des Moduls).
  var PROBE_INHALT = { "inf9-p1b-r": ["netz-start"], "inf9-p1b-m": ["netz-start"] };
  function probeModule(testId) {
    var ids = PROBE_INHALT[testId], liste = [];
    THEMEN.forEach(function (t) {
      var dabei = (t.proben || []).some(function (p) { return p && (p.R === testId || p.M === testId); });
      t.module.forEach(function (m) { if (ids ? ids.indexOf(m.id) >= 0 : dabei && !m.extra) liste.push(m); });
    });
    return liste;
  }

  function modulVon(id) {
    for (var i = 0; i < THEMEN.length; i++) for (var j = 0; j < THEMEN[i].module.length; j++) {
      if (THEMEN[i].module[j].id === id) return { modul: THEMEN[i].module[j], thema: THEMEN[i], nr: j + 1 };
    }
    return null;
  }
  // „grumi-i9-ip-adressen-v1“ -> „ip-adressen“
  function idAusKey(key) { return String(key || "").replace(/^grumi-i9-/, "").replace(/-v\d+$/, ""); }

  // Ist die Einheit für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
  function offen(modul, thema, stand) {
    if (VORSCHAU) return true;
    // Lehrercode: Der Server meldet „alles“ – dann ist jede Einheit offen
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
  function freigabe(anmeldung, cb, fehler) {
    if (!anmeldung || !anmeldung.code) { cb(null, "gast"); return; }
    var alt = liesSpeicher(anmeldung.klasse);
    if (alt) cb(alt, "speicher");
    var ctl = global.AbortController ? new AbortController() : null;
    var zeit = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = setTimeout(function () { if (fehler) fehler("Der Server wacht gerade auf – das kann bis zu einer Minute dauern.", true); }, 6000);
    global.fetch(API + "/api/inf9/freigabe", {
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

  // Zug des Kindes: aus der Anmeldung („9M“/„9R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab.
  // Der Zug entscheidet nur über Überschrift, Rückweg und die Kennung der Probe – nie über den Inhalt.
  function zug(anmeldung) {
    var z = anmeldung && /^9[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-i9-zug", z);
      else z = global.sessionStorage.getItem("grumi-i9-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.INF9 = {
    THEMEN: THEMEN, probeModule: probeModule, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug,
    // Angaben für die gemeinsamen Bausteine (7M/NT/modul-basis.js) und die Übersicht (7M/Informatik/uebersicht.js)
    KURS: "i9", PREFIX: PREFIX, WORT: "Einheit", DAS: "die Einheit", ES: "sie", STUFE: "9", PFAD: "/api/inf9",
    // Kasten „Lernen für die Probe“ unten in der Einheit (7M/NT/modul-basis.js, lernmaterial; Einheiten mit blatt)
    LERNMATERIAL: { text: "Zu dieser Einheit gibt es den Regelhefteintrag als PDF und ein kurzes Arbeitsblatt zum Ausfüllen. Die Lösung steht auf der Rückseite (Seite 2) – erst selbst lösen, dann umdrehen. Zum Ausdrucken oder am Bildschirm.",
      dateien: [["hefteintrag", "📘 Regelhefteintrag"], ["arbeitsblatt", "📝 Arbeitsblatt (Lösung auf der Rückseite)"]] },
    SPERRE: "Diese Einheit ist noch nicht freigeschaltet", ZURUECK: "💻 Zur Übersicht Informatik 9",
    ALT: { href: "9/Informatik_9/index.html", text: "Bisheriger Filius-Kurs" },   // der Selbstlernkurs von 2025/26 bleibt erreichbar
    INTRO: "Fünf Module mit kurzen Einheiten: sehen, ausprobieren, verstehen, anwenden, kontrollieren. Vieles übst du direkt hier auf der Seite; für Filius, Excel und Scratch arbeitest du am Windows-PC. Deine Lehrkraft schaltet die Einheiten nach und nach frei.",
    NOCH_NICHTS: "Für deine Klasse ist hier noch nichts freigeschaltet. Deine Lehrkraft schaltet die Einheiten frei. Bis dahin findest du hier den bisherigen Kurs:",
    OHNE_CODE: "Ohne Code ist hier noch nichts offen. Melde dich oben mit deinem Code an."
  };
  // Auf den Seiten von Informatik 9 arbeiten die Bausteine mit dieser Liste. Die Verwaltung der Lehrkraft lädt
  // mehrere Kurslisten und spricht sie mit ihrem Namen an (INF9, INF8, INF7, NT7).
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.INF9;
})(window);
