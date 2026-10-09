"use strict";

const API_BASE = new URLSearchParams(location.search).get("api") ||
  ((location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? `${location.protocol}//${location.hostname}:3000`
    : "https://englisch-9.onrender.com");
const PASSWORD_KEY = "grumi-de7-teacher-password";
// Kinder mit Code heißen auf dem Server „Code 123“. Den Namen kennt nur die Lehrkraft: Namensliste aus
// proben-verwalten.html (gleicher Browser, Schlüssel "lf-nt9-namen").
function namensliste() { try { return JSON.parse(localStorage.getItem("lf-nt9-namen") || "{}") || {}; } catch (_e) { return {}; } }
function anzeigeName(text) {
  const m = /^Code (\d{3})\s*$/.exec(String(text || "").trim());
  if (!m) return String(text || "").trim();
  const name = namensliste()[m[1]];
  return name ? `${name} (Code ${m[1]})` : `Code ${m[1]}`;
}
function schuelerName(student) { return anzeigeName(`${student.firstName} ${student.lastName}`); }

const state = {
  password: sessionStorage.getItem(PASSWORD_KEY) || "",
  attempts: [],
  overview: [],
  moduleEntries: [],
  tables: [],
  tableClass: "",
  selectedKey: "",
  query: "",
  stage: ""
};

const dom = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  [
    "syncState", "logoutButton", "refreshButton", "exportButton", "studentCount", "attemptCount",
    "passedCount", "averageStars", "filteredCount", "searchInput", "stageFilter", "studentList",
    "studentDetail", "teacherLogin", "teacherLoginForm", "teacherPassword", "loginError", "loginButton",
    "tableCount", "tableClass", "tablesGrid"
  ].forEach((id) => { dom[id] = document.getElementById(id); });
  dom.tableClass.addEventListener("change", () => { state.tableClass = dom.tableClass.value; renderTables(); });
  // Tisch-Duelle live: alle 5 Sekunden nachladen, solange die Seite offen und entsperrt ist
  setInterval(() => { if (state.password && !document.hidden && !dom.teacherLogin.open) loadTables(); }, 5000);

  dom.teacherLoginForm.addEventListener("submit", login);
  dom.teacherLogin.addEventListener("cancel", (event) => event.preventDefault());
  dom.logoutButton.addEventListener("click", lockView);
  dom.refreshButton.addEventListener("click", loadResults);
  dom.exportButton.addEventListener("click", exportCsv);
  dom.searchInput.addEventListener("input", () => { state.query = dom.searchInput.value.trim().toLocaleLowerCase("de"); renderStudents(); });
  dom.stageFilter.addEventListener("change", () => { state.stage = dom.stageFilter.value; renderStudents(); });
  refreshIcons();

  if (state.password) loadResults();
  else openLogin();
}

async function login(event) {
  event.preventDefault();
  state.password = dom.teacherPassword.value;
  dom.loginError.textContent = "";
  setBusy(dom.loginButton, true, "Wird geöffnet ...");
  try {
    await loadResults();
    sessionStorage.setItem(PASSWORD_KEY, state.password);
    dom.teacherLogin.close();
  } catch (error) {
    state.password = "";
    dom.loginError.textContent = friendlyError(error);
  } finally {
    setBusy(dom.loginButton, false, "Öffnen");
  }
}

async function loadResults() {
  setBusy(dom.refreshButton, true, "Lädt ...");
  try {
    const data = await postJson("/api/de7-argument/teacher/results", { password: state.password });
    state.attempts = data.attempts || [];
    state.overview = data.overview || [];
    // Lernmodule 2–6 (Freitexte, Duelle, Lerntagebuch) kommen aus einer eigenen Route
    try {
      const modules = await postJson("/api/de7-argument/teacher/module-results", { password: state.password });
      state.moduleEntries = modules.entries || [];
    } catch (_error) {
      state.moduleEntries = [];
    }
    mergeModuleStudents();
    await loadTables();
    if (!state.selectedKey && state.overview.length) state.selectedKey = state.overview[0].studentKey;
    if (state.selectedKey && !state.overview.some((item) => item.studentKey === state.selectedKey)) {
      state.selectedKey = state.overview[0]?.studentKey || "";
    }
    render();
    setConnection(true, `Stand ${new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}`);
    return data;
  } catch (error) {
    setConnection(false, "Nicht verbunden");
    if (error.status === 401) openLogin();
    throw error;
  } finally {
    setBusy(dom.refreshButton, false, "Aktualisieren");
  }
}

