# Lernbereich 1 (Informatik 7): Backend

> **Status: erledigt und live.** Am 22.09.2026 deployt. Der Server meldet
> unter `/api/health` die Kennung `2026-09-22-infoaustausch-inf7`.
> Die Schritte unten sind bereits ausgeführt - du brauchst sie nur wieder,
> wenn du Aufgaben der Probe änderst (siehe ganz unten).

Die Schüler- und die Lehrerseite liegen im `grumi`-Repo. Das Backend liegt im
Repo **`englisch_9`** (Render-Dienst `englisch-9`), weil Render von dort deployt.

Das lokale Arbeitsverzeichnis dieses zweiten Repos liegt unter
`.codex-build/englisch_9-deploy/`.

---

## Schritt 1 (erledigt): Zwei Dateien kopieren

Aus diesem Ordner in das `englisch_9`-Repo kopieren:

| von hier (grumi) | nach dort (englisch_9) |
|---|---|
| `7/Informatik_7/backend/api/infoaustausch.js` | `backend/api/infoaustausch.js` |
| `7/Informatik_7/backend/api/infoaustausch-daten.js` | `backend/api/infoaustausch-daten.js` |

> Der Zielordner heißt dort **`backend/api/`** - das ist der Ordner, in dem
> auch `vokabeltest.js` und `netzwerktest.js` liegen.

---

## Schritt 2 (erledigt): Zehn Zeilen in `server.js` ergänzen

In `backend/api/server.js` steht der Block für den Argumentationstrainer.
**Direkt darunter** wurde eingefügt:

```js
// --- Infoaustausch-Modul (Informatik 7 Lernbereich 1: Probe + KI-Rueckmeldung) ---
const { registerInfoaustauschRoutes } = require("./infoaustausch");
const { TESTS: INFOTESTS } = require("./infoaustausch-daten");
registerInfoaustauschRoutes(app, {
  dataDir: DATA_DIR,
  teacherPassword: TEACHER_PASSWORD,
  tests: INFOTESTS,
  hashSecret: process.env.VOKABELTEST_SECRET || TEACHER_PASSWORD + "|grumi",
  askAnthropic: askAnthropic          // <- fuer die KI-Bewertung der freien Texte
});
```

Wichtig ist die letzte Zeile: `askAnthropic` ist die Funktion, die in
`server.js` weiter oben schon existiert. Sie wird hier weitergereicht.

---

## Schritt 3 (erledigt): Deployen

1. Änderungen im `englisch_9`-Repo committen und pushen.
2. Render deployt **automatisch** beim Push auf `main`. Ein Klick auf
   *Manual Deploy* ist nur nötig, wenn der Bau einmal hängen bleibt.
3. Test: <https://englisch-9.onrender.com/api/infoaustausch/list>
   muss die Probe zeigen (nicht mehr 404).

### Am 22.09.2026 live geprüft

- `vokabeltest`, `netzwerktest` und `filiuspruefung` antworten unverändert weiter.
- Die Probe liefert 32 Aufgaben und 40 Punkte, **ohne** die Lösungen mitzuschicken.
- Eine Testabgabe mit absichtlich vielen Rechtschreibfehlern ergab 39 von 40
  Punkten (Note 1); die KI brauchte dafür rund 10 Sekunden.
- Lehrerbereich, Punktekorrektur, Löschen und CSV-Export funktionieren.
- Falsches Passwort wird mit 401 abgewiesen.
- Danach wurde die Testabgabe gelöscht und die Probe wieder gesperrt.

---

## Was ohne Backend trotzdem funktioniert

| Teil | ohne Backend | mit Backend |
|---|---|---|
| Acht Lernmodule, Lückentexte, Zuordnen, Anklicken | ✅ läuft | ✅ läuft |
| Fortschrittsanzeige | ✅ läuft (im Browser gespeichert) | ✅ läuft |
| Freie Texte in den Modulen | Musterlösung erscheint, Antwort zählt als gelöst | KI prüft sofort den Inhalt |
| Probe | ❌ nicht startbar | ✅ mit Freischaltung und Benotung |
| Lehrerbereich | ❌ | ✅ Ergebnisse und Excel-Export |

---

## So läuft eine Probe ab

1. **Du**: `7/Informatik_7/probe/lehrer.html` öffnen, Passwort **2** eingeben,
   auf **Freischalten** klicken.
2. **Klasse**: `7/Informatik_7/probe/probe.html` öffnen, Name und Klasse
   eintragen, Probe schreiben, abgeben. Jeder Name kann **nur einmal** abgeben.
