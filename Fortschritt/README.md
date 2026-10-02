# Fortschritt: Verwaltung, Klassen und Lernfortschritt mit Code

Projekt: Proben und Lernfortschritt für alle Klassen an einer Stelle (`proben-verwalten.html`, Lehrerpasswort).
Wer eine Klasse mit Namen hochlädt, bekommt für diese Klasse die passenden Fächer mit Lernfortschritt und die
passenden Proben.

## Stand 02.10.2026

### Verwaltungsseite (`proben-verwalten.html` + `lernfortschritt.js`)

- Aufbau: **Klasse wählen → Bereich wählen**. Bereiche je Klasse: 🔓 Proben, die Fächer mit Lernfortschritt,
  👥 Codes & Namen. Dazu „＋ Neue Klasse (Klassenliste hochladen)“ und „🔓 Alle Proben aller Klassen“.
- Klassen sind echte Klassennamen: `7aM`, `7b`, `8c`, `9d` … Mit „M“ = M-Zug, ohne = R-Klasse. Stufe und Zug
  bestimmen Fächer und Proben (z. B. 8c: Englisch und Informatik, 8aM: Informatik).
- Neue Klasse: Schulmanager-CSV laden. Die Klasse wird aus der Spalte „Klasse“ oder dem Dateinamen erkannt
  („Schüler in der 7aM.csv“), gelesen werden nur Vorname/Nachname (Anfangsbuchstabe bei gleichen Vornamen).
  Adressen, Telefonnummern usw. werden verworfen. Namen bleiben nur im Browser der Lehrkraft.
- Codes & Namen: Codeliste drucken, Namensliste speichern/laden, weitere Kinder, Klasse umbenennen
  (z. B. die alten Codes „9M“ → „9aM“), ganze Klasse löschen (Name zur Bestätigung eintippen).
- Proben je Klasse mit **Link für die Kinder**, sobald eine Probe offen ist (Link kopieren / öffnen). Die
  Vokabeltests wählen den Test über `?test=…` vor, die Grammatiktests über `?test=…`, NT 7 über `?probe=…`.
  Freischalten gilt für die Probe selbst, also für alle Klassen, die sie schreiben.

### Fächer mit Lernfortschritt

| Kurs | Inhalt | Kennungen |
|---|---|---|
| NT 7 (`nt7`, 7M und 7R) | Luft-Modul, Windkraft ×2, Verbrennung, Explosiv | `nt7-<seite>` |
| NT 9 (`nt9`) | Organische Rohstoffe, Module 1–5 | `m01`–`m06` |
| Deutsch 7 (`d7`) | Argumentieren: 5 Module (`de-modul.js`), Grammatik 1–7, Rechtschreibung 1–7 | `d7-<modul>`, `d7-gr-01-b1` …, `d7-rs-01-b1` … |
| Deutsch 8 (`d8`, neu) | Grammatik 1–6, Rechtschreibung 1–6 | `d8-gr-01-b1` …, `d8-rs-01-b1` … |
| Deutsch 9 (`d9`) | Rechtschreibung, Grammatik 1–10 (Basis + Plus), Extra Satzglieder, Vorleser | `d9-sb-01-b1` …, `d9-satzglieder-b1` …, `d9-…` |
| Englisch 7 (`e7`) | Grammatik G1–G4, Vokabeltrainer Unit 1–4 | `e7-u1-g1` …, `e7-uN-vokabeln` |
| Englisch 8 (`e8`, nur R) | Vokabeltrainer Unit 1–4 | `e8-uN-vokabeln` |
| Englisch 9 (`e9`) | Grammatik, Vokabeln, Unit 3/4, Zeiten, Mediation (7 inkl. Hospital), Picture-based talk, E-Mail | `e9…` |
| Informatik 7/8/9 (`i7`, `i8`, `i9`) | Stundenseiten 7 und 8, Netzwerke-Training, Filius-Workshop | `i7-<stunde>`, `i9-netz-mN`, `i9-filius-…` |

Nicht dabei: Mathe und WiB (so gewünscht), Proben (eigene Freischaltung), Argumentationstrainer Deutsch 7
(eigene Lehrerseite mit Namen), mündliche Prüfung Englisch 9 (reine Infoseite).

### Regeln für „richtig gelöst“

- Gezählt wird nur, was richtig gelöst wurde. „Lösung zeigen“ zählt nicht: Informatik 7/8 – eine Aufgabe zählt
  nicht mehr, sobald ihre Lösung zu sehen war; freie Texte erst nach dem Urteil der KI.