/* ---------- Tisch-Duelle live (Modul 6) ---------- */
async function loadTables() {
  try {
    const data = await postJson("/api/de7-argument/teacher/tische", { password: state.password });
    state.tables = data.tische || [];
  } catch (_error) {
    state.tables = [];
  }
  renderTables();
}

function renderTables() {
  const tables = state.tables.filter((t) => !state.tableClass || t.klasse === state.tableClass);
  dom.tableCount.textContent = String(tables.length);
  // Offene Verläufe beim Neuzeichnen offen lassen
  const open = new Set(Array.from(dom.tablesGrid.querySelectorAll("details[open]")).map((d) => d.dataset.id));
  if (!tables.length) {
    dom.tablesGrid.innerHTML = '<p class="empty-list">Noch keine Tische besetzt. Die Schüler öffnen Modul 6 „Tisch-Duell zu zweit“ und geben ihre Tischnummer ein.</p>';
    return;
  }
  const statusText = { warten: "wartet auf Partner", thema: "wählt Thema", laeuft: "Duell läuft", fertig: "fertig" };
  dom.tablesGrid.innerHTML = tables.map((t) => `
    <article class="table-card ${escapeHtml(t.status)}">
      <div class="table-top"><strong>Tisch ${t.tisch} · ${escapeHtml(t.klasse)}</strong><span class="table-status">${escapeHtml(statusText[t.status] || t.status)}${t.status === "laeuft" ? ` · Runde ${t.runde}/${t.runden}` : ""}</span></div>
      <p class="table-topic">${t.thema ? `🗣️ ${escapeHtml(t.streitfrage)}` : "Noch kein Thema"}${t.amZug ? ` · am Zug: <b>${escapeHtml(t.amZug)}</b>` : ""}</p>
      ${t.spieler.map((s) => s ? `<div class="table-player"><span><span class="${s.online ? "on" : "off"}" title="${s.online ? "verbunden" : "nicht verbunden"}"></span>${escapeHtml(anzeigeName(s.name))} <small>${escapeHtml(s.seite || "")}</small></span><b>${t.thema ? `${s.punkte} ⭐` : ""}</b></div>` : '<div class="table-player"><small>– Platz frei –</small></div>').join("")}
      ${t.log.length ? `<details data-id="${escapeHtml(t.id)}" ${open.has(t.id) ? "open" : ""}><summary>Verlauf (${t.log.filter((l) => l.angenommen).length} gesendet, ${t.log.filter((l) => !l.angenommen).length} zurückgeschickt)</summary>
        <ul class="table-log">${t.log.map((l) => `<li class="${l.angenommen ? "ja" : "nein"}"><strong>${escapeHtml(anzeigeName(l.name))}</strong> ${l.angenommen ? `${"⭐".repeat(l.sterne)}` : "↩️"} <span class="t">${escapeHtml(l.text)}</span>
          <small>${l.quelle === "ki" ? "✨ " : "ohne KI · "}${escapeHtml(l.rueckmeldung || "")}${l.tipp ? ` Tipp: ${escapeHtml(l.tipp)}` : ""}</small></li>`).join("")}</ul></details>` : ""}
      <div class="table-actions"><button type="button" data-reset="${escapeHtml(t.id)}">Tisch freigeben</button></div>
    </article>`).join("");
  dom.tablesGrid.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!confirm("Diesen Tisch freigeben? Das laufende Duell wird beendet, die Schüler können sich neu hinsetzen.")) return;
      try {
        await postJson("/api/de7-argument/teacher/tisch-reset", { password: state.password, roomId: button.dataset.reset });
        await loadTables();
      } catch (error) {
        alert(friendlyError(error));
      }
    });
  });
}

function mergeModuleStudents() {
  for (const entry of state.moduleEntries) {
    let student = state.overview.find((item) => item.studentKey === entry.studentKey);
    if (!student) {
      student = { studentKey: entry.studentKey, firstName: entry.firstName, lastName: entry.lastName, className: entry.className, attempts: 0, stages: { 1: 0, 2: 0, 3: 0, 4: 0 }, lastActive: entry.createdAt };
      state.overview.push(student);
    }
    student.moduleCount = (student.moduleCount || 0) + 1;
    if (entry.createdAt > student.lastActive) student.lastActive = entry.createdAt;
  }
  state.overview.sort((a, b) => a.className.localeCompare(b.className, "de") || a.lastName.localeCompare(b.lastName, "de"));
}

function render() {
  renderMetrics();
  renderStudents();
  renderDetail();
  refreshIcons();
}

