# Fortschritt: NT 9M / 9R · Organische Rohstoffe

**Anmeldung mit Code (seit 01.10.2026 abends):** Jedes Kind bekommt von der Lehrkraft einen 3-stelligen
Code und meldet sich damit in den Modulen (1–5 und Kursübersicht) an. `fortschritt.js` prüft den Code beim
Server (`POST https://englisch-9.onrender.com/api/nt9/fortschritt/anmelden`, Backend `nt9-fortschritt.js` im
Repo `englisch_9`). Die Modulseiten melden über `FS.speichern(id, gelöst, gesamt, d)` die gelösten Aufgaben
(`d.geloest`) und einmal je Seitenaufruf den Aufgabenkatalog (`d.katalog()`: Bezeichnung und Station je
Aufgabe, kommt aus `modul-basis.js`). Meldungen gehen gesammelt nach 2,5 s raus; was nicht ankommt, bleibt in
`grumi-nt9-m9-senden~kennung~` und geht beim nächsten Öffnen raus.

- Gespeichert wird dauerhaft in Upstash Redis (Frankfurt, Umgebungsvariablen `UPSTASH_REDIS_REST_URL` und
  `UPSTASH_REDIS_REST_TOKEN` beim Render-Dienst). Ohne sie speichert der Server flüchtig in eine Datei.
  Prüfen: `GET /api/nt9/fortschritt/status` → `speicher: "upstash", verbunden: true`.
- **Keine Namen auf dem Server**: Der Server kennt nur Code, Klasse, gelöste Aufgaben und Zeitstempel. Die
  Zuordnung Code → Name hält die Lehrerseite nur im Browser der Lehrkraft (`lf-nt9-namen`), als Datei zu
  sichern und auf einem anderen Gerät zu laden (getrennte Liste laut `datenschutz.html`, Abschnitt 4).
- Auf dem Gerät heißt das Kind „Code 123“. Speicherbereich je Anmeldung: Schlüssel + `~code-123~`.
- Mit dem Code lässt sich auf jedem Gerät weiterlernen: Beim Anmelden und beim Öffnen einer Modulseite holt
  `fortschritt.js` den Stand vom Server und ergänzt den Stand auf dem Gerät (`Modul.mehrGeloest`).
- Ältere Anmeldungen mit Vorname: Beim ersten Anmelden mit Code bietet das Fenster an, den Stand zu übernehmen.
- Der Knopf „Fortschritt zurücksetzen“ in der Kursübersicht ist entfallen (der Server würde den Stand wieder
  herstellen). Zurücksetzen = Code in der Lehreransicht löschen und neu anlegen.
- Antworten auf offene Fragen und im Duell werden nicht gespeichert.

**Lehreransicht:** `proben-verwalten.html` (Wurzel des Repos), Lehrerpasswort, Reiter „📈 Lernfortschritt NT 9“
(`lernfortschritt-nt9.js`): Codes erzeugen (Namen zeilenweise eintragen oder die Klassenliste als CSV-Export aus
dem Schulmanager laden: Der Browser liest nur die Spalte „Vorname“, bei gleichen Vornamen den Anfangsbuchstaben
des Nachnamens, und erkennt die Klasse an „Ausbildungsrichtung“ (M-Zug = 9M); Adressen, Kontakte usw. werden
verworfen; Namen mit Code werden nicht doppelt angelegt), Codeliste zum Ausschneiden drucken,
Tabelle Kind × Modul (Anteil gelöster Aufgaben, 🏆 = Profi-Check), Klick auf ein Kind zeigt jede Aufgabe nach
Station, Klassenauswertung (die 12 am wenigsten gelösten Aufgaben eines Moduls), CSV-Export, Namensliste
speichern/laden, Code löschen.

Die Themenübersicht bindet `fortschritt.js` mit `data-anmeldung="nein"` ein (zeigt den Stand, fragt nicht).

