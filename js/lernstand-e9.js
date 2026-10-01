/* Abgelöst durch js/lernstand.js (gilt für alle Fächer). Bleibt nur für Seiten, die ein Browser noch zwischengespeichert hat. */
(function () {
  var s = document.currentScript;
  var src = s && s.src ? s.src.replace(/lernstand-e9\.js(\?.*)?$/, "lernstand.js") : "lernstand.js";
  document.write('<script src="' + src + '"><\/script>');
})();
