/*
 * KI-Pruefung fuer die Gleichungs-Uebung der Jahrgangsstufe 7.
 *
 * Ablauf: Die KI liest das Foto (Abschrift Zeile fuer Zeile) und formuliert
 * eine Rueckmeldung. Der Rechen-Pruefer aus ./klasse7 rechnet die Abschrift
 * nach. Wo beide sich widersprechen, gilt die Rechnung. Denkanstoesse
 * verraten nie das Ergebnis; die richtige Zeile gibt es nur auf Knopfdruck.
 */
import Anthropic from "@anthropic-ai/sdk";
import {
  Frac,
  analyseLine,
  checkEquationWork,
  checkProbe,
  checkTermWork,
  numbersIn,
  parseExpression,
  normalizeMath,
  revealsNumber,
  solve,
  type ErrorKind,
  type LineStatus,
  type ProbeStatus,
  type SetupKind,
  type WorkCheck,
} from "./klasse7";

export type Klasse7TaskType = "term" | "gleichung" | "raetsel" | "sachaufgabe" | "profi";

export type Klasse7Task = {
  type: Klasse7TaskType;
  level: string;
  /** Aufgabentext, wie er auf der Seite steht */
  text: string;
  /** Termaufgaben: Term und Einsetzwert */
  term: string;
  xValue: Frac | null;
  /** Gleichung der Aufgabe bzw. Modellgleichung einer Sachaufgabe */
  equation: string;
  /** Hilfe auf dem Aufgabenblatt, z. B. "x = Preis für ein Heft" */
  variable: string;
  /** Mehrere Groessen: erwartete Werte */
  values: { name: string; value: Frac }[];
};

const TASK_TYPES: Klasse7TaskType[] = ["term", "gleichung", "raetsel", "sachaufgabe", "profi"];

const ERROR_KINDS: ErrorKind[] = [
  "keiner",
  "abschreibfehler",
  "rechenfehler",
  "vorzeichen",
  "nur-eine-seite",
  "gegenteil",
  "nur-ein-teil",
  "zusammenfassen",
  "punkt-vor-strich",
  "einsetzen",
  "gleichung-aufstellen",
  "unleserlich",
  "anderes",
];

