/* Übersichtsseite Informatik 7M / 7R (nach dem Vorbild von 7M/NT/uebersicht.js)
 * Beide Klassen nutzen dieselben Einheiten aus 7M/Informatik. Module und Einheiten stehen in themen.js.
 * Informatik 8 (8M/Informatik, 8R/Informatik) nutzt dieses Skript mit: Die Kursliste (window.GRUMI_KURS = INF8) nennt
 * STUFE ("8"), PFAD ("/api/inf8"), ALT (Verweis auf die bisherigen Stunden) und INTRO (Einleitung im Kopf).
 * Die Seite setzt <body data-klasse="7M|7R" data-base="Pfad zu 7M/Informatik/" data-root="Pfad zur Startseite">
 * und bindet themen.js vor diesem Skript ein.
 *
 * - Freischaltung: Die Lehrkraft schaltet je Klasse Module oder einzelne Einheiten frei (Verwaltung → Klasse →
 *   Informatik). Mit Code angemeldet zeigt die Seite den Stand der eigenen Klasse; ohne Code ist alles gesperrt.
 * - Lernfortschritt: aus dem Speicher des Geräts (je Kind mit Code), je Einheit, je Modul und gesamt.
 * - Proben: je Modul eine, in einer Fassung für 7R und für 7M; ob sie offen sind, sagt der Server (/api/inf7/list).
 */
