"use strict";

const API_BASE = new URLSearchParams(location.search).get("api") ||
  ((location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? `${location.protocol}//${location.hostname}:3000`
    : "https://englisch-9.onrender.com");

const SESSION_KEY = "grumi-de7-argument-session-v1";
const DRAFT_KEY = "grumi-de7-argument-drafts-v1";
const WORDS = {
  1: ["weil", "denn", "deshalb", "zum Beispiel", "vergleichbar ist"],
  2: ["einerseits", "andererseits", "dafür spricht", "dagegen spricht", "insgesamt"],
  3: ["ich verstehe den Einwand", "trotzdem", "allerdings", "das überzeugt mich nicht, weil"],
  4: ["zunächst", "außerdem", "zum Beispiel", "dagegen könnte man einwenden", "abschließend"]
};

const FALLBACK_CONFIG = {
  topics: [
    { id: "wandertag", title: "Wandertag: Zoo oder Bowling?", shortTitle: "Wandertag", prompt: "Soll die Klasse am Wandertag in den Zoo oder zum Bowling gehen?", sides: ["Zoo", "Bowling"], starter: "Ich bin dafür, dass ..." },
    { id: "handys", title: "Handys in der Schule", shortTitle: "Handys", prompt: "Sollen Handys in den Pausen erlaubt sein?", sides: ["dafür", "dagegen"], starter: "Handys sollten in den Pausen ..." },
    { id: "hausaufgaben", title: "Hausaufgaben", shortTitle: "Hausaufgaben", prompt: "Soll es am Wochenende Hausaufgaben geben?", sides: ["dafür", "dagegen"], starter: "Hausaufgaben am Wochenende sind ..." },
    { id: "schuluniform", title: "Schuluniform", shortTitle: "Schuluniform", prompt: "Soll es an unserer Schule eine Schuluniform geben?", sides: ["dafür", "dagegen"], starter: "Eine Schuluniform wäre ..." },
    { id: "schulbeginn", title: "Späterer Schulbeginn", shortTitle: "Schulbeginn", prompt: "Soll der Unterricht morgens später beginnen?", sides: ["dafür", "dagegen"], starter: "Der Unterricht sollte später beginnen, weil ..." },
    { id: "klassenfahrt", title: "Klassenfahrt", shortTitle: "Klassenfahrt", prompt: "Soll eine Klassenfahrt eher sportlich oder kulturell ausgerichtet sein?", sides: ["sportlich", "kulturell"], starter: "Unsere Klassenfahrt sollte ... sein, weil ..." },
    { id: "social-media", title: "Mindestalter für Social Media", shortTitle: "Social Media", prompt: "Soll Social Media erst ab 14 Jahren erlaubt sein?", sides: ["dafür", "dagegen"], starter: "Ein Mindestalter von 14 Jahren ist ..." },
    { id: "schulnoten", title: "Schulnoten", shortTitle: "Schulnoten", prompt: "Soll es in allen Fächern weiterhin Schulnoten geben?", sides: ["dafür", "dagegen"], starter: "Schulnoten sind ..." }
  ],
  stages: [
    { id: 1, title: "Argument bauen", subtitle: "Behauptung, Begründung und Beispiel" },
    { id: 2, title: "Zwei Seiten sehen", subtitle: "Pro und Kontra abwägen" },
    { id: 3, title: "Argument-Duell", subtitle: "Auf ein Gegenargument antworten" },
    { id: 4, title: "Freie Argumentation", subtitle: "Einen eigenen Text untersuchen" }
  ]
};

const state = {
  config: FALLBACK_CONFIG,
  token: "",
  student: null,
  progress: emptyProgress(),
  topicId: "wandertag",
  stage: 1,
  side: "Zoo",
  feedback: null,
  counterArgument: "",
  activeField: null,
  exerciseIds: {}
};

const dom = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  bindDom();
  bindStaticEvents();
  restoreSession();
  renderAll();
  refreshIcons();

  try {
    const config = await api("/api/de7-argument/config", { method: "GET" }, false);
    state.config = config;
    setConnection(true, config.aiConfigured ? "KI-Auswertung bereit" : "Auswertung bereit");
  } catch (_error) {
    setConnection(false, "Dienst startet noch");
  }
  syncTopicState();
  renderAll();

  if (state.token) {
    try {
      const result = await api("/api/de7-argument/progress", { method: "GET" });
      state.progress = result.progress;
      setConnection(true, "Gespeichert");
      renderAll();
      return;
    } catch (_error) {
      clearSession();
    }
  }
  openLogin();
}

