# Windkraftanlage in echter Größe (NT 7, Modul „Windkraft: Strom aus bewegter Luft“)

Seite: https://joe82muc.github.io/grumi/7M/NT/ar-windrad/
Verlinkt in `7M/NT/windkraft-strom.html`: Station 4 („AR · Augmented Reality“) und Station 2 („In die Gondel schauen“,
öffnet mit `?ansicht=gondel`). Keine Anmeldung, keine Daten von Kindern, nichts wird gespeichert oder hochgeladen.

## Was die Seite kann

- **3D:** die Anlage zum Drehen und Zoomen, daneben Frauenkirche (99 m), Olympiaturm (291 m), ein Haus und ein Mensch.
- **AR (draußen):** Das Kamerabild ist der Hintergrund, der Lagesensor des Geräts dreht die Blickrichtung mit. Die Anlage
  steht in **echter Größe** 250 m vor dem Kind (Abstand 30 bis 600 m einstellbar). Ohne Marker und ohne WebXR – läuft
  deshalb im Browser, auch in Safari auf iPad und iPhone. Braucht HTTPS, Kamera und die Erlaubnis für den Bewegungssensor.
- Baujahre 1990 bis 2020 mit denselben Zahlen wie im Modul (Station 4), Wind von 0 bis 30 m/s wie in Station 3.
- **In die Gondel schauen:** Die Hülle wird durchsichtig – Achse, Getriebe, Bremse und Generator in den Farben der
  Schnitt-Zeichnung des Moduls. Draußen holt das „Fernglas“ die Gondel heran; sie dreht sich dazu quer.

## Warum draußen kein Marker nötig ist

Die Anlage ist riesig und weit weg. Ein paar Schritte hin oder her ändern das Bild auch in der Wirklichkeit kaum –
es genügt, die Blickrichtung des Geräts zu kennen. Das Gerät wird in 1,5 m Höhe angenommen, die Kamera mit 62°
Blickwinkel über die lange Bildseite (anpassbar mit `?fov=…`). Häuser und Bäume verdecken die Anlage nicht.

## Dateien

- `physik.js` – Zahlen und Regeln (Anlagen, Windgrenzen, Drehzahl), ohne Grafik.
- `model.js` – Anlage und Vergleichsbauten in Metern. `app.js` – Ansichten, Kamera, Lagesensor, Bedienung.
- Three.js und OrbitControls kommen aus `tests/windrad-ar/vendor`, die Symbole aus `Kalender/vendor/lucide.min.js`.

## Prüfen

    node --test 7M/NT/ar-windrad/model.test.js

Mit `?test` an der Adresse gibt die Seite ihren Zustand über `window.windradTest` preis; `windradTest.lage(alpha, beta, gamma)`
meldet eine Lage, als käme sie vom Sensor. So lässt sich die Draußen-Ansicht am Computer mit nachgestellter Kamera prüfen.
Auf einem echten Gerät draußen wurde sie noch nicht ausprobiert.
