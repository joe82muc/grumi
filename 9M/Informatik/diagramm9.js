/* Diagramme als SVG – Informatik 9 (GRUMI-EXCEL). Kein Fremdcode, alles wird hier gezeichnet.
 * Einbinden nach modul-basis.js (Reihenfolge zu tabelle9.js ist egal, tabelle9.js sucht Modul.diagramm erst beim Aufruf).
 *
 *   const d = Modul.diagramm(el, {
 *     typ: "saeule" | "balken" | "kreis" | "streifen" | "linie",
 *     titel: "Temperaturen in der Woche",
 *     kategorien: ["Mo", "Di", "Mi"],
 *     reihen: [{ name: "Temperatur", werte: [12, 15, 9] }],
 *     einheit: "°C", achseX: "Wochentag", achseY: "Temperatur in °C"
 *   });
 *   d.setze({ typ: "linie" })      ändert Angaben und zeichnet neu       d.svg() -> das SVG-Element
 *
 * Säule/Balken/Linie zeigen alle Reihen (Legende ab zwei Reihen oder bei benannter Reihe); Kreis und Streifen zeigen die erste
 * Reihe als Anteile in Prozent. achseX = Titel der waagerechten, achseY = Titel der senkrechten Achse (so, wie sie auf dem
 * Bild stehen – beim Balkendiagramm liegen die Werte also waagerecht). Die Zeichnung passt sich der Breite an (viewBox
 * wird aus der Breite des Kastens berechnet, die Schrift bleibt dadurch auch am Handy lesbar).
 * Hilfsattribute für Prüfungen: .dg-saeule/.dg-balken (data-wert), .dg-segment (data-wert, data-prozent, data-winkel),
 * .dg-streifen (data-prozent), .dg-punkt (data-wert), .dg-titel, .dg-leg-eintrag.
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const esc = M.esc || (s => String(s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]));

const FARBEN = ["#0072B2", "#E69F00", "#009E73", "#D55E00", "#56B4E9", "#CC79A7", "#7A5195", "#6B7280"];
const TYPEN = {saeule: "Säulendiagramm", balken: "Balkendiagramm", kreis: "Kreisdiagramm", streifen: "Streifendiagramm", linie: "Liniendiagramm"};
const TINTE = "#1f2a33", GITTER = "#dde3ea", ACHSE = "#6b7785";

/* ---------- Zahlen ---------- */
const sauber = n => Number(Number(n).toPrecision(12));
function zahl(n, max) {
  if (n == null || isNaN(n)) return "";
  const r = Number(sauber(Math.round(n * Math.pow(10, max == null ? 2 : max)) / Math.pow(10, max == null ? 2 : max)));
  const [g, d] = String(r).split(".");
  return g.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (d ? "," + d : "");
}
const prozent = p => zahl(p, 1) + " %";
const mitEinheit = (n, e) => zahl(n) + (e ? " " + e : "");
const breiteText = (s, px) => String(s).length * (px || 12) * 0.56;
function kuerze(s, px) {
  s = String(s);
  return breiteText(s, 12) <= px ? s : s.slice(0, Math.max(2, Math.floor(px / 6.7) - 1)) + "…";
}
// schöne Teilung der Achse, bei Bedarf ab 0
function skala(lo, hi, ziel) {
  if (!(hi > lo)) hi = lo + 1;
  const roh = (hi - lo) / (ziel || 5), p = Math.pow(10, Math.floor(Math.log10(roh))), f = roh / p;
  const s = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * p;
  const a = sauber(Math.floor(sauber(lo / s)) * s), b = sauber(Math.ceil(sauber(hi / s)) * s), ticks = [];
  for (let v = a; v <= b + s / 1e6; v = sauber(v + s)) ticks.push(sauber(v));
  return {lo: a, hi: b, ticks};
}
// Schriftfarbe auf einer Fläche: hell auf dunkel, dunkel auf hell
function textAuf(farbe) {
  const n = parseInt(farbe.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) < 150 ? "#fff" : "#14202a";
}
const T = (x, y, s, o) => {
  o = o || {};
  return `<text x="${sauber(x)}" y="${sauber(y)}" font-size="${o.px || 12}" fill="${o.fill || TINTE}"${o.fett ? ' font-weight="700"' : ""}${o.anker ? ` text-anchor="${o.anker}"` : ""}${o.klasse ? ` class="${o.klasse}"` : ""}${o.dreh ? ` transform="rotate(${o.dreh} ${sauber(x)} ${sauber(y)})"` : ""}${o.halo ? ' stroke="#fff" stroke-width="3" paint-order="stroke" stroke-linejoin="round"' : ""}>${esc(s)}</text>`;
};

