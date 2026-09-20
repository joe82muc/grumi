"use strict";

const API_BASE = new URLSearchParams(location.search).get("api") ||
  ((location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? `${location.protocol}//${location.hostname}:3000`
    : "https://englisch-9.onrender.com");
const PASSWORD_KEY = "grumi-de7-teacher-password";

const state = {
  password: sessionStorage.getItem(PASSWORD_KEY) || "",
  attempts: [],
  overview: [],
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
    "studentDetail", "teacherLogin", "teacherLoginForm", "teacherPassword", "loginError", "loginButton"
  ].forEach((id) => { dom[id] = document.getElementById(id); });

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
    const haystack = `${student.firstName} ${student.lastName} ${student.className}`.toLocaleLowerCase("de");
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
      <span class="student-name"><strong>${escapeHtml(`${student.firstName} ${student.lastName}`)}</strong><span>${escapeHtml(student.className)} · ${student.attempts} Fassungen</span></span>
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
      <div><h2>${escapeHtml(`${student.firstName} ${student.lastName}`)}</h2><p>${escapeHtml(student.className)} · ${student.attempts} gespeicherte Fassungen</p></div>
      <time>Zuletzt aktiv: ${formatDate(student.lastActive)}</time>
    </div>
    <div class="stage-summary">
      ${[1, 2, 3, 4].map((stage) => `<div class="stage-summary-item ${(student.stages[stage] || 0) >= 2 ? "passed" : ""}"><span>Stufe ${stage}</span><strong>${stars(student.stages[stage] || 0)}</strong></div>`).join("")}
    </div>
    <div class="attempts-heading"><h3>Arbeitsverlauf</h3><span>${groups.length} Aufgaben</span></div>
    <div class="attempt-groups">${groups.length ? groups.map(groupTemplate).join("") : '<p class="empty-list">Für diesen Filter gibt es keine Fassungen.</p>'}</div>`;

  dom.studentDetail.querySelectorAll(".delete-attempt").forEach((button) => {
    button.addEventListener("click", () => deleteAttempt(button.dataset.attemptId));
  });
  refreshIcons();
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
    const blob = await response.blob();
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
  return `${student.firstName?.[0] || ""}${student.lastName?.[0] || ""}`.toLocaleUpperCase("de");
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
