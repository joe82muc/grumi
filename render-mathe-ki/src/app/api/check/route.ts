import Anthropic from "@anthropic-ai/sdk";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { create, all } from "mathjs";

export const runtime = "nodejs";
export const maxDuration = 60;

// Eigene mathjs-Instanz nur zum deterministischen Nachrechnen von Gleichungen.
const mathEngine = create(all, {});

type ImageAnnotation = {
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type OcrToken = {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type OcrError = {
  tokenIndexes: number[];
  correction: string;
};

type OcrNumberMatch = {
  token: OcrToken;
  value: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type FeedbackData = {
  summary: string;
  correct: boolean;
  analysis: string;
  suggestion: string;
  hint?: string;
  hintTopic?: string;
  annotations?: ImageAnnotation[];
  // Nur intern fuer die deterministische Nachrechnung; wird vor der Antwort entfernt.
  equationSteps?: string[];
};

const defaultAnthropicModel = "claude-opus-4-8";
const studentUploadRoot = "student-uploads";
const supportedMediaTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
] as const;

type SupportedMediaType = (typeof supportedMediaTypes)[number];

const uploadFileExtensions: Record<SupportedMediaType, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function feedbackResponse(feedbackData: FeedbackData, status = 200) {
  return Response.json(
    {
      feedback: JSON.stringify(feedbackData),
      feedbackData,
    },
    { status, headers: corsHeaders },
  );
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

function getSafeUploadBaseName(fileName: string): string {
  const lastPathPart = fileName.split(/[/\\]/).pop() || "foto";
  const withoutExtension = lastPathPart.replace(/\.[^.]*$/, "");
  const safeName = withoutExtension
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  return safeName || "foto";
}

function padDatePart(value: number, length = 2): string {
  return String(value).padStart(length, "0");
}

function formatUploadDay(date: Date): string {
  return [
    date.getFullYear(),
    padDatePart(date.getMonth() + 1),
    padDatePart(date.getDate()),
  ].join("-");
}

function formatUploadTimestamp(date: Date): string {
  return [
    formatUploadDay(date),
    [
      padDatePart(date.getHours()),
      padDatePart(date.getMinutes()),
      padDatePart(date.getSeconds()),
    ].join("-"),
    padDatePart(date.getMilliseconds(), 3),
  ].join("_");
}

async function saveStudentUpload(
  image: File,
  mediaType: SupportedMediaType,
  bytes: ArrayBuffer,
) {
  const uploadedAt = new Date();
  const dayFolder = formatUploadDay(uploadedAt);
  const timestamp = formatUploadTimestamp(uploadedAt);
  const uploadDirectory = join(process.cwd(), studentUploadRoot, dayFolder);
  const fileName = [
    timestamp,
    randomUUID(),
    getSafeUploadBaseName(image.name),
  ].join("-");
  const filePath = join(
    uploadDirectory,
    `${fileName}${uploadFileExtensions[mediaType]}`,
  );

  await mkdir(uploadDirectory, { recursive: true });
  await writeFile(filePath, Buffer.from(bytes));

  return filePath;
}

async function trySaveStudentUpload(
  image: File,
  mediaType: SupportedMediaType,
  bytes: ArrayBuffer,
) {
  try {
    const filePath = await saveStudentUpload(image, mediaType, bytes);
    console.info("Student upload saved:", filePath);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn("Student upload could not be saved:", message);
  }
}

function sanitizeCorrectionLabel(label: unknown): string {
  return String(label ?? "").replace(/\s+/g, " ").trim().slice(0, 16);
}

// Erlaubte Themen-Stichworte fuer den fehlerbezogenen Tipp. Das Frontend
// blendet je Stichwort einen passenden Tipp samt Lehrer-Schmidt-Video ein.
const allowedHintTopics = [
  "kreis-umfang",
  "kreis-flaeche",
  "radius-aus-umfang",
  "durchmesser-radius",
  "pythagoras",
  "hypotenuse",
  "dreieck-flaeche",
  "viereck-flaeche",
  "trapez-flaeche",
  "parallelogramm-flaeche",
  "vieleck-flaeche",
  "zusammengesetzte-flaeche",
  "kegel-volumen",
  "kegel-oberflaeche",
  "kegel-mantellinie",
  "zylinder-volumen",
  "pyramide-volumen",
  "pyramide-oberflaeche",
  "pyramide-seitenhoehe",
  "koerperhoehe-seitenhoehe",
  "formel-umstellen",
  "einheiten",
  "runden",
  "skizze-beschriftung",
  "gegeben-gesucht",
  "antwortsatz",
] as const;

function sanitizeHintTopic(value: unknown): string {
  const candidate = String(value ?? "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
  return (allowedHintTopics as readonly string[]).includes(candidate)
    ? candidate
    : "";
}

function getTokenNumberMatches(token: OcrToken): OcrNumberMatch[] {
  const matches = [...token.text.matchAll(/-?\d+(?:[.,]\d+)?/g)];
  const charWeights = [...token.text].map((char) =>
    /[\d.,]/.test(char) ? 1 : 0.25,
  );
  const totalWeight = Math.max(
    charWeights.reduce((sum, weight) => sum + weight, 0),
    1,
  );

  return matches.map((match) => {
    const value = match[0];
    const start = match.index ?? 0;
    const end = start + value.length;
    const beforeWeight = charWeights
      .slice(0, start)
      .reduce((sum, weight) => sum + weight, 0);
    const numberWeight = charWeights
      .slice(start, end)
      .reduce((sum, weight) => sum + weight, 0);
    const x = token.x + token.width * (beforeWeight / totalWeight);
    const width = token.width * (numberWeight / totalWeight);

    return {
      token,
      value,
      x,
      y: token.y,
      width,
      height: token.height,
    };
  });
}

function clamp01(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

function sanitizeAnnotations(value: unknown): ImageAnnotation[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((annotation) => {
      if (!annotation || typeof annotation !== "object") return null;

      const candidate = annotation as Partial<ImageAnnotation>;
      const x = Number(candidate.x);
      const y = Number(candidate.y);
      const width = Number(candidate.width);
      const height = Number(candidate.height);

      if ([x, y, width, height].some((number) => !Number.isFinite(number))) {
        return null;
      }

      return {
        label: sanitizeCorrectionLabel(candidate.label),
        x: clamp01(x),
        y: clamp01(y),
        width: Math.min(Math.max(width, 0.04), 0.28),
        height: Math.min(Math.max(height, 0.04), 0.16),
      };
    })
    .filter((annotation): annotation is ImageAnnotation => {
      if (!annotation) return false;

      annotation.width = Math.min(annotation.width, 1 - annotation.x);
      annotation.height = Math.min(annotation.height, 1 - annotation.y);

      return annotation.width > 0 && annotation.height > 0;
    })
    .slice(0, 3);
}

function sanitizeOcrTokens(value: unknown): OcrToken[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((token) => {
      if (!token || typeof token !== "object") return null;

      const candidate = token as Partial<OcrToken>;
      const x = Number(candidate.x);
      const y = Number(candidate.y);
      const width = Number(candidate.width);
      const height = Number(candidate.height);

      if ([x, y, width, height].some((number) => !Number.isFinite(number))) {
        return null;
      }

      const safeX = clamp01(x);
      const safeY = clamp01(y);

      return {
        text: String(candidate.text ?? "").trim().slice(0, 40),
        x: safeX,
        y: safeY,
        width: Math.min(Math.max(width, 0.02), 1 - safeX),
        height: Math.min(Math.max(height, 0.02), 1 - safeY),
      };
    })
    .filter((token): token is OcrToken => {
      return Boolean(token && token.text && token.width > 0 && token.height > 0);
    })
    .slice(0, 30);
}

function sanitizeOcrErrors(value: unknown, tokenCount: number): OcrError[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((error) => {
      if (!error || typeof error !== "object") return null;

      const candidate = error as {
        tokenIndexes?: unknown;
        correction?: unknown;
      };
      const tokenIndexes = Array.isArray(candidate.tokenIndexes)
        ? candidate.tokenIndexes
            .map((index) => Number(index))
            .filter((index) => {
              return (
                Number.isInteger(index) &&
                index >= 0 &&
                index < tokenCount
              );
            })
        : [];

      if (tokenIndexes.length === 0) return null;

      return {
        tokenIndexes: [...new Set(tokenIndexes)].slice(0, 6),
        correction: sanitizeCorrectionLabel(candidate.correction),
      };
    })
    .filter((error): error is OcrError => Boolean(error))
    .slice(0, 3);
}

function buildAnnotationsFromOcrErrors(
  tokens: OcrToken[],
  errors: OcrError[],
): ImageAnnotation[] {
  return errors
    .map((error) => {
      const selectedTokens = error.tokenIndexes
        .map((index) => tokens[index])
        .filter(Boolean);
      if (selectedTokens.length === 0) return null;

      const selectedNumbers = selectedTokens.flatMap(getTokenNumberMatches);
      const annotationBoxes =
        error.correction && selectedNumbers.length > 0
          ? [selectedNumbers[selectedNumbers.length - 1]]
          : selectedTokens;

      const left = Math.min(...annotationBoxes.map((box) => box.x));
      const top = Math.min(...annotationBoxes.map((box) => box.y));
      const right = Math.max(
        ...annotationBoxes.map((box) => box.x + box.width),
      );
      const bottom = Math.max(
        ...annotationBoxes.map((box) => box.y + box.height),
      );
      const label =
        error.correction ||
        sanitizeCorrectionLabel(
          selectedTokens.map((token) => token.text).join(" "),
        );

      return {
        label,
        x: clamp01(left - 0.01),
        y: clamp01(top - 0.01),
        width: Math.min(Math.max(right - left + 0.02, 0.04), 0.28),
        height: Math.min(Math.max(bottom - top + 0.02, 0.04), 0.18),
      };
    })
    .filter((annotation): annotation is ImageAnnotation => {
      if (!annotation) return false;

      annotation.width = Math.min(annotation.width, 1 - annotation.x);
      annotation.height = Math.min(annotation.height, 1 - annotation.y);

      return annotation.width > 0 && annotation.height > 0;
    })
    .slice(0, 3);
}

function extractFeedbackData(
  text: string | undefined,
): FeedbackData | null {
  if (!text) return null;

  const withoutFence = text
    .replace(/```(?:json)?/gi, "")
    .replace(/```/g, "")
    .trim();
  const jsonText = extractFirstJsonObject(withoutFence);
  if (!jsonText) return null;

  try {
    return parseFeedbackJson(jsonText);
  } catch {
    try {
      return parseFeedbackJson(repairJsonStringLiterals(jsonText));
    } catch (error) {
      console.warn(
        "Could not parse AI feedback JSON:",
        error instanceof Error ? error.message : String(error),
        jsonText.slice(0, 500),
      );
      return null;
    }
  }
}

function extractFirstJsonObject(text: string): string | null {
  let start = -1;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "{") {
      if (depth === 0) start = index;
      depth += 1;
      continue;
    }

    if (char === "}" && depth > 0) {
      depth -= 1;
      if (depth === 0 && start >= 0) {
        return text.slice(start, index + 1);
      }
    }
  }

  return null;
}

function repairJsonStringLiterals(text: string): string {
  let repaired = "";
  let inString = false;
  let escaped = false;

  for (const char of text) {
    if (inString) {
      if (escaped) {
        repaired += char;
        escaped = false;
        continue;
      }

      if (char === "\\") {
        repaired += char;
        escaped = true;
        continue;
      }

      if (char === '"') {
        repaired += char;
        inString = false;
        continue;
      }

      if (char === "\n") {
        repaired += "\\n";
        continue;
      }

      if (char === "\r") {
        continue;
      }

      if (char === "\t") {
        repaired += "\\t";
        continue;
      }

      repaired += char;
      continue;
    }

    repaired += char;
    if (char === '"') {
      inString = true;
    }
  }

  return repaired.replace(/,\s*([}\]])/g, "$1");
}

function sanitizeEquationSteps(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((line) => String(line ?? "").trim())
    .filter((line) => line.length > 0 && line.length <= 60 && line.includes("="))
    .slice(0, 12);
}

function parseFeedbackJson(jsonText: string): FeedbackData {
  const parsed = JSON.parse(jsonText) as Partial<
    FeedbackData & {
      ocrTokens: OcrToken[];
      errors: OcrError[];
    }
  >;
  if (!parsed || typeof parsed !== "object") {
    throw new Error("Feedback JSON is not an object.");
  }

  const ocrTokens = sanitizeOcrTokens(parsed.ocrTokens);
  const ocrErrors = sanitizeOcrErrors(parsed.errors, ocrTokens.length);
  const ocrAnnotations = buildAnnotationsFromOcrErrors(ocrTokens, ocrErrors);

  const correct = parsed.correct === true;
  const hint = correct ? "" : String(parsed.hint ?? "").trim().slice(0, 400);
  const hintTopic = correct
    ? ""
    : sanitizeHintTopic(parsed.hintTopic);
  const equationSteps = sanitizeEquationSteps(parsed.equationSteps);

  return {
    summary: String(parsed.summary ?? "Ich habe deinen Rechenschritt geprüft."),
    correct,
    analysis: String(parsed.analysis ?? ""),
    suggestion: String(parsed.suggestion ?? ""),
    ...(hint ? { hint } : {}),
    ...(hintTopic ? { hintTopic } : {}),
    ...(equationSteps.length > 0 ? { equationSteps } : {}),
    annotations:
      ocrAnnotations.length > 0
        ? ocrAnnotations
        : sanitizeAnnotations(parsed.annotations),
  };
}

function fixContradictoryCorrectionFeedback(
  feedbackData: FeedbackData,
): FeedbackData {
  const combinedText = [
    feedbackData.summary,
    feedbackData.analysis,
    feedbackData.suggestion,
  ]
    .join(" ")
    .toLowerCase();
  const saysCorrectedValueIsRight =
    /korrektur[^.?!]*(richtig|korrekt)/.test(combinedText) &&
    /l(ö|ö|oe)sung[^.?!]*(richtig|korrekt)/.test(combinedText);
  const saysAllStepsAreCorrect =
    /alle[^.?!]*(schritte|rechenoperationen|umformungen)[^.?!]*(richtig|korrekt)/.test(
      combinedText,
    );

  if (
    feedbackData.correct ||
    (!saysCorrectedValueIsRight && !saysAllStepsAreCorrect)
  ) {
    return feedbackData;
  }

  return {
    ...feedbackData,
    correct: true,
    summary:
      "Richtig gelöst. Eine durchgestrichene falsche Zahl wurde durch die richtige Zahl ersetzt.",
  };
}

function normalizeMathFeedbackText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[₀]/g, "0")
    .replace(/[₁]/g, "1")
    .replace(/[₂]/g, "2")
    .replace(/[₃]/g, "3")
    .replace(/[₄]/g, "4")
    .replace(/[₅]/g, "5")
    .replace(/[₆]/g, "6")
    .replace(/[₇]/g, "7")
    .replace(/[₈]/g, "8")
    .replace(/[₉]/g, "9")
    .replace(/\s+/g, " ");
}

