(function () {
  var STORAGE_KEY = "grumi-quali-rechner-v1";
  var PASS_LIMIT = 3.0;

  /* Die ids bleiben bewusst ohne Umlaute: sie sind Speicherschluessel
     und stecken in bereits gespeicherten Staenden im localStorage. */
  var fixedCore = [
    { id: "deutsch", name: "Deutsch", short: "D", kind: "coreDouble", note: "Pflichtfach" },
    { id: "daz", name: "Deutsch als Zweitsprache", short: "DaZ", kind: "languageOral", note: "statt Deutsch" }
  ];

  var math = { id: "mathe", name: "Mathematik", short: "M", kind: "coreDouble", note: "Pflichtfach" };

  var groupA = [
    { id: "englisch", name: "Englisch", short: "E", kind: "languageOral" },
    { id: "muttersprache", name: "Muttersprache", short: "MS", kind: "coreDouble", note: "statt Englisch" },
    { id: "nt", name: "Natur und Technik", short: "NT", kind: "coreDouble" },
    { id: "gpg", name: "Geschichte/Politik/Geographie", short: "GPG", kind: "coreDouble" }
  ];

  var extendedGroupA = groupA.concat([
    { id: "projekt", name: "Projektprüfung", short: "PP", kind: "projectExternal", note: "ersetzt ein Fach" }
  ]);

  var otherSubjects = [
    { id: "religion", name: "Religionslehre", short: "R", kind: "simple" },
    { id: "ethik", name: "Ethik", short: "Eth", kind: "simple" },
    { id: "islam", name: "Islamischer Unterricht", short: "IU", kind: "simple" },
    { id: "sport", name: "Sport", short: "Sp", kind: "simple" },
    { id: "musik", name: "Musik", short: "Mu", kind: "simple" },
    { id: "kunst", name: "Kunst", short: "Ku", kind: "simple" },
    { id: "informatik", name: "Informatik", short: "Inf", kind: "simple" },
    { id: "idg", name: "Informatik und digitales Gestalten", short: "IdG", kind: "simple" },
    { id: "buchfuehrung", name: "Buchführung", short: "Bf", kind: "simple" }
  ];

  var bowSubjects = [
    { id: "technik", name: "Technik" },
    { id: "wirtschaft", name: "Wirtschaft und Kommunikation" },
    { id: "soziales", name: "Ernährung und Soziales" }
  ];

  var state = loadState() || defaultState("internal");
  normalizeState();

  var els = {
    modeButtons: document.querySelectorAll("[data-mode]"),
    modeHelp: document.getElementById("modeHelp"),
    subjectGroups: document.getElementById("subjectGroups"),
    gradeInputs: document.getElementById("gradeInputs"),
    resultBox: document.getElementById("resultBox"),
    formulaBox: document.getElementById("formulaBox"),
    contributionBox: document.getElementById("contributionBox"),
    resetBtn: document.getElementById("resetBtn")
  };

  els.modeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      state.mode = button.dataset.mode;
      render();
      saveState();
    });
  });

  els.resetBtn.addEventListener("click", function () {
    state = defaultState(state.mode);
    render();
    saveState();
  });

  function defaultState(mode) {
    return {
      mode: mode,
      language: "deutsch",
      groupAInternal: "englisch",
      groupAExtended: ["englisch", "nt"],
      other: "religion",
      bow: "technik",
      grades: {}
    };
  }

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      return null;
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      return;
    }
  }

  function subjectById(id) {
    return fixedCore.concat([math], extendedGroupA, otherSubjects).filter(function (subject) {
      return subject.id === id;
    })[0];
  }

  function setModeButtons() {
    els.modeButtons.forEach(function (button) {
      var active = button.dataset.mode === state.mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function card(subject, group, selected, extra) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "subject-card" + (selected ? " is-selected" : "");
    button.dataset.group = group;
    button.dataset.id = subject.id;
    button.setAttribute("aria-pressed", selected ? "true" : "false");
    var note = extra || subject.note || "";
    button.innerHTML = "<strong>" + escapeHtml(subject.name) + "</strong>" +
      (note ? "<span>" + escapeHtml(note) + "</span>" : "");
    return button;
  }

  function renderSubjectGroup(title, help, subjects, group, selectedIds, limitText) {
    var section = document.createElement("section");
    section.className = "subject-group";
    section.innerHTML = "<div><h3>" + escapeHtml(title) + "</h3>" +
      (help ? "<p>" + escapeHtml(help) + "</p>" : "") + "</div>";
    var grid = document.createElement("div");
    grid.className = "subject-card-grid";
    subjects.forEach(function (subject) {
      var selected = selectedIds.indexOf(subject.id) !== -1;
      grid.appendChild(card(subject, group, selected, limitText && selected ? limitText : ""));
    });
    section.appendChild(grid);
    return section;
  }

  function renderBowGroup() {
    var section = document.createElement("section");
    section.className = "subject-group";
    section.innerHTML = "<div><h3>Berufsorientierendes Wahlpflichtfach</h3>" +
      "<p>" + escapeHtml(schoolGradeLabel()) + " in WiB und im Wahlpflichtfach zählen einfach.</p></div>";
    var grid = document.createElement("div");
    grid.className = "subject-card-grid";
    bowSubjects.forEach(function (subject) {
      grid.appendChild(card(subject, "bow", state.bow === subject.id, ""));
    });
    section.appendChild(grid);
    return section;
  }

  function renderSubjects() {
    els.subjectGroups.innerHTML = "";
    els.subjectGroups.appendChild(renderSubjectGroup(
      "Deutsch-Fach",
      "Deutsch als Zweitsprache nur, wenn die Voraussetzungen erfüllt sind.",
      fixedCore, "language", [state.language]
    ));

    if (state.mode === "internal") {
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Ein Fach aus Englisch, NT oder GPG", "",
        groupA, "groupAInternal", [state.groupAInternal]
      ));
      els.subjectGroups.appendChild(renderBowGroup());
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Weiteres Prüfungsfach", "",
        otherSubjects, "other", [state.other]
      ));
    } else if (state.mode === "mclass") {
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Zwei Fächer aus Englisch, NT, GPG oder Projekt",
        "Eine Projektprüfung kann Englisch, NT oder GPG ersetzen.",
        extendedGroupA, "groupAExtended", state.groupAExtended, "gewählt"
      ));
      if (state.groupAExtended.indexOf("projekt") !== -1) {
        els.subjectGroups.appendChild(renderBowGroup());
      }
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Weiteres Prüfungsfach", "",
        otherSubjects, "other", [state.other]
      ));
    } else {
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Zwei Fächer aus Englisch, NT, GPG oder Projekt",
        "Eine Projektprüfung kann eines der Fächer ersetzen.",
        extendedGroupA, "groupAExtended", state.groupAExtended, "gewählt"
      ));
      els.subjectGroups.appendChild(renderSubjectGroup(
        "Weiteres Prüfungsfach", "",
        otherSubjects, "other", [state.other]
      ));
    }

    els.subjectGroups.querySelectorAll(".subject-card").forEach(function (button) {
      button.addEventListener("click", function () {
        chooseSubject(button.dataset.group, button.dataset.id);
      });
    });
  }

  function chooseSubject(group, id) {
    if (group === "language") {
      state.language = id;
    }
    if (group === "groupAInternal") {
      state.groupAInternal = id;
    }
    if (group === "groupAExtended") {
      var current = state.groupAExtended.slice();
      var exists = current.indexOf(id) !== -1;
      if (exists) {
        current = current.length > 2 ? current.filter(function (item) { return item !== id; }) : current;
      } else if (current.length < 2) {
        current.push(id);
      } else {
        current.shift();
        current.push(id);
      }
      if (id === "muttersprache" && current.indexOf("englisch") !== -1) {
        current = current.filter(function (item) { return item !== "englisch"; });
      }
      if (id === "englisch" && current.indexOf("muttersprache") !== -1) {
        current = current.filter(function (item) { return item !== "muttersprache"; });
      }
      state.groupAExtended = current;
      normalizeState();
    }
    if (group === "other") {
      state.other = id;
    }
    if (group === "bow") {
      state.bow = id;
    }
    render();
    saveState();
  }

  function renderHelp() {
    if (state.mode === "internal") {
      els.modeHelp.innerHTML = "<strong>Regelklasse:</strong> Deutsch, Mathematik, ein Fach aus Englisch/NT/GPG, " +
        "Projektprüfung und ein weiteres Fach &ndash; Teiler 18.";
    } else if (state.mode === "mclass") {
      els.modeHelp.innerHTML = "<strong>9M mit Zwischenzeugnisnoten:</strong> Deutsch, Mathematik, zwei Bereiche aus " +
        "Englisch/NT/GPG/Projekt und ein weiteres Fach &ndash; Teiler 18. Statt Jahresfortgangsnoten die ZZ-Noten eintragen.";
    } else {
      els.modeHelp.innerHTML = "<strong>Ohne Jahresfortgangsnoten:</strong> Es zählen nur die Prüfungsnoten " +
        "&ndash; Teiler 9.";
    }
  }

  function normalizeState() {
    if (!Array.isArray(state.groupAExtended)) {
      state.groupAExtended = Array.isArray(state.groupAExternal) ? state.groupAExternal : ["englisch", "nt"];
    }
    state.groupAExtended = state.groupAExtended.filter(function (id, index, list) {
      return subjectById(id) && list.indexOf(id) === index;
    });
    if (state.groupAExtended.indexOf("englisch") !== -1 && state.groupAExtended.indexOf("muttersprache") !== -1) {
      state.groupAExtended = state.groupAExtended.filter(function (id) { return id !== "muttersprache"; });
    }
    ["englisch", "nt", "gpg", "projekt"].forEach(function (fallback) {
      if (state.groupAExtended.length < 2 && state.groupAExtended.indexOf(fallback) === -1) {
        state.groupAExtended.push(fallback);
      }
    });
    state.groupAExtended = state.groupAExtended.slice(0, 2);
  }

  function activeSubjects() {
    var language = subjectById(state.language);
    var selectedOther = subjectById(state.other);
    if (state.mode === "internal") {
      return [
        language,
        math,
        subjectById(state.groupAInternal),
        { id: "projectInternal", name: "Projektprüfung", short: "PP", kind: "projectInternal" },
        selectedOther
      ];
    }
    return [language, math].concat(state.groupAExtended.map(subjectById), [selectedOther]);
  }

  function fieldId(subjectId, suffix) {
    return subjectId + "__" + suffix;
  }

  function fieldDef(subject, suffix, label, weight) {
    return { id: fieldId(subject.id, suffix), subject: subject.name, label: label, weight: weight };
  }

  function schoolGradeLabel() {
    return state.mode === "mclass" ? "ZZ-Note" : "Jahresfortgangsnote";
  }

  function fieldsForSubject(subject) {
    if (state.mode === "internal" || state.mode === "mclass") {
      if (subject.kind === "languageOral") {
        return [
          fieldDef(subject, "jfn", schoolGradeLabel(), 2),
          fieldDef(subject, "schriftlich", "Schriftliche Prüfung", 1),
          fieldDef(subject, "muendlich", "Mündliche Prüfung", 1)
        ];
      }
      if (subject.kind === "projectInternal" || subject.kind === "projectExternal") {
        return [
          fieldDef(subject, "wib", schoolGradeLabel() + " WiB", 1),
          fieldDef(subject, "bow", schoolGradeLabel() + " " + bowName(), 1),
          fieldDef(subject, "projekt", "Gesamtnote Projektprüfung", 2)
        ];
      }
      if (subject.kind === "simple") {
        return [
          fieldDef(subject, "jfn", schoolGradeLabel(), 1),
          fieldDef(subject, "pruefung", "Prüfungsnote", 1)
        ];
      }
      return [
        fieldDef(subject, "jfn", subject.id === "muttersprache" ? "Leistungstest / " + schoolGradeLabel() : schoolGradeLabel(), 2),
        fieldDef(subject, "pruefung", "Prüfungsnote", 2)
      ];
    }

    if (subject.kind === "languageOral") {
      return [
        fieldDef(subject, "schriftlich", "Schriftliche Prüfung", 1),
        fieldDef(subject, "muendlich", "Mündliche Prüfung", 1)
      ];
    }
    if (subject.kind === "simple") {
      return [fieldDef(subject, "pruefung", "Prüfungsnote", 1)];
    }
    return [fieldDef(subject, "pruefung", "Prüfungsnote", 2)];
  }

  function bowName() {
    var selected = bowSubjects.filter(function (subject) { return subject.id === state.bow; })[0];
    return selected ? selected.name : "Wahlpflichtfach";
  }

  function renderInputs() {
    els.gradeInputs.innerHTML = "";
    activeSubjects().forEach(function (subject) {
      var section = document.createElement("section");
      section.className = "input-section";
      section.innerHTML = "<h3>" + escapeHtml(subject.name) + "</h3>";
      var grid = document.createElement("div");
      grid.className = "field-grid";
      fieldsForSubject(subject).forEach(function (field) {
        var wrapper = document.createElement("div");
        wrapper.className = "grade-field";
        /* Der Faktor steht als kleine Marke am Label statt als eigene
           Zeile unter dem Feld - das spart eine Zeile pro Note. */
        wrapper.innerHTML =
          "<label for=\"" + field.id + "\">" + escapeHtml(field.label) +
          (field.weight === 2 ? "<span class=\"weight\" title=\"zählt doppelt\">&times;2</span>" : "") +
          "</label>" +
          "<input id=\"" + field.id + "\" inputmode=\"decimal\" type=\"number\" min=\"1\" max=\"6\" step=\"0.1\" " +
          "placeholder=\"1&ndash;6\" value=\"" + escapeHtml(state.grades[field.id] || "") + "\">";
        grid.appendChild(wrapper);
      });
      section.appendChild(grid);
      els.gradeInputs.appendChild(section);
    });

    els.gradeInputs.querySelectorAll("input").forEach(function (input) {
      input.addEventListener("input", function () {
        state.grades[input.id] = input.value;
        markField(input);
        renderResult();
        saveState();
      });
      markField(input);
    });
  }

  function markField(input) {
    input.classList.toggle("is-filled", parseGrade(input.value) !== null);
  }

  function getContributions() {
    var rows = [];
    activeSubjects().forEach(function (subject) {
      fieldsForSubject(subject).forEach(function (field) {
        var parsed = parseGrade(state.grades[field.id]);
        rows.push({
          subject: subject.name,
          label: field.label,
          weight: field.weight,
          value: parsed,
          product: parsed === null ? null : parsed * field.weight
        });
      });
    });
    return rows;
  }

  function parseGrade(value) {
    if (value === undefined || value === null || value === "") {
      return null;
    }
    var number = Number(String(value).replace(",", "."));
    if (!isFinite(number) || number < 1 || number > 6) {
      return null;
    }
    return number;
  }

  function truncateOneDecimal(value) {
    return Math.floor(value * 10) / 10;
  }

  function formatNumber(value, digits) {
    if (value === null || value === undefined || !isFinite(value)) {
      return "&ndash;";
    }
    return value.toFixed(digits).replace(".", ",");
  }

  function renderResult() {
    var rows = getContributions();
    var divider = state.mode === "external" ? 9 : 18;
    var filled = rows.filter(function (row) { return row.product !== null; }).length;
    var complete = filled === rows.length;
    var sum = rows.reduce(function (total, row) { return total + (row.product || 0); }, 0);
    var average = complete ? sum / divider : null;
    var official = complete ? truncateOneDecimal(average) : null;
    var passed = complete && official <= PASS_LIMIT;
    var open = rows.length - filled;

    var statusClass = !complete ? "" : passed ? " ok" : " fail";
    var statusTitle = !complete
      ? (open === 1 ? "Noch eine Note offen" : "Noch " + open + " Noten offen")
      : passed ? "Quali rechnerisch bestanden" : "Quali rechnerisch nicht bestanden";
    var statusText = !complete
      ? "Sobald alle Noten eingetragen sind, erscheint die gewertete Gesamtnote."
      : passed ? "Die gewertete Note liegt bei 3,0 oder besser." : "Die gewertete Note liegt schlechter als 3,0.";

    els.resultBox.innerHTML =
      "<div class=\"status-card" + statusClass + "\"><h3>" + statusTitle + "</h3><p>" + statusText + "</p></div>" +
      "<div class=\"metric-grid\">" +
        "<div class=\"metric\"><span>Notensumme</span><strong>" + (complete ? formatNumber(sum, 1) : "&ndash;") + "</strong></div>" +
        "<div class=\"metric\"><span>Teiler</span><strong>" + divider + "</strong></div>" +
        "<div class=\"metric\"><span>Durchschnitt</span><strong>" + formatNumber(average, 2) + "</strong></div>" +
        "<div class=\"metric is-official\"><span>Amtlich gewertet</span><strong>" + formatNumber(official, 1) + "</strong></div>" +
      "</div>";

    var formula = state.mode === "external"
      ? "Summe der gewichteten Prüfungsnoten &divide; 9"
      : "Summe der gewichteten Schul- und Prüfungsnoten &divide; 18";
    els.formulaBox.innerHTML =
      "<div class=\"formula-line\">" + formula + "</div>" +
      "<p class=\"formula-note\">Die zweite Stelle nach dem Komma wird abgeschnitten, nicht gerundet.</p>";

    renderContributionTable(rows, sum, divider, complete, filled);
  }

  /* Der Rechenweg bleibt zugeklappt, solange nichts eingetragen ist -
     eine Tabelle voller Striche hilft niemandem. */
  function renderContributionTable(rows, sum, divider, complete, filled) {
    var body = rows.map(function (row) {
      return "<tr" + (row.product === null ? " class=\"is-open\"" : "") + ">" +
        "<td><strong>" + escapeHtml(row.subject) + "</strong><br>" + escapeHtml(row.label) + "</td>" +
        "<td>" + formatNumber(row.value, 1) + "</td>" +
        "<td>" + row.weight + "</td>" +
        "<td>" + formatNumber(row.product, 1) + "</td></tr>";
    }).join("");
    var total = complete
      ? "<tr class=\"is-total\"><td><strong>Gesamt</strong></td><td></td><td>&divide;" + divider + "</td>" +
        "<td><strong>" + formatNumber(sum, 1) + "</strong></td></tr>"
      : "";

    els.contributionBox.innerHTML =
      "<details class=\"calc-details\"" + (filled > 0 ? " open" : "") + ">" +
        "<summary>Rechenweg<span>" + filled + "/" + rows.length + "</span></summary>" +
        "<table class=\"contribution-table\">" +
          "<thead><tr><th>Note</th><th>Wert</th><th>Faktor</th><th>Beitrag</th></tr></thead>" +
          "<tbody>" + body + total + "</tbody>" +
        "</table>" +
      "</details>";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    setModeButtons();
    renderHelp();
    renderSubjects();
    renderInputs();
    renderResult();
  }

  render();
})();
