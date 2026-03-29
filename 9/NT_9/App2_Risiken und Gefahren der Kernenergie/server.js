const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "data");
const TOKENS_FILE = path.join(DATA_DIR, "tokens.json");
const FEEDBACK_FILE = path.join(DATA_DIR, "feedback.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

const AUTH_USER = process.env.AUTH_USER || "NT2026";
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "schule123";
const RELEASE_PASSWORD = process.env.RELEASE_PASSWORD || "freigabe2026";

function readJsonSafe(filePath, fallbackValue) {
  try {
    const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "").trim();
    if (!raw) return fallbackValue;
    return JSON.parse(raw);
  } catch (_) {
    fs.writeFileSync(filePath, JSON.stringify(fallbackValue, null, 2), "utf8");
    return fallbackValue;
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf8");
}

function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

  if (!fs.existsSync(TOKENS_FILE)) {
    const tokens = [];
    for (let i = 1; i <= 30; i += 1) {
      const ownGroup = ((i - 1) % 6) + 1;
      tokens.push({
        token: `S${String(i).padStart(2, "0")}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`,
        ownGroup,
        submittedGroups: []
      });
    }
    writeJson(TOKENS_FILE, tokens);
  }

  if (!fs.existsSync(FEEDBACK_FILE)) writeJson(FEEDBACK_FILE, []);
  if (!fs.existsSync(SETTINGS_FILE)) writeJson(SETTINGS_FILE, { feedbackOpen: false });

  readJsonSafe(TOKENS_FILE, []);
  readJsonSafe(FEEDBACK_FILE, []);
  readJsonSafe(SETTINGS_FILE, { feedbackOpen: false });
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const out = {};
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx < 0) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    out[key] = decodeURIComponent(value);
  });
  return out;
}

function isAuthenticated(req) {
  const cookies = parseCookies(req);
  return cookies.nt_auth === "1";
}

function getSettings() {
  return readJsonSafe(SETTINGS_FILE, { feedbackOpen: false });
}

function setSettings(nextSettings) {
  writeJson(SETTINGS_FILE, nextSettings);
}

function sendJson(res, status, payload, headers = {}) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    ...headers
  });
  res.end(body);
}

function sendText(res, status, text, type = "text/plain; charset=utf-8", headers = {}) {
  res.writeHead(status, { "Content-Type": type, ...headers });
  res.end(text);
}

function redirect(res, location) {
  res.writeHead(302, { Location: location });
  res.end();
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) reject(new Error("Request too large"));
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (_) {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sanitizeComment(input) {
  if (!input) return "";
  return String(input).trim().slice(0, 400);
}

function isValidScore(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function getMime(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".js") return "application/javascript; charset=utf-8";
  if (ext === ".json") return "application/json; charset=utf-8";
  return "application/octet-stream";
}

function serveStatic(req, res) {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/login.html";

  const protectedPages = new Set(["/feedback.html", "/auswertung.html"]);
  if (protectedPages.has(urlPath) && !isAuthenticated(req)) {
    redirect(res, `/login.html?next=${encodeURIComponent(urlPath.replace(/^\//, ""))}`);
    return;
  }

  const filePath = path.join(PUBLIC_DIR, path.normalize(urlPath).replace(/^([\\/])+/, ""));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    sendText(res, 404, "Not Found");
    return;
  }

  const content = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": getMime(filePath) });
  res.end(content);
}

function getSummary(feedbackEntries) {
  const groups = {};
  for (let g = 1; g <= 6; g += 1) {
    groups[g] = {
      group: g,
      count: 0,
      avg: { fachlich: 0, klarheit: 0, plakat: 0, vortrag: 0, gesamt: 0 },
      comments: []
    };
  }

  for (const entry of feedbackEntries) {
    const g = groups[entry.targetGroup];
    if (!g) continue;
    g.count += 1;
    g.avg.fachlich += entry.scores.fachlich;
    g.avg.klarheit += entry.scores.klarheit;
    g.avg.plakat += entry.scores.plakat;
    g.avg.vortrag += entry.scores.vortrag;
    const total = (entry.scores.fachlich + entry.scores.klarheit + entry.scores.plakat + entry.scores.vortrag) / 4;
    g.avg.gesamt += total;
    if (entry.comment) g.comments.push(entry.comment);
  }

  for (let g = 1; g <= 6; g += 1) {
    const item = groups[g];
    if (item.count === 0) continue;
    item.avg.fachlich = Number((item.avg.fachlich / item.count).toFixed(2));
    item.avg.klarheit = Number((item.avg.klarheit / item.count).toFixed(2));
    item.avg.plakat = Number((item.avg.plakat / item.count).toFixed(2));
    item.avg.vortrag = Number((item.avg.vortrag / item.count).toFixed(2));
    item.avg.gesamt = Number((item.avg.gesamt / item.count).toFixed(2));
  }

  return Object.values(groups);
}

