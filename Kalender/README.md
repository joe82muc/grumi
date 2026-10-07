# GRUMI Probenkalender 2026/2027

## Oberflaechen

- `kalender-verwalten.html`: persoenliche Lehrkraft-Anmeldung, gemeinsamer Kalender.
- Verwaltung: Klassenreiter **Probenkalender**, vorausgewaehlte Klasse; das bestehende Verwaltungs-Passwort dient nur der Zugangspflege.
- `kalender.html`: Schueleransicht, Klasse ausschliesslich aus dem serverseitig geprueften bestehenden Code.
- Monate September 2026 bis August 2027; die Sommerferien 2027 dauern bis 13.09.2027, also ueber die letzte Monatsansicht hinaus.

Unter **Zugaenge** mit dem bestehenden Verwaltungs-Passwort persoenliche Benutzernamen und Passwoerter (mindestens 8 Zeichen) vergeben. Keine offene Selbstregistrierung. Die Lehrkraft kann ihr Passwort selbst aendern. Zuruecksetzen oder Deaktivieren widerruft alle Sitzungen dieses Zugangs. Fremde Termine sind lesbar, nicht editierbar. Deaktivierte Konten bleiben als Urheber vorhandener Termine erhalten.

## Persoenliche Druckuebersicht

Druckersymbol: aktueller Monat oder gesamtes Schuljahr, A4 quer. Immer nur Termine des angemeldeten Zugangs, ueber alle eigenen Klassen; Klassen-/Lehrkraftfilter und Suche am Bildschirm begrenzen den Druck nicht. Auch das normale Browser-Drucken verwendet bei angemeldeten Lehrkraeften diese persoenliche Monatsuebersicht. Ferien, Feiertage und Buss-/Bettag sind markiert. Keine Zugangsdaten, Verwaltungsoberflaeche oder Termine anderer Lehrkraefte im Ausdruck. Bei vielen langen Terminen kann ein Monat auf weitere Seiten umbrechen; Termine werden nicht abgeschnitten.

Tests: `node --test Kalender/kalender-druck.test.cjs`; Druck-/Browserpruefung: `node Kalender/druck-browser-test.cjs` (Playwright und Chrome wie unten). Die dabei erzeugten PDFs enthalten ausschliesslich synthetische Testdaten und liegen unter `.codex-build/kalender-druck-qa`.

## Server / Auslieferung

Die verwendete Server-Arbeitskopie liegt in `.codex-build/englisch_9-deploy/backend`. Dort sind die Registrierung und der kleine Klassenlisten-Hook eingebaut. Frontend und Server werden getrennt ueber die Repositories `grumi` und `englisch_9` ausgeliefert. Die aeltere Backend-Kopie unter `9M/Englisch_9` enthaelt nicht die aktuelle Klassenverwaltung und wurde nicht geaendert.

Die gepflegten neuen Serverquellen liegen hier in `server/`. Nach Aenderungen synchronisieren:

```powershell
powershell -ExecutionPolicy Bypass -File Kalender/install-backend.ps1 -ApiDir .codex-build/englisch_9-deploy/backend/api
```

Bei einer anderen Server-Arbeitskopie diese Registrierung nach `registerKlasseRoutes` in `api/server.js` ergaenzen:

```js
const { registerKalenderRoutes } = require("./kalender/server/kalender");
const { upstashZugang: kalenderUpstash } = require("./nt9-fortschritt");
registerKalenderRoutes(app, {
  dataDir: DATA_DIR,
  teacherPassword: TEACHER_PASSWORD,
  redis: kalenderUpstash(process.env, "UPSTASH_grumiproben", "UPSTASH_grumiproben_token"),
  kindZumCode: (code, req) => nt9Fortschritt.kindZumCode(code, req),
  klassenLaden: () => nt9Fortschritt.klassenLaden()
});
```

In der Rueckgabe von `registerNt9FortschrittRoutes` in `api/nt9-fortschritt.js` ergaenzen:

```js
klassenLaden: async () => klassenUebersicht([...(await kinderLaden()).values()]).map((k) => k.klasse)
```

In `proben-speicher.js` `kalender-lokal.json` in `AUSGENOMMEN` aufnehmen. Kalenderdaten werden nicht durch den bestehenden Dateispiegel geschrieben.

### Dauerhafte Speicherung