/* ---------- Markierungen der Linien ---------- */
function marker(j, x, y, farbe, r, klasse, wert) {
  const a = `fill="${farbe}" stroke="#fff" stroke-width="1.5" class="${klasse}" data-wert="${wert}"`;
  if (j % 4 === 0) return `<circle cx="${sauber(x)}" cy="${sauber(y)}" r="${r}" ${a}/>`;
  if (j % 4 === 1) return `<rect x="${sauber(x - r)}" y="${sauber(y - r)}" width="${2 * r}" height="${2 * r}" ${a}/>`;
  if (j % 4 === 2) return `<polygon points="${sauber(x)},${sauber(y - r - 1.5)} ${sauber(x + r + 1.5)},${sauber(y)} ${sauber(x)},${sauber(y + r + 1.5)} ${sauber(x - r - 1.5)},${sauber(y)}" ${a}/>`;
  return `<polygon points="${sauber(x)},${sauber(y - r - 1)} ${sauber(x + r + 1.5)},${sauber(y + r)} ${sauber(x - r - 1.5)},${sauber(y + r)}" ${a}/>`;
}

/* ---------- Legende ---------- */
// liegend: Einträge nebeneinander, mit Umbruch; sonst eine Zeile je Eintrag
function legende(eintraege, W, y, liegend, x0) {
  let svg = '<g class="dg-legende">', x = 12, yy = y, h = 0;
  const swatch = (e, sx, sy) => e.linie
    ? `<line x1="${sx}" y1="${sy}" x2="${sx + 22}" y2="${sy}" stroke="${e.farbe}" stroke-width="2.5"/>${marker(e.nr || 0, sx + 11, sy, e.farbe, 4, "dg-leg-marker", "")}`
    : `<rect x="${sx}" y="${sy - 7}" width="14" height="14" rx="2" fill="${e.farbe}"/>`;
  if (liegend) {
    yy = y + 10;
    eintraege.forEach(e => {
      const sw = e.linie ? 26 : 18, w = sw + breiteText(e.text, 12) + 18;
      if (x + w > W - 8 && x > 12) { x = 12; yy += 22; }
      svg += `<g class="dg-leg-eintrag">${swatch(e, x, yy)}${T(x + sw + 2, yy + 4.5, e.text)}</g>`;
      x += w;
    });
    h = yy - y + 16;
  } else {
    x = x0 == null ? 12 : x0;
    eintraege.forEach(e => {
      yy += 24;
      svg += `<g class="dg-leg-eintrag">${swatch(e, x, yy - 4)}${T(x + 22, yy, e.text)}</g>`;
    });
    h = yy - y + 8;
  }
  return {svg: svg + "</g>", h};
}