function bindDom() {
  [
    "syncState", "logoutButton", "stageButtons", "studentLabel", "topicList", "newArgumentButton",
    "stageNumber", "stageKicker", "stageTitle", "stageSubtitle", "topicPrompt", "sidePicker",
    "sideOptions", "trainerForm", "stageFields", "wordChips", "formMessage", "checkButton",
    "feedbackSection", "feedbackTitle", "feedbackStars", "feedbackSummary", "componentList",
    "markedArea", "markedText", "nextStep", "improveButton", "nextStageButton", "licenceMeter",
    "progressCopy", "licenceList", "licenceResult", "loginDialog", "loginForm", "firstName",
    "lastName", "className", "loginError", "loginButton"
  ].forEach((id) => { dom[id] = document.getElementById(id); });
}

function bindStaticEvents() {
  dom.loginForm.addEventListener("submit", login);
  dom.loginDialog.addEventListener("cancel", (event) => {
    if (!state.token) event.preventDefault();
  });
  dom.logoutButton.addEventListener("click", () => {
    clearSession();
    state.progress = emptyProgress();
    renderAll();
    openLogin();
  });
  dom.newArgumentButton.addEventListener("click", startNewArgument);
  dom.trainerForm.addEventListener("submit", evaluateArgument);
  dom.improveButton.addEventListener("click", () => {
    dom.feedbackSection.hidden = true;
    const firstNeedsWork = dom.stageFields.querySelector("textarea");
    firstNeedsWork?.focus();
    dom.stageFields.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  dom.nextStageButton.addEventListener("click", () => {
    if (state.stage < 4) selectStage(state.stage + 1);
  });
}

async function login(event) {
  event.preventDefault();
  dom.loginError.textContent = "";
  setButtonBusy(dom.loginButton, true, "Wird geöffnet ...");
  try {
    const result = await api("/api/de7-argument/start", {
      method: "POST",
      body: {
        firstName: dom.firstName.value,
        lastName: dom.lastName.value,
        className: dom.className.value
      }
    }, false);
    state.token = result.token;
    state.student = result.student;
    state.progress = result.progress;
    persistSession();
    setConnection(true, "Gespeichert");
    dom.loginDialog.close();
    renderAll();
  } catch (error) {
    dom.loginError.textContent = friendlyError(error);
    setConnection(false, "Verbindung fehlgeschlagen");
  } finally {
    setButtonBusy(dom.loginButton, false, "Training öffnen");
  }
}

function renderAll() {
  syncTopicState();
  renderTopics();
  renderStageNavigation();
  renderTask();
  renderProgress();
  dom.studentLabel.textContent = state.student ? `${state.student.firstName} · ${state.student.className}` : "Noch nicht angemeldet";
  refreshIcons();
}

function renderTopics() {
  dom.topicList.replaceChildren(...state.config.topics.map((topic) => {
    const button = element("button", "topic-button", topic.shortTitle);
    button.type = "button";
    button.dataset.topicId = topic.id;
    button.classList.toggle("active", topic.id === state.topicId);
    button.setAttribute("aria-pressed", String(topic.id === state.topicId));
    button.addEventListener("click", () => {
      saveDraft();
      state.topicId = topic.id;
      state.side = topic.sides[0];
      state.feedback = null;
      state.counterArgument = "";
      renderAll();
    });
    return button;
  }));
}

function renderStageNavigation() {
  dom.stageButtons.replaceChildren(...state.config.stages.map((stage) => {
    const progress = state.progress.stages[String(stage.id)] || { unlocked: stage.id === 1, passed: false, bestStars: 0 };
    const button = element("button", "stage-button");
    button.type = "button";
    button.disabled = !progress.unlocked;
    button.classList.toggle("active", state.stage === stage.id);
    button.classList.toggle("passed", progress.passed);
    button.setAttribute("aria-current", state.stage === stage.id ? "step" : "false");
    const icon = element("span", "stage-icon");
    icon.innerHTML = progress.passed ? '<i data-lucide="check"></i>' : String(stage.id);
    const text = element("span");
    text.append(element("strong", "", stage.title), element("small", "", stage.subtitle));
    const end = element("span", "stage-stars", progress.unlocked ? `${progress.bestStars || 0}/3` : "");
    if (!progress.unlocked) end.innerHTML = '<i data-lucide="lock-keyhole"></i>';
    button.append(icon, text, end);
    button.addEventListener("click", () => selectStage(stage.id));
    return button;
  }));
}

function renderTask() {
  const topic = currentTopic();
  const stage = currentStage();
  dom.stageNumber.textContent = String(stage.id);
  dom.stageKicker.textContent = `Stufe ${stage.id}`;
  dom.stageTitle.textContent = stage.title;
  dom.stageSubtitle.textContent = stage.subtitle;
  dom.topicPrompt.textContent = topic.prompt;
  renderSidePicker(topic);
  renderFields(stage.id, topic);
  renderWordBank(stage.id);
  dom.feedbackSection.hidden = !state.feedback;
  if (state.feedback) renderFeedback();
  refreshIcons();
}

function renderSidePicker(topic) {
  dom.sidePicker.hidden = state.stage === 2 || state.stage === 4;
  dom.sideOptions.replaceChildren(...topic.sides.map((side, index) => {
    const wrap = element("div", "segment");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "side";
    input.id = `side-${index}`;
    input.value = side;
    input.checked = side === state.side;
    input.addEventListener("change", () => {
      state.side = side;
      state.counterArgument = "";
      saveDraft();
      if (state.stage === 3) renderTask();
    });
    const label = element("label", "", side);
    label.htmlFor = input.id;
    wrap.append(input, label);
    return wrap;
  }));
}

function renderFields(stage, topic) {
  const draft = loadDraft();
  if (stage === 1) {
    dom.stageFields.innerHTML = [
      fieldTemplate("claim", "1. Behauptung", "Was meinst oder forderst du?", topic.starter, draft.claim),
      fieldTemplate("reason", "2. Begründung", "Warum ist deine Behauptung sinnvoll?", "Das ist sinnvoll, weil ...", draft.reason),
      fieldTemplate("example", "3. Beispiel oder Vergleich", "Woran kann man deine Begründung erkennen?", "Zum Beispiel ...", draft.example)
    ].join("");
  } else if (stage === 2) {
    dom.stageFields.innerHTML = [
      fieldTemplate("pro", "Pro", "Was spricht dafür? Begründe den Vorteil.", "Dafür spricht, dass ...", draft.pro),
      fieldTemplate("contra", "Kontra", "Was spricht dagegen? Begründe den Nachteil.", "Dagegen spricht, dass ...", draft.contra),
      fieldTemplate("weighing", "Abwägung", "Welche Seite überzeugt dich mehr und warum?", "Insgesamt überwiegt für mich ...", draft.weighing)
    ].join("");
  } else if (stage === 3) {
    state.counterArgument = draft.counterArgument || state.counterArgument;
    dom.stageFields.innerHTML = `
      <div class="duel-start">
        ${fieldTemplate("duelArgument", "Dein Startargument", "Formuliere deine Position mit einer Begründung.", topic.starter, draft.duelArgument)}
        <button class="secondary-button" id="counterButton" type="button"><i data-lucide="messages-square"></i> Gegenargument holen</button>
      </div>
      <div class="counter-panel" id="counterPanel" ${state.counterArgument ? "" : "hidden"}>
        <span>Die Gegenseite sagt</span><p id="counterText"></p>
      </div>
      ${fieldTemplate("reply", "Deine Antwort", "Gehe direkt auf den Einwand ein und bleibe sachlich.", "Ich verstehe den Einwand. Trotzdem ...", draft.reply)}
    `;
    const counterPanel = document.getElementById("counterPanel");
    const counterText = document.getElementById("counterText");
    if (state.counterArgument) counterText.textContent = state.counterArgument;
    document.getElementById("counterButton").addEventListener("click", requestCounterArgument);
    document.getElementById("reply").disabled = !state.counterArgument;
    counterPanel.hidden = !state.counterArgument;
  } else {
    dom.stageFields.innerHTML = fieldTemplate(
      "text",
      "Deine Argumentation",
      "Schreibe mindestens 25 Wörter. Formuliere eine Position, begründe sie und nutze ein Beispiel. Greife auch ein Gegenargument auf.",
      "Ich bin der Meinung, dass ...",
      draft.text,
      true
    );
  }

  dom.stageFields.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("focus", () => { state.activeField = textarea; });
    textarea.addEventListener("input", () => {
      updateWordCount(textarea);
      saveDraft();
    });
    updateWordCount(textarea);
  });
  if (!state.activeField || !document.body.contains(state.activeField)) {
    state.activeField = dom.stageFields.querySelector("textarea:not(:disabled)");
  }
}

