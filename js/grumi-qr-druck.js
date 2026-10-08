(function () {
  "use strict";

  var GRUMI_URL = "https://joe82muc.github.io/grumi";
  var QR_SRC = "images/grumi-qr-code.svg";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];
    });
  }

  function text(el) {
    return el ? String(el.textContent || "").replace(/\s+/g, " ").trim() : "";
  }

  function klasseAus(panel) {
    var m = /^Codes der Klasse\s+(.+?)\s+\(/.exec(text(panel.querySelector(".lf-h3")));
    return m ? m[1] : "";
  }

  function stil() {
    if (document.getElementById("lf-qr-druck-stil")) return;
    var s = document.createElement("style");
    s.id = "lf-qr-druck-stil";
    s.textContent =
      "@media print{body.lf-drucken>*:not(#lf-druck){display:none!important}body.lf-drucken{background:#fff;padding:0}" +
      "body.lf-drucken #lf-druck{display:grid;grid-template-columns:1fr 1fr;gap:0}" +
      "body.lf-drucken .lf-zettel{border:1px dashed #888;padding:12px 14px;break-inside:avoid;font-family:'Source Sans 3',sans-serif;display:grid;grid-template-columns:minmax(0,1fr) 30mm;gap:8px 10px;align-items:center;min-height:39mm}" +
      "body.lf-drucken .lf-zettel small{display:block;font-size:10pt;color:#444}" +
      "body.lf-drucken .lf-zettel b{display:block;font-size:13pt;margin:2px 0}" +
      "body.lf-drucken .lf-zettel .lf-z-code{font-size:26pt;font-weight:900;letter-spacing:.2em}" +
      "body.lf-drucken .lf-z-info{min-width:0}" +
      "body.lf-drucken .lf-z-qr{justify-self:end;text-align:center;width:30mm}" +
      "body.lf-drucken .lf-z-qr img{display:block;width:26mm;height:26mm;object-fit:contain;image-rendering:pixelated;margin:0 auto 1mm}" +
      "body.lf-drucken .lf-z-qr small{font-size:7pt;line-height:1.1;color:#111;overflow-wrap:anywhere}}";
    document.head.appendChild(s);
  }

  function zettel(klasse, cards) {
    return cards.map(function (card) {
      var code = text(card.querySelector(".lf-code"));
      var nameEl = card.querySelector(".lf-name");
      var name = text(nameEl);
      if (nameEl && nameEl.querySelector(".lf-leer")) name = "";
      return '<div class="lf-zettel"><div class="lf-z-info"><small>Klasse ' + esc(klasse) + " &middot; GRUMI-Lernplattform</small><b>" + esc(name) + "</b>" +
        '<div class="lf-z-code">' + esc(code) + "</div><small>Dein Code f&uuml;r die Lernmodule (NT, Deutsch, Englisch, Informatik). " +
        'Gib ihn nicht weiter.</small></div><div class="lf-z-qr"><img src="' + esc(QR_SRC) + '" alt="QR-Code zur GRUMI-Lernplattform"><small>' +
        esc(GRUMI_URL.replace(/^https?:\/\//, "")) + "</small></div></div>";
    }).join("");
  }

  function drucken(d) {
    var starten = function () {
      document.body.classList.add("lf-drucken");
      var weg = function () { document.body.classList.remove("lf-drucken"); window.removeEventListener("afterprint", weg); };
      window.addEventListener("afterprint", weg);
      window.print();
      setTimeout(weg, 1000);
    };
    var bilder = Array.prototype.slice.call(d.querySelectorAll("img"));
    var offen = bilder.filter(function (img) { return !img.complete; }).length;
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

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("#lf-drucken");
    if (!btn || btn.disabled) return;
    var panel = btn.closest("#vw-inhalt") || document;
    var cards = Array.prototype.slice.call(panel.querySelectorAll(".lf-codes .lf-ck"));
    if (!cards.length) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    stil();
    var d = document.getElementById("lf-druck");
    if (!d) { d = document.createElement("div"); d.id = "lf-druck"; document.body.appendChild(d); }
    d.innerHTML = zettel(klasseAus(panel), cards);
    drucken(d);
  }, true);
})();