| Modul | Kennung | Seite | Stand |
|---|---|---|---|
| 1 Kohlenstoff, Holz und Raps | `m01` | `modul-1.html` | fertig (29.09.2026) |
| 2 Biodiesel, Stärke und Nachhaltigkeit | `m02` | `modul-2.html` | fertig (29.09.2026) |
| 3 Entstehung fossiler Rohstoffe | `m04` | `modul-3.html` | fertig (30.09.2026) |
| 4 Erdölaufbereitung und Fraktionen | `m05` | `modul-4.html` | fertig (30.09.2026) |
| 5 Kohlenstoffkreislauf und Treibhauseffekt | `m06` | `modul-5.html` | fertig (01.10.2026) |
| 6 Erdöl – Rohstoff mit Zukunft? | `m07` | `modul-6.html` | fertig (02.10.2026) |
| 7 Ohne Erdöl – geht das? | `m08` | `modul-7.html` | fertig (02.10.2026, aus Modul 6 Station 5–8) |

## Stand 29.09.2026

- Modul 1 und Modul 2 als eigene Lernseiten im Stil von NT 7M (Luft) gebaut: Stationen, Animationen,
  Film mit Stopps, Kreuzworträtsel, Lückentexte, Zuordnen, Ankreuzen und offene Fragen mit KI-Rückmeldung.

## Stand 30.09.2026

- Das bisherige Modul 3 „Nachhaltigkeit und Kaskadennutzung“ (`m03`) ist gestrichen: Eintrag in `content.js`,
  Kachel in `übersicht_themen.html` und die alte Seite `m3-nachhaltigkeit-kaskadennutzung.html` sind entfernt.
  Nachhaltigkeit und Kaskadennutzung stecken bereits in Modul 2.
- Neues Modul 3 „Entstehung fossiler Rohstoffe“ (`modul-3.html`, Bilder in `assets/modul3/`):
  - 8 Stationen: Fossilien, Nutzung, Erdöl und Erdgas, Kohle, Vergleich, Endlich (mit Film), Training, Profi-Check.
  - Animationen: Fisch wird zum Fossil (5 Schritte), Energie-Weiche Kohle/Erdöl/Erdgas, Entstehung von Erdöl
    und Erdgas (Plankton → Faulschlamm → Schichten → Öl und Gas → Lagerstätte), Inkohlung vom Sumpfwald bis zur
    Steinkohle mit Kohlenstoffanteil, „Uhr der Erde“ (Entstehung = 24 Stunden, Verbrauch = 0,2 Sekunden).
  - Übungen: Lückentext Erdöl, Bild-Text-Zuordnung, Reihenfolge Kohle, Torf/Braunkohle/Steinkohle zuordnen,
    Vergleichstabelle zum Aufdecken, Venn-Zuordnung, Kreuzworträtsel (Lösungswort ENERGIE), Lagerstätte
    beschriften, Richtig/Falsch, Ankreuzen, 10 offene Fragen mit KI-Rückmeldung, Abschlussquiz.
  - Film: Duden Learnattack „Fossile Energieträger: Kohle, Erdöl, Erdgas“ mit 7 Stopps.
  - Keine Seiten-, Aufgaben- oder Arbeitsblattverweise; alle Texte eigenständig formuliert.
  - KI-Grafiken mit Hinweis „Fachinhalt anhand einer vorhandenen Unterrichtsquelle geprüft, Grafik
    anschließend vollständig neu und eigenständig mittels KI erstellt“.
- Übersicht und Themenübersicht zeigen jetzt fünf Module (Modul 3–5 = Kennungen `m04`–`m06`).
- Modul 1 und 2 bereinigt: keine Buchseiten-, Aufgaben- und Arbeitsblattverweise mehr (Überschriften,
  Aufgabenetiketten, Erklärungen, Tipps, Footer). Infotexte, Merke-Kästen, Versuchsanleitungen und Lückentexte
  sind eigenständig neu formuliert; Fakten und Lösungswörter sind gleich geblieben.
- Beim Holz-Pellets-Bild die Bildunterschriften abgeschnitten, im Holz-Schaubild den Quellenhinweis entfernt.
- Emojis ab Unicode 12/13 (🪵 🪨 🪑) ersetzt, weil Windows 10 sie nur als leeres Kästchen zeigt.

## Stand 30.09.2026, abends: Modul 4

