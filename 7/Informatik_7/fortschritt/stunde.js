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
    wurzel.appendChild(weiterBauen(stunde, true));

    /* Eine Stunde kann die Reihenfolge ihrer Bloecke selbst festlegen.
       Stunde 1 braucht das: dort kommt erst die Praxis am Computer
       (Infotext, Wortspeicher, Aufgaben) und danach der Film mit Quiz.
       Ohne Angabe gilt die uebliche Reihenfolge. */
    var STANDARD = ["infotext", "videos", "filmquiz", "bilder", "wortspeicher", "aufgaben", "links"];
    var folge = (stunde.reihenfolge && stunde.reihenfolge.length) ? stunde.reihenfolge : STANDARD;

    /* Bloecke, die in der Reihenfolge fehlen, haengen wir hinten an,
       damit nie ein Teil der Stunde unsichtbar wird. */
    STANDARD.forEach(function (name) {
      if (folge.indexOf(name) === -1) folge = folge.concat([name]);
    });

    var bauer = {
      infotext: function () {
        return (stunde.infotext && stunde.infotext.length) ? infotextBauen(stunde.infotext) : null;
      },
      videos: function () {
        return (stunde.videos && stunde.videos.length) ? videosBauen(stunde.videos) : null;
      },
      filmquiz: function () {
        var q = stunde.filmquiz;
        return (q && q.aufgaben && q.aufgaben.length) ? filmquizBauen(stunde) : null;
      },
      bilder: function () {
        return (stunde.bilder && stunde.bilder.length) ? bilderBauen(stunde.bilder) : null;
      },
      wortspeicher: function () {
        return (stunde.wortspeicher && stunde.wortspeicher.length)
          ? wortspeicherBauen(stunde.wortspeicher) : null;
      },
      aufgaben: function () {
        return (stunde.aufgaben && stunde.aufgaben.length) ? aufgabenBauen(stunde) : null;
      },
      links: function () {
        return (stunde.links && stunde.links.length) ? linksBauen(stunde.links) : null;
      }
    };

    folge.forEach(function (name) {
      var mache = bauer[name];
      if (!mache) return;
      var teil = mache();
      if (teil) wurzel.appendChild(teil);
    });

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

  /* Zwei Schreibweisen sind moeglich:
       "infotext": ["Absatz", "Absatz"]                 -> ein Block
       "infotext": [{ueberschrift, absaetze: [...]}]    -> je ein Block
     Die zweite gliedert eine Stunde in benannte Abschnitte. Es wird ein
     Fragment zurueckgegeben, damit mehrere Bloecke entstehen koennen. */
  function infotextBauen(eintraege) {
    var huelle = document.createDocumentFragment();
    var einfach = [];

    eintraege.forEach(function (eintrag) {
      if (typeof eintrag === "string") {
        einfach.push(eintrag);
        return;
      }

      var abschnitt = block(eintrag.ueberschrift || "Das musst du wissen");
      (eintrag.absaetze || []).forEach(function (text) {
        abschnitt.appendChild(el("p", null, text));
      });
      huelle.appendChild(abschnitt);
    });

    /* Lose Absaetze ohne Ueberschrift kommen in einen gemeinsamen Block. */
    if (einfach.length) {
      var rest = block("Das musst du wissen");
      einfach.forEach(function (text) {
        rest.appendChild(el("p", null, text));
      });
      huelle.insertBefore(rest, huelle.firstChild);
    }

    return huelle;
  }

  function videosBauen(videos) {
    var abschnitt = block("Video anschauen");

    videos.forEach(function (video) {
      var huelle = el("div", "yt-embed");

      /* Bewusst ein <a> und kein <button>: Sollte yt-embed.js einmal nicht
         geladen sein oder das Einbetten im Schulnetz blockiert werden,
         bleibt der Link trotzdem anklickbar und oeffnet das Video im
         neuen Tab. yt-embed.js faengt den Klick sonst ab und bettet ein. */
      var knopf = el("a", "yt-facade");
      knopf.href = "https://www.youtube.com/watch?v=" + encodeURIComponent(video.id);
      knopf.target = "_blank";
      knopf.rel = "noopener noreferrer";
      knopf.setAttribute("data-yt", video.id);
      knopf.setAttribute("data-title", video.titel);
      knopf.setAttribute("aria-label", "Video ansehen: " + video.titel);

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
      el("p", "yt-hint", "Klicke auf das Video, um es anzuschauen.")
    );
    return abschnitt;
  }

  /* Screenshots und Bilder: zeigen Schritt fuer Schritt, wo geklickt wird.
     Fehlt eine Bilddatei noch, erscheint ein ruhiger Platzhalter statt
     eines kaputten Bildsymbols. */
  function bilderBauen(bilder) {
    var abschnitt = block("Schritt für Schritt");

    var liste = el("div", "inf-bilder");

    bilder.forEach(function (eintrag, i) {
      var figur = el("figure", "inf-bild");

      var bild = el("img");
      bild.src = "../bilder/" + eintrag.datei;
      bild.alt = eintrag.alt || eintrag.titel || "Screenshot";
      bild.loading = "lazy";
      bild.addEventListener("error", function () {
        var platz = el("div", "inf-bild-platzhalter");
        platz.appendChild(el("strong", null, "Bild folgt"));
        platz.appendChild(el("span", null, eintrag.titel || eintrag.datei));
        figur.replaceChild(platz, bild);
      });
      figur.appendChild(bild);

      if (eintrag.titel) {
        var unterschrift = el("figcaption");
        unterschrift.appendChild(el("span", "inf-bild-nr", "Schritt " + (i + 1)));
        unterschrift.appendChild(document.createTextNode(" " + eintrag.titel));
        figur.appendChild(unterschrift);
      }

      liste.appendChild(figur);
    });

    abschnitt.appendChild(liste);
    return abschnitt;
  }

  /* Quiz zum Film: steht direkt unter dem Video und wird eigenstaendig
     ausgewertet, damit die Schueler nach dem Schauen sofort sehen, was
     sie behalten haben - unabhaengig von den Aufgaben weiter unten. */
  function filmquizBauen(stunde) {
    var quiz = stunde.filmquiz;
    var abschnitt = block(quiz.titel || "Quiz zum Film");
    abschnitt.classList.add("inf-filmquiz");

    if (quiz.hinweis) abschnitt.appendChild(el("p", null, quiz.hinweis));

    var pruefer = [];
    var nummer = 0;

    quiz.aufgaben.forEach(function (aufgabe) {
      nummer += 1;
      if (aufgabe.typ === "auswahl") {
        abschnitt.appendChild(auswahlBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "zuordnung") {
        abschnitt.appendChild(zuordnungBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "reihenfolge") {
        abschnitt.appendChild(reihenfolgeBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "richtig_falsch") {
        abschnitt.appendChild(richtigFalschBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "lueckentext") {
        abschnitt.appendChild(lueckentextBauen(aufgabe, nummer, pruefer));
      }
    });

    abschnitt.appendChild(
      auswertungBauen(stunde, pruefer, {
        speicherId: stunde.id + "-film",
        knopfText: "Quiz prüfen",
        lobText: "Klasse! Du hast im Film gut aufgepasst."
      })
    );

    return abschnitt;
  }

  /* Reihenfolge der Elemente zufaellig vertauschen (Fisher-Yates),
     damit die Loesung nicht schon an der Anordnung ablesbar ist. */
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

  /* Multiple Choice: genau eine Antwort ist richtig. */
  function auswahlBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");

    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(aufgabe.text));
    zeile.appendChild(frage);

    var auswahl = el("div", "inf-auswahl");
    var gewaehlt = null;

    aufgabe.optionen.forEach(function (text, i) {
      var knopf = el("button", "inf-option", text);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", "false");
      knopf.addEventListener("click", function () {
        gewaehlt = i;
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
      Array.prototype.forEach.call(auswahl.children, function (knopf, i) {
        knopf.classList.remove("richtig", "falsch");
        if (i === gewaehlt) knopf.classList.add(passt ? "richtig" : "falsch");
        if (!passt && i === aufgabe.loesung) knopf.classList.add("richtig");
      });
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });

    return zeile;
  }

  /* Zuordnung: bewusst mit Auswahlfeldern statt Ziehen und Ablegen.
     Das funktioniert auch auf Tablets und mit der Tastatur zuverlaessig. */
  function zuordnungBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");

    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(aufgabe.text));
    zeile.appendChild(frage);

    var begriffe = mischen(aufgabe.paare.map(function (p) { return p.begriff; }));
    var liste = el("div", "inf-zuordnung");
    var felder = [];

    aufgabe.paare.forEach(function (paar, i) {
      var reihe = el("div", "inf-zu-reihe");

      var feld = el("select", "inf-zu-wahl");
      feld.setAttribute("aria-label", "Begriff für: " + paar.erklaerung);

      var leer = el("option", null, "bitte wählen");
      leer.value = "";
      feld.appendChild(leer);

      begriffe.forEach(function (begriff) {
        var option = el("option", null, begriff);
        option.value = begriff;
        feld.appendChild(option);
      });

      feld.addEventListener("change", function () {
        feld.classList.remove("richtig", "falsch");
      });

      reihe.appendChild(feld);
      reihe.appendChild(el("span", "inf-zu-text", paar.erklaerung));
      liste.appendChild(reihe);
      felder.push({ feld: feld, loesung: paar.begriff });
    });

    zeile.appendChild(liste);

    pruefer.push(function () {
      var richtig = 0;
      felder.forEach(function (eintrag) {
        var passt = eintrag.feld.value === eintrag.loesung;
        eintrag.feld.classList.remove("richtig", "falsch");
        eintrag.feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });
      return { richtig: richtig, gesamt: felder.length };
    });

    return zeile;
  }

  /* Reihenfolge: die Schritte werden gemischt und mit Pfeilknoepfen
     sortiert. Kein Ziehen und Ablegen, damit es ueberall funktioniert. */
  function reihenfolgeBauen(aufgabe, nummer, pruefer) {
    var zeile = el("div", "inf-aufgabe");

    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(aufgabe.text));
    zeile.appendChild(frage);

    zeile.appendChild(
      el("p", "inf-hinweis-klein", "Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge. Das Älteste gehört nach oben.")
    );

    var liste = el("ol", "inf-reihenfolge");

    /* Solange das Mischen zufaellig die richtige Loesung ergibt, neu mischen. */
    var start = mischen(aufgabe.schritte);
    var versuche = 0;
    while (versuche < 10 && start.join("|") === aufgabe.schritte.join("|")) {
      start = mischen(aufgabe.schritte);
      versuche += 1;
    }

    start.forEach(function (text) {
      liste.appendChild(reihenfolgePunkt(text, liste));
    });

    zeile.appendChild(liste);

    pruefer.push(function () {
      var richtig = 0;
      Array.prototype.forEach.call(liste.children, function (punkt, i) {
        var passt = punkt.getAttribute("data-text") === aufgabe.schritte[i];
        punkt.classList.remove("richtig", "falsch");
        punkt.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });
      return { richtig: richtig, gesamt: aufgabe.schritte.length };
    });

    return zeile;
  }

  function reihenfolgePunkt(text, liste) {
    var punkt = el("li", "inf-schritt");
    punkt.setAttribute("data-text", text);

    punkt.appendChild(el("span", "inf-schritt-text", text));

    var knoepfe = el("div", "inf-schritt-knoepfe");

    var hoch = el("button", "inf-pfeil", "▲");
    hoch.type = "button";
    hoch.setAttribute("aria-label", "Nach oben: " + text);
    hoch.addEventListener("click", function () {
      var vorher = punkt.previousElementSibling;
      if (vorher) liste.insertBefore(punkt, vorher);
      aufraeumen(liste);
    });

    var runter = el("button", "inf-pfeil", "▼");
    runter.type = "button";
    runter.setAttribute("aria-label", "Nach unten: " + text);
    runter.addEventListener("click", function () {
      var danach = punkt.nextElementSibling;
      if (danach) liste.insertBefore(danach, punkt);
      aufraeumen(liste);
    });

    knoepfe.appendChild(hoch);
    knoepfe.appendChild(runter);
    punkt.appendChild(knoepfe);

    return punkt;
  }

  /* Nach dem Verschieben die alte Faerbung entfernen. */
  function aufraeumen(liste) {
    Array.prototype.forEach.call(liste.children, function (punkt) {
      punkt.classList.remove("richtig", "falsch");
    });
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

  /* Steht bewusst ganz am Ende: ein Zusatzangebot fuer alle, die mit
     den Aufgaben schon fertig sind. */
  function linksBauen(links) {
    var abschnitt = block("Für Schnelle");
    abschnitt.classList.add("inf-schnelle");
    abschnitt.appendChild(
      el("p", null, "Du bist schon fertig? Dann übe hier weiter:")
    );

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

  /* optionen ist freiwillig. Das Quiz zum Film nutzt es, um unter einem
     eigenen Schluessel zu speichern - sonst wuerde es den Fortschritt der
     Stunde ueberschreiben - und um eigene Beschriftungen zu setzen. */
  function auswertungBauen(stunde, pruefer, optionen) {
    optionen = optionen || {};
    var speicherId = optionen.speicherId || stunde.id;

    var huelle = el("div");

    var aktionen = el("div", "inf-aktionen");

    var pruefen = el("button", "inf-knopf", optionen.knopfText || "Antworten prüfen");
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
          optionen.lobText ||
          "Super! Alle " + gesamt + " Antworten sind richtig. Diese Stunde hast du geschafft.";
      } else {
        ergebnis.classList.add("mittel");
        ergebnis.textContent =
          richtig + " von " + gesamt + " richtig. Schau dir die rot markierten Stellen noch einmal an.";
      }

      if (window.GrumiFortschritt) {
        window.GrumiFortschritt.speichern(speicherId, richtig, gesamt);
      }

      ergebnis.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    return huelle;
  }

  /* Navigation zwischen den Stunden. Wird zweimal gebaut: einmal oben
     direkt unter dem Kopf und einmal unter den Aufgaben, damit der Weg
     zur naechsten Stunde nicht erst nach langem Scrollen auftaucht. */
  function weiterBauen(stunde, obenStattUnten) {
    var navigation = el("nav", "inf-weiter" + (obenStattUnten ? " oben" : ""));
    navigation.setAttribute("aria-label", "Weitere Stunden");

    var zurueck = el("a", "inf-weiter-link", "← Alle Stunden");
    zurueck.href = "../index.html";
    navigation.appendChild(zurueck);

    if (stunde.vorherige) {
      var vor = el("a", "inf-weiter-link", "← Vorherige Stunde");
      vor.href = stunde.vorherige;
      navigation.appendChild(vor);
    }

    if (stunde.naechste) {
      var weiter = el("a", "inf-weiter-link stark", "Nächste Stunde →");
      weiter.href = stunde.naechste;
      navigation.appendChild(weiter);
    }

    return navigation;
  }
})();
