/* NT 8: Lernkarten – ein Kartensatz je Modul, ein Lernset je Probe (alle Module des Themenbereichs).
 *
 * Daten:   karten/<modul>.js ruft NT8Karten.satz("<modul>", [ { id, art, v, h, bild?, m? } ]) auf.
 *          id    feste Kennung der Karte im Modul („k1“ …) – nie neu vergeben, daran hängt der Lernstand
 *          art   begriff | bild | ursache | vergleich | versuch | transfer | formel | fehler | anwendung
 *          v, h  Vorderseite (Frage) und Rückseite (kurze Antwort); bild = eigene SVG-Zeichnung zur Vorderseite
 *          m     true = nur für M8 (R8 lernt 8 bis 15 Karten je Modul, M8 10 bis 20)
 * Trainer: NT8Karten.trainer(element, { module: [Kennungen], titel, modus })  – wie ein Vokabeltrainer:
 *          Vorderseite → „Antwort zeigen“ → „Gewusst“ / „Noch nicht gewusst“.
 * Wiederholen (bewusst einfach): je Karte [wie oft geübt, wie oft hintereinander gewusst, zuletzt].
 *          nicht gewusst -> kommt in derselben Runde noch einmal und zählt wieder als unsicher
 *          gewusst       -> wird später fällig: nach 1 Tag, 3 Tagen, 7 Tagen, 14 Tagen
 *          „sicher“      = zweimal hintereinander gewusst
 * Speicher: auf dem Gerät je Kind (grumi-nt8-karten~<Kennung>) und – mit Code – beim Lernstand des Moduls auf dem
 *          Server (derselbe Speicher wie die Fehlerwörter der Vokabeltrainer: /api/nt9/fortschritt, Feld f). Die
 *          Aufgaben des Moduls und sein Abschluss bleiben davon unberührt: Lernkarten sperren und zählen dort nichts.
 * Druck:   NT8Karten.druck(element, { module, art: "blatt" | "karten" })  – Lernblatt oder Karten zum Ausschneiden.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var HIER = doc.currentScript && doc.currentScript.src ? doc.currentScript.src.replace(/[^/]*$/, "") : "";
  var SAETZE = {}, LAEDT = {}, WARTET = [];
  var ARTEN = { begriff: "Begriff", bild: "Abbildung", ursache: "Ursache → Wirkung", vergleich: "Vergleich", versuch: "Versuch",
    transfer: "Mini-Transfer", formel: "Formel und Einheit", fehler: "Fehler finden", anwendung: "Anwendung" };
  var TAG = 86400000, FAELLIG = [0, 1, 3, 7, 14];   // Tage bis zur nächsten Wiederholung nach 0, 1, 2, 3, 4+ Mal „gewusst“
  var SICHER_AB = 2, RUNDE = 12;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var NT8 = function () { return global.NT8; };

  /* ---------- Anmeldung (derselbe Block wie in allen Skripten, die die Code-Anmeldung lesen) ---------- */
  function grumiTab() {
    if (global.GrumiTab) return global.GrumiTab;
    var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
    function lies() { try { return JSON.parse(sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
    function merken(code) { try { sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
    function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
    ["pointerdown", "keydown"].forEach(function (n) { doc.addEventListener(n, taetig, true); });
    return (global.GrumiTab = {
      merken: merken,
      gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
      ende: function () { try { sessionStorage.removeItem(K); } catch (_e) {} }
    });
  }
  function anmeldungLadung() {
    var p = global.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (global.__grumiLadung = global.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === anmeldungLadung()) { grumiTab().merken(s.code); return s; }
    if ((s.frisch && s.frisch === location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
      delete s.frisch; s.ladung = anmeldungLadung();
      try { localStorage.setItem("grumi-code-anmeldung", JSON.stringify(s)); } catch (_e) {}
      grumiTab().merken(s.code); return s;
    }
    return null;
  }
  // Angemeldetes Kind der 8. Klasse (oder Lehrercode) – sonst null: Dann lernt man als Gast, nur auf diesem Gerät
  function anmeldung() {
    try {
      var a = anmeldungGueltig(JSON.parse(localStorage.getItem("grumi-code-anmeldung") || "null"));
      if (!a) return null;
      if (a.klasse === "Lehrkraft") return Object.assign({}, a, { lehrer: true });
      return /^8[MR]$/.test(String(a.zug || "")) ? a : null;
    } catch (_e) { return null; }
  }
  function zug() {
    var a = anmeldung(), z = a && !a.lehrer ? String(a.zug).slice(1) : "";
    if (!z && NT8()) z = NT8().zug(null);
    return z === "R" || z === "M" ? z : "";
  }

  /* ---------- Kartensätze ---------- */
  function satz(modul, karten) {
    SAETZE[modul] = (karten || []).filter(function (k) { return k && k.id && k.v && k.h; });
    delete LAEDT[modul];
    pruefeWartende();
  }
  function pruefeWartende() {
    WARTET = WARTET.filter(function (w) {
      if (w.ids.some(function (id) { return LAEDT[id]; })) return true;
      try { w.cb(); } catch (e) { global.console && console.error(e); }
      return false;
    });
  }
  // Kartensätze der Module nachladen (karten/<modul>.js); cb kommt, wenn alle da oder nicht ladbar sind
  function laden(ids, cb) {
    var fehlt = ids.filter(function (id) { return !SAETZE[id] && !LAEDT[id]; });
    fehlt.forEach(function (id) {
      LAEDT[id] = true;
      var s = doc.createElement("script");
      s.src = HIER + "karten/" + encodeURIComponent(id) + ".js";
      s.onerror = function () { delete LAEDT[id]; SAETZE[id] = SAETZE[id] || []; pruefeWartende(); };
      doc.head.appendChild(s);
    });
    if (cb) { WARTET.push({ ids: ids, cb: cb }); pruefeWartende(); }
  }
  var geladen = function (ids) { return ids.every(function (id) { return SAETZE[id]; }); };
  // Karten eines Moduls für den Zug: R8 ohne die M-Karten. Ohne bekannten Zug (Gast, Lehrkraft): alle.
  function karten(modul, z) {
    return (SAETZE[modul] || []).filter(function (k) { return !(k.m && z === "R"); }).map(function (k) { return Object.assign({ modul: modul }, k); });
  }

  /* ---------- Lernstand der Karten ---------- */
  function schluessel() { var a = anmeldung(); return "grumi-nt8-karten~" + (a ? a.kennung : "gast"); }
  function alles() { try { return JSON.parse(localStorage.getItem(schluessel()) || "{}") || {}; } catch (_e) { return {}; } }
  function sichern(s) { try { localStorage.setItem(schluessel(), JSON.stringify(s)); } catch (_e) {} }
  function stand(modul) { return alles()[modul] || {}; }
  // Zustand einer Karte: "neu" | "unsicher" | "fast" (einmal gewusst) | "sicher"
  function zustand(e) { return !e || !e[0] ? "neu" : e[1] >= SICHER_AB ? "sicher" : e[1] === 1 ? "fast" : "unsicher"; }
  function faellig(e, jetzt) { return !e || !e[0] || e[1] < 1 || jetzt - (e[2] || 0) >= FAELLIG[Math.min(e[1], FAELLIG.length - 1)] * TAG; }
  function status(ids, z) {
    var s = alles(), aus = { gesamt: 0, sicher: 0, unsicher: 0, neu: 0, geuebt: 0 };
    ids.forEach(function (id) {
      karten(id, z).forEach(function (k) {
        var e = (s[id] || {})[k.id], zu = zustand(e);
        aus.gesamt++; if (zu === "sicher") aus.sicher++; else if (zu === "neu") aus.neu++; else aus.unsicher++;
        if (e && e[0]) aus.geuebt++;
      });
    });
    aus.pct = aus.gesamt ? Math.round(aus.sicher / aus.gesamt * 100) : 0;
    return aus;
  }
  function bewerte(karte, gewusst) {
    var s = alles(), m = s[karte.modul] = s[karte.modul] || {}, e = m[karte.id] || [0, 0, 0];
    m[karte.id] = [Math.min(999, e[0] + 1), gewusst ? Math.min(9, e[1] + 1) : 0, Date.now()];
    sichern(s);
    geaendert[karte.modul] = true;
    clearTimeout(sendeTimer); sendeTimer = setTimeout(senden, 2500);
  }

  /* ---------- Abgleich mit dem Server (Lernstand des Moduls, Feld f) ---------- */
  var geaendert = {}, sendeTimer = null, geholt = {};
  function api() { return (NT8() ? NT8().API : "") + "/api/nt9/fortschritt"; }
  function post(route, body, keepalive) {
    return global.fetch(api() + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), keepalive: !!keepalive })
      .then(function (r) { return r.json(); });
  }
  // Stand vom Server holen und mit dem Gerät zusammenführen: Es gilt je Karte der Eintrag mit mehr Wiederholungen.
  function holen(ids, cb) {
    var a = anmeldung();
    if (!a || a.lehrer || !global.fetch) { if (cb) cb(false); return; }
    post("/anmelden", { code: a.code }).then(function (d) {
      if (!d || !d.ok) throw new Error("kein Stand");
      var s = alles(), neu = false;
      ids.forEach(function (id) {
        var f = ((d.fortschritt || {})["nt8-" + id] || {}).f || {}, m = s[id] = s[id] || {};
        Object.keys(f).forEach(function (k) {
          var srv = f[k], lok = m[k];
          if (Array.isArray(srv) && (!lok || srv[0] > lok[0])) { m[k] = [srv[0], srv[1], lok ? lok[2] : Date.now() - TAG]; neu = true; }
          else if (lok && (!Array.isArray(srv) || lok[0] > srv[0])) geaendert[id] = true;
        });
        Object.keys(m).forEach(function (k) { if (!f[k]) geaendert[id] = true; });
        geholt[id] = true;
      });
      if (neu) sichern(s);
      if (Object.keys(geaendert).length) senden();
      if (cb) cb(neu);
    }).catch(function () { if (cb) cb(false); });
  }
  function senden(keepalive) {
    var a = anmeldung();
    if (!a || a.lehrer || !global.fetch) { geaendert = {}; return; }
    var s = alles(), L = NT8();
    Object.keys(geaendert).forEach(function (id) {
      var reg = L && L.modulVon(id), f = {}, m = s[id] || {};
      if (!reg) { delete geaendert[id]; return; }
      Object.keys(m).forEach(function (k) { if (m[k] && m[k][0]) f[k] = [m[k][0], m[k][1]]; });
      delete geaendert[id];
      post("/melden", { code: a.code, klasse: a.klasse, modul: "nt8-" + id, geloest: [], gesamt: 0, fehler: f,
        meta: { bereich: reg.thema.titel, bnr: parseInt(reg.thema.nr, 10) || 1, titel: reg.modul.titel, kurz: "Modul " + reg.nr, nr: reg.nr } }, keepalive)
        .catch(function () { geaendert[id] = true; });
    });
  }
  doc.addEventListener("visibilitychange", function () { if (doc.visibilityState === "hidden" && Object.keys(geaendert).length) { clearTimeout(sendeTimer); senden(true); } });

  /* ---------- Auswahl der Karten einer Runde ---------- */
  function mische(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var MODI = {
    lernen: { knopf: "🧠 Jetzt lernen", leer: "Für heute ist nichts fällig – alle Karten sitzen. Mit „Zufällige Karten“ kannst du trotzdem wiederholen." },
    unsicher: { knopf: "🎯 Nur unsichere Karten", leer: "Du hast gerade keine unsicheren Karten." },
    zufall: { knopf: "🔁 Zufällige Karten", leer: "Zu diesem Lernset gibt es noch keine Karten." },
    bilder: { knopf: "🖼 Nur Abbildungen", leer: "In diesem Lernset gibt es keine Bildkarten." },
    transfer: { knopf: "💡 Transferkarten", leer: "In diesem Lernset gibt es keine Transferkarten." }
  };
  function auswahl(ids, z, modus) {
    var s = alles(), jetzt = Date.now(), alle = [];
    ids.forEach(function (id) { karten(id, z).forEach(function (k) { k.e = (s[id] || {})[k.id]; alle.push(k); }); });
    if (modus === "unsicher") return mische(alle.filter(function (k) { var zu = zustand(k.e); return zu === "unsicher" || zu === "fast"; })).slice(0, RUNDE);
    if (modus === "bilder") return mische(alle.filter(function (k) { return k.art === "bild" || k.bild; }));
    if (modus === "transfer") return mische(alle.filter(function (k) { return k.art === "transfer" || k.art === "anwendung" || k.art === "fehler"; }));
    if (modus === "zufall") return mische(alle).slice(0, RUNDE);
    // „Jetzt lernen“: erst unsichere, dann neue, dann fällige Karten
    var unsicher = mische(alle.filter(function (k) { return zustand(k.e) === "unsicher"; }));
    var neu = alle.filter(function (k) { return zustand(k.e) === "neu"; });
    var rest = mische(alle.filter(function (k) { var zu = zustand(k.e); return (zu === "fast" || zu === "sicher") && faellig(k.e, jetzt); }));
    return unsicher.concat(neu, rest).slice(0, RUNDE);
  }

  /* ---------- Trainer ---------- */
  function modulTitel(id) { var r = NT8() && NT8().modulVon(id); return r ? r.modul.titel : id; }
  function trainer(el, cfg) {
    var ids = cfg.module || [], z = cfg.zug || zug(), runde = [], pos = 0, gewusst = 0, nicht = 0, modus = cfg.modus || "lernen";
    el.classList.add("lk");
    function kopf() {
      var st = status(ids, z);
      return '<div class="lk-kopf"><div><strong>' + esc(cfg.titel || "Lernkarten") + '</strong><span class="lk-zahl">' + st.sicher + " / " + st.gesamt + ' sicher</span></div>' +
        '<div class="lk-bar"><div style="width:' + st.pct + '%"></div></div>' +
        '<div class="lk-legende"><span class="s">✓ ' + st.sicher + ' sicher</span><span class="u">◐ ' + st.unsicher + ' noch unsicher</span><span class="n">○ ' + st.neu + " neu</span></div></div>";
    }
    function modi() {
      return '<div class="lk-modi">' + Object.keys(MODI).map(function (m) { return '<button type="button" class="btn small ' + (m === "lernen" ? "" : "ghost") + '" data-modus="' + m + '">' + MODI[m].knopf + "</button>"; }).join("") +
        (cfg.druck !== false ? '<a class="btn small ghost" href="' + esc(druckLink(cfg, "blatt")) + '">📄 Lernkarten drucken</a>' : "") + "</div>";
    }
    function start() {
      runde = []; pos = 0; gewusst = 0; nicht = 0;
      if (!geladen(ids)) { el.innerHTML = '<p class="lk-hinweis">Die Lernkarten werden geladen …</p>'; return; }
      var st = status(ids, z);
      if (!st.gesamt) { el.innerHTML = '<p class="lk-hinweis">Zu diesem Lernset gibt es noch keine Lernkarten.</p>'; return; }
      el.innerHTML = kopf() + modi() + '<p class="lk-hinweis">' + (anmeldung() ? "Wähle, wie du lernen möchtest. Nicht gewusste Karten kommen bald wieder, gewusste später." :
        "Du lernst gerade ohne Code: Dein Kartenstand bleibt nur auf diesem Gerät. Melde dich auf der Übersicht mit deinem Code an, dann steht er überall.") + "</p>";
      verdrahten();
    }
    function verdrahten() {
      Array.prototype.forEach.call(el.querySelectorAll("[data-modus]"), function (b) {
        b.addEventListener("click", function () { modus = b.getAttribute("data-modus"); beginne(); });
      });
    }
    function beginne() {
      runde = auswahl(ids, z, modus); pos = 0; gewusst = 0; nicht = 0;
      if (!runde.length) { el.innerHTML = kopf() + modi() + '<p class="lk-hinweis">' + esc(MODI[modus].leer) + "</p>"; verdrahten(); return; }
      zeige();
    }
    function zeige() {
      var k = runde[pos];
      el.innerHTML = kopf() + '<div class="lk-buehne"><div class="lk-lauf"><span>Karte ' + (pos + 1) + " von " + runde.length + '</span><button type="button" class="lk-ende-knopf">Runde beenden</button></div>' +
        '<div class="lk-karte" data-karte="' + esc(k.id) + '"><div class="lk-art">' + esc(ARTEN[k.art] || "Karte") + (ids.length > 1 ? " · " + esc(modulTitel(k.modul)) : "") + (k.m ? ' · <span class="lk-m">M8</span>' : "") + "</div>" +
        '<div class="lk-v">' + esc(k.v) + "</div>" + (k.bild ? '<div class="lk-bild">' + k.bild + "</div>" : "") +
        '<div class="lk-h" hidden><div class="lk-art">Antwort</div><div>' + esc(k.h) + "</div></div>" +
        '<div class="lk-knoepfe"><button type="button" class="btn lk-zeig">Antwort zeigen</button>' +
        '<button type="button" class="btn lk-ja" hidden>✓ Gewusst</button><button type="button" class="btn lk-nein" hidden>✕ Noch nicht gewusst</button></div></div></div>';
      var q = function (s) { return el.querySelector(s); };
      q(".lk-zeig").addEventListener("click", function () { q(".lk-h").hidden = false; q(".lk-zeig").hidden = true; q(".lk-ja").hidden = false; q(".lk-nein").hidden = false; q(".lk-ja").focus(); });
      q(".lk-ja").addEventListener("click", function () { antwort(true); });
      q(".lk-nein").addEventListener("click", function () { antwort(false); });
      q(".lk-ende-knopf").addEventListener("click", ende);
    }
    function antwort(ok) {
      var k = runde[pos];
      bewerte(k, ok);
      if (ok) gewusst++; else { nicht++; if (!k.nochmal) { runde.push(Object.assign({}, k, { nochmal: true })); } }   // bald wiederholen: einmal am Ende der Runde
      pos++;
      if (pos >= runde.length) ende(); else zeige();
      if (cfg.geaendert) cfg.geaendert(status(ids, z));
    }
    function ende() {
      var st = status(ids, z);
      el.innerHTML = kopf() + '<div class="lk-fertig"><div class="lk-gross">' + (nicht ? "💪" : "🎉") + "</div><h4>Runde geschafft</h4><p>" + gewusst + " gewusst" + (nicht ? ", " + nicht + " noch nicht gewusst – die kommen bald wieder." : " – stark!") +
        "</p><p><strong>" + st.sicher + " von " + st.gesamt + " Karten sind sicher.</strong></p></div>" + modi();
      verdrahten();
      if (cfg.geaendert) cfg.geaendert(st);
    }
    el.__lkStart = start;
    laden(ids, function () { start(); holen(ids, function (neu) { if (neu && !runde.length) start(); }); });
    return { neu: start, status: function () { return status(ids, z); }, beginne: function (m) { modus = m || "lernen"; beginne(); } };
  }

  /* ---------- Drucken ---------- */
  function druckLink(cfg, art) {
    var basis = HIER + "lernkarten.html?";
    return basis + (cfg.probe ? "probe=" + encodeURIComponent(cfg.probe) : "modul=" + encodeURIComponent((cfg.module || []).join(","))) + "&druck=" + art;
  }
  function druck(el, cfg) {
    var ids = cfg.module || [], z = cfg.zug || zug(), art = cfg.art === "karten" ? "karten" : "blatt";
    laden(ids, function () {
      var h = '<div class="lk-druck-kopf"><h1>' + esc(cfg.titel || "Lernkarten") + "</h1><p>Natur und Technik 8" + (z ? " · " + (z === "M" ? "M8" : "R8") : "") + " · " +
        (art === "karten" ? "Karten zum Ausschneiden: an der gestrichelten Linie falten – vorn die Frage, hinten die Antwort." : "Lernblatt: rechte Spalte abdecken und dich selbst abfragen.") + "</p></div>";
      ids.forEach(function (id) {
        var liste = karten(id, z);
        if (!liste.length) return;
        h += '<section class="lk-druck-modul"><h2>' + esc(modulTitel(id)) + "</h2>";
        if (art === "blatt") {
          h += '<table class="lk-blatt"><thead><tr><th>Frage</th><th>Antwort</th></tr></thead><tbody>' + liste.map(function (k) {
            return "<tr><td>" + esc(k.v) + (k.bild ? '<div class="lk-bild">' + k.bild + "</div>" : "") + "</td><td>" + esc(k.h) + "</td></tr>";
          }).join("") + "</tbody></table>";
        } else {
          h += '<div class="lk-bogen">' + liste.map(function (k) {
            return '<div class="lk-falz"><div class="lk-falz-v"><small>' + esc(ARTEN[k.art] || "Karte") + " · " + esc(modulTitel(id)) + "</small><div>" + esc(k.v) + "</div>" + (k.bild ? '<div class="lk-bild">' + k.bild + "</div>" : "") +
              '</div><div class="lk-falz-h"><small>Antwort</small><div>' + esc(k.h) + "</div></div></div>";
          }).join("") + "</div>";
        }
        h += "</section>";
      });
      el.innerHTML = h;
      if (cfg.fertig) cfg.fertig();
    });
  }

  global.NT8Karten = { satz: satz, laden: laden, geladen: geladen, karten: karten, stand: stand, status: status, bewerte: bewerte, holen: holen,
    trainer: trainer, druck: druck, druckLink: druckLink, anmeldung: anmeldung, zug: zug, ARTEN: ARTEN, MODI: MODI, zustand: zustand };
})(window);
