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
