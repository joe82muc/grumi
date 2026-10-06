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

## Vollausbau Deutsch 7 (seit 06.10.2026)

Sechs Themenbereiche in `themen.js`: 1 Erzählen (`erz_01`–`06`), 2 Sachtexte (`sach_01`–`06`), 3 Argumentieren (die sechs Module oben + `arg_07` „Stellungnahme und Leserbrief“), 4 Literatur und Medien (`lit_01`–`06`), 5 Grammatik (`Grammatik/`, Zusatz `gr_duell`), 6 Rechtschreibung (`Rechtschreibung/`, `rs_fehler` „Mein Fehlertraining“, Zusatz `rs_duell`). Jeder Bereich nennt mit `proben: [nr]` seine Proben.

**Neue Lernmodule** sind reine Daten: Seite `<bereich>_<nn>.html` (lädt `../NT/modul-basis.js/.css`, `d7-zeilen.js`, `d7-lesetext.js/.css`, `d7-kit.js/.css`, `d7-spiel.js`), Inhalt `inhalt/<id>.js` (ein Aufruf `D7Kit.seite({ … })`), Texte `texte/<ordner>/…js` (`D7Texte.add({ Metadaten, absaetze | verse | sprecher })`).
- `d7-kit.js`: Bausteine `text, merke, beispiel, karten, lesetext, mc, tf, luecke, sort, ordnen, paare, offen, beleg` (Textstelle antippen), `markieren, schreiben` (Schreibtrainer), `formular`. `m7: true` = M7-Aufgabe (für 7R freiwillig), `nur: "R" | "M"` = nur in dieser Fassung. R7 oder M7 kommt aus der Anmeldung.
- `d7-spiel.js`: `hoertext` (Sprachausgabe des Geräts, Rollen mit eigenen Stimmen, Transkript erst nach den Aufgaben), `duell` (gegen die KI, Antworten der KI sind vorbereitet), `tischduell` (zwei Kinder an einem Gerät). Duelle zählen nicht zum Lernfortschritt.
- `d7-fehler.js`: `fehlercheck` für `rs_fehler.html` – kurzer Check in sechs Fehlerarten, danach Trainingsplan mit Verweis auf die passende Miniübung. Das Ergebnis bleibt auf dem Gerät.
- `d7-zeilen.js` bricht jeden Text fest auf 60 Zeichen um (dieselbe Datei liegt auf dem Server) – Zeile 12 ist auf jedem Gerät Zeile 12. `d7-lesetext.js` zeigt Texte mit Nummern an jeder fünften Zeile und passt die Schriftgröße an die Breite an.
- Textdatenbank: je Text eine Datei in `texte/` mit Titel, Kennung, Textsorte, Zug, Modul, Unterthema, Wortzahl, Schwierigkeit, Lehrplanbezug, Thema, Quelle, Lizenz, Erstellungsart, Zeilennummern, Probe geeignet. Übersicht: `texte/VERZEICHNIS.md`. Die Texte der Proben liegen nur auf dem Server (`texte/proben/LIESMICH.md`).
- Schreibtrainer: `POST /api/d7/schreiben/feedback` (Server `d7-texte.js`). Mit Code angemeldet werden Originaltext und jede überarbeitete Fassung samt KI-Rückmeldung aufbewahrt; die Lehrkraft sieht und kommentiert sie in der Verwaltung (Klasse → Deutsch, `../../texte-verwaltung.js`).

**Proben** (acht, je R7 A · R7 B · M7 A · M7 B; Variante B = Nachschreiber, bis zur Freischaltung unsichtbar): Aufgaben, Texte und Erwartungshorizont liegen nur auf dem Server (`englisch_9`: `backend/api/d7-proben.js`, `d7-proben/p1.js` … `p8.js`).
- `probe.html/js/css` – das Kind schreibt (Text links, Aufgaben rechts; schmal: Text zum Einblenden). Nach der Abgabe sieht es nur „angekommen“.
- `proben-lehrer.html/js` – freischalten, „Probe mit Lösungen“, Liste mit Stand (KORREKTUR ZU PRÜFEN → bestätigt → FREIGEGEBEN · geöffnet), Korrekturansicht: Die KI schlägt Punkte, Korrektur und nächsten Schritt je Aufgabe vor, die Lehrkraft ändert, bestätigt und drückt „Korrigierte Probe freigeben“. Schalter „Rechtschreibung / Zeichensetzung werten oder ohne Note“ je Abgabe (Notenschutz).
- `korrektur.html/js`, `korrektur-ansicht.js` – das Kind öffnet die freigegebene Korrektur (Aufgabe · Deine Antwort · Punkte · Korrektur · Dein nächster Schritt), druckt sie oder speichert sie als PDF. Die Übersicht zeigt oben „Deutsch – Probe N korrigiert · NEUE KORREKTUR“.
- **Probenmodus (Überwachung):** `probe.js` startet `../../js/probe-schutz.js` mit `ueberwachung: true`. Verlässt das Kind die Seite, wird das mit Beginn, Ende und Dauer festgehalten; nach der Rückkehr erscheint ein Hinweis mit „Weiter“ (beim 1., 2. und ab dem 3. Mal deutlicher). Einfügen ist gesperrt oder – Einstellung der Lehrkraft je Probe – erlaubt und wird mit Uhrzeit und Länge vermerkt (nie der Text); Kopieren wird vermerkt; sehr viel neuer Text in wenigen Sekunden ebenso. Das Protokoll geht mit der Abgabe an den Server und steht in der Korrekturansicht unter „Probenüberwachung“. Es gibt keine Probe ab und ändert keine Note. Im Lernmodus (Module) wird nichts davon erfasst.
- Die Originalantwort des Kindes wird nie überschrieben: je Aufgabe stehen `given` (Original), `ki` (Vorschlag) und `lehrer` (Entscheidung) getrennt in der Abgabe.
