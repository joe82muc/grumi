(function (global) {
  var cfg = global.KohlenstoffKurs || {};
  var KEY = cfg.storageKey || "grumi-nt9-kohlenstoff-fortschritt";

  function lesen() {
    try {
      var raw = global.localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_e) {
      return {};
    }
  }

  function schreiben(data) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch (_e) {
      return false;
    }
  }

  function heute() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  global.KohlenstoffFortschritt = {
    speichern: function (id, score, total) {
      if (!id) return false;
      var data = lesen();
      var old = data[id];
      if (old && old.score > score) return true;
      data[id] = { score: score, total: total, datum: heute() };
      return schreiben(data);
    },
    holen: function (id) {
      return lesen()[id] || null;
    },
    alle: lesen,
    geschafft: function (id) {
      var entry = this.holen(id);
      return !!(entry && entry.total > 0 && entry.score >= entry.total);
    },
    zuruecksetzen: function () {
      try {
        global.localStorage.removeItem(KEY);
        return true;
      } catch (_e) {
        return false;
      }
    }
  };
})(window);
