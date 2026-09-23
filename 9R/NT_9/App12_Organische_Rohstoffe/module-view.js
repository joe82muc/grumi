(function () {
  var data = window.KohlenstoffKurs;
  var root = document.getElementById("module-root");
  if (!data || !root) return;

  var params = new URLSearchParams(location.search);
  var id = params.get("id") || "m01";
  var module = data.modules.find(function (m) { return m.id === id; }) || data.modules[0];
  var taskChecks = [];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function normalize(value) {
    return String(value || "")
      .trim().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss").replace(/\s+/g, " ")
      .replace(/[.!?]+$/, "");
  }

  function moduleHref(mod) {
    return "module.html?id=" + encodeURIComponent(mod.id);
  }

  function groupOf(mod) {
    return data.groups.find(function (g) { return g.id === mod.group; }) || data.groups[0];
  }

  function build() {
    document.title = "Modul " + module.nr + " | " + module.title + " | NT 9";
    root.textContent = "";

    root.appendChild(hero());
    root.appendChild(lesson());
    root.appendChild(nav());
  }

  function hero() {
    var s = el("section", "hero");
    var txt = el("div", "hero-text");
    txt.appendChild(el("p", "kicker", groupOf(module).title + " · " + module.duration));
    txt.appendChild(el("h1", null, module.title));
    txt.appendChild(el("p", null, module.goal));
    s.appendChild(txt);
    // Ohne Titelbild soll der Text die volle Breite bekommen, sonst
    // bliebe die zweite Spalte des Rasters leer.
    if (module.image) {
      var fig = el("figure", "hero-media");
      var img = el("img");
      img.src = module.image;
      img.alt = module.imageAlt || "";
      fig.appendChild(img);
      s.appendChild(fig);
    } else {
      s.classList.add("hero-no-media");
    }
    return s;
  }

  function lesson() {
    var wrap = el("section", "wrap lesson");
    var main = el("div", "stack");

    (module.sections || []).forEach(function (section) {
      var a = el("article", "panel");
      a.appendChild(el("h2", null, section.title));
      (section.text || []).forEach(function (p) { a.appendChild(el("p", null, p)); });
      if (section.bullets) {
        var ul = el("ul", "clean-list");
        section.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
        a.appendChild(ul);
      }
      main.appendChild(a);
    });

    if (module.interactive) main.appendChild(interactive(module.interactive));
    main.appendChild(tasks());

    var aside = el("aside", "stack");
    (module.figures || []).forEach(function (f) {
      var fig = el("figure", "figure");
      var img = el("img");
      img.src = f.src;
      img.alt = f.caption || "";
      fig.appendChild(img);
      fig.appendChild(el("figcaption", null, f.caption || ""));
      aside.appendChild(fig);
    });

    wrap.appendChild(main);
    wrap.appendChild(aside);
    return wrap;
  }

  function interactive(spec) {
    var box = el("article", "panel interactive");
    box.appendChild(el("h2", null, "Interaktiv verstehen"));
    if (spec.type === "distillation") return distillation(box);
    if (spec.type === "cascade") return cascade(box);
    if (spec.type === "carbonCycle") return carbonCycle(box);
    if (spec.type === "fossilTimeline") return fossilTimeline(box);
    if (spec.type === "compareBars") return compareBars(box);
    return carbonAtoms(box);
  }

  function range(min, max, value, label) {
    var wrap = el("label", "range-control");
    wrap.appendChild(el("span", null, label));
    var input = el("input");
    input.type = "range"; input.min = min; input.max = max; input.value = value;
    wrap.appendChild(input);
    return { wrap: wrap, input: input };
  }

  /* Fraktionen des Destillationsturms, von oben nach unten.
     min/max sind die Siedebereiche in Grad Celsius; sie entsprechen
     den Angaben auf dem Arbeitsblatt (Gase unter 30, Benzine um 100,
     Kerosin um 200, Diesel um 300, Rueckstand darueber). */
  var FRAKTIONEN = [
    { name: "Gase", min: -10, max: 30, farbe: "#dbe7ef",
      info: "Methan, Propan und Butan bleiben gasförmig und verlassen den Turm oben.",
      nutzung: "Heizgas, Feuerzeuggas" },
    { name: "Benzine", min: 30, max: 150, farbe: "#f6e3a6",
      info: "Leichte, dünnflüssige Kohlenwasserstoffe mit kleinen Molekülen.",
      nutzung: "Kraftstoff für Ottomotoren" },
    { name: "Petroleum / Kerosin", min: 150, max: 250, farbe: "#f3c98b",
      info: "Mittelschwere Fraktion, kondensiert im mittleren Turmbereich.",
      nutzung: "Flugzeugtreibstoff" },
    { name: "Diesel / leichtes Heizöl", min: 250, max: 350, farbe: "#dda05f",
      info: "Größere Moleküle, zähflüssiger und schwerer entzündlich.",
      nutzung: "Dieselmotoren, Heizung" },
    { name: "Rückstand", min: 350, max: 500, farbe: "#8d5b34",
      info: "Verdampft bei 350 °C nicht mehr. Wird unter vermindertem Druck weiter destilliert, sonst würde er sich zersetzen.",
      nutzung: "Schmieröle, Bitumen" }
  ];

  function distillation(box) {
    box.appendChild(el("p", null,
      "Im Turm ist es unten heiß und oben kühl. Stelle eine Temperatur ein und "
      + "sieh, auf welchem Zwischenboden diese Fraktion flüssig wird."));

    var r = range(0, 420, 200, "Siedetemperatur");
    var tower = el("div", "tower2");

    /* Ein Streifen je Fraktion. FRAKTIONEN ist bereits von oben (Gase,
       kalt) nach unten (Rueckstand, heiss) sortiert - genau wie im
       Turm auf dem Arbeitsblatt. */
    var reihen = FRAKTIONEN.map(function (f) {
      var row = el("div", "tower-row");
      row.style.background = f.farbe;

      var name = el("span", "tower-name", f.name);
      var temp = el("span", "tower-temp",
        f.min <= -10 ? "unter 30 °C"
          : f.max >= 500 ? "über 350 °C"
            : f.min + "–" + f.max + " °C");
      row.appendChild(name);
      row.appendChild(temp);
      tower.appendChild(row);
      return { row: row, frak: f };
    });

    var zeiger = el("div", "tower-marker");
    zeiger.appendChild(el("span", "tower-marker-dot"));
    var zeigerText = el("span", "tower-marker-label");
    zeiger.appendChild(zeigerText);
    tower.appendChild(zeiger);

    var info = el("p", "sim-output");

    var presets = el("div", "chain-presets");
    [["Gase", 10], ["Benzine", 90], ["Kerosin", 200], ["Diesel", 300], ["Rückstand", 400]]
      .forEach(function (p) {
        var b = el("button", "chain-btn", p[0]);
        b.type = "button";
        b.addEventListener("click", function () { r.input.value = p[1]; draw(); });
        presets.appendChild(b);
      });

    box.appendChild(r.wrap);
    box.appendChild(tower);
    box.appendChild(presets);
    box.appendChild(info);

    function draw() {
      var v = Number(r.input.value);
      var treffer = null;
      reihen.forEach(function (x) {
        var aktiv = v >= x.frak.min && v < x.frak.max;
        x.row.classList.toggle("on", aktiv);
        if (aktiv) treffer = x;
      });

      /* Der Zeiger sitzt mittig auf dem Streifen der getroffenen
         Fraktion. So zeigt er immer genau auf den Zwischenboden, auf
         dem diese Temperatur kondensiert - unabhaengig davon, dass die
         Streifen gleich hoch sind, die Siedebereiche aber nicht. */
      var idx = treffer ? reihen.indexOf(treffer) : reihen.length - 1;
      var pos = (idx + 0.5) / reihen.length * 100;
      zeiger.style.top = "calc(" + pos + "% - 9px)";
      zeigerText.textContent = Math.round(v) + " °C";

      info.textContent = treffer
        ? treffer.frak.name + ": " + treffer.frak.info + " – Verwendung: " + treffer.frak.nutzung + "."
        : "Über 500 °C zersetzen sich die Kohlenwasserstoffe.";
    }

    r.input.addEventListener("input", draw); draw();
    return box;
  }

  function cascade(box) {
    var steps = ["Baum", "Brett", "Regal", "Spanplatte", "Energie"];
    var r = range(0, steps.length - 1, 0, "Nutzungsstufe verschieben");
    var line = el("div", "flow-line");
    steps.forEach(function (s) { line.appendChild(el("span", null, s)); });
    var info = el("p", "sim-output");
    box.appendChild(r.wrap); box.appendChild(line); box.appendChild(info);
    function draw() {
      var i = Number(r.input.value);
      Array.prototype.forEach.call(line.children, function (c, idx) { c.className = idx <= i ? "active" : ""; });
      info.textContent = "Stufe " + (i + 1) + ": Der Rohstoff bleibt länger nutzbar, bevor er verbrannt wird.";
    }
    r.input.addEventListener("input", draw); draw();
    return box;
  }

  function carbonCycle(box) {
    box.appendChild(el("p", null, "Ziehe den Regler und beobachte, wie zusätzliche fossile Verbrennung die CO2-Bilanz verändert."));
    var r = range(0, 100, 35, "Fossile Verbrennung");
    var meter = el("div", "co2-meter"); var fill = el("span"); meter.appendChild(fill);
    var info = el("p", "sim-output");
    box.appendChild(r.wrap); box.appendChild(meter); box.appendChild(info);
    function draw() {
      fill.style.width = r.input.value + "%";
      info.textContent = r.input.value < 30 ? "Der Kreislauf bleibt näher am Gleichgewicht." : r.input.value < 70 ? "Mehr fossiles CO2 belastet das Gleichgewicht." : "Der Treibhauseffekt wird deutlich verstärkt.";
    }
    r.input.addEventListener("input", draw); draw();
    return box;
  }

  function fossilTimeline(box) {
    box.appendChild(el("p", null, "Millionen Jahre werden hier auf wenige Sekunden verdichtet."));
    var anim = el("div", "timeline-sim");
    ["Lebewesen", "Sediment", "Druck", "Erdöl/Erdgas"].forEach(function (s) { anim.appendChild(el("span", null, s)); });
    box.appendChild(anim);
    return box;
  }

  function compareBars(box) {
    box.appendChild(el("p", null, "Verschiebe den Anteil der Ackerfläche, der für Energiepflanzen genutzt wird."));
    var r = range(0, 100, 35, "Anteil Energiepflanzen");
    var bars = el("div", "bar-compare");
    var fuel = el("span");
    var food = el("span");
    var info = el("p", "sim-output");
    bars.appendChild(fuel); bars.appendChild(food);
    box.appendChild(r.wrap); box.appendChild(bars); box.appendChild(info);
    function draw() {
      var value = Number(r.input.value);
      fuel.style.width = Math.max(12, value) + "%";
      food.style.width = Math.max(12, 100 - value) + "%";
      fuel.textContent = "Energiepflanzen " + value + "%";
      food.textContent = "Lebensmittel " + (100 - value) + "%";
      info.textContent = value < 35
        ? "Geringe Flächenkonkurrenz, aber auch wenig Biokraftstoff."
        : value < 65
          ? "Die Konkurrenz zwischen Energie- und Lebensmittelproduktion steigt."
          : "Sehr hohe Flächenkonkurrenz und stärkere Folgen durch intensiven Anbau.";
    }
    r.input.addEventListener("input", draw); draw();
    return box;
  }

  /* Kohlenstoffketten (Alkane). Kohlenstoff kann sich zu Ketten
     verbinden - das ist der Grund, warum es so viele organische
     Stoffe gibt. Jedes C-Atom bindet viermal: an die Nachbarn in
     der Kette, die freien Stellen besetzt Wasserstoff. Daraus
     folgt die Summenformel CnH2n+2. */
  var ALKANE = [
    { name: "Methan",  nutzung: "Hauptbestandteil von Erdgas – zum Heizen und Kochen." },
    { name: "Ethan",   nutzung: "Aus Erdgas; Ausgangsstoff für Kunststoffe." },
    { name: "Propan",  nutzung: "Campinggas in roten Flaschen." },
    { name: "Butan",   nutzung: "Feuerzeuggas und Gaskartuschen." },
    { name: "Pentan",  nutzung: "Leichtbenzin, verdunstet sehr schnell." },
    { name: "Hexan",   nutzung: "Lösemittel, z. B. beim Gewinnen von Rapsöl." },
    { name: "Heptan",  nutzung: "Bestandteil von Benzin." },
    { name: "Oktan",   nutzung: "Namensgeber der Oktanzahl an der Zapfsäule." },
    { name: "Nonan",   nutzung: "Im Dieselbereich der Erdölfraktionen." },
    { name: "Dekan",   nutzung: "Schwerer Kraftstoffanteil, z. B. in Kerosin." }
  ];

  function carbonAtoms(box) {
    box.appendChild(el("p", null,
      "Kohlenstoffatome können sich zu Ketten verbinden. Deshalb gibt es so viele "
      + "organische Stoffe. Stelle die Kettenlänge ein und sieh, welcher Stoff entsteht."));

    var r = range(1, 10, 4, "Anzahl der Kohlenstoffatome");
    var chain = el("pre", "chain-sim");
    var formelZeile = el("p", "chain-name");
    var info = el("p", "sim-output");

    var presets = el("div", "chain-presets");
    [1, 4, 8, 10].forEach(function (n) {
      var b = el("button", "chain-btn", ALKANE[n - 1].name);
      b.type = "button";
      b.addEventListener("click", function () { r.input.value = n; draw(); });
      presets.appendChild(b);
    });

    box.appendChild(r.wrap);
    box.appendChild(chain);
    box.appendChild(formelZeile);
    box.appendChild(presets);
    box.appendChild(info);

    /* Strukturformel als Textbild: obere H-Reihe, die C-Kette mit
       Bindestrichen, untere H-Reihe. Die beiden Kettenenden tragen
       je ein zusaetzliches H. */
    function strukturformel(n) {
      var oben = "", mitte = "", unten = "";
      for (var i = 0; i < n; i += 1) {
        oben  += (i === 0 ? "   " : "   ") + "H";
        mitte += (i === 0 ? "H--C" : "---C");
        unten += (i === 0 ? "   " : "   ") + "H";
      }
      mitte += "--H";
      var striche = "";
      for (var k = 0; k < n; k += 1) striche += "   |";
      return oben + "\n" + striche + "\n" + mitte + "\n" + striche + "\n" + unten;
    }

    function draw() {
      var n = Number(r.input.value);
      var stoff = ALKANE[n - 1];
      chain.textContent = strukturformel(n);
      formelZeile.textContent = stoff.name + "  ·  C" + (n > 1 ? n : "") + "H" + (2 * n + 2);
      info.textContent = n + (n === 1 ? " Kohlenstoffatom: " : " Kohlenstoffatome: ") + stoff.nutzung;
    }

    r.input.addEventListener("input", draw); draw();
    return box;
  }

  function tasks() {
    var section = el("article", "task");
    section.appendChild(el("h2", null, "Aufgaben, Quiz und offene Fragen"));
    section.appendChild(el("p", null, "Bearbeite die Aufgaben. Offene Antworten werden inhaltlich durch die KI geprüft."));
    (module.tasks || []).forEach(function (task, idx) {
      section.appendChild(taskBlock(task, idx + 1));
    });
    var actions = el("div", "actions");
    var btn = el("button", "btn", "Antworten prüfen");
    var result = el("div", "result");
    btn.type = "button";
    btn.addEventListener("click", async function () {
      btn.disabled = true;
      btn.textContent = "Antworten werden geprüft ...";
      try {
        await evaluateAll(result);
      } finally {
        btn.disabled = false;
        btn.textContent = "Antworten prüfen";
      }
    });
    actions.appendChild(btn);
    section.appendChild(actions);
    section.appendChild(result);
    return section;
  }

  function taskBlock(task, nr) {
    var block = el("div", "task-item");
    var q = el("p", "question");
    q.appendChild(el("span", "badge", String(nr)));
    q.appendChild(document.createTextNode(task.prompt));
    block.appendChild(q);
    if (task.type === "choice") choiceTask(block, task);
    if (task.type === "match") matchTask(block, task);
    if (task.type === "order") orderTask(block, task);
    if (task.type === "text") textTask(block, task);
    return block;
  }

  function choiceTask(block, task) {
    var selected = null;
    var list = el("div", "choice-list");
    task.options.forEach(function (opt, i) {
      var b = el("button", "choice", opt);
      b.type = "button";
      b.addEventListener("click", function () {
        selected = i;
        Array.prototype.forEach.call(list.children, function (c) { c.classList.remove("is-selected", "is-correct", "is-wrong"); });
        b.classList.add("is-selected");
      });
      list.appendChild(b);
    });
    block.appendChild(list);
    taskChecks.push(function () {
      var ok = selected === task.answer;
      Array.prototype.forEach.call(list.children, function (c, i) {
        c.classList.remove("is-correct", "is-wrong");
        if (i === selected) c.classList.add(ok ? "is-correct" : "is-wrong");
        if (!ok && i === task.answer) c.classList.add("is-correct");
      });
      return { score: ok ? 1 : 0, total: 1 };
    });
  }

  function matchTask(block, task) {
    var box = el("div", "select-grid");
    var answers = task.pairs.map(function (p) { return p[1]; }).sort();
    var selects = [];
    task.pairs.forEach(function (pair) {
      var label = el("label", null, pair[0]);
      var s = el("select");
      s.appendChild(el("option", null, "Auswählen"));
      answers.forEach(function (a) {
        var o = el("option", null, a); o.value = a; s.appendChild(o);
      });
      label.appendChild(s);
      box.appendChild(label);
      selects.push([s, pair[1]]);
    });
    block.appendChild(box);
    taskChecks.push(function () {
      var score = 0;
      selects.forEach(function (p) {
        var ok = p[0].value === p[1];
        p[0].className = ok ? "ok" : "bad";
        if (ok) score += 1;
      });
      return { score: score, total: selects.length };
    });
  }

  function orderTask(block, task) {
    var list = el("ol", "order-list");
    task.steps.slice().reverse().forEach(function (step) {
      var li = el("li", null, step);
      var up = el("button", "mini", "hoch"); up.type = "button";
      var down = el("button", "mini", "runter"); down.type = "button";
      up.addEventListener("click", function () { if (li.previousElementSibling) list.insertBefore(li, li.previousElementSibling); });
      down.addEventListener("click", function () { if (li.nextElementSibling) list.insertBefore(li.nextElementSibling, li); });
      li.appendChild(up); li.appendChild(down); list.appendChild(li);
    });
    block.appendChild(list);
    taskChecks.push(function () {
      var score = 0;
      Array.prototype.forEach.call(list.children, function (li, i) {
        var ok = li.firstChild.textContent === task.steps[i];
        li.className = ok ? "ok" : "bad";
        if (ok) score += 1;
      });
      return { score: score, total: task.steps.length };
    });
  }

  function textTask(block, task) {
    var area = el("textarea");
    area.rows = 4;
    area.placeholder = "Schreibe deine Antwort in eigenen Worten.";
    var feedback = el("div", "ai-feedback");
    feedback.hidden = true;
    block.appendChild(area); block.appendChild(feedback);
    var last = null;
    taskChecks.push(async function () {
      var text = area.value.trim();
      if (text.length < 3) {
        area.className = "bad"; feedback.hidden = false; feedback.textContent = "Hier fehlt noch eine Antwort.";
        return { score: 0, total: 1 };
      }
      if (last && last.text === text && last.done) {
        return { score: last.ok ? 1 : 0, total: 1 };
      }

      feedback.hidden = false;
      feedback.textContent = "KI prüft deine Antwort ...";
      area.className = "";
      try {
        var response = await fetch((data.apiBase || "") + "/api/kohlenstoff/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ frage: task.prompt, erwartet: task.expected, antwort: text, thema: module.title, keywords: task.keywords || [] })
        });
        if (!response.ok) throw new Error("KI-Dienst nicht erreichbar");
        var res = await response.json();
        last = { text: text, ok: !!res.richtig, done: true };
        area.className = last.ok ? "ok" : "bad";
        feedback.textContent = res.rueckmeldung || "Bewertet.";
      } catch (_error) {
        var ok = fallbackText(text, task);
        last = { text: text, ok: ok, done: true };
        area.className = ok ? "ok" : "bad";
        feedback.textContent = ok
          ? "Die wichtigsten Fachbegriffe sind enthalten."
          : "Der KI-Dienst ist gerade nicht erreichbar. Ergänze noch wichtige Fachbegriffe.";
      }
      return { score: last.ok ? 1 : 0, total: 1 };
    });
  }

  function fallbackText(text, task) {
    var n = normalize(text);
    var keys = (task.keywords || []).map(normalize);
    if (!keys.length) return text.length > 15;
    return keys.filter(function (k) { return n.includes(k); }).length >= Math.min(2, keys.length);
  }

  async function evaluateAll(result) {
    var score = 0, total = 0;
    var checks = await Promise.all(taskChecks.map(function (check) {
      return Promise.resolve(check());
    }));
    checks.forEach(function (r) {
      score += r.score; total += r.total;
    });
    result.className = "result show " + (score >= total ? "good" : "bad");
    result.textContent = score + " von " + total + " Punkten. " + (score >= total ? "Dieses Modul ist geschafft." : "Schau dir die markierten Stellen noch einmal an.");
    if (window.KohlenstoffFortschritt) window.KohlenstoffFortschritt.speichern(module.id, score, total);
  }

  function nav() {
    var n = el("nav", "wrap module-nav");
    var i = data.modules.indexOf(module);
    var prev = data.modules[i - 1];
    var next = data.modules[i + 1];
    var a = el("a", "btn", prev ? "Zurück zu Modul " + prev.nr : "Zur Übersicht");
    a.href = prev ? moduleHref(prev) : "index.html";
    var b = el("a", "btn", next ? "Weiter zu Modul " + next.nr : "Zur Übersicht");
    b.href = next ? moduleHref(next) : "index.html";
    n.appendChild(a); n.appendChild(b);
    return n;
  }

  build();
})();
