/* NT 8: Probe-Vorbereitung (vorbereitung.html?probe=<Themenbereich>) – wechselnde Übungsaufgaben aus allen Modulen
 * einer Probe. Keine Kopie der Probe: Die Aufgaben stehen offen auf der Website (vorbereitung/<bereich>.js), die
 * Probenaufgaben liegen nur auf dem Server und haben andere Zahlen, Situationen und Bilder.
 *
 * Daten: vorbereitung/<bereich>.js ruft NT8Vorbereitung.pool("<bereich>", [ Aufgabe, … ]) auf.
 *   { id, modul, art, typ, q, …, e, nurM? }
 *   id     fest und eindeutig im Themenbereich (z. B. „m2-v1“) – daran hängt der Lernstand
 *   modul  Kennung aus themen.js · art: begriff | bild | versuch | diagramm | rechnen | zusammenhang | anwendung |
 *          transfer | bewerten · nurM: true = nur M8
 *   typ "mc":    o: [4 Antworten], a: Index der richtigen (wird gemischt)
 *   typ "rf":    aussagen: [["Aussage", true|false], …]
 *   typ "zahl":  loesung, toleranz, einheit; weg = Rechenweg für die Rückmeldung
 *   typ "offen": m = Musterlösung, k = Stichwortgruppen ("wort|variante"), min; die KI gibt Rückmeldung
 *   Zu jeder Aufgabe möglich: bild (eigenes SVG als Text), tabelle, diagramm, labor (siehe darstellung.js, labor.js)
 *   e = Erklärung nach der Antwort (immer angeben)
 * Eine Runde: 10 Aufgaben – aus jedem offenen Modul mindestens eine, bevorzugt solche, die noch nie richtig waren,
 * dazu mindestens zwei Transferaufgaben. Am Ende: „Dein Lernstand“ je Modul und für Transfer (sicher / noch üben).
 * Speicher: Ergebnis auf dem Gerät (für die Übersicht) und – mit Code – als Lernstand „nt8-vb-<bereich>“ auf dem
 * Server (richtig gelöste Aufgaben; Teil „M4 · Transfer“ nennt Modul und Art für die Lernstandsdiagnose).
 */