ensureDataFiles();

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/api/status")) {
    const settings = getSettings();
    sendJson(res, 200, {
      ok: true,
      authenticated: isAuthenticated(req),
      feedbackOpen: !!settings.feedbackOpen
    });
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/login")) {
    try {
      const body = await parseBody(req);
      const username = String(body.username || "").trim();
      const password = String(body.password || "");
      if (username !== AUTH_USER || password !== AUTH_PASSWORD) {
        sendJson(res, 401, { ok: false, message: "Benutzername oder Passwort falsch." });
        return;
      }
      sendJson(
        res,
        200,
        { ok: true, message: "Erfolgreich angemeldet." },
        { "Set-Cookie": "nt_auth=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800" }
      );
    } catch (err) {
      sendJson(res, 400, { ok: false, message: err.message });
    }
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/logout")) {
    sendJson(
      res,
      200,
      { ok: true },
      { "Set-Cookie": "nt_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0" }
    );
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/admin/open-feedback")) {
    if (!isAuthenticated(req)) {
      sendJson(res, 401, { ok: false, message: "Nicht angemeldet." });
      return;
    }
    try {
      const body = await parseBody(req);
      const adminPassword = String(body.adminPassword || "");
      if (adminPassword !== RELEASE_PASSWORD) {
        sendJson(res, 403, { ok: false, message: "Freigabe-Code falsch." });
        return;
      }
      const settings = getSettings();
      settings.feedbackOpen = true;
      setSettings(settings);
      sendJson(res, 200, { ok: true, message: "Feedback wurde freigeschaltet." });
    } catch (err) {
      sendJson(res, 400, { ok: false, message: err.message });
    }
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/admin/close-feedback")) {
    if (!isAuthenticated(req)) {
      sendJson(res, 401, { ok: false, message: "Nicht angemeldet." });
      return;
    }
    try {
      const body = await parseBody(req);
      const adminPassword = String(body.adminPassword || "");
      if (adminPassword !== RELEASE_PASSWORD) {
        sendJson(res, 403, { ok: false, message: "Freigabe-Code falsch." });
        return;
      }
      const settings = getSettings();
      settings.feedbackOpen = false;
      setSettings(settings);
      sendJson(res, 200, { ok: true, message: "Feedback wurde gesperrt." });
    } catch (err) {
      sendJson(res, 400, { ok: false, message: err.message });
    }
    return;
  }

  if (req.url.startsWith("/api/") && !isAuthenticated(req)) {
    sendJson(res, 401, { ok: false, message: "Bitte zuerst anmelden." });
    return;
  }

  const settings = getSettings();

  if (req.method === "POST" && req.url.startsWith("/api/token-check")) {
    if (!settings.feedbackOpen) {
      sendJson(res, 403, { ok: false, message: "Feedback ist noch nicht freigeschaltet." });
      return;
    }
    try {
      const body = await parseBody(req);
      const token = String(body.token || "").trim();
      const tokens = readJsonSafe(TOKENS_FILE, []);
      const found = tokens.find((t) => t.token === token);
      if (!found) {
        sendJson(res, 404, { ok: false, message: "Code nicht gefunden." });
        return;
      }
      sendJson(res, 200, {
        ok: true,
        ownGroup: found.ownGroup,
        submittedGroups: found.submittedGroups
      });
    } catch (err) {
      sendJson(res, 400, { ok: false, message: err.message });
    }
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/api/submit")) {
    if (!settings.feedbackOpen) {
      sendJson(res, 403, { ok: false, message: "Feedback ist noch nicht freigeschaltet." });
      return;
    }
    try {
      const body = await parseBody(req);
      const token = String(body.token || "").trim();
      const targetGroup = Number(body.targetGroup);
      const scores = body.scores || {};
      const comment = sanitizeComment(body.comment);

      if (!token) {
        sendJson(res, 400, { ok: false, message: "Code fehlt." });
        return;
      }
      if (!Number.isInteger(targetGroup) || targetGroup < 1 || targetGroup > 6) {
        sendJson(res, 400, { ok: false, message: "Ungültige Zielgruppe." });
        return;
      }
      if (!isValidScore(Number(scores.fachlich)) || !isValidScore(Number(scores.klarheit)) || !isValidScore(Number(scores.plakat)) || !isValidScore(Number(scores.vortrag))) {
        sendJson(res, 400, { ok: false, message: "Alle Bewertungen müssen zwischen 1 und 5 liegen." });
        return;
      }

      const tokens = readJsonSafe(TOKENS_FILE, []);
      const tokenRow = tokens.find((t) => t.token === token);
      if (!tokenRow) {
        sendJson(res, 404, { ok: false, message: "Code nicht gefunden." });
        return;
      }
      if (tokenRow.ownGroup === targetGroup) {
        sendJson(res, 400, { ok: false, message: "Eigene Gruppe darf nicht bewertet werden." });
        return;
      }
      if (tokenRow.submittedGroups.includes(targetGroup)) {
        sendJson(res, 400, { ok: false, message: "Diese Gruppe wurde mit diesem Code bereits bewertet." });
        return;
      }

      const feedback = readJsonSafe(FEEDBACK_FILE, []);
      feedback.push({
        tokenHash: crypto.createHash("sha256").update(token).digest("hex").slice(0, 12),
        targetGroup,
        scores: {
          fachlich: Number(scores.fachlich),
          klarheit: Number(scores.klarheit),
          plakat: Number(scores.plakat),
          vortrag: Number(scores.vortrag)
        },
        comment,
        createdAt: new Date().toISOString()
      });

      tokenRow.submittedGroups.push(targetGroup);
      writeJson(FEEDBACK_FILE, feedback);
      writeJson(TOKENS_FILE, tokens);

      sendJson(res, 201, { ok: true, message: "Bewertung gespeichert." });
    } catch (err) {
      sendJson(res, 400, { ok: false, message: err.message });
    }
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/api/summary")) {
    if (!settings.feedbackOpen) {
      sendJson(res, 403, { ok: false, message: "Auswertung erst nach Freigabe verfügbar." });
      return;
    }
    const feedback = readJsonSafe(FEEDBACK_FILE, []);
    const summary = getSummary(feedback);
    sendJson(res, 200, { ok: true, summary });
    return;
  }

  if (req.method === "GET" && req.url.startsWith("/api/tokens")) {
    const tokens = readJsonSafe(TOKENS_FILE, []).map((t) => ({
      token: t.token,
      ownGroup: t.ownGroup,
      submittedGroups: t.submittedGroups
    }));
    sendJson(res, 200, { ok: true, tokens });
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`Feedback-App läuft auf http://localhost:${PORT}`);
});
