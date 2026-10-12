/* Geschichte/Politik/Geographie 8 (8M und 8R): Themenbereiche und Module an einer Stelle.
 * Genutzt von der Übersicht (../../7M/NT/uebersicht.js), den Modulen (../../7M/NT/modul-basis.js mit ../NT/nt8.js und
 * gpg8.js) und der Verwaltung (nt7-verwaltung.js in proben-verwalten.html). Aufbau und Logik wie 8M/NT/themen.js:
 *   Thema  = Themenbereich = Stoff EINER Probe (drei bis fünf Module)
 *            proben = Kennungen auf dem Server: { R, M } = Fassung je Zug (noch keine – die Proben folgen)
 *            lp     = Lernbereiche des LehrplanPLUS (GPG 8), die der Bereich abdeckt
 *   Modul  = etwa 40 bis 45 Minuten (eine Seite in diesem Ordner)
 *            id   = Kennung im Lernstand („gpg8-<id>“) und in der Freischaltung
 *            key  = Speicherschlüssel des Fortschritts auf dem Gerät („grumi-gpg8-<id>-v1“)
 *            href = Datei in 8M/GPG; fehlt sie, steht das Modul als „in Vorbereitung“ in der Übersicht
 *
 * Freischalten: Die Lehrkraft schaltet je Klasse Themenbereiche oder einzelne Module frei (Server /api/gpg8/freigabe).
 * Ein Modul-Eintrag geht vor dem Eintrag seines Themas; ohne Eintrag ist ein Modul gesperrt.
 * Neues Modul: hier eintragen – dann steht es in Übersicht, Verwaltung und Lernstand.
 */
