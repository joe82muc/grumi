# Fortschritt: Mathematik 7 (7M und 7R)

7M und 7R nutzen dieselben Seiten unter `7/Mathematik_7`. Die Startseite verlinkt beide Klassen auf `7/Mathematik_7/index.html`.

## Stand 27.09.2026: eigene Übung „Gleichungen lösen“

Wunsch: Mathe 7 übersichtlicher, optisch und didaktisch ansprechender, zusätzlich einfachere Aufgaben (LehrplanPLUS Mittelschule Bayern), und eine KI, die didaktisch sinnvoll korrigiert.

Vorher: Die Übersicht verlinkte auf die 9er-Übung `9M/Mathematik/Terme-und-Gleichungen/index.html?klasse=7`. Dort gab es nur die Stufen 1, 2 und 14. Die KI-Rückmeldung nannte oft gleich die richtige Zeile.

### Übersicht (`index.html`)

- Großer Einstieg „Gleichungen lösen“ mit Lernpfad (9 Stufen in 3 Bereichen, direkt anklickbar).
- Knopf „Weiter bei Stufe …“ und Häkchen je Stufe aus dem gespeicherten Fortschritt.
- „So lernst du mit der Übung“ in vier Schritten.
- Alle Lernbereiche der Jahrgangsstufe 7 nach LehrplanPLUS (M7 1 bis M7 8). Nur M7 7 „Gleichungen“ ist verfügbar, der Rest steht auf „folgt“.

### Übung (`Gleichungen/`)

| Datei | Inhalt |
|---|---|
| `index.html` | Seite: Kopf mit Zähler, Lernpfad, Stufe mit Beispiel, Aufgabe, Prüfen, Schreib-Hinweise |
| `aufgaben7.js` | 9 Stufen mit je 8 Aufgaben und Musterbeispiel |
| `rechnen7.js` | Rechenhilfe im Browser (Brüche, Probe, Lösungsschritte für Tipps und Waage) |
| `gleichungen7.js` | Oberfläche, Fortschritt, Foto-Upload, Rückmeldung |
| `gleichungen7.css` | Gestaltung (Karopapier, Handschrift „Patrick Hand“, Farben je Bereich) |

Stufen nach LehrplanPLUS M7 7 „Gleichungen“ (für R- und M-Zug gleich: ax + b = c mit ganzen Zahlen, Balkenwaage, Probe):

| Nr. | Stufe | Beispiel | neu? |
|---|---|---|---|
| 1 | Terme berechnen | 3x + 2 für x = 4 | neu, leichter Einstieg |
| 2 | Plus und minus | x + 4 = 9 | neu |
| 3 | Mal und geteilt | 3x = 12 | neu |
| 4 | Zwei Schritte | 2x + 3 = 11 | ersetzt die alte Stufe 1, kleinere Zahlen |
| 5 | Negative Zahlen | −3x + 5 = 20 | ersetzt die alte Stufe 2 |
| 6 | Erst zusammenfassen | 2x + 3x + 4 = 29 | neu (Terme vereinfachen) |
| 7 | Zahlenrätsel | „Ich denke mir eine Zahl …“ | neu |
| 8 | Sachaufgaben | Einkauf, Handy, Taxi, Temperatur | neu, eine Unbekannte |
| 9 | Profi: drei Größen | Hefte in drei Farben | alte Stufe 14, vor allem 7M, jetzt ein Foto statt vier |

Didaktik auf der Seite:

- Jede Stufe hat ein Musterbeispiel. Beim ersten Besuch ist es offen, am Handy zugeklappt.
- Stufe 2 bis 4: animierte Balkenwaage mit Schritten und „Nur links wegnehmen?“ (Waage kippt).
- Drei gestufte Tipps pro Aufgabe. Der letzte zeigt höchstens die erste Zwischenzeile oder die Gleichung, nie das Ergebnis.
- Schnell-Check: Ergebnis eintippen, die Seite zeigt die Probe mit dieser Zahl.
- Rückmeldung nach dem Foto: jede Zeile mit ✓/✗, Lob, Denkanstoß, „Richtige Zeile zeigen“ erst auf Knopfdruck, Folgefehler als „richtig weitergerechnet“, Stern für eine richtige Probe.
- Fortschritt im Browser (`localStorage`, Schlüssel `grumi-mathe7-gleichungen-v1`), gezählt wird nur, was die Prüfung als fertig und richtig meldet.

Der alte Link `9M/.../Terme-und-Gleichungen/index.html?klasse=7` leitet auf die neue Übung um. Klasse 8 (`?klasse=8`) und 9 bleiben unverändert.

### KI-Prüfung (Dienst `grumi-mathe-ki`, Code in `render-mathe-ki/`)

Die Seite schickt `klasse=7` mit. Nur dann gilt der neue Ablauf, 8. und 9. Klasse nutzen weiter den alten Prompt.

- `src/lib/klasse7-ki.ts`: eigener, kurzer Prompt für Klasse 7 (einfache Sprache, erst loben, nur den ersten Fehler, Denkanstoß statt Lösung) und feste JSON-Form über `output_config.format`. Lehnt das Modell die feste Form ab, gibt es einen zweiten Versuch ohne.
- `src/lib/klasse7.ts`: Rechen-Prüfer. Rechnet die abgeschriebenen Zeilen exakt nach, findet die erste falsche Zeile und erkennt Fehlerarten: Rechenfehler, nur auf einer Seite gerechnet, Gegenteil falsch (z. B. + statt −, − statt :), nur einen Teil geteilt, Vorzeichen, Zusammenfassen, Punkt vor Strich, Einsetzen, Abschreibfehler, Gleichung passt nicht zum Text. Er formuliert passende Denkanstöße, z. B. „Rechne auf der rechten Seite noch einmal nach: 36 − 15 = ?“.
- Widersprechen sich KI und Rechnung, gilt die Rechnung. Nennt ein KI-Text die Lösungszahl, ersetzt der Server ihn durch den Denkanstoß des Rechen-Prüfers.
- Getestet am 27.09.2026 mit `next build` und einer nachgebildeten Anthropic-API: 30 Rechenwege im Rechen-Prüfer, 10 Fälle über die Route, 22 Klick-Prüfungen im Browser. Ein Test mit dem echten Modell steht noch aus. Er ist erst nach dem Deploy möglich.

## Offen

- Live-Test mit echten Heftfotos nach dem Deploy (Render baut `grumi-mathe-ki` nach einem Push auf `main` neu).
- Weitere Lernbereiche der 7. Klasse (Prozentrechnung, rationale Zahlen, Proportionalität …).
- Datenschutz: Die Route speichert weiterhin jedes Foto in `student-uploads` auf dem Render-Server.
