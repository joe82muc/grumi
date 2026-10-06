# Informatik 8M / 8R (Schuljahr 2026/27)

- Übersicht 8M: `index.html` · Übersicht 8R: `../../8R/Informatik/index.html`. Beide nutzen `themen.js` und die
  Übersicht von Informatik 7 (`../../7M/Informatik/uebersicht.js`, `../../7M/NT/uebersicht.css`).
- Seit dem 06.10.2026 ist das der Einstieg von der Startseite. Die bisherigen Module (`../../8/Informatik_8/`) sind
  entfernt – auch die alte Probe „Digitaler Informationsaustausch“. Die alte Adresse zeigt als Wegweiser
  hierher. Abgaben der alten Probe liegen weiter auf dem Server (`/api/informatik8`), nur die Seiten dazu gibt es nicht mehr.
- **`themen.js` ist die eine Liste** aller Module, Einheiten und Proben (Kennung, Titel, Datei, Speicherschlüssel).
  Übersicht, Einheiten, Lernstand und die Verwaltung der Lehrkraft lesen daraus. Neue Einheit = Datei anlegen und
  dort `href` eintragen.
- **Fünf Module, 26 Einheiten:** Digitale Informationssysteme · Datenschutz und Big Data · Excel Grundlagen ·
  Excel: Zellbezüge und Anwendungen · Programmieren mit Scratch. Eine Einheit ist eine Seite für etwa 40 Minuten
  und wird von beiden Zügen genutzt.
- Gemeinsame Bausteine: `../../7M/NT/modul-basis.css` und `modul-basis.js` (Sterne, Übungstypen, Kreuzworträtsel,
  Animation in Schritten, KI-Rückmeldung, Profi-Check, Lernstand, Sperre), `../../7M/Informatik/einheit.css` und
  `praxis.js` (Praxisauftrag mit Hilfestufen und Ergebnisprüfung, Fälle entscheiden, Stellen im Text finden).
  Für Informatik 8 dazu: `einheit8.css` und `info8.js` (nachgebaute kleine Anwendungen, Eingabe-Frage).
- **Der Zug kommt aus dem Code:** Angemeldet zeigt die Übersicht den Zug des Kindes (Überschrift, Titel, Proben) –
  auch wenn es die Übersicht des anderen Zugs geöffnet hat. In den Einheiten bleibt von den beiden Verweisen
  „Übersicht 8M / 8R“ nur der eigene, und die Marke im Kopf führt dorthin (`info8.js`).
- **Excel (Module 3 und 4):** `tabelle.js` ist eine kleine Tabelle auf der Seite (Namenfeld, Bearbeitungsleiste,
  Ausfüllkästchen; rechnet mit Formeln, `$`-Bezügen, SUMME, Fehlerwerten und Prozent wie Excel) – für Versuche und
  Aufgaben am Tablet. Startdateien für die Aufträge liegen in `assets/excel/` (in Excel erzeugt, ohne persönliche
  Angaben).
- **Scratch (Modul 5):** `scratch.js` und `scratch.css` zeichnen die Blöcke als eigene Grafiken und bieten eine
  kleine Bühne, auf der einfache Programme laufen (Programm lesen, starten, Blöcke ordnen). Programmiert wird im
  echten Scratch.
- **Bildschirmfotos aus Scratch** liegen in `assets/scratch/` (fertige Programme für die dritte Hilfe, dazu Stellen
  der Oberfläche: Bereiche, Eigenschaften unter der Bühne, Fenster „Neue Variable“, Menü „Datei“). Scratch erlaubt
  Bildschirmfotos (Lizenz CC BY-SA) mit dem Hinweis „Scratch is a project of the Scratch Foundation. It is available
  for free at https://scratch.mit.edu“ – er steht in jeder Scratch-Einheit unter dem Auftrag. Das Scratch-Logo und
  die Scratch-Katze sind Marken und dürfen nicht verwendet werden: Kein Bild zeigt sie (keine Menüleiste, keine
  Bühne, keine Figurenliste).
- **Dateien hochladen:** Bei den Aufträgen in Excel und Scratch lädt das Kind seine gespeicherte Datei (`.xlsx`
  oder `.sb3`) in der Einheit hoch (`pruefung.server` in `Modul.makeAuftrag`). Der Server prüft die Punkte der
  Aufgabe mit einem Prüfprogramm, die KI schreibt eine kurze Rückmeldung. Ist das Kind mit seinem Code angemeldet,
  bewahrt der Server die Datei für die Lehrkraft auf (je Kind und Auftrag die neueste Fassung, unter dem Code, ohne
  Namen; aus Excel-Mappen werden Verfasser und Speicherpfad entfernt). Die Seite sagt das dem Kind. Ansehen,
  herunterladen und löschen: `proben-verwalten.html` → Klasse → Informatik → „Abgegebene Dateien“
  (`../../abgaben-verwaltung.js`). In der Vorschau der Lehrkraft wird nichts aufbewahrt. Ist der
  Server nicht erreichbar, prüft die Seite selbst: `excel-datei.js` + `excel-aufgaben.js` bzw. `scratch-aufgaben.js`.
  Die beiden `…-aufgaben.js` werden aus dem Prüfprogramm des Servers **erzeugt** – nicht von Hand ändern. Für
  Tablets gibt es zu jedem Auftrag eine Ersatzfrage.
- **R und M:** Aufgaben für den M-Zug stehen in `Modul.plus(() => …)`. In 8R sind sie freiwillig und zählen nicht
  zu den Pflichtaufgaben. Hilfen bekommt 8R sofort, 8M erst nach einer Wartezeit.
- **Freischalten:** Die Lehrkraft schaltet je Klasse Module oder einzelne Einheiten frei (`proben-verwalten.html`
  → Klasse → Informatik). Alles ist zuerst gesperrt; ohne Anmeldung mit Code ist nichts offen.
  `?vorschau=1` zeigt der Lehrkraft eine gesperrte Einheit, ohne etwas zu speichern.
- **Proben:** je Modul eine Probe in einer Fassung für 8R und 8M, etwa 15 bis 20 Minuten. `probe.html` zeigt die
  Probe des eigenen Zugs (`?thema=…&zug=R|M`, `?test=<Kennung>`). Fragen, Lösungen und Bewertung liegen nur auf dem
  Server (`/api/inf8`). Lehrerseite: `lehrer.html`.
- **Praxis am Windows-PC:** Excel (Module 3 und 4) und Scratch im Browser (Modul 5). Die Einheiten dazu sind als
  „Windows-PC erforderlich“ gekennzeichnet; alle Stationen außer dem Auftrag im Programm gehen auch am Tablet.
  Die Module 1 und 2 und die Einheit „Relativ oder absolut?“ gehen ganz am Tablet.
- Bilder der Proben liegen in `assets/proben/` (eigene Zeichnungen: Tabellen als SVG, Scratch-Programme als PNG).
- Beispiele verwenden erfundene Namen, Betriebe, Portale und Produkte; Internetadressen enden auf `.example`.
  Zeichnungen sind eigene SVG-Grafiken.