function field(formData: FormData, name: string, maxLength: number): string {
  return String(formData.get(name) ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function tryFrac(text: string): Frac | null {
  try {
    return text ? Frac.parseSigned(text) : null;
  } catch {
    return null;
  }
}

/** Liest die Aufgabe aus dem Formular der 7er-Seite. */
export function readKlasse7Task(formData: FormData): Klasse7Task {
  const rawType = field(formData, "aufgabenTyp", 20) as Klasse7TaskType;
  const type = TASK_TYPES.includes(rawType) ? rawType : "gleichung";
  const text = field(formData, "equation", 700);
  let values: { name: string; value: Frac }[] = [];
  try {
    const parsed = JSON.parse(String(formData.get("werte") ?? "[]"));
    if (Array.isArray(parsed)) {
      values = parsed
        .slice(0, 6)
        .map((entry) => ({
          name: String(entry?.name ?? "").slice(0, 40),
          value: tryFrac(String(entry?.wert ?? "")),
        }))
        .filter((entry): entry is { name: string; value: Frac } => entry.value !== null);
    }
  } catch {
    values = [];
  }
  return {
    type,
    level: field(formData, "taskLevel", 80),
    text,
    term: field(formData, "term", 60),
    xValue: tryFrac(field(formData, "xWert", 12)),
    equation: field(formData, type === "gleichung" ? "gleichung" : "modell", 160) || (type === "gleichung" ? text : ""),
    variable: field(formData, "variable", 160),
    values,
  };
}

/* ------------------------------------------------------------------ */
/* Prompt und Antwortformat                                            */
/* ------------------------------------------------------------------ */

const SYSTEM_PROMPT = `Du bist eine freundliche, geduldige Mathe-Lehrkraft an einer bayerischen Mittelschule. Du gibst Rückmeldung zu einem fotografierten, handschriftlichen Rechenweg aus der 7. Klasse (R-Zug oder M-Zug).

Grundlage ist der LehrplanPLUS Mittelschule Bayern, Lernbereich „Gleichungen“ (M7 7): Terme mit einer Variablen durch Einsetzen berechnen und vereinfachen, Gleichungen der Form ax + b = c mit ganzen Zahlen durch Äquivalenzumformungen lösen (Modell Balkenwaage: auf beiden Seiten dasselbe rechnen), die Lösung mit einer Probe überprüfen und Sachsituationen mit Gleichungen darstellen. Die Kinder sind etwa 12 bis 13 Jahre alt. Viele lernen Deutsch als Zweitsprache.

So arbeitest du:

1. Abschreiben
- Schreibe den Rechenweg Zeile für Zeile in "zeilen" ab, genau so, wie er dasteht, auch wenn etwas falsch ist. Verbessere beim Abschreiben keine Fehler. Ein Computer rechnet deine Abschrift danach nach.
- Lies Handschrift wohlwollend: Ist ein Zeichen mehrdeutig (4 oder y, 1 oder 7, 5 oder S, 0 oder O, z oder 2, g oder 9, b oder 6), nimm die Lesart, die zum Rechenweg passt. Eine eindeutig geschriebene falsche Zahl bleibt falsch.
- Schreibweise in "zeilen": Malpunkt als ·, geteilt als :, Minus als -, Dezimalkomma als Komma, negative Zahlen nach einem Rechenzeichen in Klammern, z. B. 3 · (-2). Die Variable heißt x.
- Was rechts hinter einem senkrechten Strich steht (Kommandostrich, z. B. | -15 oder | :3), gehört nicht zur Gleichung. Schreibe es ohne Strich in "umformung", z. B. "-15" oder ":3". Ohne Kommandostrich schreibst du "".
- Durchgestrichenes lässt du weg. Es gilt die Verbesserung.
- Die Probe (das Ergebnis in die Aufgabe eingesetzt) kommt nicht in "zeilen", sondern in "probe". Einen Antwortsatz schreibst du in "antwortsatz", eine Festlegung wie "x = Preis für ein Heft" in "variable".
- Bei Sachaufgaben gehören auch die Rechnungen für die gesuchten Werte in "zeilen", z. B. "rot: 120 + 50 = 170". In "werte" stehen zusätzlich nur die Endwerte, z. B. "rot: 170".
- Setze "lesbar": false, wenn du den Rechenweg nicht sicher lesen kannst oder das Foto keinen Rechenweg zeigt. Setze "passtZurAufgabe": false, wenn das Foto eine andere Aufgabe zeigt.

2. Prüfen
- Prüfe, ob jede Zeile richtig aus der Zeile davor folgt, die erste Zeile aus der Aufgabe. "status" je Zeile: "ok", "fehler" (die erste falsche Zeile), "folgefehler" (nach einem Fehler richtig weitergerechnet) oder "unklar".
- "correct": true, wenn alle Zeilen richtig sind, auch wenn der Rechenweg noch nicht fertig ist.
- "fertig": true, wenn das Ergebnis richtig dasteht (x = … bzw. der Wert des Terms). Bei Sachaufgaben müssen alle gefragten Werte ausgerechnet sein. Ein Antwortsatz ist erwünscht, aber keine Pflicht.
- Jeder richtige Weg zählt: Umformen mit Kommandostrich, Rückwärtsrechnen oder systematisches Probieren. Ein fehlender Kommandostrich ist kein Fehler.
- "fehlerZeile": Nummer der ersten falschen Zeile (1 = erste Zeile in "zeilen"), 0 wenn alles richtig ist.
- "fehlerArt": "keiner" wenn alles richtig ist, sonst eine dieser Arten: "abschreibfehler" (Aufgabe falsch abgeschrieben), "rechenfehler", "vorzeichen", "nur-eine-seite" (nur auf einer Seite umgeformt), "gegenteil" (falsche Umkehrrechnung, z. B. + statt − oder − statt :), "nur-ein-teil" (beim Teilen nicht jeden Teil geteilt), "zusammenfassen", "punkt-vor-strich", "einsetzen" (falsche Zahl für x eingesetzt), "gleichung-aufstellen" (Gleichung passt nicht zum Text), "unleserlich", "anderes".

3. Rückmelden wie eine gute Lehrkraft
- Einfache Sprache: kurze Sätze mit höchstens 15 Wörtern, Du-Form, freundlich und ermutigend. Fachwörter nur diese: Gleichung, Term, Kommandostrich, Probe, Waage, auf beiden Seiten, Gegenteil, zusammenfassen, Vorzeichen, Punkt vor Strich.
- "lob": Nenne konkret, was schon gelungen ist, z. B. "Die erste Umformung mit - 15 ist richtig." Nicht nur "Gut gemacht".
- Sprich nur den ersten Fehler an. Folgefehler zählen nicht extra.
- "denkanstoss": Hilf dem Kind, den Fehler selbst zu finden. Zeige auf die Stelle und stelle eine Frage oder gib einen Hinweis, z. B. "Rechne auf der rechten Seite 36 - 15 noch einmal." oder "Was ist das Gegenteil von · 3?". Verrate dabei keine richtige Zahl, die noch nicht auf dem Foto steht, und kein Ergebnis.
- "loesungsschritt": die richtige Fassung der falschen Zeile, z. B. "3x = 21". Das Kind sieht sie erst, wenn es darauf tippt. Leer, wenn alles richtig ist.
- "naechsterSchritt": Ist alles richtig, aber noch nicht fertig: Welcher Schritt kommt als Nächstes? Nur als Hinweis, ohne Ergebnis. Ist die Aufgabe fertig und fehlt die Probe: Ermuntere zur Probe. Sonst ein kurzer Glückwunsch.
- "hinweis": höchstens ein kurzer Tipp zur Schreibweise (Kommandostrich, Antwortsatz, gut lesbare Zahlen), sonst "".
- "summary": ein kurzer Satz als Überschrift.
- Bewerte nur, was sichtbar ist. Erfinde nichts.`;

const STATUS_VALUES = ["ok", "fehler", "folgefehler", "unklar"] as const;

const ANSWER_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "lesbar",
    "passtZurAufgabe",
    "zeilen",
    "probe",
    "variable",
    "antwortsatz",
    "werte",
    "correct",
    "fertig",
    "fehlerZeile",
    "fehlerArt",
    "summary",
    "lob",
    "denkanstoss",
    "loesungsschritt",
    "naechsterSchritt",
    "hinweis",
  ],
  properties: {
    lesbar: { type: "boolean" },
    passtZurAufgabe: { type: "boolean" },
    zeilen: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["text", "umformung", "status"],
        properties: {
          text: { type: "string" },
          umformung: { type: "string" },
          status: { type: "string", enum: [...STATUS_VALUES] },
        },
      },
    },
    probe: {
      type: "object",
      additionalProperties: false,
      required: ["vorhanden", "zeilen", "stimmt"],
      properties: {
        vorhanden: { type: "boolean" },
        zeilen: { type: "array", items: { type: "string" } },
        stimmt: { type: "boolean" },
      },
    },
    variable: { type: "string" },
    antwortsatz: { type: "string" },
    werte: { type: "array", items: { type: "string" } },
    correct: { type: "boolean" },
    fertig: { type: "boolean" },
    fehlerZeile: { type: "integer" },
    fehlerArt: { type: "string", enum: ERROR_KINDS },
    summary: { type: "string" },
    lob: { type: "string" },
    denkanstoss: { type: "string" },
    loesungsschritt: { type: "string" },
    naechsterSchritt: { type: "string" },
    hinweis: { type: "string" },
  },
} as const;