- Neues Modul 4 „Erdölaufbereitung und Fraktionen“ (`modul-4.html`, Bilder in `assets/modul4/`):
  - 8 Stationen: Stoffgemisch (mit Film), Modellversuch, Destillationsturm, Rückstand, Eigenschaften,
    Produkte, Training, Profi-Check.
  - Animationen: Destillation von gefärbtem Wasser im Labor (5 Schritte), Modellversuch mit vier Fraktionen
    (Lehrerversuch, Temperatur in 50-°C-Stufen), Destillationsturm mit aufsteigenden Dampfteilchen, die je nach
    Fraktion in ihrer Höhe kondensieren, Druckregler (Siedetemperatur von Rückstand und Wasser sinkt, Zugspitze,
    Mount Everest), Entzündbarkeit von Benzin, Kerosin, Dieselöl und Motoröl mit Heizplatte, Kugelfall in vier
    Fraktionen (Zähflüssigkeit), vereinfachte Molekülketten, Erdöl-Detektiv (Dinge aus Erdöl verschwinden).
  - Übungen: Lückentext zur fraktionierten Destillation, zwei Reihenfolgen, zwei Zuordnungen, Kreuzworträtsel
    (Lösungswort DIESEL), Destillationsturm beschriften, Richtig/Falsch, Ankreuzen, 13 offene Fragen mit
    KI-Rückmeldung (darunter die drei Fragen zum Rückstand), Abschlussquiz.
  - Film: „Erdöl, Teil 1“ aus der Bibliothek der Sachgeschichten (YouTube `5iah96MyomM`) mit 5 Stopps.
  - Grundlage: fachliche Fakten aus dem Unterrichtsmaterial zur Aufbereitung von Erdöl, alle Texte eigenständig
    formuliert. KI-Grafiken aus dem Apps-Ordner („So wird Erdöl in Bestandteile getrennt“, „Was wird aus Erdöl
    hergestellt“) mit dem vorgegebenen KI-Hinweis.

## Stand 01.10.2026: Anmeldung

- Anmeldung mit Vorname oder Nummer für alle fünf Module und die Kursübersicht (wie „Dein Training starten“
  in Deutsch 7, aber ohne Server). Begrüßung „Hallo …“ in der Kursübersicht, Name auch in der Themenübersicht.
- Mehrere Kinder an einem geteilten Gerät sehen jeweils nur ihren eigenen Stand.
- Getestet mit Playwright (Chromium und WebKit/iPad): Übernahme des alten Stands, Abmelden, zweites Kind,
  erneute Anmeldung, Zurücksetzen, Handybreite.

## Stand 01.10.2026: Modul 5

- Neues Modul 5 „Kohlenstoffkreislauf und Treibhauseffekt“ (`modul-5.html`, Bilder in `assets/modul5/`),
  ersetzt die alte Kurzansicht `module.html?id=m06`. Kennung bleibt `m06`, Speicherschlüssel `…-modul5-v1`.
  - 9 Stationen: Kreislauf, Mensch, Treibhauseffekt, Experiment (Film), Klimawandel, Klimaschutz, Duell (seit dem Abend), Training, Profi-Check.
  - Animationen: Kohlenstoff-Reise (C-Atom wandert über 12 Wege zwischen Luft, Pflanze, Tier, Meer, Boden und
    Lagerstätten, Lage der Wege per Skript überlappungsfrei berechnet), CO₂-Waage (Gleichgewicht kippt durch
    Kohle, Erdöl, Erdgas und Rodung, CO₂-Anteil 0,028 % → 0,042 %), Strahlen-Simulator (ohne / natürlich /
    zusätzliche Treibhausgase, −18 °C / +15 °C / über +15 °C), Versuch nachspielen mit Temperaturdiagramm,
    Klima-Regler (Gletscher, Feld, Unwetter, Meeresspiegel), CO₂-Rechner für Reisen.
  - Übungen: zwei Lückentexte, zwei Reihenfolgen, vier Zuordnungen, Rechenaufgabe Klassenfahrt Berlin (600 km),
    Kreuzworträtsel (Lösungswort KLIMASCHUTZ), Treibhauseffekt beschriften (`assets/modul5/treibhaus.svg`),
    Richtig/Falsch, Ankreuzen, 16 offene Fragen mit KI-Rückmeldung, Abschlussquiz.
  - Film: ZDF „MAITHINK X – Die Show“, „Wie funktioniert der Treibhauseffekt? Das Experiment.“ (5:26) mit 7 Stopps.
    Das ZDF erlaubt das Einbetten (`embeddingPossible`), die MP4 kommt direkt vom ZDF-Server (808k-Fassung,
    keine Geosperre, kein Ablaufdatum eingetragen). Lädt sie nicht, verlinkt die Seite auf schule.zdf.de.
    Der Clip hat keine Untertitel, das Transkript wurde per Spracherkennung (faster-whisper) erstellt und die
    Zahlen an Standbildern geprüft (21,4 °C Start, 36,4 °C Luft, 37,5 °C mit CO₂, 0,028 % → 0,042 %).
  - Fakten aus dem Unterrichtsmaterial zu Kohlenstoffkreislauf und Treibhauseffekt, alle Texte eigenständig
    formuliert, keine Abbildungen nachgebaut. CO₂-Werte pro Person und km: Bus 44 g, Bahn 50 g, Auto 161 g, Flugzeug 215 g.
  - KI-Grafiken „Kohlenstoffkreislauf“ und „Treibhauseffekt“ des Nutzers mit KI-Hinweis.

