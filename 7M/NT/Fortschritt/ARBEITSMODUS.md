# NT 7 ausbauen: Arbeitsmodus und Prioritäten

Gilt für jede Sitzung, in der an Natur und Technik 7 (7M und 7R) weitergebaut wird. Der Stand steht in
`README.md` (Protokoll) und `MODULPLAN.md` (welches Modul gibt es, was fehlt).

## Arbeitsmodus

1. **Erst lesen, dann bauen.** Vor jeder Änderung `MODULPLAN.md` und den letzten Eintrag in `README.md` lesen.
   Vorlage für alles sind die vorhandenen Module (`windkraft-strom.html` ist die kürzeste) und `modul-basis.js`.
2. **Ein Arbeitspaket nach dem anderen.** Ein Paket = ein Modul, eine Probe oder ein Baustein. Reihenfolge je Paket:
   bauen → automatisch prüfen (`Modul-Prüfer`, Chrome und Safari/WebKit, Handybreite) → Eintrag in `README.md`
   und Haken in `MODULPLAN.md` → erst dann committen.
3. **Neues ist zuerst gesperrt.** Neue Themen und Module sind für die Kinder erst sichtbar, wenn die Lehrkraft sie in
   der Verwaltung freischaltet (Klasse wählen → Natur und Technik → Freischalten). So kann sie vorher gegenlesen.
4. **Server zuerst.** Braucht ein Paket den Server (Proben, Freischaltung, KI), geht zuerst `englisch_9` online,
   dann die Website. Proben-Fragen und Lösungen stehen nur im Server-Repository.
5. **Am Ende jeder Sitzung:** Protokoll ergänzen, offene Punkte unter „Offen“ eintragen.

## Verbindliche Prioritäten (bei Konflikten gewinnt die kleinere Nummer)

1. **Bestand schützen.** Kein vorhandenes Modul, keine Probe und kein Lernstand geht verloren. Speicherschlüssel
   (`grumi-nt7-…-v1`) und Aufgaben-Kennungen vorhandener Module ändern sich nicht. Neue Felder sind optional.
2. **Fachlich richtig und lehrplangerecht.** Maßstab ist der LehrplanPLUS Mittelschule NT 7 (R7 und M7), siehe
   `MODULPLAN.md`. Lieber ein Thema weglassen als etwas Falsches oder Halbes zeigen.
3. **Eigene Inhalte.** Texte, Aufgaben, Grafiken und Animationen sind selbst formuliert und selbst gezeichnet. Schulbuch
   und BiBox sind nur Orientierung für Themen und Fachbegriffe: keine Seiten- oder Aufgabennummern, keine übernommenen
   Sätze, keine nachgezeichneten Abbildungen, keine heruntergeladenen Videos.
4. **Wie die vorhandenen Module.** Gleiches Aussehen, gleiche Bedienung, gleiche Bausteine, gleicher Lernstand. Neue
   Bausteine nur, wenn es keinen passenden gibt, und dann in `modul-basis.js`/`modul-basis.css`.
5. **Lernstationen statt Schulbuch.** Kurze Texte, nach jeder Erklärung eine Aktivität, Rückmeldung mit Erklärung,
   Fachbegriffe zum Antippen, drei Schwierigkeitsstufen, Kreuzworträtsel und Animationen nur mit Lernzweck.
6. **R7 und M7.** Ein gemeinsames Modul je Thema. Aufgaben mit M-Niveau (Begründen, Transfer, Diagramme,
   Formelgleichungen) sind als „M7“ markiert: für M-Klassen Pflicht, für R-Klassen freiwillig.
7. **Erst prüfen, dann veröffentlichen.** Nichts geht ungetestet online. Videos nur mit gelesenem Transkript –
   lieber kein Video als ein schlechtes.

## Feste Regeln

- Keine Zugangsdaten, Schlüssel oder Passwörter in Dateien, Protokollen oder Commits.
- Keine Namen von Kindern auf dem Server; angemeldet wird mit dem 3-stelligen Code.
- Sprache: Klasse 7 Mittelschule, kurze Sätze, du-Anrede, Fachbegriff beim ersten Auftreten erklärt.
- Jedes Modul: etwa 45 Minuten, 5 bis 7 Stationen, Lernziele im Kopf, Merke-Kasten, Übungen leicht/mittel/schwer,
  offene Fragen mit KI-Rückmeldung, Profi-Check, Wortspeicher, Lernstand mit Code.
- Eine Animation zählt erst nach echter Bedienung als bearbeitet, ein Video erst nach den Stopp-Fragen.
- Bilder in `assets/<thema>/`, Dateinamen ohne Umlaute und Leerzeichen.

## Prüfen (vor jedem Commit)

- Server: `node --test api/*.test.js` im Ordner `backend` von `englisch_9`.
- Website: Seiten mit einem lokalen Server unter `/grumi/` öffnen (wie GitHub Pages), dazu der Server lokal.
  Der Modul-Prüfer löst jede Übung eines Moduls einmal durch, lädt neu und vergleicht den Lernstand.
- Angemeldet testen (Code), in Chrome und WebKit, auch mit 390 px Breite.