/* ---------- Zeichnen ---------- */
function zeichne(cfg, W) {
  const typ = TYPEN[cfg.typ] ? cfg.typ : "saeule";
  const K = (cfg.kategorien || []).map(String), R = (cfg.reihen || []).map((r, i) => ({name: r.name || "Reihe " + (i + 1), benannt: !!r.name, werte: (r.werte || []).map(v => typeof v === "number" && isFinite(v) ? v : null)}));
  const n = K.length, e = cfg.einheit || "";
  const alleWerte = [].concat(...R.map(r => r.werte)).filter(v => v != null);
  const kopf = cfg.titel ? 40 : 14;
  let H = 0, inhalt = "";
  const titel = cfg.titel ? T(W / 2, 25, cfg.titel, {px: 17, fett: true, anker: "middle", klasse: "dg-titel"}) : "";

  if (typ === "kreis" || typ === "streifen") {
    const werte = (R[0].werte).map(v => v != null && v > 0 ? v : 0), summe = werte.reduce((a, b) => a + b, 0);
    const eintr = K.map((k, i) => ({text: k + (summe ? " – " + prozent(werte[i] / summe * 100) + " (" + mitEinheit(werte[i], e) + ")" : ""), farbe: FARBEN[i % FARBEN.length]}));
    if (!summe) return {H: 120, svg: titel + T(W / 2, 80, "Es gibt keine Zahlen größer als 0.", {anker: "middle"}), alt: "leer"};
    if (typ === "kreis") {
      const breit = W >= 540, r = breit ? Math.min(W * 0.27, 150) : Math.min((W - 60) / 2, 150), cy = kopf + r + 14, cx = breit ? r + 30 : W / 2;
      let w0 = -Math.PI / 2, svg = "", lab = "";
      werte.forEach((v, i) => {
        if (v <= 0) return;
        const anteil = v / summe, w1 = w0 + anteil * 2 * Math.PI, farbe = FARBEN[i % FARBEN.length];
        const p = (a, rr) => [sauber(cx + rr * Math.cos(a)), sauber(cy + rr * Math.sin(a))];
        const [x1, y1] = p(w0, r), [x2, y2] = p(w1, r);
        const attr = `class="dg-segment" data-wert="${v}" data-prozent="${sauber(anteil * 100)}" data-winkel="${sauber(anteil * 360)}" fill="${farbe}" stroke="#fff" stroke-width="2"`;
        svg += anteil >= 0.9999 ? `<circle cx="${cx}" cy="${cy}" r="${r}" ${attr}/>` : `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${anteil > 0.5 ? 1 : 0} 1 ${x2},${y2} Z" ${attr}/>`;
        const mitte = (w0 + w1) / 2, innen = anteil >= 0.07;
        const [lx, ly] = p(mitte, innen ? r * 0.64 : r + 16);
        lab += T(lx, ly + 4, prozent(anteil * 100), {px: innen ? 13 : 12, fett: true, anker: "middle", fill: innen ? textAuf(farbe) : TINTE});
        w0 = w1;
      });
      const leg = breit ? legende(eintr, W, cy - r - 4, false, cx + r + 34) : legende(eintr, W, cy + r + 18, false, 14);
      H = breit ? Math.max(cy + r + 18, cy - r - 4 + leg.h + 8) : cy + r + 18 + leg.h;
      return {H, svg: titel + svg + lab + leg.svg};
    }
    // Streifen: ein Balken, 100 % breit
    const x0 = 16, bw = W - 32, y0 = kopf + 16, bh = 58;
    let x = x0, svg = "";
    werte.forEach((v, i) => {
      if (v <= 0) return;
      const anteil = v / summe, w = bw * anteil, farbe = FARBEN[i % FARBEN.length];
      svg += `<rect class="dg-streifen" x="${sauber(x)}" y="${y0}" width="${sauber(w)}" height="${bh}" fill="${farbe}" stroke="#fff" stroke-width="2" data-wert="${v}" data-prozent="${sauber(anteil * 100)}"/>`;
      if (w >= 40) svg += T(x + w / 2, y0 + bh / 2 + 5, prozent(anteil * 100), {px: 13, fett: true, anker: "middle", fill: textAuf(farbe)});
      x += w;
    });
    let achse = `<line x1="${x0}" y1="${y0 + bh + 6}" x2="${x0 + bw}" y2="${y0 + bh + 6}" stroke="${ACHSE}"/>`;
    [0, 25, 50, 75, 100].forEach(p => {
      const px = x0 + bw * p / 100;
      achse += `<line x1="${px}" y1="${y0 + bh + 6}" x2="${px}" y2="${y0 + bh + 12}" stroke="${ACHSE}"/>` + T(px, y0 + bh + 27, p + " %", {px: 12, anker: p === 0 ? "start" : p === 100 ? "end" : "middle", fill: "#4a5662"});
    });
    const leg = legende(eintr, W, y0 + bh + 38, false, 14);
    return {H: y0 + bh + 38 + leg.h + 8, svg: titel + svg + achse + leg.svg};
  }

  /* Säule, Balken, Linie: Achsen */
  const liegend = typ === "balken";
  const lo = Math.min(0, ...(alleWerte.length ? alleWerte : [0])), hi = Math.max(0, ...(alleWerte.length ? alleWerte : [0]));
  const S = skala(lo, hi, liegend ? 5 : 5);
  const wLab = Math.max(...S.ticks.map(v => breiteText(zahl(v), 12)), 8);
  const zeigeLeg = R.length > 1 || (R.length === 1 && R[0].benannt);
  let ml, mr = 16, mo = kopf + 20, mu, plotH, svg = "";
  if (!liegend) {
    ml = 14 + wLab + (cfg.achseY || e ? 20 : 0);
    const pw = W - ml - mr, slot = pw / Math.max(1, n);
    const lbl = K.map(k => breiteText(k, 12)), maxL = Math.max(0, ...lbl);
    const dreh = maxL > slot - 6;
    const kurz = dreh ? K.map(k => kuerze(k, 110)) : K;
    mu = dreh ? Math.min(maxL, 110) * 0.64 + 14 : 26;
    mu += cfg.achseX ? 22 : 4;
    plotH = Math.round(Math.min(Math.max(W * 0.5, 190), 340));
    H = mo + plotH + mu;
    const y = v => mo + plotH - (v - S.lo) / (S.hi - S.lo) * plotH, yn = y(0);
    S.ticks.forEach(t => { svg += `<line x1="${ml}" y1="${sauber(y(t))}" x2="${W - mr}" y2="${sauber(y(t))}" stroke="${t === 0 ? ACHSE : GITTER}"/>` + T(ml - 6, y(t) + 4, zahl(t), {anker: "end", fill: "#4a5662"}); });
    svg += `<line x1="${ml}" y1="${mo}" x2="${ml}" y2="${mo + plotH}" stroke="${ACHSE}"/>`;
    K.forEach((k, i) => {
      const cx = ml + slot * (i + 0.5), ty = mo + plotH + 18;
      svg += dreh ? T(cx + 4, ty - 4, kurz[i], {anker: "end", dreh: -38, fill: "#2b3640"}) : T(cx, ty, k, {anker: "middle", fill: "#2b3640"});
      if (typ === "linie") svg += `<line x1="${sauber(cx)}" y1="${yn}" x2="${sauber(cx)}" y2="${sauber(yn + 4)}" stroke="${ACHSE}"/>`;
    });
    if (typ === "saeule") {
      const gw = Math.min(slot * 0.74, 64 * R.length), bw = gw / R.length;
      R.forEach((r, j) => r.werte.forEach((v, i) => {
        if (v == null) return;
        const x = ml + slot * i + (slot - gw) / 2 + j * bw, ya = y(v);
        svg += `<rect class="dg-saeule" data-wert="${v}" data-reihe="${j}" x="${sauber(x + (R.length > 1 ? 1 : 0))}" y="${sauber(Math.min(ya, yn))}" width="${sauber(bw - (R.length > 1 ? 2 : 0))}" height="${sauber(Math.abs(yn - ya))}" fill="${FARBEN[j % FARBEN.length]}"/>`;
        const txt = zahl(v);
        if (bw + 2 >= breiteText(txt, 11) || R.length === 1 && slot >= breiteText(txt, 11)) svg += T(x + bw / 2, v >= 0 ? ya - 5 : ya + 14, txt, {px: 11, anker: "middle"});
      }));
    } else {
      R.forEach((r, j) => {
        const farbe = FARBEN[j % FARBEN.length], pts = r.werte.map((v, i) => v == null ? null : [ml + slot * (i + 0.5), y(v), v]);
        // zusammenhängende Stücke zeichnen (leere Werte unterbrechen die Linie)
        let teil = [];
        const raus = () => { if (teil.length > 1) svg += `<polyline fill="none" stroke="${farbe}" stroke-width="2.5" stroke-linejoin="round" points="${teil.map(p => sauber(p[0]) + "," + sauber(p[1])).join(" ")}"/>`; teil = []; };
        pts.forEach(p => { if (p) teil.push(p); else raus(); }); raus();
        pts.forEach(p => { if (p) svg += marker(j, p[0], p[1], farbe, 4.5, "dg-punkt", p[2]); });
        if (R.length <= 2 && slot >= 30) pts.forEach(p => { if (p) svg += T(p[0], p[1] - (j % 2 ? -17 : 10), zahl(p[2]), {px: 11, anker: "middle", halo: true}); });
      });
    }
    if (cfg.achseX) svg += T(ml + pw / 2, H - 6, cfg.achseX, {anker: "middle", fill: "#4a5662", fett: true});
    const yt = cfg.achseY || (e ? e : "");
    if (yt) svg += T(14, mo + plotH / 2, yt, {anker: "middle", dreh: -90, fill: "#4a5662", fett: true});
  } else {
    const maxK = Math.min(Math.max(...K.map(k => breiteText(k, 12)), 20) + 12, W * 0.36);
    ml = 12 + maxK + (cfg.achseY ? 18 : 0);
    const pw = W - ml - mr - 18, slotH = Math.max(32, R.length * 18 + 14);
    plotH = slotH * Math.max(1, n);
    mu = 30 + (cfg.achseX || e ? 22 : 0);
    H = mo + plotH + mu;
    const x = v => ml + (v - S.lo) / (S.hi - S.lo) * pw, xn = x(0);
    S.ticks.forEach(t => { svg += `<line x1="${sauber(x(t))}" y1="${mo}" x2="${sauber(x(t))}" y2="${mo + plotH}" stroke="${t === 0 ? ACHSE : GITTER}"/>` + T(x(t), mo + plotH + 18, zahl(t), {anker: "middle", fill: "#4a5662"}); });
    K.forEach((k, i) => { svg += T(ml - 8, mo + slotH * (i + 0.5) + 4, kuerze(k, maxK - 10), {anker: "end", fill: "#2b3640"}); });
    const gh = slotH - 14, bh = gh / R.length;
    R.forEach((r, j) => r.werte.forEach((v, i) => {
      if (v == null) return;
      const yy = mo + slotH * i + 7 + j * bh, xa = x(v);
      svg += `<rect class="dg-balken" data-wert="${v}" data-reihe="${j}" x="${sauber(Math.min(xa, xn))}" y="${sauber(yy + (R.length > 1 ? 1 : 0))}" width="${sauber(Math.abs(xa - xn))}" height="${sauber(bh - (R.length > 1 ? 2 : 0))}" fill="${FARBEN[j % FARBEN.length]}"/>`;
      svg += T(v >= 0 ? xa + 5 : xa - 5, yy + bh / 2 + 4, zahl(v), {px: 11, anker: v >= 0 ? "start" : "end"});
    }));
    svg += `<line x1="${ml}" y1="${mo}" x2="${ml}" y2="${mo + plotH}" stroke="${ACHSE}"/>`;
    const xt = cfg.achseX || (e ? e : "");
    if (xt) svg += T(ml + pw / 2, H - 6, xt, {anker: "middle", fill: "#4a5662", fett: true});
    if (cfg.achseY) svg += T(14, mo + plotH / 2, cfg.achseY, {anker: "middle", dreh: -90, fill: "#4a5662", fett: true});
  }
  // Legende unter das Bild
  if (zeigeLeg) {
    const l2 = legende(R.map((r, i) => ({text: r.name, farbe: FARBEN[i % FARBEN.length], linie: typ === "linie", nr: i})), W, H, true);
    svg += l2.svg; H += l2.h + 4;
  }
  return {H: Math.ceil(H + 4), svg: titel + svg};
}

