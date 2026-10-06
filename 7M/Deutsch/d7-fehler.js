/* Deutsch 7: Fehler-Check für „Mein Fehlertraining“ – Baustein für D7Kit (d7-kit.js).
 *
 * fehlercheck { art: "fehlercheck", id, proRunde: 2,
 *               bereiche: [{ id, titel, station: 2, modul: { href, titel }, fragen: [{ q, o: […], a: 0, e }] }] }
 *
 * Je Runde kommen aus jedem Bereich „proRunde“ Fragen – bei jeder neuen Runde andere, bis der Vorrat einmal durch ist.
 * Am Ende steht ein Trainingsplan: Welche Fehlerart sitzt, wo lohnt sich Üben, was kam zum zweiten Mal falsch
 * (Fehlerschwerpunkt)? Von dort geht es direkt zur passenden Miniübung auf derselben Seite.
 * Das Ergebnis bleibt auf dem Gerät des Kindes (wie der übrige Stand des Moduls). Der Server und die Lehrkraft
 * erfahren nur, dass der Check gemacht wurde – nicht, welche Fehlerart dabei herauskam. Es ist eine Übungshilfe,
 * keine Diagnose.
 */
(function () {
  "use strict";
  const M = window.Modul, { $, $$, esc, shuffle } = M, K = window.D7Kit;

  const CSS = ".fc-plan{display:grid;gap:8px;margin:12px 0}" +
    ".fc-zeile{display:grid;grid-template-columns:1fr auto;gap:4px 12px;align-items:center;padding:10px 14px;border:1.5px solid var(--line);border-radius:14px;background:#fff}" +
    ".fc-zeile b{font-size:1.02rem}.fc-zeile small{display:block;color:var(--muted);font-weight:600}" +
    ".fc-zeile.gut{border-color:#b9dfc6;background:#f3fbf6}.fc-zeile.ueben{border-color:#f1d9a0;background:#fffaf0}.fc-zeile.schwer{border-color:#ecb4bb;background:#fff5f6}" +
    ".fc-marke{display:inline-block;padding:2px 10px;border-radius:999px;font-weight:800;font-size:.8rem;white-space:nowrap}" +
    ".fc-zeile.gut .fc-marke{background:#d9f2e2;color:#17633a}.fc-zeile.ueben .fc-marke{background:#fbe8b8;color:#7a5200}.fc-zeile.schwer .fc-marke{background:#f8d0d5;color:#8e2a37}" +
    ".fc-wege{grid-column:1/-1;display:flex;flex-wrap:wrap;gap:8px}" +
    ".fc-wege a{display:inline-block;padding:6px 14px;border-radius:999px;border:1.5px solid var(--line);background:#fff;font-weight:800;font-size:.9rem;text-decoration:none;color:var(--sky)}" +
    ".fc-wege a.haupt{background:var(--sky);border-color:var(--sky);color:#fff}" +
    ".fc-bereich{color:var(--muted);font-weight:800;font-size:.82rem;letter-spacing:.04em;text-transform:uppercase;margin:0 0 4px}";
  function stil() {
    if (document.getElementById("fc-stil")) return;
    const s = document.createElement("style"); s.id = "fc-stil"; s.textContent = CSS; document.head.appendChild(s);
  }

  K.bauer.fehlercheck = (box, teil) => {
    stil();
    const id = teil.id, pro = teil.proRunde || 2, bereiche = teil.bereiche;
    M.register(id, box, "Fehler-Check: Wo passieren deine Fehler?");
    // Stand: { n: Zahl der Runden, b: { bereich: [[richtig, gefragt], …] } } – nur die letzten drei Runden
    const lese = () => { try { const s = JSON.parse(M.load("-fc-" + id, "{}")); return s && typeof s === "object" ? s : {}; } catch (_) { return {}; } };
    const schreibe = s => M.save("-fc-" + id, JSON.stringify(s));
    const gesamt = bereiche.length * pro;

    function urteil(laeufe) {
      if (!laeufe || !laeufe.length) return null;
      const letzte = laeufe[laeufe.length - 1], davor = laeufe[laeufe.length - 2];
      if (letzte[0] >= letzte[1]) return "gut";
      return davor && davor[0] < davor[1] ? "schwer" : "ueben";
    }

    function plan() {
      const s = lese(), b = s.b || {};
      if (!s.n) {
        box.innerHTML = `<p>${gesamt} kurze Fragen aus ${bereiche.length} Bereichen der Rechtschreibung. Du tippst jeweils die richtige Schreibung an. Danach siehst du, <strong>wo du sicher bist</strong> und <strong>wo sich Üben lohnt</strong> – und bekommst die passenden Miniübungen.</p>
          <p class="hint">Der Check dauert etwa fünf Minuten. Es gibt keine Note. Rate nicht – wenn du unsicher bist, ist genau das die Information, die du brauchst.</p>
          <div class="row-btns"><button class="btn fc-start" type="button">Fehler-Check starten</button></div>`;
        $(".fc-start", box).addEventListener("click", runde);
        return;
      }
      const zeilen = bereiche.map(be => ({ be, laeufe: b[be.id] || [], u: urteil(b[be.id]) }));
      const schwach = zeilen.filter(z => z.u === "schwer").concat(zeilen.filter(z => z.u === "ueben"));
      const text = { gut: "sicher", ueben: "üben", schwer: "Fehlerschwerpunkt" };
      box.innerHTML = `<div class="fc-profil"><p class="lead" style="margin:0 0 4px">${schwach.length
          ? "Dein Trainingsplan: Beginne mit <strong>" + esc(schwach[0].be.titel) + "</strong>" + (schwach.length > 1 ? " – danach " + schwach.slice(1).map(z => esc(z.be.titel)).join(", ") : "") + "."
          : "Stark – im letzten Check war alles richtig. Die Miniübungen kannst du trotzdem machen, sie zählen zum Lernfortschritt."}</p>
        <div class="fc-plan">${zeilen.map(z => {
          const l = z.laeufe[z.laeufe.length - 1] || [0, 0];
          return `<div class="fc-zeile ${z.u || ""}"><div><b>${esc(z.be.titel)}</b><small>zuletzt ${l[0]} von ${l[1]} richtig${z.u === "schwer" ? " · schon zum zweiten Mal Fehler" : ""}</small></div>
            <span class="fc-marke">${text[z.u] || "noch nicht geprüft"}</span>
            <div class="fc-wege"><a class="${z.u && z.u !== "gut" ? "haupt" : ""}" href="#s${z.be.station}">Miniübung →</a>${z.be.modul ? `<a href="${esc(z.be.modul.href)}">Thema wiederholen: ${esc(z.be.modul.titel)}</a>` : ""}</div></div>`;
        }).join("")}</div>
        <p class="hint">Der Plan bleibt auf diesem Gerät. Er ist eine Übungshilfe – keine Note und keine Diagnose.</p>
        <div class="row-btns"><button class="btn ghost fc-start" type="button">Noch einmal prüfen (neue Fragen)</button></div></div>`;
      $(".fc-start", box).addEventListener("click", runde);
    }

    function runde() {
      const s = lese(), n = s.n || 0, erg = {};
      let fragen = [];
      bereiche.forEach(be => { erg[be.id] = [0, 0]; for (let j = 0; j < pro; j++) fragen.push({ be, f: be.fragen[(n * pro + j) % be.fragen.length] }); });
      fragen = shuffle(fragen);
      let i = 0;
      box.innerHTML = `<div class="quiz-top"><div class="qbar"><div style="width:0"></div></div><span class="chip qc"></span></div><div class="qbox fc-frage"></div>`;
      function zeige() {
        const { be, f } = fragen[i], order = shuffle(f.o.map((t, k) => ({ t, k })));
        $(".qbar div", box).style.width = (i / fragen.length * 100) + "%"; $(".qc", box).textContent = `${i + 1} / ${fragen.length}`;
        const qb = $(".qbox", box);
        qb.innerHTML = `<p class="fc-bereich">${esc(be.titel)}</p><div class="q-title" style="font-size:1.1rem">${esc(f.q)}</div>
          <div class="opts">${order.map(o => `<button class="opt round" type="button" data-k="${o.k}"><span class="box"></span><span>${esc(o.t)}</span></button>`).join("")}</div><div class="fb"></div>`;
        $$(".opt", qb).forEach(knopf => knopf.addEventListener("click", () => {
          const ok = +knopf.dataset.k === f.a;
          erg[be.id][1]++; if (ok) erg[be.id][0]++;
          $$(".opt", qb).forEach(o => { o.disabled = true; if (+o.dataset.k === f.a) { o.classList.add("right"); $(".box", o).textContent = "✓"; } });
          if (!ok) knopf.classList.add("wrong");
          const fb = $(".fb", qb); fb.className = "fb show " + (ok ? "ok" : "bad");
          fb.innerHTML = (ok ? "✅ " : "❌ ") + esc(f.e) + `<div class="row-btns"><button class="btn small next" type="button">${i < fragen.length - 1 ? "Weiter →" : "Zum Trainingsplan"}</button></div>`;
          $(".next", fb).addEventListener("click", () => { i++; if (i < fragen.length) zeige(); else ende(); });
        }));
      }
      function ende() {
        const neu = lese(); neu.n = (neu.n || 0) + 1; neu.b = neu.b || {};
        bereiche.forEach(be => { neu.b[be.id] = (neu.b[be.id] || []).concat([erg[be.id]]).slice(-3); });
        schreibe(neu); M.solve(id); plan();
        box.scrollIntoView({ behavior: M.reduced ? "auto" : "smooth", block: "start" });
      }
      zeige();
    }
    plan();
  };
})();
