/* Deutsch 8: Baustein „aufsatz“ – die Schreibwerkstatt der Lernmodule (Lernmodus).
 * Immer in vier Schritten: 1 Planen → 2 Schreiben → 3 Überarbeiten → 4 Abgeben.
 * Die Schreibfläche ist der Aufsatzeditor (../../7M/Deutsch/aufsatz-editor.js), derselbe wie in den Proben.
 *
 *   { art: "aufsatz", id: "aufsatz", titel: "Stellungnahme: Handy in der Pause?",
 *     form: "stellungnahme",                 Schreibform = Planungswerkzeug (siehe aufsatz-editor.js: PLAENE) – oder plan: [{ id, label, hilfe }];
 *                                            für R8 und M8 verschieden: form: { R: "stellungnahme", M: "argumentation" }
 *     auftrag: "<p>…</p>",                   Aufgabenstellung; für R8 und M8 verschieden: { R: "…", M: "…" }
 *     material: { lesetext: "text-id" },     optional: Lesetext aus der Textdatenbank ({ R: "id", M: "id" } geht auch) oder { html: "…" }
 *     min: { R: 110, M: 160 },               Mindestzahl der Wörter (oder eine Zahl für beide)
 *     kriterien: ["…"],                      Checkliste zum Überarbeiten (auch: { R: […], M: […] }); der Schreibcoach hakt sie ab
 *     starter: ["Ich bin der Meinung, …"] }  Satzanfänge: R8 sieht sie sofort, M8 erst auf Knopfdruck
 *
 * Speichern: bei jeder Eingabe auf diesem Gerät; mit Code zusätzlich auf dem Server (Entwurf, /api/d8/texte/entwurf) –
 * so geht es an einem anderen Gerät weiter. Fällt die Verbindung aus, steht „Noch nicht synchronisiert“ da, und das
 * Skript versucht es von selbst wieder.
 * Schreibcoach (Schritt 3): Rückmeldung der KI in fünf Teilen zu einem Schwerpunkt, den das Kind wählt. Er schreibt
 * keinen Satz für das Kind. Einfügen ist im Lernmodus erlaubt; es wird nichts überwacht.
 * Abgeben (Schritt 4): legt den Text als Fassung für die Lehrkraft ab. Danach darf weiter überarbeitet und noch einmal
 * abgegeben werden – frühere Fassungen bleiben. Zum Lernfortschritt zählt die Aufgabe, sobald ein Text mit der
 * Mindestlänge abgegeben oder vom Schreibcoach gelesen wurde.
 */
