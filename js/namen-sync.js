/* Namensliste der Lehrkraft auf jedem ihrer Geräte – nur für die Lehrkraft, auf dem Server nur verschlüsselt.
 *
 * Die Liste { Code: Name } steht wie bisher im Browser der Lehrkraft (localStorage "lf-nt9-namen"; von dort lesen sie
 * alle Lehrerseiten). Neu: Die Lehrkraft legt einmal einen NAMENS-SCHLÜSSEL fest (ein eigenes Kennwort, nicht das
 * Lehrkraft-Passwort). Mit ihm verschlüsselt der Browser die Liste (AES-GCM, Schlüssel per PBKDF2) und hinterlegt nur
 * den Schlüsseltext beim Server. Auf einem anderen Gerät gibt die Lehrkraft den Namens-Schlüssel einmal ein – ab dann
 * stehen die Namen dort immer.
 *
 * Der Namens-Schlüssel verlässt die Geräte der Lehrkraft nie: Er wird nicht an den Server geschickt. Server, Datenbank
 * und Hosting-Anbieter sehen nur Schlüsseltext und können keinen Namen lesen. Abrufen und Ablegen des Schlüsseltexts
 * geht nur mit dem Lehrkraft-Passwort; die Seiten der Kinder laden dieses Skript nicht.
 *
 * Abgleich zwischen Geräten: Zu jedem Code merkt sich der Browser, wann der Name zuletzt geändert wurde (auch beim
 * Löschen). Beim Abgleich gewinnt je Code die jüngere Angabe – nichts geht verloren, wenn auf zwei Geräten
 * verschiedene Namen eingetragen wurden.
 *
 *   NamenSync.start(api, passwort)   -> Promise<{ namen, geaendert }>  Lage feststellen; mit Schlüssel: abgleichen
 *   NamenSync.einrichten(schluessel) erstes Gerät (oder neu anfangen): Schlüssel festlegen, Liste hinterlegen
 *   NamenSync.verbinden(schluessel)  weiteres Gerät: Schlüssel prüfen, Namen holen und mischen
 *   NamenSync.speichern(namen)       neue Liste dieses Geräts merken (mit Zeitstempeln) und bald hinterlegen
 *   NamenSync.trennen()              Schlüssel auf diesem Gerät vergessen (Namen bleiben hier stehen)
 *   NamenSync.abschalten()           Schlüsseltext auf dem Server löschen und Schlüssel hier vergessen
 *   NamenSync.status()               { zustand: "an" | "neu" | "eingabe" | "unmoeglich", text, fehler }
 *   NamenSync.wennGeaendert(fn)      fn(namen), wenn der Abgleich neue Namen auf dieses Gerät gebracht hat
 */