- Filius: Arbeitsschritte zählen beim Abhaken, Kontrollfragen nur beim ersten Versuch.
- Vokabeltrainer: ein Wort zählt beim Ankreuzen oder Schreiben, nicht bei „Weiß ich“.
- NT 7 und Deutsch 7: Mit Code hat jedes Kind einen eigenen Speicherstand auf dem Gerät (wie NT 9). Was vor der
  Anmeldung gelöst wurde, zählt nicht für die Lehrkraft.

### Schülerseite (`js/lernstand.js`)

- Eine Anmeldung für alle Fächer und Stufen: `grumi-code-anmeldung` (ältere Anmeldungen aus Klasse 9 werden
  übernommen). NT 9 (`fortschritt.js`) nutzt dieselbe Anmeldung, wenn der Zug passt.
- Klasse 9: Anmeldung ist Pflicht. Klasse 7 und 8: „Ich habe noch keinen Code – ohne Code üben“ (gilt bis der
  Browser geschlossen wird).
- Panel „Dein Stand – Das fehlt dir noch“ auf jeder Übungsseite, Chips springen zur Aufgabe.
- Sparsam: Beim Öffnen einer Seite geht nur eine Meldung raus, wenn der Server etwas noch nicht kennt.

### Server (Repo `englisch_9`, `backend/api/nt9-fortschritt.js`)

- Ein Datensatz je Kind (`nt9:c:<code>`), alle Kinder im Arbeitsspeicher, Änderungen gesammelt alle 6 s per
  MSET, beim Beenden sofort. Grund: Upstash-Freikontingent 500 000 Befehle/Monat. Die alten Schlüssel
  (`nt9:s:`, `nt9:p:`) werden beim ersten Laden übernommen und gelöscht.
- Kurse mit Stufe und Zügen; selbst angemeldete Übungen `<fach><stufe>-…` (höchstens 1500).
- Neue Lehrer-Routen: `lehrer/umbenennen`, `lehrer/loeschen {klasse}`, `lehrer/liste {klasse, kurs, nurKlassen}`.

### KI-Rückmeldungen (gleicher Server)

- Alle KI-Bewertungen außer Mathe laufen über `ANTHROPIC_MODEL_HAIKU` (Standard `claude-haiku-4-5`),
  `ANTHROPIC_MODEL` nur noch als Ersatz. Mathe hat einen eigenen Dienst (`grumi-mathe-ki`) und bleibt unverändert.
- Milder bewerten: Jede Bewertung bekommt den Zusatz „Musterlösung ist ein Beispiel, keine Checkliste; trifft
  die Antwort den Kern, gibt es volle oder fast volle Punkte“. Die strengen Formulierungen (Englisch-Freitext,
  NT-Fragen, Bildbeschreibung) sind entschärft.

### Nebenbei behoben

- Englisch 9 „Mediation: At the hospital“: kaputte Umlaute (z. B. „Sinngem--“, „N-chster“) und die
  Umlaut-Normalisierung beim Prüfen.
- Englisch 7: „Aufgaben aus dem Buch“ und Seitenzahlen in Kommentaren entfernt.
- NT-7-Proben erscheinen nur bei 7M (wie auf der NT-Übersicht).

## Stand 02.10.2026, mittags: Deutsch 7 nur mit Code

- Deutsch 7 (Module, Übersicht, Argumentations-Führerschein) meldet nur noch mit dem 3-stelligen Code an. Wer schon
  mit Code angemeldet ist (z. B. aus Englisch), startet ohne Fenster. Der Server (`/api/de7-argument/start`) nimmt den
  Code, das Kind heißt dort „Code 123“. Die Lehrerseite `7M/Deutsch/lehrer.html` zeigt den Namen aus der Namensliste
  der Lehrkraft (gleicher Browser wie die Verwaltung).

## Stand 02.10.2026, nachmittags: Vokabeltrainer und Vokabeltests

- **Alle 11 Vokabeltrainer** (7 Unit 1–4, 8R Unit 1–4, 9R Unit 1, 9M Unit 3 und 4), gemeinsamer Baustein
  `js/vokabel-extras.js`:
  - Richtung **Deutsch → Englisch voreingestellt** (umschaltbar). „🔊 anhören“ ist vor der Antwort gesperrt, weil es
    die Lösung verraten würde.
  - **📕 Meine Fehlerwörter**: falsch angeklickt, falsch geschrieben, übersprungen oder „Nochmal“ → in die Liste;
    nach 2× richtig hintereinander wieder raus. Liste ansehen (mit 🔊) und „Nur diese Wörter üben“. Mit Code auf dem
    Server (`fehler` beim Melden), auf jedem Gerät da; ohne Code nur auf dem Gerät.
  - **Stimme wählen**: Azure-Stimmen vom Server (Sonia/Ryan britisch, Jenny/Guy amerikanisch) oder englische Stimmen
    des Geräts. Antwortet der Server nicht in 2,5 s, spricht das Gerät. Google-Sprachausgabe entfernt.
  - **KI-Beispielsatz** jetzt auch in Klasse 7 (Niveau A1/A2, Art wählbar).
