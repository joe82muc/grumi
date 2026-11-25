# Kernkraftwerk in echter Größe (NT 9, Modul „So arbeitet ein Kernkraftwerk“)

Seite: `9M/NT_9/App14_Materie/ar-kernkraftwerk/` (gleiche Dateien in 9R). Verlinkt aus `ke-3.html` (Station 2 und 4).
Keine Anmeldung, keine Daten von Kindern, nichts wird gespeichert oder hochgeladen. Muster: `7M/NT/ar-windrad`.

## Was die Seite kann

- **3D:** das Kraftwerk zum Drehen und Zoomen – Reaktorgebäude mit Kuppel (etwa 60 m), Maschinenhaus, Kühlturm (165 m, unten 153 m
  breit, Maße wie beim Kraftwerk Isar 2), Abluftkamin, Transformator und Stromleitung; daneben Frauenkirche (99 m), Olympiaturm
  (291 m), ein Haus und ein Mensch (aus `ar-windrad/model.js` übernommen).
- **Regelstäbe** (Schieberegler 0–100 % eingefahren): je tiefer sie im Reaktorkern stecken, desto weniger Spaltungen – die Leistung
  (bis 1 400 MW) sinkt, der Kern glimmt schwächer, die Turbine dreht langsamer, die Dampfwolke über dem Kühlturm wird kleiner;
  ganz eingefahren ist der Reaktor abgeschaltet. Der Text daneben erklärt, was gerade passiert (Regeln in `reaktor.js`).
- **In den Reaktor schauen:** Reaktorgebäude und Maschinenhaus werden durchsichtig – Sicherheitsbehälter aus Stahl,
  Reaktordruckgefäß mit Brennelementen und Steuerstäben, vier Dampferzeuger mit Kühlmittelpumpen (Primärkreislauf orange),
  Dampfleitung (blau) zur Turbine, Generator, Kondensator – in den Farben der Schnitt-Zeichnung des Moduls.
- **AR (draußen):** wie beim Windrad – Kamerabild als Hintergrund, der Lagesensor dreht die Blickrichtung mit, das Kraftwerk steht in
  echter Größe 250 m vor dem Kind (Abstand 60 bis 800 m einstellbar); „Fernglas“ holt das Reaktorgebäude heran. Ohne Marker und ohne
  WebXR, läuft deshalb auch in Safari auf iPad und iPhone (HTTPS, Kamera und Bewegungssensor erlauben).

## Dateien

- `reaktor.js` – Zahlen und Regeln (Maße, Leistung je Regelstab-Stellung, Texte), ohne Grafik; Test: `node --test reaktor.test.js`.
- `model.js` – Kraftwerk in Metern (Three.js), Vergleichsbauten aus `7M/NT/ar-windrad/model.js`.
- `app.js` – Ansichten, Kamera, Lagesensor, Bedienung (Kopie der Windrad-Logik mit Regelstäben statt Wind und Reaktor statt Gondel).
- Three.js und OrbitControls kommen aus `tests/windrad-ar/vendor`, die Symbole aus `Kalender/vendor/lucide.min.js`.

## Prüfen

    node --test 9M/NT_9/App14_Materie/ar-kernkraftwerk/reaktor.test.js
    NODE_PATH=.codex-build/nt-browser/node_modules node .codex-build/nt9-werkzeug/test-ar-kernkraftwerk.js . <Bilderordner>

Mit `?test` an der Adresse gibt die Seite ihren Zustand über `window.kraftwerkTest` preis; `kraftwerkTest.lage(alpha, beta, gamma)`
meldet eine Lage, als käme sie vom Sensor. Auf einem echten Gerät draußen wurde sie (wie das Windrad) noch nicht ausprobiert.
