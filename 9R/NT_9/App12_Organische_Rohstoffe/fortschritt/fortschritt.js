/* Fortschritt und Anmeldung für NT 9 · Organische Rohstoffe (gleiche Datei in 9M und 9R).
 * Jedes Kind meldet sich mit dem 3-stelligen Code an, den es von der Lehrkraft bekommt.
 * Der Server (englisch-9.onrender.com, /api/nt9/fortschritt) prüft den Code und speichert,
 * welche Aufgaben gelöst sind. Die Lehrkraft sieht das in proben-verwalten.html.
 * Auf dem Gerät hat jede Anmeldung einen eigenen Speicherbereich (Schlüssel + "~kennung~",
 * Kennung = "code-123"), so sieht jedes Kind an einem geteilten iPad nur seinen Stand.
 * Mit dem Code lässt sich auf jedem Gerät weiterlernen: Beim Anmelden und beim Öffnen einer
 * Modulseite holt das Skript den Stand vom Server und ergänzt den Stand auf dem Gerät.
 * Antworten auf offene Fragen werden nicht gespeichert. Namen kennt der Server nicht: Die Zuordnung
 * Code -> Name führt die Lehrkraft getrennt. Auf dem Gerät heißt das Kind deshalb „Code 123“.
 * Seiten ohne Anmeldepflicht (Themenübersicht) binden das Skript mit data-anmeldung="nein" ein.
 */
