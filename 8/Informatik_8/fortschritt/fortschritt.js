/* GRUMI Informatik 8 - Fortschritt
   Speichert nur lokal im Browser. Es werden keine Daten an einen Server geschickt. */
(function (global) {
  var KEY = "grumi-inf8-fortschritt";

  function lesen() {
    try {
      var roh = global.localStorage.getItem(KEY);
      if (!roh) return {};
      var daten = JSON.parse(roh);
      return daten && typeof daten === "object" ? daten : {};
    } catch (e) {
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

  global.GrumiFortschritt = {
    speichern: function (stundeId, geloest, gesamt) {
      if (!stundeId) return false;
      var daten = lesen();
      var alt = daten[stundeId];
      if (alt && alt.geloest > geloest) return true;
      daten[stundeId] = { geloest: geloest, gesamt: gesamt, datum: heute() };
      return schreiben(daten);
    },
    holen: function (stundeId) {
      return lesen()[stundeId] || null;
    },
    alle: lesen,
    istGeschafft: function (stundeId) {
      var eintrag = this.holen(stundeId);
      return !!(eintrag && eintrag.gesamt > 0 && eintrag.geloest >= eintrag.gesamt);
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
})(window);
