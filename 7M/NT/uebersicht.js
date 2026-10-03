/* Übersichtsseite Natur und Technik 7M / 7R
 * Beide Klassen nutzen dieselben Lernmodule aus 7M/NT.
 * Die Seite setzt <body data-klasse="7M|7R" data-base="Pfad zu 7M/NT/" data-root="Pfad zur Startseite">.
 */
(function () {
  "use strict";

  const THEMEN = [
    {
      nr: "01", titel: "Luft", icon: "🌬️",
      text: "Unsichtbar, aber lebenswichtig: was Luft kann, woraus sie besteht, wie wir Wind nutzen und warum Feuer Luft braucht.",
      module: [
        {titel: "Luft – unsichtbar, aber lebenswichtig", href: "luft-modul.html", key: "grumi-nt7-luft-modul-v1",
         text: "Luft zum Leben, bewegte Luft, Luft und Feuer, Zusammensetzung, Eigenschaften der Luft, chemische Symbole und Formeln.",
         tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"]},
        {titel: "Windkraft: Strom aus bewegter Luft", href: "windkraft-strom.html", key: "grumi-nt7-windkraft-strom-v1",
         text: "Windmühle und Windkraftanlage, Aufbau mit Rotorblatt, Getriebe, Generator und Bremse, vom Wind zum Strom, warum Windräder immer größer werden.",
         tags: ["Animationen", "Probenstoff", "KI-Rückmeldung"]},
        {titel: "Windkraft – pro und contra", href: "windkraft-pro-contra.html", key: "grumi-nt7-windkraft-procontra-v1",
         text: "Argumente für und gegen Windräder sortieren, Standort-Planer für einen Kompromiss und ein Wortgefecht gegen die KI.",
         tags: ["Standort-Planer", "Probenstoff", "Duell gegen die KI"]},
        {titel: "Luft und Verbrennung", href: "luft-verbrennung.html", key: "grumi-nt7-luft-verbrennung-v1",
         text: "Brennbare Stoffe, das Feuerdreieck, die Zündtemperatur, warum Feuer Sauerstoff braucht und warum fein zerteilte Stoffe besser brennen.",
         tags: ["Versuche", "Probenstoff", "KI-Rückmeldung"]},
        {titel: "Achtung, explosiv!", href: "achtung-explosiv.html", key: "grumi-nt7-achtung-explosiv-v1",
         text: "Mehlstaub-Explosion, explosive Gasgemische, Druckwelle, kontrollierte Explosionen im Automotor und Vorsicht beim Grillen.",
         tags: ["Lehrerversuche", "Probenstoff", "KI-Rückmeldung"]},
        {titel: "Brände verhindern und löschen",
         text: "Brandschutz, richtiges Verhalten im Notfall und Löschmethoden."}
      ],
      extras: ["Kohlenstoffdioxid – nützlich und gefährlich", "Der Luftdruck", "Die Magdeburger Halbkugeln"]
    },
    {nr: "02", titel: "Atome und Materie", icon: "⚛️", text: "Atommodelle, Teilchen und Stoffe."},
    {nr: "03", titel: "Tiere", icon: "🦎", text: "Wirbeltierklassen und ihre Lebensräume."},
    {nr: "04", titel: "Mensch und Gesundheit", icon: "🩺", text: "Atmung, Blut und Blutkreislauf."},
    {nr: "05", titel: "Elektrizität", icon: "⚡", text: "Stromkreis, Spannung, Stromstärke und sicherer Umgang mit Strom."}
  ];

  const body = document.body;
  const klasse = body.dataset.klasse || "7M";
  const base = body.dataset.base || "";
  const root = body.dataset.root || "../../";
  const andere = klasse === "7M" ? "7R" : "7M";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);

  // Einmal anmelden: Im selben Browser-Tab gilt die Code-Anmeldung weiter, bis das Kind sich abmeldet, den Tab
  // schließt oder länger als 10 Minuten nichts tippt oder anklickt. Ein neuer Tab fragt wieder nach dem Code.
  // Derselbe Block steht in allen Skripten, die die Anmeldung lesen (js/lernstand.js, js/klasse.js, NT, Deutsch …).
  function grumiTab() {
    if (window.GrumiTab) return window.GrumiTab;
    var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
    function lies() { try { return JSON.parse(sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
    function merken(code) { try { sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
    function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
    ["pointerdown", "keydown"].forEach(function (n) { document.addEventListener(n, taetig, true); });
    return (window.GrumiTab = {
      merken: merken,
      gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
      ende: function () { try { sessionStorage.removeItem(K); } catch (_e) {} }
    });
  }
  function anmeldungLadung() {
    var p = window.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (window.__grumiLadung = window.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === anmeldungLadung()) { grumiTab().merken(s.code); return s; }
    if ((s.frisch && s.frisch === location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
      delete s.frisch; s.ladung = anmeldungLadung();
      try { localStorage.setItem("grumi-code-anmeldung", JSON.stringify(s)); } catch (_e) {}
      grumiTab().merken(s.code); return s;
    }
    return null;
  }
  function fortschritt(key) {
    try {
      // Mit Code angemeldet: eigener Stand je Kind (siehe modul-basis.js)
      let kennung = "";
      try { const a = anmeldungGueltig(JSON.parse(localStorage.getItem("grumi-code-anmeldung") || "null")); if (a && a.code && a.kennung) kennung = "~" + a.kennung + "~"; } catch (_) {}
      const solved = Object.keys(JSON.parse(localStorage.getItem(key + kennung) || "{}") || {}).length;
      const total = +localStorage.getItem(key + kennung + "-total") || +localStorage.getItem(key + "-total") || 0;
      return total ? {solved: Math.min(solved, total), total} : null;
    } catch (_) { return null; }
  }

  function modulKarte(m, i) {
    const nr = String(i + 1);
    if (!m.href) {
      return `<article class="mod planned"><div class="mod-nr">${nr}</div><div class="mod-body">
        <div class="mod-status">in Vorbereitung</div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p></div></article>`;
    }
    const p = m.key ? fortschritt(m.key) : null;
    const pct = p ? Math.round(p.solved / p.total * 100) : 0;
    return `<a class="mod ready" href="${base}${m.href}"><div class="mod-nr">${nr}</div><div class="mod-body">
      <div class="mod-status ok">verfügbar</div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p>
      <div class="tags">${(m.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p ? `<div class="prog"><div class="bar"><div style="width:${pct}%"></div></div><span>⭐ ${p.solved} / ${p.total}</span></div>` : ""}
      </div><div class="mod-go">${p && p.solved ? "Weiterlernen" : "Starten"} →</div></a>`;
  }

  const luft = THEMEN[0];
  document.getElementById("app").innerHTML = `
  <header class="hero">
    <div class="wrap">
      <nav class="navlinks" aria-label="Navigation">
        <a href="${root}index.html">🏠 Startseite Lernplattform</a>
        <a href="${root}index.html#lernen">🏫 Alle Klassen &amp; Fächer</a>
        <a href="${root}${andere}/NT/index.html">${andere === "7M" ? "📘" : "📗"} Übersicht NT ${andere}</a>
      </nav>
      <div class="eyebrow">Klasse ${klasse} · Natur und Technik</div>
      <h1>Natur und Technik ${klasse}</h1>
      <p>Hier findest du alle Lernmodule. Jedes Modul enthält Texte, Animationen, Versuche zum Ausprobieren und Übungen, die dich auf die Probe vorbereiten. Dein Fortschritt wird auf diesem Gerät gespeichert.</p>
    </div>
  </header>
  <main class="wrap">
    <section class="thema">
      <div class="thema-head"><span class="thema-icon">${luft.icon}</span><div><div class="eyebrow dark">Themenbereich ${luft.nr}</div><h2>${luft.titel}</h2><p>${esc(luft.text)}</p></div></div>
      <div class="mods">${luft.module.map(modulKarte).join("")}</div>
      <div class="extras"><strong>Zusatzthemen (in Vorbereitung):</strong> ${luft.extras.map(esc).join(" · ")}</div>
      ${klasse === "7M" ? `<a class="probe" href="${base}probe.html"><span>📝</span><div><strong>Proben zum Thema Luft</strong><br>Die Lehrkraft schaltet die Probe frei. Dann kannst du sie hier bearbeiten.</div><span class="mod-go">Öffnen →</span></a>` : ""}
    </section>
    <section>
      <h2 class="weitere-h">Weitere Themenbereiche</h2>
      <div class="weitere">${THEMEN.slice(1).map(t => `<div class="weiter"><span class="thema-icon small">${t.icon}</span><div><div class="eyebrow dark">Themenbereich ${t.nr}</div><h3>${esc(t.titel)}</h3><p>${esc(t.text)}</p><div class="mod-status">in Vorbereitung</div></div></div>`).join("")}</div>
    </section>
  </main>
  <footer class="wrap">GRUMI · Natur und Technik ${klasse}</footer>`;
})();
