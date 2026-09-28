/* GRUMI Informatik 8 - Aufbau einer Stundenseite
   Liest die Stunden-JSON aus ../daten/ und baut daraus die Seite.

   Aufbau einer Stunde:
     Kopf, Stundenablauf,
     je Phase: Infotext lesen -> Übungsphase mit eigenem Prüfen-Knopf,
     Merkkasten, Wortspeicher, Abschluss (Anwenden), Links.

   Aufgabentypen: auswahl, richtig_falsch, lueckentext, zuordnung,
   kategorien, reihenfolge, freitext (KI prüft über /api/informatik8/feedback).

   Der Fortschritt zählt alle Übungsphasen zusammen und wird nur im
   Browser gespeichert (fortschritt.js). */
(function () {
  var wurzel = document.getElementById("inf-stunde");
  if (!wurzel) return;

  var datei = wurzel.getAttribute("data-datei");
  if (!datei) return;

  var API = (location.hostname.indexOf("github.io") !== -1 || location.protocol === "file:")
    ? "https://englisch-9.onrender.com" : "";

  fetch("../daten/" + datei)
    .then(function (antwort) {
      if (!antwort.ok) throw new Error("Status " + antwort.status);
      return antwort.json();
    })
    .then(aufbauen)
    .catch(function () {
      wurzel.innerHTML =
        '<section class="inf-block"><h2>Die Stunde konnte nicht geladen werden</h2>' +
        "<p>Bitte öffne diese Seite über die GRUMI Lernplattform. Falls das Problem bleibt, sag deiner Lehrkraft Bescheid.</p></section>";
    });

  /* --- Hilfsfunktionen --- */

  function el(tag, klasse, text) {
    var knoten = document.createElement(tag);
    if (klasse) knoten.className = klasse;
    if (text !== undefined && text !== null) knoten.textContent = text;
    return knoten;
  }

  function block(titel, klasse) {
    var abschnitt = el("section", "inf-block" + (klasse ? " " + klasse : ""));
    if (titel) abschnitt.appendChild(el("h2", null, titel));
    return abschnitt;
  }

  /* Groß-/Kleinschreibung, Umlaut-Schreibweise und ein Punkt am Ende
     entscheiden nicht über richtig oder falsch. */
  function normalisieren(wert) {
    return String(wert || "")
      .trim()
      .toLowerCase()
      .replace(/ß/g, "ss")
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/\s+/g, " ")
      .replace(/[.!?]+$/, "");
  }

  function mischen(liste) {
    var kopie = liste.slice();
    for (var i = kopie.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var merk = kopie[i];
      kopie[i] = kopie[j];
      kopie[j] = merk;
    }
    return kopie;
  }

  function loesungZeigen(zeile, text) {
    loesungVerstecken(zeile);
    var hinweis = el("div", "inf-loesung");
    hinweis.appendChild(el("strong", null, "Lösung: "));
    hinweis.appendChild(document.createTextNode(text));
    zeile.appendChild(hinweis);
  }

  function loesungVerstecken(zeile) {
    var alt = zeile.querySelector(".inf-loesung");
    if (alt) alt.parentNode.removeChild(alt);
  }

  function frageKopf(zeile, nummer, text) {
    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(text));
    zeile.appendChild(frage);
    return frage;
  }

  /* Wie viele Punkte eine Aufgabe höchstens bringt - wird schon beim
     Aufbau gebraucht, damit die Übersicht "x von y" von Anfang an stimmt. */
  function teilpunkte(aufgabe) {
    if (aufgabe.typ === "lueckentext") return (aufgabe.loesungen || []).length;
    if (aufgabe.typ === "zuordnung") return (aufgabe.paare || []).length;
    if (aufgabe.typ === "kategorien") return (aufgabe.elemente || []).length;
    if (aufgabe.typ === "reihenfolge") return (aufgabe.schritte || []).length;
    return 1;
  }

  /* --- Fortschritt über alle Übungsphasen --- */

  var phasenStand = {};
  var gesamtPunkte = 0;
  var stundeId = "";

  function fortschrittSpeichern() {
    var geloest = 0;
    Object.keys(phasenStand).forEach(function (key) { geloest += phasenStand[key]; });
    if (window.GrumiFortschritt) window.GrumiFortschritt.speichern(stundeId, geloest, gesamtPunkte);
    var anzeige = document.getElementById("inf-stand");
    if (anzeige) {
      anzeige.querySelector("b").textContent = geloest + " von " + gesamtPunkte;
      anzeige.querySelector(".inf-balken span").style.width = (gesamtPunkte ? geloest / gesamtPunkte * 100 : 0) + "%";
    }
  }

  /* --- Seitenaufbau --- */

  function aufbauen(stunde) {
    document.title = stunde.titel + " | Informatik 8 | GRUMI";
    stundeId = stunde.id;

    var titelFeld = document.querySelector("[data-stunden-titel]");
    if (titelFeld) titelFeld.textContent = "Stunde " + stunde.stunde;

    var alleAufgaben = [];
    (stunde.phasen || []).forEach(function (p) { alleAufgaben = alleAufgaben.concat(p.aufgaben || []); });
    if (stunde.abschluss) alleAufgaben = alleAufgaben.concat(stunde.abschluss.aufgaben || []);
    alleAufgaben.forEach(function (a) { gesamtPunkte += teilpunkte(a); });

    wurzel.textContent = "";
    wurzel.appendChild(kopfBauen(stunde, alleAufgaben));
    wurzel.appendChild(weiterBauen(stunde, true));

    if (stunde.titelbild) {
      var schmuck = el("div", "inf-titelbild");
      var bild = el("img");
      bild.src = "../bilder/" + stunde.titelbild;
      bild.alt = stunde.titelbildAlt || "";
      schmuck.appendChild(bild);
      wurzel.appendChild(schmuck);
    }

    if (stunde.ablauf && stunde.ablauf.length) wurzel.appendChild(ablaufBauen(stunde.ablauf));

    (stunde.phasen || []).forEach(function (phase, i) {
      (phase.infotext || []).forEach(function (teil, k) {
        wurzel.appendChild(infotextBauen(teil, k === 0 ? "Teil " + (i + 1) + " · Lesen" : ""));
      });
      if (phase.bild) wurzel.appendChild(bildBauen(phase.bild));
      if (phase.aufgaben && phase.aufgaben.length) {
        wurzel.appendChild(uebungBauen(stunde, phase, "phase" + (i + 1),
          "Teil " + (i + 1) + " · Üben", phase.titel || "Übungsphase " + (i + 1)));
      }
    });

    if (stunde.merkkasten && stunde.merkkasten.length) wurzel.appendChild(merkkastenBauen(stunde.merkkasten));
    if (stunde.wortspeicher && stunde.wortspeicher.length) wurzel.appendChild(wortspeicherBauen(stunde.wortspeicher));
    if (stunde.abschluss && stunde.abschluss.aufgaben && stunde.abschluss.aufgaben.length) {
      if (stunde.abschluss.bild) wurzel.appendChild(bildBauen(stunde.abschluss.bild));
      wurzel.appendChild(uebungBauen(stunde, stunde.abschluss, "abschluss",
        "Zum Schluss · Anwenden", stunde.abschluss.titel || "Anwenden und erklären"));
    }
    if (stunde.links && stunde.links.length) wurzel.appendChild(linksBauen(stunde.links));
    wurzel.appendChild(weiterBauen(stunde));

    fortschrittSpeichern();
  }

  function kopfBauen(stunde, aufgaben) {
    var kopf = el("header", "inf-kopf");
    var meta = el("div", "inf-meta");
    meta.appendChild(el("span", "inf-chip", "Stunde " + stunde.stunde));
    if (stunde.lernbereichTitel) meta.appendChild(el("span", "inf-chip", stunde.lernbereichTitel));
    meta.appendChild(el("span", "inf-chip", aufgaben.length + " Aufgaben"));
    kopf.appendChild(meta);
    kopf.appendChild(el("h1", null, stunde.titel));
    if (stunde.ziel) kopf.appendChild(el("p", "inf-ziel", "Das kann ich danach: " + stunde.ziel));

    var stand = el("div", "inf-stand");
    stand.id = "inf-stand";
    var text = el("p", null, "Richtig gelöst: ");
    text.appendChild(el("b", null, "0 von " + gesamtPunkte));
    var bisher = window.GrumiFortschritt && window.GrumiFortschritt.holen(stunde.id);
    if (bisher && bisher.gesamt === gesamtPunkte && bisher.geloest > 0) {
      text.appendChild(document.createTextNode(" · bisher bestes Ergebnis: " + bisher.geloest));
    }
    stand.appendChild(text);
    var balken = el("div", "inf-balken");
    balken.appendChild(el("span"));
    stand.appendChild(balken);
    kopf.appendChild(stand);
    return kopf;
  }

  function ablaufBauen(ablauf) {
    var abschnitt = block("So läuft die Stunde ab", "inf-ablauf");
    var liste = el("ol", "inf-ablauf-liste");
    ablauf.forEach(function (schritt) {
      liste.appendChild(el("li", null, schritt.text));
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function infotextBauen(teil, marke) {
    var abschnitt = block(null, "inf-lesen");
    if (marke) abschnitt.appendChild(el("span", "inf-phase-marke lesen", marke));
    abschnitt.appendChild(el("h2", null, teil.ueberschrift || "Das musst du wissen"));
    (teil.absaetze || []).forEach(function (text) {
      abschnitt.appendChild(el("p", null, text));
    });
    return abschnitt;
  }

  function bildBauen(eintrag) {
    var figur = el("figure", "inf-bild");
    var gross = el("a", "inf-bild-gross");
    gross.href = "../bilder/" + eintrag.datei;
    gross.target = "_blank";
    gross.rel = "noopener";
    gross.title = "Bild groß öffnen";
    var bild = el("img");
    bild.src = "../bilder/" + eintrag.datei;
    bild.alt = eintrag.alt || eintrag.titel || "";
    bild.loading = "lazy";
    gross.appendChild(bild);
    gross.appendChild(el("span", "inf-bild-lupe", "Groß ansehen"));
    figur.appendChild(gross);
    if (eintrag.titel) figur.appendChild(el("figcaption", null, eintrag.titel));
    var huelle = block(null, "inf-bildblock");
    huelle.appendChild(figur);
    return huelle;
  }

  function merkkastenBauen(eintraege) {
    var abschnitt = block("Merke", "inf-merke");
    var liste = el("ul");
    eintraege.forEach(function (text) { liste.appendChild(el("li", null, text)); });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function wortspeicherBauen(woerter) {
    var abschnitt = block("Wortspeicher für die Probe", "inf-wort");
    abschnitt.appendChild(el("p", null, "Diese Begriffe brauchst du für die Aufgaben – und für die Probe."));
    var liste = el("ul", "inf-woerter");
    woerter.forEach(function (wort) {
      var punkt = el("li");
      punkt.appendChild(el("strong", null, wort.begriff));
      punkt.appendChild(el("span", null, wort.erklaerung));
      liste.appendChild(punkt);
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function linksBauen(links) {
    var abschnitt = block("Für Schnelle", "inf-schnelle");
    abschnitt.appendChild(el("p", null, "Du bist schon fertig? Dann übe hier weiter:"));
    var liste = el("ul", "inf-links");
    links.forEach(function (eintrag) {
      var punkt = el("li");
      var verweis = el("a", null, eintrag.titel);
      verweis.href = eintrag.url;
      verweis.target = "_blank";
      verweis.rel = "noopener noreferrer";
      if (eintrag.hinweis) verweis.appendChild(el("small", null, eintrag.hinweis));
      punkt.appendChild(verweis);
      liste.appendChild(punkt);
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function weiterBauen(stunde, oben) {
    var navigation = el("nav", "inf-weiter" + (oben ? " oben" : ""));
    navigation.setAttribute("aria-label", "Weitere Stunden");
    var alle = el("a", null, "← Alle Stunden");
    alle.href = "../index.html";
    navigation.appendChild(alle);
    if (stunde.vorherige) {
      var vor = el("a", null, "← Vorherige Stunde");
      vor.href = stunde.vorherige;
      navigation.appendChild(vor);
    }
    if (stunde.naechste) {
      var weiter = el("a", "stark", stunde.naechsteText || "Nächste Stunde →");
      weiter.href = stunde.naechste;
      navigation.appendChild(weiter);
    }
    return navigation;
  }

  /* --- Übungsphase: Aufgaben + eigener Prüfen-Knopf --- */

  function uebungBauen(stunde, phase, schluessel, marke, titel) {
    var abschnitt = block(null, "inf-quiz");
    abschnitt.appendChild(el("span", "inf-phase-marke ueben", marke));
    abschnitt.appendChild(el("h2", null, titel));
    abschnitt.appendChild(el("p", "inf-hinweis", phase.hinweis ||
      "Bearbeite alle Aufgaben und klicke dann auf „Antworten prüfen“."));

    var pruefer = [];
    var freieTexte = [];
    var bauer = {
      auswahl: auswahlBauen,
      richtig_falsch: richtigFalschBauen,
      lueckentext: lueckentextBauen,
      zuordnung: zuordnungBauen,
      kategorien: kategorienBauen,
      reihenfolge: reihenfolgeBauen,
      freitext: freitextBauen
    };

    (phase.aufgaben || []).forEach(function (aufgabe, i) {
      var mache = bauer[aufgabe.typ];
      if (!mache) return;
      var zeile = mache(aufgabe, i + 1, pruefer, stunde);
      if (aufgabe.typ === "freitext") freieTexte.push(zeile);
      abschnitt.appendChild(zeile);
    });

    var auswertung = auswertungBauen(pruefer, schluessel);
    abschnitt.appendChild(auswertung);
    freieTexte.forEach(function (zeile) { zeile.nachrechnen = auswertung.nachrechnen; });
    return abschnitt;
  }

  function auswertungBauen(pruefer, schluessel) {
    var huelle = el("div");
    var aktionen = el("div", "inf-aktionen");
    var pruefen = el("button", "inf-knopf", "Antworten prüfen");
    pruefen.type = "button";
    var zeigen = el("button", "inf-knopf zweit", "Lösungen zeigen");
    zeigen.type = "button";
    zeigen.hidden = true;
    aktionen.appendChild(pruefen);
    aktionen.appendChild(zeigen);
    huelle.appendChild(aktionen);

    var ergebnis = el("div", "inf-ergebnis");
    ergebnis.hidden = true;
    ergebnis.setAttribute("role", "status");
    huelle.appendChild(ergebnis);

    var durchgang = 0;
    var letzter = null;

    function auswerten(mitLoesung) {
      letzter = mitLoesung;
      var richtig = 0;
      var gesamt = 0;
      var wartet = 0;
      pruefer.forEach(function (pruefe) {
        var teil = pruefe(mitLoesung);
        richtig += teil.richtig;
        gesamt += teil.gesamt;
        if (teil.wartet) wartet += 1;
      });

      phasenStand[schluessel] = richtig;
      fortschrittSpeichern();

      ergebnis.hidden = false;
      ergebnis.classList.remove("gut", "mittel");
      if (wartet) {
        ergebnis.classList.add("mittel");
        ergebnis.textContent = richtig + " von " + gesamt + " richtig. Die KI prüft gerade noch "
          + (wartet === 1 ? "eine Antwort" : wartet + " Antworten") + " …";
        zeigen.hidden = true;
      } else if (richtig === gesamt) {
        ergebnis.classList.add("gut");
        ergebnis.textContent = "Super! Alle " + gesamt + " Punkte in dieser Übungsphase sind richtig.";
        zeigen.hidden = true;
      } else {
        ergebnis.classList.add("mittel");
        ergebnis.textContent = mitLoesung
          ? richtig + " von " + gesamt + " richtig. Unter den Aufgaben stehen jetzt die Lösungen."
          : richtig + " von " + gesamt + " richtig. Schau dir die rot markierten Stellen noch einmal an und lies im Infotext nach.";
        zeigen.hidden = mitLoesung;
      }
    }

    pruefen.addEventListener("click", function () {
      durchgang += 1;
      auswerten(durchgang >= 2);
      ergebnis.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    zeigen.addEventListener("click", function () { auswerten(true); });

    /* Freie Texte rufen das auf, sobald die KI geantwortet hat. */
    huelle.nachrechnen = function () {
      if (letzter !== null) auswerten(letzter);
    };
    return huelle;
  }

  /* --- Aufgabentypen --- */

  /* Anklicken: genau eine Antwort ist richtig. Die Optionen werden gemischt,
     damit die richtige nicht immer an derselben Stelle steht. */
  function auswahlBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    frageKopf(zeile, nummer, aufgabe.text);

    var auswahl = el("div", "inf-auswahl");
    var gewaehlt = null;
    var knoepfe = [];

    mischen(aufgabe.optionen.map(function (text, i) { return { text: text, i: i }; })).forEach(function (opt) {
      var knopf = el("button", "inf-option", opt.text);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", "false");
      knopf.addEventListener("click", function () {
        gewaehlt = opt.i;
        knoepfe.forEach(function (k) {
          k.knopf.setAttribute("aria-pressed", "false");
          k.knopf.classList.remove("richtig", "falsch");
        });
        knopf.setAttribute("aria-pressed", "true");
      });
      knoepfe.push({ knopf: knopf, i: opt.i });
      auswahl.appendChild(knopf);
    });
    zeile.appendChild(auswahl);

    pruefer.push(function (mitLoesung) {
      var passt = gewaehlt === aufgabe.loesung;
      knoepfe.forEach(function (k) {
        k.knopf.classList.remove("richtig", "falsch");
        if (k.i === gewaehlt) k.knopf.classList.add(passt ? "richtig" : "falsch");
        if (!passt && mitLoesung && k.i === aufgabe.loesung) k.knopf.classList.add("richtig");
      });
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });
    return zeile;
  }

  function richtigFalschBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    frageKopf(zeile, nummer, aufgabe.text);

    var auswahl = el("div", "inf-rf");
    var gewaehlt = null;
    [["Richtig", true], ["Falsch", false]].forEach(function (paar) {
      var knopf = el("button", "inf-option kurz", paar[0]);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", "false");
      knopf.addEventListener("click", function () {
        gewaehlt = paar[1];
        Array.prototype.forEach.call(auswahl.children, function (anderer) {
          anderer.setAttribute("aria-pressed", "false");
          anderer.classList.remove("richtig", "falsch");
        });
        knopf.setAttribute("aria-pressed", "true");
      });
      auswahl.appendChild(knopf);
    });
    zeile.appendChild(auswahl);

    pruefer.push(function (mitLoesung) {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(auswahl.children, function (knopf) {
        knopf.classList.remove("richtig", "falsch");
        if (knopf.getAttribute("aria-pressed") === "true") knopf.classList.add(passt ? "richtig" : "falsch");
      });
      if (!passt && mitLoesung) loesungZeigen(zeile, aufgabe.loesung ? "Richtig" : "Falsch");
      else if (passt) loesungVerstecken(zeile);
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });
    return zeile;
  }

  function lueckentextBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);

    var felder = [];
    var teile = String(aufgabe.text).split("___");
    teile.forEach(function (teil, i) {
      frage.appendChild(document.createTextNode(teil));
      if (i < teile.length - 1) {
        var feld = el("input", "inf-luecke");
        feld.type = "text";
        feld.autocomplete = "off";
        feld.spellcheck = false;
        feld.setAttribute("aria-label", "Lücke " + (i + 1) + " in Aufgabe " + nummer);
        feld.addEventListener("input", function () { feld.classList.remove("richtig", "falsch"); });
        frage.appendChild(feld);
        felder.push(feld);
      }
    });
    zeile.appendChild(frage);

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      var offen = [];
      felder.forEach(function (feld, i) {
        var erlaubt = aufgabe.loesungen[i];
        if (!Array.isArray(erlaubt)) erlaubt = [erlaubt];
        var gegeben = normalisieren(feld.value);
        var passt = erlaubt.some(function (wert) { return normalisieren(wert) === gegeben; });
        feld.classList.remove("richtig", "falsch");
        feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
        else offen.push(erlaubt[0]);
      });
      if (offen.length && mitLoesung) loesungZeigen(zeile, offen.join(" · "));
      else if (!offen.length) loesungVerstecken(zeile);
      return { richtig: richtig, gesamt: felder.length };
    });
    return zeile;
  }

  /* Zuordnen mit Auswahlfeldern: funktioniert auch auf Tablets zuverlässig. */
  function zuordnungBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    frageKopf(zeile, nummer, aufgabe.text);

    var begriffe = mischen(aufgabe.paare.map(function (p) { return p.begriff; }));
    var liste = el("div", "inf-zuordnung");
    var felder = [];

    mischen(aufgabe.paare).forEach(function (paar) {
      var reihe = el("div", "inf-zu-reihe");
      reihe.appendChild(el("span", "inf-zu-text", paar.erklaerung));
      var feld = el("select", "inf-select");
      feld.setAttribute("aria-label", "Begriff für: " + paar.erklaerung);
      var leer = el("option", null, "bitte wählen");
      leer.value = "";
      feld.appendChild(leer);
      begriffe.forEach(function (begriff) {
        var option = el("option", null, begriff);
        option.value = begriff;
        feld.appendChild(option);
      });
      feld.addEventListener("change", function () { feld.classList.remove("richtig", "falsch"); });
      reihe.appendChild(feld);
      liste.appendChild(reihe);
      felder.push({ feld: feld, loesung: paar.begriff, erklaerung: paar.erklaerung });
    });
    zeile.appendChild(liste);

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      var offen = [];
      felder.forEach(function (eintrag) {
        var passt = eintrag.feld.value === eintrag.loesung;
        eintrag.feld.classList.remove("richtig", "falsch");
        eintrag.feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
        else offen.push(eintrag.loesung + " = " + eintrag.erklaerung);
      });
      if (offen.length && mitLoesung) loesungZeigen(zeile, offen.join(" · "));
      else if (!offen.length) loesungVerstecken(zeile);
      return { richtig: richtig, gesamt: felder.length };
    });
    return zeile;
  }

  /* In Gruppen sortieren: jede Karte bekommt per Klick eine Gruppe. */
  function kategorienBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    frageKopf(zeile, nummer, aufgabe.text);
    zeile.appendChild(el("p", "inf-hinweis-klein", "Tippe bei jeder Karte auf die passende Gruppe."));

    var liste = el("div", "inf-kategorien");
    var karten = [];

    mischen(aufgabe.elemente).forEach(function (element) {
      var karte = el("div", "inf-kat-karte");
      karte.appendChild(el("span", "inf-kat-text", element.text));
      var knoepfe = el("div", "inf-kat-knoepfe");
      var eintrag = { karte: karte, loesung: element.gruppe, gewaehlt: null, text: element.text, knoepfe: [] };
      aufgabe.gruppen.forEach(function (gruppe, g) {
        var knopf = el("button", "inf-kat-knopf", gruppe);
        knopf.type = "button";
        knopf.setAttribute("aria-pressed", "false");
        knopf.addEventListener("click", function () {
          eintrag.gewaehlt = g;
          karte.classList.remove("richtig", "falsch");
          eintrag.knoepfe.forEach(function (k) { k.setAttribute("aria-pressed", "false"); });
          knopf.setAttribute("aria-pressed", "true");
        });
        eintrag.knoepfe.push(knopf);
        knoepfe.appendChild(knopf);
      });
      karte.appendChild(knoepfe);
      liste.appendChild(karte);
      karten.push(eintrag);
    });
    zeile.appendChild(liste);

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      var offen = [];
      karten.forEach(function (eintrag) {
        var passt = eintrag.gewaehlt === eintrag.loesung;
        eintrag.karte.classList.remove("richtig", "falsch");
        eintrag.karte.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
        else offen.push(eintrag.text + " → " + aufgabe.gruppen[eintrag.loesung]);
      });
      if (offen.length && mitLoesung) loesungZeigen(zeile, offen.join(" · "));
      else if (!offen.length) loesungVerstecken(zeile);
      return { richtig: richtig, gesamt: karten.length };
    });
    return zeile;
  }

  /* Reihenfolge mit Pfeilknöpfen - kein Ziehen nötig. */
  function reihenfolgeBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    frageKopf(zeile, nummer, aufgabe.text);
    zeile.appendChild(el("p", "inf-hinweis-klein",
      aufgabe.hinweis || "Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge. Der erste Schritt gehört nach oben."));

    var liste = el("ol", "inf-reihenfolge");
    var start = mischen(aufgabe.schritte);
    for (var versuch = 0; versuch < 10 && start.join("|") === aufgabe.schritte.join("|"); versuch++) {
      start = mischen(aufgabe.schritte);
    }
    start.forEach(function (text) { liste.appendChild(reihenfolgePunkt(text, liste)); });
    zeile.appendChild(liste);

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      Array.prototype.forEach.call(liste.children, function (punkt, i) {
        var passt = punkt.getAttribute("data-text") === aufgabe.schritte[i];
        punkt.classList.remove("richtig", "falsch");
        punkt.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });
      if (richtig < aufgabe.schritte.length && mitLoesung) {
        loesungZeigen(zeile, aufgabe.schritte.map(function (t, i) { return (i + 1) + ". " + t; }).join("  "));
      } else if (richtig === aufgabe.schritte.length) {
        loesungVerstecken(zeile);
      }
      return { richtig: richtig, gesamt: aufgabe.schritte.length };
    });
    return zeile;
  }

  function reihenfolgePunkt(text, liste) {
    var punkt = el("li", "inf-schritt");
    punkt.setAttribute("data-text", text);
    punkt.appendChild(el("span", "inf-schritt-text", text));
    var knoepfe = el("div", "inf-schritt-knoepfe");
    [["▲", "Nach oben: ", -1], ["▼", "Nach unten: ", 1]].forEach(function (art) {
      var knopf = el("button", "inf-pfeil", art[0]);
      knopf.type = "button";
      knopf.setAttribute("aria-label", art[1] + text);
      knopf.addEventListener("click", function () {
        if (art[2] < 0 && punkt.previousElementSibling) liste.insertBefore(punkt, punkt.previousElementSibling);
        if (art[2] > 0 && punkt.nextElementSibling) liste.insertBefore(punkt.nextElementSibling, punkt);
        Array.prototype.forEach.call(liste.children, function (p) { p.classList.remove("richtig", "falsch"); });
      });
      knoepfe.appendChild(knopf);
    });
    punkt.appendChild(knoepfe);
    return punkt;
  }

  /* Offene Frage: die KI prüft wohlwollend nur den Inhalt.
     Antwortet der Server nicht, zählt eine ernsthafte Antwort als gelöst
     und die Musterlösung erscheint zum Vergleich. */
  function freitextBauen(aufgabe, nummer, pruefer, stunde) {
    var zeile = el("div", "inf-aufgabe inf-freitext");
    var frage = frageKopf(zeile, nummer, aufgabe.text);
    frage.appendChild(el("span", "inf-ki-marke", "KI prüft"));

    var feld = el("textarea", "inf-textfeld");
    feld.rows = aufgabe.zeilen || 3;
    feld.placeholder = "Schreibe deine Antwort in eigenen Worten ...";
    feld.setAttribute("aria-label", "Antwort zu Aufgabe " + nummer);
    zeile.appendChild(feld);
    zeile.appendChild(el("p", "inf-hinweis-klein", "Auf die Rechtschreibung kommt es nicht an – nur darauf, was du sagst."));

    var rueckmeldung = el("div", "inf-ki-antwort");
    rueckmeldung.hidden = true;
    zeile.appendChild(rueckmeldung);

    var letzte = null;
    var laeuft = null;

    pruefer.push(function (mitLoesung) {
      var text = String(feld.value || "").trim();
      if (text.length < 3) {
        feld.classList.remove("richtig");
        feld.classList.add("falsch");
        rueckmeldung.hidden = false;
        rueckmeldung.className = "inf-ki-antwort falsch";
        rueckmeldung.textContent = "Hier fehlt noch eine Antwort.";
        if (mitLoesung && aufgabe.loesung) loesungZeigen(zeile, aufgabe.loesung);
        return { richtig: 0, gesamt: 1 };
      }
      if (letzte && letzte.text === text) {
        if (!letzte.richtig && aufgabe.loesung) loesungZeigen(zeile, aufgabe.loesung);
        return { richtig: letzte.richtig ? 1 : 0, gesamt: 1 };
      }
      if (laeuft !== text) {
        laeuft = text;
        rueckmeldung.hidden = false;
        rueckmeldung.className = "inf-ki-antwort";
        rueckmeldung.textContent = "Deine Antwort wird geprüft ...";
        kiPruefen(aufgabe, text, stunde).then(function (ergebnis) {
          laeuft = null;
          letzte = { text: text, richtig: ergebnis.richtig };
          feld.classList.remove("richtig", "falsch");
          feld.classList.add(ergebnis.richtig ? "richtig" : "falsch");
          rueckmeldung.className = "inf-ki-antwort " + (ergebnis.richtig ? "richtig" : "falsch");
          rueckmeldung.textContent = ergebnis.text;
          if (!ergebnis.richtig && aufgabe.loesung) loesungZeigen(zeile, aufgabe.loesung);
          if (typeof zeile.nachrechnen === "function") zeile.nachrechnen();
        });
      }
      /* Gezählt wird erst, wenn die KI geantwortet hat (nachrechnen). */
      return { richtig: 0, gesamt: 1, wartet: true };
    });
    return zeile;
  }

  function kiPruefen(aufgabe, text, stunde) {
    return fetch(API + "/api/informatik8/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        frage: aufgabe.text,
        erwartet: aufgabe.loesung || "",
        antwort: text,
        thema: stunde.titel || ""
      })
    }).then(function (antwort) {
      if (!antwort.ok) throw new Error("Status " + antwort.status);
      return antwort.json();
    }).then(function (daten) {
      return { richtig: Boolean(daten.richtig), text: daten.rueckmeldung || "Bewertet." };
    }).catch(function () {
      return {
        richtig: true,
        text: "Der Server ist gerade nicht erreichbar. Vergleiche deine Antwort selbst mit der Lösung."
      };
    });
  }
})();
