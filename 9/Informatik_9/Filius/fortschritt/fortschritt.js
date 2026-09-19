/* GRUMI Informatik 9 - Filius-Workshop: Fortschritt
   Speichert pro Station, welche Aufgaben erledigt sind und wie viele
   Kontrollfragen richtig beantwortet wurden.

   Alles bleibt im Browser der Schuelerin / des Schuelers (localStorage).
   Es werden keine Daten an einen Server geschickt.

   Datenformat unter dem Schluessel "grumi-inf9-filius":
     {
       "s1-peer-to-peer": {
         "haken":  ["a","b"],          // abgehakte Arbeitsschritte
         "quiz":   { "geloest": 3, "gesamt": 3 },
         "datei":  "260918-01-Anna",   // gespeicherter Dateiname
         "datum":  "2026-09-18"
       }, ...
     }
*/
(function (global) {
  var KEY = "grumi-inf9-filius";

  function lesen() {
    try {
      var roh = global.localStorage.getItem(KEY);
      if (!roh) return {};
      var daten = JSON.parse(roh);
      return daten && typeof daten === "object" ? daten : {};
    } catch (e) {
      // Privates Fenster oder Speicher gesperrt: ohne Fortschritt weiterarbeiten.
      return {};
    }
  }

  function schreiben(daten) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(daten));
      return true;
    } catch (e) {
      return false;
    }
  }

  function heute() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var t = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + t;
  }

  function eintrag(daten, id) {
    if (!daten[id]) daten[id] = { haken: [], quiz: null, datei: "", datum: heute() };
    if (!Array.isArray(daten[id].haken)) daten[id].haken = [];
    return daten[id];
  }

  var F = {
    /* Einen Arbeitsschritt abhaken oder den Haken wieder entfernen. */
    haken: function (stationId, schrittId, gesetzt) {
      if (!stationId || !schrittId) return false;
      var daten = lesen();
      var e = eintrag(daten, stationId);
      var i = e.haken.indexOf(schrittId);
      if (gesetzt && i < 0) e.haken.push(schrittId);
      if (!gesetzt && i >= 0) e.haken.splice(i, 1);
      e.datum = heute();
      return schreiben(daten);
    },

    istGehakt: function (stationId, schrittId) {
      var e = lesen()[stationId];
      return !!(e && Array.isArray(e.haken) && e.haken.indexOf(schrittId) >= 0);
    },

    /* Ergebnis der Kontrollfragen merken.
       Ein schlechteres Ergebnis ueberschreibt ein besseres nicht. */
    quiz: function (stationId, geloest, gesamt) {
      if (!stationId) return false;
      var daten = lesen();
      var e = eintrag(daten, stationId);
      if (e.quiz && typeof e.quiz.geloest === "number" && e.quiz.geloest > geloest) return true;
      e.quiz = { geloest: geloest, gesamt: gesamt };
      e.datum = heute();
      return schreiben(daten);
    },

    /* Namen der gespeicherten Filius-Datei merken (Schema JJMMTT-Aufg-Name). */
    datei: function (stationId, name) {
      if (!stationId) return false;
      var daten = lesen();
      var e = eintrag(daten, stationId);
      e.datei = String(name || "").slice(0, 80);
      e.datum = heute();
      return schreiben(daten);
    },

    holen: function (stationId) {
      return lesen()[stationId] || null;
    },

    alle: lesen,

    /* Eine Station gilt als geschafft, wenn alle Schritte abgehakt sind
       und die Kontrollfragen vollstaendig richtig beantwortet wurden. */
    istGeschafft: function (stationId, schritteGesamt) {
      var e = F.holen(stationId);
      if (!e) return false;
      var schritteOk = !schritteGesamt || e.haken.length >= schritteGesamt;
      var quizOk = !e.quiz || e.quiz.geloest >= e.quiz.gesamt;
      return schritteOk && quizOk && !!e.quiz;
    },

    zuruecksetzenStation: function (stationId) {
      var daten = lesen();
      delete daten[stationId];
      return schreiben(daten);
    },

    zuruecksetzen: function () {
      try {
        global.localStorage.removeItem(KEY);
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  global.GrumiFilius = F;
})(window);
