# NT 9M / 9R · Organische Rohstoffe

- 9M und 9R haben je eine eigene Kopie dieses Ordners (`9M/NT_9/…` und `9R/NT_9/…`). Änderungen immer in beiden machen.
- Übersicht: `index.html`, Moduldaten: `content.js`, allgemeine Modulansicht: `module.html?id=m0X` (`module-view.js`).
- Fortschritt je Gerät: `fortschritt/fortschritt.js` (localStorage, getrennt nach 9M und 9R).
- Arbeitsstand und Änderungsverlauf: `fortschritt/README.md`.

## Modul 2 „Biodiesel, Stärke und Nachhaltigkeit“ (29.09.2026)

- Eigene Lernseite `modul-2.html` im Stil der NT-7M-Module (Luft). In `content.js` steht bei `m02` der Eintrag `page: "modul-2.html"`. Die Übersicht verlinkt deshalb direkt dorthin, und `module.html?id=m02` leitet weiter.
- Bausteine `modul-basis.js` und `modul-basis.css` sind unveränderte Kopien aus `7M/NT`. Bei Änderungen dort auch hier kopieren.
- Grundlage: fachliche Fakten aus dem Unterrichtsmaterial zu Biodiesel, Stärke und Nachhaltigkeit (Probenstoff), seit 30.09.2026 eigenständig formuliert. Die Vorlagen mit Lösungen liegen nur lokal in `9/NT_9/Bilder` und gehören nicht ins öffentliche Repository.
- Bilder: `assets/modul2/*.webp`, verkleinert aus den Originalen in `9/NT_9/Bilder`.
- 8 Stationen: Öl aus Pflanzen (Versuch mit Variante A/B), Biodiesel (Produktionsweg, 70 % der Fläche Deutschlands), Stärke (Stärkefabrik), Stärkefolie (Film mit 5 Stopps, Verpackungs-Chips), Nachhaltigkeit (Wald-Gleichgewicht, Borkenkäfer in Monokultur und Mischwald), Nachhaltig nutzen (Kaskade, Kreislaufwirtschaft, Blühstreifen), Training, Profi-Check.
- Film: „Das Stärkefolien-Experiment“ der Junior Uni Wuppertal (YouTube `wGjdHAnlQNI`). Er wird erst nach einem Klick über youtube-nocookie geladen. Die Stopps stehen in `STOPS` (Sekunden). Lädt der Film nicht, erscheinen alle Fragen mit Link zu YouTube.
- Offene Fragen gehen an `POST /api/nt9/uebung/feedback` auf `englisch-9.onrender.com` (Repository `englisch_9`, Datei `backend/api/nt7-uebung.js`, zweite Registrierung in `server.js`). Ohne KI prüft die Seite offline nach Fachbegriffen.
- Die Sterne des Moduls landen als `m02` im Kursfortschritt. „Geschafft“ erscheint erst, wenn alle Aufgaben gelöst sind.
- Das frühere Modul 3 „Nachhaltigkeit und Kaskadennutzung“ (`m03`) wurde am 30.09.2026 gestrichen, weil Modul 2 das Thema schon abdeckt.

## Modul 1 „Kohlenstoff, Holz und Raps“ (29.09.2026)

- Eigene Lernseite `modul-1.html` im selben Stil wie Modul 2. In `content.js` steht bei `m01` der Eintrag `page: "modul-1.html"`. Die alten Seiten `m1-regenerative-rohstoffe.html` und `module.html?id=m01` werden nicht mehr verlinkt (`module.html?id=m01` leitet weiter).
- Grundlage: fachliche Fakten aus dem Unterrichtsmaterial zu Holz und Raps (Probenstoff, lokale Vorlage in `9M/05_NT/03_Lebensgrundlage Kohlenstoff/01_Organische Rohstoffe/`), seit 30.09.2026 eigenständig formuliert. Daraus entstanden ein Zuordnen (Holz/Raps), ein Lückentext, ein Durchstreichen und eine KI-Frage.
- Im Lückentext dürfen „Holz/Raps“ und „landwirtschaftlich/forstwirtschaftlich“ vertauscht sein. Das regelt ein Capture-Klick auf „Prüfen“ in der Seite, `modul-basis.js` bleibt unverändert.
- Bilder: `assets/modul1/holz-pellets.webp` und `holzverarbeitung.webp` (aus `9/NT_9/Bilder`), `holz-schema.svg` ist ein eigenes Schaubild zum Beschriften. Bei `holz-pellets.webp` sind die Bildunterschriften abgeschnitten.
- 7 Stationen: Kohlenstoff (Verkohlungs-Versuch mit 5 Proben), Holz (Holz unter der Lupe: Fasern und Lignin), Zellstoff (Zellstoffwerk, Film mit 6 Stopps), Raps (Rapsöl-Weiche: energetisch, stofflich, Nahrungsmittel), Regenerativ (CO₂-Kreislauf Baum und Erdöl, Lückentext, Merkmale), Training, Profi-Check.
- Film: „Kaskade 4: Zellstoffherstellung“ der Fachagentur Nachwachsende Rohstoffe (YouTube `zGIpNLuZgno`). Die Stopps stehen in `STOPS` und sind nach dem Untertitel des Films gesetzt.
- Die KI-Route `/api/nt9/uebung/feedback` nennt im Systemtext jetzt auch Kohlenstoff, Holz und Raps (`englisch_9`, `backend/api/server.js`, Version `2026-09-29-nt9-modul1`).
- Die Sterne landen als `m01` im Kursfortschritt.

