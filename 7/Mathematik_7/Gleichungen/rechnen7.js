/* Rechenhilfe fuer "Gleichungen loesen" (Klasse 7).
   Exakte Brueche, lineare Terme a·x + b, Loesungsschritte fuer Tipps und
   Balkenwaage, Probe-Text. Gleiche Logik wie der Rechen-Pruefer im
   KI-Dienst (render-mathe-ki/src/lib/klasse7.ts). */
(() => {
  function gcd(a, b) {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y !== 0) {
      const rest = x % y;
      x = y;
      y = rest;
    }
    return x === 0 ? 1 : x;
  }

  class Frac {
    constructor(numerator, denominator = 1) {
      if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator === 0) {
        throw new Error("Ungültige Zahl.");
      }
      const divisor = gcd(numerator, denominator);
      const sign = denominator < 0 ? -1 : 1;
      const n = (sign * numerator) / divisor;
      this.n = n === 0 ? 0 : n;
      this.d = n === 0 ? 1 : Math.abs(denominator) / divisor;
      if (!Number.isSafeInteger(this.n) || !Number.isSafeInteger(this.d)) throw new Error("Zahl zu groß.");
    }

    static from(value) {
      return new Frac(value, 1);
    }

    static parseDecimal(text) {
      const match = /^(\d+)(?:[.,](\d{1,6}))?$/.exec(text);
      if (!match) throw new Error("Zahl nicht lesbar.");
      const decimals = match[2] || "";
      return new Frac(Number(match[1] + decimals), 10 ** decimals.length);
    }

    add(o) { return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
    sub(o) { return this.add(o.neg()); }
    mul(o) { return new Frac(this.n * o.n, this.d * o.d); }
    div(o) {
      if (o.n === 0) throw new Error("Division durch 0.");
      return new Frac(this.n * o.d, this.d * o.n);
    }
    neg() { return new Frac(-this.n, this.d); }
    abs() { return new Frac(Math.abs(this.n), this.d); }
    equals(o) { return this.n === o.n && this.d === o.d; }
    isZero() { return this.n === 0; }
    isInteger() { return this.d === 1; }
    sign() { return Math.sign(this.n); }
    toNumber() { return this.n / this.d; }

    toString() {
      const minus = this.n < 0 ? "−" : "";
      const n = Math.abs(this.n);
      if (this.d === 1) return `${minus}${n}`;
      let power = 1;
      for (let digits = 1; digits <= 6; digits += 1) {
        power *= 10;
        if (power % this.d === 0) {
          const scaled = String(n * (power / this.d)).padStart(digits + 1, "0");
          return `${minus}${scaled.slice(0, -digits)},${scaled.slice(-digits)}`;
        }
      }
      return `${minus}${n}/${this.d}`;
    }
  }

  const ZERO = Frac.from(0);
  const ONE = Frac.from(1);
  const X = { a: ONE, b: ZERO };
  const constant = (b) => ({ a: ZERO, b });
  const linAdd = (p, q) => ({ a: p.a.add(q.a), b: p.b.add(q.b) });
  const linSub = (p, q) => ({ a: p.a.sub(q.a), b: p.b.sub(q.b) });
  const linNeg = (p) => ({ a: p.a.neg(), b: p.b.neg() });
  const linScale = (p, f) => ({ a: p.a.mul(f), b: p.b.mul(f) });
  const isConst = (p) => p.a.isZero();
  const linEquals = (p, q) => p.a.equals(q.a) && p.b.equals(q.b);
  function linMul(p, q) {
    if (isConst(p)) return linScale(q, p.b);
    if (isConst(q)) return linScale(p, q.b);
    throw new Error("x · x kommt nicht vor.");
  }
  function linDiv(p, q) {
    if (!isConst(q) || q.b.isZero()) throw new Error("Division nicht möglich.");
    return linScale(p, ONE.div(q.b));
  }
  const linValue = (p, x) => p.a.mul(x).add(p.b);

  function normalizeMath(text) {
    return String(text ?? "")
      .replace(/[−–—‒﹣－]/g, "-")
      .replace(/[·×⋅•∙✕]/g, "*")
      .replace(/[÷:]/g, "/")
      .replace(/[[{]/g, "(")
      .replace(/[\]}]/g, ")")
      .replace(/[A-Za-zÄÖÜäöüß]+/g, (word) => (word.toLowerCase() === "x" ? "x" : " "))
      .replace(/[€$%°"'`´✓✔✗✘]/g, "")
      .replace(/\s+/g, "")
      .replace(/\(\)/g, "");
  }

  function parseExpression(source) {
    const text = source;
    let pos = 0;
    const isDigit = (ch) => ch !== undefined && ch >= "0" && ch <= "9";

    function readNumber() {
      const match = /^\d+(?:[.,]\d+)?/.exec(text.slice(pos));
      if (!match) throw new Error("Zahl erwartet.");
      pos += match[0].length;
      return Frac.parseDecimal(match[0]);
    }
    function primary() {
      const ch = text[pos];
      if (ch === "(") {
        pos += 1;
        const inner = sum();
        if (text[pos] !== ")") throw new Error("Klammer fehlt.");
        pos += 1;
        return inner;
      }
      if (ch === "x") {
        pos += 1;
        return X;
      }
      if (isDigit(ch)) return constant(readNumber());
      throw new Error("Unerwartetes Zeichen.");
    }
    function unary() {
      if (text[pos] === "+") {
        pos += 1;
        return unary();
      }
      if (text[pos] === "-") {
        pos += 1;
        return linNeg(unary());
      }
      return primary();
    }
    function product() {
      let value = unary();
      for (;;) {
        const ch = text[pos];
        if (ch === "*" || ch === "/") {
          pos += 1;
          const factor = unary();
          value = ch === "*" ? linMul(value, factor) : linDiv(value, factor);
        } else if (ch === "x" || ch === "(" || isDigit(ch)) {
          value = linMul(value, primary());
        } else {
          return value;
        }
      }
    }
    function sum() {
      let value = product();
      for (;;) {
        const ch = text[pos];
        if (ch !== "+" && ch !== "-") return value;
        pos += 1;
        const term = product();
        value = ch === "+" ? linAdd(value, term) : linSub(value, term);
      }
    }
    if (!text) throw new Error("Leer.");
    const result = sum();
    if (pos !== text.length) throw new Error("Nicht ganz lesbar.");
    return result;
  }

  /** Schreibweise fuer die Anzeige: echtes Minus, Malpunkt, Doppelpunkt. */
  function pretty(text) {
    return String(text ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/(\S)\s*\*\s*/g, "$1 · ")
      .replace(/-/g, "−");
  }

  function coefficientText(a) {
    if (a.equals(ONE)) return "";
    if (a.equals(ONE.neg())) return "−";
    const text = a.toString();
    return text.includes("/") ? `(${text})` : text;
  }

  function formatLin(p) {
    if (p.a.isZero()) return p.b.toString();
    const parts = [`${coefficientText(p.a)}x`];
    if (!p.b.isZero()) parts.push(p.b.sign() < 0 ? `− ${p.b.abs()}` : `+ ${p.b}`);
    return parts.join(" ");
  }

  const formatEq = (eq) => `${formatLin(eq.left)} = ${formatLin(eq.right)}`;
  const wrapNegative = (value) => (value.sign() < 0 ? `(${value})` : value.toString());

  function parseEquation(text) {
    const parts = String(text ?? "").split("=");
    if (parts.length !== 2) return null;
    try {
      return {
        left: parseExpression(normalizeMath(parts[0])),
        right: parseExpression(normalizeMath(parts[1])),
        leftText: parts[0].trim(),
        rightText: parts[1].trim(),
      };
    } catch {
      return null;
    }
  }

  function solveEquation(text) {
    const eq = parseEquation(text);
    if (!eq) return null;
    const a = eq.left.a.sub(eq.right.a);
    if (a.isZero()) return null;
    return eq.right.b.sub(eq.left.b).div(a);
  }

  function termValue(term, x) {
    return linValue(parseExpression(normalizeMath(term)), x);
  }

  /** Setzt eine Zahl fuer x ein: "3x + 1", 4 -> "3 · 4 + 1". */
  function substituteX(term, value) {
    const valueText = value.toString();
    const wrapped = value.sign() < 0 ? `(${valueText})` : valueText;
    let result = "";
    for (const ch of pretty(term)) {
      if (ch === "x" || ch === "X") {
        const before = result.trimEnd();
        const last = before.slice(-1);
        if (/[0-9)]/.test(last)) result = `${before} · ${wrapped}`;
        else if (before === "") result += valueText;
        else result += wrapped;
      } else {
        result += ch;
      }
    }
    return result.replace(/\s+/g, " ").trim();
  }

  function additiveTerms(sideText) {
    const text = normalizeMath(sideText);
    const terms = [];
    let depth = 0;
    let current = "";
    for (const ch of text) {
      if (ch === "(") depth += 1;
      if (ch === ")") depth -= 1;
      if (depth === 0 && (ch === "+" || ch === "-") && current !== "" && !/[*/]$/.test(current)) {
        terms.push(current);
        current = ch;
      } else {
        current += ch;
      }
    }
    if (current) terms.push(current);
    return terms;
  }

  function isUnsimplified(sideText) {
    const terms = additiveTerms(sideText);
    const xTerms = terms.filter((term) => term.includes("x")).length;
    return xTerms > 1 || terms.length - xTerms > 1;
  }

  /**
   * Loesungsschritte von der Aufgabe bis x = ... .
   * Jeder Schritt: { art: "zusammenfassen" | "plus" | "teilen", op, opText, eq, eqText }
   */
  function solutionSteps(text) {
    let eq = parseEquation(text);
    if (!eq) return [];
    const steps = [];
    let texts = { left: eq.leftText, right: eq.rightText };
    for (let guard = 0; guard < 6; guard += 1) {
      if (isConst(eq.left) && !isConst(eq.right)) {
        eq = { left: eq.right, right: eq.left };
        texts = { left: texts.right, right: texts.left };
      }
      if (isUnsimplified(texts.left) || isUnsimplified(texts.right)) {
        texts = { left: formatLin(eq.left), right: formatLin(eq.right) };
        steps.push({ art: "zusammenfassen", opText: "zusammenfassen", eq, eqText: formatEq(eq) });
        continue;
      }
      if (!isConst(eq.right)) {
        const value = { a: eq.right.a.neg(), b: ZERO };
        eq = { left: linAdd(eq.left, value), right: linAdd(eq.right, value) };
        const opText = `${value.a.sign() < 0 ? "−" : "+"} ${coefficientText(value.a.abs())}x`;
        steps.push({ art: "plus", opText, eq, eqText: formatEq(eq) });
      } else if (!eq.left.b.isZero()) {
        const b = eq.left.b;
        const value = constant(b.neg());
        eq = { left: linAdd(eq.left, value), right: linAdd(eq.right, value) };
        steps.push({ art: "plus", zahl: b, opText: `${b.sign() > 0 ? "−" : "+"} ${b.abs()}`, eq, eqText: formatEq(eq) });
      } else if (!eq.left.a.equals(ONE)) {
        const a = eq.left.a;
        eq = { left: linScale(eq.left, ONE.div(a)), right: linScale(eq.right, ONE.div(a)) };
        steps.push({ art: "teilen", zahl: a, opText: `: ${wrapNegative(a)}`, eq, eqText: formatEq(eq) });
      } else {
        break;
      }
      texts = { left: formatLin(eq.left), right: formatLin(eq.right) };
    }
    return steps;
  }

  /** Zahl aus einer Eingabe wie "7", "-5", "−5", "2,5" oder "x = 7". */
  function parseUserNumber(input) {
    const text = String(input ?? "")
      .replace(/^\s*x\s*=\s*/i, "")
      .replace(/[−–]/g, "-")
      .replace(/\s+/g, "");
    const match = /^([+-]?)(\d+(?:[.,]\d+)?)$/.exec(text);
    if (!match) return null;
    try {
      const value = Frac.parseDecimal(match[2]);
      return match[1] === "-" ? value.neg() : value;
    } catch {
      return null;
    }
  }

  /** Probe: x in beide Seiten einsetzen. */
  function probe(text, value) {
    const eq = parseEquation(text);
    if (!eq) return null;
    const leftValue = linValue(eq.left, value);
    const rightValue = linValue(eq.right, value);
    return {
      left: substituteX(eq.leftText, value),
      right: substituteX(eq.rightText, value),
      leftValue,
      rightValue,
      holds: leftValue.equals(rightValue),
    };
  }

  window.M7Rechnen = {
    Frac,
    pretty,
    parseEquation,
    solveEquation,
    termValue,
    substituteX,
    solutionSteps,
    parseUserNumber,
    probe,
    formatLin,
    isUnsimplified,
  };
})();
