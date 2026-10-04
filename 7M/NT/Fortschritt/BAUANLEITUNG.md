# NT 7: Bauanleitung für ein neues Lernmodul

Vorlage ist `7M/NT/brand-schutz.html` (Modul 6). Ein Modul ist **eine HTML-Datei** in `7M/NT/` mit eigenem
`<style>` und `<script>`; alles Gemeinsame kommt aus `modul-basis.css`, `modul-basis.js` und `themen.js`. Diese
drei Dateien werden für ein einzelnes Modul nicht geändert. Regeln und Prioritäten: `ARBEITSMODUS.md`.

## 1. Grundgerüst (aus der Vorlage übernehmen)

- `<header class="top">` mit `.brand`, `<nav class="stations" id="stations">` (je Station `<a href="#s1"><b>1</b>Kurzname</a>`),
  `<span class="stars" id="stars">`, `<div class="readbar" id="readbar">`.
- `<div class="hero">` mit `<canvas id="heroCanvas">`, Navigation, `.eyebrow` („… · Themenbereich … · Lernmodul N“),
  `<h1>`, Einleitung, `.hero-cta`, `.goals` (3–4 Lernziele als „Ich …“-Sätze). Eigene Farbe: `.hero{background:…}`.
- `<main class="wrap">`, darin zuerst `<div id="modulStand"></div>` (Lernfortschritt nach Stationen), dann je Station
  `<section class="station" id="s1">` mit `.st-head` (Nummer in `.st-num`, `.eyebrow`, `<h2>`).
- Bausteine in der Station: `.card`, `.grid2` (zwei Spalten), `.sim` (Grafik mit `.sim-ctrl` und `.obs`), `.merke`,
  `.info-karten`/`.info-karte`, `.schritt-liste`, `.task-tag` (+ `leicht`, `mittel`, `schwer`, `probe`, `m7`), `.hint`, `.lead`.
- Fachbegriff zum Antippen: `<button class="term" data-t="schluessel">Wort</button>`; der Schlüssel steht im `glossary`.
- Letzte Station: `<div class="card" id="quiz"></div>` (Profi-Check) und `<div class="words" id="words"></div>` (Wortspeicher),
  danach die Karte „Wie geht es weiter?“. Am Ende: `<footer>`, `#pop`, `#lb`, `<canvas id="confetti">`.
- Skripte in dieser Reihenfolge: `themen.js`, `modul-basis.js`, dann das eigene Skript in `(function(){ "use strict"; … })();`.

## 2. Start und Ende im Skript

```js
Modul.init({ key: "grumi-nt7-<id>-v1", hero: "funken" /* oder weglassen: Windlinien */, thema: "Thema für die KI-Rückmeldung",
  glossary: { schluessel: ["Begriff", "Erklärung in einem oder zwei Sätzen"], … } });
… Übungen bauen …
Modul.ready();
```

`<id>` und `key` stehen schon in `themen.js`; Nummer, Titel und Themenbereich für den Lernstand kommen von dort.

## 3. Übungs-Bausteine (`Modul.…`)

| Aufruf | Daten |
|---|---|
| `makeMC(el, liste, "mc1", {t: "Kurz-Check", probe: true})` | `{q, o: [4 Antworten], a: 0 oder [0, 2], e: "Erklärung"}` – richtige Antwort steht in `o` an Stelle `a`, die Reihenfolge wird gemischt. Je Frage eine Aufgabe (`mc1-0`, `mc1-1` …). |
| `makeGap(el, [["Text ", {g: "Lücke"}, " weiter"]], "gap1", ["Ablenker"])` | Absätze aus Text und Lücken. `el` braucht `class="gaptext"`. |
| `makeSort(el, {buckets: ["A", "B"], items: [{t: "Karte", b: 0}], cols: 150}, "sort1")` | Zuordnen in Fächer. Fach-Titel ohne HTML. |
| `makeTF(el, [["Aussage", true]], "tf")` | Richtig oder falsch, 5–8 Aussagen. |
| `makeOrder(el, ["Schritt 1", "Schritt 2"], "order1")` | Schritte in der richtigen Reihenfolge angeben. |
| `makePaare(el, [["links", "rechts"]], "paare1")` | Paare finden (5–7 Paare, kurze Texte). |
| `makeHotspots(bildEl, infoEl, zahlEl, [{x, y, i: "🔥", t: "Titel", s: "Text"}], "hs1")` | Punkte auf einem Bild; `bildEl` ist `<div class="hotimg">` mit SVG, x/y in Prozent. |
| `makeLabel(el, {img, alt, w, h, slots: [{x, y, px, py, a}], extra: []}, "label1")` | Bild beschriften (braucht eine Bilddatei). |
| `makeCrossword(el, {words: [{w, r, c, d, q}], sol: [[r, c]], solWord}, "cw")` | Belegung mit dem Werkzeug `kreuzwort.js` erzeugen (siehe 6). 8–10 Begriffe. |
| `makeOpen(el, [{q, m: "Musterlösung", k: ["wort|variante", "…"], min: 2}], "open", "Tipp ohne KI")` | Offene Frage mit KI-Rückmeldung. `k` = Stichwortgruppen für die Prüfung ohne KI; die Musterlösung muss sie selbst erfüllen. |
| `makeSchritte(simEl, {steps: ["Text 1", …], zeige(i) {…}, ms: 2600}, "anim1")` | Animation in Schritten (Start, Pause, Schritt für Schritt, Nochmal). `zeige(i)` stellt das Bild ein, `i = -1` ist der Anfang. Zählt, wenn der letzte Schritt erreicht ist. |
| `makeFilm(el, {vid, titel, quelle, dauer, stops: [{t: Sekunde, q: {q, o, a, e}}]}, "film")` | YouTube-Film mit Stopp-Fragen. Nur mit gelesenem Transkript einbauen. |
| `makeQuiz(el, alleMC.concat([...]), "quiz", "…-Profi")` | Profi-Check: 10 zufällige Fragen (nur Fragen mit einer richtigen Antwort). Mindestens 14 Fragen im Vorrat. |
| `Modul.plus(() => { …make…(); })` | Alles darin ist **M7-Niveau**: für M-Klassen Pflicht, für R-Klassen freiwillig. Karte mit `<span class="task-tag m7">M7 · für 7R freiwillig</span>` kennzeichnen. |

