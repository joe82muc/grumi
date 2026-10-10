/* Englisch 9R: eigene Bausteine für D7Kit (bau-seite.js bindet diese Datei nach d7-kit.js ein).
 *
 * kette   Gespräch als Sprechblasen-Kette mit KI-Prüfung – für Sprachmittlung (drei Personen) und Dialoge (zwei).
 *   { art: "kette", id, tag, titel, lead, thema: "Sprachmittlung in der Apotheke",
 *     rollen: { a: { name: "Tourist", ic: "🧳" }, b: { name: "Chemist", ic: "⚕️" }, du: { name: "You" } },   // b fehlt beim Dialog zu zweit
 *     schritte: [
 *       { von: "a", text: "Hello. …" },                              // vorgegebene Sprechblase von a oder b
 *       { an: "b", sprache: "de", auftrag: "Tell the chemist in German what is wrong.",   // Beitrag des Kindes
 *         start: "Er sagt, …", kriterien: ["Problem: …", "…"], m: "Musterlösung", k: ["hals", "seit|gestern"] },
 *       …
 *     ] }
 *   Die Blasen erscheinen der Reihe nach: Erst wenn der eigene Beitrag geprüft ist, geht das Gespräch weiter.
 *   Die KI prüft je Beitrag, ob die Inhaltspunkte (kriterien, deutsch) sinngemäß ankommen – nicht Wort für Wort
 *   (dieselbe Rückmeldung wie bei offenen Aufgaben, Server: …/uebung/feedback mit kriterien). Ohne KI zählen die
 *   Stichwörter k (Gruppen mit |). Jeder Beitrag ist eine Aufgabe (id + "-" + Nummer) und gelöst, wenn alle Punkte da
 *   sind. Nach zwei Versuchen gibt es ein Beispiel, und das Gespräch geht auch ohne volle Punktzahl weiter.
 *   sprache: "de" oder "en" – in dieser Sprache muss der Beitrag stehen (sagt die Aufgabe der KI).
 */