## Modul 3 „Entstehung fossiler Rohstoffe“ (30.09.2026)

- Eigene Lernseite `modul-3.html` im selben Stil wie Modul 1 und 2. In `content.js` steht bei `m04` der Eintrag `page: "modul-3.html"` und `nr: 3`. Die Kennungen `m04`–`m06` bleiben, damit gespeicherter Fortschritt passt; angezeigt wird `nr` (Modul 3–5).
- Grundlage: fachliche Fakten aus dem Unterrichtsmaterial zur Entstehung fossiler Rohstoffe. Alle Texte, Lückentexte und Aufgaben sind eigenständig formuliert, ohne Seiten- oder Aufgabenverweise.
- Bilder: `assets/modul3/*.webp` aus den KI-Grafiken in `9/NT_9/Bilder` („Eröl und Erdgas Entstehung“, „Kohle Entstehung“, „Fischfossil Erdöl“). In der Erdöl-Grafik war im Merke-Kasten ein Tippfehler („entsanden“); der Kasten wurde mit Bahnschrift neu beschriftet. `lagerstaette.svg` ist ein eigenes Schaubild zum Beschriften.
- 8 Stationen: Fossilien (Animation Fisch → Fossil), Nutzung (Energie-Weiche Kohle/Erdöl/Erdgas), Erdöl und Erdgas (Animation in 6 Schritten, Lückentext, Bild-Text-Zuordnung mit eigenen Mini-Bildern), Kohle (Inkohlung mit Kohlenstoffanteil und dünner werdender Schicht, Reihenfolge, Zuordnen), Vergleich (Tabelle zum Aufdecken, Zuordnen), Endlich (24-Stunden-Uhr, Film mit 7 Stopps), Training (Kreuzworträtsel mit Lösungswort ENERGIE, Lagerstätte beschriften, Richtig/Falsch, Ankreuzen, 4 KI-Fragen), Profi-Check.
- Film: „Fossile Energieträger: Kohle, Erdöl, Erdgas“ von Duden Learnattack (YouTube `5WMcvAo8Q8o`, einbettbar). Die Stopps stehen in `STOPS` und sind nach den automatischen Untertiteln gesetzt.
- KI-Fragen gehen an dieselbe Route `/api/nt9/uebung/feedback`. Die Seite schickt ihr Thema selbst mit; das Backend musste nicht geändert werden.
- Die Sterne landen als `m04` im Kursfortschritt.

## Modul 4 „Erdölaufbereitung und Fraktionen“ (30.09.2026)

- Eigene Lernseite `modul-4.html`, in `content.js` bei `m05` mit `page: "modul-4.html"` und `nr: 4`.
- Grundlage: fachliche Fakten aus dem Unterrichtsmaterial zur Aufbereitung von Erdöl (lokal in `9/NT_9/Bilder`), eigenständig formuliert. Aus dem Lückentext wurde ein eigener Lückentext mit denselben zehn Lösungswörtern, aus den Fragen zum Rückstand drei KI-Fragen.
- Bilder: `assets/modul4/destillation-erdoel.webp` und `produkte-aus-erdoel.webp` (KI-Grafiken, Hinweis ist im Bild und in der Bildunterschrift), `turm.svg` ist ein eigenes Schaubild zum Beschriften.
- Film: „Erdöl, Teil 1“ der Bibliothek der Sachgeschichten (YouTube `5iah96MyomM`), Stopps in `STOPS`.
- Die Station „Produkte“ nimmt den Alltagsbezug vorweg, Modul 5 kann sich auf den Kohlenstoffkreislauf konzentrieren.
- Die Sterne landen als `m05` im Kursfortschritt.
