(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://grumi-nt7-proben.onrender.com" : location.origin)).replace(/\/$/,"");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  let password = "", tests = [];
  async function request(route, body = {}) {
    const response = await fetch(API + "/api/nt7/teacher/" + route,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...body,password})});
    if (route === "export" && response.ok) return response.blob();
    const data = await response.json();
    if (!response.ok) throw new Error(data.error === "bad_password" ? "Passwort nicht richtig." : data.error || "Serverfehler");
    return data;
  }
  const status = (text,bad=false) => { $("teacher-status").textContent = text; $("teacher-status").classList.toggle("bad",bad); };
  async function load() {
    try {
      const [list,results] = await Promise.all([fetch(API+"/api/nt7/list").then(r=>r.json()),request("results",{testId:$("filter-test").value})]);
      tests = list.tests;
      $("teacher-content").hidden = false;
      $("unlock-list").innerHTML = `<h2>Freischaltung</h2>${tests.map(t => `<div class="unlock-row"><div><strong>${esc(t.title)}</strong><span>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte</span></div><label class="switch-label"><input type="checkbox" data-unlock="${t.id}" ${t.unlocked ? "checked" : ""}> ${t.unlocked ? "Offen" : "Gesperrt"}</label></div>`).join("")}`;
      const filter = $("filter-test"), current = filter.value;
      filter.innerHTML = `<option value="">Alle Proben</option>${tests.map(t=>`<option value="${t.id}">${esc(t.title)}</option>`).join("")}`; filter.value = current;
      $("results").innerHTML = results.submissions.length ? results.submissions.map(row => `<article class="student-result"><div class="student-head"><div><h3>${esc(row.lastName)}, ${esc(row.firstName)}</h3><span>${esc(row.className)} · ${esc(row.testTitle)} · ${new Date(row.submittedAt).toLocaleString("de-DE")}</span></div><strong>${row.score}/${row.total} · Note ${row.grade}${row.needsReview ? " · prüfen" : ""}</strong></div><details><summary>Antworten und Korrektur ansehen</summary>${row.details.map(d => `<div class="teacher-detail"><strong>${d.nr}. ${esc(d.prompt)} (${d.points}/${d.maxPoints})</strong><p>Antwort: ${esc(Array.isArray(d.given) ? d.given.join(" | ") : d.given || "–")}</p><p>Lösung: ${esc(Array.isArray(d.expected) ? d.expected.join(" | ") : d.expected)}</p>${d.comment ? `<p>${esc(d.comment)} · ${esc(d.source)}</p>` : ""}${d.type === "text" ? `<label>Punkte anpassen <input type="number" min="0" max="${d.maxPoints}" value="${d.points}" data-points="${d.nr}"></label> <button class="btn secondary" data-override="${row.id}" data-nr="${d.nr}">Speichern</button>` : ""}</div>`).join("")}<button class="btn danger" data-delete="${row.id}">Abgabe löschen (Nachschreiben)</button></details></article>`).join("") : `<p>Noch keine Abgaben.</p>`;
      status(`${results.submissions.length} Abgaben geladen.`);
    } catch (err) { status(err.message,true); }
  }
  $("login").addEventListener("submit", e => { e.preventDefault(); password = $("password").value; load(); });
  $("filter-test").addEventListener("change", load);
  $("unlock-list").addEventListener("change", async e => {
    const checkbox = e.target.closest("[data-unlock]"); if (!checkbox) return;
    checkbox.disabled = true;
    try { await request("unlock",{testId:checkbox.dataset.unlock,open:checkbox.checked}); await load(); }
    catch (err) { checkbox.checked = !checkbox.checked; status(err.message,true); }
    finally { checkbox.disabled = false; }
  });
  $("results").addEventListener("click", async e => {
    const button = e.target.closest("[data-override],[data-delete]"); if (!button) return;
    try {
      if (button.dataset.override) {
        const input = button.parentElement.querySelector(`[data-points="${button.dataset.nr}"]`);
        await request("override",{submissionId:button.dataset.override,nr:Number(button.dataset.nr),points:Number(input.value)});
      } else {
        if (!confirm("Diese Abgabe wirklich löschen? Danach kann die Person die Probe erneut schreiben.")) return;
        await request("delete",{submissionId:button.dataset.delete});
      }
      await load();
    } catch (err) { status(err.message,true); }
  });
  $("export").addEventListener("click", async () => {
    try { const blob = await request("export",{testId:$("filter-test").value}); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "nt7-proben.csv"; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); }
    catch (err) { status(err.message,true); }
  });
})();
