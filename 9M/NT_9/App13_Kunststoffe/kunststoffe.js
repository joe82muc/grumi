/* NT 9 · Kunststoffe: kleine Ergänzungen für beide Züge (gleiche Datei in 9M/ und 9R/NT_9/App13_Kunststoffe).
 * Die Modulseiten sind in beiden Ordnern gleich; der Zug kommt aus dem Ordner (Kursliste NT9M oder NT9R, ../themen.js).
 *   <span class="ku-zug">9M</span>  wird zu „9R“, wenn die Seite im Ordner 9R liegt.
 *   data-nur-m="…"                 Teil, der im Schulbuch Stoff nur für 9M ist (Polymerisation, Ökobilanz): Die Aufgaben
 *                                  darin legt die Seite mit Modul.plus an (9M Pflicht, 9R freiwillig); für 9R erscheint
 *                                  hier ein Hinweis. Der Wert ist der Name des Teils („die Polymerisation“).
 *   <body data-nur-m-modul>        ganzes Modul ist 9M-Stoff (Verarbeitung): für 9R ist es ein freiwilliges Zusatzmodul.
 */
(function () {
  "use strict";
  var L = window.GRUMI_KURS, R = !!(L && L.ZUEGE && L.ZUEGE[0] === "R");
  function los() {
    document.querySelectorAll(".ku-zug").forEach(function (e) { e.textContent = R ? "9R" : "9M"; });
    if (!R) return;
    document.querySelectorAll("[data-nur-m]").forEach(function (el) {
      var p = document.createElement("p");
      p.className = "m7-hinweis";
      p.innerHTML = "➕ <strong>Zusatz für 9R:</strong> " + (el.getAttribute("data-nur-m") || "Dieser Teil") +
        " ist im Lehrplan Stoff der 9M. Für dich ist er freiwillig – die Aufgaben hier zählen nicht zu deinem Pflichtteil und kommen nicht in deiner Probe vor.";
      var kopf = el.querySelector(".st-head");
      if (kopf && kopf.nextSibling) el.insertBefore(p, kopf.nextSibling); else el.insertBefore(p, el.firstChild);
    });
    if (document.body.hasAttribute("data-nur-m-modul")) {
      var main = document.querySelector("main"), box = document.createElement("p");
      box.className = "m7-hinweis";
      box.innerHTML = "➕ <strong>Zusatzmodul für 9R:</strong> Wie Kunststoffe in Fabriken verarbeitet werden, ist im Lehrplan Stoff der 9M. " +
        "Für dich ist dieses Modul freiwillig – es kommt nicht in deiner Probe vor. Schau es dir gern an!";
      if (main) main.insertBefore(box, main.firstChild);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", los); else los();
  window.Kunststoffe = { R: R, zug: R ? "R" : "M" };
})();