const TYPE_LABELS: Record<Klasse7TaskType, string> = {
  term: "Term berechnen (Zahl für x einsetzen)",
  gleichung: "Gleichung lösen",
  raetsel: "Zahlenrätsel",
  sachaufgabe: "Sachaufgabe",
  profi: "Sachaufgabe mit mehreren Größen",
};

function referenceX(task: Klasse7Task): Frac | null {
  const info = analyseLine(task.equation);
  if (info.kind !== "gleichung") return null;
  const solution = solve(info);
  return solution.kind === "eindeutig" ? solution.x : null;
}

function termValue(task: Klasse7Task): Frac | null {
  if (!task.term || !task.xValue) return null;
  try {
    const lin = parseExpression(normalizeMath(task.term));
    return lin.a.mul(task.xValue).add(lin.b);
  } catch {
    return null;
  }
}

function buildTaskText(task: Klasse7Task): string {
  const lines = [
    "<aufgabe>",
    `Stufe: ${task.level || "Klasse 7"}`,
    `Aufgabentyp: ${TYPE_LABELS[task.type]}`,
    `Aufgabe: ${task.text}`,
  ];
  if (task.type === "term") {
    lines.push(
      "Der Rechenweg besteht aus Einsetzen und Ausrechnen, z. B. 3 · 4 + 1 = 12 + 1 = 13. Eine Probe gibt es hier nicht.",
    );
    const value = termValue(task);
    if (value) lines.push(`<musterloesung nur_fuer_dich="ja">Wert des Terms: ${value}</musterloesung>`);
  } else if (task.type !== "gleichung") {
    if (task.variable) lines.push(`Mögliche Festlegung von x (steht als Tipp auf der Seite): ${task.variable}`);
    const x = referenceX(task);
    lines.push(`<musterloesung nur_fuer_dich="ja">`);
    if (task.equation) lines.push(`Gleichung: ${task.equation}`);
    if (x) lines.push(`Lösung: x = ${x}`);
    if (task.values.length) {
      lines.push(`Gesuchte Werte: ${task.values.map((entry) => `${entry.name} = ${entry.value}`).join("; ")}`);
    }
    lines.push("</musterloesung>");
    lines.push(
      "Verrate die Musterlösung nicht. Andere richtige Wege und andere sinnvolle Festlegungen von x sind erlaubt.",
    );
  }
  lines.push("</aufgabe>");
  lines.push("Prüfe das Foto und antworte im vorgegebenen JSON-Format.");
  return lines.join("\n");
}