function renderMetrics() {
  dom.studentCount.textContent = String(state.overview.length);
  dom.attemptCount.textContent = String(state.attempts.length);
  const passed = state.overview.reduce((sum, student) => sum + Object.values(student.stages || {}).filter((stars) => stars >= 2).length, 0);
  dom.passedCount.textContent = String(passed);
  const average = state.attempts.length
    ? state.attempts.reduce((sum, attempt) => sum + (Number(attempt.evaluation?.stars) || 0), 0) / state.attempts.length
    : 0;
  dom.averageStars.textContent = average.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function filteredStudents() {
  return state.overview.filter((student) => {
    const haystack = `${schuelerName(student)} ${student.className}`.toLocaleLowerCase("de");
    const matchesText = !state.query || haystack.includes(state.query);
    const matchesStage = !state.stage || state.attempts.some((attempt) => attempt.studentKey === student.studentKey && String(attempt.stage) === state.stage);
    return matchesText && matchesStage;
  });
}

function renderStudents() {
  const students = filteredStudents();
  dom.filteredCount.textContent = String(students.length);
  if (!students.length) {
    dom.studentList.innerHTML = '<p class="empty-list">Keine passenden Einträge.</p>';
    return;
  }
  dom.studentList.replaceChildren(...students.map((student) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `student-button ${student.studentKey === state.selectedKey ? "active" : ""}`;
    const best = Math.max(0, ...Object.values(student.stages || {}).map(Number));
    button.innerHTML = `
      <span class="student-avatar">${escapeHtml(initials(student))}</span>
      <span class="student-name"><strong>${escapeHtml(schuelerName(student))}</strong><span>${escapeHtml(student.className)} · ${student.attempts} Fassungen${student.moduleCount ? ` · ${student.moduleCount} Modul-Einträge` : ""}</span></span>
      <span class="student-score">${"★".repeat(best)}${"☆".repeat(3 - best)}</span>`;
    button.addEventListener("click", () => {
      state.selectedKey = student.studentKey;
      renderStudents();
      renderDetail();
    });
    return button;
  }));
}

function renderDetail() {
  const student = state.overview.find((item) => item.studentKey === state.selectedKey);
  if (!student) {
    dom.studentDetail.innerHTML = '<div class="empty-detail"><i data-lucide="users"></i><h2>Lernende auswählen</h2><p>Hier erscheinen Fortschritt, Erstfassung und Verbesserungen.</p></div>';
    refreshIcons();
    return;
  }
  const attempts = state.attempts.filter((attempt) => attempt.studentKey === student.studentKey && (!state.stage || String(attempt.stage) === state.stage));
  const groups = groupAttempts(attempts);
  dom.studentDetail.innerHTML = `
    <div class="detail-head">
      <div><h2>${escapeHtml(schuelerName(student))}</h2><p>${escapeHtml(student.className)} · ${student.attempts} gespeicherte Fassungen</p></div>
      <time>Zuletzt aktiv: ${formatDate(student.lastActive)}</time>
    </div>
    <div class="stage-summary">
      ${[1, 2, 3, 4].map((stage) => `<div class="stage-summary-item ${(student.stages[stage] || 0) >= 2 ? "passed" : ""}"><span>Stufe ${stage}</span><strong>${stars(student.stages[stage] || 0)}</strong></div>`).join("")}
    </div>
    <div class="attempts-heading"><h3>Arbeitsverlauf</h3><span>${groups.length} Aufgaben</span></div>
    <div class="attempt-groups">${groups.length ? groups.map(groupTemplate).join("") : '<p class="empty-list">Für diesen Filter gibt es keine Fassungen.</p>'}</div>
    ${moduleTemplate(student)}`;

  dom.studentDetail.querySelectorAll(".delete-entry").forEach((button) => {
    button.addEventListener("click", () => deleteEntry(button.dataset.entryId));
  });

  dom.studentDetail.querySelectorAll(".delete-attempt:not(.delete-entry)").forEach((button) => {
    button.addEventListener("click", () => deleteAttempt(button.dataset.attemptId));
  });
  refreshIcons();
}

function moduleTemplate(student) {
  const entries = state.moduleEntries.filter((entry) => entry.studentKey === student.studentKey);
  if (!entries.length) return "";
  const byModule = new Map();
  for (const entry of entries.slice().sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
    if (!byModule.has(entry.modulTitel)) byModule.set(entry.modulTitel, []);
    byModule.get(entry.modulTitel).push(entry);
  }
  return `
    <div class="attempts-heading" style="margin-top:26px"><h3>Lernmodule 2–6</h3><span>${entries.length} Einträge</span></div>
    <div class="attempt-groups">${Array.from(byModule.entries()).map(([title, list]) => `
      <details class="attempt-group">
        <summary>
          <div><strong>${escapeHtml(title)}</strong><span>${list.filter((e) => e.art === "text").length} Texte · ${list.filter((e) => e.art === "duell").length} Duell-Antworten${list.some((e) => e.art === "tischduell") ? ` · ${list.filter((e) => e.art === "tischduell").length} Tisch-Duell-Beiträge` : ""} · ${list.filter((e) => e.art === "tagebuch").length} Lerntagebuch</span></div>
          <span class="revision-count">${list.filter(entryOk).length} gelungen</span>
          <span>${formatDate(list.at(-1).createdAt)}</span>
        </summary>
        <div class="revision-list">${list.map(entryTemplate).join("")}</div>
      </details>`).join("")}</div>`;
}

