/* ============================================================
   Verwaltung für die Lehrkraft (in proben-verwalten.html, Lehrerpasswort):
   erst die Klasse wählen, dann Proben, ein Fach oder Codes & Namen.

   - Klassen: echte Klassennamen wie 7aM, 7b, 8c, 9d. Mit „M“ = M-Zug,
     ohne = R-Klasse. Daraus folgen die Fächer mit Lernfortschritt
     (NT, Deutsch, Englisch, Informatik – je nachdem, was es für die
     Jahrgangsstufe gibt) und die passenden Proben.
   - Neue Klasse: Klassenliste (CSV-Export aus dem Schulmanager) laden oder
     Vornamen eintippen, der Server vergibt je Kind einen 3-stelligen Code.
     Aus der Klassenliste liest der Browser nur Vorname, Nachname (für den
     Anfangsbuchstaben bei gleichen Vornamen), Klasse und Ausbildungsrichtung –
     Adressen, Kontakte, Geburtstage usw. werden verworfen.
   - Die Zuordnung Code -> Name wird nach der Lehrkraft-Anmeldung automatisch
     zwischen Geräten abgeglichen und getrennt vom Lernstand verschlüsselt gespeichert.
   - Fach: je Kind und Übung der Anteil richtig gelöster Aufgaben, Klick auf
     ein Kind zeigt jede Aufgabe, Klassenauswertung, CSV-Export.
   - Noten: alle Proben, die Kinder der Klasse mit ihrem Code abgegeben haben
     (/api/proben/noten, Datenbank grumiproben), mit Schnitt und CSV-Export.
   Daten: /api/nt9/fortschritt/lehrer/* auf englisch-9.onrender.com
   (Upstash Redis, Frankfurt). Proben: window.Proben aus proben-verwalten.html.
   ============================================================ */
