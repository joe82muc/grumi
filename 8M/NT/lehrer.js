/* NT 8: Lehrerseite der Proben (lehrer.html) – nach dem Vorbild von 7M/NT/lehrer.js, dazu:
 * - Freischaltung je Themenbereich: R8 und M8, Variante A und Nachschreibprobe B
 * - laufende Bearbeitungen (Sitzungen): wer schreibt, wie viel Zeit ist um, wann zuletzt gesichert; ein gesicherter
 *   Zwischenstand lässt sich als Abgabe übernehmen (Gerät ausgefallen)
 * - Korrektur prüfen: Bei JEDER Aufgabe lassen sich Punkte, Begründung und Lernhinweis ändern; freie Antworten kann
 *   die KI noch einmal vorkorrigieren. Die KI-Bewertung ist nur ein Vorschlag – bestätigt wird durch die Lehrkraft.
 * - Probensicherheit je Abgabe (js/probe-protokoll.js): Bearbeitungszeit, Verlassen, Einfügen, Kopieren, Verbindung.
 *   Nichts davon ändert Punkte oder Note.
 * - „Korrigierte Probe freigeben“ = Ergebnis bestätigen und an das Kind zurückgeben (js/probe-rueckgabe-lehrer.js,
 *   /api/proben/rueckgabe). Dort auch: Elternansicht drucken, Rückgabe zurücknehmen.
 * - Aufgabenanalyse der angezeigten Abgaben (diagnose.js).
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const NAMEN = (() => { try { return JSON.parse(localStorage.getItem("lf-nt9-namen") || "{}") || {}; } catch (_e) { return {}; } })();
  const wer = r => (NAMEN[r.code] ? NAMEN[r.code] + " (Code " + r.code + ")" : "Code " + r.code);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c]);
  const QUELLE = { schluessel: "Lösungsschlüssel", ki: "KI-Vorschlag", stichworte: "vorläufig nach Stichwörtern", lehrkraft: "von dir geändert", leer: "keine Antwort" };
  let password = "", tests = [], abgaben = [], rueckStand = {};
  if (params.get("test")) setTimeout(() => { $("filter-test").value = params.get("test"); }, 0);

  async function request(route, body = {}) {
    const response = await fetch(API + "/api/nt8/teacher/" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, password }) });
    if (route === "export" && response.ok) return response.blob();
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error === "bad_password" ? "Passwort nicht richtig." : data.message || data.error || "Serverfehler");
    return data;
  }
  const status = (text, bad = false) => { $("teacher-status").textContent = text; $("teacher-status").classList.toggle("bad", bad); };
  const zeit = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }); };
  const antwort = (v, labels) => Array.isArray(v) && Array.isArray(labels) && labels.length ? labels.map((l, j) => esc(l) + " → <b>" + esc(v[j] || "–") + "</b>").join("<br>") : esc(Array.isArray(v) ? v.join(", ") : v || "–");

  function freischaltung() {
    const L = window.NT8;
    $("unlock-list").innerHTML = L.THEMEN.map(t => {
      const eigene = tests.filter(x => x.thema === t.id);
      if (!eigene.length) return `<div class="frei-gruppe"><h3>${t.icon} Probe ${parseInt(t.nr, 10)}: ${esc(t.titel)}</h3><p style="margin:0;color:#566674">Die Probe zu diesem Themenbereich ist in Vorbereitung.</p></div>`;
      return `<div class="frei-gruppe"><h3>${t.icon} Probe ${parseInt(t.nr, 10)}: ${esc(t.titel)}</h3>` + eigene.map(x => `<div class="unlock-row"><div><strong>${x.zug === "M" ? "M8" : "R8"} · ${x.variante === "B" ? "Variante B (Nachschreibprobe)" : "Variante A"}</strong><span>${x.itemCount} Aufgaben · ${x.maxPoints} Punkte · ${x.minutes} Minuten</span></div><div class="rechts"><button class="btn secondary klein" type="button" data-vorschau="${x.id}">Ansehen (mit Lösungen)</button><label class="switch-label"><input type="checkbox" data-unlock="${x.id}" ${x.unlocked ? "checked" : ""}> ${x.unlocked ? "Offen" : "Gesperrt"}</label></div></div>`).join("") + "</div>";
    }).join("");
  }
  // Probe vor dem Einsatz ansehen: jede Aufgabe mit Lösungsschlüssel und Erwartungshorizont (zum Durchlesen und Drucken).
  // Die Daten kommen nur mit dem Lehrerpasswort vom Server; sie werden nirgends gespeichert.
  const KOMPETENZ = { fachwissen: "Fachwissen", erkenntnis: "Erkenntnisse gewinnen", kommunikation: "Kommunizieren", bewertung: "Bewerten" };
  function loesung(a) {
    const liste = (punkte, ordnen) => `<${ordnen ? "ol" : "ul"}>${punkte.join("")}</${ordnen ? "ol" : "ul"}>`;
    if (a.type === "choice") return liste(a.options.map((o, i) => `<li class="${i === a.answer ? "ok" : ""}">${i === a.answer ? "✅ " : ""}${esc(o)}</li>`));
    if (a.type === "multi") return liste(a.options.map((o, i) => `<li class="${a.answers.includes(i) ? "ok" : ""}">${a.answers.includes(i) ? "✅ " : ""}${esc(o)}</li>`)) + "<p>Für jedes falsche Kreuz wird 1 Punkt abgezogen.</p>";
    if (a.type === "match") return liste((a.pairs || []).map(p => `<li>${esc(p[0])} → <b>${esc(p[1])}</b></li>`));
    if (a.type === "order") return liste(a.steps.map(s => `<li>${esc(s)}</li>`), true);
    if (a.type === "gaps") return "<p>" + esc(a.text).replace(/\{(\d+)\}/g, (_m, n) => { const g = a.gaps[n - 1] || []; return `<b>[${esc(g[0])}]</b> <small>(zur Wahl auch: ${esc(g.slice(1).join(", "))})</small>`; }) + "</p>";
    if (a.type === "tf") return liste(a.statements.map(s => `<li><b>${s[1] ? "richtig" : "falsch"}:</b> ${esc(s[0])}</li>`));
    if (a.type === "number") return `<p><b>${esc(String(a.answer).replace(".", ","))} ${esc(a.unit || "")}</b>${a.tolerance ? " (± " + esc(String(a.tolerance).replace(".", ",")) + ")" : ""}${a.units ? " · die Einheit zählt als eigener Punkt (zur Wahl: " + esc(a.units.join(", ")) + ")" : ""}</p>`;
    if (a.type === "labor") return "<p>Am Endzustand im NT-Labor wird geprüft (je 1 Punkt):</p>" + liste((a.regeln || []).map(r => `<li>${esc(r.text)}</li>`));
    return `<p><b>Erwartungshorizont (Beispiel):</b> ${esc(a.expected)}</p><p>Kriterien (je 1 Punkt, eigene Worte zählen):</p>` + liste((a.criteria || []).map(c => `<li>${esc(c)}</li>`));
  }
  async function vorschau(id) {
    const box = $("vorschau-box"); box.hidden = false; box.innerHTML = "<p>Probe wird geladen …</p>";
    try {
      const d = await request("vorschau", { testId: id });
      const modulTitel = mid => { const m = window.NT8.modulVon(mid); return m ? m.modul.titel : mid; };
      box.innerHTML = `<div class="v-kopf"><div><h3>${esc(d.title)}</h3><div class="v-marken">${d.items.length} Aufgaben · ${d.total} Punkte · ${d.minutes} Minuten · Ansicht für die Lehrkraft mit Lösungen</div></div>` +
        `<div class="v-knoepfe"><button class="btn secondary klein" type="button" data-v="druck">Drucken</button> <button class="btn secondary klein" type="button" data-v="zu">Schließen</button></div></div>` +
        d.items.map((a, i) => `<div class="v-aufgabe"><h4>Aufgabe ${i + 1} <span class="v-marken">· ${a.points} ${a.points === 1 ? "Punkt" : "Punkte"} · ${esc(modulTitel(a.modul))} · ${esc(KOMPETENZ[a.kompetenz] || "")}${a.transfer ? " · Transfer" : ""}</span></h4>` +
          `<p>${esc(a.prompt).replace(/\n/g, "<br>")}</p>${window.NT8Darstellung.html(a)}${a.labor ? `<div data-v-labor="${i}"></div>` : ""}<div class="v-loesung">${loesung(a)}</div></div>`).join("");
      d.items.forEach((a, i) => { if (a.labor) window.NT8Darstellung.labor(box.querySelector(`[data-v-labor="${i}"]`), a, { statisch: a.type === "labor" }); });
      box.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) { box.innerHTML = `<p class="notice bad">${esc(error.message)}</p>`; }
  }
  document.addEventListener("click", e => {
    const knopf = e.target.closest("[data-vorschau]"); if (knopf) { vorschau(knopf.dataset.vorschau); return; }
    const v = e.target.closest("#vorschau-box [data-v]"); if (!v) return;
    if (v.dataset.v === "zu") { $("vorschau-box").hidden = true; $("vorschau-box").innerHTML = ""; }
    else { document.body.classList.add("vorschau-druck"); window.print(); setTimeout(() => document.body.classList.remove("vorschau-druck"), 500); }
  });
  async function sitzungen() {
    try {
      const d = await request("sitzungen", {}), jetzt = Date.parse(d.serverZeit);
      $("sitzungen").innerHTML = d.sitzungen.length ? `<table class="sitz-tab"><thead><tr><th>Kind</th><th>Probe</th><th>begonnen</th><th>Zeit</th><th>beantwortet</th><th>zuletzt gesichert</th><th>verlassen</th><th></th></tr></thead><tbody>` + d.sitzungen.map(s => {
        const t = tests.find(x => x.id === s.testId) || {}, min = Math.floor((jetzt - Date.parse(s.begonnenAm)) / 60000);
        return `<tr><td>${esc(wer(s))}<br><small>${esc(s.klasse)}</small></td><td>${esc(t.title || s.testId)}</td><td>${zeit(s.begonnenAm)}</td><td>${min} von ${s.minuten} min${min > s.minuten ? " ⚠️" : ""}</td><td>${s.beantwortet} / ${s.aufgaben}</td><td>${s.gespeichertAm ? zeit(s.gespeichertAm) : "noch nicht"}</td><td>${s.verlassen}×${s.fortgesetzt ? " · " + s.fortgesetzt + "× neu geladen" : ""}</td>` +
          `<td><button class="btn secondary" data-uebernehmen="${esc(s.testId)}|${esc(s.code)}" title="Wenn das Kind nicht mehr abgeben kann (Gerät ausgefallen)">Zwischenstand als Abgabe übernehmen</button></td></tr>`;
      }).join("") + "</tbody></table><p style=\"font-size:.85rem;color:#566674\">Läuft die Zeit ab, gibt die Seite nicht von selbst ab. Du entscheidest, wann abgegeben wird.</p>" : `<p style="color:#566674">Im Moment schreibt niemand.</p>`;
    } catch (err) { $("sitzungen").innerHTML = `<p class="notice bad">${esc(err.message)}</p>`; }
  }
  function abgabeMarkup(row) {
    const zur = rueckStand["nt8|" + row.id], st = zur ? ["zurueck", "zurückgegeben"] : row.bestaetigtAm ? ["ok", "bestätigt – noch nicht zurückgegeben"] : ["pruefen", "Korrektur zu prüfen"];
    return `<article class="student-result" data-abgabe="${row.id}"><div class="student-head"><div><h3>${esc(wer(row))}${row.lrs ? " · LRS" : ""}<span class="ab-status ${st[0]}">${st[1]}</span></h3><span>${esc(row.className)} · ${esc(row.testTitle)} · ${new Date(row.submittedAt).toLocaleString("de-DE")}</span></div><strong>${row.score}/${row.total} · ${row.percent} % · Note ${row.grade}</strong></div>` +
      `<div class="platz-rueck"></div><details><summary>Antworten und Korrektur prüfen</summary>${window.ProbeProtokoll ? window.ProbeProtokoll.uebersicht(row) : ""}` +
      row.details.map(d => `<div class="k-zeile" data-nr="${d.nr}"><h4>${d.nr}. ${esc(d.prompt)} <span style="white-space:nowrap">(${d.points}/${d.maxPoints})</span><span class="k-quelle ${esc(d.source)}">${esc(QUELLE[d.source] || d.source)}</span></h4>` +
        `${d.modulTitel || d.transfer ? `<p class="herkunft">${d.modulTitel ? "📘 " + esc(d.modulTitel) : ""}${d.modulTitel && d.transfer ? " · " : ""}${d.transfer ? "🔁 Transfer" : ""}</p>` : ""}` +
        `${window.NT8Darstellung.html(d)}${d.labor ? `<div data-labor-nr="${d.nr}"></div>` : ""}<p><b>Antwort:</b></p><div class="k-antwort">${antwort(d.given, d.labels)}</div><p><b>${d.type === "text" ? "Erwartungshorizont (Beispiel)" : "Lösung"}:</b> ${antwort(d.expected, d.labels)}</p>` +
        `${d.vorschlag ? `<p style="font-size:.88rem;color:#566674">Ursprünglicher Vorschlag (${esc(QUELLE[d.vorschlag.source] || d.vorschlag.source)}): ${d.vorschlag.points} Punkte</p>` : ""}` +
        `<div class="k-form"><label for="p-${row.id}-${d.nr}">Punkte</label><span><input type="number" id="p-${row.id}-${d.nr}" min="0" max="${d.maxPoints}" value="${d.points}" data-f="points"> von ${d.maxPoints}</span>` +
        `<label>Begründung</label><textarea data-f="comment" maxlength="600">${esc(d.comment || "")}</textarea><label>Nächster Lernschritt</label><textarea data-f="tipp" maxlength="300">${esc(d.tipp || "")}</textarea>` +
        `<div class="knoepfe"><button class="btn secondary" data-speichern="${d.nr}">Änderung speichern</button>${d.type === "text" ? `<button class="btn secondary" data-ki="${d.nr}">✨ KI neu bewerten lassen</button>` : ""}</div></div></div>`).join("") +
      `<div class="gesamt-form"><label><b>Kommentar zur ganzen Probe</b> (steht über der Korrektur des Kindes)<textarea data-f="kommentar" maxlength="1200">${esc(row.kommentar || "")}</textarea></label>` +
      `<div class="knoepfe" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px"><button class="btn" data-freigeben="1">✅ Korrigierte Probe freigeben</button><button class="btn secondary" data-bestaetigen="1">Nur bestätigen (noch nicht zurückgeben)</button><button class="btn danger" data-delete="1">Abgabe löschen (Nachschreiben)</button></div>` +
      `<p style="font-size:.85rem;color:#566674;margin:8px 0 0">„Freigeben“ bestätigt das Ergebnis und gibt die korrigierte Probe an das Kind zurück: Es sieht sie in der Übersicht NT 8 und auf der Startseite unter „Zurückbekommen“ und kann sie für die Eltern drucken.</p></div></details></article>`;
  }
  async function load() {
    try {
      const [list, results, stand] = await Promise.all([fetch(API + "/api/nt8/list").then(r => r.json()), request("results", { testId: $("filter-test").value }),
        fetch(API + "/api/proben/rueckgabe/stand", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) }).then(r => r.json()).catch(() => ({}))]);
      tests = list.tests; abgaben = results.submissions; rueckStand = (stand && stand.stand) || {};
      $("teacher-content").hidden = false;
      freischaltung();
      const filter = $("filter-test"), current = filter.value || params.get("test") || "";
      filter.innerHTML = `<option value="">Alle Proben</option>${tests.map(t => `<option value="${t.id}">${esc(t.title)}</option>`).join("")}`; filter.value = current;
      const offene = [...document.querySelectorAll("#results details[open]")].map(d => d.closest("[data-abgabe]").dataset.abgabe);
      $("results").innerHTML = abgaben.length ? abgaben.map(abgabeMarkup).join("") : `<p>Noch keine Abgaben.</p>`;
      abgaben.forEach(row => {
        const el = document.querySelector(`[data-abgabe="${row.id}"]`);
        if (offene.includes(row.id)) el.querySelector("details").open = true;
        row.details.forEach(d => { if (d.labor) window.NT8Darstellung.labor(el.querySelector(`[data-labor-nr="${d.nr}"]`), d, { statisch: true }); });
        if (window.ProbeRueckgabeLehrer) window.ProbeRueckgabeLehrer.zelle(el.querySelector(".platz-rueck"), row);
      });
      const pruefen = abgaben.filter(r => !r.bestaetigtAm && !rueckStand["nt8|" + r.id]).length;
      status(`${abgaben.length} Abgaben geladen` + (pruefen ? ` – bei ${pruefen} ist die Korrektur noch zu prüfen.` : "."));
      if (!$("analyse-box").hidden) $("analyse-box").innerHTML = window.NT8Diagnose.aufgabenanalyse(abgaben);
      sitzungen();
    } catch (err) { status(err.message, true); }
  }
  $("login").addEventListener("submit", e => {
    e.preventDefault(); password = $("password").value;
    if (window.ProbeRueckgabeLehrer) window.ProbeRueckgabeLehrer.start({ api: API, modul: "nt8", passwort: () => password, namen: NAMEN, fach: "Natur und Technik", wurzel: "../../", liste: () => $("results"), wer, neuLaden: load });
    load();
  });
  $("filter-test").addEventListener("change", load);
  $("sitz-neu").addEventListener("click", sitzungen);
  $("analyse").addEventListener("click", () => { const b = $("analyse-box"); b.hidden = !b.hidden; if (!b.hidden) b.innerHTML = window.NT8Diagnose.aufgabenanalyse(abgaben); });
  $("unlock-list").addEventListener("change", async e => {
    const checkbox = e.target.closest("[data-unlock]"); if (!checkbox) return;
    checkbox.disabled = true;
    try { await request("unlock", { testId: checkbox.dataset.unlock, open: checkbox.checked }); await load(); }
    catch (err) { checkbox.checked = !checkbox.checked; status(err.message, true); }
    finally { checkbox.disabled = false; }
  });
  $("sitzungen").addEventListener("click", async e => {
    const b = e.target.closest("[data-uebernehmen]"); if (!b) return;
    const [testId, code] = b.dataset.uebernehmen.split("|");
    if (!confirm("Den gesicherten Zwischenstand von " + wer({ code }) + " als Abgabe übernehmen?\n\nDas Kind kann danach nicht mehr weiterschreiben.")) return;
    try { await request("sitzung-abgeben", { testId, code }); await load(); } catch (err) { status(err.message, true); }
  });
  $("results").addEventListener("click", async e => {
    const button = e.target.closest("[data-speichern],[data-ki],[data-freigeben],[data-bestaetigen],[data-delete]"); if (!button) return;
    const article = button.closest("[data-abgabe]"), id = article.dataset.abgabe, row = abgaben.find(r => r.id === id);
    try {
      button.disabled = true;
      if (button.dataset.speichern || button.dataset.ki) {
        const zeile = button.closest(".k-zeile"), nr = Number(zeile.dataset.nr), f = n => zeile.querySelector(`[data-f="${n}"]`).value;
        if (button.dataset.ki) { button.textContent = "Die KI bewertet …"; const d = await request("neu-bewerten", { submissionId: id, nr }); status(d.ki ? "Die KI hat neu bewertet – bitte prüfen." : "Die KI war nicht erreichbar: vorläufig nach Stichwörtern bewertet.", !d.ki); }
        else await request("override", { submissionId: id, nr, points: Number(f("points")), comment: f("comment"), tipp: f("tipp") });
      } else if (button.dataset.delete) {
        if (!confirm("Diese Abgabe wirklich löschen? Danach kann " + wer(row) + " die Probe erneut schreiben.")) { button.disabled = false; return; }
        await request("delete", { submissionId: id });
      } else {
        const kommentar = article.querySelector('[data-f="kommentar"]').value;
        await request("bestaetigen", { submissionId: id, kommentar });
        if (button.dataset.freigeben) {
          const res = await fetch(API + "/api/proben/rueckgabe/freigeben", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password, eintraege: [{ modul: "nt8", id }], offen: true, mitLoesung: true, kommentar }) });
          const d = await res.json().catch(() => ({}));
          if (!res.ok || !d.ok) throw new Error(d.error || "Zurückgeben hat nicht geklappt.");
          status("Die korrigierte Probe ist an " + wer(row) + " zurückgegeben.");
        }
      }
      await load();
    } catch (err) { status(err.message, true); button.disabled = false; }
  });
  $("export").addEventListener("click", async () => {
    try { const blob = await request("export", { testId: $("filter-test").value }); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "nt8-proben.csv"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }
    catch (err) { status(err.message, true); }
  });
})();
