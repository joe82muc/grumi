/* Deutsch 7, 8 und 9 · Grammatik und Rechtschreibung: Baukasten für Themenseiten im Aufbau der NT-7-Module
 * (Aussehen: css/deutsch.css + css/grammatik.css).
 * Die Seite lädt js/lernstand.js und dieses Skript und ruft Grammatik.seite({...}) mit ihren Inhalten auf:
 *   { nr, titel, lead, ziele: [..], merk: [{ t, html }], fallen: [..], basis: [Aufgabe], plus: [Aufgabe] }
 * Vorgaben je Ordner (Grammatik.vorgaben, z. B. in themen.js): kurs, bereich, bnr, prefix (Lernstand-Modul = prefix + NN),
 *   themen [[Datei, Titel] …], fach („Deutsch 7“), fachHref, indexHref, kurzPrefix, ki. Ohne Vorgaben gilt Deutsch 9 Grammatik.
 * Einzelseiten außerhalb der Reihe: extra: true, modul: "d9-…", basisName/plusName für eigene Abschnittsnamen.
 * Aufgabe: { typ, t (Auftrag), info?, tipp?, quali?, ... }
 *   wahl      items: [{ f?, s?, o: [..], a: Index, e? (Erklärung bei Fehler) }], mischen?
 *   luecke    items: ["Text mit [[Antwort|auch richtig]] und {{richtig|falsch|falsch}}"]
 *   markieren items: ["Text mit [markiert] oder [b:mit Stift b]"], stifte?: [["b", "Subjekt"], …]
 *   zuordnen  gruppen: [..], karten: [["Wort", Gruppenindex], …]
 *   komma     items: ["Richtiger Satz, mit allen Kommas."]
 *   trennen   items: ["Am Montag | fährt | die Klasse | nach München."]   Satzglieder abtrennen (Umstellprobe)
 *   analyse   saetze: [[["Am Montag", "Z"], ["fährt", "P"], …]], rollen?: ["S", "P", …], ziel?: 5   Satz-Detektiv
 *   umformen  items: [{ s?, f?, l: [Lösungen] }]        weicht die Antwort ab, prüft die KI (nur mit Code)
 *   frei      items: [{ f, kriterien: [..], muster?: "RegExp", bsp }]   KI prüft, ohne Server das Muster
 *   bauen     items: [{ f?, teile: [in richtiger Reihenfolge], l?: [weitere richtige Sätze] }]
 * Jede Aufgabe ist eine Karte (Lernstand-Kennung <modul>-b1 … bzw. -p1 …). Plus-Aufgaben gehören für den
 * M-Zug dazu, für R-Klassen sind sie freiwillig. „Lösung zeigen“ zählt nie.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var SKRIPT = doc.currentScript && doc.currentScript.src;
  var WURZEL = SKRIPT ? new URL("../", SKRIPT).href : "../../../";
  var THEMEN = [
    ["sb_01.html", "Wortarten"], ["sb_02.html", "Satzglieder"], ["sb_03.html", "Haupt- und Nebensatz"],
    ["sb_04.html", "Satzreihe und Satzgefüge"], ["sb_05.html", "Aktiv und Passiv"], ["sb_06.html", "Direkte und indirekte Rede"],
    ["sb_07.html", "Zeitformen"], ["sb_08.html", "Konjunktiv I und II"], ["sb_09.html", "Satzbau und Stil"], ["sb_10.html", "Kommasetzung"]
  ];
  var V = { kurs: "d9", bereich: "Grammatik", bnr: 3, prefix: "d9-sb-", themen: THEMEN, fach: "Deutsch 9", fachHref: "../index.html",
    indexHref: "index.html", indexName: "Alle Themen", themaWort: "Thema", kurzPrefix: "G", ki: true };
  function vorgaben(v) { Object.keys(v || {}).forEach(function (k) { V[k] = v[k]; }); }
  var TYPEN = { wahl: "Ankreuzen", luecke: "Lückentext", markieren: "Markieren", zuordnen: "Zuordnen", komma: "Kommas setzen",
    trennen: "Umstellprobe", analyse: "Satz-Detektiv", umformen: "Umformen", frei: "Selbst schreiben", bauen: "Satzbau" };
  var KI_API = (global.location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com") + "/api/d9-grammatik/pruefen";
  var WORT = /[A-Za-zÄÖÜäöüß0-9]+(?:[-'’][A-Za-zÄÖÜäöüß0-9]+)*/;

  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  // **fett markiert** und __unterstrichen__ in Aufgabentexten
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<mark>$1</mark>").replace(/__(.+?)__/g, "<u>$1</u>").replace(/~~(.+?)~~/g, "<s>$1</s>"); }
  function ohneFmt(s) { return String(s || "").replace(/\*\*|__|~~/g, ""); }
  function mischen(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Vergleich ohne Groß/klein, Satzzeichen und Anführungszeichen
  function gleich(s) {
    return String(s || "").toLowerCase().replace(/ß/g, "ss").replace(/[„“”"»«‚‘’'`]/g, "")
      .replace(/[.,!?;:()–—-]/g, " ").replace(/\s+/g, " ").trim();
  }
  function lies(k) { try { return global.localStorage.getItem(k); } catch (_e) { return null; } }
  function schreib(k, v) { try { global.localStorage.setItem(k, v); } catch (_e) {} }
  function kennung() {
    try { var s = JSON.parse(lies("grumi-code-anmeldung") || "null"); return s && s.code && s.kennung ? s : null; } catch (_e) { return null; }
  }
  var reduziert = global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var CFG, MODUL, KEY, geloest = {}, karten = [];

  /* ---------- Kopfteil jedes Items (Nummer, Frage, Satz) ---------- */
  function kopf(it, i, n) {
    var nr = '<span class="marke">' + (n > 1 ? (i + 1) + "." : "") + "</span>";
    if (it.f) return '<div class="frage">' + nr + fmt(it.f) + "</div>" + (it.s ? '<div class="satz">' + fmt(it.s) + "</div>" : "");
    return it.s ? '<div class="satz">' + nr + fmt(it.s) + "</div>" : nr;
  }
  function itemStatus(el, ok) { el.classList.toggle("richtig", ok === true); el.classList.toggle("falsch", ok === false); }

  /* ---------- Ankreuzen ---------- */
  function wahl(K, box) {
    var items = K.a.items;
    function bauen() {
      box.innerHTML = items.map(function (it, i) {
        var o = it.o.map(function (t, k) { return { t: t, k: k }; });
        if (it.mischen || K.a.mischen) o = mischen(o);
        var lang = it.o.some(function (t) { return t.length > 30; });
        return '<div class="item" data-i="' + i + '">' + kopf(it, i, items.length) +
          '<div class="opts' + (lang ? " senkrecht" : "") + '">' + o.map(function (x) { return '<button type="button" class="opt" data-k="' + x.k + '">' + fmt(x.t) + "</button>"; }).join("") + "</div>" +
          (it.e ? '<div class="erkl">' + fmt(it.e) + "</div>" : "") + "</div>";
      }).join("");
      $$(".item", box).forEach(function (el) {
        $$(".opt", el).forEach(function (b) {
          b.addEventListener("click", function () {
            $$(".opt", el).forEach(function (x) { x.classList.toggle("gewaehlt", x === b); });
            itemStatus(el, null); K.leise();
          });
        });
      });
    }
    bauen();
    return {
      pruefen: function () {
        var ok = 0, leer = 0;
        $$(".item", box).forEach(function (el, i) {
          var sel = $(".opt.gewaehlt", el);
          if (!sel) { leer++; itemStatus(el, null); return; }
          var r = +sel.dataset.k === items[i].a; if (r) ok++;
          itemStatus(el, r);
        });
        return { ok: ok, von: items.length, offen: leer === items.length ? leer : 0, fehlt: leer, einheit: items.length > 1 ? "Fragen" : "" };
      },
      loesung: function () {
        $$(".item", box).forEach(function (el, i) {
          $$(".opt", el).forEach(function (x) { x.classList.toggle("gewaehlt", +x.dataset.k === items[i].a); });
          itemStatus(el, true);
        });
      },
      neu: bauen
    };
  }

  /* ---------- Lückentext: [[getippt]] und {{Auswahl|…}} ---------- */
  function luecke(K, box) {
    var items = K.a.items, loesungen = [];
    function bauen() {
      loesungen = [];
      box.innerHTML = items.map(function (text, i) {
        var teile = String(text).split(/(\[\[.*?\]\]|\{\{.*?\}\})/);
        var h = teile.map(function (t) {
          var m = /^\[\[(.*)\]\]$/.exec(t), w = /^\{\{(.*)\}\}$/.exec(t);
          if (m) {
            var ant = m[1].split("|"), breite = Math.max(5, Math.max.apply(null, ant.map(function (a) { return a.length; })) + 2);
            loesungen.push(ant);
            return '<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" data-g="' + (loesungen.length - 1) + '" style="width:' + Math.min(breite, 28) + 'ch" aria-label="Lücke ' + loesungen.length + '">';
          }
          if (w) {
            var opt = w[1].split("|");
            loesungen.push([opt[0]]);
            return '<select data-g="' + (loesungen.length - 1) + '" aria-label="Lücke ' + loesungen.length + '"><option value="">…</option>' +
              mischen(opt).map(function (o) { return '<option value="' + esc(o) + '">' + esc(o) + "</option>"; }).join("") + "</select>";
          }
          return fmt(t);
        }).join("");
        return '<div class="item"><div class="luecke-satz">' + '<span class="marke">' + (items.length > 1 ? (i + 1) + "." : "") + "</span>" + h + "</div></div>";
      }).join("");
      $$("input,select", box).forEach(function (f) {
        f.addEventListener(f.tagName === "SELECT" ? "change" : "input", function () { f.classList.remove("r", "f"); itemStatus(f.closest(".item"), null); K.leise(); });
        if (f.tagName === "INPUT") f.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); K.pruefen(); } });
      });
    }
    bauen();
    return {
      pruefen: function () {
        var ok = 0, leer = 0, von = 0;
        $$(".item", box).forEach(function (el) {
          var alle = true;
          $$("input,select", el).forEach(function (f) {
            von++;
            var v = f.value.trim();
            if (!v) { leer++; alle = false; f.classList.remove("r", "f"); return; }
            var r = loesungen[+f.dataset.g].some(function (a) { return gleich(a) === gleich(v); });
            f.classList.toggle("r", r); f.classList.toggle("f", !r);
            if (r) ok++; else alle = false;
          });
          itemStatus(el, alle);
        });
        return { ok: ok, von: von, offen: leer === von ? leer : 0, fehlt: leer, einheit: "Lücken" };
      },
      loesung: function () {
        $$("input,select", box).forEach(function (f) { f.value = loesungen[+f.dataset.g][0]; f.classList.add("r"); f.classList.remove("f"); });
        $$(".item", box).forEach(function (el) { itemStatus(el, true); });
      },
      neu: bauen
    };
  }

  /* ---------- Markieren (antippen oder mit dem Finger über die Wörter ziehen) ---------- */
  function markieren(K, box) {
    var stifte = K.a.stifte || [["y", K.a.stiftName || "Markieren"]], stift = stifte[0][0];
    var items = K.a.items.map(function (text) {
      var woerter = [], re = /\[(?:([a-z]):)?([^\]]+)\]|([^[]+)/g, m;
      while ((m = re.exec(text))) {
        var l = m[2] !== undefined ? (m[1] || stifte[0][0]) : "", t = m[2] !== undefined ? m[2] : m[3];
        t.split(new RegExp("(" + WORT.source + ")")).forEach(function (s, j) { if (s) woerter.push({ t: s, wort: j % 2 === 1, l: l }); });
      }
      return woerter;
    });
    var malt = null;
    function setzen(w, k) { w.dataset.m = k; w.className = "wort" + (k ? " m-" + k : ""); }
    function bauen() {
      box.innerHTML = (stifte.length > 1 || K.a.radierer !== false ? '<div class="stifte" role="radiogroup" aria-label="Farbe wählen">' +
        stifte.map(function (s) { return '<button type="button" class="stift ' + s[0] + '" data-k="' + s[0] + '" role="radio"><i></i>' + esc(s[1]) + "</button>"; }).join("") +
        '<button type="button" class="stift weg" data-k="" role="radio"><i></i>Radierer</button></div>' : "") +
        items.map(function (w, i) {
          return '<div class="item"><div class="mk-satz"><span class="marke">' + (items.length > 1 ? (i + 1) + "." : "") + "</span>" +
            w.map(function (x, j) { return x.wort ? '<button type="button" class="wort" data-i="' + i + '" data-j="' + j + '">' + esc(x.t) + "</button>" : esc(x.t); }).join("") + "</div></div>";
        }).join("");
      function stiftWaehlen(k) { stift = k; $$(".stift", box).forEach(function (s) { var an = s.dataset.k === k; s.classList.toggle("an", an); s.setAttribute("aria-checked", an); }); }
      stiftWaehlen(stifte[0][0]);
      $$(".stift", box).forEach(function (s) { s.addEventListener("click", function () { stiftWaehlen(s.dataset.k); }); });
      $$(".wort", box).forEach(function (w) {
        w.addEventListener("pointerdown", function (e) {
          if (e.button) return;
          malt = (w.dataset.m || "") === stift ? "" : stift;
          setzen(w, malt); aufraeumen(w);
          e.preventDefault();
        });
        // Tastatur: Enter/Leertaste lösen nur ein click aus (detail 0)
        w.addEventListener("click", function (e) { if (e.detail === 0) { setzen(w, (w.dataset.m || "") === stift ? "" : stift); aufraeumen(w); } });
      });
    }
    function aufraeumen(w) { $$(".wort", box).forEach(function (x) { x.classList.remove("x"); }); itemStatus(w.closest(".item"), null); K.leise(); }
    function ziehen(e) {
      if (malt === null) return;
      var el = doc.elementFromPoint(e.clientX, e.clientY);
      if (el && el.classList.contains("wort") && box.contains(el) && (el.dataset.m || "") !== malt) { setzen(el, malt); aufraeumen(el); }
    }
    doc.addEventListener("pointermove", ziehen);
    doc.addEventListener("pointerup", function () { malt = null; });
    doc.addEventListener("pointercancel", function () { malt = null; });
    bauen();
    return {
      pruefen: function () {
        var ok = 0, irgendwas = $$(".wort", box).some(function (w) { return w.dataset.m; });
        $$(".item", box).forEach(function (el, i) {
          var alle = true;
          $$(".wort", el).forEach(function (w) {
            var r = (w.dataset.m || "") === items[i][+w.dataset.j].l;
            w.classList.toggle("x", !r);
            if (!r) alle = false;
          });
          if (alle) ok++;
          itemStatus(el, alle);
        });
        return { ok: ok, von: items.length, offen: irgendwas ? 0 : items.length, einheit: items.length > 1 ? "Sätzen" : "" };
      },
      loesung: function () {
        $$(".wort", box).forEach(function (w) { setzen(w, items[+w.dataset.i][+w.dataset.j].l); });
        $$(".item", box).forEach(function (el) { itemStatus(el, true); });
      },
      neu: bauen
    };
  }

  /* ---------- Zuordnen (antippen, dann Gruppe antippen; am Rechner auch ziehen) ---------- */
  function zuordnen(K, box) {
    var gew = null, karte = [];
    function ziele(an) { $$(".gruppe", box).forEach(function (g) { g.classList.toggle("ziel", an); }); }
    function legen(k, g) {
      k.classList.remove("gewaehlt", "r", "f");
      $(".rein", g).appendChild(k); gew = null; ziele(false); K.leise();
    }
    function bauen() {
      box.innerHTML = '<div class="zo-pool" aria-label="Karten"></div><div class="zo-gruppen">' +
        K.a.gruppen.map(function (g, i) { return '<div class="gruppe" data-g="' + i + '"><h4>' + fmt(g) + '</h4><div class="rein"></div></div>'; }).join("") + "</div>";
      var pool = $(".zo-pool", box);
      karte = mischen(K.a.karten).map(function (c) {
        var b = doc.createElement("button"); b.type = "button"; b.className = "karte"; b.textContent = c[0]; b.dataset.g = c[1]; b.draggable = true;
        pool.appendChild(b); return b;
      });
      karte.forEach(function (k) {
        k.addEventListener("click", function (e) {
          e.stopPropagation();
          if (gew === k) { k.classList.remove("gewaehlt"); gew = null; ziele(false); return; }
          if (k.parentElement !== pool && !gew) { pool.appendChild(k); k.classList.remove("r", "f"); K.leise(); return; }
          if (gew) gew.classList.remove("gewaehlt");
          gew = k; k.classList.add("gewaehlt"); ziele(true);
        });
        k.addEventListener("dragstart", function (e) { gew = k; e.dataTransfer.setData("text/plain", ""); ziele(true); });
        k.addEventListener("dragend", function () { ziele(false); });
      });
      $$(".gruppe", box).forEach(function (g) {
        g.addEventListener("click", function () { if (gew) legen(gew, g); });
        g.addEventListener("dragover", function (e) { e.preventDefault(); });
        g.addEventListener("drop", function (e) { e.preventDefault(); if (gew) legen(gew, g); });
      });
      pool.addEventListener("dragover", function (e) { e.preventDefault(); });
      pool.addEventListener("drop", function (e) { e.preventDefault(); if (gew) { pool.appendChild(gew); gew.classList.remove("gewaehlt"); gew = null; ziele(false); } });
    }
    bauen();
    return {
      pruefen: function () {
        var ok = 0, offen = 0;
        karte.forEach(function (k) {
          var g = k.closest(".gruppe");
          k.classList.remove("r", "f");
          if (!g) { offen++; return; }
          var r = g.dataset.g === String(k.dataset.g); k.classList.add(r ? "r" : "f"); if (r) ok++;
        });
        return { ok: ok, von: karte.length, offen: offen === karte.length ? offen : 0, fehlt: offen, einheit: "Karten" };
      },
      loesung: function () {
        karte.forEach(function (k) { $('.gruppe[data-g="' + k.dataset.g + '"] .rein', box).appendChild(k); k.classList.remove("gewaehlt", "f"); k.classList.add("r"); });
      },
      neu: bauen
    };
  }

  /* ---------- Kommas setzen / Satzglieder abtrennen: zwischen den Wörtern antippen ---------- */
  function slotsVon(satz, trennen) {
    var out = [];
    String(satz).split(/\s+/).filter(Boolean).forEach(function (x) {
      if (trennen && x === "|") { if (out.length) out[out.length - 1].k = true; return; }
      out.push({ t: trennen ? x : x.replace(/,$/, ""), k: !trennen && /,$/.test(x) });
    });
    if (out.length) out[out.length - 1].k = false;
    return out;
  }
  function slotsHtml(w, i, trennen) {
    return w.map(function (x, j) {
      return esc(x.t) + (j < w.length - 1 ? '<button type="button" class="slot' + (trennen ? " trenn" : "") + '" data-i="' + i + '" data-j="' + j + '" aria-label="' +
        (trennen ? "Trennstrich" : "Komma") + " nach " + esc(x.t) + '" aria-pressed="false"></button> ' : "");
    }).join("");
  }
  function komma(K, box) {
    var trennen = K.a.typ === "trennen";
    var items = K.a.items.map(function (satz) { return slotsVon(satz, trennen); });
    function bauen() {
      box.innerHTML = items.map(function (w, i) {
        return '<div class="item"><div class="km-satz"><span class="marke">' + (items.length > 1 ? (i + 1) + "." : "") + "</span>" + slotsHtml(w, i, trennen) + "</div></div>";
      }).join("");
      $$(".slot", box).forEach(function (s) {
        s.addEventListener("click", function () {
          var an = !s.classList.contains("an");
          s.classList.toggle("an", an); s.setAttribute("aria-pressed", an);
          $$(".slot", box).forEach(function (x) { x.classList.remove("r", "f"); });
          itemStatus(s.closest(".item"), null); K.leise();
        });
      });
    }
    bauen();
    return {
      pruefen: function () {
        var ok = 0, gesetzt = $$(".slot.an", box).length;
        $$(".item", box).forEach(function (el, i) {
          var alle = true;
          $$(".slot", el).forEach(function (s) {
            var soll = items[i][+s.dataset.j].k, ist = s.classList.contains("an");
            s.classList.remove("r", "f");
            if (soll !== ist) { s.classList.add("f"); alle = false; } else if (ist) s.classList.add("r");
          });
          if (alle) ok++;
          itemStatus(el, alle);
        });
        return { ok: ok, von: items.length, offen: gesetzt ? 0 : items.length, einheit: items.length > 1 ? "Sätzen" : "" };
      },
      loesung: function () {
        $$(".slot", box).forEach(function (s) { var an = items[+s.dataset.i][+s.dataset.j].k; s.classList.toggle("an", an); s.classList.remove("f"); s.classList.toggle("r", an); });
        $$(".item", box).forEach(function (el) { itemStatus(el, true); });
      },
      neu: bauen
    };
  }

  /* ---------- Satz-Detektiv: erst Satzglieder abtrennen, dann benennen – Satz für Satz ---------- */
  var ROLLEN = { S: ["Subjekt", "Wer oder was …?"], P: ["Prädikat", "Was tut jemand? Was geschieht?"], AO: ["Akkusativobjekt", "Wen oder was …?"],
    DO: ["Dativobjekt", "Wem …?"], GO: ["Genitivobjekt", "Wessen …?"], PO: ["Präpositionalobjekt", "Auf wen? Worüber? Woran? Wofür? …"],
    Z: ["Adverbiale der Zeit", "Wann? Wie lange? Wie oft?"], O: ["Adverbiale des Ortes", "Wo? Wohin? Woher?"],
    A: ["Adverbiale der Art und Weise", "Wie? Auf welche Weise? Womit?"], G: ["Adverbiale des Grundes", "Warum? Weshalb?"] };
  function analyse(K, box) {
    var a = K.a, ziel = a.ziel || 5, rollen = a.rollen || ["S", "P", "AO", "DO", "Z", "O", "A", "G"];
    var stapel = [], satz = null, w = [], schritt = 1, hilfe = false, geschafft = 0, meldung = null;
    function naechster() {
      if (!stapel.length) stapel = mischen(a.saetze.map(function (_, i) { return i; }));
      satz = a.saetze[stapel.pop()]; schritt = 1; hilfe = false; meldung = null;
      w = []; satz.forEach(function (sg, gi) { sg[0].split(/\s+/).forEach(function (t) { w.push({ t: t, g: gi }); }); });
      zeichnen();
    }
    function zeichnen() {
      var h = '<div class="sd-kopf"><span class="sd-stand">🔎 Geschafft: <b>' + geschafft + "</b> von " + ziel + " Sätzen</span>" +
        '<span class="sd-schritte"><span class="' + (schritt === 1 ? "an" : "ok") + '">1 Abtrennen</span><span class="' + (schritt === 2 ? "an" : "") + '">2 Benennen</span></span></div>';
      if (schritt === 1) {
        h += '<p class="sd-auftrag"><b>Umstellprobe:</b> Was bleibt beim Umstellen zusammen? Tippe zwischen die Wörter, wo ein Satzglied endet.</p>' +
          '<div class="km-satz sd-satz">' + w.map(function (x, j) {
            return esc(x.t) + (j < w.length - 1 ? '<button type="button" class="slot trenn" data-j="' + j + '" aria-label="Trennstrich nach ' + esc(x.t) + '" aria-pressed="false"></button> ' : "");
          }).join("") + "</div>";
      } else {
        h += '<p class="sd-auftrag"><b>Benennen:</b> Stell zu jedem Satzglied die Frage mit dem Prädikat und wähle den Namen.</p><div class="sd-glieder">' +
          satz.map(function (sg, gi) {
            return '<label class="sd-glied" data-g="' + gi + '"><span class="sd-text">' + esc(sg[0]) + '</span><select aria-label="Satzglied ' + esc(sg[0]) + '"><option value="">wählen …</option>' +
              rollen.map(function (r) { return '<option value="' + r + '">' + esc(ROLLEN[r][0]) + "</option>"; }).join("") + "</select></label>";
          }).join("") + "</div>" +
          '<details class="sd-fragen"><summary>Welche Frage passt?</summary><ul>' + rollen.map(function (r) { return "<li><b>" + esc(ROLLEN[r][0]) + ":</b> " + esc(ROLLEN[r][1]) + "</li>"; }).join("") + "</ul></details>";
      }
      h += '<div class="aufg-aktionen"><button type="button" class="knopf sd-pruefen">Prüfen</button><button type="button" class="knopf zweit sd-loes" hidden>Lösung zeigen</button>' +
        '<button type="button" class="knopf zweit sd-weiter" hidden>Nächster Satz →</button></div>' +
        '<div class="fb' + (meldung ? " zeigen " + meldung.art : "") + '" role="status">' + (meldung ? meldung.html : "") + "</div>";
      box.innerHTML = h;
      $$(".slot", box).forEach(function (s) {
        s.addEventListener("click", function () { var an = !s.classList.contains("an"); s.classList.toggle("an", an); s.setAttribute("aria-pressed", an); $$(".slot", box).forEach(function (x) { x.classList.remove("r", "f"); }); leise(); });
      });
      $$("select", box).forEach(function (sel) { sel.addEventListener("change", function () { sel.closest(".sd-glied").classList.remove("r", "f"); leise(); }); });
      $(".sd-pruefen", box).addEventListener("click", pruefen);
      $(".sd-loes", box).addEventListener("click", loesung);
      $(".sd-weiter", box).addEventListener("click", naechster);
    }
    function leise() { var fb = $(".fb", box); fb.className = "fb"; }
    function melden(art, html, weiter) {
      var fb = $(".fb", box); fb.className = "fb zeigen " + art; fb.innerHTML = html;
      if (weiter) { $(".sd-weiter", box).hidden = false; $(".sd-pruefen", box).hidden = true; $(".sd-loes", box).hidden = true; }
    }
    function pruefen() {
      if (schritt === 1) {
        if (!$$(".slot.an", box).length) { melden("mid", "Setze zuerst die Trennstriche."); return; }
        var falsch = 0;
        $$(".slot", box).forEach(function (s) {
          var j = +s.dataset.j, soll = w[j].g !== w[j + 1].g, ist = s.classList.contains("an");
          s.classList.remove("r", "f");
          if (soll !== ist) { s.classList.add("f"); falsch++; } else if (ist) s.classList.add("r");
        });
        if (!falsch) { schritt = 2; meldung = { art: "ok", html: "✅ Richtig abgetrennt: " + satz.length + " Satzglieder. Jetzt benennen." }; zeichnen(); return; }
        $(".sd-loes", box).hidden = false;
        melden("bad", "❌ An " + falsch + (falsch === 1 ? " Stelle" : " Stellen") + " stimmt es noch nicht. Stell den Satz im Kopf um: Welche Wörter wandern immer zusammen?");
        return;
      }
      var falschN = 0, leer = 0;
      $$(".sd-glied", box).forEach(function (el) {
        var v = $("select", el).value, soll = satz[+el.dataset.g][1];
        el.classList.remove("r", "f");
        if (!v) { leer++; return; }
        if (v === soll) el.classList.add("r"); else { el.classList.add("f"); falschN++; }
      });
      if (leer) { melden("mid", "Wähle für jedes Satzglied einen Namen."); return; }
      if (falschN) {
        $(".sd-loes", box).hidden = false;
        melden("bad", "❌ " + falschN + " noch nicht richtig. Tipp: Stell die Frage immer zusammen mit dem Prädikat, z. B. „Wem gibt …?“");
        return;
      }
      if (hilfe) { melden("mid", "✅ Stimmt – aber mit Lösung zählt der Satz nicht. Nimm den nächsten!", true); return; }
      geschafft++;
      $(".sd-stand b", box).textContent = geschafft;
      if (geschafft >= ziel && !K.istGeloest()) { K.fertig(); melden("ok", "🏆 " + ziel + " Sätze geschafft – Aufgabe gelöst! Du kannst gern weiterüben.", true); return; }
      melden("ok", "✅ Satz geschafft!" + (geschafft < ziel ? " Noch " + (ziel - geschafft) + " bis zum Ziel." : ""), true);
    }
    function loesung() {
      hilfe = true;
      if (schritt === 1) {
        $$(".slot", box).forEach(function (s) { var j = +s.dataset.j, an = w[j].g !== w[j + 1].g; s.classList.toggle("an", an); s.classList.remove("f"); s.classList.toggle("r", an); });
        melden("mid", "Hier sind die Trennstriche. Prüfe und benenne dann die Satzglieder – dieser Satz zählt aber nicht.");
      } else {
        $$(".sd-glied", box).forEach(function (el) { $("select", el).value = satz[+el.dataset.g][1]; el.classList.remove("f"); el.classList.add("r"); });
        melden("mid", "So heißen die Satzglieder. Lies sie dir genau durch – dieser Satz zählt nicht.", true);
      }
    }
    naechster();
    return {
      eigen: true,
      // Für Tests: ziel Sätze richtig lösen, wie ein Kind es tun würde
      selbsttest: function () {
        for (var n = 0; n < ziel; n++) {
          $$(".slot", box).forEach(function (s) { var j = +s.dataset.j; if ((w[j].g !== w[j + 1].g) !== s.classList.contains("an")) s.click(); });
          $(".sd-pruefen", box).click();
          $$(".sd-glied", box).forEach(function (el) { $("select", el).value = satz[+el.dataset.g][1]; });
          $(".sd-pruefen", box).click();
          $(".sd-weiter", box).click();
        }
      },
      // Alle Sätze einmal prüfen (Datenkontrolle): jedes Satzglied hat eine bekannte Rolle
      daten: function () { return a.saetze.filter(function (st) { return st.some(function (sg) { return !ROLLEN[sg[1]] || rollen.indexOf(sg[1]) < 0; }); }).map(function (st) { return st.map(function (sg) { return sg[0]; }).join(" "); }); }
    };
  }

  /* ---------- Umformen und Selbst schreiben (bei Abweichung prüft die KI) ---------- */
  var kiCache = {};
  function kiFragen(K, it, i, antwort) {
    var s = global.Lernstand && global.Lernstand.schueler;
    if (!s || !s.code) return Promise.resolve(null);
    var schl = K.id + "|" + i + "|" + gleich(antwort);
    if (kiCache[schl]) return Promise.resolve(kiCache[schl]);
    var ctl = global.AbortController ? new AbortController() : null, abbruch = setTimeout(function () { if (ctl) ctl.abort(); }, 45000);
    return fetch(KI_API, {
      method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl ? ctl.signal : undefined,
      body: JSON.stringify({ code: s.code, modul: MODUL, aufgabe: K.id + "-" + (i + 1), auftrag: ohneFmt(K.a.t) + (it.f ? " " + ohneFmt(it.f) : ""),
        satz: ohneFmt(it.s || ""), loesungen: it.l || (it.bsp ? [it.bsp] : []), kriterien: it.kriterien || [], antwort: antwort })
    }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      if (d && d.ok) { kiCache[schl] = d; return d; }
      return null;
    }).catch(function () { return null; }).then(function (d) { clearTimeout(abbruch); return d; });
  }
  function umformen(K, box) {
    var items = K.a.items, frei = K.a.typ === "frei";
    function bauen() {
      box.innerHTML = items.map(function (it, i) {
        return '<div class="item">' + kopf(it, i, items.length) +
          '<textarea class="uf-feld" rows="' + (it.zeilen || 2) + '" spellcheck="false" placeholder="' + esc(it.ph || K.a.ph || (frei ? "Dein Satz …" : "Schreibe den ganzen Satz …")) + '" aria-label="Antwort ' + (i + 1) + '"></textarea>' +
          '<div class="ki" aria-live="polite"></div><div class="loesung">' + (frei ? "So könnte es aussehen: " : "Lösung: ") + fmt((it.l && it.l[0]) || it.bsp || "") + "</div></div>";
      }).join("");
      $$(".uf-feld", box).forEach(function (f) {
        f.addEventListener("input", function () { var el = f.closest(".item"); itemStatus(el, null); $(".ki", el).textContent = ""; K.leise(); });
      });
    }
    bauen();
    return {
      pruefen: function () {
        var els = $$(".item", box), offen = 0, ok = 0, warten = [];
        els.forEach(function (el, i) {
          var it = items[i], v = $(".uf-feld", el).value.trim(), ki = $(".ki", el);
          ki.textContent = "";
          if (!v) { offen++; itemStatus(el, null); return; }
          if (it.l && it.l.some(function (x) { return gleich(x) === gleich(v); })) { ok++; itemStatus(el, true); return; }
          ki.innerHTML = '<span class="punkte">✨ Die KI liest deinen Satz</span>';
          warten.push(kiFragen(K, it, i, v).then(function (d) {
            if (d) {
              itemStatus(el, d.richtig); if (d.richtig) ok++;
              ki.textContent = "✨ " + (d.rueckmeldung || (d.richtig ? "Passt!" : "Das stimmt noch nicht."));
              return;
            }
            // ohne KI: freie Sätze nach Muster, Umformungen nur mit der Lösung
            var r = frei && it.muster ? new RegExp(it.muster, "i").test(v.replace(/\s+/g, " ")) : false;
            itemStatus(el, r); if (r) ok++;
            ki.textContent = r ? "Passt zum Auftrag (geprüft ohne KI)." :
              (frei ? "Das passt noch nicht zum Auftrag." : "Das weicht von der Lösung ab.") +
              (global.Lernstand && global.Lernstand.schueler ? " Die KI war nicht erreichbar." : " Mit deinem Code prüft auch die KI andere richtige Lösungen.");
          }));
        });
        return Promise.all(warten).then(function () { return { ok: ok, von: items.length, offen: offen === items.length ? offen : 0, fehlt: offen, einheit: items.length > 1 ? "Sätzen" : "" }; });
      },
      loesung: function () { $$(".loesung", box).forEach(function (l) { l.classList.add("zeigen"); }); },
      neu: bauen
    };
  }

  /* ---------- Satzbau: Bausteine in der richtigen Reihenfolge antippen ---------- */
  function bauenTyp(K, box) {
    var items = K.a.items;
    function bauen() {
      box.innerHTML = items.map(function (it, i) {
        var o = it.teile.map(function (t, k) { return { t: t, k: k }; }), m = mischen(o), n = 0;
        while (it.teile.length > 1 && m.every(function (x, k) { return x.k === k; }) && n++ < 9) m = mischen(o);
        return '<div class="item">' + kopf(it, i, items.length) + '<div class="bau-zeile"></div><div class="bau-pool">' +
          m.map(function (x) { return '<button type="button" class="block" data-k="' + x.k + '">' + esc(x.t) + "</button>"; }).join("") + "</div></div>";
      }).join("");
      $$(".item", box).forEach(function (el) {
        var zeile = $(".bau-zeile", el);
        $$(".bau-pool .block", el).forEach(function (b) {
          b.addEventListener("click", function () {
            if (b.classList.contains("weg")) return;
            var c = b.cloneNode(true); b.classList.add("weg");
            c.addEventListener("click", function () { c.remove(); b.classList.remove("weg"); itemStatus(el, null); K.leise(); });
            zeile.appendChild(c); itemStatus(el, null); K.leise();
          });
        });
      });
    }
    bauen();
    return {
      pruefen: function () {
        var ok = 0, offen = 0;
        $$(".item", box).forEach(function (el, i) {
          var gelegt = $$(".bau-zeile .block", el);
          if (!gelegt.length) { offen++; itemStatus(el, null); return; }
          var satz = gelegt.map(function (b) { return b.textContent; }).join(" ");
          var it = items[i], richtige = [it.teile.join(" ")].concat(it.l || []);
          var r = gelegt.length === it.teile.length && richtige.some(function (x) { return gleich(x) === gleich(satz); });
          itemStatus(el, r); if (r) ok++;
        });
        return { ok: ok, von: items.length, offen: offen === items.length ? offen : 0, fehlt: offen, einheit: items.length > 1 ? "Sätzen" : "" };
      },
      loesung: function () {
        $$(".item", box).forEach(function (el, i) {
          var zeile = $(".bau-zeile", el);
          zeile.innerHTML = items[i].teile.map(function (t) { return '<span class="block">' + esc(t) + "</span>"; }).join("");
          $$(".bau-pool .block", el).forEach(function (b) { b.classList.add("weg"); });
          itemStatus(el, true);
        });
      },
      neu: bauen
    };
  }

  var BAU = { wahl: wahl, luecke: luecke, markieren: markieren, zuordnen: zuordnen, komma: komma, trennen: komma, analyse: analyse,
    umformen: umformen, frei: umformen, bauen: bauenTyp };

  /* ---------- Karte mit Prüfen, Tipp, Lösung und Neu ---------- */
  function karteBauen(a, i, plus) {
    var kurz = (plus ? "P" : "B") + (i + 1), id = MODUL + "-" + (plus ? "p" : "b") + (i + 1);
    var el = doc.createElement("article");
    el.className = "card aufg" + (plus ? " plus" : ""); el.id = id;
    var eigen = a.typ === "analyse";
    el.innerHTML = '<div class="aufg-kopf"><span class="nr">' + kurz + '</span><div><span class="task-tag">' + esc(TYPEN[a.typ] || "Aufgabe") + "</span>" +
      (a.quali ? ' <span class="task-tag quali">wie im Quali</span>' : "") + "<h3>" + fmt(a.t) + "</h3></div></div>" +
      (a.info ? '<p class="info">' + fmt(a.info) + "</p>" : "") + '<div class="koerper"></div>' +
      (eigen ? (a.tipp ? '<div class="aufg-aktionen"><button type="button" class="knopf zweit tipp" aria-expanded="false">💡 Tipp</button></div>' : "") :
      '<div class="aufg-aktionen"><button type="button" class="knopf pruefen">Prüfen</button>' +
      (a.tipp ? '<button type="button" class="knopf zweit tipp" aria-expanded="false">💡 Tipp</button>' : "") +
      '<button type="button" class="knopf zweit loes-knopf" hidden>Lösung zeigen</button>' +
      '<button type="button" class="knopf zweit neu" title="Aufgabe neu beginnen">↺ Neu</button></div>') +
      (a.tipp ? '<div class="tippbox">💡 ' + fmt(a.tipp) + "</div>" : "") + (eigen ? "" : '<div class="fb" role="status"></div>');
    var K = { id: id, kurz: kurz, plus: plus, el: el, a: a, verraten: false, fehlversuche: 0 };
    K.istGeloest = function () { return Boolean(geloest[id]); };
    K.fertig = function () { loesen(K); };
    var tipp = $(".tipp", el);
    if (tipp) tipp.addEventListener("click", function () { var t = $(".tippbox", el), an = !t.classList.contains("zeigen"); t.classList.toggle("zeigen", an); tipp.setAttribute("aria-expanded", an); });
    if (eigen) {
      K.leise = function () {};
      K.pruefen = function () {};
      K.impl = BAU[a.typ](K, $(".koerper", el));
      karten.push(K);
      return el;
    }
    var fb = $(".fb", el), knopf = $(".pruefen", el), zeigen = $(".loes-knopf", el);
    K.leise = function () { fb.className = "fb"; };
    function melden(art, html) { fb.className = "fb zeigen " + art; fb.innerHTML = html; }
    K.pruefen = function () {
      if (knopf.disabled) return;
      knopf.disabled = true;
      Promise.resolve(K.impl.pruefen()).then(function (e) {
        knopf.disabled = false;
        if (e.offen) { melden("mid", "Bearbeite zuerst die Aufgabe, dann prüfe."); return; }
        if (e.ok === e.von) {
          if (K.verraten) { melden("mid", "✅ Stimmt – aber mit der Lösung zählt die Aufgabe noch nicht. Übe sie später noch einmal ohne Hilfe (Seite neu laden)."); return; }
          melden("ok", "✅ " + (K.a.richtig ? fmt(K.a.richtig) : "Alles richtig!"));
          loesen(K);
          return;
        }
        K.fehlversuche++;
        if (K.fehlversuche >= 1) zeigen.hidden = false;
        melden("bad", "❌ " + (e.von > 1 ? e.ok + " von " + e.von + (e.einheit ? " " + e.einheit : "") + " richtig." : "Noch nicht richtig.") +
          (e.fehlt ? " " + e.fehlt + " noch offen." : "") + " Rot markiert ist, was noch nicht stimmt." + (K.a.tipp && K.fehlversuche === 1 ? " Der Tipp hilft dir." : ""));
      }).catch(function () { knopf.disabled = false; melden("bad", "Das Prüfen hat nicht geklappt. Versuch es noch einmal."); });
    };
    knopf.addEventListener("click", K.pruefen);
    zeigen.addEventListener("click", function () {
      K.impl.loesung(); K.verraten = true;
      melden("mid", "Hier ist die Lösung. Lies sie dir genau durch. Mit der Lösung zählt die Aufgabe nicht – übe sie später noch einmal ohne Hilfe.");
    });
    $(".neu", el).addEventListener("click", function () { K.impl.neu(); K.leise(); });
    K.impl = BAU[a.typ](K, $(".koerper", el));
    karten.push(K);
    return el;
  }

  /* ---------- Gelöst, Sterne, Konfetti ---------- */
  function speichern() { schreib(KEY, JSON.stringify(geloest)); }
  function sterne() {
    var n = karten.filter(function (k) { return geloest[k.id]; }).length, s = $("#g-sterne");
    if (s) s.textContent = "⭐ " + n + " / " + karten.length;
    karten.forEach(function (k) { k.el.classList.toggle("fertig", Boolean(geloest[k.id])); });
  }
  function loesen(K) {
    var neu = !geloest[K.id];
    geloest[K.id] = 1; speichern(); sterne();
    if (global.Lernstand) global.Lernstand.geloest(K.id);
    if (neu && karten.filter(function (k) { return k.plus === K.plus; }).every(function (k) { return geloest[k.id]; })) konfetti();
  }
  function konfetti() {
    if (reduziert) return;
    var c = $("#konfetti"); if (!c) return;
    var ctx = c.getContext("2d"); c.width = global.innerWidth; c.height = global.innerHeight;
    var farben = ["#b23a48", "#dd6a2c", "#f2b632", "#1b8a4b", "#176b62"];
    var P = Array.from({ length: 130 }, function () {
      return { x: global.innerWidth / 2, y: global.innerHeight * 0.4, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 3, c: farben[Math.floor(Math.random() * 5)], a: Math.random() * 6 };
    });
    var f = 0;
    (function schritt() {
      ctx.clearRect(0, 0, c.width, c.height);
      P.forEach(function (p) { p.x += p.vx; p.y += p.vy; p.vy += 0.45; p.vx *= 0.99; p.a += 0.2; ctx.fillStyle = p.c; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
      if (++f < 140) global.requestAnimationFrame(schritt); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  /* ---------- Seite (Aufbau wie die NT-7-Module) ---------- */
  function seite(cfgSeite) {
    var cfg = {};
    Object.keys(V).forEach(function (k) { cfg[k] = V[k]; });
    Object.keys(cfgSeite || {}).forEach(function (k) { cfg[k] = cfgSeite[k]; });
    CFG = cfg;
    var nn = (cfg.nr < 10 ? "0" : "") + cfg.nr;
    MODUL = cfg.modul || cfg.prefix + nn;
    var s = kennung();
    KEY = "grumi-" + MODUL + (s ? "~" + s.kennung + "~" : "");
    try { geloest = JSON.parse(lies(KEY) || "{}") || {}; } catch (_e) { geloest = {}; }
    var zug = global.Lernstand && global.Lernstand.schueler ? global.Lernstand.schueler.zug || "" : "";
    var rKlasse = /R$/.test(zug), mKlasse = /M$/.test(zug);
    var themen = cfg.themen || [], vor = cfg.extra ? null : themen[cfg.nr - 2], nach = cfg.extra ? null : themen[cfg.nr];
    var hatPlus = Boolean(cfg.plus && cfg.plus.length);
    var basisName = cfg.basisName || "Basis", plusName = cfg.plusName || "Plus";
    var app = $("#app") || doc.body;

    app.innerHTML =
      '<header class="top"><div class="wrap top-in">' +
        '<a class="brand" href="' + esc(cfg.indexHref) + '" title="' + esc(cfg.indexName) + '">← ' + esc(cfg.bereich) + " <small>" + esc(cfg.fach) + "</small></a>" +
        '<nav class="stations" id="stations" aria-label="Abschnitte"><a href="#verstehen"><b>1</b>Verstehen</a><a href="#basis"><b>2</b>' + esc(basisName) + "</a>" +
          (hatPlus ? '<a href="#plus"><b>3</b>' + esc(plusName) + "</a>" : "") + "</nav>" +
        '<span class="stars" id="g-sterne" title="Richtig gelöste Aufgaben">⭐ 0 / 0</span></div><div class="readbar" id="readbar"></div></header>' +
      '<div class="hero"><div class="wrap">' +
        '<nav class="navlinks" aria-label="Navigation"><a href="' + esc(cfg.indexHref) + '">📚 ' + esc(cfg.indexName) + '</a><a href="' + esc(cfg.fachHref) + '">🏠 ' + esc(cfg.fach) + "</a></nav>" +
        '<div class="eyebrow">' + esc(cfg.fach) + " · " + esc(cfg.bereich) + " · " + (cfg.extra ? "Extraübung" : esc(cfg.themaWort) + " " + cfg.nr + " von " + themen.length) + "</div>" +
        "<h1>" + esc(cfg.titel) + "</h1><p>" + fmt(cfg.lead || "") + "</p>" +
        (cfg.ziele ? '<div class="goals">' + cfg.ziele.map(function (z) { return "<div>" + fmt(z) + "</div>"; }).join("") + "</div>" : "") +
        '<div class="hero-cta"><a class="btn light" href="#verstehen">📖 Zuerst verstehen</a><a class="btn glas" href="#basis">✏️ Gleich üben</a></div>' +
      "</div></div>" +
      '<main class="wrap">' +
        '<section class="station" id="verstehen"><div class="st-head"><div class="st-num">1</div><div><div class="eyebrow">Merkwissen</div><h2>Verstehen</h2></div></div>' +
          '<div class="merk-grid">' + (cfg.merk || []).map(function (m) { return '<div class="card merk' + (m.breit || /<table/.test(m.html) ? " breit" : "") + '"><h3>' + esc(m.t) + "</h3>" + m.html + "</div>"; }).join("") + "</div>" +
          (cfg.fallen && cfg.fallen.length ? '<div class="merke"><h4>⚠️ Achtung, typische Fehler</h4><ul>' + cfg.fallen.map(function (f) { return "<li>" + fmt(f) + "</li>"; }).join("") + "</ul></div>" : "") +
        "</section>" +
        '<section class="station" id="basis"><div class="st-head"><div class="st-num teal">2</div><div><div class="eyebrow">' + esc(cfg.basisEyebrow || "Für alle") + "</div><h2>" + esc(basisName) + '</h2></div></div><div class="liste"></div></section>' +
        (hatPlus ? '<section class="station plus" id="plus"><div class="st-head"><div class="st-num">3</div><div><div class="eyebrow">' + esc(cfg.plusEyebrow || "M-Zug · für R-Klassen freiwillig") + "</div><h2>" + esc(plusName) + "</h2></div></div>" +
          '<p class="plus-hinweis">' + (mKlasse ? "🎯 <b>M-Zug:</b> Diese Aufgaben gehören für dich dazu." :
            rKlasse ? "⭐ <b>Freiwillig für dich:</b> Probier die Aufgaben ruhig aus. Sie zählen nicht zu deinem Stand, aber du siehst sie als Extra." :
            "🎯 Für den M-Zug Pflicht, für R-Klassen freiwillig.") + "</p>" +
          '<div class="liste"></div></section>' : "") +
        '<nav class="weiter-nav" aria-label="Weitere Themen">' +
          (vor ? '<a href="' + vor[0] + '"><small>← ' + esc(cfg.themaWort) + " " + (cfg.nr - 1) + "</small><b>" + esc(vor[1]) + "</b></a>" : '<a href="' + esc(cfg.indexHref) + '"><small>←</small><b>' + esc(cfg.indexName) + "</b></a>") +
          (nach ? '<a class="naechste" href="' + nach[0] + '"><small>' + esc(cfg.themaWort) + " " + (cfg.nr + 1) + " →</small><b>" + esc(nach[1]) + "</b></a>" : '<a class="naechste" href="' + esc(cfg.fachHref) + '"><small>Zurück →</small><b>' + esc(cfg.fach) + "</b></a>") +
        "</nav>" +
      '</main><footer class="fuss"><div class="wrap"><a href="' + esc(cfg.indexHref) + '">' + esc(cfg.indexName) + '</a> · <a href="' + esc(cfg.fachHref) + '">' + esc(cfg.fach) +
        '</a> · <a href="' + WURZEL + 'datenschutz.html">Datenschutz</a></div></footer>' +
      '<canvas id="konfetti" aria-hidden="true"></canvas>';
    doc.title = cfg.titel + " | " + cfg.fach + " " + cfg.bereich;

    var basisListe = $("#basis .liste"), plusListe = $("#plus .liste");
    (cfg.basis || []).forEach(function (a, i) { basisListe.appendChild(karteBauen(a, i, false)); });
    (cfg.plus || []).forEach(function (a, i) { plusListe.appendChild(karteBauen(a, i, true)); });
    sterne();

    // Abschnitt in der Kopfzeile hervorheben, Lesebalken
    var navLinks = $$("#stations a"), leiste = $("#stations"), abschnitte = $$("main section.station"), balken = $("#readbar"), wartet = false, aktuell;
    function scrollen() {
      wartet = false;
      var h = doc.documentElement;
      if (balken) balken.style.transform = "scaleX(" + h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) + ")";
      var akt = null;
      abschnitte.forEach(function (a) { if (a.getBoundingClientRect().top < 140) akt = a.id; });
      if (akt === aktuell) return;
      aktuell = akt;
      navLinks.forEach(function (a) {
        var an = a.getAttribute("href") === "#" + akt;
        a.classList.toggle("active", an);
        if (an && leiste) leiste.scrollTo({ left: a.offsetLeft - (leiste.clientWidth - a.offsetWidth) / 2, behavior: reduziert ? "auto" : "smooth" });
      });
    }
    global.addEventListener("scroll", function () { if (!wartet) { wartet = true; global.requestAnimationFrame(scrollen); } }, { passive: true });
    scrollen();

    // Lernstand mit Code (js/lernstand.js): Stand oben, gelöste Aufgaben an die Lehrkraft
    if (global.Lernstand) {
      global.Lernstand.seite({
        kurs: cfg.kurs, bereich: cfg.bereich, bnr: cfg.bnr, modul: MODUL, nr: cfg.lsNr || cfg.nr, kurz: cfg.kurz || cfg.kurzPrefix + cfg.nr, titel: cfg.titel,
        aufgaben: karten.map(function (k) { return { id: k.id, teil: k.plus ? "Plus" : "Basis", kurz: k.kurz, text: ohneFmt(k.a.t).slice(0, 100), el: k.el }; }),
        anker: $("#verstehen"), abzeichenIn: ".aufg-kopf h3",
        freiwillig: function (a) { return rKlasse && a.teil === "Plus"; },
        mehrGeloest: function (ids) { ids.forEach(function (id) { geloest[id] = 1; }); speichern(); sterne(); }
      });
    }
  }

  global.Grammatik = { seite: seite, vorgaben: vorgaben, THEMEN: THEMEN, gleich: gleich, get karten() { return karten; } };
})(window);
