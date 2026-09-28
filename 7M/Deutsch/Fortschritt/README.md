# Fortschritt

Schülerfassungen, Überarbeitungen und Sterne werden geschützt im Datenordner des Render-Dienstes gespeichert. Dieser lokale Ordner enthält absichtlich keine personenbezogenen Schülerdaten.

Die Lehrkraft öffnet die Auswertung über `../lehrer.html`. Dort können Erstfassung und Verbesserungen verglichen, einzelne Fassungen gelöscht und die Übersicht als CSV exportiert werden.

## 28.09.2026 – Lernmodule zu Buch S. 22–25

- Neue Übersichtsseite `index.html`, der bisherige Trainer ist jetzt Modul 1 (`argumentationstrainer.html`) im Aussehen der neuen Module.
- Vier neue Module (je eine Buchseite, etwa eine Unterrichtsstunde) mit Klick-Übungen, Duellen gegen die KI und Freitexten mit KI-Checkliste.
- Freitexte, Duell-Antworten und Lerntagebuch-Einträge werden mit Namen gespeichert (`data/deutsch7-module.json` auf Render) und erscheinen in `lehrer.html` unter „Lernmodule (Buch S. 22–25)“. Sterne und Themenwahl bleiben nur im Browser.
- Backend-Version `2026-09-28-deutsch7-module` (in `/api/health` prüfen).