function fixContradictoryQuadraticFeedback(
  feedbackData: FeedbackData,
): FeedbackData {
  if (feedbackData.correct) return feedbackData;

  const analysisText = normalizeMathFeedbackText(feedbackData.analysis);
  const combinedText = normalizeMathFeedbackText(
    [feedbackData.summary, feedbackData.analysis, feedbackData.suggestion].join(
      " ",
    ),
  );
  const analysisHasTwoLabeledSolutions =
    /x\s*1\s*=\s*-?\d/.test(analysisText) &&
    /x\s*2\s*=\s*-?\d/.test(analysisText);
  const combinedHasSolutionSet =
    /\bl\s*=\s*\{[^}]*-?\d+[^}]*[;,][^}]*-?\d+[^}]*\}/.test(combinedText);
  const complainsAboutMissingLabeledSolutions =
    /fehlt[^.?!]*(x\s*1|x1)[^.?!]*(x\s*2|x2)/.test(combinedText) ||
    /(x\s*1|x1)[^.?!]*(x\s*2|x2)[^.?!]*(nicht einzeln|fehlt)/.test(
      combinedText,
    );

  if (
    !analysisHasTwoLabeledSolutions ||
    !combinedHasSolutionSet ||
    !complainsAboutMissingLabeledSolutions
  ) {
    return feedbackData;
  }

  return {
    ...feedbackData,
    correct: true,
    summary:
      "Richtig gelöst. Beide Lösungen und die Lösungsmenge sind notiert.",
    suggestion: "Fertig gelöst.",
  };
}

// Wandelt eine Schueler-Gleichungszeile in einen mathjs-tauglichen Ausdruck:
// deutsches Dezimalkomma -> Punkt, entfernt Kommandostriche (| -4), Einheiten,
// und macht implizite Multiplikation (2x, 2(x+2)) explizit.
function normalizeEquationLine(line: string): string {
  let s = String(line);
  // Kommandostrich und alles danach abschneiden (| -4, | :2, |:2 ...)
  s = s.replace(/[|/].*$/, "");
  // typische Einheiten und Loesungsmengen-Deko entfernen
  s = s.replace(/\b(cm|mm|dm|m|km|cm²|m²|cm³|m³|kg|g|l|€|s|h|min)\b/gi, "");
  s = s.replace(/[{}]/g, "");
  // Dezimalkomma -> Punkt (nur zwischen Ziffern)
  s = s.replace(/(\d),(\d)/g, "$1.$2");
  // Unicode-Minus/Mal/Geteilt normalisieren
  s = s.replace(/[−–—]/g, "-").replace(/[·×]/g, "*").replace(/[:÷]/g, "/");
  // implizite Multiplikation: 2x -> 2*x, 2( -> 2*( , )( -> )*( , x( -> x*(
  s = s.replace(/(\d)\s*([a-zA-Z(])/g, "$1*$2");
  s = s.replace(/([a-zA-Z)])\s*\(/g, "$1*(");
  s = s.replace(/\)\s*([a-zA-Z])/g, ")*$1");
  return s.trim();
}

// Prueft, ob ein x-Wert eine einzelne Gleichungszeile "lhs = rhs" erfuellt.
// Rueckgabe: true/false, oder null wenn die Zeile nicht sicher auswertbar ist.
function equationHoldsForX(line: string, xValue: number): boolean | null {
  const norm = normalizeEquationLine(line);
  const parts = norm.split("=");
  if (parts.length !== 2) return null;
  const [lhs, rhs] = parts;
  if (!lhs.trim() || !rhs.trim()) return null;
  try {
    const diff = mathEngine.evaluate(`(${lhs})-(${rhs})`, { x: xValue });
    if (typeof diff !== "number" || !Number.isFinite(diff)) return null;
    return Math.abs(diff) < 1e-6;
  } catch {
    return null;
  }
}

// Deterministische Nachrechnung einer linearen Gleichungskette.
// Idee: Die letzte Zeile "x = wert" liefert die Schuelerloesung. Diese MUSS
// jede vorherige Gleichungszeile erfuellen (insbesondere die Originalgleichung
// = die Probe). Erfuellt sie eine Zeile nicht, steckt dort ein echter
// Rechenfehler -> wir erzwingen "correct": false.
// Rueckgabe: "ok" (Probe geht auf), "fehler" (echter Rechenfehler), oder
// "unbekannt" (nicht sicher pruefbar -> nicht eingreifen).
function verifyLinearEquationSteps(
  steps: string[],
): { verdict: "ok" | "fehler" | "unbekannt"; badLine?: string } {
  if (!Array.isArray(steps) || steps.length < 2) {
    return { verdict: "unbekannt" };
  }
  // Schuelerloesung aus der letzten Zeile der Form "x = zahl".
  const last = normalizeEquationLine(steps[steps.length - 1]);
  const solMatch = last.match(/^x\s*=\s*(-?\d+(?:\.\d+)?)$/);
  if (!solMatch) return { verdict: "unbekannt" };
  const xValue = Number(solMatch[1]);
  if (!Number.isFinite(xValue)) return { verdict: "unbekannt" };

  let checkedAny = false;
  for (const line of steps) {
    // reine "x = ..."-Zeile gegen sich selbst zu pruefen bringt nichts
    const holds = equationHoldsForX(line, xValue);
    if (holds === null) continue; // diese Zeile nicht sicher pruefbar
    checkedAny = true;
    if (holds === false) {
      return { verdict: "fehler", badLine: line };
    }
  }
  return checkedAny ? { verdict: "ok" } : { verdict: "unbekannt" };
}

// Wenn die KI eine Gleichung als richtig meldet, der deterministische
// Nachrechner aber einen echten Rechenfehler findet, ueberstimmt der Code die
// KI: "correct": false. Das verhindert durchgewunkene Arithmetikfehler.
function fixEquationArithmetic(feedbackData: FeedbackData): FeedbackData {
  const steps = feedbackData.equationSteps;
  if (!steps || steps.length < 2) return feedbackData;

  const { verdict } = verifyLinearEquationSteps(steps);
  if (verdict !== "fehler") return feedbackData;

  // Echter Rechenfehler nachgewiesen -> immer als falsch werten.
  if (feedbackData.correct) {
    return {
      ...feedbackData,
      correct: false,
      summary:
        "Da hat sich ein Rechenfehler eingeschlichen. Setze dein Ergebnis zur Probe in die Ausgangsgleichung ein – sie geht so noch nicht auf.",
      suggestion:
        feedbackData.suggestion && /fehlt/i.test(feedbackData.suggestion)
          ? feedbackData.suggestion
          : "Rechne die Umformungen noch einmal Schritt für Schritt nach und prüfe mit der Probe.",
    };
  }
  return feedbackData;
}

