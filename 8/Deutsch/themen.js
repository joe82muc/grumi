/* Deutsch 8 (8M und 8R): die sieben Themenbereiche, ihre Module und Proben an einer Stelle.
 * DIESE DATEI WIRD GESCHRIEBEN von .codex-build/deutsch8-werkzeug/bau-themen.js (Daten dort ändern, dann neu bauen).
 * Aufbau und Logik wie 7M/Deutsch/themen.js (von dort übernommen): Freischalten je Klasse (Verwaltung → Klasse →
 * Deutsch, Server /api/d8/freigabe), Sperre auf den Modulseiten, Zug des Kindes, Kennungen der Proben
 * (d8-p<nr>-r-a, -r-b, -m-a, -m-b). Die Bausteine der Seiten kommen aus 7M/Deutsch (d7-kit.js …) und 7M/NT
 * (modul-basis.js); sie lesen hier NR = 8 und bilden daraus Namen und Adressen.
 *   Thema  = Themenbereich; proben = Nummern der Proben dieses Bereichs; lp = Lernbereiche des LehrplanPLUS
 *   Modul  = eine Seite in 8/Deutsch; id = Kennung in der Freischaltung, der Lernstand heißt „d8-<id>“;
 *            kz = festes Kürzel (nur in der Verwaltung); ohne href = in Vorbereitung;
 *            offen: true = von sich aus offen (die Grammatik- und Rechtschreibseiten, die es schon vorher gab);
 *            basis, plus = Zahl der Aufgaben (Plus ist für R-Klassen freiwillig); extra = Zusatz zu diesem Modul.
 * Alles Neue ist zuerst gesperrt; die Lehrkraft schaltet je Klasse frei. Lernsteuerung, kein Geheimnisschutz.
 */
