# Fortschritt: NT 9M / 9R · Organische Rohstoffe

Der Lernfortschritt der Schülerinnen und Schüler liegt nur im `localStorage` des jeweiligen Geräts
(`fortschritt.js`, Schlüssel `grumi-nt9-m9-…` bzw. `grumi-nt9-r9-…`). Er wird nicht übertragen und
nicht an einen Server geschickt.

**Anmeldung (seit 01.10.2026):** Beim ersten Öffnen eines Moduls (1–5 und Kursübersicht) fragt
`fortschritt.js` nach Vorname oder Nummer, mit Datenschutz-Hinweis. Der Name bleibt ebenfalls nur auf
dem Gerät (`grumi-nt9-m9-anmeldung`). Jede Anmeldung hat einen eigenen Speicherbereich: an den Schlüssel
wird `~kennung~` gehängt (Kennung = Name klein geschrieben), z. B. `grumi-nt9-m9-modul1-v1~lena~`.
Modulseiten holen ihren Schlüssel über `FS.schluessel(...)`. Bei der ersten Anmeldung auf einem Gerät wird
der Stand von vorher (ohne Namen) übernommen. Abmelden über das Namensschild 👤 in der Kopfzeile oder in
der Kursübersicht; „Fortschritt zurücksetzen“ löscht nur den Stand des angemeldeten Kindes.
Die Themenübersicht bindet das Skript mit `data-anmeldung="nein"` ein (zeigt den Stand, fragt aber nicht).
An die KI gehen nur Frage und Antwort, kein Name. Jede Lernseite meldet ihre Sterne über `FS.speichern(id, gelöst, gesamt)`
an die Übersicht (`index.html`) und an die Themenübersicht (`../übersicht_themen.html`).

| Modul | Kennung | Seite | Stand |
|---|---|---|---|
| 1 Kohlenstoff, Holz und Raps | `m01` | `modul-1.html` | fertig (29.09.2026) |
| 2 Biodiesel, Stärke und Nachhaltigkeit | `m02` | `modul-2.html` | fertig (29.09.2026) |
| 3 Entstehung fossiler Rohstoffe | `m04` | `modul-3.html` | fertig (30.09.2026) |
| 4 Erdölaufbereitung und Fraktionen | `m05` | `modul-4.html` | fertig (30.09.2026) |
| 5 Kohlenstoffkreislauf und Erdöl im Alltag | `m06` | `module.html?id=m06` | alte Kurzansicht |

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
- Beim Holz-Pellets-Bild die buchtypischen Bildunterschriften abgeschnitten, im Holz-Schaubild den Buchhinweis entfernt.
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

## Offen

- Modul 5 läuft noch über die alte Kurzansicht (`module.html?id=m06`).
