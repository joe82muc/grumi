/*
 * Rechen-Pruefer fuer die Gleichungs-Uebung der Jahrgangsstufe 7
 * (LehrplanPLUS Mittelschule Bayern, Lernbereich M7 7 "Gleichungen").
 *
 * Die KI liest die Handschrift und schreibt die Zeilen ab. Dieses Modul
 * rechnet die Abschrift exakt nach (Brueche statt Kommazahlen), findet die
 * erste falsche Zeile, erkennt typische Fehlerarten und formuliert
 * Denkanstoesse, die auf den Fehler zeigen, ohne das Ergebnis zu verraten.
 * Keine Abhaengigkeiten, damit es sich einzeln testen laesst.
 */

export class MathError extends Error {}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const rest = x % y;
    x = y;
    y = rest;
  }
  return x === 0 ? 1 : x;
}

/** Exakte Bruchzahl, damit 0,1 + 0,2 wirklich 0,3 ergibt. */
export class Frac {
  readonly n: number;
  readonly d: number;

  constructor(numerator: number, denominator = 1) {
    if (
      !Number.isInteger(numerator) ||
      !Number.isInteger(denominator) ||
      denominator === 0
    ) {
      throw new MathError("Ungültige Zahl.");
    }
    const divisor = gcd(numerator, denominator);
    const sign = denominator < 0 ? -1 : 1;
    const n = (sign * numerator) / divisor;
    this.n = n === 0 ? 0 : n;
    this.d = n === 0 ? 1 : Math.abs(denominator) / divisor;
    if (!Number.isSafeInteger(this.n) || !Number.isSafeInteger(this.d)) {
      throw new MathError("Zahl zu groß.");
    }
  }

  static from(value: number): Frac {
    return new Frac(value, 1);
  }

  /** "12", "2,5" oder "0.75" (ohne Vorzeichen). */
  static parseDecimal(text: string): Frac {
    const match = /^(\d+)(?:[.,](\d{1,6}))?$/.exec(text);
    if (!match) throw new MathError(`Zahl nicht lesbar: ${text}`);
    const decimals = match[2] ?? "";
    return new Frac(Number(match[1] + decimals), 10 ** decimals.length);
  }

  /** Wie parseDecimal, aber mit Vorzeichen: "-3", "−3", "+2,5". */
  static parseSigned(text: string): Frac {
    const clean = String(text).replace(/[−–]/g, "-").replace(/\s+/g, "");
    const match = /^([+-]?)(\d+(?:[.,]\d+)?)$/.exec(clean);
    if (!match) throw new MathError(`Zahl nicht lesbar: ${text}`);
    const value = Frac.parseDecimal(match[2]);
    return match[1] === "-" ? value.neg() : value;
  }

  add(other: Frac): Frac {
    return new Frac(this.n * other.d + other.n * this.d, this.d * other.d);
  }

  sub(other: Frac): Frac {
    return this.add(other.neg());
  }

  mul(other: Frac): Frac {
    return new Frac(this.n * other.n, this.d * other.d);
  }

  div(other: Frac): Frac {
    if (other.n === 0) throw new MathError("Division durch 0.");
    return new Frac(this.n * other.d, this.d * other.n);
  }

  neg(): Frac {
    return new Frac(-this.n, this.d);
  }

  abs(): Frac {
    return new Frac(Math.abs(this.n), this.d);
  }

  equals(other: Frac): boolean {
    return this.n === other.n && this.d === other.d;
  }

  isZero(): boolean {
    return this.n === 0;
  }

  isInteger(): boolean {
    return this.d === 1;
  }

  sign(): number {
    return Math.sign(this.n);
  }

