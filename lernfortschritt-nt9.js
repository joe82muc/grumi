/* ============================================================
   Lernfortschritt Klasse 9M/9R für die Lehrkraft: NT 9 „Organische Rohstoffe“,
   Englisch 9 und Deutsch 9 (Reiter in proben-verwalten.html, gleiches
   Lehrerpasswort). Ein Code je Kind gilt für alle Kurse. Innerhalb eines
   Kurses wählt man einen Bereich (z. B. Rechtschreibung, Unit 3); Übungsseiten
   melden sich beim ersten Benutzen selbst beim Server an.

   - Codes anlegen: Namen eintragen oder die Klassenliste (CSV-Export aus dem
     Schulmanager) laden, der Server vergibt je Kind einen 3-stelligen Code.
     Aus der Klassenliste liest der Browser nur die Vornamen, alle anderen
     Angaben (Adressen, Kontakte, Geburtstage …) werden verworfen.
     Codeliste zum Ausschneiden drucken.
   - Namen kennt der Server nicht: Die Zuordnung Code -> Name liegt nur im
     Browser der Lehrkraft (getrennte Liste laut Datenschutzhinweisen) und
     lässt sich als Datei speichern und an einem anderen Gerät laden.
   - Übersicht: je Kind und Modul der Anteil gelöster Aufgaben.
     Klick auf ein Kind zeigt jede Aufgabe einzeln.
   - Klassenauswertung: welche Aufgaben bei vielen noch offen sind.
   - CSV-Export für Excel.
   Daten: /api/nt9/fortschritt/lehrer/* auf englisch-9.onrender.com,
   dauerhaft gespeichert in Upstash Redis (Frankfurt).
   ============================================================ */
