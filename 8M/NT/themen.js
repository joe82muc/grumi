/* Natur und Technik 8 (8M und 8R): Themenbereiche, Module und Proben an einer Stelle.
 * Genutzt von der Übersicht (../../7M/NT/uebersicht.js mit nt8-dashboard.js), den Modulen (../../7M/NT/modul-basis.js
 * mit nt8.js), den Lernkarten (karten.js), der Probe-Vorbereitung und der Verwaltung (nt7-verwaltung.js,
 * nt8-diagnose.js in proben-verwalten.html). Aufbau und Logik wie 7M/NT/themen.js:
 *   Thema  = Themenbereich = Stoff EINER Probe (etwa vier bis fünf Module)
 *            proben = Kennungen auf dem Server (nt8-block-<bereich>.js): { R, M } = Fassung je Zug;
 *                     der erste Eintrag ist Variante A, der zweite (nach: true) die Nachschreibprobe B
 *            lp     = Abschnitte des LehrplanPLUS, die der Bereich abdeckt
 *   Modul  = etwa 40 bis 45 Minuten (eine Seite in diesem Ordner)
 *            id   = Kennung im Lernstand („nt8-<id>“) und in der Freischaltung
 *            key  = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-nt8-<id>-v1“)
 *            href = Datei in 8M/NT; fehlt sie, steht das Modul als „in Vorbereitung“ in der Übersicht
 *            karten = Zahl der Lernkarten { R, M } (Daten in karten/<id>.js)
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Themenbereiche oder einzelne Module frei (Server /api/nt8/freigabe).
 * Ein Modul-Eintrag geht vor dem Eintrag seines Themas; ohne Eintrag ist ein Modul gesperrt.
 * Neues Modul: hier eintragen – dann steht es in Übersicht, Verwaltung, Lernstand und Lernset der Probe.
 */
