/* Deutsch 7 (7M und 7R): die sechs Themenbereiche, ihre Module und Proben an einer Stelle.
 * Genutzt von der Übersicht (index.html mit uebersicht.js), den Modulseiten (../NT/modul-basis.js mit d7-kit.js für
 * Erzählen, Sachtexte, Literatur; de-modul.js, app.js für Argumentieren; Grammatik/themen.js, Rechtschreibung/themen.js)
 * und der Verwaltung (nt7-verwaltung.js in proben-verwalten.html).
 * Aufbau und Logik wie 7M/NT/themen.js:
 *   Thema  = Themenbereich (Erzählen, Sachtexte, Argumentieren, Literatur und Medien, Grammatik, Rechtschreibung)
 *            proben = Nummern der Proben dieses Bereichs (1 bis 8). Jede Probe gibt es auf dem Server viermal:
 *                     d7-p<nr>-r-a, -r-b, -m-a, -m-b (R7/M7, Variante A und Nachschreiber-Variante B)
 *            lp     = Lernbereiche des LehrplanPLUS, zu denen der Themenbereich gehört
 *   Modul  = eine Seite in diesem Ordner
 *            id    = Kennung in der Freischaltung; der Lernstand heißt „d7-<id>“
 *            key   = Speicherschlüssel des Fortschritts auf dem Gerät
 *            href  = Datei in 7M/Deutsch
 *            basis, plus = Zahl der Aufgaben (Grammatik und Rechtschreibung; Plus ist für R-Klassen freiwillig)
 *            extra = Kennung des Moduls, zu dem ein Extra-Modul gehört (kleine Wiederholung, z. B. „Präsens“ zu
 *                    „Zeitformen bis Futur II“). Extras hängen in der Übersicht unter ihrem Modul, zählen nicht zum
 *                    Lernfortschritt und werden nur einzeln freigeschaltet – „Alle freischalten“ öffnet sie nicht mit.
 *            extraFrage, extraText = Überschrift und Satz über den Extras eines Moduls
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
      id: "erzaehlen", nr: "01", titel: "Erzählen und kreativ schreiben", kurz: "Erzählen", icon: "✏️", proben: [1],
      lp: "Schreiben (D7 3.2, 3.3) · Sprechen und Zuhören (D7 1.2)",
      text: "Von der ersten Idee bis zur fertigen Erzählung: planen, spannend aufbauen, lebendig schreiben und den eigenen Text überarbeiten – mit dem Schreibtrainer.",
      module: [
        { id: "erz-01", titel: "Ideen finden und planen", href: "erz_01.html", key: "grumi-d7-erz-01-v1", tab: "Planen",
          text: "Woher kommen gute Ideen? Einfälle sammeln, mit W-Fragen ordnen und einen Schreibplan anlegen, bevor der erste Satz steht.",
          tags: ["Ideenstern", "Schreibplan", "🎧 Hörtext: Interview"] },
        { id: "erz-02", titel: "Einleitung, Hauptteil, Schluss", href: "erz_02.html", key: "grumi-d7-erz-02-v1", tab: "Aufbau",
          text: "Wie eine Erzählung gebaut ist: Die Einleitung führt hin, der Hauptteil erzählt Schritt für Schritt, der Schluss rundet ab.",
          tags: ["Aufbau", "Erzählschritte ordnen", "✨ Schreibtrainer"] },
        { id: "erz-03", titel: "Spannung und Höhepunkt", href: "erz_03.html", key: "grumi-d7-erz-03-v1", tab: "Aufbau",
          text: "Spannung aufbauen, verzögern und auf den Höhepunkt zusteuern – so bleibt deine Leserin bis zum Schluss dabei.",
          tags: ["Spannungskurve", "Höhepunkt ausgestalten", "✨ Schreibtrainer"] },
        { id: "erz-04", titel: "Gefühle, Gedanken, wörtliche Rede", href: "erz_04.html", key: "grumi-d7-erz-04-v1", tab: "Sprache",
          text: "Figuren werden lebendig, wenn man erfährt, was sie fühlen, denken und sagen. Mit den Zeichen der wörtlichen Rede.",
          tags: ["Zeigen statt behaupten", "Redezeichen", "✨ Schreibtrainer"] },
        { id: "erz-05", titel: "Lebendig schreiben", href: "erz_05.html", key: "grumi-d7-erz-05-v1", tab: "Sprache",
          text: "Abwechslungsreiche Satzanfänge, treffende Verben und passende Adjektive machen aus einem braven Text eine gute Erzählung.",
          tags: ["Satzanfänge", "Verben und Adjektive", "⚔️ Duell gegen die KI"] },
        { id: "erz-06", titel: "Schreibwerkstatt: überarbeiten", href: "erz_06.html", key: "grumi-d7-erz-06-v1", tab: "Schreiben",
          text: "Einen Text mit der Checkliste prüfen, gezielt verbessern und eine eigene Erzählung schreiben. Die KI gibt Rückmeldung, du verbesserst selbst.",
          tags: ["Checkliste", "✨ Schreibtrainer", "👥 Tischduell"] }
      ]
    },
    {
      id: "sachtexte", nr: "02", titel: "Sachtexte und Informationen", kurz: "Sachtexte", icon: "🔎", proben: [2, 3],
      lp: "Lesen – mit Texten und weiteren Medien umgehen (D7 2.1, 2.3) · Schreiben (D7 3.2)",
      text: "Texte gezielt lesen, Wichtiges finden, Aussagen mit Zeilenangaben belegen, zusammenfassen und Diagramme, Tabellen und Formulare verstehen.",
      module: [
        { id: "sach-01", titel: "Sachtexte gezielt lesen", href: "sach_01.html", key: "grumi-d7-sach-01-v1", tab: "Lesen",
          text: "Erst überfliegen, dann genau lesen: Abschnitte erkennen, Überschriften finden, W-Fragen stellen und unbekannte Wörter aus dem Zusammenhang klären.",
          tags: ["Lesestrategie", "Textstellen antippen", "Zeilennummern"] },
        { id: "sach-02", titel: "Das Wichtige finden", href: "sach_02.html", key: "grumi-d7-sach-02-v1", tab: "Lesen",
          text: "Schlüsselwörter markieren, Wichtiges von Einzelheiten trennen und die Kernaussage eines Textes in einem Satz sagen.",
          tags: ["Schlüsselwörter", "Kernaussage", "⚔️ Duell gegen die KI"] },
        { id: "sach-03", titel: "Mit dem Text belegen", href: "sach_03.html", key: "grumi-d7-sach-03-v1", tab: "Belegen",
          text: "Aussagen mit Textstellen beweisen: die Stelle finden, die Zeilen angeben, kurz zitieren und das Zitat erklären.",
          tags: ["Zeilenangaben", "Zitate", "⚔️ Duell gegen die KI"] },
        { id: "sach-04", titel: "Zusammenfassen", href: "sach_04.html", key: "grumi-d7-sach-04-v1", tab: "Schreiben",
          text: "Aus einem langen Text wird ein kurzer: Stichpunkte sammeln, ordnen und eine sachliche Zusammenfassung schreiben.",
          tags: ["Stichpunkte", "Zusammenfassung", "✨ Schreibtrainer"] },
        { id: "sach-05", titel: "Diagramme, Tabellen, Formulare", href: "sach_05.html", key: "grumi-d7-sach-05-v1", tab: "Lesen",
          text: "Nicht jeder Text besteht aus Sätzen: Diagramme und Tabellen auswerten, Aussagen dazu formulieren und ein Formular richtig ausfüllen.",
          tags: ["Diagramm lesen", "Tabelle", "Formular ausfüllen"] },
        { id: "sach-06", titel: "Texte vergleichen", href: "sach_06.html", key: "grumi-d7-sach-06-v1", tab: "Vergleichen",
          text: "Zwei Texte, ein Thema: Was will der Text – informieren oder auffordern? Texte vergleichen, eine Radionachricht verstehen.",
          tags: ["Absicht erkennen", "🎧 Hörtext: Nachricht", "👥 Tischduell"] }
      ]
    },
    {
      id: "argumentieren", nr: "03", titel: "Argumentieren und diskutieren", kurz: "Argumentieren", icon: "🗣️", proben: [4],
      lp: "Sprechen und Zuhören (D7 1.2, 1.3) · Schreiben (D7 3.2)",
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
          tags: ["👥 Zu zweit am Tisch", "✨ KI prüft jeden Beitrag", "⚔️ Pro gegen Kontra"] },
        { id: "arg-07", titel: "Stellungnahme und Leserbrief", href: "arg_07.html", key: "grumi-d7-arg-07-v1", tab: "Schreiben",
          text: "Schulhund – ja oder nein? Einen Leserbrief untersuchen, die Bausteine eines Arguments erkennen, einen Einwand entkräften und selbst Stellung nehmen.",
          tags: ["Bausteine eines Arguments", "Einwand entkräften", "✨ Schreibtrainer"] }
      ]
    },
    {
      id: "literatur", nr: "04", titel: "Literatur und Medien", kurz: "Literatur", icon: "📖", proben: [5],
      lp: "Lesen – mit Texten und weiteren Medien umgehen (D7 2.2, 2.4) · Sprechen und Zuhören (D7 1.1, 1.4)",
      text: "Geschichten und Gedichte verstehen, Figuren beschreiben, Deutungen am Text belegen, genau zuhören und Buch, Hörspiel und Film vergleichen.",
      module: [
        { id: "lit-01", titel: "Erzähltexte und Kurzgeschichte", href: "lit_01.html", key: "grumi-d7-lit-01-v1", tab: "Lesen",
          text: "Wer erzählt hier, was passiert und wie endet es? Die Handlung einer kurzen Geschichte erfassen und die Merkmale einer Kurzgeschichte erkennen.",
          tags: ["Handlung", "Erzähler", "Merkmale"] },
        { id: "lit-02", titel: "Figuren und ihre Beziehungen", href: "lit_02.html", key: "grumi-d7-lit-02-v1", tab: "Figuren",
          text: "Figuren beschreiben: Was tun sie, was sagen sie, was fühlen sie? Eigenschaften am Text belegen und Beziehungen zwischen Figuren erklären.",
          tags: ["Charakterisierung", "Textbelege", "⚔️ Duell gegen die KI"] },
        { id: "lit-03", titel: "Gedichte", href: "lit_03.html", key: "grumi-d7-lit-03-v1", tab: "Lyrik",
          text: "Strophe, Vers und Reim, sprachliche Bilder und Stimmung: Gedichte untersuchen, vortragen und selbst weiterschreiben.",
          tags: ["Reim und Bild", "Vortragen", "👥 Tischduell"] },
        { id: "lit-04", titel: "Zuhören: Hörtexte und Hörspiel", href: "lit_04.html", key: "grumi-d7-lit-04-v1", tab: "Zuhören",
          text: "Genau zuhören und Notizen machen: ein Gespräch, eine kurze Geschichte und eine Hörspielszene mit Geräuschen.",
          tags: ["🎧 Drei Hörtexte", "Notizen", "Hörspiel"] },
        { id: "lit-05", titel: "Jugendbuch und szenisches Spiel", href: "lit_05.html", key: "grumi-d7-lit-05-v1", tab: "Buch",
          text: "Dein eigenes Jugendbuch untersuchen: Lesetagebuch, Figurenkarte, Brief an eine Figur – und aus einer Stelle eine Spielszene machen.",
          tags: ["Lesetagebuch", "Rollenkarte", "✨ Schreibtrainer"] },
        { id: "lit-06", titel: "Film und Medien vergleichen", href: "lit_06.html", key: "grumi-d7-lit-06-v1", tab: "Medien",
          text: "Wie erzählt ein Film? Kamera, Ton und Schnitt verstehen, Buch, Hörspiel und Film vergleichen, erfunden und wirklich unterscheiden.",
          tags: ["Kamera-Einstellungen", "Medienvergleich", "Echt oder erfunden?"] }
      ]
    },
    {
      id: "grammatik", nr: "05", titel: "Grammatik und Sprache", kurz: "Grammatik", icon: "✍️", proben: [6, 7],
      lp: "Sprachgebrauch und Sprache untersuchen und reflektieren (D7 4.2)",
      text: "Sieben Themen nach dem Lehrplan: erst die Merkkästen lesen, dann üben. Basis für alle, Plus für den M-Zug – für R-Klassen freiwillig.",
      module: [
        { id: "gr-01", titel: "Wortarten und Pronomen", href: "Grammatik/gr_01.html", key: "grumi-d7-gr-01", basis: 6, plus: 4,
          text: "Wortarten wiederholen, Demonstrativ- und Relativpronomen, Relativsätze bilden." },
        { id: "gr-02", titel: "Zeitformen bis Futur II", href: "Grammatik/gr_02.html", key: "grumi-d7-gr-02", basis: 6, plus: 4,
          text: "Alle sechs Zeitformen bilden und bestimmen – neu: das Futur II.",
          extraFrage: "Du kennst dich noch nicht so gut mit Zeitformen aus?",
          extraText: "Dann wiederhole zuerst – jede Zeitform einzeln, mit kurzer Erklärung und vier Übungen." },
        { id: "gr-03", titel: "Aktiv und Passiv", href: "Grammatik/gr_03.html", key: "grumi-d7-gr-03", basis: 6, plus: 4,
          text: "Wer handelt, was passiert? Das Passiv bilden und Sätze umformen." },
        { id: "gr-04", titel: "Konjunktiv", href: "Grammatik/gr_04.html", key: "grumi-d7-gr-04", basis: 6, plus: 4,
          text: "Konjunktiv I für die indirekte Rede – im M-Zug auch Konjunktiv II." },
        { id: "gr-05", titel: "Satzglieder und Kausaladverbiale", href: "Grammatik/gr_05.html", key: "grumi-d7-gr-05", basis: 6, plus: 3,
          text: "Umstellprobe, Satzglieder bestimmen, Adverbiale des Grundes, Satz-Detektiv." },
        { id: "gr-06", titel: "Satzreihe und Satzgefüge", href: "Grammatik/gr_06.html", key: "grumi-d7-gr-06", basis: 6, plus: 3,
          text: "Haupt- und Nebensatz, Sätze verbinden, Kommas setzen." },
        { id: "gr-07", titel: "Gliedsätze", href: "Grammatik/gr_07.html", key: "grumi-d7-gr-07", basis: 6, plus: 3,
          text: "Subjektsatz und Objektsatz – im M-Zug auch Adverbialsätze.",
          extraFrage: "Fit in Grammatik? Zeig es im Duell!",
          extraText: "Zusatz für alle sieben Themen: Fehler aufspüren, gegen die KI antreten und zu zweit am Tisch um Punkte spielen." },
        // Zusatz zur Grammatik: Duelle (einzeln freischaltbar, zählt nicht zum Lernfortschritt)
        { id: "gr-duell", extra: "gr-07", kurz: "Duelle", titel: "Grammatik-Duelle", href: "gr_duell.html", key: "grumi-d7-gr-duell-v1",
          text: "Fehler finden, KI-Duell, Tischduell." },
        // Extra zu Modul 2: Zeitformen wiederholen (für 7M und 7R gleich, ohne Plus-Teil)
        { id: "zf-praesens", extra: "gr-02", kurz: "Präsens", titel: "Präsens (Gegenwart)", href: "Grammatik/zf_praesens.html", key: "grumi-d7-zf-praesens", basis: 4,
          text: "Was jetzt passiert oder immer so ist." },
        { id: "zf-praeteritum", extra: "gr-02", kurz: "Präteritum", titel: "Präteritum (1. Vergangenheit)", href: "Grammatik/zf_praeteritum.html", key: "grumi-d7-zf-praeteritum", basis: 4,
          text: "Schriftlich erzählen: Es war einmal …" },
        { id: "zf-perfekt", extra: "gr-02", kurz: "Perfekt", titel: "Perfekt (2. Vergangenheit)", href: "Grammatik/zf_perfekt.html", key: "grumi-d7-zf-perfekt", basis: 4,
          text: "Mündlich erzählen: Ich habe … gespielt." },
        { id: "zf-plusquamperfekt", extra: "gr-02", kurz: "Plusquamperfekt", titel: "Plusquamperfekt (Vorvergangenheit)", href: "Grammatik/zf_plusquamperfekt.html", key: "grumi-d7-zf-plusquamperfekt", basis: 4,
          text: "Was vorher schon passiert war." },
        { id: "zf-futur", extra: "gr-02", kurz: "Futur I", titel: "Futur I (Zukunft)", href: "Grammatik/zf_futur.html", key: "grumi-d7-zf-futur", basis: 4,
          text: "Was noch kommen wird." }
      ]
    },
    {
      id: "rechtschreibung", nr: "06", titel: "Rechtschreibung und Sprachtraining", kurz: "Rechtschreibung", icon: "📝", proben: [8],
      lp: "Sprachgebrauch und Sprache untersuchen und reflektieren (D7 4.3)",
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
          bsp: "Zu-<b>ck</b>er · Fens-ter · Was-ser" },
        // Individuelles Fehlertraining: zeigt, bei welcher Fehlerart ein Kind unsicher ist, und bietet dazu kurze Übungen an
        { id: "rs-fehler", titel: "Mein Fehlertraining", href: "rs_fehler.html", key: "grumi-d7-rs-fehler-v1", icon: "🎯",
          bsp: "Wo passieren <b>deine</b> Fehler? Finde es heraus und übe genau das.",
          extraFrage: "Sicher in Rechtschreibung? Zeig es im Duell!",
          extraText: "Zusatz: Fehler aufspüren, gegen die KI antreten und zu zweit am Tisch um Punkte spielen." },
        { id: "rs-duell", extra: "rs-fehler", kurz: "Duelle", titel: "Rechtschreib-Duelle", href: "rs_duell.html", key: "grumi-d7-rs-duell-v1",
          text: "Fehler finden, KI-Duell, Tischduell." }
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
    // Lehrercode: Der Server meldet „alles“ – dann ist jedes Modul offen, auch Extra-Module
    if (stand && stand.alles) return true;
    var s = stand || {}, m = (s.module || {})[modul.id], t = (s.themen || {})[thema.id];
    // Extra-Module folgen nicht dem Themenbereich: Sie sind nur offen, wenn die Lehrkraft sie einzeln freischaltet
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
  // Antwortet der Server nicht, bleibt es beim Speicher; fehler(text) meldet das (z. B. „Server wacht auf“).
  var laufend = {};
  function freigabe(anmeldung, cb, fehler) {
    if (!anmeldung || !anmeldung.code) { cb(null, "gast"); return; }
    var alt = liesSpeicher(anmeldung.klasse);
    if (alt) cb(alt, "speicher");
    // Läuft für diesen Code schon eine Abfrage (z. B. Sperre der Seite und Hinweis auf Extra-Module), hängt sich die
    // zweite an: eine Anfrage an den Server, beide bekommen die Antwort
    var code = String(anmeldung.code);
    if (laufend[code]) { laufend[code].push([cb, fehler]); return; }
    var warten = laufend[code] = [];
    var cbAlle = function (stand, quelle) { cb(stand, quelle); warten.forEach(function (w) { w[0](stand, quelle); }); };
    var fehlerAlle = function (text, wachtAuf) { if (fehler) fehler(text, wachtAuf); warten.forEach(function (w) { if (w[1]) w[1](text, wachtAuf); }); };
    var ctl = global.AbortController ? new AbortController() : null;
    var zeit = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = setTimeout(function () { fehlerAlle("Der Server wacht gerade auf – das kann bis zu einer Minute dauern.", true); }, 6000);
    global.fetch(API + "/api/d7/freigabe", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: anmeldung.code }),
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

  // Für die Bausteine von NT 7 (../NT/modul-basis.js): Kennung des Moduls aus seinem Speicherschlüssel
  // („grumi-d7-erz-01-v1“ -> „erz-01“) und Zug des Kindes (M oder R)
  var PREFIX = "grumi-d7-";
  function idAusKey(key) { return String(key || "").replace(/^grumi-d7-/, "").replace(/-v\d+$/, ""); }
  // Zug des Kindes: aus der Anmeldung („7M“/„7R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab
  function zug(anmeldung) {
    var z = anmeldung && /^7[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-d7-zug", z);
      else z = global.sessionStorage.getItem("grumi-d7-zug") || "";
    } catch (_e) {}
    return z;
  }
  // Kennung einer Probe auf dem Server: Nummer, Zug (R oder M), Variante (A oder B)
  function probeId(nr, z, variante) { return "d7-p" + nr + "-" + String(z || "M").toLowerCase() + "-" + String(variante || "A").toLowerCase(); }

  // Extra-Module eines Moduls (in der Reihenfolge der Liste)
  function extrasVon(id) {
    var reg = modulVon(id);
    return reg ? reg.thema.module.filter(function (m) { return m.extra === id; }) : [];
  }

  global.D7 = {
    THEMEN: THEMEN, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, offen: offen, freigabe: freigabe, sperre: sperre, extrasVon: extrasVon,
    idAusKey: idAusKey, zug: zug, probeId: probeId,
    // Angaben für die Bausteine von NT 7 (Seiten mit ../NT/modul-basis.js)
    KURS: "d7", PREFIX: PREFIX, WORT: "Modul", DAS: "das Modul", ES: "es",
    SPERRE: "Dieses Modul ist noch nicht freigeschaltet", ZURUECK: "📚 Zur Übersicht Deutsch 7"
  };
  // Seiten, die die NT-7-Bausteine nutzen, finden die Kursliste hier (nicht in der Verwaltung: dort stehen mehrere Listen)
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.D7;
})(window);
