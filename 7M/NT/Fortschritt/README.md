# Fortschritt: Natur und Technik 7M

## Stand 19.09.2026

- Luft in zwei Stoffbereiche und acht selbstständig lösbare Lernsequenzen gegliedert.
- Texte, Wortspeicher, Folienbilder, Videos und sofort prüfbare Übungen vorhanden.
- Zwei getrennte Proben mit Ankreuzen, Zuordnen und freien Antworten erstellt.
- Serverseitige Freischaltung, Einmal-Abgabe, Lösungsschlüssel, KI-Korrektur und Lehrer-Nachkorrektur lokal getestet.
- Menüs für Atome und Materie, Tiere, Mensch und Gesundheit sowie Elektrizität angelegt. Lerninhalte für diese Bereiche stehen noch aus.

## Lernfortschritt und Abgaben

Der persönliche Lernfortschritt der acht Übungen liegt nur im `localStorage` des jeweiligen Tablets. Beim Wechsel des Geräts wird er nicht übertragen. Probenabgaben mit Namen und Ergebnissen gehören ausschließlich in den nicht öffentlichen Datenspeicher des Backends; niemals in diesen GitHub-Ordner.

Für einen dauerhaften Produktivbetrieb auf Render benötigt das Backend einen persistenten Speicher (`NT_DATA_DIR`, etwa eine gemountete Disk). Ein kostenloser Render-Webdienst hat nur temporäre Dateien: Nach Neustart oder Deployment gehen gespeicherte Freischaltungen und Abgaben verloren. Der kostenlose Dienst eignet sich daher nur zum technischen Test, nicht als verlässliches Probenarchiv.

## Veröffentlichung

Das Lehrerpasswort und der Anthropic-Schlüssel werden als geheime Render-Umgebungsvariablen gesetzt, nicht in Dateien eingecheckt. Ohne `ANTHROPIC_API_KEY` ist die Stichwortbewertung ausdrücklich vorläufig und jede freie Antwort zur Lehrkraft-Nachprüfung markiert. Die eigentlichen KI-Rückmeldungen funktionieren erst mit konfiguriertem Schlüssel.

- GitHub: Die Lernseite unter `https://joe82muc.github.io/grumi/7M/NT/` ist erreichbar.
- Render: Die NT-Proben laufen gemeinsam mit den Informatik-Tests über `https://englisch-9.onrender.com`. `TEACHER_PASSWORD` und der Anthropic-Schlüssel werden nur dort gepflegt.

Quellen: Die Abbildungen wurden aus den beiden Unterrichtspräsentationen im Ordner `7/NT/01_Luft` entnommen. Beim Max-Planck-Video wurden die automatisch erzeugten deutschen Untertitel für die didaktische Zusammenfassung gelesen und fachlich geprüft. Die historische 2050-Simulation wird nicht als heutige Messung dargestellt.

## Stand 24.09.2026: Einzelmodul `luft-modul.html`

- Neues, eigenständiges Lernmodul „Luft – unsichtbar, aber lebenswichtig“ (eine HTML-Datei, Bilder in `assets/luft-modul/`). Grundlage: Buch S. 12–15 und die drei Arbeitsblätter 008, 012 und 020 (Probenstoff).
- 8 Stationen mit Fachbegriffen zum Antippen, Bild-Hotspots, eigenen Simulationen (Gasaustausch, Windpark, Kerze unter dem Glas, 100 Luftteilchen, Luftsäule, Becherglas, Ball auf der Waage, Luftpumpe, Heißluftballon) sowie Kreuzworträtsel, Lückentexten, Zuordnen, Richtig/Falsch, Ankreuzen, Molekülmodellen und Abschlussquiz.
- Offene Fragen gehen an `POST /api/nt7/uebung/feedback` auf `englisch-9.onrender.com`. Die Route liegt als `backend/api/nt7-uebung.js` im Repository `englisch_9` (lokal in `.codex-build/englisch_9`), ist aber noch nicht committet oder deployt. Bis dahin prüft die Seite offline nach Fachbegriffen und sagt das der Schülerin oder dem Schüler auch.
- Die alte Lernoberfläche (`app.js`, `content.js`, alte `index.html`) wurde gelöscht. Neue Übersichten für 7M (`index.html`) und 7R (`7R/NT/index.html`) verlinken auf Modul 1. Module 2–6 und die Zusatzthemen sind als „in Vorbereitung“ angelegt.
- Proben und Lehrerverwaltung (`probe.html`, `lehrer.html`, `style.css`) bleiben unverändert.

## Stand 24.09.2026: Module 2 und 3 (Windkraft)

- **Modul 2 „Windkraft: Bewegte Luft erzeugt Strom“** (`windkraft-strom.html`), Grundlage Buch S. 22–23 und das Arbeitsblatt „Bewegte Luft erzeugt Strom“ (Probenstoff):
  - 6 Stationen: Windmühle früher und Windkraftanlage heute, Aufbau (10 Bauteile zum Antippen), vom Wind zum Strom, Größenvergleich 1990–2020, Training, Profi-Check.
  - Animationen: Windmühle und Windrad im Vergleich, Seewind (Zusatzwissen), Schnitt durch die Gondel mit Energiekette und Bremse, Fahrrad-Dynamo, Größenvergleich mit Frauenkirche und Olympiaturm, Gondelnachführung von oben.
  - Arbeitsblatt als Übung: Bild beschriften (Pfeile Bewegungsenergie und elektrische Energie, Generator, Getriebe, Bremse, Rotorblatt) und Lückentext mit den 8 Begriffen. Dazu Reihenfolge, Zuordnen, Kreuzworträtsel (Lösungswort STROM), Richtig/Falsch, Ankreuzen, 5 offene Fragen mit KI-Rückmeldung und ein Abschlussquiz.
- **Modul 3 „Windkraft – pro und contra“** (`windkraft-pro-contra.html`), Grundlage Buch S. 24–25 und das Arbeitsblatt „Windkraft: Pro und Contra“ (Probenstoff):
  - 8 Stationen: Protestfoto und Abstimmung, Pro, Contra, Argumente sortieren, Kompromiss, Duell gegen die KI, Training, Profi-Check mit zweiter Abstimmung.
  - Animationen: Kohlekraftwerk und Windrad im Vergleich (CO₂), Wind-Woche, Schattenwurf am Abend, Windkarte Bayern, 10-H-Abstand, Standort-Planer (Anwohner, Naturschutz, Energieversorger).
  - Arbeitsblatt als Übung: die 12 Aussagen nach Pro und Contra sortieren (Aufgabe 1), eigene Tabelle mit ⭐-Markierung und eigenen Argumenten (Aufgabe 2), Kompromiss als offene Frage (Aufgabe 3).
  - **Duell gegen die KI**: Die Schülerin oder der Schüler wählt eine Seite, die KI vertritt die andere. In 4 Runden kontert man ein KI-Argument, danach hat man das letzte Wort. Ein Tipp-Knopf zeigt Satzanfänge und Ideen. Die Bewertung läuft über `POST /api/nt7/uebung/feedback`. Ohne Server wird offline nach Stichworten bewertet.
- Die 10-H-Regel wird wie im Buch dargestellt. Ein Hinweis nennt die Ausnahmen seit 2022 (1000 m, z. B. im Wald oder an Autobahnen).
- Die Datei „Wie entsteht Luftdruck“ im Ordner Modul2 gehört zum Zusatzthema „Der Luftdruck“ und ist noch nicht umgesetzt.
- Getestet in Chrome (headless): keine Skriptfehler, alle Übungen lösbar, Duell offline durchgespielt. Die KI-Route antwortet live.
