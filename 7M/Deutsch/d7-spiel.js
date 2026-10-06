/* Deutsch 7: Hörtext, Duell gegen die KI und Tischduell – Bausteine für D7Kit (d7-kit.js).
 *
 * hoertext   { art: "hoertext", id, hoertext: "Text-ID", fragen: [Teile …] }
 *            Der Browser liest vor (Sprachausgabe des Geräts, deutsche Stimmen). Gibt es mehrere deutsche Stimmen,
 *            bekommt jede Rolle ihre eigene; sonst unterscheiden sich die Rollen in der Stimmlage. Das Transkript
 *            erscheint erst, wenn die Aufgaben gelöst sind. Kann das Gerät nicht vorlesen, liest das Kind den Text
 *            einmal und deckt ihn dann zu. Hörtexte stehen in texte/hoertexte/ (sprecher: [{ rolle, text }]).
 * duell      { art: "duell", id, runden: [{ material, q, o: […], a, ki, kiText, e, begruende: { q, m, k } }] }
 *            Kind und „KI“ beantworten dieselbe Frage. Die Antworten der KI sind vorbereitet (ki = ihre Wahl, sie
 *            irrt sich mit Absicht manchmal). Bei „begruende“ bewertet die echte KI einen Satz des Kindes (Bonus).
 * tischduell { art: "tischduell", id, fragen: [{ q, o: […], a, e }], runden: 7 }
 *            Zwei Kinder an einem Gerät, jedes hat eine Bildschirmhälfte. Wer zuerst richtig tippt, bekommt den Punkt;
 *            wer falsch tippt, ist für diese Runde gesperrt. Kein Server, keine Anmeldung.
 * Duelle sind Zusatzaktivitäten: Sie zählen nicht zum Lernfortschritt. Beim Hörtext zählen Zuhören und Aufgaben.
 */
