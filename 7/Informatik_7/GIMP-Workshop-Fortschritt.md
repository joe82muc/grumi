# GIMP-Workshop Informatik 7 – Arbeitsstand

Stand: 21. September 2026

## Was neu dazugekommen ist

### Stunde 13: Profi-Trick – Freistellen mit Farbkanälen

Die neue Stunde schließt die GIMP-Reihe ab. Sie greift die Methode aus
dem Video auf: Motive über den Blaukanal freistellen statt mit dem
Zauberstab zu klicken.

| Datei | Zweck |
|---|---|
| `stunden/s13-freistellen-farbkanaele.html` | Seitengerüst (lädt die JSON) |
| `daten/s13-freistellen-farbkanaele.json` | Kompletter Inhalt der Stunde |
| `bilder/s13-farbkanaele.svg` | Schritt 1: Kanäle-Dialog, Farbbild gegen Blaukanal |
| `bilder/s13-schwarz-weiss.svg` | Schritt 2: Invertieren, Belichtung, Kurven |
| `bilder/s13-maske.svg` | Schritt 3: Auswahl und Ebenenmaske |
| `bilder/uebung/s13-ballon.jpg` | Übungsbild leicht |
| `bilder/uebung/s13-baum.jpg` | Übungsbild schwer |
| `bilder/uebung/HERKUNFT.md` | Lizenznachweise der zwei Bilder |

**Aufbau der Stunde** (Reihenfolge bewusst gesetzt):

1. Infotext – warum der Zauberstab bei Bäumen versagt
2. Video – das Tutorial, datenschutzfreundlich eingebunden
3. Filmquiz – 7 Fragen, darunter eine Reihenfolge-Aufgabe mit allen 7 Schritten
4. Die drei Schaubilder
5. Infotext 2 – die Maske als Sicherheitsnetz
6. Praxis – zwei Durchgänge: erst Ballon (leicht), dann Baum (schwer)
7. Wortspeicher – 10 Begriffe
8. Aufgaben – 10 Stück, gemischte Typen
9. Links – GIMP-Download, Wikimedia Commons
10. Schluss – XCF speichern, PNG exportieren

Der Film steht bewusst **vor** der Praxis. Die Methode versteht man
deutlich leichter, wenn man sie einmal in Bewegung gesehen hat.

### Zwei Übungsbilder

Beide sind frei verwendbar, ohne Namensnennung und ohne Weitergabe-
Bedingung. Details in `bilder/uebung/HERKUNFT.md`.

- **s13-ballon.jpg** – Heißluftballon vor blauem Himmel, CC0.
  Der leichte Einstieg: nur Himmel, klare Kante, im Blaukanal ein
  sehr deutlicher Unterschied.
- **s13-baum.jpg** – Einzelne Fichte auf einer Wiese, gemeinfrei
  (US National Park Service). Entspricht fast genau dem Video.
  Der Waldstreifen am Horizont ist die eigentliche Schwierigkeit:
  Dreht man den Belichtungsregler zu weit auf, wird er mit
  freigestellt. Genau darauf zielt der Warnkasten in der Grafik.

### Stunde 9 gekürzt

Der Praxisblock "GIMP starten und ein Bild öffnen" wurde entfernt.
Er brachte gegenüber dem Rest der Stunde nichts Neues. Der Infotext,
die Oberflächengrafik, der Wortspeicher und die Aufgaben bleiben.

### Navigation

- `daten/s12-vektorgrafik-layout.json` zeigt jetzt mit `naechste`
  auf die neue Stunde.
- In `index.html` ist eine Kachel ergänzt. Achtung: Die angezeigten
  Nummern laufen dort eins versetzt zu den Dateinamen
  (`s12-...` steht als "Stunde 11"). Die neue Kachel heißt deshalb
  "Stunde 12".

## Was noch offen ist

- **Screenshots vom Schulrechner.** Die drei SVG-Grafiken sind
  schematisch gezeichnet. Wenn deine GIMP-Version anders aussieht,
  kannst du sie durch echte Screenshots ersetzen: Datei in
  `bilder/` ablegen und den Namen in der JSON unter `bilder`
  eintragen. Aus dem Video dürfen keine Bilder genommen werden –
  die sind urheberrechtlich geschützt.
- **Zeitbedarf prüfen.** Angesetzt sind 45 Minuten. Der Ballon
  dauert erfahrungsgemäß 10 bis 15 Minuten, der Baum länger.
  Wenn es knapp wird: Der Baum eignet sich gut als Hausaufgabe,
  weil GIMP kostenlos ist.
- **Zweiter Durchgang mit eigenen Fotos.** Die Schüler könnten
  eigene Handyfotos mitbringen. Dann aber vorher klären, dass keine
  Personen darauf zu sehen sind.

## Zum Testen

https://joe82muc.github.io/grumi/7/Informatik_7/stunden/s13-freistellen-farbkanaele.html
