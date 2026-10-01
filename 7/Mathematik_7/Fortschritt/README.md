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
- Getestet am 27.09.2026 mit `next build` und einer nachgebildeten Anthropic-API: 30 Rechenwege im Rechen-Prüfer, 10 Fälle über die Route, 22 Klick-Prüfungen im Browser.
- Live geprüft am 27.09.2026 nach dem Deploy (Render baute `grumi-mathe-ki` etwa 2 Minuten nach dem Push neu). Getestet wurde mit zwei erzeugten Fotos in Handschrift-Schrift:
  - „5x + 10 = 45 | −10, 5x = 55, x = 11“ ergab Fehler in Zeile 2, Art „gegenteil“, den Denkanstoß „Auf der linken Seite hast du − 10 gerechnet, auf der rechten Seite aber + 10 …“ und „richtig weitergerechnet“ für Zeile 3. Dauer 9 Sekunden.
  - „2x + 3 = 11“ mit Probe ergab „richtig, fertig, Probe richtig“. Dauer 6 Sekunden.
- Fix nach dem Live-Test: Die KI lobte „auf beiden Seiten −10 gerechnet“, obwohl genau dort der Fehler lag. Bei einem Fehler kommen Lob und Überschrift jetzt nur noch aus der Nachrechnung, z. B. „Deine erste Zeile ist richtig. Die Idee im Kommandostrich ist richtig: − 10.“

## Stand 27.09.2026 (2): Rechenweg mit dem Stift schreiben (iPad)

Wunsch: statt Foto auch mit dem iPad-Stift schreiben, als Option.

- Im Kasten „Rechenweg prüfen lassen“ gibt es jetzt die Wahl „Foto vom Heft“ (Standard) oder „Mit Stift schreiben“. Die Seite merkt sich die Wahl im Browser (`abgabe` im Fortschritt).
- Schreibfeld auf Karopapier (`createInkPad` in `gleichungen7.js`): Apple Pencil mit Druckstärke, Finger oder Maus. Sobald ein Stift erkannt ist, zeichnet die aufliegende Hand nicht mit. Werkzeuge: Stift, Radierer (löscht ganze Striche), Zurück (auch nach Radieren und „Alles löschen“), Alles löschen, „Mehr Platz“.
- Beim Prüfen wird die Schrift auf den beschriebenen Bereich zugeschnitten und als PNG (weiß, zartes Karo) an dieselbe KI-Prüfung geschickt. Zusätzliches Formularfeld `quelle` = `foto` oder `stift`. Am Server hat sich nichts geändert.
- Beim Wechsel der Aufgabe wird das Feld geleert.
- Getestet mit simuliertem Stift (Druck, Handballen, Radierer, Zurück, Abgabe) und live mit dem echten Modell: Der geschriebene Rechenweg „2x + 3 = 11 | −3, 2x = 14 | :2, x = 7“ wurde vollständig gelesen, Fehler in Zeile 2 als „gegenteil“ erkannt (8 Sekunden).

## Stand 01.10.2026: Stift auf dem iPad, erster echter Test

Rückmeldung vom iPad: „Prüfen“ zeigte nur „Prüfe …“ und dann scheinbar nichts mehr, und die aufliegende Hand löste im Schreibfeld immer „Markieren“ aus.

- Ursache „passiert nichts“: Der Gratis-Server `grumi-mathe-ki` auf Render schläft nach 15 Minuten ohne Anfrage. Die erste Prüfung danach wartet bis er aufgewacht ist, und die Seite zeigte so lange nur einen festen Text. Die Anfrage selbst funktioniert: Mit simuliertem Stift in Chromium und WebKit kam die Antwort vom Live-Server nach etwa 6 Sekunden.
- Neu: Die Seite weckt den Server schon beim Öffnen, beim ersten Strich und beim Foto-Auswählen (höchstens alle 5 Minuten). Während der Prüfung zählen die Sekunden sichtbar mit. Nach 20 Sekunden kommt der Hinweis, dass der Server gerade aufwacht. Nach 150 Sekunden bricht die Seite ab und bittet, noch einmal zu tippen. Wartekasten und Ergebnis werden ins Bild gescrollt, weil sie am iPad unter dem Schreibfeld außerhalb des Bildschirms lagen.
- „Markieren“: Berührungen auf dem Schreibfeld unterdrücken jetzt die Standardaktion (`touchstart` mit `preventDefault`, kein Kontextmenü). Der ganze Schreibblock samt Werkzeugleiste und Hinweis darunter ist nicht markierbar. Legt die Hand auf, bevor der Stift zum ersten Mal schreibt, wird ihr Strich verworfen, sobald der Stift aufsetzt.
- Nebenbei gefunden: In WebKit blieb die Zeichenfläche auf 300 × 150 Pixeln stehen, wenn das CSS erst nach dem Skript griff, die Schrift erschien dann verzerrt. Ein `ResizeObserver` hält die Fläche jetzt immer so groß wie das Feld (auch beim Drehen des iPads und bei „Mehr Platz“).
- Getestet mit einem nachgebildeten Server in Chromium und WebKit: Wecken, Flächengröße, Touch abgefangen, Handballen-Strich verworfen, Sekundenzähler, Aufwach-Hinweis, Zeitlimit (mit vorgespulter Uhr), Scrollen, PNG-Abgabe, dazu Mehr Platz, Moduswechsel, Radierer und Zurück.

## Offen

- Test mit echten Schülerfotos aus dem Unterricht (Handschrift, schlechtes Licht, schräge Fotos).
- Test des Schreibfelds auf einem echten iPad mit Apple Pencil (Safari): Ist „Markieren“ weg? Kommt die Prüfung nach dem Aufwachen an?
- Weitere Lernbereiche der 7. Klasse (Prozentrechnung, rationale Zahlen, Proportionalität …).
- Datenschutz: Die Route speichert weiterhin jedes Foto in `student-uploads` auf dem Render-Server.