(function () {
  "use strict";
  const M = window.Modul, { $, $$, esc, shuffle } = M, K = window.D7Kit;

  // Kennungen der Aufgaben eines Teils (so vergibt sie ../NT/modul-basis.js)
  function aufgabenIds(t) {
    if (t.art === "mc") return t.fragen.map((_, i) => t.id + "-" + i);
    if (t.art === "offen") return t.fragen.map((_, i) => t.id + i);
    return ["tf", "luecke", "sort", "ordnen", "paare", "markieren", "schreiben"].includes(t.art) ? [t.id] : [];
  }

  /* ---------- Hörtext ---------- */
  K.bauer.hoertext = (box, teil) => {
    const t = K.textFuer(teil.hoertext), synth = window.speechSynthesis, id = teil.id;
    const rollen = [...new Set((t.sprecher || []).map(s => s.rolle))];
    // jeder Satz wird einzeln gesprochen (lange Stücke brechen in manchen Browsern ab)
    const stuecke = [];
    (t.sprecher || []).forEach(s => (s.text.match(/[^.!?…]+[.!?…]+["“”]?|[^.!?…]+$/g) || [s.text]).forEach(satz => { if (satz.trim()) stuecke.push({ rolle: s.rolle, text: satz.trim() }); }));
    const wortzahl = K.woerter((t.sprecher || []).map(s => s.text).join(" ")), minuten = Math.max(1, Math.round(wortzahl / 130));
    M.register(id + "-hoeren", box, "Hörtext anhören: " + t.titel);
    const fragen = (teil.fragen || []).filter(f => !f.nur || f.nur === K.zug());
    box.innerHTML = `<div class="hoer"><div class="hoer-kopf"><span class="big" aria-hidden="true">🎧</span><div><b>${esc(t.titel)}</b><br><span class="hint">${esc(t.textsorte || "Hörtext")} · etwa ${minuten} ${minuten === 1 ? "Minute" : "Minuten"}${rollen.length > 1 ? " · " + rollen.length + " Stimmen" : ""}</span></div></div>
        <div class="hoer-rollen">${rollen.map(r => `<span data-r="${esc(r)}">${esc(r)}</span>`).join("")}</div>
        <div class="row-btns"><button class="btn play" type="button">▶ Anhören</button><button class="btn ghost small neu" type="button">↺ Von vorn</button>
          <label class="hint" style="display:inline-flex;gap:6px;align-items:center"><input type="checkbox" class="langsam"> langsamer</label></div>
        <div class="hoer-lauf" aria-hidden="true"><i></i></div><p class="hint hoer-status" role="status">Lies zuerst die Aufgaben unten. Höre dann genau zu – du kannst den Text auch zweimal anhören.</p>
        <div class="hoer-ersatz" hidden></div></div>
      <div class="hoer-fragen"></div>
      <div class="row-btns"><button class="btn small ghost trans" type="button" disabled>📄 Text zum Nachlesen</button></div><div class="hoer-text" hidden></div>`;
    const play = $(".play", box), lauf = $(".hoer-lauf i", box), status = $(".hoer-status", box), trans = $(".trans", box), ersatz = $(".hoer-ersatz", box);
    const transkript = () => (t.sprecher || []).map(s => `<p>${rollen.length > 1 ? "<b>" + esc(s.rolle) + ":</b> " : ""}${esc(s.text)}</p>`).join("");
    let i = 0, laeuft = false, gehoert = M.isSolved(id + "-hoeren");
    // Stimmen: deutsche Stimmen des Geräts auf die Rollen verteilen
    const stimmen = () => (synth ? synth.getVoices().filter(v => /^de/i.test(v.lang)) : []);
    function stimmeFuer(rolle) {
      const v = stimmen(), k = Math.max(0, rollen.indexOf(rolle));
      if (!v.length) return { voice: null, pitch: 1 };
      // mehrere Stimmen: jede Rolle ihre eigene; nur eine: Rollen über die Stimmlage unterscheiden
      return v.length > 1 ? { voice: v[k % v.length], pitch: k >= v.length ? 1.2 : 1 } : { voice: v[0], pitch: [1, 1.35, 0.75, 1.15][k % 4] };
    }
    function zeigeRolle(r) { $$(".hoer-rollen span", box).forEach(s => s.classList.toggle("an", s.dataset.r === r)); }
    function fertig() {
      laeuft = false; i = 0; play.textContent = "▶ Noch einmal anhören"; zeigeRolle(""); lauf.style.width = "100%";
      status.textContent = "Fertig gehört. Bearbeite jetzt die Aufgaben. Du darfst noch einmal anhören.";
      if (!gehoert) { gehoert = true; M.solve(id + "-hoeren"); }
      pruefeTranskript();
    }
    function sprich() {
      if (!laeuft) return;
      if (i >= stuecke.length) { fertig(); return; }
      const s = stuecke[i], u = new SpeechSynthesisUtterance(s.text), st = stimmeFuer(s.rolle);
      u.lang = "de-DE"; if (st.voice) u.voice = st.voice; u.pitch = st.pitch; u.rate = $(".langsam", box).checked ? 0.78 : 0.95;
      zeigeRolle(s.rolle); lauf.style.width = Math.round(i / stuecke.length * 100) + "%";
      let weiter = false; const naechstes = () => { if (weiter) return; weiter = true; i++; sprich(); };
      u.onend = naechstes; u.onerror = e => { if (e.error === "interrupted" || e.error === "canceled") return; naechstes(); };
      synth.speak(u);
    }
    function halt() { laeuft = false; if (synth) synth.cancel(); zeigeRolle(""); }
    function kannVorlesen() { return Boolean(synth && window.SpeechSynthesisUtterance && stimmen().length); }
    function ohneStimme() {
      // Das Gerät kann nicht vorlesen: Text einmal lesen, dann zudecken
      play.hidden = true; $(".neu", box).hidden = true; $(".langsam", box).closest("label").hidden = true; $(".hoer-lauf", box).hidden = true;
      status.textContent = "Dieses Gerät kann den Text nicht vorlesen. Lies ihn stattdessen einmal aufmerksam – oder lass ihn dir vorlesen. Danach deckst du ihn zu.";
      ersatz.hidden = false;
      ersatz.innerHTML = `<div class="hoer-text">${transkript()}</div><div class="row-btns"><button class="btn small zu" type="button">Ich habe gelesen – Text zudecken</button></div>`;
      $(".zu", ersatz).addEventListener("click", () => { ersatz.hidden = true; status.textContent = "Bearbeite jetzt die Aufgaben aus dem Gedächtnis."; if (!gehoert) { gehoert = true; M.solve(id + "-hoeren"); } pruefeTranskript(); });
    }
    play.addEventListener("click", () => {
      if (!kannVorlesen()) { ohneStimme(); return; }
      if (laeuft) { halt(); play.textContent = "▶ Weiter anhören"; status.textContent = "Pause."; return; }
      laeuft = true; play.textContent = "⏸ Pause"; status.textContent = "Hör genau zu …"; synth.cancel(); sprich();
    });
    $(".neu", box).addEventListener("click", () => { halt(); i = 0; lauf.style.width = "0"; play.textContent = "▶ Anhören"; status.textContent = "Von vorn."; });
    // Stimmen kommen in manchen Browsern erst nach einem Moment; fehlt die Sprachausgabe ganz, gleich den Ersatz zeigen
    if (!synth || !window.SpeechSynthesisUtterance) ohneStimme();
    else if (synth.addEventListener) synth.addEventListener("voiceschanged", () => {});
    window.addEventListener("pagehide", halt);

    // Aufgaben zum Hörtext (eigene Karten im selben Kasten)
    const liste = $(".hoer-fragen", box);
    fragen.forEach(f => {
      const div = document.createElement("div"); div.className = "hoer-frage"; div.style.marginTop = "14px";
      div.innerHTML = (f.titel ? `<h4 style="margin:0 0 6px">${esc(f.titel)}</h4>` : "") + (f.lead ? `<p>${f.lead}</p>` : "") + '<div class="teil-box"></div>';
      liste.appendChild(div);
      const los = () => K.bauer[f.art]($(".teil-box", div), f, div);
      if (f.m7) M.plus(los); else los();
      K.teile.push({ art: f.art, id: f.id, teil: f, box: $(".teil-box", div), card: div });
    });
    const alleIds = fragen.reduce((a, f) => a.concat(aufgabenIds(f)), []);
    function pruefeTranskript() {
      const offen = alleIds.filter(x => !M.isSolved(x)).length;
      trans.disabled = !gehoert || offen > 0;
      trans.title = trans.disabled ? "Erst zuhören und die Aufgaben lösen" : "";
    }
    box.addEventListener("click", () => setTimeout(pruefeTranskript, 50));
    box.addEventListener("input", () => setTimeout(pruefeTranskript, 50));
    trans.addEventListener("click", () => { const b = $(":scope > .hoer-text", box); b.hidden = !b.hidden; if (!b.innerHTML) b.innerHTML = transkript(); });
    pruefeTranskript();
    // für Tests: Zuhören abschließen, ohne die Sprachausgabe abzuwarten
    box._hoerFertig = () => { laeuft = true; i = stuecke.length; if (synth) synth.cancel(); fertig(); };
  };

  /* ---------- Duell gegen die KI ---------- */
  K.bauer.duell = (box, teil) => {
    const runden = teil.runden.filter(r => !r.nur || r.nur === K.zug()), N = runden.length, id = teil.id;
    let i = 0, ich = 0, ki = 0;
    function start() {
      const best = +M.load("-duell-" + id, "0");
      box.innerHTML = `<div class="duell"><p>${teil.intro || "Du trittst gegen die KI an. Ihr bekommt dieselben Aufgaben. Wer mehr Punkte holt, gewinnt – aber Achtung: Auch eine KI kann sich irren."}</p>
        <div class="row-btns"><button class="btn los" type="button">⚔️ Duell starten</button>${best ? `<span class="hint">Dein bestes Ergebnis: ${best} von ${N}${teil.runden.some(r => r.begruende) ? " (+ Bonus)" : ""}</span>` : ""}</div></div>`;
      $(".los", box).addEventListener("click", () => { i = 0; ich = 0; ki = 0; runde(); });
    }
    function kopf() { return `<div class="duell-stand"><span class="ich">🧑 Du: ${ich}</span><span class="runde">Runde ${Math.min(i + 1, N)} von ${N}</span><span class="ki">🤖 KI: ${ki}</span></div>`; }
    function runde() {
      const r = runden[i], reihe = shuffle(r.o.map((t, k) => ({ t, k })));
      box.innerHTML = `<div class="duell">${kopf()}${r.material ? `<div class="duell-material">${esc(r.material)}</div>` : ""}<p class="duell-frage">${esc(r.q)}</p>
        <div class="opts">${reihe.map(o => `<button class="opt round" type="button" data-k="${o.k}"><span class="box"></span><span>${esc(o.t)}</span></button>`).join("")}</div><div class="nach"></div></div>`;
      $$(".opt", box).forEach(b => b.addEventListener("click", () => {
        const wahl = +b.dataset.k, okIch = wahl === r.a, okKi = r.ki === r.a;
        $$(".opt", box).forEach(o => { o.disabled = true; const k = +o.dataset.k; if (k === r.a) { o.classList.add("right"); $(".box", o).textContent = "✓"; } if (k === r.ki) o.classList.add("ki-wahl"); });
        if (!okIch) b.classList.add("wrong");
        if (okIch) ich++; if (okKi) ki++;
        const nach = $(".nach", box);
        nach.innerHTML = `<div class="ki-sagt">🤖 <b>Die KI wählt:</b> „${esc(r.o[r.ki])}“${r.kiText ? " – " + esc(r.kiText) : ""} ${okKi ? "✅" : "❌ Das stimmt nicht."}</div>
          <div class="fb show ${okIch ? "ok" : "bad"}">${okIch ? "✅ Punkt für dich! " : "❌ Diesmal kein Punkt. "}${esc(r.e || "")}</div>
          ${r.begruende && okIch ? `<div class="bonus"><p style="margin:10px 0 0;font-weight:700">⭐ Bonuspunkt: ${esc(r.begruende.q)}</p><textarea aria-label="Deine Begründung" placeholder="Ein Satz genügt."></textarea><div class="row-btns"><button class="btn small teal bonus-go" type="button">✨ Begründung prüfen</button></div><div class="status"></div><div class="fb bonus-fb"></div></div>` : ""}
          <div class="row-btns"><button class="btn small naechste" type="button">${i < N - 1 ? "Nächste Runde →" : "Ergebnis"}</button></div>`;
        $(".duell-stand", box).outerHTML = kopf();
        $(".naechste", box).addEventListener("click", () => { i++; i < N ? runde() : ende(); });
        const go = $(".bonus-go", box);
        if (go) go.addEventListener("click", async () => {
          const antwort = $(".bonus textarea", box).value.trim(), fb = $(".bonus-fb", box), st = $(".bonus .status", box);
          if (antwort.length < 8) { fb.className = "fb bonus-fb show mid"; fb.textContent = "Schreib einen ganzen Satz."; return; }
          go.disabled = true; st.innerHTML = '<span class="dots">Die KI liest deine Begründung</span>';
          let res = await M.askKI({ frage: r.q + " " + r.begruende.q, erwartet: r.begruende.m, antwort, keywords: (r.begruende.k || []).map(x => x.split("|")[0]) });
          if (!res) { const t = M.norm(antwort), treffer = (r.begruende.k || []).filter(g => g.split("|").some(w => t.includes(M.norm(w)))).length; res = { richtig: treffer >= 1, rueckmeldung: treffer >= 1 ? "Deine Begründung nennt den entscheidenden Punkt." : "In deiner Begründung fehlt der entscheidende Punkt.", tipp: "" }; }
          st.textContent = "";
          const gut = res.richtig || res.teilweise;
          if (gut) { ich++; $(".duell-stand", box).outerHTML = kopf(); $(".bonus textarea", box).disabled = true; } else go.disabled = false;
          fb.className = "fb bonus-fb show " + (gut ? "ok" : "bad"); fb.innerHTML = (gut ? "⭐ Bonuspunkt! " : "Noch kein Bonuspunkt. ") + esc(res.rueckmeldung || "") + (res.tipp ? " " + esc(res.tipp) : "");
        });
      }));
    }
    function ende() {
      const sieg = ich > ki, gleich = ich === ki;
      if (ich > +M.load("-duell-" + id, "0")) M.save("-duell-" + id, String(ich));
      box.innerHTML = `<div class="duell duell-ende"><div class="big">${sieg ? "🏆" : gleich ? "🤝" : "🤖"}</div><div class="result-big">${ich} : ${ki}</div>
        <p class="lead">${sieg ? "Du hast die KI geschlagen!" : gleich ? "Unentschieden – ihr wart gleich gut." : "Diesmal war die KI besser. Schau dir die Erklärungen an und fordere sie noch einmal heraus."}</p>
        <div class="row-btns" style="justify-content:center"><button class="btn nochmal" type="button">Revanche</button></div></div>`;
      $(".nochmal", box).addEventListener("click", () => { i = 0; ich = 0; ki = 0; runde(); });
      if (sieg) M.confetti();
    }
    start();
  };

  /* ---------- Tischduell: zwei Kinder, ein Gerät ---------- */
  K.bauer.tischduell = (box, teil) => {
    const pool = teil.fragen.filter(f => !f.nur || f.nur === K.zug()), N = Math.min(teil.runden || 7, pool.length);
    box.innerHTML = `<p>${teil.intro || "Legt das Tablet zwischen euch auf den Tisch. Jede und jeder hat eine Hälfte des Bildschirms. Wer zuerst die richtige Antwort antippt, bekommt den Punkt. Wer falsch tippt, muss in dieser Runde aussetzen."}</p>
      <div class="tisch-start"><button class="btn los" type="button">👥 Tischduell starten</button><span class="hint">${N} Runden · etwa ${Math.max(3, Math.round(N * 0.6))} Minuten · zählt nicht zum Lernfortschritt</span></div>`;
    $(".los", box).addEventListener("click", start);
    function start() {
      const fragen = shuffle(pool).slice(0, N), punkte = [0, 0];
      let i = 0, offen = false, timer = null;
      const feld = document.createElement("div"); feld.className = "tisch";
      feld.innerHTML = `<div class="tisch-seite a" data-s="0"></div><div class="tisch-mitte"><span class="stand"></span><button type="button" class="ende">Beenden</button></div><div class="tisch-seite b" data-s="1"></div>`;
      document.body.appendChild(feld); document.body.style.overflow = "hidden";
      const seiten = $$(".tisch-seite", feld), stand = $(".stand", feld);
      const schluss = () => { clearTimeout(timer); feld.remove(); document.body.style.overflow = ""; };
      $(".ende", feld).addEventListener("click", schluss);
      const zeigStand = () => { stand.textContent = `Rot ${punkte[0]} : ${punkte[1]} Grün · Runde ${Math.min(i + 1, N)}/${N}`; };
      function runde() {
        const f = fragen[i], reihe = shuffle(f.o.map((t, k) => ({ t, k })));
        offen = true; zeigStand();
        seiten.forEach((s, n) => {
          s.innerHTML = `<div class="punkte">${n ? "Grün" : "Rot"}: ${punkte[n]} ${punkte[n] === 1 ? "Punkt" : "Punkte"}</div><h4>${esc(f.q)}</h4>
            <div class="tisch-opts">${reihe.map(o => `<button type="button" data-k="${o.k}">${esc(o.t)}</button>`).join("")}</div><div class="tisch-meldung"></div>`;
        });
      }
      function aufloesen(sieger) {
        offen = false; const f = fragen[i];
        seiten.forEach((s, n) => {
          $$("button", s).forEach(b => { b.disabled = true; if (+b.dataset.k === f.a) b.classList.add("r"); });
          $(".tisch-meldung", s).textContent = sieger === n ? "✅ Punkt für dich!" : sieger < 0 ? "Keiner hatte recht." : "Der Punkt geht an die andere Seite.";
          if (f.e) s.insertAdjacentHTML("beforeend", `<div class="punkte" style="font-weight:600">${esc(f.e)}</div>`);
          s.insertAdjacentHTML("beforeend", '<div class="tisch-opts" style="grid-template-columns:1fr"><button type="button" class="weiter" style="background:#f2b632">Weiter ▶</button></div>');
        });
        zeigStand();
        timer = setTimeout(weiter, 9000);
      }
      function weiter() {
        clearTimeout(timer); if (offen) return;
        i++; if (i < N) { runde(); return; }
        const text = punkte[0] === punkte[1] ? "Unentschieden!" : (punkte[0] > punkte[1] ? "Rot" : "Grün") + " gewinnt!";
        seiten.forEach((s, n) => { s.innerHTML = `<h4 style="font-size:1.6rem">${punkte[n] > punkte[1 - n] ? "🏆 " : ""}${text}</h4><div class="punkte" style="font-size:1.2rem">Rot ${punkte[0]} : ${punkte[1]} Grün</div><div class="tisch-opts"><button type="button" class="nochmal">Noch einmal</button><button type="button" class="aus">Beenden</button></div>`; });
        stand.textContent = "Fertig";
      }
      feld.addEventListener("pointerdown", e => {
        const b = e.target.closest("button"); if (!b || b.classList.contains("ende")) return;
        if (b.classList.contains("weiter")) { e.preventDefault(); weiter(); return; }
        if (b.classList.contains("aus")) { schluss(); return; }
        if (b.classList.contains("nochmal")) { schluss(); start(); return; }
        const s = b.closest(".tisch-seite"); if (!s || !offen || b.disabled) return;
        e.preventDefault();
        const n = +s.dataset.s, f = fragen[i];
        if (+b.dataset.k === f.a) { punkte[n]++; aufloesen(n); }
        else {
          b.classList.add("f"); $$(".tisch-opts button", s).forEach(x => { x.disabled = true; }); $(".tisch-meldung", s).textContent = "❌ Falsch – du setzt in dieser Runde aus.";
          if (seiten.every(x => $$(".tisch-opts button", x).every(y => y.disabled))) aufloesen(-1);
        }
      });
      runde();
    }
  };
})();