function entryOk(entry) {
  return entry.ergebnis?.richtig === true || entry.ergebnis?.bewertung === "good";
}

function entryTemplate(entry) {
  const result = entry.ergebnis || {};
  const art = { text: "Freitext", duell: "Duell", tischduell: "Tisch-Duell", tagebuch: "Lerntagebuch" }[entry.art] || entry.art;
  const verdict = entry.art === "tagebuch" ? ""
    : entry.art === "tischduell" ? (entryOk(entry) ? `✅ gesendet ${"⭐".repeat(result.sterne || 0)}` : "↩️ von der KI zurückgeschickt")
    : entryOk(entry) ? "✅ gelungen" : (result.teilweise || result.bewertung === "mid") ? "🟡 teilweise" : "❌ noch nicht";
  const criteria = (result.kriterien || []).map((item) => `${item.ok ? "✓" : "✗"} ${escapeHtml(item.text)}`).join("<br>");
  return `
    <article class="revision">
      <div class="revision-head">
        <div class="revision-title"><span class="revision-badge">${escapeHtml(art)}</span><strong>${escapeHtml(entry.titel || entry.aufgabe)}</strong><span>${verdict}</span></div>
        <time>${formatDate(entry.createdAt)}</time>
      </div>
      <div class="answer-block">
        ${entry.art === "duell" ? `<div class="answer-part"><strong>Aussage der KI</strong><p>${escapeHtml(entry.frage)}</p></div>` : ""}
        ${entry.art === "tischduell" ? `<div class="answer-part"><strong>Worauf geantwortet wurde</strong><p>${escapeHtml(entry.frage)}</p></div>` : ""}
        <div class="answer-part"><strong>${entry.art === "tagebuch" ? "Eintrag" : "Antwort"}</strong><p style="white-space:pre-wrap">${escapeHtml(entry.antwort)}</p></div>
        ${criteria ? `<div class="answer-part"><strong>Checkliste</strong><p>${criteria}</p></div>` : ""}
      </div>
      ${result.rueckmeldung ? `<div class="teacher-feedback"><i data-lucide="message-square-text"></i><p><strong>Rückmeldung${entry.quelle === "ki" ? " der KI" : ""}:</strong> ${escapeHtml(result.rueckmeldung)}${result.tipp ? ` <em>Tipp: ${escapeHtml(result.tipp)}</em>` : ""}</p></div>` : ""}
      <button class="delete-attempt delete-entry" type="button" data-entry-id="${escapeHtml(entry.id)}">Eintrag löschen</button>
    </article>`;
}

async function deleteEntry(entryId) {
  if (!confirm("Diesen Eintrag wirklich löschen?")) return;
  try {
    await postJson("/api/de7-argument/teacher/module-delete", { password: state.password, entryId });
    await loadResults();
  } catch (error) {
    alert(friendlyError(error));
  }
}

function groupAttempts(attempts) {
  const groups = new Map();
  for (const attempt of attempts.slice().sort((a, b) => a.createdAt.localeCompare(b.createdAt))) {
    if (!groups.has(attempt.exerciseId)) groups.set(attempt.exerciseId, []);
    groups.get(attempt.exerciseId).push(attempt);
  }
  return Array.from(groups.values()).sort((a, b) => b.at(-1).createdAt.localeCompare(a.at(-1).createdAt));
}

function groupTemplate(group) {
  const first = group[0];
  const latest = group.at(-1);
  const gain = (latest.evaluation?.stars || 0) - (first.evaluation?.stars || 0);
  return `
    <details class="attempt-group" ${group.length > 1 ? "open" : ""}>
      <summary>
        <div><strong>${escapeHtml(first.topicTitle)}</strong><span>Stufe ${first.stage} · ${escapeHtml(stageTitle(first.stage))}</span></div>
        <span class="revision-count">${group.length} ${group.length === 1 ? "Fassung" : "Fassungen"}${gain > 0 ? ` · +${gain} ★` : ""}</span>
        <span>${stars(latest.evaluation?.stars || 0)}</span>
      </summary>
      <div class="revision-list">${group.map(revisionTemplate).join("")}</div>
    </details>`;
}

