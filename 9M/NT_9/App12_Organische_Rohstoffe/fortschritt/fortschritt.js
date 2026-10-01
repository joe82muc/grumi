/* Fortschritt und Anmeldung für NT 9 · Organische Rohstoffe (gleiche Datei in 9M und 9R).
 * Beim ersten Öffnen eines Moduls fragt die Seite nach Vorname oder Nummer (wie „Dein Training
 * starten“ in Deutsch 7). Name und Fortschritt bleiben nur im localStorage dieses Geräts,
 * nichts davon geht an einen Server. Jede Anmeldung hat einen eigenen Speicherbereich
 * (Schlüssel + "~kennung~"), so sieht jedes Kind an einem geteilten iPad nur seinen Stand.
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
  // Speicherstände von vor der Anmeldung: Kursfortschritt und Modulseiten (Sterne, Antworten)
  var ALT = new RegExp("^(grumi-nt9-" + KL + "-(?:modul\\d+-v\\d+|organische-rohstoffe-fortschritt))(?!~)(.*)$");
  var skript = doc.currentScript;
  var pflicht = !(skript && skript.getAttribute("data-anmeldung") === "nein");

  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); return true; } catch (_e) { return false; } }
  function loesch(k) { try { global.localStorage.removeItem(k); } catch (_e) {} }
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

  var schueler = null;
  try { schueler = JSON.parse(lies(SITZUNG) || "null"); } catch (_e) {}
  if (!schueler || !schueler.kennung) schueler = null;

  function kennungAus(name) { return name.trim().replace(/\s+/g, " ").toLowerCase(); }
  // Ohne Anmeldung "~-~": Ein Name muss einen Buchstaben oder eine Ziffer enthalten, kann also nie "-" sein
  function schluessel(basis) { return basis + "~" + (schueler ? schueler.kennung : "-") + "~"; }
  var KEY = schluessel(BASIS);

  function lesen() {
    try {
      var raw = lies(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_e) {
      return {};
    }
  }

  function schreiben(data) {
    return schreib(KEY, JSON.stringify(data));
  }

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

  // Was eine Seite gespeichert hat, während das Anmeldefenster offen war, wird nicht gebraucht
  function gastStandLoeschen() {
    alleSchluessel().forEach(function (k) {
      if (k && k.indexOf("grumi-nt9-" + KL + "-") === 0 && k.indexOf("~-~") > 0) loesch(k);
    });
  }

  function hatStand(kennung) {
    return lies(BASIS + "~" + kennung + "~") !== null;
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
    ".nt9a-err{min-height:1.2em;color:#b23a48;font-size:.92rem;font-weight:700}" +
    ".nt9a-btn{padding:12px 18px;border:0;border-radius:12px;background:#176b62;color:#fff;font:inherit;font-weight:800;font-size:1.05rem;cursor:pointer}" +
    ".nt9a-btn:hover{background:#0f554e}" +
    ".nt9a-btn.ghost{background:#fff;color:#176b62;border:2px solid #176b62}" +
    ".nt9a-row{display:flex;flex-wrap:wrap;gap:10px}" +
    ".nt9a-row .nt9a-btn{flex:1}" +
    ".nt9a-ds{padding:12px 14px;border-radius:12px;background:#e3f3f0;font-size:.9rem;color:#24434a}" +
    ".nt9a-ds b{display:block;margin-bottom:4px;color:#0f554e}" +
    ".nt9a-ds ul{margin:0;padding-left:18px}" +
    ".nt9a-ds li+li{margin-top:3px}" +
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
      '<li>Dein Name und dein Fortschritt bleiben nur auf diesem Gerät. Nichts davon wird ins Internet geschickt.</li>' +
      '<li>Du musst nicht deinen Namen nehmen: Eine Nummer (z. B. aus der Klassenliste) reicht. Bitte keinen Nachnamen.</li>' +
      '<li>Bei offenen Fragen geht nur deine Antwort an die KI, ohne deinen Namen.</li>' +
      '<li>Teilst du das Gerät mit anderen? Dann melde dich am Ende ab.</li>' +
      '</ul></div>';
  }

  function zeigen(dlg) {
    if (dlg.open) return;
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
  }

  /* ---------- Anmeldung ---------- */
  function anmeldeDialog() {
    stil();
    var dlg = doc.getElementById("nt9a-login");
    if (!dlg) {
      doc.body.insertAdjacentHTML("beforeend",
        '<dialog class="nt9a-dlg" id="nt9a-login" aria-labelledby="nt9a-titel">' +
        '<form method="dialog" novalidate>' +
        '<div class="nt9a-ic" aria-hidden="true">🌱</div>' +
        '<p class="nt9a-eye">NT ' + KLASSE + ' · Organische Rohstoffe</p>' +
        '<h2 id="nt9a-titel">Dein Lernen starten</h2>' +
        '<p>Gib deinen Vornamen oder eine Nummer ein. Dann zeigt dir dieses Gerät beim nächsten Mal, was du schon geschafft hast.</p>' +
        '<label>Vorname oder Nummer<input id="nt9a-name" maxlength="30" autocomplete="off" autocapitalize="words" spellcheck="false" placeholder="z. B. Lena oder 14"></label>' +
        '<p class="nt9a-err" id="nt9a-err" role="alert"></p>' +
        '<button class="nt9a-btn" type="submit">➜ Los geht&#39;s</button>' +
        datenschutz() +
        '</form></dialog>');
      dlg = doc.getElementById("nt9a-login");
      // Ohne Anmeldung lässt sich das Fenster nicht wegklicken
      dlg.addEventListener("cancel", function (e) { if (!schueler) e.preventDefault(); });
      dlg.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        var name = doc.getElementById("nt9a-name").value.trim().replace(/\s+/g, " ");
        var err = doc.getElementById("nt9a-err");
        if (!name) { err.textContent = "Bitte trage deinen Vornamen oder eine Nummer ein."; return; }
        if (/[~<>"]/.test(name) || !/[0-9A-Za-zÀ-￯]/.test(name)) { err.textContent = "Bitte nur Buchstaben, Ziffern, Leerzeichen oder Bindestrich verwenden."; return; }
        var kennung = kennungAus(name);
        altenStandUebernehmen(kennung);
        gastStandLoeschen();
        var zurueck = hatStand(kennung);
        schueler = { name: name, kennung: kennung, klasse: KLASSE };
        if (!schreib(SITZUNG, JSON.stringify(schueler))) {
          // Kein Speicher (z. B. privates Fenster): ohne Neuladen weiterlernen, der Stand bleibt nicht erhalten
          dlg.close();
          return;
        }
        try { global.sessionStorage.setItem(BEGRUESSEN, zurueck ? "zurueck" : "neu"); } catch (_e) {}
        global.location.reload();
      });
    }
    zeigen(dlg);
    setTimeout(function () { doc.getElementById("nt9a-name").focus(); }, 60);
  }

  function abmeldeDialog() {
    stil();
    var dlg = doc.getElementById("nt9a-konto");
    if (!dlg) {
      doc.body.insertAdjacentHTML("beforeend",
        '<dialog class="nt9a-dlg" id="nt9a-konto" aria-labelledby="nt9a-ktitel">' +
        '<form method="dialog">' +
        '<div class="nt9a-ic" aria-hidden="true">👤</div>' +
        '<h2 id="nt9a-ktitel">Angemeldet als ' + esc(schueler.name) + '</h2>' +
        '<p>Wenn du dich abmeldest, bleibt dein Fortschritt auf diesem Gerät gespeichert. Meldest du dich wieder mit „' + esc(schueler.name) + '“ an, ist alles wieder da.</p>' +
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
    loesch(SITZUNG);
    schueler = null;
    global.location.reload();
  }

  // Namensschild in der Kopfzeile: neben den Sternen (Modulseiten) oder bei den Kopfzeilen-Links
  function namensschild() {
    if (!schueler || doc.querySelector(".nt9a-who")) return;
    var btn = doc.createElement("button");
    btn.type = "button";
    btn.className = "nt9a-who";
    btn.title = "Angemeldet als " + schueler.name;
    btn.setAttribute("aria-label", "Angemeldet als " + schueler.name + ". Antippen zum Abmelden.");
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
      ? "👋 Willkommen zurück, " + schueler.name + "! Dein Stand ist geladen."
      : "👋 Hallo " + schueler.name + "! Dein Fortschritt wird ab jetzt auf diesem Gerät gespeichert.";
    doc.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.remove("weg"); });
    setTimeout(function () { t.classList.add("weg"); setTimeout(function () { t.remove(); }, 500); }, 4200);
  }

  function start() {
    namensschild();
    begruessen();
    if (!schueler && pflicht) anmeldeDialog();
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
    speichern: function (id, score, total) {
      if (!id || !schueler) return false;
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
    // Löscht nur den Stand des angemeldeten Kindes (Kursübersicht, Sterne und Antworten in den Modulen)
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
