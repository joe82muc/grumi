/* Klassenbereich für Kinder: Anmeldung mit Code auf der Startseite („Mein GRUMI“), Hausaufgabenheft und
 * Klassenrat-Briefkasten. Aussehen: css/klasse.css. Server: /api/klasse/… (englisch-9.onrender.com).
 *
 * - Die Anmeldung ist dieselbe wie im Lernfortschritt (js/lernstand.js): „grumi-code-anmeldung“ im Speicher des
 *   Geräts. Das Kind tippt den Code nur einmal ein: Im selben Browser-Tab gilt die Anmeldung weiter (grumiTab),
 *   bis es sich abmeldet, den Tab schließt oder länger als 10 Minuten nichts tippt oder anklickt.
 * - Öffnet ein Link einen neuen Tab, wird die Anmeldung für genau diese Zielseite vorgemerkt („frisch“,
 *   2 Minuten gültig). Wer eine Seite sonst in einem neuen Tab öffnet, wird nach dem Code gefragt.
 * - Die Klasse kommt vom Code. Die Startseite zeigt nur die Kacheln dieser Klasse: Fächer (aus der Karte der
 *   Klasse weiter unten auf der Startseite), offene Proben (js/proben-module.js), Hausaufgabenheft, Klassenrat.
 *
 *   Klasse.startseite(el, kopf)   Code-Feld im Kopfbild (kopf), nach der Anmeldung die Kacheln (el)
 *   Klasse.heft(el)         Hausaufgabenheft
 *   Klasse.rat(el)          Klassenrat-Briefkasten
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var SITZUNG = "grumi-code-anmeldung";
  var API = global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com";
  var PAUSE_MS = 10 * 60 * 1000;

  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (_e) { return false; } }
  function loesch(k) { try { global.localStorage.removeItem(k); } catch (_e) {} }
  function liesJson(k) { try { return JSON.parse(lies(k) || "null"); } catch (_e) { return null; } }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function zugVon(klasse) {
    var m = /^(\d+)/.exec(String(klasse || ""));
    return m ? m[1] + (/M$/.test(klasse) ? "M" : "R") : "";
  }

  /* ---------- Anmeldung (gleiche Regeln wie js/lernstand.js) ---------- */
  // Einmal anmelden: Im selben Browser-Tab gilt die Code-Anmeldung weiter, bis das Kind sich abmeldet, den Tab
  // schließt oder länger als 10 Minuten nichts tippt oder anklickt. Ein neuer Tab fragt wieder nach dem Code.
  // Derselbe Block steht in allen Skripten, die die Anmeldung lesen (js/lernstand.js, js/klasse.js, NT, Deutsch …).
  function grumiTab() {
    if (window.GrumiTab) return window.GrumiTab;
    var K = "grumi-code-tab", PAUSE = 600000, letzte = 0;
    function lies() { try { return JSON.parse(sessionStorage.getItem(K) || "null"); } catch (_e) { return null; } }
    function merken(code) { try { sessionStorage.setItem(K, JSON.stringify({ code: String(code), zeit: Date.now() })); } catch (_e) {} }
    function taetig() { var t = lies(); if (t && Date.now() - letzte > 20000 && Date.now() - t.zeit < PAUSE) { letzte = Date.now(); merken(t.code); } }
    ["pointerdown", "keydown"].forEach(function (n) { document.addEventListener(n, taetig, true); });
    return (window.GrumiTab = {
      merken: merken,
      gilt: function (code) { var t = lies(); return !!(t && t.code === String(code) && Date.now() - t.zeit < PAUSE); },
      ende: function () { try { sessionStorage.removeItem(K); } catch (_e) {} }
    });
  }
  function ladung() {
    var p = global.performance, t = p && (p.timeOrigin || (p.timing && p.timing.navigationStart));
    return t ? String(t) : (global.__grumiLadung = global.__grumiLadung || String(Math.random()));
  }
  function anmeldungGueltig(s) {
    if (!s || !s.code || !s.kennung) return null;
    if (s.ladung && s.ladung === ladung()) { grumiTab().merken(s.code); return s; }
    if ((s.frisch && s.frisch === global.location.pathname && Date.now() - (s.seit || 0) < 120000) || grumiTab().gilt(s.code)) {
      delete s.frisch; s.ladung = ladung(); schreib(SITZUNG, JSON.stringify(s));
      grumiTab().merken(s.code); return s;
    }
    return null;
  }
  function sitzung() {
    var s = anmeldungGueltig(liesJson(SITZUNG));
    if (s && !s.zug) s.zug = zugVon(s.klasse);
    return s;
  }
  function abmelden() { loesch(SITZUNG); grumiTab().ende(); }

  function post(route, body, wartet) {
    var ctl = global.AbortController ? new AbortController() : null;
    var abbruch = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = wartet ? setTimeout(wartet, 6000) : null;
    return fetch(API + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { d.status = r.status; return d; });
    }).finally(function () { clearTimeout(abbruch); if (langsam) clearTimeout(langsam); });
  }

  function anmelden(code, wartet) {
    return post("/api/nt9/fortschritt/anmelden", { code: code }, wartet).then(function (d) {
      if (d.status === 200 && d.ok && d.code) {
        var s = { name: "Code " + d.code, kennung: "code-" + d.code, klasse: d.klasse, zug: d.zug || zugVon(d.klasse),
          code: d.code, seit: Date.now(), ladung: ladung() };
        schreib(SITZUNG, JSON.stringify(s));
        grumiTab().merken(s.code);
        return s;
      }
      var e = new Error(d.error || (d.status === 429 ? "Zu viele falsche Codes. Warte ein paar Minuten." : "Das hat nicht geklappt. Versuche es noch einmal."));
      e.status = d.status;
      throw e;
    });
  }

  /* Weitergabe der Anmeldung beim Klick auf einen Link innerhalb von GRUMI (derselbe Block steht in js/lernstand.js) */
  if (!global.__grumiWeitergabe) {
    global.__grumiWeitergabe = 1;
    doc.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a || a.hasAttribute("download")) return;
      var ziel;
      try { ziel = new URL(a.href, global.location.href); } catch (_e) { return; }
      if (ziel.origin !== global.location.origin || ziel.pathname === global.location.pathname) return;
      var s = anmeldungGueltig(liesJson(SITZUNG));
      if (!s) return;
      s.frisch = ziel.pathname; s.seit = Date.now();
      schreib(SITZUNG, JSON.stringify(s));
    }, true);
  }

  /* Nach mehr als 10 Minuten Pause (iPad gesperrt, anderer Tab) gilt die Anmeldung nicht mehr */
  var versteckt = 0;
  function pauseBeobachten() {
    doc.addEventListener("visibilitychange", function () {
      if (doc.visibilityState === "hidden") { versteckt = Date.now(); return; }
      if (versteckt && Date.now() - versteckt > PAUSE_MS && sitzung()) { abmelden(); global.location.reload(); }
      versteckt = 0;
    });
  }

  /* ---------- Code-Feld ---------- */
  // ziel: Element; fertig(s): nach der Anmeldung; texte: { knopf, hinweis }
  function codeFeld(ziel, fertig, texte) {
    texte = texte || {};
    ziel.innerHTML =
      '<form class="kb-code" novalidate>' +
      '<label for="kb-code-feld">Dein Code</label>' +
      '<input id="kb-code-feld" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="···" aria-describedby="kb-code-fehler">' +
      '<button class="kb-knopf" type="submit">' + esc(texte.knopf || "Los geht’s 🚀") + "</button>" +
      '<p class="kb-fehler" id="kb-code-fehler" role="alert"></p>' +
      '<p class="kb-klein-text">' + esc(texte.hinweis || "Den 3-stelligen Code hast du von deiner Lehrkraft bekommen. Er gilt in allen Fächern.") + "</p>" +
      "</form>";
    var form = ziel.querySelector("form"), feld = ziel.querySelector("input"), knopf = ziel.querySelector("button"), fehler = ziel.querySelector(".kb-fehler");
    feld.addEventListener("input", function () {
      var v = feld.value.replace(/\D/g, "").slice(0, 3);
      if (v !== feld.value) feld.value = v;
      fehler.textContent = ""; fehler.className = "kb-fehler";
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var code = feld.value.replace(/\D/g, "");
      if (!/^\d{3}$/.test(code)) { fehler.textContent = "Dein Code hat genau 3 Ziffern."; feld.focus(); return; }
      knopf.disabled = true; var alt = knopf.innerHTML; knopf.textContent = "Einen Moment …";
      fehler.textContent = ""; fehler.className = "kb-fehler";
      anmelden(code, function () {
        fehler.className = "kb-fehler kb-warten";
        fehler.textContent = "Der Server wacht gerade auf – das kann bis zu einer Minute dauern.";
      }).then(function (s) { fertig(s); }).catch(function (x) {
        fehler.className = "kb-fehler";
        fehler.textContent = x && x.status ? x.message : "Keine Verbindung zum Server. Versuche es gleich noch einmal.";
        knopf.disabled = false; knopf.innerHTML = alt; feld.select();
      });
    });
    return feld;
  }

  /* ---------- Fächer: Farbe und Bild ---------- */
  var FAECHER = [
    [/mathe/i, "mathe", "➗"], [/englisch/i, "englisch", "💬"], [/deutsch/i, "deutsch", "📖"],
    [/natur|^nt\b|technik/i, "nt", "🔬"], [/informatik/i, "informatik", "💻"], [/wirtschaft|wib/i, "wib", "💼"],
    [/gpg|geschichte|politik|geo/i, "gpg", "🌍"], [/quali/i, "quali", "🧮"], [/sport/i, "sport", "🏃"],
    [/musik/i, "musik", "🎵"], [/kunst|werken/i, "kunst", "🎨"], [/ethik|religion/i, "ethik", "🕊️"]
  ];
  function fachInfo(name) {
    for (var i = 0; i < FAECHER.length; i++) if (FAECHER[i][0].test(name)) return { art: FAECHER[i][1], bild: FAECHER[i][2] };
    return { art: "sonst", bild: "📘" };
  }

  /* ---------- Datum ---------- */
  var TAGE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  function tagPlus(tag, n) { var d = new Date(tag + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function tagName(tag) { return TAGE[new Date(tag + "T12:00:00Z").getUTCDay()]; }
  function tagKurz(tag) { return tag.slice(8, 10) + "." + tag.slice(5, 7) + "."; }
  function wannText(tag, heute) {
    if (tag === heute) return "Heute";
    if (tag === tagPlus(heute, 1)) return "Morgen";
    if (tag === tagPlus(heute, -1)) return "Gestern";
    return tagName(tag) + ", " + tagKurz(tag);
  }
  function heuteHier() {
    try { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Berlin" }).format(new Date()); }
    catch (_e) { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  }

  /* ============================================================
     Startseite: Anmeldung und „Mein GRUMI“
     ============================================================ */
  // el: Abschnitt „Mein GRUMI“ (Kacheln nach der Anmeldung); kopf: Platz für das Code-Feld im Kopfbild.
  // css/klasse.css blendet je nach Zustand um (body.kb-angemeldet): ohne Anmeldung Kopfbild mit Code-Feld und
  // die ganze Startseite, mit Anmeldung nur der eigene Bereich.
  function startseite(el, kopf) {
    if (!el || !kopf) return;
    el.classList.add("kb", "kb-start");
    kopf.classList.add("kb");
    pauseBeobachten();
    var probenTimer = null;

    function zeichnen() {
      var s = sitzung();
      if (probenTimer) { clearInterval(probenTimer); probenTimer = null; }
      doc.body.classList.toggle("kb-angemeldet", Boolean(s));
      if (!s) { doc.body.classList.remove("kb-alle-zeigen"); el.innerHTML = ""; anmeldung(); return; }
      kopf.innerHTML = "";
      bereich(s);
    }

    function anmeldung() {
      kopf.innerHTML =
        '<div class="kb-hero-karte"><span class="kb-kicker">Für Schülerinnen und Schüler</span>' +
        "<h2>Hallo! Melde dich an</h2>" +
        "<p>Mit deinem Code siehst du nur das, was für deine Klasse da ist.</p>" +
        '<div id="kb-code-ziel"></div></div>';
      codeFeld(kopf.querySelector("#kb-code-ziel"), function () { zeichnen(); global.scrollTo(0, 0); },
        { hinweis: "Den 3-stelligen Code hast du von deiner Lehrkraft. Ohne Code findest du weiter unten alle Klassen und Fächer." });
    }

    // Fächer der Klasse: aus der Karte „Klasse 7M“ usw. weiter unten auf der Startseite (nur fertige Fächer)
    function faecher(s) {
      var st = parseInt(s.zug, 10), z = /M$/.test(s.zug) ? "m" : "r";
      var karte = doc.querySelector(".class-card.stufe-" + st + ".zug-" + z);
      if (!karte) return [];
      return Array.prototype.slice.call(karte.querySelectorAll("a.subject-link")).filter(function (a) {
        return a.querySelector(".subject-code.available");
      }).map(function (a) {
        var name = (a.querySelector("span") || a).textContent.replace(/\s+/g, " ").trim();
        return { name: name, href: a.getAttribute("href") };
      });
    }

    function bereich(s) {
      var liste = faecher(s);
      el.innerHTML =
        '<div class="kb-hallo"><div><span class="kb-kicker">Angemeldet</span><h2>Hallo! Das ist dein Bereich</h2>' +
        "<p>" + esc(s.name) + " · Klasse " + esc(s.klasse) + "</p></div>" +
        '<button class="kb-abmelden" type="button">Abmelden</button></div>' +
        '<div id="kb-proben" hidden></div>' +
        '<h3 class="kb-abschnitt">Deine Klasse</h3>' +
        '<div class="kb-kacheln">' +
        '<a class="kb-kachel kb-gross kb-heft" href="hausaufgaben.html"><span class="kb-emoji" aria-hidden="true">📚</span><b>Hausaufgabenheft</b><small id="kb-heft-info">Was ist auf?</small></a>' +
        '<a class="kb-kachel kb-gross kb-rat" href="klassenrat.html"><span class="kb-emoji" aria-hidden="true">📮</span><b>Klassenrat</b><small>Wirf dein Thema in den Briefkasten</small></a>' +
        "</div>" +
        (liste.length ? '<h3 class="kb-abschnitt">Deine Fächer</h3><div class="kb-kacheln">' + liste.map(function (f) {
          var i = fachInfo(f.name);
          return '<a class="kb-kachel kb-f-' + i.art + '" href="' + esc(f.href) + '"><span class="kb-emoji" aria-hidden="true">' + i.bild + "</span><b>" + esc(f.name) + "</b><small>Klasse " + esc(s.zug) + "</small></a>";
        }).join("") + "</div>" : "") +
        '<button class="kb-alle" type="button" aria-expanded="false">Alle Klassen und Fächer anzeigen</button>';
      el.querySelector(".kb-abmelden").addEventListener("click", function () { abmelden(); zeichnen(); global.scrollTo(0, 0); });
      var alle = el.querySelector(".kb-alle");
      alle.addEventListener("click", function () {
        var an = doc.body.classList.toggle("kb-alle-zeigen");
        alle.setAttribute("aria-expanded", an ? "true" : "false");
        alle.textContent = an ? "Nur meine Klasse anzeigen" : "Alle Klassen und Fächer anzeigen";
        if (an) { var l = doc.getElementById("lernen"); if (l && l.scrollIntoView) l.scrollIntoView({ block: "start" }); }
      });
      heftInfo(s);
      proben(s);
      // Alle 45 Sekunden nachsehen, ob eine Probe freigeschaltet wurde – höchstens eine halbe Stunde lang,
      // damit ein vergessener Tab den Server nicht dauerhaft wach hält
      var runden = 0;
      probenTimer = setInterval(function () {
        if (++runden > 40) { clearInterval(probenTimer); probenTimer = null; return; }
        if (doc.visibilityState !== "hidden") proben(s);
      }, 45000);
    }

    function heftInfo(s) {
      post("/api/klasse/heft", { code: s.code }).then(function (d) {
        var info = doc.getElementById("kb-heft-info");
        if (!info || !d.ok) return;
        var heute = d.heute, bis = tagPlus(heute, 7);
        var n = d.eintraege.filter(function (e) { return e.faellig >= heute && e.faellig <= bis; }).length;
        var h = d.eintraege.filter(function (e) { return e.faellig === heute; }).length;
        info.textContent = !n ? "Gerade ist nichts eingetragen 🎉" : (h ? h + " für heute · " : "") + n + (n === 1 ? " Eintrag" : " Einträge") + " diese Woche";
      }).catch(function () {});
    }

    // Offene Proben der Klasse: Probe „7“ gilt für alle 7. Klassen, „7M“ nur für den M-Zug
    function proben(s) {
      var M = global.GrumiProbenModule, box = doc.getElementById("kb-proben");
      if (!M || !box) return;
      var st = parseInt(s.zug, 10);
      var module = M.MODULES.filter(function (m) { return !m.noUnlock && m.listPath && m.stufen.indexOf(st) >= 0; });
      Promise.all(module.map(function (m) {
        return fetch(API + m.listPath).then(function (r) { return r.ok ? r.json() : { tests: [] }; }).then(function (d) {
          return (d.tests || []).filter(function (t) { return t.unlocked; }).map(function (t) {
            return { fach: m.subject, titel: t.title || t.id, klasse: m.klasse(t), href: m.schueler(t) };
          });
        }).catch(function () { return []; });
      })).then(function (teile) {
        if (!doc.body.contains(box)) return;
        var offen = [].concat.apply([], teile).filter(function (p) { return p.href && (p.klasse === String(st) || p.klasse === s.zug); });
        box.hidden = !offen.length;
        box.innerHTML = offen.length ? '<h3 class="kb-abschnitt">🔓 Jetzt offen</h3><div class="kb-kacheln">' + offen.map(function (p) {
          return '<a class="kb-kachel kb-gross kb-probe" href="' + esc(p.href) + '"><span class="kb-emoji" aria-hidden="true">📝</span><b>' + esc(p.titel) + "</b><small>Probe in " + esc(p.fach) + " · jetzt schreiben</small></a>";
        }).join("") + "</div>" : "";
      });
    }

    // Kommt das Kind zum Tab zurück, gleich nach offenen Proben sehen
    doc.addEventListener("visibilitychange", function () {
      var s = doc.visibilityState === "visible" && doc.getElementById("kb-proben") ? sitzung() : null;
      if (s) proben(s);
    });

    zeichnen();
  }

  /* ============================================================
     Kinderseiten: Kopf mit Code und „Abmelden“, Tor mit Code-Feld
     ============================================================ */
  function seitenKopf(s) {
    var wer = doc.getElementById("kb-wer");
    if (!wer) return;
    wer.innerHTML = s ? "<span>👤 " + esc(s.name) + " · " + esc(s.klasse) + '</span><button type="button">Abmelden</button>' : "";
    var b = wer.querySelector("button");
    if (b) b.addEventListener("click", function () { abmelden(); global.location.href = "index.html"; });
  }
  // Ohne gültige Anmeldung zeigt die Seite zuerst das Code-Feld
  function tor(el, weiter) {
    el.classList.add("kb");
    pauseBeobachten();
    var s = sitzung();
    seitenKopf(s);
    if (s) { weiter(s); return; }
    el.innerHTML = '<div class="kb-login"><div><span class="kb-kicker">Erst anmelden</span><h2>Wie lautet dein Code?</h2><p>Dann zeige ich dir, was für deine Klasse eingetragen ist.</p></div><div id="kb-code-ziel"></div></div>';
    codeFeld(el.querySelector("#kb-code-ziel"), function (neu) { seitenKopf(neu); weiter(neu); }).focus();
  }
  // 401: Der Server kennt den Code nicht (mehr) – dann zuerst neu anmelden
  function abgemeldet(el, d) {
    if (d.status !== 401) return false;
    abmelden();
    tor(el, function () { global.location.reload(); });
    return true;
  }

  /* ============================================================
     Hausaufgabenheft
     ============================================================ */
  function heft(el) {
    if (!el) return;
    var ansicht = "woche", daten = null, S = null;
    function erledigtKey() { return "grumi-heft-erledigt~" + S.kennung + "~"; }
    function erledigt() { return liesJson(erledigtKey()) || {}; }

    function laden() {
      el.innerHTML = '<div class="kb-karte kb-lade">Dein Heft wird aufgeschlagen …</div>';
      post("/api/klasse/heft", { code: S.code }, function () {
        el.innerHTML = '<div class="kb-karte kb-lade">Der Server wacht gerade auf – das kann bis zu einer Minute dauern …</div>';
      }).then(function (d) {
        if (abgemeldet(el, d)) return;
        if (!d.ok) throw new Error(d.error || "Fehler");
        daten = d;
        // Häkchen für Einträge, die es nicht mehr gibt, aufräumen
        var da = {}, alt = erledigt(), neu = {};
        d.eintraege.forEach(function (e) { da[e.id] = 1; });
        Object.keys(alt).forEach(function (id) { if (da[id]) neu[id] = 1; });
        schreib(erledigtKey(), JSON.stringify(neu));
        var unter = doc.getElementById("kb-held-text");
        if (unter) unter.textContent = "Klasse " + d.klasse + " · " + tagName(d.heute) + ", " + tagKurz(d.heute);
        zeichnen();
      }).catch(function () {
        el.innerHTML = '<div class="kb-karte kb-lade">Das Heft lässt sich gerade nicht öffnen. <button class="kb-knopf kb-klein" type="button">Noch einmal versuchen</button></div>';
        el.querySelector("button").addEventListener("click", laden);
      });
    }

    function gruppen() {
      var heute = daten.heute, bis = tagPlus(heute, 7);
      var alle = daten.eintraege.filter(function (e) { return e.faellig >= heute; });
      return {
        heute: alle.filter(function (e) { return e.faellig === heute; }),
        woche: alle.filter(function (e) { return e.faellig <= bis; }),
        termine: alle.filter(function (e) { return e.typ !== "aufgabe"; })
      };
    }

    function karte(e, mitTag) {
      var i = fachInfo(e.fach), fertig = erledigt()[e.id];
      var marke = e.typ === "probe" ? '<span class="kb-marke kb-probe-m">📝 Probe</span>' : e.typ === "termin" ? '<span class="kb-marke kb-termin-m">📅 Termin</span>' : '<span class="kb-marke">✏️ Hausaufgabe</span>';
      return '<article class="kb-eintrag kb-fach-' + i.art + (fertig ? " kb-erledigt" : "") + '" data-id="' + esc(e.id) + '">' +
        '<div class="kb-fach-bild" aria-hidden="true">' + i.bild + "</div>" +
        "<div><h3>" + esc(e.fach) + "</h3><p>" + esc(e.text) + "</p>" +
        (mitTag ? '<div class="kb-wann">' + (e.typ === "aufgabe" ? "Fällig: " : "Am: ") + esc(wannText(e.faellig, daten.heute)) + "</div>" : "") +
        (e.link ? '<a class="kb-link" href="' + esc(e.link) + '" target="_blank" rel="noopener">Material öffnen ↗</a>' : "") +
        (e.typ === "aufgabe" ? '<label class="kb-haken"><input type="checkbox"' + (fertig ? " checked" : "") + "> Erledigt</label>" : "") +
        '</div><div class="kb-rechts">' + marke + "</div></article>";
    }

    function zeichnen() {
      var g = gruppen(), liste = g[ansicht], h = "";
      h += '<div class="kb-reiter" role="tablist">' + [["heute", "Heute"], ["woche", "Diese Woche"], ["termine", "Proben & Termine"]].map(function (r) {
        return '<button type="button" role="tab" data-ansicht="' + r[0] + '" aria-selected="' + (ansicht === r[0]) + '" class="' + (ansicht === r[0] ? "kb-an" : "") + '">' + r[1] + "<span>" + g[r[0]].length + (g[r[0]].length === 1 ? " Eintrag" : " Einträge") + "</span></button>";
      }).join("") + "</div>";
      if (!liste.length) {
        h += '<div class="kb-leer"><span class="kb-emoji" aria-hidden="true">' + (ansicht === "termine" ? "🗓️" : "🎉") + "</span><b>" +
          (ansicht === "heute" ? "Für heute ist nichts eingetragen." : ansicht === "woche" ? "Diese Woche ist nichts eingetragen." : "Keine Proben und Termine eingetragen.") +
          "</b><span>" + (ansicht === "heute" && g.woche.length ? "Schau bei „Diese Woche“ nach, was als Nächstes kommt." : "Frag im Zweifel deine Lehrkraft.") + "</span></div>";
      } else if (ansicht === "heute") {
        h += liste.map(function (e) { return karte(e, false); }).join("");
      } else {
        var tag = "";
        liste.forEach(function (e) {
          if (e.faellig !== tag) {
            tag = e.faellig;
            var w = wannText(tag, daten.heute);
            h += '<h2 class="kb-tag' + (tag === daten.heute ? " kb-heute" : "") + '">' + esc(w) + (w === "Heute" || w === "Morgen" ? " <small>" + esc(tagName(tag) + ", " + tagKurz(tag)) + "</small>" : "") + "</h2>";
          }
          h += karte(e, false);
        });
      }
      el.innerHTML = h;
      Array.prototype.forEach.call(el.querySelectorAll("[data-ansicht]"), function (b) {
        b.addEventListener("click", function () { ansicht = b.getAttribute("data-ansicht"); zeichnen(); });
      });
      Array.prototype.forEach.call(el.querySelectorAll(".kb-haken input"), function (c) {
        c.addEventListener("change", function () {
          var art = c.closest(".kb-eintrag"), id = art.getAttribute("data-id"), e = erledigt();
          if (c.checked) e[id] = 1; else delete e[id];
          schreib(erledigtKey(), JSON.stringify(e));
          art.classList.toggle("kb-erledigt", c.checked);
        });
      });
    }

    tor(el, function (s) { S = s; laden(); });
  }

  /* ============================================================
     Klassenrat-Briefkasten
     ============================================================ */
  var THEMEN = [["Klassenklima", "🤝"], ["Unterricht", "📖"], ["Pause", "⚽"], ["Organisation", "🗂️"], ["Wunsch / Idee", "💡"], ["Sonstiges", "💬"]];

  function rat(el) {
    if (!el) return;
    var S = null;

    function formular(text, thema) {
      el.innerHTML =
        '<div class="kb-beispiele"><div class="kb-beispiel kb-gut"><b>✓ So ist es gut</b>„In letzter Zeit fallen in der Klasse viele Beleidigungen.“</div>' +
        '<div class="kb-beispiel kb-schlecht"><b>✗ So nicht</b>„XY ist dumm und nervt immer.“ (Namen und Beleidigungen)</div></div>' +
        '<form class="kb-karte" novalidate>' +
        '<fieldset class="kb-themen"><legend>Worum geht es?</legend>' + THEMEN.map(function (t, i) {
          return '<label><input type="radio" name="kb-thema" value="' + esc(t[0]) + '"' + ((thema ? thema === t[0] : i === 0) ? " checked" : "") + "><span>" + t[1] + " " + esc(t[0]) + "</span></label>";
        }).join("") + "</fieldset>" +
        '<label class="kb-feld-titel" for="kb-rat-text">Deine Nachricht</label>' +
        '<textarea class="kb-text" id="kb-rat-text" maxlength="600" placeholder="Was sollte im Klassenrat besprochen werden?"></textarea>' +
        '<div class="kb-zaehler"><span id="kb-rat-zahl">0</span> / 600 Zeichen</div>' +
        '<label class="kb-zeigen"><input type="checkbox" id="kb-rat-zeigen"><span>Meine Lehrkraft darf wissen, dass die Nachricht von mir ist.<small>Ohne Häkchen bleibt deine Nachricht anonym: Niemand sieht deinen Code oder deinen Namen.</small></span></label>' +
        '<button class="kb-knopf" type="submit">In den Briefkasten werfen ✉️</button>' +
        '<div id="kb-rat-antwort" aria-live="polite"></div></form>' +
        '<div class="kb-karte kb-geheim"><span class="kb-emoji" aria-hidden="true">🛟</span><span>Geht es dir nicht gut oder wirst du geärgert? Dann sprich bitte direkt mit einer Lehrkraft, der du vertraust. Kostenlos und anonym hilft auch die <b>Nummer gegen Kummer: 116 111</b>.</span></div>';
      var feld = el.querySelector("#kb-rat-text"), zahl = el.querySelector("#kb-rat-zahl"), knopf = el.querySelector("button[type=submit]"), antwort = el.querySelector("#kb-rat-antwort");
      if (text) { feld.value = text; zahl.textContent = text.length; }
      feld.addEventListener("input", function () { zahl.textContent = feld.value.length; });
      el.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var nachricht = feld.value.trim();
        if (nachricht.length < 8) { antwort.innerHTML = '<div class="kb-meldung kb-nein"><b>Das ist noch etwas kurz.</b>Beschreibe dein Anliegen in einem ganzen Satz.</div>'; feld.focus(); return; }
        var themaJetzt = (el.querySelector("input[name=kb-thema]:checked") || {}).value || "Sonstiges";
        knopf.disabled = true; var alt = knopf.innerHTML; knopf.textContent = "Deine Nachricht wird gelesen …";
        antwort.innerHTML = "";
        post("/api/klasse/rat/senden", { code: S.code, kategorie: themaJetzt, text: nachricht, zeigen: el.querySelector("#kb-rat-zeigen").checked }, function () {
          antwort.innerHTML = '<div class="kb-meldung kb-nein">Der Server wacht gerade auf – das kann bis zu einer Minute dauern.</div>';
        }).then(function (d) {
          if (abgemeldet(el, d)) return;
          knopf.disabled = false; knopf.innerHTML = alt;
          var hilfe = d.hilfe ? '<div class="kb-hilfe">🛟 ' + esc(d.hilfe) + "</div>" : "";
          if (d.ok && d.angenommen) {
            el.innerHTML = '<div class="kb-meldung kb-ja"><span class="kb-emoji" aria-hidden="true">📮</span><b>Deine Nachricht liegt im Briefkasten!</b>Deine Lehrkraft liest sie vor dem nächsten Klassenrat.' + hilfe +
              '<p style="margin:14px 0 0"><button class="kb-knopf kb-klein" type="button">Noch eine Nachricht schreiben</button></p></div>';
            el.querySelector("button").addEventListener("click", function () { formular("", themaJetzt); });
            return;
          }
          if (d.ok) {
            antwort.innerHTML = '<div class="kb-meldung kb-nein"><b>So kommt die Nachricht noch nicht in den Briefkasten.</b>' + esc(d.hinweis || "") +
              (d.vorschlag ? '<div class="kb-vorschlag">💡 So könntest du es schreiben:<br>„' + esc(d.vorschlag) + '“</div><p style="margin:10px 0 0"><button class="kb-knopf kb-klein kb-ruhig" type="button" id="kb-rat-nehmen">Vorschlag übernehmen</button></p>' : "") + hilfe + "</div>";
            var nehmen = el.querySelector("#kb-rat-nehmen");
            if (nehmen) nehmen.addEventListener("click", function () { feld.value = d.vorschlag; zahl.textContent = feld.value.length; antwort.innerHTML = ""; feld.focus(); });
            return;
          }
          antwort.innerHTML = '<div class="kb-meldung kb-stopp">' + esc(d.error || "Das hat gerade nicht geklappt. Versuche es noch einmal.") + "</div>";
        }).catch(function () {
          knopf.disabled = false; knopf.innerHTML = alt;
          antwort.innerHTML = '<div class="kb-meldung kb-stopp">Keine Verbindung zum Server. Deine Nachricht ist noch da – versuche es gleich noch einmal.</div>';
        });
      });
    }

    tor(el, function (s) {
      S = s;
      var unter = doc.getElementById("kb-held-text");
      if (unter) unter.textContent = "Klasse " + s.klasse + " · Wirf dein Thema für den Klassenrat ein.";
      formular("", "");
    });
  }

  global.Klasse = {
    sitzung: sitzung, anmelden: anmelden, abmelden: abmelden, startseite: startseite, heft: heft, rat: rat,
    heuteHier: heuteHier, fachInfo: fachInfo
  };
})(window);
