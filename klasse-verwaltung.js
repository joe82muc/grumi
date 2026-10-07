/* Verwaltung für die Lehrkraft (in proben-verwalten.html, Reiter je Klasse):
 *   📚 Hausaufgaben  – Hausaufgaben, Proben und Termine eintragen; die Kinder sehen sie im Hausaufgabenheft
 *   📮 Klassenrat    – Briefkasten der Klasse lesen, Themen für den Klassenrat vormerken, eigene Themen ergänzen
 * Aufruf aus lernfortschritt.js:  KlasseVerwaltung.heft(el, { api, pw, klasse, nameVon })  bzw.  .rat(...)
 * Server: /api/klasse/lehrer/… (backend/api/klasse.js), immer mit dem Lehrkraft-Passwort.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var FAECHER = ["Deutsch", "Mathematik", "Englisch", "Natur und Technik", "GPG", "Wirtschaft und Beruf", "Informatik", "Ethik", "Religion", "Sport", "Musik", "Kunst", "Werken", "Soziales", "Technik", "Sonstiges"];
  var ARTEN = { aufgabe: "Hausaufgabe", probe: "Probe", termin: "Termin / Hinweis" };
  var THEMEN = ["Klassenklima", "Unterricht", "Pause", "Organisation", "Wunsch / Idee", "Sonstiges"];
  var STATUS = { neu: "Neu", agenda: "Für Klassenrat", done: "Besprochen" };
  var TAGE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

  var CSS = "" +
    ".kv-form{display:grid;grid-template-columns:1fr 1fr 1fr;gap:.7rem .9rem;border:1.5px solid var(--line);border-radius:14px;padding:1rem;background:#fafbfd}" +
    ".kv-form .kv-voll{grid-column:1/-1}" +
    ".kv-form input,.kv-form select,.kv-form textarea{width:100%;padding:.6rem .7rem;border:1.5px solid var(--line);border-radius:10px;font:600 .98rem inherit;font-family:inherit;color:var(--ink);background:#fff}" +
    ".kv-form textarea{min-height:5.2rem;resize:vertical;line-height:1.45}" +
    ".kv-form select:focus,.kv-form textarea:focus{outline:2px solid var(--accent);outline-offset:1px;border-color:var(--accent)}" +
    ".kv-titel{font-size:.8rem;font-weight:900;letter-spacing:.07em;text-transform:uppercase;border-bottom:2px solid var(--line);padding-bottom:.35rem;margin:1.4rem 0 .7rem;display:flex;gap:.6rem;align-items:baseline;flex-wrap:wrap}" +
    ".kv-titel small{font-size:.78rem;color:var(--muted);font-weight:700;letter-spacing:0;text-transform:none}" +
    ".kv-zeile{border:1.5px solid var(--line);border-radius:12px;padding:.75rem .9rem;margin-bottom:.6rem;display:flex;gap:.6rem 1rem;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;background:#fff}" +
    ".kv-zeile.kv-alt{opacity:.62}" +
    ".kv-zeile .kv-links{flex:1 1 300px;min-width:0}" +
    ".kv-kopf{display:flex;gap:.45rem .6rem;align-items:center;flex-wrap:wrap;font-weight:800}" +
    ".kv-text{margin-top:.3rem;white-space:pre-line;overflow-wrap:anywhere;line-height:1.45}" +
    ".kv-meta{font-size:.82rem;color:var(--muted);font-weight:700;margin-top:.3rem;overflow-wrap:anywhere}" +
    ".kv-meta a{color:var(--accent)}" +
    ".kv-knoepfe{display:flex;gap:.4rem;flex-wrap:wrap}" +
    ".kv-marke{font-size:.74rem;font-weight:900;border-radius:99px;padding:.18rem .6rem;background:#e4e8ef;color:var(--muted);white-space:nowrap}" +
    ".kv-marke.aufgabe{background:#fff6e3;color:#8a5a00}.kv-marke.probe{background:#fdeeeb;color:#c2340f}.kv-marke.termin{background:#e8f0fd;color:#1d4ed8}" +
    ".kv-marke.neu{background:#e8f0fd;color:#1d4ed8}.kv-marke.agenda{background:#fff6e3;color:#8a5a00}.kv-marke.done{background:#e9f8ee;color:#15803d}" +
    ".kv-marke.wichtig{background:#c2340f;color:#fff}.kv-marke.ohne{background:#f3e8ff;color:#6b21a8}.kv-marke.privat{background:#1f2937;color:#fff}" +
    ".kv-zeile.kv-privat{border-color:#c2340f;background:#fff8f6}" +
    ".kv-datum{background:var(--dark);color:#fff;border-radius:7px;padding:.15rem .5rem;font-size:.78rem;font-weight:900;white-space:nowrap}" +
    ".kv-filter{display:flex;gap:.4rem;flex-wrap:wrap;margin:.2rem 0 .8rem}" +
    ".kv-filter button{border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:.35rem .8rem;font:800 .84rem inherit;font-family:inherit;color:var(--ink);cursor:pointer}" +
    ".kv-filter button.on{background:var(--dark);color:#fff;border-color:var(--dark)}" +
    ".kv-tafel{position:fixed;inset:0;z-index:50;background:#f4f1ff;overflow:auto;padding:5vh 6vw}" +
    ".kv-tafel h2{font-size:clamp(1.6rem,4vw,2.6rem);font-weight:900;margin-bottom:1rem}" +
    ".kv-tafel ol{margin:0 0 0 1.4em;padding:0}.kv-tafel li{font-size:clamp(1.2rem,2.8vw,1.9rem);font-weight:700;line-height:1.35;margin-bottom:1rem;white-space:pre-line}" +
    ".kv-tafel li small{display:block;font-size:.6em;font-weight:800;color:#6b21a8}" +
    "@media(max-width:720px){.kv-form{grid-template-columns:1fr}}";

  function stil() {
    if (doc.getElementById("kv-stil")) return;
    var s = doc.createElement("style");
    s.id = "kv-stil"; s.textContent = CSS;
    doc.head.appendChild(s);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function post(ctx, route, body) {
    body = body || {};
    body.password = ctx.pw;
    return fetch(ctx.api + "/api/klasse/lehrer/" + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || (r.status === 404 ? "Der Server kennt diesen Bereich noch nicht (alter Stand)." : "HTTP " + r.status));
        return d;
      });
    });
  }
  function note(el, text, art) { el.innerHTML = text ? '<div class="note ' + (art || "") + '">' + esc(text) + "</div>" : ""; }
  function iso(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  // Nächster Schultag (Montag bis Freitag)
  function naechsterSchultag() {
    var d = new Date();
    do { d.setDate(d.getDate() + 1); } while (d.getDay() === 0 || d.getDay() === 6);
    return iso(d);
  }
  function datumText(tag) {
    var d = new Date(tag + "T12:00:00");
    return TAGE[d.getDay()] + ", " + tag.slice(8, 10) + "." + tag.slice(5, 7) + ".";
  }
  // Anonyme Nachrichten tragen nur das Tagesdatum (JJJJ-MM-TT), alle anderen Datum und Uhrzeit
  function zeitText(isoZeit) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(String(isoZeit))) return isoZeit.slice(8, 10) + "." + isoZeit.slice(5, 7) + ".";
    var d = new Date(isoZeit);
    if (isNaN(d)) return "";
    return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "., " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + " Uhr";
  }

  /* ============================================================
     Hausaufgaben
     ============================================================ */
  function heft(teil, ctx) {
    stil();
    var bearbeitet = null, LISTE = [], HEUTE = iso(new Date());
    teil.innerHTML =
      '<p class="sub">Hausaufgaben, Proben und Termine für Klasse ' + esc(ctx.klasse) + ". Die Kinder sehen sie nach der Anmeldung mit ihrem Code im Hausaufgabenheft auf der Startseite. Einträge verschwinden dort am Tag nach dem Termin und werden 60 Tage später gelöscht.</p>" +
      '<form class="kv-form" id="kv-heft-form">' +
      '<div><label for="kv-fach">Fach</label><input id="kv-fach" list="kv-faecher" autocomplete="off" maxlength="30" placeholder="Fach wählen oder tippen"><datalist id="kv-faecher">' +
      FAECHER.map(function (f) { return '<option value="' + esc(f) + '">'; }).join("") + "</datalist></div>" +
      '<div><label for="kv-art">Art</label><select id="kv-art">' + Object.keys(ARTEN).map(function (a) { return '<option value="' + a + '">' + esc(ARTEN[a]) + "</option>"; }).join("") + "</select></div>" +
      '<div><label for="kv-faellig">Fällig am / Termin</label><input id="kv-faellig" type="date"></div>' +
      '<div class="kv-voll"><label for="kv-aufgabe">Aufgabe</label><textarea id="kv-aufgabe" maxlength="400" placeholder="z. B. Arbeitsblatt fertig bearbeiten, Vokabeln Unit 1 lernen"></textarea></div>' +
      '<div class="kv-voll"><label for="kv-link">Link (freiwillig)</label><input id="kv-link" type="url" maxlength="300" placeholder="https://…"></div>' +
      '<div class="kv-voll btn-row" style="margin-top:0"><button class="btn" type="submit" id="kv-heft-ok">Eintragen</button>' +
      '<button class="btn btn-ghost" type="button" id="kv-heft-abbruch" hidden>Abbrechen</button></div>' +
      "</form>" +
      '<div id="kv-heft-msg"></div><div id="kv-heft-kalender-msg" role="status"></div><div id="kv-heft-liste"><div class="skel">Einträge werden geladen …</div></div>';
    var $ = function (id) { return doc.getElementById(id); };
    var msg = $("kv-heft-msg");
    $("kv-faellig").value = naechsterSchultag();

    function formLeeren() {
      bearbeitet = null;
      $("kv-aufgabe").value = ""; $("kv-link").value = "";
      $("kv-heft-ok").textContent = "Eintragen"; $("kv-heft-abbruch").hidden = true;
    }
    $("kv-heft-abbruch").addEventListener("click", function () { formLeeren(); note(msg, ""); });

    $("kv-heft-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var body = { klasse: ctx.klasse, fach: $("kv-fach").value.trim(), typ: $("kv-art").value, faellig: $("kv-faellig").value,
        text: $("kv-aufgabe").value.trim(), link: $("kv-link").value.trim() };
      if (bearbeitet) body.id = bearbeitet;
      var knopf = $("kv-heft-ok");
      knopf.disabled = true;
      post(ctx, "heft/speichern", body).then(function () {
        note(msg, bearbeitet ? "Die Änderung ist gespeichert." : "Eingetragen. Die Kinder der " + ctx.klasse + " sehen den Eintrag sofort.", "ok");
        formLeeren();
        return laden();
      }).catch(function (x) { note(msg, x.message, "bad"); }).then(function () { knopf.disabled = false; });
    });

    function zeile(e) {
      var alt = e.faellig < HEUTE;
      return '<div class="kv-zeile' + (alt ? " kv-alt" : "") + '"><div class="kv-links"><div class="kv-kopf"><span class="kv-datum">' + esc(datumText(e.faellig)) + "</span>" +
        '<span class="kv-marke ' + esc(e.typ) + '">' + esc(e.quelle === "kalender" ? "Probentermin" : ARTEN[e.typ] || e.typ) + "</span><span>" + esc(e.fach) + "</span></div>" +
        '<div class="kv-text">' + esc(e.text) + "</div>" +
        (e.link ? '<div class="kv-meta"><a href="' + esc(e.link) + '" target="_blank" rel="noopener">' + esc(e.link) + "</a></div>" : "") + "</div>" +
        (e.quelle === "kalender" ? '<div class="kv-knoepfe"><a class="btn btn-ghost btn-sm" href="kalender-verwalten.html">Im Probenkalender öffnen</a></div>' :
          '<div class="kv-knoepfe"><button class="btn btn-ghost btn-sm" type="button" data-bearbeiten="' + esc(e.id) + '">Bearbeiten</button>' +
          '<button class="btn btn-bad btn-sm" type="button" data-loeschen="' + esc(e.id) + '">Löschen</button></div>') + '</div>';
    }

    function zeichnen() {
      var box = $("kv-heft-liste");
      if (!box) return;
      var kommend = LISTE.filter(function (e) { return e.faellig >= HEUTE; }).sort(function (a, b) { return a.faellig.localeCompare(b.faellig); });
      var alt = LISTE.filter(function (e) { return e.faellig < HEUTE; });
      box.innerHTML =
        '<div class="kv-titel">Eingetragen <small>' + kommend.length + (kommend.length === 1 ? " Eintrag" : " Einträge") + " ab heute</small></div>" +
        (kommend.length ? kommend.map(zeile).join("") : '<div class="skel">Für diese Klasse ist gerade nichts eingetragen.</div>') +
        (alt.length ? '<div class="kv-titel">Vergangen <small>letzte 30 Tage – für die Kinder nicht mehr sichtbar</small></div>' + alt.map(zeile).join("") : "");
      Array.prototype.forEach.call(box.querySelectorAll("[data-loeschen]"), function (b) {
        b.addEventListener("click", function () {
          if (!global.confirm("Diesen Eintrag wirklich löschen?")) return;
          b.disabled = true;
          post(ctx, "heft/loeschen", { id: b.getAttribute("data-loeschen") }).then(laden).catch(function (x) { note(msg, x.message, "bad"); b.disabled = false; });
        });
      });
      Array.prototype.forEach.call(box.querySelectorAll("[data-bearbeiten]"), function (b) {
        b.addEventListener("click", function () {
          var e = LISTE.filter(function (x) { return x.id === b.getAttribute("data-bearbeiten"); })[0];
          if (!e) return;
          bearbeitet = e.id;
          $("kv-fach").value = e.fach; $("kv-art").value = e.typ; $("kv-faellig").value = e.faellig;
          $("kv-aufgabe").value = e.text; $("kv-link").value = e.link || "";
          $("kv-heft-ok").textContent = "Änderung speichern"; $("kv-heft-abbruch").hidden = false;
          $("kv-aufgabe").focus();
          if ($("kv-heft-form").scrollIntoView) $("kv-heft-form").scrollIntoView({ block: "nearest" });
        });
      });
    }

    function laden() {
      return post(ctx, "heft/liste", { klasse: ctx.klasse }).then(function (d) {
        LISTE = d.eintraege || []; HEUTE = d.heute || HEUTE;
        note($("kv-heft-kalender-msg"), d.kalenderFehler, "warn");
        zeichnen();
      }).catch(function (x) {
        var box = $("kv-heft-liste");
        if (box) box.innerHTML = "";
        note(msg, "Die Einträge konnten nicht geladen werden: " + x.message, "bad");
      });
    }
    laden();
  }

  /* ============================================================
     Klassenrat
     ============================================================ */
  function rat(teil, ctx) {
    stil();
    var LISTE = [], FILTER = "alle";
    teil.innerHTML =
      '<p class="sub">Briefkasten der Klasse ' + esc(ctx.klasse) + ". Die Kinder schreiben anonym. Eine KI lässt nur sachliche Nachrichten ohne Namen durch; abgelehnte Nachrichten werden nicht gespeichert. " +
      "Ausnahme: Ernste Anliegen (z. B. Gewalt, Mobbing, große Angst) kommen immer an, auch mit Namen – dann mit 🔒 nur für dich und nie auf der Tagesordnung. " +
      "Ein Code (und die Uhrzeit) steht nur dabei, wenn das Kind das selbst angekreuzt hat. Diese Liste sieht nur die Lehrkraft. " +
      "Zum neuen Schuljahr wird der Briefkasten automatisch geleert.</p>" +
      '<details style="margin-bottom:.4rem"><summary style="cursor:pointer;font-weight:800">＋ Eigenes Thema hinzufügen</summary>' +
      '<form class="kv-form" id="kv-rat-form" style="margin-top:.6rem">' +
      '<div><label for="kv-rat-thema">Kategorie</label><select id="kv-rat-thema">' + THEMEN.map(function (t) { return "<option>" + esc(t) + "</option>"; }).join("") + "</select></div>" +
      '<div><label for="kv-rat-status">Status</label><select id="kv-rat-status">' + ["agenda", "neu", "done"].map(function (s) { return '<option value="' + s + '">' + esc(STATUS[s]) + "</option>"; }).join("") + "</select></div><div></div>" +
      '<div class="kv-voll"><label for="kv-rat-text">Thema</label><textarea id="kv-rat-text" maxlength="600" placeholder="z. B. Regeln für Gruppenarbeiten gemeinsam besprechen"></textarea></div>' +
      '<div class="kv-voll btn-row" style="margin-top:0"><button class="btn" type="submit">Thema hinzufügen</button></div></form></details>' +
      '<div id="kv-rat-msg"></div><div id="kv-rat-ernst"></div>' +
      '<div class="kv-titel">Eingänge und Themen <small id="kv-rat-zahl"></small></div>' +
      '<div class="toolbar" style="margin-bottom:.3rem"><div class="kv-filter" id="kv-rat-filter"></div><div class="spacer"></div>' +
      '<button class="btn btn-ghost btn-sm" type="button" id="kv-rat-neu">Neu laden</button>' +
      '<button class="btn btn-sm" type="button" id="kv-rat-tafel">Tagesordnung zeigen</button></div>' +
      '<div id="kv-rat-liste"><div class="skel">Der Briefkasten wird geöffnet …</div></div>';
    var $ = function (id) { return doc.getElementById(id); };
    var msg = $("kv-rat-msg");

    $("kv-rat-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var knopf = e.target.querySelector("button[type=submit]");
      knopf.disabled = true;
      post(ctx, "rat/thema", { klasse: ctx.klasse, kategorie: $("kv-rat-thema").value, status: $("kv-rat-status").value, text: $("kv-rat-text").value.trim() }).then(function () {
        $("kv-rat-text").value = ""; note(msg, "Das Thema ist eingetragen.", "ok");
        return laden();
      }).catch(function (x) { note(msg, x.message, "bad"); }).then(function () { knopf.disabled = false; });
    });
    $("kv-rat-neu").addEventListener("click", function () { laden(); });
    $("kv-rat-tafel").addEventListener("click", tafel);

    function quelle(e) {
      if (e.quelle === "lehrkraft") return "Lehrkraft";
      if (!e.code) return "Kind (anonym)";
      var name = ctx.nameVon ? ctx.nameVon(e.code) : "";
      return "Kind · Code " + e.code + (name ? " (" + name + ")" : "");
    }
    // privat: ernstes Anliegen mit Namen – nur für die Lehrkraft, nie für die Tagesordnung (der Server lehnt das ab)
    function statusText(e, s) { return e.privat && s === "done" ? "Erledigt" : STATUS[s] || s; }
    function karte(e) {
      return '<div class="kv-zeile' + (e.privat ? " kv-privat" : "") + '"><div class="kv-links"><div class="kv-kopf"><span>' + esc(e.kategorie) + '</span><span class="kv-marke ' + esc(e.status) + '">' + esc(statusText(e, e.status)) + "</span>" +
        (e.wichtig ? '<span class="kv-marke wichtig" title="Die KI hält das für ein ernstes Anliegen">⚠ ernstes Anliegen</span>' : "") +
        (e.privat ? '<span class="kv-marke privat" title="Die Nachricht nennt Namen. Sie ist nur für dich sichtbar und kommt nicht auf die Tagesordnung.">🔒 nur für dich</span>' : "") +
        (e.pruefung === "regeln" ? '<span class="kv-marke ohne" title="Die KI war nicht erreichbar; geprüft wurde nur gegen eine Wortliste">ohne KI geprüft</span>' : "") + "</div>" +
        '<div class="kv-text">' + esc(e.text) + "</div>" +
        '<div class="kv-meta">' + esc(quelle(e)) + " · " + esc(zeitText(e.am)) + "</div></div>" +
        '<div class="kv-knoepfe">' + ["agenda", "done", "neu"].filter(function (s) { return s !== e.status && !(e.privat && s === "agenda"); }).map(function (s) {
          return '<button class="btn btn-sm ' + (s === "done" ? "btn-ok" : "btn-ghost") + '" type="button" data-status="' + s + '" data-id="' + esc(e.id) + '">' + esc(statusText(e, s)) + "</button>";
        }).join("") + '<button class="btn btn-bad btn-sm" type="button" data-loeschen="' + esc(e.id) + '">Löschen</button></div></div>';
    }
    function zeichnen() {
      var box = $("kv-rat-liste");
      if (!box) return;
      var zahl = { alle: LISTE.length, neu: 0, agenda: 0, done: 0 };
      LISTE.forEach(function (e) { zahl[e.status] = (zahl[e.status] || 0) + 1; });
      $("kv-rat-filter").innerHTML = [["alle", "Alle"], ["neu", "Neu"], ["agenda", "Für Klassenrat"], ["done", "Besprochen"]].map(function (f) {
        return '<button type="button" data-filter="' + f[0] + '" class="' + (FILTER === f[0] ? "on" : "") + '">' + f[1] + " · " + (zahl[f[0]] || 0) + "</button>";
      }).join("");
      Array.prototype.forEach.call($("kv-rat-filter").querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () { FILTER = b.getAttribute("data-filter"); zeichnen(); });
      });
      $("kv-rat-zahl").textContent = zahl.neu ? zahl.neu + (zahl.neu === 1 ? " neue Nachricht" : " neue Nachrichten") : "";
      var ernst = LISTE.filter(function (e) { return e.wichtig && e.status === "neu"; }).length;
      $("kv-rat-ernst").innerHTML = ernst ? '<div class="note bad">⚠ ' + (ernst === 1 ? "Ein ernstes Anliegen wartet" : ernst + " ernste Anliegen warten") +
        " auf dich. Bitte bald lesen und mit dem Kind sprechen – bei anonymen Nachrichten die Klasse behutsam ansprechen oder die Beratungslehrkraft einbeziehen.</div>" : "";
      var sicht = LISTE.filter(function (e) { return FILTER === "alle" || e.status === FILTER; });
      box.innerHTML = sicht.length ? sicht.map(karte).join("") : '<div class="skel">' + (LISTE.length ? "In dieser Ansicht gibt es nichts." : "Für diese Klasse gibt es noch keine Nachrichten oder Themen.") + "</div>";
      Array.prototype.forEach.call(box.querySelectorAll("[data-status]"), function (b) {
        b.addEventListener("click", function () {
          b.disabled = true;
          post(ctx, "rat/status", { id: b.getAttribute("data-id"), status: b.getAttribute("data-status") }).then(laden).catch(function (x) { note(msg, x.message, "bad"); b.disabled = false; });
        });
      });
      Array.prototype.forEach.call(box.querySelectorAll("[data-loeschen]"), function (b) {
        b.addEventListener("click", function () {
          if (!global.confirm("Diesen Eintrag wirklich löschen?")) return;
          b.disabled = true;
          post(ctx, "rat/loeschen", { id: b.getAttribute("data-loeschen") }).then(laden).catch(function (x) { note(msg, x.message, "bad"); b.disabled = false; });
        });
      });
    }
    // Tagesordnung zum Zeigen am Beamer: nur die Themen „Für Klassenrat“, ohne Absender
    function tafel() {
      var themen = LISTE.filter(function (e) { return e.status === "agenda" && !e.privat; }).reverse();
      var el = doc.createElement("div");
      el.className = "kv-tafel";
      el.innerHTML = '<div class="toolbar"><h2 style="margin:0">Klassenrat ' + esc(ctx.klasse) + ' – Tagesordnung</h2><div class="spacer"></div><button class="btn" type="button">Schließen</button></div>' +
        (themen.length ? "<ol>" + themen.map(function (e) { return "<li><small>" + esc(e.kategorie) + "</small>" + esc(e.text) + "</li>"; }).join("") + "</ol>"
          : '<p style="font-size:1.3rem;font-weight:700">Es ist noch kein Thema als „Für Klassenrat“ markiert.</p>');
      el.querySelector("button").addEventListener("click", function () { el.remove(); });
      doc.body.appendChild(el);
    }
    function laden() {
      return post(ctx, "rat/liste", { klasse: ctx.klasse }).then(function (d) {
        LISTE = d.eintraege || [];
        zeichnen();
      }).catch(function (x) {
        var box = $("kv-rat-liste");
        if (box) box.innerHTML = "";
        note(msg, "Der Briefkasten konnte nicht geöffnet werden: " + x.message, "bad");
      });
    }
    laden();
  }

  global.KlasseVerwaltung = { heft: heft, rat: rat };
})(window);
