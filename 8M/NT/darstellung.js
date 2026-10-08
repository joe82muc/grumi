/* NT 8: Was zu einer Probenaufgabe gezeigt wird – Bild, Messwerttabelle, Diagramm, Versuch aus dem NT-Labor.
 * Dieselbe Darstellung in der Probe (probe.js), auf der Lehrerseite (lehrer.js), in der Rückgabe an das Kind und im
 * Elternausdruck (korrektur.html im Hauptordner): Dort sind Versuche stehende Bilder mit Beschreibung.
 *
 *   NT8Darstellung.html(a)                 Bild, Tabelle und Diagramm als HTML (a = Aufgabe mit image, tabelle, diagramm)
 *   NT8Darstellung.labor(el, a, opts)      Versuch aufbauen: in der Probe bedienbar (Film oder Bauaufgabe),
 *                                          mit opts.statisch als stehendes Bild des Endzustands a.zustand
 *   NT8Darstellung.diagramm(d)             { art: "linie" | "saeulen", titel, xTitel, yTitel, x: [..], y: [..],
 *                                            reihen: [{ name, y: [..] }] (statt y, bis zu drei Reihen), text }
 * Diagramme zeichnet die Seite selbst (SVG) – es gibt keine Bilddateien mit Lösungen und nichts aus Büchern.
 */
