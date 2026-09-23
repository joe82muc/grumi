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
    var fig = el("figure", "hero-media");
    var img = el("img");
    img.src = module.image;
    img.alt = module.imageAlt || "";
    fig.appendChild(img);
    s.appendChild(fig);
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

  function distillation(box) {
    var r = range(30, 360, 78, "Temperatur im Destillationsturm");
    var tower = el("div", "tower");
    var info = el("p", "sim-output");
    box.appendChild(r.wrap); box.appendChild(tower); box.appendChild(info);
    var fractions = [
      [40, "Gase sammeln sich ganz oben."],
      [80, "Benzin und leichte Bestandteile kondensieren weit oben."],
      [180, "Kerosin und Diesel werden in mittleren Bereichen abgeleitet."],
      [300, "Schwere Öle und Rückstände bleiben weiter unten."]
    ];
    function draw() {
      var v = Number(r.input.value);
      tower.style.setProperty("--level", Math.max(0, Math.min(100, (v - 30) / 330 * 100)) + "%");
      var text = fractions.reduce(function (acc, f) { return v >= f[0] ? f[1] : acc; }, "Noch verdampft nur wenig.");
      info.textContent = Math.round(v) + " Grad Celsius: " + text;
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

  function carbonAtoms(box) {
    box.appendChild(el("p", null, "Baue ein vereinfachtes Kohlenstoffgerüst auf."));
    var r = range(1, 6, 3, "Anzahl der Kohlenstoffatome");
    var atoms = el("div", "atom-sim");
    var info = el("p", "sim-output");
    box.appendChild(r.wrap); box.appendChild(atoms); box.appendChild(info);
    function draw() {
      var count = Number(r.input.value);
      atoms.textContent = "";
      for (var i = 0; i < count; i += 1) atoms.appendChild(el("span", null, "C"));
      info.textContent = count === 1
        ? "Ein Kohlenstoffatom kann Teil eines kleinen organischen Moleküls sein."
        : count + " Kohlenstoffatome bilden ein vereinfachtes Gerüst für größere organische Moleküle.";
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
