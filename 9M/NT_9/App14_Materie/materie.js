/* NT 9 · Materie, Stoffe und Technik: kleine Ergänzungen für beide Züge (gleiche Datei in 9M/ und 9R/NT_9/App14_Materie).
 * Die Modulseiten sind in beiden Ordnern gleich; der Zug kommt aus dem Ordner (Kursliste NT9M oder NT9R, ../themen.js).
 *   <span class="mt-zug">9M</span>  wird zu „9R“, wenn die Seite im Ordner 9R liegt.
 * Wunsch der Lehrkraft (24.11.2026): Die Module sind für 9M und 9R gleich – auch der Stoff, den das Schulbuch nur für 9M
 * kennzeichnet. Nur die Proben unterscheiden sich (M- oder R-Notenschlüssel). Deshalb gibt es hier keine Plus-Teile
 * (kein data-nur-m, kein Modul.plus) und keine Hinweise „freiwillig für 9R“.
 */
(function () {
  "use strict";
  var L = window.GRUMI_KURS, R = !!(L && L.ZUEGE && L.ZUEGE[0] === "R");
  // Die Seiten heißen nach ihrem Kurznamen (Schlüssel grumi-nt9-ke-2-v1 → „ke-2“), die Module in themen.js behalten aber ihre
  // alten ids („ke-kettenreaktion“ – daran hängen die Proben). Sperre und Lernmaterial der Bausteine (modulVon) finden das Modul
  // deshalb zusätzlich über die Lernstand-Kennung (ls: "nt9-ke-2").
  if (L && L.modulVon && L.modulZumLernstand && !L.modulVon.materie) {
    var alt = L.modulVon;
    var neu = function (id) {
      var t = alt(id) || L.modulZumLernstand(L.KURS + "-" + id);
      if (!t || t.nr) return t;
      return { modul: t.modul, thema: t.thema, nr: t.thema.module.indexOf(t.modul) + 1 };
    };
    neu.materie = true;
    L.modulVon = neu;
  }
  function los() {
    document.querySelectorAll(".mt-zug").forEach(function (e) { e.textContent = R ? "9R" : "9M"; });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", los); else los();
  window.Materie = { R: R, zug: R ? "R" : "M" };
})();