function beschreibung(cfg) {
  const typ = TYPEN[cfg.typ] || "Diagramm", K = cfg.kategorien || [], R = cfg.reihen || [];
  const teile = K.slice(0, 12).map((k, i) => k + " " + R.map(r => r.werte[i] == null ? "–" : zahl(r.werte[i]) + (cfg.einheit ? " " + cfg.einheit : "")).join(" / "));
  return typ + (cfg.titel ? ": " + cfg.titel : "") + ". " + (R.length ? "Reihen: " + R.map(r => r.name || "").join(", ") + ". " : "") + teile.join("; ") + (K.length > 12 ? " und weitere" : "") + ".";
}

function diagramm(el, cfg) {
  cfg = Object.assign({typ: "saeule", titel: "", kategorien: [], reihen: [], einheit: "", achseX: "", achseY: ""}, cfg || {});
  el.classList.add("dg9");
  let breite = 0;
  function render() {
    const W = Math.round(Math.min(Math.max(el.clientWidth || 560, 280), 760));
    breite = W;
    if (!cfg.kategorien.length || !cfg.reihen.length || !cfg.reihen[0].werte.length) { el.innerHTML = `<div class="dg-leer">${esc(cfg.leer || "Noch kein Diagramm – wähle Daten und einen Diagrammtyp.")}</div>`; return; }
    const z = zeichne(cfg, W);
    el.innerHTML = `<svg class="dg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${z.H}" width="100%" role="img" aria-label="${esc(beschreibung(cfg))}" data-typ="${esc(cfg.typ)}" style="font-family:inherit;display:block;max-width:${W}px;margin:0 auto"><title>${esc(cfg.titel || TYPEN[cfg.typ] || "Diagramm")}</title><rect width="${W}" height="${z.H}" fill="#fff"/>${z.svg}</svg>`;
  }
  // Neu zeichnen erst im nächsten Bild: Wer im Beobachter selbst die Höhe ändert, löst in Safari den Skriptfehler
  // „ResizeObserver loop completed with undelivered notifications“ aus (Diagramm in einer zuerst verborgenen Aufgabe).
  let wartet = 0;
  if (window.ResizeObserver) new ResizeObserver(() => {
    if (wartet || !el.clientWidth) return;
    wartet = requestAnimationFrame(() => { wartet = 0; if (Math.abs(Math.min(Math.max(el.clientWidth || 560, 280), 760) - breite) > 6) render(); });
  }).observe(el);
  render();
  return {setze(neu) { Object.assign(cfg, neu || {}); render(); }, svg: () => el.querySelector("svg"), el, zeichneNeu: render};
}

M.diagramm = diagramm;
M.diagrammTypen = TYPEN;
M.diagrammFarben = FARBEN;
})();
