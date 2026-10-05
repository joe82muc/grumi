/* Bausteine für Informatik 7 – ergänzen die gemeinsamen Bausteine aus ../NT/modul-basis.js (window.Modul).
 * Einbinden nach themen.js und ../NT/modul-basis.js.
 *
 *   Modul.makeAuftrag(el, cfg, id)      Praxisauftrag (auch am Windows-PC) mit Schritten, Hilfestufen und Ergebnisprüfung
 *   Modul.makeHilfen(el, hilfen, loesung, id)   Hilfe 1 · Hilfe 2 · Hilfe 3 · Lösung (M-Klassen bekommen sie später)
 *   Modul.makeEntscheiden(el, cfg, id)  Fälle nacheinander entscheiden (sicher/gefährlich, ja/nein, Raster/Vektor …)
 *   Modul.makeMarkieren(el, cfg, id)    in einem Text alle auffälligen Stellen antippen (Warnzeichen finden)
 *   Modul.pcHinweis(programm)           Kennzeichen „Windows-PC erforderlich“ als HTML
 *   Modul.liesBild(datei)               Bilddatei im Browser auswerten (nichts wird hochgeladen)
 *
 * Praxis zählt erst nach echter Arbeit: Ein Auftrag gilt als erledigt, wenn die Ergebnisprüfung bestanden ist
 * (Frage zum Ergebnis, Zahl oder Wort aus dem Programm, eigene Datei prüfen) – nicht durch bloßes Abhaken.
 * Modul.loeser[id] löst einen Baustein über die Oberfläche (nur für den Einheiten-Prüfer).
 */
