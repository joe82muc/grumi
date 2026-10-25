/* Proben Informatik 7 (7R und 7M) – abgeleitet von 7M/NT/probe.js, Server: /api/inf7 (englisch_9, nt7.js mit inf7-fragen.js).
   Je Modul eine Probe in einer Fassung für 7R und für 7M. Zusätzliche Aufgabenart: Reihenfolge (order).
   Informatik 8 (8M/Informatik/probe.html) nutzt dieses Skript mit: Dort steht themen.js davor, und die Kursliste
   (window.GRUMI_KURS) nennt STUFE, PFAD und die Module. */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  let selected, student, exam;
  const KURS = window.GRUMI_KURS || null, ST = (KURS && KURS.STUFE) || "7", PFAD = (KURS && KURS.PFAD) || "/api/inf7";
  async function request(route, body) {
    const res = await fetch(API + PFAD + "/" + route, body ? {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)} : {});
    const data = await res.json();
    if (!res.ok) throw new Error(({locked:"Diese Probe ist noch gesperrt.",already_submitted:"Diese Probe wurde mit diesem Code bereits abgegeben.",submission_in_progress:"Eine Abgabe läuft bereits."})[data.error] || data.message || data.error || "Serverfehler");
    return data;
  }
  // Abgabe: Bei Netz- oder Serverfehler versucht es die Seite von selbst noch dreimal (die Antworten bleiben stehen).
  // Kam schon die erste Sendung an und nur die Antwort ging verloren, meldet der Server beim neuen Versuch
  // „schon abgegeben“ – dann ist die Abgabe da (angekommen), nur das Ergebnis lässt sich hier nicht mehr zeigen.
  async function abgeben(body, melde) {
    const FEHLER = {locked:"Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid – deine Antworten bleiben hier stehen.",already_submitted:"Diese Probe wurde mit diesem Code bereits abgegeben."};
    let letzter = "";
    for (let versuch = 1; versuch <= 4; versuch++) {
      const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 70000);
      try {
        const res = await fetch(API + PFAD + "/submit", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:ctl.signal});
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.result) return data;
        if (res.status === 409 && versuch > 1) return {angekommen:true};
        if (res.status === 409 && data.error === "submission_in_progress") letzter = "Eine Abgabe läuft bereits.";
        else if (res.status >= 400 && res.status < 500 && res.status !== 429) throw Object.assign(new Error(FEHLER[data.error] || data.message || data.error || "Die Abgabe wurde nicht angenommen."), {endgueltig:true});
        else letzter = "Der Server ist gerade nicht erreichbar.";
      } catch (err) {
        if (err.endgueltig) throw err;
        letzter = err.name === "AbortError" ? "Der Server antwortet nicht." : "Keine Verbindung zum Server.";
      } finally { clearTimeout(frist); }
      if (versuch < 4) { melde(letzter + " Neuer Versuch " + (versuch + 1) + " von 4 … Lass die Seite offen.", versuch + 1); await new Promise(r => setTimeout(r, 3000 * versuch)); }
    }
    throw new Error("Die Abgabe ist noch nicht angekommen (" + letzter + "). Deine Antworten bleiben hier stehen. Sag deiner Lehrkraft Bescheid und tippe dann noch einmal auf „Probe abgeben“.");
  }
  function status(message, bad = false) { $("status").textContent = message; $("status").classList.toggle("bad",bad); $("status").hidden = false; }
  // Zug (M oder R) und Modul kommen aus dem Link der Übersicht (?zug=R&thema=filius) oder aus dem Tab.
  // Jede Probe gibt es in einer Fassung je Zug; die Seite zeigt nur die Fassung des eigenen Zugs.
  const THEMEN = KURS && KURS.THEMEN ? KURS.THEMEN.reduce((o, t) => { o[t.id] = t.titel; return o; }, {})
    : {sicher: "Internet und Sicherheit", filius: "Netzwerke mit Filius", gimp: "Digitale Bilder mit GIMP", inkscape: "Vektorgrafik mit Inkscape", scratch: "Programmieren mit Scratch"};
  let zug = /^[MR]$/i.test(params.get("zug") || "") ? params.get("zug").toUpperCase() : "";
  try { if (zug) sessionStorage.setItem("grumi-i" + ST + "-zug", zug); else zug = sessionStorage.getItem("grumi-i" + ST + "-zug") || ""; } catch (_e) {}
  const thema = THEMEN[params.get("thema")] ? params.get("thema") : "";
  const passt = t => (!zug || !t.zug || t.zug === zug) && (!thema || t.thema === thema);
  (function kopf() {
    const klasse = zug === "R" ? ST + "R" : zug === "M" ? ST + "M" : ST;
    const zurueck = zug === "R" ? "../../" + ST + "R/Informatik/index.html" : "index.html";
    document.querySelector(".brand").setAttribute("href", zurueck);
    document.querySelector(".brand span").textContent = klasse + " / Informatik";
    document.querySelector(".top-tag").textContent = "Proben" + (thema ? " · " + THEMEN[thema] : "");
    document.querySelector("#exam-main > .eyebrow").textContent = "Informatik · Klasse " + klasse;
    document.querySelector("#exam-main > h1").textContent = thema ? "Probe: " + THEMEN[thema] : "Proben Informatik";
    document.title = "Probe" + (thema ? " " + THEMEN[thema] : "n") + " | Informatik " + klasse;
  })();
  async function load() {
    try {
      const data = await request("list");
      data.tests = data.tests.filter(passt);
      if (!data.tests.length) { $("exam-list").innerHTML = ""; status("Für dieses Modul gibt es noch keine Probe."); return; }
      $("exam-list").innerHTML = data.tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2><p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · etwa ${t.minutes} Minuten</p></div><div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><br><button class="btn" data-test="${t.id}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle die freigeschaltete Probe. Zur Vorbereitung kannst du jederzeit zu den Einheiten zurückgehen.");
      // Vorauswahl: ?test=<Kennung>, sonst die einzige offene Probe
      const offen = data.tests.filter(t => t.unlocked);
      const desired = params.get("test") || "";
      const test = offen.find(t => t.id === desired) || (offen.length === 1 ? offen[0] : null);
      if (test) select(test);
    } catch (e) { status("Der Probenserver ist noch nicht erreichbar. Die Einheiten funktionieren unabhängig davon. " + e.message,true); }
  }
  function select(t) {
    selected = t;
    $("selected-title").textContent = t.title;
    $("identity-section").hidden = false;
    $("identity-section").scrollIntoView({behavior:"smooth"});
  }
  function itemMarkup(item) {
    const image = item.image ? `<figure class="figure exam-image"><img src="${esc(item.image)}" alt="${esc(item.imageAlt || "Bild zur Aufgabe")}"></figure>` : "";
    let controls = "";
    if (item.type === "choice") controls = `<div class="options">${item.options.map((o,j) => `<label class="option"><input type="radio" name="item-${item.nr}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (item.type === "match") controls = item.labels.map((label,j) => `<label class="match-row"><strong>${esc(label)}</strong><select data-match="${j}"><option value="">Bitte zuordnen</option>${item.targets.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "order") controls = `<div class="order-box" data-order>${item.steps.map(o => `<div class="order-row" data-step="${esc(o)}"><span class="order-nr"></span><span class="order-text">${esc(o)}</span><span class="order-move"><button type="button" data-move="-1" aria-label="nach oben">▲</button><button type="button" data-move="1" aria-label="nach unten">▼</button></span></div>`).join("")}</div><p class="order-hint">Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge. Oben steht, was zuerst kommt.</p>`;
    if (item.type === "text") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="4" maxlength="1500" placeholder="Schreibe deine Antwort in eigenen Worten."></textarea>`;
    // Informatik 7, Probe 1b (18.10.2026): Richtig/falsch, mehrere richtige Antworten, E-Mail schreiben
    // wahl (Informatik 8): eigene Beschriftung der beiden Knöpfe, z. B. „erlauben“ / „ablehnen“
    const [ja, nein] = item.wahl || ["richtig", "falsch"];
    if (item.type === "tf") controls = `<div class="tf-liste">${item.statements.map((s,j) => `<div class="tf-zeile"><span>${esc(s)}</span><span class="tf-wahl"><label><input type="radio" name="item-${item.nr}-${j}" value="1"> ${esc(ja)}</label><label><input type="radio" name="item-${item.nr}-${j}" value="0"> ${esc(nein)}</label></span></div>`).join("")}</div>`;
    if (item.type === "multi") controls = `<p class="order-hint">Mehrere Antworten sind richtig. Kreuze alle richtigen an.</p><div class="options">${item.options.map((o,j) => `<label class="option"><input type="checkbox" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (item.type === "email") controls = emailMarkup(item);
    if (item.type === "filius") controls = filiusMarkup(item);
    // Erste Zeile = Frage; was danach kommt (z. B. eine Nachricht zum Prüfen), steht in einem eigenen Kasten
    const [frage, ...rest] = String(item.prompt || "").split("\n");
    const herkunft = item.modulTitel ? `<span class="pill herkunft" title="Diese Aufgabe gehört zu dieser Einheit">📘 ${esc(item.modulTitel)}</span>` : "";
    // Tabelle zur Aufgabe (Informatik 8, Probe 1b: Trefferliste einer Praktikumsbörse)
    const tab = item.tabelle ? `<div class="probe-tab-rahmen"><table class="probe-tab"><thead><tr>${(item.tabelle.kopf || []).map(k => `<th>${esc(k)}</th>`).join("")}</tr></thead><tbody>${(item.tabelle.zeilen || []).map(z => `<tr>${z.map(x => `<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";
    return `<section class="check exam-question" data-nr="${item.nr}"><div class="question-head"><span class="pill">Aufgabe ${item.nr}</span>${herkunft}<span>${item.points} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div><h3>${esc(frage)}</h3>${rest.length ? `<p class="zitat">${esc(rest.join("\n"))}</p>` : ""}${image}${tab}${controls}</section>`;
  }
  // E-Mail-Fenster wie in der Einheit „Kommunikation im Alltag“ (email-uebung.js), vereinfacht für die Probe: alle Felder
  // offen, der Anhang kommt aus einer kleinen Dateiliste (Büroklammer). Es wird nichts verschickt.
  const DATEI_ZEICHEN = {pdf: "📄", jpg: "🖼️", jpeg: "🖼️", png: "🖼️", mp3: "🎵", docx: "📝", txt: "📝"};
  function emailMarkup(item) {
    const feld = (k, name) => `<label class="pm-zeile"><span>${name}</span><input type="text" data-mail="${k}" inputmode="email" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${name}"></label>`;
    // Knöpfe An/Cc/Bcc je Kontakt setzen die Adresse ein: Kopieren zählt in der Probe als Kopierversuch (Testregeln),
    // und Tippfehler in Adressen sollen keine Punkte kosten. Wer wohin gehört, entscheidet das Kind weiter selbst.
    const rein = k => ["an", "cc", "bcc"].map(f => `<button type="button" data-rein="${f}" data-adresse="${esc(k.adresse)}" aria-label="${esc(k.name)} ins Feld ${f === "an" ? "An" : f === "cc" ? "Cc" : "Bcc"}">${f === "an" ? "An" : f === "cc" ? "Cc" : "Bcc"}</button>`).join("");
    return `<div class="pm" data-email><div class="pm-kontakte"><b>Deine Kontakte</b> <span class="pm-tipp">Tippe beim Kontakt auf An, Cc oder Bcc – dann steht die Adresse in diesem Feld. Kopieren geht in der Probe nicht.</span><ul>${item.kontakte.map(k => `<li><span class="pm-name">${esc(k.name)}</span><code>${esc(k.adresse)}</code><span class="pm-rein">${rein(k)}</span></li>`).join("")}</ul></div>
      <div class="pm-fenster"><div class="pm-titel">Neue Nachricht</div>${feld("an", "An")}${feld("cc", "Cc")}${feld("bcc", "Bcc")}
        <label class="pm-zeile"><span>Betreff</span><input type="text" data-mail="betreff" maxlength="150" aria-label="Betreff"></label>
        <textarea data-mail="text" rows="7" maxlength="1500" aria-label="Text der E-Mail" placeholder="Anrede, ein bis zwei Sätze, Gruß und Name"></textarea>
        <div class="pm-anhang" data-anhang-zeige></div>
        <div class="pm-leiste"><button type="button" class="pm-klammer" data-klammer aria-expanded="false">📎 Datei anhängen</button></div>
        <div class="pm-dateien" data-dateien hidden><b>Datei auswählen</b>${item.dateien.map(d => `<label class="pm-datei"><input type="radio" name="anhang-${item.nr}" value="${esc(d)}"><span>${DATEI_ZEICHEN[(d.split(".").pop() || "").toLowerCase()] || "📄"} ${esc(d)}</span></label>`).join("")}</div>
      </div><p class="order-hint">In jedes Feld gehört genau eine Adresse. Eine falsche Adresse löschst du im Feld. Es wird nichts verschickt – die E-Mail wird mit „Probe abgeben“ gespeichert.</p></div>`;
  }
  // Informatik 9, Probe 1b (25.10.2026): Praxisteil in Filius. Die Seite liest die gewählte .fls nur ein und schickt sie
  // mit der Abgabe – geprüft wird auf dem Server (die Prüfpunkte kennt die Seite nicht). Die gewählte Datei merkt sich der
  // Tab, damit sie nach einem Neuladen nicht fehlt.
  const DATEIEN = {};
  const flsSchluessel = nr => "grumi-fls-" + (exam ? exam.test.id : "") + "-" + (student ? student.code : "") + "-" + nr;
  function filiusMarkup(item) {
    // ausModul: abgegeben und bewertet wurde in der Einheit – hier nur der Stand, die Punkte übernimmt der Server
    if (item.ausModul) {
      const s = item.modulStand || {};
      const zeit = s.zeit ? new Date(s.zeit).toLocaleString("de-DE", {day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"}) : "";
      return `<div class="fls-modul ${s.abgegeben ? "ok" : "offen"}">${s.abgegeben
        ? `✓ Abgegeben in der Einheit ${esc(item.einheit || "")}${zeit ? " (" + esc(zeit) + " Uhr)" : ""}: ${s.punkte} von ${s.max} Punkten. Diese Punkte zählen hier – du musst nichts tun.`
        : `Noch keine Abgabe in der Einheit ${esc(item.einheit || "")}. Du musst hier nichts tun – bleib in der Probe und sag deiner Lehrkraft Bescheid.`}</div>`;
    }
    return `<ol class="fls-schritte">${(item.aufgabe || []).map(s => `<li>${esc(String(s).replace(/^\d+\.\s*/, ""))}</li>`).join("")}</ol>
      <div class="fls-wahl"><label class="btn secondary fls-knopf">📂 Filius-Datei auswählen<input type="file" accept=".fls" data-fls hidden></label>
      <p class="fls-status" data-fls-status aria-live="polite">Noch keine Datei ausgewählt.</p></div>
      <p class="order-hint">Speichere in Filius im Entwurfsmodus (Hammer) und wähle dann die .fls-Datei. Hast du danach noch etwas geändert: neu speichern und die Datei noch einmal wählen. Abgegeben wird die zuletzt gewählte Datei.</p>`;
  }
  function dateiZeigen(nr, fehler) {
    const box = document.querySelector(`[data-nr="${nr}"] [data-fls-status]`), d = DATEIEN[nr];
    if (!box) return;
    box.textContent = fehler || (d ? "✓ Ausgewählt: " + d.name + " (" + Math.max(1, Math.round(d.data.length * 0.75 / 1024)) + " kB)" : "Noch keine Datei ausgewählt.");
    box.classList.toggle("ok", Boolean(d) && !fehler); box.classList.toggle("bad", Boolean(fehler));
  }
  function dateienZurueck() {
    exam.items.filter(i => i.type === "filius" && !i.ausModul).forEach(i => {
      try { const d = JSON.parse(sessionStorage.getItem(flsSchluessel(i.nr)) || "null"); if (d && d.name && d.data) DATEIEN[i.nr] = d; } catch (_e) {}
      dateiZeigen(i.nr);
    });
  }
  $("questions").addEventListener("change", e => {
    const feld = e.target.closest("[data-fls]");
    if (!feld) return;
    const nr = Number(feld.closest("[data-nr]").dataset.nr), f = feld.files && feld.files[0];
    feld.value = "";   // dieselbe Datei lässt sich so später noch einmal wählen
    if (!f) return;
    if (!/\.fls$/i.test(f.name)) return dateiZeigen(nr, "Das ist keine Filius-Datei. Wähle die Datei mit der Endung .fls, die du in Filius gespeichert hast.");
    if (f.size > 250000) return dateiZeigen(nr, "Diese Datei ist zu groß für eine Filius-Datei aus der Probe. Wähle die richtige .fls-Datei.");
    const leser = new FileReader();
    leser.onload = () => {
      const data = String(leser.result || "").replace(/^data:[^,]*,/, "");
      if (data.slice(0, 4) !== "UEsD") return dateiZeigen(nr, "Diese Datei lässt sich nicht als Filius-Datei lesen. Speichere in Filius noch einmal und wähle die neue Datei.");
      DATEIEN[nr] = {name: f.name, data};
      try { sessionStorage.setItem(flsSchluessel(nr), JSON.stringify(DATEIEN[nr])); } catch (_e) {}
      dateiZeigen(nr);
    };
    leser.onerror = () => dateiZeigen(nr, "Die Datei ließ sich nicht lesen. Versuche es noch einmal.");
    leser.readAsDataURL(f);
  });
  // Gewählten Anhang als Kärtchen unter dem Text zeigen (auch wenn ein gesicherter Stand wiederhergestellt wird)
  function anhangZeigen(box) {
    const r = box.querySelector("[data-dateien] input:checked"), ziel = box.querySelector("[data-anhang-zeige]");
    ziel.innerHTML = r ? `<span class="pm-chip">📎 ${esc(r.value)} <button type="button" data-anhang-weg aria-label="Anhang entfernen">✕</button></span>` : "";
  }
  function collect() {
    return exam.items.map(item => {
      const el = document.querySelector(`[data-nr="${item.nr}"]`);
      if (item.type === "choice") { const radio = el.querySelector("input:checked"); return radio ? Number(radio.value) : null; }
      if (item.type === "match") return [...el.querySelectorAll("select")].map(select => select.value);
      if (item.type === "order") return [...el.querySelectorAll(".order-row")].map(row => row.dataset.step);
      if (item.type === "tf") return item.statements.map((_,j) => { const r = el.querySelector(`input[name="item-${item.nr}-${j}"]:checked`); return r ? r.value === "1" : null; });
      if (item.type === "multi") return [...el.querySelectorAll("input[type=checkbox]:checked")].map(x => Number(x.value));
      if (item.type === "filius") return DATEIEN[item.nr] || null;
      if (item.type === "email") {
        const v = k => el.querySelector(`[data-mail="${k}"]`).value, r = el.querySelector("[data-dateien] input:checked");
        return {an:v("an"),cc:v("cc"),bcc:v("bcc"),betreff:v("betreff").trim(),text:v("text").trim(),anhang:r ? r.value : ""};
      }
      return el.querySelector("textarea").value.trim();
    });
  }
  function resultMarkup(detail) {
    const given = Array.isArray(detail.given) ? detail.given.map((v,j) => `${esc(detail.labels[j])}: ${esc(v || "–")}`).join("<br>") : esc(detail.given || "–");
    const expected = Array.isArray(detail.expected) ? detail.expected.map((v,j) => `${esc(detail.labels[j])}: ${esc(v)}`).join("<br>") : esc(detail.expected);
    return `<div class="result-row"><div class="question-head"><strong>Aufgabe ${detail.nr}</strong><strong>${detail.points} / ${detail.maxPoints}</strong></div><p>${esc(detail.prompt)}</p><p><b>Deine Antwort:</b><br>${given}</p><p><b>Lösung:</b><br>${expected}</p>${detail.comment ? `<p class="video-note">${esc(detail.comment)}</p>` : ""}</div>`;
  }
  // E-Mail: Büroklammer öffnet die Dateiliste, eine Datei wählen hängt sie an, ✕ nimmt sie wieder weg
  $("questions").addEventListener("change", e => {
    const box = e.target.closest("[data-email]");
    if (!box || !e.target.closest("[data-dateien]")) return;
    anhangZeigen(box);
    box.querySelector("[data-dateien]").hidden = true; box.querySelector("[data-klammer]").setAttribute("aria-expanded", "false");
  });
  $("questions").addEventListener("click", e => {
    const mail = e.target.closest("[data-email]");
    if (mail && e.target.closest("[data-klammer]")) {
      const liste = mail.querySelector("[data-dateien]"); liste.hidden = !liste.hidden;
      e.target.closest("[data-klammer]").setAttribute("aria-expanded", String(!liste.hidden)); return;
    }
    if (mail && e.target.closest("[data-anhang-weg]")) { mail.querySelectorAll("[data-dateien] input").forEach(r => { r.checked = false; }); anhangZeigen(mail); return; }
    const rein = mail && e.target.closest("[data-rein]");
    if (rein) {
      // Adresse anhängen (steht sie schon im Feld, bleibt alles, wie es ist); input-Ereignis = Zwischenstand sichern
      const feld = mail.querySelector(`[data-mail="${rein.dataset.rein}"]`), adr = rein.dataset.adresse;
      const da = feld.value.split(/[\s,;]+/).filter(Boolean);
      if (!da.some(a => a.toLowerCase() === adr.toLowerCase())) {
        feld.value = da.concat(adr).join(", ");
        if (window.ProbeSchutz && ProbeSchutz.gesetzt) ProbeSchutz.gesetzt(feld);
        feld.dispatchEvent(new Event("input", {bubbles:true}));
      }
      return;
    }
    const knopf = e.target.closest("[data-move]"); if (!knopf) return;
    const zeile = knopf.closest(".order-row"), box = zeile.parentElement, zeilen = [...box.children], i = zeilen.indexOf(zeile), j = i + Number(knopf.dataset.move);
    if (j < 0 || j >= zeilen.length) return;
    if (j < i) box.insertBefore(zeile, zeilen[j]); else box.insertBefore(zeilen[j], zeile);
    knopf.focus();
  });
  $("exam-list").addEventListener("click", e => {
    const button = e.target.closest("[data-test]");
    if (!button) return;
    const t = selected?.id === button.dataset.test ? selected : [...$("exam-list").querySelectorAll("[data-test]")].find(b => b.dataset.test === button.dataset.test);
    select({id:button.dataset.test,title:button.closest("article").querySelector("h2").textContent});
  });
  $("identity-form").addEventListener("submit", async e => {
    e.preventDefault();
    student = Object.fromEntries(new FormData(e.currentTarget));
    const button = e.currentTarget.querySelector("button"); button.disabled = true;
    try {
      const data = await request("start",{testId:selected.id,...student}); exam = data;
      $("identity-section").hidden = true; $("exam-list").hidden = true; $("status").hidden = true;
      $("questions-section").hidden = false;
      $("exam-kicker").textContent = data.test.scope;
      $("exam-title").textContent = data.test.title;
      $("exam-points").textContent = data.test.maxPoints + " Punkte";
      $("questions").innerHTML = data.items.map(itemMarkup).join("");
      // Testregeln (17.10.2026): länger als 1 Minute weg oder 2. Kopierversuch = Probe beendet, sofort abgegeben, Note 6
      // wegSekunden / kopieren 0 vom Server (Informatik 8, Probe 1c und 2c): ohne Note-6-Regel – nur Warnung und Vermerk
      const eigeneRegel = {...(data.test.wegSekunden === 0 ? {wegSekunden: 0} : {}), ...(data.test.kopieren === 0 ? {kopieren: 0} : {}),
        // Praxisteil in Filius (Informatik 9, Probe 1b): der Wechsel zu Filius ist erlaubt und wird nur festgehalten
        ...(data.test.wegSekunden === 0 && data.items.some(i => i.type === "filius") ? {programm: "Filius"} : {})};
      dateienZurueck();
      ProbeSchutz.start({ testId: data.test.id, code: student.code, box: $("questions"),
        regel: { api: API, modul: String(PFAD).replace(/^\/api\//, ""), beenden: () => einreichen(true), ...eigeneRegel },
        // Die Lehrkraft hat das Weiterbearbeiten erlaubt (Verwaltung): die Antworten der Abgabe kommen zurück
        weiter: data.weiter });
      window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
    finally { button.disabled = false; }
  });
  $("exam-form").addEventListener("submit", e => { e.preventDefault(); einreichen(false); });
  // automatisch: nach den Testregeln beendet – ohne Rückfrage; klappt es nicht, alle 15 Sekunden neu versuchen
  let laeuft = false, fertig = false;
  async function einreichen(automatisch) {
    if (laeuft || fertig) return;
    if (!automatisch && !confirm("Probe wirklich abgeben? Danach kannst du nichts mehr ändern.")) return;
    laeuft = true;
    const button = $("submit-exam"); button.disabled = true; button.textContent = "Wird ausgewertet ...";
    try {
      const data = await abgeben({testId:exam.test.id,...student,answers:collect(),verlassen:ProbeSchutz.verlassen(),protokoll:ProbeSchutz.protokoll(),...ProbeSchutz.regelFelder()}, text => { status(text,true); ProbeSchutz.endeStatus(text); button.textContent = "Wird noch einmal gesendet ..."; });
      fertig = true;
      if (data.angekommen) {
        ProbeSchutz.ende();
        $("questions-section").hidden = true; $("status").hidden = true;
        $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Deine Abgabe ist angekommen</h1><p class="notice">Die Verbindung war kurz unterbrochen. Deine Antworten sind gespeichert. Dein Ergebnis zeigt dir deine Lehrkraft.</p>`;
        $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
        return;
      }
      ProbeSchutz.ende();
      if (ProbeSchutz.abgegeben && ProbeSchutz.abgegeben(data.result, { box: $("result-section"), weg: [$("questions-section"), $("status")], titel: exam.test.title })) return;   // Note erst nach der Rückgabe
      $("questions-section").hidden = true;
      $("status").hidden = true;
      const r = data.result;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Dein Ergebnis</h1><div class="score-line"><strong>${r.score} / ${r.total}</strong><span>${r.percent} % · Note ${r.grade}</span></div>${r.needsReview ? `<p class="notice">Einige freie Antworten wurden nur vorläufig mit Stichwörtern bewertet, weil die KI nicht erreichbar war. Die Lehrkraft kann die Punkte korrigieren.</p>` : ""}<h2>Lösungsschlüssel und Rückmeldung</h2>${r.details.map(resultMarkup).join("")}<p class="nextbar"><a class="btn secondary" href="index.html">Zurück zur Lernreihe</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) {
      button.disabled = false; button.textContent = "Probe abgeben und auswerten"; status(err.message,true); window.scrollTo({top:0,behavior:"smooth"});
      if (automatisch && err.endgueltig) { ProbeSchutz.endeStatus(err.message + " Bitte sag deiner Lehrkraft Bescheid."); return; }
      if (automatisch) { ProbeSchutz.endeStatus(err.message + " Neuer Versuch in 15 Sekunden – lass die Seite offen."); setTimeout(() => { laeuft = false; einreichen(true); }, 15000); return; }
    } finally { if (!automatisch || fertig) laeuft = false; }
  }
  load();
})();
