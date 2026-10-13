/* Filius-Datei im Browser auswerten – Zusatz für Informatik 9 (DNS, WLAN, Dienste, Router-Anschlüsse).
 * Einbinden NACH ../../7M/Informatik/filius-datei.js (das bleibt unverändert). Nichts wird hochgeladen, kein eval.
 *
 *   Modul.liesFilius9(datei) -> Promise(netz)      netz = Ergebnis von Modul.liesFilius (rechner, switches, router, doppelt,
 *                                                  verbunden, erreichbar, switchVon, imNetz, mitIp, hat …) plus:
 *   je Gerät g in netz.geraete:
 *     g.dns       "Domain Name Server" des Geräts ("" wenn leer)
 *     g.funk      true, wenn das Gerät drahtlos (WLAN) verbunden ist
 *     g.ssid      SSID (Switch: sein WLAN-Name; Notebook: gewähltes Netz), "" wenn keine
 *     g.dienste   nur installierte Dienste: { WebServer: {aktiv}, DNSServer: {aktiv, eintraege: [{name, ip}]} }
 *                 aktiv = Dienst gestartet; name klein geschrieben, ohne Punkt am Ende
 *     g.webseite  Text von webserver/index.html ("" wenn keine Datei)
 *     g.anschluesse  nur Vermittlungsrechner: [{ip, maske, switch, an}] – switch = id des angeschlossenen Switches
 *                 ("" wenn dort kein Switch hängt), an = id des angeschlossenen Geräts (""= kein Kabel)
 *   Hilfen am Ergebnis:
 *     netz.dnsServer()                 Geräte mit laufendem DNS-Server
 *     netz.loeseAuf(name)              Adresse aus den Einträgen aller laufenden DNS-Server oder ""
 *     netz.gatewayStimmt(g)            Rechner/Notebook: Gateway ist eine Adresse eines Vermittlungsrechners und beginnt
 *                                      mit denselben ersten drei Zahlen wie die Adresse des Geräts
 *     netz.kannSeiteAbrufen(g, name)   Gerät hat Webbrowser, sein dns zeigt auf einen laufenden DNS-Server mit passendem
 *                                      Eintrag, und die Zieladresse gehört einem Gerät mit laufendem WebServer.
 *                                      (Eine Adresse statt eines Namens geht auch: dann entfällt der DNS-Teil.)
 *                                      Ob ein Weg dorthin existiert (Router, Gateway), prüft die Funktion NICHT.
 * Grenzen: Gestartet/nicht gestartet steht in der Datei nur als Vorhandensein von <void property="aktiv"> beim Dienst.
 * Geprüft mit Dateien aus Filius 2.14.0.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M || !M.filiusAuslesen) return;

const FEHLER_DATEI = "Das ist keine Filius-Datei. Wähle die Datei mit der Endung .fls, die du in Filius gespeichert hast.";

// Holt aus einer ZIP-Datei den Eintrag, dessen Name auf „endung“ endet (unkomprimiert oder deflate) – wie in filius-datei.js.
async function zipEintrag(bytes, endung) {
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), n = bytes.length;
  const text = (a, l) => new TextDecoder("utf-8").decode(bytes.subarray(a, a + l));
  if (n < 30 || v.getUint32(0, true) !== 0x04034b50) throw new Error(FEHLER_DATEI);
  let eintrag = null;
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

const KNOTEN = /^filius\.hardware\.knoten\./;
const NODE = 'object[class="javax.swing.tree.DefaultMutableTreeNode"]';
const erstesAn = (el, prop, tag) => { const v = [...el.querySelectorAll('void[property="' + prop + '"]')][0]; const s = v && v.querySelector(":scope > " + (tag || "string")); return s ? s.textContent.trim() : ""; };

function ergaenzen(xml, netz) {
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  if (doc.querySelector("parsererror")) throw new Error(FEHLER_DATEI);
  const ids = {};
  doc.querySelectorAll("object[id]").forEach(o => { ids[o.getAttribute("id")] = o; });
  const echt = o => o && o.hasAttribute("idref") ? ids[o.getAttribute("idref")] || null : o;
  const klasse = o => (o && o.getAttribute("class")) || "";

  // Gerät-Id -> Knoten-Element (gleiche Reihenfolge und Kennungen wie in filius-datei.js)
  const knotenVon = {}, portBesitzer = {};
  doc.querySelectorAll('object[class="filius.gui.netzwerksicht.GUIKnotenItem"]').forEach((item, nr) => {
    const knoten = echt([...item.querySelectorAll("object")].find(o => KNOTEN.test(klasse(o)) || (o.hasAttribute("idref") && KNOTEN.test(klasse(ids[o.getAttribute("idref")])))));
    if (!knoten) return;
    const id = item.getAttribute("id") || "knoten" + nr;
    knotenVon[id] = knoten;
    knoten.querySelectorAll('[id^="Port"]').forEach(p => { portBesitzer[p.getAttribute("id")] = id; });
  });

  // Kabel: Port-Paare (und ob Funk)
  const kabel = [];
  doc.querySelectorAll('object[class="filius.gui.netzwerksicht.GUIKabelItem"]').forEach(k => {
    const ports = [...k.querySelectorAll('void[property="dasKabel"] array > void > object')].map(o => o.getAttribute("idref") || o.getAttribute("id")).filter(Boolean);
    const funk = !!k.querySelector('void[property="dasKabel"] void[property="wireless"]');
    if (ports.length >= 2) kabel.push({ports, funk});
  });
  const funkIds = new Set();
  kabel.forEach(k => { if (k.funk) k.ports.forEach(p => { if (portBesitzer[p]) funkIds.add(portBesitzer[p]); }); });

  const dateien = knoten => [...knoten.querySelectorAll('object[class="filius.software.system.Datei"]')].map(d => {
    const eigen = d.closest(NODE), eltern = eigen && eigen.parentElement ? eigen.parentElement.closest(NODE) : null;
    const s = (el, p) => { const v = el && [...el.children].find(c => c.tagName === "void" && c.getAttribute("property") === p); const x = v && v.querySelector(":scope > string"); return x ? x.textContent : ""; };
    return {ordner: eltern ? s(eltern, "userObject").trim() : "", name: s(d, "name").trim(), inhalt: s(d, "dateiInhalt")};
  });

  netz.geraete.forEach(g => {
    const knoten = knotenVon[g.id];
    g.dns = ""; g.funk = false; g.ssid = ""; g.dienste = {}; g.webseite = "";
    if (!knoten) return;
    g.dns = erstesAn(knoten, "dns");
    g.funk = funkIds.has(g.id) || !!knoten.querySelector('void[property="wireless"]');
    g.ssid = erstesAn(knoten, "ssid") || erstesAn(knoten, "SSID");
    const art = g.art;
    if (art === "Rechner" || art === "Notebook") {
      const df = dateien(knoten);
      knoten.querySelectorAll('object[class^="filius.software."]').forEach(o => {
        const kl = klasse(o).split(".").pop();
        if (kl !== "WebServer" && kl !== "DNSServer") return;
        const aktiv = !![...o.children].find(c => c.tagName === "void" && c.getAttribute("property") === "aktiv");
        if (kl === "WebServer") g.dienste.WebServer = {aktiv};
        else {
          const hosts = df.find(f => f.ordner === "dns" && f.name === "hosts");
          const eintraege = [];
          (hosts ? hosts.inhalt : "").split(/\r?\n/).forEach(z => {
            const t = z.trim().split(/\s+/);
            if (t.length >= 4 && t[1].toUpperCase() === "A") eintraege.push({name: t[0].replace(/\.$/, "").toLowerCase(), ip: t[t.length - 1]});
          });
          g.dienste.DNSServer = {aktiv, eintraege};
        }
      });
      const index = df.find(f => f.ordner === "webserver" && f.name === "index.html");
      if (index) g.webseite = index.inhalt;
    }
    if (art === "Vermittlungsrechner") {
      g.anschluesse = [...knoten.querySelectorAll('void[property="port"][id^="Port"]')].map(p => {
        const nic = p.parentElement, portId = p.getAttribute("id");
        const ip = erstesAn(nic, "ip") || "192.168.0.10", maske = erstesAn(nic, "subnetzMaske") || "255.255.255.0";
        const k = kabel.find(x => x.ports.includes(portId));
        const anderer = k ? k.ports.find(x => x !== portId) : null, an = anderer ? portBesitzer[anderer] || "" : "";
        const sw = netz.geraete.find(x => x.id === an);
        return {ip, maske, switch: sw && sw.art === "Switch" ? an : "", an};
      });
    }
  });

  const rechnerArt = g => g.art === "Rechner" || g.art === "Notebook";
  netz.dnsServer = () => netz.geraete.filter(g => g.dienste && g.dienste.DNSServer && g.dienste.DNSServer.aktiv);
  netz.loeseAuf = name => {
    const n = String(name || "").trim().replace(/\.$/, "").toLowerCase();
    for (const s of netz.dnsServer()) { const e = s.dienste.DNSServer.eintraege.find(x => x.name === n); if (e) return e.ip; }
    return "";
  };
  netz.gatewayStimmt = g => {
    if (!g || !rechnerArt(g) || !g.gateway || !g.ips.length) return false;
    const drei = ip => ip.split(".").slice(0, 3).join(".");
    return netz.router.some(r => r.ips.includes(g.gateway) && g.ips.some(ip => drei(ip) === drei(g.gateway)));
  };
  netz.kannSeiteAbrufen = (g, name) => {
    if (!g || !g.software.includes("WebBrowser")) return false;
    const n = String(name || "").trim();
    let ziel = "";
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(n)) ziel = n;
    else {
      const server = g.dns && netz.dnsServer().find(s => s.ips.includes(g.dns));
      const e = server && server.dienste.DNSServer.eintraege.find(x => x.name === n.replace(/\.$/, "").toLowerCase());
      ziel = e ? e.ip : "";
    }
    if (!ziel) return false;
    return netz.geraete.some(x => x.ips.includes(ziel) && x.dienste && x.dienste.WebServer && x.dienste.WebServer.aktiv);
  };
  return netz;
}

async function liesFilius9(datei) {
  if (!/\.fls$/i.test(datei.name || "")) throw new Error(FEHLER_DATEI);
  const bytes = new Uint8Array(await datei.arrayBuffer());
  const xml = await zipEintrag(bytes, "konfiguration.xml");
  const netz = ergaenzen(xml, M.filiusAuslesen(xml));
  netz.datei = datei.name;
  return netz;
}

Object.assign(M, {liesFilius9});
})();