## Stand 01.10.2026, abends: Klima-Duell in Modul 5

- Neue Station 7 „Duell gegen den Klimaleugner“ in `modul-5.html` (Training ist jetzt Station 8, Profi-Check
  Station 9; Kennung `m06` und Speicherschlüssel bleiben, alter Fortschritt passt weiter).
  - Infotexte: Was sind Klimaleugner und Klima-Mythen, vier Schritte, um einen Mythos zu entlarven, Merke-Kasten
    (Wetter und Klima, früherer und heutiger Klimawandel).
  - Aufwärmen: Zuordnung „Fakt oder Mythos?“ mit 8 Aussagen.
  - Duell nach dem Muster des Windkraft-Duells aus NT 7M: Die KI spielt einen Klimaleugner, pro Spiel 4 von
    8 Behauptungen (Klima hat sich schon immer geändert, nur 0,04 % CO₂, CO₂ als Pflanzenfutter, kalter Winter,
    Treibhauseffekt nie bewiesen, Natur stößt mehr aus, Einzelne können nichts tun, Wärme = Badewetter), danach
    das letzte Wort („Warum CO₂ sparen?“). „Nochmal“ bringt zuerst die noch nicht gespielten Behauptungen.
    Tipp-Knopf mit Satzanfängen und Verweisen auf die Stationen 1–6, Beispiel-Konter nach jeder Runde.
  - Bewertung über `POST /api/nt9/uebung/feedback` (live geprüft, kein Backend-Deploy nötig); ohne Server offline
    nach Stichworten, der Hinweis darauf steht jetzt in der Chat-Nachricht.
  - Zwei neue Fragen im Abschlussquiz (Wetter/Klima, natürliches CO₂ im Gleichgewicht), Lernziel, Kachel in der
    Themenübersicht und Ziel in `content.js` ergänzt.
- Getestet mit Playwright (Chrome, 9M und 9R): Zuordnung lösbar, Duell mit KI-Attrappe und offline
  durchgespielt, Punkte und Sterne stimmen, zweites Spiel ohne Wiederholung, Handybreite ohne Überlauf, keine Skriptfehler.

## Stand 01.10.2026, abends: Strahlen-Simulator überarbeitet

- Im Strahlen-Simulator (Modul 5, Station 3) kamen zu wenige Wärmeteilchen zur Erde zurück (natürlich etwa 2,
  verstärkt etwa 3–4 von 10), weil jedes Teilchen nur einmal eingefangen werden konnte. Jetzt kann ein nach oben
  weitergeschicktes Teilchen von einem höher liegenden Molekül erneut eingefangen werden. Ergebnis: ohne
  Treibhausgase 0, natürlich etwa 5, verstärkt etwa 7 von 10. Der Text zum verstärkten Effekt erklärt das.
