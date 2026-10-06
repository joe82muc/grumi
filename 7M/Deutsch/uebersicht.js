/* Übersichtsseite Deutsch 7 (7M und 7R) – aufgebaut wie die Übersicht von Natur und Technik 7.
 * Themenbereiche und Module stehen in themen.js (window.D7). index.html bindet themen.js, ../../js/lernstand.js und
 * de-modul.js vor diesem Skript ein.
 *
 * - Freischaltung: Die Lehrkraft schaltet je Klasse Themenbereiche oder einzelne Module frei (Verwaltung → Klasse →
 *   Deutsch). Mit Code angemeldet zeigt die Seite den Stand der eigenen Klasse; ohne Code ist nichts offen.
 * - Lernfortschritt: je Modul, je Themenbereich und gesamt. Gezählt wird, was auf diesem Gerät gespeichert ist, und
 *   mit Code zusätzlich, was der Server vom Kind kennt (so stimmt der Stand auch auf einem anderen Gerät).
 *   Plus-Aufgaben in Grammatik und Rechtschreibung zählen für R-Klassen nicht mit (freiwillig).
 * - Extra-Module (themen.js: extra = Kennung ihres Moduls, z. B. „Zeitformen wiederholen“ zu Modul 2 der Grammatik):
 *   Sie stehen als Kasten unter ihrem Modul, sobald die Lehrkraft mindestens eines freigeschaltet hat, und zählen
 *   nicht zum Lernfortschritt.
 */
