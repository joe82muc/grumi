# Fortschritt: Mathematik 9M und 9R

9M und 9R nutzen dieselben Mathematik-Seiten unter `9M/Mathematik`. Die Startseite verlinkt beide Klassen dorthin. Der alte Pfad `9/Mathematik` bleibt vorerst erreichbar.

## Stand 26.09.2026

### Übersicht (`index.html`)

Die Themen sind nach Bereichen geordnet:

| Bereich | Themen |
|---|---|
| Terme, Gleichungen und Zahlen | Terme und Gleichungen; Potenzen und Prozent-/Zinsrechnung „Folgt“ |
| Geometrie | Ebene Figuren, Körper |
| Daten und Zufall | Wahrscheinlichkeiten |

Kennzeichen zeigen, wo es eine KI-Fotoprüfung gibt und was Quali-Stoff ist. Unten steht ein Hinweis, wie die Fotoprüfung funktioniert.

### Terme und Gleichungen (`Terme-und-Gleichungen/`)

Neues Layout in `index.html` und `tg-layout.css`. `gleichungen.js` und `gleichungen.css` sind unverändert.

- Kopf mit Anleitung in drei Schritten: im Heft rechnen → Foto machen → prüfen lassen.
- Sichtbare Stufenwahl 1–16 mit Beschreibung und Fortschritt. Vorher war sie per `hidden` ausgeblendet. Die Stufen 10–13 (M-Stoff) haben einen gestrichelten Rahmen, am Handy lässt sich die Leiste wischen.
- Knöpfe getrennt nach „Aufgabe“ (Zurück / Nächste) und „Stufe“ (runter / hoch).
- Eigener Knopf „Foto vom Rechenweg“ statt des Browser-Dateifelds, daneben „Mit Kamera aufnehmen“.
- „Hilfen und Tipps“: Erklärung zur Aufgabe, Lernhilfe Klammern, Tipps für gute Fotos.

### KI-Fotoprüfung (Dienst `grumi-mathe-ki`, Code in `render-mathe-ki/`)

Alle Mathe-Fotoprüfungen (Gleichungen, ebene Figuren, Kegel, Pyramide) laufen über `https://grumi-mathe-ki.onrender.com/api/check`.

- **Fehler vorher:** Ein Rechenweg mit Rechenfehler (2x + 4 = 10 → 2x = 14 → x = 7) wurde als „Richtig gelöst!“ gemeldet.
- **Jetzt:** Die KI liefert ihre erkannten Gleichungszeilen mit (`equationSteps`). Der Server rechnet sie mit mathjs nach und überstimmt ein falsches „richtig“. Außerdem fängt er einen Widerspruch zwischen „richtig“ und der Fehlerbeschreibung ab.
- **Modell:** `claude-opus-4-8`. Es lässt sich auf Render über `ANTHROPIC_MODEL` ändern.
- **Live geprüft am 26.09.2026:** Der falsche Rechenweg ergibt „Da hat sich ein Rechenfehler eingeschlichen …“, der richtige „komplett richtig gelöst“.

**Datenschutz-Hinweis:** Die Route speichert jedes hochgeladene Foto auf dem Render-Server im Ordner `student-uploads`. Auf dem kostenlosen Plan geht es beim Neustart verloren. Die Übersicht bittet die Schüler deshalb, nur die Rechnung zu fotografieren – ohne Namen und ohne Gesicht.

## Stand 26.09.2026 (2): Terme und Gleichungen für Klasse 7 und 8

Dieselbe Übung wird mit `?klasse=7` bzw. `?klasse=8` aufgerufen und zeigt dann nur die Stufen dieser Jahrgangsstufe. Die Auswahl steht in `stufenJeKlasse` in `gleichungen.js`, die Stufennamen bleiben gleich. Kopf, Pfad und Legende passt ein kleines Skript in `index.html` an. Die Hilfeseite gibt die Klasse beim Zurückgehen wieder mit.

Die Auswahl richtet sich nach dem LehrplanPLUS Mittelschule Bayern (ISB), Lernbereich „Gleichungen“:

| Klasse | Lehrplan | Stufen |
|---|---|---|
| 7M, 7R | ax + b = c mit ganzen Zahlen, Terme vereinfachen, Äquivalenzumformungen, Probe; M7 zusätzlich Sachsituationen | 1, 2, 14 |
| 8R | Gleichungen mit Klammern und mehrmals auftretender Variable, rationale Zahlen in Dezimalschreibweise, Textgleichungen und Alltagssituationen | 1–6, 14, 15 |
| 8M | wie 8R, zusätzlich Wechsel zwischen Bruch- und Dezimaldarstellung, Mischungsaufgaben | zusätzlich 7 und 16 |
| 9 | Bruchgleichungen mit Hauptnenner (Quali), M-Stoff 10–13 | alle 16 |

Die Seite für Klasse 8 zeigt alle Stufen 1–7 und 14–16. Die Legende weist darauf hin, dass Stufe 7 und 16 vor allem für 8M gedacht sind.

Neue Übersichten: `7/Mathematik_7/index.html` (für 7M und 7R) und `8/Mathematik_8/index.html` (für 8M und 8R). Die Startseite verlinkt „Mathematik“ jetzt in allen Klassenkarten von 7 bis 9.

## Offen

- Potenzen sowie Prozent- und Zinsrechnung.
- Klären, ob die Fotos überhaupt gespeichert werden sollen (`trySaveStudentUpload` in `route.ts`).