(function (global) {
  "use strict";
  var doc = global.document;
  var API = "", PW = "", box = null;
  var DATEN = null, KLASSE = "9M", KURS = "nt9", BEREICH = "", SICHT = [], OFFEN = {}, AUSWERTUNG_MODUL = "m06", ALLE_AUFGABEN = false;
  var KURZ = 12; // so viele Aufgaben zeigt die Klassenauswertung zuerst
  try { KLASSE = global.localStorage.getItem("lf-nt9-klasse") || "9M"; KURS = global.localStorage.getItem("lf-kurs") || "nt9"; } catch (_e) {}
  // Getrennte Namensliste der Lehrkraft: { code: name }, nur in diesem Browser
  var NAMEN_KEY = "lf-nt9-namen", NAMEN = {};
  try { NAMEN = JSON.parse(global.localStorage.getItem(NAMEN_KEY) || "{}") || {}; } catch (_e) { NAMEN = {}; }
  function namenSichern() { try { global.localStorage.setItem(NAMEN_KEY, JSON.stringify(NAMEN)); } catch (_e) {} }
  function nameVon(code) { return NAMEN[code] || ""; }

  var CSS = "" +
    ".lf-tabs{display:flex;gap:.4rem;flex-wrap:wrap}" +
    ".lf-tabs button{padding:.45rem 1rem;border:1.5px solid var(--line);border-radius:999px;background:#fff;font:inherit;font-weight:800;font-size:.88rem;cursor:pointer;color:var(--dark)}" +
    ".lf-tabs button.on{background:var(--dark);color:#fff;border-color:var(--dark)}" +
    ".lf-h3{font-size:.8rem;font-weight:900;letter-spacing:.07em;text-transform:uppercase;border-bottom:2px solid var(--line);padding-bottom:.35rem;margin:1.4rem 0 .7rem}" +
    ".lf-scroll{overflow-x:auto;border:1.5px solid var(--line);border-radius:12px}" +
    ".lf-tab{width:100%;border-collapse:collapse;font-size:.9rem;min-width:760px}" +
    ".lf-tab th{background:#f4f6fa;text-align:left;font-size:.74rem;font-weight:900;letter-spacing:.03em;color:var(--muted);padding:.55rem .6rem;white-space:nowrap}" +
    ".lf-tab th small{display:block;font-weight:700;letter-spacing:0;text-transform:none;max-width:120px;white-space:normal;line-height:1.2}" +
    ".lf-tab td{border-top:1px solid var(--line);padding:.5rem .6rem;vertical-align:middle}" +
    ".lf-tab tr.kind{cursor:pointer}" +
    ".lf-tab tr.kind:hover td{background:#f8fafd}" +
    ".lf-tab tr.kind.auf td{background:#eef4ff}" +
    ".lf-name{font-weight:800}" +
    ".lf-code{font-weight:900;letter-spacing:.08em;font-variant-numeric:tabular-nums}" +
    ".lf-zelle{min-width:92px}" +
    ".lf-bar{height:8px;border-radius:99px;background:#e9edf3;overflow:hidden;margin-bottom:3px}" +
    ".lf-bar i{display:block;height:100%;border-radius:99px}" +
    ".lf-pct{font-size:.8rem;font-weight:800;font-variant-numeric:tabular-nums;white-space:nowrap}" +
    ".lf-pct .lf-profi{margin-left:.25rem}" +
    ".lf-leer{color:#9aa6b8;font-weight:700}" +
    ".lf-g0 i{background:#d9534f}.lf-g1 i{background:#e8a33d}.lf-g2 i{background:#3f9d5b}" +
    ".lf-zeit{font-size:.8rem;color:var(--muted);font-weight:600;white-space:nowrap}" +
    ".lf-detail td{background:#fbfcfe;padding:.8rem 1rem}" +
    ".lf-mod{margin-bottom:.9rem}" +
    ".lf-mod h4{font-size:.92rem;font-weight:800;margin-bottom:.3rem}" +
    ".lf-st{font-size:.76rem;font-weight:900;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin:.45rem 0 .2rem}" +
    ".lf-aufg{display:flex;flex-wrap:wrap;gap:.3rem}" +
    ".lf-a{font-size:.8rem;font-weight:600;border-radius:8px;padding:.2rem .55rem;border:1px solid var(--line);background:#fff;max-width:100%}" +
    ".lf-a.ok{background:var(--ok-bg);border-color:var(--ok-line);color:#0f5b2c}" +
    ".lf-a.no{color:#7b8799}" +
    ".lf-werkzeug{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center;margin-top:.9rem}" +
    ".lf-werkzeug select{flex:1 1 220px;min-width:0;max-width:100%;padding:.45rem .6rem;border:1.5px solid var(--line);border-radius:10px;font:inherit;font-weight:700}" +
    ".lf-mehr{margin-top:.6rem}" +
    ".lf-rang{display:grid;gap:.35rem;margin-top:.7rem}" +
    ".lf-rang-z{display:grid;grid-template-columns:minmax(0,1fr) 160px 70px;gap:.7rem;align-items:center;font-size:.86rem}" +
    ".lf-rang-z .lf-bar{margin:0;height:10px}" +
    ".lf-rang-z b{font-variant-numeric:tabular-nums;text-align:right}" +
    ".lf-rang-z span{min-width:0;overflow-wrap:anywhere}" +
    ".lf-rang-z .lf-stn{display:inline-block;min-width:1.5rem;color:var(--muted);font-weight:800}" +
    "@media (max-width:640px){.lf-rang-z{grid-template-columns:1fr 90px 54px}}" +
    ".lf-codes{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:.5rem;margin-top:.7rem}" +
    ".lf-ck{display:flex;align-items:center;gap:.5rem;border:1.5px solid var(--line);border-radius:10px;padding:.45rem .6rem}" +
    ".lf-ck .lf-code{font-size:1.1rem}" +
    ".lf-ck .lf-name{flex:1;min-width:0;overflow-wrap:anywhere}" +
    ".lf-ck button{border:0;background:none;cursor:pointer;font-size:1rem;padding:.15rem .3rem;border-radius:6px}" +
    ".lf-ck button:hover{background:#f0f3f8}" +
    ".lf-namen{width:100%;min-height:120px;padding:.6rem .7rem;border:1.5px solid var(--line);border-radius:10px;font:inherit;font-size:.95rem;resize:vertical}" +
    "#lf-druck{display:none}" +
    "@media print{body.lf-drucken>*:not(#lf-druck){display:none!important}body.lf-drucken{background:#fff;padding:0}" +
    "body.lf-drucken #lf-druck{display:grid;grid-template-columns:1fr 1fr;gap:0}" +
    ".lf-zettel{border:1px dashed #888;padding:12px 14px;break-inside:avoid;font-family:'Source Sans 3',sans-serif}" +
    ".lf-zettel small{display:block;font-size:10pt;color:#444}.lf-zettel b{display:block;font-size:13pt;margin:2px 0}" +
    ".lf-zettel .lf-z-code{font-size:26pt;font-weight:900;letter-spacing:.2em}}";

  function stil() {
    if (doc.getElementById("lf-stil")) return;
    var s = doc.createElement("style");
    s.id = "lf-stil";
    s.textContent = CSS;
    doc.head.appendChild(s);
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];
    });
  }

  function post(route, body) {
    body = body || {};
    body.password = PW;
    return fetch(API + "/api/nt9/fortschritt/lehrer/" + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || "HTTP " + r.status);
        return d;
      });
    });
  }

  function hinweis(text, art) {
    var el = doc.getElementById("lf-msg");
    if (!el) return;
    el.innerHTML = text ? '<div class="note ' + (art || "") + '">' + esc(text) + "</div>" : "";
  }

  /* ---------- Rechnen ---------- */
  function modulAufgaben(m) {
    var k = DATEN.katalog[m];
    return k ? Object.keys(k) : null;
  }
  // { geloest, gesamt, pct, profi } eines Kindes in einem Modul, oder null
  function stand(kind, m) {
    var p = kind.module[m];
    if (!p || !p.g) return null;
    var ids = Object.keys(p.g);
    if (!ids.length) return null;
    var auf = modulAufgaben(m), geloest, gesamt;
    if (auf) { geloest = auf.filter(function (a) { return p.g[a]; }).length; gesamt = auf.length; }
    else { geloest = ids.length; gesamt = Math.max(p.t || 0, ids.length); }
    return { geloest: geloest, gesamt: gesamt, pct: gesamt ? Math.round(geloest / gesamt * 100) : 0, profi: Boolean(p.g.quiz), zeit: p.z || 0 };
  }
  function zuletzt(kind) {
    var z = 0;
    kursModule().forEach(function (m) { if (kind.module[m.id]) z = Math.max(z, kind.module[m.id].z || 0); });
    return z;
  }
  function zeitText(ms) {
    if (!ms) return "–";
    var d = new Date(ms), heute = new Date(), gestern = new Date(Date.now() - 864e5);
    var uhr = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    if (d.toDateString() === heute.toDateString()) return "heute " + uhr;
    if (d.toDateString() === gestern.toDateString()) return "gestern " + uhr;
    return String(d.getDate()).padStart(2, "0") + "." + String(d.getMonth() + 1).padStart(2, "0") + "." + String(d.getFullYear()).slice(2) + " " + uhr;
  }
  function stufe(pct) { return pct >= 80 ? 2 : pct >= 40 ? 1 : 0; }
  // Module des gewählten Kurses
  function kursModule() {
    return DATEN.module.filter(function (m) { return (m.kurs || "nt9") === KURS; });
  }
  function bereichListe() {
    var b = [];
    kursModule().forEach(function (m) { var x = m.bereich || "Module"; if (b.indexOf(x) < 0) b.push(x); });
    return b;
  }
  function gemerkterBereich() { try { return global.localStorage.getItem("lf-bereich-" + KURS) || ""; } catch (_e) { return ""; } }
  // Module des Bereichs, die in dieser Klasse vorkommen (feste Module immer)
  function sichtModule(liste) {
    return kursModule().filter(function (m) {
      if ((m.bereich || "Module") !== BEREICH) return false;
      if (!m.klassen || !m.klassen.length || m.klassen.indexOf(KLASSE) >= 0) return true;
      return liste.some(function (kind) { return kind.module[m.id]; });
    });
  }
  function kurzName(m) { return m.kurz || m.titel || "Modul " + m.nr; }
  // Station: Zahl = Station der NT-Seiten, sonst Name des Teils (Englisch: „Mehr üben“ …)
  function stationText(s) { return /^\d+$/.test(s) ? "Station " + s : s; }
  function stationKurz(s) { return !s ? "" : /^\d+$/.test(s) ? "S" + s : s; }
  function stationOrdnung(liste) {
    var reihe = [];
    liste.forEach(function (s) { if (reihe.indexOf(s) < 0) reihe.push(s); });
    return function (a, b) {
      var na = /^\d+$/.test(a), nb = /^\d+$/.test(b);
      if (na && nb) return +a - +b;
      if (na !== nb) return na ? -1 : 1;
      return reihe.indexOf(a) - reihe.indexOf(b);
    };
  }
  function kinder() {
    return DATEN.schueler.filter(function (s) { return s.klasse === KLASSE; })
      .map(function (s) { s.name = nameVon(s.code); return s; })
      .sort(function (a, b) { return (a.name || "~").localeCompare(b.name || "~", "de") || a.code.localeCompare(b.code); });
  }

  /* ---------- Anzeige ---------- */
  function rahmen() {
    box.innerHTML =
      '<div class="toolbar"><div><h2>Lernfortschritt · Klasse 9</h2>' +
      '<p class="sub" style="margin:0">Anteil der gelösten Aufgaben je Modul. Ein Klick auf ein Kind zeigt jede Aufgabe einzeln.</p></div>' +
      '<div class="spacer"></div><div class="lf-tabs" id="lf-klassen"></div>' +
      '<div class="lf-tabs" id="lf-kurse" style="width:100%"></div>' +
      '<button class="btn btn-ghost btn-sm" id="lf-reload" type="button">Neu laden</button>' +
      '<button class="btn btn-ghost btn-sm" id="lf-csv" type="button">CSV-Export</button></div>' +
      '<div id="lf-msg"></div><div id="lf-inhalt"><div class="skel">Lernstand wird geladen … Wenn der Server schläft, dauert das bis zu einer Minute.</div></div>';
    doc.getElementById("lf-reload").addEventListener("click", laden);
    doc.getElementById("lf-csv").addEventListener("click", csv);
  }

  function klassenKnoepfe() {
    var el = doc.getElementById("lf-klassen");
    el.innerHTML = "";
    (DATEN.klassen || ["9M", "9R"]).forEach(function (k) {
      var b = doc.createElement("button");
      b.type = "button"; b.textContent = "Klasse " + k; b.className = k === KLASSE ? "on" : "";
      b.addEventListener("click", function () {
        KLASSE = k; OFFEN = {};
        try { global.localStorage.setItem("lf-nt9-klasse", k); } catch (_e) {}
        zeichnen();
      });
      el.appendChild(b);
    });
  }

  function kursKnoepfe() {
    var el = doc.getElementById("lf-kurse");
    el.innerHTML = "";
    (DATEN.kurse || []).forEach(function (k) {
      var b = doc.createElement("button");
      b.type = "button"; b.textContent = k.titel; b.className = k.id === KURS ? "on" : "";
      b.addEventListener("click", function () {
        KURS = k.id; OFFEN = {}; ALLE_AUFGABEN = false; BEREICH = "";
        try { global.localStorage.setItem("lf-kurs", k.id); } catch (_e) {}
        laden();
      });
      el.appendChild(b);
    });
  }

  function zeichnen() {
    if (DATEN.kurse && !DATEN.kurse.some(function (k) { return k.id === KURS; })) KURS = DATEN.kurse[0].id;
    klassenKnoepfe();
    kursKnoepfe();
    var liste = kinder(), h = "";
    var bereiche = bereichListe();
    if (bereiche.indexOf(BEREICH) < 0) BEREICH = gemerkterBereich();
    if (bereiche.indexOf(BEREICH) < 0) BEREICH = bereiche[0] || "";
    var M = SICHT = sichtModule(liste);
    // Klassenauswertung: nach einem Wechsel das Modul, das die meisten Kinder begonnen haben
    if (M.length && !M.some(function (m) { return m.id === AUSWERTUNG_MODUL; })) {
      var best = M[0], bestN = -1;
      M.forEach(function (m) {
        var n = liste.filter(function (kind) { return stand(kind, m.id); }).length;
        if (n > bestN) { best = m; bestN = n; }
      });
      AUSWERTUNG_MODUL = best.id;
    }
    var fehlend = liste.filter(function (k) { return !k.name; }).length;
    if (DATEN.speicher !== "upstash") {
      hinweis("Die Datenbank ist noch nicht verbunden: Codes und Lernstand gehen beim nächsten Neustart des Servers verloren. Bitte UPSTASH_REDIS_REST_URL und UPSTASH_REDIS_REST_TOKEN bei Render eintragen.", "warn");
    } else hinweis("");

    // Bereich wählen
    if (bereiche.length > 1) {
      h += '<div class="lf-werkzeug" style="margin:0 0 .9rem"><label for="lf-bereich" style="margin:0">Bereich</label><select id="lf-bereich">' +
        bereiche.map(function (b) { return '<option value="' + esc(b) + '"' + (b === BEREICH ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("") + "</select></div>";
    }

    // Übersicht
    if (!liste.length) {
      h += '<div class="note">Für Klasse ' + esc(KLASSE) + ' gibt es noch keine Codes. Lege sie unten unter „Codes verwalten“ an.</div>';
    } else if (!M.length) {
      h += '<div class="note">' + (bereiche.length ? "In diesem Bereich hat Klasse " + esc(KLASSE) + " noch keine Übung mit Code bearbeitet."
        : "Für diesen Kurs hat noch kein Kind eine Übung mit Code geöffnet. Die Übungen erscheinen hier von selbst, sobald ein Kind sie öffnet.") + "</div>";
    } else {
      h += '<div class="lf-scroll"><table class="lf-tab"><thead><tr><th>Name</th><th>Code</th>';
      M.forEach(function (m) { h += "<th>" + esc(kurzName(m)) + "<small>" + esc(m.titel) + "</small></th>"; });
      h += "<th>Zuletzt aktiv</th></tr></thead><tbody>";
      liste.forEach(function (kind) {
        var auf = OFFEN[kind.code];
        h += '<tr class="kind' + (auf ? " auf" : "") + '" data-code="' + esc(kind.code) + '" title="Klicken für alle Aufgaben">' +
          '<td class="lf-name">' + (kind.name ? esc(kind.name) : '<span class="lf-leer">ohne Namen</span>') + "</td>" +
          '<td class="lf-code">' + esc(kind.code) + "</td>";
        M.forEach(function (m) { h += '<td class="lf-zelle">' + zelle(stand(kind, m.id)) + "</td>"; });
        h += '<td class="lf-zeit">' + zeitText(zuletzt(kind)) + "</td></tr>";
        if (auf) h += '<tr class="lf-detail"><td colspan="' + (M.length + 3) + '">' + detail(kind) + "</td></tr>";
      });
      h += "</tbody></table></div>" +
        '<p class="sub" style="margin:.5rem 0 0">Farben: rot unter 40 %, gelb ab 40 %, grün ab 80 %.' + (KURS === "nt9" ? " 🏆 = Profi-Check (Abschlussquiz) bestanden." : " Gezählt werden Aufgaben, die das Kind richtig gelöst hat (nicht „Lösung zeigen“). Vokabeln: Wörter, die beim Ankreuzen oder Schreiben richtig waren.") + "</p>";
    }

    // Klassenauswertung
    if (M.length) h += '<h3 class="lf-h3">Klassenauswertung: Was sollte ich wiederholen?</h3>' +
      '<div class="lf-werkzeug"><label for="lf-modul" style="margin:0">Modul</label><select id="lf-modul">' +
      M.map(function (m) { return '<option value="' + m.id + '"' + (m.id === AUSWERTUNG_MODUL ? " selected" : "") + ">" + esc(kurzName(m)) + ": " + esc(m.titel) + "</option>"; }).join("") +
      "</select></div>" + auswertung(liste, AUSWERTUNG_MODUL);

    // Codes verwalten
    h += '<h3 class="lf-h3">Codes verwalten · Klasse ' + esc(KLASSE) + "</h3>" +
      '<p class="sub"><b>Klassenliste laden</b> (CSV-Export aus dem Schulmanager) oder die Vornamen von Hand eintragen, einen pro Zeile. Dann „Codes erzeugen“. Jedes Kind bekommt einen eigenen 3-stelligen Code. <b>Der Code gilt in allen Fächern (NT, Englisch, Deutsch).</b> Die Namen bleiben nur in diesem Browser, der Server bekommt sie nicht.</p>' +
      (fehlend ? '<div class="note warn">Für ' + fehlend + (fehlend === 1 ? " Code fehlt" : " Codes fehlen") + ' in diesem Browser der Name. Lade die Namensliste, die du auf deinem anderen Gerät gespeichert hast.</div>' : "") +
      '<div class="btn-row" style="margin:0 0 .6rem"><button class="btn btn-ghost btn-sm" id="lf-liste" type="button">📄 Klassenliste laden (Schulmanager-CSV)</button>' +
      '<input type="file" id="lf-liste-datei" accept=".csv,.txt,text/csv,text/plain" hidden></div>' +
      '<textarea class="lf-namen" id="lf-namen" aria-label="Vornamen, einer pro Zeile" placeholder="Hier stehen die Vornamen, einer pro Zeile – von Hand eingetragen oder aus der Klassenliste geladen."></textarea>' +
      '<div class="btn-row"><button class="btn btn-sm" id="lf-anlegen" type="button">Codes erzeugen</button>' +
      '<button class="btn btn-ghost btn-sm" id="lf-drucken" type="button"' + (liste.length ? "" : " disabled") + ">Codeliste drucken</button>" +
      '<button class="btn btn-ghost btn-sm" id="lf-namen-export" type="button"' + (Object.keys(NAMEN).length ? "" : " disabled") + ">Namensliste speichern</button>" +
      '<button class="btn btn-ghost btn-sm" id="lf-namen-import" type="button">Gespeicherte Namensliste laden</button>' +
      '<input type="file" id="lf-namen-datei" accept=".csv,.txt,text/csv,text/plain" hidden></div>' +
      '<div class="lf-codes">' + liste.map(function (k) {
        return '<div class="lf-ck"><span class="lf-code">' + esc(k.code) + '</span><span class="lf-name">' + (k.name ? esc(k.name) : '<span class="lf-leer">ohne Namen</span>') + "</span>" +
          '<button type="button" data-umbenennen="' + esc(k.code) + '" title="Namen ändern" aria-label="Namen ändern">✏️</button>' +
          '<button type="button" data-loeschen="' + esc(k.code) + '" title="Code und Lernstand löschen" aria-label="Löschen">🗑️</button></div>';
      }).join("") + "</div>" +
      '<div class="note">Auf dem Server (Datenbank von Upstash in Frankfurt) liegen nur Code, Klasse und welche Aufgaben gelöst sind – keine Namen und keine Antworttexte. ' +
      'Die Namensliste steht nur in diesem Browser. Für ein anderes Gerät: „Namensliste speichern“ und dort „Gespeicherte Namensliste laden“. Die Klassenliste aus dem Schulmanager enthält viele persönliche Daten: Nach dem Laden die Datei aus dem Download-Ordner löschen. Am Schuljahresende die Codes löschen.</div>';

    doc.getElementById("lf-inhalt").innerHTML = h;

    Array.prototype.forEach.call(box.querySelectorAll("tr.kind"), function (tr) {
      tr.addEventListener("click", function () {
        var c = tr.getAttribute("data-code");
        OFFEN[c] = !OFFEN[c];
        zeichnen();
      });
    });
    var modulWahl = doc.getElementById("lf-modul");
    if (modulWahl) modulWahl.addEventListener("change", function (e) { AUSWERTUNG_MODUL = e.target.value; ALLE_AUFGABEN = false; zeichnen(); });
    var bereichWahl = doc.getElementById("lf-bereich");
    if (bereichWahl) bereichWahl.addEventListener("change", function (e) {
      BEREICH = e.target.value; OFFEN = {}; ALLE_AUFGABEN = false;
      try { global.localStorage.setItem("lf-bereich-" + KURS, BEREICH); } catch (_e) {}
      zeichnen();
    });
    var mehr = doc.getElementById("lf-mehr");
    if (mehr) mehr.addEventListener("click", function () { ALLE_AUFGABEN = !ALLE_AUFGABEN; zeichnen(); });
    doc.getElementById("lf-anlegen").addEventListener("click", anlegen);
    doc.getElementById("lf-drucken").addEventListener("click", drucken);
    doc.getElementById("lf-namen-export").addEventListener("click", namenExport);
    doc.getElementById("lf-namen-import").addEventListener("click", function () { doc.getElementById("lf-namen-datei").click(); });
    doc.getElementById("lf-namen-datei").addEventListener("change", namenImport);
    doc.getElementById("lf-liste").addEventListener("click", function () { doc.getElementById("lf-liste-datei").click(); });
    doc.getElementById("lf-liste-datei").addEventListener("change", klassenlisteImport);
    Array.prototype.forEach.call(box.querySelectorAll("[data-umbenennen]"), function (b) { b.addEventListener("click", function () { umbenennen(b.getAttribute("data-umbenennen")); }); });
    Array.prototype.forEach.call(box.querySelectorAll("[data-loeschen]"), function (b) { b.addEventListener("click", function () { loeschen(b.getAttribute("data-loeschen")); }); });
  }

  function zelle(st) {
    if (!st) return '<span class="lf-pct lf-leer">–</span>';
    return '<div class="lf-bar lf-g' + stufe(st.pct) + '"><i style="width:' + st.pct + '%"></i></div>' +
      '<span class="lf-pct" title="' + st.geloest + " von " + st.gesamt + ' Aufgaben">' + st.pct + " % <span class=\"lf-leer\">(" + st.geloest + "/" + st.gesamt + ")</span>" +
      (st.profi ? '<span class="lf-profi" title="Profi-Check bestanden">🏆</span>' : "") + "</span>";
  }

  // Alle Aufgaben eines Kindes, nach Modul und Station
  function detail(kind) {
    var h = "";
    SICHT.forEach(function (m) {
      var p = kind.module[m.id], k = DATEN.katalog[m.id], st = stand(kind, m.id);
      h += '<div class="lf-mod"><h4>' + esc(kurzName(m)) + ": " + esc(m.titel) + (st ? " · " + st.geloest + " von " + st.gesamt + " gelöst" : " · noch nicht begonnen") + "</h4>";
      if (st && k) {
        var stationen = {}, reihe = [];
        Object.keys(k).forEach(function (id) { var s = k[id][1] || "–"; reihe.push(s); (stationen[s] = stationen[s] || []).push(id); });
        Object.keys(stationen).sort(stationOrdnung(reihe)).forEach(function (s) {
          h += '<div class="lf-st">' + esc(stationText(s)) + '</div><div class="lf-aufg">' + stationen[s].map(function (id) {
            var ok = p && p.g && p.g[id];
            return '<span class="lf-a ' + (ok ? "ok" : "no") + '"' + (ok ? ' title="gelöst ' + esc(zeitText(p.g[id])) + '"' : "") + ">" + (ok ? "✓ " : "○ ") + esc(k[id][0]) + "</span>";
          }).join("") + "</div>";
        });
      } else if (st) {
        h += '<p class="sub">' + st.geloest + " Aufgaben gelöst. Die Aufgabenliste erscheint, sobald jemand das Modul nach dem Update geöffnet hat.</p>";
      }
      h += "</div>";
    });
    return h;
  }

  // Je Aufgabe: wie viele der Kinder, die das Modul begonnen haben, sie gelöst haben
  function auswertung(liste, m) {
    var k = DATEN.katalog[m];
    var begonnen = liste.filter(function (kind) { return stand(kind, m); });
    if (!begonnen.length) return '<p class="sub" style="margin-top:.7rem">In Klasse ' + esc(KLASSE) + " hat noch niemand dieses Modul begonnen.</p>";
    if (!k) return '<p class="sub" style="margin-top:.7rem">Die Aufgabenliste erscheint, sobald jemand das Modul nach dem Update geöffnet hat.</p>';
    var ordnung = stationOrdnung(Object.keys(k).map(function (id) { return k[id][1] || ""; }));
    var zeilen = Object.keys(k).map(function (id) {
      var n = begonnen.filter(function (kind) { return kind.module[m].g[id]; }).length;
      return { id: id, label: k[id][0], st: k[id][1], n: n, pct: Math.round(n / begonnen.length * 100) };
    }).sort(function (a, b) { return a.pct - b.pct || ordnung(a.st || "", b.st || ""); });
    var sichtbar = ALLE_AUFGABEN ? zeilen : zeilen.slice(0, KURZ);
    return '<p class="sub" style="margin-top:.7rem">' + begonnen.length + " von " + liste.length + " Kindern haben dieses Modul begonnen. Oben stehen die Aufgaben, die am wenigsten gelöst wurden – sie waren schwer oder wurden noch nicht bearbeitet.</p>" +
      '<div class="lf-rang">' + sichtbar.map(function (z) {
        return '<div class="lf-rang-z"><span>' + (/^\d+$/.test(z.st || "") ? '<span class="lf-stn">' + esc(stationKurz(z.st)) + "</span> " : "") + esc(z.label) + "</span>" +
          '<div class="lf-bar lf-g' + stufe(z.pct) + '"><i style="width:' + z.pct + '%"></i></div><b>' + z.n + "/" + begonnen.length + "</b></div>";
      }).join("") + "</div>" +
      (zeilen.length > KURZ ? '<button class="btn btn-ghost btn-sm lf-mehr" id="lf-mehr" type="button">' +
        (ALLE_AUFGABEN ? "Nur die " + KURZ + " schwächsten Aufgaben zeigen" : "Alle " + zeilen.length + " Aufgaben zeigen") + "</button>" : "");
  }

  /* ---------- Aktionen ---------- */
  function laden() {
    if (!DATEN) doc.getElementById("lf-inhalt").innerHTML = '<div class="skel">Lernstand wird geladen … Wenn der Server schläft, dauert das bis zu einer Minute.</div>';
    return post("liste", { kurs: KURS }).then(function (d) {
      DATEN = d;
      zeichnen();
    }).catch(function (e) {
      hinweis("Der Lernstand konnte nicht geladen werden: " + e.message, "bad");
      if (!DATEN) doc.getElementById("lf-inhalt").innerHTML = "";
    });
  }

  function anlegen() {
    var feld = doc.getElementById("lf-namen");
    var namen = feld.value.split(/\r?\n/).map(function (n) { return n.replace(/\s+/g, " ").trim().slice(0, 40); }).filter(Boolean);
    if (!namen.length) { hinweis("Bitte zuerst Namen eintragen (einen pro Zeile) oder die Klassenliste laden.", "bad"); return; }
    if (namen.length > 60) { hinweis("Bitte höchstens 60 Namen auf einmal eintragen.", "bad"); return; }
    // Wer in dieser Klasse schon einen Code hat, bekommt keinen zweiten
    var schon = {};
    kinder().forEach(function (k) { if (k.name) schon[k.name.toLowerCase()] = k.code; });
    var doppelt = namen.filter(function (n) { return schon[n.toLowerCase()]; });
    if (doppelt.length) {
      var rest = namen.filter(function (n) { return !schon[n.toLowerCase()]; });
      if (!rest.length) { hinweis("Alle eingetragenen Namen haben in Klasse " + KLASSE + " schon einen Code.", "ok"); return; }
      if (!global.confirm(doppelt.length + (doppelt.length === 1 ? " Name hat" : " Namen haben") + " in Klasse " + KLASSE + " schon einen Code: " + doppelt.join(", ") +
        ".\n\nOK = nur für die übrigen " + rest.length + " Namen Codes erzeugen\nAbbrechen = nichts erzeugen")) return;
      namen = rest;
    }
    var btn = doc.getElementById("lf-anlegen");
    btn.disabled = true; btn.textContent = "Codes werden erzeugt …";
    post("anlegen", { klasse: KLASSE, anzahl: namen.length }).then(function (d) {
      d.neu.forEach(function (n, i) { NAMEN[n.code] = namen[i].slice(0, 40); });
      namenSichern();
      return laden().then(function () {
        hinweis(d.neu.length + (d.neu.length === 1 ? " Code" : " Codes") + " für Klasse " + KLASSE + " erzeugt: " + d.neu.map(function (n) { return NAMEN[n.code] + " " + n.code; }).join(", ") +
          ". Tipp: Speichere die Namensliste, falls du an einem anderen Gerät weiterarbeiten willst.", "ok");
      });
    }).catch(function (e) {
      hinweis("Das hat nicht geklappt: " + e.message, "bad");
      btn.disabled = false; btn.textContent = "Codes erzeugen";
    });
  }

  function umbenennen(code) {
    var name = global.prompt("Name für Code " + code + " (nur in diesem Browser gespeichert):", nameVon(code));
    if (name === null) return;
    name = name.replace(/\s+/g, " ").trim().slice(0, 40);
    if (name) NAMEN[code] = name; else delete NAMEN[code];
    namenSichern();
    zeichnen();
  }

  function loeschen(code) {
    var name = nameVon(code);
    if (!global.confirm("Code " + code + (name ? " (" + name + ")" : "") + " und den ganzen Lernstand dazu löschen?\n\nDas lässt sich nicht rückgängig machen.")) return;
    post("loeschen", { code: code }).then(function () {
      delete OFFEN[code];
      delete NAMEN[code];
      namenSichern();
      return laden().then(function () { hinweis("Code " + code + " ist gelöscht.", "ok"); });
    }).catch(function (e) { hinweis("Das hat nicht geklappt: " + e.message, "bad"); });
  }

  function drucken() {
    var liste = kinder(), d = doc.getElementById("lf-druck");
    if (!d) { d = doc.createElement("div"); d.id = "lf-druck"; doc.body.appendChild(d); }
    d.innerHTML = liste.map(function (k) {
      return '<div class="lf-zettel"><small>Klasse ' + esc(KLASSE) + " · GRUMI-Lernmodule</small><b>" + esc(k.name || "") + "</b>" +
        '<div class="lf-z-code">' + esc(k.code) + "</div><small>Dein Code für die Lernmodule in NT, Englisch und Deutsch. " +
        "Gib ihn nicht weiter.</small></div>";
    }).join("");
    doc.body.classList.add("lf-drucken");
    var weg = function () { doc.body.classList.remove("lf-drucken"); global.removeEventListener("afterprint", weg); };
    global.addEventListener("afterprint", weg);
    global.print();
    setTimeout(weg, 1000);
  }

  function csv() {
    if (!DATEN) return;
    var M = SICHT, zeilen = [["Klasse", "Code", "Name"].concat(M.map(function (m) { return kurzName(m) + " (%)"; }), M.map(function (m) { return kurzName(m) + " gelöst"; }), KURS === "nt9" ? ["Profi-Checks bestanden"] : [], ["Zuletzt aktiv"])];
    DATEN.schueler.slice().sort(function (a, b) { return a.klasse.localeCompare(b.klasse) || nameVon(a.code).localeCompare(nameVon(b.code), "de"); }).forEach(function (k) {
      var st = M.map(function (m) { return stand(k, m.id); });
      zeilen.push([k.klasse, k.code, nameVon(k.code)]
        .concat(st.map(function (s) { return s ? s.pct : ""; }), st.map(function (s) { return s ? s.geloest + "/" + s.gesamt : ""; }))
        .concat(KURS === "nt9" ? [st.filter(function (s) { return s && s.profi; }).length] : [], [zeitText(zuletzt(k))]));
    });
    datei(zeilen, "lernfortschritt-" + KURS + "-" + String(BEREICH).toLowerCase().replace(/[^a-z0-9äöü]+/g, "-") + "-" + new Date().toISOString().slice(0, 10) + ".csv");
  }

  function datei(zeilen, dateiname) {
    var text = "\ufeff" + zeilen.map(function (z) {
      return z.map(function (v) { v = String(v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(";");
    }).join("\r\n");
    var a = doc.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
    a.download = dateiname;
    doc.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  // Getrennte Namensliste als Datei: Code;Klasse;Name
  function namenExport() {
    var klasseVon = {};
    (DATEN ? DATEN.schueler : []).forEach(function (s) { klasseVon[s.code] = s.klasse; });
    var zeilen = [["Code", "Klasse", "Name"]];
    Object.keys(NAMEN).sort(function (a, b) { return (klasseVon[a] || "").localeCompare(klasseVon[b] || "") || NAMEN[a].localeCompare(NAMEN[b], "de"); })
      .forEach(function (c) { zeilen.push([c, klasseVon[c] || "", NAMEN[c]]); });
    datei(zeilen, "namensliste-nt9-" + new Date().toISOString().slice(0, 10) + ".csv");
    hinweis("Namensliste gespeichert. Bewahre die Datei sicher auf: Sie verbindet Codes und Namen.", "ok");
  }

  // Text einer Datei lesen: zuerst UTF-8, bei kaputten Umlauten noch einmal als Windows-1252 (ältere Excel-Exporte)
  function alsText(f, weiter) {
    var r = new FileReader();
    r.onload = function () {
      var t = String(r.result);
      if (t.indexOf("\ufffd") < 0) { weiter(t); return; }
      var r2 = new FileReader();
      r2.onload = function () { weiter(String(r2.result)); };
      r2.readAsText(f, "windows-1252");
    };
    r.readAsText(f, "utf-8");
  }

  // CSV mit Anführungszeichen und Zeilenumbrüchen in Feldern (so exportiert der Schulmanager Adressen)
  function csvZeilen(text, trenner) {
    var zeilen = [], zeile = [], feld = "", inQ = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i + 1] === '"') { feld += '"'; i++; } else inQ = false; }
        else feld += c;
      } else if (c === '"') inQ = true;
      else if (c === trenner) { zeile.push(feld); feld = ""; }
      else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        zeile.push(feld); zeilen.push(zeile); zeile = []; feld = "";
      } else feld += c;
    }
    if (feld || zeile.length) { zeile.push(feld); zeilen.push(zeile); }
    return zeilen.filter(function (z) { return z.some(function (x) { return x.trim(); }); });
  }

  // Klassenliste -> { namen: [Vornamen], klasse: "9M"|"9R"|"" }. Gelesen werden nur Vorname, Nachname
  // (für den Anfangsbuchstaben bei gleichen Vornamen) und Ausbildungsrichtung (für die Klasse).
  function klassenliste(text, dateiname) {
    text = text.replace(/^\ufeff/, "");
    var erste = text.split(/\r?\n/)[0] || "";
    var trenner = [";", "\t", ","].sort(function (a, b) { return erste.split(b).length - erste.split(a).length; })[0];
    var zeilen = csvZeilen(text, trenner);
    if (!zeilen.length) return { namen: [], klasse: "" };
    var kopf = zeilen[0].map(function (x) { return x.trim().toLowerCase(); });
    var iVor = kopf.indexOf("vorname");
    if (iVor < 0) iVor = kopf.indexOf("rufname");
    var iNach = kopf.indexOf("nachname"), iRicht = kopf.indexOf("ausbildungsrichtung");
    var leute = [];
    if (iVor >= 0) {
      zeilen.slice(1).forEach(function (z) {
        var v = String(z[iVor] || "").replace(/\s+/g, " ").trim();
        if (v) leute.push({ vor: v, nach: iNach >= 0 ? String(z[iNach] || "").trim() : "", richtung: iRicht >= 0 ? String(z[iRicht] || "") : "" });
      });
    } else {
      // einfache Liste: ein Name pro Zeile (erste Spalte)
      zeilen.forEach(function (z) { var v = String(z[0] || "").replace(/\s+/g, " ").trim(); if (v && !/^\d+$/.test(v) && !/^(name|vorname)$/i.test(v)) leute.push({ vor: v, nach: "", richtung: "" }); });
    }
    var anzahl = {};
    leute.forEach(function (p) { var k = p.vor.toLowerCase(); anzahl[k] = (anzahl[k] || 0) + 1; });
    var namen = leute.map(function (p) { return (anzahl[p.vor.toLowerCase()] > 1 && p.nach ? p.vor + " " + p.nach.charAt(0) + "." : p.vor).slice(0, 40); });
    var richtungen = leute.map(function (p) { return p.richtung; }).join(" "), klasse = "";
    if (/m-?zug/i.test(richtungen)) klasse = "9M";
    else if (/regel/i.test(richtungen)) klasse = "9R";
    else { var m = /9\s*[a-z]?\s*([mr])(?![a-zäöü])/i.exec(dateiname || ""); if (m) klasse = "9" + m[1].toUpperCase(); }
    return { namen: namen, klasse: klasse };
  }

  function klassenlisteImport(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    alsText(f, function (text) {
      e.target.value = "";
      if (/^\ufeff?"?code"?[;,\t]/i.test(text)) { namenAusText(text); return; } // gespeicherte Namensliste erwischt
      var erg = klassenliste(text, f.name);
      if (!erg.namen.length) { hinweis("In der Datei wurden keine Vornamen gefunden. Erwartet wird eine Spalte „Vorname“ (Schulmanager-Export) oder ein Name pro Zeile.", "bad"); return; }
      var gewechselt = erg.klasse && erg.klasse !== KLASSE;
      if (gewechselt) {
        KLASSE = erg.klasse; OFFEN = {};
        try { global.localStorage.setItem("lf-nt9-klasse", KLASSE); } catch (_e) {}
      }
      zeichnen();
      var feld = doc.getElementById("lf-namen");
      feld.value = erg.namen.join("\n");
      hinweis(erg.namen.length + " Vornamen übernommen" + (erg.klasse ? " (Klasse " + erg.klasse + (gewechselt ? ", dorthin umgeschaltet" : "") + ")" : "") +
        ". Prüfe die Liste und klicke dann auf „Codes erzeugen“. Alle anderen Angaben der Datei (Adressen, Kontakte, Geburtstage …) wurden nicht übernommen. Lösche die Datei danach aus dem Download-Ordner.", "ok");
      if (feld.scrollIntoView) feld.scrollIntoView({ block: "center" });
    });
  }

  function namenImport(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    alsText(f, function (text) {
      e.target.value = "";
      if (/(^|[;,\t"])vorname([;,\t"]|$)/i.test(text.split(/\r?\n/)[0] || "")) { klassenlisteImport({ target: { files: [f], value: "" } }); return; } // Klassenliste erwischt
      namenAusText(text);
    });
  }

  function namenAusText(text) {
    var n = 0;
    text.replace(/^\ufeff/, "").split(/\r?\n/).forEach(function (zeile) {
      var t = zeile.split(/[;,\t]/).map(function (x) { return x.trim().replace(/^"|"$/g, ""); });
      if (!/^\d{3}$/.test(t[0])) return;
      var name = (t.length >= 3 ? t[2] : t[1] || "").slice(0, 40);
      if (name) { NAMEN[t[0]] = name; n++; }
    });
    namenSichern();
    if (DATEN) zeichnen();
    hinweis(n ? n + " Namen geladen." : "In der Datei wurden keine Zeilen der Form „Code;Klasse;Name“ gefunden.", n ? "ok" : "bad");
  }

  global.LernfortschrittNT9 = {
    // container: Element, in das die Ansicht kommt; pw: Lehrerpasswort; apiBase: Server
    zeigen: function (container, pw, apiBase) {
      stil();
      if (box !== container || PW !== pw) {
        box = container; PW = pw; API = apiBase || ""; DATEN = null;
        rahmen();
      }
      return laden();
    }
  };
})(window);