(function () {
  "use strict";
  const M = window.Modul, { $, $$, esc } = M, K = window.D7Kit, AE = window.AufsatzEditor;
  const DNR = (window.GRUMI_KURS && window.GRUMI_KURS.NR) || 8, DAPI = "/api/d" + DNR;
  const SCHRITTE = [
    ["planen", "Planen", "Lies die Aufgabenstellung genau. Halte deine Gedanken in Stichpunkten fest – ein guter Plan ist der halbe Text."],
    ["schreiben", "Schreiben", "Schreibe jetzt deinen Text. Deine Planung und die Aufgabenstellung kannst du jederzeit einblenden."],
    ["ueberarbeiten", "Überarbeiten", "Lies deinen Text noch einmal – am besten halblaut. Prüfe ihn mit der Checkliste und hol dir einen Hinweis vom Schreibcoach."],
    ["abgeben", "Abgeben", "Wenn du zufrieden bist, gib deinen Text ab. Deine Lehrkraft kann ihn dann lesen und kommentieren."]
  ];
  const FOKUS = [["inhalt", "Inhalt"], ["aufbau", "Aufbau"], ["sprache", "Sprache"], ["belege", "Belege und Beispiele"]];
  const klartext = html => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent.replace(/\s+/g, " ").trim(); };
  const uhr = iso => { const d = iso ? new Date(iso) : new Date(); return isNaN(d) ? "" : d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }); };
  const tag = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" }) + ", " + uhr(iso) + " Uhr"; };

  K.bauer.aufsatz = (box, teil) => {
    const ZUG = K.zug(), id = teil.id;
    const fuerZug = x => (x && typeof x === "object" && !Array.isArray(x) && (x.R !== undefined || x.M !== undefined) ? (x[ZUG] !== undefined ? x[ZUG] : x.M !== undefined ? x.M : x.R) : x);
    const auftrag = fuerZug(teil.auftrag) || "", min = Number(fuerZug(teil.min)) || 80, kriterien = fuerZug(teil.kriterien) || [], starter = fuerZug(teil.starter) || [];
    const mat = teil.material || null;
    const material = mat ? (mat.html || (mat.lesetext ? window.D7Lesetext.html(K.textFuer(mat.lesetext)) : "")) : "";
    const titel = teil.titel || klartext(auftrag).slice(0, 80);
    M.register(id, box, "Aufsatz: " + titel);

    box.innerHTML = `<div class="aw" data-schritt="planen">
      <ol class="aw-schritte" aria-label="Schritte der Schreibwerkstatt">${SCHRITTE.map((s, i) => `<li><button type="button" data-s="${s[0]}"><b>${i + 1}</b><span>${s[1]}</span></button></li>`).join("")}</ol>
      <p class="aw-hinweis" role="status"></p>
      <div class="lehrer-kommentar" hidden></div>
      <div class="aw-ueber" hidden>
        ${kriterien.length ? `<div class="aw-check"><h4>✔️ Checkliste</h4><ul class="schreib-check">${kriterien.map(k => `<li><label><input type="checkbox"> <span>${esc(k)}</span></label></li>`).join("")}</ul></div>` : ""}
        <div class="aw-coach"><h4>✨ Schreibcoach</h4>
          <p>Wozu möchtest du einen Hinweis? Der Schreibcoach liest deinen Text und gibt dir einen Tipp – schreiben und verbessern musst du selbst.</p>
          <div class="aw-fokus" role="group" aria-label="Schwerpunkt">${FOKUS.map((f, i) => `<button type="button" data-f="${f[0]}" aria-pressed="${i ? "false" : "true"}" class="${i ? "" : "an"}">${f[1]}</button>`).join("")}</div>
          <div class="schreib-fuss"><button class="btn teal coach" type="button">✨ Hinweis holen</button><span class="schreib-status" role="status"></span></div>
          <div class="rueck" hidden aria-live="polite"></div>
        </div>
      </div>
      ${starter.length ? `<div class="aw-starter" hidden><span>Satzanfänge:</span>${starter.map(s => `<button type="button">${esc(s)}</button>`).join("")}</div><p class="aw-starter-auf" hidden><button class="btn small ghost" type="button">💡 Satzanfänge anzeigen</button></p>` : ""}
      <div class="aw-editor"></div>
      <div class="aw-abgabe" hidden></div>
      <div class="aw-nav"><button class="btn ghost zurueck" type="button">← Zurück</button><button class="btn weiter" type="button"></button></div>
    </div>`;
    const aw = $(".aw", box), hinweis = $(".aw-hinweis", box), ueber = $(".aw-ueber", box), abgabe = $(".aw-abgabe", box), rueck = $(".rueck", box), cstatus = $(".schreib-status", box);
    const a = M.anmeldung(), mitCode = !!(a && a.code && a.klasse !== "Lehrkraft");

    /* ---------- Speichern: Gerät sofort, Server kurz danach ---------- */
    let schmutzig = false, sendet = false, takt = null, abgegeben = null, letzterText = "";
    const lokal = () => { try { return { text: M.load("-" + id, ""), plan: JSON.parse(M.load("-" + id + "-plan", "{}")) || {}, zeit: Number(M.load("-" + id + "-zeit", "0")) || 0 }; } catch (_e) { return { text: "", plan: {}, zeit: 0 }; } };
    const start = lokal();
    const ed = AE.bauen($(".aw-editor", box), {
      name: "Dein Text: " + titel, auftrag, material, form: fuerZug(teil.form), plan: fuerZug(teil.plan), zug: ZUG, min, max: 8000, text: start.text, planWerte: start.plan,
      onChange(w) {
        M.save("-" + id, w.text); M.save("-" + id + "-plan", JSON.stringify(w.plan)); M.save("-" + id + "-zeit", String(Date.now()));
        if (!mitCode) { ed.status("lokal"); return; }
        schmutzig = true; ed.status("laeuft");
        plane(2500);
      }
    });
    // planNamen: Beschriftungen der Planungsfelder – so stehen sie auch bei der Lehrkraft, wenn das Modul eigene Felder hat
    const kopf = () => ({ code: a.code, modul: K.modul(), aufgabe: id, titel, auftrag: klartext(auftrag), planNamen: Object.fromEntries(ed.planFelder.map(f => [f.id, f.label])) });
    function plane(ms) { clearTimeout(takt); takt = setTimeout(() => { takt = null; sichern(); }, ms); }
    async function sichern(beimGehen) {
      if (!mitCode || !schmutzig) return;
      if (sendet) { if (!takt) plane(1500); return; }       // läuft gerade: gleich noch einmal
      clearTimeout(takt); takt = null; sendet = true; schmutzig = false;
      const w = ed.wert();
      try {
        const r = await fetch(K.server + DAPI + "/texte/entwurf", { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: !!beimGehen, body: JSON.stringify({ ...kopf(), text: w.text, plan: w.plan }) });
        const d = await r.json().catch(() => null);
        if (!r.ok || !d || !d.ok) throw new Error("nicht gespeichert");
        if (!schmutzig) ed.status("ok", "Gespeichert ✓ " + uhr(d.zeit));
      } catch (_e) {
        schmutzig = true; ed.status("offen");
        plane(12000);                                         // von selbst wieder versuchen
      } finally { sendet = false; if (schmutzig && !takt) plane(2500); }
    }
    window.addEventListener("online", () => { if (schmutzig) sichern(); });
    window.addEventListener("pagehide", () => sichern(true));
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") sichern(true); });
    ed.status(mitCode ? (start.text ? "laeuft" : "") : "lokal", mitCode ? (start.text ? "Stand wird abgeglichen …" : "Wird beim Schreiben automatisch gespeichert") : "");

    /* ---------- Schritte ---------- */
    function schritt(name, rollen) {
      const i = Math.max(0, SCHRITTE.findIndex(s => s[0] === name)), s = SCHRITTE[i];
      aw.dataset.schritt = s[0]; M.save("-" + id + "-schritt", s[0]);
      $$(".aw-schritte button", box).forEach((b, k) => { b.classList.toggle("an", k === i); b.classList.toggle("fertig", k < i); if (k === i) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
      hinweis.textContent = s[2];
      ed.nurPlan(s[0] === "planen");
      if (s[0] !== "planen") { ed.zeige("auftrag", false); ed.zeige("plan", false); }
      ueber.hidden = s[0] !== "ueberarbeiten";
      abgabe.hidden = s[0] !== "abgeben";
      const st = $(".aw-starter", box), auf = $(".aw-starter-auf", box);
      if (st) { const zeigen = s[0] === "schreiben"; st.hidden = !(zeigen && (ZUG === "R" || st.dataset.auf === "1")); auf.hidden = !(zeigen && st.hidden); }
      $(".zurueck", box).hidden = i === 0;
      const w = $(".weiter", box); w.hidden = i === SCHRITTE.length - 1;
      if (i < SCHRITTE.length - 1) w.textContent = "Weiter: " + SCHRITTE[i + 1][1] + " →";
      if (s[0] === "abgeben") zeichneAbgabe();
      if (material) setTimeout(() => window.D7Lesetext.einpassen(box), 30);
      if (rollen) { try { aw.scrollIntoView({ behavior: M.reduced ? "auto" : "smooth", block: "start" }); } catch (_e) {} }
    }
    box.addEventListener("click", e => {
      const s = e.target.closest(".aw-schritte button"); if (s) { schritt(s.dataset.s, false); return; }
      const jetzt = SCHRITTE.findIndex(x => x[0] === aw.dataset.schritt);
      if (e.target.closest(".weiter")) { schritt(SCHRITTE[Math.min(SCHRITTE.length - 1, jetzt + 1)][0], true); return; }
      if (e.target.closest(".zurueck")) { schritt(SCHRITTE[Math.max(0, jetzt - 1)][0], true); return; }
      if (e.target.closest(".aw-starter-auf")) { const st = $(".aw-starter", box); st.dataset.auf = "1"; st.hidden = false; $(".aw-starter-auf", box).hidden = true; return; }
      const sa = e.target.closest(".aw-starter button");
      if (sa) {                                   // Satzanfang an der Schreibmarke einsetzen
        const ta = ed.feld, vor = ta.value.slice(0, ta.selectionStart), nach = ta.value.slice(ta.selectionEnd), neu = (vor && !/\s$/.test(vor) ? " " : "") + sa.textContent + " ";
        ta.value = vor + neu + nach; ta.dispatchEvent(new Event("input", { bubbles: true }));
        try { ta.focus(); ta.setSelectionRange((vor + neu).length, (vor + neu).length); } catch (_e) {}
        return;
      }
      const f = e.target.closest(".aw-fokus button");
      if (f) { $$(".aw-fokus button", box).forEach(b => { b.classList.toggle("an", b === f); b.setAttribute("aria-pressed", b === f ? "true" : "false"); }); return; }
      if (e.target.closest(".ae-k")) { if (material) setTimeout(() => window.D7Lesetext.einpassen(box), 30); return; }
      if (e.target.closest(".coach")) coach();
      if (e.target.closest(".abgeben")) gibAb();
      if (e.target.closest(".aw-an")) { if (window.Lernstand && window.Lernstand.anmelden) window.Lernstand.anmelden(); }
    });

    /* ---------- Schritt 3: Schreibcoach ---------- */
    function zeigeRueck(fb) {
      const liste = $$(".schreib-check li", box), selbst = fb.quelle !== "ki";
      if (!selbst) (fb.checkliste || []).forEach((c, k) => {
        const li = liste[k]; if (!li) return;
        li.className = c.ok ? "ok" : "no"; li.innerHTML = `<span class="z">${c.ok ? "✓" : "○"}</span><span>${esc(c.text)}</span>`;
      });
      rueck.hidden = false;
      rueck.innerHTML = `<h4>${selbst ? "Prüfe deinen Text selbst" : "✨ Hinweis vom Schreibcoach"}</h4><dl>
        ${fb.gelungen ? `<dt>✅ Gelungen</dt><dd>${esc(fb.gelungen)}</dd>` : ""}
        ${fb.naechstes ? `<dt>🎯 Als Nächstes</dt><dd>${esc(fb.naechstes)}</dd>` : ""}
        ${fb.stelle ? `<dt>📍 Die Stelle</dt><dd><span class="stelle">${esc(fb.stelle)}</span></dd>` : ""}
        ${fb.tipp ? `<dt>💡 Tipp</dt><dd>${esc(fb.tipp)}</dd>` : ""}</dl>
        <p class="selbst">✍️ Jetzt bist du dran: ${selbst ? "Hake die Checkliste ab und verbessere, was noch fehlt." : "Verbessere die Stelle selbst. Danach kannst du einen neuen Hinweis holen."}</p>`;
    }
    async function coach() {
      const w = ed.wert(), n = K.woerter(w.text), go = $(".coach", box);
      if (n < Math.min(min, 40)) { cstatus.textContent = "Schreibe erst ein Stück weiter (mindestens " + Math.min(min, 40) + " Wörter) – dann lohnt sich ein Hinweis."; return; }
      go.disabled = true; cstatus.innerHTML = '<span class="dots">Der Schreibcoach liest deinen Text</span>';
      const langsam = setTimeout(() => { cstatus.innerHTML = '<span class="dots">Der Server wacht gerade auf – das kann bis zu einer Minute dauern</span>'; }, 7000);
      const fokus = ($(".aw-fokus button.an", box) || {}).dataset || {};
      let fb = null;
      try {
        const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
        const r = await fetch(K.server + DAPI + "/schreiben/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl.signal,
          body: JSON.stringify({ code: mitCode ? a.code : "", modul: K.modul(), aufgabe: id, titel, auftrag: klartext(auftrag), kriterien, text: w.text.trim(), zug: ZUG, fokus: fokus.f || "", plan: w.plan }) });
        clearTimeout(frist);
        const d = await r.json().catch(() => null);
        if (r.status === 429 && d) { cstatus.textContent = d.error; return; }
        if (r.ok && d && d.ok) fb = d;
      } catch (_e) { fb = null; } finally { clearTimeout(langsam); go.disabled = false; }
      if (!fb) fb = { quelle: "lokal", gelungen: "", naechstes: "Der Schreibcoach ist gerade nicht erreichbar.", stelle: "", tipp: "Lies deinen Text halblaut. Wo du stockst, lohnt sich eine Änderung." };
      zeigeRueck(fb);
      cstatus.textContent = "";
      if (fb.quelle === "ki" && n >= min) M.solve(id);             // ein Text mit Mindestlänge wurde gelesen
    }

    /* ---------- Schritt 4: Abgeben ---------- */
    function zeichneAbgabe(meldung) {
      const w = ed.wert(), n = K.woerter(w.text), haken = $$(".schreib-check li", box), ab = haken.filter(li => li.classList.contains("ok") || (li.querySelector("input") || {}).checked).length;
      const unveraendert = abgegeben && letzterText === w.text.trim();
      abgabe.innerHTML = `<h4>📤 Abgeben</h4>
        <ul class="aw-stand">
          <li class="${n >= min ? "ok" : "no"}"><span class="z">${n >= min ? "✓" : "○"}</span><span>${n} ${n === 1 ? "Wort" : "Wörter"} – mindestens ${min}</span></li>
          ${haken.length ? `<li class="${ab === haken.length ? "ok" : "no"}"><span class="z">${ab === haken.length ? "✓" : "○"}</span><span>Checkliste: ${ab} von ${haken.length} Punkten abgehakt</span></li>` : ""}
          <li class="${Object.keys(w.plan).length ? "ok" : "no"}"><span class="z">${Object.keys(w.plan).length ? "✓" : "○"}</span><span>Planung ${Object.keys(w.plan).length ? "ausgefüllt" : "noch leer"}</span></li>
        </ul>
        ${abgegeben ? `<p class="aw-da">✅ Abgegeben am ${esc(tag(abgegeben.zeit))} (Fassung ${abgegeben.nr}). ${unveraendert ? "Deine Lehrkraft kann deinen Text lesen." : "Du hast seitdem weitergeschrieben – gib noch einmal ab, wenn die neue Fassung zählen soll."}</p>` : ""}
        ${meldung ? `<p class="aw-meldung">${esc(meldung)}</p>` : ""}
        ${mitCode
          ? `<div class="schreib-fuss"><button class="btn abgeben" type="button" ${n < 5 || unveraendert ? "disabled" : ""}>📤 ${abgegeben ? "Neue Fassung abgeben" : "Text an meine Lehrkraft abgeben"}</button>${n < min ? `<span class="schreib-status">Dein Text ist noch kürzer als ${min} Wörter. Du kannst trotzdem abgeben – besser ist, du schreibst noch weiter.</span>` : ""}</div>`
          : `<p class="aw-ohne">Zum Abgeben brauchst du deinen Code. Ohne Code bleibt dein Text nur auf diesem Gerät.</p><p><button class="btn aw-an" type="button">🔑 Mit Code anmelden</button></p>`}`;
    }
    async function gibAb() {
      const w = ed.wert(), knopf = $(".abgeben", box);
      knopf.disabled = true; knopf.textContent = "Wird gesendet …";
      try {
        const r = await fetch(K.server + DAPI + "/texte/abgeben", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...kopf(), text: w.text.trim(), plan: w.plan }) });
        const d = await r.json().catch(() => null);
        if (!r.ok || !d || !d.ok) throw new Error((d && d.error) || "Die Abgabe hat nicht geklappt. Prüfe die Verbindung und versuch es noch einmal.");
        abgegeben = { nr: d.fassung, zeit: d.zeit }; letzterText = w.text.trim(); schmutzig = false;
        ed.status("ok", "Gespeichert ✓ " + uhr(d.zeit));
        if (K.woerter(w.text) >= min) M.solve(id);
        zeichneAbgabe();
      } catch (err) { zeichneAbgabe(err.message); }
    }

    /* ---------- Stand vom Server holen (anderes Gerät), Kommentar der Lehrkraft zeigen ---------- */
    if (mitCode) {
      fetch(K.server + DAPI + "/texte/meine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code, modul: K.modul(), aufgabe: id }) })
        .then(r => r.json()).then(d => {
          if (!d || !d.ok) { ed.status("offen"); return; }
          const hier = lokal(), dort = d.entwurf || null, letzte = d.fassungen && d.fassungen[d.fassungen.length - 1];
          const dortZeit = dort ? Date.parse(dort.zeit) || 0 : 0;
          if (dort && (dort.text || Object.keys(dort.plan || {}).length) && (!hier.text.trim() || dortZeit > hier.zeit + 2000) && (dort.text !== hier.text || JSON.stringify(dort.plan || {}) !== JSON.stringify(hier.plan))) {
            // Der Stand auf dem Server ist neuer (an einem anderen Gerät weitergeschrieben)
            ed.setze({ text: dort.text, plan: dort.plan || {} });
            M.save("-" + id, dort.text); M.save("-" + id + "-plan", JSON.stringify(dort.plan || {})); M.save("-" + id + "-zeit", String(dortZeit));
            ed.status("ok", "Gespeichert ✓ " + uhr(dort.zeit));
          } else if (!dort && !hier.text.trim() && letzte) {
            // noch kein Entwurf, aber eine Fassung aus dem Schreibtrainer
            ed.setze({ text: letzte.text, plan: hier.plan }); M.save("-" + id, letzte.text);
            ed.status("ok", "Gespeichert ✓");
          } else if (hier.text.trim() && (!dort || dort.text !== hier.text)) { schmutzig = true; sichern(); }
          else ed.status("ok", dort ? "Gespeichert ✓ " + uhr(dort.zeit) : "Wird beim Schreiben automatisch gespeichert");
          if (d.abgegeben) { abgegeben = d.abgegeben; const f = (d.fassungen || []).find(x => x.nr === d.abgegeben.nr); letzterText = f ? f.text : ""; }
          if (d.lehrerKommentar) { const k = $(".lehrer-kommentar", box); k.hidden = false; k.innerHTML = "<b>Kommentar deiner Lehrkraft</b>" + esc(d.lehrerKommentar); }
          if (aw.dataset.schritt === "abgeben") zeichneAbgabe();
        }).catch(() => ed.status("offen"));
    }

    // dort weitermachen, wo das Kind aufgehört hat
    const gemerkt = M.load("-" + id + "-schritt", "");
    schritt(SCHRITTE.some(s => s[0] === gemerkt) ? gemerkt : start.text.trim() ? "schreiben" : "planen", false);
  };
})();
