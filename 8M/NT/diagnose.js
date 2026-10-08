/* NT 8: Lernstandsdiagnose für die Lehrkraft (in proben-verwalten.html beim Fach „Natur und Technik“ einer
 * 8. Klasse; die Aufgabenanalyse steht auch auf der Lehrerseite der Proben, 8M/NT/lehrer.html).
 *
 * Grundlage – nichts wird eigens erhoben, alles liegt schon vor:
 *   Lernmodule         gelöste Aufgaben je Modul (Lernstand mit Code, /api/nt9/fortschritt/lehrer/liste, Kurs nt8);
 *                      daraus auch Versuche/Animationen, offene Fragen (Erklären) und Profi-Check (Lerncheck)
 *   Lernkarten         sichere Karten je Modul (Feld f im Lernstand des Moduls, siehe karten.js)
 *   Probe-Vorbereitung richtig gelöste Übungsaufgaben je Modul und Art (Lernstand „nt8-vb-<bereich>“, vorbereitung.js)
 *   Proben             Punkte je Aufgabe mit Modul, Kompetenzbereich, Art und „Transfer“ (/api/nt8/teacher/results)
 *
 * Ansichten: Klasse (Durchschnitt je Modul und Kompetenz, Hinweis auf unsichere Bereiche) · Kinder (Kompetenzmatrix
 * je Kind mit Fördervorschlägen) · Vorher/Nachher (Training vor der Probe und Ergebnis der Probe) · Aufgabenanalyse.
 * Stufen: sicher (ab 80 %) · überwiegend sicher (ab 60 %) · noch unsicher (ab 40 %) · noch einmal üben (darunter).
 * Das sind Lernstände zu Unterrichtsinhalten, keine Diagnosen über Kinder. Vorschläge sind Vorschläge: Freigeschaltet
 * und entschieden wird weiter von der Lehrkraft.
 */