(function () {
"use strict";
const M = window.Modul;
if (!M) return;
const {$, $$, esc, register, solve, load, save} = M;
M.loeser = M.loeser || {};
const warte = ms => new Promise(r => setTimeout(r, ms));
const einfach = s => String(s == null ? "" : s).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/\s+/g, " ").trim();

function pcHinweis(programm) {
  return `<span class="pc-tag" title="Diese Aufgabe machst du am Windows-PC">🖥 Windows-PC mit ${esc(programm)} erforderlich</span>`;
}

/* ---------- Hilfestufen ---------- */
// hilfen: bis zu drei Texte (kleiner Tipp, genauer Hinweis, Schritt für Schritt), loesung: Text oder HTML (zuletzt).
// 7R und ohne Anmeldung: Hilfen sofort, aber der Reihe nach. 7M: Hilfe 1 nach 60 Sekunden, jede weitere 45 Sekunden
// nach der vorigen – erst selbst probieren.
function makeHilfen(box, hilfen, loesung, id) {
  hilfen = (hilfen || []).filter(Boolean);
  const stufen = hilfen.map((t, i) => ({name: "Hilfe " + (i + 1), text: t}));
  if (loesung) stufen.push({name: "Lösung", text: loesung, loesung: true});
  if (!stufen.length) return;
  const istM = M.zug() === "M";
  const wrap = document.createElement("div"); wrap.className = "hilfen";
  wrap.innerHTML = `<div class="hilfen-kopf"><b>Kommst du nicht weiter?</b> <span class="hint">${istM ? "Probiere es zuerst selbst – die Hilfen kommen nach und nach." : "Nimm die Hilfen der Reihe nach."}</span></div>
    <div class="hilfen-knoepfe">${stufen.map((s, i) => `<button type="button" class="btn small ghost hilfe-knopf${s.loesung ? " loesung" : ""}" data-i="${i}" disabled>${esc(s.name)}</button>`).join("")}</div>
    <div class="hilfen-texte">${stufen.map((s, i) => `<div class="hilfe-text${s.loesung ? " loesung" : ""}" data-i="${i}" hidden><b>${esc(s.name)}:</b> ${s.text}</div>`).join("")}</div>`;
  box.appendChild(wrap);
  const knoepfe = $$(".hilfe-knopf", wrap), texte = $$(".hilfe-text", wrap);
  let offen = Math.min(stufen.length, parseInt(load("-hilfe-" + id, "0"), 10) || 0), frei = offen, timer = null, rest = 0;
  function zeichnen() {
    knoepfe.forEach((b, i) => {
      b.disabled = i > frei || (i === frei && rest > 0);
      b.classList.toggle("war", i < offen);
      b.textContent = stufen[i].name + (i === frei && rest > 0 ? ` in ${Math.floor(rest / 60)}:${String(rest % 60).padStart(2, "0")}` : "");
    });
    texte.forEach((t, i) => { t.hidden = i >= offen; });
  }
  function warten(sek) {
    clearInterval(timer); rest = istM ? sek : 0; zeichnen();
    if (rest > 0) timer = setInterval(() => { rest--; if (rest <= 0) clearInterval(timer); zeichnen(); }, 1000);
  }
  knoepfe.forEach((b, i) => b.addEventListener("click", () => {
    if (i < offen) { texte[i].scrollIntoView({block: "nearest", behavior: M.reduced ? "auto" : "smooth"}); return; }
    offen = i + 1; frei = offen; save("-hilfe-" + id, String(offen));
    if (frei < stufen.length) warten(45); else zeichnen();
  }));
  // Die Wartezeit beginnt, wenn die Aufgabe ins Bild kommt
  let gestartet = false;
  M.onVisible(box, sichtbar => { if (sichtbar && !gestartet) { gestartet = true; if (frei < stufen.length) warten(offen ? 0 : 60); } });
  zeichnen();
}

/* ---------- Bilddatei im Browser auswerten ---------- */
// liefert { name, bytes, typ: "png"|"jpg"|"gif"|"webp"|"?", breite, hoehe, transparent: Anteil durchsichtiger Bildpunkte 0…1 }
function liesBild(datei) {
  return new Promise((ok, fehler) => {
    const leser = new FileReader();
    leser.onerror = () => fehler(new Error("Die Datei lässt sich nicht lesen."));
    leser.onload = () => {
      const b = new Uint8Array(leser.result);
      const typ = b[0] === 0x89 && b[1] === 0x50 ? "png" : b[0] === 0xFF && b[1] === 0xD8 ? "jpg" : b[0] === 0x47 && b[1] === 0x49 ? "gif"
        : b[0] === 0x52 && b[8] === 0x57 ? "webp" : "?";
      const url = URL.createObjectURL(new Blob([b]));
      const bild = new Image();
      bild.onerror = () => { URL.revokeObjectURL(url); fehler(new Error("Das ist kein Bild, das der Browser öffnen kann.")); };
      bild.onload = () => {
        let transparent = 0;
        try {
          const max = 400, f = Math.min(1, max / Math.max(bild.naturalWidth, bild.naturalHeight));
          const c = document.createElement("canvas"); c.width = Math.max(1, Math.round(bild.naturalWidth * f)); c.height = Math.max(1, Math.round(bild.naturalHeight * f));
          const x = c.getContext("2d"); x.drawImage(bild, 0, 0, c.width, c.height);
          const d = x.getImageData(0, 0, c.width, c.height).data; let n = 0;
          for (let i = 3; i < d.length; i += 4) if (d[i] < 128) n++;
          transparent = n / (d.length / 4);
        } catch (_e) {}
        URL.revokeObjectURL(url);
        ok({name: datei.name, bytes: datei.size, typ, breite: bild.naturalWidth, hoehe: bild.naturalHeight, transparent});
      };
      bild.src = url;
    };
    leser.readAsArrayBuffer(datei);
  });
}

/* ---------- Frage zum Ergebnis: Zahl oder Wort aus dem Programm ---------- */
// p: { art: "zahl", frage, wert, tol, einheit, tipp, erfolg } | { art: "wort", frage, antworten: [...], tipp, erfolg }
// Liefert { loese(), zeige(wert) }. ok(wert) wird bei der richtigen Antwort aufgerufen.
function frageFeld(inhalt, p, ok) {
  inhalt.innerHTML = `<label class="pruef-frage">${esc(p.frage)}</label>
    <div class="pruef-zeile"><input type="text" class="pruef-eingabe" ${p.art === "zahl" ? 'inputmode="decimal"' : ""} autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(p.frage)}">${p.einheit ? `<span class="pruef-einheit">${esc(p.einheit)}</span>` : ""}
    <button type="button" class="btn small check">Prüfen</button></div><div class="fb"></div>`;
  const feld = $(".pruef-eingabe", inhalt), fb = $(".fb", inhalt);
  // Wörter: Groß- und Kleinschreibung, Umlaute, doppelte Leerzeichen und Satzzeichen am Ende sind egal
  const wort = v => einfach(v).replace(/[–—]/g, "-").replace(/\s*-\s*/g, "-").replace(/[.!?:;,"„“']+$/g, "").replace(/^["„“']+/g, "");
  const stimmt = v => p.art === "zahl"
    ? Math.abs(parseFloat(String(v).replace(/\s/g, "").replace(",", ".")) - p.wert) <= (p.tol || 0)
    : (p.antworten || []).some(a => wort(a) === wort(v));
  const pruefen = () => {
    if (!feld.value.trim()) { fb.className = "fb show mid"; fb.textContent = "Trag zuerst dein Ergebnis ein."; return; }
    const richtig = stimmt(feld.value);
    fb.className = "fb show " + (richtig ? "ok" : "bad");
    fb.textContent = richtig ? "✅ Richtig – dein Ergebnis stimmt." + (p.erfolg ? " " + p.erfolg : "") : "❌ Das passt noch nicht. " + (p.tipp || "Schau im Programm noch einmal nach.");
    if (richtig) ok(feld.value);
  };
  $(".check", inhalt).addEventListener("click", pruefen);
  feld.addEventListener("keydown", e => { if (e.key === "Enter") pruefen(); });
  return {
    zeige: wert => { feld.value = wert; },
    loese: async () => { feld.value = p.art === "zahl" ? String(p.wert).replace(".", ",") : p.antworten[0]; $(".check", inhalt).click(); }
  };
}

/* ---------- Praxisauftrag ---------- */
// cfg: { titel, pc: "GIMP", zeit: "etwa 15 Minuten", ziel: "Das ist am Ende fertig …",
//        material: [{ name: "Übungsbild", href: "assets/…", text: "herunterladen" }],
//        schritte: ["Text" | { t: "Text", bild: "assets/….png", alt: "" }],     ausführliche Anleitung (7R)
//        kurz: ["knappe Fassung für 7M"],                                       fehlt sie, sehen alle die Schritte
//        hilfen: ["Tipp", "Hinweis", "Schritt für Schritt"], loesung: "…",
//        pruefung: { art: "frage", fragen: [{q, o, a, e}] }
//                | { art: "zahl", frage, wert, tol: 0, einheit: "px", tipp }
//                | { art: "wort", frage, antworten: ["192.168.0.10"], tipp }
//                | { art: "datei", text, accept: ".png", pruefe: info => [{ ok, text }] , lies: datei => Promise(info),
//                    ersatz: { art: "zahl" | "wort", frage, … } }      Frage zum Ergebnis, wenn die Datei hier fehlt
//                | { art: "liste", punkte: ["Ich sehe …"] } }
function makeAuftrag(box, cfg, id) {
  const istM = M.zug() === "M";
  const schritte = (istM && cfg.kurz && cfg.kurz.length ? cfg.kurz : cfg.schritte || []).map(s => typeof s === "string" ? {t: s} : s);
  const hilfen = (cfg.hilfen || []).slice();
  // 7M mit Kurzfassung: Die ausführlichen Schritte sind die letzte Hilfe
  if (istM && cfg.kurz && cfg.kurz.length && cfg.schritte && cfg.schritte.length)
    hilfen.push("<ol>" + cfg.schritte.map(s => "<li>" + (typeof s === "string" ? s : s.t) + "</li>").join("") + "</ol>");
  const p = cfg.pruefung || {art: "liste", punkte: ["Ich habe den Auftrag erledigt."]};
  box.classList.add("auftrag");
  box.innerHTML = `<div class="auftrag-kopf"><span class="task-tag auftrag-tag">🛠 Auftrag</span>${cfg.pc ? pcHinweis(cfg.pc) : ""}${cfg.zeit ? `<span class="hint">⏱ ${esc(cfg.zeit)}</span>` : ""}</div>
    <h3>${esc(cfg.titel || "Auftrag")}</h3>
    ${cfg.ziel ? `<p class="auftrag-ziel"><b>Ziel:</b> ${cfg.ziel}</p>` : ""}
    ${cfg.material && cfg.material.length ? `<p class="auftrag-material">${cfg.material.map(m => `<a class="btn small ghost" href="${esc(m.href)}" download>📥 ${esc(m.name)}</a>`).join(" ")}</p>` : ""}
    <ol class="auftrag-schritte">${schritte.map((s, i) => `<li><button type="button" class="haken" data-i="${i}" aria-pressed="false" aria-label="Schritt ${i + 1} erledigt"></button><div><span>${s.t}</span>${s.bild ? `<figure><img class="zoomable" loading="lazy" src="${esc(s.bild)}" alt="${esc(s.alt || "")}"><figcaption>🔍 Zum Vergrößern antippen${s.quelle ? " · " + esc(s.quelle) : ""}</figcaption></figure>` : ""}</div></li>`).join("")}</ol>
    <div class="auftrag-hilfen"></div>
    <div class="auftrag-pruefung"><div class="pruef-kopf">✅ Fertig? Prüfe dein Ergebnis</div><div class="pruef-inhalt"></div></div>`;
  // Schritte abhaken (nur als Merkhilfe – erledigt ist der Auftrag erst mit der Ergebnisprüfung)
  let erledigt = [];
  try { erledigt = JSON.parse(load("-schritte-" + id, "[]")) || []; } catch (_e) { erledigt = []; }
  $$(".haken", box).forEach(b => {
    const i = +b.dataset.i, setz = an => { b.setAttribute("aria-pressed", String(an)); b.textContent = an ? "✓" : ""; b.closest("li").classList.toggle("erledigt", an); };
    setz(erledigt.includes(i));
    b.addEventListener("click", () => { const an = b.getAttribute("aria-pressed") !== "true"; setz(an); erledigt = erledigt.filter(x => x !== i).concat(an ? [i] : []); save("-schritte-" + id, JSON.stringify(erledigt)); });
  });
  $$("img.zoomable", box).forEach(img => img.addEventListener("click", () => { const lb = $("#lb"); if (!lb) return; $("img", lb).src = img.src; $("img", lb).alt = img.alt; lb.classList.add("show"); }));
  makeHilfen($(".auftrag-hilfen", box), hilfen, cfg.loesung, id);

  const inhalt = $(".pruef-inhalt", box), name = "Auftrag: " + (cfg.titel || "");
  const geschafft = () => { box.classList.add("geschafft"); };
  if (p.art === "frage") {
    M.makeMC(inhalt, p.fragen, id);
    const alle = () => p.fragen.every((_, i) => M.isSolved(id + "-" + i));
    inhalt.addEventListener("click", () => setTimeout(() => { if (alle()) geschafft(); }, 0));
    if (alle()) geschafft();
  } else if (p.art === "zahl" || p.art === "wort") {
    register(id, box, name);
    const f = frageFeld(inhalt, p, wert => { save("-wert-" + id, wert); solve(id); geschafft(); });
    if (M.isSolved(id)) { f.zeige(load("-wert-" + id, "")); geschafft(); }
    M.loeser[id] = f.loese;
  } else if (p.art === "datei") {
    register(id, box, name);
    // p.ersatz: Frage zum Ergebnis (art "zahl" oder "wort") für alle, die ihre Datei hier nicht auswählen können
    // (Tablet, anderes Gerät, Browser ohne Entpacken)
    inhalt.innerHTML = `<p class="pruef-frage">${p.text || "Wähle deine gespeicherte Datei aus. Sie wird nur hier auf dem Gerät geprüft und nicht hochgeladen."}</p>
      <label class="btn small ghost pruef-datei">📂 Datei auswählen<input type="file" ${p.accept ? `accept="${esc(p.accept)}"` : ""} hidden></label><ul class="pruef-liste"></ul><div class="fb"></div>
      ${p.ersatz ? `<details class="pruef-ersatz"><summary>${esc(p.ersatzTitel || "Du hast die Datei nicht auf diesem Gerät?")}</summary><div class="pruef-ersatz-inhalt"></div></details>` : ""}`;
    const eingabe = $("input[type=file]", inhalt), liste = $(".pruef-liste", inhalt), fb = $(".fb", inhalt);
    eingabe.addEventListener("change", async () => {
      const datei = eingabe.files && eingabe.files[0]; if (!datei) return;
      liste.innerHTML = ""; fb.className = "fb show mid"; fb.textContent = "Datei wird geprüft …";
      try {
        const info = await (p.lies || liesBild)(datei), punkte = p.pruefe(info) || [];
        liste.innerHTML = punkte.map(x => `<li class="${x.ok ? "ok" : "bad"}">${x.ok ? "✓" : "✗"} ${esc(x.text)}</li>`).join("");
        const ok = punkte.length > 0 && punkte.every(x => x.ok);
        fb.className = "fb show " + (ok ? "ok" : "bad");
        fb.textContent = ok ? "✅ Deine Datei erfüllt alle Punkte." : "❌ Noch nicht ganz. Verbessere die Punkte mit ✗, speichere und wähle die Datei noch einmal aus.";
        if (ok) { solve(id); geschafft(); }
      } catch (x) { fb.className = "fb show bad"; fb.textContent = "❌ " + (x.message || "Die Datei lässt sich nicht prüfen."); }
      eingabe.value = "";
    });
    const ersatz = p.ersatz ? frageFeld($(".pruef-ersatz-inhalt", inhalt), p.ersatz, () => { solve(id); geschafft(); }) : null;
    if (M.isSolved(id)) { geschafft(); fb.className = "fb show ok"; fb.textContent = "✅ Diese Prüfung hast du schon bestanden."; }
    // Einheiten-Prüfer: legt die Lösungsdatei in das Dateifeld (window.grumiLoesungsDatei gibt es nur dort), sonst die Ersatzfrage
    M.loeser[id] = async () => {
      if (M.isSolved(id)) return;
      const d = typeof window.grumiLoesungsDatei === "function" ? await window.grumiLoesungsDatei(id) : null;
      if (d && d.b64) {
        const bytes = Uint8Array.from(atob(d.b64), c => c.charCodeAt(0)), dt = new DataTransfer();
        dt.items.add(new File([bytes], d.name));
        eingabe.files = dt.files; eingabe.dispatchEvent(new Event("change"));
        for (let n = 0; n < 80 && !M.isSolved(id) && !/❌/.test(fb.textContent); n++) await warte(50);
      } else if (ersatz) { $(".pruef-ersatz", inhalt).open = true; await ersatz.loese(); }
    };
  } else {
    register(id, box, name);
    const punkte = p.punkte || [];
    inhalt.innerHTML = `<div class="pruef-haken">${punkte.map((t, i) => `<label><input type="checkbox" data-i="${i}"> <span>${esc(t)}</span></label>`).join("")}</div><div class="fb"></div>`;
    const kaesten = $$("input", inhalt), fb = $(".fb", inhalt);
    const schau = () => { if (kaesten.every(k => k.checked)) { fb.className = "fb show ok"; fb.textContent = "✅ Alles erledigt."; solve(id); geschafft(); } };
    kaesten.forEach(k => { if (M.isSolved(id)) k.checked = true; k.addEventListener("change", schau); });
    if (M.isSolved(id)) geschafft();
    M.loeser[id] = async () => { kaesten.forEach(k => { if (!k.checked) k.click(); }); };
  }
}

/* ---------- Fälle entscheiden ---------- */
// cfg: { optionen: ["sicher", "gefährlich"], faelle: [{ html: "…" | t: "Text", a: 1, e: "Erklärung" }], bild: fall => HTML (optional),
//        frage: "Was meinst du?", fertig: "Text am Ende" }
// Ein Fall nach dem anderen; falsch entschiedene Fälle kommen am Ende noch einmal. Jeder Fall ist eine Aufgabe (id-0, id-1 …).
function makeEntscheiden(box, cfg, id) {
  const faelle = cfg.faelle, N = faelle.length;
  faelle.forEach((f, i) => register(id + "-" + i, box, "Entscheiden: " + String(f.t || f.kurz || f.html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 90)));
  box.classList.add("entscheiden");
  box.innerHTML = `<div class="ent-kopf"><div class="ent-punkte">${faelle.map((_, i) => `<span data-i="${i}"></span>`).join("")}</div><span class="chip ent-zahl"></span></div>
    <div class="ent-fall"></div><p class="ent-frage">${esc(cfg.frage || "Was meinst du?")}</p>
    <div class="ent-wahl wahl-fest">${cfg.optionen.map((o, i) => `<button type="button" class="btn ghost" data-o="${i}">${esc(o)}</button>`).join("")}</div>
    <div class="fb"></div><div class="row-btns"><button type="button" class="btn small weiter" hidden>Weiter →</button><button type="button" class="btn small ghost nochmal" hidden>↺ Noch einmal von vorn</button></div>`;
  const fallEl = $(".ent-fall", box), fb = $(".fb", box), weiter = $(".weiter", box), nochmal = $(".nochmal", box), wahl = $$(".ent-wahl button", box), punkte = $$(".ent-punkte span", box), zahl = $(".ent-zahl", box), frage = $(".ent-frage", box);
  let reihe = [], cur = -1;
  const offen = () => faelle.map((_, i) => i).filter(i => !M.isSolved(id + "-" + i));
  function stand() {
    punkte.forEach((s, i) => { s.className = M.isSolved(id + "-" + i) ? "ok" : i === cur ? "an" : ""; });
    zahl.textContent = `${N - offen().length} von ${N} geschafft`;
  }
  function zeig(i) {
    cur = i; const f = faelle[i];
    fallEl.innerHTML = f.html || `<p class="ent-text">${esc(f.t)}</p>`;
    fallEl.animate && !M.reduced && fallEl.animate([{opacity: 0, transform: "translateX(16px)"}, {opacity: 1, transform: "none"}], {duration: 220});
    wahl.forEach(b => { b.disabled = false; b.classList.remove("right", "wrong"); });
    box.classList.remove("ent-fertig"); frage.hidden = false; $(".ent-wahl", box).hidden = false;
    fb.className = "fb"; weiter.hidden = true; nochmal.hidden = true; stand();
  }
  function ende() {
    cur = -1; stand();
    box.classList.add("ent-fertig"); frage.hidden = true; $(".ent-wahl", box).hidden = true; weiter.hidden = true;
    fallEl.innerHTML = `<p class="ent-text">🎉 ${esc(cfg.fertig || "Alle Fälle richtig entschieden!")}</p>`;
    fb.className = "fb"; nochmal.hidden = false;
  }
  function naechster() { if (!reihe.length) reihe = offen(); if (!reihe.length) { ende(); return; } zeig(reihe.shift()); }
  wahl.forEach(b => b.addEventListener("click", () => {
    if (cur < 0) return;
    const f = faelle[cur], ok = +b.dataset.o === f.a;
    wahl.forEach(x => { x.disabled = true; });
    b.classList.add(ok ? "right" : "wrong");
    if (!ok) wahl[f.a].classList.add("right");
    fb.className = "fb show " + (ok ? "ok" : "bad");
    fb.innerHTML = (ok ? "✅ Richtig! " : "❌ Nicht ganz. ") + esc(f.e || "") + (ok ? "" : " <b>Dieser Fall kommt später noch einmal.</b>");
    if (ok) solve(id + "-" + cur); else reihe.push(cur);
    weiter.hidden = false; weiter.textContent = (reihe.length || offen().length) ? "Weiter →" : "Fertig →"; stand();
  }));
  weiter.addEventListener("click", naechster);
  nochmal.addEventListener("click", () => { reihe = faelle.map((_, i) => i); naechster(); });
  if (offen().length) naechster(); else ende();
  M.loeser[id] = async () => {
    for (let n = 0; n < N * 3 && offen().length; n++) {
      if (cur < 0) break;
      if (!wahl[0].disabled) wahl[faelle[cur].a].click();
      await warte(5); if (!weiter.hidden) weiter.click(); await warte(5);
    }
  };
}

/* ---------- Auffällige Stellen antippen ---------- */
// cfg: { teile: ["normaler Text", { t: "antippbare Stelle", w: true, e: "Warum das ein Warnzeichen ist" }, { t: "harmlos", w: false, e: "…" }, "\n"],
//        kopf: "HTML über dem Text (z. B. Absenderzeile)", finde: "Warnzeichen", fertig: "…" }
// Gelöst, wenn alle Stellen mit w: true gefunden sind. "\n" beginnt eine neue Zeile.
function makeMarkieren(box, cfg, id) {
  register(id, box, cfg.name || "Stellen finden");
  const ziel = cfg.teile.filter(t => typeof t === "object" && t.w).length, wort = cfg.finde || "Warnzeichen";
  box.classList.add("markieren");
  box.innerHTML = `${cfg.kopf ? `<div class="mark-kopf">${cfg.kopf}</div>` : ""}<div class="mark-text">${cfg.teile.map((t, i) => typeof t === "string"
      ? esc(t).replace(/\n/g, "<br>") : `<button type="button" class="mark" data-i="${i}">${esc(t.t)}</button>`).join("")}</div>
    <div class="mark-fuss"><span class="chip mark-zahl"></span><span class="hint">Tippe alle Stellen an, die dich misstrauisch machen.</span></div><div class="fb"></div>`;
  const fb = $(".fb", box), zahl = $(".mark-zahl", box), stellen = $$(".mark", box);
  let gefunden = new Set();
  try { gefunden = new Set(JSON.parse(load("-mark-" + id, "[]")) || []); } catch (_e) {}
  const stand = () => { zahl.textContent = `${gefunden.size} von ${ziel} ${wort} gefunden`; zahl.classList.toggle("ok", gefunden.size === ziel); };
  stellen.forEach(b => {
    const i = +b.dataset.i, t = cfg.teile[i];
    if (t.w && gefunden.has(i)) b.classList.add("right");
    b.addEventListener("click", () => {
      if (t.w) {
        b.classList.add("right"); gefunden.add(i); save("-mark-" + id, JSON.stringify([...gefunden]));
        const alle = gefunden.size === ziel;
        fb.className = "fb show ok"; fb.innerHTML = "✅ " + esc(t.e || "Gut gesehen!") + (alle ? `<br><b>${esc(cfg.fertig || "Du hast alle " + wort + " gefunden!")}</b>` : "");
        if (alle) solve(id);
      } else {
        b.classList.add("wrong"); setTimeout(() => b.classList.remove("wrong"), 900);
        fb.className = "fb show mid"; fb.textContent = "🟡 " + (t.e || "Das ist hier unauffällig.");
      }
      stand();
    });
  });
  stand();
  M.loeser[id] = async () => { stellen.filter(b => cfg.teile[+b.dataset.i].w).forEach(b => b.click()); };
}

Object.assign(M, {makeAuftrag, makeHilfen, makeEntscheiden, makeMarkieren, pcHinweis, liesBild, einfach});
})();
