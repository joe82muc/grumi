/* Inkscape-Datei (SVG) im Browser auswerten – für die Ergebnisprüfung der Inkscape-Aufträge (Modul.makeAuftrag,
 * pruefung.art "datei"). Nichts wird hochgeladen: Die Datei wird nur auf dem Gerät gelesen.
 *
 * Inkscape 1.4.3 speichert (geprüft am 26.11.2026):
 *   Rechteck   <rect width="40" height="20" x y style="fill:#ff0000;…" transform="rotate(90)">
 *   Kreis      <circle cx cy r="15">          (Ellipse: <ellipse rx ry>, Bogen: <path sodipodi:type="arc">)
 *   Stern      <path sodipodi:type="star" sodipodi:sides="5" inkscape:flatsided="false">  (Vieleck: flatsided="true")
 *   Text       <text style="font-size:8.4667px;…"><tspan sodipodi:role="line">AMPEL</tspan></text>
 *   Gruppe     <g id="g2"> … </g>             (Ebene: <g inkscape:groupmode="layer">)
 * Die Seite ist in mm angelegt (width="210mm", viewBox="0 0 210 297"): eine Einheit der Datei = 1 mm.
 *
 *   Modul.liesSvg(datei) -> Promise({
 *     inkscape: "1.4.3" | "",            Version, mit der die Datei gespeichert wurde ("" = anderes Programm)
 *     seite: { breite, hoehe },          in mm
 *     objekte: [{ nr, art, id, fuellung, farbe, kontur, konturFarbe, konturBreite, breite, hoehe, r, rx, ry,
 *                 ecken, drehung, mitte: [x, y], box: [x1, y1, x2, y2], text, schrift, gruppen: [Nummern], tiefe }],
 *        art:        "rechteck" | "kreis" | "ellipse" | "bogen" | "stern" | "vieleck" | "spirale" | "pfad" | "linie" |
 *                    "text" | "bild" | "klon"
 *        fuellung:   "#ff0000" | "keine" | "verlauf" · farbe: Name der Füllfarbe ("rot", "gelb" … siehe farbName)
 *        kontur:     "#000000" | "keine" · konturFarbe: Name · konturBreite in mm
 *        breite/hoehe (Rechteck, ohne Drehung), r (Kreis), rx/ry (Ellipse, Bogen) in mm, auf 0,01 mm gerundet
 *        drehung:    Grad, 0 bis 359 (gerundet) · ecken: Stern und Vieleck · schrift: Schriftgröße in pt
 *        mitte, box: Lage auf der Seite in mm (box ohne Kontur, bei gedrehten Formen der umgebende Rahmen)
 *        gruppen:    Nummern der Gruppen, in denen das Objekt liegt (innen zuerst) · tiefe: Stapelreihenfolge (0 = ganz unten)
 *     gruppen: [{ nr, id, objekte: [nr, …] }],   alle Objekte in der Gruppe (auch in Untergruppen)
 *     farben: ["rot", …],                Namen aller Füllfarben (ohne „keine“), jede einmal
 *     zaehle(art) · mit(art, farbe) · liegtIn(innen, aussen) · ueber(a, b)
 *   })
 *   Modul.farbName("#ff0000") -> "rot"
 * Einbinden nach praxis.js.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;

const NS_SODI = "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd", NS_INK = "http://www.inkscape.org/namespaces/inkscape";
const FEHLER_DATEI = "Das ist keine Inkscape-Datei. Wähle die Datei mit der Endung .svg, die du in Inkscape gespeichert hast.";
const NICHT_SICHTBAR = ["defs", "namedview", "metadata", "clipPath", "mask", "pattern", "marker", "symbol", "linearGradient", "radialGradient", "style", "script", "title", "desc"];
const NAMEN = {black: "#000000", white: "#ffffff", red: "#ff0000", lime: "#00ff00", green: "#008000", blue: "#0000ff", yellow: "#ffff00",
  orange: "#ffa500", purple: "#800080", gray: "#808080", grey: "#808080", silver: "#c0c0c0", maroon: "#800000", navy: "#000080",
  teal: "#008080", olive: "#808000", aqua: "#00ffff", cyan: "#00ffff", fuchsia: "#ff00ff", magenta: "#ff00ff", pink: "#ffc0cb", brown: "#a52a2a"};
const EINHEIT = {mm: 1, cm: 10, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6, px: 25.4 / 96, "": 25.4 / 96};

/* ---------- Farben ---------- */
function hex(wert) {
  let v = String(wert || "").trim().toLowerCase();
  if (!v || v === "none" || v === "transparent") return "keine";
  if (/^url\(/.test(v)) return "verlauf";
  if (NAMEN[v]) return NAMEN[v];
  let m = v.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/);
  if (m) return "#" + m[1] + m[1] + m[2] + m[2] + m[3] + m[3];
  if (/^#[0-9a-f]{6}$/.test(v)) return v;
  if (/^#[0-9a-f]{8}$/.test(v)) return v.slice(0, 7);
  m = v.match(/^rgba?\(\s*([\d.]+)%?\s*,\s*([\d.]+)%?\s*,\s*([\d.]+)%?/);
  if (m) return "#" + [m[1], m[2], m[3]].map(x => Math.max(0, Math.min(255, Math.round(+x))).toString(16).padStart(2, "0")).join("");
  return "";
}
// Name einer Farbe für Kinder: schwarz, weiß, grau, rot, rosa, orange, braun, gelb, grün, türkis, blau, lila, pink
function farbName(wert) {
  const h6 = hex(wert);
  if (h6 === "keine") return "keine";
  if (h6 === "verlauf") return "verlauf";
  if (!h6) return "";
  const r = parseInt(h6.slice(1, 3), 16) / 255, g = parseInt(h6.slice(3, 5), 16) / 255, b = parseInt(h6.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let hue = 0;
  if (d) hue = max === r ? 60 * (((g - b) / d) % 6) : max === g ? 60 * ((b - r) / d + 2) : 60 * ((r - g) / d + 4);
  if (hue < 0) hue += 360;
  if (l < 0.13) return "schwarz";
  if (l > 0.93) return "weiß";
  if (s < 0.18) return "grau";
  if (hue < 15 || hue >= 345) return l > 0.75 ? "rosa" : "rot";
  if (hue < 40) return l < 0.4 ? "braun" : "orange";
  if (hue < 68) return l < 0.3 ? "braun" : "gelb";
  if (hue < 165) return "grün";
  if (hue < 195) return "türkis";
  if (hue < 255) return "blau";
  if (hue < 290) return "lila";
  return l > 0.75 ? "rosa" : "pink";
}

/* ---------- Umrechnungen (Matrix [a, b, c, d, e, f] wie in SVG) ---------- */
const mal = (m, n) => [m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1], m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
  m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]];
const punkt = (m, x, y) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
function matrix(text) {
  let m = [1, 0, 0, 1, 0, 0];
  const re = /(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g; let t;
  while ((t = re.exec(String(text || "")))) {
    const z = t[2].split(/[\s,]+/).filter(x => x !== "").map(Number), w = Math.PI / 180;
    let n = [1, 0, 0, 1, 0, 0];
    if (t[1] === "matrix" && z.length === 6) n = z;
    else if (t[1] === "translate") n = [1, 0, 0, 1, z[0] || 0, z[1] || 0];
    else if (t[1] === "scale") n = [z[0], 0, 0, z.length > 1 ? z[1] : z[0], 0, 0];
    else if (t[1] === "rotate") {
      const c = Math.cos((z[0] || 0) * w), s = Math.sin((z[0] || 0) * w);
      n = [c, s, -s, c, 0, 0];
      if (z.length === 3) n = mal(mal([1, 0, 0, 1, z[1], z[2]], n), [1, 0, 0, 1, -z[1], -z[2]]);
    } else if (t[1] === "skewX") n = [1, 0, Math.tan((z[0] || 0) * w), 1, 0, 0];
    else if (t[1] === "skewY") n = [1, Math.tan((z[0] || 0) * w), 0, 1, 0, 0];
    m = mal(m, n);
  }
  return m;
}
const runde = (x, n = 2) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

/* ---------- Stil eines Elements (mit Vererbung über die Gruppen) ---------- */
function stilWert(el, name) {
  for (let e = el; e && e.nodeType === 1; e = e.parentNode) {
    const st = e.getAttribute("style") || "";
    const m = st.match(new RegExp("(?:^|;)\\s*" + name + "\\s*:\\s*([^;]+)"));
    if (m) return m[1].trim();
    if (e.hasAttribute(name)) return e.getAttribute(name).trim();
  }
  return null;
}

async function liesSvg(datei) {
  if (datei && /\.(png|jpe?g|gif|pdf|fls|webp|bmp)$/i.test(datei.name || "")) throw new Error(FEHLER_DATEI);
  const text = await new Promise((ok, fehler) => {
    const leser = new FileReader();
    leser.onload = () => ok(String(leser.result || "")); leser.onerror = () => fehler(new Error(FEHLER_DATEI));
    leser.readAsText(datei, "utf-8");
  });
  if (!/<svg[\s>]/.test(text.slice(0, 5000))) throw new Error(FEHLER_DATEI);
  const doc = new DOMParser().parseFromString(text, "image/svg+xml");
  const svg = doc.documentElement;
  if (!svg || svg.localName !== "svg" || doc.getElementsByTagName("parsererror").length) throw new Error(FEHLER_DATEI);

  // Seite und Maßstab: eine Einheit der Datei in mm
  const laenge = a => { const m = String(a || "").trim().match(/^([\d.]+)\s*([a-z]*)$/i); return m ? +m[1] * (EINHEIT[m[2].toLowerCase()] || EINHEIT.px) : null; };
  const vb = (svg.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number);
  const bMm = laenge(svg.getAttribute("width")), hMm = laenge(svg.getAttribute("height"));
  let mass = EINHEIT.px;
  if (vb.length === 4 && vb[2] > 0) mass = bMm ? bMm / vb[2] : EINHEIT.px;
  const seite = {breite: runde(bMm || (vb[2] || 0) * mass), hoehe: runde(hMm || (vb[3] || 0) * mass)};
  const wurzel = [mass, 0, 0, mass, vb.length === 4 ? -vb[0] * mass : 0, vb.length === 4 ? -vb[1] * mass : 0];

  const objekte = [], gruppen = [];
  function lauf(el, m, gruppenKette) {
    for (const k of Array.from(el.children)) {
      const name = k.localName;
      if (NICHT_SICHTBAR.includes(name)) continue;
      if (stilWert(k, "display") === "none") continue;
      const mk = mal(m, matrix(k.getAttribute("transform")));
      if (name === "g" || name === "a" || name === "switch") {
        const ebene = k.getAttributeNS(NS_INK, "groupmode") === "layer";
        if (ebene || name !== "g") { lauf(k, mk, gruppenKette); continue; }
        const g = {nr: gruppen.length, id: k.getAttribute("id") || "", objekte: []};
        gruppen.push(g);
        lauf(k, mk, [g.nr].concat(gruppenKette));
        continue;
      }
      const o = objekt(k, name, mk);
      if (!o) continue;
      o.nr = objekte.length; o.tiefe = objekte.length; o.gruppen = gruppenKette.slice();
      gruppenKette.forEach(n => gruppen[n].objekte.push(o.nr));
      objekte.push(o);
    }
  }
  function objekt(k, name, m) {
    const zahl = a => parseFloat(k.getAttribute(a)) || 0, sodi = a => k.getAttributeNS(NS_SODI, a);
    const sx = Math.hypot(m[0], m[1]), sy = Math.hypot(m[2], m[3]);
    let drehung = Math.round(Math.atan2(m[1], m[0]) * 180 / Math.PI);
    drehung = ((drehung % 360) + 360) % 360;
    const o = {art: "", id: k.getAttribute("id") || "", drehung};
    const ecken = pts => { const p = pts.map(q => punkt(m, q[0], q[1])), xs = p.map(q => q[0]), ys = p.map(q => q[1]);
      return [runde(Math.min(...xs)), runde(Math.min(...ys)), runde(Math.max(...xs)), runde(Math.max(...ys))]; };
    if (name === "rect") {
      const x = zahl("x"), y = zahl("y"), w = zahl("width"), h = zahl("height");
      Object.assign(o, {art: "rechteck", breite: runde(w * sx), hoehe: runde(h * sy), box: ecken([[x, y], [x + w, y], [x, y + h], [x + w, y + h]]), mitte: punkt(m, x + w / 2, y + h / 2)});
    } else if (name === "circle" || name === "ellipse") {
      const cx = zahl("cx"), cy = zahl("cy"), rx = name === "circle" ? zahl("r") : zahl("rx"), ry = name === "circle" ? zahl("r") : zahl("ry");
      const kreis = Math.abs(rx * sx - ry * sy) < 0.05;
      Object.assign(o, {art: kreis ? "kreis" : "ellipse", rx: runde(rx * sx), ry: runde(ry * sy), mitte: punkt(m, cx, cy),
        box: ecken([[cx - rx, cy - ry], [cx + rx, cy - ry], [cx - rx, cy + ry], [cx + rx, cy + ry]])});
      if (kreis) o.r = runde(rx * sx);
    } else if (name === "path" && sodi("type") === "arc") {
      const cx = parseFloat(sodi("cx")) || 0, cy = parseFloat(sodi("cy")) || 0, rx = parseFloat(sodi("rx")) || 0, ry = parseFloat(sodi("ry")) || 0;
      Object.assign(o, {art: "bogen", rx: runde(rx * sx), ry: runde(ry * sy), mitte: punkt(m, cx, cy), box: ecken([[cx - rx, cy - ry], [cx + rx, cy + ry]])});
    } else if (name === "path" && sodi("type") === "star") {
      const cx = parseFloat(sodi("cx")) || 0, cy = parseFloat(sodi("cy")) || 0, r1 = parseFloat(sodi("r1")) || 0;
      Object.assign(o, {art: k.getAttributeNS(NS_INK, "flatsided") === "true" ? "vieleck" : "stern", ecken: parseInt(sodi("sides"), 10) || 0,
        r: runde(r1 * sx), mitte: punkt(m, cx, cy), box: ecken([[cx - r1, cy - r1], [cx + r1, cy + r1]])});
    } else if (name === "path" && sodi("type") === "spiral") {
      Object.assign(o, {art: "spirale", mitte: punkt(m, parseFloat(sodi("cx")) || 0, parseFloat(sodi("cy")) || 0)});
    } else if (name === "path") {
      // Lage aus den Zahlen der Pfadbeschreibung schätzen (nur für die Mitte)
      const z = (k.getAttribute("d") || "").match(/-?[\d.]+(?:e-?\d+)?/gi) || [];
      Object.assign(o, {art: "pfad"});
      if (z.length >= 2 && /^[Mm]\s*-?[\d.]/.test((k.getAttribute("d") || "").trim())) o.mitte = punkt(m, +z[0], +z[1]);
    } else if (name === "line" || name === "polyline") {
      o.art = "linie";
    } else if (name === "polygon") {
      o.art = "vieleck";
    } else if (name === "text") {
      const fs = parseFloat(stilWert(k.querySelector("tspan") || k, "font-size")) || parseFloat(stilWert(k, "font-size")) || 0;
      Object.assign(o, {art: "text", text: (k.textContent || "").replace(/\s+/g, " ").trim(), schrift: runde(fs * sy / (25.4 / 72), 1),
        mitte: punkt(m, zahl("x"), zahl("y"))});
    } else if (name === "image") {
      o.art = "bild";
    } else if (name === "use") {
      o.art = "klon";
    } else return null;
    if (o.mitte) o.mitte = [runde(o.mitte[0]), runde(o.mitte[1])];
    // Füllung und Kontur (Text: die erste Zeile zählt, Inkscape schreibt die Farbe auch dort hinein)
    const quelle = name === "text" ? (k.querySelector("tspan") || k) : k;
    const f = stilWert(quelle, "fill"), s = stilWert(quelle, "stroke");
    o.fuellung = f === null ? (name === "line" || name === "polyline" ? "keine" : "#000000") : hex(f) || "#000000";
    o.farbe = farbName(o.fuellung);
    o.kontur = s === null ? "keine" : hex(s) || "keine";
    o.konturFarbe = farbName(o.kontur);
    o.konturBreite = o.kontur === "keine" ? 0 : runde((parseFloat(stilWert(quelle, "stroke-width")) || 1) * sx, 3);
    return o;
  }
  lauf(svg, wurzel, []);

  const farben = [...new Set(objekte.map(o => o.farbe).filter(f => f && f !== "keine"))];
  const version = (svg.getAttributeNS(NS_INK, "version") || "").split(" ")[0];
  return {
    inkscape: version, seite, objekte, gruppen, farben,
    zaehle: art => objekte.filter(o => !art || o.art === art).length,
    mit: (art, farbe) => objekte.filter(o => (!art || o.art === art) && (!farbe || o.farbe === farbe)),
    // innen liegt (mit seiner Mitte) im Rahmen von aussen
    liegtIn: (innen, aussen) => !!(innen && aussen && innen.mitte && aussen.box && innen.mitte[0] >= aussen.box[0] && innen.mitte[0] <= aussen.box[2] && innen.mitte[1] >= aussen.box[1] && innen.mitte[1] <= aussen.box[3]),
    ueber: (a, b) => !!(a && b && a.tiefe > b.tiefe)
  };
}

Object.assign(M, {liesSvg, farbName});
})();
