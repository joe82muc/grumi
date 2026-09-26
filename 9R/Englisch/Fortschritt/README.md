# Fortschritt: Englisch 9R

## Stand 26.09.2026

### Übersicht (`index.html`)

- Aufbau wie Englisch 7: vier Units nebeneinander (Tablet zwei, Handy eine Spalte), mit rundem Icon.
  - Unit 1 Around Australia, Unit 2 Exploring India, Unit 3 South Africa, Unit 4 New Zealand.
- Unter jeder Unit in dieser Reihenfolge: 1 Vokabeltrainer, 2 Grammatik, 3 Grammatikprobe, 4 Vokabeltests (Proben).
- Unit 2 bis 4 sind als „In Vorbereitung“ angelegt.
- Icons: `images/unit1.png` bis `unit4.png`, 192 × 192 px, je etwa 20 KB. Die Originale (1254 px, je 2–3 MB) liegen außerhalb des Repos in OneDrive unter `9R/Ikons`.
- Die alten Seiten `grammatik.html` und `vokabeln.html` sind von der Übersicht nicht mehr verlinkt.
- Farben wie das Schulbuch **Blue Line 5, Bayern R-Zug (Klett)**: Cyan-Blau als Hauptfarbe (`#00649b`, `#0082c3`, `#0098da`), Orange `#f29100` und Rot `#e30613` als Akzente. Die Übersichtsseiten holen die Farben über `body.blueline` aus `css/englisch-extras.css`, Englisch 7 und 8R bleiben unverändert. Alle anderen 9R-Seiten haben die Farben in ihren eigenen `:root`-Variablen.

### Unit 1

| Baustein | Datei | Stand |
|---|---|---|
| Vokabeltrainer | `unit1/vokabular/vokabeltrainer.html` | unverändert |
| Grammatik-Übersicht | `unit1/grammatik/index.html` | neu |
| G1 simple past | `unit1/grammatik/g1-simple-past.html` | neu |
| G2 will-future | `unit1/grammatik/g2-will-future.html` | neu |
| G3 if-clauses I | `unit1/grammatik/g3-if-clauses.html` | neu |
| G4 present progressive | `unit1/grammatik/g4-present-progressive.html` | neu |
| Grammatikprobe und 4 Kurztests (Schüler) | `unit1/probe/grammatikprobe.html` | neu |
| Grammatikprobe und Kurztests (Lehrkraft) | `unit1/probe/lehrer.html` | neu |
| Vokabeltests (Schüler und Lehrkraft) | `unit1/test/` | umgebaut |

**Grammatikseiten G1–G4:** Grundlage sind die Buchseiten 127–130 (Fotos in OneDrive `9R/Grammatik 9R`). Aufbau und Design wie bei Englisch 7: Merkkasten, „Test yourself“ aus dem Buch, „Mehr üben“ (10 Sätze zum Thema Australien), „Was ist richtig?“ (5 Auswahlfragen) und am Ende ein Link zum passenden Kurztest. Kurz- und Langformen gelten beim Einsetzen beide (`didn't` = `did not`, `I'll` = `I will`).

**Grammatikprobe Unit 1:** 33 Aufgaben, 44 Punkte, Abschnitte A–H (simple past, Kurzantworten, will-future, will oder want to, if-clauses, present progressive, welche Zeitform, 4 Sätze übersetzen).

**Kurztests:** je einer zu G1 (11 Punkte), G2 (10), G3 (11) und G4 (11). Jeder Test hat Lücken, Auswahlfragen und einen Satz zum Übersetzen. Die Grammatikseiten verlinken direkt auf ihren Kurztest (`grammatikprobe.html?test=e9r-u1-kt-g1` usw.).

