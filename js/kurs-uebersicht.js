/* Übersicht eines Kurses mit Kursliste (js/kursliste.js) – Englisch 7, 8R, 9R und 9M, dazu NT 9M und 9R.
 * Aussehen und Aufbau wie die Übersichten von NT 7 und Informatik (7M/NT/uebersicht.css), aber aufgeräumt:
 * Die Kinder sehen nur, was ihre Lehrkraft für ihre Klasse freigeschaltet hat – Seiten, Bereiche und Tests.
 *
 * Die Seite setzt <body data-root="Pfad zur Startseite"> und bindet vorher ein:
 *   js/kursliste.js, themen.js des Kurses, js/proben-module.js (Tests der Units)
 *
 * - Freischaltung: Verwaltung → Klasse → Fach. Englisch: Ohne Code ist nichts offen; oben steht das Feld für den Code.
 *   NT 9: Die Seiten sind von sich aus offen (offen: true in der Liste), auch ohne Code – die Lehrkraft sperrt je Klasse.
 * - Lernstand: vom Server (derselbe wie in js/lernstand.js), je Seite als Balken.
 * - Tests: Vokabel- und Grammatiktests erscheinen bei ihrer Unit, sobald die Lehrkraft sie freischaltet.
 * - Kürzel der Seiten (A1, B2 …) stehen nur in der Verwaltung, hier nirgends.
 */
