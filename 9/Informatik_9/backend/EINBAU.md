# Netzwerke-Probe: Backend einbauen

Die Schueler- und die Lehrerseite liegen fertig im `grumi`-Repo. Damit die
**Freischaltung** und die **KI-Pruefung der freien Texte** funktionieren, muss
der Server sie kennen. Der Server wird aus dem **anderen Repo** deployt
(`englisch_9` -> Render-Dienst `englisch-9`), deshalb diese drei Schritte.

Aufwand: etwa 5 Minuten.

---

## Schritt 1: Zwei Dateien kopieren

Aus diesem Ordner in das `englisch_9`-Repo kopieren:

| von hier (grumi) | nach dort (englisch_9) |
|---|---|
| `9/Informatik_9/backend/api/netzwerktest.js` | `api/netzwerktest.js` |
| `9/Informatik_9/backend/api/netzwerktest-daten.js` | `api/netzwerktest-daten.js` |

> Der genaue Zielordner ist der, in dem auch `vokabeltest.js` und
> `vokabeltest-daten.js` liegen.

---

## Schritt 2: Vier Zeilen in `server.js` ergaenzen

In der `server.js` steht bereits dieser Block:

```js
// --- Vokabeltest-Modul (Freischaltung, Abgabe, Auswertung) ---
const { registerVokabeltestRoutes } = require("./vokabeltest");
const { TESTS: VOKABELTESTS } = require("./vokabeltest-daten");
registerVokabeltestRoutes(app, {
  dataDir: DATA_DIR,
  teacherPassword: TEACHER_PASSWORD,
  tests: VOKABELTESTS,
  hashSecret: process.env.VOKABELTEST_SECRET || TEACHER_PASSWORD + "|grumi"
});
```

**Direkt darunter** einfuegen:

```js
// --- Netzwerktest-Modul (Informatik 9: Freischaltung, Abgabe, KI-Bewertung) ---
const { registerNetzwerktestRoutes } = require("./netzwerktest");
const { TESTS: NETZWERKTESTS } = require("./netzwerktest-daten");
registerNetzwerktestRoutes(app, {
  dataDir: DATA_DIR,
  teacherPassword: TEACHER_PASSWORD,
  tests: NETZWERKTESTS,
  hashSecret: process.env.VOKABELTEST_SECRET || TEACHER_PASSWORD + "|grumi",
  askAnthropic: askAnthropic          // <- fuer die KI-Bewertung der freien Texte
});
```

Wichtig ist nur die letzte Zeile: `askAnthropic` ist die Funktion, die in
`server.js` weiter unten schon existiert. Sie wird hier weitergereicht.
Ohne sie laeuft die Probe trotzdem, bewertet freie Texte dann aber nur nach
Stichworten und markiert sie fuer dich mit "pruefen".

---

## Schritt 3: Deployen

1. Aenderungen im `englisch_9`-Repo committen und pushen.
2. In Render beim Dienst **englisch-9**: *Manual Deploy* -> *Deploy latest commit*.
3. Fertig. Test: <https://englisch-9.onrender.com/api/netzwerktest/list>
   muss die Probe zeigen (nicht mehr 404).

---

## Danach: so laeuft eine Probe ab

1. **Du**: `9/Informatik_9/Netzwerke/lehrer.html` oeffnen, Passwort eingeben
   (dasselbe wie beim Vokabeltest), auf **Freischalten** klicken.
2. **Klasse**: `9/Informatik_9/Netzwerke/probe.html` oeffnen, Name und Klasse
   eintragen, Probe schreiben, abgeben. Jeder Name kann **nur einmal** abgeben.
3. **Du**: auf der Lehrerseite die Ergebnisse ansehen, bei freien Antworten die
   Punkte bei Bedarf aendern, danach **Als CSV laden**.
4. **Du**: Probe wieder **Sperren**.

### Wichtig zum Speichern

Render (kostenloser Plan) speichert die Abgaben nur voruebergehend. Bei einem
Neustart oder einem neuen Deploy sind sie weg. Deshalb: **direkt nach der Stunde
die CSV herunterladen** - das ist die dauerhafte Kopie.

### Nachschreiben

Auf der Lehrerseite bei der betreffenden Zeile auf **Loeschen** klicken. Danach
kann unter demselben Namen noch einmal geschrieben werden.

---

## Wie die KI bewertet

Eingestellt ist **wohlwollend auf Sinnhaftigkeit** (so besprochen):

- Bewertet wird nur, ob die Aussage **fachlich richtig** ist.
- **Rechtschreibung, Grammatik und Ausdruck sind egal.**
- Umgangssprache und Stichworte sind erlaubt.
- Fachbegriffe muessen nicht genannt werden, wenn die Sache richtig beschrieben ist.
- Im Zweifel entscheidet die KI zugunsten der Schuelerin oder des Schuelers.
- Unvollstaendige, aber richtige Antworten bekommen Teilpunkte (1 von 2).

Getestet mit echten Beispielantworten:

| Antwort | Ergebnis |
|---|---|
| "Ein Hub schickt die Daten an alle Computer, der Switch nur an den richtigen." | volle Punkte |
| "der hub schikt alles an ale gerete der swich nur an das eine gerat wo es hin sol" | volle Punkte (Tippfehler zaehlen nicht) |
| "hub = an alle, switch = nur an den der es kriegen soll" | volle Punkte (Stichworte reichen) |
| "Ein Hub ist schneller als ein Switch weil er mehr Strom hat." | 0 Punkte (fachlich falsch) |
| "weiss nicht" | 0 Punkte |

Die endgueltige Note vergibst immer du: Jede Punktzahl laesst sich auf der
Lehrerseite aendern, die Note wird dann neu berechnet.

Willst du strenger bewerten, steht der Bewertungstext in `netzwerktest.js` in
der Funktion `aiScore` (Block `const system = [...]`) und kann dort angepasst
werden.

---

## Aufgaben aendern

Alle Aufgaben stehen in `netzwerktest-daten.js`:

- `type: "choice"` -> zum Anklicken, `answer` ist der Index der richtigen Option
  (0 = erste Option).
- `type: "text"` -> freier Text, `expected` ist deine Musterloesung fuer die KI,
  `keywords` greifen nur, falls die KI einmal nicht erreichbar ist.
- `points` legt die Punkte fest, `image` das Bild (liegt unter
  `9/Informatik_9/Netzwerke/bilder/probe/`).

Die Bilder sind bewusst so zugeschnitten, dass **weder Titel noch Erklaerkasten**
zu sehen sind - sie verraten die Loesung also nicht.

Nach einer Aenderung: Datei wieder ins `englisch_9`-Repo kopieren und neu deployen.
