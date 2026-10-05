/* Netz-Zeichnungen für Modul 2 (Netzwerke mit Filius): Geräte, Kabel und ein Datenpaket als eigene SVG-Zeichnung.
 * Einbinden nach praxis.js. Aussehen: einheit.css (.netzbild).
 *
 *   const n = Modul.netzBild(el, { b: 640, h: 280, alt: "Beschreibung für Vorleseprogramme",
 *     geraete: [{ id: "a", art: "notebook" | "pc" | "server" | "switch" | "router", x, y, name, ip }],
 *     kabel: [["a", "b"]] });
 *   n.paket("a")                              Paket steht bei Gerät a und wandert weich dorthin; n.paket(null) blendet es aus
 *   n.paket("a", { farbe: "#1b8a4b", text: "pong" })
 *   n.an("a", true)                           Gerät hervorheben (ohne zweiten Wert: nur dieses Gerät)
 *   n.kabel("a", "b", "an" | "aus" | "weg" | "")   Kabel grün (Daten) · rot gestrichelt (gestört) · unsichtbar · normal
 *   n.schild("a", "Text")                     Schild über dem Gerät ("" entfernt es)
 *   n.ip("a", "192.168.0.11")                 Adresse unter dem Namen ändern
 *   n.zeig("a", false)                        Gerät ausblenden oder wieder zeigen
 *   n.klick(id => { … })                      Geräte antippbar machen
 *   n.neu()                                   alles zurücksetzen (Paket, Hervorhebung, Schilder, Kabelfarben, Adressen)
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const esc = M.esc;

const BILD = {
  notebook: `<rect x="-25" y="-28" width="50" height="34" rx="4" fill="#15212b"/><rect x="-21" y="-24" width="42" height="26" rx="2" fill="#e7f3fc"/><path d="M-30 8h60l7 11h-74z" fill="#566674"/><rect x="-8" y="12" width="16" height="3" rx="1.5" fill="#c9d3dc"/>`,
  pc: `<rect x="-34" y="-28" width="44" height="32" rx="4" fill="#15212b"/><rect x="-30" y="-24" width="36" height="24" rx="2" fill="#e7f3fc"/><rect x="-15" y="4" width="6" height="9" fill="#566674"/><rect x="-24" y="13" width="24" height="5" rx="2" fill="#566674"/><rect x="16" y="-28" width="18" height="46" rx="3" fill="#566674"/><circle cx="25" cy="-19" r="3" fill="#9be3b4"/><rect x="20" y="-10" width="10" height="3" rx="1.5" fill="#c9d3dc"/>`,
  server: `<rect x="-20" y="-30" width="40" height="50" rx="6" fill="#3f55c4"/><rect x="-14" y="-24" width="28" height="10" rx="3" fill="#dbe8fb"/><rect x="-14" y="-10" width="28" height="10" rx="3" fill="#dbe8fb"/><rect x="-14" y="4" width="28" height="10" rx="3" fill="#dbe8fb"/><circle cx="8" cy="-19" r="2.5" fill="#1b8a4b"/><circle cx="8" cy="-5" r="2.5" fill="#1b8a4b"/><circle cx="8" cy="9" r="2.5" fill="#1b8a4b"/>`,
  switch: `<rect x="-36" y="-13" width="72" height="26" rx="7" fill="#15212b"/><g fill="#dbe8fb"><rect x="-29" y="-5" width="9" height="9" rx="1.5"/><rect x="-17" y="-5" width="9" height="9" rx="1.5"/><rect x="-5" y="-5" width="9" height="9" rx="1.5"/><rect x="7" y="-5" width="9" height="9" rx="1.5"/><rect x="19" y="-5" width="9" height="9" rx="1.5"/></g>`,
  router: `<rect x="-32" y="-16" width="64" height="32" rx="9" fill="#7a4dbf"/><g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M-18-5h30m-7-6l7 6l-7 6"/><path d="M18 7h-30m7-6l-7 6l7 6" transform="translate(0 -2)" opacity=".75"/></g>`
};
// Abstand der Schrift unter dem Bild
const FUSS = {notebook: 36, pc: 36, server: 38, switch: 32, router: 34};

function netzBild(el, cfg) {
  const b = cfg.b || 640, h = cfg.h || 280, G = {}, K = [];
  cfg.geraete.forEach(g => { G[g.id] = g; });
  const kabel = (cfg.kabel || []).map(([a, z], i) => { K.push([a, z]); return `<line class="nb-kabel" data-k="${i}" x1="${G[a].x}" y1="${G[a].y}" x2="${G[z].x}" y2="${G[z].y}"/>`; }).join("");
  const geraete = cfg.geraete.map(g => {
    const f = FUSS[g.art] || 36;
    return `<g class="nb-geraet" data-g="${esc(g.id)}" transform="translate(${g.x} ${g.y})">
      <circle class="nb-hof" r="46" fill="#fff3c4" stroke="#f1c84b" stroke-width="3"/>${BILD[g.art] || BILD.pc}
      <text class="nb-name" y="${f}" text-anchor="middle" font-size="14" font-weight="800" fill="#15212b">${esc(g.name || "")}</text>
      <text class="nb-ip" y="${f + 17}" text-anchor="middle" font-size="13" font-weight="600" fill="#3f55c4">${esc(g.ip || "")}</text>
      <g class="nb-schild" opacity="0"><rect x="-70" y="-64" width="140" height="24" rx="12" fill="#fff4dc" stroke="#f1d9a0"/><text y="-47" text-anchor="middle" font-size="13" font-weight="700" fill="#7a5200"></text></g></g>`;
  }).join("");
  el.classList.add("netz-rahmen");
  el.innerHTML = `<svg class="netzbild" viewBox="0 0 ${b} ${h}" role="img" aria-label="${esc(cfg.alt || "Zeichnung eines kleinen Netzwerks")}">
    ${kabel}${geraete}
    <g class="nb-paket" opacity="0"><rect x="-21" y="-14" width="42" height="28" rx="5" fill="#fff" stroke="#e0453a" stroke-width="3"/><path class="nb-klappe" d="M-21-12L0 3L21-12" fill="none" stroke="#e0453a" stroke-width="3"/><text y="-21" text-anchor="middle" font-size="13" font-weight="800" fill="#e0453a"></text></g></svg>`;
  const svg = el.querySelector("svg"), paketEl = svg.querySelector(".nb-paket"), q = id => svg.querySelector(`.nb-geraet[data-g="${id}"]`);
  const kabelEl = (a, z) => { const i = K.findIndex(k => (k[0] === a && k[1] === z) || (k[0] === z && k[1] === a)); return i < 0 ? null : svg.querySelector(`.nb-kabel[data-k="${i}"]`); };
  const api = {
    svg,
    paket(id, opt) {
      opt = opt || {};
      if (!id || !G[id]) { paketEl.style.opacity = 0; return api; }
      const farbe = opt.farbe || "#e0453a";
      paketEl.querySelectorAll("rect,path").forEach(x => x.setAttribute("stroke", farbe));
      const t = paketEl.querySelector("text"); t.textContent = opt.text || ""; t.setAttribute("fill", farbe);
      // Das Paket schwebt über dem Gerät, seine Aufschrift steht darüber (dx, dy verschieben es)
      paketEl.style.transform = `translate(${G[id].x + (opt.dx || 0)}px,${G[id].y - 60 + (opt.dy || 0)}px)`;
      paketEl.style.opacity = 1;
      return api;
    },
    an(id, an) {
      if (an === undefined) { svg.querySelectorAll(".nb-geraet").forEach(x => x.classList.toggle("an", x.dataset.g === id)); return api; }
      const g = q(id); if (g) g.classList.toggle("an", !!an);
      return api;
    },
    kabel(a, z, art) { const k = kabelEl(a, z); if (k) { k.classList.remove("an", "aus", "weg"); if (art) k.classList.add(art); } return api; },
    schild(id, text) { const g = q(id); if (g) { const s = g.querySelector(".nb-schild"); s.querySelector("text").textContent = text || ""; s.style.opacity = text ? 1 : 0; } return api; },
    ip(id, text) { const g = q(id); if (g) g.querySelector(".nb-ip").textContent = text || ""; return api; },
    // Gerät ein- oder ausblenden (z. B. ein Switch, der erst später dazukommt)
    zeig(id, an) { const g = q(id); if (g) g.style.display = an ? "" : "none"; return api; },
    // Geräte antippbar machen: fn(id) bei Klick oder Eingabetaste
    klick(fn) {
      svg.classList.add("nb-klickbar");
      svg.querySelectorAll(".nb-geraet").forEach(g => {
        g.setAttribute("tabindex", "0"); g.setAttribute("role", "button"); g.setAttribute("aria-label", G[g.dataset.g].name || g.dataset.g);
        g.addEventListener("click", () => fn(g.dataset.g));
        g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(g.dataset.g); } });
      });
      return api;
    },
    neu() {
      paketEl.style.opacity = 0;
      svg.querySelectorAll(".nb-geraet").forEach(x => { x.classList.remove("an"); x.querySelector(".nb-schild").style.opacity = 0; x.querySelector(".nb-ip").textContent = G[x.dataset.g].ip || ""; });
      svg.querySelectorAll(".nb-kabel").forEach(x => x.classList.remove("an", "aus", "weg"));
      return api;
    }
  };
  return api;
}

M.netzBild = netzBild;
})();
