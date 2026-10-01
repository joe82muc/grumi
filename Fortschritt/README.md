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
| Deutsch 7 (`d7`) | Argumentieren: 5 Module (`de-modul.js`) | `d7-<modul>` |
| Deutsch 9 (`d9`) | Rechtschreibung, Sprachbetrachtung, Satzglieder, Vorleser | `d9-…` |
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

## Offen

- **Deutsch 9 Grammatik** (Sprachbetrachtung 1–10) gründlich überarbeiten: Lernseiten mit Merkkästen,
  Basis- und Plus-Aufgaben (M-Zug), Layout wie Deutsch 9. Gemeinsamer Baustein `grammatik.js` geplant.
- Englisch 7 G1–G4 „Übungen zur Regel“ und Beispielsätze der Vokabeltrainer 7/8R auf Buchnähe prüfen.
- Vokabeltrainer: Ton auf echten iPads kurz prüfen (der Test-Safari unter Windows hat keine Tonausgabe).
- Schulleitung/Datenschutzbeauftragte über Upstash informieren (Auftragsverarbeitung).
