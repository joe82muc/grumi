# Roulette Website Upload

Diese drei Dateien reichen fuer deine Website:

- `index.html`
- `styles.css`
- `script.js`

## Hochladen

1. Lade alle drei Dateien zusammen in denselben Ordner auf deinem Webspace.
2. Wenn das Roulette die Startseite sein soll, lege die Dateien direkt in den Hauptordner deiner Website.
3. Wenn es eine Unterseite sein soll, lege sie z. B. in einen Ordner `roulette/`.

Danach ist das Spiel erreichbar unter:

- `https://deine-domain.de/`
- oder `https://deine-domain.de/roulette/`

## Einbauen in eine bestehende Seite

Wenn deine bestehende Website schon eine eigene Startseite hat, kannst du das Spiel in einen Unterordner `roulette/` hochladen und dann darauf verlinken:

```html
<a href="/roulette/">Roulette spielen</a>
```

Alternativ kannst du es per iframe einbetten:

```html
<iframe
  src="/roulette/"
  title="Roulette Spiel"
  style="width: 100%; height: 900px; border: 0;"
></iframe>
```
