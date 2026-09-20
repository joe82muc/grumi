# Natur und Technik 7M

Start: `index.html`. Die beiden Proben stehen unter `probe.html`, die Lehrerverwaltung unter `lehrer.html`.

Lokal kann die Oberfläche mit einem statischen Webserver geöffnet werden. Für Proben und Lehrerverwaltung wird zusätzlich das Backend des Repositorys `englisch_9` benötigt. `TEACHER_PASSWORD` und `ANTHROPIC_API_KEY` werden dort als Umgebungsvariablen gesetzt.

Die Proben verwenden denselben Render-Dienst wie die Informatik-Tests: `https://englisch-9.onrender.com`. Dadurch ist kein zweiter Blueprint nötig. Das Lehrerpasswort und der Anthropic-Schlüssel werden zentral im bestehenden Dienst gepflegt. Der kostenlose Dienst hat keinen persistenten Datenspeicher. Hinweise zur sicheren produktiven Nutzung stehen in [Fortschritt/README.md](Fortschritt/README.md).
