# Leiterschaukel in AR (NT 8, Modul „Elektromotor“)

Seite: https://joe82muc.github.io/grumi/8M/NT/ar-leiterschaukel/
Verlinkt in `8M/NT/elektromotor.html`, Station 2 („AR · Augmented Reality“).
Keine Anmeldung, keine Daten von Kindern, nichts wird gespeichert oder hochgeladen.

## Was die Seite kann

- **3D:** Der Versuch zum Drehen und Zoomen – Stativ, Schaukel, Hufeisenmagnet, Netzgerät.
- **AR:** Die Kamera sieht den Marker (`marker.html` drucken oder auf einem zweiten Bildschirm zeigen),
  der Versuch steht darauf. Läuft im Browser, auch in Safari auf iPad und iPhone. Die Kamera braucht HTTPS.
- Bedienen: Strom AN/AUS, Kabel tauschen (Elektronen andersherum), Magnet umdrehen, Stromstärke.
  Einblenden: Elektronen, Magnetfeld, linke Hand, Beschriftung.

## Regeln (wie im Modul)

Es gilt die **Elektronenrichtung** (Minuspol → Pluspol) und die **Linke-Hand-Regel**:
Daumen = Elektronen, Zeigefinger = Magnetfeld (Nordpol → Südpol), Mittelfinger = Kraft.
Die technische Stromrichtung kommt nicht vor. Die Regeln stehen in `physik.js`, das Modell in `model.js`.

Anfang wie im Film der Station: Südpol oben, die Elektronen fließen im Draht nach vorn –
die Schaukel schlägt in den Magneten hinein aus (von vorn gesehen nach rechts, wie im Bild des Moduls).

## Dateien von woanders

Three.js, AR.js, Marker (Hiro) und Kamera-Daten liegen nur einmal im Repo: in `tests/windrad-ar/vendor`
und `tests/windrad-ar/assets`. Diese Seite lädt sie von dort. Lizenzen stehen dort in `vendor/`.
Die Symbole kommen aus `Kalender/vendor/lucide.min.js`.

## Prüfen

    node --test 8M/NT/ar-leiterschaukel/model.test.js

Mit `?test` an der Adresse gibt die Seite ihren Zustand über `window.schaukelTest` preis.
