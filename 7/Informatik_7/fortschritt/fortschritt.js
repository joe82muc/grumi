/* GRUMI Informatik 7 - Fortschritt
   Speichert pro Stunde, wie viele Aufgaben richtig gelöst wurden.
   Alles bleibt im Browser der Schülerin / des Schülers (localStorage),
   es werden keine Daten an einen Server geschickt.

   Datenformat im localStorage unter dem Schlüssel "grumi-inf7-fortschritt":
     { "s01-computerfuehrerschein": { "geloest": 8, "gesamt": 8, "datum": "2026-09-14" }, ... }
*/
(function (global) {
  var KEY = "grumi-inf7-fortschritt";

  function lesen() {
    try {
      var roh = global.localStorage.getItem(KEY);
      if (!roh) return {};
      var daten = JSON.parse(roh);
      return daten && typeof daten === "object" ? daten : {};
    } catch (e) {
      // Privates Fenster oder Speicher gesperrt: einfach ohne Fortschritt weiterarbeiten.
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

  var Fortschritt = {
    /* Ergebnis einer Stunde merken. Ein schlechteres Ergebnis überschreibt
       ein besseres nicht - wer schon alles richtig hatte, behält das. */
    speichern: function (stundeId, geloest, gesamt) {
      if (!stundeId) return false;
      var daten = lesen();
      var alt = daten[stundeId];
      if (alt && typeof alt.geloest === "number" && alt.geloest > geloest) return true;
      daten[stundeId] = { geloest: geloest, gesamt: gesamt, datum: heute() };
      return schreiben(daten);
    },

    /* Fortschritt einer einzelnen Stunde holen, oder null. */
    holen: function (stundeId) {
      var daten = lesen();
      return daten[stundeId] || null;
    },

    /* Alle Stunden auf einmal. */
    alle: lesen,

    /* Fortschritt einer Stunde löschen. */
    zuruecksetzenStunde: function (stundeId) {
      var daten = lesen();
      delete daten[stundeId];
      return schreiben(daten);
    },

    /* Kompletten Fortschritt löschen. */
    zuruecksetzen: function () {
      try {
        global.localStorage.removeItem(KEY);
        return true;
      } catch (e) {
        return false;
      }
    },

    /* Eine Stunde gilt als geschafft, wenn alle Aufgaben richtig sind. */
    istGeschafft: function (stundeId) {
      var eintrag = Fortschritt.holen(stundeId);
      return !!(eintrag && eintrag.gesamt > 0 && eintrag.geloest >= eintrag.gesamt);
    }
  };

  global.GrumiFortschritt = Fortschritt;
})(window);
