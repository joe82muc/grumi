import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

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
  annotations?: ImageAnnotation[];
};

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error(
    "ANTHROPIC_API_KEY missing: please add it to .env.local and restart the dev server.",
  );
}

const anthropic = new Anthropic({
  apiKey: apiKey ?? "",
});

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

function sanitizeCorrectionLabel(label: unknown): string {
  return String(label ?? "").replace(/\s+/g, " ").trim().slice(0, 16);
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
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();
  const jsonMatch = withoutFence.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return null;

  try {
    const parsed = JSON.parse(jsonMatch[0]) as Partial<
      FeedbackData & {
        ocrTokens: OcrToken[];
        errors: OcrError[];
      }
    >;
    if (!parsed || typeof parsed !== "object") return null;
    const ocrTokens = sanitizeOcrTokens(parsed.ocrTokens);
    const ocrErrors = sanitizeOcrErrors(parsed.errors, ocrTokens.length);
    const ocrAnnotations = buildAnnotationsFromOcrErrors(ocrTokens, ocrErrors);

    return {
      summary: String(parsed.summary ?? "Ich habe deinen Rechenschritt geprüft."),
      correct: parsed.correct === true,
      analysis: String(parsed.analysis ?? ""),
      suggestion: String(parsed.suggestion ?? ""),
      annotations:
        ocrAnnotations.length > 0
            ? ocrAnnotations
            : sanitizeAnnotations(parsed.annotations),
    };
  } catch {
    return null;
  }
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
    /l(ö|Ã¶|oe)sung[^.?!]*(richtig|korrekt)/.test(combinedText);
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

export async function POST(req: Request) {
  try {
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

    const supportedMediaTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
    ] as const;
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
    const base64 = Buffer.from(bytes).toString("base64");

    const equation = String(formData.get("equation") ?? "2x + 4 = 10");
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
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

Prüfe den fotografierten Rechenweg des Schülers sorgfältig. Die App-Schritt-Reihenfolge ist nicht entscheidend. Entscheidend ist, dass jede sichtbare geschriebene Zeile mathematisch korrekt aus der vorherigen Zeile bzw. aus der Originalaufgabe folgt.

Regeln:
- Wichtig: Gib nur die vier JSON-Felder "summary", "correct", "analysis" und "suggestion" zurueck. Keine OCR-Token, keine Koordinaten, keine Markierungen.
- Antworte ausschließlich mit gültigem JSON, ohne Markdown-Codeblock.
- "summary" ist ein kurzer, freundlicher Satz für Schüler.
- "correct" ist true, wenn alle sichtbaren Zeilen im Foto mathematisch korrekt sind. Das gilt auch dann, wenn der Rechenweg noch nicht fertig ist und bisher nur die Originalgleichung korrekt abgeschrieben wurde.
- Werte fehlende weitere Lösungsschritte nicht als Fehler. Wenn nur die korrekte Ausgangsgleichung zu sehen ist, setze "correct": true, schreibe in "summary", dass die Gleichung richtig abgeschrieben wurde, und gib in "suggestion" den nächsten sinnvollen Lösungsschritt an.
- Setze "correct": false nur, wenn eine sichtbare Zeile mathematisch falsch ist, falsch abgeschrieben wurde oder ein sichtbarer Umformungsschritt nicht korrekt aus der vorherigen Zeile folgt.
- "analysis" enthält 1 bis 3 kurze Prüfzeilen. Trenne mehrere Zeilen mit \\n, zum Beispiel "Schritt 1: ...\\nSchritt 2: ...".
- "suggestion" ist ein kurzer nächster Schritt oder Korrekturhinweis. Wenn alles fertig und richtig ist, schreibe kurz "Fertig gelöst." plus optional eine knappe Probe.
- Wichtig bei Schülerkorrekturen: Wenn eine Zahl, ein Term oder eine Zeile durchgestrichen ist und direkt darüber, daneben oder dahinter eine Ersatzschreibweise steht, gilt die Ersatzschreibweise als endgültige Schülerlösung. Das Durchgestrichene ist dann verworfen und darf nicht als Fehler gezählt werden.
- Beispiel: Wenn rechts erst "46" steht, die 46 ist durchgestrichen und darüber steht "21", dann prüfe mit 21 weiter. Markiere oder bemängele nicht die durchgestrichene 46.
- Wenn die alte falsche Zahl durchgestrichen und durch die richtige Zahl ersetzt wurde, muss "correct": true sein. Erwähne dann nicht im Summary, dass ein Fehler passiert ist.
- Wenn eine durchgestrichene Korrektur uneindeutig ist, erwähne in "analysis", dass die Korrektur nicht sicher lesbar ist, statt automatisch falsch zu werten.
- Wenn die Ersatzschreibweise selbst mathematisch falsch ist, dann beschreibe den Fehler an der Ersatzschreibweise, nicht am durchgestrichenen alten Wert.
- Wenn "correct" false ist, darf "suggestion" nicht mit einem falschen Zwischenergebnis weiterrechnen. Erst muss der erste falsche sichtbare Schritt korrigiert werden.
- Nenne konkrete Rechnungen, wenn gerechnet wurde.
- Bei Gleichungen der Form ax + b = c muss im Umformungsschritt nach dem Entfernen von b rechts zwingend c - b stehen. Beispiel: 3x + 15 = 36 und |-15 ergibt 3x = 21, nicht 3x = 30.
- Wenn danach durch a geteilt wird, muss aus ax = d die Zeile x = d / a folgen. Beispiel: 3x = 21 und | : 3 ergibt x = 7, nicht x = 21.
- Bei negativen Zahlen und Doppelminus genau auf Vorzeichen achten. Beispiel: -3x - (-5) = -7 wird zu -3x + 5 = -7.
- Bei Klammern muss zuerst korrekt ausmultipliziert werden. Beispiel: 3(x + 4) = 24 wird zu 3x + 12 = 24.
- Bei Dezimalzahlen sind Komma und Punkt als Dezimaltrennzeichen erlaubt. Beispiel: 2,5x + 1,5 = 11,5.
- Bei längeren Gleichungen müssen gleichartige Terme korrekt zusammengefasst werden. Beispiel: 3x + 5 + 2x = 30 wird zu 5x + 5 = 30.
- Beschreibe Fehler nur in Textform in "analysis". Schreibe keine Fehler ins Bild und gib keine Markierungsdaten zurueck.

JSON-Format:
{
  "summary": "...",
  "correct": true,
  "analysis": "...",
  "suggestion": "..."
}`,
            },
          ],
        },
      ],
    });

    const firstContent = Array.isArray(response.content)
      ? response.content[0]
      : null;
    const text =
      firstContent && firstContent.type === "text"
        ? firstContent.text
        : undefined;

    const feedbackData = extractFeedbackData(text);
    if (feedbackData) {
      return feedbackResponse(fixContradictoryCorrectionFeedback(feedbackData));
    }

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
    return feedbackResponse(
      {
        summary: "Fehler bei der Analyse.",
        correct: false,
        analysis: message,
        suggestion: "Bitte versuche es gleich noch einmal.",
      },
      500,
    );
  }
}