- Temperaturanzeige steht jetzt als Schild neben der Thermometerkugel (wurde vorher von Molekülen überdeckt).
- Legende unter dem Bild: Sonnenlicht (gelb), Wärmestrahlung der Erde (rot), zurückgeschickte Wärme (orange).
- Zähler zeigt nach dem Umschalten „wird gezählt …“ statt des alten Werts, bei reduzierter Bewegung feste Richtwerte.

## Stand 01.10.2026, abends: Anmeldung mit Code und Lehreransicht

- Siehe oben. Getestet mit Playwright gegen einen lokalen Testserver (Speicher im Arbeitsspeicher): Codes
  anlegen, falscher Code, Code der anderen Klasse, Anmeldung, Aufgaben lösen, Lehreransicht mit Prozent,
  Einzelaufgaben und Klassenauswertung, zweites Gerät (Stand kommt vom Server, auch ohne neue Anmeldung),
  Übernahme einer alten Vornamen-Anmeldung, CSV, Druckzettel, Löschen, Namensliste speichern und auf einem
  zweiten Lehrergerät laden, Handybreite. Alle 343 Aufgaben der fünf Module haben eine Bezeichnung und Station.
- Backend-Tests: `node --test api/nt9-fortschritt.test.js` (mit Upstash-Attrappe).

## Stand 01.10.2026, spät: Englisch 9 Grammatik dabei

- Derselbe Code und dieselbe Anmeldung auf dem Gerät gelten jetzt auch für Englisch 9M/9R, Grammatik Unit 1
  (G1–G4). Schülerskript `js/lernstand-e9.js` (Wurzel des Repos): Anmeldung, Meldung richtig gelöster Aufgaben
  (Modul-Kennungen `e9u1g1`–`e9u1g4`, Aufgaben `a1…`, `b1…`, `c1…`), Stand-Feld „Dein Stand – Das fehlt dir noch“
  auf jeder Grammatikseite (Links springen zur Aufgabe, schon gelöste Aufgaben tragen „✓ schon richtig gelöst“) und
  auf der Grammatik-Übersicht (je Einheit Balken und offene Aufgaben, Aufgabenliste kommt vom Server).
- „Lösung zeigen“ zählt nicht als gelöst. Kurztests und Grammatikprobe laufen weiter getrennt (Freischaltung).
- Server: Kursverzeichnis `KURSE` in `nt9-fortschritt.js` (nt9, e9), `anmelden` liefert mit `katalog: true` die
  Aufgabenliste eines Kurses, Station darf ein Teil-Name sein („Mehr üben“).
- Lehreransicht: Kurswahl „NT 9 · Organische Rohstoffe“ / „Englisch 9 · Grammatik Unit 1“, Codes gemeinsam.

## Stand 01.10.2026, nachts: Deutsch 9 und Englisch 9 mit Code

- Neues Schülerskript `js/lernstand.js` (Wurzel des Repos) für alle Übungsseiten außerhalb von NT;
  `js/lernstand-e9.js` lädt es nur noch nach (für zwischengespeicherte Seiten). Gleicher Code, gleiche
  Anmeldung auf dem Gerät (`grumi-nt9-m9-anmeldung` / `grumi-nt9-r9-anmeldung`). Die Klasse kommt aus der
  Anmeldung bzw. dem Code, nicht aus dem Ordner, deshalb funktioniert es auch in `9/Deutsch` (gemeinsam für 9M und 9R).
- Jede Seite zeigt „Dein Stand – Das fehlt dir noch“ (offene Aufgaben nach Teil, Links springen zur Aufgabe).
  Übersichtsseiten zeigen je Übung einen Balken, ohne selbst nach dem Code zu fragen.
- Server: Übungsseiten mit Kennung `d9-…` oder `e9-…` melden sich beim ersten Melden selbst an (Bereich,
  Titel, Klasse; höchstens 400). Die Warteschlange auf dem Gerät speichert diese Angaben mit, damit auch
  später gesendete Meldungen ankommen.
