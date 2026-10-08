"use strict";

const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const source = fs.readFileSync(path.join(__dirname, "namen-sync.js"), "utf8");
const PW = "teacher-test-password";
const PREFIX = "https://school.invalid/api/nt9/fortschritt/lehrer/";
const NAMES = "lf-nt9-namen", TIMES = "lf-nt9-namen-zeit", LEGACY = "lf-nt9-namen-schluessel";

function encrypt(password, names) {
  const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(password, salt, 150000, 32, "sha256");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const data = Buffer.concat([cipher.update(JSON.stringify({ n: names })), cipher.final(), cipher.getAuthTag()]);
  return "v1." + [salt, iv, data].map(b => b.toString("base64")).join(".");
}

function cloud(initialBlob = "") {
  const server = { blob: initialBlob, version: initialBlob ? 1 : 0, offline: false, calls: [], conflicts: 0, beforeSave: null };
  server.fetch = async (url, options) => {
    assert.ok(url.startsWith(PREFIX));
    const route = url.slice(PREFIX.length), body = JSON.parse(options.body);
    server.calls.push(route);
    assert.ok(["namen", "namen/sichern"].includes(route), "sync must never call code creation or deletion");
    if (server.offline) throw new Error("offline");
    let status = 200, response;
    if (body.password !== PW) { status = 401; response = { ok: false, error: "unauthorized" }; }
    else if (route === "namen") response = { ok: true, blob: server.blob, version: server.version };
    else {
      if (server.beforeSave) await server.beforeSave();
      if (body.version !== server.version) {
        status = 409; server.conflicts++;
        response = { ok: false, blob: server.blob, version: server.version };
      } else {
        server.blob = body.blob; server.version++;
        response = { ok: true, version: server.version };
      }
    }
    return { status, json: async () => response };
  };
  return server;
}

function device(server, names = {}, times = {}, legacy = "", blockedStorage = false) {
  const values = new Map([[NAMES, JSON.stringify(names)], [TIMES, JSON.stringify(times)]]);
  if (legacy) values.set(LEGACY, legacy);
  const listeners = new Map(), timers = new Map();
  let time = 1000, nextTimer = 0;
  const window = {
    crypto: crypto.webcrypto, TextEncoder, TextDecoder,
    fetch: server.fetch,
    btoa: value => Buffer.from(value, "binary").toString("base64"),
    atob: value => Buffer.from(value, "base64").toString("binary"),
    localStorage: {
      getItem: key => { if (blockedStorage) throw new Error("storage blocked"); return values.get(key) || null; },
      setItem: (key, value) => { if (blockedStorage) throw new Error("storage blocked"); values.set(key, value); },
      removeItem: key => { if (blockedStorage) throw new Error("storage blocked"); values.delete(key); }
    },
    addEventListener: (name, fn) => listeners.set(name, fn)
  };
  const context = vm.createContext({ window, TextEncoder, TextDecoder,
    Date: { now: () => time },
    setTimeout: fn => { const id = ++nextTimer; timers.set(id, fn); return id; },
    clearTimeout: id => timers.delete(id)
  });
  vm.runInContext(source, context);
  return { sync: window.NamenSync, values, listeners, advance: () => { time += 1000; } };
}

const plain = value => JSON.parse(JSON.stringify(value));
const start = dev => dev.sync.start("https://school.invalid", PW);

test("a fresh device automatically receives the existing names and code keys", async () => {
  const server = cloud(), first = device(server, { 101: "Lena", 205: "Tom" });
  await start(first);
  const second = device(server);
  const result = await start(second);
  assert.deepEqual(plain(result.namen), { 101: "Lena", 205: "Tom" });
  assert.equal(second.sync.status().zustand, "an");
  assert.equal(second.values.has(LEGACY), false, "no extra key is needed or stored");
  assert.ok(!JSON.stringify([...first.values]).includes(PW), "teacher password is not persisted");
  assert.deepEqual(Object.keys(result.namen).sort(), ["101", "205"]);
});