// Sicherheitsnetz: Wenn die KI "correct": true setzt, im Text aber selbst
// signalisiert, dass die Probe/das Ergebnis nicht passt ("stimmt nicht",
// "pruefe noch einmal", "hier stimmt etwas nicht"), dann ist das ein
// Widerspruch. Im Zweifel ist der Schritt NICHT richtig -> auf false setzen.
function fixCorrectButProofFails(feedbackData: FeedbackData): FeedbackData {
  if (!feedbackData.correct) return feedbackData;

  const combined = [
    feedbackData.summary,
    feedbackData.analysis,
    feedbackData.suggestion,
  ]
    .join(" ")
    .toLowerCase();

  const signalsProblem =
    /stimmt (etwas |hier |da )?nicht/.test(combined) ||
    /pruefe (das |es |deinen |den |noch ?einmal|nochmal|noch mal)/.test(combined) ||
    /prüfe (das |es |deinen |den |noch ?einmal|nochmal|noch mal)/.test(combined) ||
    /passt (so )?nicht/.test(combined) ||
    /geht (die probe )?nicht auf/.test(combined) ||
    /probe[^.?!]*(falsch|stimmt nicht|geht nicht auf)/.test(combined);

  if (!signalsProblem) return feedbackData;

  return {
    ...feedbackData,
    correct: false,
    summary:
      "Da stimmt noch etwas nicht. Prüfe deinen Rechenweg noch einmal Schritt für Schritt.",
  };
}

// Entfernt das interne Hilfsfeld equationSteps aus der Antwort an den Client.
function stripInternalFields(feedbackData: FeedbackData): FeedbackData {
  if (!("equationSteps" in feedbackData)) return feedbackData;
  const { equationSteps: _equationSteps, ...rest } = feedbackData;
  void _equationSteps;
  return rest;
}

function fixContradictoryFeedback(feedbackData: FeedbackData): FeedbackData {
  return stripInternalFields(
    fixEquationArithmetic(
      fixCorrectButProofFails(
        fixContradictoryQuadraticFeedback(
          fixContradictoryCorrectionFeedback(feedbackData),
        ),
      ),
    ),
  );
}

function getApiErrorStatus(error: unknown): number | null {
  if (!error || typeof error !== "object") return null;

  const candidate = error as { status?: unknown };
  const status = Number(candidate.status);

  return Number.isInteger(status) ? status : null;
}