/* ------------------------------------------------------------------ */
/* KI-Antwort einlesen                                                 */
/* ------------------------------------------------------------------ */

type KiLine = { text: string; umformung: string; status: (typeof STATUS_VALUES)[number] };

type KiAnswer = {
  lesbar: boolean;
  passtZurAufgabe: boolean;
  zeilen: KiLine[];
  probe: { vorhanden: boolean; zeilen: string[]; stimmt: boolean };
  variable: string;
  antwortsatz: string;
  werte: string[];
  correct: boolean;
  fertig: boolean;
  fehlerZeile: number;
  fehlerArt: ErrorKind;
  summary: string;
  lob: string;
  denkanstoss: string;
  loesungsschritt: string;
  naechsterSchritt: string;
  hinweis: string;
};

function text(value: unknown, maxLength = 400): string {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function parseJsonObject(raw: string): Record<string, unknown> | null {
  const cleaned = raw.replace(/```(?:json)?/gi, "").trim();
  const candidates = [cleaned];
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start >= 0 && end > start) candidates.push(cleaned.slice(start, end + 1));
  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object") return parsed as Record<string, unknown>;
    } catch {
      // naechsten Kandidaten versuchen
    }
  }
  return null;
}

function sanitizeAnswer(raw: Record<string, unknown>): KiAnswer {
  const lines = Array.isArray(raw.zeilen) ? raw.zeilen : [];
  const probe = (raw.probe && typeof raw.probe === "object" ? raw.probe : {}) as Record<string, unknown>;
  const errorKind = String(raw.fehlerArt ?? "") as ErrorKind;
  return {
    lesbar: raw.lesbar !== false,
    passtZurAufgabe: raw.passtZurAufgabe !== false,
    zeilen: lines.slice(0, 24).map((line) => {
      const entry = (line && typeof line === "object" ? line : {}) as Record<string, unknown>;
      const status = String(entry.status ?? "unklar") as KiLine["status"];
      return {
        text: text(entry.text, 160),
        umformung: text(entry.umformung, 24),
        status: STATUS_VALUES.includes(status) ? status : "unklar",
      };
    }).filter((line) => line.text),
    probe: {
      vorhanden: probe.vorhanden === true,
      zeilen: (Array.isArray(probe.zeilen) ? probe.zeilen : []).slice(0, 8).map((line) => text(line, 160)).filter(Boolean),
      stimmt: probe.stimmt === true,
    },
    variable: text(raw.variable, 160),
    antwortsatz: text(raw.antwortsatz, 300),
    werte: (Array.isArray(raw.werte) ? raw.werte : []).slice(0, 8).map((line) => text(line, 80)).filter(Boolean),
    correct: raw.correct === true,
    fertig: raw.fertig === true,
    fehlerZeile: Number.isInteger(raw.fehlerZeile) ? Number(raw.fehlerZeile) : 0,
    fehlerArt: ERROR_KINDS.includes(errorKind) ? errorKind : "anderes",
    summary: text(raw.summary, 160),
    lob: text(raw.lob, 300),
    denkanstoss: text(raw.denkanstoss, 400),
    loesungsschritt: text(raw.loesungsschritt, 120),
    naechsterSchritt: text(raw.naechsterSchritt, 300),
    hinweis: text(raw.hinweis, 200),
  };
}

function responseText(response: Anthropic.Message): string {
  return response.content
    .filter((block): block is Anthropic.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n");
}

async function askModel(
  anthropic: Anthropic,
  model: string,
  image: { base64: string; mediaType: "image/jpeg" | "image/png" | "image/gif" | "image/webp" },
  task: Klasse7Task,
): Promise<KiAnswer | null> {
  const content: Anthropic.ContentBlockParam[] = [
    { type: "image", source: { type: "base64", media_type: image.mediaType, data: image.base64 } },
    { type: "text", text: buildTaskText(task) },
  ];
  const base = {
    model,
    max_tokens: 3000,
    system: [
      { type: "text" as const, text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" as const } },
    ],
  };

  let response: Anthropic.Message;
  try {
    response = await anthropic.messages.create({
      ...base,
      messages: [{ role: "user", content }],
      output_config: { format: { type: "json_schema", schema: ANSWER_SCHEMA } },
    });
  } catch (error) {
    if (!(error instanceof Anthropic.BadRequestError)) throw error;
    // z. B. ein Modell ohne strukturierte Ausgabe: zweiter Versuch mit reinem JSON-Hinweis
    console.warn("Klasse 7: strukturierte Ausgabe abgelehnt, zweiter Versuch:", error.message);
    response = await anthropic.messages.create({
      ...base,
      messages: [
        {
          role: "user",
          content: [
            ...content,
            {
              type: "text",
              text: `Antworte nur mit einem JSON-Objekt nach diesem Schema, ohne Text davor oder danach:\n${JSON.stringify(ANSWER_SCHEMA)}`,
            },
          ],
        },
      ],
    });
  }

  if (response.stop_reason === "refusal" || response.stop_reason === "max_tokens") {
    console.warn("Klasse 7: KI-Antwort unvollständig:", response.stop_reason);
  }
  const parsed = parseJsonObject(responseText(response));
  return parsed ? sanitizeAnswer(parsed) : null;
}

/* ------------------------------------------------------------------ */
/* KI-Urteil und Nachrechnung zusammenfuehren                          */
/* ------------------------------------------------------------------ */

export type Klasse7Feedback = {
  modus: "klasse7";
  summary: string;
  correct: boolean;
  analysis: string;
  suggestion: string;
  lesbar: boolean;
  passtZurAufgabe: boolean;
  fertig: boolean;
  zeilen: { text: string; umformung: string; status: LineStatus }[];
  fehlerZeile: number;
  fehlerArt: ErrorKind;
  lob: string;
  denkanstoss: string;
  loesungsschritt: string;
  loesungsUmformung: string;
  naechsterSchritt: string;
  naechsteZeile: string;
  naechsteUmformung: string;
  nachFehlerRichtig: boolean;
  hinweis: string;
  probe: ProbeStatus | "entfaellt";
  antwortsatz: boolean;
  geprueft: "rechner" | "ki";
};

const KI_STATUS: Record<KiLine["status"], LineStatus> = {
  ok: "ok",
  fehler: "fehler",
  folgefehler: "folge",
  unklar: "unklar",
};

function runCheck(task: Klasse7Task, answer: KiAnswer): WorkCheck | null {
  try {
    if (task.type === "term") {
      if (!task.xValue || !task.term) return null;
      return checkTermWork({
        term: task.term,
        xValue: task.xValue,
        lines: answer.zeilen.map((line) => line.text),
      });
    }
    if (!task.equation) return null;
    const setup: SetupKind | undefined = task.type === "gleichung" ? undefined : task.type;
    return checkEquationWork({
      task: task.equation,
      setup,
      allowedX: task.type === "profi" ? task.values.map((entry) => entry.value) : undefined,
      lines: answer.zeilen.map((line) => ({ text: line.text, op: line.umformung })),
    });
  } catch (error) {
    console.warn("Klasse 7: Nachrechnen nicht möglich:", error instanceof Error ? error.message : error);
    return null;
  }
}

function legacyAnalysis(zeilen: Klasse7Feedback["zeilen"]): string {
  const marker: Record<LineStatus, string> = {
    ok: "[ok]",
    fehler: "[fehler]",
    folge: "[ok]",
    unklar: "[ok]",
  };
  return zeilen.map((line) => `${marker[line.status]} ${line.text}`).join("\n");
}

export function mergeKlasse7(task: Klasse7Task, answer: KiAnswer): Klasse7Feedback {
  const empty: Klasse7Feedback = {
    modus: "klasse7",
    summary: "",
    correct: false,
    analysis: "",
    suggestion: "",
    lesbar: true,
    passtZurAufgabe: true,
    fertig: false,
    zeilen: [],
    fehlerZeile: 0,
    fehlerArt: "keiner",
    lob: "",
    denkanstoss: "",
    loesungsschritt: "",
    loesungsUmformung: "",
    naechsterSchritt: "",
    naechsteZeile: "",
    naechsteUmformung: "",
    nachFehlerRichtig: false,
    hinweis: "",
    probe: task.type === "term" ? "entfaellt" : "keine",
    antwortsatz: Boolean(answer.antwortsatz),
    geprueft: "ki",
  };

  if (!answer.lesbar) {
    const summary = "Ich kann dein Foto leider nicht sicher lesen.";
    const tip = "Mach ein neues Foto: helles Licht, Heft gerade halten, nur diese Aufgabe aufs Bild.";
    return { ...empty, lesbar: false, fehlerArt: "unleserlich", summary, naechsterSchritt: tip, suggestion: tip };
  }

  const check = runCheck(task, answer);
  const verified = Boolean(check?.verified);

  let passt = answer.passtZurAufgabe;
  if (!passt && verified && check && check.errorIndex !== 0) passt = true;
  if (!passt) {
    const summary = "Das Foto passt nicht zu dieser Aufgabe.";
    const tip = "Prüfe, ob oben die richtige Aufgabe gewählt ist, und mach dann ein neues Foto.";
    return { ...empty, passtZurAufgabe: false, summary, naechsterSchritt: tip, suggestion: tip };
  }

  // Zeilen, die der Rechner nicht auswerten kann (z. B. "x = Preis für ein Heft"),
  // behalten ein "ok" der KI; ein "fehler" der KI zaehlt dort nicht.
  const zeilen = answer.zeilen.map((line, index) => {
    const engine = check?.statuses[index];
    const kiStatus = KI_STATUS[line.status];
    let status: LineStatus = kiStatus;
    if (verified) {
      status = engine && engine !== "unklar" ? engine : kiStatus === "ok" ? "ok" : "unklar";
    }
    return { text: line.text, umformung: line.umformung, status };
  });

  // Richtige Werte, die ein Denkanstoss nicht verraten darf
  const reference = task.type === "term" ? termValue(task) : check?.reference ?? referenceX(task);
  const forbidden: Frac[] = [
    ...(reference ? [reference] : []),
    ...task.values.map((entry) => entry.value),
  ];
  const allowed = [
    ...numbersIn(task.type === "term" ? `${task.term} ${task.xValue ?? ""}` : task.text),
    ...answer.zeilen.flatMap((line) => numbersIn(`${line.text} ${line.umformung}`)),
  ];
  const safe = (value: string, extraForbidden: Frac[] = []) =>
    value && !revealsNumber(value, [...forbidden, ...extraForbidden], allowed) ? value : "";

  let result: Klasse7Feedback;

  if (verified && check) {
    const errorIndex = check.errorIndex;
    const kiAgrees = answer.fehlerZeile === errorIndex + 1 && !answer.correct;

    if (errorIndex >= 0) {
      const diagnosis = check.diagnosis;
      const fix = diagnosis?.fix || (kiAgrees ? answer.loesungsschritt : "");
      const fixNumbers = numbersIn(fix);
      const okBefore = zeilen.slice(0, errorIndex).filter((line) => line.status === "ok").length;
      const specific = diagnosis && diagnosis.kind !== "anderes";
      const templateLob =
        okBefore === 0
          ? "Gut, dass du deinen Rechenweg aufschreibst."
          : okBefore === 1
            ? "Deine erste Zeile ist richtig."
            : `Die ersten ${okBefore} Zeilen sind richtig.`;
      result = {
        ...empty,
        correct: false,
        fertig: false,
        zeilen,
        fehlerZeile: errorIndex + 1,
        fehlerArt: specific ? diagnosis.kind : kiAgrees ? answer.fehlerArt : diagnosis?.kind ?? "anderes",
        summary: (kiAgrees && safe(answer.summary, fixNumbers)) || `Fast! In Zeile ${errorIndex + 1} hat sich ein Fehler eingeschlichen.`,
        lob: (kiAgrees && safe(answer.lob, fixNumbers)) || templateLob,
        denkanstoss: specific
          ? diagnosis.hint
          : (kiAgrees && safe(answer.denkanstoss, fixNumbers)) || diagnosis?.hint || "Vergleiche diese Zeile genau mit der Zeile davor.",
        loesungsschritt: fix,
        loesungsUmformung: diagnosis?.fixOp ?? "",
        naechsterSchritt: "Verbessere zuerst diese Zeile. Rechne dann von dort aus weiter.",
        nachFehlerRichtig: zeilen.some((line) => line.status === "folge"),
        hinweis: safe(answer.hinweis, fixNumbers),
        geprueft: "rechner",
      };
    } else {
      let fertig = check.finished;
      let naechsterSchritt = "";
      let naechsteZeile = "";
      let naechsteUmformung = "";

      if (fertig && !check.showsWork) {
        fertig = false;
        naechsterSchritt =
          task.type === "term"
            ? `Das Ergebnis stimmt. Schreib jetzt noch auf, wie du rechnest: Ersetze x durch ${task.xValue ?? "die Zahl"}.`
            : "Das Ergebnis stimmt. Schreib jetzt noch den Rechenweg dazu: jeden Schritt mit Kommandostrich.";
      }

      if (fertig && task.type === "profi" && task.values.length) {
        const written = numbersIn(answer.werte.concat(answer.zeilen.map((line) => line.text)).join(" "));
        const missing = task.values.filter((entry) => !written.some((number) => number.equals(entry.value.abs())));
        if (missing.length) {
          fertig = false;
          naechsterSchritt = "Dein x stimmt. Rechne jetzt alle gesuchten Werte aus: Setze x in jeden Term ein.";
        }
      }

      if (!fertig && !naechsterSchritt && check.next) {
        naechsterSchritt = check.next.hint;
        naechsteZeile = check.next.fix;
        naechsteUmformung = check.next.fixOp;
      }
      if (!fertig && !naechsterSchritt) {
        naechsterSchritt = safe(answer.naechsterSchritt) || "Rechne weiter, bis x allein steht.";
      }

      result = {
        ...empty,
        correct: true,
        fertig,
        zeilen,
        fehlerZeile: 0,
        fehlerArt: "keiner",
        summary: fertig
          ? (answer.correct && answer.summary) || "Super! Deine Lösung ist richtig."
          : "Bis hierhin ist alles richtig.",
        lob: fertig ? answer.lob || "Jeder Schritt ist richtig." : safe(answer.lob) || "Jede Zeile ist richtig umgeformt.",
        naechsterSchritt,
        naechsteZeile,
        naechsteUmformung,
        hinweis: fertig ? answer.hinweis : safe(answer.hinweis),
        geprueft: "rechner",
      };
      if (answer.fehlerZeile > 0 || !answer.correct) {
        console.info("Klasse 7: KI meldete einen Fehler, die Nachrechnung nicht. Es gilt die Nachrechnung.", {
          level: task.level,
          kiFehlerZeile: answer.fehlerZeile,
          kiFehlerArt: answer.fehlerArt,
        });
      }
    }
  } else {
    // Nicht nachrechenbar (z. B. Probieren mit Tabelle): KI-Urteil, aber ohne Ergebnis im Denkanstoss
    const correct = answer.correct;
    const fertig = correct && answer.fertig;
    result = {
      ...empty,
      correct,
      fertig,
      zeilen,
      fehlerZeile: correct ? 0 : Math.max(0, Math.min(answer.fehlerZeile, zeilen.length)),
      fehlerArt: correct ? "keiner" : answer.fehlerArt,
      summary: (fertig ? answer.summary : safe(answer.summary)) || (correct ? "Bis hierhin ist alles richtig." : "Da stimmt noch etwas nicht."),
      lob: (fertig ? answer.lob : safe(answer.lob)) || "Gut, dass du deinen Rechenweg aufschreibst.",
      denkanstoss: correct ? "" : safe(answer.denkanstoss) || "Vergleiche jede Zeile genau mit der Zeile davor.",
      loesungsschritt: correct ? "" : answer.loesungsschritt,
      naechsterSchritt: (fertig ? answer.naechsterSchritt : safe(answer.naechsterSchritt)) || "",
      hinweis: fertig ? answer.hinweis : safe(answer.hinweis),
      geprueft: "ki",
    };
  }

  // Probe
  if (task.type !== "term") {
    const resultCorrect = result.correct && result.fertig;
    let probe: ProbeStatus = checkProbe(answer.probe.zeilen, resultCorrect);
    if (probe === "unklar") {
      probe = !answer.probe.vorhanden
        ? "keine"
        : answer.probe.stimmt
          ? resultCorrect
            ? "richtig"
            : "falsch"
          : resultCorrect
            ? "falsch"
            : "zeigt-fehler";
    }
    result.probe = probe;
    if (result.fertig && !result.naechsterSchritt) {
      result.naechsterSchritt =
        probe === "richtig"
          ? "Super, auch deine Probe stimmt!"
          : probe === "falsch"
            ? "Deine Probe stimmt noch nicht. Rechne sie noch einmal nach."
            : "Mach noch die Probe: Setze dein Ergebnis in die Aufgabe ein.";
    }
  } else if (result.fertig && !result.naechsterSchritt) {
    result.naechsterSchritt = "Super, du hast den Term richtig berechnet!";
  }

  if (result.fertig && task.type !== "term" && task.type !== "gleichung" && !result.antwortsatz && !result.hinweis) {
    result.hinweis = "Schreib am Ende noch einen Antwortsatz. Er ist freiwillig, hilft aber beim Kontrollieren.";
  }

  result.analysis = legacyAnalysis(result.zeilen);
  result.suggestion = result.correct ? result.naechsterSchritt : result.denkanstoss;
  return result;
}

export async function checkKlasse7(
  anthropic: Anthropic,
  model: string,
  image: { base64: string; mediaType: "image/jpeg" | "image/png" | "image/gif" | "image/webp" },
  task: Klasse7Task,
): Promise<Klasse7Feedback | null> {
  const answer = await askModel(anthropic, model, image, task);
  if (!answer) return null;
  const feedback = mergeKlasse7(task, answer);
  console.info("Klasse 7 geprüft:", {
    typ: task.type,
    stufe: task.level,
    geprueft: feedback.geprueft,
    correct: feedback.correct,
    fertig: feedback.fertig,
    fehlerZeile: feedback.fehlerZeile,
    kiFehlerZeile: answer.fehlerZeile,
  });
  return feedback;
}
