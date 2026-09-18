# Natur und Technik 7M

Start: `index.html`. Die beiden Proben stehen unter `probe.html`, die Lehrerverwaltung unter `lehrer.html`.

Lokal: im Ordner `backend` mit `npm ci` und `npm start` starten. Der Server liefert die Seiten unter `http://localhost:3001` aus. `TEACHER_PASSWORD` wird als Umgebungsvariable benötigt, `ANTHROPIC_API_KEY` für die KI-Korrektur. `NT_DATA_DIR` legt den nicht öffentlichen Ablageort der Abgaben fest.

Die Root-`render.yaml` beschreibt den zusätzlichen Render-Webdienst. Der Name ist `grumi-nt7-proben`; die Frontendseiten auf GitHub Pages verwenden dessen URL. Beim ersten Blueprint-Sync sind die geheimen Umgebungsvariablen im Render-Dashboard einzugeben. Der kostenlose Dienst hat keinen persistenten Datenspeicher. Hinweise zur sicheren produktiven Nutzung stehen in [Fortschritt/README.md](Fortschritt/README.md).
