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
- Render: Der Dienst `grumi-nt7-proben` ist noch nicht angelegt (Health-URL liefert 404). Der getrennte Blueprint liegt unter `7M/NT/render.yaml`. Bei der Einrichtung in Render ist `TEACHER_PASSWORD` auf den von der Lehrkraft vorgegebenen Wert zu setzen und ein gültiger Anthropic-Schlüssel für KI-Korrekturen zu hinterlegen.

Quellen: Die Abbildungen wurden aus den beiden Unterrichtspräsentationen im Ordner `7/NT/01_Luft` entnommen. Beim Max-Planck-Video wurden die automatisch erzeugten deutschen Untertitel für die didaktische Zusammenfassung gelesen und fachlich geprüft. Die historische 2050-Simulation wird nicht als heutige Messung dargestellt.