(function (global) {
  "use strict";

  // Die acht Themenbereiche folgen den Kapiteln des Schulbuchs der Klasse („trio plus 8“, Westermann) – in derselben
  // Reihenfolge, damit Unterricht, Buch und GRUMI zusammenpassen. Inhalte: LehrplanPLUS GPG 8 und die Themen des Buchs.
  var THEMEN = [
    {
      id: "weimar", nr: "01", titel: "Die Weimarer Republik", kurz: "Weimarer Republik", icon: "🗳️", lp: "Lernbereich 2",
      text: "Die erste deutsche Demokratie: wie sie entstand, was ihre Verfassung regelte, welche Krisen sie erschütterten, warum sie 1933 unterging – und was von ihr bleibt.",
      proben: [],
      module: [
        { id: "weimar-anfang", kz: "W1", titel: "1918/19: Vom Kaiserreich zur Republik", href: "weimar-anfang.html", key: "grumi-gpg8-weimar-anfang-v1",
          text: "Kriegsende, Revolution, Ausrufung der Republik und der Vertrag von Versailles: ein schwerer Start.",
          tags: ["Zeitleiste", "Historische Fotos", "Quellenarbeit"] },
        { id: "weimar-verfassung", kz: "W2", titel: "Die Weimarer Verfassung – die erste Demokratie", href: "weimar-verfassung.html", key: "grumi-gpg8-weimar-verfassung-v1",
          text: "Grundrechte, Wahlrecht für Frauen, Reichstag und Reichspräsident: wie die erste demokratische Verfassung aufgebaut war.",
          tags: ["Verfassungsschaubild", "Originalquelle", "KI-Rückmeldung"] },
        { id: "weimar-krisen", kz: "W3", titel: "Krisenjahre: Inflation und Weltwirtschaftskrise", href: "weimar-krisen.html", key: "grumi-gpg8-weimar-krisen-v1",
          text: "Geld, das nichts mehr wert ist, ein kurzer Aufschwung und Millionen ohne Arbeit: wie Krisen das Vertrauen in die Republik zerstörten.",
          tags: ["Geldscheine", "Diagramme", "Historische Fotos"] },
        { id: "weimar-ende", kz: "W4", titel: "Aufstieg der NSDAP und Ende der Republik", href: "weimar-ende.html", key: "grumi-gpg8-weimar-ende-v1",
          text: "Wahlplakate, Wahlergebnisse und Notverordnungen: wie eine kleine Partei groß wurde und die Republik scheiterte.",
          tags: ["Wahlplakate", "Wahlergebnisse", "Karikatur"] },
        { id: "weimar-kultur", kz: "W5", titel: "Was bleibt? Kultur und Alltag der Zwanzigerjahre", href: "weimar-kultur.html", key: "grumi-gpg8-weimar-kultur-v1",
          text: "Radio, Kino, Bauhaus, neue Mode und neue Rechte: was in der Weimarer Zeit entstand und bis heute wirkt.",
          tags: ["Bildergalerie", "Damals und heute", "Duell gegen die KI"] }
      ]
    },
    {
      id: "energie", nr: "02", titel: "Energie", kurz: "Energie", icon: "⚡", lp: "Lernbereich 1",
      text: "Ohne Energie geht nichts: woher Kohle, Erdöl und Erdgas kommen, was Wind, Sonne, Wasser und Biomasse leisten, wie Strom verteilt wird und wie wir sparsam damit umgehen.",
      proben: [],
      module: [
        { id: "energie-traeger", kz: "E1", titel: "Energieträger: Kohle, Erdöl, Erdgas", href: "energie-traeger.html", key: "grumi-gpg8-energie-traeger-v1",
          text: "Woher die Energie kommt, warum Kohle, Öl und Gas so wichtig wurden – und welche Probleme sie machen.",
          tags: ["Bildergalerie", "Diagramme", "Vergleichen"] },
        { id: "energie-erneuerbar", kz: "E2", titel: "Erneuerbare Energien und Stromnetze", href: "energie-erneuerbar.html", key: "grumi-gpg8-energie-erneuerbar-v1",
          text: "Wind, Sonne, Wasser und Biomasse: was sie können, wo ihre Grenzen liegen und warum Strom neue Leitungen braucht.",
          tags: ["Karte", "Diagramme", "Vergleichen"] },
        { id: "energie-sparen", kz: "E3", titel: "Energie sparen – nachhaltig handeln", href: "energie-sparen.html", key: "grumi-gpg8-energie-sparen-v1",
          text: "Wo im Haushalt die meiste Energie verbraucht wird und was du selbst tun kannst.",
          tags: ["Energie-Check", "Rechnen", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "sozialstaat", nr: "03", titel: "Deutschland – ein Sozialstaat", kurz: "Sozialstaat", icon: "🤝", lp: "Lernbereich 4",
      text: "Vom ersten Gehalt bis zur Rente: wie der Staat Menschen absichert, warum die Jungen für die Älteren zahlen und was Armut in einem reichen Land bedeutet.",
      proben: [],
      module: [
        { id: "sozialstaat", kz: "S1", titel: "Das erste Gehalt und der Sozialstaat", href: "sozialstaat.html", key: "grumi-gpg8-sozialstaat-v1",
          text: "Brutto und netto, fünf Versicherungen für die großen Risiken des Lebens – und Hilfen für Kinder und Jugendliche.",
          tags: ["Lohnabrechnung", "Schaubild", "Rechnen"] },
        { id: "generationenvertrag", kz: "S2", titel: "Der Generationenvertrag", href: "generationenvertrag.html", key: "grumi-gpg8-generationenvertrag-v1",
          text: "Wer arbeitet, zahlt für die Rente der Älteren. Was passiert, wenn es immer weniger Junge und immer mehr Ältere gibt?",
          tags: ["Bevölkerungsdiagramm", "Vergleichen", "KI-Rückmeldung"] },
        { id: "armut-ehrenamt", kz: "S3", titel: "Armut – und wer hilft", href: "armut-ehrenamt.html", key: "grumi-gpg8-armut-ehrenamt-v1",
          text: "Was Armut in einem reichen Land bedeutet und wie Staat, Tafeln, Vereine und Ehrenamtliche helfen.",
          tags: ["Fallbeispiele", "Statistik", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "ns", nr: "04", titel: "Die Zeit des Nationalsozialismus", kurz: "Nationalsozialismus", icon: "🕯️", lp: "Lernbereich 2 und 3",
      text: "Wie aus der Demokratie eine Diktatur wurde, wie Propaganda wirkte, wie Menschen entrechtet und ermordet wurden, wie der Krieg Europa zerstörte – und wer sich wehrte.",
      proben: [],
      module: [
        { id: "ns-diktatur", kz: "D1", titel: "Von der Demokratie zur Diktatur", href: "ns-diktatur.html", key: "grumi-gpg8-ns-diktatur-v1",
          text: "Reichstagsbrand, Ermächtigungsgesetz, Gleichschaltung: Schritt für Schritt werden die Grundrechte abgeschafft.",
          tags: ["Zeitleiste", "Originalquellen", "Vergleichen"] },
        { id: "ns-propaganda", kz: "D2", titel: "Propaganda und Medien im „Dritten Reich“", href: "ns-propaganda.html", key: "grumi-gpg8-ns-propaganda-v1",
          text: "Weltanschauung, Radio, Aufmärsche, Jugendorganisationen: Du entschlüsselst, wie Propaganda Menschen beeinflusst.",
          tags: ["Propaganda durchschauen", "Originalquellen", "KI-Rückmeldung"] },
        { id: "ns-verfolgung", kz: "D3", titel: "Ausgegrenzt, entrechtet, verfolgt", href: "ns-verfolgung.html", key: "grumi-gpg8-ns-verfolgung-v1",
          text: "Politische Gegner, Boykott, Nürnberger Gesetze, Novemberpogrome: wie Menschen ihre Rechte verloren.",
          tags: ["Zeitleiste", "Historische Fotos", "Lebensgeschichten"] },
        { id: "ns-krieg", kz: "D4", titel: "Der Zweite Weltkrieg", href: "ns-krieg.html", key: "grumi-gpg8-ns-krieg-v1",
          text: "Vom Überfall auf Polen über den Vernichtungskrieg im Osten und die Zwangsarbeit bis zur Kapitulation.",
          tags: ["Karten", "Zeitleiste", "Historische Fotos"] },
        { id: "ns-holocaust", kz: "D5", titel: "Holocaust – der Völkermord an den europäischen Juden", href: "ns-holocaust.html", key: "grumi-gpg8-ns-holocaust-v1",
          text: "Ghettos, Deportationen, Vernichtungslager: was geschah, wer die Opfer waren und warum wir daran erinnern.",
          tags: ["Lebensgeschichten", "Erinnern", "Quellenarbeit"] },
        { id: "widerstand", kz: "D6", titel: "Widerstand und Zivilcourage", href: "widerstand.html", key: "grumi-gpg8-widerstand-v1",
          text: "Weiße Rose, Georg Elser, 20. Juli 1944, Pater Rupert Mayer, Edelweißpiraten: Menschen, die sich wehrten – und was Zivilcourage heute heißt.",
          tags: ["Flugblatt", "Lebensgeschichten", "KI-Rückmeldung"] },
        { id: "kriegsende", kz: "D7", titel: "Kriegsende 1945, Flucht und Vertreibung", href: "kriegsende.html", key: "grumi-gpg8-kriegsende-v1",
          text: "Der Krieg kommt nach Deutschland: Bomben, Kapitulation, Millionen Menschen ohne Heimat – und die Frage, was bleibt.",
          tags: ["Bildergalerie", "Karte", "Lebensgeschichten"] }
      ]
    },
    {
      id: "demokratie", nr: "05", titel: "Demokratie leben", kurz: "Demokratie", icon: "⚖️", lp: "Lernbereich 3 und 4",
      text: "Mitbestimmen in Schule, Gemeinde und Land, Grundrechte kennen, verstehen, wer in Deutschland was entscheidet, wie ein Gesetz entsteht und warum jede Stimme zählt.",
      proben: [],
      module: [
        { id: "mitbestimmen", kz: "P1", titel: "Mitbestimmen: Schule, Gemeinde, Land", href: "mitbestimmen.html", key: "grumi-gpg8-mitbestimmen-v1",
          text: "Von der SMV über Bürgerbegehren und Gemeinderat bis zum Landtag: wie auch Jugendliche etwas bewegen.",
          tags: ["Fallbeispiel", "Zuordnen", "Duell gegen die KI"] },
        { id: "grundrechte", kz: "P2", titel: "Grund- und Menschenrechte", href: "grundrechte.html", key: "grumi-gpg8-grundrechte-v1",
          text: "Würde, Freiheit, Gleichheit: welche Rechte jeder Mensch hat, wo sie stehen und wie Minderheiten geschützt werden.",
          tags: ["Grundgesetz", "Fallbeispiele", "KI-Rückmeldung"] },
        { id: "verfassungsorgane", kz: "P3", titel: "Wer regiert? Die Verfassungsorgane", href: "verfassungsorgane.html", key: "grumi-gpg8-verfassungsorgane-v1",
          text: "Bundestag, Bundesregierung, Bundesrat, Bundespräsident, Bundesverfassungsgericht – und wer wen kontrolliert.",
          tags: ["Schaubild", "Gewaltenteilung", "Duell gegen die KI"] },
        { id: "gesetzgebung", kz: "P4", titel: "Wie ein Gesetz entsteht", href: "gesetzgebung.html", key: "grumi-gpg8-gesetzgebung-v1",
          text: "Von der Idee über drei Lesungen bis zur Unterschrift – und woran man gute Politik erkennt.",
          tags: ["Ablauf ordnen", "Fallbeispiel", "KI-Rückmeldung"] },
        { id: "wahlen", kz: "P5", titel: "Wahlen und Parteien: Jede Stimme zählt", href: "wahlen.html", key: "grumi-gpg8-wahlen-v1",
          text: "Wahlgrundsätze, Erst- und Zweitstimme, Parteien, Wahlbeteiligung: wie eine Wahl abläuft und warum Erstwähler wichtig sind.",
          tags: ["Stimmzettel", "Diagramme", "KI-Rückmeldung"] }
      ]
    },
    {
      id: "nordamerika", nr: "06", titel: "Nordamerika", kurz: "Nordamerika", icon: "🌎", lp: "Lernbereich 1",
      text: "Vom Eismeer bis zum Golf von Mexiko: Landschaften, Klima und Wetterextreme, die Wirtschaftsmacht USA, Einwanderung, Leben in Stadt und Land – und der Nachbar Kanada.",
      proben: [],
      module: [
        { id: "na-ueberblick", kz: "A1", titel: "Nordamerika im Überblick: Staaten, Städte, Meere", href: "na-ueberblick.html", key: "grumi-gpg8-na-ueberblick-v1",
          text: "Drei große Staaten, zwei Ozeane, Millionenstädte: Du findest dich auf der Karte Nordamerikas zurecht.",
          tags: ["Stumme Karte", "Satellitenbild", "KI-Rückmeldung"] },
        { id: "na-naturraum", kz: "A2", titel: "Großlandschaften: Gebirge, Ebenen, Flüsse", href: "na-naturraum.html", key: "grumi-gpg8-na-naturraum-v1",
          text: "Rocky Mountains, Great Plains, Appalachen, Mississippi, Große Seen und Nationalparks: wie der Kontinent aufgebaut ist.",
          tags: ["Bilder zuordnen", "Profil von West nach Ost", "Karte"] },
        { id: "na-klima", kz: "A3", titel: "Klima- und Vegetationszonen", href: "na-klima.html", key: "grumi-gpg8-na-klima-v1",
          text: "Von der Tundra bis zur Wüste: Du liest Klimadiagramme und erklärst, warum kalte und warme Luft ungebremst aufeinandertreffen.",
          tags: ["Klimadiagramme", "Bilder vergleichen", "KI-Rückmeldung"] },
        { id: "na-naturgefahren", kz: "A4", titel: "Wetterextreme: Tornado, Hurrikan, Blizzard", href: "na-naturgefahren.html", key: "grumi-gpg8-na-naturgefahren-v1",
          text: "Warum es in Nordamerika so heftige Stürme gibt, wie sie entstehen und wie sich die Menschen schützen.",
          tags: ["Satellitenbilder", "Schutzmaßnahmen", "Film"] },
        { id: "usa-industrieland", kz: "A5", titel: "Die USA – eine Wirtschaftsmacht", href: "usa-industrieland.html", key: "grumi-gpg8-usa-industrieland-v1",
          text: "Wirtschaftsregionen, riesige Farmen, Hightech: was die USA stark macht – im Vergleich mit Deutschland.",
          tags: ["Karte", "Diagramme", "KI-Rückmeldung"] },
        { id: "usa-einwanderung", kz: "A6", titel: "Einwanderungsland USA und der „American Dream“", href: "usa-einwanderung.html", key: "grumi-gpg8-usa-einwanderung-v1",
          text: "Warum Millionen Menschen in die USA kamen, was sie sich erhofften und was aus dem Traum geworden ist.",
          tags: ["Historische Fotos", "Diagramme", "Lebensgeschichten"] },
        { id: "usa-stadt-land", kz: "A7", titel: "Stadtland USA: New York, Vorstadt, Farm", href: "usa-stadt-land.html", key: "grumi-gpg8-usa-stadt-land-v1",
          text: "Wolkenkratzer, Schachbrettstraßen, Vorstädte und weites Land: wie Menschen in den USA wohnen und leben.",
          tags: ["Bildergalerie", "Luftbilder", "Film"] },
        { id: "kanada", kz: "A8", titel: "Kanada und die Inuit", href: "kanada.html", key: "grumi-gpg8-kanada-v1",
          text: "Das zweitgrößte Land der Erde: Wälder, Rohstoffe, große Städte im Süden – und das Leben der Inuit zwischen Tradition und Moderne.",
          tags: ["Karte", "Vergleichen", "Bildergalerie"] }
      ]
    },
    {
      id: "nachkrieg", nr: "07", titel: "Deutschland in der Nachkriegszeit", kurz: "Nachkriegszeit", icon: "🕊️", lp: "Lernbereich 2 und 3",
      text: "Leben in Ruinen, die Beschlüsse der Sieger, der Umgang mit den Tätern, der Neuanfang in Ost und West – und wie aus einem Land zwei Staaten wurden.",
      proben: [],
      module: [
        { id: "nachkriegsalltag", kz: "K1", titel: "Stunde Null? Leben in Ruinen", href: "nachkriegsalltag.html", key: "grumi-gpg8-nachkriegsalltag-v1",
          text: "Hunger, Wohnungsnot, Schwarzmarkt, Trümmer räumen: der Alltag nach 1945.",
          tags: ["Bildergalerie", "Lebensmittelkarte", "Zeitzeugen"] },
        { id: "potsdam", kz: "K2", titel: "Die Sieger entscheiden: Potsdam, Besatzungszonen, Nürnberger Prozesse", href: "potsdam.html", key: "grumi-gpg8-potsdam-v1",
          text: "Was die Sieger 1945 beschlossen, wie Deutschland aufgeteilt wurde und wie die Hauptschuldigen vor Gericht kamen.",
          tags: ["Stumme Karte", "Historische Fotos", "Vergleichen"] },
        { id: "zwei-staaten", kz: "K3", titel: "Neuanfang, Berlin-Blockade und zwei deutsche Staaten", href: "zwei-staaten.html", key: "grumi-gpg8-zwei-staaten-v1",
          text: "Neue Parteien, neues Geld, Streit um Berlin: wie 1949 die Bundesrepublik und die DDR entstanden.",
          tags: ["Zeitleiste", "Luftbrücke", "Vergleichen"] }
      ]
    },
    {
      id: "landwirtschaft", nr: "08", titel: "Die Landwirtschaft", kurz: "Landwirtschaft", icon: "🌾", lp: "Lernbereich 4",
      text: "Landwirtschaft früher und heute, was auf Bayerns Feldern wächst, worin sich konventionelle und Bio-Betriebe unterscheiden und was nachhaltiges Einkaufen bedeutet.",
      proben: [],
      module: [
        { id: "landwirtschaft-region", kz: "L1", titel: "Landwirtschaft früher und heute", href: "landwirtschaft-region.html", key: "grumi-gpg8-landwirtschaft-region-v1",
          text: "Vom Pferdegespann zum Melkroboter: wie sich die Landwirtschaft verändert hat und was in Bayern wo wächst.",
          tags: ["Karte", "Damals und heute", "Diagramme"] },
        { id: "landbau-vergleich", kz: "L2", titel: "Konventionell oder Bio? Zwei Betriebe im Vergleich", href: "landbau-vergleich.html", key: "grumi-gpg8-landbau-vergleich-v1",
          text: "Dünger, Pflanzenschutz, Tierhaltung, Ertrag und Preis: zwei Wege, Lebensmittel zu erzeugen.",
          tags: ["Vergleichen", "Siegel", "Film"] },
        { id: "nachhaltig-einkaufen", kz: "L3", titel: "Bio boomt: regional, saisonal, nachhaltig einkaufen", href: "nachhaltig-einkaufen.html", key: "grumi-gpg8-nachhaltig-einkaufen-v1",
          text: "Woher kommt das Essen, was kostet ein regionales Produkt wirklich und was bringt dein Einkauf?",
          tags: ["Saisonkalender", "Rechnen", "Duell gegen die KI"] }
      ]
    }
  ];

  // FEHLT: Module, deren Seite noch nicht fertig und geprüft ist – sie stehen als „in Vorbereitung“ in der Übersicht.
  var FEHLT = [];
  THEMEN.forEach(function (t) { t.module.forEach(function (m) { if (FEHLT.indexOf(m.id) >= 0) delete m.href; }); });

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var PREFIX = "grumi-gpg8-";
  var SPEICHER = "grumi-gpg8-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt ein Modul, auch wenn es für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  // Feste Kürzel der Module (kz, z. B. „W3“): Buchstabe des Themenbereichs + Nummer – nur in der Verwaltung sichtbar.
  // W Weimar · E Energie · S Sozialstaat · D Diktatur (Nationalsozialismus) · P Politik (Demokratie leben) ·
  // A Amerika · K Nachkriegszeit · L Landwirtschaft. Ein Kürzel bleibt für immer bei seinem Modul.
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
  // „grumi-gpg8-weimar-krisen-v1“ -> „weimar-krisen“
  function idAusKey(key) { return String(key || "").replace(/^grumi-gpg8-/, "").replace(/-v\d+$/, ""); }

  // Ist das Modul für diesen Stand offen? stand: { themen, module } vom Server, null = niemand angemeldet
  function offen(modul, thema, stand) {
    if (VORSCHAU) return true;
    if (stand && stand.alles) return true;   // Lehrercode
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
    global.fetch(API + "/api/gpg8/freigabe", {
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
      if (z) global.sessionStorage.setItem("grumi-gpg8-zug", z);
      else z = global.sessionStorage.getItem("grumi-gpg8-zug") || "";
    } catch (_e) {}
    return z === "R" ? "R" : z === "M" ? "M" : "";
  }

  global.GPG8 = {
    THEMEN: THEMEN, probeModule: probeModule, probeEintrag: probeEintrag, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, themaVon: themaVon,
    idAusKey: idAusKey, offen: offen, freigabe: freigabe, zug: zug,
    // Angaben für die gemeinsamen Bausteine (7M/NT/modul-basis.js, 8M/NT/nt8.js) und die Übersicht (7M/NT/uebersicht.js)
    KURS: "gpg8", PREFIX: PREFIX, WORT: "Modul", DAS: "das Modul", ES: "es", STUFE: "8", PFAD: "/api/gpg8", FACH: "Geschichte/Politik/Geographie", KURZ: "GPG", ORDNER: "GPG", TITEL: "GPG",
    UEBERSICHT_R: "../../8R/GPG/index.html",
    // Lernkarten: Der Trainer ../NT/karten.js lädt die Kartensätze aus karten/ in diesem Ordner; foto = Kennung aus bilder/quellen.js
    KARTEN: "../GPG/",
    kartenFoto: function (kennung) {
      var b = (global.GPG8_BILDER || {})[kennung];
      return b ? '<img src="bilder/' + b.d + '" alt="" loading="lazy">' : "";
    },
    SPERRE: "Dieses Modul ist noch nicht freigeschaltet", ZURUECK: "🌍 Zur Übersicht GPG 8",
    INTRO: "Erst hinsehen, dann verstehen: Jedes Modul arbeitet mit Fotos, Karten, Plakaten, Quellen und Diagrammen. Du untersuchst das Material, vergleichst, erklärst und bildest dir ein Urteil. Deine Lehrkraft schaltet die Themenbereiche nach und nach frei.",
    KLEIN_GAST: "Mit deinem Code siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat. Ohne Code ist noch nichts offen."
  };
  // Auf den Seiten von GPG 8 arbeiten die Bausteine mit dieser Liste. Die Verwaltung der Lehrkraft lädt mehrere
  // Kurslisten und spricht sie mit ihrem Namen an (GPG8, NT8, NT7, INF8 …).
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.GPG8;
})(window);