function fieldTemplate(id, title, hint, placeholder, value = "", long = false) {
  return `
    <div class="field-block">
      <div class="field-title"><label for="${id}">${escapeHtml(title)}</label><span id="${id}-count">0 Wörter</span></div>
      <textarea id="${id}" name="${id}" class="${long ? "long-text" : ""}" placeholder="${escapeHtml(placeholder)}" required>${escapeHtml(value || "")}</textarea>
      <p class="field-hint">${escapeHtml(hint)}</p>
    </div>`;
}

function renderWordBank(stage) {
  dom.wordChips.replaceChildren(...WORDS[stage].map((word) => {
    const button = element("button", "word-chip", word);
    button.type = "button";
    button.addEventListener("click", () => insertWord(word));
    return button;
  }));
}

async function requestCounterArgument() {
  const button = document.getElementById("counterButton");
  const argument = document.getElementById("duelArgument").value.trim();
  if (argument.split(/\s+/).filter(Boolean).length < 5) {
    showMessage("Formuliere zuerst ein vollständiges Startargument.");
    return;
  }
  setButtonBusy(button, true, "Die Gegenseite denkt nach ...");
  showMessage("");
  try {
    const result = await api("/api/de7-argument/counter", {
      method: "POST",
      body: { topicId: state.topicId, side: state.side, studentArgument: argument }
    });
    state.counterArgument = result.counterArgument;
    const draft = loadDraft();
    draft.duelArgument = argument;
    draft.counterArgument = result.counterArgument;
    storeDraft(draft);
    renderTask();
    document.getElementById("reply")?.focus();
  } catch (error) {
    showMessage(friendlyError(error));
  } finally {
    if (document.body.contains(button)) setButtonBusy(button, false, "Gegenargument holen");
  }
}