(function (global) {
  "use strict";
  var doc = global.document, L = global.NT8, K = global.NT8Karten, D = global.NT8Darstellung;
  var POOLS = {}, wartet = null;
  var ARTEN = { begriff: "Begriffe", bild: "Abbildung", versuch: "Versuch", diagramm: "Diagramm", rechnen: "Rechnen", zusammenhang: "Zusammenhang", anwendung: "Anwendung", transfer: "Transfer", bewerten: "Bewerten" };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var norm = function (s) { return String(s).toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue"); };
  var mische = function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  global.NT8Vorbereitung = { pool: function (bereich, aufgaben) { POOLS[bereich] = aufgaben || []; if (wartet) { var w = wartet; wartet = null; w(); } }, ARTEN: ARTEN };
  if (!doc.getElementById("vbBox")) return;   // nur die Daten-Schnittstelle (z. B. in Prüfwerkzeugen)

  var P = new URLSearchParams(location.search), thema = L.themaVon(P.get("probe") || ""), box = doc.getElementById("vbBox");
  var a = K.anmeldung(), zug = K.zug(), RUNDE = 10;
  if (zug === "R") { doc.getElementById("vbMarke").href = "../../8R/NT/index.html"; doc.getElementById("vbZurueck").href = "../../8R/NT/index.html"; }
  if (!thema) { box.innerHTML = '<p class="hint">Diese Probe-Vorbereitung gibt es nicht. Geh zurück zur Übersicht.</p>'; return; }
  doc.getElementById("vbTitel").textContent = "Probe " + parseInt(thema.nr, 10) + " vorbereiten: " + thema.titel;
  doc.title = "Probe-Vorbereitung " + thema.titel + " | NT 8";

  var SCHL = "grumi-nt8-vb~" + (a ? a.kennung : "gast") + "~" + thema.id;
  function stand() { try { return JSON.parse(localStorage.getItem(SCHL) || "null") || { geloest: [], runden: 0 }; } catch (_e) { return { geloest: [], runden: 0 }; } }
  function sichern(s) { try { localStorage.setItem(SCHL, JSON.stringify(s)); } catch (_e) {} }

  // Pool für den Zug und nur aus Modulen, die für die Klasse offen sind
  function pool(offene) { return (POOLS[thema.id] || []).filter(function (x) { return offene.indexOf(x.modul) >= 0 && !(x.nurM && zug === "R"); }); }
  function ziehe(alle, geloest) {
    var neu = function (x) { return geloest.indexOf(x.id) < 0; }, wahl = [], hat = {};
    var nimm = function (x) { if (x && !hat[x.id] && wahl.length < RUNDE) { hat[x.id] = 1; wahl.push(x); } };
    var module = []; alle.forEach(function (x) { if (module.indexOf(x.modul) < 0) module.push(x.modul); });
    // aus jedem Modul eine (lieber eine noch nicht gelöste), dann zwei Transferaufgaben, dann auffüllen
    module.forEach(function (m) { var k = mische(alle.filter(function (x) { return x.modul === m; })); nimm(k.filter(neu)[0] || k[0]); });
    mische(alle.filter(function (x) { return x.art === "transfer"; })).sort(function (x, y) { return neu(y) - neu(x); }).slice(0, 2).forEach(nimm);
    mische(alle.filter(neu)).forEach(nimm); mische(alle).forEach(nimm);
    return mische(wahl);
  }

  function los(offene) {
    var alle = pool(offene);
    if (!offene.length) { box.innerHTML = '<p class="hint">🔒 Die Module zu dieser Probe sind für deine Klasse noch nicht freigeschaltet.</p>'; return; }
    if (!alle.length) { box.innerHTML = '<p class="hint">Zu dieser Probe gibt es noch keine Übungsaufgaben. Lerne solange mit den Modulen und den <a href="lernkarten.html?probe=' + esc(thema.id) + '">Lernkarten</a>.</p>'; return; }
    var st = stand();
    box.innerHTML = "<h3 style=\"margin-top:0\">So läuft es</h3><p>Du bekommst " + Math.min(RUNDE, alle.length) + " Aufgaben aus " + (offene.length === 1 ? "dem Modul" : "den " + offene.length + " Modulen") + " der Probe. Nach jeder Antwort siehst du sofort, ob sie stimmt – mit Erklärung. Am Ende steht dein Lernstand je Modul.</p>" +
      (st.runden ? '<p class="hint">Bisher: ' + st.runden + (st.runden === 1 ? " Runde" : " Runden") + ", " + st.geloest.filter(function (id) { return alle.some(function (x) { return x.id === id; }); }).length + " von " + alle.length + " Übungsaufgaben schon einmal richtig.</p>" : "") +
      '<div class="row-btns"><button type="button" class="btn" id="vbStart">▶ Runde starten</button><a class="btn ghost" href="lernkarten.html?probe=' + esc(thema.id) + '">🧠 Lieber Lernkarten</a></div>';
    doc.getElementById("vbStart").addEventListener("click", function () { runde(alle, offene); });
  }

  function runde(alle, offene) {
    var st = stand(), liste = ziehe(alle, st.geloest), i = 0, erg = [];   // erg: { x, ok }
    function modulTitel(id) { var r = L.modulVon(id); return r ? r.modul.titel : id; }
    function zeige() {
      var x = liste[i], h = '<div class="vbs-kopf"><span>Aufgabe ' + (i + 1) + " von " + liste.length + '</span><span class="hint">' + erg.filter(function (e) { return e.ok; }).length + ' richtig</span></div><div class="vbs-bar"><div style="width:' + (i / liste.length * 100) + '%"></div></div>' +
        '<div class="vbs-marken"><span>📘 ' + esc(modulTitel(x.modul)) + '</span><span class="' + (x.art === "transfer" ? "t" : "") + '">' + (x.art === "transfer" ? "🔁 " : "") + esc(ARTEN[x.art] || "") + "</span></div>" +
        '<div class="q" style="margin-top:0"><div class="q-title" style="font-size:1.08rem">' + esc(x.q) + "</div>" + (x.bild ? '<div class="lk-bild" style="margin:10px 0">' + x.bild + "</div>" : "") + (D ? D.html(x) : "") + (x.labor ? '<div id="vbLabor"></div>' : "");
      if (x.typ === "mc") h += '<div class="opts">' + mische(x.o.map(function (t, k) { return { t: t, k: k }; })).map(function (o) { return '<button class="opt round" data-k="' + o.k + '"><span class="box"></span><span>' + esc(o.t) + "</span></button>"; }).join("") + "</div>";
      else if (x.typ === "rf") h += '<div class="tf">' + x.aussagen.map(function (s, k) { return '<div class="tf-row" data-i="' + k + '"><span>' + esc(s[0]) + '</span><div class="tf-btns"><button data-v="1">richtig</button><button data-v="0">falsch</button></div></div>'; }).join("") + '</div><div class="row-btns"><button class="btn small" id="vbPruefen">Prüfen</button></div>';
      else if (x.typ === "zahl") h += '<div class="vbs-zahl"><label>Ergebnis: <input type="text" inputmode="decimal" id="vbZahl" maxlength="12" autocomplete="off"></label>' + (x.einheit ? "<strong>" + esc(x.einheit) + "</strong>" : "") + '<button class="btn small" id="vbPruefen">Prüfen</button></div>';
      else h += '<textarea class="vbs-text" id="vbTextfeld" placeholder="Deine Antwort …"></textarea><div class="row-btns"><button class="btn small teal" id="vbPruefen">✨ Antwort prüfen</button></div><div class="status"></div>';
      h += '<div class="fb"></div></div><div class="row-btns"><button type="button" class="btn" id="vbWeiter" hidden>' + (i + 1 < liste.length ? "Nächste Aufgabe →" : "Zum Lernstand →") + "</button></div>";
      box.innerHTML = h;
      if (x.labor && D) D.labor(doc.getElementById("vbLabor"), { labor: x.labor, type: "" });
      var fb = box.querySelector(".fb"), weiter = doc.getElementById("vbWeiter"), fertig = false;
      var ergebnis = function (ok, text) { if (fertig) return; fertig = true; erg.push({ x: x, ok: ok }); fb.className = "fb show " + (ok ? "ok" : "bad"); fb.innerHTML = (ok ? "✅ Richtig! " : "❌ Noch nicht. ") + (text || esc(x.e || "")); weiter.hidden = false; weiter.focus(); };
      weiter.addEventListener("click", function () { i++; if (i < liste.length) zeige(); else ende(); });
      if (x.typ === "mc") Array.prototype.forEach.call(box.querySelectorAll(".opt"), function (b) {
        b.addEventListener("click", function () {
          if (fertig) return;
          var ok = +b.dataset.k === x.a; b.classList.add(ok ? "right" : "wrong");
          if (!ok) { var r = box.querySelector('.opt[data-k="' + x.a + '"]'); if (r) r.classList.add("right"); }
          Array.prototype.forEach.call(box.querySelectorAll(".opt"), function (o) { o.disabled = true; });
          ergebnis(ok);
        });
      });
      if (x.typ === "rf") {
        Array.prototype.forEach.call(box.querySelectorAll(".tf-row"), function (row) { Array.prototype.forEach.call(row.querySelectorAll("button"), function (b) { b.addEventListener("click", function () { if (fertig) return; Array.prototype.forEach.call(row.querySelectorAll("button"), function (y) { y.classList.toggle("sel", y === b); }); }); }); });
        doc.getElementById("vbPruefen").addEventListener("click", function () {
          var rows = box.querySelectorAll(".tf-row"), ok = 0, offen = 0;
          Array.prototype.forEach.call(rows, function (row) { var s = row.querySelector("button.sel"); if (!s) { offen++; return; } var r = (s.dataset.v === "1") === x.aussagen[row.dataset.i][1]; row.classList.add(r ? "right" : "wrong"); if (r) ok++; });
          if (offen) { fb.className = "fb show mid"; fb.textContent = "Entscheide dich bei jeder Aussage."; Array.prototype.forEach.call(rows, function (r) { r.classList.remove("right", "wrong"); }); return; }
          ergebnis(ok === x.aussagen.length, (ok === x.aussagen.length ? "" : ok + " von " + x.aussagen.length + " Aussagen stimmen. ") + esc(x.e || ""));
        });
      }
      if (x.typ === "zahl") {
        var pruefe = function () {
          var roh = doc.getElementById("vbZahl").value.replace(/\s+/g, "").replace(",", "."), m = roh.match(/^-?\d+(\.\d+)?/);
          if (!m) { fb.className = "fb show mid"; fb.textContent = "Tippe eine Zahl ein."; return; }
          var ok = Math.abs(Number(m[0]) - x.loesung) <= (x.toleranz || 0) + 1e-9;
          ergebnis(ok, (ok ? "" : "Richtig ist " + String(x.loesung).replace(".", ",") + (x.einheit ? " " + esc(x.einheit) : "") + ". ") + esc(x.weg || x.e || ""));
        };
        doc.getElementById("vbPruefen").addEventListener("click", pruefe);
        doc.getElementById("vbZahl").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); pruefe(); } });
      }
      if (x.typ === "offen") doc.getElementById("vbPruefen").addEventListener("click", function () {
        var text = doc.getElementById("vbTextfeld").value.trim(), knopf = doc.getElementById("vbPruefen"), status = box.querySelector(".status");
        if (text.length < 3) { fb.className = "fb show mid"; fb.textContent = "Schreib zuerst eine Antwort."; return; }
        knopf.disabled = true; status.textContent = "Die KI liest deine Antwort …";
        var lokal = function () { var t = norm(text), hits = x.k.filter(function (g) { return g.split("|").some(function (w) { return t.indexOf(norm(w)) >= 0; }); }).length; return { richtig: hits >= (x.min || x.k.length), rueckmeldung: "Offline-Prüfung nach Fachbegriffen." }; };
        var ctl = global.AbortController ? new AbortController() : null, frist = setTimeout(function () { if (ctl) ctl.abort(); }, 60000);
        global.fetch(L.API + "/api/nt8/uebung/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, signal: ctl ? ctl.signal : undefined,
          body: JSON.stringify({ thema: thema.titel + ": " + modulTitel(x.modul), frage: x.q, erwartet: x.m, antwort: text, keywords: x.k.map(function (g) { return g.split("|")[0]; }) }) })
          .then(function (r) { return r.json(); }).then(function (d) { return d && d.quelle === "ki" ? d : lokal(); }).catch(lokal).then(function (d) {
            clearTimeout(frist); status.textContent = "";
            ergebnis(!!d.richtig, esc(d.rueckmeldung || "") + "<br><strong>Beispiel für eine gute Antwort:</strong> " + esc(x.m));
          });
      });
    }
    function ende() {
      var st2 = stand(), richtig = erg.filter(function (e) { return e.ok; });
      richtig.forEach(function (e) { if (st2.geloest.indexOf(e.x.id) < 0) st2.geloest.push(e.x.id); });
      st2.runden = (st2.runden || 0) + 1; st2.pct = Math.round(richtig.length / erg.length * 100);
      st2.wann = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
      sichern(st2); melden(st2, alle);
      // Lernstand je Modul und für Transfer: sicher, wenn in dieser Runde mindestens 70 % der Aufgaben dazu stimmten
      var gruppen = [];
      offene.forEach(function (m) { var e = erg.filter(function (r) { return r.x.modul === m; }); if (e.length) gruppen.push([modulTitel(m), e, m]); });
      var tr = erg.filter(function (r) { return r.x.art === "transfer"; }); if (tr.length) gruppen.push(["Transfer", tr, ""]);
      var ueben = [];
      box.innerHTML = '<div style="text-align:center"><div style="font-size:2.6rem;line-height:1">' + (st2.pct >= 70 ? "🎉" : "💪") + '</div><h3 style="margin:.3em 0">Dein Lernstand</h3><p class="lead">' + richtig.length + " von " + erg.length + " Aufgaben richtig (" + st2.pct + ' %)</p></div><table class="vbs-stand">' +
        gruppen.map(function (g) { var ok = g[1].filter(function (r) { return r.ok; }).length, sicher = ok / g[1].length >= .7; if (!sicher && g[2]) ueben.push(g[2]); return "<tr><td>" + esc(g[0]) + '</td><td><span class="' + (sicher ? "vbs-sicher" : "vbs-ueben") + '">' + (sicher ? "SICHER" : "NOCH ÜBEN") + '</span> <span class="hint">' + ok + " / " + g[1].length + "</span></td></tr>"; }).join("") + "</table>" +
        (ueben.length ? '<p><strong>Das hilft dir jetzt:</strong></p><nav class="navlinks light">' + ueben.map(function (m) { var r = L.modulVon(m); return '<a href="' + esc(r.modul.href) + '">📘 ' + esc(r.modul.titel) + " wiederholen</a>"; }).join("") + '<a href="lernkarten.html?probe=' + esc(thema.id) + '&modus=unsicher">🎯 Unsichere Lernkarten</a></nav>' : '<p class="hint" style="text-align:center">Stark – mach noch eine Runde: Es kommen andere Aufgaben.</p>') +
        '<div class="row-btns" style="justify-content:center;margin-top:14px"><button type="button" class="btn" id="vbNochmal">🔁 Noch eine Runde</button><a class="btn ghost" href="' + (zug === "R" ? "../../8R/NT/index.html" : "index.html") + '">Zur Übersicht</a></div>';
      doc.getElementById("vbNochmal").addEventListener("click", function () { runde(alle, offene); });
    }
    zeige();
  }

  // Lernstand „nt8-vb-<bereich>“ beim Server melden: richtig gelöste Aufgaben, Katalog mit Modul und Art je Aufgabe
  function melden(st, alle) {
    if (!a || a.lehrer || !global.fetch) return;
    var katalog = {};
    alle.forEach(function (x) { var r = L.modulVon(x.modul); katalog[x.id] = [String(x.q).slice(0, 120), ((r && r.modul.kz) || "?") + " · " + (ARTEN[x.art] || x.art || "")]; });
    global.fetch(L.API + "/api/nt9/fortschritt/melden", { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
      body: JSON.stringify({ code: a.code, klasse: a.klasse, modul: "nt8-vb-" + thema.id, geloest: st.geloest.filter(function (id) { return katalog[id]; }), gesamt: alle.length, katalog: katalog,
        meta: { bereich: thema.titel, bnr: parseInt(thema.nr, 10) || 1, titel: "Probe-Vorbereitung", kurz: "PV", nr: 90 } }) }).catch(function () {});
  }

  // Aufgaben des Themenbereichs laden, dann nach der Freischaltung der Klasse starten
  function start() {
    var module = thema.module.filter(function (m) { return m.href && !m.extra; }), gestartet = false;
    var offenBei = function (stand) { return module.filter(function (m) { return L.offen(m, thema, stand); }).map(function (m) { return m.id; }); };
    if (L.VORSCHAU || (a && a.lehrer)) return los(module.map(function (m) { return m.id; }));
    if (!a) return los(offenBei(null));
    L.freigabe(a, function (stand) { if (gestartet) return; var o = offenBei(stand); gestartet = o.length > 0; los(o); }, function (text) { if (!gestartet && text) box.innerHTML = '<p class="hint">' + esc(text) + "</p>"; });
  }
  wartet = start;
  var s = doc.createElement("script");
  s.src = "vorbereitung/" + encodeURIComponent(thema.id) + ".js";
  s.onerror = function () { POOLS[thema.id] = []; wartet = null; start(); };
  doc.head.appendChild(s);
})(window);
