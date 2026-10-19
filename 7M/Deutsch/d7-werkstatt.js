/* Deutsch 7: Leserbrief-Werkstatt – Baustein für D7Kit (d7-kit.js). Wunsch vom 19.10.2026: „ein modul wo die schüler
 * ihre aufsätze selbständig mit hilfe von ki schrittweise korrigieren können“ (zu den vier Arbeitsblättern Leserbrief).
 * Das Kind bringt seinen fertigen Leserbrief mit und verbessert ihn SELBST. Die KI prüft je Schritt nur dessen Punkte,
 * zeigt die Stelle und gibt einen Denkanstoß – sie schreibt nichts für das Kind (Server /api/d7/schreiben/werkstatt).
 *
 * Ein Baustein „werkstatt“ mit vier Teilen (teil.teil), die sich einen Stand teilen:
 *   wahl      Thema (eines der Arbeitsblätter) und Seite (dafür / dagegen) wählen
 *   text      den Leserbrief aus dem Heft abtippen (oder hier schreiben); die erste Fassung wird gemerkt
 *   schritte  Schritt für Schritt überarbeiten. art "inhalt": Punkte abhaken, Stelle markieren, Denkanstoß.
 *             art "rs": Rechtschreibstellen markiert, mit Fehlerart und Tipp – die Lösung nur auf Wunsch.
 *             Geschafft, wenn alles da ist bzw. keine Stelle mehr gefunden wird; nach drei Prüfungen darf das Kind auch so
 *             weiter (die KI antwortet nicht immer gleich). Ohne KI hakt das Kind selbst ab.
 *   ergebnis  vorher – nachher, Überblick über die Schritte, drucken
 * Konfiguration an jedem Teil gleich (teil.werk): { min, themen: [{ id, titel, frage, quelle, artikel, dafuer, dagegen, blatt }],
 *   schritte: [{ id, titel, kurz, was, art: "inhalt"|"rs", punkte: [{ name, was, ki }], hilfen: ["…"] }] }
 * Lernstand: werk-wahl, werk-text und werk-<schritt>. Mit Code bekommt die Lehrkraft jede geprüfte Fassung (Aufgabe
 * „werkstatt“; die erste bleibt immer) und kann das Kind an einem anderen Gerät weitermachen.
 */
