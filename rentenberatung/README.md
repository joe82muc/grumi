# BÜTTNER Rentenberatung – Website

Komplett neue, moderne, statische Website für die unabhängige Rentenberaterin
Claudia Mößner (geb. Büttner), München. Basierend auf der Analyse von
rentenberatung-buettner.de – Inhalte übernommen und überarbeitet, Design neu.

## Aufbau

```
rentenberatung/
├─ index.html          → Startseite (Hero, Leistungen, Über mich, Ablauf, CTA)
├─ leistungen.html     → Leistungen + Honorar/Preise
├─ ablauf.html         → Ablauf in 4 Schritten + FAQ (NEU – Mehrwert)
├─ ueber-mich.html     → Werdegang & Beratungsphilosophie (NEU)
├─ kontakt.html        → Kontaktdaten, 2 Büros, Anfahrt, Karte, Formular
├─ impressum.html      → Impressum (DL-Info-VO)
├─ datenschutz.html    → Datenschutzerklärung
├─ css/styles.css      → komplettes Design (Custom Properties, Grid/Flex, responsive)
├─ js/main.js          → Mobile-Navigation, Scroll-Effekte, FAQ, Formular
└─ images/             → eigene Fotos hier ablegen (siehe unten)
```

## Design

- **Farbschema (modernes Blau):** Navy `#1e3a8a`, Akzentblau `#2563eb`,
  hell `#eff6ff`, Text `#1f2937`. Definiert als CSS-Variablen in `:root`.
- **Schriften:** Poppins (Überschriften) + Inter (Text), via Google Fonts.
- **Navigation:** fixierter Header mit Blur, aktiver Seiten-Marker,
  mobiles Hamburger-Menü.
- **Responsive:** Desktop, Tablet und Smartphone.
- **Animationen:** sanftes Einblenden beim Scrollen, „Zurück nach oben“-Button.
  Respektiert `prefers-reduced-motion`.

## Eigene Fotos einfügen (empfohlen)

Im Ordner `images/` ablegen – die Seite zeigt sonst automatisch einen
schönen Platzhalter:

| Datei                 | Verwendung                          | Empf. Format         |
|-----------------------|-------------------------------------|----------------------|
| `images/portrait.jpg` | Porträt Hero (Start) & Über mich    | Hochformat, ~800×1000 |
| `images/about.jpg`    | Beratungssituation (Startseite)     | Querformat, ~1000×800 |

> Hinweis: Die Originalfotos der alten Seite sind urheberrechtlich geschützt.
> Bitte eigene Fotos verwenden (laut Impressum „eigenes Bild“ vorhanden).

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Für die Schriften und die Karte
wird eine Internetverbindung benötigt.

Optional mit lokalem Server (sauberer für relative Pfade):

```bash
cd rentenberatung
python -m http.server 8080
# → http://localhost:8080
```

## Veröffentlichen

Reine HTML/CSS/JS-Seite – läuft auf jedem Webspace (z. B. Strato) oder
kostenlos auf Netlify / GitHub Pages. Einfach den Ordnerinhalt hochladen.

## Kontaktformular

Das Formular auf `kontakt.html` öffnet ohne Backend das E-Mail-Programm
des Besuchers (mailto an kanzlei@rentenberatung-buettner.de). Für echten
Server-Versand kann später ein Formular-Dienst (z. B. Formspree) oder ein
PHP-Skript ergänzt werden.
