# Deutsch 7M / 7R

Übersicht: `index.html` (von 7M und 7R auf der Startseite verlinkt). Themenbereich „Argumentieren und diskutieren“ mit fünf Modulen:

1. `argumentationstrainer.html` – Argumentations-Führerschein (früher `index.html`): vier Stufen, Behauptung/Begründung/Beispiel, Pro und Kontra, Argument-Duell, freie Argumentation. Logik in `app.js`, Aussehen `de-modul.css` + `trainer.css`.
2. `argumente-formulieren.html` – Buch S. 22 (Extra Sprache): Pro/Kontra sortieren, markieren, Beispiele, Konjunktionen, KI-Duell Fahrradtour, Standpunkt.
3. `angemessen-ausdruecken.html` – Buch S. 23 (Extra Sprache): verletzende Äußerungen, Streitgespräch Linus/Max/Serpil, Ich-Botschaften, Streit-Entschärfer-Duell.
4. `ueberzeugend-argumentieren.html` – Buch S. 24 (Teste dich!): Themenwahl (Tag ohne Technik / Übernachtung im Schulhaus), Checkliste, Pro/Kontra, entkräften, KI-Duell, Text, Körpersprache, Feedback, Lerntagebuch.
5. `sachlich-diskutieren.html` – Buch S. 25 (Teste dich!): Standpunkt + 3 Argumente, Beobachtungsbogen, Diskussionsleitung, Beobachten üben, KI-Diskussion, Auswertung, Lerntagebuch.

Gemeinsame Bausteine der Module 2–5: `de-modul.css` und `de-modul.js` (Anmeldung „Dein Training starten“, Klick-Übungen, Markieren, Freitexte mit KI-Checkliste, Duell, Beobachtungsbogen, Lerntagebuch, Vorlesen). Bilder in `bilder/` (WebP, 1200 px); die Originale liegen außerhalb des Repos in OneDrive `7/Deutsch/Bilder`.

Eine Anmeldung gilt für alle Module (localStorage `grumi-de7-argument-session-v1`). Die KI-Kontrolle läuft auf Render `englisch-9` (Repo `englisch_9`): Trainer unter `/api/de7-argument/...`, Module unter `/api/de7-argument/modul/check|duell|tagebuch` (`backend/api/deutsch7-module.js`). Ohne Server prüfen die Seiten offline nach Stichworten. Lehreransicht: `lehrer.html` (zeigt Trainer-Fassungen und Modul-Einträge).
