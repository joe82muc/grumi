/* GRUMI Informatik 8 - dynamische Stundenseite */
(function () {
  var root = document.getElementById("inf-stunde");
  if (!root) return;

  var datei = root.getAttribute("data-datei");
  if (!datei) return;

  fetch("../daten/" + datei)
    .then(function (antwort) {
      if (!antwort.ok) throw new Error("Status " + antwort.status);
      return antwort.json();
    })
    .then(aufbauen)
    .catch(function () {
      root.innerHTML =
        '<section class="inf-block"><h2>Die Stunde konnte nicht geladen werden</h2>' +
        "<p>Bitte öffne die Seite über die GRUMI Lernplattform. Wenn die Meldung bleibt, gib deiner Lehrkraft Bescheid.</p></section>";
    });

  function el(tag, klasse, text) {
    var knoten = document.createElement(tag);
    if (klasse) knoten.className = klasse;
    if (text !== undefined && text !== null) knoten.textContent = text;
    return knoten;
  }

  function normalisieren(wert) {
    return String(wert || "").trim().toLowerCase().replace(/\s+/g, " ");
  }

  function block(titel, klasse) {
    var abschnitt = el("section", "inf-block" + (klasse ? " " + klasse : ""));
    abschnitt.appendChild(el("h2", null, titel));
    return abschnitt;
  }

  function aufbauen(stunde) {
    document.title = stunde.titel + " | Informatik 8 | GRUMI";
    var titelFeld = document.querySelector("[data-stunden-titel]");
    if (titelFeld) titelFeld.textContent = stunde.titel;

    root.textContent = "";
    root.appendChild(kopfBauen(stunde));
    root.appendChild(weiterBauen(stunde, true));

    if (stunde.titelbild) {
      var titelbild = el("figure", "inf-titelbild");
      var img = el("img");
      img.src = "../bilder/" + stunde.titelbild;
      img.alt = stunde.titelbildAlt || "";
      titelbild.appendChild(img);
      root.appendChild(titelbild);
    }

    if (stunde.ablauf && stunde.ablauf.length) root.appendChild(ablaufBauen(stunde.ablauf));
    if (stunde.infotext && stunde.infotext.length) stunde.infotext.forEach(function (teil) {
      root.appendChild(infotextBauen(teil));
    });
    if (stunde.merkkasten && stunde.merkkasten.length) root.appendChild(merkkastenBauen(stunde.merkkasten));
    if (stunde.bilder && stunde.bilder.length) root.appendChild(bilderBauen(stunde.bilder));
    if (stunde.praxis && stunde.praxis.length) root.appendChild(praxisBauen(stunde.praxis));
    if (stunde.wortspeicher && stunde.wortspeicher.length) root.appendChild(wortspeicherBauen(stunde.wortspeicher));
    if (stunde.aufgaben && stunde.aufgaben.length) root.appendChild(aufgabenBauen(stunde));
    if (stunde.links && stunde.links.length) root.appendChild(linksBauen(stunde.links));

    root.appendChild(weiterBauen(stunde));
  }

  function kopfBauen(stunde) {
    var kopf = el("header", "inf-kopf");
    var meta = el("div", "inf-meta");
    meta.appendChild(el("span", "inf-chip", "Stunde " + stunde.stunde));
    meta.appendChild(el("span", "inf-chip", stunde.dauer || "40 Minuten"));
    if (stunde.lernbereichTitel) meta.appendChild(el("span", "inf-chip", stunde.lernbereichTitel));
    kopf.appendChild(meta);
    kopf.appendChild(el("h1", null, stunde.titel));
    if (stunde.ziel) kopf.appendChild(el("p", "inf-ziel", "Das kann ich danach: " + stunde.ziel));
    return kopf;
  }

  function ablaufBauen(ablauf) {
    var abschnitt = block("Stundenablauf: 40 Minuten", "inf-ablauf");
    var liste = el("ol");
    ablauf.forEach(function (phase) {
      var punkt = el("li");
      punkt.appendChild(el("strong", null, phase.zeit + " "));
      punkt.appendChild(document.createTextNode(phase.text));
      liste.appendChild(punkt);
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function infotextBauen(teil) {
    var abschnitt = block(teil.ueberschrift || "Informationstext");
    (teil.absaetze || []).forEach(function (text) {
      abschnitt.appendChild(el("p", null, text));
    });
    if (teil.liste && teil.liste.length) {
      var liste = el("ul", "inf-liste");
      teil.liste.forEach(function (text) {
        liste.appendChild(el("li", null, text));
      });
      abschnitt.appendChild(liste);
    }
    return abschnitt;
  }

  function merkkastenBauen(eintraege) {
    var abschnitt = block("Merke dir", "inf-merke");
    var liste = el("ul");
    eintraege.forEach(function (text) {
      liste.appendChild(el("li", null, text));
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function bilderBauen(bilder) {
    var abschnitt = block("Bild und Erklärung");
    var grid = el("div", "inf-bilder");
    bilder.forEach(function (eintrag) {
      var figur = el("figure", "inf-bild");
      var img = el("img");
      img.src = "../bilder/" + eintrag.datei;
      img.alt = eintrag.alt || "";
      img.loading = "lazy";
      figur.appendChild(img);
      if (eintrag.titel) figur.appendChild(el("figcaption", null, eintrag.titel));
      grid.appendChild(figur);
    });
    abschnitt.appendChild(grid);
    return abschnitt;
  }

  function praxisBauen(praxis) {
    var abschnitt = block("Arbeitsauftrag", "inf-praxis");
    praxis.forEach(function (auftrag) {
      var karte = el("article", "inf-praxis-karte");
      karte.appendChild(el("h3", null, auftrag.titel || "Auftrag"));
      if (auftrag.hinweis) karte.appendChild(el("p", "inf-hinweis", auftrag.hinweis));
      var liste = el("ol");
      (auftrag.schritte || []).forEach(function (text) {
        liste.appendChild(el("li", null, text));
      });
      karte.appendChild(liste);
      if (auftrag.ergebnis) karte.appendChild(el("p", "inf-erwartung", "Ergebnis: " + auftrag.ergebnis));
      abschnitt.appendChild(karte);
    });
    return abschnitt;
  }

  function wortspeicherBauen(woerter) {
    var abschnitt = block("Wortspeicher für die Probe", "inf-wort");
    abschnitt.appendChild(el("p", null, "Diese Begriffe solltest du erklären können:"));
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

  function aufgabenBauen(stunde) {
    var abschnitt = block("Fragen zum Anklicken", "inf-quiz");
    abschnitt.appendChild(el("p", null, "Bearbeite die Fragen. Klicke dann auf Prüfen."));
    var pruefer = [];

    stunde.aufgaben.forEach(function (aufgabe, index) {
      if (aufgabe.typ === "auswahl") abschnitt.appendChild(auswahlBauen(aufgabe, index + 1, pruefer));
      if (aufgabe.typ === "richtig_falsch") abschnitt.appendChild(richtigFalschBauen(aufgabe, index + 1, pruefer));
      if (aufgabe.typ === "zuordnung") abschnitt.appendChild(zuordnungBauen(aufgabe, index + 1, pruefer));
      if (aufgabe.typ === "lueckentext") abschnitt.appendChild(lueckentextBauen(aufgabe, index + 1, pruefer));
    });

    var aktionen = el("div", "inf-aktionen");
    var pruefen = el("button", "inf-knopf", "Prüfen");
    pruefen.type = "button";
    var neu = el("button", "inf-knopf zweit", "Neu starten");
    neu.type = "button";
    neu.addEventListener("click", function () { window.location.reload(); });
    aktionen.appendChild(pruefen);
    aktionen.appendChild(neu);
    abschnitt.appendChild(aktionen);

    var ergebnis = el("div", "inf-ergebnis");
    ergebnis.hidden = true;
    ergebnis.setAttribute("role", "status");
    abschnitt.appendChild(ergebnis);

    pruefen.addEventListener("click", function () {
      var richtig = 0;
      var gesamt = 0;
      pruefer.forEach(function (fn) {
        var r = fn();
        richtig += r.richtig;
        gesamt += r.gesamt;
      });
      ergebnis.hidden = false;
      ergebnis.className = "inf-ergebnis " + (richtig === gesamt ? "gut" : "mittel");
      ergebnis.textContent = richtig === gesamt
        ? "Sehr gut. Alle " + gesamt + " Antworten sind richtig. Die Stunde ist geschafft."
        : richtig + " von " + gesamt + " richtig. Schau dir die markierten Antworten noch einmal an.";
      if (window.GrumiFortschritt) window.GrumiFortschritt.speichern(stunde.id, richtig, gesamt);
      ergebnis.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    return abschnitt;
  }

  function nummerBauen(nummer, text) {
    var frage = el("p", "inf-frage");
    var nr = el("span", "inf-nr", String(nummer));
    nr.setAttribute("aria-hidden", "true");
    frage.appendChild(nr);
    frage.appendChild(document.createTextNode(text));
    return frage;
  }

  function auswahlBauen(aufgabe, nummer, pruefer) {
    var box = el("article", "inf-aufgabe");
    box.appendChild(nummerBauen(nummer, aufgabe.text));
    var wrap = el("div", "inf-auswahl");
    var gewaehlt = null;
    aufgabe.optionen.forEach(function (option, i) {
      var knopf = el("button", "inf-option", option);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", "false");
      knopf.addEventListener("click", function () {
        gewaehlt = i;
        Array.prototype.forEach.call(wrap.children, function (anderer) {
          anderer.setAttribute("aria-pressed", "false");
          anderer.classList.remove("richtig", "falsch");
        });
        knopf.setAttribute("aria-pressed", "true");
      });
      wrap.appendChild(knopf);
    });
    box.appendChild(wrap);
    pruefer.push(function () {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(wrap.children, function (knopf, i) {
        knopf.classList.remove("richtig", "falsch");
        if (i === aufgabe.loesung) knopf.classList.add("richtig");
        if (i === gewaehlt && !passt) knopf.classList.add("falsch");
      });
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });
    return box;
  }

  function richtigFalschBauen(aufgabe, nummer, pruefer) {
    var box = el("article", "inf-aufgabe");
    box.appendChild(nummerBauen(nummer, aufgabe.text));
    var wrap = el("div", "inf-rf");
    var gewaehlt = null;
    [["Richtig", true], ["Falsch", false]].forEach(function (paar) {
      var knopf = el("button", "inf-option kurz", paar[0]);
      knopf.type = "button";
      knopf.setAttribute("aria-pressed", "false");
      knopf.addEventListener("click", function () {
        gewaehlt = paar[1];
        Array.prototype.forEach.call(wrap.children, function (anderer) {
          anderer.setAttribute("aria-pressed", "false");
          anderer.classList.remove("richtig", "falsch");
        });
        knopf.setAttribute("aria-pressed", "true");
      });
      wrap.appendChild(knopf);
    });
    box.appendChild(wrap);
    pruefer.push(function () {
      var passt = gewaehlt === aufgabe.loesung;
      Array.prototype.forEach.call(wrap.children, function (knopf) {
        knopf.classList.remove("richtig", "falsch");
        var wert = knopf.textContent === "Richtig";
        if (wert === aufgabe.loesung) knopf.classList.add("richtig");
        if (knopf.getAttribute("aria-pressed") === "true" && !passt) knopf.classList.add("falsch");
      });
      return { richtig: passt ? 1 : 0, gesamt: 1 };
    });
    return box;
  }

  function zuordnungBauen(aufgabe, nummer, pruefer) {
    var box = el("article", "inf-aufgabe");
    box.appendChild(nummerBauen(nummer, aufgabe.text));
    var begriffe = aufgabe.paare.map(function (p) { return p.begriff; }).sort();
    var wrap = el("div", "inf-zuordnung");
    var felder = [];
    aufgabe.paare.forEach(function (paar) {
      var reihe = el("label", "inf-zu-reihe");
      reihe.appendChild(el("span", null, paar.erklaerung));
      var select = el("select", "inf-select");
      select.appendChild(el("option", null, "auswählen"));
      select.firstChild.value = "";
      begriffe.forEach(function (begriff) {
        var option = el("option", null, begriff);
        option.value = begriff;
        select.appendChild(option);
      });
      reihe.appendChild(select);
      wrap.appendChild(reihe);
      felder.push({ feld: select, loesung: paar.begriff });
    });
    box.appendChild(wrap);
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
    return box;
  }

  function lueckentextBauen(aufgabe, nummer, pruefer) {
    var box = el("article", "inf-aufgabe");
    var frage = nummerBauen(nummer, "");
    var teile = aufgabe.text.split("___");
    var felder = [];
    teile.forEach(function (teil, i) {
      frage.appendChild(document.createTextNode(teil));
      if (i < teile.length - 1) {
        var input = el("input", "inf-luecke");
        input.type = "text";
        input.autocomplete = "off";
        input.spellcheck = false;
        input.setAttribute("aria-label", "Lücke " + (i + 1));
        frage.appendChild(input);
        felder.push(input);
      }
    });
    box.appendChild(frage);
    pruefer.push(function () {
      var richtig = 0;
      felder.forEach(function (feld, i) {
        var passt = normalisieren(feld.value) === normalisieren(aufgabe.loesungen[i]);
        feld.classList.remove("richtig", "falsch");
        feld.classList.add(passt ? "richtig" : "falsch");
        if (passt) richtig += 1;
      });
      return { richtig: richtig, gesamt: felder.length };
    });
    return box;
  }

  function linksBauen(links) {
    var abschnitt = block("Für Schnelle", "inf-schnelle");
    abschnitt.appendChild(el("p", null, "Wenn du fertig bist, kannst du hier sicher weiterüben oder nachlesen:"));
    var liste = el("ul", "inf-links");
    links.forEach(function (link) {
      var punkt = el("li");
      var a = el("a", null, link.titel);
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      if (link.hinweis) a.appendChild(el("small", null, link.hinweis));
      punkt.appendChild(a);
      liste.appendChild(punkt);
    });
    abschnitt.appendChild(liste);
    return abschnitt;
  }

  function weiterBauen(stunde, oben) {
    var nav = el("nav", "inf-weiter" + (oben ? " oben" : ""));
    nav.setAttribute("aria-label", "Weitere Stunden");
    var alle = el("a", "inf-weiter-link", "Alle Stunden");
    alle.href = "../index.html";
    nav.appendChild(alle);
    if (stunde.vorherige) {
      var vor = el("a", "inf-weiter-link", "Vorherige Stunde");
      vor.href = stunde.vorherige;
      nav.appendChild(vor);
    }
    if (stunde.naechste) {
      var weiter = el("a", "inf-weiter-link stark", "Nächste Stunde");
      weiter.href = stunde.naechste;
      nav.appendChild(weiter);
    }
    return nav;
  }
})();