(function (global) {
  "use strict";
  var doc = global.document;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); };
  var L = function () { return global.NT8; };
  var KOMP = { fachwissen: "Fachwissen", erkenntnis: "Erkenntnisse gewinnen", kommunikation: "Kommunizieren", bewertung: "Bewerten" };
  var ARTEN = { versuch: "Versuchsauswertung", diagramm: "Diagramme und Tabellen", rechnen: "Rechnen", modell: "Modelle", fachsprache: "Fachsprache" };
  var S = { el: null, cfg: null, daten: null, bereich: "", sicht: "klasse", kind: "", offen: false };

  function stil() {
    if (doc.getElementById("nt8dg-stil")) return;
    var s = doc.createElement("style"); s.id = "nt8dg-stil";
    s.textContent = ".dg{margin:0 0 1rem;padding:.8rem 1rem;border:1.5px solid #cfd8e3;border-radius:14px;background:#fff}" +
      ".dg h3{margin:.1rem 0 .4rem;font-size:1.1rem}.dg h4{margin:1rem 0 .3rem;font-size:.98rem}.dg p{margin:.3rem 0}" +
      ".dg-tabs{display:flex;flex-wrap:wrap;gap:.35rem;margin:.5rem 0}.dg-tabs button{padding:.4rem .8rem;border:1.5px solid #cbd5e1;border-radius:999px;background:#fff;font:inherit;font-weight:800;font-size:.86rem;cursor:pointer}" +
      ".dg-tabs button.on{background:#1e293b;color:#fff;border-color:#1e293b}" +
      ".dg-tab{width:100%;border-collapse:collapse;font-size:.9rem}.dg-tab th,.dg-tab td{padding:.35rem .5rem;border-bottom:1px solid #e2e8f0;text-align:left;vertical-align:middle}" +
      ".dg-tab th{font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;color:#64748b}.dg-tab td.z,.dg-tab th.z{text-align:right;white-space:nowrap}" +
      ".dg-bar{display:inline-block;width:90px;height:9px;border-radius:99px;background:#e2e8f0;overflow:hidden;vertical-align:middle;margin-right:.4rem}.dg-bar i{display:block;height:100%}" +
      ".dg-st{display:inline-block;padding:.08rem .55rem;border-radius:999px;font-size:.74rem;font-weight:800;white-space:nowrap}" +
      ".dg-3{background:#dcfce7;color:#166534}.dg-2{background:#e0f2fe;color:#075985}.dg-1{background:#fef3c7;color:#92400e}.dg-0{background:#fee2e2;color:#991b1b}.dg-x{background:#f1f5f9;color:#64748b}" +
      ".dg-3 i,.dg-bar i.dg-3{background:#16a34a}.dg-bar i.dg-2{background:#0284c7}.dg-bar i.dg-1{background:#d97706}.dg-bar i.dg-0{background:#dc2626}" +
      ".dg-hinweis{margin:.6rem 0;padding:.55rem .8rem;border-radius:10px;background:#fffbeb;border:1.5px solid #fde68a;font-weight:700}" +
      ".dg-klein{color:#64748b;font-size:.82rem}.dg-kind{cursor:pointer}.dg-kind:hover td{background:#f8fafc}" +
      ".dg-vorschlag{margin:.4rem 0;padding:.5rem .8rem;border-left:4px solid #0284c7;background:#f0f9ff;border-radius:0 10px 10px 0}.dg-vorschlag ul{margin:.2rem 0 0;padding-left:1.2rem}" +
      ".dg-scroll{overflow-x:auto}@media print{.dg-tabs{display:none}}";
    doc.head.appendChild(s);
  }
  // 0 = noch einmal üben, 1 = noch unsicher, 2 = überwiegend sicher, 3 = sicher; null = keine Daten
  var stufe = function (p) { return p == null ? null : p >= 80 ? 3 : p >= 60 ? 2 : p >= 40 ? 1 : 0; };
  var STUFE = ["noch einmal üben", "noch unsicher", "überwiegend sicher", "sicher"];
  var marke = function (p) { var s = stufe(p); return s == null ? '<span class="dg-st dg-x">keine Daten</span>' : '<span class="dg-st dg-' + s + '">' + STUFE[s] + "</span>"; };
  var balken = function (p) { var s = stufe(p); return p == null ? '<span class="dg-klein">–</span>' : '<span class="dg-bar"><i class="dg-' + s + '" style="width:' + p + '%"></i></span>' + p + " %"; };
  var pct = function (a, b) { return b ? Math.round(a / b * 100) : null; };
  var mittel = function (liste) { var w = liste.filter(function (x) { return x != null; }); return w.length ? Math.round(w.reduce(function (a, b) { return a + b; }, 0) / w.length) : null; };
  var zugVon = function (klasse) { return /M$/.test(String(klasse || "")) ? "M" : "R"; };

  function post(route, body) {
    return global.fetch(S.cfg.api + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.assign({ password: S.cfg.pw }, body)) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok || d.ok === false) throw new Error(d.error || "HTTP " + r.status); return d; }); });
  }

  /* ---------- Auswertung ---------- */
  // Art einer Modulaufgabe aus ihrer Bezeichnung im Aufgabenkatalog (die Bausteine vergeben sie einheitlich)
  function artModul(label, teil) {
    if (teil === "Plus") return "transfer";
    if (/^(Forscherauftrag|Animation|Versuch|Bild erkunden)/.test(label)) return "versuch";
    if (/^Offene Frage/.test(label)) return /Transfer/.test(label) ? "transfer" : "fachsprache";
    if (/^Profi-Check/.test(label)) return "check";
    return "fachwissen";
  }
  // Lernstand eines Kindes in einem Modul: { pct, n, t, versuch, fachsprache, transfer, check, karten }
  function modulStand(kind, m, katalog, zug) {
    var id = "nt8-" + m.id, p = kind.module[id], kat = katalog[id], aus = { pct: null, karten: null, arten: {} };
    if (kat) {
      var ids = Object.keys(kat).filter(function (a) { return zug === "M" || kat[a][1] !== "Plus"; });
      var g = (p && p.g) || {}, geloest = ids.filter(function (a) { return g[a]; });
      aus.pct = p ? pct(geloest.length, ids.length) : 0; aus.n = geloest.length; aus.t = ids.length; aus.begonnen = !!p;
      ids.forEach(function (a) { var art = artModul(kat[a][0], kat[a][1]), x = aus.arten[art] = aus.arten[art] || { g: 0, t: 0 }; x.t++; if (g[a]) x.g++; });
    }
    if (global.NT8Karten && global.NT8Karten.geladen([m.id])) {
      var karten = global.NT8Karten.karten(m.id, zug), f = (p && p.f) || {};
      aus.kartenT = karten.length; aus.kartenS = karten.filter(function (k) { return f[k.id] && f[k.id][1] >= 2; }).length;
      aus.karten = karten.length && p && p.f ? pct(aus.kartenS, karten.length) : null;
    }
    return aus;
  }
  // Probe-Vorbereitung eines Kindes im Themenbereich: je Modul (Kürzel im Teil „M4 · Transfer“) und je Art
  function trainingStand(kind, thema, katalog) {
    var id = "nt8-vb-" + thema.id, p = kind.module[id], kat = katalog[id], aus = { module: {}, arten: {}, pct: null };
    if (!kat || !p) return aus;
    var g = p.g || {}, ok = 0, n = 0;
    Object.keys(kat).forEach(function (a) {
      var teil = String(kat[a][1] || "").split("·"), kz = teil[0].trim(), art = (teil[1] || "").trim().toLowerCase();
      var x = aus.module[kz] = aus.module[kz] || { g: 0, t: 0 }; x.t++; n++; if (g[a]) { x.g++; ok++; }
      if (art) { var y = aus.arten[art] = aus.arten[art] || { g: 0, t: 0 }; y.t++; if (g[a]) y.g++; }
    });
    aus.pct = pct(ok, n);
    return aus;
  }
  // Probe eines Kindes im Themenbereich: Punkte je Modul, je Kompetenzbereich, je Art, Transfer
  function probeStand(abgabe) {
    var aus = { pct: abgabe ? abgabe.percent : null, module: {}, komp: {}, arten: {}, transfer: { p: 0, max: 0 } };
    ((abgabe && abgabe.details) || []).forEach(function (d) {
      var add = function (o, k) { if (!k) return; var x = o[k] = o[k] || { p: 0, max: 0 }; x.p += d.points || 0; x.max += d.maxPoints || 0; };
      add(aus.module, d.modul); add(aus.komp, d.kompetenz); (d.arten || []).forEach(function (a) { add(aus.arten, a); });
      if (d.type === "text") add(aus.arten, "fachsprache");
      if (d.transfer) { aus.transfer.p += d.points || 0; aus.transfer.max += d.maxPoints || 0; }
    });
    return aus;
  }
  var anteil = function (x) { return x && (x.max || x.t) ? pct(x.p != null ? x.p : x.g, x.max || x.t) : null; };

  // Alles zu einem Kind im gewählten Themenbereich
  function kindStand(kind, thema) {
    var D = S.daten, zug = zugVon(kind.klasse), module = thema.module.filter(function (m) { return m.href && !m.extra; });
    var eigene = (thema.proben || []).map(function (p) { return p[zug]; });
    var abgabe = D.abgaben.filter(function (a) { return String(a.code) === String(kind.code) && eigene.indexOf(a.testId) >= 0; })[0] || null;
    var tr = trainingStand(kind, thema, D.katalog), pr = probeStand(abgabe);
    var zeilen = module.map(function (m) {
      var ms = modulStand(kind, m, D.katalog, zug), training = anteil(tr.module[m.kz]), probe = anteil(pr.module[m.id]);
      // Lernstand vor der Probe: Modulaufgaben, Lernkarten und Probe-Vorbereitung (was davon vorliegt)
      var vorher = mittel([ms.begonnen ? ms.pct : null, ms.karten, training]);
      return { m: m, modul: ms, training: training, probe: probe, vorher: vorher, gesamt: probe != null ? probe : vorher };
    });
    var quer = [
      { name: "Versuchsauswertung", vorher: mittel(zeilen.map(function (z) { return anteil(z.modul.arten.versuch); }).concat([anteil(tr.arten.versuch)])), probe: anteil(pr.arten.versuch) },
      { name: "Diagramme und Tabellen", vorher: anteil(tr.arten.diagramm), probe: anteil(pr.arten.diagramm) },
      { name: "Rechnen", vorher: anteil(tr.arten.rechnen), probe: anteil(pr.arten.rechnen) },
      { name: "Transfer", vorher: mittel(zeilen.map(function (z) { return anteil(z.modul.arten.transfer); }).concat([anteil(tr.arten.transfer)])), probe: anteil(pr.transfer) },
      { name: "Fachsprache (Erklären)", vorher: mittel(zeilen.map(function (z) { return anteil(z.modul.arten.fachsprache); })), probe: anteil(pr.arten.fachsprache) },
      { name: "Bewerten", vorher: anteil(tr.arten.bewerten), probe: anteil(pr.komp.bewertung) }
    ].map(function (q) { q.gesamt = q.probe != null ? q.probe : q.vorher; return q; });
    return { kind: kind, zug: zug, zeilen: zeilen, quer: quer, abgabe: abgabe, training: tr.pct, probe: pr.pct, lerncheck: zeilen.filter(function (z) { var c = z.modul.arten.check; return c && c.g; }).length };
  }
  // Fördervorschläge aus den schwächsten Bereichen (höchstens drei Module, dazu Querschnitt)
  function vorschlaege(st) {
    var schwach = st.zeilen.filter(function (z) { return z.gesamt != null && z.gesamt < 60; }).sort(function (a, b) { return a.gesamt - b.gesamt; }).slice(0, 3);
    var quer = st.quer.filter(function (q) { return q.gesamt != null && q.gesamt < 60; });
    if (!schwach.length && !quer.length) return "";
    var punkte = [];
    schwach.forEach(function (z) {
      var v = z.modul.arten.versuch;
      punkte.push("Modul „" + esc(z.m.titel) + "“ wiederholen" + (v && v.g < v.t ? " – vor allem den Versuch und die Animation noch einmal" : ""));
      if (z.modul.kartenT && (z.modul.kartenS || 0) < z.modul.kartenT) punkte.push("Lernkarten zu „" + esc(z.m.titel) + "“: unsichere Karten (" + (z.modul.kartenS || 0) + " von " + z.modul.kartenT + " sicher)");
    });
    quer.forEach(function (q) { punkte.push(q.name === "Transfer" ? "Transferaufgaben in der Probe-Vorbereitung" : q.name === "Diagramme und Tabellen" ? "Diagrammtraining in der Probe-Vorbereitung" : q.name + " gezielt üben (Probe-Vorbereitung)"); });
    return '<div class="dg-vorschlag"><b>Noch unsicher bei:</b> ' + schwach.map(function (z) { return esc(z.m.titel); }).concat(quer.map(function (q) { return q.name; })).join(" · ") +
      "<br><b>Mögliche Wiederholung:</b><ul>" + punkte.slice(0, 6).map(function (p) { return "<li>→ " + p + "</li>"; }).join("") + '</ul><span class="dg-klein">Vorschlag aus den vorliegenden Lernständen. Freischalten und entscheiden bleibt bei dir.</span></div>';
  }

  /* ---------- Ansichten ---------- */
  function thema() { return L().themaVon(S.bereich) || L().THEMEN[0]; }
  function kinder() { return S.daten.schueler.filter(function (k) { return k.klasse === S.cfg.klasse; }); }
  function name(code) { var n = S.cfg.name ? S.cfg.name(code) : ""; return n ? esc(n) + ' <span class="dg-klein">Code ' + esc(code) + "</span>" : "Code " + esc(code); }

  function klasseSicht(staende) {
    var t = thema(), module = t.module.filter(function (m) { return m.href && !m.extra; });
    var zeilen = module.map(function (m, i) {
      return { name: m.titel, kz: m.kz, modul: mittel(staende.map(function (s) { var z = s.zeilen[i].modul; return z.begonnen ? z.pct : null; })), karten: mittel(staende.map(function (s) { return s.zeilen[i].modul.karten; })),
        training: mittel(staende.map(function (s) { return s.zeilen[i].training; })), probe: mittel(staende.map(function (s) { return s.zeilen[i].probe; })), gesamt: mittel(staende.map(function (s) { return s.zeilen[i].gesamt; })),
        begonnen: staende.filter(function (s) { return s.zeilen[i].modul.begonnen; }).length };
    });
    var quer = staende.length ? staende[0].quer.map(function (q, i) { return { name: q.name, vorher: mittel(staende.map(function (s) { return s.quer[i].vorher; })), probe: mittel(staende.map(function (s) { return s.quer[i].probe; })), gesamt: mittel(staende.map(function (s) { return s.quer[i].gesamt; })) }; }) : [];
    var unsicher = zeilen.concat(quer).filter(function (z) { return z.gesamt != null && z.gesamt < 60; }).sort(function (a, b) { return a.gesamt - b.gesamt; }).slice(0, 3).map(function (z) { return z.name; });
    return (unsicher.length ? '<p class="dg-hinweis">💡 ' + esc(unsicher.length === 1 ? unsicher[0] + " ist" : unsicher.slice(0, -1).join(", ") + " und " + unsicher[unsicher.length - 1] + " sind") + " in der Klasse noch unsicher.</p>" : "") +
      '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Modul</th><th>Module bearbeitet</th><th>Lernkarten sicher</th><th>Probe-Vorbereitung</th><th>Probe</th><th>Lernstand</th></tr></thead><tbody>' +
      zeilen.map(function (z) { return "<tr><td><b>" + esc(z.kz) + "</b> " + esc(z.name) + '<br><span class="dg-klein">' + z.begonnen + " von " + staende.length + " Kindern haben begonnen</span></td><td>" + balken(z.modul) + "</td><td>" + balken(z.karten) + "</td><td>" + balken(z.training) + "</td><td>" + balken(z.probe) + "</td><td>" + marke(z.gesamt) + "</td></tr>"; }).join("") +
      "</tbody></table></div><h4>Kompetenzen über alle Module des Themenbereichs</h4>" +
      '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Bereich</th><th>vor der Probe (Module, Training)</th><th>Probe</th><th>Lernstand</th></tr></thead><tbody>' +
      quer.map(function (q) { return "<tr><td>" + esc(q.name) + "</td><td>" + balken(q.vorher) + "</td><td>" + balken(q.probe) + "</td><td>" + marke(q.gesamt) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      '<p class="dg-klein">Durchschnitt der Kinder, zu denen es Daten gibt. Was du daraus machst, entscheidest du.</p>';
  }
  function kinderSicht(staende) {
    var gewaehlt = staende.filter(function (s) { return s.kind.code === S.kind; })[0];
    if (gewaehlt) {
      var s = gewaehlt;
      return '<p><button type="button" class="vw-chip" data-dg-kind="">← alle Kinder</button></p><h4>' + name(s.kind.code) + " · " + esc(s.kind.klasse) + " (" + (s.zug === "M" ? "M8" : "R8") + ")</h4>" +
        '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Bereich</th><th>Module</th><th>Lernkarten</th><th>Training</th><th>Probe</th><th>Lernstand</th></tr></thead><tbody>' +
        s.zeilen.map(function (z) { return "<tr><td><b>" + esc(z.m.kz) + "</b> " + esc(z.m.titel) + "</td><td>" + balken(z.modul.begonnen ? z.modul.pct : null) + "</td><td>" + (z.modul.kartenT ? (z.modul.kartenS || 0) + " / " + z.modul.kartenT : "–") + "</td><td>" + balken(z.training) + "</td><td>" + balken(z.probe) + "</td><td>" + marke(z.gesamt) + "</td></tr>"; }).join("") +
        s.quer.map(function (q) { return "<tr><td>" + esc(q.name) + '</td><td colspan="2">' + balken(q.vorher) + "</td><td></td><td>" + balken(q.probe) + "</td><td>" + marke(q.gesamt) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
        vorschlaege(s);
    }
    return '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Kind</th>' + thema().module.filter(function (m) { return m.href && !m.extra; }).map(function (m) { return '<th title="' + esc(m.titel) + '">' + esc(m.kz) + "</th>"; }).join("") +
      "<th>Transfer</th><th>Training</th><th>Probe</th></tr></thead><tbody>" + staende.map(function (s) {
        return '<tr class="dg-kind" data-dg-kind="' + esc(s.kind.code) + '"><td>' + name(s.kind.code) + "</td>" + s.zeilen.map(function (z) { return "<td>" + marke(z.gesamt).replace(/>([^<]+)</, function (_, t) { return ' title="' + t + '">' + (z.gesamt == null ? "–" : z.gesamt + " %") + "<"; }) + "</td>"; }).join("") +
          "<td>" + marke(s.quer[3].gesamt).replace(/>([^<]+)</, function (_, t) { return ' title="' + t + '">' + (s.quer[3].gesamt == null ? "–" : s.quer[3].gesamt + " %") + "<"; }) + "</td><td>" + (s.training == null ? "–" : s.training + " %") + "</td><td>" + (s.probe == null ? "–" : s.probe + " %") + "</td></tr>";
      }).join("") + '</tbody></table></div><p class="dg-klein">Zeile antippen: Kompetenzmatrix des Kindes mit Fördervorschlägen. Farben: grün sicher · blau überwiegend sicher · gelb noch unsicher · rot noch einmal üben.</p>';
  }
  function vergleichSicht(staende) {
    var t = thema(), module = t.module.filter(function (m) { return m.href && !m.extra; });
    var urteil = function (v, p) {
      if (v == null || p == null) return '<span class="dg-klein">noch kein Vergleich möglich</span>';
      if (p >= 80) return "→ weitgehend gesichert"; if (p < 60 && v < 60) return "→ weiter unsicher";
      if (p - v >= 10) return "→ in der Probe besser als im Training"; if (v - p >= 10) return "→ in der Probe schwächer als im Training"; return p >= 60 ? "→ überwiegend gesichert" : "→ noch unsicher";
    };
    var zeilen = module.map(function (m, i) { return [m.kz + " " + m.titel, mittel(staende.map(function (s) { return s.zeilen[i].vorher; })), mittel(staende.map(function (s) { return s.zeilen[i].probe; }))]; })
      .concat(staende.length ? staende[0].quer.map(function (q, i) { return [q.name, mittel(staende.map(function (s) { return s.quer[i].vorher; })), mittel(staende.map(function (s) { return s.quer[i].probe; }))]; }) : []);
    var mitProbe = staende.filter(function (s) { return s.abgabe; }).length;
    return "<p>" + mitProbe + " von " + staende.length + " Kindern haben die Probe zu diesem Themenbereich abgegeben.</p>" +
      '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Bereich</th><th>Lernstand vor der Probe</th><th>Probenergebnis</th><th>Vergleich</th></tr></thead><tbody>' +
      zeilen.map(function (z) { return "<tr><td>" + esc(z[0]) + "</td><td>" + balken(z[1]) + "</td><td>" + balken(z[2]) + "</td><td>" + urteil(z[1], z[2]) + "</td></tr>"; }).join("") + "</tbody></table></div>" +
      '<p class="dg-klein">„Vor der Probe“ = Modulaufgaben, sichere Lernkarten und Probe-Vorbereitung (was davon vorliegt).</p>';
  }

  /* ---------- Aufgabenanalyse einer Probe (auch für die Lehrerseite der Proben) ---------- */
  function aufgabenanalyse(abgaben) {
    stil();
    if (!abgaben || !abgaben.length) return '<p class="dg-klein">Zu dieser Probe gibt es noch keine Abgaben.</p>';
    var nach = {};
    abgaben.forEach(function (a) { (nach[a.testId] = nach[a.testId] || []).push(a); });
    return Object.keys(nach).sort().map(function (id) {
      var liste = nach[id], erste = liste[0];
      var zeilen = erste.details.map(function (d, i) {
        var alle = liste.map(function (a) { return a.details[i]; }).filter(Boolean), max = d.maxPoints || 1;
        var voll = alle.filter(function (x) { return x.points >= max; }).length, nix = alle.filter(function (x) { return !x.points; }).length, teil = alle.length - voll - nix;
        var schnitt = pct(alle.reduce(function (n, x) { return n + (x.points || 0); }, 0), alle.length * max);
        // Häufigste falsche Antwort (geschlossene Aufgaben) bzw. Hinweise aus der Korrektur schwacher freier Antworten
        var falsch = {}, haeufig = "";
        if (d.type === "text") {
          var hinweise = alle.filter(function (x) { return x.points < max && x.comment && !/Stichwortauswertung/.test(x.comment); }).map(function (x) { return x.comment; }).slice(0, 2);
          haeufig = hinweise.length ? "Aus der Korrektur: " + hinweise.join(" · ") : "";
        } else {
          alle.forEach(function (x) { if (x.points >= max) return; var g = Array.isArray(x.given) ? x.given.map(function (v, j) { return Array.isArray(x.expected) && v !== x.expected[j] ? ((x.labels || [])[j] || j + 1) + ": " + (v || "leer") : ""; }).filter(Boolean).join("; ") : String(x.given || "leer"); if (g) falsch[g] = (falsch[g] || 0) + 1; });
          var top = Object.keys(falsch).sort(function (a, b) { return falsch[b] - falsch[a]; })[0];
          haeufig = top && falsch[top] > 1 ? "Häufig (" + falsch[top] + "×): " + top : top && nix + teil > 0 ? "z. B.: " + top : "";
        }
        return "<tr><td><b>" + d.nr + "</b></td><td>" + esc(String(d.prompt).slice(0, 110)) + (String(d.prompt).length > 110 ? " …" : "") + '<br><span class="dg-klein">' + [d.modulTitel ? "📘 " + esc(d.modulTitel) : "", d.transfer ? "🔁 Transfer" : "", KOMP[d.kompetenz] || "", (d.arten || []).map(function (a) { return ARTEN[a] || a; }).join(", ")].filter(Boolean).join(" · ") + "</span>" +
          (haeufig ? '<br><span class="dg-klein">' + esc(haeufig.slice(0, 260)) + "</span>" : "") + '</td><td class="z">' + max + '</td><td class="z">' + balken(schnitt) + '</td><td class="z">' + voll + '</td><td class="z">' + teil + '</td><td class="z">' + nix + "</td></tr>";
      });
      return "<h4>" + esc(erste.testTitle || id) + ' <span class="dg-klein">(' + liste.length + (liste.length === 1 ? " Abgabe" : " Abgaben") + ", Schnitt " + mittel(liste.map(function (a) { return a.percent; })) + " %)</span></h4>" +
        '<div class="dg-scroll"><table class="dg-tab"><thead><tr><th>Nr.</th><th>Aufgabe · Modul · Kompetenz</th><th class="z">Punkte</th><th class="z">Klasse</th><th class="z" title="vollständig richtig">✓</th><th class="z" title="teilweise richtig">◐</th><th class="z" title="falsch oder leer">✗</th></tr></thead><tbody>' + zeilen.join("") + "</tbody></table></div>";
    }).join("");
  }

  /* ---------- Rahmen ---------- */
  function zeichnen() {
    var el = S.el, D = S.daten;
    if (!S.offen) { el.innerHTML = '<div class="dg"><h3>📊 Lernstandsdiagnose NT 8</h3><p class="dg-klein">Lernmodule, Lernkarten, Probe-Vorbereitung und Proben der Klasse ' + esc(S.cfg.klasse) + ' auf einen Blick – je Kind, für die Klasse und je Aufgabe.</p><button type="button" class="vw-chip" data-dg="auf">Diagnose öffnen</button></div>'; return; }
    if (!D) { el.innerHTML = '<div class="dg"><h3>📊 Lernstandsdiagnose NT 8</h3><p>Daten werden geladen …</p></div>'; return; }
    if (D.fehler) { el.innerHTML = '<div class="dg"><h3>📊 Lernstandsdiagnose NT 8</h3><p class="dg-hinweis">' + esc(D.fehler) + "</p></div>"; return; }
    var t = thema(), zug = zugVon(S.cfg.klasse), staende = kinder().map(function (k) { return kindStand(k, t); });
    var eigene = (t.proben || []).map(function (p) { return p[zug]; }), abgaben = D.abgaben.filter(function (a) { return a.className === S.cfg.klasse && eigene.indexOf(a.testId) >= 0; });
    var SICHT = [["klasse", "Klasse"], ["kinder", "Kinder"], ["vergleich", "Vor und nach der Probe"], ["aufgaben", "Aufgabenanalyse"]];
    el.innerHTML = '<div class="dg"><h3>📊 Lernstandsdiagnose NT 8 · Klasse ' + esc(S.cfg.klasse) + ' <span class="dg-klein">(' + staende.length + " Kinder)</span></h3>" +
      '<div class="dg-tabs">' + L().THEMEN.map(function (x) { return '<button type="button" data-dg-bereich="' + x.id + '" class="' + (x.id === t.id ? "on" : "") + '">' + x.icon + " " + esc(x.kurz || x.titel) + "</button>"; }).join("") + "</div>" +
      '<div class="dg-tabs">' + SICHT.map(function (x) { return '<button type="button" data-dg-sicht="' + x[0] + '" class="' + (x[0] === S.sicht ? "on" : "") + '">' + x[1] + "</button>"; }).join("") +
      '<button type="button" data-dg="zu">schließen</button></div>' +
      (!staende.length ? '<p class="dg-klein">In dieser Klasse gibt es noch keine Codes.</p>' : S.sicht === "kinder" ? kinderSicht(staende) : S.sicht === "vergleich" ? vergleichSicht(staende) : S.sicht === "aufgaben" ? aufgabenanalyse(abgaben) : klasseSicht(staende)) + "</div>";
  }
  function laden() {
    S.daten = null; zeichnen();
    Promise.all([post("/api/nt9/fortschritt/lehrer/liste", { kurs: "nt8", klasse: S.cfg.klasse }), post("/api/nt8/teacher/results", {}).catch(function () { return { submissions: [] }; })]).then(function (r) {
      S.daten = { schueler: r[0].schueler || [], katalog: r[0].katalog || {}, abgaben: r[1].submissions || [] };
      var ids = [].concat.apply([], L().THEMEN.map(function (t) { return t.module.filter(function (m) { return m.href; }).map(function (m) { return m.id; }); }));
      if (global.NT8Karten) global.NT8Karten.laden(ids, zeichnen);
      zeichnen();
    }).catch(function (e) { S.daten = { fehler: "Die Diagnose konnte nicht geladen werden: " + e.message }; zeichnen(); });
  }
  function zeige(el, cfg) {
    stil();
    S.el = el; S.cfg = cfg; S.daten = null; S.kind = ""; S.bereich = S.bereich || L().THEMEN[0].id;
    if (!el.__dg) {
      el.__dg = true;
      el.addEventListener("click", function (e) {
        var b = e.target.closest ? e.target.closest("[data-dg],[data-dg-bereich],[data-dg-sicht],[data-dg-kind]") : null; if (!b) return;
        if (b.hasAttribute("data-dg")) { S.offen = b.getAttribute("data-dg") === "auf"; if (S.offen) laden(); else zeichnen(); return; }
        if (b.hasAttribute("data-dg-bereich")) { S.bereich = b.getAttribute("data-dg-bereich"); S.kind = ""; }
        if (b.hasAttribute("data-dg-sicht")) { S.sicht = b.getAttribute("data-dg-sicht"); S.kind = ""; }
        if (b.hasAttribute("data-dg-kind")) { S.kind = b.getAttribute("data-dg-kind"); S.sicht = "kinder"; }
        zeichnen();
      });
    }
    if (S.offen) laden(); else zeichnen();
  }

  global.NT8Diagnose = { zeige: zeige, aufgabenanalyse: aufgabenanalyse, stufe: stufe, STUFE: STUFE };
})(window);
