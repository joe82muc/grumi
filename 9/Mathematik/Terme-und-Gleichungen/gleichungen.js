(() => {
  const apiUrl =
    window.GRUMI_MATH_KI_API_URL ||
    (location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "http://localhost:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");
  const form = document.querySelector("#check-form");
  const equationInput = document.querySelector("#equation");
  const equationDisplay = document.querySelector("#equation-display");
  const imageInput = document.querySelector("#image");
  const feedback = document.querySelector("#feedback");
  const canvas = document.querySelector("#preview-canvas");
  const emptyPreview = document.querySelector("#empty-preview");
  const statusPill = document.querySelector("#server-status");
  const nextButton = document.querySelector("#sample-button");
  const prevButton = document.querySelector("#prev-equation");
  const previewPanel = document.querySelector(".preview-panel");
  const equationGrid = document.querySelector("#equation-grid");
  const levelSwitch = document.querySelector("#level-switch");
  const levelTitle = document.querySelector("#level-title");
  const levelDescription = document.querySelector("#level-description");
  const levelProgress = document.querySelector("#level-progress");
  const ctx = canvas.getContext("2d");
  const levels = [
    {
      name: "Stufe 1",
      description: "Einfache Gleichungen ohne Klammern und ohne negative Zahlen.",
      equations: ["3x + 15 = 36", "4x + 8 = 28", "5x + 12 = 42"],
    },
    {
      name: "Stufe 2",
      description: "Gleichungen mit negativen Zahlen.",
      equations: [
        "3x + 5 = -7",
        "-3x - (-5) = -7",
        "2x + (-6) = -18",
        "-4x + 8 = -12",
        "5x - 9 = -24",
        "-5x - (-10) = 25",
        "-2x + 6 = -18",
      ],
    },
    {
      name: "Stufe 3",
      description: "Gleichungen mit Klammern.",
      equations: [
        "3(x + 4) = 24",
        "2(x + 7) = 30",
        "5(x - 3) = 25",
        "2(-3x + 2) = -20",
        "4(x + 2) + 6 = 34",
        "-(4 + 3x) = -19",
        "3(x - 5) + 9 = 24",
        "5x - (2x + 6) = 9",
        "6 - (2x - 8) = 4",
        "3(-2x + 5) = -9",
        "-(6 - 2x) = 8",
      ],
    },
    {
      name: "Stufe 4",
      description: "Gleichungen mit Dezimalzahlen, teilweise mit negativen Zahlen.",
      equations: [
        "2,5x + 1,5 = 11,5",
        "-4x + 2,5 = -13,5",
        "(-5x) + 1,5 = -18,5",
        "0,5x + (-8) = -3",
        "-3,5x - 1,5 = -15,5",
      ],
    },
    {
      name: "Stufe 5",
      description: "Gemischte und längere Gleichungen, auch mit negativen Zahlen und Zusammenfassen.",
      equations: [
        "3x + 5 + 2x = 30",
        "4(x + 2) + 3x = 36",
        "-2x + 7 - x + (-8) = -16",
        "3(x - 2) + 2(x + 4) = 22",
        "2,5x + 3 + (-1,5x) = 11",
        "-4x + 2(x - 3) + 10 = -8",
      ],
    },
    {
      name: "Stufe 6",
      description: "Komplexe Klammergleichungen: Minusklammern, Faktoren und Dezimalzahlen.",
      equations: [
        "-5(6x + 12) + (20 + 34x) = 0",
        "-(5 - 9x) + 4(7 - 6x) = -22",
        "3(-5x + 1) + 7(3 - 2x) = -63",
        "5,6 + 3(2,1x - 1,3) + (4 - 5x) = 10,9",
        "7 - (4x - 5,4) - 6(1,1x - 9) = 24",
        "2,5x - (3,5x - 8) + 5(2,4x - 3) = 37",
        "-3(-1,2x + 2,1) - (0,6x + 2,7) - 5 = 4",
        "8 + (3x - 5)(-4) = -44",
        "7x - (-4x + 3) + 4(2 - 2x) = 17",
        "4(x + 2) - 3(2x - 5) + 2(1 - x) = -15",
      ],
    },
    {
      name: "Stufe 7",
      description: "Gleichungen mit Bruechen, Dezimalzahlen, Klammern und gemeinsamem Nenner.",
      equations: [
        "5 - (12x/25 + 2) = -3/50",
        "42 - 4x/3 = 41 - 9x/7",
        "(3/5)(x - 1) = (2/3)x + 0,2",
        "-(x - 3/20) = 3(-2x + 3/5)",
        "x/2 - 3(5 + x) = (1/2)(42 - 3x)",
        "(8 - 4x)(3/4) = -(3/2)x",
      ],
    },
  ];
  const solved = levels.map(() => new Set());
  let currentImage = null;
  let currentLevelIndex = 0;
  let currentEquationIndex = 0;

  function currentLevel() {
    return levels[currentLevelIndex];
  }

  function setFeedback(kind, html) {
    feedback.className = `feedback-box ${kind}${html ? "" : " empty"}`;
    feedback.innerHTML = html;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function formatEquation(value) {
    const text = String(value ?? "");
    const fractionPattern = /(\d+(?:,\d+)?[a-zA-Z]?|[a-zA-Z]\d*|\d+(?:,\d+)?\s*[·*]\s*[a-zA-Z])\s*\/\s*(\d+(?:,\d+)?)/g;
    let html = "";
    let lastIndex = 0;
    let match;

    while ((match = fractionPattern.exec(text)) !== null) {
      const fractionEnd = match.index + match[0].length;
      const hasOnlyFractionParentheses = text[match.index - 1] === "(" && text[fractionEnd] === ")";
      const textBeforeFraction = text.slice(lastIndex, hasOnlyFractionParentheses ? match.index - 1 : match.index);
      html += escapeHtml(textBeforeFraction);
      html += `<span class="math-frac"><span class="math-frac-top">${escapeHtml(match[1])}</span><span class="math-frac-bottom">${escapeHtml(match[2])}</span></span>`;
      lastIndex = hasOnlyFractionParentheses ? fractionEnd + 1 : fractionEnd;
    }

    return html + escapeHtml(text.slice(lastIndex));
  }

  function splitFeedbackText(value) {
    return String(value ?? "")
      .replace(/\s*\n+\s*/g, "\n")
      .split(/\n|(?=\b(?:Schritt|Zeile)\s*\d+\s*:)/i)
      .map((line) => line.trim())
      .filter(Boolean);
  }

  function renderLineList(lines) {
    if (lines.length === 0) return "";

    return `
      <ol class="solution-lines">
        ${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      </ol>
    `;
  }

  function updateProgress() {
    const level = currentLevel();
    const done = solved[currentLevelIndex].size;
    levelTitle.textContent = level.name;
    levelDescription.textContent = level.description;
    levelProgress.textContent = `${done} / ${level.equations.length} richtig`;
    statusPill.textContent = level.name;
  }

  function renderLevelButtons() {
    levelSwitch.innerHTML = levels
      .map((level, index) => {
        const done = solved[index].size;
        const isActive = index === currentLevelIndex;
        return `
          <button type="button" class="${isActive ? "active" : ""}" data-level-index="${index}">
            <span>${escapeHtml(level.name)}</span>
            <strong>${done} / ${level.equations.length}</strong>
          </button>
        `;
      })
      .join("");

  }

  function renderEquationButtons() {
    const level = currentLevel();
    equationGrid.innerHTML = level.equations
      .map((equation, index) => {
        const isActive = index === currentEquationIndex;
        const isSolved = solved[currentLevelIndex].has(equation);
        return `
          <button type="button" class="${isActive ? "active" : ""} ${isSolved ? "solved" : ""}" data-equation-index="${index}">
            <span class="equation-text">${formatEquation(equation)}</span>
            <strong>${isSolved ? "richtig" : `${index + 1}`}</strong>
          </button>
        `;
      })
      .join("");

    equationGrid.querySelectorAll("[data-equation-index]").forEach((button) => {
      button.addEventListener("click", () => {
        setEquation(Number(button.dataset.equationIndex));
      });
    });
  }

  function setEquation(index) {
    const level = currentLevel();
    currentEquationIndex = (index + level.equations.length) % level.equations.length;
    const equation = level.equations[currentEquationIndex];
    equationInput.value = equation;
    equationDisplay.innerHTML = `<span class="equation-line">${formatEquation(equation)}</span>`;
    fitEquationDisplay();
    previewPanel.classList.remove("preview-ok", "preview-no");
    statusPill.classList.remove("ok", "error");
    updateProgress();
    renderLevelButtons();
    renderEquationButtons();
  }

  function fitEquationDisplay() {
    requestAnimationFrame(() => {
      const maxSize = 48;
      const minSize = 10;
      const equationLine = equationDisplay.querySelector(".equation-line") || equationDisplay;
      equationDisplay.style.fontSize = `${maxSize}px`;

      while (
        equationLine.scrollWidth > equationDisplay.clientWidth - 44 &&
        parseFloat(equationDisplay.style.fontSize) > minSize
      ) {
        const nextSize = parseFloat(equationDisplay.style.fontSize) - 1;
        equationDisplay.style.fontSize = `${nextSize}px`;
      }
    });
  }

  function setLevel(index, equationIndex = 0) {
    currentLevelIndex = (index + levels.length) % levels.length;
    currentEquationIndex = equationIndex;
    setEquation(equationIndex);
    setFeedback("", "");
  }

  function stepEquation(direction) {
    const level = currentLevel();
    const nextEquationIndex = currentEquationIndex + direction;

    if (nextEquationIndex >= 0 && nextEquationIndex < level.equations.length) {
      setEquation(nextEquationIndex);
      return;
    }

    const nextLevelIndex =
      (currentLevelIndex + direction + levels.length) % levels.length;
    const targetLevel = levels[nextLevelIndex];
    const targetEquationIndex =
      direction > 0 ? 0 : targetLevel.equations.length - 1;
    setLevel(nextLevelIndex, targetEquationIndex);
  }

  function unlockNextLevelIfReady() {
    const level = currentLevel();
    const isComplete = solved[currentLevelIndex].size === level.equations.length;
    if (!isComplete || currentLevelIndex >= levels.length - 1) return false;

    const nextLevelIndex = currentLevelIndex + 1;
    const nextLevel = levels[nextLevelIndex];
    setLevel(nextLevelIndex);
    setFeedback("ok", `
      <h3>${escapeHtml(nextLevel.name)} freigeschaltet</h3>
      <p class="feedback-summary">Alle Aufgaben der vorherigen Stufe waren richtig. Jetzt: ${escapeHtml(nextLevel.description)}</p>
    `);
    return true;
  }

  function drawPreview() {
    if (!currentImage) {
      canvas.style.display = "none";
      emptyPreview.style.display = "block";
      return;
    }

    const maxWidth = 820;
    const scale = Math.min(1, maxWidth / currentImage.naturalWidth);
    canvas.width = Math.round(currentImage.naturalWidth * scale);
    canvas.height = Math.round(currentImage.naturalHeight * scale);
    canvas.style.display = "block";
    emptyPreview.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
  }

  function loadImage(file) {
    previewPanel.classList.remove("preview-ok", "preview-no");
    if (!file) {
      currentImage = null;
      drawPreview();
      return;
    }

    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      currentImage = img;
      drawPreview();
    };
    img.src = URL.createObjectURL(file);
  }

  function renderFeedback(data) {
    drawPreview();

    const kind = data.correct ? "ok" : "no";
    const title = data.correct ? "Richtig gelöst" : "Noch nicht richtig";
    const analysisLines = splitFeedbackText(
      data.analysis || "Kein Fehler im Rechenweg gefunden.",
    );
    const suggestionTitle = data.correct ? "Fertig" : "Nächster Schritt";

    previewPanel.classList.toggle("preview-ok", data.correct);
    previewPanel.classList.toggle("preview-no", !data.correct);
    statusPill.classList.toggle("ok", data.correct);
    statusPill.classList.toggle("error", !data.correct);
    statusPill.textContent = data.correct ? "Richtig" : "Fehler gefunden";
    setFeedback(kind, `
      <h3>${title}</h3>
      <p class="feedback-summary">${escapeHtml(data.summary)}</p>
      <div class="feedback-section">
        <span class="feedback-label">${data.correct ? "Lösung:" : "Fehlerbeschreibung:"}</span>
        ${renderLineList(analysisLines)}
      </div>
      <div class="feedback-section">
        <span class="feedback-label">${suggestionTitle}:</span>
        <p>${escapeHtml(data.suggestion)}</p>
      </div>
    `);

    if (data.correct) {
      solved[currentLevelIndex].add(equationInput.value);
      updateProgress();
      renderLevelButtons();
      renderEquationButtons();
      unlockNextLevelIfReady();
    }
  }

  imageInput.addEventListener("change", () => loadImage(imageInput.files[0]));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = imageInput.files[0];
    if (!file) {
      setFeedback("no", "<h3>Foto fehlt</h3><p>Wähle zuerst ein Foto vom Rechenweg aus.</p>");
      return;
    }

    const formData = new FormData();
    formData.append("equation", equationInput.value.trim() || currentLevel().equations[0]);
    formData.append("image", file);

    setFeedback(
      "muted",
      "<h3>Prüfe...</h3><p>Da dies eine Testversion ist, kann es beim ersten Mal etwas länger dauern, bis der Server im Hintergrund hochfährt.</p>",
    );
    previewPanel.classList.remove("preview-ok", "preview-no");
    statusPill.classList.remove("ok", "error");
    statusPill.textContent = "Prüft";
    let failureTitle = "Prüfung nicht abgeschlossen";
    let failureStatus = "Prüfung fehlgeschlagen";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        failureTitle = response.status === 502
          ? "Antwort nicht lesbar"
          : "Prüfung nicht abgeschlossen";
        failureStatus = response.status === 502
          ? "Antwort nicht lesbar"
          : "Prüfung fehlgeschlagen";
        throw new Error(payload?.feedbackData?.summary || payload?.feedback || "Die Prüfung ist fehlgeschlagen.");
      }
      renderFeedback(payload.feedbackData || JSON.parse(payload.feedback));
    } catch (error) {
      if (error instanceof TypeError) {
        failureTitle = "Prüfung nicht erreichbar";
        failureStatus = "Nicht erreichbar";
      }

      previewPanel.classList.remove("preview-ok", "preview-no");
      statusPill.classList.remove("ok");
      statusPill.classList.add("error");
      statusPill.textContent = failureStatus;
      setFeedback("muted", `
        <h3>${escapeHtml(failureTitle)}</h3>
        <p>${escapeHtml(error.message)}</p>
      `);
    }
  });

  nextButton.addEventListener("click", () => stepEquation(1));
  prevButton.addEventListener("click", () => stepEquation(-1));
  levelSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level-index]");
    if (!button) return;
    setLevel(Number(button.dataset.levelIndex));
  });

  setEquation(0);
  drawPreview();
  window.addEventListener("resize", fitEquationDisplay);
  document.fonts?.ready?.then(fitEquationDisplay);
})();
