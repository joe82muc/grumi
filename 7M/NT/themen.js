/* Natur und Technik 7 (7M und 7R): Themenbereiche und Module an einer Stelle.
 * Genutzt von der Übersicht (uebersicht.js), den Modulen (modul-basis.js) und der Verwaltung (nt7-verwaltung.js).
 *
 * Modul:  id    = Kennung im Lernstand („nt7-<id>“) und in der Freischaltung; steckt auch im Speicherschlüssel
 *         key   = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-nt7-<id>-v1“)
 *         href  = Datei in 7M/NT; fehlt sie, steht das Modul als „in Vorbereitung“ in der Übersicht
 *         offen = true: war schon vor der Freischalt-Funktion für alle da und bleibt ohne Eintrag offen
 * Thema:  proben = Kennungen der Proben auf dem Server (nt7-fragen.js); {R: …, M: …} = je Zug eine Fassung
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Themen oder einzelne Module frei (Server /api/nt7/freigabe).
 * Ein Modul-Eintrag geht vor dem Eintrag seines Themas; ohne Eintrag gilt „offen“ aus dieser Datei.
 * Neues Modul: hier eintragen – dann steht es in Übersicht, Verwaltung und Lernstand.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "luft", nr: "01", titel: "Luft", icon: "🌬️",
      text: "Unsichtbar, aber lebenswichtig: was Luft kann, woraus sie besteht, wie wir Wind nutzen, warum Feuer Luft braucht und wie man Brände löscht.",
      proben: [{ M: "nt7-luft-1" }, { M: "nt7-luft-2" }, { R: "nt7-p1-r", M: "nt7-p1-m" }],
      module: [
        { id: "luft-modul", titel: "Luft – unsichtbar, aber lebenswichtig", href: "luft-modul.html", key: "grumi-nt7-luft-modul-v1", offen: true,
          text: "Luft zum Leben, bewegte Luft, Luft und Feuer, Zusammensetzung, Eigenschaften der Luft, chemische Symbole und Formeln.",
          tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"] },
        { id: "windkraft-strom", titel: "Windkraft: Strom aus bewegter Luft", href: "windkraft-strom.html", key: "grumi-nt7-windkraft-strom-v1", offen: true,
          text: "Windmühle und Windkraftanlage, Aufbau mit Rotorblatt, Getriebe, Generator und Bremse, vom Wind zum Strom, warum Windräder immer größer werden.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "windkraft-procontra", titel: "Windkraft – pro und contra", href: "windkraft-pro-contra.html", key: "grumi-nt7-windkraft-procontra-v1", offen: true,
          text: "Argumente für und gegen Windräder sortieren, Standort-Planer für einen Kompromiss und ein Wortgefecht gegen die KI.",
          tags: ["Standort-Planer", "Probenstoff", "Duell gegen die KI"] },
        { id: "luft-verbrennung", titel: "Luft und Verbrennung", href: "luft-verbrennung.html", key: "grumi-nt7-luft-verbrennung-v1", offen: true,
          text: "Brennbare Stoffe, das Feuerdreieck, die Zündtemperatur, warum Feuer Sauerstoff braucht und warum fein zerteilte Stoffe besser brennen.",
          tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"] },
        { id: "achtung-explosiv", titel: "Achtung, explosiv!", href: "achtung-explosiv.html", key: "grumi-nt7-achtung-explosiv-v1", offen: true,
          text: "Mehlstaub-Explosion, explosive Gasgemische, Druckwelle, kontrollierte Explosionen im Automotor und Vorsicht beim Grillen.",
          tags: ["Lehrerversuche", "Probenstoff", "KI-Rückmeldung"] },
        { id: "brand-schutz", titel: "Brände verhindern und löschen", href: "brand-schutz.html", key: "grumi-nt7-brand-schutz-v1",
          text: "Brandschutz im Gebäude, Rauchmelder und Sprinkler, richtig handeln im Notfall und drei Wege, ein Feuer zu löschen.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "oxidation", titel: "Oxidation: Rost, Glut und braune Äpfel", href: "oxidation.html", key: "grumi-nt7-oxidation-v1",
          text: "Wenn Stoffe mit Sauerstoff reagieren: Eisenwolle auf der Waage, Wortgleichungen, Oxide, Rost und wie man davor schützt.",
          tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"] },
        { id: "luftdruck", titel: "Der Luftdruck", href: "luftdruck.html", key: "grumi-nt7-luftdruck-v1",
          text: "Luft hat Gewicht und drückt von allen Seiten: Luftsäule, Luftdruck in Tal und Gebirge, Saugnapf und die berühmten Halbkugeln.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "forschen", titel: "Forschen wie die Profis", href: "forschen.html", key: "grumi-nt7-forschen-v1",
          text: "Von der Frage über die Vermutung zum Versuch: planen, beobachten, messen, Diagramme lesen und sicher experimentieren.",
          tags: ["Versuchsprotokoll", "Diagramme", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "atome", nr: "02", titel: "Atome und Materie", icon: "⚛️",
      text: "Woraus alles besteht: wie sich die Vorstellung vom Atom entwickelt hat und wie das Periodensystem die Elemente ordnet.",
      probeHinweis: "Die Probe zu diesem Themenbereich steht beim Themenbereich „Tiere“ (Probe 2: Atome und Tiere).",
      module: [
        { id: "atommodelle", titel: "Atommodelle: von Demokrit bis Rutherford", href: "atommodelle.html", key: "grumi-nt7-atommodelle-v1",
          text: "Unteilbare Teilchen, Kugelmodell und der Versuch mit der Goldfolie: wie Forscher herausfanden, dass ein Atom fast leer ist.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "atombau-pse", titel: "Atombau und Periodensystem", href: "atombau-pse.html", key: "grumi-nt7-atombau-pse-v1",
          text: "Protonen, Neutronen und Elektronen zählen, das Periodensystem lesen und Metalle, Nichtmetalle und Edelgase unterscheiden.",
          tags: ["Atom-Baukasten", "Probenstoff", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "tiere", nr: "03", titel: "Tiere an Land und in der Luft", icon: "🦎",
      text: "Fische, Amphibien, Reptilien, Vögel und Säugetiere: woran man sie erkennt und wie ihr Körper zu ihrem Lebensraum passt.",
      proben: [{ R: "nt7-p2-r", M: "nt7-p2-m" }],
      module: [
        { id: "wirbeltiere", titel: "Wirbeltiere: fünf Klassen", href: "wirbeltiere.html", key: "grumi-nt7-wirbeltiere-v1",
          text: "Was alle Wirbeltiere gemeinsam haben und woran du Fische, Amphibien, Reptilien, Vögel und Säugetiere unterscheidest.",
          tags: ["Tier-Steckbriefe", "Probenstoff", "KI-Rückmeldung"] },
        { id: "fortbewegung", titel: "Schwimmen, laufen, fliegen", href: "fortbewegung.html", key: "grumi-nt7-fortbewegung-v1",
          text: "Stromlinienform, Flossen, Beine und Flügel: wie Wirbeltiere an Wasser, Land und Luft angepasst sind.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "mensch", nr: "04", titel: "Mensch und Gesundheit", icon: "🩺",
      text: "Atmung, Blut, Herz und Blutkreislauf: wie dein Körper Sauerstoff aufnimmt, verteilt und gesund bleibt.",
      proben: [{ R: "nt7-p3-r", M: "nt7-p3-m" }],
      module: [
        { id: "atmungsorgane", titel: "Der Weg der Luft: Atmungsorgane", href: "atmungsorgane.html", key: "grumi-nt7-atmungsorgane-v1",
          text: "Von der Nase bis zu den Lungenbläschen: welche Organe die Atemluft durchströmt und was jedes davon leistet.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "atmen-gasaustausch", titel: "Atmen und Gasaustausch", href: "atmen-gasaustausch.html", key: "grumi-nt7-atmen-gasaustausch-v1",
          text: "Wie Zwerchfell und Rippen die Lunge füllen und leeren und wie Sauerstoff ins Blut und Kohlenstoffdioxid hinaus gelangt.",
          tags: ["Modellversuch", "Probenstoff", "KI-Rückmeldung"] },
        { id: "blut", titel: "Blut: Was fließt da eigentlich?", href: "blut.html", key: "grumi-nt7-blut-v1",
          text: "Blutplasma, rote und weiße Blutkörperchen und Blutplättchen: wer was erledigt und warum Blutspenden Leben retten.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "herz-kreislauf", titel: "Herz und Blutkreislauf", href: "herz-kreislauf.html", key: "grumi-nt7-herz-kreislauf-v1",
          text: "Das Herz als Pumpe mit vier Räumen und ein Kreislauf mit zwei Schleifen: der Weg des Blutes durch Körper und Lunge.",
          tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "herz-gesund", titel: "Herz und Kreislauf gesund halten", href: "herz-gesund.html", key: "grumi-nt7-herz-gesund-v1",
          text: "Puls messen, Belastung und Erholung vergleichen, Risiken wie Rauchen und Bewegungsmangel erkennen und vorbeugen.",
          tags: ["Puls-Versuch", "Diagramme", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "strom", nr: "05", titel: "Elektrizität", icon: "⚡",
      text: "Stromkreis und Schaltplan, was Strom bewirkt, Spannung, Stromstärke und Widerstand – und wie du sicher mit Strom umgehst.",
      proben: [{ R: "nt7-p4-r", M: "nt7-p4-m" }],
      module: [
        { id: "stromkreis", titel: "Der Stromkreis und sein Schaltplan", href: "stromkreis.html", key: "grumi-nt7-stromkreis-v1",
          text: "Was ein Stromkreis braucht, Schaltzeichen lesen, Schaltpläne bauen und Fehler in Schaltungen finden.",
          tags: ["Schaltungs-Baukasten", "Probenstoff", "KI-Rückmeldung"] },
        { id: "strom-wirkungen", titel: "Was Strom alles kann: Wirkungen", href: "strom-wirkungen.html", key: "grumi-nt7-strom-wirkungen-v1",
          text: "Licht, Wärme, Magnetismus und chemische Vorgänge: wie elektrische Energie in andere Energieformen umgewandelt wird.",
          tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"] },
        { id: "spannung-stromstaerke", titel: "Spannung und Stromstärke", href: "spannung-stromstaerke.html", key: "grumi-nt7-spannung-stromstaerke-v1",
          text: "Ein Modell für den Strom, Volt und Ampere, richtig messen und was in Reihen- und Parallelschaltung passiert.",
          tags: ["Messen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "widerstand", titel: "Der elektrische Widerstand", href: "widerstand.html", key: "grumi-nt7-widerstand-v1",
          text: "Warum manche Leiter den Strom bremsen, das Ohm'sche Gesetz, einfache Rechnungen und der passende Draht.",
          tags: ["Rechnen", "Probenstoff", "KI-Rückmeldung"] },
        { id: "strom-sicher", titel: "Sicher mit Strom umgehen", href: "strom-sicher.html", key: "grumi-nt7-strom-sicher-v1",
          text: "Wann Strom gefährlich wird, was Sicherung und Schutzschalter tun und welche Regeln im Alltag schützen.",
          tags: ["Gefahren erkennen", "Probenstoff", "KI-Rückmeldung"] }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var SPEICHER = "grumi-nt7-freigabe~";
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
  // „grumi-nt7-brand-schutz-v1“ -> „brand-schutz“
  function idAusKey(key) { return String(key || "").replace(/^grumi-nt7-/, "").replace(/-v\d+$/, ""); }

  // Ist das Modul für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
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
    global.fetch(API + "/api/nt7/freigabe", {
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

  // Zug des Kindes: aus der Anmeldung („7M“/„7R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab
  function zug(anmeldung) {
    var z = anmeldung && /^7[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-nt7-zug", z);
      else z = global.sessionStorage.getItem("grumi-nt7-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.NT7 = { THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug };
})(window);
