// Erzeugt zu jeder Stunden-JSON in diesem Ordner eine gleichnamige .js-Kopie.
// Die Stundenseiten brauchen sie nur, wenn sie per Doppelklick (file://) geöffnet
// werden: Dann blockiert der Browser das Nachladen der JSON-Datei.
// Die JSON-Dateien bleiben die Quelle. Nach jeder Änderung einmal ausführen:
//   node 7/Informatik_7/daten/js-erzeugen.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ordner = path.dirname(fileURLToPath(import.meta.url));
let anzahl = 0;
for (const name of fs.readdirSync(ordner).filter(n => n.endsWith(".json")).sort()) {
  const daten = JSON.parse(fs.readFileSync(path.join(ordner, name), "utf8"));
  const js = "// Automatisch erzeugt aus " + name + " (daten/js-erzeugen.mjs). Nicht von Hand bearbeiten.\n" +
    "(window.INF_DATEN = window.INF_DATEN || {})[" + JSON.stringify(name) + "] = " + JSON.stringify(daten) + ";\n";
  fs.writeFileSync(path.join(ordner, name.replace(/\.json$/, ".js")), js, "utf8");
  anzahl++;
}
console.log(anzahl + " Dateien erzeugt.");
