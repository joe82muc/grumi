/* Deutsch 7: Lesetext mit festen Zeilennummern anzeigen (Aussehen: d7-lesetext.css, Zeilen: d7-zeilen.js).
 *
 *   D7Lesetext.html(text)        HTML eines Textes, Gedichts, einer Tabelle oder eines Diagramms
 *                                text: { id, typ, titel, art, quelle, hinweis, zeilen | absaetze | verse | kopf+reihen | werte+einheit }
 *   D7Lesetext.einpassen(root)   Schriftgröße so wählen, dass jede Zeile in ihren Kasten passt (auch nach Drehen des iPads)
 *   D7Lesetext.antippen(root)    Zeile antippen = hervorheben, ihre Nummer wird sichtbar
 *   D7Lesetext.zeige(root, id, von, bis)   Zeilen eines Textes markieren und hinrollen (z. B. „Hier steht es“)
 * Die Zeilen sind fest (60 Zeichen): Zeile 12 ist auf jedem Gerät dieselbe Stelle. Nur jede fünfte Nummer steht da.
 * Passt eine Zeile bei kleinster Schrift nicht in den Kasten (Handy), bricht sie um – ihre Nummer bleibt.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]; });
  }
  function zeilenVon(t) { return t.zeilen || (global.D7Zeilen ? global.D7Zeilen.umbrechen(t) : []); }
  function kopf(t, extra) {
    return '<div class="lt-kopf">' + (t.art ? '<span class="lt-art">' + esc(t.art) + "</span>" : "") + (t.titel ? "<h3>" + esc(t.titel) + "</h3>" : "") + (t.autor ? "<small>" + esc(t.autor) + "</small>" : "") + (extra || "") + "</div>";
  }
  function fuss(t) { return (t.hinweis ? '<p class="lt-hinweis">' + esc(t.hinweis) + "</p>" : "") + (t.quelle ? '<div class="lt-quelle">' + esc(t.quelle) + "</div>" : ""); }
  function istZahl(v) { return /^[\s\d.,%€–-]+$/.test(String(v)) && /\d/.test(String(v)); }

  function html(t) {
    var id = esc(t.id || "");
    if (t.typ === "tabelle") {
      return '<div class="lt tabelle" data-text="' + id + '">' + kopf(t) + '<div class="lt-tabwrap"><table class="lt-tab"><thead><tr>' +
        (t.kopf || []).map(function (h, i) { return '<th' + (i && (t.reihen || []).every(function (r) { return istZahl(r[i]); }) ? ' class="zahl"' : "") + ">" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        (t.reihen || []).map(function (r) { return "<tr>" + r.map(function (z, i) { return "<td" + (i && istZahl(z) ? ' class="zahl"' : "") + ">" + esc(z) + "</td>"; }).join("") + "</tr>"; }).join("") +
        "</tbody></table></div>" + fuss(t) + "</div>";
    }
    if (t.typ === "diagramm") {
      var max = Math.max.apply(null, (t.werte || []).map(function (w) { return +w[1] || 0; }).concat([1]));
      return '<div class="lt diagramm" data-text="' + id + '">' + kopf(t) + '<div class="lt-dia" role="img" aria-label="Balkendiagramm: ' + esc(t.titel || "") + '">' +
        (t.werte || []).map(function (w) { return '<div class="lt-dia-zeile"><span>' + esc(w[0]) + '</span><span class="lt-dia-balken"><i style="width:' + Math.round((+w[1] || 0) / max * 100) + '%"></i></span><b>' + esc(String(w[1]).replace(".", ",")) + "</b></div>"; }).join("") +
        (t.einheit ? "<small>Angaben in " + esc(t.einheit) + "</small>" : "") + "</div>" + fuss(t) + "</div>";
    }
    var z = zeilenVon(t);
    return '<div class="lt' + (t.typ === "gedicht" ? " gedicht" : "") + '" data-text="' + id + '">' + kopf(t) + '<div class="lt-zeilen">' +
      z.map(function (x) {
        if (x.kopf) return '<div class="lz kopf neu"><span class="zn"></span><span class="zt">' + esc(x.t) + "</span></div>";
        return '<div class="lz' + (x.neu ? " neu" : "") + '" data-n="' + x.n + '"><span class="zn" data-n="' + x.n + '">' + (x.n % 5 === 0 ? x.n : "") + '</span><span class="zt">' + esc(x.t) + "</span></div>";
      }).join("") + "</div>" + fuss(t) + "</div>";
  }

  // Schriftgröße je Textkasten: größte Schrift (höchstens 18 px), bei der die breiteste Zeile noch passt
  function passe(box) {
    var breit = box.clientWidth;
    if (!breit) return;                                   // nicht sichtbar – später noch einmal
    var cs = global.getComputedStyle(box), innen = breit - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    box.classList.add("passt"); box.style.fontSize = "18px";
    var weit = 0;
    Array.prototype.forEach.call(box.querySelectorAll(".lz"), function (z) { weit = Math.max(weit, z.firstElementChild.getBoundingClientRect().width + z.lastElementChild.scrollWidth); });
    if (!weit) { box.style.fontSize = ""; box.classList.remove("passt"); return; }
    // Passt alles, ist „weit“ die Breite des Kastens; läuft eine Zeile über, ist es ihre wahre Breite
    var px = weit <= innen + 1 ? 18 : Math.floor(18 * (innen - 2) / weit * 10) / 10;
    if (px < 12.5) { px = 13; box.classList.remove("passt"); }     // zu schmal: Zeilen dürfen umbrechen
    box.style.fontSize = px + "px";
  }
  var beobachter = null;
  function einpassen(root) {
    var boxen = (root || doc).querySelectorAll(".lt-zeilen");
    if (!beobachter && global.ResizeObserver) {
      beobachter = new global.ResizeObserver(function (liste) {
        liste.forEach(function (e) { var b = e.target, w = Math.round(e.contentRect.width); if (b._ltBreite !== w) { b._ltBreite = w; passe(b); } });
      });
    }
    Array.prototype.forEach.call(boxen, function (b) {
      passe(b);
      if (beobachter && !b._ltBeob) { b._ltBeob = true; beobachter.observe(b); }
    });
  }

  function antippen(root) {
    (root || doc).addEventListener("click", function (e) {
      var z = e.target.closest && e.target.closest(".lz[data-n]");
      if (!z || z.closest(".lt.waehlbar")) return;
      var an = z.classList.contains("an");
      Array.prototype.forEach.call(z.parentNode.querySelectorAll(".lz.an"), function (x) { x.classList.remove("an"); });
      if (!an) z.classList.add("an");
    });
  }

  function zeige(root, id, von, bis) {
    var box = (root || doc).querySelector('.lt[data-text="' + id + '"]');
    if (!box) return;
    var erste = null;
    Array.prototype.forEach.call(box.querySelectorAll(".lz[data-n]"), function (z) {
      var n = +z.getAttribute("data-n"), drin = n >= von && n <= (bis || von);
      z.classList.toggle("zeig", drin);
      if (drin && !erste) erste = z;
    });
    if (erste && erste.scrollIntoView) erste.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  /* Textdatenbank der Lernmodule: Jede Datei im Ordner texte/ meldet ihren Text mit D7Texte.add({ … }) an.
     Pflichtangaben (Metadaten): id, titel, textsorte, zug ("R7" | "M7" | "R7/M7"), modul, unterthema, woerter,
     schwierigkeit, lehrplan, thema, quelle, lizenz, erstellung, zeilennummern, probe – dazu der Text selbst:
     absaetze (Fließtext), verse (Gedicht) oder sprecher (Hörtext). Die Texte der Proben stehen nicht hier,
     sondern nur auf dem Server. */
  var TEXTE = {};
  global.D7Texte = {
    alle: TEXTE,
    add: function (t) { if (t && t.id) { if (!t.art) t.art = t.textsorte; if (!t.typ) t.typ = t.verse ? "gedicht" : t.sprecher ? "hoertext" : "text"; TEXTE[t.id] = t; } return t; },
    get: function (id) { return TEXTE[id] || null; }
  };

  global.D7Lesetext = { html: html, einpassen: einpassen, antippen: antippen, zeige: zeige, esc: esc };
})(window);