test("simultaneous devices merge their lists instead of overwriting each other", async () => {
  const server = cloud(), first = device(server, { 101: "Lena" }), second = device(server, { 205: "Tom" });
  await Promise.all([start(first), start(second)]);
  assert.ok(server.conflicts >= 1, "a real concurrent version conflict was exercised");
  await first.sync.fertig();
  const fresh = device(server);
  assert.deepEqual(plain((await start(fresh)).namen), { 101: "Lena", 205: "Tom" });
  assert.deepEqual(plain(first.sync.namen()), plain(fresh.sync.namen()));
});

test("a stale device cannot replace a newer name for the same code", async () => {
  const server = cloud(), first = device(server, { 101: "Old name" });
  await start(first);
  first.advance(); first.sync.speichern({ 101: "Current name" });
  await first.sync.fertig();
  const stale = device(server, { 101: "Old name" });
  assert.deepEqual(plain((await start(stale)).namen), { 101: "Current name" });
});

test("an offline edit remains local and is merged after reconnecting", async () => {
  const server = cloud(), first = device(server, { 101: "Lena" });
  await start(first);
  const before = server.blob;
  server.offline = true; first.advance(); first.sync.speichern({ 101: "Lena", 205: "Tom" });
  await first.sync.fertig();
  assert.equal(first.sync.status().fehler, true);
  assert.deepEqual(plain(first.sync.namen()), { 101: "Lena", 205: "Tom" });
  assert.equal(server.blob, before);
  server.offline = false;
  await first.sync.fertig();
  assert.deepEqual(plain((await start(device(server))).namen), { 101: "Lena", 205: "Tom" });
});

test("an old saved key migrates its list without changing any code association", async () => {
  const oldKey = "previous-private-key";
  const server = cloud(encrypt(oldKey, { 101: ["Lena", 1000], 205: ["Tom", 1000] }));
  const first = device(server, {}, {}, oldKey);
  const result = await start(first);
  assert.deepEqual(plain(result.namen), { 101: "Lena", 205: "Tom" });
  assert.deepEqual(plain((await start(device(server))).namen), plain(result.namen));
  assert.equal(first.values.get(LEGACY), oldKey, "teacher password never replaces the old stored key");
});

test("an unreadable old list is preserved until its old key is supplied", async () => {
  const oldKey = "previous-private-key", original = encrypt(oldKey, { 101: ["Lena", 1000] });
  const server = cloud(original), first = device(server, { 205: "Tom" });
  await start(first);
  assert.equal(first.sync.status().zustand, "eingabe");
  assert.equal(server.blob, original);
  await first.sync.einrichten();
  assert.equal(server.blob, original, "there is no destructive reset");
  await first.sync.verbinden(oldKey);
  assert.deepEqual(plain((await start(device(server))).namen), { 101: "Lena", 205: "Tom" });
});

test("cloud names also work when localStorage is unavailable", async () => {
  const server = cloud();
  await start(device(server, { 101: "Lena" }));
  const fresh = device(server, {}, {}, "", true);
  assert.deepEqual(plain((await start(fresh)).namen), { 101: "Lena" });
  assert.deepEqual(plain(fresh.sync.namen()), { 101: "Lena" });
  fresh.advance();
  const edited = fresh.sync.namen();
  edited[101] = "Lena corrected";
  fresh.sync.speichern(edited);
  await fresh.sync.fertig();
  assert.deepEqual(plain((await start(device(server))).namen), { 101: "Lena corrected" });
});

test("edits made during an upload survive its response", async () => {
  const server = cloud(), first = device(server, { 101: "Lena" });
  server.beforeSave = async () => {
    server.beforeSave = null;
    first.advance(); first.sync.speichern({ 101: "Lena", 205: "Tom" });
  };
  await start(first);
  assert.deepEqual(plain(first.sync.namen()), { 101: "Lena", 205: "Tom" });
  await first.sync.fertig();
  assert.deepEqual(plain((await start(device(server))).namen), { 101: "Lena", 205: "Tom" });
  await assert.rejects(first.sync.abschalten());
  assert.ok(server.calls.every(route => route === "namen" || route === "namen/sichern"));
});
