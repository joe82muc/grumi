/* Filius-Datei im Browser auswerten – für die Ergebnisprüfung der Filius-Aufträge (Modul.makeAuftrag, pruefung.art "datei").
 * Nichts wird hochgeladen: Die Datei wird nur auf dem Gerät gelesen.
 *
 * Eine .fls-Datei ist eine ZIP-Datei mit „projekt/konfiguration.xml“ (Java-XML). Darin stehen die Geräte
 * (GUIKnotenItem mit filius.hardware.knoten.Rechner | Notebook | Switch | Vermittlungsrechner | Modem) und die
 * Kabel (GUIKabelItem mit ziel1/ziel2).
 *
 *   Modul.liesFilius(datei) -> Promise({
 *     version,                                    "2.14.0"
 *     geraete: [{ id, art, name, ips: [], gateway, maske, software: [] }],
 *     kabel: [[idA, idB], …],
 *     rechner, switches, router,                  Geräte der Art Rechner oder Notebook · Switch · Vermittlungsrechner
 *     doppelt,                                    Adressen, die mehr als ein Rechner hat
 *     nachbarn(id), verbunden(idA, idB),          direkt mit einem Kabel verbunden
 *     erreichbar(idA, idB),                       über Kabel und Switches verbunden (ohne Router)
 *     switchVon(id), imNetz("192.168.0."),        Switches am Gerät · Rechner mit einer Adresse aus diesem Netz
 *     mitIp(ip), hat(geraet, "WebServer")         Gerät mit dieser Adresse · Programm installiert?
 *   })
 * Programme heißen in der Datei: Terminal (Befehlszeile), WebServer, WebBrowser, ServerBaustein (Echo-Server),
 * ClientBaustein (Einfacher Client).
 * Einbinden nach praxis.js. Geprüft mit Dateien aus Filius 2.14.0.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;

const FEHLER_DATEI = "Das ist keine Filius-Datei. Wähle die Datei mit der Endung .fls, die du in Filius gespeichert hast.";

// Holt aus einer ZIP-Datei den Eintrag, dessen Name auf „endung“ endet (unkomprimiert oder deflate).
async function zipEintrag(bytes, endung) {
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), n = bytes.length;
  const text = (a, l) => new TextDecoder("utf-8").decode(bytes.subarray(a, a + l));
  if (n < 30 || v.getUint32(0, true) !== 0x04034b50) throw new Error(FEHLER_DATEI);
  let eintrag = null;
  // Inhaltsverzeichnis am Ende der Datei: dort stehen die Größen sicher
  for (let i = n - 22; i >= Math.max(0, n - 70000); i--) {
    if (v.getUint32(i, true) !== 0x06054b50) continue;
    let p = v.getUint32(i + 16, true); const anzahl = v.getUint16(i + 10, true);
    for (let k = 0; k < anzahl && p + 46 <= n && v.getUint32(p, true) === 0x02014b50; k++) {
      const nameLen = v.getUint16(p + 28, true), extra = v.getUint16(p + 30, true), komm = v.getUint16(p + 32, true);
      const name = text(p + 46, nameLen);
      if (name.toLowerCase().endsWith(endung)) eintrag = {methode: v.getUint16(p + 10, true), gross: v.getUint32(p + 20, true), kopf: v.getUint32(p + 42, true)};
      p += 46 + nameLen + extra + komm;
    }
    break;
  }
  if (!eintrag || eintrag.kopf + 30 > n) throw new Error(FEHLER_DATEI);
  const k = eintrag.kopf, start = k + 30 + v.getUint16(k + 26, true) + v.getUint16(k + 28, true);
  const roh = bytes.subarray(start, start + eintrag.gross);
  if (eintrag.methode === 0) return new TextDecoder("utf-8").decode(roh);
  if (eintrag.methode !== 8) throw new Error(FEHLER_DATEI);
  if (typeof DecompressionStream === "undefined") throw new Error("Dieser Browser kann die Filius-Datei nicht öffnen. Nimm einen aktuellen Browser oder beantworte die Frage darunter.");
  const strom = new Blob([roh]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Response(strom).text();
}

// Liest Geräte und Kabel aus konfiguration.xml
function auslesen(xml) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error(FEHLER_DATEI);
  const ids = {};
  doc.querySelectorAll("object[id]").forEach(o => { ids[o.getAttribute("id")] = o; });
  const echt = o => o && o.hasAttribute("idref") ? ids[o.getAttribute("idref")] || null : o;
  const kinder = (el, name) => [...el.children].filter(c => c.tagName === name);
  // Wert einer Eigenschaft, die direkt an diesem Objekt hängt: <void property="name"><string>…</string></void>
  const eigenschaft = (obj, prop) => { const v = kinder(obj, "void").find(c => c.getAttribute("property") === prop); const s = v && v.querySelector(":scope > string"); return s ? s.textContent.trim() : ""; };
  const version = (/Filius version:\s*([\d.]+)/.exec(xml) || [])[1] || "";

  const geraete = [], zuKnoten = new Map();
  doc.querySelectorAll('object[class="filius.gui.netzwerksicht.GUIKnotenItem"]').forEach((item, nr) => {
    const knoten = echt([...item.querySelectorAll("object")].find(o => /^filius\.hardware\.knoten\./.test(o.getAttribute("class") || "") || (o.hasAttribute("idref") && /^filius\.hardware\.knoten\./.test((ids[o.getAttribute("idref")] || {getAttribute: () => ""}).getAttribute("class") || ""))));
    if (!knoten) return;
    const id = item.getAttribute("id") || "knoten" + nr;
    const art = knoten.getAttribute("class").split(".").pop();
    const texte = prop => [...knoten.querySelectorAll('void[property="' + prop + '"] > string')].map(s => s.textContent.trim()).filter(Boolean);
    const software = [...new Set([...knoten.querySelectorAll("object[class]")].map(o => o.getAttribute("class")).filter(c => /^filius\.software\.(?!system\.|vermittlungsschicht\.|transportschicht\.|netzzugangsschicht\.)/.test(c)).map(c => c.split(".").pop()))];
    // Filius schreibt beim Knoten nur, was von der Voreinstellung abweicht: Die voreingestellte Adresse 192.168.0.10
    // und ein unveränderter Name fehlen dort. Die Beschriftung des Geräts (Text und Hinweistext) nennt beides immer.
    const schild = echt([...item.querySelectorAll('void[property="imageLabel"] > object')][0]);
    const tipp = schild ? eigenschaft(schild, "toolTipText") : "";
    const paare = [...tipp.matchAll(/(\d{1,3}(?:\.\d{1,3}){3})\s*\/\s*(\d{1,3}(?:\.\d{1,3}){3})/g)];
    const ips = [...new Set(texte("ip").concat(paare.map(m => m[1])))];
    const endgeraet = art === "Rechner" || art === "Notebook";
    if (!ips.length && endgeraet) ips.push("192.168.0.10");
    const g = {id, art, name: (schild && eigenschaft(schild, "text")) || eigenschaft(knoten, "name") || art, ips,
      gateway: texte("gateway")[0] || (/Gateway:[ ]*(\d{1,3}(?:\.\d{1,3}){3})/.exec(tipp) || [])[1] || "",
      maske: texte("subnetzMaske")[0] || texte("netzmaske")[0] || (paare[0] || [])[2] || (ips.length ? "255.255.255.0" : ""), software};
    geraete.push(g); zuKnoten.set(item, g);
  });

  const kabel = [];
  doc.querySelectorAll('object[class="filius.gui.netzwerksicht.GUIKabelItem"]').forEach(k => {
    const ziel = n => { const o = k.querySelector('void[property="kabelpanel"] void[property="ziel' + n + '"] > object'); const item = echt(o); return item ? zuKnoten.get(item) : null; };
    const a = ziel(1), b = ziel(2);
    if (a && b) kabel.push([a.id, b.id]);
  });

  const nachbarn = id => kabel.filter(k => k.includes(id)).map(k => k[0] === id ? k[1] : k[0]);
  const verbunden = (a, b) => kabel.some(k => (k[0] === a && k[1] === b) || (k[0] === b && k[1] === a));
  const art = id => (geraete.find(g => g.id === id) || {}).art;
  // über Kabel und Switches erreichbar (ein Router oder ein anderer Rechner leitet hier nicht weiter)
  function erreichbar(a, b) {
    const gesehen = new Set([a]), offen = [a];
    while (offen.length) {
      const x = offen.shift();
      for (const y of nachbarn(x)) {
        if (y === b) return true;
        if (!gesehen.has(y) && art(y) === "Switch") { gesehen.add(y); offen.push(y); }
      }
    }
    return false;
  }
  const rechner = geraete.filter(g => g.art === "Rechner" || g.art === "Notebook");
  // Adressen, die mehr als ein Rechner hat
  const doppelt = [...new Set(rechner.flatMap(g => g.ips).filter((ip, i, alle) => alle.indexOf(ip) !== i))];
  return {version, geraete, kabel, rechner, doppelt,
    switches: geraete.filter(g => g.art === "Switch"), router: geraete.filter(g => g.art === "Vermittlungsrechner"),
    nachbarn, verbunden, erreichbar, mitIp: ip => geraete.find(g => g.ips.includes(ip)) || null,
    // Switches, an denen dieses Gerät direkt hängt
    switchVon: id => nachbarn(id).filter(n => art(n) === "Switch"),
    // Rechner mit einer Adresse, die so beginnt („192.168.0.“)
    imNetz: anfang => rechner.filter(g => g.ips.some(ip => ip.indexOf(anfang) === 0)),
    hat: (g, programm) => g.software.includes(programm)};
}

async function liesFilius(datei) {
  if (!/\.fls$/i.test(datei.name || "")) throw new Error(FEHLER_DATEI);
  const bytes = new Uint8Array(await datei.arrayBuffer());
  const xml = await zipEintrag(bytes, "konfiguration.xml");
  const netz = auslesen(xml);
  netz.datei = datei.name;
  return netz;
}

Object.assign(M, {liesFilius, filiusAuslesen: auslesen});
})();