(function (global) {
  "use strict";
  var doc = global.document;
  var API = "", PW = "", box = null, PROBEN = null;
  var KLASSEN = [], KURSE = [], CODES = [], SPEICHER = "", KLASSE = "", ANSICHT = "";
  var ZUG_LEER = ""; // Zug ohne Klasse mit Codes (z. B. "9R"), Ansicht "zug"
  var namenHoerer = false;
  var DATEN = null, NOTEN = null, BEREICH = "", SICHT = [], OFFEN = {}, AUSWERTUNG_MODUL = "", ALLE_AUFGABEN = false, FEHLER_MODUL = "";
  var KURZ = 12; // so viele Aufgaben zeigt die Klassenauswertung zuerst
  var GRUMI_URL = "https://joe82muc.github.io/grumi";
  var GRUMI_QR = "images/grumi-qr-code.svg";
  var FACH_ICON = { nt: "🔬", d: "📖", e: "💬", i: "💻" };
  // Startseite des Fachs für die Kinder (je Zug, wenn es getrennte Seiten gibt)
  var FACHSEITE = {
    nt7: { M: "7M/NT/index.html", R: "7R/NT/index.html" }, nt8: { M: "8M/NT/index.html", R: "8R/NT/index.html" },
    nt9: { M: "9M/NT_9/übersicht_themen.html", R: "9R/NT_9/übersicht_themen.html" },
    d7: "7M/Deutsch/index.html", d8: "8/Deutsch/index.html", d9: "9/Deutsch/index.html",
    e7: "7/Englisch_7/index.html", e8: "8R/Englisch/index.html",
    e9: { M: "9M/Englisch_9/index.html", R: "9R/Englisch/index.html" },
    i7: { M: "7M/Informatik/index.html", R: "7R/Informatik/index.html" }, i8: { M: "8M/Informatik/index.html", R: "8R/Informatik/index.html" }, i9: "9/Informatik_9/index.html"
  };
  try {
    KLASSE = global.localStorage.getItem("lf-klasse") || "";
    ANSICHT = global.localStorage.getItem("lf-ansicht") || "noten";
  } catch (_e) {}
  // Getrennte Namensliste { code: name }; js/namen-sync.js gleicht sie nach der Anmeldung automatisch ab.
  var NAMEN_KEY = "lf-nt9-namen", NAMEN = {};
  function namenLesen() {
    if (global.NamenSync && global.NamenSync.namen) { NAMEN = global.NamenSync.namen(); return; }
    try { NAMEN = JSON.parse(global.localStorage.getItem(NAMEN_KEY) || "{}") || {}; } catch (_e) { NAMEN = {}; }
  }
  namenLesen();
  function namenSichern() {
    if (global.NamenSync) { global.NamenSync.speichern(NAMEN); return; }
    try { global.localStorage.setItem(NAMEN_KEY, JSON.stringify(NAMEN)); } catch (_e) {}
  }
  function nameVon(code) { return NAMEN[code] || ""; }
  function merken(k, v) { try { global.localStorage.setItem(k, v); } catch (_e) {} }

  var CSS = "" +
    ".lf-zur{color:#17633a;font-weight:800}.lf-zur-alle{margin-top:.3rem;font-size:.78rem;padding:.25rem .6rem}" +
    ".lf-ns{margin:0 0 .8rem;padding:.7rem .85rem;border:1.5px solid var(--line);border-radius:12px;background:#f8fafc}" +
    ".vw-gruppe{display:flex;flex-wrap:wrap;align-items:center;gap:.45rem;margin:.35rem 0}" +
    ".vw-stufe{font-size:.74rem;font-weight:900;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);min-width:5.2rem}" +
    ".vw-chip{display:inline-flex;align-items:center;gap:.35rem;padding:.45rem .85rem;border:1.5px solid var(--line);border-radius:999px;background:#fff;font:inherit;font-weight:800;font-size:.95rem;cursor:pointer;color:var(--dark)}" +
    ".vw-chip small{font-weight:700;color:var(--muted);font-size:.78rem}" +
    ".vw-chip:hover{background:#f3f5f9}" +
    ".vw-chip.on{background:var(--dark);color:#fff;border-color:var(--dark)}.vw-chip.on small{color:#cbd5e1}" +
    ".vw-chip.neu{border-style:dashed;color:var(--accent)}" +
    ".vw-chip.leer{border-style:dashed;color:var(--muted)}.vw-chip.leer.on{color:#fff}" +
    ".vw-sonder{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.7rem;padding-top:.7rem;border-top:1px solid var(--line)}" +
    ".vw-kl-kopf{display:flex;flex-wrap:wrap;align-items:baseline;gap:.4rem .8rem;margin-bottom:.8rem}" +
    ".vw-kl-kopf h2{font-size:1.35rem;margin:0}" +
    ".vw-badge{font-size:.8rem;font-weight:800;color:var(--muted)}" +
    ".vw-tabs{display:flex;flex-wrap:wrap;gap:.4rem;border-bottom:2px solid var(--line);padding-bottom:.7rem;margin-bottom:1rem}" +
    ".vw-tabs button{padding:.5rem 1rem;border:1.5px solid var(--line);border-radius:12px;background:#fff;font:inherit;font-weight:800;font-size:.92rem;cursor:pointer;color:var(--dark)}" +
    ".vw-tabs button:hover{background:#f3f5f9}" +
    ".vw-tabs button.on{background:var(--accent);border-color:var(--accent);color:#fff}" +
    ".vw-feld{display:grid;gap:.3rem;margin:.8rem 0}" +
    ".vw-feld input[type=text]{max-width:220px;padding:.6rem .8rem;border:1.5px solid var(--line);border-radius:10px;font:inherit;font-size:1.1rem;font-weight:800}" +
    ".vw-schritt{border:1.5px solid var(--line);border-radius:14px;padding:.9rem 1rem;margin-top:.8rem}" +
    ".vw-schritt h3{font-size:.95rem;margin-bottom:.35rem}" +
    ".vw-zug{font-size:.9rem;font-weight:700;color:var(--ok)}.vw-zug.bad{color:var(--bad)}" +
    ".vw-link{font-size:.85rem;font-weight:700}.vw-link a{color:var(--accent)}" +
    ".lf-h3{font-size:.8rem;font-weight:900;letter-spacing:.07em;text-transform:uppercase;border-bottom:2px solid var(--line);padding-bottom:.35rem;margin:1.4rem 0 .7rem}" +
    ".lf-scroll{overflow-x:auto;border:1.5px solid var(--line);border-radius:12px}" +
    ".lf-klick{cursor:pointer}.lf-klick:hover{background:#eef4ff;box-shadow:inset 0 0 0 2px #c9dafc}" +
    ".lf-dlg{border:0;border-radius:16px;padding:0;margin:auto;width:min(880px,94vw);max-height:90vh;box-shadow:0 20px 60px rgba(15,23,42,.3)}" +
    ".lf-mitl{display:inline-flex;gap:.35rem;align-items:center;font-size:.85rem;font-weight:700;color:var(--muted);margin-left:auto}" +
    ".lf-dlg::backdrop{background:rgba(15,23,42,.45)}" +
    ".lf-dlg-kopf{display:flex;gap:12px;justify-content:space-between;align-items:flex-start;padding:16px 18px 8px}" +
    ".lf-dlg-kopf h3{margin:0 0 4px}" +
    ".lf-dlg-stand{padding:0 18px 10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}" +
    ".lf-dlg-inhalt{padding:0 18px}.lf-dlg-inhalt .lf-tab{min-width:0}" +
    ".lf-dlg-fuss{display:flex;gap:8px;flex-wrap:wrap;align-items:center;padding:12px 18px;border-top:1px solid var(--line);position:sticky;bottom:0;background:#fff}" +
    ".lf-dlg-msg{padding:0 18px 14px}" +
    ".lf-aufg{font-weight:700}.lf-antw{margin-top:3px;color:#334155;white-space:pre-wrap}.lf-kom{margin-top:3px;font-size:.84rem;color:var(--muted)}" +
    ".lf-pkt{white-space:nowrap;width:1%}.lf-pkt input{width:4.2em;padding:.3rem .4rem;border:1.5px solid var(--line);border-radius:8px;font:inherit;font-weight:800}" +
    ".lf-pkt input.geaendert{border-color:#d08a00;background:#fff6dc}" +
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
    "@media (max-width:640px){.lf-rang-z{grid-template-columns:1fr 90px 54px}.vw-stufe{min-width:100%}}" +
    ".lf-codes{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:.5rem;margin-top:.7rem}" +
    ".lf-ck{display:flex;align-items:center;gap:.5rem;border:1.5px solid var(--line);border-radius:10px;padding:.45rem .6rem}" +
    ".lf-ck .lf-code{font-size:1.1rem}" +
    ".lf-ck .lf-name{flex:1;min-width:0;overflow-wrap:anywhere}" +
    ".lf-ck button{border:0;background:none;cursor:pointer;font-size:1rem;padding:.15rem .3rem;border-radius:6px}" +
    ".lf-ck button:hover{background:#f0f3f8}" +
    ".lf-note{display:inline-block;min-width:1.8rem;text-align:center;font-weight:900;font-size:1.02rem;border-radius:8px;padding:.08rem .35rem}" +
    ".lf-note.g{background:var(--ok-bg);color:#0f5b2c}.lf-note.m{background:#fff4d6;color:#7a5600}.lf-note.s{background:#fdecea;color:#9b1c1c}" +
    ".lf-np{display:block;font-size:.72rem;color:var(--muted);font-weight:700;white-space:nowrap;margin-top:2px}" +
    ".lf-schnitt{font-weight:900;font-variant-numeric:tabular-nums}" +
    ".lf-noten tfoot td{border-top:2px solid var(--line);background:#f8fafd;font-weight:800}" +
    ".lf-noten th a{color:var(--accent);text-decoration:none}.lf-noten th a:hover{text-decoration:underline}" +
    ".lf-ck .lf-lrs{font-size:.72rem;font-weight:900;border:1.5px solid var(--line);border-radius:999px;padding:.1rem .45rem;color:var(--muted);background:#fff}" +
    ".lf-ck .lf-lrs.an{background:#6d28d9;border-color:#6d28d9;color:#fff}" +
    ".lf-lrs-knopf.an{background:#6d28d9;border-color:#6d28d9;color:#fff}" +
    ".lf-lrs-b{display:inline-block;margin-left:.35rem;padding:0 .4rem;border-radius:99px;background:#ede9fe;color:#5b21b6;font-size:.7rem;font-weight:900;vertical-align:middle}" +
    ".lf-weg{color:#b45309;font-weight:800}" +
    ".lf-namen{width:100%;min-height:120px;padding:.6rem .7rem;border:1.5px solid var(--line);border-radius:10px;font:inherit;font-size:.95rem;resize:vertical}" +
    "#lf-druck{display:none}" +
    "@media print{body.lf-drucken>*:not(#lf-druck){display:none!important}body.lf-drucken{background:#fff;padding:0}" +
    "body.lf-drucken #lf-druck{display:grid;grid-template-columns:1fr 1fr;gap:0}" +
    ".lf-zettel{border:1px dashed #888;padding:12px 14px;break-inside:avoid;font-family:'Source Sans 3',sans-serif;display:grid;grid-template-columns:minmax(0,1fr) 30mm;gap:8px 10px;align-items:center;min-height:39mm}" +
    ".lf-zettel small{display:block;font-size:10pt;color:#444}.lf-zettel b{display:block;font-size:13pt;margin:2px 0}" +
    ".lf-zettel .lf-z-code{font-size:26pt;font-weight:900;letter-spacing:.2em}" +
    ".lf-zettel .lf-z-info{min-width:0}.lf-zettel .lf-z-qr{justify-self:end;text-align:center;width:30mm}" +
    ".lf-zettel .lf-z-qr img{display:block;width:26mm;height:26mm;object-fit:contain;image-rendering:pixelated;margin:0 auto 1mm}" +
    ".lf-zettel .lf-z-qr small{font-size:7pt;line-height:1.1;color:#111;overflow-wrap:anywhere}}";

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
  function $(id) { return doc.getElementById(id); }

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
    var el = $("vw-msg");
    if (!el) return;
    el.innerHTML = text ? '<div class="note ' + (art || "") + '">' + esc(text) + "</div>" : "";
  }

  /* ---------- Klassen ---------- */
  // „9aM“, „9 a m“ -> „9aM“; „7B“ -> „7b“; „9M“/„9R“ (nur Zug, erste Fassung) -> „9M“/„9R“; sonst ""
  function klasseNorm(v) {
    var s = String(v || "").replace(/\s+/g, ""), m = /^(5|6|7|8|9|10)([MR])$/i.exec(s);
    if (m) return m[1] + m[2].toUpperCase();
    // „9dR“ ist dieselbe Klasse wie „9d“: R-Klassen stehen ohne Endung, M-Klassen mit „M“
    m = /^(5|6|7|8|9|10)([a-z])([mr]?)$/i.exec(s);
    return m ? m[1] + m[2].toLowerCase() + (/m/i.test(m[3]) ? "M" : "") : "";
  }
  function stufeVon(k) { return parseInt(k, 10) || 0; }
  function zugBuchstabe(k) { return /M$/.test(k) ? "M" : "R"; }
  function zugText(k) { return zugBuchstabe(k) === "M" ? "M-Zug" : "R-Klasse"; }
  function nurZug(k) { return /^\d+[MR]$/.test(k); } // Codes aus der ersten Fassung (nur 9M/9R)
  function klassenKurse(k) {
    var st = stufeVon(k), z = zugBuchstabe(k);
    return KURSE.filter(function (x) { return x.stufe === st && x.zuege.indexOf(z) >= 0; });
  }
  function kursVon(id) { return KURSE.filter(function (k) { return k.id === id; })[0] || null; }
  function fachseite(kursId, klasse) {
    var f = FACHSEITE[kursId];
    if (!f) return "";
    return encodeURI(typeof f === "string" ? f : f[zugBuchstabe(klasse)] || "");
  }
  function codesDerKlasse(k) {
    return CODES.filter(function (s) { return s.klasse === k; })
      .map(function (s) { return { code: s.code, klasse: s.klasse, name: nameVon(s.code), lrs: Boolean(s.lrs) }; })
      .sort(function (a, b) { return (a.name || "~").localeCompare(b.name || "~", "de") || a.code.localeCompare(b.code); });
  }

  /* ---------- Rahmen und Klassenwahl ---------- */
  function rahmen() {
    box.innerHTML =
      '<div class="toolbar"><div><h2>Klasse wählen</h2>' +
      '<p class="sub" style="margin:0">Proben, Lernfortschritt und Codes gibt es je Klasse. Neue Klasse = Klassenliste aus dem Schulmanager hochladen.</p></div>' +
      '<div class="spacer"></div><a class="btn btn-ghost btn-sm" href="kalender-verwalten.html">Probenkalender 2026/2027</a><button class="btn btn-ghost btn-sm" id="vw-reload" type="button">Neu laden</button></div>' +
      '<div id="vw-klassen"><div class="skel">Klassen werden geladen … Wenn der Server schläft, dauert das bis zu einer Minute.</div></div>' +
      '<div id="vw-msg"></div>' +
      '<div id="vw-inhalt" style="margin-top:1rem"></div>';
    $("vw-reload").addEventListener("click", function () { klassenLaden().then(zeichnen); });
  }

  function klassenLaden() {
    return post("liste", { nurKlassen: true }).then(function (d) {
      KLASSEN = d.klassenInfo || [];
      KURSE = d.kurse || [];
      CODES = d.schueler || [];
      SPEICHER = d.speicher || "";
      if (SPEICHER && SPEICHER !== "upstash") hinweis("Die Datenbank ist noch nicht verbunden: Codes und Lernstand gehen beim nächsten Neustart des Servers verloren. Bitte UPSTASH_REDIS_REST_URL und UPSTASH_REDIS_REST_TOKEN bei Render eintragen.", "warn");
      var namen = KLASSEN.map(function (k) { return k.klasse; });
      if (ANSICHT !== "neu" && ANSICHT !== "alle" && namen.indexOf(KLASSE) < 0) KLASSE = namen[0] || "";
      if (!KLASSEN.length && ANSICHT !== "alle") ANSICHT = "neu";
    }).catch(function (e) {
      $("vw-klassen").innerHTML = "";
      hinweis("Die Klassen konnten nicht geladen werden: " + e.message, "bad");
      throw e;
    });
  }

  // Züge einer Stufe, für die es Inhalte gibt, aber noch keine Klasse mit Codes (z. B. ["R"] für Stufe 9)
  function fehlendeZuege(st) {
    var zuege = {};
    KURSE.forEach(function (x) { if (String(x.stufe) === String(st)) x.zuege.forEach(function (z) { zuege[z] = 1; }); });
    return Object.keys(zuege).sort().filter(function (z) {
      return !KLASSEN.some(function (k) { return String(stufeVon(k.klasse)) === String(st) && zugBuchstabe(k.klasse) === z; });
    });
  }

  function klassenLeiste() {
    var stufen = {}, h = "";
    KLASSEN.forEach(function (k) { (stufen[k.stufe] = stufen[k.stufe] || []).push(k); });
    Object.keys(stufen).sort(function (a, b) { return a - b; }).forEach(function (st) {
      // Züge dieser Stufe mit Inhalten, für die es noch keine Klasse mit Codes gibt (z. B. 9R): eigener Reiter für die Proben
      var fehlend = fehlendeZuege(st);
      h += '<div class="vw-gruppe"><span class="vw-stufe">Klasse ' + esc(st) + "</span>" + stufen[st].map(function (k) {
        var an = k.klasse === KLASSE && ANSICHT !== "neu" && ANSICHT !== "alle" && ANSICHT !== "zug";
        return '<button type="button" class="vw-chip' + (an ? " on" : "") + '" data-klasse="' + esc(k.klasse) + '">' + esc(k.klasse) +
          ' <small>' + k.anzahl + "</small></button>";
      }).join("") + fehlend.map(function (z) {
        var zk = st + z;
        return '<button type="button" class="vw-chip leer' + (ANSICHT === "zug" && ZUG_LEER === zk ? " on" : "") + '" data-zug="' + esc(zk) +
          '" title="Für ' + esc(zk) + ' gibt es noch keine Klasse mit Codes">' + esc(zk) + " <small>noch ohne Codes</small></button>";
      }).join("") + "</div>";
    });
    if (!KLASSEN.length) h += '<p class="sub" style="margin:.2rem 0">Noch keine Klasse angelegt.</p>';
    h += '<div class="vw-sonder"><button type="button" class="vw-chip neu' + (ANSICHT === "neu" ? " on" : "") + '" data-sonder="neu">＋ Neue Klasse (Klassenliste hochladen)</button>' +
      '<button type="button" class="vw-chip' + (ANSICHT === "alle" ? " on" : "") + '" data-sonder="alle">🔓 Alle Proben aller Klassen</button></div>';
    $("vw-klassen").innerHTML = h;
    Array.prototype.forEach.call($("vw-klassen").querySelectorAll("[data-klasse]"), function (b) {
      b.addEventListener("click", function () {
        KLASSE = b.getAttribute("data-klasse"); merken("lf-klasse", KLASSE);
        if (ANSICHT === "neu" || ANSICHT === "alle" || ANSICHT === "zug") ANSICHT = "noten";
        OFFEN = {}; ALLE_AUFGABEN = false; DATEN = null;
        zeichnen();
      });
    });
    Array.prototype.forEach.call($("vw-klassen").querySelectorAll("[data-zug]"), function (b) {
      b.addEventListener("click", function () {
        ZUG_LEER = b.getAttribute("data-zug"); ANSICHT = "zug"; // nicht merken: nach dem Neuladen wieder die Klasse
        OFFEN = {}; ALLE_AUFGABEN = false; DATEN = null;
        zeichnen();
      });
    });
    Array.prototype.forEach.call($("vw-klassen").querySelectorAll("[data-sonder]"), function (b) {
      b.addEventListener("click", function () { ansicht(b.getAttribute("data-sonder")); });
    });
  }

  function ansicht(a) {
    ANSICHT = a; merken("lf-ansicht", a);
    OFFEN = {}; ALLE_AUFGABEN = false; BEREICH = ""; DATEN = null;
    zeichnen();
  }

  function zeichnen() {
    klassenLeiste();
    var el = $("vw-inhalt");
    if (ANSICHT === "neu") { neueKlasseZeichnen(el); return; }
    if (ANSICHT === "alle") {
      el.innerHTML = '<div class="vw-kl-kopf"><h2>Alle Proben</h2><span class="vw-badge">alle Klassen und Fächer</span></div><div id="vw-proben"></div>';
      if (PROBEN) PROBEN.zeigen($("vw-proben"), null);
      return;
    }
    if (ANSICHT === "zug" && ZUG_LEER) {
      var zst = stufeVon(ZUG_LEER), zz = zugBuchstabe(ZUG_LEER), beispiel = zz === "M" ? zst + "bM" : zst + "b";
      el.innerHTML = '<div class="vw-kl-kopf"><h2>' + esc(ZUG_LEER) + '</h2><span class="vw-badge">Jahrgangsstufe ' + zst + " · " + (zz === "M" ? "M-Zug" : "R-Klasse") + " · noch keine Codes</span></div>" +
        '<div class="note warn" style="margin:0 0 .9rem">Für ' + esc(ZUG_LEER) + " gibt es noch keine Klasse mit Codes. Ohne Code können sich die Kinder weder bei den Modulen noch bei der Probe anmelden. " +
        "Lege die Klasse unter „＋ Neue Klasse (Klassenliste hochladen)“ an, z. B. als " + esc(beispiel) + (zz === "M" ? " (mit M am Ende = M-Zug)." : " (ohne M am Ende = R-Klasse).") +
        " Freischalten kannst du die Proben schon jetzt.</div><div id=\"vw-proben\"></div>";
      if (PROBEN) PROBEN.zeigen($("vw-proben"), { stufe: zst, zug: zz });
      return;
    }
    if (ANSICHT === "zug") ANSICHT = "noten";
    if (!KLASSE) { el.innerHTML = ""; return; }
    var kurse = klassenKurse(KLASSE);
    // Einen eigenen Reiter „Proben“ gibt es nicht mehr (06.10.2026): Proben werden beim Fach freigeschaltet – unter den
    // Modulen, die sie enthalten (nt7-verwaltung.js), sonst als Karten über dem Lernstand des Fachs (fachProben).
    // Alle Proben aller Klassen stehen weiter hinter dem Knopf oben.
    var gueltig = ["noten", "heft", "rat", "kalender", "codes"].concat(kurse.map(function (k) { return k.id; }));
    if (gueltig.indexOf(ANSICHT) < 0) ANSICHT = "noten";
    var info = KLASSEN.filter(function (k) { return k.klasse === KLASSE; })[0] || { anzahl: 0 };
    var h = '<div class="vw-kl-kopf"><h2>Klasse ' + esc(KLASSE) + '</h2><span class="vw-badge">Jahrgangsstufe ' + stufeVon(KLASSE) + " · " + zugText(KLASSE) +
      " · " + info.anzahl + (info.anzahl === 1 ? " Code" : " Codes") + "</span></div>";
    if (nurZug(KLASSE)) h += '<div class="note warn" style="margin:0 0 .9rem">Diese Codes stammen aus der ersten Fassung und kennen nur den Zug. Unter „Codes &amp; Namen“ kannst du die Klasse umbenennen, z. B. in ' + (zugBuchstabe(KLASSE) === "M" ? stufeVon(KLASSE) + "aM" : stufeVon(KLASSE) + "d") + ". Codes und Lernstand bleiben erhalten.</div>";
    h += '<nav class="vw-tabs" aria-label="Bereiche der Klasse">' +
      '<button type="button" data-ansicht="noten">📝 Noten</button>' +
      '<button type="button" data-ansicht="heft">📚 Hausaufgaben</button><button type="button" data-ansicht="kalender">Probenkalender</button><button type="button" data-ansicht="rat">📮 Klassenrat</button>' +
      kurse.map(function (k) { return '<button type="button" data-ansicht="' + esc(k.id) + '">' + (FACH_ICON[k.fach] || "📈") + " " + esc(k.fachName) + "</button>"; }).join("") +
      '<button type="button" data-ansicht="codes">👥 Codes &amp; Namen</button></nav><div id="vw-teil"></div>';
    el.innerHTML = h;
    Array.prototype.forEach.call(el.querySelectorAll("[data-ansicht]"), function (b) {
      b.classList.toggle("on", b.getAttribute("data-ansicht") === ANSICHT);
      b.addEventListener("click", function () { ansicht(b.getAttribute("data-ansicht")); });
    });
    var teil = $("vw-teil");
    if (ANSICHT === "noten") {
      notenLaden(teil);
    } else if (ANSICHT === "heft" || ANSICHT === "rat") {
      // Hausaufgabenheft und Klassenrat-Briefkasten der Klasse (klasse-verwaltung.js)
      if (global.KlasseVerwaltung) global.KlasseVerwaltung[ANSICHT](teil, { api: API, pw: PW, klasse: KLASSE, nameVon: nameVon });
      else teil.innerHTML = '<div class="note warn">Dieser Bereich konnte nicht geladen werden. Bitte die Seite neu laden.</div>';
    } else if (ANSICHT === "kalender") {
      if (global.GrumiKalender) global.GrumiKalender.mount(teil, { api: API, klasse: KLASSE, adminPassword: PW });
      else teil.innerHTML = '<div class="note warn">Der Kalender konnte nicht geladen werden. Bitte neu laden.</div>';
    } else if (ANSICHT === "codes") {
      codesZeichnen(teil);
    } else if (ANSICHT === "nt7" && global.NT7Verwaltung) {
      // NT 7: über dem Lernstand steht das Freischalten der Themenbereiche und Module (nt7-verwaltung.js)
      teil.innerHTML = '<div id="vw-nt7-frei"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-nt7-frei"), { api: API, pw: PW, klasse: KLASSE });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "nt8" && global.NT7Verwaltung && global.NT8) {
      // NT 8: Freischalten der Themenbereiche und Module wie bei NT 7 (Proben stehen unter ihren Modulen, R8/M8 und
      // Nachschreibprobe), darunter die Lernstandsdiagnose (8M/NT/diagnose.js), dann der Lernstand je Kind und Modul
      teil.innerHTML = '<div id="vw-nt8-frei"></div><div id="vw-nt8-diagnose"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-nt8-frei"), { api: API, pw: PW, klasse: KLASSE, liste: global.NT8, pfad: "/api/nt8", ordner: "8M/NT/",
        worte: { titel: "Themen und Module", das: "das Modul", neu: "Alle Module", von: "Modulen", plan: "Module in Vorbereitung" } });
      if (global.NT8Diagnose) global.NT8Diagnose.zeige($("vw-nt8-diagnose"), { api: API, pw: PW, klasse: KLASSE, name: nameVon });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "i7" && global.NT7Verwaltung && global.INF7) {
      // Informatik 7: über dem Lernstand steht das Freischalten der Module und Einheiten (gleiche Ansicht wie NT 7)
      teil.innerHTML = '<div id="vw-i7-frei"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-i7-frei"), { api: API, pw: PW, klasse: KLASSE, liste: global.INF7, pfad: "/api/inf7", ordner: "7M/Informatik/",
        worte: { titel: "Module und Einheiten", das: "die Einheit", neu: "Neue Einheiten", von: "Einheiten", plan: "Einheiten in Vorbereitung" } });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "i8" && global.NT7Verwaltung && global.INF8) {
      // Informatik 8 (8M/Informatik): Freischalten der Module und Einheiten wie bei Informatik 7, darunter die
      // Dateien, die die Kinder in den Einheiten hochgeladen haben (abgaben-verwaltung.js).
      teil.innerHTML = '<div id="vw-i8-frei"></div><div id="vw-i8-abgaben"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-i8-frei"), { api: API, pw: PW, klasse: KLASSE, liste: global.INF8, pfad: "/api/inf8", ordner: "8M/Informatik/",
        worte: { titel: "Module und Einheiten", das: "die Einheit", neu: "Neue Einheiten", von: "Einheiten", plan: "Einheiten in Vorbereitung" } });
      if (global.AbgabenVerwaltung) global.AbgabenVerwaltung.zeige($("vw-i8-abgaben"), { api: API, pw: PW, klasse: KLASSE, pfad: "/api/inf8", liste: global.INF8, name: nameVon });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "d7" && global.NT7Verwaltung && global.D7) {
      // Deutsch 7: über dem Lernstand steht das Freischalten der Themenbereiche und Module (gleiche Ansicht wie NT 7),
      // darunter der Weg zur Korrektur der Proben und die Schülertexte aus dem Schreibtrainer (texte-verwaltung.js)
      teil.innerHTML = '<div id="vw-d7-frei"></div><div id="vw-d7-texte"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-d7-frei"), { api: API, pw: PW, klasse: KLASSE, liste: global.D7, pfad: "/api/d7", ordner: "7M/Deutsch/",
        worte: { titel: "Themenbereiche und Module", das: "das Modul", neu: "Alle Module", von: "Modulen", plan: "Module in Vorbereitung" } });
      if (global.TexteVerwaltung) global.TexteVerwaltung.zeige($("vw-d7-texte"), { api: API, pw: PW, klasse: KLASSE, liste: global.D7, name: nameVon });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "d8" && global.NT7Verwaltung && global.D8) {
      // Deutsch 8: wie Deutsch 7 – Freischalten der Themenbereiche und Module, Weg zur Korrektur der Proben, Schülertexte
      // aus Schreibtrainer und Schreibwerkstatt (Entwurf, Planung, abgegebene Fassungen)
      teil.innerHTML = '<div id="vw-d8-frei"></div><div id="vw-d8-texte"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-d8-frei"), { api: API, pw: PW, klasse: KLASSE, liste: global.D8, pfad: "/api/d8", ordner: "8/Deutsch/",
        worte: { titel: "Themenbereiche und Module", das: "das Modul", neu: "Alle Module", von: "Modulen", plan: "Module in Vorbereitung" } });
      if (global.TexteVerwaltung) global.TexteVerwaltung.zeige($("vw-d8-texte"), { api: API, pw: PW, klasse: KLASSE, liste: global.D8, name: nameVon, stufe: 8, ordner: "8/Deutsch/" });
      fachLaden($("vw-fach"));
    } else if (ANSICHT === "nt9" && global.NT7Verwaltung && nt9Liste()) {
      // NT 9: Themenbereiche und Seiten je Klasse sperren oder freischalten (gleiche Ansicht wie NT 7). Hier ist alles
      // von sich aus offen – die Lehrkraft sperrt, was eine Klasse nicht sehen soll. Je Zug eine Liste, Stand unter /api/n9.
      var NL = nt9Liste();
      teil.innerHTML = '<div id="vw-n9-frei"></div><div id="vw-fach"></div>';
      global.NT7Verwaltung.freigabe($("vw-n9-frei"), { api: API, pw: PW, klasse: KLASSE, liste: NL, pfad: NL.PFAD, ordner: NL.ORDNER,
        worte: { titel: "Themen und Seiten", das: "die Seite", neu: "", von: "Seiten", plan: "Seiten in Vorbereitung", offenVorgabe: true } });
      fachLaden($("vw-fach"));
    } else if (/^e[789]$/.test(ANSICHT) && global.NT7Verwaltung && englischListe()) {
      // Englisch 7, 8 und 9: über dem Lernstand steht das Freischalten der Units und Seiten (gleiche Ansicht wie NT 7).
      // Für die 9. Klassen gibt es je Zug eine Liste (9M/Englisch_9, 9R/Englisch), der Stand liegt gemeinsam unter /api/e9.
      var EL = englischListe();
      teil.innerHTML = '<div id="vw-e-frei"></div><div id="vw-e-texte"></div><div id="vw-fach"></div>';
      // vokabelTon: Schalter „Ton im Vokabeltrainer“ für diese Klasse (nt7-verwaltung.js, js/vokabel-extras.js)
      global.NT7Verwaltung.freigabe($("vw-e-frei"), { api: API, pw: PW, klasse: KLASSE, liste: EL, pfad: EL.PFAD, ordner: EL.ORDNER, vokabelTon: true,
        worte: { titel: "Units und Seiten", das: "die Seite", neu: "Alle Seiten", von: "Seiten", plan: "Seiten in Vorbereitung" } });
      // Englisch 9R: Die Skill-Module nutzen Schreibtrainer und Schreibwerkstatt von Deutsch mit (Liste mit BAUSTEINE) –
      // darunter stehen deshalb wie bei Deutsch 8 die Schülertexte: Fassungen, Entwurf, Planung, Kommentar der Lehrkraft
      if (global.TexteVerwaltung && EL.BAUSTEINE) global.TexteVerwaltung.zeige($("vw-e-texte"), { api: API, pw: PW, klasse: KLASSE, liste: EL, name: nameVon,
        pfad: EL.BAUSTEINE.api, fach: EL.TITEL, ordner: EL.ORDNER, ohneProben: true });
      fachLaden($("vw-fach"));
    } else {
      teil.innerHTML = '<div id="vw-fach"></div>';
      fachLaden($("vw-fach"));
    }
    // Proben des Fachs, die nicht unter Modulen stehen (Fächer ohne Modulliste wie NT 9 oder Informatik 9, ältere
    // Proben ohne Zuordnung): als Karten über dem Lernstand, freischaltbar wie bisher im Reiter „Proben“
    var fachEl = $("vw-fach"), kurs = kursVon(ANSICHT);
    if (fachEl && kurs && PROBEN) {
      fachEl.insertAdjacentHTML("beforebegin", '<div id="vw-fach-proben"></div>');
      PROBEN.zeigen($("vw-fach-proben"), { stufe: stufeVon(KLASSE), zug: zugBuchstabe(KLASSE), fach: kurs.fachName });
    }
  }

  /* ---------- Noten: alle Proben der Klasse (Abgaben mit Code, Datenbank grumiproben) ---------- */
  function notenLaden(teil) {
    var klasse = KLASSE;
    teil.innerHTML = '<div class="skel">Noten werden geladen …</div>';
    fetch(API + "/api/proben/noten", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: PW, klasse: klasse })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || "HTTP " + r.status);
        return d;
      });
    }).then(function (d) {
      if (ANSICHT !== "noten" || KLASSE !== klasse) return;
      NOTEN = d;
      notenZeichnen(teil);
    }).catch(function (e) {
      teil.innerHTML = "";
      hinweis("Die Noten konnten nicht geladen werden: " + e.message, "bad");
    });
  }
  // Je Probe eine Spalte, nach dem ersten Abgabedatum
  function notenProben() {
    var reihe = [], je = {};
    NOTEN.noten.forEach(function (n) {
      var k = n.modul + "|" + n.testId;
      if (!je[k]) { je[k] = { modul: n.modul, testId: n.testId, titel: n.titel, fach: n.fach, datum: n.datum, noten: {} }; reihe.push(je[k]); }
      if (String(n.datum) < String(je[k].datum)) je[k].datum = n.datum;
      je[k].noten[n.code] = n;
    });
    return reihe.sort(function (a, b) { return String(a.datum).localeCompare(String(b.datum)) || a.titel.localeCompare(b.titel, "de"); });
  }
  // Alle Kinder der Klasse, dazu Abgaben von inzwischen gelöschten Codes
  function notenKinder(P) {
    var liste = codesDerKlasse(KLASSE), da = {};
    liste.forEach(function (k) { da[k.code] = true; });
    P.forEach(function (p) {
      Object.keys(p.noten).forEach(function (c) { if (!da[c]) { da[c] = true; liste.push({ code: c, klasse: KLASSE, name: nameVon(c), weg: true }); } });
    });
    return liste;
  }
  function datumText(iso, mitJahr) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
    return m ? m[3] + "." + m[2] + "." + (mitJahr ? m[1] : "") : "";
  }
  function notenFarbe(n) { return n <= 2 ? "g" : n <= 4 ? "m" : "s"; }
  function schnitt(noten) {
    var z = noten.filter(function (x) { return typeof x === "number"; });
    return z.length ? (z.reduce(function (a, b) { return a + b; }, 0) / z.length).toFixed(2).replace(".", ",") : "";
  }
  function notenZeichnen(teil) {
    var P = notenProben(), liste = notenKinder(P), h = "";
    h += '<div class="toolbar" style="margin-bottom:.6rem"><div><h2>Noten · Klasse ' + esc(KLASSE) + "</h2>" +
      '<p class="sub" style="margin:0">Alle Proben, die Kinder dieser Klasse mit ihrem Code abgegeben haben. Unter jeder Note stehen Punkte und Datum. ' +
      "<b>Klick auf eine Note:</b> Antworten ansehen, Punkte je Aufgabe ändern (die Note rechnet sich neu), die Abgabe löschen, damit das Kind nachschreiben kann, " +
      "oder die Antworten für die Eltern drucken (einzeln oder für die ganze Klasse). Klick auf den Titel: Lehrerseite der Probe.</p></div>" +
      '<div class="spacer"></div><button class="btn btn-ghost btn-sm" id="lf-nreload" type="button">Neu laden</button>' +
      '<button class="btn btn-ghost btn-sm" id="lf-nxlsx" type="button"' + (P.length && global.GrumiNotenExcel ? "" : " disabled") +
      ' title="Excel-Mappe: Übersicht der Klasse und je Probe ein Blatt mit Thema, Klasse, Datum, Name und Note – Noten farbig, mit Notenspiegel">📊 Notenliste (Excel)</button>' +
      '<button class="btn btn-ghost btn-sm" id="lf-ncsv" type="button"' + (P.length ? "" : " disabled") + ">CSV-Export</button></div>";
    if (!P.length) {
      h += '<div class="note">Für Klasse ' + esc(KLASSE) + " gibt es noch keine Abgaben. Sobald ein Kind eine Probe mit seinem Code abgibt, steht die Note hier.</div>";
    } else {
      h += '<div class="lf-scroll"><table class="lf-tab lf-noten"><thead><tr><th>Name</th><th>Code</th>';
      P.forEach(function (p) {
        var link = PROBEN && PROBEN.link ? PROBEN.link(p.modul, p.testId) : "";
        h += "<th>" + (link ? '<a href="' + esc(link) + '" title="Antworten und Korrektur">' + esc(p.titel) + "</a>" : esc(p.titel)) +
          "<small>" + esc(p.fach) + " · " + esc(datumText(p.datum)) + "</small>" + probeInhalt(p) + "</th>";
      });
      h += "<th>Ø</th></tr></thead><tbody>";
      liste.forEach(function (kind) {
        var noten = [];
        h += '<tr><td class="lf-name">' + (kind.name ? esc(kind.name) : '<span class="lf-leer">ohne Namen</span>') +
          (kind.lrs ? ' <span class="lf-lrs-b" title="Notenschutz LRS">LRS</span>' : "") +
          (kind.weg ? ' <span class="lf-leer">(Code gelöscht)</span>' : "") + "</td>" +
          '<td class="lf-code">' + esc(kind.code) + "</td>";
        P.forEach(function (p) {
          var n = p.noten[kind.code];
          if (!n) { h += '<td><span class="lf-leer">–</span></td>'; return; }
          noten.push(n.note);
          h += '<td class="lf-klick" data-abgabe="' + esc(n.modul + "|" + n.id) + '" title="' + esc(n.punkte + " von " + n.max + " Punkten (" + n.prozent + " %)" + (n.lrs ? " · mit Notenschutz LRS gewertet" : "") +
              (n.verlassen ? " · " + n.verlassen + "× die Probe verlassen (anderer Tab oder andere App)" : "") + (n.nachpruefen ? " · KI-Bewertung noch prüfen" : "") + " · Klicken zum Bearbeiten oder Löschen") + '">' +
            '<span class="lf-note ' + notenFarbe(n.note) + '">' + esc(n.note) + "</span>" + (n.nachpruefen ? ' <span title="KI-Bewertung noch prüfen">⚠️</span>' : "") +
            (n.lrs ? '<span class="lf-lrs-b">LRS</span>' : "") +
            '<span class="lf-np">' + esc(n.punkte + "/" + n.max + " · " + datumText(n.datum)) + (n.verlassen ? ' · <span class="lf-weg">' + n.verlassen + "× verlassen</span>" : "") + "</span>" +
            (n.zurueck ? '<span class="lf-np lf-zur" title="Zurückgegeben am ' + esc(datumText(n.zurueck, true)) + (n.geoeffnet ? ", vom Kind geöffnet am " + esc(datumText(n.geoeffnet, true)) : ", noch nicht geöffnet") + '">📤 ' + (n.geoeffnet ? "geöffnet" : "zurückgegeben") + "</span>" : "") + "</td>";
        });
        h += '<td class="lf-schnitt">' + (schnitt(noten) || '<span class="lf-leer">–</span>') + "</td></tr>";
      });
      h += '</tbody><tfoot><tr><td colspan="2">Schnitt</td>';
      P.forEach(function (p) {
        var codes = Object.keys(p.noten);
        h += '<td class="lf-schnitt">' + schnitt(codes.map(function (c) { return p.noten[c].note; })) +
          '<span class="lf-np">' + codes.length + " von " + liste.length + " abgegeben</span>" +
          (function () {
            var zur = codes.filter(function (c) { return p.noten[c].zurueck; }).length;
            if (/^d[78]proben$/.test(p.modul)) return zur ? '<span class="lf-np">📤 ' + zur + " zurückgegeben</span>" : "";
            return '<span class="lf-np">📤 ' + zur + " von " + codes.length + ' zurückgegeben</span><button type="button" class="btn btn-ghost btn-sm lf-zur-alle" data-zurueck-alle="' + esc(p.modul + "|" + p.testId) + '"' +
              (zur >= codes.length ? " disabled" : "") + ">📤 Alle zurückgeben</button>";
          })() + "</td>";
      });
      h += "<td></td></tr></tfoot></table></div>" +
        '<p class="sub" style="margin:.5rem 0 0">⚠️ = Die KI war bei einer freien Antwort unsicher oder nicht erreichbar. Bitte in der Lehrerseite der Probe nachsehen. ' +
        "<b>LRS</b> = mit Notenschutz gewertet (Rechtschreibung zählt nicht). <b>× verlassen</b> = So oft hat das Kind während der Probe in einen anderen Tab oder eine andere App gewechselt. " +
        "<b>📤 zurückgegeben</b> = Das Kind sieht die korrigierte Probe auf seiner Startseite unter „Zurückbekommen“ und kann sie für die Eltern drucken; „geöffnet“ heißt, es hat sie angesehen. Zurückgeben: auf eine Note klicken oder unten „Alle zurückgeben“. Deutsch-Proben gibst du auf ihrer Korrekturseite frei.</p>";
    }
    teil.innerHTML = h;
    $("lf-nreload").addEventListener("click", function () { notenLaden(teil); });
    $("lf-ncsv").addEventListener("click", notenCsv);
    $("lf-nxlsx").addEventListener("click", notenExcel);
    Array.prototype.forEach.call(teil.querySelectorAll("[data-zurueck-alle]"), function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-zurueck-alle").split("|"), modul = k[0], testId = k.slice(1).join("|");
        var zeilen = NOTEN.noten.filter(function (x) { return x.modul === modul && x.testId === testId && !x.zurueck; });
        if (!zeilen.length) return;
        if (!global.confirm("„" + zeilen[0].titel + "“ an " + zeilen.length + (zeilen.length === 1 ? " Kind" : " Kinder") + " der Klasse " + KLASSE + " zurückgeben?\n\nDie Kinder sehen dann ihre Antworten, die Punkte, die Rückmeldungen und bei Fehlern die richtige Lösung – auf der Startseite unter „Zurückbekommen“. Sieh vorher die Abgaben mit ⚠️ an.")) return;
        b.disabled = true;
        apiPost("/api/proben/rueckgabe/freigeben", { eintraege: zeilen.map(function (x) { return { modul: x.modul, id: x.id }; }), offen: true, mitLoesung: true }).then(function (d) {
          hinweis(d.anzahl + (d.anzahl === 1 ? " Probe ist" : " Proben sind") + " zurückgegeben. Die Kinder finden sie auf ihrer Startseite unter „Zurückbekommen“.", "ok");
          notenLaden(teil);
        }).catch(function (e) { b.disabled = false; hinweis("Zurückgeben hat nicht geklappt: " + e.message, "bad"); });
      });
    });
    Array.prototype.forEach.call(teil.querySelectorAll("[data-abgabe]"), function (td) {
      td.addEventListener("click", function () {
        var k = td.getAttribute("data-abgabe").split("|");
        var n = NOTEN.noten.filter(function (x) { return x.modul === k[0] && x.id === k.slice(1).join("|"); })[0];
        if (n) abgabeDialog(n, teil);
      });
    });
  }

  /* ---------- Rückmeldung für die Eltern: je Kind eine A4-Seite mit allen Antworten, zum Unterschreiben ---------- */
  var DRUCK_CSS = "@page{size:A4;margin:13mm}" +
    "body{font-family:Arial,Helvetica,sans-serif;color:#111;font-size:10.5pt;margin:0;line-height:1.35}" +
    ".seite{break-after:page;page-break-after:always}.seite:last-child{break-after:auto;page-break-after:auto}" +
    ".kopf{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #111;padding-bottom:5px;margin-bottom:8px;font-size:9.5pt}" +
    "h1{font-size:15pt;margin:6px 0 2px}" +
    ".info{display:grid;grid-template-columns:auto 1fr auto 1fr;gap:2px 12px;margin:6px 0 10px}.info span{color:#555}" +
    ".ergebnis{border:2px solid #111;border-radius:8px;padding:7px 12px;display:flex;gap:16px;align-items:center;margin-bottom:10px;flex-wrap:wrap}" +
    ".ergebnis .note{font-size:20pt;font-weight:900}" +
    "table{width:100%;border-collapse:collapse}th,td{border-bottom:1px solid #bbb;padding:5px 6px;vertical-align:top;text-align:left}" +
    "th{font-size:8.5pt;text-transform:uppercase;color:#444}td.nr{width:1%;color:#555}td.p{white-space:nowrap;text-align:right;font-weight:700;width:1%}" +
    ".antw{margin-top:2px;white-space:pre-wrap}.antw i{color:#777}.kom,.loes{margin-top:2px;font-size:9pt;color:#444}" +
    "tr.ok td.p{color:#13693a}tr.nein td.p{color:#a12a22}tr{break-inside:avoid;page-break-inside:avoid}" +
    ".unterschrift{margin-top:26px;display:grid;grid-template-columns:1fr 2fr;gap:24px}.linie{border-top:1px solid #111;padding-top:3px;font-size:8.5pt}" +
    ".fuss{margin-top:10px;font-size:8pt;color:#555}" +
    "@media screen{body{background:#e9edf2}.seite{background:#fff;max-width:184mm;margin:12px auto;padding:13mm;box-shadow:0 2px 10px rgba(0,0,0,.18)}}";
  function elternSeite(s, info, mitLoesung) {
    var name = nameVon(s.code), det = Array.isArray(s.details) ? s.details : [];
    var datum = datumText(s.testDate || String(s.submittedAt || "").slice(0, 10), true);
    var zeilen = det.map(function (d) {
      var max = typeof d.maxPoints === "number" ? d.maxPoints : 1, pkt = typeof d.points === "number" ? d.points : (d.correct ? 1 : 0);
      var art = pkt >= max ? "ok" : pkt > 0 ? "teil" : "nein";
      var loesung = "";
      if (mitLoesung && pkt < max && d.expected) loesung = '<div class="loes">' + (d.type === "text" ? "Beispiel für eine richtige Antwort: " : "Richtig wäre: ") + esc(d.expected) + "</div>";
      return '<tr class="' + art + '"><td class="nr">' + esc(d.nr) + "</td><td><b>" + esc(d.prompt || "") + "</b>" +
        '<div class="antw">' + (d.given ? esc(d.given) : "<i>keine Antwort</i>") + "</div>" +
        (d.comment ? '<div class="kom">Rückmeldung: ' + esc(d.comment) + "</div>" : "") + loesung +
        '</td><td class="p">' + esc(pkt) + " / " + esc(max) + "</td></tr>";
    }).join("");
    return '<section class="seite"><div class="kopf"><b>Grund- und Mittelschule am Sportpark</b><span>Rückmeldung zur Probe</span></div>' +
      "<h1>" + esc(info.titel) + "</h1>" +
      '<div class="info"><span>Name</span><b>' + (name ? esc(name) : "Code " + esc(s.code)) + "</b><span>Klasse</span><b>" + esc(info.klasse) + "</b>" +
      "<span>Fach</span><b>" + esc(info.fach || "") + "</b><span>geschrieben am</span><b>" + esc(datum) + "</b></div>" +
      '<div class="ergebnis"><span>Note</span><span class="note">' + esc(s.grade) + "</span><span><b>" + esc(s.score) + " von " + esc(s.total) + " Punkten</b> (" + esc(s.percent) + " %)</span>" +
      (s.lrs ? "<span>Mit Notenschutz (LRS) bewertet: Rechtschreibung zählt nicht.</span>" : "") + "</div>" +
      (zeilen ? "<table><thead><tr><th>Nr.</th><th>Aufgabe und Antwort Ihres Kindes</th><th>Punkte</th></tr></thead><tbody>" + zeilen + "</tbody></table>"
        : "<p>Für diese Probe gibt es keine Einzelauflistung der Antworten.</p>") +
      '<div class="unterschrift"><div class="linie">Datum</div><div class="linie">Unterschrift einer/eines Erziehungsberechtigten</div></div>' +
      '<p class="fuss">Die Probe wurde am Tablet geschrieben. Freie Antworten wurden mit KI-Unterstützung bewertet, maßgeblich ist die Bewertung der Lehrkraft.</p></section>';
  }
  function elternDruck(w, subs, info, mitLoesung) {
    var titel = info.titel + " – Rückmeldung für die Eltern";
    w.document.open();
    w.document.write('<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>' + esc(titel) + "</title><style>" + DRUCK_CSS + "</style></head><body>" +
      (subs.length ? subs.map(function (s) { return elternSeite(s, info, mitLoesung); }).join("") : '<p style="padding:20px">Keine Abgaben gefunden.</p>') +
      "<script>setTimeout(function(){window.print();},500);<\/script></body></html>");
    w.document.close();
  }

  /* ---------- Eine Abgabe bearbeiten (Punkte je Aufgabe) oder löschen ----------
     Über die Routen des jeweiligen Proben-Moduls: Die Änderung gilt dann überall (Noten, Lehrerseite, Export). */
  var ABGABE_API = (function () {
    function std(p) { return { results: p + "/results", del: p + "/delete-submission", override: p + "/override" }; }
    return {
      // lrs: Notenschutz LRS je Abgabe nachträglich an/aus (der Server wertet die Antworten neu)
      vokabeltest: { results: "/api/vokabeltest/results", del: "/api/vokabeltest/delete-submission", override: "/api/vokabeltest/override", lrs: "/api/vokabeltest/lrs" },
      grammatik9r: std("/api/grammatik9r"),
      nt7: { results: "/api/nt7/teacher/results", del: "/api/nt7/teacher/delete", override: "/api/nt7/teacher/override", nurText: true },
      // NT 8: Die Lehrkraft kann jede Aufgabe ändern (nicht nur freie Antworten); ausführlich auf 8M/NT/lehrer.html
      nt8: { results: "/api/nt8/teacher/results", del: "/api/nt8/teacher/delete", override: "/api/nt8/teacher/override" },
      inf7: { results: "/api/inf7/teacher/results", del: "/api/inf7/teacher/delete", override: "/api/inf7/teacher/override", nurText: true },
      infoaustausch: std("/api/infoaustausch"),
      informatik8: std("/api/informatik8"),
      inf8: { results: "/api/inf8/teacher/results", del: "/api/inf8/teacher/delete", override: "/api/inf8/teacher/override", nurText: true },
      nt9probe: std("/api/nt9probe"),
      netzwerktest: std("/api/netzwerktest"),
      filiuspruefung: { results: "/api/filiuspruefung/results", del: "/api/filiuspruefung/delete-submission" }
    };
  })();
  function apiPost(pfad, body) {
    return fetch(API + pfad, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.assign({ password: PW }, body))
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || d.ok === false) throw new Error(d.message || d.error || "HTTP " + r.status);
        return d;
      });
    });
  }
  function abgabeDialog(n, teil, schonGeaendert) {
    var api = ABGABE_API[n.modul];
    if (!api) { hinweis("Diese Probe lässt sich hier nicht bearbeiten. Bitte die Lehrerseite der Probe öffnen.", "warn"); return; }
    var dlg = $("lf-abgabe");
    if (!dlg) { dlg = doc.createElement("dialog"); dlg.id = "lf-abgabe"; dlg.className = "lf-dlg"; doc.body.appendChild(dlg); }
    var geaendert = Boolean(schonGeaendert), name = nameVon(n.code), link = PROBEN && PROBEN.link ? PROBEN.link(n.modul, n.testId) : "";
    function stand(note, punkte, max, prozent) {
      return '<span class="lf-note ' + notenFarbe(note) + '">' + esc(note) + "</span> <b>" + esc(punkte + " von " + max + " Punkten") + "</b> (" + esc(prozent) + " %)" +
        (n.lrs ? ' <span class="lf-lrs-b" title="Notenschutz LRS">LRS</span>' : "") + (n.verlassen ? ' · <span class="lf-weg">' + n.verlassen + "× verlassen</span>" : "");
    }
    dlg.innerHTML = '<div class="lf-dlg-kopf"><div><h3>' + esc(n.titel) + '</h3><p class="sub" style="margin:0">' + (name ? esc(name) + " · " : "") + "Code " + esc(n.code) +
      " · abgegeben am " + esc(datumText(n.datum, true)) + '</p></div><button type="button" class="btn btn-ghost btn-sm" data-zu>Schließen</button></div>' +
      '<div class="lf-dlg-stand">' + stand(n.note, n.punkte, n.max, n.prozent) + '</div><div class="lf-dlg-inhalt"><div class="skel">Abgabe wird geladen …</div></div>' +
      '<div class="lf-dlg-fuss"></div><div class="lf-dlg-msg"></div>';
    var inhalt = dlg.querySelector(".lf-dlg-inhalt"), fuss = dlg.querySelector(".lf-dlg-fuss"), msg = dlg.querySelector(".lf-dlg-msg");
    function meldung(text, art) { msg.innerHTML = '<div class="note ' + (art || "") + '" style="margin:0">' + esc(text) + "</div>"; }
    dlg.querySelector("[data-zu]").addEventListener("click", function () { dlg.close(); });
    dlg.onclose = function () { if (geaendert) notenLaden(teil); };
    if (!dlg.open) dlg.showModal();

    function loeschen() {
      if (!global.confirm("Die Abgabe von " + (name || "Code " + n.code) + " für „" + n.titel + "“ wirklich löschen?\n\nDie Note verschwindet und das Kind kann die Probe neu schreiben, sobald sie freigeschaltet ist.")) return;
      apiPost(api.del, { submissionId: n.id }).then(function () {
        geaendert = true; dlg.close();
        hinweis("Die Abgabe von " + (name || "Code " + n.code) + " für „" + n.titel + "“ ist gelöscht.", "ok");
      }).catch(function (e) { meldung("Löschen hat nicht geklappt: " + e.message, "bad"); });
    }

    apiPost(api.results, { testId: n.testId }).then(function (d) {
      var sub = (d.submissions || []).filter(function (s) { return s.id === n.id; })[0];
      var details = sub && Array.isArray(sub.details) ? sub.details : null;
      if (!sub) { inhalt.innerHTML = '<div class="note warn">Diese Abgabe gibt es nicht mehr. Bitte die Noten neu laden.</div>'; geaendert = true; return; }
      if (!details || !details.length) {
        inhalt.innerHTML = '<div class="note">Bei dieser Probe lassen sich die Punkte hier nicht einzeln ändern. Antworten und Bewertung stehen auf der Lehrerseite der Probe.</div>';
      } else {
        var h = '<table class="lf-tab"><thead><tr><th>Nr.</th><th>Aufgabe und Antwort</th><th>Punkte</th></tr></thead><tbody>';
        details.forEach(function (x) {
          var max = typeof x.maxPoints === "number" ? x.maxPoints : 1;
          var pkt = typeof x.points === "number" ? x.points : (x.correct ? 1 : 0);
          var aenderbar = Boolean(api.override) && (!api.nurText || x.type === "text");
          h += '<tr><td class="lf-code">' + esc(x.nr) + '</td><td><div class="lf-aufg">' + esc(x.prompt || "") + "</div>" +
            (x.given ? '<div class="lf-antw">„' + esc(x.given) + "“</div>" : '<div class="lf-antw lf-leer">keine Antwort</div>') +
            (x.comment ? '<div class="lf-kom">Rückmeldung: ' + esc(x.comment) + "</div>" : "") +
            (pkt < max && typeof x.expected === "string" && x.expected ? '<div class="lf-kom">Lösung: ' + esc(x.expected) + "</div>" : "") + '</td><td class="lf-pkt">' +
            (aenderbar ? '<input type="number" inputmode="numeric" min="0" max="' + max + '" step="1" value="' + pkt + '" data-nr="' + esc(x.nr) + '" data-alt="' + pkt +
              '" data-max="' + max + '" aria-label="Punkte für Aufgabe ' + esc(x.nr) + '"> / ' + max : esc(pkt) + " / " + max) + "</td></tr>";
        });
        inhalt.innerHTML = h + "</tbody></table>" + (api.override ? "" : '<p class="sub">Bei dieser Probe lassen sich die Punkte nicht ändern, nur die Abgabe löschen.</p>') +
          (api.nurText ? '<p class="sub">Ankreuzen und Zuordnen wertet der Schlüssel, ändern lassen sich hier die Punkte der freien Antworten.</p>' : "");
      }
      // Probenmodus: was der Browser des Kindes festgehalten hat – Verlassen mit Uhrzeit und Dauer, Einfügen, Kopieren (js/probe-protokoll.js)
      if (global.ProbeProtokoll) inhalt.insertAdjacentHTML("beforeend", global.ProbeProtokoll.html(sub));
      var felder = Array.prototype.slice.call(inhalt.querySelectorAll("input[data-nr]"));
      // Abgaben dieser Probe aus der angezeigten Klasse (für den Klassensatz)
      var klassenIds = {};
      NOTEN.noten.forEach(function (x) { if (x.modul === n.modul && x.testId === n.testId) klassenIds[x.id] = true; });
      var anzahlKlasse = (d.submissions || []).filter(function (s) { return klassenIds[s.id]; }).length;
      fuss.innerHTML = (felder.length ? '<button type="button" class="btn btn-ok btn-sm" data-speichern disabled>Punkte speichern</button>' : "") +
        '<button type="button" class="btn btn-bad btn-sm" data-loeschen>Abgabe löschen (Nachschreiben)</button>' +
        (link ? '<a class="btn btn-ghost btn-sm" href="' + esc(link) + '" target="_blank" rel="noopener">Lehrerseite der Probe ↗</a>' : "") +
        (api.lrs ? '<button type="button" class="btn btn-ghost btn-sm lf-lrs-knopf' + (sub.lrs ? " an" : "") + '" data-lrs-abgabe aria-pressed="' + Boolean(sub.lrs) + '" title="Notenschutz LRS für diese Abgabe: Die Rechtschreibung zählt nicht, Punkte und Note werden neu berechnet">' +
          (sub.lrs ? "✓ LRS: Rechtschreibung zählt nicht" : "LRS: Rechtschreibung nicht werten") + "</button>" : "") +
        '<label class="lf-mitl"><input type="checkbox" data-mitloesung checked> mit Lösungen</label>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-druck>🖨️ Für die Eltern drucken</button>' +
        (n.zurueck ? '<button type="button" class="btn btn-ghost btn-sm" data-zuruecknehmen>Rückgabe zurücknehmen</button>' : '<button type="button" class="btn btn-sm" data-zurueckgeben>📤 An das Kind zurückgeben</button>') +
        (anzahlKlasse > 1 ? '<button type="button" class="btn btn-ghost btn-sm" data-druck-alle>🖨️ Ganze Klasse drucken (' + anzahlKlasse + ")</button>" : "");
      var speichern = fuss.querySelector("[data-speichern]");
      fuss.querySelector("[data-loeschen]").addEventListener("click", loeschen);
      if (n.zurueck) meldung("📤 Zurückgegeben am " + datumText(n.zurueck, true) + (n.geoeffnet ? " – vom Kind geöffnet am " + datumText(n.geoeffnet, true) + "." : " – das Kind hat die Korrektur noch nicht geöffnet.") + " Geänderte Punkte sieht das Kind sofort.");
      var zurueck = function (offen) {
        var kommentar;
        if (offen) {
          kommentar = global.prompt("Kommentar für " + (name || "Code " + n.code) + " (erscheint über der Korrektur – kann leer bleiben):", "");
          if (kommentar === null) return;
        } else if (!global.confirm("Rückgabe zurücknehmen?\n\nDas Kind sieht die korrigierte Probe dann nicht mehr.")) return;
        var body = { eintraege: [{ modul: n.modul, id: n.id }], offen: offen, mitLoesung: fuss.querySelector("[data-mitloesung]").checked };
        if (offen) body.kommentar = kommentar;
        apiPost("/api/proben/rueckgabe/freigeben", body).then(function () {
          geaendert = true; dlg.close();
          hinweis(offen ? "„" + n.titel + "“ ist an " + (name || "Code " + n.code) + " zurückgegeben. Das Kind findet die Korrektur auf seiner Startseite unter „Zurückbekommen“."
            : "Die Rückgabe an " + (name || "Code " + n.code) + " ist zurückgenommen.", "ok");
        }).catch(function (e) { meldung("Das hat nicht geklappt: " + e.message, "bad"); });
      };
      // Notenschutz LRS nur für diese Abgabe an/aus – z. B. wenn er beim Code noch nicht eingetragen war
      var lrsKnopf = fuss.querySelector("[data-lrs-abgabe]");
      if (lrsKnopf) lrsKnopf.addEventListener("click", function () {
        var an = !sub.lrs, wer = name || "Code " + n.code;
        if (!global.confirm(an ? "Notenschutz LRS für " + wer + " einschalten?\n\nIn dieser Abgabe zählt die Rechtschreibung dann nicht: Die Antworten werden neu gewertet, Punkte und Note können sich ändern.\n\nFür künftige Proben schaltest du LRS bei „Codes & Namen“ ein."
          : "Notenschutz LRS für " + wer + " wieder ausschalten?\n\nIn dieser Abgabe zählt die Rechtschreibung dann wieder. Punkte und Note werden neu berechnet.")) return;
        lrsKnopf.disabled = true; meldung("Die Antworten werden neu gewertet …");
        apiPost(api.lrs, { submissionId: n.id, lrs: an }).then(function (r) {
          n.lrs = r.lrs; n.note = r.grade; n.punkte = r.score; n.prozent = r.percent;
          abgabeDialog(n, teil, true);
          hinweis(wer + ": Notenschutz LRS ist " + (r.lrs ? "an – Rechtschreibung zählt in dieser Abgabe nicht" : "aus") + ". Neue Note: " + r.grade + " (" + r.score + " von " + r.total + " Punkten).", "ok");
        }).catch(function (e) { lrsKnopf.disabled = false; meldung("Das hat nicht geklappt: " + e.message, "bad"); });
      });
      var zg = fuss.querySelector("[data-zurueckgeben]"), zn = fuss.querySelector("[data-zuruecknehmen]");
      if (zg) zg.addEventListener("click", function () { zurueck(true); });
      if (zn) zn.addEventListener("click", function () { zurueck(false); });
      function drucken(nurDieses) {
        // Fenster sofort öffnen (sonst blockiert der Browser), dann den aktuellen Stand frisch laden
        var w = global.open("", "_blank");
        if (!w) { meldung("Das Druckfenster wurde blockiert. Bitte Pop-ups für diese Seite erlauben.", "bad"); return; }
        w.document.write('<p style="font-family:Arial;padding:20px">Die Rückmeldung wird vorbereitet …</p>');
        var mitLoesung = fuss.querySelector("[data-mitloesung]").checked;
        apiPost(api.results, { testId: n.testId }).then(function (frisch) {
          var subs = (frisch.submissions || []).filter(function (s) { return nurDieses ? s.id === n.id : klassenIds[s.id]; });
          subs.sort(function (a, b) { return (nameVon(a.code) || "~" + a.code).localeCompare(nameVon(b.code) || "~" + b.code, "de"); });
          elternDruck(w, subs, { titel: n.titel, fach: n.fach, klasse: KLASSE }, mitLoesung);
        }).catch(function (e) { w.document.body.innerHTML = '<p style="font-family:Arial;padding:20px">Die Abgaben konnten nicht geladen werden: ' + esc(e.message) + "</p>"; });
      }
      fuss.querySelector("[data-druck]").addEventListener("click", function () { drucken(true); });
      if (anzahlKlasse > 1) fuss.querySelector("[data-druck-alle]").addEventListener("click", function () { drucken(false); });
      felder.forEach(function (f) {
        f.addEventListener("input", function () {
          f.classList.toggle("geaendert", f.value !== f.getAttribute("data-alt"));
          speichern.disabled = !felder.some(function (g) { return g.value !== g.getAttribute("data-alt"); });
        });
      });
      if (speichern) speichern.addEventListener("click", function () {
        var neu = felder.filter(function (g) { return g.value !== g.getAttribute("data-alt"); });
        var falsch = neu.filter(function (g) { var v = Number(g.value); return !/^\d+$/.test(g.value) || v < 0 || v > Number(g.getAttribute("data-max")); });
        if (falsch.length) { meldung("Bitte ganze Punkte zwischen 0 und der Höchstpunktzahl eintragen (Aufgabe " + falsch.map(function (g) { return g.getAttribute("data-nr"); }).join(", ") + ").", "bad"); return; }
        speichern.disabled = true; meldung("Wird gespeichert …");
        var letzte = null;
        neu.reduce(function (kette, g) {
          return kette.then(function () {
            return apiPost(api.override, { submissionId: n.id, nr: Number(g.getAttribute("data-nr")), points: Number(g.value) }).then(function (r) {
              letzte = r; g.setAttribute("data-alt", g.value); g.classList.remove("geaendert");
            });
          });
        }, Promise.resolve()).then(function () {
          geaendert = true;
          if (letzte) {
            dlg.querySelector(".lf-dlg-stand").innerHTML = stand(letzte.grade, letzte.score, n.max, letzte.percent);
            meldung("Gespeichert. Neue Note: " + letzte.grade + " (" + letzte.score + " von " + n.max + " Punkten).", "ok");
          }
        }).catch(function (e) {
          geaendert = true; speichern.disabled = false;
          meldung("Speichern hat nicht geklappt: " + e.message, "bad");
        });
      });
    }).catch(function (e) {
      inhalt.innerHTML = '<div class="note bad">Die Abgabe konnte nicht geladen werden: ' + esc(e.message) + "</div>";
      fuss.innerHTML = '<button type="button" class="btn btn-bad btn-sm" data-loeschen>Abgabe löschen (Nachschreiben)</button>';
      fuss.querySelector("[data-loeschen]").addEventListener("click", loeschen);
    });
  }
  function notenCsv() {
    if (!NOTEN) return;
    var P = notenProben(), kopf = ["Klasse", "Code", "Name", "Notenschutz LRS"];
    P.forEach(function (p) { kopf.push(p.titel + " Note", p.titel + " Punkte", p.titel + " Datum", p.titel + " verlassen"); });
    var zeilen = [kopf.concat(["Schnitt"])];
    notenKinder(P).forEach(function (kind) {
      var z = [KLASSE, kind.code, nameVon(kind.code), kind.lrs ? "ja" : ""], noten = [];
      P.forEach(function (p) {
        var n = p.noten[kind.code];
        if (n) noten.push(n.note);
        // „von“ statt „/“, sonst macht Excel aus 5/10 ein Datum
        z.push(n ? n.note : "", n ? n.punkte + " von " + n.max : "", n ? datumText(n.datum, true) : "", n && n.verlassen ? n.verlassen + "x" : "");
      });
      zeilen.push(z.concat([schnitt(noten)]));
    });
    datei(zeilen, "noten-" + KLASSE + "-" + new Date().toISOString().slice(0, 10) + ".csv");
  }
  // Notenliste als Excel-Mappe (js/noten-excel.js): Übersicht der Klasse, dann je Probe ein Blatt mit Thema, Modulen,
  // Klasse, Datum, Name und Note – Noten farbig (1 dunkelgrün … 6 dunkelrot), Notenspiegel und Schnitt
  function notenExcel() {
    var E = global.GrumiNotenExcel;
    if (!NOTEN || !E) return;
    var P = notenProben(), kinder = notenKinder(P);
    var G = global.GrumiProbenModule;
    function module(p) {
      var mod = G && G.MODULES.filter(function (x) { return x.key === p.modul; })[0];
      var liste = mod && G.probeInhalt ? G.probeInhalt(mod, { id: p.testId }) : [];
      return liste.map(function (x) { return x.kz + " " + x.titel; }).join(" · ");
    }
    function bemerkung(kind, n) {
      return [(n ? n.lrs : kind.lrs) ? "Notenschutz LRS" : "", n && n.verlassen ? n.verlassen + "× verlassen" : "", n && n.nachpruefen ? "KI-Bewertung noch prüfen" : "",
        kind.weg ? "Code gelöscht" : ""].filter(Boolean).join(" · ");
    }
    var blaetter = [E.uebersicht({
      klasse: KLASSE,
      kinder: kinder.map(function (k) { return { name: nameVon(k.code), code: k.code }; }),
      proben: P.map(function (p) {
        var noten = {};
        Object.keys(p.noten).forEach(function (c) { noten[c] = p.noten[c].note; });
        return { fach: p.fach, titel: p.titel, datum: p.datum, noten: noten };
      })
    })];
    P.forEach(function (p) {
      blaetter.push(E.probe({
        fach: p.fach, titel: p.titel, inhalt: module(p), klasse: KLASSE, datum: p.datum,
        zeilen: kinder.map(function (kind) {
          var n = p.noten[kind.code], name = nameVon(kind.code);
          return n ? { name: name, code: kind.code, note: n.note, punkte: n.punkte, max: n.max, prozent: n.prozent, bemerkung: bemerkung(kind, n) }
            : { name: name, code: kind.code, fehlt: true, bemerkung: kind.weg ? "Code gelöscht" : "" };
        }).filter(function (z) { return !z.fehlt || z.bemerkung !== "Code gelöscht"; })
      }));
    });
    E.laden(blaetter, "Notenliste " + KLASSE + " " + new Date().toISOString().slice(0, 10) + ".xlsx");
  }

  /* ---------- Fach: Lernfortschritt ---------- */
  function fachLaden(teil) {
    var kurs = ANSICHT;
    teil.innerHTML = '<div class="skel">Lernstand wird geladen …</div>';
    post("liste", { kurs: kurs, klasse: KLASSE }).then(function (d) {
      if (ANSICHT !== kurs) return;
      DATEN = d;
      fachZeichnen(teil);
    }).catch(function (e) {
      teil.innerHTML = "";
      hinweis("Der Lernstand konnte nicht geladen werden: " + e.message, "bad");
    });
  }

  // Plus-Aufgaben (Deutsch 9 Grammatik) sind für R-Klassen freiwillig und zählen dort nicht zur Prozentzahl
  function modulAufgaben(m) {
    var k = DATEN.katalog[m];
    if (!k) return null;
    var r = zugBuchstabe(KLASSE) === "R";
    return Object.keys(k).filter(function (id) { return !(r && k[id][1] === "Plus"); });
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
    SICHT.forEach(function (m) { if (kind.module[m.id]) z = Math.max(z, kind.module[m.id].z || 0); });
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
  // Module des Kurses: was der Server kennt (eine Übung meldet sich an, sobald ein Kind sie öffnet) – ergänzt um alle
  // Module aus der Modulliste des Fachs (themen.js). So steht jeder Themenbereich in der Auswahl, auch wenn dort noch
  // kein Kind gearbeitet hat; die Spalten zeigen dann „–“. Extra-Module und Geplantes kommen nicht dazu.
  function kursModule() {
    var bekannt = DATEN.module.filter(function (m) { return m.kurs === ANSICHT; });
    var L = { nt7: global.NT7, nt8: global.NT8, d7: global.D7, d8: global.D8, i7: global.INF7, i8: global.INF8 }[ANSICHT];
    if (!L || !L.THEMEN) return bekannt;
    var da = {}, alle = bekannt.slice();
    bekannt.forEach(function (m) { da[m.id] = 1; });
    L.THEMEN.forEach(function (t) {
      t.module.forEach(function (m, i) {
        var id = ANSICHT + "-" + m.id;
        if (da[id] || !m.href || m.extra) return;
        alle.push({ id: id, kurs: ANSICHT, bereich: t.titel, bnr: parseInt(t.nr, 10) || 99, nr: i + 1, titel: m.titel, kurz: m.kz || "", klassen: [] });
      });
    });
    // Reihenfolge wie in der Modulliste: erst der Themenbereich, dann das Modul (die Liste des Servers bleibt sonst wie sie ist)
    return alle.map(function (m, i) { return [m, i]; }).sort(function (a, b) {
      return (a[0].bnr || 99) - (b[0].bnr || 99) || (a[0].nr || 999) - (b[0].nr || 999) || a[1] - b[1];
    }).map(function (x) { return x[0]; });
  }
  function bereichListe() {
    var b = [];
    kursModule().forEach(function (m) { var x = m.bereich || "Module"; if (b.indexOf(x) < 0) b.push(x); });
    return b;
  }
  function gemerkterBereich() { try { return global.localStorage.getItem("lf-bereich-" + ANSICHT) || ""; } catch (_e) { return ""; } }
  // Übungen des Bereichs, die in diesem Zug vorkommen (feste Module immer) oder schon ein Kind der Klasse hat
  function sichtModule(liste) {
    var zug = stufeVon(KLASSE) + zugBuchstabe(KLASSE);
    return kursModule().filter(function (m) {
      if ((m.bereich || "Module") !== BEREICH) return false;
      if (!m.klassen || !m.klassen.length || m.klassen.indexOf(zug) >= 0) return true;
      return liste.some(function (kind) { return kind.module[m.id]; });
    });
  }
  // Festes Kürzel des Moduls aus der Modulliste des Fachs (themen.js: kz, z. B. „L3“). Übungen ohne Liste behalten
  // den Kurznamen, den ihre Seite meldet (z. B. „G2“ in Deutsch 8).
  function kuerzel(m) {
    var L = { nt7: global.NT7, nt8: global.NT8, d7: global.D7, d8: global.D8, i7: global.INF7, i8: global.INF8 }[m.kurs];
    var r = L && L.modulVon ? L.modulVon(String(m.id).slice(String(m.kurs).length + 1)) : null;
    // Englisch: Die Liste nennt bei jeder Seite ihre Kennung im Lernstand (ls)
    if (!r && /^e[789]$/.test(m.kurs) && englischListe()) r = englischListe().modulZumLernstand(m.id);
    if (!r && m.kurs === "nt9" && nt9Liste()) r = nt9Liste().modulZumLernstand(m.id);
    return (r && r.modul.kz) || "";
  }
  // NT-9-Liste zur gewählten Klasse (9M/NT_9/themen.js oder 9R/NT_9/themen.js)
  function nt9Liste() { return stufeVon(KLASSE) === 9 ? (zugBuchstabe(KLASSE) === "M" ? global.NT9M : global.NT9R) : null; }
  // Englisch-Liste (themen.js) zur gewählten Klasse: 7 -> E7, 8 -> E8, 9 -> E9M oder E9R
  function englischListe() {
    var st = stufeVon(KLASSE);
    return st === 9 ? (zugBuchstabe(KLASSE) === "M" ? global.E9M : global.E9R) : st === 8 ? global.E8 : st === 7 ? global.E7 : null;
  }
  function kurzName(m) { return kuerzel(m) || m.kurz || m.titel || "Modul " + m.nr; }
  // Notenübersicht: Module, die eine Probe enthält (Kürzel; der Titel steht beim Darüberfahren) – js/proben-module.js
  function probeInhalt(p) {
    var G = global.GrumiProbenModule, mod = G && G.MODULES.filter(function (x) { return x.key === p.modul; })[0];
    var liste = mod && G.probeInhalt ? G.probeInhalt(mod, { id: p.testId }) : [];
    if (!liste.length) return "";
    return '<small class="lf-inhalt" title="' + esc(liste.map(function (x) { return x.kz + " " + x.titel; }).join(" · ")) + '">Module: ' +
      esc(liste.map(function (x) { return x.kz; }).join(" ")) + "</small>";
  }
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

  function fachZeichnen(teil) {
    var kurs = kursVon(ANSICHT) || { titel: ANSICHT, fachName: "", fach: "" };
    var liste = kinder(), h = "";
    var bereiche = bereichListe();
    if (bereiche.indexOf(BEREICH) < 0) BEREICH = gemerkterBereich();
    if (bereiche.indexOf(BEREICH) < 0) BEREICH = bereiche[0] || "";
    var M = SICHT = sichtModule(liste);
    if (M.length && !M.some(function (m) { return m.id === AUSWERTUNG_MODUL; })) {
      var best = M[0], bestN = -1;
      M.forEach(function (m) {
        var n = liste.filter(function (kind) { return stand(kind, m.id); }).length;
        if (n > bestN) { best = m; bestN = n; }
      });
      AUSWERTUNG_MODUL = best.id;
    }
    var seite = fachseite(ANSICHT, KLASSE);
    h += '<div class="toolbar" style="margin-bottom:.6rem"><div><h2>' + esc(kurs.fachName || kurs.titel) + " · Klasse " + esc(KLASSE) + "</h2>" +
      '<p class="sub" style="margin:0">Anteil der richtig gelösten Aufgaben je Übung. Ein Klick auf ein Kind zeigt jede Aufgabe einzeln.' +
      (seite ? ' <span class="vw-link"><a href="' + seite + '" target="_blank" rel="noopener">Fachseite für die Kinder ↗</a></span>' : "") + "</p></div>" +
      '<div class="spacer"></div><button class="btn btn-ghost btn-sm" id="lf-reload" type="button">Neu laden</button>' +
      '<button class="btn btn-ghost btn-sm" id="lf-csv" type="button"' + (M.length ? "" : " disabled") + ">CSV-Export</button></div>";
    if (bereiche.length > 1) {
      h += '<div class="lf-werkzeug" style="margin:0 0 .9rem"><label for="lf-bereich" style="margin:0">Bereich</label><select id="lf-bereich">' +
        bereiche.map(function (b) { return '<option value="' + esc(b) + '"' + (b === BEREICH ? " selected" : "") + ">" + esc(b) + "</option>"; }).join("") + "</select></div>";
    }
    if (!liste.length) {
      h += '<div class="note">Für Klasse ' + esc(KLASSE) + ' gibt es noch keine Codes. Lege sie unter „Codes &amp; Namen“ an.</div>';
    } else if (!M.length) {
      h += '<div class="note">' + (bereiche.length ? "In diesem Bereich hat Klasse " + esc(KLASSE) + " noch keine Übung mit Code bearbeitet."
        : "Noch hat kein Kind eine Übung in " + esc(kurs.fachName) + " mit Code geöffnet. Die Übungen erscheinen hier von selbst, sobald ein Kind sie öffnet.") + "</div>";
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
        '<p class="sub" style="margin:.5rem 0 0">Farben: rot unter 40 %, gelb ab 40 %, grün ab 80 %.' + (ANSICHT === "nt9" ? " 🏆 = Profi-Check (Abschlussquiz) bestanden." : " Gezählt werden Aufgaben, die das Kind richtig gelöst hat (nicht „Lösung zeigen“).") + "</p>";
      h += '<h3 class="lf-h3">Klassenauswertung: Was sollte ich wiederholen?</h3>' +
        '<div class="lf-werkzeug"><label for="lf-modul" style="margin:0">Übung</label><select id="lf-modul">' +
        M.map(function (m) { return '<option value="' + esc(m.id) + '"' + (m.id === AUSWERTUNG_MODUL ? " selected" : "") + ">" + esc(kurzName(m)) + ": " + esc(m.titel) + "</option>"; }).join("") +
        "</select></div>" + auswertung(liste, AUSWERTUNG_MODUL);
      // Vokabeltrainer: Fehlerwörter der Klasse. (NT 8 legt an derselben Stelle den Stand der Lernkarten ab – der steht
      // in der Lernstandsdiagnose, nicht hier.)
      var mitFehlern = ANSICHT === "nt8" ? [] : M.filter(function (m) { return liste.some(function (k) { var p = k.module[m.id]; return p && p.f && Object.keys(p.f).length; }); });
      if (mitFehlern.length) {
        if (!mitFehlern.some(function (m) { return m.id === FEHLER_MODUL; })) FEHLER_MODUL = mitFehlern[0].id;
        h += '<h3 class="lf-h3">Fehlerwörter: Was sitzt noch nicht?</h3>' +
          (mitFehlern.length > 1 ? '<div class="lf-werkzeug"><label for="lf-fmodul" style="margin:0">Trainer</label><select id="lf-fmodul">' +
            mitFehlern.map(function (m) { return '<option value="' + esc(m.id) + '"' + (m.id === FEHLER_MODUL ? " selected" : "") + ">" + esc(kurzName(m)) + ": " + esc(m.titel) + "</option>"; }).join("") + "</select></div>" : "") +
          fehlerAuswertung(liste, FEHLER_MODUL);
      }
    }
    teil.innerHTML = h;

    Array.prototype.forEach.call(teil.querySelectorAll("tr.kind"), function (tr) {
      tr.addEventListener("click", function () { var c = tr.getAttribute("data-code"); OFFEN[c] = !OFFEN[c]; fachZeichnen(teil); });
    });
    var modulWahl = $("lf-modul");
    if (modulWahl) modulWahl.addEventListener("change", function (e) { AUSWERTUNG_MODUL = e.target.value; ALLE_AUFGABEN = false; fachZeichnen(teil); });
    var bereichWahl = $("lf-bereich");
    if (bereichWahl) bereichWahl.addEventListener("change", function (e) {
      BEREICH = e.target.value; OFFEN = {}; ALLE_AUFGABEN = false;
      merken("lf-bereich-" + ANSICHT, BEREICH);
      fachZeichnen(teil);
    });
    var mehr = $("lf-mehr");
    if (mehr) mehr.addEventListener("click", function () { ALLE_AUFGABEN = !ALLE_AUFGABEN; fachZeichnen(teil); });
    var fWahl = $("lf-fmodul");
    if (fWahl) fWahl.addEventListener("change", function (e) { FEHLER_MODUL = e.target.value; fachZeichnen(teil); });
    $("lf-reload").addEventListener("click", function () { fachLaden(teil); });
    $("lf-csv").addEventListener("click", csv);
  }

  function zelle(st) {
    if (!st) return '<span class="lf-pct lf-leer">–</span>';
    return '<div class="lf-bar lf-g' + stufe(st.pct) + '"><i style="width:' + st.pct + '%"></i></div>' +
      '<span class="lf-pct" title="' + st.geloest + " von " + st.gesamt + ' Aufgaben">' + st.pct + " % <span class=\"lf-leer\">(" + st.geloest + "/" + st.gesamt + ")</span>" +
      (st.profi ? '<span class="lf-profi" title="Profi-Check bestanden">🏆</span>' : "") + "</span>";
  }

  // Alle Aufgaben eines Kindes, nach Übung und Station
  function detail(kind) {
    var h = "";
    SICHT.forEach(function (m) {
      var p = kind.module[m.id], k = DATEN.katalog[m.id], st = stand(kind, m.id);
      h += '<div class="lf-mod"><h4>' + esc(kurzName(m)) + ": " + esc(m.titel) + (st ? " · " + st.geloest + " von " + st.gesamt + " gelöst" : " · noch nicht begonnen") + "</h4>";
      if (st && k) {
        var stationen = {}, reihe = [];
        Object.keys(k).forEach(function (id) { var s = k[id][1] || "–"; reihe.push(s); (stationen[s] = stationen[s] || []).push(id); });
        Object.keys(stationen).sort(stationOrdnung(reihe)).forEach(function (s) {
          h += '<div class="lf-st">' + esc(stationText(s)) + (s === "Plus" && zugBuchstabe(KLASSE) === "R" ? " (freiwillig)" : "") + '</div><div class="lf-aufg">' + stationen[s].map(function (id) {
            var ok = p && p.g && p.g[id];
            return '<span class="lf-a ' + (ok ? "ok" : "no") + '"' + (ok ? ' title="gelöst ' + esc(zeitText(p.g[id])) + '"' : "") + ">" + (ok ? "✓ " : "○ ") + esc(k[id][0]) + "</span>";
          }).join("") + "</div>";
        });
      } else if (st) {
        h += '<p class="sub">' + st.geloest + " Aufgaben gelöst. Die Aufgabenliste erscheint, sobald jemand die Übung nach dem Update geöffnet hat.</p>";
      }
      h += "</div>";
    });
    return h;
  }

  // Je Aufgabe: wie viele der Kinder, die die Übung begonnen haben, sie gelöst haben
  function auswertung(liste, m) {
    var k = DATEN.katalog[m];
    var begonnen = liste.filter(function (kind) { return stand(kind, m); });
    if (!begonnen.length) return '<p class="sub" style="margin-top:.7rem">In Klasse ' + esc(KLASSE) + " hat noch niemand diese Übung begonnen.</p>";
    if (!k) return '<p class="sub" style="margin-top:.7rem">Die Aufgabenliste erscheint, sobald jemand die Übung nach dem Update geöffnet hat.</p>';
    var ordnung = stationOrdnung(Object.keys(k).map(function (id) { return k[id][1] || ""; }));
    var zeilen = Object.keys(k).map(function (id) {
      var n = begonnen.filter(function (kind) { return kind.module[m].g[id]; }).length;
      return { id: id, label: k[id][0], st: k[id][1], n: n, pct: Math.round(n / begonnen.length * 100) };
    }).sort(function (a, b) { return a.pct - b.pct || ordnung(a.st || "", b.st || ""); });
    var sichtbar = ALLE_AUFGABEN ? zeilen : zeilen.slice(0, KURZ);
    return '<p class="sub" style="margin-top:.7rem">' + begonnen.length + " von " + liste.length + " Kindern haben diese Übung begonnen. Oben stehen die Aufgaben, die am wenigsten gelöst wurden – sie waren schwer oder wurden noch nicht bearbeitet.</p>" +
      '<div class="lf-rang">' + sichtbar.map(function (z) {
        return '<div class="lf-rang-z"><span>' + (/^\d+$/.test(z.st || "") ? '<span class="lf-stn">' + esc(stationKurz(z.st)) + "</span> " : "") + esc(z.label) + "</span>" +
          '<div class="lf-bar lf-g' + stufe(z.pct) + '"><i style="width:' + z.pct + '%"></i></div><b>' + z.n + "/" + begonnen.length + "</b></div>";
      }).join("") + "</div>" +
      (zeilen.length > KURZ ? '<button class="btn btn-ghost btn-sm lf-mehr" id="lf-mehr" type="button">' +
        (ALLE_AUFGABEN ? "Nur die " + KURZ + " schwächsten Aufgaben zeigen" : "Alle " + zeilen.length + " Aufgaben zeigen") + "</button>" : "");
  }

  // Fehlerwörter eines Vokabeltrainers: wie viele Kinder ein Wort falsch hatten, wie oft, wie viele es noch üben
  function fehlerAuswertung(liste, m) {
    var k = DATEN.katalog[m] || {}, woerter = {};
    liste.forEach(function (kind) {
      var f = (kind.module[m] || {}).f || {};
      Object.keys(f).forEach(function (id) {
        var w = woerter[id] = woerter[id] || { id: id, kinder: 0, mal: 0, offen: 0 };
        w.kinder++; w.mal += f[id][0]; if (f[id][1] < 2) w.offen++;
      });
    });
    var reihe = Object.keys(woerter).map(function (id) { return woerter[id]; })
      .sort(function (a, b) { return b.offen - a.offen || b.kinder - a.kinder || b.mal - a.mal; }).slice(0, 15);
    var wort = function (id) { var l = k[id] ? k[id][0] : id; var i = l.indexOf(": "); return i >= 0 ? l.slice(i + 2) : l; };
    return '<p class="sub" style="margin-top:.7rem">Ein Wort kommt in die Fehlerliste eines Kindes, wenn es falsch angeklickt, falsch geschrieben oder übersprungen wurde, und verschwindet nach zweimal richtig hintereinander. Oben stehen die Wörter, die die meisten Kinder noch üben.</p>' +
      '<div class="lf-rang">' + reihe.map(function (w) {
        var pct = liste.length ? Math.round(w.offen / liste.length * 100) : 0;
        return '<div class="lf-rang-z"><span>' + esc(wort(w.id)) + ' <span class="lf-leer">· ' + w.kinder + (w.kinder === 1 ? " Kind" : " Kinder") + ", " + w.mal + "× falsch</span></span>" +
          '<div class="lf-bar lf-g0"><i style="width:' + pct + '%"></i></div><b title="noch in der Fehlerliste">' + w.offen + " offen</b></div>";
      }).join("") + "</div>";
  }

  function csv() {
    if (!DATEN) return;
    var M = SICHT, zeilen = [["Klasse", "Code", "Name"].concat(M.map(function (m) { return kurzName(m) + " (%)"; }), M.map(function (m) { return kurzName(m) + " gelöst"; }), ANSICHT === "nt9" ? ["Profi-Checks bestanden"] : [], ["Zuletzt aktiv"])];
    kinder().forEach(function (k) {
      var st = M.map(function (m) { return stand(k, m.id); });
      zeilen.push([k.klasse, k.code, nameVon(k.code)]
        .concat(st.map(function (s) { return s ? s.pct : ""; }), st.map(function (s) { return s ? s.geloest + "/" + s.gesamt : ""; }))
        .concat(ANSICHT === "nt9" ? [st.filter(function (s) { return s && s.profi; }).length] : [], [zeitText(zuletzt(k))]));
    });
    datei(zeilen, "lernfortschritt-" + KLASSE + "-" + ANSICHT + "-" + String(BEREICH).toLowerCase().replace(/[^a-z0-9äöü]+/g, "-") + "-" + new Date().toISOString().slice(0, 10) + ".csv");
  }

  /* ---------- Codes & Namen einer Klasse ---------- */
  function namensFeld(id) {
    return '<div class="btn-row" style="margin:0 0 .6rem"><button class="btn btn-ghost btn-sm" id="' + id + '-liste" type="button">📄 Klassenliste laden (Schulmanager-CSV)</button>' +
      '<input type="file" id="' + id + '-datei" accept=".csv,.txt,text/csv,text/plain" hidden></div>' +
      '<textarea class="lf-namen" id="' + id + '-namen" aria-label="Vornamen, einer pro Zeile" placeholder="Hier stehen die Vornamen, einer pro Zeile – von Hand eingetragen oder aus der Klassenliste geladen."></textarea>';
  }
  function datenschutzHinweis() {
    return '<div class="note">Auf dem Server (Datenbanken von Upstash in Frankfurt) liegen Code, Klasse und welche Aufgaben gelöst sind, bei Proben dazu Antworten und Note – keine lesbaren Namen. ' +
      'Die Namenszuordnung ist getrennt vom Lernstand verschlüsselt hinterlegt und über die Lehrkraft-Anmeldung zugänglich. Bestehende Schülercodes bleiben unverändert.</div>';
  }

  /* ---------- Namen auf allen Geräten der Lehrkraft (js/namen-sync.js) ---------- */
  function namenBox() {
    var S = global.NamenSync;
    if (!S) return "";
    var z = S.status(), kopf = '<div class="lf-ns" id="lf-ns"><b>Namensliste</b>';
    var text = '<p class="sub" id="lf-ns-status" style="margin:.25rem 0 .45rem' + (z.fehler ? ";color:#b45309" : "") + '">' + esc(z.text) + "</p>";
    if (z.zustand === "unmoeglich") return kopf + text + "</div>";
    if (z.zustand !== "eingabe") {
      return kopf + text + '<button class="btn btn-ghost btn-sm" id="lf-ns-sync" type="button" title="Namensliste abgleichen" aria-label="Namensliste abgleichen"><i data-lucide="refresh-cw" style="display:inline-block;width:16px;height:16px;vertical-align:middle" aria-hidden="true"></i></button></div>';
    }
    return kopf + text +
      '<div class="btn-row" style="margin:0"><input type="password" id="lf-ns-feld" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Bisheriger Schlüssel" aria-label="Bisheriger Schlüssel" style="flex:1 1 220px;min-width:0;max-width:340px;padding:.5rem .7rem;border:1.5px solid var(--line);border-radius:10px;font:inherit">' +
      '<button class="btn btn-sm" id="lf-ns-los" type="button">Alte Namensliste übernehmen</button></div></div>';
  }
  function namenBoxAn(teil) {
    var S = global.NamenSync;
    if (!S || !$("lf-ns")) return;
    var neuZeichnen = function () { namenLesen(); zeichnen(); };
    var los = function () {
      var feld = $("lf-ns-feld"), wert = feld ? feld.value : "", knopf = $("lf-ns-los");
      if (knopf) knopf.disabled = true;
      S.verbinden(wert).then(function () {
        neuZeichnen();
        hinweis("Namensliste synchronisiert.", "ok");
      }).catch(function (e) { if (knopf) knopf.disabled = false; hinweis(e.message, "bad"); });
    };
    if ($("lf-ns-los")) $("lf-ns-los").addEventListener("click", los);
    if ($("lf-ns-feld")) $("lf-ns-feld").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); los(); } });
    if ($("lf-ns-sync")) $("lf-ns-sync").addEventListener("click", function () { S.fertig().then(neuZeichnen); });
    if (global.lucide) global.lucide.createIcons();
  }

  function codesZeichnen(teil) {
    var liste = codesDerKlasse(KLASSE);
    var fehlend = liste.filter(function (k) { return !k.name; }).length;
    var h = '<h3 class="lf-h3" style="margin-top:0">Codes der Klasse ' + esc(KLASSE) + " (" + liste.length + ")</h3>" +
      (fehlend ? '<div class="note warn" style="margin:0 0 .7rem">Für ' + fehlend + (fehlend === 1 ? " Code fehlt" : " Codes fehlen") + ' auf diesem Gerät der Name.' +
        (global.NamenSync && global.NamenSync.status().zustand === "eingabe" ? " Gib unten deinen Namens-Schlüssel ein, dann werden die Namen geholt." : " Trage ihn mit ✏️ ein oder lade eine gespeicherte Namensliste.") + "</div>" : "") +
      namenBox() +
      '<div class="btn-row" style="margin:0 0 .3rem"><button class="btn btn-ghost btn-sm" id="lf-drucken" type="button"' + (liste.length ? "" : " disabled") + ">🖨️ Codeliste drucken</button>" +
      '<button class="btn btn-ghost btn-sm" id="lf-namen-export" type="button"' + (Object.keys(NAMEN).length ? "" : " disabled") + ">Namensliste speichern</button>" +
      '<button class="btn btn-ghost btn-sm" id="lf-namen-import" type="button">Gespeicherte Namensliste laden</button>' +
      '<input type="file" id="lf-namen-datei" accept=".csv,.txt,text/csv,text/plain" hidden></div>' +
      '<div class="lf-codes">' + liste.map(function (k) {
        return '<div class="lf-ck"><span class="lf-code">' + esc(k.code) + '</span><span class="lf-name">' + (k.name ? esc(k.name) : '<span class="lf-leer">ohne Namen</span>') + "</span>" +
          '<button type="button" class="lf-lrs' + (k.lrs ? " an" : "") + '" data-lrs="' + esc(k.code) + '" aria-pressed="' + k.lrs + '" title="Notenschutz LRS: In Proben zählt die Rechtschreibung nicht">LRS</button>' +
          '<button type="button" data-umbenennen="' + esc(k.code) + '" title="Namen ändern" aria-label="Namen ändern">✏️</button>' +
          '<button type="button" data-loeschen="' + esc(k.code) + '" title="Code und Lernstand löschen" aria-label="Löschen">🗑️</button></div>';
      }).join("") + "</div>" +
      '<p class="sub" style="margin:.5rem 0 0"><b>LRS</b> = Notenschutz wegen Lese-Rechtschreib-Störung: In Proben zählt die Rechtschreibung nicht (Englisch: Ein Wort zählt, wenn es erkennbar gemeint ist). Gilt für Abgaben ab dem Einschalten – am besten vor der Probe einschalten. Für einen schon abgegebenen Vokabeltest: im Reiter „Noten“ auf die Note klicken → „LRS: Rechtschreibung nicht werten“. Auf dem Server steht dazu nur der Code, kein Name.</p>' +
      '<h3 class="lf-h3">Weitere Kinder hinzufügen</h3>' +
      '<p class="sub">Vornamen eintragen (einen pro Zeile) oder die Klassenliste laden. Wer schon einen Code hat, bekommt keinen zweiten.</p>' +
      namensFeld("lf") +
      '<div class="btn-row"><button class="btn btn-sm" id="lf-anlegen" type="button">Codes erzeugen</button></div>' +
      '<h3 class="lf-h3">Klasse verwalten</h3>' +
      '<div class="btn-row" style="margin-top:0"><button class="btn btn-ghost btn-sm" id="lf-kl-umbenennen" type="button">Klasse umbenennen</button>' +
      '<button class="btn btn-bad btn-sm" id="lf-kl-loeschen" type="button">Ganze Klasse löschen</button></div>' +
      datenschutzHinweis();
    teil.innerHTML = h;
    namenBoxAn(teil);
    $("lf-drucken").addEventListener("click", function () { drucken(KLASSE, liste); });
    $("lf-namen-export").addEventListener("click", namenExport);
    $("lf-namen-import").addEventListener("click", function () { $("lf-namen-datei").click(); });
    $("lf-namen-datei").addEventListener("change", namenImport);
    listenKnopf("lf", function (erg) {
      if (erg.klasse && erg.klasse !== KLASSE) hinweis("Achtung: Die Datei gehört zu Klasse " + erg.klasse + ", geöffnet ist Klasse " + KLASSE + ". Für eine andere Klasse oben „Neue Klasse“ wählen.", "warn");
    });
    $("lf-anlegen").addEventListener("click", function () { anlegen(KLASSE, $("lf-namen"), $("lf-anlegen")); });
    $("lf-kl-umbenennen").addEventListener("click", klasseUmbenennen);
    $("lf-kl-loeschen").addEventListener("click", klasseLoeschen);
    Array.prototype.forEach.call(teil.querySelectorAll("[data-umbenennen]"), function (b) { b.addEventListener("click", function () { umbenennen(b.getAttribute("data-umbenennen")); }); });
    Array.prototype.forEach.call(teil.querySelectorAll("[data-loeschen]"), function (b) { b.addEventListener("click", function () { loeschen(b.getAttribute("data-loeschen")); }); });
    Array.prototype.forEach.call(teil.querySelectorAll("[data-lrs]"), function (b) { b.addEventListener("click", function () { lrsUmschalten(b, teil); }); });
  }

  // Notenschutz LRS je Code an/aus (Server: nur Code + Merkmal)
  function lrsUmschalten(knopf, teil) {
    var code = knopf.getAttribute("data-lrs"), kind = CODES.filter(function (s) { return s.code === code; })[0];
    if (!kind) return;
    knopf.disabled = true;
    post("lrs", { code: code, lrs: !kind.lrs }).then(function (d) {
      kind.lrs = d.lrs;
      hinweis((nameVon(code) || "Code " + code) + (d.lrs ? ": Notenschutz LRS ist an. Rechtschreibung zählt in Proben ab jetzt nicht." : ": Notenschutz LRS ist aus."), "ok");
      codesZeichnen(teil);
    }).catch(function (e) { knopf.disabled = false; hinweis("Das hat nicht geklappt: " + e.message, "bad"); });
  }

  // Knopf „Klassenliste laden“ + Dateiauswahl; danach(erg) bekommt { namen, klasse }
  function listenKnopf(id, danach) {
    $(id + "-liste").addEventListener("click", function () { $(id + "-datei").click(); });
    $(id + "-datei").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      alsText(f, function (text) {
        e.target.value = "";
        if (/^﻿?"?code"?[;,\t]/i.test(text)) { namenAusText(text); return; } // gespeicherte Namensliste erwischt
        var erg = klassenliste(text, f.name);
        if (!erg.namen.length) { hinweis("In der Datei wurden keine Vornamen gefunden. Erwartet wird eine Spalte „Vorname“ (Schulmanager-Export) oder ein Name pro Zeile.", "bad"); return; }
        var feld = $(id + "-namen");
        feld.value = erg.namen.join("\n");
        hinweis(erg.namen.length + " Vornamen übernommen" + (erg.klasse ? " (Klasse " + erg.klasse + ")" : "") +
          ". Prüfe die Liste. Alle anderen Angaben der Datei (Adressen, Kontakte, Geburtstage …) wurden nicht übernommen. Lösche die Datei danach aus dem Download-Ordner.", "ok");
        if (danach) danach(erg);
        if (feld.scrollIntoView) feld.scrollIntoView({ block: "center" });
      });
    });
  }

  function namenAusFeld(feld) {
    return feld.value.split(/\r?\n/).map(function (n) { return n.replace(/\s+/g, " ").trim().slice(0, 40); }).filter(Boolean);
  }

  function anlegen(klasse, feld, btn, fertig) {
    var namen = namenAusFeld(feld);
    if (!namen.length) { hinweis("Bitte zuerst Namen eintragen (einen pro Zeile) oder die Klassenliste laden.", "bad"); return; }
    if (namen.length > 60) { hinweis("Bitte höchstens 60 Namen auf einmal eintragen.", "bad"); return; }
    var vorhanden = codesDerKlasse(klasse);
    if (vorhanden.length && (vorhanden.some(function (k) { return !k.name; }) || (global.NamenSync && global.NamenSync.status().fehler))) {
      hinweis("Keine neuen Codes erzeugt: Die Namenszuordnung zu den bestehenden Codes fehlt oder ist noch nicht synchronisiert. Bitte zuerst die vorhandene Namensliste abgleichen oder laden. Die bestehenden Codes bleiben erhalten.", "warn");
      return;
    }
    // Wer in dieser Klasse schon einen Code hat, bekommt keinen zweiten
    var schon = {};
    vorhanden.forEach(function (k) { if (k.name) schon[k.name.toLowerCase()] = k.code; });
    var doppelt = namen.filter(function (n) { return schon[n.toLowerCase()]; });
    if (doppelt.length) {
      var rest = namen.filter(function (n) { return !schon[n.toLowerCase()]; });
      if (!rest.length) { hinweis("Alle eingetragenen Namen haben in Klasse " + klasse + " schon einen Code.", "ok"); return; }
      if (!global.confirm(doppelt.length + (doppelt.length === 1 ? " Name hat" : " Namen haben") + " in Klasse " + klasse + " schon einen Code: " + doppelt.join(", ") +
        ".\n\nOK = nur für die übrigen " + rest.length + " Namen Codes erzeugen\nAbbrechen = nichts erzeugen")) return;
      namen = rest;
    }
    var alt = btn.textContent;
    btn.disabled = true; btn.textContent = "Codes werden erzeugt …";
    post("anlegen", { klasse: klasse, anzahl: namen.length }).then(function (d) {
      d.neu.forEach(function (n, i) { NAMEN[n.code] = namen[i].slice(0, 40); });
      namenSichern();
      KLASSE = d.neu[0].klasse; merken("lf-klasse", KLASSE);
      return klassenLaden().then(function () {
        if (fertig) fertig();
        zeichnen();
        hinweis(d.neu.length + (d.neu.length === 1 ? " Code" : " Codes") + " für Klasse " + KLASSE + " erzeugt: " + d.neu.map(function (n) { return NAMEN[n.code] + " " + n.code; }).join(", ") +
          ".", "ok");
      });
    }).catch(function (e) {
      hinweis("Das hat nicht geklappt: " + e.message, "bad");
      btn.disabled = false; btn.textContent = alt;
    });
  }

  function umbenennen(code) {
    var name = global.prompt("Name für Code " + code + " (nur für dich sichtbar):", nameVon(code));
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
      delete NAMEN[code];
      namenSichern();
      return klassenLaden().then(function () { zeichnen(); hinweis("Code " + code + " ist gelöscht.", "ok"); });
    }).catch(function (e) { hinweis("Das hat nicht geklappt: " + e.message, "bad"); });
  }

  function klasseUmbenennen() {
    var neu = global.prompt("Neuer Name für Klasse " + KLASSE + " (z. B. 9aM, 7b, 8c):", nurZug(KLASSE) ? "" : KLASSE);
    if (neu === null) return;
    var k = klasseNorm(neu);
    if (!k) { hinweis("„" + neu + "“ ist kein gültiger Klassenname. Beispiele: 7aM, 7b, 8c, 9d.", "bad"); return; }
    if (k === KLASSE) return;
    if (zugBuchstabe(k) !== zugBuchstabe(KLASSE) || stufeVon(k) !== stufeVon(KLASSE)) {
      if (!global.confirm("Achtung: " + KLASSE + " (" + stufeVon(KLASSE) + ", " + zugText(KLASSE) + ") wird zu " + k + " (" + stufeVon(k) + ", " + zugText(k) + "). Die Kinder sehen dann andere Fächer und Proben. Trotzdem umbenennen?")) return;
    }
    post("umbenennen", { von: KLASSE, nach: k }).then(function (d) {
      var alt = KLASSE;
      KLASSE = k; merken("lf-klasse", KLASSE);
      return klassenLaden().then(function () { zeichnen(); hinweis("Klasse " + alt + " heißt jetzt " + k + " (" + d.anzahl + " Codes). Die Codes bleiben gleich.", "ok"); });
    }).catch(function (e) { hinweis("Das hat nicht geklappt: " + e.message, "bad"); });
  }

  function klasseLoeschen() {
    var n = codesDerKlasse(KLASSE).length;
    var antwort = global.prompt("Ganze Klasse " + KLASSE + " löschen? Alle " + n + " Codes und der gesamte Lernstand gehen verloren. Das lässt sich nicht rückgängig machen.\n\nZum Bestätigen den Klassennamen eintippen:", "");
    if (antwort === null) return;
    if (klasseNorm(antwort) !== KLASSE) { hinweis("Nicht gelöscht: Der eingetippte Name passt nicht zu " + KLASSE + ".", "warn"); return; }
    var alt = KLASSE;
    post("loeschen", { klasse: KLASSE }).then(function (d) {
      codesDerKlasse(alt).forEach(function (k) { delete NAMEN[k.code]; });
      namenSichern();
      KLASSE = "";
      return klassenLaden().then(function () { zeichnen(); hinweis("Klasse " + alt + " ist gelöscht (" + d.anzahl + " Codes).", "ok"); });
    }).catch(function (e) { hinweis("Das hat nicht geklappt: " + e.message, "bad"); });
  }

  /* ---------- Neue Klasse ---------- */
  function neueKlasseZeichnen(el) {
    el.innerHTML = '<div class="vw-kl-kopf"><h2>Neue Klasse anlegen</h2><span class="vw-badge">Codes für alle Fächer</span></div>' +
      '<div class="vw-schritt"><h3>1. Klassenliste laden</h3><p class="sub">CSV-Export aus dem Schulmanager (z. B. „Schüler in der 7aM.csv“). Gelesen werden nur Vornamen und die Klasse. Du kannst die Vornamen auch von Hand eintragen.</p>' +
      namensFeld("nk") + "</div>" +
      '<div class="vw-schritt"><h3>2. Klasse prüfen</h3><label class="vw-feld">Klassenname<input type="text" id="nk-klasse" placeholder="z. B. 7aM, 7b, 8c, 9d" autocomplete="off" spellcheck="false"></label>' +
      '<p class="vw-zug" id="nk-zug"></p></div>' +
      '<div class="vw-schritt"><h3>3. Codes erzeugen</h3><p class="sub">Jedes Kind bekommt einen eigenen 3-stelligen Code. Er gilt in allen Fächern, auch für die Lernmodule mit Fortschrittsanzeige.</p>' +
      '<div class="btn-row" style="margin-top:.3rem"><button class="btn" id="nk-los" type="button">Klasse anlegen und Codes erzeugen</button></div></div>' +
      datenschutzHinweis();
    var feld = $("nk-klasse");
    function zugZeigen() {
      var k = klasseNorm(feld.value), z = $("nk-zug");
      if (!feld.value.trim()) { z.className = "vw-zug"; z.textContent = ""; return; }
      if (!k) { z.className = "vw-zug bad"; z.textContent = "Kein gültiger Klassenname. Beispiele: 7aM (M-Zug), 7b, 8c, 9d (R-Klassen)."; return; }
      var faecher = klassenKurse(k).map(function (x) { return x.fachName; });
      var schon = KLASSEN.some(function (x) { return x.klasse === k; });
      z.className = "vw-zug";
      z.textContent = "Klasse " + k + ": Jahrgangsstufe " + stufeVon(k) + ", " + zugText(k) + ". Lernfortschritt in: " + (faecher.length ? faecher.join(", ") : "– (für diese Stufe gibt es noch keine Lernmodule)") +
        (schon ? ". Die Klasse gibt es schon – die Codes kommen dazu." : ".");
    }
    feld.addEventListener("input", zugZeigen);
    listenKnopf("nk", function (erg) { if (erg.klasse) { feld.value = erg.klasse; zugZeigen(); } });
    $("nk-los").addEventListener("click", function () {
      var k = klasseNorm(feld.value);
      if (!k) { hinweis("Bitte einen gültigen Klassennamen eintragen, z. B. 7aM, 7b, 8c oder 9d.", "bad"); feld.focus(); return; }
      anlegen(k, $("nk-namen"), $("nk-los"), function () { ANSICHT = "codes"; merken("lf-ansicht", "codes"); });
    });
  }

  /* ---------- Druck, Dateien, Klassenliste ---------- */
  function drucken(klasse, liste) {
    var d = $("lf-druck");
    if (!d) { d = doc.createElement("div"); d.id = "lf-druck"; doc.body.appendChild(d); }
    d.innerHTML = liste.map(function (k) {
      return '<div class="lf-zettel"><div class="lf-z-info"><small>Klasse ' + esc(klasse) + " · GRUMI-Lernplattform</small><b>" + esc(k.name || "") + "</b>" +
        '<div class="lf-z-code">' + esc(k.code) + "</div><small>Dein Code für die Lernmodule (NT, Deutsch, Englisch, Informatik). " +
        'Gib ihn nicht weiter.</small></div><div class="lf-z-qr"><img src="' + esc(GRUMI_QR) + '" alt="QR-Code zur GRUMI-Lernplattform"><small>' + esc(GRUMI_URL.replace(/^https?:\/\//, "")) + "</small></div></div>";
    }).join("");
    var starten = function () {
      doc.body.classList.add("lf-drucken");
      var weg = function () { doc.body.classList.remove("lf-drucken"); global.removeEventListener("afterprint", weg); };
      global.addEventListener("afterprint", weg);
      global.print();
      setTimeout(weg, 1000);
    };
    var bilder = Array.prototype.slice.call(d.querySelectorAll("img")), offen = bilder.filter(function (img) { return !img.complete; }).length;
    if (!offen) { starten(); return; }
    var fertig = false;
    var eins = function () { if (--offen <= 0 && !fertig) { fertig = true; starten(); } };
    bilder.forEach(function (img) {
      if (img.complete) return;
      img.addEventListener("load", eins, { once: true });
      img.addEventListener("error", eins, { once: true });
    });
    setTimeout(function () { if (!fertig) { fertig = true; starten(); } }, 1000);
  }

  function datei(zeilen, dateiname) {
    var text = "﻿" + zeilen.map(function (z) {
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
    CODES.forEach(function (s) { klasseVon[s.code] = s.klasse; });
    var zeilen = [["Code", "Klasse", "Name"]];
    Object.keys(NAMEN).sort(function (a, b) { return (klasseVon[a] || "").localeCompare(klasseVon[b] || "") || NAMEN[a].localeCompare(NAMEN[b], "de"); })
      .forEach(function (c) { zeilen.push([c, klasseVon[c] || "", NAMEN[c]]); });
    datei(zeilen, "namensliste-" + new Date().toISOString().slice(0, 10) + ".csv");
    hinweis("Namensliste gespeichert. Bewahre die Datei sicher auf: Sie verbindet Codes und Namen.", "ok");
  }

  // Text einer Datei lesen: zuerst UTF-8, bei kaputten Umlauten noch einmal als Windows-1252 (ältere Excel-Exporte)
  function alsText(f, weiter) {
    var r = new FileReader();
    r.onload = function () {
      var t = String(r.result);
      if (t.indexOf("�") < 0) { weiter(t); return; }
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

  // Klassenliste -> { namen: [Vornamen], klasse: "7aM" | "" }. Gelesen werden nur Vorname, Nachname
  // (für den Anfangsbuchstaben bei gleichen Vornamen), Klasse und Ausbildungsrichtung.
  function klassenliste(text, dateiname) {
    text = text.replace(/^﻿/, "");
    var erste = text.split(/\r?\n/)[0] || "";
    var trenner = [";", "\t", ","].sort(function (a, b) { return erste.split(b).length - erste.split(a).length; })[0];
    var zeilen = csvZeilen(text, trenner);
    if (!zeilen.length) return { namen: [], klasse: "" };
    var kopf = zeilen[0].map(function (x) { return x.trim().toLowerCase(); });
    var iVor = kopf.indexOf("vorname");
    if (iVor < 0) iVor = kopf.indexOf("rufname");
    var iNach = kopf.indexOf("nachname"), iRicht = kopf.indexOf("ausbildungsrichtung"), iKl = kopf.indexOf("klasse");
    var leute = [], klassen = {};
    if (iVor >= 0) {
      zeilen.slice(1).forEach(function (z) {
        var v = String(z[iVor] || "").replace(/\s+/g, " ").trim();
        if (!v) return;
        leute.push({ vor: v, nach: iNach >= 0 ? String(z[iNach] || "").trim() : "", richtung: iRicht >= 0 ? String(z[iRicht] || "") : "" });
        if (iKl >= 0) { var k = klasseNorm(z[iKl]); if (k) klassen[k] = (klassen[k] || 0) + 1; }
      });
    } else {
      // einfache Liste: ein Name pro Zeile (erste Spalte)
      zeilen.forEach(function (z) { var v = String(z[0] || "").replace(/\s+/g, " ").trim(); if (v && !/^\d+$/.test(v) && !/^(name|vorname)$/i.test(v)) leute.push({ vor: v, nach: "", richtung: "" }); });
    }
    var anzahl = {};
    leute.forEach(function (p) { var k = p.vor.toLowerCase(); anzahl[k] = (anzahl[k] || 0) + 1; });
    var namen = leute.map(function (p) { return (anzahl[p.vor.toLowerCase()] > 1 && p.nach ? p.vor + " " + p.nach.charAt(0) + "." : p.vor).slice(0, 40); });
    // Klasse: Spalte „Klasse“ (häufigster Wert), sonst aus dem Dateinamen („Schüler in der 7aM.csv“)
    var klasse = Object.keys(klassen).sort(function (a, b) { return klassen[b] - klassen[a]; })[0] || "";
    if (!klasse) {
      var m = /(?:^|[^0-9])(5|6|7|8|9|10)\s*([a-z])\s*([mr])?(?![a-zäöüß])/i.exec(String(dateiname || "").replace(/\.[a-z]+$/i, ""));
      if (m) klasse = klasseNorm(m[1] + m[2] + (m[3] || ""));
    }
    // Ausbildungsrichtung „M-Zug“: Klasse ohne „M“ ergänzen
    if (klasse && !/M$/.test(klasse) && /m-?zug/i.test(leute.map(function (p) { return p.richtung; }).join(" "))) klasse = klasseNorm(klasse + "M");
    return { namen: namen, klasse: klasse };
  }

  function namenImport(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    alsText(f, function (text) {
      e.target.value = "";
      if (/(^|[;,\t"])vorname([;,\t"]|$)/i.test(text.split(/\r?\n/)[0] || "")) { hinweis("Das ist eine Klassenliste, keine gespeicherte Namensliste. Lade sie unter „Weitere Kinder hinzufügen“ oder „Neue Klasse“.", "warn"); return; }
      namenAusText(text);
    });
  }

  function namenAusText(text) {
    var n = 0;
    text.replace(/^﻿/, "").split(/\r?\n/).forEach(function (zeile) {
      var t = zeile.split(/[;,\t]/).map(function (x) { return x.trim().replace(/^"|"$/g, ""); });
      if (!/^\d{3}$/.test(t[0])) return;
      var name = (t.length >= 3 ? t[2] : t[1] || "").slice(0, 40);
      if (name) { NAMEN[t[0]] = name; n++; }
    });
    namenSichern();
    zeichnen();
    hinweis(n ? n + " Namen geladen." : "In der Datei wurden keine Zeilen der Form „Code;Klasse;Name“ gefunden.", n ? "ok" : "bad");
  }

  global.Verwaltung = {
    // container: Element für die Ansicht; pw: Lehrerpasswort; apiBase: Server; proben: window.Proben
    zeigen: function (container, pw, apiBase, proben) {
      stil();
      box = container; PW = pw; API = apiBase || ""; PROBEN = proben || null;
      rahmen();
      // Automatischer Namensabgleich nach jeder Lehrkraft-Anmeldung, auch auf einem leeren Gerät.
      var S = global.NamenSync, namen = Promise.resolve();
      if (S) {
        if (!namenHoerer) { namenHoerer = true; S.wennGeaendert(function () { namenLesen(); if (box && KLASSEN.length) zeichnen(); }); }
        namen = S.start(API, PW).then(namenLesen, function () {});
      }
      return Promise.all([klassenLaden(), namen]).then(zeichnen).catch(function () {});
    }
  };
})(window);