function revisionTemplate(attempt) {
  return `
    <article class="revision">
      <div class="revision-head">
        <div class="revision-title"><span class="revision-badge">Version ${attempt.revision}</span><span class="revision-stars">${stars(attempt.evaluation?.stars || 0)}</span></div>
        <time>${formatDate(attempt.createdAt)}</time>
      </div>
      <div class="answer-block">${contentTemplate(attempt.content)}</div>
      <div class="teacher-feedback"><i data-lucide="message-square-text"></i><p><strong>Rückmeldung:</strong> ${escapeHtml(attempt.evaluation?.summary || "Keine Rückmeldung")}</p></div>
      <button class="delete-attempt" type="button" data-attempt-id="${escapeHtml(attempt.id)}">Fassung löschen</button>
    </article>`;
}

function contentTemplate(content = {}) {
  const labels = {
    claim: "Behauptung", reason: "Begründung", example: "Beispiel", pro: "Pro", contra: "Kontra",
    weighing: "Abwägung", counterArgument: "Gegenargument", reply: "Antwort", text: "Freier Text"
  };
  return Object.entries(content).filter(([key, value]) => labels[key] && value).map(([key, value]) => `
    <div class="answer-part"><strong>${labels[key]}</strong><p>${escapeHtml(value)}</p></div>`).join("");
}

async function deleteAttempt(attemptId) {
  if (!confirm("Diese Fassung wirklich löschen?")) return;
  try {
    await postJson("/api/de7-argument/teacher/delete", { password: state.password, attemptId });
    await loadResults();
  } catch (error) {
    alert(friendlyError(error));
  }
}

async function exportCsv() {
  setBusy(dom.exportButton, true, "Export läuft ...");
  try {
    const response = await fetch(`${API_BASE}/api/de7-argument/teacher/export`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password: state.password })
    });
    if (!response.ok) throw Object.assign(new Error("Export nicht möglich."), { status: response.status });
    let blob = await response.blob();
    // Namen aus der Namensliste dieses Browsers eintragen – der Server kennt nur Codes (js/export-namen.js)
    if (window.GrumiExportNamen) blob = await GrumiExportNamen.datei(blob);
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "argumentation-7m.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    alert(friendlyError(error));
  } finally {
    setBusy(dom.exportButton, false, "CSV exportieren");
  }
}

function lockView() {
  state.password = "";
  state.attempts = [];
  state.overview = [];
  state.moduleEntries = [];
  state.tables = [];
  state.selectedKey = "";
  sessionStorage.removeItem(PASSWORD_KEY);
  render();
  openLogin();
}

function openLogin() {
  if (!dom.teacherLogin.open) dom.teacherLogin.showModal();
  setTimeout(() => dom.teacherPassword.focus(), 50);
}

async function postJson(route, body) {
  const response = await fetch(`${API_BASE}${route}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  let data = {};
  try { data = await response.json(); } catch (_error) { /* ignore */ }
  if (!response.ok) {
    const error = new Error(data.error || `HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return data;
}

function setConnection(online, label) {
  dom.syncState.classList.toggle("online", online);
  dom.syncState.classList.toggle("offline", !online);
  dom.syncState.lastChild.textContent = ` ${label}`;
}

function setBusy(button, busy, label) {
  if (!button) return;
  button.disabled = busy;
  const span = button.querySelector("span");
  if (span) span.textContent = label;
  else {
    const icon = button.querySelector("svg, i");
    button.textContent = "";
    if (icon) button.append(icon);
    button.append(document.createTextNode(` ${label}`));
  }
}

function stageTitle(stage) {
  return ({ 1: "Argument bauen", 2: "Zwei Seiten sehen", 3: "Argument-Duell", 4: "Freie Argumentation" })[stage] || "";
}

function stars(value) {
  const count = Math.max(0, Math.min(3, Number(value) || 0));
  return `${"★".repeat(count)}${"☆".repeat(3 - count)}`;
}

function initials(student) {
  const n = schuelerName(student);
  if (/^Code \d{3}$/.test(n)) return "#";
  return n.split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toLocaleUpperCase("de");
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" });
}

function friendlyError(error) {
  if (error.status === 401) return "Das Lehrerpasswort ist falsch.";
  if (/fetch|network/i.test(error.message || "")) return "Die Verbindung zum Server ist nicht erreichbar.";
  return error.message || "Die Anfrage ist fehlgeschlagen.";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}
