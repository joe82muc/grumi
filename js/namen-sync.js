/* Automatischer Abgleich der Namenszuordnung nach der Lehrkraft-Anmeldung.
 * Die bestehenden Codes werden nur als Schlüssel gelesen, nie angelegt oder geändert.
 * AES-GCM und Zeitstempel bleiben erhalten; ein zusätzlicher Namens-Schlüssel ist nicht nötig.
 * Ein gespeicherter früherer Schlüssel dient nur zur Übernahme einer alten Sicherung.
 * Das Lehrkraft-Passwort bleibt im Arbeitsspeicher, nicht im localStorage.
 */
(function (global) {
  "use strict";
  var NAMEN_KEY = "lf-nt9-namen", ZEIT_KEY = "lf-nt9-namen-zeit", GEHEIM_KEY = "lf-nt9-namen-schluessel";
  var api = "", pw = "", version = 0, timer = null, laeuft = Promise.resolve(), hoerer = [];
  var lage = { zustand: "neu", text: "", fehler: false };
  var ersatz = {};

  function lies(k) { try { return JSON.parse(global.localStorage.getItem(k) || "{}") || {}; } catch (_e) { return ersatz[k] || {}; } }
  function schreib(k, v) { ersatz[k] = v; try { global.localStorage.setItem(k, JSON.stringify(v)); } catch (_e) {} }
  function geheim() { try { return global.localStorage.getItem(GEHEIM_KEY) || ""; } catch (_e) { return ""; } }
  function setzeGeheim(v) { try { if (v) global.localStorage.setItem(GEHEIM_KEY, v); else global.localStorage.removeItem(GEHEIM_KEY); } catch (_e) {} }
  function kann() { return !!(global.crypto && global.crypto.subtle && global.TextEncoder && global.fetch); }

  /* ---------- Verschlüsseln im Browser ---------- */
  function b64(buf) { var a = new Uint8Array(buf), s = ""; for (var i = 0; i < a.length; i++) s += String.fromCharCode(a[i]); return global.btoa(s); }
  function bytes(text) { var t = global.atob(text), a = new Uint8Array(t.length); for (var i = 0; i < t.length; i++) a[i] = t.charCodeAt(i); return a; }
  function schluessel(kennwort, salz) {
    return global.crypto.subtle.importKey("raw", new TextEncoder().encode(kennwort), "PBKDF2", false, ["deriveKey"]).then(function (basis) {
      return global.crypto.subtle.deriveKey({ name: "PBKDF2", salt: salz, iterations: 150000, hash: "SHA-256" }, basis, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    });
  }
  function verschluesseln(kennwort, stand) {
    var salz = global.crypto.getRandomValues(new Uint8Array(16)), iv = global.crypto.getRandomValues(new Uint8Array(12));
    return schluessel(kennwort, salz).then(function (k) {
      return global.crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, k, new TextEncoder().encode(JSON.stringify({ n: stand })));
    }).then(function (c) { return "v1." + b64(salz) + "." + b64(iv) + "." + b64(c); });
  }
  function entschluesseln(kennwort, blob) {
    var t = String(blob || "").split(".");
    if (t.length !== 4 || t[0] !== "v1") return Promise.reject(new Error("form"));
    return schluessel(kennwort, bytes(t[1])).then(function (k) {
      return global.crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(t[2]) }, k, bytes(t[3]));
    }).then(function (klar) { var o = JSON.parse(new TextDecoder().decode(klar)); return sauber(o && o.n); });
  }

  /* ---------- Stand dieses Geräts: { code: [name, zeit] }, gelöscht = ["", zeit] ---------- */
  function lokal() {
    var n = lies(NAMEN_KEY), z = lies(ZEIT_KEY), stand = {};
    Object.keys(z).forEach(function (c) { if (/^\d{3}$/.test(c)) stand[c] = [String(n[c] || ""), Number(z[c]) || 1]; });
    Object.keys(n).forEach(function (c) { if (/^\d{3}$/.test(c) && !stand[c] && n[c]) stand[c] = [String(n[c]), 1]; }); // Namen von früher: ohne Zeit
    return stand;
  }
  function setzeLokal(stand) {
    var n = {}, z = {};
    Object.keys(stand).forEach(function (c) { if (stand[c][0]) n[c] = stand[c][0]; z[c] = stand[c][1]; });
    schreib(NAMEN_KEY, n); schreib(ZEIT_KEY, z);
    return n;
  }
  function sauber(stand) {
    var gut = {};
    Object.keys(stand || {}).forEach(function (c) {
      var e = stand[c];
      if (/^\d{3}$/.test(c) && Array.isArray(e)) gut[c] = [String(e[0] || "").replace(/\s+/g, " ").trim().slice(0, 40), Number(e[1]) || 1];
    });
    return gut;
  }
  // je Code gewinnt die jüngere Angabe; bei gleicher Zeit der vorhandene Name
  function mische(a, b) {
    var m = {};
    Object.keys(a).forEach(function (c) { m[c] = a[c]; });
    Object.keys(b).forEach(function (c) { if (!m[c] || b[c][1] > m[c][1] || (b[c][1] === m[c][1] && !m[c][0] && b[c][0])) m[c] = b[c]; });
    return m;
  }
  function gleich(a, b) {
    var ka = Object.keys(a), kb = Object.keys(b);
    return ka.length === kb.length && ka.every(function (c) { return b[c] && a[c][0] === b[c][0] && a[c][1] === b[c][1]; });
  }
  function namenVon(stand) { var n = {}; Object.keys(stand).forEach(function (c) { if (stand[c][0]) n[c] = stand[c][0]; }); return n; }
  function namenGleich(a, b) { var ka = Object.keys(a), kb = Object.keys(b); return ka.length === kb.length && ka.every(function (c) { return a[c] === b[c]; }); }
  function melden(erg) { if (erg.geaendert) hoerer.forEach(function (fn) { try { fn(erg.namen); } catch (_e) {} }); return erg; }
  function an(namen) { lage = { zustand: "an", fehler: false, text: Object.keys(namen).length + " Namen synchronisiert." }; }

  function bestand(blob) {
    if (!blob) return Promise.resolve({ stand: {}, alt: false });
    return entschluesseln(pw, blob).then(function (stand) { return { stand: stand, alt: false }; }, function () {
      var frueher = geheim();
      var falsch = function () { var e = new Error("Die alte Namensliste braucht einmalig ihren bisherigen Schlüssel."); e.alterSchluessel = true; throw e; };
      if (!frueher || frueher === pw) return falsch();
      return entschluesseln(frueher, blob).then(function (stand) { return { stand: stand, alt: true }; }, falsch);
    });
  }

  /* ---------- Server: verschlüsselte Namen, Anmeldung mit Lehrkraft-Passwort ---------- */
  function post(route, body) {
    body = body || {}; body.password = pw;
    return global.fetch(api + "/api/nt9/fortschritt/lehrer/" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { d.status = r.status; return d; }); });
  }
  function holen() { return post("namen").then(function (d) { if (!d.ok) throw new Error(d.error || "HTTP " + d.status); version = d.version || 0; return d.blob || ""; }); }
  function hochladen(kennwort, stand, versuch) {
    return verschluesseln(kennwort, stand).then(function (blob) { return post("namen/sichern", { blob: blob, version: version }); }).then(function (d) {
      if (d.ok) { version = d.version; return stand; }
      // inzwischen hat ein anderes Gerät gespeichert: dessen Stand dazunehmen und noch einmal
      if (d.status === 409 && (versuch || 0) < 3) {
        version = d.version || 0;
        return bestand(d.blob).then(function (fern) { var m = mische(mische(fern.stand, stand), lokal()); return hochladen(kennwort, m, (versuch || 0) + 1); });
      }
      throw new Error(d.error || "HTTP " + d.status);
    });
  }
  // Leere Geräte übernehmen die Liste; ältere lokale Angaben ersetzen keine neueren Namen.
  function abgleich() {
    var kennwort = pw, vorher = lies(NAMEN_KEY);
    if (!kennwort) return Promise.resolve({ namen: vorher, geaendert: false });
    return holen().then(function (blob) {
      return bestand(blob);
    }).then(function (fern) {
      var m = mische(fern.stand, lokal());
      var fertig = function (stand) {
        var namen = setzeLokal(mische(stand, lokal()));
        an(namen);
        return { namen: namen, geaendert: !namenGleich(namen, vorher) };
      };
      return !fern.alt && gleich(m, fern.stand) ? fertig(m) : hochladen(kennwort, m).then(fertig);
    }).catch(function (e) {
      lage = { zustand: e.alterSchluessel ? "eingabe" : "an", fehler: true,
        text: e.alterSchluessel ? e.message : "Abgleich fehlgeschlagen (" + e.message + "). Die Namen dieses Geräts bleiben erhalten." };
      return { namen: lies(NAMEN_KEY), geaendert: false };
    }).then(melden);
  }
  function reihe(fn) { laeuft = laeuft.then(fn, fn); return laeuft; } // immer nur ein Vorgang zur selben Zeit
  function pruefe(kennwort) {
    kennwort = String(kennwort || "").trim();
    if (!kennwort) throw new Error("Bitte den bisherigen Schlüssel eingeben.");
    return kennwort;
  }

  global.NamenSync = {
    start: function (apiBasis, passwort) {
      api = apiBasis || ""; pw = String(passwort || "");
      var hier = { namen: lies(NAMEN_KEY), geaendert: false };
      if (!kann()) { lage = { zustand: "unmoeglich", fehler: true, text: "Der automatische Abgleich ist in diesem Browser nicht verfügbar." }; return Promise.resolve(hier); }
      if (!pw) return Promise.resolve(hier);
      return reihe(abgleich);
    },
    einrichten: function () { return reihe(abgleich); },
    // Nur für eine alte, mit einem separaten Schlüssel gesicherte Liste.
    verbinden: function (kennwort) {
      try { kennwort = pruefe(kennwort); } catch (e) { return Promise.reject(e); }
      var vorher = lies(NAMEN_KEY);
      return reihe(function () {
        return holen().then(function (blob) {
          if (!blob) throw new Error("Auf dem Server liegt noch keine gesicherte Namensliste.");
          return entschluesseln(kennwort, blob).then(null, function () { throw new Error("Der Namens-Schlüssel passt nicht."); });
        }).then(function (fern) {
          var m = mische(fern, lokal());
          if (kennwort !== pw) setzeGeheim(kennwort);
          return hochladen(pw, m).then(function (stand) {
            var namen = setzeLokal(mische(stand, lokal()));
            an(namen);
            return melden({ namen: namen, geaendert: !namenGleich(namen, vorher) });
          });
        });
      });
    },
    speichern: function (namen) {
      var alt = lies(NAMEN_KEY), zeit = lies(ZEIT_KEY), jetzt = Date.now(), neu = {};
      Object.keys(namen || {}).forEach(function (c) { var v = String(namen[c] || "").replace(/\s+/g, " ").trim().slice(0, 40); if (/^\d{3}$/.test(c) && v) neu[c] = v; });
      Object.keys(neu).forEach(function (c) { if (alt[c] !== neu[c]) zeit[c] = jetzt; });
      Object.keys(alt).forEach(function (c) { if (!neu[c]) zeit[c] = jetzt; });   // gelöscht: Zeit bleibt als Merker stehen
      schreib(NAMEN_KEY, neu); schreib(ZEIT_KEY, zeit);
      if (pw && kann()) { clearTimeout(timer); timer = setTimeout(function () { reihe(abgleich); }, 1200); }
    },
    trennen: function () {
      clearTimeout(timer); setzeGeheim("");
      return reihe(abgleich);
    },
    abschalten: function () {
      return Promise.reject(new Error("Der automatische Abgleich bleibt aktiv."));
    },
    namen: function () { return namenVon(lokal()); },
    status: function () { return { zustand: lage.zustand, text: lage.text, fehler: lage.fehler }; },
    wennGeaendert: function (fn) { hoerer.push(fn); },
    fertig: function () { clearTimeout(timer); return reihe(abgleich); }   // sofort abgleichen (Tests)
  };
  if (global.addEventListener) {
    var erneuern = function () { if (pw && kann()) reihe(abgleich); };
    global.addEventListener("focus", erneuern);
    global.addEventListener("online", erneuern);
  }
})(window);
