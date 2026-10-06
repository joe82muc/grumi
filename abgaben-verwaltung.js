/* Verwaltung für die Lehrkraft (proben-verwalten.html, Klasse der 8. Stufe → Reiter „Informatik“):
 * Abgegebene Dateien ansehen – die Excel-Mappen und Scratch-Projekte, die die Kinder in den Einheiten hochgeladen haben.
 * Aufruf aus lernfortschritt.js:  AbgabenVerwaltung.zeige(el, { api, pw, klasse, pfad: "/api/inf8", liste: window.INF8, name: code => "…" })
 * Server: /api/inf8/lehrer/abgaben, …/abgabe, …/abgaben/loeschen (englisch_9, abgaben.js).
 * Der Server kennt nur den Code des Kindes; den Namen dazu hält die Verwaltung im Browser der Lehrkraft (ctx.name).
 */
(function (global) {
  "use strict";
  var doc = global.document;

  var CSS = "" +
    ".abg-kind{border:1.5px solid var(--line);border-radius:12px;background:#fff;margin:.7rem 0 0;overflow:hidden}" +
    ".abg-kopf{display:flex;flex-wrap:wrap;gap:.5rem .8rem;align-items:center;justify-content:space-between;padding:.6rem .9rem;background:#f3f6fb}" +
    ".abg-kopf b{font-size:1rem}.abg-kopf small{color:var(--muted);font-weight:700;font-size:.8rem;margin-left:.4rem}" +
    ".abg-zeile{display:grid;grid-template-columns:1fr auto auto auto;gap:.4rem .8rem;align-items:center;padding:.5rem .9rem;border-top:1px solid var(--line)}" +
    ".abg-zeile small{display:block;color:var(--muted);font-weight:700;font-size:.78rem}" +
    ".abg-stand{font-weight:800;font-size:.82rem;white-space:nowrap}.abg-stand.ok{color:#15803d}.abg-stand.offen{color:#b45309}" +
    ".abg-knopf{border:1.5px solid var(--line);border-radius:999px;padding:.3rem .8rem;font:800 .8rem inherit;font-family:inherit;cursor:pointer;background:#fff;color:var(--accent)}" +
    ".abg-knopf.weg{color:#b91c1c}.abg-knopf[disabled]{opacity:.6;cursor:wait}" +
    ".abg-leiste{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:space-between;margin:.4rem 0 0}" +
    ".abg-sicht{grid-column:1/-1;border:1.5px solid var(--line);border-radius:10px;padding:.7rem .8rem;background:#fafbfd;overflow:auto}" +
    ".abg-sicht table{border-collapse:collapse;font-size:.84rem;background:#fff}" +
    ".abg-sicht th{background:#eef1f4;color:#56616c;font-weight:800;padding:.2rem .5rem;border:1px solid #d5dce3;text-align:center;min-width:2rem}" +
    ".abg-sicht td{border:1px solid #d5dce3;padding:.25rem .5rem;vertical-align:top;white-space:nowrap}" +
    ".abg-sicht td.zahl{text-align:right}.abg-sicht td code{display:block;font-size:.76rem;color:#1d4ed8;background:none;padding:0}" +
    ".abg-sicht pre{margin:0;font:600 .84rem/1.5 ui-monospace,Consolas,monospace;white-space:pre}" +
    ".abg-punkte{list-style:none;margin:.6rem 0 0;padding:0;font-size:.84rem}.abg-punkte li{padding:.12rem 0}.abg-punkte .ok{color:#15803d}.abg-punkte .bad{color:#b91c1c}" +
    ".abg-hinweis{color:var(--muted);font-size:.84rem;margin:.3rem 0 0}" +
    "@media(max-width:640px){.abg-zeile{grid-template-columns:1fr auto}}";

  function stil() {
    if (doc.getElementById("abg-stil")) return;
    var s = doc.createElement("style");
    s.id = "abg-stil"; s.textContent = CSS;
    doc.head.appendChild(s);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function post(ctx, route, body) {
    body = body || {}; body.password = ctx.pw; body.klasse = ctx.klasse;
    return fetch(ctx.api + (ctx.pfad || "/api/inf8") + "/lehrer/" + route, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok || !d.ok) throw new Error(d.error || "Der Server antwortet nicht (" + r.status + ").");
        return d;
      });
    });
  }
  function zeit(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    var z = function (n) { return (n < 10 ? "0" : "") + n; };
    return z(d.getDate()) + "." + z(d.getMonth() + 1) + "." + d.getFullYear() + ", " + z(d.getHours()) + ":" + z(d.getMinutes()) + " Uhr";
  }
  // Einheit zu einer Aufgabe: Die Kennung beginnt mit der Kennung der Einheit („scratch-start-auf1“)
  function einheitVon(ctx, aufgabe) {
    var treffer = null;
    ((ctx.liste && ctx.liste.THEMEN) || []).forEach(function (t) {
      t.module.forEach(function (m) {
        if (aufgabe.indexOf(m.id + "-") === 0 && (!treffer || m.id.length > treffer.id.length)) treffer = m;
      });
    });
    return treffer ? treffer.titel : "";
  }
  function spalte(n) { var s = ""; while (n > 0) { s = String.fromCharCode(65 + (n - 1) % 26) + s; n = Math.floor((n - 1) / 26); } return s; }

  function vorschauHtml(d) {
    var v = d.vorschau, html = "";
    if (v && v.art === "tabelle") {
      html += "<table><tr><th></th>";
      for (var s = 1; s <= v.spalten; s++) html += "<th>" + spalte(s) + "</th>";
      html += "</tr>";
      for (var z = 1; z <= v.zeilen; z++) {
        html += "<tr><th>" + z + "</th>";
        for (s = 1; s <= v.spalten; s++) {
          var c = v.zellen[spalte(s) + z];
          html += c ? '<td class="' + (/^-?[\d.,]+( €| %)?$/.test(c.t) ? "zahl" : "") + '">' + esc(c.t) + (c.f ? "<code>" + esc(c.f) + "</code>" : "") + "</td>" : "<td></td>";
        }
        html += "</tr>";
      }
      html += '</table><p class="abg-hinweis">Blau unter dem Wert steht die Formel der Zelle.</p>';
    } else if (v && v.art === "programm") {
      html += "<pre>" + esc(v.text) + "</pre>" + '<p class="abg-hinweis">Figuren: ' + esc((v.figuren || []).join(", ") || "–") + " · Variablen: " + esc((v.variablen || []).join(", ") || "–") + "</p>";
    } else html += '<p class="abg-hinweis">Für diese Datei gibt es keine Vorschau. Lade sie herunter und öffne sie im Programm.</p>';
    if (d.punkte && d.punkte.length) {
      html += '<ul class="abg-punkte">' + d.punkte.map(function (p) { return '<li class="' + (p.ok ? "ok" : "bad") + '">' + (p.ok ? "✓ " : "✗ ") + esc(p.text) + "</li>"; }).join("") + "</ul>";
    }
    return html;
  }
  function speichern(d) {
    var roh = global.atob(d.datei), bytes = new Uint8Array(roh.length);
    for (var i = 0; i < roh.length; i++) bytes[i] = roh.charCodeAt(i);
    var url = URL.createObjectURL(new Blob([bytes], { type: "application/octet-stream" })), a = doc.createElement("a");
    a.href = url; a.download = d.name; doc.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  function zeige(el, ctx) {
    if (!el) return;
    stil();
    var offenGeklappt = false, ABGABEN = [];
    function zeichnen(meldung) {
      var kinder = {};
      ABGABEN.forEach(function (a) { (kinder[a.code] = kinder[a.code] || []).push(a); });
      var codes = Object.keys(kinder).sort();
      var html = '<details class="nt7f"' + (offenGeklappt ? " open" : "") + '><summary>📁 Abgegebene Dateien für Klasse ' + esc(ctx.klasse) +
        " <small>" + (ABGABEN.length ? ABGABEN.length + (ABGABEN.length === 1 ? " Datei von " : " Dateien von ") + codes.length + (codes.length === 1 ? " Kind" : " Kindern") : "noch keine") + "</small></summary>" +
        '<p class="hint">Hier liegen die Excel-Mappen und Scratch-Projekte, die die Kinder in den Einheiten hochgeladen haben: je Kind und Auftrag die neueste Fassung. ' +
        "Der Server speichert dazu nur den Code des Kindes, keinen Namen. Ohne Löschen verfällt eine Datei nach 400 Tagen.</p>" +
        (meldung ? '<p class="status ' + meldung[1] + '">' + esc(meldung[0]) + "</p>" : "") +
        '<div class="abg-leiste"><button type="button" class="abg-knopf" data-abg="neu">↻ Aktualisieren</button>' +
        (ABGABEN.length ? '<button type="button" class="abg-knopf weg" data-abg="alle">Alle Dateien der Klasse löschen</button>' : "") + "</div>";
      codes.forEach(function (code) {
        var name = ctx.name ? ctx.name(code) : "";
        html += '<div class="abg-kind"><div class="abg-kopf"><div><b>' + esc(name || "Code " + code) + "</b>" + (name ? "<small>Code " + esc(code) + "</small>" : "") +
          '</div><button type="button" class="abg-knopf weg" data-abg="kind" data-code="' + esc(code) + '">Dateien dieses Kindes löschen</button></div>';
        kinder[code].forEach(function (a) {
          var einheit = einheitVon(ctx, a.aufgabe);
          html += '<div class="abg-zeile" data-code="' + esc(code) + '" data-aufgabe="' + esc(a.aufgabe) + '"><div><b>' + esc(a.titel) + "</b><small>" +
            esc((einheit ? einheit + " · " : "") + (a.art === "sb3" ? "Scratch-Projekt" : "Excel-Mappe") + " · " + zeit(a.zeit) + " · " + Math.max(1, Math.round(a.groesse / 1024)) + " KB") + "</small></div>" +
            '<span class="abg-stand ' + (a.erfuellt ? "ok" : "offen") + '">' + (a.erfuellt ? "✓ erfüllt" : "✗ " + a.offen + " von " + a.anzahl + " offen") + "</span>" +
            '<button type="button" class="abg-knopf" data-abg="sehen">Ansehen</button><button type="button" class="abg-knopf" data-abg="laden">Herunterladen</button></div>';
        });
        html += "</div>";
      });
      el.innerHTML = html + "</details>";
      var d = el.querySelector("details");
      d.addEventListener("toggle", function () { offenGeklappt = d.open; });
      Array.prototype.forEach.call(d.querySelectorAll("[data-abg]"), function (b) { b.addEventListener("click", function () { klick(b); }); });
    }
    function laden(meldung) {
      return post(ctx, "abgaben").then(function (d) { ABGABEN = d.abgaben || []; zeichnen(meldung); })
        .catch(function (x) { ABGABEN = []; zeichnen(["Die abgegebenen Dateien lassen sich gerade nicht laden: " + x.message, "bad"]); });
    }
    function klick(b) {
      var art = b.getAttribute("data-abg"), zeile = b.closest(".abg-zeile");
      if (art === "neu") { b.disabled = true; laden(); return; }
      if (art === "alle" || art === "kind") {
        var code = b.getAttribute("data-code") || "";
        var frage = art === "alle" ? "Wirklich alle abgegebenen Dateien der Klasse " + ctx.klasse + " löschen?" : "Wirklich alle Dateien von " + ((ctx.name && ctx.name(code)) || "Code " + code) + " löschen?";
        if (!global.confirm(frage)) return;
        b.disabled = true;
        post(ctx, "abgaben/loeschen", code ? { code: code } : {}).then(function (d) { return laden([d.anzahl + (d.anzahl === 1 ? " Datei gelöscht." : " Dateien gelöscht."), "ok"]); })
          .catch(function (x) { b.disabled = false; zeichnen(["Das Löschen hat nicht geklappt: " + x.message, "bad"]); });
        return;
      }
      if (!zeile) return;
      var alt = zeile.querySelector(".abg-sicht");
      if (art === "sehen" && alt) { alt.remove(); b.textContent = "Ansehen"; return; }
      b.disabled = true;
      post(ctx, "abgabe", { code: zeile.getAttribute("data-code"), aufgabe: zeile.getAttribute("data-aufgabe") }).then(function (d) {
        b.disabled = false;
        if (art === "laden") { speichern(d); return; }
        var sicht = doc.createElement("div");
        sicht.className = "abg-sicht"; sicht.innerHTML = vorschauHtml(d);
        zeile.appendChild(sicht); b.textContent = "Schließen";
      }).catch(function (x) { b.disabled = false; global.alert("Die Datei lässt sich gerade nicht holen: " + x.message); });
    }
    el.innerHTML = '<p class="hint">Abgegebene Dateien werden geladen …</p>';
    laden();
  }

  global.AbgabenVerwaltung = { zeige: zeige };
})(window);
