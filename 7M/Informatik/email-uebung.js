/* Informatik 7, Einheit „Kommunikation im Alltag“: E-Mail-Übungsfenster (übernommen aus den bisherigen Stunden,
   7/Informatik_7/fortschritt/email-programm.js).

   InfEmailUebung.bauen(auftrag, opts) liefert das Element für die Seite.
     auftrag: { titel, situation, hinweis, ergebnis, betreffBeispiel, bildHilfe: [..], bildHilfeTitel,
                kiFrage, kiErwartet, kontakte: [{ rolle: "an"|"cc"|"bcc", name, adresse, warum }] }
     opts:    { schluessel: Speicherschlüssel (je Kind), onFertig: function () {…} nach dem erfolgreichen Senden }

   Die Kinder tragen An, Cc, Bcc, Betreff, Text und einen Bild-Anhang ein. Beim Senden prüft die Seite alles.
   Danach sehen sie die E-Mail so, wie sie bei jedem Empfänger ankommt – dort wird sichtbar, dass die Bcc-Adresse
   bei den anderen nicht auftaucht. Es wird nichts wirklich verschickt. Der Entwurf bleibt im Browser gespeichert. */
(function () {
  var SPEICHER = "grumi-i7-email-v1";
  var ROLLEN = ["an", "cc", "bcc"];
  var ROLLEN_TEXT = { an: "An", cc: "Cc", bcc: "Bcc" };

  /* --- Hilfsfunktionen --- */

  function el(tag, klasse, text) {
    var knoten = document.createElement(tag);
    if (klasse) knoten.className = klasse;
    if (text !== undefined && text !== null) knoten.textContent = text;
    return knoten;
  }

  function svg(pfad) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", pfad);
    s.appendChild(p);
    return s;
  }

  var ICON = {
    klammer: "M16.5 6v11.5a4 4 0 0 1-8 0V5a2.5 2.5 0 0 1 5 0v10.5a1 1 0 0 1-2 0V6H10v9.5a2.5 2.5 0 0 0 5 0V5a4 4 0 0 0-8 0v12.5a5.5 5.5 0 0 0 11 0V6h-1.5z",
    bild: "M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z",
    papierkorb: "M15 4V3H9v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z",
    minus: "M6 19h12v2H6z",
    schliessen: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    haken: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  };

  function norm(adresse) {
    return String(adresse || "").trim().toLowerCase().replace(/^[<"']+|[>"',;]+$/g, "");
  }

  function istAdresse(wert) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(wert);
  }

  // Für die Textprüfung: Groß/klein, ß/ss und ä/ae sollen keine Rolle spielen
  function einfach(text) {
    return String(text || "").toLowerCase().replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue");
  }

  function woerter(text) {
    return String(text || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function groesse(bytes) {
    return bytes > 1024 * 1024 ? (bytes / 1024 / 1024).toFixed(1).replace(".", ",") + " MB" : Math.max(1, Math.round(bytes / 1024)) + " KB";
  }

  function leererZustand() {
    return { an: [], cc: [], bcc: [], ccSichtbar: false, bccSichtbar: false, betreff: "", text: "", anhang: null, gesendet: false };
  }

  function laden() {
    try {
      var roh = JSON.parse(localStorage.getItem(SPEICHER) || "null");
      if (roh && typeof roh === "object") {
        var z = leererZustand();
        Object.keys(z).forEach(function (k) { if (roh[k] !== undefined) z[k] = roh[k]; });
        return z;
      }
    } catch (e) { /* kaputter Speicher: neu anfangen */ }
    return leererZustand();
  }

  function speichern(zustand) {
    try { localStorage.setItem(SPEICHER, JSON.stringify(zustand)); }
    catch (e) {
      // Zu groß (Bild): ohne Bild speichern, damit wenigstens der Text bleibt
      try {
        var ohne = JSON.parse(JSON.stringify(zustand));
        ohne.anhang = null;
        localStorage.setItem(SPEICHER, JSON.stringify(ohne));
      } catch (e2) { /* Speicher gesperrt */ }
    }
  }

  /* Bild verkleinern (höchstens 900 px), damit es in den Speicher passt. */
  function bildLesen(datei) {
    return new Promise(function (ok, fehler) {
      var leser = new FileReader();
      leser.onerror = fehler;
      leser.onload = function () {
        var bild = new Image();
        bild.onerror = fehler;
        bild.onload = function () {
          var faktor = Math.min(1, 900 / Math.max(bild.width, bild.height));
          var leinwand = document.createElement("canvas");
          leinwand.width = Math.max(1, Math.round(bild.width * faktor));
          leinwand.height = Math.max(1, Math.round(bild.height * faktor));
          var ctx = leinwand.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, leinwand.width, leinwand.height);
          ctx.drawImage(bild, 0, 0, leinwand.width, leinwand.height);
          ok({ name: datei.name || "bild.jpg", groesse: datei.size, bild: leinwand.toDataURL("image/jpeg", 0.82) });
        };
        bild.src = leser.result;
      };
      leser.readAsDataURL(datei);
    });
  }

  /* --- Prüfung der E-Mail --- */

  function pruefen(zustand, kontakte, betreffBeispiel) {
    var soll = {};
    ROLLEN.forEach(function (r) { soll[r] = norm(kontakte[r].adresse); });
    function enthaelt(rolle, adresse) { return zustand[rolle].indexOf(adresse) !== -1; }

    function empfaenger(rolle) {
      var liste = zustand[rolle];
      var k = kontakte[rolle];
      if (liste.length === 1 && liste[0] === soll[rolle]) return { ok: true };
      if (liste.some(function (a) { return !istAdresse(a); })) {
        return { ok: false, hinweis: "Im Feld " + ROLLEN_TEXT[rolle] + " steht keine gültige Adresse. Eine E-Mail-Adresse hat kein Leerzeichen und genau ein @." };
      }
      var ziel = k.name + " (" + k.adresse + ")";
      // Adresse steht im falschen Feld?
      var anderes = ROLLEN.filter(function (r) { return r !== rolle && enthaelt(r, soll[rolle]); })[0];
      if (anderes === "bcc" && rolle === "cc") {
        return { ok: false, hinweis: "Die Adresse " + k.adresse + " gehört ins Cc: Alle dürfen sehen, dass " + k.name + " die Mail auch bekommt. Im Bcc wäre sie unsichtbar." };
      }
      if (anderes === "cc" && rolle === "bcc") {
        return { ok: false, hinweis: "Die Adresse " + k.adresse + " soll niemand sehen. Im Cc sehen sie alle – sie gehört ins Bcc." };
      }
      if (anderes) {
        return { ok: false, hinweis: "Die Adresse " + k.adresse + " steht im falschen Feld (" + ROLLEN_TEXT[anderes] + "). Sie gehört ins Feld " + ROLLEN_TEXT[rolle] + "." };
      }
      if (!liste.length) {
        return { ok: false, hinweis: rolle === "an"
          ? "Das Feld An ist leer. Dort gehört hin: " + ziel + "."
          : "Klicke oben rechts auf „" + ROLLEN_TEXT[rolle] + "“. Ins Feld " + ROLLEN_TEXT[rolle] + " gehört: " + ziel + "." };
      }
      if (liste.length > 1) {
        return { ok: false, hinweis: "Ins Feld " + ROLLEN_TEXT[rolle] + " gehört nur eine Adresse: " + ziel + "." };
      }
      return { ok: false, hinweis: "Die Adresse im Feld " + ROLLEN_TEXT[rolle] + " stimmt noch nicht. Vergleiche sie Buchstabe für Buchstabe mit dem Kontakt – schon ein falscher Punkt reicht, und die Mail kommt nicht an." };
    }

    var betreff = String(zustand.betreff || "").trim();
    var zeilen = String(zustand.text || "").split(/\n/).map(function (z) { return z.trim(); }).filter(Boolean);
    var text = einfach(zustand.text);
    var ersteZeile = einfach(zeilen[0] || "");
    // „Grüße“, „Grüßen“, „Gruesse“ und „Grusse“ zählen gleich
    var gruss = /(mit freundlichen|freundliche|viele|liebe|beste|schoene|schone|herzliche) gr(ue|u)ss?e?n?/;
    var trefferGruss = text.match(gruss);
    var nachGruss = trefferGruss ? text.slice(text.indexOf(trefferGruss[0]) + trefferGruss[0].length) : "";
    var mitte = zeilen.slice(1).filter(function (z) { return !gruss.test(einfach(z)); }).join(" ");
    var abkuerzung = text.match(/(^|[^a-z])(lg|mfg|vlt|vllt|hdl|thx|pls|plz|kp|omg)(?=[^a-z]|$)/);

    return [
      Object.assign({ id: "an", text: "An: " + kontakte.an.name }, empfaenger("an")),
      Object.assign({ id: "cc", text: "Cc: " + kontakte.cc.name }, empfaenger("cc")),
      Object.assign({ id: "bcc", text: "Bcc: " + kontakte.bcc.name }, empfaenger("bcc")),
      {
        id: "betreff", text: "Betreff: kurz und genau",
        // Ein Betreff wie „Bild für unser Klassenplakat“ ist gut; abgelehnt wird nur eine Begrüßung als Betreff
        ok: woerter(betreff) >= 2 && betreff.length >= 8 && !/^(hallo|hi|hey)\b/i.test(betreff),
        hinweis: "Schreib einen kurzen, genauen Betreff" + (betreffBeispiel ? ", zum Beispiel: „" + betreffBeispiel + "“." : ".")
      },
      {
        id: "anrede", text: "Anrede am Anfang",
        ok: /^(sehr geehrte|sehr geehrter|liebe|lieber|hallo|guten morgen|guten tag)\b/.test(ersteZeile),
        hinweis: "Beginne die Nachricht in der ersten Zeile mit einer Anrede, zum Beispiel „Sehr geehrte Frau …“ oder „Sehr geehrter Herr …“."
      },
      {
        id: "inhalt", text: "Zwei bis drei Sätze, Anhang erwähnt",
        ok: woerter(mitte) >= 12 && /(bild|anhang|angehaengt|angehangt|anbei|foto)/.test(einfach(mitte)),
        hinweis: "Schreib zwei bis drei Sätze: Was schickst du und warum? Erwähne, dass das Bild im Anhang ist."
      },
      {
        id: "abkuerzung", text: "Keine Chat-Abkürzungen",
        ok: !abkuerzung && woerter(zustand.text) > 0,
        // Bei leerem Text sagen schon die anderen Punkte, was fehlt
        hinweis: abkuerzung ? "Schreib ohne Chat-Abkürzungen: „" + abkuerzung[2].toUpperCase() + "“ bitte ausschreiben." : ""
      },
      {
        id: "gruss", text: "Grußformel und dein Name",
        ok: Boolean(trefferGruss) && /[a-zäöü]{2,}/.test(nachGruss),
        hinweis: trefferGruss ? "Unter die Grußformel gehört noch dein Name." : "Schließe mit einer Grußformel und deinem Namen ab, zum Beispiel „Mit freundlichen Grüßen“ und darunter dein Name."
      },
      {
        id: "anhang", text: "Bild im Anhang",
        ok: Boolean(zustand.anhang),
        hinweis: "Häng mit der Büroklammer das Bild an."
      }
    ];
  }

  /* --- Aufbau --- */

  function bauen(auftrag, opts) {
    opts = opts || {};
    if (opts.schluessel) SPEICHER = opts.schluessel;
    var kontakte = {};
    (auftrag.kontakte || []).forEach(function (k) { kontakte[k.rolle] = k; });
    ROLLEN.forEach(function (r) {
      if (!kontakte[r]) kontakte[r] = { rolle: r, name: ROLLEN_TEXT[r], adresse: "" };
    });

    var zustand = laden();
    var huelle = el("div", "gm-aufgabe");

    /* ---------- links: Auftrag, Kontakte, Checkliste ---------- */
    var seite = el("div", "gm-auftrag");
    seite.appendChild(el("h3", null, auftrag.titel || "E-Mail schreiben"));
    if (auftrag.situation) seite.appendChild(el("p", "gm-situation", auftrag.situation));

    var kontaktKarte = el("div", "gm-kontakte");
    kontaktKarte.appendChild(el("h4", null, "Deine Kontakte"));
    ROLLEN.forEach(function (r) {
      var k = kontakte[r];
      var zeile = el("div", "gm-kontakt");
      var kopf = el("div", "gm-kontakt-kopf");
      kopf.appendChild(el("span", "gm-rolle gm-rolle-" + r, ROLLEN_TEXT[r]));
      kopf.appendChild(el("strong", null, k.name));
      zeile.appendChild(kopf);
      zeile.appendChild(el("code", "gm-adresse", k.adresse));
      if (k.warum) zeile.appendChild(el("p", null, k.warum));
      kontaktKarte.appendChild(zeile);
    });
    seite.appendChild(kontaktKarte);

    if (auftrag.bildHilfe && auftrag.bildHilfe.length) {
      var hilfe = el("details", "gm-bildhilfe");
      hilfe.appendChild(el("summary", null, auftrag.bildHilfeTitel || "So bekommst du das Bild"));
      var hl = el("ol");
      auftrag.bildHilfe.forEach(function (t) { hl.appendChild(el("li", null, t)); });
      hilfe.appendChild(hl);
      seite.appendChild(hilfe);
    }

    // Die Checkliste steht direkt unter dem Fenster, damit sie beim Schreiben zu sehen ist.
    var check = el("div", "gm-check");
    check.appendChild(el("h4", null, "Bevor du sendest"));
    var checkListe = el("ul");
    check.appendChild(checkListe);

    if (auftrag.hinweis) seite.appendChild(el("p", "gm-hinweis", auftrag.hinweis));
    huelle.appendChild(seite);

    /* ---------- rechts: das E-Mail-Fenster ---------- */
    var fenster = el("div", "gm-fenster");
    fenster.setAttribute("role", "form");
    fenster.setAttribute("aria-label", "Neue Nachricht");

    var titelleiste = el("div", "gm-titel");
    titelleiste.appendChild(el("span", null, "Neue Nachricht"));
    var titelKnoepfe = el("span", "gm-titel-knoepfe");
    [ICON.minus, ICON.schliessen].forEach(function (p) { titelKnoepfe.appendChild(svg(p)); });
    titelleiste.appendChild(titelKnoepfe);
    fenster.appendChild(titelleiste);

    var felder = {};

    function empfaengerZeile(rolle) {
      var zeile = el("div", "gm-zeile gm-empf");
      zeile.appendChild(el("span", "gm-label", ROLLEN_TEXT[rolle]));
      var chips = el("div", "gm-chips");
      var eingabe = el("input", "gm-eingabe");
      eingabe.type = "email";
      eingabe.setAttribute("autocomplete", "off");
      eingabe.setAttribute("autocapitalize", "off");
      eingabe.setAttribute("spellcheck", "false");
      eingabe.setAttribute("aria-label", "Empfänger " + ROLLEN_TEXT[rolle]);
      chips.appendChild(eingabe);
      zeile.appendChild(chips);

      function zeichnen() {
        Array.prototype.slice.call(chips.querySelectorAll(".gm-chip")).forEach(function (c) { c.remove(); });
        zustand[rolle].forEach(function (adresse, i) {
          var chip = el("span", "gm-chip" + (istAdresse(adresse) ? "" : " gm-chip-falsch"));
          chip.appendChild(el("span", "gm-avatar", adresse.charAt(0).toUpperCase()));
          chip.appendChild(el("span", "gm-chip-text", adresse));
          var weg = el("button", "gm-chip-weg");
          weg.type = "button";
          weg.setAttribute("aria-label", adresse + " entfernen");
          weg.appendChild(svg(ICON.schliessen));
          weg.addEventListener("click", function () {
            zustand[rolle].splice(i, 1);
            zeichnen(); geaendert();
            eingabe.focus();
          });
          chip.appendChild(weg);
          chips.insertBefore(chip, eingabe);
        });
        eingabe.placeholder = zustand[rolle].length ? "" : (rolle === "an" ? "Empfänger" : "");
      }

      function uebernehmen() {
        var teile = eingabe.value.split(/[\s,;]+/).map(norm).filter(Boolean);
        if (!teile.length) return;
        teile.forEach(function (a) { if (zustand[rolle].indexOf(a) === -1) zustand[rolle].push(a); });
        eingabe.value = "";
        zeichnen(); geaendert();
      }

      eingabe.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === "," || e.key === ";" || e.key === " ") {
          if (eingabe.value.trim()) { e.preventDefault(); uebernehmen(); }
          else if (e.key === "Enter") e.preventDefault();
        } else if (e.key === "Backspace" && !eingabe.value && zustand[rolle].length) {
          zustand[rolle].pop();
          zeichnen(); geaendert();
        }
      });
      eingabe.addEventListener("blur", uebernehmen);
      chips.addEventListener("click", function (e) { if (e.target === chips) eingabe.focus(); });

      felder[rolle] = { zeile: zeile, eingabe: eingabe, zeichnen: zeichnen };
      zeichnen();
      return zeile;
    }

    var anZeile = empfaengerZeile("an");
    var ccBcc = el("span", "gm-ccbcc");
    var ccKnopf = el("button", null, "Cc");
    var bccKnopf = el("button", null, "Bcc");
    ccKnopf.type = bccKnopf.type = "button";
    ccKnopf.setAttribute("aria-label", "Cc-Empfänger hinzufügen");
    bccKnopf.setAttribute("aria-label", "Bcc-Empfänger hinzufügen");
    ccBcc.appendChild(ccKnopf);
    ccBcc.appendChild(bccKnopf);
    anZeile.appendChild(ccBcc);
    fenster.appendChild(anZeile);

    var ccZeile = empfaengerZeile("cc");
    var bccZeile = empfaengerZeile("bcc");
    fenster.appendChild(ccZeile);
    fenster.appendChild(bccZeile);

    function ccBccZeigen() {
      ccZeile.hidden = !(zustand.ccSichtbar || zustand.cc.length);
      bccZeile.hidden = !(zustand.bccSichtbar || zustand.bcc.length);
      ccKnopf.hidden = !ccZeile.hidden;
      bccKnopf.hidden = !bccZeile.hidden;
    }
    ccKnopf.addEventListener("click", function () { zustand.ccSichtbar = true; ccBccZeigen(); speichern(zustand); felder.cc.eingabe.focus(); });
    bccKnopf.addEventListener("click", function () { zustand.bccSichtbar = true; ccBccZeigen(); speichern(zustand); felder.bcc.eingabe.focus(); });

    var betreffZeile = el("div", "gm-zeile");
    var betreff = el("input", "gm-eingabe gm-betreff");
    betreff.type = "text";
    betreff.placeholder = "Betreff";
    betreff.setAttribute("aria-label", "Betreff");
    betreff.value = zustand.betreff;
    betreff.addEventListener("input", function () { zustand.betreff = betreff.value; geaendert(); });
    betreffZeile.appendChild(betreff);
    fenster.appendChild(betreffZeile);

    var text = el("textarea", "gm-text");
    text.setAttribute("aria-label", "Nachricht");
    text.placeholder = "Sehr geehrte Frau … / Sehr geehrter Herr …\n\n…\n\nMit freundlichen Grüßen\nDein Name";
    text.value = zustand.text;
    text.addEventListener("input", function () { zustand.text = text.value; geaendert(); });
    fenster.appendChild(text);

    var anhangBox = el("div", "gm-anhaenge");
    fenster.appendChild(anhangBox);

    var datei = el("input");
    datei.type = "file";
    datei.accept = "image/*";
    datei.hidden = true;
    fenster.appendChild(datei);

    function anhangZeichnen() {
      anhangBox.textContent = "";
      if (!zustand.anhang) return;
      var chip = el("div", "gm-anhang");
      var vorschau = el("img");
      vorschau.src = zustand.anhang.bild;
      vorschau.alt = "Vorschau des angehängten Bildes";
      chip.appendChild(vorschau);
      var info = el("span", "gm-anhang-info");
      info.appendChild(el("strong", null, zustand.anhang.name));
      info.appendChild(el("span", null, " (" + groesse(zustand.anhang.groesse) + ")"));
      chip.appendChild(info);
      var weg = el("button", "gm-chip-weg");
      weg.type = "button";
      weg.setAttribute("aria-label", "Anhang entfernen");
      weg.appendChild(svg(ICON.schliessen));
      weg.addEventListener("click", function () { zustand.anhang = null; anhangZeichnen(); geaendert(); });
      chip.appendChild(weg);
      anhangBox.appendChild(chip);
    }

    datei.addEventListener("change", function () {
      var f = datei.files && datei.files[0];
      datei.value = "";
      if (!f) return;
      if (!/^image\//.test(f.type)) {
        fehlerZeigen(["Das ist kein Bild. Bitte wähle ein Bild aus (zum Beispiel JPG, PNG oder GIF)."]);
        return;
      }
      bildLesen(f).then(function (a) {
        zustand.anhang = a;
        anhangZeichnen(); geaendert();
      }).catch(function () {
        fehlerZeigen(["Das Bild konnte nicht geöffnet werden. Probiere ein anderes Bild."]);
      });
    });

    /* Fußleiste wie in Gmail: Senden, Büroklammer, Bild, Papierkorb */
    var leiste = el("div", "gm-leiste");
    var senden = el("button", "gm-senden", "Senden");
    senden.type = "button";
    leiste.appendChild(senden);

    function werkzeug(pfad, titel, aktion) {
      var b = el("button", "gm-werkzeug");
      b.type = "button";
      b.title = titel;
      b.setAttribute("aria-label", titel);
      b.appendChild(svg(pfad));
      b.addEventListener("click", aktion);
      return b;
    }
    leiste.appendChild(werkzeug(ICON.klammer, "Dateien anhängen", function () { datei.click(); }));
    leiste.appendChild(werkzeug(ICON.bild, "Foto einfügen", function () { datei.click(); }));
    var abstand = el("span", "gm-abstand");
    leiste.appendChild(abstand);
    leiste.appendChild(werkzeug(ICON.papierkorb, "Entwurf verwerfen", function () {
      if (!confirm("Entwurf wirklich verwerfen? Alles, was du eingetragen hast, wird gelöscht.")) return;
      neu();
    }));
    fenster.appendChild(leiste);

    var fehlerBox = el("div", "gm-fehler");
    fehlerBox.hidden = true;
    fenster.appendChild(fehlerBox);

    huelle.appendChild(fenster);
    huelle.appendChild(check);

    /* ---------- nach dem Senden: So kommt die Mail an ---------- */
    var ergebnis = el("div", "gm-ergebnis");
    ergebnis.hidden = true;
    huelle.appendChild(ergebnis);

    var toast = el("div", "gm-toast", "Nachricht gesendet.");
    toast.setAttribute("role", "status");
    huelle.appendChild(toast);

    /* ---------- Verhalten ---------- */

    function checkZeichnen() {
      var liste = pruefen(zustand, kontakte, auftrag.betreffBeispiel);
      checkListe.textContent = "";
      liste.forEach(function (p) {
        var li = el("li", p.ok ? "ok" : "");
        var zeichen = el("span", "gm-zeichen");
        if (p.ok) zeichen.appendChild(svg(ICON.haken));
        li.appendChild(zeichen);
        li.appendChild(document.createTextNode(p.text));
        checkListe.appendChild(li);
      });
      return liste;
    }

    function geaendert() {
      zustand.gesendet = false;
      speichern(zustand);
      checkZeichnen();
      fehlerBox.hidden = true;
      ergebnis.hidden = true; // gesendete Ansicht passt nicht mehr zum geänderten Entwurf
    }

    function fehlerZeigen(hinweise) {
      fehlerBox.textContent = "";
      fehlerBox.appendChild(el("strong", null, "Die E-Mail kann noch nicht gesendet werden:"));
      var ul = el("ul");
      hinweise.forEach(function (h) { ul.appendChild(el("li", null, h)); });
      fehlerBox.appendChild(ul);
      fehlerBox.hidden = false;
    }

    senden.addEventListener("click", function () {
      ROLLEN.forEach(function (r) {
        var inp = felder[r].eingabe;
        if (inp.value.trim()) inp.dispatchEvent(new Event("blur"));
      });
      var liste = checkZeichnen();
      var offen = liste.filter(function (p) { return !p.ok; });
      if (offen.length) {
        fehlerZeigen(offen.map(function (p) { return p.hinweis; }).filter(Boolean));
        var erstes = offen[0].id;
        if (felder[erstes]) {
          if (erstes !== "an") zustand[erstes + "Sichtbar"] = true;
          ccBccZeigen();
          felder[erstes].eingabe.focus();
        } else if (erstes === "betreff") betreff.focus();
        else if (erstes === "anhang") fehlerBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
        else text.focus();
        return;
      }
      zustand.gesendet = true;
      speichern(zustand);
      fehlerBox.hidden = true;
      toast.classList.add("zeigen");
      setTimeout(function () { toast.classList.remove("zeigen"); }, 3500);
      ergebnisZeigen(true);
      if (typeof opts.onFertig === "function") opts.onFertig();
    });

    function postfach(titel, rolle) {
      var karte = el("div", "gm-postfach gm-postfach-" + rolle);
      var kopf = el("div", "gm-postfach-kopf");
      kopf.appendChild(el("span", "gm-rolle gm-rolle-" + rolle, ROLLEN_TEXT[rolle]));
      kopf.appendChild(el("strong", null, titel));
      karte.appendChild(kopf);

      var mail = el("div", "gm-lesen");
      mail.appendChild(el("h5", null, zustand.betreff));
      var von = el("div", "gm-von");
      von.appendChild(el("span", "gm-avatar gm-avatar-gross", "D"));
      var vonText = el("div");
      vonText.appendChild(el("strong", null, "Du"));
      var details = el("div", "gm-details");
      details.appendChild(el("div", null, "an: " + zustand.an.join(", ")));
      details.appendChild(el("div", null, "Cc: " + zustand.cc.join(", ")));
      if (rolle === "bcc") details.appendChild(el("div", "gm-bcc-ich", "Bcc: dich (die anderen sehen das nicht)"));
      vonText.appendChild(el("span", "gm-details", "an " + kontakte.an.name));
      von.appendChild(vonText);
      mail.appendChild(von);
      // Adresszeilen über die volle Breite, damit die Adressen nicht mitten im Wort umbrechen
      mail.appendChild(details);
      mail.appendChild(el("div", "gm-lesen-text", zustand.text));
      if (zustand.anhang) {
        var a = el("figure", "gm-lesen-anhang");
        var img = el("img");
        img.src = zustand.anhang.bild;
        img.alt = "Angehängtes Bild";
        a.appendChild(img);
        a.appendChild(el("figcaption", null, zustand.anhang.name));
        mail.appendChild(a);
      }
      karte.appendChild(mail);
      return karte;
    }

    function ergebnisZeigen(mitKi) {
      ergebnis.textContent = "";
      ergebnis.hidden = !zustand.gesendet;
      if (!zustand.gesendet) return;

      var kopf = el("div", "gm-ergebnis-kopf");
      kopf.appendChild(el("h3", null, "Gesendet! So kommt deine E-Mail an"));
      kopf.appendChild(el("p", null, "Vergleiche die drei Postfächer: Wer sieht welche Adresse?"));
      ergebnis.appendChild(kopf);

      var raster = el("div", "gm-raster");
      raster.appendChild(postfach(kontakte.an.name, "an"));
      raster.appendChild(postfach(kontakte.cc.name, "cc"));
      raster.appendChild(postfach(kontakte.bcc.name, "bcc"));
      ergebnis.appendChild(raster);

      var merke = el("div", "gm-merke");
      merke.appendChild(el("strong", null, "Merke: "));
      merke.appendChild(document.createTextNode(
        "Die Bcc-Adresse (" + kontakte.bcc.adresse + ") taucht in den Postfächern von An und Cc nirgends auf. " +
        "Die Cc-Adresse sehen dagegen alle. Mit Bcc schützt du also Adressen, die andere nicht sehen sollen."));
      ergebnis.appendChild(merke);

      var ki = el("p", "gm-ki");
      ergebnis.appendChild(ki);
      if (mitKi) kiRueckmeldung(ki);

      if (auftrag.ergebnis) ergebnis.appendChild(el("p", "gm-geschafft", "Geschafft: " + auftrag.ergebnis));

      var nochmal = el("button", "gm-nochmal", "Neue E-Mail schreiben");
      nochmal.type = "button";
      nochmal.addEventListener("click", function () {
        if (!confirm("Neue E-Mail beginnen? Die gesendete E-Mail wird dabei gelöscht.")) return;
        neu();
        fenster.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      ergebnis.appendChild(nochmal);
      if (mitKi) ergebnis.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    /* Rückmeldung der KI zur Höflichkeit des Textes (nur ein Tipp, die Mail ist schon gesendet) */
    function kiRueckmeldung(ziel) {
      ziel.textContent = "✨ Die KI liest deinen Text …";
      var basis = location.hostname.slice(-12) === "onrender.com" ? "" : "https://englisch-9.onrender.com";
      fetch(basis + "/api/inf7/uebung/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          frage: auftrag.kiFrage || "Schreibe eine höfliche E-Mail mit Anrede, zwei bis drei höflichen Sätzen ohne Abkürzungen, Grußformel und Name.",
          erwartet: auftrag.kiErwartet || "Höfliche Anrede, zwei bis drei vollständige Sätze, der Anhang wird erwähnt, Grußformel und Name am Ende.",
          antwort: zustand.text,
          thema: "E-Mails schreiben: Höflichkeit und Aufbau",
          keywords: []
        })
      }).then(function (antwort) {
        if (!antwort.ok) throw new Error("Status " + antwort.status);
        return antwort.json();
      }).then(function (daten) {
        ziel.textContent = "✨ Die KI sagt zu deinem Text: " + (daten.rueckmeldung || "Gut gemacht!");
      }).catch(function () {
        ziel.textContent = "";
      });
    }

    function neu() {
      zustand = leererZustand();
      speichern(zustand);
      ROLLEN.forEach(function (r) { felder[r].eingabe.value = ""; felder[r].zeichnen(); });
      betreff.value = "";
      text.value = "";
      anhangZeichnen();
      ccBccZeigen();
      checkZeichnen();
      fehlerBox.hidden = true;
      ergebnisZeigen(false);
    }

    ccBccZeigen();
    anhangZeichnen();
    checkZeichnen();
    ergebnisZeigen(false);
    return huelle;
  }

  window.InfEmailUebung = { bauen: bauen, pruefen: pruefen };
})();
