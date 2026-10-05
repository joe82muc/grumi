/* Informatik 7 (7M und 7R): die fünf Module und ihre Einheiten an einer Stelle.
 * Genutzt von der Übersicht (uebersicht.js), den Einheiten (../NT/modul-basis.js) und der Verwaltung
 * (nt7-verwaltung.js in proben-verwalten.html). Aufbau und Logik wie 7M/NT/themen.js:
 *   Thema  = Modul des Jahresplans (z. B. „Netzwerke mit Filius“), proben = Kennungen der Proben auf dem Server
 *            (inf7-fragen.js), {R: …, M: …} = je Zug eine Fassung
 *   Modul  = Einheit von etwa 40 Minuten (eine Seite in diesem Ordner)
 *            id   = Kennung im Lernstand („i7-<id>“) und in der Freischaltung
 *            key  = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-i7-<id>-v1“)
 *            href = Datei in 7M/Informatik; fehlt sie, steht die Einheit als „in Vorbereitung“ in der Übersicht
 *            pc   = Programm, für das ein Windows-PC nötig ist (Filius, GIMP, Inkscape, Scratch)
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Module oder einzelne Einheiten frei (Server /api/inf7/freigabe).
 * Ein Eintrag für die Einheit geht vor dem Eintrag ihres Moduls; ohne Eintrag ist eine Einheit gesperrt.
 * Neue Einheit: hier eintragen – dann steht sie in Übersicht, Verwaltung und Lernstand.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "sicher", nr: "01", titel: "Internet und Sicherheit", kurz: "Internet & Sicherheit", icon: "🔐", zeit: "September bis Oktober",
      text: "Nachrichten schreiben, Gefahren erkennen, Rechte kennen: So tauschst du dich im Netz sicher und fair aus.",
      proben: [{ R: "inf7-p1-r", M: "inf7-p1-m" }],
      module: [
        { id: "alltag", titel: "Kommunikation im Alltag", href: "alltag.html", key: "grumi-i7-alltag-v1",
          text: "Messenger, E-Mail, Videokonferenz oder soziales Netzwerk? Du wählst den passenden Weg, schreibst eine E-Mail und siehst, wie eine Nachricht ankommt.",
          tags: ["E-Mail üben", "Animation", "Tablet geeignet"] },
        { id: "sicher-gefaehrlich", titel: "Sicher oder gefährlich?", href: "sicher-gefaehrlich.html", key: "grumi-i7-sicher-gefaehrlich-v1",
          text: "Spam, Phishing und falsche Links erkennen, Apps nicht alles erlauben und ein sicheres Passwort bauen.",
          tags: ["Posteingang prüfen", "Passwort-Check", "Tablet geeignet"] },
        { id: "rechte", titel: "Rechte im Internet", href: "rechte.html", key: "grumi-i7-rechte-v1",
          text: "Darf ich das posten? Recht am eigenen Bild, Urheberrecht, Quellen angeben – und fair bleiben im Netz.",
          tags: ["Fälle entscheiden", "Quellen", "Tablet geeignet"] },
        { id: "anwenden", titel: "Wiederholen und anwenden", href: "anwenden.html", key: "grumi-i7-anwenden-v1",
          text: "Falschmeldungen prüfen, Phishing entlarven und im Duell gegen die KI zeigen, was du kannst. Mit Kreuzworträtsel und Profi-Check.",
          tags: ["Duell gegen die KI", "Kreuzworträtsel", "Probenstoff"] }
      ]
    },
    {
      id: "filius", nr: "02", titel: "Netzwerke mit Filius", kurz: "Filius", icon: "🌐", zeit: "November bis Dezember", pc: "Filius",
      text: "Du baust am PC eigene kleine Netzwerke: Rechner verbinden, Nachrichten schicken, eine Webseite abrufen und zwei Netze koppeln.",
      proben: [{ R: "inf7-p2-r", M: "inf7-p2-m" }],
      module: [
        { id: "zwei-computer", titel: "Zwei Computer verbinden", href: "zwei-computer.html", key: "grumi-i7-zwei-computer-v1", pc: "Filius",
          text: "Zwei Rechner, ein Kabel, zwei IP-Adressen: dein erstes Netzwerk – und der Test, ob es klappt.",
          tags: ["Filius", "Startdatei"] },
        { id: "switch", titel: "Der Switch", href: "switch.html", key: "grumi-i7-switch-v1", pc: "Filius",
          text: "Mehr als zwei Rechner brauchen einen Verteiler. Du baust ein Sternnetz mit einem Switch.",
          tags: ["Filius", "Startdatei"] },
        { id: "ping", titel: "Nachrichten und Ping", href: "ping.html", key: "grumi-i7-ping-v1", pc: "Filius",
          text: "Ist der andere Rechner erreichbar? Mit Ping prüfst du die Verbindung und findest Fehler.",
          tags: ["Filius", "Fehler finden"] },
        { id: "server", titel: "Server und Webseite", href: "server.html", key: "grumi-i7-server-v1", pc: "Filius",
          text: "Ein Rechner bietet eine Webseite an, die anderen rufen sie ab: Server, Client und Browser.",
          tags: ["Filius", "Startdatei"] },
        { id: "router", titel: "Zwei Netze und Router", href: "router.html", key: "grumi-i7-router-v1", pc: "Filius",
          text: "Zwei Netze bleiben getrennt – bis ein Router sie verbindet. Wozu das Gateway da ist.",
          tags: ["Filius", "Startdatei"] }
      ]
    },
    {
      id: "gimp", nr: "03", titel: "Digitale Bilder mit GIMP", kurz: "GIMP", icon: "🎨", zeit: "Januar bis Februar", pc: "GIMP",
      text: "Pixel sichtbar machen, Bilder zuschneiden, verbessern und freistellen – und ein eigenes kleines Bildprojekt.",
      proben: [{ R: "inf7-p3-r", M: "inf7-p3-m" }],
      module: [
        { id: "pixel", titel: "Digitale Bilder und Pixel", key: "grumi-i7-pixel-v1", pc: "GIMP",
          text: "Ein Foto besteht aus winzigen Farbpunkten. Du zoomst hinein, bis du sie siehst.",
          tags: ["GIMP", "Übungsbild"] },
        { id: "zuschneiden", titel: "Zuschneiden und Größe ändern", key: "grumi-i7-zuschneiden-v1", pc: "GIMP",
          text: "Bild öffnen, zuschneiden, kleiner machen und richtig speichern.",
          tags: ["GIMP", "Übungsbild"] },
        { id: "verbessern", titel: "Bild verbessern", key: "grumi-i7-verbessern-v1", pc: "GIMP",
          text: "Zu dunkel, zu blass, schief? Helligkeit, Kontrast, Farben und Drehen.",
          tags: ["GIMP", "Übungsbild"] },
        { id: "freistellen", titel: "Freistellen", key: "grumi-i7-freistellen-v1", pc: "GIMP",
          text: "Ein Motiv vom Hintergrund lösen, den Hintergrund durchsichtig machen und als PNG exportieren.",
          tags: ["GIMP", "Übungsbild"] },
        { id: "retusche", titel: "Retusche und Mini-Projekt", key: "grumi-i7-retusche-v1", pc: "GIMP",
          text: "Etwas Störendes aus dem Bild entfernen und ein eigenes kleines Bild gestalten.",
          tags: ["GIMP", "Mini-Projekt"] }
      ]
    },
    {
      id: "inkscape", nr: "04", titel: "Vektorgrafik mit Inkscape", kurz: "Inkscape", icon: "📐", zeit: "März bis April", pc: "Inkscape",
      text: "Grafiken aus Formen statt aus Pixeln: vergrößern ohne Unschärfe, Objekte und ihre Eigenschaften, ein eigenes Symbol.",
      proben: [{ R: "inf7-p4-r", M: "inf7-p4-m" }],
      module: [
        { id: "raster-vektor", titel: "Raster oder Vektor?", key: "grumi-i7-raster-vektor-v1",
          text: "Ein Foto wird beim Vergrößern unscharf, eine Vektorgrafik nicht. Du findest heraus, warum.",
          tags: ["Animation", "Tablet geeignet"] },
        { id: "inkscape-start", titel: "Inkscape: die ersten Formen", key: "grumi-i7-inkscape-start-v1", pc: "Inkscape",
          text: "Rechteck, Kreis, Farbe, Größe, Position, Drehen – jedes Objekt hat Eigenschaften.",
          tags: ["Inkscape"] },
        { id: "objekte", titel: "Objekte kombinieren", key: "grumi-i7-objekte-v1", pc: "Inkscape",
          text: "Kopieren, gruppieren, anordnen und Text setzen: Aus einfachen Formen wird ein Bild.",
          tags: ["Inkscape"] },
        { id: "logo", titel: "Eigenes Symbol oder Logo", key: "grumi-i7-logo-v1", pc: "Inkscape",
          text: "Du planst und zeichnest ein eigenes Symbol – ein App-Zeichen, ein Piktogramm oder ein Logo.",
          tags: ["Inkscape", "Mini-Projekt"] }
      ]
    },
    {
      id: "scratch", nr: "05", titel: "Programmieren mit Scratch", kurz: "Scratch", icon: "🐱", zeit: "Mai bis Juli", pc: "Scratch",
      text: "Mit Blöcken programmieren: Figuren bewegen, steuern, wiederholen, entscheiden, Punkte zählen – bis zum eigenen Mini-Spiel.",
      proben: [{ R: "inf7-p5-r", M: "inf7-p5-m" }],
      module: [
        { id: "bewegung", titel: "Meine erste Bewegung", key: "grumi-i7-bewegung-v1", pc: "Scratch",
          text: "Figur, Bühne, grüne Fahne: Nach wenigen Minuten bewegt sich deine Figur.",
          tags: ["Scratch", "Starterprojekt"] },
        { id: "sequenz", titel: "Befehle der Reihe nach", key: "grumi-i7-sequenz-v1", pc: "Scratch",
          text: "Gehen, drehen, sprechen: Die Reihenfolge der Blöcke entscheidet, was passiert.",
          tags: ["Scratch"] },
        { id: "wiederholung", titel: "Wiederholen", key: "grumi-i7-wiederholung-v1", pc: "Scratch",
          text: "Statt zehnmal derselbe Block: „wiederhole“ und „wiederhole fortlaufend“.",
          tags: ["Scratch", "Animation"] },
        { id: "steuerung", titel: "Mit der Tastatur steuern", key: "grumi-i7-steuerung-v1", pc: "Scratch",
          text: "Pfeiltasten drücken, Figur bewegt sich: Programme reagieren auf Ereignisse.",
          tags: ["Scratch", "Starterprojekt"] },
        { id: "bedingung", titel: "Wenn – dann", key: "grumi-i7-bedingung-v1", pc: "Scratch",
          text: "Die Figur berührt den Rand – und dann? Dein Programm prüft eine Bedingung.",
          tags: ["Scratch", "Starterprojekt"] },
        { id: "alternative", titel: "Wenn – dann – sonst", key: "grumi-i7-alternative-v1", pc: "Scratch",
          text: "Zwei Wege: Das Programm entscheidet, welchen es geht.",
          tags: ["Scratch", "Animation"] },
        { id: "variablen", titel: "Punkte zählen mit Variablen", key: "grumi-i7-variablen-v1", pc: "Scratch",
          text: "Eine Variable merkt sich einen Wert – zum Beispiel deinen Punktestand.",
          tags: ["Scratch", "Starterprojekt"] },
        { id: "minispiel", titel: "Mein Mini-Spiel", key: "grumi-i7-minispiel-v1", pc: "Scratch",
          text: "Alles zusammen: ein kleines Fangspiel mit Steuerung, Bedingung und Punkten.",
          tags: ["Scratch", "Mini-Projekt"] }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var PREFIX = "grumi-i7-";
  var SPEICHER = "grumi-i7-freigabe~";
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
  // „grumi-i7-zwei-computer-v1“ -> „zwei-computer“
  function idAusKey(key) { return String(key || "").replace(/^grumi-i7-/, "").replace(/-v\d+$/, ""); }

  // Ist die Einheit für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
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
    global.fetch(API + "/api/inf7/freigabe", {
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

  // Zug des Kindes: aus der Anmeldung („7M“/„7R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab
  function zug(anmeldung) {
    var z = anmeldung && /^7[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-i7-zug", z);
      else z = global.sessionStorage.getItem("grumi-i7-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.INF7 = {
    THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug,
    // Angaben für die gemeinsamen Bausteine (7M/NT/modul-basis.js)
    KURS: "i7", PREFIX: PREFIX, WORT: "Einheit", DAS: "die Einheit", ES: "sie",
    SPERRE: "Diese Einheit ist noch nicht freigeschaltet", ZURUECK: "💻 Zur Übersicht Informatik 7"
  };
  // Auf den Seiten von Informatik 7 arbeiten die Bausteine mit dieser Liste. Die Verwaltung der Lehrkraft lädt
  // mehrere Kurslisten und spricht sie mit ihrem Namen an (INF7, NT7).
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.INF7;
})(window);