(function () {
  "use strict";
  const M = window.Modul, K = window.D7Kit;
  if (!M || !K) return;
  const { $, esc } = M;
  const SPRACHE = { de: ["German", "auf Deutsch"], en: ["English", "auf Englisch"] };
  // Steht der Beitrag in der verlangten Sprache? Grobe Zählung häufiger kleiner Wörter – die KI lässt die falsche
  // Sprache sonst durchgehen, wenn der Inhalt stimmt. Im Zweifel (gleich viele oder kaum Treffer) gilt er als richtig.
  const WORT_DE = /(^|[^a-zäöüß])(er|sie|ist|hat|und|der|das|den|dem|ein|eine|einen|nicht|kein|keine|seit|mit|für|auf|ihm|ihr|sein|seine|ihre|wie|ob|dass|zum|beim|möchte|sagt|fragt|bitte|danke|nach|wenn|oder|soll|sollen|ich|du|mir|dir|es|wir|nein|ja|sich|bei|im|zu|von|noch|auch|nur|viel)(?=$|[^a-zäöüß])/g;
  const WORT_EN = /(^|[^a-z'])(he|she|is|has|have|and|the|not|for|with|his|her|you|your|it|if|should|says|wants|take|after|how|much|this|these|please|thank|thanks|get|will|i|my|i've|i'll|i'm|don't|that|to|of|are|can|what|what's|it's|do|does|they|we|him|them|at|on|yes)(?=$|[^a-z'])/g;
  function falscheSprache(text, sprache) {
    const t = " " + String(text).toLowerCase().replace(/’/g, "'") + " ", de = (t.match(WORT_DE) || []).length, en = (t.match(WORT_EN) || []).length;
    return sprache === "de" ? en >= 2 && en > de : de >= 2 && de > en;
  }

  K.bauer.kette = (box, teil) => {
    const R = Object.assign({ du: { name: "You" } }, teil.rollen || {}), drei = Boolean(R.b);
    const name = r => (R[r] && R[r].name) || r, bild = r => (R[r] && R[r].ic ? R[r].ic + " " : "");
    box.innerHTML = `<div class="kette${drei ? " drei" : ""}">
        <div class="kette-kopf" aria-hidden="true"><span class="a">${bild("a")}${esc(name("a"))}</span><span class="du">${esc(name("du"))}</span>${drei ? `<span class="b">${bild("b")}${esc(name("b"))}</span>` : ""}</div>
        <div class="kette-lauf"></div><p class="kette-ende fb ok" hidden></p></div>`;
    const lauf = $(".kette-lauf", box), ende = $(".kette-ende", box), eigene = teil.schritte.filter(s => !s.von);
    let nr = 0;
    const blasen = teil.schritte.map(s => {
      const el = document.createElement("div");
      if (s.von) {
        el.className = "blase " + (s.von === "b" ? "b" : "a");
        el.innerHTML = `<b class="wer">${bild(s.von)}${esc(name(s.von))}</b><p>${esc(s.text)}</p>`;
      } else {
        const n = ++nr, id = teil.id + "-" + n, spr = SPRACHE[s.sprache] || SPRACHE.en, ziel = s.an === "b" ? "b" : "a";
        M.register(id, box, (teil.titel || "Gespräch") + ": Beitrag " + n);
        el.className = "blase du ki an-" + ziel; el.dataset.nr = n; el.dataset.id = id;
        el.innerHTML = `<b class="wer">${esc(name("du"))} → ${esc(name(ziel))} <small>in ${spr[0]}</small></b>${s.auftrag ? `<p class="auftrag">${s.auftrag}</p>` : ""}
          <textarea rows="2" maxlength="500" lang="${s.sprache === "de" ? "de" : "en"}" spellcheck="false" autocapitalize="sentences" placeholder="${esc(s.start ? s.start + " …" : "…")}" aria-label="Dein Beitrag ${n}"></textarea>
          <div class="row-btns">${s.start ? `<button class="btn small ghost start" type="button">💡 Start: ${esc(s.start)} …</button>` : ""}<button class="btn small teal go" type="button">✨ Check</button><button class="btn small ghost show-model" type="button" hidden>Zum Beispiel …</button></div>
          <div class="status"></div><div class="fb"></div><div class="model"><strong>Zum Beispiel:</strong> <span>${esc(s.m)}</span></div>`;
      }
      el.hidden = true; lauf.appendChild(el);
      return el;
    });

    // Bis wohin ist das Gespräch offen? Vorgegebene Blasen erscheinen bis einschließlich zum nächsten eigenen Beitrag.
    function zeige(bis) {
      let offen = true;
      teil.schritte.forEach((s, i) => { if (offen) blasen[i].hidden = false; if (!s.von && i >= bis && offen) offen = false; });
      if (offen) { ende.hidden = false; ende.className = "kette-ende fb ok show"; ende.textContent = "✅ The conversation is finished. " + (drei ? "Du hast zwischen beiden vermittelt – nicht Wort für Wort, sondern das Wichtige." : "Lest das Gespräch jetzt zu zweit laut – einmal mit getauschten Rollen."); }
    }
    function lokal(text, s) {
      const t = M.norm(text), gruppen = s.k || [], treffer = gruppen.filter(g => g.split("|").some(w => t.includes(M.norm(w)))).length;
      const alle = gruppen.length > 0 && treffer >= gruppen.length;
      return { quelle: "lokal", richtig: alle, teilweise: !alle && treffer > 0, summe: null,
        rueckmeldung: alle ? "Die wichtigen Angaben sind enthalten." : treffer ? "Ein guter Anfang – eine wichtige Angabe fehlt noch." : "Die wichtigen Angaben fehlen noch.", tipp: alle ? "" : "Lies die Sprechblase davor noch einmal: Was muss die andere Person unbedingt wissen?" };
    }
    let weit = 0;
    teil.schritte.forEach((s, i) => {
      if (s.von) return;
      const el = blasen[i], id = el.dataset.id, ta = $("textarea", el), go = $(".go", el), st = $(".status", el), fb = $(".fb", el), sm = $(".show-model", el), model = $(".model", el), start = $(".start", el);
      const spr = SPRACHE[s.sprache] || SPRACHE.en;
      let versuche = 0;
      ta.value = M.load("-" + id, "");
      ta.addEventListener("input", () => M.save("-" + id, ta.value));
      if (start) start.addEventListener("click", () => { if (!ta.value.trim()) { ta.value = s.start + " "; M.save("-" + id, ta.value); } ta.focus(); });
      sm.addEventListener("click", () => model.classList.toggle("show"));
      const weiter = () => { if (i + 1 > weit) { weit = i + 1; zeige(weit); } };
      if (M.isSolved(id)) { weit = Math.max(weit, i + 1); sm.hidden = false; }
      go.addEventListener("click", async () => {
        const antwort = ta.value.trim();
        if (antwort.length < 3 || (s.start && M.norm(antwort) === M.norm(s.start))) { fb.className = "fb show mid"; fb.textContent = "Schreib zuerst deinen Beitrag."; return; }
        if (falscheSprache(antwort, s.sprache === "de" ? "de" : "en")) {
          st.textContent = ""; fb.className = "fb show mid";
          fb.textContent = "🟡 " + name(s.an === "b" ? "b" : "a") + " versteht nur " + (s.sprache === "de" ? "Deutsch" : "Englisch") + ". Schreibe deinen Beitrag " + spr[1] + ".";
          return;
        }
        go.disabled = true; fb.className = "fb"; st.innerHTML = '<span class="dots">Die KI liest deinen Beitrag</span>';
        // Was davor gesagt wurde, gehört zur Aufgabe: Daran misst die KI, ob die Informationen ankommen
        const davor = teil.schritte.slice(0, i).filter(x => x.von).slice(-1)[0];
        const frage = (drei ? "Sprachmittlung im Gespräch (keine wörtliche Übersetzung). " : "Rollenspiel-Gespräch. ") +
          "Das Kind spricht jetzt zu " + name(s.an === "b" ? "b" : "a") + " und muss " + spr[1] + " schreiben. Auftrag: " + String(s.auftrag || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() +
          (davor ? " Davor hat " + name(davor.von) + " gesagt: „" + davor.text + "“" : "");
        const anfrage = { frage: frage.slice(0, 590), erwartet: s.m, antwort, keywords: (s.k || []).map(x => x.split("|")[0]), kriterien: s.kriterien || [] };
        if (teil.thema) anfrage.thema = teil.thema;
        const res = await M.askKI(anfrage,
          () => { st.innerHTML = '<span class="dots">Der KI-Server wacht gerade auf – das kann bis zu einer Minute dauern</span>'; }) || lokal(antwort, s);
        go.disabled = false; versuche++;
        st.textContent = res.quelle === "ki" ? "✨ Rückmeldung der KI" : "Offline-Prüfung nach Stichwörtern (die KI war nicht erreichbar)";
        const punkte = Array.isArray(res.punkte) && res.max ? `<b>${res.summe} von ${res.max} ${res.max === 1 ? "Angabe" : "Angaben"} angekommen.</b> ` : "";
        fb.className = "fb show " + (res.richtig ? "ok" : res.teilweise ? "mid" : "bad");
        fb.innerHTML = (res.richtig ? "✅ " : res.teilweise ? "🟡 " : "❌ ") + punkte + esc(res.rueckmeldung || "") + (res.tipp ? `<br><strong>Tipp:</strong> ${esc(res.tipp)}` : "");
        if (res.richtig) { M.solve(id); sm.hidden = false; weiter(); }
        else if (versuche >= 2) { sm.hidden = false; weiter(); }
      });
    });
    zeige(weit);
  };
})();
