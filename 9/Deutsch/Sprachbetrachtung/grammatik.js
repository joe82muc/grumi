/* Deutsch 9 · Grammatik (9/Deutsch/Sprachbetrachtung): Baukasten für die zehn Themenseiten sb_01 … sb_10.
 * Die Seite lädt js/lernstand.js und dieses Skript und ruft Grammatik.seite({...}) mit ihren Inhalten auf:
 *   { nr, titel, lead, ziele: [..], merk: [{ t, html }], fallen: [..], basis: [Aufgabe], plus: [Aufgabe] }
 * Aufgabe: { typ, t (Auftrag), info?, tipp?, quali?, ... }
 *   wahl      items: [{ f?, s?, o: [..], a: Index, e? (Erklärung bei Fehler) }], mischen?
 *   luecke    items: ["Text mit [[Antwort|auch richtig]] und {{richtig|falsch|falsch}}"]
 *   markieren items: ["Text mit [markiert] oder [b:mit Stift b]"], stifte?: [["b", "Subjekt"], …]
 *   zuordnen  gruppen: [..], karten: [["Wort", Gruppenindex], …]
 *   komma     items: ["Richtiger Satz, mit allen Kommas."]
 *   umformen  items: [{ s?, f?, l: [Lösungen] }]        weicht die Antwort ab, prüft die KI (nur mit Code)
 *   frei      items: [{ f, kriterien: [..], muster?: "RegExp", bsp }]   KI prüft, ohne Server das Muster
 *   bauen     items: [{ f?, teile: [in richtiger Reihenfolge], l?: [weitere richtige Sätze] }]
 * Jede Aufgabe ist eine Karte (Lernstand-Kennung d9-sb-NN-b1 … bzw. -p1 …). Plus-Aufgaben gehören für den
 * M-Zug dazu, für R-Klassen sind sie freiwillig. „Lösung zeigen“ zählt nie.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var THEMEN = [
    ["sb_01.html", "Wortarten"], ["sb_02.html", "Satzglieder"], ["sb_03.html", "Haupt- und Nebensatz"],
    ["sb_04.html", "Satzreihe und Satzgefüge"], ["sb_05.html", "Aktiv und Passiv"], ["sb_06.html", "Direkte und indirekte Rede"],
    ["sb_07.html", "Zeitformen"], ["sb_08.html", "Konjunktiv I und II"], ["sb_09.html", "Satzbau und Stil"], ["sb_10.html", "Kommasetzung"]
  ];
  var TYPEN = { wahl: "Ankreuzen", luecke: "Lückentext", markieren: "Markieren", zuordnen: "Zuordnen", komma: "Kommas setzen",
    umformen: "Umformen", frei: "Selbst schreiben", bauen: "Satzbau" };
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

  /* ---------- Kommas setzen: zwischen den Wörtern antippen ---------- */
  function komma(K, box) {
    var items = K.a.items.map(function (satz) {
      var w = String(satz).split(/\s+/).filter(Boolean);
      return w.map(function (x, i) { return { t: x.replace(/,$/, ""), k: /,$/.test(x) && i < w.length - 1 }; });
    });
    function bauen() {
      box.innerHTML = items.map(function (w, i) {
        return '<div class="item"><div class="km-satz"><span class="marke">' + (items.length > 1 ? (i + 1) + "." : "") + "</span>" +
          w.map(function (x, j) { return esc(x.t) + (j < w.length - 1 ? '<button type="button" class="slot" data-i="' + i + '" data-j="' + j + '" aria-label="Komma nach ' + esc(x.t) + '" aria-pressed="false"></button> ' : ""); }).join("") +
          "</div></div>";
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

  var BAU = { wahl: wahl, luecke: luecke, markieren: markieren, zuordnen: zuordnen, komma: komma, umformen: umformen, frei: umformen, bauen: bauenTyp };

  /* ---------- Karte mit Prüfen, Tipp, Lösung und Neu ---------- */
  function karteBauen(a, i, plus) {
    var kurz = (plus ? "P" : "B") + (i + 1), id = MODUL + "-" + (plus ? "p" : "b") + (i + 1);
    var el = doc.createElement("article");
    el.className = "aufg" + (plus ? " plus" : ""); el.id = id;
    el.innerHTML = '<div class="aufg-kopf"><span class="nr">' + kurz + '</span><div><span class="typ">' + esc(TYPEN[a.typ] || "Aufgabe") +
      (a.quali ? '<span class="quali">wie im Quali</span>' : "") + "</span><h3>" + fmt(a.t) + "</h3></div></div>" +
      (a.info ? '<p class="info">' + fmt(a.info) + "</p>" : "") + '<div class="koerper"></div>' +
      '<div class="aufg-aktionen"><button type="button" class="knopf pruefen">Prüfen</button>' +
      (a.tipp ? '<button type="button" class="knopf zweit tipp" aria-expanded="false">💡 Tipp</button>' : "") +
      '<button type="button" class="knopf zweit loes-knopf" hidden>Lösung zeigen</button>' +
      '<button type="button" class="knopf zweit neu" title="Aufgabe neu beginnen">↺ Neu</button></div>' +
      (a.tipp ? '<div class="tippbox">💡 ' + fmt(a.tipp) + "</div>" : "") + '<div class="fb" role="status"></div>';
    var K = { id: id, kurz: kurz, plus: plus, el: el, a: a, verraten: false, fehlversuche: 0 };
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
    var tipp = $(".tipp", el);
    if (tipp) tipp.addEventListener("click", function () { var t = $(".tippbox", el), an = !t.classList.contains("zeigen"); t.classList.toggle("zeigen", an); tipp.setAttribute("aria-expanded", an); });
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
    var farben = ["#083f45", "#0c5f66", "#b23a48", "#d9841f", "#f2b632"];
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

  /* ---------- Seite ---------- */
  function seite(cfg) {
    CFG = cfg;
    var nn = (cfg.nr < 10 ? "0" : "") + cfg.nr;
    MODUL = "d9-sb-" + nn;
    var s = kennung();
    KEY = "grumi-d9-sb-" + nn + (s ? "~" + s.kennung + "~" : "");
    try { geloest = JSON.parse(lies(KEY) || "{}") || {}; } catch (_e) { geloest = {}; }
    var zug = global.Lernstand && global.Lernstand.schueler ? global.Lernstand.schueler.zug || "" : "";
    var rKlasse = /R$/.test(zug), mKlasse = /M$/.test(zug);
    var vor = THEMEN[cfg.nr - 2], nach = THEMEN[cfg.nr];
    var app = $("#app") || doc.body;

    app.innerHTML =
      '<header class="g-top"><div class="wrap g-top-in">' +
        '<a class="g-brand" href="index.html" title="Alle Grammatik-Themen"><span class="pfeil" aria-hidden="true">←</span><span class="txt">Grammatik <small>· Deutsch 9</small></span></a>' +
        '<nav class="g-nav" aria-label="Abschnitte"><a href="#verstehen">1 Verstehen</a><a href="#basis">2 Basis</a>' + (cfg.plus && cfg.plus.length ? '<a href="#plus">3 Plus</a>' : "") + "</nav>" +
        '<span class="g-sterne" id="g-sterne" title="Richtig gelöste Aufgaben">⭐ 0 / 0</span></div><div class="g-lesebalken" id="g-lesebalken"></div></header>' +
      '<section class="g-hero"><div class="wrap"><p class="g-eyebrow">Deutsch 9 · Grammatik · Thema ' + cfg.nr + " von " + THEMEN.length + "</p>" +
        "<h1>" + esc(cfg.titel) + '</h1><p class="lead">' + fmt(cfg.lead || "") + "</p>" +
        (cfg.ziele ? '<div class="g-ziele">' + cfg.ziele.map(function (z) { return "<div>" + fmt(z) + "</div>"; }).join("") + "</div>" : "") +
        '<div class="g-hero-knoepfe"><a href="#verstehen">📖 Zuerst verstehen</a><a class="zweit" href="#basis">✏️ Gleich üben</a></div></div></section>' +
      '<main class="wrap">' +
        '<section class="g-sek" id="verstehen"><div class="g-sek-kopf"><span class="zahl">1</span><div><h2>Verstehen</h2><p>Lies die Merkkästen. Die Beispiele zeigen, worauf es ankommt.</p></div></div>' +
          '<div class="merk-grid">' + (cfg.merk || []).map(function (m) { return '<div class="merk' + (m.breit || /<table/.test(m.html) ? " breit" : "") + '"><h3>' + esc(m.t) + "</h3>" + m.html + "</div>"; }).join("") + "</div>" +
          (cfg.fallen && cfg.fallen.length ? '<div class="falle"><h3>⚠️ Typische Fehler</h3><ul>' + cfg.fallen.map(function (f) { return "<li>" + fmt(f) + "</li>"; }).join("") + "</ul></div>" : "") +
        "</section>" +
        '<section class="g-sek" id="basis"><div class="g-sek-kopf"><span class="zahl">2</span><div><h2>Basis</h2><p>Das brauchst du sicher – für alle.</p></div></div><div class="liste"></div></section>' +
        (cfg.plus && cfg.plus.length ? '<section class="g-sek plus" id="plus"><div class="g-sek-kopf"><span class="zahl">3</span><div><h2>Plus</h2><p>Schwierigere Aufgaben und Quali-Niveau.</p></div></div>' +
          '<p class="g-plus-hinweis">' + (mKlasse ? "<span>🎯</span><span><b>M-Zug:</b> Die Plus-Aufgaben gehören für dich dazu.</span>" :
            rKlasse ? "<span>⭐</span><span><b>Freiwillig für dich:</b> Probier die Plus-Aufgaben ruhig aus. Sie zählen nicht zu deinem Stand dazu, aber du siehst sie als Extra.</span>" :
            "<span>🎯</span><span><b>Plus:</b> Für den M-Zug Pflicht, für R-Klassen freiwillig.</span>") + "</p>" +
          '<div class="liste"></div></section>' : "") +
        '<nav class="g-weiter" aria-label="Weitere Themen">' +
          (vor ? '<a href="' + vor[0] + '"><small>← Thema ' + (cfg.nr - 1) + "</small><b>" + esc(vor[1]) + "</b></a>" : '<a href="index.html"><small>←</small><b>Alle Themen</b></a>') +
          (nach ? '<a class="naechste" href="' + nach[0] + '"><small>Thema ' + (cfg.nr + 1) + " →</small><b>" + esc(nach[1]) + "</b></a>" : '<a class="naechste" href="index.html"><small>Geschafft →</small><b>Alle Themen</b></a>') +
        "</nav>" +
      '</main><footer class="g-fuss"><a href="index.html">Alle Grammatik-Themen</a> · <a href="../index.html">Deutsch 9</a> · <a href="../../../datenschutz.html">Datenschutz</a></footer>' +
      '<canvas id="konfetti" aria-hidden="true"></canvas>';
    doc.title = cfg.titel + " | Deutsch 9 Grammatik";

    var basisListe = $("#basis .liste"), plusListe = $("#plus .liste");
    (cfg.basis || []).forEach(function (a, i) { basisListe.appendChild(karteBauen(a, i, false)); });
    (cfg.plus || []).forEach(function (a, i) { plusListe.appendChild(karteBauen(a, i, true)); });
    sterne();

    // Abschnitt in der Kopfzeile hervorheben, Lesebalken
    var navLinks = $$(".g-nav a"), abschnitte = $$("main .g-sek"), balken = $("#g-lesebalken"), wartet = false;
    function scrollen() {
      wartet = false;
      var h = doc.documentElement;
      if (balken) balken.style.transform = "scaleX(" + h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) + ")";
      var akt = null;
      abschnitte.forEach(function (a) { if (a.getBoundingClientRect().top < 140) akt = a.id; });
      navLinks.forEach(function (a) { a.classList.toggle("aktiv", a.getAttribute("href") === "#" + akt); });
    }
    global.addEventListener("scroll", function () { if (!wartet) { wartet = true; global.requestAnimationFrame(scrollen); } }, { passive: true });
    scrollen();

    // Lernstand mit Code (js/lernstand.js): Stand oben, gelöste Aufgaben an die Lehrkraft
    if (global.Lernstand) {
      global.Lernstand.seite({
        kurs: "d9", bereich: "Grammatik", bnr: 3, modul: MODUL, nr: cfg.nr, kurz: "G" + cfg.nr, titel: cfg.titel,
        aufgaben: karten.map(function (k) { return { id: k.id, teil: k.plus ? "Plus" : "Basis", kurz: k.kurz, text: ohneFmt(k.a.t).slice(0, 100), el: k.el }; }),
        anker: $("#verstehen"), abzeichenIn: ".aufg-kopf h3",
        freiwillig: function (a) { return rKlasse && a.teil === "Plus"; },
        mehrGeloest: function (ids) { ids.forEach(function (id) { geloest[id] = 1; }); speichern(); sterne(); }
      });
    }
  }

  global.Grammatik = { seite: seite, THEMEN: THEMEN, gleich: gleich, get karten() { return karten; } };
})(window);