(function (global) {
  "use strict";
  var NAMEN_KEY = "lf-nt9-namen", ZEIT_KEY = "lf-nt9-namen-zeit", GEHEIM_KEY = "lf-nt9-namen-schluessel";
  var MIN = 8;
  var api = "", pw = "", version = 0, timer = null, laeuft = Promise.resolve(), hoerer = [];
  var lage = { zustand: "neu", text: "", fehler: false };

  function lies(k) { try { return JSON.parse(global.localStorage.getItem(k) || "{}") || {}; } catch (_e) { return {}; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, JSON.stringify(v)); } catch (_e) {} }
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
  function an(namen) { lage = { zustand: "an", fehler: false, text: "🔒 Die Namensliste ist verschlüsselt gesichert (" + Object.keys(namen).length + " Namen). Auf einem anderen Gerät gibst du einmal deinen Namens-Schlüssel ein – dann stehen die Namen auch dort." }; }

  /* ---------- Server (bekommt nur Schlüsseltext, nie den Namens-Schlüssel) ---------- */
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
        return entschluesseln(kennwort, d.blob).then(null, function () { return {}; }).then(function (fern) { var m = mische(stand, fern); setzeLokal(m); return hochladen(kennwort, m, (versuch || 0) + 1); });
      }
      throw new Error(d.error || "HTTP " + d.status);
    });
  }
  // mit vorhandenem Schlüssel: holen, mischen, bei Bedarf hinterlegen
  function abgleich() {
    var kennwort = geheim(), vorher = lies(NAMEN_KEY);
    if (!kennwort) return Promise.resolve({ namen: vorher, geaendert: false });
    return holen().then(function (blob) {
      if (!blob) return {};
      return entschluesseln(kennwort, blob).then(null, function () { return null; });
    }).then(function (fern) {
      if (fern === null) {
        // Auf einem anderen Gerät wurde ein neuer Namens-Schlüssel festgelegt: hier neu eingeben
        setzeGeheim("");
        lage = { zustand: "eingabe", fehler: true, text: "Die gesicherte Namensliste passt nicht mehr zu dem Namens-Schlüssel dieses Geräts. Gib den aktuellen Namens-Schlüssel ein." };
        return { namen: vorher, geaendert: false };
      }
      var m = mische(lokal(), fern), namen = setzeLokal(m);
      var fertig = function () { an(namen); return { namen: namen, geaendert: !namenGleich(namen, vorher) }; };
      return gleich(m, fern) ? fertig() : hochladen(kennwort, m).then(function (stand) { namen = namenVon(stand); return fertig(); });
    }).catch(function (e) {
      lage = { zustand: "an", fehler: true, text: "Die Namensliste konnte gerade nicht abgeglichen werden (" + e.message + "). Auf diesem Gerät bleibt sie erhalten." };
      return { namen: lies(NAMEN_KEY), geaendert: false };
    }).then(melden);
  }
  function reihe(fn) { laeuft = laeuft.then(fn, fn); return laeuft; } // immer nur ein Vorgang zur selben Zeit
  function pruefe(kennwort) {
    kennwort = String(kennwort || "").trim();
    if (kennwort.length < MIN) throw new Error("Der Namens-Schlüssel braucht mindestens " + MIN + " Zeichen.");
    if (kennwort === pw) throw new Error("Nimm nicht das Lehrkraft-Passwort – der Namens-Schlüssel ist ein eigenes Kennwort.");
    return kennwort;
  }

  global.NamenSync = {
    start: function (apiBasis, passwort) {
      api = apiBasis || ""; pw = String(passwort || "");
      var hier = { namen: lies(NAMEN_KEY), geaendert: false };
      if (!kann()) { lage = { zustand: "unmoeglich", fehler: true, text: "Dieser Browser kann die Namensliste nicht verschlüsseln – sie steht nur auf diesem Gerät." }; return Promise.resolve(hier); }
      if (!pw) return Promise.resolve(hier);
      if (geheim()) return reihe(abgleich);
      // noch kein Schlüssel auf diesem Gerät: Liegt schon eine gesicherte Liste beim Server?
      return reihe(function () {
        return holen().then(function (blob) {
          lage = blob
            ? { zustand: "eingabe", fehler: false, text: "Für dieses Gerät fehlt noch dein Namens-Schlüssel. Gib ihn einmal ein – dann stehen die Namen hier immer." }
            : { zustand: "neu", fehler: false, text: "Die Namensliste steht bisher nur auf diesem Gerät." };
          return hier;
        }, function () { lage = { zustand: "neu", fehler: true, text: "Der Server ist gerade nicht erreichbar. Die Namensliste dieses Geräts bleibt erhalten." }; return hier; });
      });
    },
    // erstes Gerät – oder neu anfangen (ersetzt, was auf dem Server liegt, durch die Namen dieses Geräts)
    einrichten: function (kennwort) {
      try { kennwort = pruefe(kennwort); } catch (e) { return Promise.reject(e); }
      return reihe(function () {
        return holen().then(function () { return hochladen(kennwort, lokal()); }).then(function (stand) {
          setzeGeheim(kennwort); an(namenVon(stand));
          return { namen: namenVon(stand), geaendert: false };
        });
      });
    },
    // weiteres Gerät: Der Schlüssel muss zur gesicherten Liste passen
    verbinden: function (kennwort) {
      try { kennwort = pruefe(kennwort); } catch (e) { return Promise.reject(e); }
      var vorher = lies(NAMEN_KEY);
      return reihe(function () {
        return holen().then(function (blob) {
          if (!blob) throw new Error("Auf dem Server liegt noch keine gesicherte Namensliste.");
          return entschluesseln(kennwort, blob).then(null, function () { throw new Error("Der Namens-Schlüssel passt nicht."); });
        }).then(function (fern) {
          var m = mische(lokal(), fern), namen = setzeLokal(m);
          setzeGeheim(kennwort);
          var fertig = function () { an(namen); return melden({ namen: namen, geaendert: !namenGleich(namen, vorher) }); };
          return gleich(m, fern) ? fertig() : hochladen(kennwort, m).then(function (stand) { namen = namenVon(stand); return fertig(); });
        });
      });
    },
    speichern: function (namen) {
      var alt = lies(NAMEN_KEY), zeit = lies(ZEIT_KEY), jetzt = Date.now(), neu = {};
      Object.keys(namen || {}).forEach(function (c) { var v = String(namen[c] || "").replace(/\s+/g, " ").trim().slice(0, 40); if (/^\d{3}$/.test(c) && v) neu[c] = v; });
      Object.keys(neu).forEach(function (c) { if (alt[c] !== neu[c]) zeit[c] = jetzt; });
      Object.keys(alt).forEach(function (c) { if (!neu[c]) zeit[c] = jetzt; });   // gelöscht: Zeit bleibt als Merker stehen
      schreib(NAMEN_KEY, neu); schreib(ZEIT_KEY, zeit);
      if (pw && kann() && geheim()) { clearTimeout(timer); timer = setTimeout(function () { reihe(abgleich); }, 1200); }
    },
    trennen: function () {
      clearTimeout(timer); setzeGeheim("");
      lage = { zustand: "eingabe", fehler: false, text: "Der Namens-Schlüssel ist auf diesem Gerät vergessen. Die Namen stehen hier weiter; abgeglichen wird erst wieder, wenn du ihn eingibst." };
    },
    abschalten: function () {
      clearTimeout(timer);
      return reihe(function () {
        return post("namen/loeschen").then(function (d) {
          if (!d.ok) throw new Error(d.error || "HTTP " + d.status);
          version = 0; setzeGeheim("");
          lage = { zustand: "neu", fehler: false, text: "Die gesicherte Namensliste ist auf dem Server gelöscht. Die Namen stehen nur noch auf den Geräten, die sie schon haben." };
        });
      });
    },
    status: function () { return { zustand: lage.zustand, text: lage.text, fehler: lage.fehler }; },
    wennGeaendert: function (fn) { hoerer.push(fn); },
    fertig: function () { clearTimeout(timer); return reihe(abgleich); }   // sofort abgleichen (Tests)
  };
})(window);