(function (global) {
  "use strict";
  var THEMEN = [{ "id": "lesen", "nr": "01", "titel": "Lesen, Sachtexte und Medien", "kurz": "Lesen und Medien", "icon": "📰", "proben": [1], "lp": "Lesen (D8 2.1, 2.3, 2.4) · Sprechen und Zuhören (D8 1.1) · Schreiben (D8 3.1)", "text": "Anspruchsvolle Sachtexte, Schaubilder und Medien erschließen: Hauptaussagen finden, mit Zeilen belegen, zitieren, Texte vergleichen und Quellen prüfen.", "module": [{ "id": "les-01", "kz": "S1", "titel": "Sachtexte erschließen", "tab": "Lesen", "text": "Mit Lesestrategien durch einen längeren Sachtext: Aufbau erkennen, Abschnitte benennen, Hauptaussagen herausarbeiten.", "tags": ["Lesestrategien", "Abschnitte", "Hauptaussage"], "href": "les_01.html", "key": "grumi-d8-les-01-v1" }, { "id": "les-02", "kz": "S2", "titel": "Belegen und zitieren", "tab": "Belegen", "text": "Aussagen mit Textstellen absichern: Zeilenangaben, kurze Zitate, indirekte Wiedergabe – und das Zitat erklären.", "tags": ["Zeilenangaben", "Zitate", "indirekte Wiedergabe"], "href": "les_02.html", "key": "grumi-d8-les-02-v1" }, { "id": "les-03", "kz": "S3", "titel": "Tabellen, Diagramme, Infografiken", "tab": "Schaubilder", "text": "Diskontinuierliche Texte lesen: Werte ablesen, vergleichen, Aussagen prüfen und in Worte fassen – auch ein Formular.", "tags": ["Diagramm", "Tabelle", "Formular"], "href": "les_03.html", "key": "grumi-d8-les-03-v1" }, { "id": "les-04", "kz": "S4", "titel": "Nachricht, Kommentar, Reportage", "tab": "Zeitung", "text": "Journalistische Textsorten unterscheiden: Was informiert, was wertet, was erzählt anschaulich?", "tags": ["Textsorten", "Information und Wertung", "🎧 Hörtext: Nachricht"], "href": "les_04.html", "key": "grumi-d8-les-04-v1" }, { "id": "les-05", "kz": "S5", "titel": "Texte vergleichen, Absichten erkennen", "tab": "Vergleichen", "text": "Zwei Texte zum selben Thema: Was sagen beide, wo unterscheiden sie sich, und was wollen sie erreichen?", "tags": ["Textvergleich", "Aussageabsicht", "Sichtweisen"], "href": "les_05.html", "key": "grumi-d8-les-05-v1" }, { "id": "les-06", "kz": "S6", "titel": "Medien prüfen: Wem kann ich trauen?", "tab": "Medien", "text": "Seriöse und unseriöse Quellen unterscheiden, Wirkungsabsichten erkennen, Wirklichkeit und Erfindung auseinanderhalten.", "tags": ["Quellen prüfen", "Wirkung", "⚔️ Duell gegen die KI"], "href": "les_06.html", "key": "grumi-d8-les-06-v1" }] }, { "id": "argumentieren", "nr": "02", "titel": "Argumentieren und Stellung nehmen", "kurz": "Argumentieren", "icon": "⚖️", "proben": [2], "lp": "Schreiben (D8 3.2) · Sprechen und Zuhören (D8 1.2, 1.3)", "text": "Vom Standpunkt zur begründeten Stellungnahme: Argumente bauen, gewichten, Gegenargumente bedenken und andere überzeugen – schriftlich und im Gespräch.", "module": [{ "id": "arg-01", "kz": "A1", "titel": "These, Argument, Beispiel", "tab": "Aufbau", "text": "So ist ein Argument gebaut: Behauptung, Begründung, Beispiel oder Beleg – und am Ende die Schlussfolgerung.", "tags": ["These", "Begründung", "Beispiel und Beleg"], "href": "arg_01.html", "key": "grumi-d8-arg-01-v1" }, { "id": "arg-02", "kz": "A2", "titel": "Argumente gewichten und verknüpfen", "tab": "Ordnen", "text": "Welches Argument ist das stärkste? Argumente ordnen und mit passenden Wörtern verbinden.", "tags": ["gewichten", "Verknüpfungen", "Reihenfolge"], "href": "arg_02.html", "key": "grumi-d8-arg-02-v1" }, { "id": "arg-03", "kz": "A3", "titel": "Gegenargumente bedenken und abwägen", "tab": "Abwägen", "text": "Wer die Gegenseite kennt, überzeugt besser: Gegenargumente aufgreifen, entkräften und abwägen.", "tags": ["Gegenargument", "entkräften", "abwägen"], "href": "arg_03.html", "key": "grumi-d8-arg-03-v1" }, { "id": "arg-04", "kz": "A4", "titel": "Leserbrief und Kommentar", "tab": "Schreiben", "text": "Eine begründete Stellungnahme schreiben, die zum Adressaten passt: Einleitung, Argumente, überzeugender Schluss.", "tags": ["Leserbrief", "Kommentar", "✨ Schreibtrainer"], "href": "arg_04.html", "key": "grumi-d8-arg-04-v1" }, { "id": "arg-05", "kz": "A5", "titel": "Diskutieren und moderieren", "tab": "Gespräch", "text": "Sachlich diskutieren, nachfragen, zusammenfassen – und eine Diskussionsrunde leiten.", "tags": ["Gesprächsregeln", "Moderation", "🎧 Hörtext: Diskussion"], "extraFrage": "Sicher im Argumentieren? Zeig es im Duell!", "extraText": "Zusatz: Argumente vergleichen, gegen die KI antreten und zu zweit am Tisch um Punkte spielen.", "href": "arg_05.html", "key": "grumi-d8-arg-05-v1" }, { "id": "arg-duell", "kz": "A6", "titel": "Argumente-Duelle", "tab": "Duelle", "text": "Welches Argument ist stärker? Welcher Beleg passt? Gegen die KI und zu zweit am Tisch.", "tags": ["⚔️ Duell gegen die KI", "👥 Tischduell"], "kurz": "Duelle", "extra": "arg-05", "href": "arg_duell.html", "key": "grumi-d8-arg-duell-v1" }] }, { "id": "literatur", "nr": "03", "titel": "Literatur und Textanalyse", "kurz": "Literatur", "icon": "📚", "proben": [3], "lp": "Lesen (D8 2.2) · Sprechen und Zuhören (D8 1.1, 1.4) · Schreiben (D8 3.2)", "text": "Kurzgeschichten, Gedichte und Szenen untersuchen: Figuren und ihre Beziehungen, Erzählperspektive, Raum und Zeit, sprachliche Mittel – immer mit Belegen.", "module": [{ "id": "lit-01", "kz": "L1", "titel": "Kurzgeschichten untersuchen", "tab": "Erzähltext", "text": "Mitten hinein, offenes Ende, Alltag: Merkmale der Kurzgeschichte erkennen und die Handlung erschließen.", "tags": ["Kurzgeschichte", "Handlung", "offener Schluss"], "href": "lit_01.html", "key": "grumi-d8-lit-01-v1" }, { "id": "lit-02", "kz": "L2", "titel": "Figuren und ihre Beziehungen", "tab": "Figuren", "text": "Was für ein Mensch ist das? Eigenschaften aus Verhalten und Worten ableiten und mit Textstellen belegen.", "tags": ["Charakterisierung", "Figurenbeziehung", "Textbelege"], "href": "lit_02.html", "key": "grumi-d8-lit-02-v1" }, { "id": "lit-03", "kz": "L3", "titel": "Erzählperspektive, Raum und Zeit", "tab": "Erzählweise", "text": "Wer erzählt – und wie nah? Wie Ort und Zeit gestaltet sind und was das mit der Wirkung macht.", "tags": ["Erzählperspektive", "Raumgestaltung", "Zeitgestaltung"], "href": "lit_03.html", "key": "grumi-d8-lit-03-v1" }, { "id": "lit-04", "kz": "L4", "titel": "Gedichte: Bilder und Wirkung", "tab": "Lyrik", "text": "Sprachliche Bilder entdecken und ihre Wirkung erklären: Vergleich, Metapher, Personifikation, Symbol.", "tags": ["sprachliche Bilder", "Wirkung", "gemeinfreie Gedichte"], "href": "lit_04.html", "key": "grumi-d8-lit-04-v1" }, { "id": "lit-05", "kz": "L5", "titel": "Szene, Hörspiel, Film", "tab": "Medien", "text": "Dieselbe Geschichte als Text, zum Hören und im Film: Was jede Form kann und wie sie wirkt.", "tags": ["szenischer Text", "Medienvergleich", "🎧 Hörtext: Hörspielszene"], "href": "lit_05.html", "key": "grumi-d8-lit-05-v1" }, { "id": "lit-06", "kz": "L6", "titel": "Gestaltend weiterschreiben", "tab": "Schreiben", "text": "In eine Figur hineindenken: innerer Monolog, Brief an eine Figur, Wechsel der Erzählperspektive.", "tags": ["innerer Monolog", "Perspektivwechsel", "✨ Schreibtrainer"], "href": "lit_06.html", "key": "grumi-d8-lit-06-v1" }] }, { "id": "schreiben", "nr": "04", "titel": "Schreiben und Aufsätze", "kurz": "Schreiben", "icon": "✏️", "proben": [4, 5], "lp": "Schreiben (D8 3.1, 3.2, 3.3)", "text": "Die Schreibwerkstatt: planen, schreiben, überarbeiten, abgeben. Zusammenfassen, informieren, Stellung nehmen – mit dem Schreibtrainer an deiner Seite.", "module": [{ "id": "schr-01", "kz": "W1", "titel": "Schreiben planen", "tab": "Planen", "text": "Vom Auftrag zum Plan: Thema klären, Ideen ordnen, Gliederung anlegen – bevor der erste Satz steht.", "tags": ["Schreibplan", "Gliederung", "Mindmap"], "href": "schr_01.html", "key": "grumi-d8-schr-01-v1" }, { "id": "schr-02", "kz": "W2", "titel": "Zusammenfassen", "tab": "Zusammenfassen", "text": "Das Wesentliche in eigenen Worten: Texte und Schaubilder knapp, sachlich und im Präsens zusammenfassen.", "tags": ["Kernaussagen", "eigene Worte", "✨ Schreibtrainer"], "href": "schr_02.html", "key": "grumi-d8-schr-02-v1" }, { "id": "schr-03", "kz": "W3", "titel": "Informieren und berichten", "tab": "Informieren", "text": "Über ein Ereignis sachlich informieren: W-Fragen, Reihenfolge, sachliche Sprache.", "tags": ["Bericht", "W-Fragen", "✨ Schreibtrainer"], "href": "schr_03.html", "key": "grumi-d8-schr-03-v1" }, { "id": "schr-04", "kz": "W4", "titel": "Die begründete Stellungnahme", "tab": "Stellung nehmen", "text": "Der ganze Aufsatz: Einleitung, Argumente in guter Reihenfolge, Schluss – geplant, geschrieben, überarbeitet.", "tags": ["Aufsatz", "Schreibplan", "✨ Schreibtrainer"], "href": "schr_04.html", "key": "grumi-d8-schr-04-v1" }, { "id": "schr-05", "kz": "W5", "titel": "Zitate und indirekte Rede einbauen", "tab": "Zitieren", "text": "Fremde Aussagen richtig in den eigenen Text einbauen: wörtlich zitieren oder in indirekter Rede wiedergeben.", "tags": ["Zitat", "indirekte Rede", "Redeeinleitung"], "href": "schr_05.html", "key": "grumi-d8-schr-05-v1" }, { "id": "schr-06", "kz": "W6", "titel": "Texte überarbeiten", "tab": "Überarbeiten", "text": "Mit Checkliste und Rückmeldung zum besseren Text: Inhalt, Aufbau, Sprache – und die eigenen Fehlerschwerpunkte.", "tags": ["Checkliste", "Feedback", "Überarbeitungsziele"], "href": "schr_06.html", "key": "grumi-d8-schr-06-v1" }] }, { "id": "beruf", "nr": "05", "titel": "Beruf, Kommunikation und Präsentation", "kurz": "Beruf", "icon": "💼", "proben": [], "lp": "Schreiben (D8 3.2) · Sprechen und Zuhören (D8 1.2, 1.3) · Lesen (D8 2.3) · Sprache (D8 4.1)", "text": "Fit für Praktikum und Bewerbung: anschreiben, anrufen, vorstellen, berichten und präsentieren – in der Sprache, die zur Situation passt.", "module": [{ "id": "beruf-01", "kz": "B1", "titel": "Das Bewerbungsschreiben", "tab": "Bewerben", "text": "Aufbau, Inhalt und Ton eines Anschreibens für das Praktikum – und was man besser weglässt.", "tags": ["Anschreiben", "formale Sprache", "✨ Schreibtrainer"], "href": "beruf_01.html", "key": "grumi-d8-beruf-01-v1" }, { "id": "beruf-02", "kz": "B2", "titel": "Das Bewerbungsgespräch", "tab": "Gespräch", "text": "Vorbereiten, antworten, nachfragen: ein Vorstellungsgespräch durchspielen – mit Körpersprache und passender Sprache.", "tags": ["Gespräch üben", "Körpersprache", "🎧 Hörtext: Vorstellungsgespräch"], "href": "beruf_02.html", "key": "grumi-d8-beruf-02-v1" }, { "id": "beruf-03", "kz": "B3", "titel": "Telefonieren und E-Mails schreiben", "tab": "Kontakt", "text": "Im Betrieb anrufen und eine E-Mail schreiben: höflich, klar, vollständig – anders als im Chat.", "tags": ["Telefonat", "E-Mail", "🎧 Hörtext: Telefongespräch"], "href": "beruf_03.html", "key": "grumi-d8-beruf-03-v1" }, { "id": "beruf-04", "kz": "B4", "titel": "Vom Praktikum berichten", "tab": "Praktikum", "text": "Tagesbericht, Tätigkeiten, Fachwörter: Erfahrungen aus dem Praktikum sachlich festhalten.", "tags": ["Praktikumsbericht", "Fachsprache", "Formular"], "href": "beruf_04.html", "key": "grumi-d8-beruf-04-v1" }, { "id": "beruf-05", "kz": "B5", "titel": "Präsentieren und Rückmeldung geben", "tab": "Präsentieren", "text": "Einen Kurzvortrag planen, mit Medien stützen, frei sprechen – und faires Feedback geben.", "tags": ["Kurzvortrag", "Medien", "Feedback"], "href": "beruf_05.html", "key": "grumi-d8-beruf-05-v1" }] }, { "id": "grammatik", "nr": "06", "titel": "Grammatik und Sprache", "kurz": "Grammatik", "icon": "✍️", "proben": [6, 7], "lp": "Sprachgebrauch und Sprache untersuchen (D8 4.1, 4.2)", "text": "Sprache genau untersuchen: Konjunktiv und indirekte Rede, Satzgefüge, Satzglieder und Attribute – und wie Sprache je nach Situation wirkt.", "module": [{ "id": "gr-01", "kz": "G1", "titel": "Wortarten und Modalverben", "href": "Grammatik/gr_01.html", "key": "grumi-d8-gr-01", "basis": 6, "plus": 3, "offen": true, "text": "Wortarten sicher bestimmen; die Modalverben können, müssen, dürfen, sollen, wollen, mögen." }, { "id": "gr-02", "kz": "G2", "titel": "Konjunktiv I und II", "href": "Grammatik/gr_02.html", "key": "grumi-d8-gr-02", "basis": 6, "plus": 3, "offen": true, "text": "Zwei Konjunktive, zwei Aufgaben: wiedergeben, was andere sagen – und ausdrücken, was nur gedacht ist." }, { "id": "gr-03", "kz": "G3", "titel": "Indirekte Rede", "href": "Grammatik/gr_03.html", "key": "grumi-d8-gr-03", "basis": 6, "plus": 3, "offen": true, "text": "Äußerungen anderer in der indirekten Rede wiedergeben – für Bericht, Zusammenfassung und Zeitung." }, { "id": "gr-04", "kz": "G4", "titel": "Satzreihe, Satzgefüge, Schachtelsatz", "href": "Grammatik/gr_04.html", "key": "grumi-d8-gr-04", "basis": 6, "plus": 3, "offen": true, "text": "Sätze verbinden und Zusammenhänge genau ausdrücken; Wirkung verschiedener Satzformen." }, { "id": "gr-05", "kz": "G5", "titel": "Satzglieder und Finaladverbiale", "href": "Grammatik/gr_05.html", "key": "grumi-d8-gr-05", "basis": 6, "plus": 3, "offen": true, "text": "Grund und Zweck unterscheiden: die Adverbialien, neu das Finaladverbiale (Wozu?)." }, { "id": "gr-06", "kz": "G6", "titel": "Attribute und Attributsätze", "href": "Grammatik/gr_06.html", "key": "grumi-d8-gr-06", "basis": 6, "plus": 3, "offen": true, "text": "Nomen genauer beschreiben: Attribute und Attributsätze erkennen und einsetzen." }, { "id": "spr-01", "kz": "G7", "titel": "Sprache passt sich an", "tab": "Sprache", "text": "Fachsprache, Jugendsprache, Dialekt, gesprochen oder geschrieben: Welche Sprache passt zu welcher Situation?", "tags": ["Sprachebenen", "Fachsprache", "Sprache im Netz"], "href": "spr_01.html", "key": "grumi-d8-spr-01-v1" }, { "id": "spr-02", "kz": "G8", "titel": "Wörter und ihre Wirkung", "tab": "Wortschatz", "text": "Fremdwörter und ihre Herkunft, Wortfelder, Wortbildung – und was beschönigende oder übertreibende Wörter bewirken.", "tags": ["Fremdwörter", "Wortbildung", "Euphemismus"], "extraFrage": "Fit in Grammatik? Zeig es im Duell!", "extraText": "Zusatz für alle Grammatik-Themen: Fehler aufspüren, gegen die KI antreten und zu zweit am Tisch um Punkte spielen.", "href": "spr_02.html", "key": "grumi-d8-spr-02-v1" }, { "id": "gr-duell", "kz": "G9", "titel": "Grammatik-Duelle", "tab": "Duelle", "text": "Konjunktiv, Satzgefüge, Attribute: Wo steckt der Fehler? Gegen die KI und zu zweit am Tisch.", "tags": ["⚔️ Duell gegen die KI", "👥 Tischduell"], "kurz": "Duelle", "extra": "spr-02", "href": "gr_duell.html", "key": "grumi-d8-gr-duell-v1" }] }, { "id": "rechtschreibung", "nr": "07", "titel": "Rechtschreibung und Sprachtraining", "kurz": "Rechtschreibung", "icon": "📝", "proben": [8], "lp": "Richtig schreiben (D8 4.3) · Texte überarbeiten (D8 3.3)", "text": "Sicher schreiben: Nominalisierungen, getrennt oder zusammen, Fremdwörter, Kommas und weitere Satzzeichen – und ein Training für deine eigenen Fehlerschwerpunkte.", "module": [{ "id": "rs-01", "kz": "R1", "titel": "Nominalisierungen", "href": "Rechtschreibung/rs_01.html", "key": "grumi-d8-rs-01", "basis": 6, "plus": 3, "offen": true, "text": "", "icon": "🔠", "bsp": "beim <b>L</b>aufen · etwas <b>N</b>eues · das <b>B</b>este" }, { "id": "rs-02", "kz": "R2", "titel": "Getrennt oder zusammen?", "href": "Rechtschreibung/rs_02.html", "key": "grumi-d8-rs-02", "basis": 5, "plus": 2, "offen": true, "text": "", "icon": "🔗", "bsp": "<b>schwerfallen</b> · <b>schwer fallen</b> · zur<b>zeit</b>" }, { "id": "rs-03", "kz": "R3", "titel": "Gleich klingende Wörter", "href": "Rechtschreibung/rs_03.html", "key": "grumi-d8-rs-03", "basis": 6, "plus": 2, "offen": true, "text": "", "icon": "👂", "bsp": "L<b>ie</b>d – L<b>i</b>d · S<b>ai</b>te – S<b>ei</b>te · da<b>s</b> – da<b>ss</b>" }, { "id": "rs-04", "kz": "R4", "titel": "Fremdwörter", "href": "Rechtschreibung/rs_04.html", "key": "grumi-d8-rs-04", "basis": 5, "plus": 2, "offen": true, "text": "", "icon": "🌍", "bsp": "Informa<b>tion</b> · akt<b>iv</b> · offizi<b>ell</b> · reag<b>ieren</b>" }, { "id": "rs-05", "kz": "R5", "titel": "Kommasetzung", "href": "Rechtschreibung/rs_05.html", "key": "grumi-d8-rs-05", "basis": 5, "plus": 2, "offen": true, "text": "", "icon": "✒️", "bsp": "Sie hofft<b>,</b> bald fertig zu sein. · Herr Kern<b>,</b> unser Trainer<b>,</b> …" }, { "id": "rs-06", "kz": "R6", "titel": "Weitere Satzzeichen", "href": "Rechtschreibung/rs_06.html", "key": "grumi-d8-rs-06", "basis": 5, "plus": 2, "offen": true, "text": "", "icon": "⁉️", "bsp": "Ein- und Ausgang · … · ; · –" }, { "id": "rs-fehler", "kz": "R7", "titel": "Mein Fehlertraining", "tab": "Training", "text": "Finde heraus, wo deine Fehler stecken – und übe genau das mit kurzen Aufgaben.", "tags": ["Fehler-Check", "eigene Schwerpunkte"], "icon": "🎯", "bsp": "Wo passieren <b>deine</b> Fehler? Finde es heraus und übe genau das.", "extraFrage": "Sicher in Rechtschreibung? Zeig es im Duell!", "extraText": "Zusatz: Fehler aufspüren, gegen die KI antreten und zu zweit am Tisch um Punkte spielen.", "href": "rs_fehler.html", "key": "grumi-d8-rs-fehler-v1" }, { "id": "rs-duell", "kz": "R8", "titel": "Rechtschreib-Duelle", "tab": "Duelle", "text": "Groß oder klein, getrennt oder zusammen, Komma oder nicht? Gegen die KI und zu zweit am Tisch.", "tags": ["⚔️ Duell gegen die KI", "👥 Tischduell"], "kurz": "Duelle", "extra": "rs-fehler", "icon": "⚔️", "href": "rs_duell.html", "key": "grumi-d8-rs-duell-v1" }] }];

  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com");
  var SPEICHER = "grumi-d8-freigabe~";
  var suche = "";
  try { suche = global.location.search || ""; } catch (_e) {}
  // Vorschau für Lehrkräfte (Link aus der Verwaltung): zeigt ein Modul, auch wenn es für die Klasse gesperrt ist
  var VORSCHAU = /[?&]vorschau=1/.test(suche);

  // Feste Kürzel der Module (kz, z. B. „E3“): Buchstabe des Themenbereichs + Nummer. Zu sehen sind sie nur in der
  // Verwaltung der Lehrkraft (Freischalten, Lernfortschritt, Proben) – in den Seiten der Kinder steht kein Kürzel.
  // Ein Kürzel bleibt für immer bei seinem Modul: Neue Module bekommen die nächste freie Nummer ihres Themenbereichs,
  // vergebene Kürzel werden nicht neu verteilt (auch nicht, wenn sich die Reihenfolge ändert).
  //
  // PROBE_INHALT: Proben, die nicht genau die Module ihres Themenbereichs abdecken. Fehlt eine Probe hier, enthält sie
  // alle Module des Themenbereichs, bei dem sie steht (ohne Extra-Module). So steht in der Verwaltung bei jeder Probe,
  // welche Module die Kinder dafür brauchen.
  var PROBE_INHALT = {
    1: ["les-01","les-02","les-03","les-04"],
    4: ["schr-01","schr-02","schr-03","les-03"],
    5: ["schr-01","schr-04","schr-05","schr-06","arg-04"],
    6: ["gr-01","gr-02","gr-03"],
    7: ["gr-04","gr-05","gr-06","spr-01","spr-02"],
    8: ["rs-01","rs-02","rs-03","rs-04","rs-05","rs-06"]
  };
  // testId: „d8-p3-m-a“ oder die Nummer der Probe
  function probeModule(testId) {
    var treffer = /^d8-p(\d+)-/.exec(String(testId || "")), nr = treffer ? Number(treffer[1]) : Number(testId), ids = PROBE_INHALT[nr], liste = [];
    THEMEN.forEach(function (t) {
      var dabei = (t.proben || []).indexOf(nr) >= 0;
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
    global.fetch(API + "/api/d8/freigabe", {
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
     bekannte Stand des Geräts, dann der vom Server. Die Seite ruft D8.sperre(id, anmeldung, opt) auf – auch erneut,
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
        '<a href="' + esc(opt.uebersicht || "index.html") + '">📚 Zur Übersicht Deutsch 8</a><a href="' + esc(opt.start || "../../index.html") + '">🏠 Startseite</a></nav></div>';
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
  // („grumi-d8-les-01-v1“ -> „les-01“) und Zug des Kindes (M oder R)
  var PREFIX = "grumi-d8-";
  function idAusKey(key) { return String(key || "").replace(/^grumi-d8-/, "").replace(/-v\d+$/, ""); }
  // Zug des Kindes: aus der Anmeldung („8M“/„8R“), sonst aus dem Link der Übersicht (?zug=R) oder dem Tab
  function zug(anmeldung) {
    var z = anmeldung && /^8[MR]$/.test(String(anmeldung.zug || "")) ? anmeldung.zug.slice(1) : "";
    if (!z) { var m = /[?&]zug=([MR])\b/i.exec(suche); if (m) z = m[1].toUpperCase(); }
    try {
      if (z) global.sessionStorage.setItem("grumi-d8-zug", z);
      else z = global.sessionStorage.getItem("grumi-d8-zug") || "";
    } catch (_e) {}
    return z;
  }
  // Kennung einer Probe auf dem Server: Nummer, Zug (R oder M), Variante (A oder B)
  function probeId(nr, z, variante) { return "d8-p" + nr + "-" + String(z || "M").toLowerCase() + "-" + String(variante || "A").toLowerCase(); }

  // Extra-Module eines Moduls (in der Reihenfolge der Liste)
  function extrasVon(id) {
    var reg = modulVon(id);
    return reg ? reg.thema.module.filter(function (m) { return m.extra === id; }) : [];
  }

  global.D8 = {
    THEMEN: THEMEN, probeModule: probeModule, API: API, VORSCHAU: VORSCHAU, modulVon: modulVon, offen: offen, freigabe: freigabe, sperre: sperre, extrasVon: extrasVon,
    idAusKey: idAusKey, zug: zug, probeId: probeId,
    // Angaben für die Bausteine von NT 7 (Seiten mit ../NT/modul-basis.js)
    KURS: "d8", NR: 8, NAME: "Deutsch 8", PREFIX: PREFIX, WORT: "Modul", DAS: "das Modul", ES: "es",
    SPERRE: "Dieses Modul ist noch nicht freigeschaltet", ZURUECK: "📚 Zur Übersicht Deutsch 8"
  };
  // Seiten, die die NT-7-Bausteine nutzen, finden die Kursliste hier (nicht in der Verwaltung: dort stehen mehrere Listen)
  if (!global.GRUMI_KURS && !/proben-verwalten/.test(global.location.pathname)) global.GRUMI_KURS = global.D8;
})(window);
