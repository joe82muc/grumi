/* Sperre auf einer Lernseite: Ist die Seite für die Klasse des Kindes nicht freigeschaltet, verdeckt ein Hinweis
 * den Inhalt. Einbinden im <head> der Seite – eine Zeile, die Liste des Kurses steht in data-liste:
 *
 *   <script src="../../../js/kurs-sperre.js" data-liste="../../themen.js"></script>
 *
 * Das Skript lädt js/kursliste.js und die Liste nach, findet die Seite über ihre Adresse in der Liste und fragt den
 * Stand der Klasse ab (erst der zuletzt bekannte Stand des Geräts, dann der Server). Bis das entschieden ist, bleibt
 * der Inhalt unsichtbar – so blitzt eine gesperrte Seite nicht auf. Ohne Anmeldung ist alles gesperrt; der Hinweis
 * enthält dann das Feld für den Code. Seiten, die nicht in der Liste stehen, bleiben offen – ebenso Seiten, die in der
 * Liste „offen: true“ haben (NT 9): Sie sind sofort zu sehen und werden nur verdeckt, wenn die Lehrkraft sie für die
 * Klasse des Kindes gesperrt hat.
 * Lehrkräfte: ?vorschau=1 (Link „Vorschau“ in der Verwaltung) zeigt die Seite immer, der Lehrercode ebenso.
 * Lernsteuerung, kein Geheimnisschutz: Die Seiten sind öffentliche Dateien.
 */