(function (global) {
  "use strict";
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var zahl = function (n) { return String(Math.round(n * 100) / 100).replace(".", ","); };
  var FARBEN = ["#0d77c2", "#e0453a", "#1b8a4b"];

  function stil() {
    if (document.getElementById("nt8d-stil")) return;
    var s = document.createElement("style"); s.id = "nt8d-stil";
    s.textContent = ".nt8d-tab{border-collapse:collapse;margin:10px 0;font-size:.97rem;background:#fff;max-width:100%}" +
      ".nt8d-tab th,.nt8d-tab td{border:1px solid #9aa9b5;padding:6px 12px;text-align:center}.nt8d-tab th{background:#e7f3fc}" +
      ".nt8d-tab caption{caption-side:top;text-align:left;font-weight:700;font-size:.9rem;padding-bottom:4px}" +
      "@media (max-width:520px){.nt8d-tab{width:100%;table-layout:fixed;font-size:.84rem}.nt8d-tab th,.nt8d-tab td{padding:5px 3px;overflow-wrap:anywhere;hyphens:auto}}" +
      ".nt8d-dia{margin:10px 0;max-width:560px;border:1px solid #d8e2ea;border-radius:12px;background:#fff;overflow:hidden}.nt8d-dia svg{display:block;width:100%;height:auto}" +
      ".nt8d-bild{margin:10px 0}.nt8d-bild img{max-width:100%;height:auto;border-radius:12px;border:1px solid #d8e2ea;background:#fff}" +
      ".nt8d-lab{margin:10px 0;max-width:620px}.nt8d-regeln{margin:6px 0 0;padding:0;list-style:none;font-size:.92rem}.nt8d-regeln li{padding:2px 0}" +
      "@media print{.nt8d-dia,.nt8d-lab,.nt8d-tab{break-inside:avoid;page-break-inside:avoid}.nt8d-lab{max-width:105mm}.nt8d-dia{max-width:110mm}}";
    document.head.appendChild(s);
  }

  function tabelle(t) {
    if (!t || !Array.isArray(t.kopf)) return "";
    return '<table class="nt8d-tab">' + (t.titel ? "<caption>" + esc(t.titel) + "</caption>" : "") + "<thead><tr>" + t.kopf.map(function (k) { return "<th>" + esc(k) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      (t.zeilen || []).map(function (z) { return "<tr>" + z.map(function (c, i) { return (i === 0 && t.ersteSpalte ? "<th>" : "<td>") + esc(c) + (i === 0 && t.ersteSpalte ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table>";
  }

  function diagramm(d) {
    if (!d || !Array.isArray(d.x)) return "";
    var reihen = d.reihen || [{ name: "", y: d.y || [] }], W = 520, H = 300, L = 62, R = 16, T = d.titel ? 40 : 18, B = 54;
    var alle = [].concat.apply([], reihen.map(function (r) { return r.y; })), max = Math.max.apply(null, alle.concat([1])), min = Math.min.apply(null, alle.concat([0]));
    // „schöne“ Achsenteilung
    var spanne = max - Math.min(0, min), roh = spanne / 5, pot = Math.pow(10, Math.floor(Math.log(roh) / Math.LN10)), schritt = [1, 2, 2.5, 5, 10].map(function (f) { return f * pot; }).filter(function (s) { return s >= roh; })[0] || pot;
    var unten = Math.floor(Math.min(0, min) / schritt) * schritt, oben = Math.ceil(max / schritt) * schritt, n = d.x.length;
    var py = function (v) { return T + (H - T - B) * (1 - (v - unten) / (oben - unten || 1)); };
    var saeulen = d.art === "saeulen" || d.art === "balken", zahlX = !saeulen && d.x.every(function (v) { return typeof v === "number"; });
    var xmin = zahlX ? Math.min.apply(null, d.x.concat([0])) : 0, xmax = zahlX ? Math.max.apply(null, d.x) : n - 1;
    var px = function (i) { return saeulen ? L + (W - L - R) * (i + .5) / n : zahlX ? L + (W - L - R) * (d.x[i] - xmin) / (xmax - xmin || 1) : L + (W - L - R) * (n > 1 ? i / (n - 1) : .5) * .94 + (W - L - R) * .03; };
    var h = '<rect width="' + W + '" height="' + H + '" fill="#fff"/>' + (d.titel ? '<text x="' + W / 2 + '" y="22" text-anchor="middle" font-size="14" font-weight="800" fill="#15212b">' + esc(d.titel) + "</text>" : "");
    for (var v = unten; v <= oben + schritt / 1000; v += schritt) h += '<line x1="' + L + '" y1="' + py(v).toFixed(1) + '" x2="' + (W - R) + '" y2="' + py(v).toFixed(1) + '" stroke="#e3ebf1"/><text x="' + (L - 8) + '" y="' + (py(v) + 4).toFixed(1) + '" text-anchor="end" font-size="12" fill="#44525d">' + zahl(v) + "</text>";
    h += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (H - B) + '" stroke="#15212b" stroke-width="1.6"/><line x1="' + L + '" y1="' + py(Math.max(unten, 0)).toFixed(1) + '" x2="' + (W - R) + '" y2="' + py(Math.max(unten, 0)).toFixed(1) + '" stroke="#15212b" stroke-width="1.6"/>';
    d.x.forEach(function (x, i) { h += '<text x="' + px(i).toFixed(1) + '" y="' + (H - B + 18) + '" text-anchor="middle" font-size="12" fill="#44525d">' + esc(typeof x === "number" ? zahl(x) : x) + "</text>"; });
    reihen.forEach(function (r, k) {
      var f = FARBEN[k % 3];
      if (saeulen) {
        var b = (W - L - R) / n * .62 / reihen.length;
        r.y.forEach(function (y, i) { var x0 = px(i) - b * reihen.length / 2 + k * b; h += '<rect x="' + x0.toFixed(1) + '" y="' + Math.min(py(y), py(0)).toFixed(1) + '" width="' + (b - 2).toFixed(1) + '" height="' + Math.abs(py(0) - py(y)).toFixed(1) + '" fill="' + f + '"/>' + (d.werte !== false && reihen.length === 1 ? '<text x="' + px(i).toFixed(1) + '" y="' + (py(y) - 5).toFixed(1) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">' + zahl(y) + "</text>" : ""); });
      } else {
        h += '<polyline fill="none" stroke="' + f + '" stroke-width="2.6" points="' + r.y.map(function (y, i) { return px(i).toFixed(1) + "," + py(y).toFixed(1); }).join(" ") + '"/>';
        r.y.forEach(function (y, i) { h += '<circle cx="' + px(i).toFixed(1) + '" cy="' + py(y).toFixed(1) + '" r="4.5" fill="' + f + '" stroke="#fff" stroke-width="1.5"/>'; });
      }
      if (r.name) h += '<rect x="' + (L + 10 + k * 150) + '" y="' + (T - 2) + '" width="12" height="12" fill="' + f + '"/><text x="' + (L + 27 + k * 150) + '" y="' + (T + 9) + '" font-size="12" font-weight="700" fill="#15212b">' + esc(r.name) + "</text>";
    });
    h += (d.xTitel ? '<text x="' + ((L + W - R) / 2) + '" y="' + (H - 10) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#15212b">' + esc(d.xTitel) + "</text>" : "") +
      (d.yTitel ? '<text x="16" y="' + ((T + H - B) / 2) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#15212b" transform="rotate(-90 16 ' + ((T + H - B) / 2) + ')">' + esc(d.yTitel) + "</text>" : "");
    return '<figure class="nt8d-dia"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(d.text || d.titel || "Diagramm") + '">' + h + "</svg></figure>";
  }

  // Bild, Tabelle und Diagramm einer Aufgabe. basis = Ordner der Bilder (8M/NT/), wenn die Seite woanders liegt.
  function html(a, basis) {
    stil();
    var bild = a.image || a.bild;
    return (bild ? '<figure class="nt8d-bild"><img src="' + esc((basis || "") + bild) + '" alt="' + esc(a.imageAlt || "Bild zur Aufgabe") + '"></figure>' : "") + tabelle(a.tabelle) + diagramm(a.diagramm);
  }

  // Versuch zu einer Aufgabe. In der Probe: Film (ansehen, beliebig oft) oder Bauaufgabe (bedienbar, ohne Hilfen).
  // Statisch (Lehrkraft, Rückgabe, Druck): stehendes Bild des Endzustands mit Beschreibung und – bei Bauaufgaben –
  // der Liste, welche Anforderungen erfüllt sind.
  function labor(el, a, opts) {
    stil();
    var o = opts || {}, angabe = a.labor;
    if (!angabe || !global.NTLabor) return null;
    el.classList.add("nt8d-lab");
    if (!o.statisch) return global.NTLabor.baue(el, Object.assign({}, angabe, { modus: a.type === "labor" ? "bau" : angabe.modus || "film" }));
    var bild = document.createElement("div"); el.appendChild(bild);
    var zustand = a.zustand || (angabe.schritte && angabe.schritte.length ? Object.assign({}, angabe.start, angabe.schritte[angabe.schritte.length - 1].z) : angabe.start) || {};
    var lab = global.NTLabor.statisch(bild, angabe.art, zustand, { teile: angabe.teile, fest: angabe.fest });
    if (angabe.text && a.type !== "labor") { var p = bild.querySelector(".lab-mess"); if (p) p.textContent = angabe.text; }
    if (Array.isArray(a.regeln)) {
      var ul = document.createElement("ul"); ul.className = "nt8d-regeln";
      ul.innerHTML = a.regeln.map(function (r) { return "<li>" + (r.ok ? "✅ " : "❌ ") + esc(r.text) + "</li>"; }).join("");
      el.appendChild(ul);
    }
    return lab;
  }

  global.NT8Darstellung = { html: html, tabelle: tabelle, diagramm: diagramm, labor: labor };
})(window);
