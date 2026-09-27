# GRUMI Render Mathe KI

Dieser Unterordner enthaelt nur den Render-Web-Service fuer die Mathe-KI.

Render-Einstellungen:

```text
Root Directory: render-mathe-ki
Build Command: npm ci && npm run build
Start Command: npm run start
```

Environment Variable:

```text
ANTHROPIC_API_KEY=dein_echter_key
```

Die statischen GRUMI-Seiten bleiben im Hauptprojekt, z. B. unter `9/Mathematik`.

Zwei Prüf-Modi in `src/app/api/check/route.ts`:

- Standard (8. und 9. Klasse, Geometrie): der lange Prompt in `route.ts`.
- Klasse 7 (Formularfeld `klasse=7`, Seite `7/Mathematik_7/Gleichungen`): Prompt und feste JSON-Form in `src/lib/klasse7-ki.ts`, dazu der Rechen-Prüfer `src/lib/klasse7.ts`. Er rechnet jede Zeile nach, findet den ersten Fehler und formuliert einen Denkanstoß ohne Ergebnis.