(function () {
  "use strict";
  const M = window.Modul, { $, $$, esc } = M, K = window.D7Kit;
  const DNR = window.DEUTSCH_NR || 7, DAPI = "/api/d" + DNR, AUFGABE = "werkstatt";
  const ZEIGEN = 8;          // so viele Rechtschreibstellen auf einmal – erst diese verbessern, dann neu prüfen
  const WEITER_NACH = 3;     // nach so vielen Prüfungen eines Schritts darf das Kind auch so weiter
  let W = null, geladen = false;
  const st = { thema: "", seite: "", erst: "", schritte: {} };
  let TEXT = "";

  /* ---------- Stand ---------- */
  function laden() {
    if (geladen) return;
    geladen = true;
    try { Object.assign(st, JSON.parse(M.load("-werk", "{}")) || {}); } catch (_e) {}
    st.schritte = st.schritte || {};
    TEXT = M.load("-werk-text", "");
  }
  const sichern = () => { M.save("-werk", JSON.stringify(st)); document.dispatchEvent(new CustomEvent("werk-stand")); };
  const textSetzen = (t, quelle) => { TEXT = t; M.save("-werk-text", t); document.dispatchEvent(new CustomEvent("werk-text", { detail: quelle })); };
  const thema = () => W.themen.find(t => t.id === st.thema) || null;
  const seiteText = () => st.seite === "dafuer" ? "dafür" : st.seite === "dagegen" ? "dagegen" : "";
  const schrittStand = id => (st.schritte[id] = st.schritte[id] || { versuche: 0 });
  const fertig = s => M.isSolved("werk-" + s.id);
  const erledigt = s => fertig(s) || schrittStand(s.id).weiter;
  const zaehle = t => K.woerter(t);

  // Text mit markierter Stelle (die KI zitiert wörtlich; Leerzeichen und Groß-/Kleinschreibung dürfen abweichen)
  function markiert(text, stelle) {
    if (!stelle) return esc(text);
    const muster = stelle.trim().split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("\\s+");
    const m = new RegExp(muster, "i").exec(text);
    return m ? esc(text.slice(0, m.index)) + "<mark>" + esc(m[0]) + "</mark>" + esc(text.slice(m.index + m[0].length)) : esc(text);
  }

  /* ---------- Teil „wahl“: Thema und Seite ---------- */
  function wahl(box) {
    M.register("werk-wahl", box, "Thema und Seite wählen");
    const zeichne = () => {
      const t = thema();
      box.innerHTML = `<div class="wk-themen" role="group" aria-label="Thema wählen">${W.themen.map((x, i) => `<button type="button" class="wk-thema${x.id === st.thema ? " an" : ""}" data-thema="${esc(x.id)}" aria-pressed="${x.id === st.thema}">
          <span class="wk-nr">Arbeitsblatt ${i + 1}</span><b>${esc(x.titel)}</b><span>${esc(x.frage)}</span></button>`).join("")}</div>
        ${t ? `<div class="beispiel wk-artikel"><b class="kopf">Aus der Zeitung · ${esc(t.quelle)}</b><p><strong>${esc(t.titel)}</strong></p><p>${esc(t.artikel)}</p>
          <p class="wk-frage">❓ ${esc(t.frage)}</p>
          <p class="wk-ideen"><span>👍 Ideen dafür: ${esc(t.dafuer)}</span><span>👎 Ideen dagegen: ${esc(t.dagegen)}</span></p>
          ${t.blatt ? `<p><a class="btn small ghost" href="${esc(t.blatt)}" target="_blank" rel="noopener">📄 Arbeitsblatt ${W.themen.indexOf(t) + 1} öffnen (PDF)</a></p>` : ""}</div>
          <p class="wk-seite-frage"><b>Für welche Seite hast du geschrieben?</b></p>
          <div class="wk-seiten"><button type="button" class="btn small ${st.seite === "dafuer" ? "teal" : "ghost"}" data-seite="dafuer">👍 Ich bin dafür</button><button type="button" class="btn small ${st.seite === "dagegen" ? "teal" : "ghost"}" data-seite="dagegen">👎 Ich bin dagegen</button></div>` : '<p class="hint">Tippe das Thema an, zu dem du deinen Leserbrief geschrieben hast.</p>'}
        <div class="fb${t && st.seite ? " show ok" : ""}">${t && st.seite ? "✅ Thema: „" + esc(t.titel) + "“ – du bist " + seiteText() + ". Weiter bei Station 2: Tippe deinen Leserbrief ab." : ""}</div>`;
    };
    box.addEventListener("click", e => {
      const b = e.target.closest("[data-thema]"), s = e.target.closest("[data-seite]");
      if (b) { if (b.dataset.thema !== st.thema) st.seite = ""; st.thema = b.dataset.thema; }
      else if (s) st.seite = s.dataset.seite;
      else return;
      if (st.thema && st.seite) M.solve("werk-wahl");
      sichern(); zeichne();
    });
    zeichne();
  }

  /* ---------- Teil „text“: abtippen ---------- */
  function text(box) {
    M.register("werk-text", box, "Leserbrief abtippen");
    const min = W.min || 50;
    box.innerHTML = `<div class="schreib"><div class="wk-kopf" aria-live="polite"></div>
      <textarea class="wk-ta" aria-label="Dein Leserbrief" placeholder="Sehr geehrte Redaktion,&#10;&#10;in Ihrem Artikel geht es um …"></textarea>
      <div class="schreib-fuss"><span class="schreib-zahl"></span><button class="btn teal go" type="button">✅ Fertig abgetippt – jetzt überarbeiten</button><span class="schreib-status" role="status"></span></div></div>`;
    const ta = $("textarea", box), zahl = $(".schreib-zahl", box), status = $(".schreib-status", box), kopf = $(".wk-kopf", box);
    const zaehlen = () => { const n = zaehle(ta.value); zahl.textContent = n + (n === 1 ? " Wort" : " Wörter") + " · mindestens " + min; zahl.classList.toggle("gut", n >= min); return n; };
    const kopfZeichnen = () => {
      const t = thema();
      kopf.innerHTML = t ? `<p class="wk-gewaehlt">📰 <b>${esc(t.titel)}</b> · du bist <b>${seiteText() || "?"}</b></p>` : '<p class="wk-gewaehlt wk-fehlt">Wähle zuerst bei Station 1 dein Thema.</p>';
    };
    ta.value = TEXT; zaehlen(); kopfZeichnen();
    if (st.erst) status.textContent = "✅ Deine erste Fassung ist gemerkt. Verbessern kannst du ab jetzt bei Station 3.";
    ta.addEventListener("input", () => { textSetzen(ta.value, "abtippen"); zaehlen(); });
    document.addEventListener("werk-text", e => { if (e.detail !== "abtippen" && document.activeElement !== ta) { ta.value = TEXT; zaehlen(); } });
    document.addEventListener("werk-stand", kopfZeichnen);
    $(".go", box).addEventListener("click", () => {
      if (!thema() || !st.seite) { status.textContent = "Wähle zuerst bei Station 1 dein Thema und deine Seite."; return; }
      if (zaehlen() < min) { status.textContent = "Dein Brief hat noch keine " + min + " Wörter. Tippe ihn ganz ab – mit Anrede, beiden Argumenten, Schluss und Gruß."; return; }
      if (!st.erst) st.erst = ta.value.trim();
      M.solve("werk-text"); sichern();
      status.textContent = "✅ Gemerkt: So sah dein Brief am Anfang aus. Jetzt geht es bei Station 3 Schritt für Schritt ans Verbessern.";
    });
  }

  /* ---------- Teil „schritte“: Schritt für Schritt überarbeiten ---------- */
  function schritte(box) {
    W.schritte.forEach(s => M.register("werk-" + s.id, box, "Leserbrief überarbeiten: " + s.titel));
    let aktiv = Math.max(0, W.schritte.findIndex(s => !erledigt(s)));
    if (W.schritte.every(erledigt)) aktiv = W.schritte.length - 1;
    box.innerHTML = '<ol class="wk-leiste" aria-label="Schritte"></ol><div class="wk-schritt"></div>';
    const leiste = $(".wk-leiste", box), feld = $(".wk-schritt", box);
    const offen = i => i === 0 || W.schritte.slice(0, i).every(erledigt);

    function leisteZeichnen() {
      leiste.innerHTML = W.schritte.map((s, i) => {
        const z = fertig(s) ? "✓" : schrittStand(s.id).weiter ? "→" : offen(i) ? i + 1 : "🔒";
        return `<li><button type="button" data-schritt="${i}" class="${i === aktiv ? "an " : ""}${fertig(s) ? "ok" : ""}" ${offen(i) ? "" : "disabled"} aria-current="${i === aktiv ? "step" : "false"}"><span>${z}</span>${esc(s.kurz || s.titel)}</button></li>`;
      }).join("");
    }

    function zeichne() {
      leisteZeichnen();
      const s = W.schritte[aktiv], ss = schrittStand(s.id), rs = s.art === "rs";
      if (!st.erst) { feld.innerHTML = '<p class="wk-gewaehlt wk-fehlt">Tippe zuerst bei Station 2 deinen Leserbrief ab und tippe dort auf „Fertig abgetippt“.</p>'; return; }
      feld.innerHTML = `<div class="schreib wk-karte"><h4>Schritt ${aktiv + 1} von ${W.schritte.length}: ${esc(s.titel)}</h4>
        <div class="schreib-auftrag">${s.was}</div>
        ${rs ? "" : `<ul class="kor-bau wk-punkte" aria-label="Das prüft die KI in diesem Schritt">${s.punkte.map(p => `<li><span class="z">·</span><span><b>${esc(p.name)}</b>${p.was ? " – " + esc(p.was) : ""}</span></li>`).join("")}</ul>`}
        <textarea class="wk-ta" aria-label="Dein Leserbrief"></textarea>
        <div class="schreib-fuss"><span class="schreib-zahl"></span><button class="btn teal go" type="button">✨ KI prüft: ${esc(s.kurz || s.titel)}</button><span class="schreib-status" role="status"></span></div>
        <div class="wk-aus" hidden aria-live="polite"></div><div class="wk-hilfen"></div></div>`;
      const ta = $("textarea", feld), zahl = $(".schreib-zahl", feld), status = $(".schreib-status", feld), aus = $(".wk-aus", feld), go = $(".go", feld);
      const zaehlen = () => { const n = zaehle(ta.value); zahl.textContent = n + (n === 1 ? " Wort" : " Wörter"); return n; };
      ta.value = TEXT; zaehlen();
      ta.style.minHeight = Math.min(26, Math.max(10, TEXT.split("\n").length + 4)) * 1.6 + "em";
      if (s.hilfen && s.hilfen.length) K.hilfen($(".wk-hilfen", feld), s.hilfen);
      const veraltet = () => { const alt = ss.text !== undefined && ss.text !== ta.value; aus.classList.toggle("wk-alt", alt); const h = $(".wk-alt-hinweis", aus); if (h) h.hidden = !alt; };
      ta.addEventListener("input", () => { textSetzen(ta.value, "schritt"); zaehlen(); veraltet(); });
      if (ss.r) { zeige(ss.r); veraltet(); }

      function zeige(r) {
        aus.hidden = false;
        const ki = r.quelle === "ki", geschafft = fertig(s);
        const weiterKnopf = aktiv < W.schritte.length - 1 ? `<button class="btn small teal wk-weiter" type="button">Weiter zu Schritt ${aktiv + 2} →</button>` : '<a class="btn small teal" href="#s4">Zu deinem Ergebnis ↓</a>';
        const ueberspringen = !geschafft && ss.versuche >= WEITER_NACH ? `<p class="wk-notiz">Du hast diesen Schritt schon ${ss.versuche}-mal prüfen lassen. Du darfst auch so weitergehen – frag sonst deine Lehrkraft. <button class="btn small ghost wk-ueberspringen" type="button">Trotzdem weiter →</button></p>` : "";
        let h = '<p class="wk-alt-hinweis" hidden>✏️ Du hast deinen Text seit der Prüfung geändert – lass ihn noch einmal prüfen.</p>';
        if (rs) {
          const sichtbar = r.fehler.slice(0, ZEIGEN);
          if (ki) {
            h += r.fehler.length ? `<h4>🔍 Die KI hat ${r.fehler.length === 1 ? "1 Stelle" : r.fehler.length + " Stellen"} gefunden${r.fehler.length > ZEIGEN ? " – hier sind die ersten " + ZEIGEN : ""}</h4>
              <div class="kor-blatt wk-blatt">${r.teile.map(x => (x.f ? (x.f <= ZEIGEN ? `<mark class="wk-f">${esc(r.fehler[x.f - 1].alt) || "‸"}<sup>${x.f}</sup></mark>` : esc(r.fehler[x.f - 1].alt)) : esc(x.t)) + esc(x.ws || "")).join("")}</div>
              <ol class="wk-fehler">${sichtbar.map(f => `<li><b>${esc(f.name)}</b>${f.alt ? " bei „" + esc(f.alt) + "“" : ""}: ${esc(f.tipp)} <button class="btn small ghost" type="button" data-loesung="${f.nr}">👀 Lösung</button><span class="wk-loesung" data-zu="${f.nr}" hidden> → <b>${f.neu ? esc(f.neu) : "weglassen"}</b></span></li>`).join("")}</ol>
              <p class="wk-notiz">✍️ Verbessere die markierten Stellen oben in deinem Text selbst. Schau erst nach der Lösung, wenn du nicht weiterkommst.${r.fehler.length > ZEIGEN ? " Danach lass noch einmal prüfen – dann kommen die nächsten Stellen." : ""}</p>`
              : "<h4>✅ Die KI hat keinen Rechtschreib- oder Zeichenfehler mehr gefunden.</h4>";
          } else h += `<h4>Prüfe selbst</h4><p>Die KI ist gerade nicht erreichbar. Lies deinen Text Wort für Wort, am besten von hinten nach vorn: Großschreibung? Komma vor weil, dass, denn? Punkt am Satzende?</p>
              <label class="wk-selbst"><input type="checkbox" ${geschafft ? "checked" : ""}> Ich habe meinen Text Wort für Wort geprüft und verbessert.</label>`;
        } else {
          h += `<ul class="kor-bau wk-ergebnis">${s.punkte.map((p, i) => {
            const x = r.punkte[i] || {}, name = `<b>${esc(p.name)}</b>`;
            if (!ki) return `<li><label><input type="checkbox" data-selbst="${i}" ${geschafft ? "checked" : ""}> <span>${name}${p.was ? " – " + esc(p.was) : ""}</span></label></li>`;
            return `<li class="${x.ok ? "ok" : "no"}"><span class="z">${x.ok ? "✓" : "○"}</span><span>${name}${x.ok ? "" : " <em>– fehlt noch</em>" + (x.hinweis ? `<br><span class="wk-hinweis">💭 ${esc(x.hinweis)}</span>` : "")}</span></li>`;
          }).join("")}</ul>
            ${ki && r.lob ? `<p class="kor-lob">👍 ${esc(r.lob)}</p>` : ""}
            ${ki && r.stelle ? `<p class="wk-stelle-kopf">📍 An dieser Stelle kannst du ansetzen:</p><div class="kor-blatt wk-blatt">${markiert(ss.text || TEXT, r.stelle)}</div>` : ""}
            ${r.tipp ? `<p class="kor-hin">🎯 ${esc(r.tipp)}</p>` : ""}
            ${!ki ? "<p class=\"wk-notiz\">Die KI ist gerade nicht erreichbar. Prüfe die Punkte selbst und hake ab, was in deinem Text steht.</p>" : ""}`;
        }
        h += geschafft ? `<p class="kor-ziel ok">✅ Schritt geschafft!</p><div class="row-btns">${weiterKnopf}</div>`
          : ki && !(rs && r.fehler.length === 0) ? `<p class="kor-ziel">✍️ Verbessere deinen Text oben selbst und lass dann noch einmal prüfen.</p>${ueberspringen}` : ueberspringen;
        aus.innerHTML = h;
      }

      aus.addEventListener("click", e => {
        const l = e.target.closest("[data-loesung]");
        if (l) { const z = $(`[data-zu="${l.dataset.loesung}"]`, aus); z.hidden = false; l.remove(); return; }
        if (e.target.closest(".wk-weiter")) { aktiv++; zeichne(); feld.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
        if (e.target.closest(".wk-ueberspringen")) { ss.weiter = true; sichern(); if (aktiv < W.schritte.length - 1) aktiv++; zeichne(); }
      });
      // ohne KI: selbst abhaken – sind alle Punkte abgehakt, ist der Schritt geschafft
      aus.addEventListener("change", () => {
        const boxen = $$("input[type=checkbox]", aus);
        if (boxen.length && boxen.every(c => c.checked)) { M.solve("werk-" + s.id); sichern(); zeige(ss.r); leisteZeichnen(); }
      });

      go.addEventListener("click", async () => {
        const t = thema(), a = M.anmeldung(), jetzt = ta.value.trim();
        if (zaehlen() < 20) { status.textContent = "Dein Text ist noch sehr kurz. Tippe bei Station 2 deinen ganzen Leserbrief ab."; return; }
        go.disabled = true; ta.readOnly = true; status.innerHTML = '<span class="dots">Die KI liest deinen Brief</span>';
        const langsam = setTimeout(() => { status.innerHTML = '<span class="dots">Der KI-Server wacht gerade auf – das kann bis zu einer Minute dauern</span>'; }, 7000);
        let r = null;
        try {
          const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
          const antwort = await fetch(K.server + DAPI + "/schreiben/werkstatt", { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl.signal,
            body: JSON.stringify({ code: a ? a.code : "", modul: K.modul(), aufgabe: AUFGABE, titel: "Mein Leserbrief" + (t ? ": " + t.titel : ""),
              auftrag: "Leserbrief an die Redaktion zum Thema „" + (t ? t.titel : "") + "“ – selbst überarbeitet, Schritt für Schritt.",
              schritt: { id: s.id, titel: s.titel, art: rs ? "rs" : "inhalt" }, punkte: rs ? [] : s.punkte.map(p => p.name + ": " + (p.ki || p.was || "")),
              thema: t ? t.titel + ". " + t.artikel + " Frage: " + t.frage : "", seite: seiteText(), text: jetzt, zug: K.zug() }) });
          clearTimeout(frist);
          const d = await antwort.json().catch(() => null);
          if (antwort.status === 429 && d) { status.textContent = d.error; return; }
          if (antwort.ok && d && d.ok) r = d;
        } catch (_e) { r = null; } finally { clearTimeout(langsam); go.disabled = false; ta.readOnly = false; }
        if (!r) r = rs ? { quelle: "lokal", teile: [], fehler: [] } : { quelle: "lokal", punkte: s.punkte.map(() => ({ ok: null })), tipp: "" };
        ss.versuche = (ss.versuche || 0) + 1; ss.r = r; ss.text = jetzt;
        if (r.quelle === "ki" && (rs ? r.fehler.length === 0 : r.vollstaendig)) M.solve("werk-" + s.id);
        sichern(); zeige(r); veraltet(); leisteZeichnen();
        status.textContent = r.gespeichert ? "Fassung " + r.fassung + " ist für deine Lehrkraft gespeichert." : a ? "" : "Nicht gespeichert: Mit deinem Code angemeldet sieht auch deine Lehrkraft deinen Brief.";
      });
    }

    leiste.addEventListener("click", e => { const b = e.target.closest("[data-schritt]"); if (!b || b.disabled) return; aktiv = +b.dataset.schritt; zeichne(); });
    document.addEventListener("werk-stand", () => { if (!feld.querySelector("textarea")) zeichne(); else leisteZeichnen(); });
    document.addEventListener("werk-text", e => { const ta = $("textarea", feld); if (ta && e.detail !== "schritt" && document.activeElement !== ta) ta.value = TEXT; });
    zeichne();
  }

  /* ---------- Teil „ergebnis“: vorher – nachher ---------- */
  function ergebnis(box) {
    const zeichne = () => {
      const t = thema(), n0 = zaehle(st.erst), n1 = zaehle(TEXT);
      box.innerHTML = st.erst ? `<p class="wk-gewaehlt">📰 ${t ? "<b>" + esc(t.titel) + "</b> · " : ""}du bist <b>${seiteText() || "?"}</b></p>
        <ul class="wk-ueberblick">${W.schritte.map(s => `<li class="${fertig(s) ? "ok" : ""}">${fertig(s) ? "✅" : schrittStand(s.id).weiter ? "➡️" : "⬜"} ${esc(s.titel)}${schrittStand(s.id).versuche ? ` <small>(${schrittStand(s.id).versuche}× geprüft)</small>` : ""}</li>`).join("")}</ul>
        <div class="wk-vergleich"><div><h4>Vorher <small>${n0} Wörter</small></h4><div class="kor-blatt">${esc(st.erst)}</div></div>
          <div><h4>Nachher <small>${n1} Wörter</small></h4><div class="kor-blatt">${esc(TEXT)}</div></div></div>
        <div class="row-btns"><button class="btn small ghost wk-druck" type="button">🖨 Meinen Leserbrief drucken</button></div>
        <p class="hint">Lies beide Fassungen nebeneinander: Was hast du verbessert? Schreibe deinen fertigen Brief ordentlich ab oder drucke ihn aus.</p>`
        : '<p class="kor-blatt leer">Hier siehst du am Ende deinen Brief vorher und nachher – sobald du ihn bei Station 2 abgetippt hast.</p>';
    };
    box.addEventListener("click", e => {
      if (!e.target.closest(".wk-druck")) return;
      const t = thema(), f = window.open("", "_blank");
      if (!f) return;
      f.document.write(`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Mein Leserbrief</title><style>body{font:16px/1.6 Georgia,serif;max-width:640px;margin:40px auto;padding:0 20px;color:#111}h1{font:700 1.1rem system-ui,sans-serif;color:#555}pre{white-space:pre-wrap;font:inherit}</style></head><body><h1>Leserbrief${t ? " – " + esc(t.titel) : ""}</h1><pre>${esc(TEXT)}</pre><script>print()<\/script></body></html>`);
      f.document.close();
    });
    document.addEventListener("werk-stand", zeichne);
    document.addEventListener("werk-text", zeichne);
    zeichne();
  }

  // Mit Code: Stand von einem anderen Gerät holen (erste und letzte geprüfte Fassung), wenn hier noch nichts steht
  function vomServer() {
    const a = M.anmeldung();
    if (!a || !a.code || TEXT.trim()) return;
    fetch(K.server + DAPI + "/texte/meine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code, modul: K.modul(), aufgabe: AUFGABE }) })
      .then(r => r.json()).then(d => {
        if (!d || !d.ok || !d.fassungen || !d.fassungen.length || TEXT.trim()) return;
        const seit = d.neuSeit || 0, neuere = d.fassungen.filter(f => !seit || Date.parse(f.zeit) > seit);
        if (!neuere.length) return;
        if (!st.erst) st.erst = neuere[0].text;
        textSetzen(neuere[neuere.length - 1].text, "server"); sichern();
      }).catch(() => {});
  }

  K.bauer.werkstatt = (box, teil) => {
    if (!W) W = teil.werk;
    laden();
    ({ wahl, text, schritte, ergebnis })[teil.teil](box, teil);
    if (teil.teil === "text") vomServer();
  };
})();
