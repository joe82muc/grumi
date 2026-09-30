# Fortschritt

Schülerfassungen, Überarbeitungen und Sterne werden geschützt im Datenordner des Render-Dienstes gespeichert. Dieser lokale Ordner enthält absichtlich keine personenbezogenen Schülerdaten.

Die Lehrkraft öffnet die Auswertung über `../lehrer.html`. Dort können Erstfassung und Verbesserungen verglichen, einzelne Fassungen gelöscht und die Übersicht als CSV exportiert werden.

## 28.09.2026 – Lernmodule 2–5

- Neue Übersichtsseite `index.html`, der bisherige Trainer ist jetzt Modul 1 (`argumentationstrainer.html`) im Aussehen der neuen Module.
- Vier neue Module (je etwa eine Unterrichtsstunde) mit Klick-Übungen, Duellen gegen die KI und Freitexten mit KI-Checkliste.
- Freitexte, Duell-Antworten und Lerntagebuch-Einträge werden mit Namen gespeichert (`data/deutsch7-module.json` auf Render) und erscheinen in `lehrer.html` unter „Lernmodule 2–6“. Sterne und Themenwahl bleiben nur im Browser.
- Backend-Version `2026-09-28-deutsch7-module` (in `/api/health` prüfen).

## 30.09.2026 – Überarbeitung der Module 2–5

- Module 2–5 neu formuliert: eigene Beiträge, verletzende Sätze, Streitgespräch (Nele/Jannik/Emre), Checkliste, Beobachtungsbogen und Arbeitsaufträge. Das Bild `killerphrasen.webp` ist entfernt.
- Keine Seiten- oder Aufgabennummern mehr (Module, Übersicht, Startseite).
- Keine Gruppen- oder Partnerarbeit mehr in den Modulen 2–5 (Modul 5 ohne Gruppe 1/Gruppe 2), keine Verweise auf „Stationen“ im Text.
- Duelle gegen die KI und das Tisch-Duell sind unverändert.
- Offen: Die Modultitel in der Lehreransicht kommen vom Backend (`englisch_9`, `backend/api/deutsch7-module.js`) und tragen dort noch Seitenzahlen.