async function evaluateArgument(event) {
  event.preventDefault();
  if (!state.token) return openLogin();
  saveDraft();
  const content = collectContent();
  if (!validateContent(content)) return;

  showMessage("");
  setButtonBusy(dom.checkButton, true, "Wird geprüft ...");
  try {
    const result = await api("/api/de7-argument/evaluate", {
      method: "POST",
      body: {
        topicId: state.topicId,
        stage: state.stage,
        side: state.stage === 2 || state.stage === 4 ? "" : state.side,
        exerciseId: exerciseId(),
        content
      }
    });
    state.feedback = result.evaluation;
    state.progress = result.progress;
    setConnection(true, `Version ${result.revision} gespeichert`);
    renderStageNavigation();
    renderProgress();
    renderFeedback();
    dom.feedbackSection.hidden = false;
    dom.feedbackSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    showMessage(friendlyError(error));
    if (error.status === 401) openLogin();
  } finally {
    setButtonBusy(dom.checkButton, false, "Argument prüfen");
    refreshIcons();
  }
}

function renderFeedback() {
  const feedback = state.feedback;
  if (!feedback) return;
  dom.feedbackTitle.textContent = feedback.passed ? "Das ist schon gelungen" : "Hier kannst du nachbessern";
  dom.feedbackSummary.textContent = feedback.summary;
  dom.nextStep.textContent = feedback.nextStep;
  renderStars(dom.feedbackStars, feedback.stars);
  dom.componentList.replaceChildren(...Object.entries(feedback.components || {}).map(([key, value]) => {
    const row = element("div", `component-row ${value.status}`);
    const iconName = value.status === "good" ? "circle-check" : value.status === "partial" ? "circle-dot-dashed" : "circle-alert";
    row.innerHTML = `<i data-lucide="${iconName}"></i><strong>${escapeHtml(componentLabel(key))}</strong><p>${escapeHtml(value.hint)}</p>`;
    return row;
  }));
  dom.markedArea.hidden = state.stage !== 4 || !(feedback.markings || []).length;
  if (!dom.markedArea.hidden) {
    renderMarkedText(dom.markedText, document.getElementById("text")?.value || loadDraft().text || "", feedback.markings);
  }
  const canContinue = feedback.passed && state.stage < 4 && state.progress.stages[String(state.stage + 1)]?.unlocked;
  dom.nextStageButton.hidden = !canContinue;
  refreshIcons();
}