Eigene Versuche und Animationen: `register("id", "#element", "Bezeichnung für die Lehrkraft")` beim Aufbau und
`solve("id")` erst nach **echter Bedienung** (Regler bis ans Ende, alle Varianten ausprobiert, Frage beantwortet).
Damit der Modul-Prüfer sie bedienen kann: Auswahlknöpfe in ein Element mit `class="wahl"`, Startknöpfe in `.sim-ctrl`,
Regler als `<input type="range">`.

## 4. Inhalt

- Etwa 45 Minuten: 5 bis 7 Stationen. Einstieg mit einer Alltagssituation, 3–4 Erklär-Stationen (jede mit eigener
  Grafik oder Animation und einem Kurz-Check), „Training für die Probe“, Profi-Check.
- Im Training: Übungen leicht, mittel, schwer (am `task-tag` kennzeichnen), ein Kreuzworträtsel, wenn es passt,
  3 offene Fragen für alle und 1–2 M7-Fragen (Begründen, Übertragen, Diagramm oder Versuch auswerten).
- 30 bis 40 Aufgaben je Modul, davon 2 bis 5 M7-Aufgaben.
- Grafiken sind eigene SVG-Zeichnungen im Modul (keine Bilddateien aus Büchern oder dem Netz). Beschriftungen als
  `<text>` mit mindestens 11 px, kräftige Farben, klare Formen.
- Zeichen: nur Emojis, die es schon lange gibt (kein 🫧, 🫁, 🫀, 🪫 … – auf Schul-PCs erscheinen sie als Kästchen).
  Anführungszeichen „so“. Chemische Formeln mit tiefgestellten Ziffern (CO₂, O₂).
- Merke-Kästen (`.merke`) fassen den Probenstoff in 2–4 Punkten zusammen.

## 5. Eintragen

- `themen.js`: Das Modul braucht dort `href`. Steht die Datei noch nicht, den `href` weglassen („in Vorbereitung“).
- `MODULPLAN.md` und `README.md` in diesem Ordner ergänzen.

## 6. Werkzeuge (liegen beim Prüfskript, nicht in diesem Repository)

- Kreuzworträtsel: `node kreuzwort.js LOESUNGSWORT WORT1 WORT2 …` (nur A–Z, Umlaute als AE/OE/UE) liefert `words` und `sol`.
- Modul-Prüfer: `node pruefe-modul.js <website> <server-ordner> <bilder-ordner> <modul.html> chromium M` (und `R`, `webkit`).
  Er meldet das Modul an, prüft die Sperre, löst jede Übung durch die Oberfläche, lädt neu, prüft Übersicht,
  Lehreransicht, zweites Gerät, Handybreite und legt Bildschirmfotos je Station ab.

## 7. Abnahme

- Modul-Prüfer: alle Prüfungen bestanden in Chrome (M und R) und WebKit.
- Bildschirmfotos jeder Station angesehen: nichts überlappt, Beschriftungen lesbar, Animationen zeigen, was der Text sagt.
- Fachlich gegengelesen: Zahlen, Fachbegriffe wie im LehrplanPLUS, keine Aussage, die später zurückgenommen werden muss.