3. **Du**: auf der Lehrerseite die Ergebnisse ansehen, bei freien Antworten die
   Punkte bei Bedarf ändern, danach **Als CSV laden**.
4. **Du**: Probe wieder **Sperren**.

### Wichtig zum Speichern

Render (kostenloser Plan) speichert die Abgaben nur vorübergehend. Bei einem
Neustart oder einem neuen Deploy sind sie weg. Deshalb: **direkt nach der Stunde
die CSV herunterladen** – das ist die dauerhafte Kopie. Die Datei öffnet sich
per Doppelklick in Excel (Semikolon-getrennt, mit BOM).

### Nachschreiben

Auf der Lehrerseite bei der betreffenden Zeile auf **Löschen** klicken. Danach
kann unter demselben Namen noch einmal geschrieben werden.

---

## Der Notenschlüssel dieser Probe

Wie besprochen: **50 Prozent sind Note 3.** Die Probe hat 40 Punkte.

| Note | ab Prozent | ab Punkten (von 40) |
|---|---|---|
| 1 | 87 % | 35 |
| 2 | 70 % | 28 |
| 3 | 50 % | 20 |
| 4 | 33 % | 14 |
| 5 | 17 % | 7 |
| 6 | 0 % | 0 |

Getestet: 20 von 40 Punkten ergeben genau 50 Prozent und damit Note 3.

Der Schlüssel steht in `infoaustausch.js` ganz oben im Block `GRADE_SCALE`
und kann dort geändert werden. Er gilt **nur** für diese Probe – der
Vokabeltest und die Netzwerke-Probe behalten ihren eigenen Schlüssel.

---

## Wie die KI bewertet

Eingestellt ist **wohlwollend auf Sinnhaftigkeit** (wie bei Informatik 9):

- Bewertet wird nur, ob die Aussage **fachlich richtig** ist.
- **Rechtschreibung, Grammatik und Ausdruck sind egal.**
- Umgangssprache und Stichworte sind erlaubt.
- Fachbegriffe müssen nicht genannt werden, wenn die Sache richtig beschrieben ist.
- Im Zweifel entscheidet die KI zugunsten der Schülerin oder des Schülers.
- Unvollständige, aber richtige Antworten bekommen Teilpunkte (1 von 2).
- Zusätzlich ist hinterlegt, dass die Kinder erst 12 bis 13 Jahre alt sind.

In den **Lernmodulen** ist die KI noch etwas freundlicher eingestellt: Dort
geht es ums Üben, deshalb lobt sie bei richtigen Antworten kurz und sagt bei
falschen nur, was noch fehlt – die Lösung verrät sie nicht, die steht ohnehin
darunter.

Die endgültige Note vergibst immer du: Jede Punktzahl lässt sich auf der
Lehrerseite ändern, die Note wird dann neu berechnet.

Willst du strenger bewerten, steht der Bewertungstext in `infoaustausch.js`
im Block `const KI_REGELN = [...]`.

---

## Aufgaben der Probe ändern

Alle Aufgaben stehen in `infoaustausch-daten.js`:

- `type: "choice"` → zum Anklicken, `answer` ist der Index der richtigen Option
  (0 = erste Option).
- `type: "text"` → freier Text, `expected` ist deine Musterlösung für die KI,
  `keywords` greifen nur, falls die KI einmal nicht erreichbar ist.
- `points` legt die Punkte fest.

Nach einer Änderung: Datei wieder ins `englisch_9`-Repo kopieren, committen
und pushen. Render deployt automatisch.

---

## Aufgaben in den Lernmodulen ändern

Die Module liegen als JSON in `7/Informatik_7/daten/lb1-m01-*.json` bis
`lb1-m08-*.json`. Dort sind sechs Aufgabentypen möglich:

| Typ | Bedeutung |
|---|---|
| `lueckentext` | `___` im Text markiert eine Lücke; `loesungen` in gleicher Reihenfolge. Mehrere Schreibweisen als Liste. |
| `richtig_falsch` | `loesung` ist `true` oder `false`. |
| `auswahl` | `optionen` als Liste, `loesung` ist der Index (0 = erste). |
| `zuordnung` | `paare` mit `begriff` und `erklaerung`. **Wichtig:** Alle Begriffe und alle Erklärungen müssen unterschiedlich sein. |
| `reihenfolge` | `schritte` in der **richtigen** Reihenfolge; die Seite mischt selbst. |
| `freitext` | freie Antwort mit KI-Prüfung; `loesung` ist die Musterlösung, `zeilen` die Höhe des Feldes. |

Diese Dateien liegen im `grumi`-Repo und brauchen **kein** Deploy auf Render.
