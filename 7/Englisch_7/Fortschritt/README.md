# Fortschritt: Englisch 7 (7M und 7R)

7M und 7R nutzen dieselben Seiten unter `7/Englisch_7`. Die Tests sind aber getrennt: jede Klasse hat eigene Test-IDs (`e7m-…` bzw. `e7r-…`), „7M“ oder „7R“ im Titel und ihren eigenen Notenschlüssel.

## Stand 26.09.2026: Vokabeltests und Grammatiktests zu Unit 1

### Vokabeltests (`unit1/test/vokabeltest.html`)

- Nur Deutsch → Englisch: Das deutsche Wort ist vorgegeben, die Schüler schreiben das englische Wort.
- Stehen zwei deutsche Bedeutungen da (`Alter; Zeitalter`), zeigt der Test „2 Bedeutungen · 1 Wort“: Gesucht ist trotzdem nur ein englisches Wort.
- Bei mehrdeutigen Wörtern hilft ein Hinweis, z. B. bei den Possessivpronomen („The book is …“).

| Test | Abschnitte der Wortliste | Wörter | IDs |
|---|---|---|---|
| Vokabeltest 1 | Zoom in, Intro, Topic 1, Talking about places, Numbers | 30 | `e7m-u1-test1`, `e7r-u1-test1` |
| Vokabeltest 2 | Topic 2, Globe Theatre, Jobs, Film, More about, Reading skills | 35 | `e7m-u1-test2`, `e7r-u1-test2` |

- Gleichwertige englische Wörter zählen (z. B. loud/noisy, theater/theatre, advert/ad/advertisement). Sinngleiche Antworten, die nicht hinterlegt sind, kann zusätzlich die KI anerkennen.
- Die früheren gemischten Tests (`e7-u1-test1/2`) bleiben unverändert und können weiter freigeschaltet werden.

### Grammatiktests (`unit1/probe/grammatikprobe.html`)

Zu jedem Grammatikbereich gibt es einen Test, dazu eine Probe über die ganze Unit, jeweils für 7M und 7R:

| Test | Inhalt | Punkte |
|---|---|---|
| Grammatiktest G1 | Simple past | 11 |
| Grammatiktest G2 | Simple present | 11 |
| Grammatiktest G3 | Fragen mit do und does, Kurzantworten | 12 |
| Grammatiktest G4 | Possessivpronomen | 10 |
| Grammatikprobe Unit 1 | G1 bis G4, Abschnitte A–F | 37 |

- Jede Grammatikseite G1–G4 hat unten den Knopf „Zum Grammatiktest“ (`?kt=g1` usw.). Er wählt den gerade freigeschalteten Test dieses Bereichs vor, egal ob 7M oder 7R.
- Lücken werden genau geprüft, Kurz- und Langformen gelten beide. Abgelehnte Lücken sieht sich zusätzlich die KI an. Übersetzungssätze bewertet die KI nach der Grammatik.
- Lehrerseite: `unit1/probe/lehrer.html`. Die Grammatik-Übersicht und die Unit-1-Seite verlinken die Tests.

### Notenschlüssel

| | 7M (M-Zug) | 7R |
|---|---|---|
| Note 1 ab | 92 % | 87 % |
| Note 2 ab | 81 % | 73 % |
| Note 3 ab | 67 % | 50 % |
| Note 4 ab | 50 % | 37 % |
| Note 5 ab | 30 % | 20 % |

### Freischalten

Zentral über `proben-verwalten.html` unter Englisch · Klasse 7M bzw. 7R, oder auf den Lehrerseiten `unit1/test/lehrer.html` (Vokabeltests) und `unit1/probe/lehrer.html` (Grammatik).

### Backend (Repository `englisch_9`, Render-Dienst `englisch-9`)

- `backend/api/vokabeltest-daten.js`: `e7m-u1-test1/2` und `e7r-u1-test1/2`. 7R hat `gradeScale: "7R"`, 7M hat keinen Eintrag und damit den M-Zug-Schlüssel.
- `backend/api/grammatik7-daten.js`: die zehn Grammatiktests. Sie laufen über dasselbe Modul wie Englisch 9 (`grammatik9r.js`, Routen `/api/grammatik9r/…`) mit `level: "7"` und eigenen KI-Themen.
- `backend/api/grammatik9r.js`: Klassenstufe und Themen für die KI kommen jetzt aus der Testdefinition.
- `/api/health` meldet die Version `2026-09-26-englisch7-tests`.