Nutzt die vorhandenen Variablen `UPSTASH_grumiproben` und `UPSTASH_grumiproben_token`. Eigene Redis-Keys `grumi:kalender:2026-2027:*`; jede Mutation wird vor der Erfolgsantwort zentral bestaetigt. Atomare Compare-and-set-Pruefung fuer Bearbeitung/Loeschung; atomarer Import mit stabilen IDs gegen wiederholten Import. Es gibt keinen lokalen Fallback bei einem Datenbankfehler. Ohne konfigurierte Datenbank wird atomar in `kalender-lokal.json` gespeichert; auf Render ist dies ohne persistenten Datentraeger **nicht dauerhaft**, und die UI warnt entsprechend.

Passwoerter: zufaelliger Salt und scrypt; keine Klartextspeicherung. Sitzungen: zufaellige Bearer-Tokens, nur deren SHA-256-Key serverseitig gespeichert, 8 Stunden Gueltigkeit, im Browser nur sessionStorage. Kalender-Anfragen nicht zwischenspeichern. Login-Fehlversuche werden je Server/IP begrenzt; bei mehreren Instanzen sollte der vorgeschaltete Dienst zusaetzlich das Login begrenzen. Nur TLS verwenden. Die Konten-Tabelle und der Datenordner duerfen nicht statisch oeffentlich ausgeliefert werden.

## Import

TXT/CSV mit Semikolon, Tab, Komma oder Pipe; Kopfzeile optional. Ohne Kopfzeile: `Datum;Klasse;Fach;Titel;Stunde;Hinweis`. Datum `TT.MM.JJJJ` oder `JJJJ-MM-TT`. Vorlage `import-vorlage.txt`. ICS-Summary: `7aM – Englisch – Unit 1`. RFC-5545-Faltungen, Escapes und Umlaute werden durch ICAL.js verarbeitet. Mehrtages- und Serientermine sowie fremde Zeitzonen werden zur manuellen Pruefung abgewiesen. Maximal 1 MB / 500 Termine. Dateiinhalte werden als Text angezeigt, nicht als HTML.

UTF-8, UTF-16 mit BOM und Windows-1252 werden beim Dateiimport dekodiert.

Die beigefuegte `Proben_bis_18_01_2027-2.ics` wird **nicht automatisch importiert oder veroeffentlicht**: Sie enthaelt vorlaeufige Planung und Termine anderer Lehrkraefte ohne zugeordnete Namen. Auswahl, Klassen und Urheberschaft vor dem Import pruefen. Importierte Termine gehoeren dem angemeldeten Zugang. Warnungen zu gleichen Tagen, Wochenbelastung und unterrichtsfreien Tagen sind Planungshinweise, keine automatische schulrechtliche Freigabe oder verbindliche Hoechstzahl.

## Quellen / Abhaengigkeiten

Ferien und Feiertage am 07.10.2026 anhand der Quellen in `kalender-daten.js` geprueft. Mariae Himmelfahrt ist fuer **Unterhaching** markiert; Augsburger Friedensfest gilt hier nicht. Buss- und Bettag 18.11.2026: unterrichtsfrei, nicht allgemein dienstfrei.

Lokal eingebundene Drittanbieter: ICAL.js 2.2.1 (MPL-2.0), Papa Parse 5.5.3 (MIT), Lucide 0.468.0 (ISC, siehe Lizenzdateien in `vendor/`). Kein CDN-Zugriff beim Benutzen des Kalenders.

## Tests / lokale Vorschau

```powershell
node --test Kalender/kalender.test.cjs
node Kalender/vorschau.cjs
```

Browserpruefung mit lokal installiertem Playwright: `node Kalender/browser-test.cjs`. Alternativ `PLAYWRIGHT_MODULE` auf den vorhandenen Modulpfad setzen; `CHROME_PATH` fuer eine andere Chrome-Installation. Die Pruefung importiert Beispieldaten ausschliesslich in die lokale Vorschau. Ohne die private hochgeladene ICS wird `test-fixture.ics` mit synthetischen Daten verwendet. Screenshots liegen unter `.codex-build/kalender-qa`. Die private Original-ICS wird nicht mitveroeffentlicht.

Die Vorschau bindet nur `127.0.0.1`, verwendet getrennte Testdaten unter `.codex-build/kalender-vorschau`, keine echten Klassendaten und keine produktive Datenbank. Demo-Zugaenge stehen im Terminal. Nicht als Produktionsserver einsetzen.
