/* Deutsch 7: Bausteine für die Lernmodule Erzählen, Sachtexte, Literatur und Medien.
 * Grundlage sind die Bausteine von NT 7 (../NT/modul-basis.js: Ankreuzen, Lückentext, Zuordnen, Richtig/Falsch,
 * Reihenfolge, Paare, offene Frage mit KI-Hinweis, Abschlussquiz, M7-Aufgaben, Lernstand, Freischaltung).
 * Hier kommt dazu, was Deutsch braucht:
 *   lesetext    Text mit festen Zeilennummern (aus der Textdatenbank texte/, D7Texte)
 *   beleg       Textstelle finden: Zeilen im Text antippen (trainiert Textbelege und Zeilenangaben)
 *   markieren   Schlüsselwörter in einem Satz oder Absatz antippen
 *   schreiben   Schreibtrainer: eigener Text, Rückmeldung der KI in fünf Teilen (schreibt den Text nicht neu),
 *               mit Code werden die Fassungen für die Lehrkraft aufbewahrt (Server /api/d7/schreiben/feedback)
 *   hilfen      Hilfen in Stufen (bei jedem Baustein möglich: hilfen: ["Tipp", "genauer", "Schritt für Schritt"])
 *   hoertext, duell, tischduell – siehe d7-spiel.js
 *
 * Eine Modulseite ist eine kleine HTML-Datei mit <div id="d7-seite"></div>; ihr Inhalt steht als Daten in
 * inhalt/<id>.js:   D7Kit.seite({ id, titel, einleitung, zeit, ziele, glossar, stationen: [{ kurz, ober, titel, teile: […] }], weiter })
 * Jeder Teil: { art, id, titel, tag, lead, m7, nur, hilfen, … }
 *   m7: true       M7-Aufgabe – für M-Klassen Pflicht, für R-Klassen freiwillig (Modul.plus)
 *   nur: "R"|"M"   nur für diesen Zug (z. B. kürzerer Text und mehr Hilfen für R7, längerer Text für M7)
 * R7 oder M7 kommt aus der Anmeldung mit Code; ohne Anmeldung (Vorschau, Lehrercode) lässt sich die Fassung umschalten.
 */
