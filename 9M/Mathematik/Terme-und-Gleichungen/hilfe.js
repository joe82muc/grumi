(() => {
  const params = new URLSearchParams(location.search);
  const level = params.get("level") || "Stufe 1";
  const task = params.get("task") || "1";
  const equation = params.get("equation") || "3x + 15 = 36";
  const step = params.get("step") || "";

  const helpLevel = document.querySelector("#help-level");
  const helpTitle = document.querySelector("#help-title");
  const helpEquation = document.querySelector("#help-equation");
  const helpNav = document.querySelector("#help-nav");
  const helpContent = document.querySelector("#help-content");

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function formatEquation(value) {
    const text = String(value ?? "").replace(/\^2/g, "²").replace(/\*/g, "·");
    const fractionPattern = /(\([^()]+\)|-?\d+(?:,\d+)?[a-zA-Z]?|-?[a-zA-Z]\d*|-?\d+(?:,\d+)?\s*[·*]\s*[a-zA-Z])\s*\/\s*(\([^()]+\)|-?[a-zA-Z]\d*|\d+(?:,\d+)?)/g;
    let html = "";
    let lastIndex = 0;
    let match;

    while ((match = fractionPattern.exec(text)) !== null) {
      const numerator = match[1].trim();
      const denominator = match[2].trim();
      html += escapeHtml(text.slice(lastIndex, match.index));
      html += `<span class="math-frac"><span class="math-frac-top">${escapeHtml(numerator)}</span><span class="math-frac-bottom">${escapeHtml(denominator)}</span></span>`;
      lastIndex = match.index + match[0].length;
    }

    return html + escapeHtml(text.slice(lastIndex));
  }

  function mathLine(value) {
    return `<span class="math-line">${formatEquation(value)}</span>`;
  }

  function list(items) {
    return `<ol class="step-list">${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
  }

  function cards(items) {
    return `<div class="rule-grid">${items.map((item) => `
      <div class="rule-card">
        <strong>${escapeHtml(item.title)}</strong>
        ${item.body}
      </div>
    `).join("")}</div>`;
  }

  function section(id, title, body) {
    return { id, title, body };
  }

  function hasAny(patterns) {
    return patterns.some((pattern) => pattern.test(equation));
  }

  function isWordProblem() {
    return /^sachaufgabe\s*:/i.test(equation) || equation.length > 90;
  }

  function hasVariableDenominator() {
    return /\/\s*(?:x\b|\(\s*(?:\d+\s*)?x\b)/i.test(equation);
  }

  function hasTwoVariableDenominators() {
    const denominators = equation.match(/\/\s*(?:x\b|\(\s*(?:\d+\s*)?x(?:\s*[+-]\s*\d+)?\s*\))/gi) || [];
    return denominators.length >= 2;
  }

  function hasFractions() {
    return /\//.test(equation);
  }

  function hasBrackets() {
    return /[()]/.test(equation);
  }

  function needsBracketHelp() {
    return hasMinusBracket() || hasFactorBeforeBracket() || /\)\s*\(/.test(equation) || /\)\s*\/\s*\d/.test(equation);
  }

  function hasMinusBracket() {
    return /-\s*\(/.test(equation);
  }

  function hasFactorBeforeBracket() {
    return /(?:^|[=+\-]\s*)-?\d+(?:,\d+)?\s*\(/.test(equation) || /\b\d+\/\d+\s*\(/.test(equation);
  }

  function hasDecimalFriendlyFractions() {
    return /\b(?:1\/2|1\/4|3\/4|1\/5|2\/5|4\/5|1\/10|5\/10)\b/.test(equation);
  }

  function needsCombineHelp() {
    const xTerms = equation.match(/[+-]?\s*\d*(?:,\d+)?x\b/gi) || [];
    const numberTerms = equation.match(/[+-]\s*\d+(?:,\d+)?(?!\s*x|\s*\/)/g) || [];
    return /Stufe [56]\b/.test(level) || xTerms.length >= 3 || numberTerms.length >= 3;
  }

  function equivalentCard() {
    return section(
      "aequivalent",
      "Äquivalent umformen",
      `
        <p>Äquivalent umformen heißt: Die Gleichung bleibt gleichwertig. Du machst links und rechts dieselbe erlaubte Rechnung.</p>
        <div class="balance-demo" aria-label="Waage: beide Seiten gleich behandeln">
          <div class="balance-side">${mathLine("3x + 15")}</div>
          <div class="balance-center">=</div>
          <div class="balance-side">${mathLine("36")}</div>
          <div class="balance-action">auf beiden Seiten: -15</div>
          <div class="balance-side after">${mathLine("3x")}</div>
          <div class="balance-center after">=</div>
          <div class="balance-side after">${mathLine("21")}</div>
        </div>
        ${list([
          "<strong>Ziel:</strong> x soll allein stehen.",
          "<strong>Gegenteil rechnen:</strong> Bei +15 rechnest du -15. Bei ·3 rechnest du :3.",
          "<strong>Wichtig:</strong> Die Rechnung hinter dem Strich gilt immer für beide Seiten.",
        ])}
      `,
    );
  }

  function divideNegativeCard() {
    return section(
      "negativ-teilen",
      "Durch eine negative Zahl teilen",
      `
        <p>Wenn vor x ein Minus steht, steckt dort oft der Faktor -1. Bei -5x ist der Faktor -5.</p>
        ${cards([
          {
            title: "-x bedeutet -1x",
            body: `${mathLine("-x = 7 | :(-1)")}${mathLine("x = -7")}`,
          },
          {
            title: "-5x lösen",
            body: `${mathLine("-5x = 20 | :(-5)")}${mathLine("x = -4")}`,
          },
        ])}
        <p class="warning-note">Typischer Fehler: Das Minus einfach wegstreichen. Besser: kurz als -1x oder -5x lesen und dann sauber teilen.</p>
      `,
    );
  }

  function combineLikeTermsCard() {
    return section(
      "zusammenfassen",
      "Terme zusammenfassen",
      `
        <p>Zusammenfassen heißt: Sortiere zuerst, was gleichartig ist. x-Terme gehören zu x-Termen, reine Zahlen zu reinen Zahlen.</p>
        <div class="collect-demo">
          <div class="collect-line">${mathLine("3x - 6 + 2x + 4 - 14 = 40 - 2x - 10 - 4")}</div>
          <div class="collect-buckets">
            <div class="collect-bucket x-bucket"><strong>x-Terme links</strong>${mathLine("3x + 2x = 5x")}</div>
            <div class="collect-bucket number-bucket"><strong>Zahlen links</strong>${mathLine("-6 + 4 - 14 = -16")}</div>
            <div class="collect-bucket x-bucket"><strong>x-Term rechts</strong>${mathLine("-2x")}</div>
            <div class="collect-bucket number-bucket"><strong>Zahlen rechts</strong>${mathLine("40 - 10 - 4 = 26")}</div>
          </div>
          <div class="collect-result">${mathLine("5x - 16 = 26 - 2x")}</div>
        </div>
        ${list([
          "<strong>Vorzeichen mitnehmen:</strong> Aus -6 wird nicht +6.",
          "<strong>Nur Gleichartiges addieren:</strong> 3x + 2x = 5x, aber 5x + 4 bleibt 5x + 4.",
          "<strong>Danach erst umformen:</strong> x-Terme auf eine Seite, Zahlen auf die andere.",
        ])}
      `,
    );
  }

  function bracketCard() {
    return section(
      "klammern",
      "Klammern auflösen",
      `
        <p>Schau zuerst direkt vor die Klammer. Dort steht, was mit jedem Teil in der Klammer passiert.</p>
        <div class="move-demo distribute-demo">
          <div class="move-formula"><span class="move-factor">3</span><span>(</span><span class="move-target">x</span><span> + </span><span class="move-target">4</span><span>)</span></div>
          <div class="move-steps">
            <div class="move-step"><span>3</span><span class="move-arrow">→</span><span>x</span><span>=</span><strong>3x</strong></div>
            <div class="move-step delay"><span>3</span><span class="move-arrow">→</span><span>4</span><span>=</span><strong>12</strong></div>
          </div>
          <div class="move-result">${mathLine("3x + 12")}</div>
        </div>
        ${cards([
          {
            title: "Mal vor der Klammer",
            body: `${mathLine("3(x + 4) = 3x + 12")}${mathLine("-2(x - 5) = -2x + 10")}`,
          },
          {
            title: "Bruch vor der Klammer",
            body: `${mathLine("1/2(x + 6) = 1/2x + 3")}${mathLine("3/5(x - 10) = 3/5x - 6")}`,
          },
          {
            title: "Klammer geteilt durch Zahl",
            body: `${mathLine("(2x - 14)/7 = 2/7x - 2")}${mathLine("oder zuerst beide Seiten mit 7 multiplizieren")}`,
          },
        ])}
      `,
    );
  }

  function minusBracketCard() {
    return section(
      "minusklammer",
      "Minusklammer",
      `
        <p>Eine Minusklammer ist eine Klammer mit dem Faktor -1 davor. Deshalb wechseln alle Zeichen in der Klammer.</p>
        ${cards([
          {
            title: "Als -1 denken",
            body: `${mathLine("-(2x + 5) = -1(2x + 5)")}${mathLine("= -2x - 5")}`,
          },
          {
            title: "Auch Minus wird Plus",
            body: `${mathLine("-(3x - 7) = -3x + 7")}`,
          },
        ])}
        <p class="warning-note">Merksatz: Das Minus vor der Klammer geht in jeden Summanden hinein.</p>
      `,
    );
  }

  function commonDenominatorCard() {
    return section(
      "hauptnenner",
      "Hauptnenner finden",
      `
        <p>Der Hauptnenner ist eine Zahl oder ein Term, mit dem du alle Nenner loswirst.</p>
        ${cards([
          {
            title: "Nur Zahlen im Nenner",
            body: `${mathLine("Nenner: 4 und 6")}${mathLine("Hauptnenner: 12")}${mathLine("jede Seite mit 12 multiplizieren")}`,
          },
          {
            title: "Variable im Nenner",
            body: `${mathLine("Nenner: x und x + 5")}${mathLine("Hauptnenner: x(x + 5)")}`,
          },
          {
            title: "2x + 5 im Nenner",
            body: `${mathLine("Nenner: x und 2x + 5")}${mathLine("Hauptnenner: x(2x + 5)")}`,
          },
        ])}
      `,
    );
  }

  function domainCard() {
    return section(
      "definitionsmenge",
      "Definitionsmenge",
      `
        <p>Bei x im Nenner musst du zuerst ausschließen, wann ein Nenner 0 wird. Durch 0 darf man nicht teilen.</p>
        ${cards([
          {
            title: "Nenner x",
            body: `${mathLine("x ≠ 0")}${mathLine("D = Q \\ {0}")}`,
          },
          {
            title: "Nenner x + 5",
            body: `${mathLine("x + 5 ≠ 0")}${mathLine("x ≠ -5")}${mathLine("D = Q \\ {-5}")}`,
          },
          {
            title: "Nenner 2x + 5",
            body: `${mathLine("2x + 5 ≠ 0")}${mathLine("x ≠ -2,5")}${mathLine("D = Q \\ {-2,5}")}`,
          },
        ])}
        <p class="warning-note">Am Ende prüfen: Liegt deine Lösung in der Definitionsmenge? Wenn nicht, gehört sie nicht in die Lösungsmenge.</p>
      `,
    );
  }

  function solutionSetCard() {
    return section(
      "loesungsmenge",
      "Lösungsmenge",
      `
        <p>Die Lösungsmenge ist die saubere Antwort am Ende. Sie sammelt alle x-Werte, die erlaubt sind und die Gleichung richtig machen.</p>
        ${cards([
          {
            title: "Eine Lösung",
            body: `${mathLine("x = 6")}${mathLine("L = {6}")}`,
          },
          {
            title: "Keine erlaubte Lösung",
            body: `${mathLine("x = -5, aber x ≠ -5")}${mathLine("L = { }")}`,
          },
          {
            title: "Quadratische Aufgabe",
            body: `${mathLine("x² = 36")}${mathLine("x = -6 oder x = 6")}${mathLine("L = {-6; 6}")}`,
          },
        ])}
      `,
    );
  }

  function decimalOrFractionCard() {
    return section(
      "dezimal-oder-bruch",
      "Bruch oder Dezimalzahl?",
      `
        <p>Manchmal macht eine Dezimalzahl die Aufgabe leichter. Manchmal macht sie sie unübersichtlich.</p>
        ${cards([
          {
            title: "Umwandeln lohnt sich oft",
            body: `${mathLine("1/2 = 0,5")}${mathLine("1/4 = 0,25")}${mathLine("3/4 = 0,75")}${mathLine("1/5 = 0,2")}`,
          },
          {
            title: "Lieber als Bruch lassen",
            body: `${mathLine("1/3 = 0,333...")}${mathLine("1/6 = 0,1666...")}${mathLine("1/7 bleibt Bruch")}`,
          },
        ])}
        <p class="warning-note">Faustregel: Endliche Dezimalzahl ist okay. Periodische Dezimalzahl lieber als Bruch lassen.</p>
      `,
    );
  }

  function wordProblemCard() {
    const photoStep = step ? `<p class="warning-note">Aktueller Foto-Schritt: Foto ${escapeHtml(step)}. Bearbeite nur diesen Teil sauber.</p>` : "";
    return section(
      "sachaufgaben",
      "Sachaufgaben: x finden",
      `
        <p>Bei Sachaufgaben beginnt die Mathematik nicht mit Rechnen, sondern mit einer guten Wahl für x.</p>
        ${list([
          "<strong>Grundgröße finden:</strong> Suche die Größe, von der die anderen Angaben abhängen.",
          "<strong>x festlegen:</strong> Schreibe klar: x = Anzahl/Preis/Gesamtzahl von ...",
          "<strong>Tabelle bauen:</strong> Jede gesuchte Größe bekommt eine Zeile.",
          "<strong>Terme bilden:</strong> mehr als x: x + Zahl, weniger als x: x - Zahl, doppelt: 2x, halb: 1/2x.",
          "<strong>Gleichung aufstellen:</strong> Nutze die Gesamtangabe, zum Beispiel Summe aller Teile = Gesamtzahl.",
          "<strong>Werte einsetzen:</strong> Am Ende nicht nur x nennen, sondern alle gesuchten Werte berechnen.",
        ])}
        ${cards([
          {
            title: "Stufe 14",
            body: `${mathLine("x")}${mathLine("x + 50")}${mathLine("x - 20")}`,
          },
          {
            title: "Stufe 15",
            body: `${mathLine("x")}${mathLine("2x")}${mathLine("1/2x")}${mathLine("x + 40")}`,
          },
          {
            title: "Stufe 16",
            body: `${mathLine("x = Gesamtzahl")}${mathLine("1/3x, 1/6x, feste Restwerte")}`,
          },
        ])}
        ${photoStep}
      `,
    );
  }

  function multiplyOutCard() {
    return section(
      "ausmultiplizieren",
      "Ausmultiplizieren",
      `
        <p>Ausmultiplizieren heißt: Jeder Teil der ersten Klammer wird mit jedem Teil der zweiten Klammer multipliziert.</p>
        <div class="move-demo binomial-demo">
          <div class="move-formula"><span>(</span><span class="move-target">x</span><span> + </span><span class="move-target">3</span><span>)(</span><span class="move-target">x</span><span> + </span><span class="move-target">4</span><span>)</span></div>
          <div class="move-steps four">
            <div class="move-step"><span>x</span><span class="move-arrow">→</span><span>x</span><span>=</span><strong>x²</strong></div>
            <div class="move-step delay"><span>x</span><span class="move-arrow">→</span><span>4</span><span>=</span><strong>4x</strong></div>
            <div class="move-step delay-more"><span>3</span><span class="move-arrow">→</span><span>x</span><span>=</span><strong>3x</strong></div>
            <div class="move-step delay-most"><span>3</span><span class="move-arrow">→</span><span>4</span><span>=</span><strong>12</strong></div>
          </div>
          <div class="move-result">${mathLine("x² + 4x + 3x + 12 = x² + 7x + 12")}</div>
        </div>
        ${list([
          "Erster Term mal erster Term.",
          "Erster Term mal zweiter Term.",
          "Zweiter Term mal erster Term.",
          "Zweiter Term mal zweiter Term.",
          "Danach gleichartige Terme zusammenfassen.",
        ])}
      `,
    );
  }

  function strategyCard() {
    const steps = [
      "Ziel suchen: x soll am Ende allein stehen.",
      "Immer die Gegenrechnung wählen: plus wird minus, mal wird geteilt.",
      "Jede Umformung auf beiden Seiten machen.",
    ];

    if (hasVariableDenominator()) {
      steps.unshift("Weil x im Nenner steht: zuerst die Definitionsmenge notieren.");
    }

    if (hasFractions() && hasVariableDenominator()) {
      steps.push("Bei Bruchgleichungen mit x im Nenner: Hauptnenner mit allen Nennerfaktoren bilden.");
    } else if (hasFractions()) {
      steps.push("Bei Brüchen: Hauptnenner suchen oder einfache Brüche bewusst in Dezimalzahlen umwandeln.");
    }

    if (needsBracketHelp()) {
      steps.push("Bei Klammern: Vorzeichen und Faktoren vor der Klammer zuerst klären.");
    }

    if (needsCombineHelp()) {
      steps.push("Vor dem Umformen gleichartige Terme zusammenfassen: x-Terme zu x-Termen, Zahlen zu Zahlen.");
    }

    if (/-?\d+(?:,\d+)?x/.test(equation)) {
      steps.push("Wenn vor x noch eine Zahl steht: am Ende durch diesen Faktor teilen.");
    }

    steps.push("Zum Schluss: Probe oder Lösungsmenge notieren.");

    return section(
      "strategie",
      "Was mache ich zuerst?",
      `
        <p>Eine gute Reihenfolge nimmt der Aufgabe die Schärfe.</p>
        ${list(steps)}
      `,
    );
  }

  function buildSections() {
    if (isWordProblem()) {
      return [wordProblemCard(), equivalentCard(), solutionSetCard()];
    }

    const sections = [strategyCard()];
    if (needsCombineHelp()) sections.push(combineLikeTermsCard());
    sections.push(equivalentCard());

    if (hasAny([/-x\b/i, /-\d+(?:,\d+)?x/i])) sections.push(divideNegativeCard());
    if (needsBracketHelp()) sections.push(bracketCard());
    if (hasMinusBracket()) sections.push(minusBracketCard());
    if (hasFractions()) sections.push(commonDenominatorCard());
    if (hasFractions() && !hasVariableDenominator()) sections.push(decimalOrFractionCard());
    if (hasVariableDenominator()) sections.push(domainCard());
    if (hasTwoVariableDenominators()) sections.push(commonDenominatorCard());
    if (/Stufe 12|Stufe 13/.test(level) || /\)\s*\(/.test(equation)) sections.push(multiplyOutCard());
    sections.push(solutionSetCard());

    return sections.filter((item, index, all) => all.findIndex((candidate) => candidate.id === item.id) === index);
  }

  function render() {
    const sections = buildSections();
    helpLevel.textContent = `${level} · Aufgabe ${task}`;
    helpTitle.textContent = isWordProblem()
      ? "Sachaufgabe in kleine Schritte zerlegen"
      : "So löst du diese Aufgabe Schritt für Schritt";
    helpEquation.innerHTML = isWordProblem()
      ? `<span class="task-card"><span class="task-badge">Sachaufgabe</span><span class="task-text">${escapeHtml(equation.replace(/^sachaufgabe\s*:\s*/i, ""))}</span></span>`
      : `<span class="equation-line">${formatEquation(equation)}</span>`;
    helpNav.innerHTML = sections
      .map((item) => `<a href="#${item.id}">${escapeHtml(item.title)}</a>`)
      .join("");
    helpContent.innerHTML = sections
      .map((item) => `<section class="help-section" id="${item.id}"><h3>${escapeHtml(item.title)}</h3>${item.body}</section>`)
      .join("") + `<a class="back-button" href="index.html">Zurück zur Übung</a>`;
  }

  render();
})();
