# NT 9M / 9R · Organische Rohstoffe

- 9M und 9R haben je eine eigene Kopie dieses Ordners (`9M/NT_9/…` und `9R/NT_9/…`). Änderungen immer in beiden machen.
- Übersicht: `index.html`, Moduldaten: `content.js`, allgemeine Modulansicht: `module.html?id=m0X` (`module-view.js`).
- Fortschritt je Gerät: `fortschritt/fortschritt.js` (localStorage, getrennt nach 9M und 9R).

## Modul 2 „Biodiesel, Stärke und Nachhaltigkeit“ (29.09.2026)

- Eigene Lernseite `modul-2.html` im Stil der NT-7M-Module (Luft). In `content.js` steht bei `m02` der Eintrag `page: "modul-2.html"`. Die Übersicht verlinkt deshalb direkt dorthin, und `module.html?id=m02` leitet weiter.
- Bausteine `modul-basis.js` und `modul-basis.css` sind unveränderte Kopien aus `7M/NT`. Bei Änderungen dort auch hier kopieren.
- Grundlage: Buch S. 16–21 und die Arbeitsblätter „Biodiesel aus Raps“, „Stärke als nachwachsender Rohstoff“ und „Nachhaltigkeit regenerativer Rohstoffe“ (Probenstoff). Die Arbeitsblätter mit Lösungen liegen nur lokal in `9/NT_9/Bilder` und gehören nicht ins öffentliche Repository.
- Bilder: `assets/modul2/*.webp`, verkleinert aus den Originalen in `9/NT_9/Bilder`.
- 8 Stationen: Öl aus Pflanzen (Versuch mit Variante A/B), Biodiesel (Produktionsweg, 70 % der Fläche Deutschlands), Stärke (Stärkefabrik), Stärkefolie (Film mit 5 Stopps, Verpackungs-Chips), Nachhaltigkeit (Wald-Gleichgewicht, Borkenkäfer in Monokultur und Mischwald), Nachhaltig nutzen (Kaskade, Kreislaufwirtschaft, Blühstreifen), Training, Profi-Check.
- Film: „Das Stärkefolien-Experiment“ der Junior Uni Wuppertal (YouTube `wGjdHAnlQNI`). Er wird erst nach einem Klick über youtube-nocookie geladen. Die Stopps stehen in `STOPS` (Sekunden). Lädt der Film nicht, erscheinen alle Fragen mit Link zu YouTube.
- Offene Fragen gehen an `POST /api/nt9/uebung/feedback` auf `englisch-9.onrender.com` (Repository `englisch_9`, Datei `backend/api/nt7-uebung.js`, zweite Registrierung in `server.js`). Ohne KI prüft die Seite offline nach Fachbegriffen.
- Die Sterne des Moduls landen als `m02` im Kursfortschritt. „Geschafft“ erscheint erst, wenn alle Aufgaben gelöst sind.
- Offen: Modul 3 (`module.html?id=m03`) behandelt Nachhaltigkeit und Kaskadennutzung noch einmal in Kurzform.

## Modul 1 „Kohlenstoff, Holz und Raps“ (29.09.2026)

- Eigene Lernseite `modul-1.html` im selben Stil wie Modul 2. In `content.js` steht bei `m01` der Eintrag `page: "modul-1.html"`. Die alten Seiten `m1-regenerative-rohstoffe.html` und `module.html?id=m01` werden nicht mehr verlinkt (`module.html?id=m01` leitet weiter).
- Grundlage: Buch S. 14–15 und das Arbeitsblatt „Regenerative Rohstoffe: Holz und Raps (1)“ (`9M/05_NT/03_Lebensgrundlage Kohlenstoff/01_Organische Rohstoffe/organische Stoffe AB.docx`, Probenstoff). Aufgabe 1 (Linien Holz/Raps) ist ein Zuordnen, Aufgabe 2 ein Lückentext, Aufgabe 3a ein Durchstreichen, 3b eine KI-Frage.
- Im Lückentext dürfen „Holz/Raps“ und „landwirtschaftlich/forstwirtschaftlich“ vertauscht sein. Das regelt ein Capture-Klick auf „Prüfen“ in der Seite, `modul-basis.js` bleibt unverändert.
- Bilder: `assets/modul1/holz-pellets.webp` und `holzverarbeitung.webp` (aus `9/NT_9/Bilder`), `holz-schema.svg` ist das Schaubild zum Beschriften (nach Buch S. 14, Abb. 2).
- 7 Stationen: Kohlenstoff (Verkohlungs-Versuch mit 5 Proben), Holz (Holz unter der Lupe: Fasern und Lignin), Zellstoff (Zellstoffwerk, Film mit 6 Stopps), Raps (Rapsöl-Weiche: energetisch, stofflich, Nahrungsmittel), Regenerativ (CO₂-Kreislauf Baum und Erdöl, Arbeitsblatt), Training, Profi-Check.
- Film: „Kaskade 4: Zellstoffherstellung“ der Fachagentur Nachwachsende Rohstoffe (YouTube `zGIpNLuZgno`). Die Stopps stehen in `STOPS` und sind nach dem Untertitel des Films gesetzt.
- Die KI-Route `/api/nt9/uebung/feedback` nennt im Systemtext jetzt auch Kohlenstoff, Holz und Raps (`englisch_9`, `backend/api/server.js`, Version `2026-09-29-nt9-modul1`).
- Die Sterne landen als `m01` im Kursfortschritt.
