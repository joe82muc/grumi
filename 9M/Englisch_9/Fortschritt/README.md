# Fortschritt: Englisch 9M

## Stand 26.09.2026: Neue Übersicht wie Englisch 9R

### Übersicht (`index.html`)

- Gleicher Aufbau und gleiche Farben wie Englisch 9R (Blue Line: Cyan-Blau, Orange, Rot über `body.blueline` in `css/englisch-extras.css`).
- Vier Units nebeneinander mit denselben Icons wie 9R (`images/unit1.png` bis `unit4.png`): Unit 1 Around Australia, Unit 2 Exploring India, Unit 3 South Africa, Unit 4 New Zealand.
- Unter jeder Unit in dieser Reihenfolge: 1 Wortschatz → 2 Grammatik → 3 Üben → 4 Grammatikprobe → 5 Proben (Vokabeltests).
- Darunter „Quali-Vorbereitung und Wiederholung“: Zeiten wiederholen, Mediation, mündliche Prüfung, Picture-based talk, schriftliche Prüfung und sonstige Grammatik. Die letzten beiden sind noch „In Vorbereitung“.

**Die vorhandenen Seiten sind unverändert.** Sie sind nur neu eingeordnet:

| Unit | Schritt | vorhandene Seiten |
|---|---|---|
| 3 South Africa | Wortschatz | `unit3/vokabulary/vokabeltrainer.html`, `unit3/vokabulary/irregular_verbs.html` |
| 3 South Africa | Grammatik | `unit3/tense/` (Überblick, Tense-Trainer, 7 Zeiten) |
| 3 South Africa | Üben und Schreiben | Role model, Accident Word bank, E-Mail schreiben, Holidays Mr. Mößner |
| 4 New Zealand | Wortschatz | `unit4/vokabeltrainer.html`, unregelmäßige Verben |
| 4 New Zealand | Grammatik | Passive voice (simple present und simple past), going-to-future |
| 4 New Zealand | Üben und Sprechen | Bildbeschreibung (Picture-based talk) |

Die Unit-Seiten `unit3/unit3.html` und `unit4/unit4.html` mit ihren Galerien bleiben erreichbar: Ein Klick auf den Unit-Kopf öffnet sie. Die Bildergalerie der alten Übersicht ist entfallen. Sie lud unter anderem ein Bild aus `privat_images`, das nicht veröffentlicht ist.

### Unit 1

- **Vokabeltrainer:** Es gilt der von Englisch 9R (`9R/Englisch/unit1/vokabular/vokabeltrainer.html`, gleiche Unit im Buch). Für Unit 2 wird ebenfalls der 9R-Trainer verlinkt, sobald er fertig ist.
- **Vokabeltests:** `unit1/test/vokabeltest.html` (Schüler) und `unit1/test/lehrer.html` (Lehrkraft). Freischalten geht auch zentral über `proben-verwalten.html` (Englisch · Klasse 9M).
  - Es sind dieselben 34 + 34 Wörter wie bei 9R, nur Deutsch → Englisch.
  - Test-IDs `e9m-u1-test1` und `e9m-u1-test2`.

### Notenschlüssel 9M (M-Zug): 50 % = Note 4

| Note | ab Prozent |
|---|---|
| 1 | 92 % |
| 2 | 81 % |
| 3 | 67 % |
| 4 | 50 % |
| 5 | 30 % |
| 6 | 0 % |

Das ist der bestehende Standardschlüssel `GRADE_SCALE` im Backend. Die 9M-Tests haben deshalb kein Feld `gradeScale`. Zum Vergleich: 9R hat 50 % = Note 3.

### Backend (Repository `englisch_9`, Render-Dienst `englisch-9`)

- `backend/api/vokabeltest-daten.js`: `e9m-u1-test1/2` werden aus den 9R-Tests erzeugt (`asM`). Nur ID, Klasse und Notenschlüssel sind anders.
- `backend/api/server.js`: Die Kennung unter `/api/health` lautet `2026-09-26-englisch9m-vokabeltests`.

## Offen

- Grammatik, Grammatikprobe und Kurztests für 9M (Unit 1 bis 4).
- Vokabeltests zu Unit 3 und 4.
- Unit 2: Vokabeltrainer von 9R übernehmen, sobald er fertig ist.
- `schriftliche-pruefung.html` und `sonstige-grammatik.html` sind noch Platzhalter.
