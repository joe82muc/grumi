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

  /* Beim Öffnen per Doppelklick (file://) blockiert der Browser fetch.
     Dann wird dieselbe Stunde aus der erzeugten Kopie daten/<name>.js geladen
     (siehe daten/js-erzeugen.mjs). */
  function ausSkript() {
    return new Promise(function (ok, fehler) {
      var vorhanden = window.INF_DATEN && window.INF_DATEN[datei];
      if (vorhanden) return ok(vorhanden);
      var skript = document.createElement("script");
      skript.src = "../daten/" + datei.replace(/\.json$/, ".js");
      skript.onload = function () {
        var daten = window.INF_DATEN && window.INF_DATEN[datei];
        daten ? ok(daten) : fehler(new Error("keine Daten"));
      };
      skript.onerror = fehler;
      document.head.appendChild(skript);
    });
  }

  var laden = location.protocol === "file:"
    ? ausSkript()
    : fetch("../daten/" + datei)
        .then(function (antwort) {
          if (!antwort.ok) throw new Error("Status " + antwort.status);
          return antwort.json();
        })
        .catch(ausSkript);

  laden
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

  /* Vergleich der Schuelerantwort. Entscheiden soll der Inhalt, nicht die
     Tastatur: Gross- und Kleinschreibung, Leerzeichen am Rand und die
     Schreibweise der Umlaute duerfen nicht ueber richtig/falsch entscheiden.
     "Haende", "Hände" und "HAENDE" gelten deshalb alle als dasselbe Wort.
     Ein Punkt am Ende wird ebenfalls verziehen. */
  function normalisieren(wert) {
    return String(wert || "")
      .trim()
      .toLowerCase()
      .replace(/ß/g, "ss")   // Schriftgroesse gilt wie Schriftgröße
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/\s+/g, " ")
      .replace(/[.!?]+$/, "");
  }


  /* Zeigt die richtige Lösung unter der Aufgabe. Wird erst beim zweiten
     Pruefen aufgerufen (siehe auswertungBauen): beim ersten Mal sollen die
     Schueler selbst nachdenken, danach sollen sie nicht im Dunkeln sitzen. */
  function loesungZeigen(zeile, text) {
    var alt = zeile.querySelector(".inf-loesung");
    if (alt) alt.parentNode.removeChild(alt);

    var hinweis = el("div", "inf-loesung");
    hinweis.appendChild(el("strong", null, "Lösung: "));
    hinweis.appendChild(document.createTextNode(text));
    zeile.appendChild(hinweis);
  }

  function loesungVerstecken(zeile) {
    var alt = zeile.querySelector(".inf-loesung");
    if (alt) alt.parentNode.removeChild(alt);
  }

  /* --- Seitenaufbau --- */

  function aufbauen(stunde) {
    document.title = stunde.titel + " | Informatik 7 | GRUMI";

    var titelFeld = document.querySelector("[data-stunden-titel]");
    if (titelFeld) titelFeld.textContent = stunde.titel;

    wurzel.textContent = "";
    wurzel.appendChild(kopfBauen(stunde));

    /* Schmuckbild direkt unter dem Kopf. Rein dekorativ, deshalb ohne
       Bildunterschrift und mit leerem alt - die Anleitungsbilder stehen
       weiter unten im Block "Schritt für Schritt". */
    if (stunde.titelbild) {
      var schmuck = el("div", "inf-titelbild");
      var sbild = el("img");
      sbild.src = "../bilder/" + stunde.titelbild;
      sbild.alt = "";
      sbild.setAttribute("aria-hidden", "true");
      sbild.addEventListener("error", function () {
        schmuck.remove();
      });
      schmuck.appendChild(sbild);
      wurzel.appendChild(schmuck);
    }

    wurzel.appendChild(weiterBauen(stunde, true));

    /* Eine Stunde kann die Reihenfolge ihrer Bloecke selbst festlegen.
       Stunde 1 braucht das: dort kommt erst die Praxis am Computer
       (Infotext, Wortspeicher, Aufgaben) und danach der Film mit Quiz.
       Ohne Angabe gilt die uebliche Reihenfolge. */
    var STANDARD = ["infotext", "infotext2", "bilder", "praxis", "videos", "filmquiz", "wortspeicher", "aufgaben", "links", "schluss"];
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
      /* Zweite Infotext-Gruppe. Stunde 1 nutzt sie fuer die Einleitung
         zu Teil 2, die direkt vor dem Film stehen muss. */
      infotext2: function () {
        return (stunde.infotext2 && stunde.infotext2.length) ? infotextBauen(stunde.infotext2) : null;
      },
      /* Kurzer Schlussblock, z. B. abmelden und herunterfahren. */
      schluss: function () {
        if (!stunde.schluss || !stunde.schluss.absaetze || !stunde.schluss.absaetze.length) return null;
        var abschnitt = block(stunde.schluss.ueberschrift || "Zum Schluss");
        abschnitt.classList.add("inf-schluss");
        stunde.schluss.absaetze.forEach(function (text) {
          abschnitt.appendChild(el("p", null, text));
        });
        return abschnitt;
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
      praxis: function () {
        return (stunde.praxis && stunde.praxis.length) ? praxisBauen(stunde.praxis) : null;
      },
      wortspeicher: function () {
        return (stunde.wortspeicher && stunde.wortspeicher.length)
          ? wortspeicherBauen(stunde.wortspeicher, stunde.wortspeicherTitel) : null;
      },
      aufgaben: function () {
        return (stunde.aufgaben && stunde.aufgaben.length)
          ? aufgabenBauen(stunde, stunde.aufgabenTitel) : null;
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

    /* Die Einheiten heissen durchgehend "Modul". Das Feld "woche" darf
       daneben stehen, wenn es etwas anderes sagt als die Modulnummer -
       sonst stuende dort zweimal dasselbe. */
    var modulName = "Modul " + stunde.stunde;
    meta.appendChild(el("span", "inf-chip", modulName));
    if (stunde.woche && stunde.woche !== modulName) {
      meta.appendChild(el("span", "inf-chip", stunde.woche));
    }
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

  function praxisBauen(praxis) {
    var abschnitt = block("Selber nachmachen");
    abschnitt.classList.add("inf-praxis");

    praxis.forEach(function (auftrag) {
      var karte = el("div", "inf-praxis-karte");
      karte.appendChild(el("h3", null, auftrag.titel || "Arbeitsauftrag"));
      if (auftrag.hinweis) karte.appendChild(el("p", "inf-hinweis-klein", auftrag.hinweis));

      var liste = el("ol", "inf-praxis-liste");
      (auftrag.schritte || []).forEach(function (text) {
        liste.appendChild(el("li", null, text));
      });
      karte.appendChild(liste);

      if (auftrag.ergebnis) {
        karte.appendChild(el("p", "inf-praxis-ergebnis", "Am Ende: " + auftrag.ergebnis));
      }

      abschnitt.appendChild(karte);
    });

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

    pruefer.push(function (mitLoesung) {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(auswahl.children, function (knopf, i) {
        knopf.classList.remove("richtig", "falsch");
        if (i === gewaehlt) knopf.classList.add(passt ? "richtig" : "falsch");
        /* Die richtige Antwort erst mitverraten, wenn die Loesungen dran sind. */
        if (!passt && mitLoesung && i === aufgabe.loesung) {
          knopf.classList.add("richtig");
        }
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

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      var offen = [];
      felder.forEach(function (eintrag) {
        var passt = eintrag.feld.value === eintrag.loesung;
        eintrag.feld.classList.remove("richtig", "falsch");
        eintrag.feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
        else offen.push(eintrag.loesung);
      });

      if (offen.length && mitLoesung) {
        loesungZeigen(zeile, offen.join(" \u00b7 "));
      } else if (!offen.length) {
        loesungVerstecken(zeile);
      }

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

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      Array.prototype.forEach.call(liste.children, function (punkt, i) {
        var passt = punkt.getAttribute("data-text") === aufgabe.schritte[i];
        punkt.classList.remove("richtig", "falsch");
        punkt.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });

      if (richtig < aufgabe.schritte.length && mitLoesung) {
        loesungZeigen(zeile, aufgabe.schritte.map(function (text, i) {
          return (i + 1) + ". " + text;
        }).join("  "));
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

  /* Der Wortspeicher kennt zwei Schreibweisen:
     - "Pixel"                                  (nur das Wort)
     - { begriff: "Pixel", erklaerung: "..." }  (Wort mit Erklaerung)
     Mit Erklaerung wird daraus eine Lernliste fuer die Probe, ohne
     Erklaerung bleibt es die knappe Wortliste fuer die Luecken. */
  function wortspeicherBauen(woerter, titel) {
    var abschnitt = block(titel || "Wortspeicher");

    var mitErklaerung = woerter.some(function (wort) {
      return wort && typeof wort === "object" && wort.erklaerung;
    });

    abschnitt.appendChild(el("p", null, mitErklaerung
      ? "Diese Wörter brauchst du für die Lücken – und für die Probe:"
      : "Diese Wörter brauchst du für die Lücken:"));

    if (!mitErklaerung) {
      var liste = el("ul", "inf-woerter");
      woerter.forEach(function (wort) {
        liste.appendChild(el("li", null, typeof wort === "string" ? wort : wort.begriff));
      });
      abschnitt.appendChild(liste);
      return abschnitt;
    }

    /* Beschreibungsliste: Begriff und Erklaerung gehoeren zusammen. */
    var dl = el("dl", "inf-begriffe");
    woerter.forEach(function (wort) {
      var begriff = typeof wort === "string" ? wort : wort.begriff;
      var text = typeof wort === "string" ? "" : (wort.erklaerung || "");
      dl.appendChild(el("dt", null, begriff));
      dl.appendChild(el("dd", null, text));
    });
    abschnitt.appendChild(dl);

    /* Kurze Wortleiste zusaetzlich: beim Ausfuellen der Luecken will man
       die Woerter auf einen Blick sehen, ohne die Erklaerungen zu lesen. */
    var leiste = el("ul", "inf-woerter");
    woerter.forEach(function (wort) {
      leiste.appendChild(el("li", null, typeof wort === "string" ? wort : wort.begriff));
    });
    abschnitt.appendChild(leiste);

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

  function aufgabenBauen(stunde, titel) {
    var abschnitt = block(titel || "Aufgaben");
    abschnitt.appendChild(
      el("p", null, stunde.aufgabenHinweis ||
        "Bearbeite die Aufgaben der Reihe nach und prüfe sie danach.")
    );

    /* pruefer sammelt pro Aufgabe eine Funktion, die die Anzahl der
       richtigen Teilantworten zurückgibt. */
    var pruefer = [];
    var nummer = 0;

    /* Freie Textaufgaben werden erst fertig bewertet, wenn die KI antwortet.
       Sie merken sich hier die Auswertung, um sie danach nachrechnen zu lassen. */
    var freieTexte = [];

    stunde.aufgaben.forEach(function (aufgabe) {
      nummer += 1;
      if (aufgabe.typ === "lueckentext") {
        abschnitt.appendChild(lueckentextBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "richtig_falsch") {
        abschnitt.appendChild(richtigFalschBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "auswahl") {
        abschnitt.appendChild(auswahlBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "zuordnung") {
        abschnitt.appendChild(zuordnungBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "reihenfolge") {
        abschnitt.appendChild(reihenfolgeBauen(aufgabe, nummer, pruefer));
      } else if (aufgabe.typ === "freitext") {
        var zeile = freitextBauen(aufgabe, nummer, pruefer, stunde);
        freieTexte.push(zeile);
        abschnitt.appendChild(zeile);
      }
    });

    var auswertung = auswertungBauen(stunde, pruefer);
    abschnitt.appendChild(auswertung);

    /* Jede freie Textaufgabe bekommt den Draht zur Auswertung. */
    freieTexte.forEach(function (zeile) {
      zeile.nachrechnen = auswertung.nachrechnen;
    });

    return abschnitt;
  }

  /* Freier Text mit KI-Rückmeldung.
     Die Schülerin oder der Schüler schreibt eine eigene Antwort und bekommt
     sie sofort von der KI geprüft - wohlwollend und nur auf den Inhalt.
     Rechtschreibung zählt ausdrücklich nicht.

     Damit eine Stunde nie an einer Störung der Schnittstelle scheitert,
     zählt eine ernsthaft geschriebene Antwort auch dann als gelöst, wenn
     der Server nicht antwortet. Die Musterlösung erscheint in jedem Fall. */
  function freitextBauen(aufgabe, nummer, pruefer, stunde) {
    var zeile = el("div", "inf-aufgabe inf-freitext");

    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(aufgabe.text));
    zeile.appendChild(frage);

    var feld = el("textarea", "inf-textfeld");
    feld.rows = aufgabe.zeilen || 3;
    feld.placeholder = "Schreibe deine Antwort in eigenen Worten ...";
    feld.setAttribute("aria-label", "Antwort zu Aufgabe " + nummer);
    zeile.appendChild(feld);

    zeile.appendChild(el("p", "inf-hinweis-klein",
      "Auf die Rechtschreibung kommt es hier nicht an - nur darauf, was du sagst."));

    var rueckmeldung = el("div", "inf-ki-antwort");
    rueckmeldung.hidden = true;
    zeile.appendChild(rueckmeldung);

    /* Ergebnis der letzten Prüfung, damit ein zweites Prüfen nicht
       erneut beim Server nachfragt. */
    var letzte = null;

    /* Text, für den gerade eine Anfrage unterwegs ist. Ohne das würde das
       Nachrechnen einer zweiten Textaufgabe die noch laufende Prüfung der
       ersten ein zweites Mal losschicken. */
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

      /* Schon geprüft und richtig: nicht noch einmal nachfragen. */
      if (letzte && letzte.text === text) {
        if (mitLoesung && !letzte.richtig && aufgabe.loesung) {
          loesungZeigen(zeile, aufgabe.loesung);
        }
        return { richtig: letzte.richtig ? 1 : 0, gesamt: 1 };
      }

      /* Die KI braucht einen Moment. Solange gilt die Antwort vorläufig als
         richtig, damit niemand auf ein Ergebnis warten muss. Sobald die
         Antwort da ist, wird das Gesamtergebnis noch einmal berechnet
         (nachrechnen) - dann stimmen Punktzahl und Farbe überein. */
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

          /* Ergebnis der Stunde neu berechnen, jetzt mit dem Urteil der KI. */
          if (typeof zeile.nachrechnen === "function") zeile.nachrechnen();
        });
      }

      feld.classList.remove("falsch");
      feld.classList.add("richtig");
      if (mitLoesung && aufgabe.loesung) loesungZeigen(zeile, aufgabe.loesung);
      return { richtig: 1, gesamt: 1, vorlaeufig: true };
    });

    return zeile;
  }

  /* Fragt die KI auf dem GRUMI-Server. Antwortet der Server nicht,
     gilt eine ernsthaft geschriebene Antwort als in Ordnung. */
  function kiPruefen(aufgabe, text, stunde) {
    var basis = (location.hostname.indexOf("github.io") !== -1 || location.protocol === "file:")
      ? "https://englisch-9.onrender.com" : "";

    return fetch(basis + "/api/infoaustausch/feedback", {
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
      return {
        richtig: Boolean(daten.richtig),
        text: daten.rueckmeldung || "Bewertet."
      };
    }).catch(function () {
      return {
        richtig: true,
        text: "Der Server ist gerade nicht erreichbar. Vergleiche deine Antwort selbst mit der Lösung."
      };
    });
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

    pruefer.push(function (mitLoesung) {
      var richtig = 0;
      var offen = [];
      felder.forEach(function (feld, i) {
        /* Eine Luecke kann mehrere richtige Schreibweisen haben. Dann steht
           in "loesungen" an dieser Stelle ein Array; die erste Angabe ist
           die, die als Loesung angezeigt wird (meist die Form aus dem Satz). */
        var erlaubt = aufgabe.loesungen[i];
        if (!Array.isArray(erlaubt)) erlaubt = [erlaubt];

        var gegeben = normalisieren(feld.value);
        var passt = erlaubt.some(function (wert) {
          return normalisieren(wert) === gegeben;
        });

        feld.classList.remove("richtig", "falsch");
        feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
        else offen.push(erlaubt[0]);
      });

      if (offen.length && mitLoesung) {
        loesungZeigen(zeile, offen.join(" \u00b7 "));
      } else if (!offen.length) {
        loesungVerstecken(zeile);
      }

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

    pruefer.push(function (mitLoesung) {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(auswahl.children, function (knopf) {
        knopf.classList.remove("richtig", "falsch");
        if (knopf.getAttribute("aria-pressed") === "true") {
          knopf.classList.add(passt ? "richtig" : "falsch");
        }
      });

      if (!passt && mitLoesung) {
        loesungZeigen(zeile, aufgabe.loesung ? "Richtig" : "Falsch");
      } else if (passt) {
        loesungVerstecken(zeile);
      }

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

    /* Erscheint erst, wenn nach dem Pruefen noch etwas offen ist. */
    var zeigen = el("button", "inf-knopf zweit", "Lösungen zeigen");
    zeigen.type = "button";
    zeigen.hidden = true;
    aktionen.appendChild(zeigen);

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

    /* Zaehlt die Pruefdurchgaenge: beim ersten Mal bleiben die Loesungen
       verdeckt, damit die Schueler selbst nachdenken. Danach werden sie
       eingeblendet - wer eine Luecke nicht weiss, soll nicht raten muessen. */
    var durchgang = 0;

    /* Merkt sich, womit zuletzt ausgewertet wurde. Eine freie Textaufgabe
       kann damit das Ergebnis nachrechnen lassen, sobald die KI geantwortet
       hat - ohne dass die Schueler noch einmal klicken muessen. */
    var letzterDurchgang = null;

    function auswerten(mitLoesung) {
      letzterDurchgang = mitLoesung;

      var richtig = 0;
      var gesamt = 0;

      pruefer.forEach(function (pruefe) {
        var teil = pruefe(mitLoesung);
        richtig += teil.richtig;
        gesamt += teil.gesamt;
      });

      ergebnis.hidden = false;
      ergebnis.classList.remove("gut", "mittel");

      if (richtig === gesamt) {
        ergebnis.classList.add("gut");
        ergebnis.textContent =
          optionen.lobText ||
          "Super! Alle " + gesamt + " Antworten sind richtig. Dieses Modul hast du geschafft.";
        zeigen.hidden = true;
      } else {
        ergebnis.classList.add("mittel");
        ergebnis.textContent = mitLoesung
          ? richtig + " von " + gesamt + " richtig. Unter den Aufgaben stehen jetzt die Lösungen."
          : richtig + " von " + gesamt + " richtig. Schau dir die rot markierten Stellen noch einmal an.";
        zeigen.hidden = mitLoesung;
      }

      if (window.GrumiFortschritt) {
        window.GrumiFortschritt.speichern(speicherId, richtig, gesamt);
      }

      ergebnis.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return richtig === gesamt;
    }

    pruefen.addEventListener("click", function () {
      durchgang += 1;
      /* Ab dem zweiten Pruefen stehen die Loesungen dabei. */
      auswerten(durchgang >= 2);
    });

    zeigen.addEventListener("click", function () {
      auswerten(true);
    });

    /* Freie Textaufgaben rufen das auf, sobald die KI geantwortet hat.
       Das Ergebnis wird still neu berechnet - die Schueler sehen nur,
       wie sich die Punktzahl auf den richtigen Wert korrigiert. */
    huelle.nachrechnen = function () {
      if (letzterDurchgang === null) return;
      auswerten(letzterDurchgang);
    };

    return huelle;
  }

  /* Navigation zwischen den Stunden. Wird zweimal gebaut: einmal oben
     direkt unter dem Kopf und einmal unter den Aufgaben, damit der Weg
     zur naechsten Stunde nicht erst nach langem Scrollen auftaucht. */
  function weiterBauen(stunde, obenStattUnten) {
    var navigation = el("nav", "inf-weiter" + (obenStattUnten ? " oben" : ""));
    navigation.setAttribute("aria-label", "Weitere Module");

    var zurueck = el("a", "inf-weiter-link", "← Alle Module");
    zurueck.href = "../index.html";
    navigation.appendChild(zurueck);

    if (stunde.vorherige) {
      var vor = el("a", "inf-weiter-link", "← Vorheriges Modul");
      vor.href = stunde.vorherige;
      navigation.appendChild(vor);
    }

    if (stunde.naechste) {
      var weiter = el("a", "inf-weiter-link stark", "Nächstes Modul →");
      weiter.href = stunde.naechste;
      navigation.appendChild(weiter);
    }

    return navigation;
  }
})();
