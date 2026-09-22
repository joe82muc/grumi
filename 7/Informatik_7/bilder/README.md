# Bilder für Informatik 7

Hier liegen zwei Arten von Bildern.

## 1. Titelbilder (fertig, nichts zu tun)

Vier selbst gezeichnete SVG-Grafiken, die oben auf jeder Stundenseite
stehen. Sie sind reine Dekoration und machen die Seite freundlicher.

| Datei | Zeigt | Verwendet in |
|---|---|---|
| `titel-computer.svg` | Arbeitsplatz mit Monitor, Tastatur, Maus | Stunde 1, 7 |
| `titel-ordner.svg` | Geöffneter Ordner mit Dateien | Stunde 2 |
| `titel-passwort.svg` | Schloss und Passwortfeld | Stunde 3 |
| `titel-text.svg` | Dokument mit Überschrift und Bild | Stunde 4, 5, 6 |
| `titel-bilder.svg` | Kamera, Pixel und Bildformate | Stunde 8, 9 |

SVG statt Foto, weil das auf jedem Beamer gestochen scharf bleibt,
die Dateien winzig sind und keine Lizenzfragen entstehen. Die Farben
entsprechen der Farbwelt der Lernplattform.

Zugeordnet werden sie in `../daten/sXX-*.json` über das Feld
`titelbild`. Willst du für eine Stunde ein anderes Bild, änderst du
dort einfach den Dateinamen.

## 2. Gezeichnete Anleitungsbilder (fertig)

Für Stunde 2 sind die Klickanleitungen als SVG nachgezeichnet. Sie
zeigen ein Explorer-Fenster mit geöffnetem Menü und nummerierten
Schritten — schematisch, aber eindeutig.

| Datei | Stunde | Zeigt |
|---|---|---|
| `s02-ordner-neu.svg` | 2 | Rechtsklick-Menü, "Neu" und Untermenü "Ordner" hervorgehoben |
| `s02-ordner-umbenennen.svg` | 2 | Markierter Ordner, "Umbenennen", Namensfeld mit Informatik7 |

Wenn deine Schulrechner deutlich anders aussehen (andere Windows-
Version, anderes Design), ersetze sie einfach durch echte Screenshots
und trage den neuen Dateinamen in `../daten/s02-ordner-und-dateien.json`
im Abschnitt `bilder` ein.

## 3. Screenshots (musst du noch aufnehmen)

Diese Bilder zeigen den Schülern Schritt für Schritt, wo sie klicken
müssen. Sie fehlen noch, weil echte Screenshots vom Schulrechner
kommen müssen — sonst sieht die Klasse eine fremde Oberfläche.

| Datei | Stunde | Was soll zu sehen sein |
|---|---|---|
| `s04-cursor.png` | 4 | Leeres Dokument mit blinkendem Cursor |
| `s04-speichern-unter.png` | 4 | Dialog "Speichern unter" mit Dateiname und Ordner |
| `s05-markieren.png` | 5 | Ein markierter (blau hinterlegter) Satz |
| `s05-fett-ueberschrift.png` | 5 | Symbolleiste mit F, Schriftgröße und Zentrieren |
| `s06-bild-einfuegen.png` | 6 | Menü "Einfügen > Bilder" |
| `s06-als-pdf.png` | 6 | Dialog "Speichern unter" mit Dateityp PDF |

So fügst du einen hinzu:

1. Screenshot am Schulrechner aufnehmen (Windows-Taste + Umschalt + S).
2. Als PNG hier ablegen, Dateiname genau wie in der Tabelle.
3. Fertig — die Seite zeigt das Bild beim nächsten Laden an.

Solange eine Datei fehlt, erscheint auf der Stundenseite ein ruhiger
Platzhalter "Bild folgt". Die Seite bleibt also nutzbar.

Die Zuordnung steht in `../daten/sXX-*.json` im Abschnitt `bilder`.
Dort kannst du Titel und Alternativtext jederzeit ändern.

## 4. Eigene Bilder zur Einheit "Digitale Bilder"

Für die Stunden 8 bis 12 liegen selbst gezeichnete SVG-Materialbilder
bereit. Sie greifen die Inhalte aus dem Buchthema auf, kopieren aber
keine Buchseite.

| Datei | Stunde | Zeigt |
|---|---|---|
| `s08-pixel-aufloesung.svg` | 8 | niedrige und hohe Auflösung, Pixelraster |
| `s08-bildformate-und-transfer.svg` | 8 | Smartphone, Cloud, Computer und Bildformate |
| `s09-zuschneiden-proportionen.svg` | 11 | Zuschneiden, proportional verkleinern, Verzerrung |
| `s09-helligkeit-kontrast-filter.svg` | Zusatz | Helligkeit, Kontrast und Filterwirkung |
| `s09-gimp-oberflaeche.svg` | 9 | GIMP-Oberfläche mit Menü, Werkzeugkasten, Bildfenster und Dialogen |
| `s10-ebenen-fotomontage.svg` | 10 | Fotomontage mit Hintergrund, Objekt und Ebenenstapel |
| `s11-freistellen-exportieren.svg` | 11 | Freistellen, Skalieren und Exportieren |
| `s12-vektorgrafik-layout.svg` | 12 | Rastergrafik, Vektorgrafik und Bildlayout |

## 5. Bilder zu Lernbereich 1 "Digitaler Informationsaustausch"

Im Unterordner `lb1/` liegen die Bilder der Module 1 bis 8. Jedes Bild
wird **genau einmal** verwendet: entweder als `titelbild` (Schmuckbild
oben, ohne Bildunterschrift) oder im Abschnitt `bilder` (mit Titel und
Alternativtext). Dasselbe Bild doppelt in einem Modul zu verwenden,
sieht auf der Seite wie ein Fehler aus.

| Modul | titelbild | im Abschnitt `bilder` |
|---|---|---|
| M1 Computerraum | `lb1-computerraum.jpg` | `lb1-sitzhaltung.jpg` |
| M2 E-Mail | `lb1-email-schreiben.jpg` | `lb1-email-anbieter.jpg` |
| M3 Soziale Netzwerke | `lb1-jugendliche-plattformen.jpg` | `lb1-grafik-plattformen.jpg`, `lb1-grafik-apps.jpg`, `lb1-social-media.jpg` |
| M4 Rechte | `lb1-videokonferenz.jpg` | `lb1-persoenlichkeitsrechte.jpg` |
| M5 Netiquette | `lb1-netiquette-vergleich.jpg` | `lb1-netiquette-plakat.jpg`, `lb1-cybermobbing.jpg` |
| M6 Chancen | `lb1-grafik-infosuche.jpg` | `lb1-apps-tablet.jpg`, `lb1-spielechat.jpg` |
| M7 Gefahren | `lb1-chatroom.jpg` | `lb1-ransomware.jpg`, `lb1-datenspuren.jpg` |
| M8 Fake News | `lb1-fakenews.jpg` | `lb1-smarthome.jpg` |

Willst du ein Bild austauschen, änderst du den Dateinamen in
`../daten/lb1-mXX-*.json` und passt `titel` und `alt` an das neue Bild
an. Der Alternativtext beschreibt, was zu sehen ist - er wird
vorgelesen, wenn das Bild nicht angezeigt werden kann.

## Bildrechte

Die Titelbilder sind für diese Lernplattform gezeichnet, da gibt es
nichts zu beachten. Bei eigenen Screenshots von Schulrechnern achte
darauf, dass **keine Schülernamen, Benutzernamen oder Dateinamen von
Schülern** im Bild zu sehen sind.