(function (global) {
  "use strict";

  var THEMEN = [
    {
      id: "magnet", nr: "01", titel: "Magnetismus und Induktion", kurz: "Magnetismus", icon: "🧲", lp: "2.1, 2.2",
      text: "Vom Kühlschrankmagneten bis zum Umspannwerk: Magnete, Elektromagnete, Elektromotor, Induktion, Generator und Transformator.",
      proben: [{ R: "nt8-magnet-r-a", M: "nt8-magnet-m-a" }, { R: "nt8-magnet-r-b", M: "nt8-magnet-m-b", nach: true }],
      module: [
        { id: "magnetismus", kz: "M1", titel: "Magnete: Pole, Kräfte und Felder", href: "magnetismus.html", key: "grumi-nt8-magnetismus-v1",
          text: "Was Magnete anziehen, warum sich gleiche Pole abstoßen und wie Feldlinien das unsichtbare Magnetfeld sichtbar machen.",
          tags: ["Magnet-Labor", "Lernkarten", "KI-Rückmeldung"] },
        { id: "elektromagnet", kz: "M2", titel: "Der Elektromagnet", href: "elektromagnet.html", key: "grumi-nt8-elektromagnet-v1",
          text: "Strom macht magnetisch: Du baust einen Elektromagneten und findest heraus, wie er stärker wird.",
          tags: ["Elektromagnet-Labor", "Lernkarten", "KI-Rückmeldung"] },
        { id: "elektromotor", kz: "M3", titel: "Von der Leiterschaukel zum Elektromotor", href: "elektromotor.html", key: "grumi-nt8-elektromotor-v1",
          text: "Ein Draht, der im Magnetfeld schaukelt – und wie daraus ein Motor wird, der Föhn, Akkuschrauber und E-Bike antreibt.",
          tags: ["Animationen", "Lernkarten", "KI-Rückmeldung"] },
        { id: "induktion", kz: "M4", titel: "Induktion: Spannung aus Bewegung", href: "induktion.html", key: "grumi-nt8-induktion-v1",
          text: "Magnet und Spule: Du findest heraus, wann eine Spannung entsteht und wovon ihre Größe abhängt.",
          tags: ["Induktions-Labor", "Lernkarten", "KI-Rückmeldung"] },
        { id: "generator-trafo", kz: "M5", titel: "Generator, Wechselspannung und Transformator", href: "generator-trafo.html", key: "grumi-nt8-generator-trafo-v1",
          text: "Wie ein Generator Wechselspannung erzeugt und wie ein Transformator sie hoch- oder heruntersetzt.",
          tags: ["Transformator-Labor", "Rechnen", "Lernkarten"] }
      ]
    },
    {
      id: "energie", nr: "02", titel: "Energie nutzen", kurz: "Energie", icon: "⚡", lp: "2.3, 2.4, 2.5",
      text: "Energie geht nie verloren – aber sie wird entwertet: Energieformen, Leistung und Stromkosten, Kraftwerke und Energie bei chemischen Reaktionen.",
      proben: [{ R: "nt8-energie-r-a", M: "nt8-energie-m-a" }, { R: "nt8-energie-r-b", M: "nt8-energie-m-b", nach: true }],
      module: [
        { id: "energieformen", kz: "E1", titel: "Energie: Formen, Umwandlung, Erhaltung", href: "energieformen.html", key: "grumi-nt8-energieformen-v1",
          text: "Energieformen erkennen, Energieketten legen und verstehen, warum Energie erhalten bleibt und trotzdem „verbraucht“ wirkt.",
          tags: ["Energieketten", "Viertaktmotor", "Lernkarten"] },
        { id: "leistung", kz: "E2", titel: "Elektrische Leistung und Stromkosten", href: "leistung.html", key: "grumi-nt8-leistung-v1",
          text: "Watt, Kilowatt, Kilowattstunde: was Geräte leisten, was sie kosten und wo sich Energie sparen lässt.",
          tags: ["Rechnen", "Stromkosten-Rechner", "Lernkarten"] },
        { id: "kraftwerke", kz: "E3", titel: "Kraftwerke und der Weg des Stroms", href: "kraftwerke.html", key: "grumi-nt8-kraftwerke-v1",
          text: "Wie Kraftwerke Energie umwandeln, was der Wirkungsgrad sagt und warum Strom mit Hochspannung reist.",
          tags: ["Animationen", "Vergleichen", "Lernkarten"] },
        { id: "reaktionsenergie", kz: "E4", titel: "Energie bei chemischen Reaktionen", href: "reaktionsenergie.html", key: "grumi-nt8-reaktionsenergie-v1",
          text: "Manche Reaktionen geben Wärme ab, andere brauchen sie: exotherm, endotherm, Aktivierungsenergie und Katalysator.",
          tags: ["Energiediagramme", "Lehrerversuche", "Lernkarten"] }
      ]
    },
    {
      id: "gesundheit", nr: "03", titel: "Mensch und Gesundheit", kurz: "Gesundheit", icon: "🩺", lp: "3.1 bis 3.5",
      text: "Mikroorganismen, Infektionen und Immunabwehr, Sucht und Abhängigkeit, Schwangerschaft und Verantwortung, Schall und Gehör.",
      proben: [{ R: "nt8-gesundheit-r-a", M: "nt8-gesundheit-m-a" }, { R: "nt8-gesundheit-r-b", M: "nt8-gesundheit-m-b", nach: true }],
      module: [
        { id: "mikroorganismen", kz: "G1", titel: "Mikroorganismen: winzig und wichtig", href: "mikroorganismen.html", key: "grumi-nt8-mikroorganismen-v1",
          text: "Bakterien und Pilze räumen die Natur auf und machen aus Milch Joghurt – ohne sie ginge fast nichts.",
          tags: ["Animationen", "Joghurt-Versuch", "Lernkarten"] },
        { id: "infektion", kz: "G2", titel: "Infektionskrankheiten und Immunabwehr", href: "infektion.html", key: "grumi-nt8-infektion-v1",
          text: "Wie Erreger in den Körper kommen, wie eine Krankheit verläuft, wie sich der Körper wehrt und was Impfen bewirkt.",
          tags: ["Immunabwehr-Modell", "Duell gegen die KI", "Lernkarten"] },
        { id: "sucht", kz: "G3", titel: "Genussmittel, Drogen und Abhängigkeit", href: "sucht.html", key: "grumi-nt8-sucht-v1",
          text: "Wie Abhängigkeit entsteht, was Alkohol und Nikotin anrichten, woran man eine Sucht erkennt und wo es Hilfe gibt.",
          tags: ["Fallbeispiele", "Hilfe finden", "Lernkarten"] },
        { id: "entwicklung", kz: "G4", titel: "Schwangerschaft, Verhütung, Verantwortung", href: "entwicklung.html", key: "grumi-nt8-entwicklung-v1",
          text: "Vom Zyklus über die Befruchtung bis zur Geburt, Schutz des ungeborenen Kindes, Verhütung und Schutz vor Ansteckung.",
          tags: ["Zeitleiste", "Vergleichen", "Lernkarten"] },
        { id: "schall", kz: "G5", titel: "Schall und Gehör", href: "schall.html", key: "grumi-nt8-schall-v1",
          text: "Wie Schall entsteht und sich ausbreitet, wie das Ohr ihn aufnimmt und wie du dein Gehör vor Lärm schützt.",
          tags: ["Ton-Labor", "Ohr-Animation", "Lernkarten"] }
      ]
    },
    {
      id: "stoffe", nr: "04", titel: "Atome, Ionen und chemische Reaktionen", kurz: "Atome und Reaktionen", icon: "⚛️", lp: "4.1, 4.2",
      text: "Wie aus Atomen Ionen werden, warum Natrium und Chlor so heftig reagieren und woran du eine chemische Reaktion erkennst.",
      proben: [{ R: "nt8-stoffe-r-a", M: "nt8-stoffe-m-a" }, { R: "nt8-stoffe-r-b", M: "nt8-stoffe-m-b", nach: true }],
      module: [
        { id: "atom-ion", kz: "A1", titel: "Vom Atom zum Ion", href: "atom-ion.html", key: "grumi-nt8-atom-ion-v1",
          text: "Atomkern und Elektronenhülle – und was passiert, wenn ein Atom Elektronen abgibt oder aufnimmt.",
          tags: ["Atom-Baukasten", "Animationen", "Lernkarten"] },
        { id: "ionenbindung", kz: "A2", titel: "Alkalimetalle, Halogene und die Ionenbindung", href: "ionenbindung.html", key: "grumi-nt8-ionenbindung-v1",
          text: "Zwei reaktionsfreudige Elementfamilien, die Edelgasregel und wie aus Natrium und Chlor Kochsalz wird.",
          tags: ["Elektronen-Übergabe", "Lehrerversuche", "Lernkarten"] },
        { id: "reaktionen", kz: "A3", titel: "Chemische Reaktionen erkennen", href: "reaktionen.html", key: "grumi-nt8-reaktionen-v1",
          text: "Gas, Wärme, neue Farbe, Niederschlag: woran du eine Stoffumwandlung erkennst – und wie Synthese und Analyse ablaufen.",
          tags: ["Teilchenmodell", "Wortgleichungen", "Lernkarten"] },
        { id: "reaktionen-auswerten", kz: "A4", titel: "Reaktionen verstehen und auswerten", href: "reaktionen-auswerten.html", key: "grumi-nt8-reaktionen-auswerten-v1",
          text: "Versuche auswerten wie im Labor: beobachten, Reaktionsschema aufstellen, mit Teilchen erklären und Fehler finden.",
          tags: ["Versuchsprotokoll", "Fehler finden", "Lernkarten"] }
      ]
    },
    {
      id: "saeuren", nr: "05", titel: "Säuren, Laugen und Salze", kurz: "Säuren und Salze", icon: "🧪", lp: "4.3, 4.4",
      text: "Sauer, neutral oder basisch? Gefahrensymbole, Indikatoren und pH-Wert, Säuren und Laugen im Alltag, Neutralisation und Salze.",
      proben: [{ R: "nt8-saeuren-r-a", M: "nt8-saeuren-m-a" }, { R: "nt8-saeuren-r-b", M: "nt8-saeuren-m-b", nach: true }],
      module: [
        { id: "sauer-basisch", kz: "S1", titel: "Saure und basische Lösungen im Alltag", href: "sauer-basisch.html", key: "grumi-nt8-sauer-basisch-v1",
          text: "Zitrone, Essig, Seife, Rohrreiniger: was sauer und was basisch ist und wie Gefahrensymbole dich schützen.",
          tags: ["Gefahrensymbole", "Sicherheit", "Lernkarten"] },
        { id: "ph-wert", kz: "S2", titel: "Indikatoren und pH-Wert", href: "ph-wert.html", key: "grumi-nt8-ph-wert-v1",
          text: "Blaukrautsaft und Universalindikator zeigen Farbe: Du untersuchst Alltagsstoffe und ordnest sie auf der pH-Skala ein.",
          tags: ["Indikator-Labor", "pH-Skala", "Lernkarten"] },
        { id: "saeuren-laugen", kz: "S3", titel: "Säuren und Laugen: Herstellung und Anwendung", href: "saeuren-laugen.html", key: "grumi-nt8-saeuren-laugen-v1",
          text: "Wie Kohlensäure und eine Lauge entstehen, was sie bewirken und wo man sie in Haushalt und Technik braucht.",
          tags: ["Wortgleichungen", "Risiko und Nutzen", "Lernkarten"] },
        { id: "salze", kz: "S4", titel: "Neutralisation und Salze", href: "salze.html", key: "grumi-nt8-salze-v1",
          text: "Säure und Lauge heben sich auf – es entstehen Salz und Wasser. Dazu: Flammenfärbung, Kochsalz und Streusalz.",
          tags: ["Neutralisations-Labor", "Flammenfärbung", "Lernkarten"] }
      ]
    }
  ];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var PREFIX = "grumi-nt8-";
  var SPEICHER = "grumi-nt8-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt ein Modul, auch wenn es für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  // Feste Kürzel der Module (kz, z. B. „M3“): Buchstabe des Themenbereichs + Nummer. Zu sehen sind sie nur in der
  // Verwaltung der Lehrkraft (Freischalten, Lernfortschritt, Proben, Diagnose) – in den Seiten der Kinder steht kein
  // Kürzel. Ein Kürzel bleibt für immer bei seinem Modul; neue Module bekommen die nächste freie Nummer.
  //
  // PROBE_INHALT: Proben, die nicht genau die Module ihres Themenbereichs abdecken (bisher keine). Fehlt eine Probe
  // hier, enthält sie alle Module des Themenbereichs, bei dem sie steht.
  var PROBE_INHALT = {};
  function probeEintrag(testId) {
    for (var i = 0; i < THEMEN.length; i++) {
      var p = THEMEN[i].proben || [];
      for (var j = 0; j < p.length; j++) if (p[j] && (p[j].R === testId || p[j].M === testId)) return { thema: THEMEN[i], probe: p[j], nr: i + 1 };
    }
    return null;
  }
  function probeModule(testId) {
    var ids = PROBE_INHALT[testId], e = probeEintrag(testId), liste = [];
    THEMEN.forEach(function (t) {
      var dabei = !!e && e.thema === t;
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
  function themaVon(id) { for (var i = 0; i < THEMEN.length; i++) if (THEMEN[i].id === id) return THEMEN[i]; return null; }
  // „grumi-nt8-generator-trafo-v1“ -> „generator-trafo“
  function idAusKey(key) { return String(key || "").replace(/^grumi-nt8-/, "").replace(/-v\d+$/, ""); }

  // Ist das Modul für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
  function offen(modul, thema, stand) {
    if (VORSCHAU) return true;
    // Lehrercode: Der Server meldet „alles“ – dann ist jedes Modul offen
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
    global.fetch(API + "/api/nt8/freigabe", {
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
      if (z) global.sessionStorage.setItem("grumi-nt8-zug", z);
      else z = global.sessionStorage.getItem("grumi-nt8-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.NT8 = {
    THEMEN: THEMEN, probeModule: probeModule, probeEintrag: probeEintrag, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, themaVon: themaVon,
    idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug,
    // Angaben für die gemeinsamen Bausteine (7M/NT/modul-basis.js) und die Übersicht (7M/NT/uebersicht.js)
    KURS: "nt8", PREFIX: PREFIX, WORT: "Modul", DAS: "das Modul", ES: "es", STUFE: "8", PFAD: "/api/nt8", FACH: "Natur und Technik",
    SPERRE: "Dieses Modul ist noch nicht freigeschaltet", ZURUECK: "🔬 Zur Übersicht NT 8",
    INTRO: "Erst ausprobieren, dann verstehen: Jedes Modul beginnt mit einem Versuch, einer Animation oder einer Alltagsfrage. Dazu gibt es Lernkarten und ein Lernset für jede Probe. Deine Lehrkraft schaltet die Themenbereiche nach und nach frei.",
    KLEIN_GAST: "Mit deinem Code siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat. Ohne Code ist noch nichts offen."
  };
  // Auf den Seiten von NT 8 arbeiten die Bausteine mit dieser Liste. Die Verwaltung der Lehrkraft lädt mehrere
  // Kurslisten und spricht sie mit ihrem Namen an (NT8, NT7, INF8 …).
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.NT8;
})(window);