(function () {
  "use strict";
  const M = window.Modul, { $, $$, esc } = M;
  const SERVER = location.hostname.endsWith("onrender.com") ? "" : "https://englisch-9.onrender.com";
  const bauer = {}, teile = [];
  let CFG = null, ZUG = "M", MODUL_ID = "";
  const istR = () => ZUG === "R";
  const woerter = s => window.D7Zeilen.woerter(String(s || ""));
  // Text für den Zug des Kindes: "id" oder { R: "id", M: "id" }
  function textFuer(x) {
    const id = typeof x === "string" ? x : x ? x[ZUG] || x.M || x.R : "";
    const t = window.D7Texte.get(id);
    if (!t) console.error("Deutsch 7: Text fehlt in der Textdatenbank: " + id);
    return t || { id: id, titel: "Text fehlt", absaetze: ["Dieser Text konnte nicht geladen werden."] };
  }
  const klartext = html => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent.replace(/\s+/g, " ").trim(); };

  /* ---------- Seite aufbauen ---------- */
  function seite(cfg) {
    CFG = cfg; MODUL_ID = cfg.id;
    const D7 = window.D7, reg = D7.modulVon(cfg.id), thema = reg ? reg.thema : { id: "", titel: "Deutsch 7" };
    const key = reg && reg.modul.key ? reg.modul.key : "grumi-d7-" + cfg.id + "-v1";
    const root = $("#d7-seite"), st = cfg.stationen;
    document.title = cfg.titel + " | Deutsch 7";
    root.innerHTML = `<header class="top"><div class="wrap top-in"><a class="brand" href="index.html${thema.id ? "#" + thema.id : ""}">GRUMI<small>Deutsch 7</small></a>
        <nav class="stations" id="stations">${st.map((s, i) => `<a href="#s${i + 1}"><b>${i + 1}</b>${esc(s.kurz)}</a>`).join("")}</nav>
        <span class="stars" id="stars" title="Gelöste Aufgaben">⭐ 0</span></div><div class="readbar" id="readbar"></div></header>
      <div class="hero"><canvas id="heroCanvas" aria-hidden="true"></canvas><div class="wrap">
        <nav class="navlinks" aria-label="Zu den Übersichtsseiten" style="margin-bottom:22px"><a href="index.html${thema.id ? "#" + thema.id : ""}">📚 Übersicht Deutsch 7</a><a href="../../index.html#lernen">🏫 Alle Klassen &amp; Fächer</a><a href="../../index.html">🏠 Startseite Lernplattform</a></nav>
        <div class="eyebrow">Deutsch · Klasse 7M / 7R · ${esc(thema.titel)}${reg ? (reg.modul.extra ? " · Zusatz" : " · Modul " + reg.nr) : ""}</div>
        <h1>${esc(cfg.titel)}</h1><p>${cfg.einleitung || ""}</p>
        <div class="zeit">⏱ ${esc(cfg.zeit || "etwa 40 Minuten")} · am Tablet oder am PC</div>
        <div class="hero-cta"><a class="btn light" href="#s1">Los geht's ↓</a></div>
        <div class="goals">${(cfg.ziele || []).map(z => `<div>${z}</div>`).join("")}</div></div></div>
      <main class="wrap"><div id="d7-fassung"></div><div id="modulStand" aria-label="Dein Lernfortschritt in diesem Modul"></div>
        ${st.map((s, i) => `<section class="station" id="s${i + 1}"><div class="st-head"><div class="st-num">${i + 1}</div><div><div class="eyebrow">${esc(s.ober || "")}</div><h2>${esc(s.titel)}</h2></div></div></section>`).join("")}
        <div class="card" id="d7-weiter"></div></main>
      <footer class="wrap">Deutsch 7 · Modul „${esc(cfg.titel)}“ · Dein Fortschritt wird auf diesem Gerät gespeichert${cfg.quellen ? " · " + cfg.quellen : ""}.</footer>
      <div id="pop" role="dialog" aria-live="polite"><button class="x" aria-label="Schließen">×</button><h5></h5><p></p></div><div id="lb"><img alt=""></div><canvas id="confetti"></canvas>`;

    M.init({ key, api: "/api/d7/uebung/feedback", thema: cfg.thema || thema.titel + ": " + cfg.titel, glossary: cfg.glossar || {}, hero: cfg.hero });

    // R7 oder M7? Aus der Anmeldung; sonst aus dem Link (?zug=R) – dann lässt sich die Fassung umschalten
    const a = M.anmeldung(), fest = a && /^7[MR]$/.test(String(a.zug || ""));
    ZUG = M.zug() || "M";
    if (!fest) {
      const mit = z => { const p = new URLSearchParams(location.search); p.set("zug", z); return "?" + p.toString(); };
      $("#d7-fassung").innerHTML = `<p class="d7-fassung">Du siehst die Fassung für <a href="${mit("R")}" class="${ZUG === "R" ? "an" : ""}">R7</a><a href="${mit("M")}" class="${ZUG === "M" ? "an" : ""}">M7</a><span style="font-weight:600">Mit Code angemeldet bekommt jedes Kind automatisch die Fassung seiner Klasse.</span></p>`;
    }

    const mc = [];
    st.forEach((s, i) => {
      const sec = $("#s" + (i + 1));
      (s.teile || []).forEach(teil => {
        if (teil.nur && teil.nur !== ZUG) return;
        if (!bauer[teil.art]) { console.error("Deutsch 7: unbekannter Baustein „" + teil.art + "“"); return; }
        const card = document.createElement("div"); card.className = "card" + (teil.klasse ? " " + teil.klasse : "");
        const tags = (teil.m7 ? '<span class="task-tag m7">M7 · für 7R freiwillig</span> ' : "") + (teil.tag ? `<span class="task-tag${teil.zusatz ? " zusatz-tag" : ""}">${esc(teil.tag)}</span>` : "");
        card.innerHTML = (tags ? `<div>${tags}</div>` : "") + (teil.titel ? `<h3>${esc(teil.titel)}</h3>` : "") + (teil.lead ? `<p class="lead">${teil.lead}</p>` : "") + '<div class="teil-box"></div>';
        sec.appendChild(card);
        const box = $(".teil-box", card), los = () => bauer[teil.art](box, teil, card);
        if (teil.m7) M.plus(los); else los();
        if (teil.art === "mc") teil.fragen.forEach(q => { if (!Array.isArray(q.a)) mc.push(q); });
        if (teil.hilfen) hilfen(card, teil.hilfen, teil.loesung);
        teile.push({ art: teil.art, id: teil.id, teil, box, card });
      });
    });
    // Abschlussquiz aus allen Ankreuzfragen der Seite (cfg.quiz: true oder { profi: "Titel" })
    if (cfg.quiz && mc.length >= 6) {
      const sec = $("#s" + st.length), card = document.createElement("div"); card.className = "card";
      card.innerHTML = '<div><span class="task-tag">Profi-Check</span></div><h3>Abschlussquiz</h3><div class="teil-box"></div>';
      sec.appendChild(card);
      M.makeQuiz($(".teil-box", card), mc, "quiz", (cfg.quiz && cfg.quiz.profi) || "Stark");
    }
    if (cfg.glossar && Object.keys(cfg.glossar).length) {
      const sec = $("#s" + st.length), card = document.createElement("div"); card.className = "card";
      card.innerHTML = '<h3>Wortspeicher</h3><div class="words"></div>';
      sec.appendChild(card);
      $(".words", card).innerHTML = Object.values(cfg.glossar).sort((x, y) => x[0].localeCompare(y[0], "de")).map(g => `<div class="word"><b>${esc(g[0])}</b><p>${esc(g[1])}</p></div>`).join("");
    }
    const w = cfg.weiter;
    $("#d7-weiter").innerHTML = `<h3 style="margin-top:0">Wie geht es weiter?</h3><p>${w && w.text ? w.text : "Du hast das Ende dieses Moduls erreicht."}</p>
      <nav class="navlinks light" aria-label="Weiter">${w && w.href ? `<a href="${esc(w.href)}">➜ ${esc(w.titel)}</a>` : ""}<a href="index.html${thema.id ? "#" + thema.id : ""}">📚 Zur Übersicht Deutsch 7</a></nav>`;

    // Haupttext der Seite (cfg.haupttext) lässt sich von jeder Station aus einblenden
    if (cfg.haupttext) {
      const knopf = document.createElement("button"); knopf.className = "btn d7-textknopf"; knopf.type = "button"; knopf.textContent = "📖 Text";
      const lage = document.createElement("div"); lage.className = "d7-textlage"; lage.hidden = true;
      lage.innerHTML = `<div class="d7-textlage-in"><button class="btn small ghost zu" type="button">✕ Zurück zu den Aufgaben</button>${window.D7Lesetext.html(textFuer(cfg.haupttext))}</div>`;
      document.body.appendChild(knopf); document.body.appendChild(lage);
      knopf.addEventListener("click", () => { lage.hidden = false; window.D7Lesetext.einpassen(lage); });
      lage.addEventListener("click", e => { if (e.target === lage || e.target.closest(".zu")) lage.hidden = true; });
      window.D7Lesetext.antippen(lage);
    }
    window.D7Lesetext.einpassen(root); window.D7Lesetext.antippen($("main", root));
    M.ready();
    // Ist das Modul gesperrt und niemand angemeldet, bekommt der Hinweis einen Knopf zur Code-Eingabe
    // (der Kasten „Dein Stand“ mit „Anmelden“ ist dann mit den Stationen verdeckt)
    let runden = 0;
    const takt = setInterval(() => {
      const nav = $("#nt7Sperre nav");
      if (nav && !$(".d7-an", nav) && !M.anmeldung() && window.Lernstand && window.Lernstand.anmelden) {
        const b = document.createElement("a"); b.href = "#"; b.className = "d7-an"; b.textContent = "🔑 Mit Code anmelden";
        b.addEventListener("click", e => { e.preventDefault(); window.Lernstand.anmelden(); });
        nav.insertBefore(b, nav.firstChild);
      }
      if (++runden > 40) clearInterval(takt);
    }, 500);
  }

  /* ---------- einfache Bausteine ---------- */
  bauer.text = (box, t) => { box.innerHTML = t.html; };
  bauer.merke = (box, t) => { box.innerHTML = `<div class="merke"><h4>${esc(t.kopf || "MERKE")}</h4>${t.html}</div>`; };
  bauer.beispiel = (box, t) => { box.innerHTML = `<div class="beispiel"><b class="kopf">${esc(t.kopf || "Beispiel")}</b>${t.html}</div>`; };
  bauer.karten = (box, t) => { box.innerHTML = `<div class="info-karten">${t.karten.map(k => `<div class="info-karte"><div class="big">${k.ic || ""}</div><h4>${esc(k.titel)}</h4><p>${k.text}</p></div>`).join("")}</div>`; };
  bauer.lesetext = (box, t) => { box.innerHTML = window.D7Lesetext.html(textFuer(t.lesetext)); };
  // Tabelle oder Balkendiagramm: daten = { typ: "tabelle", titel, kopf, reihen } oder { typ: "diagramm", titel, einheit, werte, hinweis }
  bauer.material = (box, t) => { box.innerHTML = window.D7Lesetext.html(Object.assign({ art: t.daten.typ === "tabelle" ? "Tabelle" : "Diagramm", quelle: "" }, t.daten)); };

  /* ---------- Formular ausfüllen ---------- */
  // teil: { id, karte: "HTML mit den Angaben", kopf: "Anmeldung …", felder: [{ label, loesung: ["…"], platz, wahl: ["…"] }] }
  bauer.formular = (box, teil) => {
    M.register(teil.id, box, "Formular ausfüllen: " + (teil.kopf || ""));
    const glatt = s => String(s || "").toLocaleLowerCase("de").replace(/ß/g, "ss").replace(/straße|strasse/g, "str.").replace(/\s+/g, " ").replace(/\s*\.\s*/g, ".").trim();
    box.innerHTML = (teil.karte ? `<div class="beispiel"><b class="kopf">Diese Angaben brauchst du</b>${teil.karte}</div>` : "") +
      `<div class="formular"><h4>${esc(teil.kopf || "Formular")}</h4>${teil.felder.map((f, i) => `<label class="f-zeile"><span>${esc(f.label)}</span>${f.wahl
        ? `<select data-f="${i}"><option value="">bitte wählen</option>${f.wahl.map(w => `<option>${esc(w)}</option>`).join("")}</select>`
        : `<input type="text" data-f="${i}" autocomplete="off" placeholder="${esc(f.platz || "")}">`}</label>`).join("")}</div>
      <div class="row-btns"><button class="btn small check" type="button">Formular prüfen</button></div><div class="fb"></div>`;
    const fb = $(".fb", box);
    $(".check", box).addEventListener("click", () => {
      let gut = 0, leer = 0;
      teil.felder.forEach((f, i) => {
        const el = $(`[data-f="${i}"]`, box), v = el.value.trim(), zeile = el.closest(".f-zeile");
        const ok = f.loesung.some(l => glatt(l) === glatt(v));
        zeile.classList.toggle("right", ok); zeile.classList.toggle("wrong", !ok && v !== "");
        if (ok) gut++; else if (!v) leer++;
      });
      const alle = gut === teil.felder.length;
      fb.className = "fb show " + (alle ? "ok" : "bad");
      fb.textContent = alle ? "✅ Das Formular ist vollständig und richtig ausgefüllt." : `${gut} von ${teil.felder.length} Feldern stimmen.${leer ? " " + leer + " Feld" + (leer > 1 ? "er sind" : " ist") + " noch leer – in einem Formular bleibt nichts offen." : " Vergleiche die roten Felder genau mit den Angaben (Schreibweise, Reihenfolge, Punkte im Datum)."}`;
      if (alle) M.solve(teil.id);
    });
  };
  bauer.mc = (box, t) => M.makeMC(box, t.fragen, t.id);
  bauer.tf = (box, t) => M.makeTF(box, t.aussagen, t.id);
  bauer.luecke = (box, t) => M.makeGap(box, t.absaetze, t.id, t.extra);
  bauer.sort = (box, t) => M.makeSort(box, { buckets: t.buckets, items: t.items, cols: t.cols, done: t.fertig }, t.id);
  bauer.ordnen = (box, t) => M.makeOrder(box, t.schritte, t.id);
  bauer.paare = (box, t) => M.makePaare(box, t.paare, t.id);
  bauer.offen = (box, t) => M.makeOpen(box, t.fragen, t.id, t.tipp);

  /* ---------- Hilfen in Stufen: R7 sofort, M7 erst nach kurzem Nachdenken ---------- */
  function hilfen(card, liste, loesung) {
    const box = document.createElement("div"); box.className = "hilfen";
    const namen = liste.map((_, i) => "Hilfe " + (i + 1)).concat(loesung ? ["Lösung"] : []), texte = liste.concat(loesung ? [loesung] : []);
    box.innerHTML = `<div class="hilfen-knoepfe">${namen.map((n, i) => `<button class="btn small ghost" type="button" data-h="${i}" ${i ? "disabled" : ""}>💡 ${n}</button>`).join("")}</div><div class="hilfen-texte"></div>`;
    card.appendChild(box);
    const knoepfe = $$("button", box), aus = $(".hilfen-texte", box);
    if (!istR()) {            // M7: erst selbst versuchen
      let rest = 20; const b = knoepfe[0], text = b.textContent;
      b.disabled = true;
      const takt = setInterval(() => { rest--; if (rest <= 0) { clearInterval(takt); b.disabled = false; b.textContent = text; } else b.textContent = text + " (in " + rest + " s)"; }, 1000);
    }
    knoepfe.forEach((b, i) => b.addEventListener("click", () => {
      if (!aus.querySelector(`[data-h="${i}"]`)) aus.insertAdjacentHTML("beforeend", `<div class="hilfe-text" data-h="${i}"><b>${esc(namen[i])}</b>${texte[i]}</div>`);
      if (knoepfe[i + 1]) knoepfe[i + 1].disabled = false;
    }));
  }

  /* ---------- Textstelle finden: Zeilen im Text antippen ---------- */
  // teil: { id, lesetext: "id" | { R, M }, fragen: [{ q, zeilen: [von, bis], e: Erklärung, tipp, nur }] }
  bauer.beleg = (box, teil) => {
    const t = textFuer(teil.lesetext), id = teil.id, fragen = teil.fragen.filter(f => !f.nur || f.nur === ZUG);
    box.innerHTML = window.D7Lesetext.html(t) + '<div class="beleg-leiste"></div>';
    const lt = $(".lt", box), leiste = $(".beleg-leiste", box);
    fragen.forEach((f, k) => M.register(id + "-" + k, box, "Textstelle finden: " + f.q));
    const naechste = () => fragen.findIndex((_, k) => !M.isSolved(id + "-" + k));
    let i = naechste(), fehl = 0;
    const zeilen = () => $$(".lz[data-n]", lt);
    const wahl = () => zeilen().filter(z => z.classList.contains("gewaehlt")).map(z => +z.dataset.n);
    const spanne = (von, bis) => "Z. " + von + (bis > von ? "–" + bis : "");
    const leeren = () => zeilen().forEach(z => z.classList.remove("gewaehlt", "richtig", "falsch", "zeig", "an"));
    function zeichne() {
      leeren(); fehl = 0;
      if (i < 0) {
        lt.classList.remove("waehlbar"); leiste.className = "beleg-fertig";
        leiste.textContent = "✅ Alle Textstellen gefunden. So gibst du eine Stelle an: in Klammern hinter deinem Satz, zum Beispiel (Z. 12–14).";
        return;
      }
      lt.classList.add("waehlbar");
      leiste.innerHTML = `<div class="nr">Textstelle finden · Frage ${i + 1} von ${fragen.length}</div><p>${esc(fragen[i].q)}</p>
        <div class="beleg-wahl"><span>Tippe im Text die Zeilen an. Deine Auswahl:</span><b class="wahl">noch keine</b>
        <button class="btn small check" type="button">Prüfen</button><button class="btn small ghost leer" type="button">Auswahl löschen</button></div><div class="fb"></div>`;
    }
    lt.addEventListener("click", e => {
      const z = e.target.closest(".lz[data-n]"); if (!z || i < 0 || M.isSolved(id + "-" + i)) return;
      z.classList.remove("richtig", "falsch", "zeig"); z.classList.toggle("gewaehlt");
      const s = wahl(); $(".wahl", leiste).textContent = s.length ? spanne(s[0], s[s.length - 1]) : "noch keine"; $(".fb", leiste).className = "fb";
    });
    leiste.addEventListener("click", e => {
      if (i < 0) return;
      const f = fragen[i], fb = $(".fb", leiste), [von, bis] = f.zeilen;
      if (e.target.closest(".leer")) { leeren(); $(".wahl", leiste).textContent = "noch keine"; fb.className = "fb"; }
      if (e.target.closest(".zeigs")) { leeren(); window.D7Lesetext.zeige(box, t.id, von, bis); $(".wahl", leiste).textContent = "noch keine"; fb.className = "fb show mid"; fb.textContent = "Die Stelle ist grün markiert. Lies sie und tippe ihre Zeilen jetzt selbst an."; }
      if (e.target.closest(".weiter")) { i = naechste(); zeichne(); if (i >= 0) lt.scrollIntoView({ behavior: M.reduced ? "auto" : "smooth", block: "start" }); }
      if (e.target.closest(".check")) {
        const s = wahl();
        if (!s.length) { fb.className = "fb show mid"; fb.textContent = "Tippe zuerst mindestens eine Zeile im Text an."; return; }
        // richtig: mindestens eine Zeile der Stelle getroffen, höchstens eine Zeile daneben
        const ok = s.some(n => n >= von && n <= bis) && s.every(n => n >= von - 1 && n <= bis + 1);
        zeilen().forEach(z => { if (z.classList.contains("gewaehlt")) { z.classList.remove("gewaehlt"); z.classList.add(ok ? "richtig" : "falsch"); } });
        if (ok) {
          M.solve(id + "-" + i);
          const rest = fragen.some((_, k) => !M.isSolved(id + "-" + k));
          fb.className = "fb show ok";
          fb.innerHTML = `✅ Richtig – die Antwort steht in <b>${spanne(von, bis)}</b>. ${esc(f.e || "")} <button class="btn small weiter" type="button">${rest ? "Nächste Frage →" : "Fertig"}</button>`;
        } else {
          fehl++;
          fb.className = "fb show bad";
          fb.innerHTML = "❌ Das passt noch nicht – falsche Stelle oder zu viele Zeilen. " + esc(f.tipp || "Suche im Text nach einem Schlüsselwort aus der Frage.") + (fehl >= 2 ? ' <button class="btn small ghost zeigs" type="button">Stelle zeigen</button>' : "");
        }
      }
    });
    zeichne();
  };

  /* ---------- Schlüsselwörter markieren ---------- */
  // teil: { id, satz: "Der [[Igel]] hält im Winter [[Winterschlaf]].", finde: "die zwei Schlüsselwörter", toleranz: 1, e }
  bauer.markieren = (box, teil) => {
    M.register(teil.id, box, "Markieren: " + (teil.finde || "Schlüsselwörter"));
    let html = "";
    teil.satz.split(/(\[\[[^\]]+\]\])/).forEach(stueck => {
      if (/^\[\[/.test(stueck)) { html += `<button type="button" data-w="1">${esc(stueck.slice(2, -2))}</button>`; return; }
      stueck.split(/(\s+)/).forEach(w => {
        const m = /^([„“"‚‘(]*)([^\s.,;:!?“”"‘)]+)([.,;:!?“”"‘)]*)$/.exec(w);
        html += m ? esc(m[1]) + `<button type="button">${esc(m[2])}</button>` + esc(m[3]) : esc(w);
      });
    });
    const ziel = (teil.satz.match(/\[\[/g) || []).length;
    box.innerHTML = `<p class="hint">Tippe ${esc(teil.finde || "die Schlüsselwörter")} an (${ziel}). Noch einmal tippen nimmt die Markierung weg.</p><div class="mark-text">${html}</div>
      <div class="row-btns"><button class="btn small check" type="button">Prüfen</button></div><div class="fb"></div>`;
    const fb = $(".fb", box), knoepfe = $$(".mark-text button", box); let versuche = 0;
    knoepfe.forEach(b => b.addEventListener("click", () => { b.classList.toggle("sel"); knoepfe.forEach(x => x.classList.remove("right", "wrong", "fehlt")); fb.className = "fb"; }));
    $(".check", box).addEventListener("click", () => {
      let treffer = 0, zuviel = 0; versuche++;
      knoepfe.forEach(b => { const soll = b.dataset.w === "1", ist = b.classList.contains("sel"); if (soll && ist) { treffer++; b.classList.add("right"); } else if (!soll && ist) { zuviel++; b.classList.add("wrong"); } else if (soll && versuche >= 3) b.classList.add("fehlt"); });
      const ok = treffer === ziel && zuviel <= (teil.toleranz === undefined ? 1 : teil.toleranz);
      fb.className = "fb show " + (ok ? "ok" : "bad");
      fb.textContent = ok ? "✅ Genau – das sind die wichtigen Wörter. " + (teil.e || "") : `${treffer} von ${ziel} gefunden${zuviel ? ", " + zuviel + " Wort" + (zuviel > 1 ? "e" : "") + " zu viel" : ""}. Frage dich: Ohne welche Wörter würde man den Satz nicht mehr verstehen?`;
      if (ok) M.solve(teil.id);
    });
  };

  /* ---------- Schreibtrainer ---------- */
  // teil: { id, titel, auftrag: "HTML", kriterien: ["…"], min: 60, starter: ["Zuerst …", "Plötzlich …"] }
  bauer.schreiben = (box, teil) => {
    const id = teil.id, min = teil.min || 40, kriterien = teil.kriterien || [], starter = teil.starter || [];
    M.register(id, box, "Schreibauftrag: " + (teil.titel || klartext(teil.auftrag).slice(0, 80)));
    box.innerHTML = `<div class="schreib"><div class="schreib-auftrag">${teil.auftrag}</div>
      ${starter.length ? `<div class="schreib-starter" ${istR() ? "" : "hidden"} aria-label="Satzanfänge">${starter.map(s => `<button type="button">${esc(s)}</button>`).join("")}</div>${istR() ? "" : '<p style="margin:0 0 8px"><button class="btn small ghost starter-auf" type="button">💡 Satzanfänge anzeigen</button></p>'}` : ""}
      <div class="lehrer-kommentar" hidden></div>
      <textarea aria-label="Dein Text" placeholder="Schreibe hier deinen Text."></textarea>
      <div class="schreib-fuss"><span class="schreib-zahl"></span><button class="btn teal go" type="button">✨ Rückmeldung holen</button><span class="schreib-status" role="status"></span></div>
      ${kriterien.length ? `<ul class="schreib-check" aria-label="Checkliste">${kriterien.map(k => `<li><span class="z">·</span><span>${esc(k)}</span></li>`).join("")}</ul>` : ""}
      <div class="rueck" hidden aria-live="polite"></div></div>`;
    const ta = $("textarea", box), zahl = $(".schreib-zahl", box), status = $(".schreib-status", box), rueck = $(".rueck", box), go = $(".go", box);
    const zaehle = () => { const n = woerter(ta.value); zahl.textContent = n + (n === 1 ? " Wort" : " Wörter") + " · mindestens " + min; zahl.classList.toggle("gut", n >= min); return n; };
    ta.value = M.load("-" + id, ""); zaehle();
    ta.addEventListener("input", () => { M.save("-" + id, ta.value); zaehle(); });
    box.addEventListener("click", e => {
      const auf = e.target.closest(".starter-auf"); if (auf) { $(".schreib-starter", box).hidden = false; auf.parentNode.remove(); return; }
      const s = e.target.closest(".schreib-starter button");
      if (s) { ta.value += (ta.value && !/\s$/.test(ta.value) ? " " : "") + s.textContent + " "; ta.focus(); M.save("-" + id, ta.value); zaehle(); }
    });
    function zeige(fb) {
      const liste = $$(".schreib-check li", box), selbst = fb.quelle !== "ki";
      (fb.checkliste || []).forEach((c, k) => {
        const li = liste[k]; if (!li) return;
        if (selbst) li.innerHTML = `<label><input type="checkbox"> <span>${esc(c.text)}</span></label>`;
        else { li.className = c.ok ? "ok" : "no"; li.innerHTML = `<span class="z">${c.ok ? "✓" : "○"}</span><span>${esc(c.text)}</span>`; }
      });
      rueck.hidden = false;
      rueck.innerHTML = `<h4>${selbst ? "Prüfe deinen Text selbst" : "✨ Rückmeldung zu deinem Text"}</h4><dl>
        ${fb.gelungen ? `<dt>✅ Gelungen</dt><dd>${esc(fb.gelungen)}</dd>` : ""}
        ${fb.naechstes ? `<dt>🎯 Als Nächstes</dt><dd>${esc(fb.naechstes)}</dd>` : ""}
        ${fb.stelle ? `<dt>📍 Die Stelle</dt><dd><span class="stelle">${esc(fb.stelle)}</span></dd>` : ""}
        ${fb.tipp ? `<dt>💡 Tipp</dt><dd>${esc(fb.tipp)}</dd>` : ""}</dl>
        <p class="selbst">✍️ Jetzt bist du dran: ${selbst ? "Hake die Checkliste ab und verbessere, was noch fehlt." : "Verbessere die Stelle selbst. Danach kannst du noch einmal eine Rückmeldung holen."}</p>`;
    }
    go.addEventListener("click", async () => {
      if (zaehle() < min) { status.textContent = "Schreibe erst mindestens " + min + " Wörter – dann lohnt sich die Rückmeldung."; return; }
      const a = M.anmeldung();
      go.disabled = true; status.innerHTML = '<span class="dots">Die KI liest deinen Text</span>';
      const langsam = setTimeout(() => { status.innerHTML = '<span class="dots">Der KI-Server wacht gerade auf – das kann bis zu einer Minute dauern</span>'; }, 7000);
      let fb = null;
      try {
        const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
        const r = await fetch(SERVER + "/api/d7/schreiben/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl.signal,
          body: JSON.stringify({ code: a ? a.code : "", modul: MODUL_ID, aufgabe: id, titel: teil.titel || "", auftrag: klartext(teil.auftrag), kriterien, text: ta.value.trim(), zug: ZUG }) });
        clearTimeout(frist);
        const d = await r.json().catch(() => null);
        if (r.status === 429 && d) { status.textContent = d.error; return; }
        if (r.ok && d && d.ok) fb = d;
      } catch (_e) { fb = null; } finally { clearTimeout(langsam); go.disabled = false; }
      if (!fb) fb = { quelle: "lokal", gelungen: "", naechstes: "Die KI ist gerade nicht erreichbar.", stelle: "", tipp: "Lies deinen Text halblaut. Wo du stockst, lohnt sich eine Änderung.", checkliste: kriterien.map(k => ({ text: k, ok: null })), gespeichert: false };
      zeige(fb);
      status.textContent = fb.gespeichert ? "Fassung " + fb.fassung + " ist für deine Lehrkraft gespeichert." : a ? "" : "Nicht gespeichert: Mit deinem Code angemeldet sieht auch deine Lehrkraft deinen Text.";
      M.solve(id);                       // eine echte Antwort ist abgegeben
    });
    // Mit Code: letzte Fassung von einem anderen Gerät holen und den Kommentar der Lehrkraft zeigen
    const a = M.anmeldung();
    if (a && a.code) {
      fetch(SERVER + "/api/d7/texte/meine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: a.code, modul: MODUL_ID, aufgabe: id }) })
        .then(r => r.json()).then(d => {
          if (!d || !d.ok) return;
          const letzte = d.fassungen[d.fassungen.length - 1];
          if (letzte && !ta.value.trim()) { ta.value = letzte.text; M.save("-" + id, ta.value); zaehle(); }
          if (d.lehrerKommentar) { const k = $(".lehrer-kommentar", box); k.hidden = false; k.innerHTML = "<b>Kommentar deiner Lehrkraft</b>" + esc(d.lehrerKommentar); }
        }).catch(() => {});
    }
  };

  window.D7Kit = { seite, bauer, teile, hilfen, textFuer, zug: () => ZUG, modul: () => MODUL_ID, server: SERVER, woerter };
})();