  /** Deutsche Schreibweise: −5, 2,5 oder 7/3. */
  toString(): string {
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

/** Linearer Term a·x + b. In Klasse 7 kommt x nur linear vor. */
export type Lin = { a: Frac; b: Frac };

const X: Lin = { a: ONE, b: ZERO };

function constant(b: Frac): Lin {
  return { a: ZERO, b };
}

function linAdd(p: Lin, q: Lin): Lin {
  return { a: p.a.add(q.a), b: p.b.add(q.b) };
}

function linSub(p: Lin, q: Lin): Lin {
  return { a: p.a.sub(q.a), b: p.b.sub(q.b) };
}

function linNeg(p: Lin): Lin {
  return { a: p.a.neg(), b: p.b.neg() };
}

function linScale(p: Lin, factor: Frac): Lin {
  return { a: p.a.mul(factor), b: p.b.mul(factor) };
}

function isConst(p: Lin): boolean {
  return p.a.isZero();
}

export function linEquals(p: Lin, q: Lin): boolean {
  return p.a.equals(q.a) && p.b.equals(q.b);
}

function linMul(p: Lin, q: Lin): Lin {
  if (isConst(p)) return linScale(q, p.b);
  if (isConst(q)) return linScale(p, q.b);
  throw new MathError("x · x kommt in Klasse 7 nicht vor.");
}

function linDiv(p: Lin, q: Lin): Lin {
  if (!isConst(q)) throw new MathError("Division durch einen Term mit x.");
  if (q.b.isZero()) throw new MathError("Division durch 0.");
  return linScale(p, ONE.div(q.b));
}

export function linValue(p: Lin, x: Frac): Frac {
  return p.a.mul(x).add(p.b);
}

/* ------------------------------------------------------------------ */
/* Lesen: abgeschriebene Zeile -> Rechenausdruck                        */
/* ------------------------------------------------------------------ */

/** Einheitliche Schreibweise fuer den Parser (Minus, Mal, Geteilt, Klammern). */
export function normalizeMath(text: string): string {
  return String(text ?? "")
    .replace(/[−–—‒﹣－]/g, "-")
    .replace(/[·×⋅•∙✕]/g, "*")
    .replace(/[÷:]/g, "/")
    .replace(/[[{]/g, "(")
    .replace(/[\]}]/g, ")")
    .replace(/[A-Za-zÄÖÜäöüß]+/g, (word) =>
      word.toLowerCase() === "x" ? "x" : " ",
    )
    .replace(/[€$%°"'`´✓✔✗✘]/g, "")
    .replace(/\s+/g, "")
    .replace(/\(\)/g, "");
}

/** Liest einen Ausdruck wie "3x + 15", "2(x - 1)" oder "-3 · (-2)". */
export function parseExpression(source: string): Lin {
  const text = source;
  let pos = 0;

  const isDigit = (ch: string | undefined) =>
    ch !== undefined && ch >= "0" && ch <= "9";

  function readNumber(): Frac {
    const match = /^\d+(?:[.,]\d+)?/.exec(text.slice(pos));
    if (!match) throw new MathError("Zahl erwartet.");
    pos += match[0].length;
    return Frac.parseDecimal(match[0]);
  }

  function primary(): Lin {
    const ch = text[pos];
    if (ch === "(") {
      pos += 1;
      const inner = sum();
      if (text[pos] !== ")") throw new MathError("Klammer fehlt.");
      pos += 1;
      return inner;
    }
    if (ch === "x") {
      pos += 1;
      return X;
    }
    if (isDigit(ch)) return constant(readNumber());
    throw new MathError("Unerwartetes Zeichen.");
  }

  function unary(): Lin {
    const ch = text[pos];
    if (ch === "+") {
      pos += 1;
      return unary();
    }
    if (ch === "-") {
      pos += 1;
      return linNeg(unary());
    }
    return primary();
  }

  function product(): Lin {
    let value = unary();
    for (;;) {
      const ch = text[pos];
      if (ch === "*" || ch === "/") {
        pos += 1;
        const factor = unary();
        value = ch === "*" ? linMul(value, factor) : linDiv(value, factor);
      } else if (ch === "x" || ch === "(" || isDigit(ch)) {
        // implizites Mal: 2x, 3(x + 1)
        value = linMul(value, primary());
      } else {
        return value;
      }
    }
  }

  function sum(): Lin {
    let value = product();
    for (;;) {
      const ch = text[pos];
      if (ch !== "+" && ch !== "-") return value;
      pos += 1;
      const term = product();
      value = ch === "+" ? linAdd(value, term) : linSub(value, term);
    }
  }

  if (!text) throw new MathError("Leerer Ausdruck.");
  const result = sum();
  if (pos !== text.length) throw new MathError("Ausdruck nicht ganz lesbar.");
  return result;
}

function tidy(text: string): string {
  return String(text ?? "").replace(/\s+/g, " ").trim();
}

/** Schreibweise fuer Rueckmeldungen: echtes Minus, Malpunkt, Doppelpunkt. */
function pretty(text: string): string {
  return tidy(text)
    .replace(/(\S)\s*\*\s*/g, "$1 · ")
    .replace(/\s*\/\s*/g, " : ")
    .replace(/-/g, "−");
}

/** Kommandostrich abschneiden, Beschriftungen wie "Probe:" entfernen. */
function cleanLine(raw: string): string {
  return String(raw ?? "")
    .split("|")[0]
    .replace(/^\s*[A-Za-zÄÖÜäöüß]{2,}[A-Za-zÄÖÜäöüß .]*:\s*/, "")
    .replace(/!=|=\/=/g, "≠")
    .replace(/≈/g, "=");
}

function splitAtRelations(raw: string): {
  parts: string[];
  relations: string[];
  continuation: boolean;
} {
  const parts: string[] = [];
  const relations: string[] = [];
  let current = "";
  for (const ch of cleanLine(raw)) {
    if (ch === "=" || ch === "≠") {
      parts.push(current);
      relations.push(ch);
      current = "";
    } else {
      current += ch;
    }
  }
  parts.push(current);
  let continuation = false;
  if (parts.length > 1 && !parts[0].trim()) {
    // Zeile beginnt mit "=" und setzt die Rechnung der Zeile davor fort
    parts.shift();
    relations.shift();
    continuation = true;
  }
  return { parts, relations, continuation };
}

export type Segment = { text: string; lin: Lin };

export type EqLine = {
  left: Lin;
  right: Lin;
  leftText: string;
  rightText: string;
};

export type LineInfo =
  | { kind: "leer" }
  | { kind: "unlesbar" }
  | {
      kind: "rechnung";
      segments: Segment[];
      wahr: boolean;
      fehlerPaar: [Segment, Segment] | null;
    }
  | { kind: "termkette"; segments: Segment[] }
  | (EqLine & {
      kind: "gleichung";
      segments: Segment[];
      fehlerPaar: [Segment, Segment] | null;
    });

/** Ordnet eine abgeschriebene Zeile ein: Gleichung, reine Rechnung oder Term. */
export function analyseLine(raw: string): LineInfo {
  const { parts, relations, continuation } = splitAtRelations(raw);
  if (parts.every((part) => !part.trim())) return { kind: "leer" };

  const segments: Segment[] = [];
  for (const part of parts) {
    const normalized = normalizeMath(part);
    if (!normalized) return { kind: "unlesbar" };
    try {
      segments.push({ text: tidy(part), lin: parseExpression(normalized) });
    } catch {
      return { kind: "unlesbar" };
    }
  }

  if (segments.every((segment) => isConst(segment.lin))) {
    let fehlerPaar: [Segment, Segment] | null = null;
    relations.forEach((relation, index) => {
      if (fehlerPaar) return;
      const same = segments[index].lin.b.equals(segments[index + 1].lin.b);
      const holds = relation === "≠" ? !same : same;
      if (!holds) fehlerPaar = [segments[index], segments[index + 1]];
    });
    return { kind: "rechnung", segments, wahr: fehlerPaar === null, fehlerPaar };
  }

  if (segments.length === 1 || continuation) return { kind: "termkette", segments };
  if (relations.includes("≠")) return { kind: "unlesbar" };

  const unequal: number[] = [];
  relations.forEach((_relation, index) => {
    if (!linEquals(segments[index].lin, segments[index + 1].lin)) unequal.push(index);
  });

  if (unequal.length === 0) return { kind: "termkette", segments };

  const last = segments.length - 1;
  if (unequal.length === 1) {
    const p = unequal[0];
    return {
      kind: "gleichung",
      left: segments[0].lin,
      right: segments[last].lin,
      leftText: segments[p].text,
      rightText: segments[p + 1].text,
      segments,
      fehlerPaar: null,
    };
  }

  // Eine Gleichung plus ein Rechenfehler in der Kette, z. B. x = 21 : 3 = 8
  const mixed = unequal.find(
    (index) => isConst(segments[index].lin) !== isConst(segments[index + 1].lin),
  );
  if (mixed === undefined) return { kind: "unlesbar" };
  const errorIndex = unequal.find((index) => index !== mixed) as number;
  const xOnLeft = !isConst(segments[mixed].lin);
  const xSegment = xOnLeft ? segments[mixed] : segments[mixed + 1];
  const constSegment = xOnLeft
    ? isConst(segments[last].lin)
      ? segments[last]
      : segments[mixed + 1]
    : isConst(segments[0].lin)
      ? segments[0]
      : segments[mixed];
  const [leftSegment, rightSegment] = xOnLeft
    ? [xSegment, constSegment]
    : [constSegment, xSegment];
  return {
    kind: "gleichung",
    left: leftSegment.lin,
    right: rightSegment.lin,
    leftText: leftSegment.text,
    rightText: rightSegment.text,
    segments,
    fehlerPaar: [segments[errorIndex], segments[errorIndex + 1]],
  };
}

export type Solution =
  | { kind: "eindeutig"; x: Frac }
  | { kind: "alle" }
  | { kind: "keine" };

export function solve(eq: EqLine): Solution {
  const a = eq.left.a.sub(eq.right.a);
  const b = eq.right.b.sub(eq.left.b);
  if (a.isZero()) return b.isZero() ? { kind: "alle" } : { kind: "keine" };
  return { kind: "eindeutig", x: b.div(a) };
}

/** Steht x allein (x = 7 oder 7 = x)? Dann den Wert liefern. */
export function isolatedValue(eq: EqLine): Frac | null {
  if (linEquals(eq.left, X) && isConst(eq.right)) return eq.right.b;
  if (linEquals(eq.right, X) && isConst(eq.left)) return eq.left.b;
  return null;
}

/* ------------------------------------------------------------------ */
/* Schreiben: Terme, Gleichungen und Umformungen fuer Rueckmeldungen    */
/* ------------------------------------------------------------------ */

function coefficientText(a: Frac): string {
  if (a.equals(ONE)) return "";
  if (a.equals(ONE.neg())) return "−";
  const text = a.toString();
  return text.includes("/") ? `(${text})` : text;
}

export function formatLin(p: Lin): string {
  const parts: string[] = [];
  if (!p.a.isZero()) parts.push(`${coefficientText(p.a)}x`);
  if (parts.length === 0) return p.b.toString();
  if (!p.b.isZero()) {
    parts.push(p.b.sign() < 0 ? `− ${p.b.abs()}` : `+ ${p.b}`);
  }
  return parts.join(" ");
}

export function formatEq(eq: { left: Lin; right: Lin }): string {
  return `${formatLin(eq.left)} = ${formatLin(eq.right)}`;
}

function wrapNegative(value: Frac): string {
  return value.sign() < 0 ? `(${value})` : value.toString();
}

export type Op =
  | { kind: "plus"; value: Lin }
  | { kind: "mal"; factor: Frac }
  | { kind: "geteilt"; divisor: Frac };

export function applyOp(op: Op, p: Lin): Lin {
  if (op.kind === "plus") return linAdd(p, op.value);
  if (op.kind === "mal") return linScale(p, op.factor);
  return linScale(p, ONE.div(op.divisor));
}

function applyOpToEq(op: Op, eq: EqLine): EqLine {
  const left = applyOp(op, eq.left);
  const right = applyOp(op, eq.right);
  return { left, right, leftText: formatLin(left), rightText: formatLin(right) };
}

function invertOp(op: Op): Op {
  if (op.kind === "plus") return { kind: "plus", value: linNeg(op.value) };
  if (op.kind === "mal") return { kind: "geteilt", divisor: op.factor };
  return { kind: "mal", factor: op.divisor };
}

/** "− 15", "+ 2x", ": (−3)", "· 2" */
export function formatOp(op: Op): string {
  if (op.kind === "mal") return `· ${wrapNegative(op.factor)}`;
  if (op.kind === "geteilt") return `: ${wrapNegative(op.divisor)}`;
  const value = op.value;
  if (!value.a.isZero()) {
    const magnitude = coefficientText(value.a.abs());
    return `${value.a.sign() < 0 ? "−" : "+"} ${magnitude}x`;
  }
  return `${value.b.sign() < 0 ? "−" : "+"} ${value.b.abs()}`;
}

/** Liest den Kommandostrich, z. B. "-15", ":3", "· 2", ": (-3)", "-2x". */
export function parseOp(raw: string): Op | null {
  const text = normalizeMath(String(raw ?? "").replace(/\|/g, ""));
  if (!text) return null;
  let match = /^([+-])\(?(\d+(?:[.,]\d+)?)?(x)?\)?$/.exec(text);
  if (match && (match[2] || match[3])) {
    const size = match[2] ? Frac.parseDecimal(match[2]) : ONE;
    const signed = match[1] === "-" ? size.neg() : size;
    return { kind: "plus", value: match[3] ? { a: signed, b: ZERO } : constant(signed) };
  }
  match = /^([*/])\(?([+-]?\d+(?:[.,]\d+)?)\)?$/.exec(text);
  if (match) {
    const value = Frac.parseSigned(match[2]);
    if (value.isZero()) return null;
    return match[1] === "*"
      ? { kind: "mal", factor: value }
      : { kind: "geteilt", divisor: value };
  }
  return null;
}

function sameOp(a: Op | null, b: Op | null): boolean {
  if (!a || !b || a.kind !== b.kind) return false;
  if (a.kind === "plus" && b.kind === "plus") return linEquals(a.value, b.value);
  if (a.kind === "mal" && b.kind === "mal") return a.factor.equals(b.factor);
  if (a.kind === "geteilt" && b.kind === "geteilt") return a.divisor.equals(b.divisor);
  return false;
}

/** Faktor 1/3 wird als ": 3" geschrieben, 2 als "· 2". */
function factorOp(factor: Frac): Op {
  const inverse = ONE.div(factor);
  if (!factor.isInteger() && inverse.isInteger()) {
    return { kind: "geteilt", divisor: inverse };
  }
  return { kind: "mal", factor };
}

/* ------------------------------------------------------------------ */
/* Terme zerlegen (fuer "zusammenfassen")                              */
/* ------------------------------------------------------------------ */

function additiveTerms(sideText: string): string[] {
  const text = normalizeMath(sideText);
  const terms: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of text) {
    if (ch === "(") depth += 1;
    if (ch === ")") depth -= 1;
    const split =
      depth === 0 &&
      (ch === "+" || ch === "-") &&
      current !== "" &&
      !/[*/]$/.test(current);
    if (split) {
      terms.push(current);
      current = ch;
    } else {
      current += ch;
    }
  }
  if (current) terms.push(current);
  return terms;
}

function isUnsimplified(sideText: string): boolean {
  const terms = additiveTerms(sideText);
  const xTerms = terms.filter((term) => term.includes("x")).length;
  return xTerms > 1 || terms.length - xTerms > 1;
}

function prettyTerm(term: string): string {
  return term
    .replace(/\*/g, " · ")
    .replace(/\//g, " : ")
    .replace(/-/g, "−")
    .replace(/\s+/g, " ")
    .trim();
}

function joinTerms(terms: string[]): string {
  return terms
    .map((term, index) => {
      const pretty = prettyTerm(term);
      if (index === 0) return pretty.replace(/^\+/, "");
      if (pretty.startsWith("−")) return `− ${pretty.slice(1).trim()}`;
      return `+ ${pretty.replace(/^\+/, "").trim()}`;
    })
    .join(" ");
}

/* ------------------------------------------------------------------ */
/* Fehler erkennen und Denkanstoesse formulieren                        */
/* ------------------------------------------------------------------ */

export type ErrorKind =
  | "keiner"
  | "abschreibfehler"
  | "rechenfehler"
  | "vorzeichen"
  | "nur-eine-seite"
  | "gegenteil"
  | "nur-ein-teil"
  | "zusammenfassen"
  | "punkt-vor-strich"
  | "einsetzen"
  | "gleichung-aufstellen"
  | "unleserlich"
  | "anderes";

export type Diagnosis = {
  kind: ErrorKind;
  /** Denkanstoss ohne neue Zahlen aus der Loesung */
  hint: string;
  /** Richtige Zeile, wird erst auf Knopfdruck gezeigt */
  fix: string;
  /** Umformung, die zur richtigen Zeile fuehrt (fuer den Kommandostrich) */
  fixOp: string;
};

type Side = "left" | "right";

type SideNames = Record<Side, string>;

const NORMAL_NAMES: SideNames = { left: "linken", right: "rechten" };
const SWAPPED_NAMES: SideNames = { left: "rechten", right: "linken" };

function otherSide(side: Side): Side {
  return side === "left" ? "right" : "left";
}

function sideOf(eq: EqLine, side: Side): Lin {
  return side === "left" ? eq.left : eq.right;
}

function sideTextOf(eq: EqLine, side: Side): string {
  return side === "left" ? eq.leftText : eq.rightText;
}

/** Dreht eine Gleichung so, dass x links steht (15 = x + 8 -> x + 8 = 15). */
function orient(eq: EqLine): { eq: EqLine; names: SideNames } {
  if (isConst(eq.left) && !isConst(eq.right)) {
    return {
      eq: { left: eq.right, right: eq.left, leftText: eq.rightText, rightText: eq.leftText },
      names: SWAPPED_NAMES,
    };
  }
  return { eq, names: NORMAL_NAMES };
}

function xOnlyLeft(eq: EqLine): boolean {
  return !isConst(eq.left) && isConst(eq.right);
}

export type NextStep = {
  kind: "zusammenfassen" | "plus" | "teilen" | "x-sammeln" | "fertig";
  hint: string;
  fix: string;
  fixOp: string;
};

/** Der naechste sinnvolle Schritt, als Frage formuliert (ohne Ergebnis). */
export function nextStep(original: EqLine): NextStep {
  const { eq } = orient(original);
  if (isUnsimplified(eq.leftText) || isUnsimplified(eq.rightText)) {
    return {
      kind: "zusammenfassen",
      hint: "Fasse zuerst zusammen: alle x zusammen und alle Zahlen ohne x zusammen.",
      fix: formatEq(eq),
      fixOp: "",
    };
  }
  if (!isConst(eq.left) && !isConst(eq.right)) {
    const op: Op = { kind: "plus", value: { a: eq.right.a.neg(), b: ZERO } };
    return {
      kind: "x-sammeln",
      hint: `Bringe alle x auf eine Seite. Rechne dazu auf beiden Seiten ${formatOp(op)}.`,
      fix: formatEq(applyOpToEq(op, eq)),
      fixOp: formatOp(op),
    };
  }
  if (!eq.left.b.isZero()) {
    const op: Op = { kind: "plus", value: constant(eq.left.b.neg()) };
    const signed = eq.left.b.sign() < 0 ? `− ${eq.left.b.abs()}` : `+ ${eq.left.b}`;
    return {
      kind: "plus",
      hint: `Jetzt soll ${signed} weg, damit x allein steht. Was ist das Gegenteil von ${signed}? Rechne es auf beiden Seiten.`,
      fix: formatEq(applyOpToEq(op, eq)),
      fixOp: formatOp(op),
    };
  }
  if (!eq.left.a.equals(ONE)) {
    const op: Op = { kind: "geteilt", divisor: eq.left.a };
    return {
      kind: "teilen",
      hint: `Jetzt steht ${formatLin(eq.left)} da, also ${wrapNegative(eq.left.a)} · x. Was ist das Gegenteil von · ${wrapNegative(eq.left.a)}? Rechne es auf beiden Seiten.`,
      fix: formatEq(applyOpToEq(op, eq)),
      fixOp: formatOp(op),
    };
  }
  return { kind: "fertig", hint: "", fix: "", fixOp: "" };
}

function leftToRight(text: string): Frac | null {
  const s = normalizeMath(text);
  if (!s || /[()x]/.test(s)) return null;
  const tokens = s.match(/\d+(?:[.,]\d+)?|[+\-*/]/g);
  if (!tokens || tokens.join("") !== s) return null;
  try {
    let index = 0;
    let sign = ONE;
    if (tokens[0] === "-" || tokens[0] === "+") {
      sign = tokens[0] === "-" ? ONE.neg() : ONE;
      index = 1;
    }
    if (!/\d/.test(tokens[index] ?? "")) return null;
    let value = Frac.parseDecimal(tokens[index]).mul(sign);
    index += 1;
    while (index < tokens.length) {
      const op = tokens[index];
      const number = tokens[index + 1];
      if (!number || !/\d/.test(number)) return null;
      const next = Frac.parseDecimal(number);
      if (op === "+") value = value.add(next);
      else if (op === "-") value = value.sub(next);
      else if (op === "*") value = value.mul(next);
      else value = value.div(next);
      index += 2;
    }
    return value;
  } catch {
    return null;
  }
}

function hasOperator(text: string): boolean {
  return /[+\-*/]/.test(normalizeMath(text).replace(/^[+-]/, ""));
}

function calculationDiagnosis(pair: [Segment, Segment]): Diagnosis {
  const [a, b] = pair;
  const shown = pretty(a.text);
  if (isConst(a.lin) && isConst(b.lin)) {
    const ltr = hasOperator(a.text) ? leftToRight(a.text) : null;
    if (ltr && ltr.equals(b.lin.b) && !ltr.equals(a.lin.b)) {
      return {
        kind: "punkt-vor-strich",
        hint: `Denk an Punkt vor Strich: Rechne bei ${shown} zuerst · und :, danach + und −.`,
        fix: `${shown} = ${a.lin.b}`,
        fixOp: "",
      };
    }
    return {
      kind: "rechenfehler",
      hint: `Rechne ${shown} noch einmal nach.`,
      fix: `${shown} = ${a.lin.b}`,
      fixOp: "",
    };
  }
  return {
    kind: "zusammenfassen",
    hint: `Prüfe das Zusammenfassen: Ist ${shown} wirklich ${pretty(b.text)}?`,
    fix: `${shown} = ${formatLin(a.lin)}`,
    fixOp: "",
  };
}

/** Erste Zeile weicht von der Aufgabe ab, ohne erkennbaren Rechenschritt. */
function looksLikeCopyError(task: EqLine, cur: EqLine): boolean {
  const progress =
    (!task.left.b.isZero() && cur.left.b.isZero() && cur.left.a.equals(task.left.a)) ||
    (task.left.b.isZero() && cur.left.a.equals(ONE) && !task.left.a.equals(ONE)) ||
    (isUnsimplified(task.leftText) && !isUnsimplified(cur.leftText));
  if (progress) return false;
  return (
    linEquals(cur.right, task.right) ||
    linEquals(cur.left, task.left) ||
    cur.left.a.equals(task.left.a)
  );
}

function inferOp(prev: EqLine, cur: EqLine): Op | null {
  const p = prev.left;
  const c = cur.left;
  if (c.a.isZero()) return null;
  if (p.a.equals(c.a) && !p.b.equals(c.b)) {
    return { kind: "plus", value: constant(c.b.sub(p.b)) };
  }
  if (!p.a.equals(c.a)) {
    const factor = c.a.div(p.a);
    const constantFits = p.b.isZero() ? c.b.isZero() : c.b.equals(p.b.mul(factor));
    if (constantFits) return factorOp(factor);
  }
  return null;
}

function diagnoseWithOp(
  prev: EqLine,
  cur: EqLine,
  op: Op,
  names: SideNames,
): Diagnosis | null {
  const expected = applyOpToEq(op, prev);
  const leftOk = linEquals(cur.left, expected.left);
  const rightOk = linEquals(cur.right, expected.right);
  if (leftOk === rightOk) return null;

  const wrong: Side = leftOk ? "right" : "left";
  const okSide = otherSide(wrong);
  const before = sideOf(prev, wrong);
  const now = sideOf(cur, wrong);
  const should = sideOf(expected, wrong);
  const opText = formatOp(op);
  const fix = formatEq(expected);
  const base = { fix, fixOp: opText };

  // Beim Teilen nur das x geteilt: 3x + 15 | :3 -> x + 15
  if (
    op.kind !== "plus" &&
    !isConst(before) &&
    !before.b.isZero() &&
    now.a.equals(should.a) &&
    now.b.equals(before.b)
  ) {
    const removeOp: Op = { kind: "plus", value: constant(before.b.neg()) };
    return {
      kind: "nur-ein-teil",
      hint: `Wenn du ${opText} rechnest, musst du jeden Teil ändern – auch die ${before.b.abs()}. Leichter geht es so: Rechne zuerst ${formatOp(removeOp)}, dann ${opText}.`,
      fix: formatEq(applyOpToEq(removeOp, prev)),
      fixOp: formatOp(removeOp),
    };
  }

  if (linEquals(now, before)) {
    return {
      kind: "nur-eine-seite",
      hint: `Du hast nur auf der ${names[okSide]} Seite ${opText} gerechnet. Eine Gleichung ist wie eine Waage: Rechne auf beiden Seiten ${opText}.`,
      ...base,
    };
  }

  const inverse = invertOp(op);
  if (linEquals(now, applyOp(inverse, before))) {
    return {
      kind: "gegenteil",
      hint: `Auf der ${names[okSide]} Seite hast du ${opText} gerechnet, auf der ${names[wrong]} Seite aber ${formatOp(inverse)}. Auf beiden Seiten muss dasselbe stehen.`,
      ...base,
    };
  }

  if (op.kind === "geteilt" && linEquals(now, linAdd(before, constant(op.divisor.neg())))) {
    const d = wrapNegative(op.divisor);
    return {
      kind: "gegenteil",
      hint: `${formatLin({ a: op.divisor, b: ZERO })} bedeutet ${d} · x. Das Gegenteil von · ${d} ist : ${d}. Teile deshalb auch auf der ${names[wrong]} Seite durch ${d}.`,
      ...base,
    };
  }

  const sameSize =
    isConst(now) && isConst(should) && now.b.abs().equals(should.b.abs());
  if (linEquals(now, linNeg(should)) || sameSize) {
    const negativeFactor =
      (op.kind === "geteilt" && op.divisor.sign() < 0) ||
      (op.kind === "mal" && op.factor.sign() < 0);
    return {
      kind: "vorzeichen",
      hint: negativeFactor
        ? `Achte auf das Vorzeichen: Du rechnest ${opText}. Plus durch Minus ergibt Minus, Minus durch Minus ergibt Plus.`
        : `Schau dir das Vorzeichen auf der ${names[wrong]} Seite genau an. Rechne ${formatLin(before)} ${opText} noch einmal.`,
      ...base,
    };
  }

  const beforeText =
    op.kind !== "plus" && !before.a.isZero() && !before.b.isZero()
      ? `(${formatLin(before)})`
      : formatLin(before);
  return {
    kind: "rechenfehler",
    hint: `Rechne auf der ${names[wrong]} Seite noch einmal nach: ${beforeText} ${opText} = ?`,
    ...base,
  };
}

/**
 * Zusammenfassen: Eine Seite war unvereinfacht, die andere blieb gleich.
 * strict: nur wenn die Seite danach weniger Glieder hat (klar zusammengefasst).
 */
function diagnoseSimplify(prev: EqLine, cur: EqLine, strict: boolean): Diagnosis | null {
  for (const side of ["left", "right"] as Side[]) {
    const other = otherSide(side);
    const text = sideTextOf(prev, side);
    if (
      !isUnsimplified(text) ||
      !linEquals(sideOf(cur, other), sideOf(prev, other)) ||
      linEquals(sideOf(cur, side), sideOf(prev, side)) ||
      (strict &&
        additiveTerms(sideTextOf(cur, side)).length >= additiveTerms(text).length)
    ) {
      continue;
    }
    const terms = additiveTerms(text);
    const xTerms = terms.filter((term) => term.includes("x"));
    const numberTerms = terms.filter((term) => !term.includes("x"));
    const wrongX = !sideOf(cur, side).a.equals(sideOf(prev, side).a);
    let hint = "Prüfe das Zusammenfassen: Fasse nur x mit x und Zahlen mit Zahlen zusammen.";
    if (wrongX && xTerms.length > 1) {
      hint = `Prüfe das Zusammenfassen: Wie viel ist ${joinTerms(xTerms)}?`;
    } else if (!wrongX && numberTerms.length > 1) {
      hint = `Prüfe das Zusammenfassen: Wie viel ist ${joinTerms(numberTerms)}?`;
    }
    return { kind: "zusammenfassen", hint, fix: formatEq(prev), fixOp: "" };
  }
  return null;
}

/** Nur einen Teil geteilt, ohne Kommandostrich: 3x + 15 = 36 -> x + 15 = 12 */
function diagnosePartialDivision(prev: EqLine, cur: EqLine): Diagnosis | null {
  const p = prev.left;
  const c = cur.left;
  if (p.b.isZero() || !c.b.equals(p.b) || c.a.isZero() || c.a.equals(p.a)) return null;
  const factor = c.a.div(p.a);
  if (!linEquals(cur.right, linScale(prev.right, factor))) return null;
  const op = factorOp(factor);
  const removeOp: Op = { kind: "plus", value: constant(p.b.neg()) };
  return {
    kind: "nur-ein-teil",
    hint: `Wenn du ${formatOp(op)} rechnest, musst du jeden Teil ändern – auch die ${p.b.abs()}. Leichter geht es so: Rechne zuerst ${formatOp(removeOp)}, dann ${formatOp(op)}.`,
    fix: formatEq(applyOpToEq(removeOp, prev)),
    fixOp: formatOp(removeOp),
  };
}

/**
 * Warum ist die Zeile "cur" nach "prev" falsch? opText ist der Kommandostrich
 * hinter "prev" (kann fehlen). isFirst: "prev" ist die Aufgabe selbst.
 */
export function diagnoseStep(
  prevRaw: EqLine,
  curRaw: EqLine & { fehlerPaar?: [Segment, Segment] | null },
  opText: string,
  isFirst: boolean,
): Diagnosis {
  if (curRaw.fehlerPaar) return calculationDiagnosis(curRaw.fehlerPaar);

  const prev = orient(prevRaw).eq;
  const { eq: cur, names } = orient(curRaw);

  if (xOnlyLeft(prev) && xOnlyLeft(cur)) {
    if (isFirst && looksLikeCopyError(prev, cur)) {
      return {
        kind: "abschreibfehler",
        hint: "Vergleiche deine erste Zeile Zahl für Zahl mit der Aufgabe. Beim Abschreiben hat sich etwas verändert.",
        fix: formatEq(prevRaw),
        fixOp: "",
      };
    }
  }

  const simplified = diagnoseSimplify(prev, cur, true);
  if (simplified) return simplified;

  const candidates: Op[] = [];
  const given = parseOp(opText);
  if (given) candidates.push(given);
  if (xOnlyLeft(prev) && !isConst(cur.left)) {
    const inferred = inferOp(prev, cur);
    if (inferred && !sameOp(inferred, given)) candidates.push(inferred);
  }
  for (const op of candidates) {
    const diagnosis = diagnoseWithOp(prev, cur, op, names);
    if (diagnosis) return diagnosis;
  }

  if (xOnlyLeft(prev)) {
    const partial = diagnosePartialDivision(prev, cur);
    if (partial) return partial;
  }

  const loosely = diagnoseSimplify(prev, cur, false);
  if (loosely) return loosely;

  const step = nextStep(prevRaw);
  return {
    kind: "anderes",
    hint: "Vergleiche diese Zeile genau mit der Zeile davor. Hast du auf beiden Seiten dasselbe gerechnet?",
    fix: step.fix,
    fixOp: step.fixOp,
  };
}

/* ------------------------------------------------------------------ */
/* Ganze Rechenwege pruefen                                             */
/* ------------------------------------------------------------------ */

export type LineStatus = "ok" | "fehler" | "folge" | "unklar";

export type WorkCheck = {
  /** Mindestens eine Zeile wurde nachgerechnet. */
  verified: boolean;
  statuses: LineStatus[];
  /** Index der ersten falschen Zeile, -1 wenn keine. */
  errorIndex: number;
  diagnosis: Diagnosis | null;
  /** Ergebnis steht richtig da (x = ... bzw. Termwert). */
  finished: boolean;
  /** Rechenweg sichtbar, nicht nur das Ergebnis. */
  showsWork: boolean;
  /** Richtiger Wert (x bzw. Termwert), zu dem der Weg passen muss. */
  reference: Frac | null;
  /** Ergebnis des Kindes aus der letzten Zeile. */
  studentValue: Frac | null;
  /** Naechster Schritt, wenn alles richtig, aber noch nicht fertig. */
  next: NextStep | null;
};

export type SetupKind = "raetsel" | "sachaufgabe" | "profi";

const SETUP_HINTS: Record<SetupKind, string> = {
  raetsel:
    "Prüfe deine Gleichung am Text. Übersetze Satz für Satz: Die gesuchte Zahl ist x. Wörter wie „dazu“ oder „mal“ werden Rechenzeichen. „Ich erhalte“ wird zu =.",
  sachaufgabe:
    "Prüfe deine Gleichung am Text: Was bedeutet x? Was kommt fest dazu? Was ist das Ganze?",
  profi:
    "Prüfe deine Gleichung: Stehen alle Mengen als Term mit x drin? Ergeben sie zusammen die Gesamtzahl?",
};

export function checkEquationWork(input: {
  /** Gleichung der Aufgabe bzw. Modellgleichung einer Sachaufgabe */
  task: string;
  /** Sachaufgaben: alle x-Werte, die zu einer sinnvollen Festlegung passen */
  allowedX?: Frac[];
  setup?: SetupKind;
  lines: { text: string; op: string }[];
}): WorkCheck {
  const statuses: LineStatus[] = input.lines.map(() => "unklar");
  const taskInfo = analyseLine(input.task);
  const taskEq = taskInfo.kind === "gleichung" ? taskInfo : null;
  const taskSolution = taskEq ? solve(taskEq) : null;
  const xStar = taskSolution?.kind === "eindeutig" ? taskSolution.x : null;
  const wordProblem = Boolean(input.setup);
  const allowed = input.allowedX?.length ? input.allowedX : xStar ? [xStar] : [];

  let reference: Frac | null = wordProblem ? null : xStar;
  let prev: EqLine | null = wordProblem ? null : taskEq;
  let prevOp = "";
  let prevSolution: Solution | null = null;
  let errorIndex = -1;
  let diagnosis: Diagnosis | null = null;
  let verified = false;
  let equationLines = 0;
  let chainWork = false;
  let lastEq: EqLine | null = null;
  let firstEquation = true;
  let solvedValue: Frac | null = null;

  input.lines.forEach((line, index) => {
    const info = analyseLine(line.text);
    if (info.kind === "leer" || info.kind === "unlesbar") return;

    if (info.kind === "termkette") {
      statuses[index] = errorIndex < 0 ? "ok" : "folge";
      return;
    }

    if (info.kind === "rechnung") {
      verified = true;
      if (info.wahr) {
        statuses[index] = errorIndex < 0 ? "ok" : "folge";
        if (info.segments.length > 1) chainWork = true;
      } else {
        statuses[index] = "fehler";
        if (errorIndex < 0 && info.fehlerPaar) {
          errorIndex = index;
          diagnosis = calculationDiagnosis(info.fehlerPaar);
        }
      }
      return;
    }

    verified = true;
    equationLines += 1;
    if (info.segments.length > 2) chainWork = true;
    const solution = solve(info);

    if (errorIndex < 0) {
      let fits: boolean;
      if (reference === null) {
        fits =
          !info.fehlerPaar &&
          solution.kind === "eindeutig" &&
          allowed.some((value) => value.equals(solution.x));
        if (fits && solution.kind === "eindeutig") reference = solution.x;
      } else {
        const target = reference;
        fits =
          !info.fehlerPaar &&
          solution.kind === "eindeutig" &&
          solution.x.equals(target);
      }

      if (fits) {
        statuses[index] = "ok";
        const isolated = isolatedValue(info);
        if (isolated && !solvedValue) solvedValue = isolated;
      } else {
        statuses[index] = "fehler";
        errorIndex = index;
        if (prev === null) {
          diagnosis = info.fehlerPaar
            ? calculationDiagnosis(info.fehlerPaar)
            : {
                kind: "gleichung-aufstellen",
                hint: SETUP_HINTS[input.setup ?? "sachaufgabe"],
                fix: taskEq ? pretty(input.task) : "",
                fixOp: "",
              };
        } else {
          diagnosis = diagnoseStep(prev, info, prevOp, firstEquation && !wordProblem);
        }
      }
    } else {
      const previous = prevSolution;
      const consistent =
        !info.fehlerPaar &&
        solution.kind === "eindeutig" &&
        previous?.kind === "eindeutig" &&
        solution.x.equals(previous.x);
      statuses[index] = consistent
        ? "folge"
        : previous?.kind === "eindeutig"
          ? "fehler"
          : "unklar";
    }

    firstEquation = false;
    prev = info;
    prevOp = line.op;
    prevSolution = solution;
    lastEq = info;
  });

  const finalEq = lastEq as EqLine | null;
  // Ergebnis: erste richtige Zeile "x = ...", auch wenn danach noch Werte folgen
  const studentValue = solvedValue ?? (finalEq ? isolatedValue(finalEq) : null);
  const finished =
    errorIndex < 0 &&
    studentValue !== null &&
    reference !== null &&
    studentValue.equals(reference);
  const showsWork = equationLines >= 2 || chainWork;

  let next: NextStep | null = null;
  if (errorIndex < 0 && !finished) {
    const base = finalEq ?? (wordProblem ? null : taskEq);
    if (base) next = nextStep(base);
  }

  return {
    verified,
    statuses,
    errorIndex,
    diagnosis,
    finished,
    showsWork,
    reference: wordProblem ? reference ?? (allowed.length === 1 ? allowed[0] : null) : xStar,
    studentValue,
    next,
  };
}

/** Setzt eine Zahl fuer x in einen Term ein: "3x + 1", 4 -> "3 · 4 + 1". */
export function substituteX(term: string, value: Frac): string {
  const valueText = value.toString();
  const wrapped = value.sign() < 0 ? `(${valueText})` : valueText;
  let result = "";
  for (const ch of String(term ?? "")) {
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

function firstCoefficient(term: string): string | null {
  const match = /(\d+(?:[.,]\d+)?)\s*x/i.exec(term);
  return match ? match[1] : null;
}

/** Prueft "Setze x = 4 in 3x + 1 ein" Schritt fuer Schritt. */
export function checkTermWork(input: {
  term: string;
  xValue: Frac;
  lines: string[];
}): WorkCheck {
  const statuses: LineStatus[] = input.lines.map(() => "unklar");
  const termLin = parseExpression(normalizeMath(input.term));
  const expected = linValue(termLin, input.xValue);
  const substitution = substituteX(input.term, input.xValue);
  const fix = pretty(`${substitution} = ${expected}`);

  type Part = { line: number; text: string; value: Frac; hasX: boolean; hasOp: boolean };
  const parts: Part[] = [];

  input.lines.forEach((raw, lineIndex) => {
    const { parts: pieces } = splitAtRelations(raw);
    const parsed: { text: string; lin: Lin; normalized: string }[] = [];
    for (const piece of pieces) {
      const normalized = normalizeMath(piece);
      if (!normalized) continue;
      try {
        parsed.push({ text: tidy(piece), lin: parseExpression(normalized), normalized });
      } catch {
        return;
      }
    }
    if (parsed.length === 0) return;
    // Festlegung "x = 4" ueberspringen
    if (
      parsed.length === 2 &&
      linEquals(parsed[0].lin, X) &&
      isConst(parsed[1].lin) &&
      parsed[1].lin.b.equals(input.xValue)
    ) {
      statuses[lineIndex] = "ok";
      return;
    }
    for (const item of parsed) {
      parts.push({
        line: lineIndex,
        text: item.text,
        value: linValue(item.lin, input.xValue),
        hasX: !isConst(item.lin),
        hasOp: hasOperator(item.normalized),
      });
    }
  });

  let errorPart = -1;
  let diagnosis: Diagnosis | null = null;
  for (let index = 0; index < parts.length; index += 1) {
    if (parts[index].value.equals(expected)) continue;
    errorPart = index;
    const part = parts[index];
    const previous = parts
      .slice(0, index)
      .reverse()
      .find((candidate) => !candidate.hasX);
    const coefficient = firstCoefficient(input.term);
    const xText = input.xValue.toString();

    if (previous) {
      const ltr = previous.hasOp ? leftToRight(previous.text) : null;
      diagnosis =
        ltr && ltr.equals(part.value) && !ltr.equals(previous.value)
          ? {
              kind: "punkt-vor-strich",
              hint: `Denk an Punkt vor Strich: Rechne bei ${pretty(previous.text)} zuerst · und :, danach + und −.`,
              fix,
              fixOp: "",
            }
          : {
              kind: "rechenfehler",
              hint: `Rechne ${pretty(previous.text)} noch einmal nach.`,
              fix,
              fixOp: "",
            };
    } else if (part.hasX) {
      diagnosis = {
        kind: "abschreibfehler",
        hint: "Vergleiche den Term genau mit der Aufgabe.",
        fix,
        fixOp: "",
      };
    } else {
      let concatenated: Frac | null = null;
      if (coefficient && input.xValue.sign() >= 0 && input.xValue.isInteger()) {
        try {
          const glued = input.term.replace(/(\d)\s*x/gi, `$1${input.xValue.toString()}`);
          concatenated = linValue(parseExpression(normalizeMath(glued)), input.xValue);
        } catch {
          concatenated = null;
        }
      }
      let signLost = false;
      if (input.xValue.sign() < 0) {
        signLost = linValue(termLin, input.xValue.neg()).equals(part.value);
      }
      if (concatenated && concatenated.equals(part.value)) {
        diagnosis = {
          kind: "einsetzen",
          hint: `${coefficient}x bedeutet ${coefficient} · x. Zwischen ${coefficient} und der eingesetzten Zahl gehört ein Malpunkt.`,
          fix,
          fixOp: "",
        };
      } else if (signLost) {
        diagnosis = {
          kind: "vorzeichen",
          hint: `Setze ${xText} mit dem Minus ein. Schreibe die Zahl in Klammern: (${xText}).`,
          fix,
          fixOp: "",
        };
      } else {
        diagnosis = {
          kind: "einsetzen",
          hint: coefficient
            ? `Setze für x genau die ${xText} ein. Denk dran: ${coefficient}x bedeutet ${coefficient} · x.`
            : `Setze für x genau die ${xText} ein.`,
          fix,
          fixOp: "",
        };
      }
    }
    break;
  }

  const errorLine = errorPart >= 0 ? parts[errorPart].line : -1;
  parts.forEach((part, index) => {
    if (errorPart < 0 || index < errorPart) {
      if (part.line !== errorLine) statuses[part.line] = "ok";
    } else if (index === errorPart) {
      statuses[part.line] = "fehler";
    } else if (part.line !== errorLine) {
      const consistent = part.value.equals(parts[index - 1].value);
      if (statuses[part.line] !== "fehler") {
        statuses[part.line] = consistent ? "folge" : "fehler";
      }
    }
  });

  const last = parts[parts.length - 1];
  const showsWork = parts.some((part) => !part.hasX && part.hasOp);
  const finished =
    errorPart < 0 &&
    Boolean(last) &&
    !last.hasX &&
    !last.hasOp &&
    last.value.equals(expected) &&
    showsWork;

  let next: NextStep | null = null;
  if (errorPart < 0 && !finished) {
    next = !showsWork
      ? {
          kind: "fertig",
          hint: `Schreibe auf, wie du rechnest: Ersetze zuerst x durch ${input.xValue}.`,
          fix,
          fixOp: "",
        }
      : {
          kind: "fertig",
          hint: "Rechne weiter, bis nur noch eine Zahl dasteht.",
          fix,
          fixOp: "",
        };
  }

  return {
    verified: parts.length > 0,
    statuses,
    errorIndex: errorLine,
    diagnosis,
    finished,
    showsWork,
    reference: expected,
    studentValue: last && !last.hasX ? last.value : null,
    next,
  };
}

export type ProbeStatus = "keine" | "richtig" | "falsch" | "zeigt-fehler" | "unklar";

/** Prueft die Probe-Zeilen (reine Rechnungen). */
export function checkProbe(lines: string[], resultCorrect: boolean): ProbeStatus {
  const infos = lines.map((line) => analyseLine(line)).filter((info) => info.kind !== "leer");
  if (infos.length === 0) return "keine";
  const calculations = infos.filter(
    (info): info is Extract<LineInfo, { kind: "rechnung" }> => info.kind === "rechnung",
  );
  if (calculations.length === 0) return "unklar";
  if (calculations.some((info) => !info.wahr)) return "falsch";
  const noticed = lines.some((line) => /≠|!=|=\/=/.test(line));
  if (resultCorrect) return noticed ? "unklar" : "richtig";
  return noticed ? "zeigt-fehler" : "unklar";
}

/* ------------------------------------------------------------------ */
/* Schutz: Denkanstoesse duerfen das Ergebnis nicht verraten            */
/* ------------------------------------------------------------------ */

export function numbersIn(text: string): Frac[] {
  const numbers: Frac[] = [];
  for (const match of String(text ?? "").matchAll(/\d+(?:[.,]\d+)?/g)) {
    try {
      numbers.push(Frac.parseDecimal(match[0]));
    } catch {
      // zu lange Dezimalzahl: ignorieren
    }
  }
  return numbers;
}

/** true, wenn der Text eine verbotene Zahl nennt, die nicht erlaubt ist. */
export function revealsNumber(text: string, forbidden: Frac[], allowed: Frac[]): boolean {
  const forbiddenAbs = forbidden.map((value) => value.abs());
  const allowedAbs = allowed.map((value) => value.abs());
  return numbersIn(text).some(
    (number) =>
      forbiddenAbs.some((value) => value.equals(number)) &&
      !allowedAbs.some((value) => value.equals(number)),
  );
}