(function (global) {
  "use strict";
  var doc = global.document, skript = doc.currentScript;
  if (!skript || global.__kursSperre) return;
  global.__kursSperre = true;
  var listeSrc = skript.getAttribute("data-liste") || "";
  var jsOrdner = skript.src.replace(/[^/]*$/, ""), wurzel = jsOrdner.replace(/[^/]*\/$/, "");

  var stil = doc.createElement("style");
  stil.textContent = "html.kurs-prueft body{visibility:hidden}" +
    "body.kurs-zu>*:not(#kursSperre):not(#kursVorschau){display:none!important}" +
    "#kursSperre{box-sizing:border-box;padding:28px 16px;font:17px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#15212b}" +
    ".kurs-sperre{box-sizing:border-box;max-width:620px;margin:0 auto;padding:28px 22px;border:1px solid #d8e2ea;border-radius:20px;background:#fff;text-align:center;box-shadow:0 4px 18px rgba(20,40,60,.08)}" +
    ".kurs-sperre .big{font-size:3rem;line-height:1}.kurs-sperre h2{margin:10px 0 6px;font-size:1.35rem;line-height:1.25}" +
    ".kurs-sperre p{margin:0 auto;max-width:46ch;color:#566674}" +
    ".kurs-sperre form{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;margin:16px 0 0}" +
    ".kurs-sperre label{font-weight:700}" +
    ".kurs-sperre input{width:5.2em;padding:9px 10px;border:1.5px solid #b9c7d3;border-radius:12px;font:700 1.25rem inherit;font-family:inherit;text-align:center;letter-spacing:.2em}" +
    ".kurs-sperre .fehler{flex-basis:100%;min-height:1.2em;margin:0;color:#b3261e;font-weight:700}" +
    ".kurs-sperre nav{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:16px}" +
    ".kurs-sperre nav a,.kurs-sperre button{display:inline-block;padding:9px 16px;border:1.5px solid #b9c7d3;border-radius:999px;background:#fff;color:#0b5d98;font:700 .95rem inherit;font-family:inherit;text-decoration:none;cursor:pointer}" +
    ".kurs-sperre button{background:#0d77c2;border-color:#0d77c2;color:#fff}.kurs-sperre button[disabled]{opacity:.6;cursor:wait}" +
    "#kursVorschau{background:#fff4dc;color:#7a5200;border-bottom:1px solid #f1d9a0;padding:8px 16px;font:700 .92rem system-ui,sans-serif;text-align:center}";
  doc.head.appendChild(stil);
  doc.documentElement.classList.add("kurs-prueft");
  function sichtbar() { doc.documentElement.classList.remove("kurs-prueft"); }

  function laden(src, dann, fehler) {
    var s = doc.createElement("script");
    s.src = src; s.onload = dann; s.onerror = fehler;
    doc.head.appendChild(s);
  }
  function bereit(fn) {
    if (doc.body) fn(); else doc.addEventListener("DOMContentLoaded", fn);
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }

  var L = null, reg = null, lauf = 0;

  // Der Lernstand der Seite (js/lernstand.js) öffnet für Gäste sein eigenes Anmeldefenster – ein Dialog über allem, der
  // den Rest der Seite sperrt. Solange die Seite gesperrt ist, meldet sich das Kind im Hinweis an: Dialoge gehen zu.
  function dialogeSchliessen() {
    Array.prototype.forEach.call(doc.querySelectorAll("dialog[open]"), function (d) { try { d.close(); } catch (_e) { d.removeAttribute("open"); } });
  }
  var waechter = global.MutationObserver ? new MutationObserver(function () { if (doc.body && doc.body.classList.contains("kurs-zu")) dialogeSchliessen(); }) : null;
  var beobachtet = false;

  // art: "zu" (gesperrt), "warten", "fehler"; mitCode: Feld für den Code zeigen
  function hinweis(art, titel, text, mitCode) {
    var box = doc.getElementById("kursSperre");
    doc.body.classList.add("kurs-zu");
    dialogeSchliessen();
    if (waechter && !beobachtet) { waechter.observe(doc.documentElement, { subtree: true, attributes: true, attributeFilter: ["open"] }); beobachtet = true; }
    if (!box) { box = doc.createElement("div"); box.id = "kursSperre"; doc.body.insertBefore(box, doc.body.firstChild); }
    // Übersicht des eigenen Zugs: Ein Kind der 9M landet nicht in der Übersicht der 9R (gemeinsam genutzte Seiten)
    var ich = global.GrumiKursliste ? global.GrumiKursliste.anmeldung() : null;
    var andere = L && L.ANDERE && ich && String(ich.zug || "").slice(-1) === L.ANDERE.zug ? L.ANDERE : null;
    var uebersicht = L ? wurzel + encodeURI(andere ? andere.href : L.ORDNER + (L.UEBERSICHT || "index.html")) : wurzel + "index.html";
    var uebersichtName = andere ? andere.titel : L ? L.TITEL : "";
    box.innerHTML = '<div class="kurs-sperre" role="status"><div class="big" aria-hidden="true">' + (art === "warten" ? "⏳" : art === "fehler" ? "📡" : "🔒") + "</div>" +
      "<h2>" + esc(titel) + "</h2><p>" + esc(text) + "</p>" +
      (mitCode ? '<form novalidate><label for="kursCode">Dein Code</label><input id="kursCode" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" placeholder="···">' +
        '<button type="submit">Anmelden</button><p class="fehler" role="alert"></p></form>' : "") +
      "<nav>" + (art === "fehler" ? '<button type="button" data-nochmal>↻ Noch einmal versuchen</button>' : "") +
      (L ? '<a href="' + esc(uebersicht) + '">📚 Zur Übersicht ' + esc(uebersichtName) + "</a>" : "") +
      '<a href="' + esc(wurzel) + 'index.html">🏠 Startseite</a></nav></div>';
    var nochmal = box.querySelector("[data-nochmal]");
    if (nochmal) nochmal.addEventListener("click", function () { global.location.reload(); });
    var form = box.querySelector("form");
    if (form) {
      var feld = form.querySelector("input"), fehler = form.querySelector(".fehler"), knopf = form.querySelector("button");
      feld.addEventListener("input", function () { var v = feld.value.replace(/\D/g, "").slice(0, 3); if (v !== feld.value) feld.value = v; fehler.textContent = ""; });
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var code = feld.value.replace(/\D/g, "");
        if (!/^\d{3}$/.test(code)) { fehler.textContent = "Dein Code hat genau 3 Ziffern."; feld.focus(); return; }
        knopf.disabled = true; knopf.textContent = "Einen Moment …";
        var langsam = setTimeout(function () { fehler.textContent = "Der Server wacht gerade auf – das kann bis zu einer Minute dauern."; }, 6000);
        // Nach der Anmeldung lädt die Seite neu: So kennt auch der Lernstand der Seite den Code.
        global.GrumiKursliste.anmelden(code).then(function () { clearTimeout(langsam); global.location.reload(); })
          .catch(function (x) { clearTimeout(langsam); fehler.textContent = x.message || "Keine Verbindung zum Server."; knopf.disabled = false; knopf.textContent = "Anmelden"; feld.select(); });
      });
    }
    sichtbar();
  }
  function offenZeigen() {
    var box = doc.getElementById("kursSperre");
    if (box) box.remove();
    doc.body.classList.remove("kurs-zu");
    sichtbar();
  }

  function pruefen() {
    var nr = ++lauf;
    reg = L.modulZurSeite(global.location.pathname);
    if (!reg) { offenZeigen(); return; }            // Seite steht nicht in der Liste
    if (L.VORSCHAU) {
      if (!doc.getElementById("kursVorschau")) {
        var v = doc.createElement("div"); v.id = "kursVorschau";
        v.textContent = "👁 Vorschau für Lehrkräfte – ob die Klasse diese Seite sieht, steht in der Verwaltung.";
        doc.body.insertBefore(v, doc.body.firstChild);
      }
      offenZeigen(); return;
    }
    var a = global.GrumiKursliste.anmeldung(), titel = "„" + reg.modul.titel + "“ ist noch nicht freigeschaltet";
    if (!a) {
      if (L.offen(reg.modul, reg.thema, null)) { offenZeigen(); return; }
      hinweis("zu", "Melde dich mit deinem Code an", "Deine Lehrkraft schaltet die Seiten für deine Klasse frei. Mit deinem Code siehst du, was für dich offen ist.", true);
      return;
    }
    var bekannt = false;
    // Seiten, die von sich aus offen sind (z. B. NT 9): gleich zeigen – gesperrt wird nur, wenn die Lehrkraft es für die Klasse so gesetzt hat
    var vonSichAusOffen = Boolean(reg.modul.offen);
    if (vonSichAusOffen) offenZeigen();
    L.freigabe(a, function (stand) {
      if (nr !== lauf) return;
      bekannt = true;
      if (L.offen(reg.modul, reg.thema, stand)) offenZeigen();
      // Von sich aus offene Seite, die die Lehrkraft für die Klasse gesperrt hat: „noch nicht“ würde hier nicht stimmen
      else if (vonSichAusOffen) hinweis("zu", "„" + reg.modul.titel + "“ ist für deine Klasse gerade gesperrt", "Deine Lehrkraft hat diese Seite für deine Klasse gesperrt. Frag sie, wenn du damit lernen möchtest.");
      else hinweis("zu", titel, "Deine Lehrkraft schaltet das frei, wenn ihr im Unterricht so weit seid. Frag sie, wenn du schon weiterlernen möchtest.");
    }, function (text, wachtAuf) {
      if (nr !== lauf || bekannt || vonSichAusOffen) return;
      if (wachtAuf) hinweis("warten", "Einen Moment …", text);
      else hinweis("fehler", "Das lässt sich gerade nicht prüfen", text || "Der Server antwortet gerade nicht. Versuche es gleich noch einmal.");
    });
    // Noch kein Stand auf dem Gerät: kurz warten, statt die Seite unsichtbar zu lassen
    setTimeout(function () { if (nr === lauf && !bekannt && !vonSichAusOffen && doc.documentElement.classList.contains("kurs-prueft")) hinweis("warten", "Einen Moment …", "Ich sehe nach, ob deine Lehrkraft das für deine Klasse freigeschaltet hat."); }, 700);
  }

  function start() {
    L = global.GRUMI_KURSLISTE;
    if (!L) { bereit(function () { hinweis("fehler", "Das lässt sich gerade nicht prüfen", "Die Liste der Seiten konnte nicht geladen werden. Versuche es gleich noch einmal."); }); return; }
    bereit(pruefen);
  }
  var kaputt = function () { bereit(function () { hinweis("fehler", "Das lässt sich gerade nicht prüfen", "Ein Teil der Seite konnte nicht geladen werden. Versuche es gleich noch einmal."); }); };
  var listeLaden = function () { if (listeSrc) laden(listeSrc, start, kaputt); else start(); };
  if (global.GrumiKursliste) listeLaden(); else laden(jsOrdner + "kursliste.js", listeLaden, kaputt);
})(window);
