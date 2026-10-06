# Deutsch 7M / 7R

Übersicht: `index.html` (von 7M und 7R auf der Startseite verlinkt). Themenbereich „Argumentieren und diskutieren“ mit sechs Modulen:

1. `argumentationstrainer.html` – Argumentations-Führerschein (früher `index.html`): vier Stufen, Behauptung/Begründung/Beispiel, Pro und Kontra, Argument-Duell, freie Argumentation. Logik in `app.js`, Aussehen `de-modul.css` + `trainer.css`.
2. `argumente-formulieren.html` – Radtour mit Übernachtung: Pro/Kontra sortieren, markieren, Beispiele, Konjunktionen, KI-Duell Fahrradtour, Standpunkt.
3. `angemessen-ausdruecken.html` – kränkende Sätze erkennen und umformulieren, Streitgespräch Nele/Jannik/Emre (Waffelstand), Ich-Botschaften, Streit-Entschärfer-Duell.
4. `ueberzeugend-argumentieren.html` – Themenwahl (Tag ohne Technik / Übernachtung im Schulhaus), Checkliste, Pro/Kontra, entkräften, KI-Duell, Text, Körpersprache, Feedback, Lerntagebuch.
5. `sachlich-diskutieren.html` – Standpunkt + 3 Argumente, Beobachtungsbogen, Diskussionsleitung, Beobachten üben, KI-Diskussion, Auswertung, Lerntagebuch.
6. `tisch-duell.html` – Tisch-Duell zu zweit: zwei iPads, Pro gegen Kontra, die KI prüft jeden Beitrag.

Die Module 1–5 sind Selbstlernmodule ohne Gruppenarbeit; Modul 6 ist bewusst Partnerarbeit.

Gemeinsame Bausteine der Module 2–6: `de-modul.css` und `de-modul.js` (Anmeldung „Dein Training starten“, Klick-Übungen, Markieren, Freitexte mit KI-Checkliste, Duell, Beobachtungsbogen, Lerntagebuch, Vorlesen). Bilder in `bilder/` (WebP, 1200 px); die Originale liegen außerhalb des Repos in OneDrive `7/Deutsch/Bilder`.

Eine Anmeldung gilt für alle Module (localStorage `grumi-de7-argument-session-v1`). Die KI-Kontrolle läuft auf Render `englisch-9` (Repo `englisch_9`): Trainer unter `/api/de7-argument/...`, Module unter `/api/de7-argument/modul/check|duell|tagebuch` (`backend/api/deutsch7-module.js`). Ohne Server prüfen die Seiten offline nach Stichworten. Lehreransicht: `lehrer.html` (zeigt Trainer-Fassungen und Modul-Einträge).

## Freischalten je Klasse und Lernfortschritt (seit 05.10.2026)

- `themen.js` (`window.D7`) nennt die drei Themenbereiche (Argumentieren, Grammatik, Rechtschreibung) und ihre 20 Module an einer Stelle. Übersicht (`index.html` mit `uebersicht.js`), Modulseiten und Verwaltung lesen daraus. Neues Modul = Seite anlegen und dort eintragen.
- Alle Module sind je Klasse zuerst gesperrt. Die Lehrkraft schaltet in der Verwaltung (`proben-verwalten.html` → Klasse → Deutsch) ganze Themenbereiche oder einzelne Module frei. Server: `/api/d7/freigabe` und `/api/d7/lehrer/freigabe[/setzen]` (Repo `englisch_9`, `nt7-freigabe.js`, Datei `d7-freigabe.json`). Ohne Code ist nichts offen.
- Jede Modulseite prüft die Freischaltung selbst (`D7.sperre`): `de-modul.js`, `app.js` und über `Grammatik/themen.js` bzw. `Rechtschreibung/themen.js` der Baukasten `js/grammatik.js` (Vorgabe `liste`). Mit `?vorschau=1` (Link aus der Verwaltung) sieht die Lehrkraft jede Seite ohne Anmeldung.
- **Extra-Module „Zeitformen wiederholen“** (seit 06.10.2026): fünf kleine Seiten `Grammatik/zf_*.html` (Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I) mit kurzer Erklärung und vier Übungen, für 7M und 7R gleich. In `themen.js` tragen sie `extra: "gr-02"`: Sie hängen in der Übersicht als Kasten „Du kennst dich noch nicht so gut mit Zeitformen aus?“ unter „Zeitformen bis Futur II“ (auch oben auf dieser Seite), zählen nicht zum Lernfortschritt und werden in der Verwaltung einzeln freigeschaltet – „Alle freischalten“ für die Grammatik öffnet sie nicht mit. Im Lernstand der Lehrkraft stehen sie als eigener Bereich „Zeitformen wiederholen“. Ein weiteres Extra: Seite mit `Grammatik.seite({ extra: true, modul: "d7-…" })` anlegen und in `themen.js` mit `extra: "<Kennung des Moduls>"` eintragen.
- Die Übersicht zeigt den Lernfortschritt gesamt, je Themenbereich und je Modul (Stand des Geräts plus Stand vom Server). Plus-Aufgaben zählen für R-Klassen nicht mit.
- Die Lehrkraft sieht den Lernstand der Klasse im selben Reiter unter dem Freischalten. Der Führerschein meldet bestandene Stufen als „Modul 1“ (`d7-argumentationstrainer`), die Module 2 bis 6 tragen dort jetzt dieselben Nummern wie auf ihren Seiten.