**Vokabeltests:** Beide Tests fragen nur noch Deutsch → Englisch ab (je 34 Wörter aus der Wortliste von Unit 1). Steht ein Wort mit zwei deutschen Bedeutungen da (`Aufgabe; Auftrag`), zeigt der Test „2 Bedeutungen · 1 Wort“: Gesucht ist trotzdem nur ein englisches Wort. Ist ein deutsches Wort mehrdeutig, steht ein Hinweis in Klammern dabei (z. B. Rezept → „vom Arzt, nicht zum Kochen“). Gleichwertige englische Wörter zählen ebenfalls (z. B. ill/sick, rock/stone).

### Notenschlüssel 9R (Vokabeltests, Grammatikprobe, Kurztests)

50 % = Note 3.

| Note | ab Prozent |
|---|---|
| 1 | 87 % |
| 2 | 73 % |
| 3 | 50 % |
| 4 | 37 % |
| 5 | 20 % |
| 6 | 0 % |

## Auswertung und KI (Backend auf Render, Dienst `englisch-9`)

Das Backend liegt im Repository `englisch_9` (lokal unter `.codex-build/englisch_9-deploy`):

- `backend/api/vokabeltest.js`: neuer Schlüssel `GRADE_SCALE_9R`. Die KI-Zweitmeinung nennt jetzt die richtige Klassenstufe.
- `backend/api/vokabeltest-daten.js`: beide 9R-Tests auf Deutsch → Englisch umgebaut, mit `gradeScale: "9R"`.
- `backend/api/grammatik9r.js`: neues Modul mit den Routen unter `/api/grammatik9r/` (Liste, Start, Abgabe, Freischalten, Ergebnisse, Punkte ändern, Löschen, CSV).
- `backend/api/grammatik9r-daten.js`: Aufgaben und Lösungen der Grammatikprobe und der vier Kurztests. Die Lösungen bleiben auf dem Server.
- `backend/api/server.js`: Modul eingehängt. Die Kennung unter `/api/health` lautet `2026-09-26-englisch9r-grammatik`.

So wird bewertet:

- **Lücken:** Zuerst vergleicht der Server genau. Groß- und Kleinschreibung und Satzzeichen sind dabei egal, Kurz- und Langformen gelten beide. Abgelehnte Lücken bekommt danach die KI. Sie darf eine richtige andere Form noch anerkennen, aber nie Punkte abziehen.
- **Sätze übersetzen:** Die KI gibt 0 bis 2 Punkte. Entscheidend ist die richtige Zeitform. Rechtschreibfehler bei Vokabeln zählen nicht.
- **Ohne KI:** Ist die KI nicht erreichbar, prüft der Server die Sätze nur nach Pflichtbausteinen. Die Abgabe erscheint dann auf der Lehrerseite als „prüfen“.
- Die Lehrkraft kann auf `unit1/probe/lehrer.html` jede Punktzahl ändern. Die Note wird dann neu berechnet.

Wichtig: Der kostenlose Render-Dienst speichert Abgaben nur vorübergehend. Direkt nach der Stunde die CSV herunterladen.

## Getestet (26.09.2026, lokal)

- Backend mit Express und Node 24: Freischaltung, Sperre bei zweiter Abgabe, Lösungen werden beim Start nicht mitgeschickt, Kurz- und Langformen, KI-Ersatzbewertung, Lehrerkorrektur, 50 % = Note 3.
- Alle Lückenaufgaben: Anzahl der Lücken passt zur Anzahl der Lösungen.

## Veröffentlicht (26.09.2026)

- Backend: Commit `51e2bdb` im Repository `englisch_9`, auf Render deployt und live geprüft (`/api/health` = `2026-09-26-englisch9r-grammatik`, alle 5 Grammatiktests und beide Vokabeltests werden gelistet).
- Freischalten zentral über `proben-verwalten.html` (Englisch · Klasse 9R) oder auf der Lehrerseite der Unit.
- Seiten: im Repository `grumi` auf GitHub Pages.

## Offen

- Unit 2 bis 4: Vokabeltrainer, Grammatik, Proben.