function renderProgress() {
  const passedCount = Object.values(state.progress.stages).filter((item) => item.passed).length;
  dom.licenceMeter.style.width = `${passedCount * 25}%`;
  dom.progressCopy.textContent = state.progress.licenceReady
    ? "Alle vier Stufen sind bestanden."
    : `${passedCount} von 4 Stufen bestanden.`;
  dom.licenceList.replaceChildren(...state.config.stages.map((stage) => {
    const progress = state.progress.stages[String(stage.id)] || { passed: false, bestStars: 0 };
    const item = element("li", `licence-item ${progress.passed ? "passed" : ""}`);
    item.innerHTML = `<i data-lucide="${progress.passed ? "badge-check" : "circle"}"></i><div><strong>${escapeHtml(stage.title)}</strong><span>${progress.bestStars || 0} von 3 Sternen</span></div>`;
    return item;
  }));
  dom.licenceResult.hidden = !state.progress.licenceReady;
  refreshIcons();
}

function selectStage(stageId) {
  const progress = state.progress.stages[String(stageId)];
  if (!progress?.unlocked) return;
  saveDraft();
  state.stage = stageId;
  state.feedback = null;
  state.counterArgument = "";
  renderAll();
  document.querySelector(".task-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startNewArgument() {
  const key = draftKey();
  const drafts = readDrafts();
  delete drafts[key];
  localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
  delete state.exerciseIds[key];
  state.feedback = null;
  state.counterArgument = "";
  renderTask();
  dom.stageFields.querySelector("textarea")?.focus();
}

function collectContent() {
  const read = (id) => document.getElementById(id)?.value.trim() || "";
  if (state.stage === 1) return { claim: read("claim"), reason: read("reason"), example: read("example") };
  if (state.stage === 2) return { pro: read("pro"), contra: read("contra"), weighing: read("weighing") };
  if (state.stage === 3) return { reply: read("reply"), counterArgument: state.counterArgument };
  return { text: read("text") };
}

function validateContent(content) {
  const counts = Object.values(content).map((value) => value.split(/\s+/).filter(Boolean).length);
  const valid = state.stage === 4 ? counts[0] >= 25 : counts.every((count) => count >= (state.stage === 3 ? 4 : 2));
  if (!valid) {
    showMessage(state.stage === 4 ? "Schreibe mindestens 25 Wörter." : "Fülle alle Bausteine mit vollständigen Gedanken aus.");
    return false;
  }
  return true;
}

function insertWord(word) {
  const field = state.activeField && document.body.contains(state.activeField)
    ? state.activeField
    : dom.stageFields.querySelector("textarea:not(:disabled)");
  if (!field) return;
  const start = field.selectionStart ?? field.value.length;
  const end = field.selectionEnd ?? field.value.length;
  const before = field.value.slice(0, start);
  const after = field.value.slice(end);
  const prefix = before && !/\s$/.test(before) ? " " : "";
  const suffix = after && !/^\s/.test(after) ? " " : "";
  field.value = `${before}${prefix}${word}${suffix}${after}`;
  const position = before.length + prefix.length + word.length + suffix.length;
  field.setSelectionRange(position, position);
  field.focus();
  field.dispatchEvent(new Event("input", { bubbles: true }));
}

function saveDraft() {
  if (!dom.stageFields) return;
  const draft = loadDraft();
  dom.stageFields.querySelectorAll("textarea").forEach((field) => { draft[field.id] = field.value; });
  if (state.counterArgument) draft.counterArgument = state.counterArgument;
  storeDraft(draft);
}

function loadDraft() {
  return readDrafts()[draftKey()] || {};
}

function storeDraft(draft) {
  const drafts = readDrafts();
  drafts[draftKey()] = draft;
  localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
}

function readDrafts() {
  try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}"); }
  catch (_error) { return {}; }
}

function draftKey() {
  const studentKey = state.student ? `${state.student.firstName}|${state.student.lastName}|${state.student.className}` : "guest";
  return `${studentKey}|${state.topicId}|${state.stage}`.toLocaleLowerCase("de");
}

function exerciseId() {
  const key = draftKey();
  if (!state.exerciseIds[key]) {
    state.exerciseIds[key] = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    persistSession();
  }
  return state.exerciseIds[key];
}

