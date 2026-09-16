(function () {
  var STORAGE_KEY = "grumi-quali-rechner-v1";
  var PASS_LIMIT = 3.0;

  var fixedCore = [
    { id: "deutsch", name: "Deutsch", short: "D", kind: "coreDouble", note: "Pflichtfach" },
    { id: "daz", name: "Deutsch als Zweitsprache", short: "DaZ", kind: "languageOral", note: "statt Deutsch, wenn zutreffend" }
  ];

  var math = { id: "mathe", name: "Mathematik", short: "M", kind: "coreDouble", note: "Pflichtfach" };

  var groupA = [
    { id: "englisch", name: "Englisch", short: "E", kind: "languageOral", note: "schriftlich und muendlich" },
    { id: "muttersprache", name: "Muttersprache", short: "MS", kind: "coreDouble", note: "statt Englisch, wenn genehmigt" },
    { id: "nt", name: "Natur und Technik", short: "NT", kind: "coreDouble", note: "schriftliche Pruefung" },
    { id: "gpg", name: "Geschichte/Politik/Geographie", short: "GPG", kind: "coreDouble", note: "schriftliche Pruefung" }
  ];

  var extendedGroupA = groupA.concat([
    { id: "projekt", name: "Projektpruefung", short: "PP", kind: "projectExternal", note: "kann ein Fach ersetzen" }
  ]);

  var otherSubjects = [
    { id: "religion", name: "Religionslehre", short: "R", kind: "simple", note: "einfach gewichtet" },
    { id: "ethik", name: "Ethik", short: "Eth", kind: "simple", note: "einfach gewichtet" },
    { id: "islam", name: "Islamischer Unterricht", short: "IU", kind: "simple", note: "einfach gewichtet" },
    { id: "sport", name: "Sport", short: "Sp", kind: "simple", note: "Pruefungs-Gesamtnote" },
    { id: "musik", name: "Musik", short: "Mu", kind: "simple", note: "Pruefungs-Gesamtnote" },
    { id: "kunst", name: "Kunst", short: "Ku", kind: "simple", note: "Pruefungs-Gesamtnote" },
    { id: "informatik", name: "Informatik", short: "Inf", kind: "simple", note: "Pruefungs-Gesamtnote" },
    { id: "idg", name: "Informatik und digitales Gestalten", short: "IdG", kind: "simple", note: "Pruefungs-Gesamtnote" },
    { id: "buchfuehrung", name: "Buchfuehrung", short: "Bf", kind: "simple", note: "schriftliche Pruefung" }
  ];

  var bowSubjects = [
    { id: "technik", name: "Technik" },
    { id: "wirtschaft", name: "Wirtschaft und Kommunikation" },
    { id: "soziales", name: "Ernaehrung und Soziales" }
  ];

  var state = loadState() || {
    mode: "internal",
    language: "deutsch",
    groupAInternal: "englisch",
    groupAExtended: ["englisch", "nt"],
    other: "religion",
    bow: "technik",
    grades: {}
  };
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
    state = {
      mode: state.mode,
      language: "deutsch",
      groupAInternal: "englisch",
      groupAExtended: ["englisch", "nt"],
      other: "religion",
      bow: "technik",
      grades: {}
    };
    render();
    saveState();
  });

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
    button.innerHTML = "<strong>" + escapeHtml(subject.name) + "</strong><span>" + escapeHtml(extra || subject.note || "") + "</span>";
    return button;
  }

  function renderSubjectGroup(title, help, subjects, group, selectedIds, limitText) {
    var section = document.createElement("section");
    section.className = "subject-group";
    section.innerHTML = "<div><h3>" + title + "</h3><p>" + help + "</p></div>";
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
    section.innerHTML = "<div><h3>Berufsorientierendes Wahlpflichtfach</h3><p>Fuer die Projektpruefung zaehlen die JFN in WiB und im besuchten Wahlpflichtfach einfach; in 9M werden hier die ZZ-Noten eingetragen.</p></div>";
    var grid = document.createElement("div");
    grid.className = "subject-card-grid";
    bowSubjects.forEach(function (subject) {
      grid.appendChild(card(subject, "bow", state.bow === subject.id, schoolGradeLabel() + " einfach"));
    });
    section.appendChild(grid);
    return section;
  }

  function renderSubjects() {
    els.subjectGroups.innerHTML = "";
    els.subjectGroups.appendChild(renderSubjectGroup("Deutsch-Fach", "Deutsch ist Pflicht; Deutsch als Zweitsprache gilt nur, wenn die Voraussetzungen erfuellt sind.", fixedCore, "language", [state.language]));

    if (state.mode === "internal") {
      els.subjectGroups.appendChild(renderSubjectGroup("Wahlfach aus Englisch, NT oder GPG", "Eines dieser Faecher wird in der normalen Quali-Berechnung mit Jahresfortgangsnote gewaehlt.", groupA, "groupAInternal", [state.groupAInternal]));
      els.subjectGroups.appendChild(renderBowGroup());
      els.subjectGroups.appendChild(renderSubjectGroup("Weiteres Pruefungsfach", "Waehle das zusaetzliche Fach, das als benotetes Fach besucht wurde.", otherSubjects, "other", [state.other]));
    } else if (state.mode === "mclass") {
      els.subjectGroups.appendChild(renderSubjectGroup("Zwei Faecher aus Englisch, NT, GPG oder Projekt", "9M waehlt zwei Bereiche. Eine Projektpruefung kann Englisch, NT oder GPG ersetzen.", extendedGroupA, "groupAExtended", state.groupAExtended, "ausgewaehlt"));
      if (state.groupAExtended.indexOf("projekt") !== -1) {
        els.subjectGroups.appendChild(renderBowGroup());
      }
      els.subjectGroups.appendChild(renderSubjectGroup("Weiteres Pruefungsfach", "Waehle das zusaetzliche Fach, das als benotetes Fach besucht wurde.", otherSubjects, "other", [state.other]));
    } else {
      els.subjectGroups.appendChild(renderSubjectGroup("Zwei Faecher aus Englisch, NT, GPG oder Projekt", "Ohne Jahresfortgangsnoten muessen hier zwei Faecher gewaehlt werden; eine Projektpruefung kann eines ersetzen.", extendedGroupA, "groupAExtended", state.groupAExtended, "ausgewaehlt"));
      els.subjectGroups.appendChild(renderSubjectGroup("Weiteres Pruefungsfach", "Waehle ein weiteres Fach der besonderen Leistungsfeststellung.", otherSubjects, "other", [state.other]));
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
      els.modeHelp.innerHTML = "<strong>Regelklasse:</strong> Deutsch, Mathematik, ein Fach aus Englisch/NT/GPG, Projektpruefung und ein weiteres Fach ergeben zusammen den Teiler 18.";
    } else if (state.mode === "mclass") {
      els.modeHelp.innerHTML = "<strong>9M mit Zwischenzeugnisnoten:</strong> Deutsch, Mathematik, zwei Bereiche aus Englisch/NT/GPG/Projekt und ein weiteres Fach ergeben zusammen den Teiler 18. Trage statt Jahresfortgangsnoten die ZZ-Noten ein.";
    } else {
      els.modeHelp.innerHTML = "<strong>Ohne Jahresfortgangsnoten:</strong> Fuer andere Bewerberinnen und Bewerber werden keine Jahresfortgangsnoten eingerechnet; die Notensumme wird durch den Teiler 9 geteilt.";
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
      return [language, math, subjectById(state.groupAInternal), { id: "projectInternal", name: "Projektpruefung", short: "PP", kind: "projectInternal", note: "WiB, Wahlpflichtfach und Projekt" }, selectedOther];
    }
    if (state.mode === "mclass") {
      return [language, math].concat(state.groupAExtended.map(subjectById), [selectedOther]);
    }
    return [language, math].concat(state.groupAExtended.map(subjectById), [selectedOther]);
  }

  function fieldId(subjectId, suffix) {
    return subjectId + "__" + suffix;
  }

  function fieldDef(subject, suffix, label, weight, hint) {
    return { id: fieldId(subject.id, suffix), subject: subject.name, label: label, weight: weight, hint: hint || ("Faktor " + weight) };
  }

  function schoolGradeLabel() {
    return state.mode === "mclass" ? "ZZ-Note" : "Jahresfortgangsnote";
  }

  function fieldsForSubject(subject) {
    if (state.mode === "internal" || state.mode === "mclass") {
      if (subject.kind === "languageOral") {
        return [
          fieldDef(subject, "jfn", schoolGradeLabel(), 2, "zaehlt doppelt"),
          fieldDef(subject, "schriftlich", "Schriftliche Pruefung", 1, "zaehlt einfach"),
          fieldDef(subject, "muendlich", "Muendliche Pruefung", 1, "zaehlt einfach")
        ];
      }
      if (subject.kind === "projectInternal") {
        return [
          fieldDef(subject, "wib", schoolGradeLabel() + " WiB", 1, "zaehlt einfach"),
          fieldDef(subject, "bow", schoolGradeLabel() + " " + bowName(), 1, "zaehlt einfach"),
          fieldDef(subject, "projekt", "Gesamtnote Projektpruefung", 2, "zaehlt doppelt")
        ];
      }
      if (subject.kind === "projectExternal") {
        return [
          fieldDef(subject, "wib", schoolGradeLabel() + " WiB", 1, "zaehlt einfach"),
          fieldDef(subject, "bow", schoolGradeLabel() + " " + bowName(), 1, "zaehlt einfach"),
          fieldDef(subject, "projekt", "Gesamtnote Projektpruefung", 2, "zaehlt doppelt")
        ];
      }
      if (subject.kind === "simple") {
        return [
          fieldDef(subject, "jfn", schoolGradeLabel(), 1, "zaehlt einfach"),
          fieldDef(subject, "pruefung", "Pruefungsnote", 1, "zaehlt einfach")
        ];
      }
      return [
        fieldDef(subject, "jfn", subject.id === "muttersprache" ? "Leistungstest / " + schoolGradeLabel() : schoolGradeLabel(), 2, "zaehlt doppelt"),
        fieldDef(subject, "pruefung", "Pruefungsnote", 2, "zaehlt doppelt")
      ];
    }

    if (subject.kind === "languageOral") {
      return [
        fieldDef(subject, "schriftlich", "Schriftliche Pruefung", 1, "zaehlt einfach"),
        fieldDef(subject, "muendlich", "Muendliche Pruefung", 1, "zaehlt einfach")
      ];
    }
    if (subject.kind === "simple") {
      return [fieldDef(subject, "pruefung", "Pruefungsnote", 1, "zaehlt einfach")];
    }
    return [fieldDef(subject, "pruefung", "Pruefungsnote", 2, "zaehlt doppelt")];
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
      section.innerHTML = "<div><h3>" + escapeHtml(subject.name) + "</h3><p>" + escapeHtml(subject.note || "") + "</p></div>";
      var grid = document.createElement("div");
      grid.className = "field-grid";
      fieldsForSubject(subject).forEach(function (field) {
        var wrapper = document.createElement("div");
        wrapper.className = "grade-field";
        wrapper.innerHTML = "<label for=\"" + field.id + "\">" + escapeHtml(field.label) + "</label><input id=\"" + field.id + "\" inputmode=\"decimal\" type=\"number\" min=\"1\" max=\"6\" step=\"0.1\" placeholder=\"1 bis 6\" value=\"" + escapeHtml(state.grades[field.id] || "") + "\"><small>" + escapeHtml(field.hint) + "</small>";
        grid.appendChild(wrapper);
      });
      section.appendChild(grid);
      els.gradeInputs.appendChild(section);
    });

    els.gradeInputs.querySelectorAll("input").forEach(function (input) {
      input.addEventListener("input", function () {
        state.grades[input.id] = input.value;
        renderResult();
        saveState();
      });
    });
  }

  function getContributions() {
    var rows = [];
    activeSubjects().forEach(function (subject) {
      fieldsForSubject(subject).forEach(function (field) {
        var parsed = parseGrade(state.grades[field.id]);
        rows.push({ subject: subject.name, label: field.label, weight: field.weight, value: parsed, product: parsed === null ? null : parsed * field.weight });
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
      return "-";
    }
    return value.toFixed(digits).replace(".", ",");
  }

  function renderResult() {
    var rows = getContributions();
    var divider = state.mode === "external" ? 9 : 18;
    var complete = rows.every(function (row) { return row.product !== null; });
    var sum = rows.reduce(function (total, row) { return total + (row.product || 0); }, 0);
    var average = complete ? sum / divider : null;
    var official = complete ? truncateOneDecimal(average) : null;
    var passed = complete && official <= PASS_LIMIT;
    var statusClass = !complete ? "" : passed ? " ok" : " fail";
    var statusTitle = !complete ? "Noch nicht vollstaendig" : passed ? "Quali rechnerisch bestanden" : "Quali rechnerisch nicht bestanden";
    var statusText = !complete ? "Trage alle sichtbaren Noten ein. Danach erscheint die gewertete Gesamtnote." : passed ? "Die gewertete Note liegt bei 3,0 oder besser." : "Die gewertete Note liegt schlechter als 3,0.";

    els.resultBox.innerHTML =
      "<div class=\"status-card" + statusClass + "\"><h3>" + statusTitle + "</h3><p>" + statusText + "</p></div>" +
      "<div class=\"metric-grid\"><div class=\"metric\"><span>Notensumme</span><strong>" + (complete ? formatNumber(sum, 1) : "-") + "</strong></div><div class=\"metric\"><span>Teiler</span><strong>" + divider + "</strong></div><div class=\"metric\"><span>Durchschnitt</span><strong>" + formatNumber(average, 2) + "</strong></div><div class=\"metric\"><span>Amtlich gewertet</span><strong>" + formatNumber(official, 1) + "</strong></div></div>";

    var formula = state.mode === "external" ? "Summe aller gewichteten Pruefungsnoten / 9" : "Summe aller gewichteten Schul- und Pruefungsnoten / 18";
    els.formulaBox.innerHTML = "<h3>Formel</h3><p>Die zweite Stelle nach dem Komma wird nicht gerundet, sondern abgeschnitten.</p><div class=\"formula-line\">" + formula + "</div>";
    renderContributionTable(rows, sum, divider, complete);
  }

  function renderContributionTable(rows, sum, divider, complete) {
    var body = rows.map(function (row) {
      return "<tr><td><strong>" + escapeHtml(row.subject) + "</strong><br>" + escapeHtml(row.label) + "</td><td>" + formatNumber(row.value, 1) + "</td><td>" + row.weight + "</td><td>" + formatNumber(row.product, 1) + "</td></tr>";
    }).join("");
    var total = complete ? "<tr><td><strong>Gesamt</strong></td><td></td><td>/" + divider + "</td><td><strong>" + formatNumber(sum, 1) + "</strong></td></tr>" : "";
    els.contributionBox.innerHTML = "<h3>Rechenweg</h3><table class=\"contribution-table\"><thead><tr><th>Note</th><th>Wert</th><th>Faktor</th><th>Beitrag</th></tr></thead><tbody>" + body + total + "</tbody></table>";
  }

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
