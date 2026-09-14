/* GRUMI Informatik 7 - Aufbau einer Stundenseite
   Liest die Stunden-JSON aus ../daten/ und baut daraus die Seite:
   Alle sichtbaren Texte stehen mit echten Umlauten in dieser Datei,
   die Seiten laden sie als UTF-8.
   Infotext, Erklärvideo, Links, Wortspeicher und die Aufgaben.

   Die Stundenseite selbst enthaelt nur:
     <div id="inf-stunde" data-datei="s01-computerfuehrerschein.json"></div>

   Hinweis: Beim Öffnen per Doppelklick (file://) darf der Browser keine
   JSON-Datei nachladen. Dann erscheint ein freundlicher Hinweis statt einer
   leeren Seite. Über die Lernplattform (http/https) funktioniert alles. */
(function () {
  var wurzel = document.getElementById("inf-stunde");
  if (!wurzel) return;

  var datei = wurzel.getAttribute("data-datei");
  if (!datei) return;

  fetch("../daten/" + datei)
    .then(function (antwort) {
      if (!antwort.ok) throw new Error("Status " + antwort.status);
      return antwort.json();
    })
    .then(aufbauen)
    .catch(function () {
      wurzel.innerHTML =
        '<div class="inf-block"><h2>Die Aufgaben konnten nicht geladen werden</h2>' +
        "<p>Bitte öffne diese Seite über die GRUMI Lernplattform und nicht als gespeicherte Datei. " +
        "Falls das Problem bleibt, sag bitte deiner Lehrkraft Bescheid.</p></div>";
    });

  /* --- Hilfsfunktionen --- */

  function el(tag, klasse, text) {
    var knoten = document.createElement(tag);
    if (klasse) knoten.className = klasse;
    if (text !== undefined && text !== null) knoten.textContent = text;
    return knoten;
  }

  function block(titel) {
    var abschnitt = el("section", "inf-block");
    abschnitt.appendChild(el("h2", null, titel));
    return abschnitt;
  }

  /* Vergleich der Schuelerantwort: Gross-/Kleinschreibung und
     Leerzeichen am Rand sollen nicht ueber richtig/falsch entscheiden. */
  function normalisieren(wert) {
    return String(wert || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  /* --- Seitenaufbau --- */

  function aufbauen(stunde) {
    document.title = stunde.titel + " | Informatik 7 | GRUMI";

    var titelFeld = document.querySelector("[data-stunden-titel]");
    if (titelFeld) titelFeld.textContent = stunde.titel;

    wurzel.textContent = "";
    wurzel.appendChild(kopfBauen(stunde));

    if (stunde.infotext && stunde.infotext.length) {
      wurzel.appendChild(infotextBauen(stunde.infotext));
    }
    if (stunde.videos && stunde.videos.length) {
      wurzel.appendChild(videosBauen(stunde.videos));
    }
    if (stunde.wortspeicher && stunde.wortspeicher.length) {
      wurzel.appendChild(wortspeicherBauen(stunde.wortspeicher));
    }
    if (stunde.aufgaben && stunde.aufgaben.length) {
      wurzel.appendChild(aufgabenBauen(stunde));
    }
    if (stunde.links && stunde.links.length) {
      wurzel.appendChild(linksBauen(stunde.links));
    }

    wurzel.appendChild(weiterBauen(stunde));
  }

  function kopfBauen(stunde) {
    var kopf = el("header", "inf-kopf");

    var meta = el("div", "inf-meta");
    meta.appendChild(el("span", "inf-chip", "Stunde " + stunde.stunde));
    if (stunde.woche) meta.appendChild(el("span", "inf-chip", stunde.woche));
    if (stunde.lernbereichTitel) {
      meta.appendChild(el("span", "inf-chip", stunde.lernbereichTitel));
    }
    if (stunde.dauer) meta.appendChild(el("span", "inf-chip", stunde.dauer));
    kopf.appendChild(meta);

    kopf.appendChild(el("h1", null, stunde.titel));

    if (stunde.ziel) {
      kopf.appendChild(el("p", "inf-ziel", "Das kann ich danach: " + stunde.ziel));
    }
    return kopf;
  }

  function infotextBauen(absaetze) {
    var abschnitt = block("Das musst du wissen");
    absaetze.forEach(function (text) {
      abschnitt.appendChild(el("p", null, text));
    });
    return abschnitt;
  }

  function videosBauen(videos) {
    var abschnitt = block("Video anschauen");

    videos.forEach(function (video) {
      var huelle = el("div", "yt-embed");

      var knopf = el("button", "yt-facade");
      knopf.type = "button";
      knopf.setAttribute("data-yt", video.id);
      knopf.setAttribute("data-title", video.titel);
      knopf.setAttribute("aria-label", "Video laden: " + video.titel);

      var symbol = el("span", "yt-ico", "▶");
      symbol.setAttribute("aria-hidden", "true");
      knopf.appendChild(symbol);

      var beschriftung = el("span", "yt-label", video.titel);
      if (video.quelle) beschriftung.appendChild(el("small", null, video.quelle));
      knopf.appendChild(beschriftung);

      huelle.appendChild(knopf);
      abschnitt.appendChild(huelle);
    });

    abschnitt.appendChild(
      el("p", "yt-hint", "Das Video wird erst geladen, wenn du darauf klickst.")
    );
    return abschnitt;
  }

  function wortspeicherBauen(woerter) {
    var abschnitt = block("Wortspeicher");
    abschnitt.appendChild(
      el("p", null, "Diese Wörter brauchst du für die Lücken:")
    );

    var liste = el("ul", "inf-woerter");
    woerter.forEach(function (wort) {
      liste.appendChild(el("li", null, wort));
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function linksBauen(links) {
    var abschnitt = block("Hier kannst du weiterlesen");

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

  /* --- Aufgaben --- */

  function aufgabenBauen(stunde) {
    var abschnitt = block("Aufgaben");
    abschnitt.appendChild(
      el("p", null, "Fülle die Lücken aus und entscheide bei den Sätzen, ob sie richtig oder falsch sind.")
    );

    /* pruefer sammelt pro Aufgabe eine Funktion, die die Anzahl der
       richtigen Teilantworten zurückgibt. */
    var pruefer = [];
    var nummer = 0;

    stunde.aufgaben.forEach(function (aufgabe) {
      nummer += 1;
      if (aufgabe.typ === "lueckentext") {
        abschnitt.appendChild(lueckentextBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "richtig_falsch") {
        abschnitt.appendChild(richtigFalschBauen(aufgabe, nummer, pruefer));
      }
    });

    abschnitt.appendChild(auswertungBauen(stunde, pruefer));
    return abschnitt;
  }

  function lueckentextBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");
    var frage = el("p", "inf-frage");

    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);

    var teile = String(aufgabe.text).split("___");
    var felder = [];

    teile.forEach(function (teil, i) {
      frage.appendChild(document.createTextNode(teil));
      if (i < teile.length - 1) {
        var feld = el("input", "inf-luecke");
        feld.type = "text";
        feld.autocomplete = "off";
        feld.spellcheck = false;
        feld.setAttribute("aria-label", "Lücke " + (i + 1) + " in Aufgabe " + nummer);
        frage.appendChild(feld);
        felder.push(feld);
      }
    });

    zeile.appendChild(frage);

    pruefer.push(function () {
      var richtig = 0;
      felder.forEach(function (feld, i) {
        var erwartet = normalisieren(aufgabe.loesungen[i]);
        var passt = normalisieren(feld.value) === erwartet;
        feld.classList.remove("richtig", "falsch");
        feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });
      return { richtig: richtig, gesamt: felder.length };
    });

    return zeile;
  }

  function richtigFalschBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");

    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(aufgabe.text));
    zeile.appendChild(frage);

    var auswahl = el("div", "inf-rf");
    var gewaehlt = null;

    [["Richtig", true], ["Falsch", false]].forEach(function (paar) {
      var knopf = el("button", null, paar[0]);
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

    pruefer.push(function () {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(auswahl.children, function (knopf) {
        knopf.classList.remove("richtig", "falsch");
        if (knopf.getAttribute("aria-pressed") === "true") {
          knopf.classList.add(passt ? "richtig" : "falsch");
        }
      });
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });

    return zeile;
  }

  function auswertungBauen(stunde, pruefer) {
    var huelle = el("div");

    var aktionen = el("div", "inf-aktionen");

    var pruefen = el("button", "inf-knopf", "Antworten prüfen");
    pruefen.type = "button";
    aktionen.appendChild(pruefen);

    var neu = el("button", "inf-knopf zweit", "Noch einmal");
    neu.type = "button";
    neu.addEventListener("click", function () {
      window.location.reload();
    });
    aktionen.appendChild(neu);

    huelle.appendChild(aktionen);

    var ergebnis = el("div", "inf-ergebnis");
    ergebnis.hidden = true;
    ergebnis.setAttribute("role", "status");
    huelle.appendChild(ergebnis);

    pruefen.addEventListener("click", function () {
      var richtig = 0;
      var gesamt = 0;

      pruefer.forEach(function (pruefe) {
        var teil = pruefe();
        richtig += teil.richtig;
        gesamt += teil.gesamt;
      });

      ergebnis.hidden = false;
      ergebnis.classList.remove("gut", "mittel");

      if (richtig === gesamt) {
        ergebnis.classList.add("gut");
        ergebnis.textContent =
          "Super! Alle " + gesamt + " Antworten sind richtig. Diese Stunde hast du geschafft.";
      } else {
        ergebnis.classList.add("mittel");
        ergebnis.textContent =
          richtig + " von " + gesamt + " richtig. Schau dir die rot markierten Stellen noch einmal an.";
      }

      if (window.GrumiFortschritt) {
        window.GrumiFortschritt.speichern(stunde.id, richtig, gesamt);
      }

      ergebnis.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    return huelle;
  }

  function weiterBauen(stunde) {
    var navigation = el("nav", "inf-weiter");
    navigation.setAttribute("aria-label", "Weitere Stunden");

    var zurueck = el("a", null, "Alle Stunden");
    zurueck.href = "../index.html";
    navigation.appendChild(zurueck);

    if (stunde.naechste) {
      var weiter = el("a", null, "Nächste Stunde");
      weiter.href = stunde.naechste;
      navigation.appendChild(weiter);
    }

    return navigation;
  }
})();
