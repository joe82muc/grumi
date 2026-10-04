# Natur und Technik 7M / 7R

- Übersicht 7M: `index.html` · Übersicht 7R: `../../7R/NT/index.html`. Beide nutzen `themen.js`, `uebersicht.js` und `uebersicht.css` aus diesem Ordner.
- **`themen.js` ist die eine Liste** aller Themenbereiche, Module und Proben (Kennung, Titel, Datei, Speicherschlüssel). Übersicht, Module, Lernstand und die Verwaltung der Lehrkraft lesen daraus. Neues Modul = Datei anlegen und dort eintragen.
- Lernmodule liegen hier in 7M/NT und werden von beiden Zügen genutzt (eine Datei je Modul). Gemeinsame Bausteine: `modul-basis.css` und `modul-basis.js` (Sterne, Übungstypen, Kreuzworträtsel, Schritt-Animation, Paare, Film mit Stopp-Fragen, KI-Rückmeldung, Quiz, Lernstand, Sperre).
- **R und M:** Aufgaben für den M-Zug stehen in `Modul.plus(() => …)`. In 7R sind sie freiwillig und zählen nicht zu den Pflichtaufgaben.
- **Freischalten:** Die Lehrkraft schaltet je Klasse Themenbereiche oder einzelne Module frei (`proben-verwalten.html` → Klasse → Natur und Technik, Skript `../../nt7-verwaltung.js`). Die fünf ersten Luft-Module sind ohne Zutun offen, alles Neue ist zuerst gesperrt. `?vorschau=1` zeigt der Lehrkraft ein gesperrtes Modul, ohne etwas zu speichern.
- **Proben:** `probe.html` und `probe.js` zeigen die Proben des eigenen Zugs (`?thema=…&zug=R|M`, `?test=<Kennung>`). Fragen, Lösungen und Bewertung liegen nur auf dem Server (Repository `englisch_9`, `https://englisch-9.onrender.com`). Bilder zu Proben: `assets/proben/`. Lehrerseite: `lehrer.html`.
- Bilder der Module: `assets/luft-modul/`, `assets/windkraft/`, `assets/verbrennung/`, `assets/explosiv/`. Die neuen Module zeichnen ihre Grafiken selbst (SVG im Modul).
- Arbeitsweise, Plan und Protokoll: Ordner `Fortschritt/` (`ARBEITSMODUS.md`, `MODULPLAN.md`, `BAUANLEITUNG.md`, `README.md`).