(function () {
  "use strict";

  const KURS = window.GRUMI_KURS || window.INF7;
  const ST = KURS.STUFE || "7", PFAD = KURS.PFAD || "/api/inf7";
  // ALT: null = es gibt keine bisherigen Stunden mehr (Informatik 8 seit dem 06.10.2026)
  const ALT = KURS.ALT === null ? null : (KURS.ALT || {href: "7/Informatik_7/index.html", text: "Bisherige Stunden"});
  const INTRO = KURS.INTRO || "Fünf Module mit kurzen Einheiten: ausprobieren, verstehen, kurz sichern. Bei Filius, GIMP, Inkscape und Scratch arbeitest du am Windows-PC. Deine Lehrkraft schaltet die Einheiten nach und nach frei.";
  const THEMEN = KURS.THEMEN;
  const body = document.body;
  const klasse = body.dataset.klasse || ST + "M";
  const base = body.dataset.base || "";
  const root = body.dataset.root || "../../";
  const andereVon = k => k === ST + "M" ? ST + "R" : ST + "M";
  const TITEL = document.title;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[c]);
  const SITZUNG = "grumi-code-anmeldung";

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
  // Gültige Anmeldung eines Kindes dieser Jahrgangsstufe (andere Stufen sehen die Seite wie Gäste).
  // Lehrercode (Klasse „Lehrkraft“): gilt auf jeder Übersicht und zählt dort zum Zug der Seite; alles ist offen.
  function anmeldung() {
    try {
      const a = anmeldungGueltig(JSON.parse(localStorage.getItem(SITZUNG) || "null"));
      if (a && a.klasse === "Lehrkraft") return Object.assign({}, a, {zug: klasse, lehrer: true});
      return a && new RegExp("^" + ST + "[MR]$").test(String(a.zug || "")) ? a : null;
    } catch (_) { return null; }
  }
  function zugVon(k) { const m = /^(\d+)/.exec(String(k || "")); return m ? m[1] + (/M$/.test(k) ? "M" : "R") : ""; }
  function anmelden(code) {
    return fetch(KURS.API + "/api/nt9/fortschritt/anmelden", {
      method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({code})
    }).then(r => r.json().then(d => { d.status = r.status; return d; })).then(d => {
      if (d.status === 200 && d.ok && d.code) {
        const s = {name: "Code " + d.code, kennung: "code-" + d.code, klasse: d.klasse, zug: d.zug || zugVon(d.klasse), code: d.code, seit: Date.now(), ladung: anmeldungLadung()};
        try { localStorage.setItem(SITZUNG, JSON.stringify(s)); } catch (_e) {}
        grumiTab().merken(s.code);
        return s;
      }
      throw new Error(d.error || (d.status === 429 ? "Zu viele falsche Codes. Warte ein paar Minuten." : "Das hat nicht geklappt. Versuche es noch einmal."));
    });
  }

  // Fortschritt einer Einheit auf diesem Gerät: { solved, total, pct } oder null (noch nie geöffnet)
  function fortschritt(key, a) {
    try {
      // Mit Code angemeldet: eigener Stand je Kind (siehe modul-basis.js)
      const kennung = a ? "~" + a.kennung + "~" : "";
      const stand = JSON.parse(localStorage.getItem(key + kennung + "-stand") || "null");
      if (stand && stand.t) return {solved: Math.min(stand.g, stand.t), total: stand.t, pct: Math.round(Math.min(stand.g, stand.t) / stand.t * 100)};
      const solved = Object.keys(JSON.parse(localStorage.getItem(key + kennung) || "{}") || {}).length;
      const total = +localStorage.getItem(key + kennung + "-total") || +localStorage.getItem(key + "-total") || 0;
      return total ? {solved: Math.min(solved, total), total, pct: Math.round(Math.min(solved, total) / total * 100)} : null;
    } catch (_) { return null; }
  }
  // nicht begonnen · begonnen · teilweise abgeschlossen · abgeschlossen
  function zustand(p) {
    if (!p || !p.solved) return ["neu", "nicht begonnen"];
    if (p.pct >= 100) return ["fertig", "abgeschlossen"];
    return p.pct >= 50 ? ["teil", "teilweise abgeschlossen"] : ["begonnen", "begonnen"];
  }

  const app = document.getElementById("app");
  let STAND = null, QUELLE = "gast", HINWEIS = "", PROBEN = null;

  const pcTag = m => m.pc ? `<span class="pc">🖥 Windows-PC mit ${esc(m.pc)}</span>` : "";

  function modulKarte(m, i, thema, a) {
    const nr = String(i + 1);
    if (!m.href) {
      return `<article class="mod planned"><div class="mod-nr">${nr}</div><div class="mod-body">
        <div class="mod-status">in Vorbereitung</div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p><div class="tags">${pcTag(m)}</div></div></article>`;
    }
    if (!KURS.offen(m, thema, STAND)) {
      return `<article class="mod zu" data-modul="${esc(m.id)}"><div class="mod-nr">🔒</div><div class="mod-body">
        <div class="mod-status zu">noch nicht freigeschaltet</div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p></div></article>`;
    }
    const p = fortschritt(m.key, a), z = zustand(p);
    return `<a class="mod ready ${z[0]}" data-modul="${esc(m.id)}" href="${base}${m.href}"><div class="mod-nr">${z[0] === "fertig" ? "✓" : nr}</div><div class="mod-body">
      <div class="mod-status ${z[0]}">${z[1]}</div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p>
      <div class="tags">${pcTag(m)}${(m.tags || []).filter(t => t !== m.pc).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p ? `<div class="prog"><div class="bar"><div style="width:${p.pct}%"></div></div><span>⭐ ${p.solved} / ${p.total}</span></div>` : ""}
      </div><div class="mod-go">${z[0] === "fertig" ? "Wiederholen" : p && p.solved ? "Weiterlernen" : "Starten"} →</div></a>`;
  }

  // Fortschritt eines Moduls: nur fertige Einheiten, die für die Klasse offen sind
  function themaStand(thema, a) {
    const offen = thema.module.filter(m => m.href && KURS.offen(m, thema, STAND));
    const ps = offen.map(m => fortschritt(m.key, a));
    const pct = offen.length ? Math.round(ps.reduce((s, p) => s + (p ? p.pct : 0), 0) / offen.length) : 0;
    return {offen: offen.length, fertig: ps.filter(p => p && p.pct >= 100).length, pct, gebaut: thema.module.filter(m => m.href).length};
  }

  // Probe des Moduls für den Zug des Kindes (bzw. der Seite)
  function probenKachel(thema, zug) {
    const ids = (thema.proben || []).map(p => p[zug]).filter(Boolean);
    if (!ids.length) return "";
    // Solange der Server nicht geantwortet hat, steht die Kachel neutral da; danach nur Proben, die es wirklich gibt
    const da = PROBEN ? PROBEN.filter(t => ids.includes(t.id)) : null;
    if (da && !da.length) return `<p class="extras">📝 Die Probe zu diesem Modul ist in Vorbereitung.</p>`;
    const offen = da ? da.filter(t => t.unlocked) : [];
    return `<a class="probe${offen.length ? " offen" : ""}" href="${base}probe.html?thema=${encodeURIComponent(thema.id)}&zug=${zug}"><span>📝</span><div><strong>${
      offen.length ? "Jetzt offen: " + esc(offen.map(t => t.title).join(" · ")) : "Probe zum Modul " + esc(thema.titel)
    }</strong><br>${offen.length ? "Deine Lehrkraft hat die Probe freigeschaltet." : "Etwa 15 bis 20 Minuten. Die Lehrkraft schaltet die Probe frei – dann kannst du sie hier bearbeiten."}</div><span class="mod-go">Öffnen →</span></a>`;
  }

  function zeichnen() {
    // Tippt das Kind gerade seinen Code, bleibt die Eingabe beim Neuzeichnen erhalten
    const altFeld = document.getElementById("codeFeld"), getippt = altFeld ? altFeld.value : "", imFeld = altFeld && document.activeElement === altFeld;
    const a = anmeldung();
    // Angemeldet zeigt die Seite den Zug des Kindes – auch wenn es die Übersicht des anderen Zugs geöffnet hat
    // (auf der Startseite die falsche Kachel angetippt). Einheiten und Proben richten sich ohnehin nach dem Code.
    const kl = a ? a.zug : klasse, andere = andereVon(kl);
    document.title = TITEL.split(klasse).join(kl);
    const zug = kl.slice(1);
    try { sessionStorage.setItem("grumi-i" + ST + "-zug", zug); } catch (_e) {}
    const staende = THEMEN.map(t => themaStand(t, a));
    const offenGesamt = staende.reduce((s, x) => s + x.offen, 0), fertigGesamt = staende.reduce((s, x) => s + x.fertig, 0);
    const pctGesamt = offenGesamt ? Math.round(THEMEN.reduce((s, t, i) => s + staende[i].pct * staende[i].offen, 0) / offenGesamt) : 0;

    // Solange nichts offen ist, arbeiten die Klassen mit den bisherigen Stunden weiter – der Weg dorthin steht dabei.
    // (Angemeldet erst, wenn der Stand der Klasse bekannt ist – sonst blitzt der Hinweis beim Laden auf.)
    const alt = ALT ? `<a href="${root}${ALT.href}">📚 ${esc(ALT.text)}</a>` : "";
    const nochNichts = offenGesamt || (a && !STAND) ? "" : `<p class="hinweis bisher">${a
      ? (KURS.NOCH_NICHTS || "Für deine Klasse ist hier noch nichts freigeschaltet. Bis dahin arbeitest du mit den bisherigen Stunden weiter:")
      : (KURS.OHNE_CODE || "Ohne Code ist hier noch nichts offen. Melde dich oben mit deinem Code an. Die bisherigen Stunden findest du hier:")} ${alt}</p>`;

    const kopf = a
      ? `<div class="wer"><span>👤 ${a.lehrer ? "Lehrkraft · " + esc(a.name) : esc(a.name) + " · Klasse " + esc(a.klasse)}</span><button type="button" id="abmelden">Abmelden</button></div>`
      : `<form class="code" id="codeForm" novalidate><label for="codeFeld">Dein Code</label><input id="codeFeld" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" placeholder="···">
          <button type="submit">Anmelden</button><p id="codeFehler" role="alert"></p></form>`;

    app.innerHTML = `
  <header class="hero">
    <div class="wrap">
      <nav class="navlinks" aria-label="Navigation">
        <a href="${root}index.html">🏠 Startseite Lernplattform</a>
        <a href="${root}index.html#lernen">🏫 Alle Klassen &amp; Fächer</a>
        <a href="${root}${andere}/Informatik/index.html">${andere === ST + "M" ? "📘" : "📗"} Übersicht Informatik ${andere}</a>
        ${ALT ? `<a href="${root}${ALT.href}">📚 ${esc(ALT.text)}</a>` : ""}
      </nav>
      <div class="hero-grid">
        <div>
          <div class="eyebrow">Klasse ${kl} · Informatik</div>
          <h1>Informatik ${kl}</h1>
          <p>${esc(INTRO)}</p>
        </div>
        <div class="hero-box">${kopf}
          <p class="klein">${a && a.lehrer ? "Lehrercode: Alle Module und Einheiten sind offen – auch die, die für die Klassen noch gesperrt sind. Dein Lernstand wird nicht gemeldet." : a ? "Du siehst, was deine Lehrkraft für deine Klasse freigeschaltet hat." : "Mit deinem Code siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat. Ohne Code ist noch nichts offen."}</p>
        </div>
      </div>
    </div>
  </header>
  <main class="wrap">
    <section class="gesamt" aria-label="Dein Lernfortschritt">
      <div class="gesamt-kopf"><div><div class="eyebrow dark">Informatik ${ST} Gesamtfortschritt</div><div class="gesamt-zahl">${pctGesamt} %</div></div>
        <p>${offenGesamt ? `${fertigGesamt} von ${offenGesamt} Einheiten abgeschlossen` : "Noch keine Einheit freigeschaltet"}${a ? "" : " · auf diesem Gerät"}</p></div>
      <div class="bar gross"><div style="width:${pctGesamt}%"></div></div>
      <div class="gesamt-themen">${THEMEN.map((t, i) => staende[i].offen
        ? `<a href="#thema-${t.id}"><span>${t.icon} ${esc(t.kurz || t.titel)}</span><span class="bar"><span style="width:${staende[i].pct}%"></span></span><b>${staende[i].pct} %</b></a>`
        : `<a href="#thema-${t.id}" class="zu"><span>${t.icon} ${esc(t.kurz || t.titel)}</span><span class="bar"></span><b>🔒</b></a>`).join("")}</div>
      ${HINWEIS ? `<p class="hinweis">${esc(HINWEIS)}</p>` : ""}${nochNichts}
    </section>
    ${THEMEN.map((t, i) => {
      const s = staende[i], gebaut = s.gebaut;
      const status = !gebaut ? '<span class="mod-status">in Vorbereitung</span>' : s.offen ? `<span class="mod-status ok">${s.fertig} von ${s.offen} Einheiten abgeschlossen</span>` : '<span class="mod-status zu">🔒 noch nicht freigeschaltet</span>';
      return `<section class="thema${s.offen ? "" : " gesperrt"}" id="thema-${t.id}">
      <div class="thema-head"><span class="thema-icon">${t.icon}</span><div><div class="eyebrow dark">Modul ${parseInt(t.nr, 10)} · ${esc(t.zeit)}</div><h2>${esc(t.titel)}</h2><p>${esc(t.text)}</p>
        <div class="thema-status">${status}${t.pc ? ` <span class="mod-status pc">🖥 Praxis am Windows-PC mit ${esc(t.pc)}</span>` : ""}</div></div></div>
      <div class="mods">${t.module.map((m, k) => modulKarte(m, k, t, a)).join("")}</div>
      ${probenKachel(t, zug)}
    </section>`; }).join("")}
  </main>
  <footer class="wrap">GRUMI · Informatik ${kl} · Dein Fortschritt wird auf diesem Gerät gespeichert${a && !a.lehrer ? " und mit deinem Code an deine Lehrkraft gemeldet" : ""}.</footer>`;

    const form = document.getElementById("codeForm");
    if (form) {
      const feld = document.getElementById("codeFeld"), fehler = document.getElementById("codeFehler"), knopf = form.querySelector("button");
      if (getippt) feld.value = getippt;
      if (imFeld) feld.focus();
      feld.addEventListener("input", () => { const v = feld.value.replace(/\D/g, "").slice(0, 3); if (v !== feld.value) feld.value = v; fehler.textContent = ""; });
      form.addEventListener("submit", e => {
        e.preventDefault();
        const code = feld.value.replace(/\D/g, "");
        if (!/^\d{3}$/.test(code)) { fehler.textContent = "Dein Code hat genau 3 Ziffern."; feld.focus(); return; }
        knopf.disabled = true; knopf.textContent = "Einen Moment …";
        const langsam = setTimeout(() => { fehler.textContent = "Der Server wacht gerade auf – das kann bis zu einer Minute dauern."; }, 6000);
        anmelden(code).then(() => { clearTimeout(langsam); laden(); }).catch(x => { clearTimeout(langsam); fehler.textContent = x.message || "Keine Verbindung zum Server."; knopf.disabled = false; knopf.textContent = "Anmelden"; feld.select(); });
      });
    }
    const ab = document.getElementById("abmelden");
    if (ab) ab.addEventListener("click", () => { try { localStorage.removeItem(SITZUNG); } catch (_e) {} grumiTab().ende(); STAND = null; QUELLE = "gast"; HINWEIS = ""; zeichnen(); });
  }

  // Stand der Freischaltung holen (erst vom Gerät, dann vom Server) und neu zeichnen
  function laden() {
    const a = anmeldung();
    STAND = null; HINWEIS = "";
    zeichnen();
    KURS.freigabe(a, (stand, quelle) => { STAND = stand; QUELLE = quelle; HINWEIS = ""; zeichnen(); },
      text => { if (text) { HINWEIS = text; zeichnen(); } });
  }
  laden();
  // Welche Proben gibt es, welche sind offen? (öffentliche Liste, ohne Anmeldung)
  fetch(KURS.API + PFAD + "/list").then(r => r.json()).then(d => { if (d && d.ok && Array.isArray(d.tests)) { PROBEN = d.tests; zeichnen(); } }).catch(() => {});
  // Zurück aus einer Einheit (auch über den Zurück-Knopf): Fortschritt neu lesen
  window.addEventListener("pageshow", e => { if (e.persisted) zeichnen(); });
})();