function buildApiErrorFeedback(error: unknown): FeedbackData {
  const status = getApiErrorStatus(error);
  const message = error instanceof Error ? error.message : String(error);
  const normalizedMessage = message.toLowerCase();

  if (
    status === 401 ||
    normalizedMessage.includes("authentication_error") ||
    normalizedMessage.includes("invalid x-api-key") ||
    normalizedMessage.includes("401")
  ) {
    return {
      summary: "Der Anthropic API-Key wurde abgelehnt.",
      correct: false,
      analysis: "Anthropic hat die Anfrage mit 401 Unauthorized beendet.",
      suggestion:
        "Prüfe ANTHROPIC_API_KEY in .env.local oder erstelle einen neuen gültigen Key und starte den lokalen Server neu.",
    };
  }

  if (status === 404) {
    return {
      summary: "Das Anthropic-Modell wurde nicht gefunden.",
      correct: false,
      analysis: "Die API konnte das konfigurierte Modell nicht verwenden.",
      suggestion:
        "Prüfe ANTHROPIC_MODEL oder entferne den Eintrag, damit das Standardmodell genutzt wird.",
    };
  }

  if (status === 429) {
    return {
      summary: "Das API-Limit wurde erreicht.",
      correct: false,
      analysis: "Anthropic hat die Anfrage wegen Rate Limit oder Guthabenlimit abgelehnt.",
      suggestion:
        "Warte kurz oder prüfe Limits und Guthaben im Anthropic-Konto.",
    };
  }

  if (status && status >= 500) {
    return {
      summary: "Anthropic ist gerade nicht zuverlässig erreichbar.",
      correct: false,
      analysis: `Die externe KI-API hat mit Status ${status} geantwortet.`,
      suggestion:
        "Warte kurz und starte die Prüfung erneut. Wenn das häufiger passiert, prüfe Anthropic-Status, Key und Guthaben.",
    };
  }

  return {
    summary: "Fehler bei der Analyse.",
    correct: false,
    analysis: message,
    suggestion: "Bitte versuche es gleich noch einmal.",
  };
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;

    const contentType = req.headers.get("content-type") ?? "";
    if (
      !contentType.includes("multipart/form-data") &&
      !contentType.includes("application/x-www-form-urlencoded")
    ) {
      return feedbackResponse(
        {
          summary: "Kein Bild empfangen.",
          correct: false,
          analysis: "Die Anfrage enthält kein Formular mit Bilddatei.",
          suggestion: "Bitte wähle ein Foto aus und starte die Analyse erneut.",
        },
        400,
      );
    }

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return feedbackResponse(
        {
          summary: "Kein Bild empfangen.",
          correct: false,
          analysis: "Im Formular war keine Bilddatei enthalten.",
          suggestion: "Bitte wähle ein Foto aus und starte die Analyse erneut.",
        },
        400,
      );
    }

    const mediaType = supportedMediaTypes.find((type) => type === image.type);

    if (!mediaType) {
      return feedbackResponse(
        {
          summary: "Dieses Bildformat wird noch nicht unterstützt.",
          correct: false,
          analysis: `Empfangenes Format: ${image.type || "unbekannt"}`,
          suggestion: "Bitte lade ein JPG-, PNG-, GIF- oder WebP-Bild hoch.",
        },
        400,
      );
    }

    const bytes = await image.arrayBuffer();
    await trySaveStudentUpload(image, mediaType, bytes);

    if (!apiKey) {
      return feedbackResponse(
        {
          summary:
            "Die KI-Analyse ist noch nicht eingerichtet, weil der Anthropic API-Key fehlt.",
          correct: false,
          analysis: "",
          suggestion:
            "Trage ANTHROPIC_API_KEY in .env.local ein und starte den Dev-Server neu.",
        },
        500,
      );
    }

    const anthropic = new Anthropic({ apiKey });
    const model = process.env.ANTHROPIC_MODEL || defaultAnthropicModel;
    const base64 = Buffer.from(bytes).toString("base64");

    const equation = String(formData.get("equation") ?? "2x + 4 = 10");
    const taskLevel = String(formData.get("taskLevel") ?? "").trim();
    const taskStep = String(formData.get("taskStep") ?? "").trim();
    const taskStepTitle = String(formData.get("taskStepTitle") ?? "").trim();
    const taskStepContext =
      taskStep && taskStepTitle
        ? `\nAktueller verpflichtender Foto-Schritt: Foto ${taskStep} - ${taskStepTitle}.\n`
        : "";
    const taskLevelContext = taskLevel ? `\nAktuelle Stufe: ${taskLevel}.\n` : "";
    const response = await anthropic.messages.create({
      model,
      max_tokens: 1600,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mediaType,
                data: base64,
              },
            },
            {
              type: "text",
              text: `Originalaufgabe:
${equation}
${taskLevelContext}
${taskStepContext}

Prüfe den fotografierten Rechenweg des Schülers sorgfältig. Entscheidend ist, dass jede sichtbare geschriebene Zeile mathematisch korrekt aus der vorherigen Zeile bzw. aus der Originalaufgabe folgt. Wenn ein verpflichtender Foto-Schritt genannt ist, prüfe genau diesen Schritt und werte fehlende Pflichtbestandteile dieses Schritts als Fehler.

Regeln:
- Wichtig: Gib nur die JSON-Felder "summary", "correct", "analysis", "suggestion" und bei Geometrie-Fehlern zusaetzlich "hint" und "hintTopic" zurueck. Keine OCR-Token, keine Koordinaten, keine Markierungen.
- Antworte ausschließlich mit gültigem JSON, ohne Markdown-Codeblock.
- "summary" ist ein kurzer, freundlicher Satz für Schüler.
- "correct" ist true, wenn alle sichtbaren Zeilen im Foto mathematisch korrekt sind. Das gilt auch dann, wenn der Rechenweg noch nicht fertig ist und bisher nur die Originalgleichung korrekt abgeschrieben wurde. Ausnahme: Bei einem verpflichtenden Foto-Schritt muessen alle Pflichtbestandteile dieses Foto-Schritts sichtbar und logisch richtig sein.
- Werte fehlende weitere Lösungsschritte nicht als Fehler. Wenn nur die korrekte Ausgangsgleichung zu sehen ist, setze "correct": true, schreibe in "summary", dass die Gleichung richtig abgeschrieben wurde, und gib in "suggestion" den nächsten sinnvollen Lösungsschritt an.
- Setze "correct": false nur, wenn eine sichtbare Zeile mathematisch falsch ist, falsch abgeschrieben wurde oder ein sichtbarer Umformungsschritt nicht korrekt aus der vorherigen Zeile folgt.
- Sehr wichtig gegen Lesefehler bei ALLEN Aufgabentypen (OCR-Plausibilitaet) - gilt fuer Gleichungen UND fuer alle Geometrie-Aufgaben (Kegel, Pyramide, Flaechen, Kreis, Dreieck, Vierecke, Vielecke, zusammengesetzte Koerper/Flaechen): Handschrift ist oft schwer zu lesen. Bevor du einen Fehler meldest, pruefe, ob ein vermeintlich falsches Zeichen in Wahrheit nur von dir falsch gelesen wurde. Nutze den mathematischen Zusammenhang, um zu erkennen, was der Schueler gemeint hat. Eine handgeschriebene 4 sieht oft aus wie ein y, eine 1 wie ein l oder I, eine 7 wie eine 1, eine 0 wie ein O, ein z wie eine 2, ein g wie eine 9, ein b wie eine 6, eine 5 wie ein S, ein r wie ein Schnoerkel. Wenn der weitere Rechenweg eindeutig zeigt, was an einer Stelle stehen muss, dann lies das Zeichen entsprechend und konstruiere keinen Fehler aus einem reinen Lesefehler. Gleichungsbeispiel: nach 2(x + 2) muss ausmultipliziert 2x + 4 stehen, und die naechste Zeile 2x = 12 passt nur zu 2x + 4 = 16, also lies das Zeichen als 4 und nicht als y. Geometriebeispiel: Wenn r = 5 cm gegeben ist und der Schueler G = pi * r^2 = pi * 5^2 = 78,54 cm^2 rechnet, dann ist eine schwer lesbare Ziffer in "78,54" plausibel die 5, auch wenn sie wie ein S aussieht; ebenso ist bei s^2 = r^2 + hk^2 die gemeinte Groesse aus dem Zusammenhang klar, selbst wenn der tiefgestellte Index k undeutlich ist.
- Wenn die ganze Rechnung logisch aufgeht und das Endergebnis korrekt ist - bei Gleichungen z. B. 2(x + 2) = 16 -> 2x + 4 = 16 -> 2x = 12 -> x = 6, bei Geometrie z. B. s = Wurzel(r^2 + hk^2) mit korrekt eingesetzten gegebenen Werten und passendem Ergebnis -, dann ist der Rechenweg richtig: Setze "correct": true. Im Zweifel, ob du ein mehrdeutiges Zeichen falsch gelesen hast oder der Schueler sich verrechnet hat, entscheide bei einem mehrdeutigen ZEICHEN zugunsten des Schuelers.
- ABER: Die wohlwollende Lesart betrifft NUR das Erkennen einzelner mehrdeutiger Zeichen. Jede Umformung und jede Rechnung musst du trotzdem streng nachrechnen. Wenn eine eindeutig lesbare Rechnung falsch ist, ist und bleibt es ein Fehler: Setze dann "correct": false, auch wenn vorher ein Zeichen wohlwollend gelesen wurde. Beispiel: "2x + 4 = 16 | -4" ergibt zwingend 2x = 12; steht in der naechsten Zeile 2x = 14, ist das falsch (16 - 4 = 12, nicht 14) und "correct" ist false. Genauso ist aus 2x = 12 mit | :2 zwingend x = 6; x = 7 waere falsch.
- Pflicht-Konsistenzpruefung am Ende: Wenn du eine Probe machst oder rechnerisch feststellst, dass das Ergebnis NICHT zur Originalgleichung passt, dann darf "correct" NIEMALS true sein. Schreibe nie "richtig geloest" und im selben Text "hier stimmt etwas nicht". Wenn die Probe nicht aufgeht, ist der Rechenweg fehlerhaft: Setze "correct": false und benenne den ersten falschen Umformungsschritt.
- Diese wohlwollende Lesart gilt NICHT fuer Dezimalkommas und NICHT fuer die Verwechslung von Groessen mit unterschiedlicher Bedeutung (z. B. Durchmesser d statt Radius r, Koerperhoehe hk statt Seitenhoehe hs, Umfang u statt Durchmesser d): Ein fehlendes oder vorhandenes Komma bleibt streng zu pruefen, und eine inhaltlich falsche Groesse oder falsche Skizzenbeschriftung bleibt ein echter Fehler. Es geht hier nur um verwechselbare Ziffern/Buchstaben, deren gemeinte Bedeutung aus dem Rechenweg eindeutig folgt - nicht darum, einen inhaltlichen Fehler schoenzureden.
- SEHR WICHTIG fuer die Ausgabe nach einer wohlwollenden Korrektur: Wenn du ein Zeichen als die gemeinte Zahl/Groesse erkannt hast, dann schreibe in "summary", "analysis" und "suggestion" IMMER die korrigierte, gemeinte Schreibweise - niemals das von dir zuerst falsch gelesene Zeichen. Beispiel: Wenn die handgeschriebene 4 wie ein y aussah, du sie aber als 4 erkannt hast, dann schreibe ueberall "2x + 4 = 16" und NIE "2x + y = 16" oder "2x + y = 16 - y". Schleppe das falsch gelesene y nicht mit und haenge keine ueberfluessigen Zeichen wie ein zusaetzliches Minus an. Schreibe die Gleichung sauber und vollstaendig so, wie der Schueler sie gemeint hat.
- Kommandostriche / Aequivalenzumformungen erkennen: Schueler schreiben rechts neben einer Gleichungszeile haeufig einen senkrechten Strich gefolgt von der Rechenoperation, z. B. "| -4", "| +3", "| : 2", "| * 5", "| -x". Dieser Teil ist KEIN Bestandteil der Gleichung, sondern die Angabe, womit beide Seiten umgeformt werden. Lies ihn als Kommandostrich und schreibe ihn in der Rueckmeldung als "| -4" bzw. "| : 2". Haenge die Operation nicht an die rechte Gleichungsseite an. Beispiel: "2x + 4 = 16 | -4" bedeutet, dass auf beiden Seiten 4 abgezogen wird; daraus folgt 2x = 12. Lies NICHT "16 - 4" als neue rechte Seite der gleichen Zeile und NICHT "2x = 12, 2" - die ", 2" bzw. "2" dahinter ist der Kommandostrich "| : 2", mit dem als naechstes durch 2 geteilt wird, also folgt x = 6. Ein senkrechter Strich, ein Schraegstrich am Zeilenende oder eine kleine Operation am rechten Rand ist fast immer ein Kommandostrich, kein Rechenfehler.
- NUR bei Gleichungsaufgaben (nicht bei Geometrie/Sachaufgaben ohne Gleichungskette): Gib zusaetzlich das Feld "equationSteps" zurueck - ein Array mit den von dir erkannten Gleichungszeilen in der Reihenfolge von oben nach unten, jede Zeile als kurzer String der Form "lhs=rhs". Verwende dabei die korrigierte, gemeinte Schreibweise (also 4 statt eines wie y aussehenden Zeichens) und LASS die Kommandostriche weg (nur die reine Gleichung, ohne "| -4"). Beispiel fuer 2(x + 2) = 16: "equationSteps": ["2(x+2)=16", "2x+4=16", "2x=12", "x=6"]. Die letzte Zeile soll moeglichst die Endloesung "x=wert" sein. Dieses Feld wird vom System zur automatischen Nachrechnung genutzt; gib es so genau wie moeglich an. Wenn es keine Gleichungskette gibt (reine Termaufgabe, Geometrie, Sachaufgabe), lass "equationSteps" weg.
- Sehr wichtig bei Dezimalzahlen: Erfinde oder ergänze niemals ein fehlendes Komma, nur weil das rechnerisch passen würde. Lies genau, ob ein Komma oder Punkt wirklich sichtbar ist. Wenn die richtige Zahl 1,2 wäre, im Foto aber 12 ohne klar sichtbares Komma steht, dann ist die Zeile falsch und "correct" muss false sein. Wenn du zwischen 12 und 1,2 nicht sicher unterscheiden kannst, werte die Zeile nicht als korrekt; schreibe, dass das Komma nicht eindeutig lesbar ist und der Schüler es klarer schreiben soll.
- Behandle Kommafehler als Rechen-/Schreibfehler mit Faktor 10. Beispiel: Aus -6,8 + 8 folgt 1,2. Eine sichtbare Zeile "0,5x = 12" ist falsch, auch wenn daneben oder in der erwarteten Lösung 1,2 gemeint sein könnte.
- Pädagogische Stufenlogik für Gleichungsaufgaben: Stufe 1 sind einfache ein- bis zweischrittige Gleichungen mit positiven Zahlen. Stufe 2 ergänzt negative Zahlen. Stufe 3 übt einfache Klammern. Stufe 4 übt Dezimalzahlen. Stufe 5 sammelt Terme auf beiden Seiten. Stufe 6 kombiniert mehrere Klammern, Minusklammern und Dezimalzahlen. Bewerte jeweils passend zur Stufe und verlange keine fortgeschritteneren Schreibweisen als nötig.
- Stufe 7 enthält einfache Bruchgleichungen mit einem Bruchterm oder leichtem Zusatzterm. Ein Hauptnenner darf verwendet werden, ist aber nicht Pflicht; auch Multiplizieren mit dem Kehrwert oder direktes Freistellen von x ist korrekt, wenn jede sichtbare Zeile stimmt.
- Stufe 8 ist der erste systematische Übergang zu Bruchgleichungen mit Brüchen auf beiden Seiten und gemeinsamem Nenner. Ein Hauptnenner/gemeinsamer Nenner ist hier sinnvoll und soll korrekt durch alle konstanten Nenner teilbar sein. Eine Definitionsmenge ist in Stufe 8 aber nicht nötig, solange keine Variable im Nenner steht.
- Stufe 9 kombiniert Brüche, Dezimalzahlen und Klammern. Achte besonders darauf, dass Minuszeichen vor Klammern und Bruchtermen auf den ganzen folgenden Term wirken. Die Aufgabe mit 1/2x hat bewusst kein zusätzliches Minus direkt vor 1/2; wer daraus trotzdem ein negatives 1/2x macht, hat die Aufgabe falsch abgeschrieben.
- Stufe 10 und 11 sind M-Stoff-Bruchgleichungen mit Variable im Nenner; dort sind Definitionsmenge und verbotene Nennerwerte Pflicht. Stufe 12 ist Ausmultiplizieren von Klammern, oft ohne Gleichungslösung. Stufe 13 sind quadratische Gleichungen mit x² und Lösungsmenge.
- Bei Sachaufgaben aus Stufe 14, 15 und 16 soll die Strategie wie im Loesungsbeispiel geprueft werden: 1. Variable festlegen, z. B. x = Anzahl einer Grundgroesse oder bei Stufe 16 auch x = Gesamtzahl/Gesamtsumme. 2. Die benoetigten Groessen als Terme zu x notieren. 3. Eine passende Gleichung aus der Gesamtangabe aufstellen. 4. Die Gleichung korrekt loesen. 5. Die gesuchten Werte durch Einsetzen von x in die Terme berechnen. Ein Antwortsatz ist optional.
- Sehr wichtig bei Sachaufgaben mit verpflichtendem Foto-Schritt: Pruefe nur den aktuell genannten Foto-Schritt. Verlange in Foto 2 nicht das Loesen, in Foto 3 nicht das Einsetzen der Werte und in Foto 4 nicht mehr die Tabelle, Gleichung oder den Loesungsweg aus Foto 1 bis 3. Fruehere oder spaetere Strategieteile duerfen auf dem aktuellen Foto fehlen, wenn sie nicht zu diesem Foto-Schritt gehoeren.
- Wenn bei einer Sachaufgabe ohne verpflichtenden Foto-Schritt die Rechnung korrekt ist, aber Variable, Terme, Gleichung oder berechnete gesuchte Werte fehlen, setze "correct": false und beginne "suggestion" mit "Fehlt:" plus dem fehlenden Strategieteil. Wenn nur der Antwortsatz fehlt und alle Werte eindeutig berechnet sind, setze "correct": true; der Antwortsatz ist optional.
- Akzeptiere bei Sachaufgaben verschiedene sinnvolle Variablenwahlen. Entscheidend ist, dass die Terme zur gewaehlten Variable passen, die Gleichung die Textangaben korrekt modelliert und die Antwort zur Frage passt.
- Bei Kegel-/Quali-Aufgaben haben diese Kegel-Regeln Vorrang vor den Gleichungs- und Sachaufgabenregeln: Pruefe nur den aktuell genannten Foto-Schritt. Verlange bei Kegel-Aufgaben keine x-Tabelle, keine geschweifte Klammer, keine Loesungsmenge und keine Aequivalenzumformungen, ausser die Aufgabe fordert ausdruecklich eine Umkehraufgabe mit Formelumstellung.
- Kegel Foto 1 "Skizze, gegeben, gesucht": Setze "correct": true nur, wenn eine passende Kegelskizze oder das Bestimmungsdreieck erkennbar ist, die gegebenen Werte mit Einheiten notiert sind und die gesuchte Groesse klar markiert ist. Wenn ein Durchmesser d gegeben ist, darf r = d : 2 schon hier oder in Foto 2 notiert werden. Fehlen Skizze/Bestimmungsdreieck, gegeben, gesucht oder Einheiten, setze "correct": false und beginne "suggestion" mit "Fehlt:".
- Sehr wichtig bei Foto 1, wenn ein Bestimmungsdreieck gezeichnet ist: Pruefe die Beschriftung der drei Seiten geometrisch streng. Im rechtwinkligen Bestimmungsdreieck des Kegels ist die Mantellinie s immer die Hypotenuse, also die laengste Seite, die dem rechten Winkel gegenueberliegt (die Schraege von der Kegelspitze zum Rand des Grundkreises). Die beiden Katheten am rechten Winkel sind der Radius r (waagrecht am Boden) und die Koerperhoehe hk (senkrecht). Wenn s an einer Kathete steht (z. B. an der senkrechten oder waagrechten Seite) oder wenn r bzw. hk an der schraegen Hypotenuse steht, ist die Beschriftung falsch: Setze "correct": false und erklaere in "analysis" konkret, welche Seite falsch beschriftet ist und wie es richtig waere (s = Hypotenuse/Schraege, r und hk = die beiden Katheten am rechten Winkel). Eine inhaltlich falsch beschriftete Skizze darf nie als richtig durchgehen, auch wenn gegeben und gesucht korrekt notiert sind. Wenn die Beschriftung aber korrekt ist (s an der Schraegen, r und hk an den Katheten), dann schreibe dazu nur EINE [ok]-Zeile und KEINE [fehler]-Zeile; erfinde keinen Zweifel und keine widerspruechliche Doppelaussage.
- Kegel Foto 2 "Plan und Formel": Pruefe nur die passenden Formeln und den Rechenplan. Wichtige Formeln sind r = d : 2, d = 2r, s^2 = r^2 + hk^2 mit s als laengster Seite, V = 1/3 * pi * r^2 * hk, G = pi * r^2, M = pi * r * s und O = G + M. Rechenschritte und Antwortsatz duerfen fehlen.
- Kegel Foto 3 "Rechnung": Pruefe Einsetzen, Umformen und Rechnen streng. Wenn d gegeben ist, muss in den Kegelformeln der Radius r verwendet werden, nicht der Durchmesser. Bei Pythagoras muss s die Hypotenuse sein; zum Finden von r oder hk wird ein bekanntes Quadrat von s^2 abgezogen, zum Finden von s werden r^2 und hk^2 addiert. Akzeptiere pi, 3,14 oder Taschenrechnerwerte mit sinnvoller Rundung.
- Kegel Foto 4 "Antwort": Pruefe nur Endergebnis, Einheit und Antwortsatz. Laengen muessen positive cm/m/dm-Werte haben, Flaechen cm^2/m^2, Volumina cm^3/m^3 oder Liter. Bei Literumrechnung gilt 1000 cm^3 = 1 l. Verlange in Foto 4 nicht erneut Skizze, Formel oder kompletten Rechenweg.
- Kegel-Sachaufgaben duerfen mehrere Teilergebnisse haben, z. B. erst s mit Pythagoras, dann M, O, V, Kosten oder Liter. Das Foto ist korrekt, wenn die zum aktuellen Schritt gehoerenden Teilergebnisse logisch passen und die Einheiten stimmen. Runde schulueblich; kleine Abweichungen durch pi oder Rundung sind in Ordnung.
- Bei Pyramiden-/Quali-Aufgaben (quadratische Pyramide) haben diese Pyramiden-Regeln Vorrang vor den Gleichungs- und Sachaufgabenregeln: Pruefe nur den aktuell genannten Foto-Schritt. Verlange bei Pyramiden-Aufgaben keine x-Tabelle, keine geschweifte Klammer, keine Loesungsmenge und keine Aequivalenzumformungen, ausser die Aufgabe fordert ausdruecklich eine Umkehraufgabe mit Formelumstellung.
- Wichtige Pyramidenformeln: a ist die Grundkante, G = a^2 ist die Grundflaeche, hk ist die Koerperhoehe (von der Spitze senkrecht zur Grundflaechenmitte), hs ist die Seitenhoehe/Mantelhoehe (Hoehe einer Dreiecks-Seitenflaeche), k ist die Seitenkante. Es gilt hs^2 = hk^2 + (a:2)^2, die Seitenkante k^2 = hk^2 + e^2 mit der halben Diagonale e = d:2, wobei die Diagonale des Grundquadrats aus d^2 = a^2 + a^2 folgt (gleichwertig ist e = a:2 * Wurzel(2)); fuer die Hoehe aus dem Volumen gilt aus V = (G*hk):3 die Umstellung hk = (3*V):a^2, die Mantelflaeche M = 2 * a * hs (vier gleiche Dreiecke mit je 1/2 * a * hs), die Oberflaeche O = G + M = a^2 + 2 * a * hs und das Volumen V = 1/3 * a^2 * hk.
- Sehr wichtig bei der Pyramide: Verwechsle hk (Koerperhoehe) und hs (Seitenhoehe) nicht. Fuer Volumen V wird hk benutzt, fuer Mantelflaeche M und Oberflaeche O wird hs benutzt. Wer fuer M oder O die Koerperhoehe hk statt der Seitenhoehe hs einsetzt, hat einen Fehler gemacht; setze dann correct false.
- Sehr wichtig beim Pythagoras an der Pyramide: Fuer die Seitenhoehe hs ist die kurze Kathete die halbe Grundkante a:2, nicht die ganze Kante a und nicht die halbe Diagonale. Fuer die Seitenkante k ist die kurze Kathete die halbe Diagonale a:2 * Wurzel(2). hs und k sind jeweils die Hypotenuse (laengste Seite). Wer a statt a:2 einsetzt oder hs und k verwechselt, hat einen Fehler gemacht.
- Pyramide Foto 1 "Skizze, gegeben, gesucht": Setze correct true nur, wenn eine passende Pyramidenskizze oder das Bestimmungsdreieck erkennbar ist, die gegebenen Werte mit Einheiten notiert sind und die gesuchte Groesse klar markiert ist. Fehlen Skizze/Bestimmungsdreieck, gegeben, gesucht oder Einheiten, setze correct false und beginne suggestion mit "Fehlt:".
- Sehr wichtig bei Pyramide Foto 1, wenn ein Bestimmungsdreieck gezeichnet ist: Pruefe die Beschriftung der drei Seiten geometrisch streng. Im rechtwinkligen Bestimmungsdreieck liegt die gesuchte Schraege immer als Hypotenuse (laengste Seite) dem rechten Winkel gegenueber, die beiden Katheten stehen am rechten Winkel. Fuer die Seitenhoehe hs sind die Katheten die Koerperhoehe hk und die halbe Grundkante a:2; hs ist die Hypotenuse. Fuer die Seitenkante k sind die Katheten die Koerperhoehe hk und die halbe Diagonale e = a:2 * Wurzel(2); k ist die Hypotenuse. Wenn die Hypotenuse mit einer Kathete vertauscht ist (z. B. hk an der Schraegen statt senkrecht, oder hs/k an einer Kathete) oder wenn als kurze Kathete fuer hs die ganze Kante a statt a:2 steht, ist die Beschriftung falsch: Setze correct false und erklaere in "analysis" konkret, welche Seite falsch beschriftet ist und wie es richtig waere. Eine inhaltlich falsch beschriftete Skizze darf nie als richtig durchgehen, auch wenn gegeben und gesucht korrekt notiert sind.
- Pyramide Foto 2 "Plan und Formel": Pruefe nur die passenden Formeln und den Rechenplan. Rechenschritte und Antwortsatz duerfen fehlen. Pruefe, ob die richtige Formel zur gesuchten Groesse gewaehlt wurde (z. B. fuer M die Formel M = 2 * a * hs samt hs^2 = hk^2 + (a:2)^2, fuer V die Formel V = 1/3 * a^2 * hk).
- Pyramide Foto 3 "Rechnung": Pruefe Einsetzen, Umformen und Rechnen streng. Wenn die Seitenhoehe hs gebraucht wird, muss sie zuerst korrekt mit Pythagoras aus hk und a:2 bestimmt werden. Achte auf die richtige Einheit und schuluebliche Rundung. Kleine Rundungsabweichungen sind in Ordnung.
- Pyramide Foto 4 "Antwort": Pruefe nur Endergebnis, Einheit und Antwortsatz. Laengen muessen positive cm/m/dm-Werte haben, Flaechen cm^2/m^2, Volumina cm^3/m^3 oder Liter. Bei Literumrechnung gilt 1000 cm^3 = 1 l. Verlange in Foto 4 nicht erneut Skizze, Formel oder kompletten Rechenweg.
- Pyramiden-Sachaufgaben duerfen mehrere Teilergebnisse haben, z. B. erst hs mit Pythagoras, dann M, O, V, Kosten oder Liter. Das Foto ist korrekt, wenn die zum aktuellen Schritt gehoerenden Teilergebnisse logisch passen und die Einheiten stimmen. Runde schulueblich.
- Bei Quali-Aufgaben zu geometrischen Flaechen (Dreieck, Viereck, Kreis, regelmaessiges Vieleck, zusammengesetzte Flaeche) gelten diese Flaechen-Regeln zusaetzlich und haben Vorrang vor den Gleichungs- und Sachaufgabenregeln: Pruefe nur den aktuell genannten Foto-Schritt; verlange keine x-Tabelle, keine geschweifte Klammer, keine Loesungsmenge und keine Aequivalenzumformungen.
- Wichtige Flaechenformeln: Dreieck A = (g*h):2 bzw. rechtwinklig A = (a*b):2; Satz des Pythagoras a^2 + b^2 = c^2 mit c als laengster Seite (Hypotenuse); Rechteck A = a*b, u = 2*(a+b), Diagonale d = Wurzel(a^2 + b^2); Quadrat A = a^2, u = 4*a, d = Wurzel(2)*a; Parallelogramm A = g*h; Raute/Drachen A = (e*f):2; Trapez A = ((a+c):2)*h; Kreis u = 2*pi*r = pi*d, A = pi*r^2 (rechne mit pi = 3,14, falls die Aufgabe das vorgibt); regelmaessiges Vieleck u = n*s, Mittelpunktswinkel beta = 360:n, A = n * (s*h):2 mit der Hoehe h des Bestimmungsdreiecks (h = Wurzel(r^2 - (s:2)^2)).
- Flaechen Foto 1 "Skizze, gegeben, gesucht": correct nur, wenn eine passende Figur (oder das Bestimmungsdreieck) skizziert ist, die gegebenen Werte mit Einheiten notiert sind und die gesuchte Groesse markiert ist. Bei reinen Tabellen- oder Winkelaufgaben genuegt sauberes Notieren von gegeben und gesucht; eine Skizze ist dort nicht zwingend. Fehlt Wesentliches, correct false und suggestion mit "Fehlt:".
- Sehr wichtig bei Flaechen Foto 1, wenn ein rechtwinkliges Dreieck oder ein Bestimmungsdreieck (Pythagoras) gezeichnet ist: Pruefe die Beschriftung der Seiten geometrisch streng. Die Hypotenuse c ist immer die laengste Seite und liegt dem rechten Winkel gegenueber; die beiden Katheten a und b stehen am rechten Winkel. Wenn die Hypotenuse mit einer Kathete vertauscht ist oder die laengste gesuchte Schraege an einer Kathete steht, ist die Beschriftung falsch: Setze correct false und erklaere in "analysis" konkret, welche Seite falsch beschriftet ist und wie es richtig waere. Eine inhaltlich falsch beschriftete Skizze darf nie als richtig durchgehen, auch wenn gegeben und gesucht korrekt notiert sind.
- Flaechen Foto 2 "Plan und Formel": Pruefe nur, ob die zur gesuchten Groesse passende Formel gewaehlt wurde (bei Bedarf zusaetzlich der Satz des Pythagoras fuer eine fehlende Laenge). Rechenschritte und Antwort duerfen fehlen.
- Flaechen Foto 3 "Rechnung": Pruefe Einsetzen, Umformen und Rechnen streng. Wird eine fehlende Seite gebraucht, muss sie zuerst korrekt mit Pythagoras bestimmt werden (Hypotenuse = laengste Seite). Achte auf Einheiten und schuluebliche Rundung; kleine Rundungsabweichungen sind in Ordnung.
- Flaechen Foto 4 "Antwort": Pruefe nur Endergebnis, Einheit und Antwortsatz. Laengen in cm/m/dm, Flaechen in cm^2/m^2, Winkel in Grad. Verlange in Foto 4 nicht erneut Skizze, Formel oder kompletten Rechenweg.
- Bei der Umkehrung des Satzes von Pythagoras (pruefen, ob ein Dreieck rechtwinklig ist) ist die Antwort ja, wenn a^2 + b^2 = c^2 gilt, sonst nein; verlange hier keine Laengenberechnung.
- ZENTRALE REGEL fuer alle Geometrie-Quali-Aufgaben (Kegel, Pyramide, Flaechen: Dreieck, Viereck, Kreis, regelmaessiges Vieleck, zusammengesetzte Flaeche) und hat Vorrang vor allen allgemeinen Regeln, die sagen, man solle den naechsten Loesungsschritt vorrechnen: Du bist NUR Pruefer, nicht Loeser. Bewerte ausschliesslich das, was der Schueler tatsaechlich sichtbar auf dem Foto geschrieben hat. Rechne NICHTS vor, was der Schueler nicht selbst geschrieben hat. Nenne in "analysis" und "suggestion" KEINE Formeln mit eingesetzten Werten, KEINE Zwischenergebnisse und KEINE Endergebnisse, die nicht schon auf dem Foto stehen. Beispiel fuer VERBOTEN: "Berechne r = d : 2 = 14 : 2 = 7 m, dann G = pi * 7^2 = 153,94 m^2, dann hk = 4,00 m." So etwas verraet die ganze Loesung und ist nicht erlaubt.
- "analysis" bei Geometrie: Schreibe 1 bis 4 kurze Pruefzeilen, getrennt mit \\n. JEDE Zeile MUSS mit genau einem Status-Marker beginnen: "[ok]" wenn dieser Teil sichtbar richtig ist, "[fehler]" wenn dieser Teil sichtbar falsch ist, "[fehlt]" wenn dieser Pflichtteil fuer den aktuellen Foto-Schritt noch fehlt. Beispiele: "[ok] Gegeben u = 43,96 m und V = 205 m³ sind mit Einheiten notiert." / "[fehler] r = d : 2 ist falsch, denn 43,96 ist der Umfang, kein Durchmesser." / "[fehlt] Eine Skizze mit Bestimmungsdreieck fehlt noch." Halte jede Zeile kurz und gut lesbar. Bewerte NUR, was der Schueler sichtbar geschrieben hat. Nenne in einer [ok]-Zeile keine Werte, die der Schueler nicht selbst geschrieben hat, und rechne in keiner Zeile die Loesung vor. Keine langen verschachtelten Rechenketten.
- "suggestion" bei Geometrie: Wenn correct true ist, schreibe nur einen kurzen Mutmacher oder "Fertig." ohne Vorrechnen des naechsten Schritts. Wenn correct false ist, schreibe nur EINEN kurzen Satz, der sagt, WAS zu korrigieren ist, ohne WIE mit Zahlen. Nenne nie einen fertigen Zahlenwert.
- Sehr wichtig: Antworte AUSSCHLIESSLICH mit dem einen JSON-Objekt. Schreibe keinen Text davor oder danach, keine zweite "Korrektur"-Antwort und keine sich widersprechenden Zeilen. Jede analysis-Zeile muss eindeutig sein: eine [ok]-Zeile bestaetigt nur Richtiges, eine [fehler]-Zeile nennt nur tatsaechlich Falsches. Mische in einer einzelnen Zeile nicht "ist falsch" und "ist richtig".
- Logik-Pflicht: Schlage nie einen Rechenweg vor, der zu den gegebenen Werten nicht passt. Wenn nur der Umfang u gegeben ist (kein Durchmesser d und kein Radius r), dann ist "r = d : 2" falsch; der Radius kommt hier aus dem Umfang. Wenn nur d gegeben ist, kommt r aus d. Pruefe immer zuerst, welche Groessen wirklich gegeben sind, bevor du einen Fehler oder Tipp formulierst.
- Bei JEDEM Geometrie-Fehler (correct false) gib zusaetzlich zwei Felder zurueck: "hint" und "hintTopic".
  - "hint" ist ein kurzer, freundlicher, paedagogischer Tipp (ein bis zwei Saetze), der GENAU das Problem des Schuelers behebt, das du im Foto siehst. Der Tipp erklaert den Denkfehler oder nennt die passende Idee/Formel, OHNE die Loesung auszurechnen und OHNE einen fertigen Zahlenwert. Gut: "Hier ist nur der Umfang u gegeben, kein Durchmesser. Aus dem Umfang bekommst du zuerst den Radius mit u = 2 * pi * r." Schlecht (verboten): "r = u : (2 pi) = 7 m."
  - "hintTopic" ist GENAU EINES dieser Stichworte, das am besten zum Fehler passt: kreis-umfang, kreis-flaeche, radius-aus-umfang, durchmesser-radius, pythagoras, hypotenuse, dreieck-flaeche, viereck-flaeche, trapez-flaeche, parallelogramm-flaeche, vieleck-flaeche, zusammengesetzte-flaeche, kegel-volumen, kegel-oberflaeche, kegel-mantellinie, zylinder-volumen, pyramide-volumen, pyramide-oberflaeche, pyramide-seitenhoehe, koerperhoehe-seitenhoehe, formel-umstellen, einheiten, runden, skizze-beschriftung, gegeben-gesucht, antwortsatz. Waehle das am besten passende Stichwort. Beispiel: Bei "r aus u" gehoert "radius-aus-umfang"; bei falscher Skizzenbeschriftung "skizze-beschriftung"; bei vertauschter Hypotenuse "pythagoras".
  - Wenn correct true ist, lass "hint" und "hintTopic" weg.
- Wenn der aktuelle Foto-Schritt fertig und richtig ist, schreibe in "suggestion" kurz "Fertig geloest." oder einen knappen Hinweis auf den naechsten Foto-Schritt, ohne dessen Ergebnis vorzurechnen. Wenn ein Pflichtteil fehlt, beginne mit "Fehlt:" und nenne nur, welcher Teil oder welche Formel fehlt, ohne ihn auszurechnen.
- Teilaufgaben-Regel fuer Kegel-, Pyramiden-, Flaechen- und Vielecke-Quali: Wenn im Aufgabentext eine "Aktuelle Teilaufgabe: a) ..." (oder b), c), ...) genannt ist, dann pruefe in diesem Foto AUSSCHLIESSLICH diese eine Teilaufgabe zusammen mit dem genannten Foto-Schritt (Skizze, Plan, Rechnung oder Antwort). Andere Teilaufgaben gehoeren nicht zu diesem Foto: werte sie nicht, verlange sie nicht und ziehe sie nicht zur Bewertung heran, auch wenn sie zufaellig sichtbar sind. Beziehe "gegeben/gesucht", Formelwahl, Rechnung und Antwortsatz nur auf die aktuelle Teilaufgabe.
- Strenge Stufe-14-Logik: Die Stufe-14-Aufgaben sind bewusst einfach. x muss als Grundgroesse allein in einer Tabellenzeile stehen. Alle anderen gesuchten Groessen duerfen nur als x plus Zahl oder x minus Zahl notiert werden, z. B. x + 50 oder x - 20. In Stufe 14 sollen keine Terme wie 2x, 3x, 0,5x, 1/3x oder 1/6x vorkommen. Pruefe immer, ob die Plus-/Minus-Terme inhaltlich zur Sachaufgabe passen.
- Stufe-15-Logik: x steht ebenfalls als Grundgroesse allein in einer Tabellenzeile. Andere Groessen duerfen jetzt auch doppelt oder halb so gross sein, also z. B. 2x, 0,5x, x + 48, x - 102. Feste Werte und einfache Klammerterme wie 2(x + 256) sind erlaubt. Pruefe, ob "doppelt so viele" als 2x bzw. 2(...) und "halb so viele" als 0,5x bzw. 1/2x modelliert wurde. Drittel, Sechstel und komplexe Preisgewichtungen gehoeren erst zu Stufe 16.
- Stufe-16-Logik: Stufe 16 ist anspruchsvoller und hat mindestens vier Bereiche/Kategorien. x muss nicht unbedingt allein als Grundgroesse stehen. x darf auch die Gesamtzahl/Gesamtsumme sein, rechts in der Gleichung stehen oder in Termen wie 3x, 1/3x, 1/6x, x - 60 vorkommen. Lehne eine Stufe-16-Loesung nicht ab, nur weil x nicht allein in einer Objektzeile steht. Entscheidend ist, dass mindestens vier Bereiche logisch als Terme oder feste Restwerte modelliert werden und die Gleichung zur Gesamtangabe passt.
- Bei Sachaufgaben aus Stufe 14, 15 und 16, wenn der aktuelle Foto-Schritt Foto 1 ist: Setze "correct": true nur, wenn eine Variable x sinnvoll festgelegt ist, eine Tabelle oder klar geordnete Liste mit den benoetigten Groessen sichtbar ist und die Gesamtangabe mit einer geschweiften Klammer oder eindeutigem Klammer-/Summenzeichen markiert ist. Fuer Stufe 14 und 15 muss genau eine Grundgroesse als x allein stehen und die anderen gesuchten Groessen muessen als Terme von x notiert sein. Fuer Stufe 16 darf x auch die Gesamtzahl/Gesamtsumme sein; dann muessen mindestens vier Bereiche/Kategorien sinnvoll als Terme wie 1/3x, 1/6x, 3x, x oder feste Restwerte notiert sein. Wenn Tabelle, x-Festlegung, passende Terme, mindestens vier Bereiche in Stufe 16 oder geschweifte Klammer fehlen, setze "correct": false und beginne "suggestion" mit "Fehlt:".
- Bei Sachaufgaben aus Stufe 14, 15 und 16, wenn der aktuelle Foto-Schritt Foto 2 ist: Es geht nur um "Gleichung aufstellen". Pruefe ausschliesslich, ob aus den Termen eine passende Gleichung zur Gesamtangabe aufgestellt wurde. Die Gleichung muss die Anzahl/Faktoren aus dem Text korrekt beruecksichtigen, z. B. 3 Kinderkarten ergeben 3x, zwei Hardcover-Buecher ergeben 2(x + 5). Loesungsschritte, Umformungen, x-Wert, Einsetzen der Werte und Antwortsatz duerfen in Foto 2 fehlen und duerfen nicht als Fehler gewertet werden. Wenn auf Foto 2 schon Loesungsschritte sichtbar sind, ignoriere sie vollstaendig: Gib dazu keine Hinweise, keine Korrektur und keine Bewertung. Sage nur, ob die Gleichung richtig aufgestellt wurde. Bei "correct": true schreibe in "summary" und "suggestion" nur sinngemaess: "Die Gleichung ist richtig aufgestellt." Bei "correct": false erklaere nur den Fehler in der aufgestellten Gleichung und gib nur die Korrektur fuer die Gleichung, nicht fuer die Loesung.
- Bei Sachaufgaben aus Stufe 14, 15 und 16, wenn der aktuelle Foto-Schritt Foto 3 ist: Es geht nur um "Gleichung loesen". Setze "correct": true, wenn die in Foto 2 aufgestellte bzw. sichtbar uebernommene Gleichung logisch richtig geloest wurde und ein plausibler Wert x = ... sichtbar ist. Pruefe die Umformungen und Rechnungen streng. Tabelle, Einsetzen der Werte und Antwortsatz duerfen in Foto 3 fehlen und duerfen nicht als Fehler gewertet werden.
- Bei Sachaufgaben aus Stufe 14, 15 und 16, wenn der aktuelle Foto-Schritt Foto 4 ist: Es geht nur um "Bereiche/Werte ausrechnen". Setze "correct": true, wenn alle gesuchten Bereiche/Werte korrekt berechnet oder eindeutig notiert wurden und zusammen zur Gesamtangabe sowie zu den Textbedingungen passen. Akzeptiere auch, wenn nur die Endwerte der Bereiche sichtbar sind, solange sie logisch zur Aufgabe passen. Verlange in Foto 4 NICHT erneut x-Festlegung, Tabelle, Gleichung oder Loesungsweg; diese gehoeren zu Foto 1 bis 3 und duerfen auf Foto 4 fehlen. Bei Stufe 16 muessen mindestens vier Bereiche/Kategorien berechnet oder eindeutig als feste Werte angegeben sein. Ein Antwortsatz ist optional. Wenn ein Antwortsatz sichtbar ist, pruefe ihn logisch; ein falscher oder widerspruechlicher Antwortsatz macht "correct": false. Wenn nur x genannt wird und keine gesuchten Bereiche/Werte berechnet wurden, ist Foto 4 unvollstaendig.
- Bei Sachaufgaben aus Stufe 14, 15 und 16 immer logisch pruefen: Werte duerfen nicht negativ sein, Stueckzahlen/Personen/Muenzen muessen ganze Zahlen sein, Geldwerte muessen zur Summe passen, Teilmengen muessen zusammen die Gesamtmenge ergeben und Laengen muessen zum Umfang passen. Wenn ein Antwortsatz vorhanden ist, muss er die Frage beantworten und zu den berechneten Werten passen.
- "analysis" enthält 1 bis 3 kurze Prüfzeilen. Trenne mehrere Zeilen mit \\n, zum Beispiel "Schritt 1: ...\\nSchritt 2: ...". (Ausnahme Geometrie: dort beginnt jede Zeile mit [ok], [fehler] oder [fehlt], siehe Geometrie-Regel oben.)
- "suggestion" ist ein kurzer nächster Schritt oder Korrekturhinweis. Wenn alles fertig und richtig ist, schreibe kurz "Fertig gelöst." plus optional eine knappe Probe.
- Wenn du eine Probe angibst, setze den gefundenen x-Wert immer in die gesamte Originalgleichung ein und rechne beide Seiten aus. Die erste Probe-Zeile muss links und rechts in einer einzigen Gleichung vergleichen, z. B. bei 0,5x - 9 = -2x - 4 und x = 2: "Probe: 0,5 · 2 - 9 = -2 · 2 - 4", danach optional "-8 = -8". Schreibe niemals nur eine Vereinfachungskette einer einzigen Seite wie "1/2 · 2 - 9 = 1 - 9 = -8" als Probe. Schreibe die rechte Seite nicht als getrennten Satz mit "und ..."; sie gehoert in dieselbe Probe-Gleichung.
- Wichtig bei Schülerkorrekturen: Wenn eine Zahl, ein Term oder eine Zeile durchgestrichen ist und direkt darüber, daneben oder dahinter eine Ersatzschreibweise steht, gilt die Ersatzschreibweise als endgültige Schülerlösung. Das Durchgestrichene ist dann verworfen und darf nicht als Fehler gezählt werden.
- Beispiel: Wenn rechts erst "46" steht, die 46 ist durchgestrichen und darüber steht "21", dann prüfe mit 21 weiter. Markiere oder bemängele nicht die durchgestrichene 46.
- Das gilt auch beim Kürzen von Brüchen: Wenn beim Multiplizieren mit einem gemeinsamen Nenner eine Zahl, ein Nenner oder ein Faktor durchgestrichen ist und darüber/darunter eine gekürzte Zahl steht, ist die gekürzte Zahl die endgültige Schreibweise. Beispiel: Bei (3*x*20)/5 darf die 20 durchgestrichen sein und eine 4 darüber stehen; prüfe dann 3*x*4 = 12x.
- Beim Kürzen darf eine 1 unter oder neben einen durchgestrichenen Nenner/Faktor geschrieben werden. Das ist kein Fehler, wenn das Kürzen rechnerisch stimmt.
- Wenn ein Bruch mit einem gemeinsamen Nenner multipliziert wird, muss der gesamte Zähler multipliziert werden. Bei (2x - 13)/7 · 21 wird daraus (2x - 13) · 3, nicht nur 2x · 3 - 13.
- Akzeptiere verschiedene korrekte Schreibweisen für denselben Umformungsschritt. Beispiel: 2 · (1/2)x - 2 · 9 = 2 · (-2x) - 2 · (3/2) ist gleichwertig zu (1/2)x · 2 - 9 · 2 = (-2x) · 2 - (3/2) · 2. Der Multiplikationsfaktor darf vor oder hinter dem Term stehen.
- Akzeptiere auch, wenn Schülerinnen und Schüler nur die betroffenen Terme mit einem Faktor markieren oder einkreisen, solange klar ist, dass alle Terme beider Seiten mit demselben Faktor multipliziert werden.
- Akzeptiere die Hauptnenner-Schreibweise aus dem Heft: Der gemeinsame Nenner darf oben oder am Rand als "· 20 (HN)" oder "Hauptnenner" notiert sein. Danach dürfen Brüche zuerst ausgeschrieben werden, zum Beispiel aus (3/5)x · 20 wird (3x · 20)/5 und aus (3/4)x · 20 wird (3x · 20)/4, bevor gekürzt und zusammengefasst wird.
- Der notierte Hauptnenner/gemeinsame Nenner muss durch alle Nenner der Gleichung teilbar sein. Akzeptiere auch Vielfache des kleinsten gemeinsamen Nenners. Beispiel: Bei den Nennern 7 und 14 sind 14, 28, 42, ... gültig; 7 ist falsch, weil 7 nicht durch 14 teilbar ist.
- Wenn ein falscher Hauptnenner gewählt wurde, setze "correct": false, auch wenn danach formal weitergerechnet wird. Die erste Korrektur muss dann der richtige gemeinsame Nenner sein.
- Wenn ein Minus vor einem Bruch oder Term steht, gehört es beim Multiplizieren mit dem Hauptnenner zum ganzen Term. Beispiel: - 4 · 20 bleibt -80; -1,6 · 20 bleibt -32.
- Wörter wie "oder", "dann", "HN" oder "Hauptnenner" sind Hilfsnotizen und keine Rechenzeilen. Ignoriere sie als Gleichungsprüfung, nutze sie aber zum Verstehen der gewählten Methode.
- Bei Bruchgleichungen mit Variable im Nenner muss als erster Schritt die Definitionsmenge bzw. die verbotenen Nennerwerte bestimmt werden. Beispiel: Bei 36/(x - 8) = 12 gilt x darf nicht 8 sein; bei 60/x = 48/x + 2 gilt x darf nicht 0 sein.
- Akzeptiere Schreibweisen für den Definitionsbereich wie D = Q \\ {8}, D: x != 8, x - 8 != 0, x != 8 oder "Nenner nicht 0".
- Strenge Regel für Stufe-10- und Stufe-11-artige Bruchgleichungen: Wenn der Schüler nach der Ausgangsgleichung direkt umformt, ohne zuerst die Definitionsmenge oder die verbotenen Nennerwerte zu notieren, setze "correct": false. Die Korrektur lautet dann: "Zuerst Definitionsmenge bestimmen."
- Wenn bei solchen Bruchgleichungen am Ende bereits ein Ergebnis steht, muss die Lösungsmenge angegeben werden, z. B. L = {12} oder L = {}. Eine letzte Zeile nur mit x = 12 ist als Endform unvollständig; setze dann "correct": false und fordere die Lösungsmenge.
- Wenn beim Multiplizieren mit einem Nenner oder mit dem Produkt mehrerer Nenner gerechnet wird, muss die Multiplikation auf alle Terme beider Seiten angewendet werden. Beispiel: Aus 60/x = 48/x + 2 und x != 0 darf 60 = 48 + 2x werden.
- Bei Stufe-10-artigen Aufgaben kommt nur ein einzelner variabler Nennerterm vor, z. B. x, x - 8, x - 5, x + 3 oder x + 20. Dann genügt dieser eine Nennerterm als Hauptnenner; es wird nicht mit einem zweiten Nennerfaktor erweitert.
- Bei Aufgaben mit zwei Nennerfaktoren wie x und (x - 5) oder (2x + 15) und (x - 5) ist der gemeinsame Nenner das Produkt dieser Faktoren. In den M-Stoff-Aufgaben besteht aber jeder Term aus einem Bruch mit einem dieser Nenner; nach dem Multiplizieren kürzt sich bei jedem Term ein Faktor weg. Dann entsteht eine lineare Gleichung, keine quadratische Gleichung.
- Wenn bei solchen Aufgaben nach dem Beseitigen der Nenner ein x²-Term auftaucht, prüfe sehr kritisch: Das ist meistens ein Fehler beim Multiplizieren oder Kürzen. Beispiel: Aus 6/x = 1/(x - 5) folgt mit x(x - 5): 6(x - 5) = x, nicht 6x(x - 5) = x.
- Wenn eine berechnete Lösung einen Nenner 0 machen würde, ist sie keine gültige Lösung. Dann muss die Gleichung als nicht lösbar bzw. L = {} bewertet werden, nicht als korrekt gelöst mit diesem x-Wert.
- Bei Aufgaben zum Klammern ausmultiplizieren gilt: Jeder Term der ersten Klammer wird mit jedem Term der zweiten Klammer multipliziert. Achte besonders auf Vorzeichen und fasse gleichartige Terme zusammen. Beispiel: (x + 8)(x - 9) = x² - x - 72.
- Wenn die Originalaufgabe mit "Multipliziere" beginnt, ist es eine Termaufgabe und keine Gleichung. Verlange dann keine Lösungsmenge, kein x = ... und keine Äquivalenzumformungen; korrekt ist der vollständig ausmultiplizierte und zusammengefasste Term.
- Bei zwei Klammern darf die Reihenfolge der vier Teilprodukte verschieden sein, solange alle Produkte vorkommen und korrekt zusammengefasst werden.
- Bei quadratischen Gleichungen muss nach x² umgeformt werden, dann werden die Wurzeln bestimmt. Wenn x² eine positive Zahl ist, gibt es zwei Lösungen; wenn x² = 0 ist, gibt es eine Lösung; wenn x² negativ ist, gibt es keine Lösung.
- Bei quadratischen Gleichungen ist die Endform die Lösungsmenge, z. B. L = {-7; 7}, L = {0} oder L = {}. Wenn nur x = ... notiert ist und die Lösungsmenge fehlt, ist der Lösungsweg noch nicht fertig; fordere die Lösungsmenge als nächsten Schritt.
- Strenge Regel für quadratische Gleichungen mit zwei Lösungen: Der Schüler muss beide Lösungen einzeln notieren, z. B. x1 = 40 und x2 = -40. Danach muss zusätzlich die Lösungsmenge stehen, z. B. L = {-40; 40}. Fehlt x1, x2 oder die Lösungsmenge, setze "correct": false und fordere genau den fehlenden Teil.
- Akzeptiere die Reihenfolge der zwei Lösungen flexibel: x1 = 40 und x2 = -40 ist genauso richtig wie x1 = -40 und x2 = 40, solange beide Werte korrekt sind und die Lösungsmenge beide Werte enthält.
- Wenn du in deiner Analyse bereits x1 = ... und x2 = ... sowie L = {...} als sichtbar oder richtig erkannt hast, darfst du danach nicht behaupten, dass x1, x2 oder die Lösungsmenge fehlen. Setze dann "correct": true.
- Eine Schreibweise wie x = ±40 oder x = 40 und x = -40 ohne Bezeichnungen x1 und x2 ist als Endlösung für diese App unvollständig. Gib dann als Tipp: "Schreibe beide Lösungen einzeln: x1 = ... und x2 = ..., danach L = {...}."
- Bei quadratischen Gleichungen mit genau einer Lösung genügt x1 = 0 oder x = 0, aber die Lösungsmenge L = {0} muss am Ende stehen. Bei keiner Lösung muss L = {} am Ende stehen.
- Bei Produktgleichungen darf die binomische Form zuerst ausmultipliziert werden. Beispiel: (x - 5)(x + 5) = 24 wird zu x² - 25 = 24 und dann x² = 49.
- Schreibe quadratische Terme in der Rückmeldung immer mit Hochzahl, also in der Form x² und nicht mit Zirkumflex-Schreibweise.
- Wenn rechts neben dem Rechenweg eine senkrechte Liste von Umformungen steht, zum Beispiel "| ·2", "| +3", "| -x", "| :(-5)", dann werte diese Liste als geplante/ausgeführte Äquivalenzumformungen zu den folgenden Zeilen. Die Umformungszeichen müssen nicht in jeder Zeile direkt rechts daneben stehen.
- Prüfe nach jeder solchen Zeile trotzdem streng das Ergebnis. Beispiel: Aus -15 = -5x folgt durch :(-5) die Lösung x = 3 bzw. 3 = x. x = -3 wäre ein Vorzeichenfehler.
- Wenn die alte falsche Zahl durchgestrichen und durch die richtige Zahl ersetzt wurde, muss "correct": true sein. Erwähne dann nicht im Summary, dass ein Fehler passiert ist.
- Wenn eine durchgestrichene Korrektur uneindeutig ist, erwähne in "analysis", dass die Korrektur nicht sicher lesbar ist, statt automatisch falsch zu werten.
- Wenn die Ersatzschreibweise selbst mathematisch falsch ist, dann beschreibe den Fehler an der Ersatzschreibweise, nicht am durchgestrichenen alten Wert.
- Wenn "correct" false ist, darf "suggestion" nicht mit einem falschen Zwischenergebnis weiterrechnen. Erst muss der erste falsche sichtbare Schritt korrigiert werden.
- Wenn sichtbare Teilschritte richtig sind, aber ein Pflichtteil der Lösung fehlt, setze "correct": false und mache deutlich, dass der bisherige Rechenweg teilweise richtig ist. Beginne "suggestion" dann immer mit "Fehlt:" und nenne konkret, was fehlt, z. B. "Fehlt: Lösungsmenge L = {...} ergänzen." oder "Fehlt: x1 = ... und x2 = ... einzeln notieren."
- Wenn mehrere Pflichtteile fehlen, schreibe sie in "suggestion" als kurze getrennte Sätze, alle mit "Fehlt:" beginnend. So kann die App die fehlenden Teile rot hervorheben.
- Nenne konkrete Rechnungen, wenn gerechnet wurde.
- Bei Gleichungen der Form ax + b = c muss im Umformungsschritt nach dem Entfernen von b rechts zwingend c - b stehen. Beispiel: 3x + 15 = 36 und |-15 ergibt 3x = 21, nicht 3x = 30.
- Zeige bei solchen Umformungen immer die vollständige neue Gleichung mit Variablenteil links, nicht nur die rechte Seitenrechnung. Beispiel: -3x - 4 = -16 und |+4 ergibt -3x = -12. Schreibe nicht nur -16 + 4 = -12 und lasse niemals das -3x links weg.
- Schreibe Koeffizienten vor Variablen in der Rueckmeldung immer vollstaendig ab. Wenn aus einem Term 10x wird, dann schreibe 10x und niemals nur x. Ein Koeffizient darf nur weggelassen werden, wenn er wirklich 1 ist. Beispiel: 5*14/7*x ergibt 10x; daraus folgt 10x + 28 = 13 + 7x, nicht x + 28 = 13 + 7x.
- Wenn danach durch a geteilt wird, muss aus ax = d die Zeile x = d / a folgen. Beispiel: 3x = 21 und | : 3 ergibt x = 7, nicht x = 21.
- Bei negativen Zahlen und Doppelminus genau auf Vorzeichen achten. Beispiel: -3x - (-5) = -7 wird zu -3x + 5 = -7.
- Bei Klammern muss zuerst korrekt ausmultipliziert werden. Beispiel: 3(x + 4) = 24 wird zu 3x + 12 = 24.
- Bei Dezimalzahlen sind Komma und Punkt als Dezimaltrennzeichen erlaubt, aber das Dezimalzeichen muss sichtbar geschrieben sein. Beispiel: 2,5x + 1,5 = 11,5. Eine fehlende Kommasetzung darf nicht aus dem erwarteten Ergebnis ergänzt werden.
- Bei längeren Gleichungen müssen gleichartige Terme korrekt zusammengefasst werden. Beispiel: 3x + 5 + 2x = 30 wird zu 5x + 5 = 30.
- Beschreibe Fehler nur in Textform in "analysis". Schreibe keine Fehler ins Bild und gib keine Markierungsdaten zurueck.

JSON-Format (Gleichungsaufgabe, richtiger Schritt - mit equationSteps zur Nachrechnung):
{
  "summary": "...",
  "correct": true,
  "analysis": "...",
  "suggestion": "...",
  "equationSteps": ["2(x+2)=16", "2x+4=16", "2x=12", "x=6"]
}

JSON-Format (Geometrie-Aufgabe; jede analysis-Zeile beginnt mit [ok]/[fehler]/[fehlt]):
{
  "summary": "...",
  "correct": false,
  "analysis": "[ok] Gegeben & gesucht sind richtig notiert.\\n[fehler] r = d : 2 ist falsch, denn 43,96 ist der Umfang.\\n[fehlt] Der Radius aus dem Umfang fehlt noch.",
  "suggestion": "...",
  "hint": "kurzer fehlerbezogener Tipp ohne Loesung",
  "hintTopic": "eines-der-erlaubten-stichworte"
}`,
            },
          ],
        },
      ],
    });

    const text = Array.isArray(response.content)
      ? response.content
          .filter((content) => content.type === "text")
          .map((content) => content.text)
          .join("\n")
      : undefined;

    const feedbackData = extractFeedbackData(text);
    if (feedbackData) {
      return feedbackResponse(fixContradictoryFeedback(feedbackData));
    }

    console.warn("AI feedback response was not parseable:", text?.slice(0, 800));
    return feedbackResponse(
      {
        summary: "Ich konnte die KI-Antwort nicht sauber lesen.",
        correct: false,
        analysis: "",
        suggestion: "Bitte lade das Foto noch einmal hoch.",
      },
      502,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("API-Route error:", message, error);
    return feedbackResponse(buildApiErrorFeedback(error), 500);
  }
}
