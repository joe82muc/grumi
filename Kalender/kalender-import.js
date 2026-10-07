(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./kalender-daten"), require("./vendor/papaparse.min"), require("./vendor/ical"));
  else root.GrumiKalenderImport = factory(root.GrumiKalenderDaten, root.Papa, root.ICAL);
})(typeof window === "object" ? window : globalThis, function (D, Papa, ICAL) {
  "use strict";
  function date(s) {
    s = String(s || "").trim();
    var m = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/.exec(s);
    if (m) s = m[3] + "-" + m[2].padStart(2, "0") + "-" + m[1].padStart(2, "0");
    return s;
  }
  function pruefen(e, nummer, problem) {
    e.datum = date(e.datum); e.klasse = D.klasse(e.klasse);
    ["fach", "titel", "stunde", "hinweis", "uid"].forEach(function (k) { e[k] = String(e[k] || "").trim(); });
    var fehler = problem || (!D.datumOk(e.datum) ? "Ungültiges Datum" :
      e.datum < D.von || e.datum > D.bis ? "Außerhalb 2026/2027" : !e.klasse ? "Klasse fehlt / ungültig" :
      !e.fach || !e.titel ? "Fach oder Titel fehlt" : e.fach.length > 80 || e.titel.length > 160 || e.stunde.length > 80 || e.hinweis.length > 2000 || e.uid.length > 300 ? "Ein Feld ist zu lang" : "");
    return { nummer: nummer, eintrag: e, fehler: fehler };
  }
  function txt(raw) {
    var parsed = Papa.parse(raw.replace(/^\uFEFF/, ""), { skipEmptyLines: "greedy", comments: "#" });
    var rows = parsed.data, keys = ["datum", "klasse", "fach", "titel", "stunde", "hinweis"];
    var header = rows[0] && rows[0].map(function (s) { return String(s).trim().toLowerCase(); });
    var hasHeader = header && header.indexOf("datum") >= 0;
    if (hasHeader) { keys = header; rows = rows.slice(1); }
    return rows.map(function (r, i) {
      var e = {}, nummer = i + (hasHeader ? 2 : 1);
      keys.forEach(function (k, j) { e[k] = r[j] || ""; });
      var error = parsed.errors.find(function (er) { return er.row === i + (hasHeader ? 1 : 0) && er.type !== "Delimiter"; });
      return pruefen(e, nummer, error ? "Fehler bei Anführungszeichen / Spalten" : r.length < 4 || r.length > keys.length ? "Erwartet: Datum;Klasse;Fach;Titel;Stunde;Hinweis" : "");
    });
  }
  function ics(raw) {
    var cal = new ICAL.Component(ICAL.parse(raw));
    if (cal.name !== "vcalendar") throw new Error("Keine gültige Kalenderdatei.");
    return cal.getAllSubcomponents("vevent").map(function (c, i) {
      var summary = String(c.getFirstPropertyValue("summary") || "");
      var parts = summary.split(/\s+[–—-]\s+/), start = c.getFirstPropertyValue("dtstart");
      var desc = String(c.getFirstPropertyValue("description") || ""), stunde = "";
      var h = /^([^\n;]*Stunde[^\n;]*)/i.exec(desc); if (h) stunde = h[1];
      var tzid = c.getFirstProperty("dtstart") && c.getFirstProperty("dtstart").getParameter("tzid");
      var error = c.hasProperty("rrule") || c.hasProperty("rdate") || c.hasProperty("recurrence-id") ? "Serientermin: bitte einzelne Termine importieren" :
        !start ? "Startdatum fehlt" : start.zone && start.zone.tzid !== "floating" && start.zone.tzid !== "Europe/Berlin" ? "Zeitzone nicht Europe/Berlin: bitte Datum prüfen" : "";
      if (tzid && tzid !== "Europe/Berlin") error = "Zeitzone nicht Europe/Berlin: bitte Datum prüfen";
      var end = c.getFirstPropertyValue("dtend");
      var datum = start ? start.toString().slice(0, 10) : "";
      if (start && end && end.toString().slice(0, 10) > D.plus(datum, start.isDate ? 1 : 0)) error = "Mehrtagestermin: bitte einzelne Termine importieren";
      return pruefen({ datum: datum, klasse: parts[0], fach: parts[1], titel: parts.slice(2).join(" – "), stunde: stunde, hinweis: desc, uid: c.getFirstPropertyValue("uid") }, i + 1, error);
    });
  }
  function parse(raw, name) {
    if (raw.length > 1000000) throw new Error("Die Datei darf höchstens 1 MB enthalten.");
    var rows = /\.ics$/i.test(name || "") || /^BEGIN:VCALENDAR/m.test(raw) ? ics(raw) : txt(raw);
    if (!rows.length) throw new Error("Keine Termine gefunden.");
    if (rows.length > 500) throw new Error("Höchstens 500 Termine je Import.");
    var seen = new Set(), fingerprints = new Set();
    rows.forEach(function (r) {
      var f = r.eintrag.uid || D.finger(r.eintrag);
      var fp = D.finger(r.eintrag);
      if (!r.fehler && (seen.has(f) || fingerprints.has(fp))) r.fehler = "Doppelt in dieser Datei";
      if (!r.fehler) { seen.add(f); fingerprints.add(fp); }
    });
    return rows;
  }
  function decode(bytes) {
    var b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
    if (b[0] === 255 && b[1] === 254) return new TextDecoder("utf-16le").decode(b);
    if (b[0] === 254 && b[1] === 255) return new TextDecoder("utf-16be").decode(b);
    try { return new TextDecoder("utf-8", { fatal:true }).decode(b); }
    catch (_) { return new TextDecoder("windows-1252").decode(b); }
  }
  return { parse: parse, decode: decode };
});
