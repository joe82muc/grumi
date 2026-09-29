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