(function () {
  "use strict";
  const K = window.GrumiKursliste, L = window.GRUMI_KURSLISTE;
  if (!K || !L) return;
  const body = document.body, root = body.dataset.root || "../../", esc = K.esc, THEMEN = L.THEMEN;
  const app = document.getElementById("app");
  const ART = { Wortschatz: "🔤", Grammatik: "🧩", Sprechen: "🗣️", Schreiben: "✍️", Mediation: "🔁", Bilder: "🖼️", Modul: "📘", Gruppenarbeit: "👥", Übung: "✏️" };
  let STAND = null, HINWEIS = "", PROBEN = null, SERVER = null;
  // Kurs, dessen Seiten von sich aus offen sind (NT 9): Auch ohne Code ist alles zu sehen, freigeschaltete Proben ebenso
  const VON_SICH_OFFEN = THEMEN.some(t => t.module.some(m => m.href && m.offen));

  // Gültige Anmeldung eines Kindes dieser Jahrgangsstufe (andere Stufen sehen die Seite wie Gäste).
  // Lehrercode (Klasse „Lehrkraft“): alles ist offen, der Lernstand wird nicht gemeldet.
  function anmeldung() {
    const a = K.anmeldung();
    if (!a) return null;
    if (a.klasse === "Lehrkraft") return Object.assign({}, a, { lehrer: true });
    return String(a.zug || "").slice(0, -1) === L.STUFE ? a : null;
  }
  // Ein Kind des anderen Zugs (9R auf der Seite der 9M) kommt gleich zu seiner eigenen Übersicht
  function zumEigenenZug(a) {
    if (!a || a.lehrer || !L.ANDERE || String(a.zug || "").slice(-1) !== L.ANDERE.zug) return false;
    window.location.replace(root + encodeURI(L.ANDERE.href));
    return true;
  }

  // Lernstand einer Seite: { solved, total, pct } oder null (noch nie geöffnet oder Seite ohne Lernstand)
  function fortschritt(m) {
    if (!m.ls || !SERVER) return null;
    let solved = 0, total = 0;
    Object.keys(SERVER).forEach(id => {
      if (id === m.ls || (m.ls.slice(-1) === "-" && id.indexOf(m.ls) === 0)) { solved += (SERVER[id].g || []).length; total += SERVER[id].t || 0; }
    });
    if (!total) return null;
    solved = Math.min(solved, total);
    return { solved, total, pct: Math.round(solved / total * 100) };
  }
  function zustand(p) {
    if (!p || !p.solved) return ["neu", "nicht begonnen"];
    if (p.pct >= 100) return ["fertig", "abgeschlossen"];
    return p.pct >= 50 ? ["teil", "teilweise abgeschlossen"] : ["begonnen", "begonnen"];
  }

  function modulKarte(m, thema) {
    if (!m.href || !L.offen(m, thema, STAND)) {
      return `<article class="mod zu" data-modul="${esc(m.id)}"><div class="mod-nr">🔒</div><div class="mod-body">
        <div class="mod-status zu">noch nicht freigeschaltet</div><h3>${esc(m.titel)}</h3><p>${esc(m.text || "")}</p></div></article>`;
    }
    const p = fortschritt(m), z = zustand(p), symbol = ART[m.art] || "📄";
    return `<a class="mod ready ${z[0]}" data-modul="${esc(m.id)}" href="${esc(encodeURI(m.href))}"><div class="mod-nr">${z[0] === "fertig" ? "✓" : symbol}</div><div class="mod-body">
      ${m.ls ? `<div class="mod-status ${z[0]}">${z[1]}</div>` : ""}<h3>${esc(m.titel)}</h3><p>${esc(m.text || "")}</p>
      <div class="tags">${m.art ? `<span>${esc(m.art)}</span>` : ""}</div>
      ${p ? `<div class="prog"><div class="bar"><div style="width:${p.pct}%"></div></div><span>⭐ ${p.solved} / ${p.total}</span></div>` : ""}
      </div><div class="mod-go">${z[0] === "fertig" ? "Wiederholen" : p && p.solved ? "Weiterlernen" : "Öffnen"} →</div></a>`;
  }

  // Stand eines Bereichs: nur Seiten, die für die Klasse offen sind
  function themaStand(thema) {
    const offen = thema.module.filter(m => m.href && L.offen(m, thema, STAND));
    const mitStand = offen.filter(m => m.ls), ps = mitStand.map(fortschritt);
    const pct = mitStand.length ? Math.round(ps.reduce((s, p) => s + (p ? p.pct : 0), 0) / mitStand.length) : 0;
    return { offen: offen.length, mitStand: mitStand.length, fertig: ps.filter(p => p && p.pct >= 100).length, pct };
  }

  // Offene Tests eines Bereichs für den Zug des Kindes: je Test eine Kachel
  function probenKacheln(thema, a) {
    if (!PROBEN || (!a && !VON_SICH_OFFEN)) return "";
    const zug = !a || a.lehrer ? "" : String(a.zug || "");
    return PROBEN.filter(p => p.offen && L.probeThemen(p.id).indexOf(thema.id) >= 0 && (!zug || p.klasse === zug || p.klasse === L.STUFE)).map(p =>
      `<a class="probe offen" data-probe="${esc(p.id)}" href="${esc(root + p.link)}"><span>📝</span><div><strong>Jetzt offen: ${esc(p.titel)}</strong><br>Deine Lehrkraft hat den Test freigeschaltet.</div><span class="mod-go">Öffnen →</span></a>`).join("");
  }

  // Übersichtlich bleiben: Gesperrtes und Bereiche, in denen für diese Klasse nichts offen ist, werden ausgeblendet.
  // Sie stehen weiter im Seitenaufbau (nur unsichtbar) – sobald die Lehrkraft etwas freischaltet, erscheint es.
  function nurOffene() {
    if (!document.getElementById("nur-offene-stil")) {
      const s = document.createElement("style"); s.id = "nur-offene-stil";
      s.textContent = "body.nur-offene .mod.zu,body.nur-offene section.thema.leer,.nur-offene-weg{display:none!important}";
      document.head.appendChild(s);
    }
    document.body.classList.add("nur-offene");
    document.querySelectorAll("section.thema").forEach(sec => { sec.classList.toggle("leer", !sec.querySelector("a[href]")); });
    document.querySelectorAll('.gesamt-themen a[href^="#"]').forEach(a => {
      const ziel = document.getElementById(decodeURIComponent(a.getAttribute("href").slice(1)));
      a.classList.toggle("nur-offene-weg", !!ziel && ziel.classList.contains("leer"));
    });
  }

  function zeichnen() {
    // Tippt das Kind gerade seinen Code, bleibt die Eingabe beim Neuzeichnen erhalten
    const altFeld = document.getElementById("codeFeld"), getippt = altFeld ? altFeld.value : "", imFeld = altFeld && document.activeElement === altFeld;
    const a = anmeldung();
    const staende = THEMEN.map(themaStand);
    const offenGesamt = staende.reduce((s, x) => s + x.offen, 0);
    const mitStand = staende.reduce((s, x) => s + x.mitStand, 0), fertigGesamt = staende.reduce((s, x) => s + x.fertig, 0);
    const pctGesamt = mitStand ? Math.round(staende.reduce((s, x) => s + x.pct * x.mitStand, 0) / mitStand) : 0;
    const testsOffen = PROBEN ? THEMEN.some(t => probenKacheln(t, a)) : false;
    const gastHinweis = !a && offenGesamt && VON_SICH_OFFEN ? '<p class="hinweis bisher">Melde dich oben mit deinem Code an – dann siehst du hier deinen Lernstand.</p>' : "";

    const kopf = a
      ? `<div class="wer"><span>👤 ${a.lehrer ? "Lehrkraft · " + esc(a.name) : esc(a.name) + " · Klasse " + esc(a.klasse)}</span><button type="button" id="abmelden">Abmelden</button></div>`
      : `<form class="code" id="codeForm" novalidate><label for="codeFeld">Dein Code</label><input id="codeFeld" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" placeholder="···">
          <button type="submit">Anmelden</button><p id="codeFehler" role="alert"></p></form>`;
    // (Angemeldet erst, wenn der Stand der Klasse bekannt ist – sonst blitzt der Hinweis beim Laden auf.)
    const nochNichts = offenGesamt || testsOffen || (a && !STAND) ? "" : `<p class="hinweis bisher">${a
      ? "Für deine Klasse ist hier noch nichts freigeschaltet. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt."
      : "Ohne Code ist hier noch nichts offen. Melde dich oben mit deinem Code an – dann siehst du, was für deine Klasse freigeschaltet ist."}</p>`;

    app.innerHTML = `
  <header class="hero">
    <div class="wrap">
      <nav class="navlinks" aria-label="Navigation">
        <a href="${root}index.html">🏠 Startseite Lernplattform</a>
        <a href="${root}index.html#lernen">🏫 Alle Klassen &amp; Fächer</a>
      </nav>
      <div class="hero-grid">
        <div>
          <div class="eyebrow">Klasse ${esc(a && !a.lehrer ? a.klasse : L.TITEL.replace(/^\D+/, ""))} · ${esc(L.FACH)}</div>
          <h1>${esc(L.TITEL)}</h1>
          <p>${esc(L.INTRO)}</p>
        </div>
        <div class="hero-box">${kopf}
          <p class="klein">${a && a.lehrer ? "Lehrercode: Alle Seiten sind offen – auch die, die für die Klassen noch gesperrt sind. Dein Lernstand wird nicht gemeldet." : a ? "Du siehst, was deine Lehrkraft für deine Klasse freigeschaltet hat." : VON_SICH_OFFEN ? "Mit deinem Code merkt sich GRUMI deinen Lernstand – und du siehst, was für deine Klasse gilt." : "Mit deinem Code siehst du, was deine Lehrkraft für deine Klasse freigeschaltet hat."}</p>
        </div>
      </div>
    </div>
  </header>
  <main class="wrap">
    <section class="gesamt" aria-label="Dein Lernfortschritt">
      <div class="gesamt-kopf"><div><div class="eyebrow dark">${esc(L.TITEL)} · Dein Lernstand</div><div class="gesamt-zahl">${pctGesamt} %</div></div>
        <p>${offenGesamt ? (mitStand ? `${fertigGesamt} von ${mitStand} Übungen abgeschlossen · ` : "") + `${offenGesamt} ${offenGesamt === 1 ? "Seite" : "Seiten"} offen` : "Noch nichts freigeschaltet"}</p></div>
      <div class="bar gross"><div style="width:${pctGesamt}%"></div></div>
      <div class="gesamt-themen">${THEMEN.map((t, i) => staende[i].offen
        ? `<a href="#thema-${t.id}"><span>${t.icon} ${esc(t.kurz || t.titel)}</span><span class="bar"><span style="width:${staende[i].pct}%"></span></span><b>${staende[i].mitStand ? staende[i].pct + " %" : "offen"}</b></a>`
        : `<a href="#thema-${t.id}" class="zu nur-offene-weg"><span>${t.icon} ${esc(t.kurz || t.titel)}</span><span class="bar"></span><b>🔒</b></a>`).join("")}</div>
      ${HINWEIS ? `<p class="hinweis">${esc(HINWEIS)}</p>` : ""}${nochNichts}${gastHinweis}
    </section>
    ${THEMEN.map((t, i) => {
      const s = staende[i];
      const status = s.offen ? `<span class="mod-status ok">${s.mitStand ? `${s.fertig} von ${s.mitStand} Übungen abgeschlossen` : `${s.offen} ${s.offen === 1 ? "Seite" : "Seiten"} offen`}</span>` : '<span class="mod-status zu">🔒 noch nicht freigeschaltet</span>';
      return `<section class="thema${s.offen ? "" : " gesperrt"}" id="thema-${t.id}">
      <div class="thema-head"><span class="thema-icon">${t.icon}</span><div><h2>${esc(t.titel)}</h2><p>${esc(t.text || "")}</p><div class="thema-status">${status}</div></div></div>
      <div class="mods">${t.module.map(m => modulKarte(m, t)).join("")}</div>
      ${probenKacheln(t, a)}
    </section>`; }).join("")}
  </main>
  <footer class="wrap">GRUMI · ${esc(L.TITEL)}${a && !a.lehrer ? " · Dein Lernstand wird mit deinem Code an deine Lehrkraft gemeldet." : ""}</footer>`;

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
        K.anmelden(code).then(x => { clearTimeout(langsam); SERVER = (x.antwort && x.antwort.fortschritt) || null; laden(true); })
          .catch(x => { clearTimeout(langsam); fehler.textContent = x.message || "Keine Verbindung zum Server."; knopf.disabled = false; knopf.textContent = "Anmelden"; feld.select(); });
      });
    }
    const ab = document.getElementById("abmelden");
    if (ab) ab.addEventListener("click", () => { K.abmelden(); STAND = null; SERVER = null; HINWEIS = ""; zeichnen(); });
    nurOffene();
  }

  // Stand der Freischaltung holen (erst vom Gerät, dann vom Server), dazu den Lernstand, und neu zeichnen
  function laden(standDa) {
    const a = anmeldung();
    if (zumEigenenZug(a)) return;
    STAND = null; HINWEIS = "";
    if (!standDa) SERVER = null;
    zeichnen();
    L.freigabe(a, stand => { STAND = stand; HINWEIS = ""; zeichnen(); }, text => { if (text) { HINWEIS = text; zeichnen(); } });
    if (!a || standDa) return;
    fetch(L.API + "/api/nt9/fortschritt/anmelden", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code }) })
      .then(r => r.json()).then(d => { if (d && d.ok && d.fortschritt) { SERVER = d.fortschritt; zeichnen(); } }).catch(() => {});
  }
  laden();

  // Welche Tests gibt es für diesen Kurs, welche sind offen? (öffentliche Listen, ohne Anmeldung)
  const G = window.GrumiProbenModule;
  if (G) {
    Promise.all(G.MODULES.filter(m => typeof m.liste === "function" && m.listPath).map(mod =>
      fetch(L.API + mod.listPath).then(r => r.json()).then(d => (d.tests || []).filter(t => mod.liste(t) === L.NAME)
        .map(t => ({ id: t.id, titel: t.title || t.id, offen: !!t.unlocked, klasse: mod.klasse(t), link: mod.schueler(t) }))).catch(() => [])
    )).then(teile => { PROBEN = [].concat(...teile); zeichnen(); });
  }
  // Zurück aus einer Seite (auch über den Zurück-Knopf): Lernstand neu holen
  window.addEventListener("pageshow", e => { if (e.persisted) laden(); });
})();