(function (global) {
  var doc = global.document;
  var cfg = global.KohlenstoffKurs || {};
  var KL = /\/9R\//i.test(global.location.pathname) ? "r9" : "m9";
  var KLASSE = KL === "r9" ? "9R" : "9M";
  var BASIS = cfg.storageKey || "grumi-nt9-kohlenstoff-fortschritt";
  var SITZUNG = "grumi-nt9-" + KL + "-anmeldung";
  var UEBERNOMMEN = "grumi-nt9-" + KL + "-anmeldung-alt-uebernommen";
  var BEGRUESSEN = "grumi-nt9-anmeldung-gruss";
  var API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com") + "/api/nt9/fortschritt";
  // Kursmodul (Kennung in content.js) -> Nummer der Lernseite modul-N.html
  var SEITE = { m01: 1, m02: 2, m04: 3, m05: 4, m06: 5 };
  // Speicherstände von vor der Anmeldung: Kursfortschritt und Modulseiten (Sterne, Antworten)
  var ALT = new RegExp("^(grumi-nt9-" + KL + "-(?:modul\\d+-v\\d+|organische-rohstoffe-fortschritt))(?!~)(.*)$");
  var skript = doc.currentScript;
  var pflicht = !(skript && skript.getAttribute("data-anmeldung") === "nein");

  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (_e) { return false; } }
  function loesch(k) { try { global.localStorage.removeItem(k); } catch (_e) {} }
  function liesJson(k) { try { return JSON.parse(lies(k) || "null"); } catch (_e) { return null; } }
  function alleSchluessel() {
    var out = [];
    try { for (var i = 0; i < global.localStorage.length; i++) out.push(global.localStorage.key(i)); } catch (_e) {}
    return out;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];
    });
  }

  // Sitzung: { name, kennung, klasse, code }. Ältere Anmeldungen mit Vorname (ohne Code) gelten
  // nicht mehr – ihr Stand kann beim Anmelden mit Code übernommen werden.
  var schueler = liesJson(SITZUNG);
  var alteSitzung = null;
  if (!schueler || !schueler.kennung) schueler = null;
  else if (!schueler.code) { alteSitzung = schueler; schueler = null; }

  // Ohne Anmeldung "~-~": Eine Kennung kann nie "-" sein
  var seite = null; // Modulseite, die gerade ihren Speicherschlüssel geholt hat: { modul, key }
  function schluessel(basis) {
    var key = basis + "~" + (schueler ? schueler.kennung : "-") + "~";
    var m = /-modul(\d)-v\d+$/.exec(basis);
    if (m) Object.keys(SEITE).forEach(function (id) { if (SEITE[id] === +m[1]) seite = { modul: id, key: key }; });
    return key;
  }
  function modulSchluessel(id, kennung) { return "grumi-nt9-" + KL + "-modul" + SEITE[id] + "-v1~" + kennung + "~"; }
  var KEY = schluessel(BASIS);

  function lesen() { return liesJson(KEY) || {}; }
  function schreiben(data) { return schreib(KEY, JSON.stringify(data)); }

  function heute() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  // Erste Anmeldung auf diesem Gerät: den Stand von vorher (ohne Namen gespeichert) übernehmen
  function altenStandUebernehmen(kennung) {
    if (lies(UEBERNOMMEN)) return;
    alleSchluessel().forEach(function (k) {
      var m = k && ALT.exec(k);
      if (!m) return;
      var neu = m[1] + "~" + kennung + "~" + m[2];
      if (lies(neu) === null) schreib(neu, lies(k));
      loesch(k);
    });
    schreib(UEBERNOMMEN, "1");
  }

  // Stand einer früheren Anmeldung (Vorname) in die neue Anmeldung (Code) übernehmen
  function standKopieren(von, nach) {
    var alt = "~" + von + "~", neu = "~" + nach + "~";
    alleSchluessel().forEach(function (k) {
      if (!k || k.indexOf("grumi-nt9-" + KL + "-") !== 0 || k.indexOf(alt) < 0) return;
      var ziel = k.replace(alt, neu), quelle = lies(k), vorhanden = lies(ziel);
      if (vorhanden === null) { schreib(ziel, quelle); return; }
      var a = null, b = null;
      try { a = JSON.parse(quelle); b = JSON.parse(vorhanden); } catch (_e) { return; }
      if (!a || !b || typeof a !== "object" || typeof b !== "object") return;
      Object.keys(a).forEach(function (x) {
        if (!(x in b)) b[x] = a[x];
        else if (a[x] && b[x] && typeof a[x].score === "number" && a[x].score > (b[x].score || 0)) b[x] = a[x];
      });
      schreib(ziel, JSON.stringify(b));
    });
  }

  // Stand vom Server ergänzen: gelöste Aufgaben in die Modulseiten, Sterne in die Kursübersicht.
  // Liefert je Modul die Aufgaben, die auf diesem Gerät neu dazugekommen sind.
  function serverStandUebernehmen(kennung, fortschritt) {
    var neu = {}, kursKey = BASIS + "~" + kennung + "~", kurs = liesJson(kursKey) || {}, kursGeaendert = false;
    Object.keys(fortschritt || {}).forEach(function (id) {
      if (!SEITE[id]) return;
      var f = fortschritt[id] || {}, ids = f.g || [], key = modulSchluessel(id, kennung);
      var solved = liesJson(key) || {}, dazu = [];
      ids.forEach(function (a) { if (!solved[a]) { solved[a] = 1; dazu.push(a); } });
      if (dazu.length) { schreib(key, JSON.stringify(solved)); neu[id] = dazu; }
      var score = Math.min(Object.keys(solved).length, f.t || Infinity), total = f.t || (kurs[id] && kurs[id].total) || 0;
      if (total && (!kurs[id] || kurs[id].score < score)) { kurs[id] = { score: score, total: total, datum: heute() }; kursGeaendert = true; }
    });
    if (kursGeaendert) schreib(kursKey, JSON.stringify(kurs));
    return neu;
  }

  /* ---------- Verbindung zum Server ---------- */
  function anfrage(route, body, wartet) {
    var ctl = global.AbortController ? new AbortController() : null;
    var abbruch = setTimeout(function () { if (ctl) ctl.abort(); }, 75000);
    var langsam = wartet ? setTimeout(wartet, 6000) : null;
    return fetch(API + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      signal: ctl ? ctl.signal : undefined, keepalive: route === "/melden"
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) { data.status = r.status; return data; });
    }).finally(function () { clearTimeout(abbruch); if (langsam) clearTimeout(langsam); });
  }

  // Meldungen: je Modul nur der neueste Stand. Was nicht ankommt, bleibt gespeichert und geht später raus.
  var WARTESCHLANGE = "grumi-nt9-" + KL + "-senden";
  var offen = {}, katalogFn = {}, katalogGesendet = {}, timer = null, sendetGerade = false;
  function warteschlange() { return schueler ? (liesJson(WARTESCHLANGE + "~" + schueler.kennung + "~") || {}) : {}; }
  function warteschlangeSichern(q) { if (schueler) schreib(WARTESCHLANGE + "~" + schueler.kennung + "~", JSON.stringify(q)); }

  function vormerken(id, geloest, gesamt) {
    var q = warteschlange();
    q[id] = { geloest: geloest, gesamt: gesamt };
    warteschlangeSichern(q);
    clearTimeout(timer);
    timer = setTimeout(senden, 2500);
  }

  function senden() {
    if (!schueler || !schueler.code || sendetGerade) return;
    var q = warteschlange(), ids = Object.keys(q);
    if (!ids.length) return;
    sendetGerade = true;
    var naechstes = function (i) {
      if (i >= ids.length) { sendetGerade = false; return; }
      var id = ids[i], eintrag = q[id], body = { code: schueler.code, klasse: KLASSE, modul: id, geloest: eintrag.geloest, gesamt: eintrag.gesamt };
      if (katalogFn[id] && !katalogGesendet[id]) { try { body.katalog = katalogFn[id](); } catch (_e) {} }
      anfrage("/melden", body).then(function (data) {
        if (data.ok || data.status === 400 || data.status === 404 || data.status === 409) {
          // angekommen (oder nicht zu retten): aus der Warteschlange nehmen, falls inzwischen nichts Neueres kam
          var jetzt = warteschlange();
          if (jetzt[id] && JSON.stringify(jetzt[id]) === JSON.stringify(eintrag)) { delete jetzt[id]; warteschlangeSichern(jetzt); }
          if (data.ok && body.katalog) katalogGesendet[id] = true;
          if (data.status === 404) codeUngueltig();
        }
        naechstes(i + 1);
      }).catch(function () { sendetGerade = false; setTimeout(senden, 30000); });
    };
    naechstes(0);
  }
  global.addEventListener("online", senden);
  doc.addEventListener("visibilitychange", function () { if (doc.visibilityState === "hidden" && timer) { clearTimeout(timer); timer = null; senden(); } });

  // Beim Öffnen: Stand vom Server holen (anderes Gerät) und den Namen aktualisieren
  function abgleichen() {
    if (!schueler || !schueler.code) return;
    anfrage("/anmelden", { code: schueler.code, klasse: KLASSE }).then(function (data) {
      if (data.status === 404 || data.status === 409) { codeUngueltig(); return; }
      if (!data.ok) return;
      var neu = serverStandUebernehmen(schueler.kennung, data.fortschritt);
      if (seite && neu[seite.modul] && global.Modul && global.Modul.mehrGeloest) global.Modul.mehrGeloest(neu[seite.modul]);
    }).catch(function () {}).then(senden);
  }

  function codeUngueltig() {
    if (!schueler) return;
    loesch(SITZUNG);
    alteSitzung = null;
    schueler = null;
    if (pflicht) anmeldeDialog("Dein Code gilt nicht mehr. Frag deine Lehrkraft nach deinem Code und melde dich neu an.");
  }

  /* ---------- Aussehen (gilt auf allen Seiten, egal welches Stylesheet) ---------- */
  var CSS = "" +
    ".nt9a-dlg{width:min(440px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;padding:0;border:0;border-radius:20px;box-shadow:0 18px 50px rgba(10,30,40,.3);color:#15212b;font:16px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}" +
    ".nt9a-dlg::backdrop{background:rgba(12,40,45,.55);backdrop-filter:blur(3px)}" +
    ".nt9a-dlg form{display:grid;gap:12px;margin:0;padding:24px}" +
    ".nt9a-dlg h2{margin:0;font-size:1.45rem;line-height:1.2;color:#15212b}" +
    ".nt9a-dlg p{margin:0}" +
    ".nt9a-ic{font-size:2.2rem;line-height:1}" +
    ".nt9a-eye{color:#176b62;font-size:.8rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase}" +
    ".nt9a-dlg label{display:grid;gap:6px;font-weight:700}" +
    ".nt9a-dlg input{width:100%;box-sizing:border-box;padding:11px 13px;border:2px solid #cfdbe3;border-radius:12px;font:inherit;font-size:1.05rem;color:#15212b;background:#fff}" +
    ".nt9a-dlg input:focus{outline:none;border-color:#176b62;box-shadow:0 0 0 3px rgba(23,107,98,.18)}" +
    ".nt9a-dlg input.nt9a-code{font-size:1.9rem;font-weight:900;letter-spacing:.45em;text-align:center;padding:10px 13px 10px calc(13px + .45em);font-variant-numeric:tabular-nums}" +
    ".nt9a-dlg label.nt9a-check{display:flex;align-items:flex-start;gap:9px;font-weight:600;font-size:.95rem}" +
    ".nt9a-dlg label.nt9a-check input{width:20px;height:20px;flex:none;margin:2px 0 0;accent-color:#176b62}" +
    ".nt9a-err{min-height:1.2em;color:#b23a48;font-size:.92rem;font-weight:700}" +
    ".nt9a-err.info{color:#24434a;font-weight:600}" +
    ".nt9a-btn{padding:12px 18px;border:0;border-radius:12px;background:#176b62;color:#fff;font:inherit;font-weight:800;font-size:1.05rem;cursor:pointer}" +
    ".nt9a-btn:hover{background:#0f554e}" +
    ".nt9a-btn:disabled{opacity:.6;cursor:wait}" +
    ".nt9a-btn.ghost{background:#fff;color:#176b62;border:2px solid #176b62}" +
    ".nt9a-row{display:flex;flex-wrap:wrap;gap:10px}" +
    ".nt9a-row .nt9a-btn{flex:1}" +
    ".nt9a-ds{padding:12px 14px;border-radius:12px;background:#e3f3f0;font-size:.9rem;color:#24434a}" +
    ".nt9a-ds b{display:block;margin-bottom:4px;color:#0f554e}" +
    ".nt9a-ds ul{margin:0;padding-left:18px}" +
    ".nt9a-ds li+li{margin-top:3px}" +
    ".nt9a-mycode{display:inline-block;padding:2px 10px;border-radius:8px;background:#e3f3f0;font-weight:900;letter-spacing:.12em;color:#0f554e}" +
    ".nt9a-who{flex:none;display:inline-flex;align-items:center;gap:5px;max-width:170px;padding:5px 11px;border:1px solid #b9ddd6;border-radius:99px;background:#e3f3f0;color:#0f554e;font:inherit;font-size:.88rem;font-weight:800;cursor:pointer}" +
    ".nt9a-who span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
    ".nt9a-who:hover{border-color:#176b62}" +
    ".nt9a-toast{position:fixed;left:50%;bottom:22px;z-index:1000;max-width:calc(100vw - 32px);padding:12px 18px;border-radius:14px;background:#15212b;color:#fff;font:600 15px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.25);transform:translate(-50%,0);transition:opacity .4s,transform .4s}" +
    ".nt9a-toast.weg{opacity:0;transform:translate(-50%,16px)}" +
    "@media (max-width:600px){.nt9a-who span{display:none}.nt9a-dlg form{padding:20px}}";

  function stil() {
    if (doc.getElementById("nt9a-stil")) return;
    var s = doc.createElement("style");
    s.id = "nt9a-stil";
    s.textContent = CSS;
    doc.head.appendChild(s);
  }

  function datenschutz() {
    return '<div class="nt9a-ds"><b>🔒 Datenschutz</b><ul>' +
      '<li>Gespeichert werden dein Code und welche Aufgaben du gelöst hast. So sieht deine Lehrkraft, wie weit du bist. Dein Name wird nicht gespeichert: Welcher Code zu dir gehört, weiß nur deine Lehrkraft.</li>' +
      '<li>Deine Antworten auf offene Fragen und im Duell werden nicht gespeichert. Für die Rückmeldung geht nur die Antwort an die KI, ohne Code und Namen.</li>' +
      '<li>Mit deinem Code kannst du auf jedem Gerät weiterlernen. Gib ihn nicht weiter.</li>' +
      '<li>Teilst du das Gerät mit anderen? Dann melde dich am Ende ab.</li>' +
      '</ul></div>';
  }

  function zeigen(dlg) {
    if (dlg.open) return;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }

  /* ---------- Anmeldung ---------- */
  function anmeldeDialog(hinweis) {
    stil();
    var dlg = doc.getElementById("nt9a-login");
    if (!dlg) {
      var altName = alteSitzung && alteSitzung.name;
      doc.body.insertAdjacentHTML("beforeend",
        '<dialog class="nt9a-dlg" id="nt9a-login" aria-labelledby="nt9a-titel">' +
        '<form method="dialog" novalidate>' +
        '<div class="nt9a-ic" aria-hidden="true">🌱</div>' +
        '<p class="nt9a-eye">NT ' + KLASSE + ' · Organische Rohstoffe</p>' +
        '<h2 id="nt9a-titel">Dein Lernen starten</h2>' +
        '<p>Gib den <strong>3-stelligen Code</strong> ein, den du von deiner Lehrkraft bekommen hast.</p>' +
        '<label>Dein Code<input id="nt9a-code" class="nt9a-code" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" spellcheck="false" placeholder="···" aria-describedby="nt9a-err"></label>' +
        (altName ? '<label class="nt9a-check"><input type="checkbox" id="nt9a-alt" checked><span>Bisherigen Stand von „' + esc(altName) + '“ auf diesem Gerät übernehmen</span></label>' : "") +
        '<p class="nt9a-err" id="nt9a-err" role="alert"></p>' +
        '<button class="nt9a-btn" type="submit" id="nt9a-los">➜ Los geht&#39;s</button>' +
        datenschutz() +
        '</form></dialog>');
      dlg = doc.getElementById("nt9a-login");
      // Ohne Anmeldung lässt sich das Fenster nicht wegklicken
      dlg.addEventListener("cancel", function (e) { if (!schueler) e.preventDefault(); });
      var feld = doc.getElementById("nt9a-code");
      feld.addEventListener("input", function () { var v = feld.value.replace(/\D/g, "").slice(0, 3); if (v !== feld.value) feld.value = v; });
      dlg.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var code = feld.value.replace(/\D/g, "");
        var err = doc.getElementById("nt9a-err"), los = doc.getElementById("nt9a-los");
        err.className = "nt9a-err";
        if (!/^\d{3}$/.test(code)) { err.textContent = "Dein Code hat genau 3 Ziffern."; return; }
        los.disabled = true; los.textContent = "Code wird geprüft …"; err.textContent = "";
        anfrage("/anmelden", { code: code, klasse: KLASSE }, function () {
          err.className = "nt9a-err info";
          err.textContent = "Der Server wacht gerade auf. Das kann bis zu einer Minute dauern …";
        }).then(function (data) {
          if (!data.ok) {
            err.className = "nt9a-err";
            err.textContent = data.error || "Das hat nicht geklappt. Versuch es noch einmal.";
            los.disabled = false; los.textContent = "➜ Los geht's";
            return;
          }
          angemeldet(data, Boolean(doc.getElementById("nt9a-alt") && doc.getElementById("nt9a-alt").checked));
        }).catch(function () {
          err.className = "nt9a-err";
          err.textContent = "Keine Verbindung zum Server. Prüfe das Internet und versuch es noch einmal.";
          los.disabled = false; los.textContent = "➜ Los geht's";
        });
      });
    }
    if (typeof hinweis === "string") { var e2 = doc.getElementById("nt9a-err"); e2.className = "nt9a-err"; e2.textContent = hinweis; }
    zeigen(dlg);
    setTimeout(function () { doc.getElementById("nt9a-code").focus(); }, 60);
  }

  function angemeldet(data, altUebernehmen) {
    var kennung = "code-" + data.code;
    altenStandUebernehmen(kennung);
    if (altUebernehmen && alteSitzung) standKopieren(alteSitzung.kennung, kennung);
    // Was eine Seite gespeichert hat, während das Anmeldefenster offen war, wird nicht gebraucht
    alleSchluessel().forEach(function (k) {
      if (k && k.indexOf("grumi-nt9-" + KL + "-") === 0 && k.indexOf("~-~") > 0) loesch(k);
    });
    var vorher = lies(BASIS + "~" + kennung + "~") !== null || Object.keys(data.fortschritt || {}).length > 0;
    serverStandUebernehmen(kennung, data.fortschritt);
    schueler = { name: "Code " + data.code, kennung: kennung, klasse: KLASSE, code: data.code };
    // Den ganzen Stand dieses Geräts einmal hochladen (z. B. übernommener Stand), die Seite schickt ihn nach dem Neuladen
    var q = {};
    Object.keys(SEITE).forEach(function (id) {
      var solved = liesJson(modulSchluessel(id, kennung));
      if (solved && Object.keys(solved).length) q[id] = { geloest: Object.keys(solved), gesamt: +(lies(modulSchluessel(id, kennung) + "-total") || 0) };
    });
    if (!schreib(SITZUNG, JSON.stringify(schueler))) {
      // Kein Speicher (z. B. privates Fenster): ohne Neuladen weiterlernen, der Stand bleibt nicht auf dem Gerät
      doc.getElementById("nt9a-login").close();
      return;
    }
    warteschlangeSichern(q);
    if (alteSitzung) alteSitzung = null;
    try { global.sessionStorage.setItem(BEGRUESSEN, vorher ? "zurueck" : "neu"); } catch (_e) {}
    global.location.reload();
  }

  function abmeldeDialog() {
    stil();
    var dlg = doc.getElementById("nt9a-konto");
    if (!dlg) {
      doc.body.insertAdjacentHTML("beforeend",
        '<dialog class="nt9a-dlg" id="nt9a-konto" aria-labelledby="nt9a-ktitel">' +
        '<form method="dialog">' +
        '<div class="nt9a-ic" aria-hidden="true">👤</div>' +
        '<h2 id="nt9a-ktitel">Du bist angemeldet</h2>' +
        '<p>Dein Code: <span class="nt9a-mycode">' + esc(schueler.code) + '</span></p>' +
        '<p>Dein Fortschritt bleibt gespeichert, auch wenn du dich abmeldest. Mit deinem Code kannst du dich hier oder auf einem anderen Gerät wieder anmelden.</p>' +
        '<div class="nt9a-row"><button class="nt9a-btn" type="button" id="nt9a-weiter">Weiterlernen</button>' +
        '<button class="nt9a-btn ghost" type="button" id="nt9a-ab">Abmelden</button></div>' +
        datenschutz() +
        '</form></dialog>');
      dlg = doc.getElementById("nt9a-konto");
      doc.getElementById("nt9a-weiter").addEventListener("click", function () { dlg.close(); });
      doc.getElementById("nt9a-ab").addEventListener("click", abmelden);
    }
    zeigen(dlg);
  }

  function abmelden() {
    senden();
    loesch(SITZUNG);
    schueler = null;
    // kurz warten, damit die letzte Meldung noch rausgeht
    setTimeout(function () { global.location.reload(); }, 300);
  }

  // Namensschild in der Kopfzeile: neben den Sternen (Modulseiten) oder bei den Kopfzeilen-Links
  function namensschild() {
    if (!schueler || doc.querySelector(".nt9a-who")) return;
    var btn = doc.createElement("button");
    btn.type = "button";
    btn.className = "nt9a-who";
    btn.title = "Angemeldet mit " + schueler.name;
    btn.setAttribute("aria-label", "Angemeldet mit " + schueler.name + ". Antippen zum Abmelden.");
    btn.innerHTML = '<i aria-hidden="true" style="font-style:normal">👤</i><span>' + esc(schueler.name) + "</span>";
    btn.addEventListener("click", abmeldeDialog);
    var stars = doc.getElementById("stars"), links = doc.querySelector(".top-links");
    if (stars && stars.parentNode) stars.parentNode.insertBefore(btn, stars);
    else if (links) links.appendChild(btn);
    else return;
    stil();
  }

  function begruessen() {
    var art = null;
    try { art = global.sessionStorage.getItem(BEGRUESSEN); global.sessionStorage.removeItem(BEGRUESSEN); } catch (_e) {}
    if (!art || !schueler) return;
    stil();
    var t = doc.createElement("div");
    t.className = "nt9a-toast weg";
    t.setAttribute("role", "status");
    t.textContent = art === "zurueck"
      ? "👋 Willkommen zurück! Dein Stand ist geladen (" + schueler.name + ")."
      : "👋 Hallo! Du bist mit " + schueler.name + " angemeldet. Dein Fortschritt wird ab jetzt gespeichert.";
    doc.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.remove("weg"); });
    setTimeout(function () { t.classList.add("weg"); setTimeout(function () { t.remove(); }, 500); }, 4200);
  }

  function start() {
    namensschild();
    begruessen();
    if (!schueler && pflicht) anmeldeDialog();
    if (schueler && pflicht) abgleichen();
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", start);
  else start();

  global.KohlenstoffFortschritt = {
    klasse: KLASSE,
    schueler: schueler,
    // Speicherschlüssel einer Modulseite, getrennt nach angemeldetem Kind
    schluessel: schluessel,
    anmelden: anmeldeDialog,
    abmelden: abmelden,
    konto: function () { if (schueler) abmeldeDialog(); else anmeldeDialog(); },
    // d (von den Modulseiten): { geloest: [Aufgaben], katalog: Funktion } – geht an den Server
    speichern: function (id, score, total, d) {
      if (!id || !schueler) return false;
      if (d && d.geloest && schueler.code) {
        if (d.katalog) katalogFn[id] = d.katalog;
        vormerken(id, d.geloest, total);
      }
      var data = lesen();
      var old = data[id];
      if (old && old.score > score) return true;
      data[id] = { score: score, total: total, datum: heute() };
      return schreiben(data);
    },
    holen: function (id) {
      return lesen()[id] || null;
    },
    alle: lesen,
    geschafft: function (id) {
      var entry = this.holen(id);
      return !!(entry && entry.total > 0 && entry.score >= entry.total);
    },
    // Löscht nur den Stand des angemeldeten Kindes auf diesem Gerät (die Lehreransicht behält ihn)
    zuruecksetzen: function () {
      if (!schueler) return false;
      var marke = "~" + schueler.kennung + "~";
      alleSchluessel().forEach(function (k) {
        if (k && k.indexOf("grumi-nt9-" + KL + "-") === 0 && k.indexOf(marke) > 0) loesch(k);
      });
      return true;
    }
  };
})(window);
