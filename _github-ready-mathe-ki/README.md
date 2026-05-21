# Mathe-KI Dateien fuer GRUMI

Dieser Ordner enthaelt nur die Dateien, die fuer die Mathe-KI gebraucht werden.

In dein bestehendes GitHub-Repo `joe82muc/grumi` hochladen:

```text
render.yaml
render-mathe-ki/
9/Mathematik/Terme-und-Gleichungen/
```

Wichtig:

- `render.yaml` gehoert in die oberste Ebene vom Repo.
- `render-mathe-ki` gehoert in die oberste Ebene vom Repo.
- `gleichungen.js`, `gleichungen.css` und `index.html` gehoeren nach `9/Mathematik/Terme-und-Gleichungen/`.
- Englisch und andere alte Ordner werden dadurch nicht ersetzt.

Render:

```text
Root Directory: render-mathe-ki
Build Command: npm ci && npm run build
Start Command: npm run start
```

Environment Variable:

```text
ANTHROPIC_API_KEY=dein_echter_key
```