function syncTopicState() {
  if (!state.config.topics.some((topic) => topic.id === state.topicId)) state.topicId = state.config.topics[0].id;
  const topic = currentTopic();
  if (!topic.sides.includes(state.side)) state.side = topic.sides[0];
  if (!state.progress.stages[String(state.stage)]?.unlocked) state.stage = 1;
}

function currentTopic() { return state.config.topics.find((topic) => topic.id === state.topicId) || state.config.topics[0]; }
function currentStage() { return state.config.stages.find((stage) => stage.id === state.stage) || state.config.stages[0]; }

function restoreSession() {
  try {
    const saved = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    state.token = saved?.token || "";
    state.student = saved?.student || null;
    state.exerciseIds = saved?.exerciseIds || {};
  } catch (_error) { clearSession(); }
}

function persistSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ token: state.token, student: state.student, exerciseIds: state.exerciseIds }));
}

function clearSession() {
  state.token = "";
  state.student = null;
  state.exerciseIds = {};
  localStorage.removeItem(SESSION_KEY);
}

function openLogin() {
  if (!dom.loginDialog.open) dom.loginDialog.showModal();
  setTimeout(() => dom.firstName.focus(), 50);
}

async function api(route, options = {}, authenticate = true) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch(`${API_BASE}${route}`, {
      method: options.method || "POST",
      headers: {
        ...(options.body ? { "content-type": "application/json" } : {}),
        ...(authenticate && state.token ? { authorization: `Bearer ${state.token}` } : {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal
    });
    let data = {};
    try { data = await response.json(); } catch (_error) { /* non-JSON error */ }
    if (!response.ok) {
      const error = new Error(data.error || `HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

function renderStars(container, stars) {
  container.innerHTML = "";
  container.setAttribute("aria-label", `${stars} von 3 Sternen`);
  for (let index = 1; index <= 3; index += 1) {
    const icon = document.createElement("i");
    icon.dataset.lucide = "star";
    if (index <= stars) icon.classList.add("filled");
    container.append(icon);
  }
}

function renderMarkedText(container, text, markings) {
  const ranges = markings.map((mark) => ({ ...mark, start: text.indexOf(mark.quote) }))
    .filter((mark) => mark.start >= 0)
    .sort((a, b) => a.start - b.start);
  container.replaceChildren();
  let cursor = 0;
  for (const range of ranges) {
    if (range.start < cursor) continue;
    container.append(document.createTextNode(text.slice(cursor, range.start)));
    const mark = document.createElement("mark");
    mark.className = "mark";
    mark.dataset.label = range.label;
    mark.title = range.label;
    mark.textContent = range.quote;
    container.append(mark);
    cursor = range.start + range.quote.length;
  }
  container.append(document.createTextNode(text.slice(cursor)));
}

function updateWordCount(textarea) {
  const count = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
  const label = document.getElementById(`${textarea.id}-count`);
  if (label) label.textContent = `${count} ${count === 1 ? "Wort" : "Wörter"}`;
}

function setConnection(online, text) {
  dom.syncState.classList.toggle("online", online);
  dom.syncState.classList.toggle("offline", !online);
  dom.syncState.lastChild.textContent = ` ${text}`;
}

function setButtonBusy(button, busy, label) {
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

function showMessage(message) { dom.formMessage.textContent = message || ""; }

function friendlyError(error) {
  if (error?.name === "AbortError") return "Der Dienst braucht gerade länger. Versuche es gleich noch einmal.";
  const message = String(error?.message || "");
  if (/fetch|network/i.test(message)) return "Die Verbindung zur Auswertung ist gerade nicht erreichbar.";
  return message || "Das hat noch nicht geklappt. Versuche es erneut.";
}

function componentLabel(key) {
  return ({
    claim: "Behauptung", reason: "Begründung", example: "Beispiel oder Vergleich",
    pro: "Pro-Argument", contra: "Kontra-Argument", weighing: "Abwägung",
    response: "Antwort auf den Einwand", objective: "Sachlicher Ton"
  })[key] || key;
}

function emptyProgress() {
  return {
    stages: {
      "1": { unlocked: true, passed: false, bestStars: 0, attempts: 0 },
      "2": { unlocked: false, passed: false, bestStars: 0, attempts: 0 },
      "3": { unlocked: false, passed: false, bestStars: 0, attempts: 0 },
      "4": { unlocked: false, passed: false, bestStars: 0, attempts: 0 }
    },
    totalAttempts: 0,
    licenceReady: false
  };
}

function element(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== "") node.textContent = text;
  return node;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
}
