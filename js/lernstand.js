/* Lernstand mit Code für Klasse 9M/9R (Deutsch und Englisch; NT 9 hat ein eigenes Skript mit derselben Anmeldung).
 * - Anmeldung mit dem 3-stelligen Code von der Lehrkraft. Ein Code gilt in allen Fächern, die Anmeldung auf dem
 *   Gerät ist dieselbe wie in NT 9 (Sitzung "grumi-nt9-m9-anmeldung" bzw. "-r9-"). Die Klasse kommt vom Code,
 *   nicht vom Ordner – so funktionieren auch gemeinsam genutzte Seiten (9/Deutsch, Vokabeltrainer).
 * - Richtig gelöste Aufgaben gehen an den Server (englisch-9.onrender.com, /api/nt9/fortschritt). Die Lehrkraft sieht
 *   sie in proben-verwalten.html. Namen und Antworten werden nicht gespeichert.
 * - Das Kind sieht oben auf der Seite, was es schon gelöst hat und was noch fehlt (auch geräteübergreifend).
 *
 * Übungsseite:  Lernstand.seite({ kurs, bereich, bnr, modul, nr, titel, kurz, anker,
 *                                 aufgaben: [{ id, teil, text, kurz }]   oder   auswahl: "CSS-Selektor", text: "Selektor", teil: "…" })
 *               Lernstand.geloest(id)   nach einer richtig gelösten Aufgabe
 *               Lernstand.markieren()   nach einem Neuaufbau der Aufgaben
 * Übersicht:    Lernstand.uebersicht({ kurs, module: [{ id, titel, href }], anker })
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var PFAD_KL = /\/9R\//i.test(global.location.pathname) ? "r9" : /\/9M\//i.test(global.location.pathname) ? "m9" : "";
  var BEGRUESSEN = "grumi-ls-anmeldung-gruss";
  var WARTESCHLANGE = "grumi-ls-senden";
  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com") + "/api/nt9/fortschritt";

  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (_e) { return false; } }
  function loesch(k) { try { global.localStorage.removeItem(k); } catch (_e) {} }
  function liesJson(k) { try { return JSON.parse(lies(k) || "null"); } catch (_e) { return null; } }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];
    });
  }
  function sitzungsKey(kl) { return "grumi-nt9-" + kl + "-anmeldung"; }
  function klKurz(klasse) { return klasse === "9R" ? "r9" : "m9"; }

  // Angemeldet? Zuerst die Klasse des Ordners, dann die andere (gemeinsame Seiten, 9M nutzt Seiten aus 9R)
  var schueler = null;
  (PFAD_KL ? [PFAD_KL, PFAD_KL === "m9" ? "r9" : "m9"] : ["m9", "r9"]).some(function (kl) {
    var s = liesJson(sitzungsKey(kl));
    if (s && s.code && s.kennung) {
      if (!schueler || (!PFAD_KL && (s.seit || 0) > (schueler.seit || 0))) schueler = s;
      return Boolean(PFAD_KL);
    }
    return false;
  });
  function key(modul) { return "grumi-ls-" + klKurz(schueler.klasse) + "-" + modul + "~" + schueler.kennung + "~"; }
  function lokalerStand(modul) {
    var g = liesJson(key(modul)) || {};
    // Stand aus der ersten Fassung (nur Englisch-Grammatik) übernehmen
    var alt = liesJson("grumi-e9-" + klKurz(schueler.klasse) + "-" + modul + "~" + schueler.kennung + "~");
    if (alt) Object.keys(alt).forEach(function (id) { g[id] = 1; });
    return g;
  }

  function anfrage(route, body, wartet) {
    var ctl = global.AbortController ? new AbortController() : null;
    var abbruch = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = wartet ? setTimeout(wartet, 6000) : null;
    return fetch(API + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      signal: ctl ? ctl.signal : undefined, keepalive: route === "/melden"
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { d.status = r.status; return d; });
    }).finally(function () { clearTimeout(abbruch); if (langsam) clearTimeout(langsam); });
  }

  /* ---------- Aussehen ---------- */
  var CSS = "" +
    ".ls-panel{margin:16px 0;background:#fff;border:1.5px solid #8fd6a8;border-radius:16px;padding:14px 16px;box-shadow:0 6px 18px rgba(16,26,46,.06);color:#15212b;font:15px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;text-align:left}" +
    ".ls-panel *{box-sizing:border-box}" +
    ".ls-kopf{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;justify-content:space-between}" +
    ".ls-kopf h2{margin:0;font-size:1.05rem;font-weight:800;color:#15212b;font-family:inherit;letter-spacing:0;text-transform:none}" +
    ".ls-wer{display:inline-flex;align-items:center;gap:6px;font-size:.85rem;font-weight:700;color:#5d6b84}" +
    ".ls-wer button{border:1.5px solid #dce4f0;background:#fff;border-radius:999px;padding:4px 12px;font:inherit;font-weight:700;font-size:.85rem;cursor:pointer;color:#15212b}" +
    ".ls-wer button:hover{border-color:#0098da}" +
    ".ls-zahl{margin:8px 0 5px;font-weight:700}" +
    ".ls-bar{height:10px;border-radius:99px;background:#e9edf3;overflow:hidden}" +
    ".ls-bar i{display:block;height:100%;border-radius:99px;background:#15803d;transition:width .5s}" +
    ".ls-offen{margin:10px 0 0;font-size:.95rem;line-height:1.6}" +
    ".ls-offen .ls-teil{display:block}" +
    ".ls-offen b{display:inline-block;min-width:8.5rem}" +
    ".ls-chip{display:inline-block;min-width:1.7rem;text-align:center;margin:0 3px 4px 0;padding:1px 7px;border-radius:8px;background:#fff3e0;border:1px solid #f3c98b;color:#7a4a00;font-weight:800;text-decoration:none;font-size:.9rem}" +
    "a.ls-chip:hover{background:#ffe2b8}" +
    ".ls-offen details summary{cursor:pointer;font-weight:800;color:#7a4a00;margin:4px 0}" +
    ".ls-fertig{margin:10px 0 0;padding:8px 12px;border-radius:10px;background:#e9f8ee;color:#15803d;font-weight:800}" +
    ".ls-hinweis{margin:8px 0 0;font-size:.85rem;color:#5d6b84}" +
    ".ls-badge{display:inline-block;margin-left:8px;padding:1px 8px;border-radius:99px;background:#e9f8ee;border:1px solid #8fd6a8;color:#15803d;font-size:.75rem;font-weight:800;letter-spacing:0;text-transform:none;vertical-align:middle}" +
    ".ls-schon{box-shadow:inset 4px 0 0 #8fd6a8}" +
    ".ls-blink{animation:lsBlink 1.4s ease}" +
    "@keyframes lsBlink{0%,40%{outline:4px solid rgba(242,182,50,.75)}100%{outline:4px solid rgba(242,182,50,0)}}" +
    ".ls-modul{padding:10px 0;border-top:1px solid #dce4f0}" +
    ".ls-modul:first-of-type{border-top:0}" +
    ".ls-modul .ls-zeile{display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px 12px;align-items:baseline;margin-bottom:5px}" +
    ".ls-modul .ls-zeile a{font-weight:800;color:inherit}" +
    ".ls-modul .ls-zahl{margin:0;font-size:.9rem}" +
    ".ls-modul .ls-offen{margin-top:6px;font-size:.9rem}" +
    ".ls-dlg{width:min(440px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;padding:0;border:0;border-radius:20px;box-shadow:0 18px 50px rgba(10,30,40,.3);color:#15212b;font:16px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".ls-dlg::backdrop{background:rgba(12,30,50,.55);backdrop-filter:blur(3px)}" +
    ".ls-dlg form{display:grid;gap:12px;margin:0;padding:24px}" +
    ".ls-dlg h2{margin:0;font-size:1.45rem;line-height:1.2}" +
    ".ls-dlg p{margin:0}" +
    ".ls-eye{color:#0b6fa3;font-size:.8rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase}" +
    ".ls-dlg label{display:grid;gap:6px;font-weight:700}" +
    ".ls-dlg input{width:100%;box-sizing:border-box;border:2px solid #cfdbe3;border-radius:12px;font:inherit;font-size:1.9rem;font-weight:900;letter-spacing:.45em;text-align:center;padding:10px 13px 10px calc(13px + .45em);color:#15212b;font-variant-numeric:tabular-nums}" +
    ".ls-dlg input:focus{outline:none;border-color:#0098da;box-shadow:0 0 0 3px rgba(0,152,218,.18)}" +
    ".ls-err{min-height:1.2em;color:#b23a48;font-size:.92rem;font-weight:700}" +
    ".ls-err.info{color:#24434a;font-weight:600}" +
    ".ls-los{padding:12px 18px;border:0;border-radius:12px;background:#0b6fa3;color:#fff;font:inherit;font-weight:800;font-size:1.05rem;cursor:pointer}" +
    ".ls-los:disabled{opacity:.6;cursor:wait}" +
    ".ls-ds{padding:12px 14px;border-radius:12px;background:#e1f3fb;font-size:.9rem;color:#1f3b4d}" +
    ".ls-ds b{display:block;margin-bottom:4px}" +
    ".ls-ds ul{margin:0;padding-left:18px}" +
    ".ls-ds li+li{margin-top:3px}" +
    ".ls-toast{position:fixed;left:50%;bottom:22px;z-index:1000;max-width:calc(100vw - 32px);padding:12px 18px;border-radius:14px;background:#15212b;color:#fff;font:600 15px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25);transform:translate(-50%,0);transition:opacity .4s,transform .4s}" +
    ".ls-toast.weg{opacity:0;transform:translate(-50%,16px)}";
  function stil() {
    if (doc.getElementById("ls-stil")) return;
    var s = doc.createElement("style");
    s.id = "ls-stil";
    s.textContent = CSS;
    doc.head.appendChild(s);
  }

  /* ---------- Anmeldung ---------- */
  var FACH = "";
  function datenschutz() {
    return '<div class="ls-ds"><b>🔒 Datenschutz</b><ul>' +
      '<li>Gespeichert werden dein Code und welche Aufgaben du richtig gelöst hast. So sieht deine Lehrkraft, wie weit du bist. Dein Name wird nicht gespeichert.</li>' +
      '<li>Deine Antworten selbst werden nicht gespeichert.</li>' +
      '<li>Mit deinem Code kannst du auf jedem Gerät weiterlernen. Gib ihn nicht weiter.</li>' +
      '<li>Teilst du das Gerät mit anderen? Dann melde dich am Ende ab.</li>' +
      '</ul></div>';
  }

  function anmeldeDialog(hinweis) {
    stil();
    var dlg = doc.getElementById("ls-login");
    if (!dlg) {
      doc.body.insertAdjacentHTML("beforeend",
        '<dialog class="ls-dlg" id="ls-login" aria-labelledby="ls-titel"><form method="dialog" novalidate>' +
        '<div style="font-size:2.2rem;line-height:1" aria-hidden="true">🔑</div>' +
        '<p class="ls-eye">' + esc((FACH || "Lernen") + " · Klasse 9") + '</p>' +
        '<h2 id="ls-titel">Dein Lernen starten</h2>' +
        '<p>Gib den <strong>3-stelligen Code</strong> ein, den du von deiner Lehrkraft bekommen hast. Er gilt in allen Fächern.</p>' +
        '<label>Dein Code<input id="ls-code" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" spellcheck="false" placeholder="···" aria-describedby="ls-err"></label>' +
        '<p class="ls-err" id="ls-err" role="alert"></p>' +
        '<button class="ls-los" type="submit" id="ls-los">➜ Los geht&#39;s</button>' +
        datenschutz() +
        "</form></dialog>");
      dlg = doc.getElementById("ls-login");
      dlg.addEventListener("cancel", function (e) { if (!schueler) e.preventDefault(); });
      var feld = doc.getElementById("ls-code");
      feld.addEventListener("input", function () { var v = feld.value.replace(/\D/g, "").slice(0, 3); if (v !== feld.value) feld.value = v; });
      dlg.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var code = feld.value.replace(/\D/g, ""), err = doc.getElementById("ls-err"), los = doc.getElementById("ls-los");
        err.className = "ls-err";
        if (!/^\d{3}$/.test(code)) { err.textContent = "Dein Code hat genau 3 Ziffern."; return; }
        los.disabled = true; los.textContent = "Code wird geprüft …"; err.textContent = "";
        anfrage("/anmelden", { code: code }, function () {
          err.className = "ls-err info";
          err.textContent = "Der Server wacht gerade auf. Das kann bis zu einer Minute dauern …";
        }).then(function (data) {
          if (!data.ok) {
            err.className = "ls-err";
            err.textContent = data.error || "Das hat nicht geklappt. Versuch es noch einmal.";
            los.disabled = false; los.textContent = "➜ Los geht's";
            return;
          }
          schueler = { name: "Code " + data.code, kennung: "code-" + data.code, klasse: data.klasse, code: data.code, seit: Date.now() };
          if (!schreib(sitzungsKey(klKurz(data.klasse)), JSON.stringify(schueler))) { dlg.close(); return; }
          try { global.sessionStorage.setItem(BEGRUESSEN, "1"); } catch (_e) {}
          global.location.reload();
        }).catch(function () {
          err.className = "ls-err";
          err.textContent = "Keine Verbindung zum Server. Prüfe das Internet und versuch es noch einmal.";
          los.disabled = false; los.textContent = "➜ Los geht's";
        });
      });
    }
    if (typeof hinweis === "string") { var e2 = doc.getElementById("ls-err"); e2.className = "ls-err"; e2.textContent = hinweis; }
    if (!dlg.open) { if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", ""); }
    setTimeout(function () { doc.getElementById("ls-code").focus(); }, 60);
  }

  function abmelden() {
    senden();
    if (schueler) loesch(sitzungsKey(klKurz(schueler.klasse)));
    schueler = null;
    setTimeout(function () { global.location.reload(); }, 300);
  }

  function codeUngueltig() {
    if (schueler) loesch(sitzungsKey(klKurz(schueler.klasse)));
    schueler = null;
    anmeldeDialog("Dein Code gilt nicht mehr. Frag deine Lehrkraft nach deinem Code und melde dich neu an.");
  }

  function begruessen() {
    var art = null;
    try { art = global.sessionStorage.getItem(BEGRUESSEN); global.sessionStorage.removeItem(BEGRUESSEN); } catch (_e) {}
    if (!art || !schueler) return;
    stil();
    var t = doc.createElement("div");
    t.className = "ls-toast weg"; t.setAttribute("role", "status");
    t.textContent = "👋 Hallo! Du bist mit Code " + schueler.code + " angemeldet. Was du richtig löst, wird gespeichert.";
    doc.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.remove("weg"); });
    setTimeout(function () { t.classList.add("weg"); setTimeout(function () { t.remove(); }, 500); }, 4200);
  }

  function werZeile() {
    return schueler
      ? '<span class="ls-wer">👤 Code ' + esc(schueler.code) + ' <button type="button" data-ls="ab">Abmelden</button></span>'
      : '<span class="ls-wer"><button type="button" data-ls="an">Anmelden</button></span>';
  }
  function knoepfe(box) {
    var ab = box.querySelector('[data-ls="ab"]'), an = box.querySelector('[data-ls="an"]');
    if (ab) ab.addEventListener("click", abmelden);
    if (an) an.addEventListener("click", function () { anmeldeDialog(); });
  }

  /* ---------- Meldungen an den Server ---------- */
  var timer = null, sendetGerade = false, katalogFn = {}, metaVon = {}, gesendet = {};
  function warteschlange() { return schueler ? (liesJson(WARTESCHLANGE + "~" + schueler.kennung + "~") || {}) : {}; }
  function warteschlangeSichern(q) { if (schueler) schreib(WARTESCHLANGE + "~" + schueler.kennung + "~", JSON.stringify(q)); }
  function vormerken(modul, geloest, gesamt) {
    var q = warteschlange();
    var e = { geloest: geloest, gesamt: gesamt };
    // Angaben zum Modul mitspeichern: Geht die Meldung erst später von einer anderen Seite raus,
    // kennt der Server das Modul trotzdem (sonst würde er sie als unbekannt ablehnen)
    if (metaVon[modul]) e.meta = metaVon[modul];
    if (katalogFn[modul] && !gesendet[modul]) e.katalog = katalogFn[modul]();
    q[modul] = e;
    warteschlangeSichern(q);
    clearTimeout(timer);
    timer = setTimeout(senden, 1500);
  }
  function senden() {
    if (!schueler || sendetGerade) return;
    var q = warteschlange(), ids = Object.keys(q);
    if (!ids.length) return;
    sendetGerade = true;
    (function naechstes(i) {
      if (i >= ids.length) { sendetGerade = false; return; }
      var modul = ids[i], eintrag = q[modul];
      var body = { code: schueler.code, klasse: schueler.klasse, modul: modul, geloest: eintrag.geloest, gesamt: eintrag.gesamt };
      if (eintrag.meta) body.meta = eintrag.meta;
      if (eintrag.katalog) body.katalog = eintrag.katalog;
      anfrage("/melden", body).then(function (data) {
        if (data.ok || data.status === 400 || data.status === 404 || data.status === 409) {
          var jetzt = warteschlange();
          if (jetzt[modul] && JSON.stringify(jetzt[modul]) === JSON.stringify(eintrag)) { delete jetzt[modul]; warteschlangeSichern(jetzt); }
          if (data.ok) gesendet[modul] = true;
          if (data.status === 404) { sendetGerade = false; codeUngueltig(); return; }
        }
        naechstes(i + 1);
      }).catch(function () { sendetGerade = false; setTimeout(senden, 30000); });
    })(0);
  }
  global.addEventListener("online", senden);
  doc.addEventListener("visibilitychange", function () { if (doc.visibilityState === "hidden" && timer) { clearTimeout(timer); timer = null; senden(); } });
  global.addEventListener("pagehide", function () { if (timer) { clearTimeout(timer); timer = null; senden(); } });

  /* ---------- Übungsseite ---------- */
  var S = null;
  function nummer(id) { var m = /(\d+)$/.exec(id); return m ? String(+m[1] + (S && S.abNull ? 1 : 0)) : id; }
  function chipText(a) { return a.kurz || nummer(a.id); }

  function aufgabenAusSeite(cfg) {
    var liste = [];
    Array.prototype.forEach.call(doc.querySelectorAll(cfg.auswahl), function (el) {
      if (!el.id) return;
      var t = cfg.text ? el.querySelector(cfg.text) : null;
      var text = (t || el).textContent.replace(/\s+/g, " ").trim().slice(0, 110);
      liste.push({ id: el.id, teil: typeof cfg.teil === "function" ? cfg.teil(el) : (cfg.teil || "Aufgaben"), text: text });
    });
    return liste;
  }

  function seite(cfg) {
    stil();
    FACH = cfg.fach || (cfg.kurs === "d9" ? "Deutsch" : cfg.kurs === "e9" ? "Englisch" : "");
    S = cfg;
    S.aufgaben = cfg.aufgaben || aufgabenAusSeite(cfg);
    S.geloest = schueler ? lokalerStand(cfg.modul) : {};
    S.box = doc.createElement("section");
    S.box.className = "ls-panel";
    S.box.setAttribute("aria-live", "polite");
    if (cfg.anker && cfg.anker.parentNode) cfg.anker.parentNode.insertBefore(S.box, cfg.anker);
    else doc.body.insertBefore(S.box, doc.body.firstChild);
    katalogFn[cfg.modul] = function () {
      var k = {};
      S.aufgaben.forEach(function (a) {
        var label = a.label || (a.teil + " · " + (a.kurz ? a.kurz : "Aufgabe " + nummer(a.id)) + (a.text ? ": " + a.text : ""));
        k[a.id] = [label.slice(0, 140), a.teil];
      });
      return k;
    };
    if (/^(d9|e9)-/.test(cfg.modul)) metaVon[cfg.modul] = { bereich: cfg.bereich, bnr: cfg.bnr, titel: cfg.titel, kurz: cfg.kurz, nr: cfg.nr };
    zeichnenSeite();
    markieren();
    // Sprung aus einer Übersicht (…#a3): die Aufgaben entstehen oft erst per Skript
    var ziel = global.location.hash && doc.getElementById(decodeURIComponent(global.location.hash.slice(1)));
    if (ziel && ids().indexOf(ziel.id) >= 0) setTimeout(function () { ziel.scrollIntoView({ block: "center" }); ziel.classList.add("ls-blink"); }, 250);
    if (!schueler) { anmeldeDialog(); return; }
    begruessen();
    anfrage("/anmelden", { code: schueler.code }).then(function (data) {
      if (data.status === 404) { codeUngueltig(); return; }
      if (!data.ok) return;
      var f = data.fortschritt && data.fortschritt[cfg.modul];
      if (f && f.g) f.g.forEach(function (id) { if (!S.geloest[id] && ids().indexOf(id) >= 0) S.geloest[id] = 1; });
      schreib(key(cfg.modul), JSON.stringify(S.geloest));
      zeichnenSeite(); markieren();
    }).catch(function () {}).then(function () {
      vormerken(cfg.modul, Object.keys(S.geloest), S.aufgaben.length);
    });
  }
  function ids() { return S.aufgaben.map(function (a) { return a.id; }); }

  function zeichnenSeite() {
    var n = ids().filter(function (id) { return S.geloest[id]; }).length, gesamt = S.aufgaben.length;
    var pct = gesamt ? Math.round(n / gesamt * 100) : 0;
    var h = '<div class="ls-kopf"><h2>Dein Stand · ' + esc(S.titel) + "</h2>" + werZeile() + "</div>";
    if (!schueler) {
      h += '<p class="ls-hinweis">Melde dich mit deinem Code an. Dann siehst du hier, was du schon richtig gelöst hast und was dir noch fehlt.</p>';
    } else {
      h += '<p class="ls-zahl">✓ ' + n + " von " + gesamt + " " + esc(S.einheit || "Aufgaben") + " richtig gelöst</p>" +
        '<div class="ls-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div>';
      h += offenListe(S.aufgaben, S.geloest, "", true);
      if (S.hinweis) h += '<p class="ls-hinweis">' + esc(S.hinweis) + "</p>";
    }
    S.box.innerHTML = h;
    knoepfe(S.box);
    Array.prototype.forEach.call(S.box.querySelectorAll("a.ls-chip"), function (a) {
      a.addEventListener("click", function (e) {
        var ziel = doc.getElementById(a.getAttribute("data-id"));
        if (!ziel) return;
        e.preventDefault();
        ziel.scrollIntoView({ behavior: "smooth", block: "center" });
        ziel.classList.remove("ls-blink"); void ziel.offsetWidth; ziel.classList.add("ls-blink");
        var feld = ziel.querySelector("input:not([disabled]),select:not([disabled])");
        if (feld) setTimeout(function () { feld.focus({ preventScroll: true }); }, 450);
      });
    });
  }

  // Offene Aufgaben nach Teil. Auf der Übungsseite springen die Links zur Aufgabe (wenn es sie dort als Element gibt).
  function offenListe(aufgaben, geloest, seiteHref, aufDieserSeite) {
    var teile = [], nachTeil = {}, offen = 0;
    aufgaben.forEach(function (a) {
      if (geloest[a.id]) return;
      offen++;
      if (!nachTeil[a.teil]) { nachTeil[a.teil] = []; teile.push(a.teil); }
      nachTeil[a.teil].push(a);
    });
    if (!teile.length) return '<p class="ls-fertig">🎉 Alles richtig gelöst!' + (S && S.fertigText && aufDieserSeite ? " " + esc(S.fertigText) : "") + "</p>";
    var inhalt = teile.map(function (t) {
      return '<span class="ls-teil"><b>' + esc(t) + ":</b> " + nachTeil[t].map(function (a) {
        var text = esc(chipText(a)), titel = esc(a.text || "");
        var springbar = aufDieserSeite ? Boolean(doc.getElementById(a.id)) : Boolean(seiteHref);
        return springbar
          ? '<a class="ls-chip" href="' + esc(seiteHref) + "#" + esc(a.id) + '" data-id="' + esc(a.id) + '" title="' + titel + '">' + text + "</a>"
          : '<span class="ls-chip" title="' + titel + '">' + text + "</span>";
      }).join("") + "</span>";
    }).join("");
    var kopf = aufDieserSeite ? '<span style="display:block;font-weight:800;margin-bottom:3px">Das fehlt dir noch:</span>' : "";
    if (offen > 24) inhalt = "<details><summary>Alle " + offen + " offenen anzeigen</summary>" + inhalt + "</details>";
    return '<div class="ls-offen">' + kopf + inhalt + "</div>";
  }

  function markieren() {
    if (!S) return;
    ids().forEach(function (id) {
      var el = doc.getElementById(id);
      if (!el) return;
      var schon = Boolean(S.geloest[id]);
      el.classList.toggle("ls-schon", schon);
      var ort = (S.abzeichenIn && el.querySelector(S.abzeichenIn)) || el.querySelector(".exnum,.q,.ex-prompt,.q-text,h3") || el;
      var b = el.querySelector(".ls-badge");
      if (schon && !b) ort.insertAdjacentHTML("beforeend", '<span class="ls-badge">✓ schon richtig gelöst</span>');
      if (!schon && b) b.remove();
    });
  }

  function geloest(id) {
    if (!S || !schueler || ids().indexOf(id) < 0) return;
    if (!S.geloest[id]) {
      S.geloest[id] = 1;
      schreib(key(S.modul), JSON.stringify(S.geloest));
      zeichnenSeite();
      markieren();
    }
    vormerken(S.modul, Object.keys(S.geloest), S.aufgaben.length);
  }

  /* ---------- Übersichtsseite ---------- */
  function uebersicht(cfg) {
    stil();
    FACH = cfg.fach || (cfg.kurs === "d9" ? "Deutsch" : cfg.kurs === "e9" ? "Englisch" : "");
    var box = doc.createElement("section");
    box.className = "ls-panel";
    if (cfg.anker && cfg.anker.parentNode) cfg.anker.parentNode.insertBefore(box, cfg.anker);
    else doc.body.insertBefore(box, doc.body.firstChild);
    function zeichnen(fortschritt, katalog, laedt) {
      var h = '<div class="ls-kopf"><h2>Dein Stand</h2>' + werZeile() + "</div>";
      if (!schueler) {
        h += '<p class="ls-hinweis">Melde dich mit deinem Code an. Dann siehst du hier, was du schon geschafft hast und was dir noch fehlt.</p>';
      } else {
        cfg.module.forEach(function (m) {
          var g = {};
          Object.keys(lokalerStand(m.id)).forEach(function (id) { g[id] = 1; });
          ((fortschritt[m.id] || {}).g || []).forEach(function (id) { g[id] = 1; });
          var k = katalog[m.id], auf = k ? Object.keys(k).map(function (id) { return { id: id, teil: k[id][1] || "Aufgaben", text: k[id][0] }; }) : null;
          var n = auf ? auf.filter(function (a) { return g[a.id]; }).length : Object.keys(g).length;
          h += '<div class="ls-modul"><div class="ls-zeile"><a href="' + esc(m.href) + '">' + esc(m.titel) + "</a>";
          if (auf) {
            var pct = auf.length ? Math.round(n / auf.length * 100) : 0;
            h += '<span class="ls-zahl">' + n + " von " + auf.length + " richtig</span></div>" +
              '<div class="ls-bar"><i style="width:' + pct + '%"></i></div>' +
              (n ? offenListe(auf, g, m.sprung === false ? "" : m.href, false) : '<p class="ls-hinweis">Noch nicht begonnen.</p>');
          } else {
            h += '<span class="ls-zahl">' + (n ? n + " richtig gelöst" : laedt ? "…" : "noch nicht begonnen") + "</span></div>";
          }
          h += "</div>";
        });
        if (laedt) h += '<p class="ls-hinweis">Dein Stand wird geladen …</p>';
      }
      box.innerHTML = h;
      knoepfe(box);
    }
    zeichnen({}, {}, Boolean(schueler));
    if (!schueler) { if (cfg.anmelden !== false) anmeldeDialog(); return; }
    begruessen();
    anfrage("/anmelden", { code: schueler.code, kurs: cfg.kurs, katalog: true }).then(function (data) {
      if (data.status === 404) { codeUngueltig(); return; }
      zeichnen(data.fortschritt || {}, data.katalog || {}, false);
    }).catch(function () { zeichnen({}, {}, false); }).then(senden);
  }

  global.Lernstand = {
    get schueler() { return schueler; },
    seite: seite, geloest: geloest, markieren: markieren, uebersicht: uebersicht, anmelden: anmeldeDialog, abmelden: abmelden
  };
})(window);