(function () {
  "use strict";
  const D7 = window.D7, THEMEN = D7.THEMEN;
  const {$, esc, session} = Modul;
  const app = $("#d7-app");
  // In der Vorschau für Lehrkräfte führen die Karten ebenfalls in die Vorschau
  const VORSCHAU = D7.VORSCHAU ? "?vorschau=1" : "";

  let STAND = null, HINWEIS = "", SERVER = null, trainerStufen = null, gesprungen = false;

  // Was der Server vom Kind kennt: { "d7-gr-01": { g: [Aufgaben], t: Anzahl }, … }
  function serverStand(m) { return (SERVER && SERVER["d7-" + m.id]) || null; }

  // Fortschritt eines Moduls: { solved, total, pct, einheit? } oder null (noch nie geöffnet)
  function fortschritt(m, a) {
    try {
      if (m.trainer) {
        const s = serverStand(m);
        const n = Math.max(trainerStufen || 0, s ? s.g.length : 0);
        if (trainerStufen === null && !s) return null;
        return {solved: Math.min(n, 4), total: 4, pct: Math.round(Math.min(n, 4) / 4 * 100), einheit: "Stufen bestanden"};
      }
      // Mit Code angemeldet: eigener Stand je Kind (siehe de-modul.js und js/grammatik.js)
      const kennung = a ? "~" + a.kennung + "~" : "", s = serverStand(m), ids = {};
      Object.keys(JSON.parse(localStorage.getItem(m.key + kennung) || "{}") || {}).forEach(id => { ids[id] = 1; });
      if (s) s.g.forEach(id => { ids[id] = 1; });
      let geloest = Object.keys(ids), total;
      if (m.basis) {
        // Grammatik und Rechtschreibung: Plus ist für R-Klassen freiwillig
        const r = a && /R$/.test(a.zug || "");
        total = m.basis + (r ? 0 : m.plus || 0);
        if (r) geloest = geloest.filter(id => !/-p\d+$/.test(id));
      } else {
        total = (s && s.t) || +localStorage.getItem(m.key + kennung + "-total") || +localStorage.getItem(m.key + "-total") || 0;
      }
      if (!total) return null;
      const solved = Math.min(geloest.length, total);
      return {solved, total, pct: Math.round(solved / total * 100)};
    } catch (_) { return null; }
  }
  // nicht begonnen · begonnen · teilweise abgeschlossen · abgeschlossen
  function zustand(p) {
    if (!p || !p.solved) return ["neu", "nicht begonnen"];
    if (p.pct >= 100) return ["fertig", "abgeschlossen"];
    return p.pct >= 50 ? ["teil", "teilweise abgeschlossen"] : ["begonnen", "begonnen"];
  }
  function balken(p) {
    return p && p.solved ? `<div class="prog"><div class="bar"><div style="width:${p.pct}%"></div></div><span>${p.einheit ? `🎓 ${p.solved} / ${p.total} ${p.einheit}` : `⭐ ${p.solved} / ${p.total}`}</span></div>` : "";
  }
  function weiter(z, p) { return (z[0] === "fertig" ? "Wiederholen" : p && p.solved ? "Weiterlernen" : "Starten") + " →"; }

  // Karte eines Moduls: Argumentieren und Grammatik als Zeile, Rechtschreibung als Kachel mit Beispiel
  function modulKarte(m, i, thema, a) {
    const offen = D7.offen(m, thema, STAND), kachel = thema.id === "rechtschreibung";
    const p = offen ? fortschritt(m, a) : null, z = zustand(p);
    const marken = (m.tab ? `<span class="tab ${m.grund ? "grund" : ""}">${esc(m.tab)}</span>` : "") + (m.basis && !kachel ? '<span class="plus">Basis + Plus</span>' : "");
    if (kachel) {
      const kopf = `<span class="kopf"><span class="ic" aria-hidden="true">${offen ? m.icon : "🔒"}</span><span><span class="nr">Thema ${i + 1}</span><h3>${esc(m.titel)}</h3></span></span>`;
      if (!offen) return `<article class="skarte zu" data-modul="${esc(m.id)}">${kopf}<div class="mod-status"><span class="zu">noch nicht freigeschaltet</span></div></article>`;
      return `<a class="skarte ${z[0]}" data-modul="${esc(m.id)}" href="${m.href}${VORSCHAU}">${kopf}<p class="bsp">${m.bsp}</p>
        <div class="mod-status"><span class="${z[0]}">${z[1]}</span></div>${balken(p)}</a>`;
    }
    const art = m.grund ? " grund" : thema.id === "grammatik" ? " gr" : "";
    if (!offen) {
      return `<article class="mod zu${art}" data-modul="${esc(m.id)}"><div class="mod-nr">🔒</div><div>
        <div class="mod-status">${marken}<span class="zu">noch nicht freigeschaltet</span></div><h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p></div></article>`;
    }
    return `<a class="mod${art} ${z[0]}" data-modul="${esc(m.id)}" href="${m.href}${VORSCHAU}"><div class="mod-nr">${z[0] === "fertig" ? "✓" : i + 1}</div><div>
      <div class="mod-status">${marken}<span class="${z[0]}">${z[1]}</span></div>
      <h3>${esc(m.titel)}</h3><p>${esc(m.text)}</p>
      ${m.tags ? `<div class="tags">${m.tags.map(t => `<span class="${t.includes("KI") ? "ki" : ""}">${esc(t)}</span>`).join("")}</div>` : ""}
      ${balken(p)}</div><div class="mod-go">${weiter(z, p)}</div></a>`;
  }

  // Die Module eines Themenbereichs ohne die Extra-Module
  const haupt = thema => thema.module.filter(m => !m.extra);

  // Kasten mit den Extra-Modulen eines Moduls – nur die, die für die Klasse offen sind
  function extraKasten(m, thema, a) {
    const offene = thema.module.filter(x => x.extra === m.id && D7.offen(x, thema, STAND));
    if (!offene.length) return "";
    return `<div class="extras" data-extras="${esc(m.id)}"><div class="extras-kopf"><b>🔁 ${esc(m.extraFrage || "Noch unsicher?")}</b>${m.extraText ? `<span>${esc(m.extraText)}</span>` : ""}</div>
      <div class="extras-liste">${offene.map(x => {
        const p = fortschritt(x, a), z = zustand(p);
        return `<a class="extra ${z[0]}" data-modul="${esc(x.id)}" href="${x.href}${VORSCHAU}"><b>${z[0] === "fertig" ? "✓ " : ""}${esc(x.titel)}</b><small>${p && p.solved ? `⭐ ${p.solved} / ${p.total}` : esc(x.text)}</small></a>`;
      }).join("")}</div></div>`;
  }

  // Fortschritt eines Themenbereichs: nur Module, die für die Klasse offen sind (Extra-Module zählen nicht mit)
  function themaStand(thema, a) {
    const offen = haupt(thema).filter(m => D7.offen(m, thema, STAND));
    const ps = offen.map(m => fortschritt(m, a));
    const pct = offen.length ? Math.round(ps.reduce((s, p) => s + (p ? p.pct : 0), 0) / offen.length) : 0;
    return {offen: offen.length, fertig: ps.filter(p => p && p.pct >= 100).length, pct};
  }

  function zeichnen() {
    const a = Modul.codeSitzung();
    const staende = THEMEN.map(t => themaStand(t, a));
    const offenGesamt = staende.reduce((s, x) => s + x.offen, 0), fertigGesamt = staende.reduce((s, x) => s + x.fertig, 0);
    const pctGesamt = offenGesamt ? Math.round(THEMEN.reduce((s, t, i) => s + staende[i].pct * staende[i].offen, 0) / offenGesamt) : 0;
    const leer = !offenGesamt && !HINWEIS
      ? (a ? (STAND ? "Für deine Klasse ist hier noch nichts freigeschaltet. Deine Lehrkraft schaltet die Module frei, wenn ihr im Unterricht so weit seid." : "")
           : "Ohne Code ist hier noch nichts offen. Melde dich oben mit deinem Code an – dann siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat.")
      : "";

    app.innerHTML = `
    <section class="gesamt" aria-label="Dein Lernfortschritt">
      <div class="gesamt-kopf"><div><div class="eyebrow">Deutsch 7 Lernfortschritt</div><div class="gesamt-zahl">${pctGesamt} %</div></div>
        <p>${offenGesamt ? `${fertigGesamt} von ${offenGesamt} Modulen abgeschlossen` : "Noch kein Modul freigeschaltet"}${a || !offenGesamt ? "" : " · auf diesem Gerät"}</p></div>
      <div class="bar gross"><div style="width:${pctGesamt}%"></div></div>
      <div class="gesamt-themen">${THEMEN.map((t, i) => staende[i].offen
        ? `<a href="#${t.id}"><span>${t.icon} ${esc(t.kurz)}</span><span class="bar"><span style="width:${staende[i].pct}%"></span></span><b>${staende[i].pct} %</b></a>`
        : `<a href="#${t.id}" class="zu"><span>${t.icon} ${esc(t.kurz)}</span><span class="bar"></span><b>🔒</b></a>`).join("")}</div>
      ${D7.VORSCHAU ? '<p class="hinweis vorschau">👁 Vorschau für Lehrkräfte: Hier sind alle Module sichtbar. Was eine Klasse sieht, stellst du in der Verwaltung ein (Klasse → Deutsch).</p>' : ""}
      ${HINWEIS ? `<p class="hinweis">${esc(HINWEIS)}</p>` : ""}${leer ? `<p class="hinweis">${esc(leer)}</p>` : ""}
    </section>
    ${THEMEN.map((t, i) => {
      const s = staende[i];
      const status = s.offen ? `<span class="ok">${s.fertig} von ${s.offen} Modulen abgeschlossen</span>` : '<span class="zu">🔒 noch nicht freigeschaltet</span>';
      return `<section class="thema${s.offen ? "" : " gesperrt"}" id="${t.id}" aria-labelledby="t${i + 1}">
      <div class="thema-head"><span class="thema-icon" aria-hidden="true">${t.icon}</span>
        <div><div class="eyebrow">Themenbereich ${t.nr}</div><h2 id="t${i + 1}">${esc(t.titel)}</h2><p>${esc(t.text)}</p>
        <div class="mod-status thema-status">${status}</div></div></div>
      <div class="${t.id === "rechtschreibung" ? "karten" : "mods"}">${haupt(t).map((m, k) => modulKarte(m, k, t, a) + extraKasten(m, t, a)).join("")}</div>
    </section>`; }).join("")}`;

    // Link von außen auf einen Themenbereich (…#grammatik): Die Abschnitte entstehen erst hier
    if (!gesprungen && location.hash.length > 1) {
      const ziel = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (ziel && app.contains(ziel)) { gesprungen = true; ziel.scrollIntoView(); }
    }
  }

  function start() {
    const st = session.student, a = Modul.codeSitzung();
    $("#start").innerHTML = st
      ? (st.code
        ? `<span class="ic" aria-hidden="true">👋</span><div><strong>Hallo!</strong><span>Du bist mit Code ${esc(st.code)} (Klasse ${esc(st.className)}) angemeldet. Du siehst, was deine Lehrkraft für deine Klasse freigeschaltet hat.</span></div><button class="btn ghost small" id="out" type="button">Abmelden</button>`
        : `<span class="ic" aria-hidden="true">👋</span><div><strong>Hallo ${esc(st.firstName)}!</strong><span>Du bist als ${esc(st.firstName)} ${esc(st.lastName)} (${esc(st.className)}) angemeldet. Mit deinem Code siehst du, was für deine Klasse freigeschaltet ist.</span></div><button class="btn ghost small" id="out" type="button">Abmelden</button>`)
      : a
        ? `<span class="ic" aria-hidden="true">👋</span><div><strong>Hallo!</strong><span>Du bist mit Code ${esc(a.code)} (Klasse ${esc(a.klasse)}) angemeldet. Du siehst, was deine Lehrkraft für deine Klasse freigeschaltet hat.</span></div><button class="btn ghost small" id="out" type="button">Abmelden</button>`
        : `<span class="ic" aria-hidden="true">✍️</span><div><strong>Dein Training starten</strong><span>Gib einmal deinen Code ein – dann siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat, und dein Lernstand bleibt in allen Modulen zusammen.</span></div><button class="btn light" id="in" type="button">➜ Training starten</button>`;
    const out = $("#out"), inn = $("#in");
    if (out) out.addEventListener("click", () => Modul.abmelden());
    if (inn) inn.addEventListener("click", () => Modul.openLogin());
    ladeTrainer();
  }
  async function ladeTrainer() {
    if (!session.token) return;
    try {
      const r = await fetch(Modul.API_BASE + "/api/de7-argument/progress", {headers: {authorization: "Bearer " + session.token}});
      if (!r.ok) return;
      const d = await r.json();
      trainerStufen = Object.values((d.progress && d.progress.stages) || {}).filter(s => s.passed).length;
      zeichnen();
    } catch (_) {}
  }

  // Stand der Freischaltung holen (erst vom Gerät, dann vom Server), dazu den Lernstand des Kindes vom Server
  function laden() {
    const a = Modul.codeSitzung();
    STAND = null; HINWEIS = ""; SERVER = null;
    zeichnen();
    D7.freigabe(a, stand => { STAND = stand; HINWEIS = ""; zeichnen(); }, text => { if (text) { HINWEIS = text; zeichnen(); } });
    if (!a) return;
    fetch(D7.API + "/api/nt9/fortschritt/anmelden", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({code: a.code})})
      .then(r => r.json()).then(d => { if (d && d.ok && d.fortschritt) { SERVER = d.fortschritt; zeichnen(); } }).catch(() => {});
  }

  document.addEventListener("de7-login", start);
  start();
  laden();
  // Mit Code schon angemeldet (z. B. aus Englisch)? Dann gilt die Anmeldung auch hier.
  Modul.mitCodeStarten();
  // Zurück aus einem Modul (auch über den Zurück-Knopf): Fortschritt neu lesen
  window.addEventListener("pageshow", e => { if (e.persisted) laden(); });
})();