- **Server**: Azure-Audio wird je Wort zwischengespeichert (`GET /api/speech/speak`, Browser darf 30 Tage cachen),
  nur erlaubte Stimmen, höchstens 400 neue Wörter je IP und Stunde.
- **Lehrkraft**: unter Englisch „Fehlerwörter: Was sitzt noch nicht?“ je Vokabeltrainer (wie viele Kinder, wie oft
  falsch, wie viele noch offen).
- **Vokabeltests (Proben)**: nur noch Deutsch → Englisch. Die alten gemischten Tests Englisch 7 (`e7-u1-test1/2`,
  ersetzt durch 7M/7R) und 8R (`e8r-uN-test1`) sind gelöscht; neu sind `e8r-u1-test2` bis `e8r-u4-test2` mit
  denselben Wörtern, mehrdeutige deutsche Wörter mit Hinweis („umziehen – in eine andere Wohnung“).
  Frühere 8R-Fehler „sich selbst“ (herself/itself) sind über Hinweise getrennt.

## Stand 02.10.2026, abends: Informatik 7, 8 und 9

- „Dein Stand“ mit Code steht jetzt **oben** auf jeder Stunde (Informatik 7 und 8), jedem Netzwerke-Modul und jeder
  Filius-Station (vorher erst über den Aufgaben, weit unten).
- Die **Übersichten** Informatik 7, 8 und 9 zeigen „Dein Stand“ für alle Stunden/Module (kompakt: noch nicht
  begonnene stehen in einer Zeile). `Lernstand.uebersicht({ kompakt: true })`.
- **Informatik 9 ohne Präsentation**: Die Module verlinken das PDF nicht mehr. Der Inhalt der Folien steht in den
  Merkkästen „Zuerst lesen“ jedes Moduls (dazu neu: Rollenspiel Hub oder Switch, Folie 27). Die Knöpfe bei den
  Aufgabenteilen springen zum passenden Merkkasten („Nachlesen: Netzwerktopologien“), der Tipp am Modulende ebenso.
  Die Trainingsseite zeigt den „roten Faden“ der sechs Stunden statt der PDF-Knöpfe. Die PDF-Datei liegt weiter im
  Ordner (für die Lehrkraft), ist aber nirgends mehr verlinkt.
- **Übersicht Informatik 9 neu**: zwei Bereiche mit allen Modulen als Karten (Netzwerke verstehen: Modul 1–6,
  Probe; Filius-Workshop: Station 1–5, Videos, Prüfung, Beispieldatei). Die Beispieldatei-Kachel erscheint wieder nur
  nach Freigabe (war vorher immer sichtbar).

## Stand 03.10.2026: Deutsch 9 Grammatik neu

- **Zehn Themenseiten** `9/Deutsch/Sprachbetrachtung/sb_01` … `sb_10` (Wortarten, Satzglieder, Haupt- und Nebensatz,
  Satzreihe und Satzgefüge, Aktiv und Passiv, direkte und indirekte Rede, Zeitformen, Konjunktiv I und II,
  Satzbau und Stil, Kommasetzung), jede mit drei Teilen: **Verstehen** (Merkkästen, typische Fehler),
  **Basis** (6 Aufgaben für alle), **Plus** (4 Aufgaben, Quali-Niveau). Alle Beispiele selbst formuliert,
  Aufgabenformen wie im Quali Teil B (markiert mit „wie im Quali“).
- Gemeinsamer Baukasten `grammatik.js` + `grammatik.css` (helles Layout wie die Fachseite Deutsch 9). Aufgabentypen:
  Ankreuzen, Lückentext (tippen oder auswählen), Markieren (antippen oder mit dem Finger ziehen, mehrere Farben),
  Zuordnen, Kommas setzen, Umformen, Selbst schreiben, Satzbau. „Lösung zeigen“ erst nach einem Fehlversuch – und
  dann zählt die Aufgabe nicht.
- **Plus und Zug**: Für den M-Zug gehören die Plus-Aufgaben dazu. Für R-Klassen sind sie freiwillig: Sie zählen weder
  im Balken der Kinder noch in der Prozentzahl der Lehreransicht (`Lernstand.seite/uebersicht({ freiwillig })`,
  `lernfortschritt.js` blendet Teil „Plus“ für R-Klassen aus der Zählung aus).