- Lehreransicht: Kurse „NT 9“, „Englisch 9“, „Deutsch 9“, darin ein Bereich (gemerkt je Kurs). Es erscheinen
  nur Übungen, die in der gewählten Klasse vorkommen.

| Kurs | Bereich | Seiten | Kennungen |
|---|---|---|---|
| Deutsch 9 | Rechtschreibung: Strategien | `9/Deutsch/Rechtschreibstrategien/rs_01`–`rs_13`, Gesamtseite | `d9-rs-01`…`d9-rs-13`, `d9-rs-alle` |
| Deutsch 9 | Rechtschreibung: Training | `m_training/m_*.html` | `d9-rt-…` |
| Deutsch 9 | Sprachbetrachtung | `sb_01`–`sb_10` | `d9-sb-01`…`d9-sb-10` |
| Deutsch 9 | Satzglieder | `Satzglieder bestimmen/satzglieder-uebung.html` | `d9-satzglieder` |
| Deutsch 9 | Lektüre: Der Vorleser | Quiz Teil 1–3 | `d9-vorleser-1`…`3` |
| Englisch 9 | Unit 1 · Grammatik | G1–G4 (9M und 9R) | `e9u1g1`–`e9u1g4` |
| Englisch 9 | Unit 1 · Vokabeln | 9R-Vokabeltrainer (gilt auch für 9M) | `e9-u1-vokabeln` |
| Englisch 9 | Unit 3 / Unit 4 | Vokabeltrainer, Word bank, Role model, unregelmäßige Verben, going to, Passiv | `e9-u3-…`, `e9-u4-…` |
| Englisch 9 | Zeiten wiederholen | Tense-Trainer (beide Kopien) | `e9-zeiten-<zeit>` |
| Englisch 9 | Mediation | 6 Chat-Mediationen (Schritte) | `e9-med-…` |

- Nicht erfasst: Mediation Hospital, Picture-based talk, E-Mail, mündliche Prüfung, Proben/Vokabeltests
  (laufen über die Freischaltung). Bei Karteikarten zählt „Weiß ich“ nicht, nur Ankreuzen und Schreiben.
- Buchverweise entfernt: Vokabeltrainer 9R Unit 1 (80 eigene Beispielsätze, neutrale Themennamen),
  9M Unit 3 (Kommentare, Themennamen), Grammatikprobe Unit 1 (eigene Beispielsätze), CSS-Klasse `blueline`
  heißt jetzt `e9farben`, READMEs ohne Buchtitel. Die Seitenzahlen im Vorleser-Quiz beziehen sich auf den Roman.
- `9M/Deutsch` (nicht im Repo) ist eine alte lokale Kopie von `9/Deutsch`; veröffentlicht wird nur `9/Deutsch`.
- Getestet mit Playwright gegen den lokalen Testserver: je Seitenart eine richtige Antwort → Stand steigt,
  Zurücksetzen markiert erneut, Lehreransicht zeigt Bereiche und Prozent, Klassenfilter 9M/9R, Handybreite ohne Überlauf.

## Stand 02.10.2026: Modul 6 „Erdöl – Rohstoff mit Zukunft?“, Modul 7 „Ohne Erdöl – geht das?“ und Probe Module 1–7

**Modul 6** (`modul-6.html`, Kennung `m07`, Kachel in `../übersicht_themen.html`, Weiter-Link aus Modul 5).
Sechs Stationen: Erdöl im Alltag (Ratespiel „Wo steckt Erdöl drin?“ mit „Welt ohne Erdöl“), Verwendung
(Animation 100 Fässer, KI-Grafik „Verwendung von Erdöl“, Lückentext), Nachhaltigkeit und Ökologie (Tank-Animation
Entstehung gegen Verbrauch, 24-Stunden-Vergleich), wahrer Preis und Import (versteckte Umweltkosten, Import-Balken,
Weg des Erdöls), Training (Kreuzworträtsel Lösungswort ROHSTOFF), Profi-Check. Bilder in `assets/modul6/`
(KI-Grafiken des Nutzers mit Quellenhinweis). Weiter-Link zu Modul 7.

