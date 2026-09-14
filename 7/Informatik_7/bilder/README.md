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

SVG statt Foto, weil das auf jedem Beamer gestochen scharf bleibt,
die Dateien winzig sind und keine Lizenzfragen entstehen. Die Farben
entsprechen der Farbwelt der Lernplattform.

Zugeordnet werden sie in `../daten/sXX-*.json` über das Feld
`titelbild`. Willst du für eine Stunde ein anderes Bild, änderst du
dort einfach den Dateinamen.

## 2. Screenshots (musst du noch aufnehmen)

Diese Bilder zeigen den Schülern Schritt für Schritt, wo sie klicken
müssen. Sie fehlen noch, weil echte Screenshots vom Schulrechner
kommen müssen — sonst sieht die Klasse eine fremde Oberfläche.

| Datei | Stunde | Was soll zu sehen sein |
|---|---|---|
| `s02-ordner-neu.png` | 2 | Rechtsklick im Explorer, Menü "Neu > Ordner" |
| `s02-ordner-umbenennen.png` | 2 | Ordner markiert, Menüpunkt "Umbenennen" |
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

## Bildrechte

Die Titelbilder sind für diese Lernplattform gezeichnet, da gibt es
nichts zu beachten. Bei eigenen Screenshots von Schulrechnern achte
darauf, dass **keine Schülernamen, Benutzernamen oder Dateinamen von
Schülern** im Bild zu sehen sind.