- **KI-Zweitmeinung** (nur mit Code): Weicht eine Umformung oder ein eigener Satz von den hinterlegten Lösungen ab,
  prüft Haiku mild, ob die verlangte Form stimmt (`POST /api/d9-grammatik/pruefen`, englisch_9
  `backend/api/deutsch9-grammatik.js`, höchstens 150 Anfragen je Code und Stunde, nichts wird gespeichert). Ohne Server
  prüfen eigene Sätze nach einem Muster, Umformungen nur gegen die Lösungen.
- Neue Kennungen `d9-sb-NN-b1` … `-p4`; die alten (`ex0` …) zählen nicht mehr. Übersicht `Sprachbetrachtung/index.html`
  mit „Dein Stand“; die Fachseite Deutsch 9 nennt den Bereich jetzt „Grammatik“.

## Stand 03.10.2026, später: Deutsch 7, 8 und 9 im NT-7-Layout

- **Gemeinsames Aussehen** `css/deutsch.css` (Aufbau der NT-7-Module in den Deutsch-Farben von Deutsch 7) für alle
  Deutsch-Seiten; Aufgaben-Bausteine in `css/grammatik.css`. Der Baukasten liegt jetzt zentral in `js/grammatik.js`
  und gilt für jede Stufe: `themen.js` je Ordner setzt mit `Grammatik.vorgaben({...})` Kurs, Bereich, Präfix und Themenliste.
  Neue Typen: `trennen` (Umstellprobe mit Trennstrichen), `analyse` (Satz-Detektiv: abtrennen, dann benennen,
  Ziel n Sätze), Option `genau` (Rechtschreibung: Groß/klein zählt, keine KI). Auswahl-Lücken vergleichen exakt.
- **Deutsch 9**: Fachseite, Grammatik-Übersicht, Rechtschreibstrategien (13 Seiten + Sammelseite), M-Training,
  Lektüren umgestellt (Inhalte, Punkte und Lernstand-Kennungen unverändert). Rechtschreib-Übersicht mit Karten und
  Kurzbeispielen. Note erst, wenn alle Aufgaben bearbeitet sind. Strategie 11: Silbentrennung „st“ korrigiert
  (Fens-ter, s und t werden getrennt).
- **Satzglieder bestimmen** neu als Extraübung der Grammatik (`d9-satzglieder`): Prädikat finden, Umstellprobe,
  benennen, Satz-Detektiv (Basis und Profi mit Genitiv-/Präpositionalobjekt). Die alte Fassung hatte fragwürdige
  Lösungen (z. B. „zu mehr Bewegung“ als Akkusativobjekt).
- **Deutsch 7** (`7M/Deutsch/Grammatik`, `…/Rechtschreibung`, für 7M und 7R): 7 Grammatik- und 7 Rechtschreibthemen nach
  LehrplanPLUS D7 (Relativ-/Demonstrativpronomen, Futur II, Aktiv/Passiv, Konjunktiv, Kausaladverbiale, Satzreihe/
  Satzgefüge, Subjekt-/Objektsatz; Strategien, Groß/klein, getrennt/zusammen, s-Laute und das/dass, Fremd- und
  Merkwörter, Kommas, Worttrennung). Die Übersicht `7M/Deutsch/index.html` zeigt Argumentieren, Grammatik und
  Rechtschreibung mit „Dein Stand“.
- **Deutsch 8** (`8/Deutsch`, neu, für 8M und 8R): 6 Grammatik- und 6 Rechtschreibthemen nach LehrplanPLUS D8
  (Modalverben/Modalformen, Konjunktiv I und II, indirekte Rede, Satzgefüge und Schachtelsatz, Finaladverbiale,
  Attribute; Nominalisierungen, getrennt/zusammen, gleich klingende Wörter, Fremdwörter, Kommas, weitere Satzzeichen).
  Startseite verlinkt Deutsch 8 bei 8M und 8R. Backend: Kurs `d8` (englisch_9 `nt9-fortschritt.js`), KI-Zweitmeinung
  für `d7/d8/d9-(sb|gr|rs)-NN`.
- Informatik 9: „So arbeitest du mit einem Modul“, „roter Faden“ und die Kachel „So arbeitest du mit den Modulen“ entfernt.

## Offen

- Deutsch 7/8: Inhalte im Unterricht gegenlesen lassen (Niveau, Fachbegriffe der eingeführten Lehrwerke).
- Englisch 7 G1–G4 „Übungen zur Regel“ und Beispielsätze der Vokabeltrainer 7/8R auf Buchnähe prüfen.
- Vokabeltrainer: Ton auf echten iPads kurz prüfen (der Test-Safari unter Windows hat keine Tonausgabe).
- Schulleitung/Datenschutzbeauftragte über Upstash informieren (Auftragsverarbeitung).