**Modul 7** (`modul-7.html`, Kennung `m08`, eigene Kachel, Speicher `grumi-nt9-…-modul7-v1`): am 02.10.2026 aus
Modul 6 herausgelöst (dort Station 5–8). Sechs Stationen: Ersatz (Wegwerf- gegen Kreislaufwirtschaft, Ersatz-Finder,
offene Fragen), fünf Stimmen (Rollenkarten, Faktenkiste mit den Zahlen aus Modul 6, „Wer sagt das?“,
Meinungsbarometer, Kurz-Check, eigener Meinungsregler), KI-Diskussion allein, Tisch-Diskussion, Training
(Kreuzworträtsel Lösungswort UMSTIEG), Zukunfts-Profi-Check. Was ein Kind in Modul 6 an Station 5–8 schon gelöst
hatte, zählt nicht automatisch für Modul 7 (Modul 6 war erst seit dem 02.10.2026 online).
Die Buchseite „leben ohne erdöl.png“ diente nur für die Fakten; Rollen, Namen und Aussagen sind frei formuliert.

**Diskussion** (Backend `nt9-diskussion.js` im Repo englisch_9, Routen `/api/nt9/diskussion/…`, Anmeldung mit Code):
- Streitfrage „Sollen wir möglichst schnell ohne Erdöl auskommen?“, Rollen: Dr. Jonas Brandt (Forschung), Mia Wagner
  (Klimaschutz), Ole Hansen (Ölförderung), Sabine Koch (Politik), Murat Aydın (Firma).
- Allein: Kind wählt eine Rolle, die KI spricht die anderen vier und moderiert, 4 Runden (Position, Gegenargument,
  Rückfrage, Lösung). Am Tisch: 2 bis 4 Kinder (gleiche Tischnummer 1–40, verschiedene Rollen), KI übernimmt freie
  Rollen und springt nach 1 Minute Abwesenheit ein, 3 Runden in fester Reihenfolge, Abfrage alle 2 s.
- Jeder Schülerbeitrag wird vor dem Einblenden von der KI geprüft (Thema, sachlich), Rechtschreibung zählt nicht,
  Einfügen von Text ist gesperrt. Am Ende Protokoll: Schülerbeiträge im Wortlaut (die KI kann sie nicht ändern),
  Faktencheck je Schülerbeitrag, Ergebnis, Stärken, Tipp; drucken bzw. als PDF speichern.
- Ohne KI-Verbindung: Prüfung nach Themenwörtern, Antworten aus einem Vorrat. Nichts wird dauerhaft gespeichert.

**Probe** (`probe.html` und `lehrer.html` in diesem Ordner, Backend `nt9-probe-daten.js` über `infoaustausch.js`
unter `/api/nt9probe`, gespeichert in grumiproben): je eine Fassung 9M (`nt9m-probe1`) und 9R (`nt9r-probe1`),
je 19 Aufgaben und 40 Punkte, etwa 45 Minuten, Teile zu Modul 1–7 plus Stellungnahme. Animierte Abbildungen in
`assets/probe/` (Destillationsturm, Lagerstätte, Treibhauseffekt, Verwendungs-Diagramm). Notenschlüssel nach dem Zug
des Kindes (M 50 % = 4, R 50 % = 3). LRS: Rechtschreibung zählt nie, 🔊 liest jede Aufgabe vor. Schutz: Code-Pflicht,
Einmal-Abgabe, Auto-Sperre nach 3 Stunden, Einfügen/Kopieren/Markieren gesperrt, Zwischenspeichern, Verlassen-Zähler.
Freischalten in `proben-verwalten.html`, Noten im Reiter „📝 Noten“. Die alten Probe-Seiten (Backend „kohlenstoff“,
nie online) liegen nur lokal als `*-alt-kohlenstoff.html`.

## Offen

- Schulleitung und Datenschutzbeauftragten über Upstash als neuen Dienstleister informieren (zwei Datenbanken:
  grumi-nt9 für Codes und Lernstand, grumiproben für Proben; dazu das Merkmal „Notenschutz LRS“ am Code)
  (Auftragsverarbeitungsvertrag: https://upstash.com/static/trust/dpa.pdf).
