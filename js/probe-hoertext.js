/* Hörtext einer Probe für die Lehrkraft – in der Verwaltung (proben-verwalten.html, nt7-verwaltung.js).
 *
 * Die Kinder hören den Hörtext nicht am eigenen Gerät: Die Lehrkraft spielt die Aufnahme hier für die ganze Klasse ab
 * (Lautsprecher) oder lädt sie als MP3 herunter. Aufnahme und Mitschrift kommen nur mit dem Lehrerpasswort vom Server
 * (Route der Probenart: hoertextPath in js/proben-module.js, die Datei unter …-datei) und werden nirgends gespeichert.
 *
 *   GrumiProbeHoertext.kann(mod, probe)          hat diese Probe einen Hörtext zum Abspielen?
 *   GrumiProbeHoertext.oeffnen(mod, probe, ctx)  probe: { id, titel, fach }; ctx: { api, password }
 */
(function (global) {
  "use strict";
  var doc = document;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var H = "#probe-hoertext ";
  var CSS = "#probe-hoertext{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9000;background:#eef2f6;overflow:auto;-webkit-overflow-scrolling:touch;color:#15212b;text-align:left}" +
    H + "*{box-sizing:border-box}" +
    H + ".ph-leiste{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 14px;background:#fff;border-bottom:1px solid #d8e2ea;box-shadow:0 2px 10px rgba(0,0,0,.06)}" +
    H + ".ph-leiste > b{margin-right:auto;font-size:1.02rem}" +
    H + ".ph-knopf{display:inline-flex;align-items:center;border:2px solid #b9cbd8;background:#fff;color:#15212b;border-radius:10px;font:inherit;font-weight:800;font-size:.9rem;padding:8px 12px;min-height:44px;cursor:pointer;text-decoration:none}" +
    H + ".ph-knopf.haupt{background:#1b8a4b;border-color:#1b8a4b;color:#fff}" +
    H + ".ph-blatt{max-width:760px;margin:14px auto 30px;padding:0 14px}" +
    H + ".ph-fach{font-size:.78rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#44525d}" +
    H + ".ph-blatt h1{font-size:1.3rem;line-height:1.25;margin:2px 0 10px}" +
    H + ".ph-hinweis{margin:0 0 14px;padding:10px 12px;border:1px solid #d8e2ea;border-left:4px solid #0d77c2;border-radius:8px;background:#fff;font-size:.93rem;line-height:1.45}" +
    H + ".ph-text{background:#fff;border:1px solid #d8e2ea;border-radius:10px;padding:16px 18px;margin:0 0 14px;box-shadow:0 6px 24px rgba(0,0,0,.06)}" +
    H + ".ph-text h2{font-size:1.1rem;margin:0 0 2px}" +
    H + ".ph-art{margin:0 0 12px;font-size:.88rem;color:#44525d}" +
    H + ".ph-text audio{display:block;width:100%;margin:0 0 10px}" +
    H + ".ph-zeile{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center}" +
    H + ".ph-stand{font-weight:800;font-size:.95rem}" +
    H + ".ph-stand.fertig{color:#1b8a4b}" +
    H + ".ph-meldung{margin:0;padding:10px 12px;border-radius:10px;background:#fdecea;border:1px solid #f1b5ae;font-weight:700}" +
    H + ".ph-laedt{margin:0;color:#44525d}" +
    H + "details{margin-top:12px;border-top:1px solid #d8e2ea;padding-top:10px}" +
    H + "summary{cursor:pointer;font-weight:800;font-size:.92rem}" +
    H + ".ph-mitschrift p{margin:8px 0 0;line-height:1.45}" +
    "body.ph-offen{overflow:hidden}";

  function fehlerText(r, x) {
    return r.status === 401 ? "Das Passwort wurde nicht angenommen. Bitte neu anmelden." : r.status === 404 ? "Zu dieser Probe gibt es keinen Hörtext." : "Der Hörtext ließ sich nicht laden (" + ((x && x.error) || "HTTP " + r.status) + ").";
  }

  // mod = Eintrag aus js/proben-module.js; probe = Zeile der Liste (hoertexte: Anzahl, meldet der Server)
  function kann(mod, probe) { return !!(mod && mod.hoertextPath && probe && probe.hoertexte > 0); }

  function oeffnen(mod, probe, ctx) {
    var alt = doc.getElementById("probe-hoertext"); if (alt) alt.remove();
    var vorher = doc.activeElement, adressen = [];
    var stil = doc.createElement("style"); stil.textContent = CSS; doc.head.appendChild(stil);
    var box = doc.createElement("div"); box.id = "probe-hoertext"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Hörtext abspielen");
    box.innerHTML = '<div class="ph-leiste"><b>🎧 Hörtext abspielen</b><button type="button" class="ph-knopf" data-ph="zu">✕ Schließen</button></div>' +
      '<div class="ph-blatt"><div class="ph-fach">' + esc(probe.fach || mod.subject || "") + "</div><h1>" + esc(probe.titel || probe.id) + '</h1><div class="ph-inhalt"><p class="ph-laedt">Der Hörtext wird geladen …</p></div></div>';
    doc.body.appendChild(box); doc.body.classList.add("ph-offen");
    var inhalt = box.querySelector(".ph-inhalt");

    function zu() {
      doc.removeEventListener("keydown", taste);
      Array.prototype.forEach.call(box.querySelectorAll("audio"), function (a) { try { a.pause(); } catch (_e) { /* schon weg */ } });
      adressen.forEach(function (u) { try { URL.revokeObjectURL(u); } catch (_e) { /* schon weg */ } });
      box.remove(); stil.remove(); doc.body.classList.remove("ph-offen");
      if (vorher && vorher.focus) try { vorher.focus(); } catch (_e) { /* Knopf gibt es nicht mehr */ }
    }
    function taste(e) { if (e.key === "Escape") zu(); }
    doc.addEventListener("keydown", taste);
    box.querySelector('[data-ph="zu"]').addEventListener("click", zu);
    box.querySelector('[data-ph="zu"]').focus();

    function post(pfad, body) { return fetch((ctx.api || "") + pfad, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); }

    function text(t, nr) {
      var el = doc.createElement("section"); el.className = "ph-text"; el.setAttribute("data-hoertext", t.id);
      var mal = t.mal || 2, mehrere = (t.sprecher || []).some(function (s) { return s.rolle !== t.sprecher[0].rolle; });
      el.innerHTML = "<h2>" + esc(t.titel || "Hörtext " + nr) + '</h2><p class="ph-art">' + esc(t.art || "Hörtext") + " · wird " + (mal === 1 ? "einmal" : mal === 2 ? "zweimal" : mal + "-mal") + ' vorgespielt</p><div class="ph-ton"></div>' +
        '<details><summary>Mitschrift anzeigen (nur für Sie)</summary><div class="ph-mitschrift">' +
        (t.sprecher || []).map(function (s) { return "<p>" + (mehrere ? "<b>" + esc(s.rolle) + ":</b> " : "") + esc(s.text) + "</p>"; }).join("") + "</div></details>";
      var ton = el.querySelector(".ph-ton");
      if (!t.aufnahme) { ton.innerHTML = '<p class="ph-meldung">Zu diesem Hörtext gibt es noch keine Aufnahme. Sie können die Mitschrift vorlesen.</p>'; return el; }
      ton.innerHTML = '<p class="ph-laedt">Die Aufnahme wird geladen …</p>';
      post(mod.hoertextPath + "-datei", { password: ctx.password, testId: probe.id, text: t.id })
        .then(function (r) { if (!r.ok) return r.json().catch(function () { return {}; }).then(function (x) { throw new Error(fehlerText(r, x)); }); return r.blob(); })
        .then(function (blob) {
          if (!box.isConnected) return;
          var u = URL.createObjectURL(blob.type ? blob : new Blob([blob], { type: "audio/mpeg" })), n = 0; adressen.push(u);
          ton.innerHTML = '<audio controls preload="auto"></audio><div class="ph-zeile"><span class="ph-stand" role="status">Noch nicht abgespielt</span>' +
            '<a class="ph-knopf" download>⬇ Aufnahme herunterladen (MP3)</a></div>';
          var a = ton.querySelector("audio"), stand = ton.querySelector(".ph-stand"), dl = ton.querySelector("a");
          a.src = u; dl.href = u; dl.setAttribute("download", t.aufnahme.name || "hoertext.mp3");
          a.addEventListener("play", function () { if (a.currentTime < 1) stand.textContent = (n + 1) + ". Durchgang läuft …"; });
          a.addEventListener("ended", function () {
            n++; stand.textContent = n + (n === 1 ? " Durchgang" : " Durchgänge") + " von " + mal + " abgespielt" + (n >= mal ? " ✓" : "");
            stand.classList.toggle("fertig", n >= mal);
          });
        })
        .catch(function (e) { ton.innerHTML = '<p class="ph-meldung">' + esc(e.message || "Keine Verbindung zum Server.") + "</p>"; });
      return el;
    }

    post(mod.hoertextPath, { password: ctx.password, testId: probe.id })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (x) { if (!r.ok || !x.ok) throw new Error(fehlerText(r, x)); return x; }); })
      .then(function (x) {
        if (!(x.hoertexte || []).length) throw new Error("Zu dieser Probe gibt es keinen Hörtext.");
        inhalt.innerHTML = '<p class="ph-hinweis">Die Kinder können den Hörtext nicht selbst abspielen. Spielen Sie die Aufnahme hier für die ganze Klasse ab (Lautsprecher anschließen, Lautstärke vorher prüfen) – oder laden Sie die Datei herunter. Geben Sie den Kindern vorher Zeit, die Aufgaben zu lesen.</p>';
        x.hoertexte.forEach(function (t, i) { inhalt.appendChild(text(t, i + 1)); });
      })
      .catch(function (e) { inhalt.innerHTML = '<p class="ph-meldung">' + esc(e.message || "Keine Verbindung zum Server.") + "</p>"; });
  }

  global.GrumiProbeHoertext = { kann: kann, oeffnen: oeffnen };
})(window);
