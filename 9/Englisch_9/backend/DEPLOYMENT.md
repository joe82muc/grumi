# Deployment des Backends

## Wichtig: Dieser Ordner wird NICHT automatisch deployt

Der Render-Dienst **englisch_9** (https://englisch-9.onrender.com)
holt seinen Code aus einem **anderen** Repository:

| | |
|---|---|
| Repo hier | `joe82muc/grumi` → `9/Englisch_9/backend/` |
| Repo bei Render | `joe82muc/englisch_9` → `backend/` |

Beide enthalten dieselben Dateien, sind aber **nicht verbunden**.
Eine Änderung hier landet nicht automatisch auf dem Server.

## Backend-Änderung ausliefern

1. Geänderte Dateien aus `9/Englisch_9/backend/api/` hochladen nach
   https://github.com/joe82muc/englisch_9/upload/main/backend/api
2. In Render: `englisch_9` → **Manual Deploy** → *Deploy latest commit*
3. Prüfen: https://englisch-9.onrender.com/api/health
   Die `version` dort wird in `api/server.js` gesetzt — bei jeder
   Backend-Änderung mit hochzählen, dann ist ein Deploy sofort erkennbar.

## Prüfen, ob eine Route live ist

    https://englisch-9.onrender.com/api/vokabeltest/list

HTTP 200 = vorhanden, HTTP 404 = alter Stand.

## Umgebungsvariablen (Render → englisch_9 → Environment)

- `TEACHER_PASSWORD` — Lehrer-Passwort. **Vorgabewert ist `2`**;
  vor benoteten Tests unbedingt ändern.
- `VOKABELTEST_SECRET` — Secret für die Gerätekennung der Testabgaben.
  Fehlt es, wird vom Lehrer-Passwort abgeleitet.

## Schülerdaten

`backend/data/` enthält Namen, Klassen und Noten und ist über die
`.gitignore` aus dem Repository ausgeschlossen. Das muss so bleiben —
die Repos sind öffentlich.

## Wo die Testergebnisse liegen

    /opt/render/project/src/backend/data/vokabeltest_abgaben.json   (Abgaben + Noten)
    /opt/render/project/src/backend/data/vokabeltests.json          (Freischaltungen)

Nicht im Repository — die `.gitignore` schliesst `backend/data/` aus.

### Achtung: Daten sind fluechtig

Render (Free-Plan) hat kein dauerhaftes Dateisystem. Bei jedem Deploy und
bei jedem Neustart nach dem Ruhezustand wird der Container neu aufgebaut,
und `data/` ist wieder leer. Nachweislich: Nach dem Deploy am 16.09.2026
waren auch die Klasse-9-Fortschrittsdaten auf 0.

**Konsequenz fuer Leistungsnachweise:** Ergebnisse direkt nach der Stunde
ueber die Lehrerseite als CSV exportieren. Die CSV auf dem eigenen Rechner
ist die einzige dauerhafte Kopie.

Dauerhaft speichern liesse sich das nur mit
- einem Render Persistent Disk (kostenpflichtig), oder
- einer externen Datenbank (z. B. Postgres, auch als Free-Tier verfuegbar).
