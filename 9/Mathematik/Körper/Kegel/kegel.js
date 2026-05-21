(function () {
  const svgns = "http://www.w3.org/2000/svg";
  const fmt = (value) =>
    new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2, minimumFractionDigits: Number.isInteger(value) ? 0 : 1 }).format(value);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function el(name, attrs = {}, text) {
    const node = document.createElementNS(svgns, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function project(point, yaw, pitch, scale, ox, oy) {
    const yr = (yaw * Math.PI) / 180;
    const pr = (pitch * Math.PI) / 180;
    const cy = Math.cos(yr);
    const sy = Math.sin(yr);
    const cp = Math.cos(pr);
    const sp = Math.sin(pr);
    const rx = point.x * cy - point.z * sy;
    const rz = point.x * sy + point.z * cy;
    const ry = point.y * cp - rz * sp;
    const depth = point.y * sp + rz * cp;
    return { x: ox + rx * scale, y: oy - ry * scale, z: depth };
  }

  function pointString(points) {
    return points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
  }

  function buildCone(radius, height) {
    const segments = 52;
    const apex = { x: 0, y: height, z: 0 };
    const center = { x: 0, y: 0, z: 0 };
    const rim = Array.from({ length: segments }, (_, index) => {
      const a = (index / segments) * Math.PI * 2;
      return { x: radius * Math.cos(a), y: 0, z: radius * Math.sin(a) };
    });
    const faces = [
      { points: [...rim].reverse(), fill: "rgba(20, 184, 166, .16)", stroke: "rgba(15, 118, 110, .42)" },
      ...rim.map((point, index) => ({
        points: [apex, point, rim[(index + 1) % rim.length]],
        fill: `rgba(251, 146, 60, ${(0.36 + 0.18 * Math.sin((index / segments) * Math.PI * 2)).toFixed(2)})`,
        stroke: "rgba(154, 52, 18, .38)",
      })),
    ];
    return {
      faces,
      guides: [
        { from: center, to: apex, label: "hk", color: "#be185d", dashed: true },
        { from: center, to: { x: radius, y: 0, z: 0 }, label: "r", color: "#0f766e" },
        { from: apex, to: { x: radius, y: 0, z: 0 }, label: "s", color: "#334155" },
        { from: { x: -radius, y: 0, z: 0 }, to: { x: radius, y: 0, z: 0 }, label: "d", color: "#334155" },
      ],
    };
  }

  function ensureMarker(svg, id, color) {
    let defs = svg.querySelector("defs");
    if (!defs) {
      defs = el("defs");
      svg.appendChild(defs);
    }
    if (svg.querySelector(`#${id}`)) return;
    const marker = el("marker", {
      id,
      viewBox: "0 0 10 10",
      refX: 5,
      refY: 5,
      markerWidth: 5,
      markerHeight: 5,
      orient: "auto-start-reverse",
    });
    marker.appendChild(el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: color }));
    defs.appendChild(marker);
  }

  function renderCone(svg, state, radius, height, options = {}) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 520 340");
    ensureMarker(svg, "arrow", "#334155");
    const model = buildCone(radius, height);
    const scale = 170 / Math.max(radius * 2, height, 1);
    const ox = 260;
    const oy = 255;
    const projectedFaces = model.faces
      .map((face) => {
        const points = face.points.map((point) => project(point, state.yaw, state.pitch, scale, ox, oy));
        const depth = points.reduce((sum, point) => sum + point.z, 0) / points.length;
        return { ...face, points, depth };
      })
      .sort((a, b) => a.depth - b.depth);

    svg.appendChild(el("line", { x1: 56, y1: 296, x2: 464, y2: 296, stroke: "#d9e2ef", "stroke-width": 1.4 }));
    projectedFaces.forEach((face) => {
      svg.appendChild(el("polygon", {
        points: pointString(face.points),
        fill: face.fill,
        stroke: face.stroke,
        "stroke-width": 1.2,
        "stroke-linejoin": "round",
      }));
    });

    model.guides.forEach((guide) => {
      const from = project(guide.from, state.yaw, state.pitch, scale, ox, oy);
      const to = project(guide.to, state.yaw, state.pitch, scale, ox, oy);
      const mx = (from.x + to.x) / 2;
      const my = (from.y + to.y) / 2;
      const label = options.labels && Object.prototype.hasOwnProperty.call(options.labels, guide.label)
        ? options.labels[guide.label]
        : (guide.label === "d" ? `d = ${fmt(radius * 2)}` : guide.label);
      svg.appendChild(el("line", {
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        stroke: guide.color,
        "stroke-width": options.fine ? 1.8 : 2.2,
        "stroke-dasharray": guide.dashed ? "6 5" : "",
        "marker-start": "url(#arrow)",
        "marker-end": "url(#arrow)",
      }));
      const text = el("text", {
        x: mx + 8,
        y: my - 7,
        fill: guide.color,
        "font-size": options.fine ? 13 : 15,
        "font-weight": options.fine ? 650 : 750,
        "paint-order": "stroke",
        stroke: "#fffdfa",
        "stroke-width": 3,
      }, label);
      svg.appendChild(text);
    });
  }

  function attachConeViewer(svg, getValues, options = {}) {
    const state = { yaw: -28, pitch: -18, drag: null };
    const draw = () => {
      const values = getValues();
      renderCone(svg, state, values.radius, values.height, options);
    };
    svg.classList.add("interactive");
    svg.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      state.drag = { x: event.clientX, y: event.clientY, yaw: state.yaw, pitch: state.pitch };
      svg.setPointerCapture(event.pointerId);
    });
    svg.addEventListener("pointermove", (event) => {
      if (!state.drag) return;
      event.preventDefault();
      state.yaw = state.drag.yaw + (event.clientX - state.drag.x) * 0.45;
      state.pitch = clamp(state.drag.pitch + (event.clientY - state.drag.y) * 0.35, -70, 45);
      draw();
    });
    ["pointerup", "pointercancel"].forEach((type) => svg.addEventListener(type, (event) => {
      state.drag = null;
      if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    }));
    draw();
    return draw;
  }

  function renderConeNet(svg, radius, height) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 520 315");
    ensureMarker(svg, "net-arrow", "#0f766e");
    const s = Math.hypot(radius, height);
    const angle = (radius / s) * Math.PI * 2;
    const start = -Math.PI / 2 - angle / 2;
    const end = -Math.PI / 2 + angle / 2;
    const cx = 160;
    const cy = 170;
    const sr = 112;
    const sp = { x: cx + sr * Math.cos(start), y: cy + sr * Math.sin(start) };
    const ep = { x: cx + sr * Math.cos(end), y: cy + sr * Math.sin(end) };
    const large = angle > Math.PI ? 1 : 0;
    const br = clamp((radius / s) * sr, 24, 78);
    svg.appendChild(el("path", {
      d: `M ${cx} ${cy} L ${sp.x.toFixed(1)} ${sp.y.toFixed(1)} A ${sr} ${sr} 0 ${large} 1 ${ep.x.toFixed(1)} ${ep.y.toFixed(1)} Z`,
      fill: "rgba(20,184,166,.18)",
      stroke: "#0f766e",
      "stroke-width": 2,
    }));
    svg.appendChild(el("path", {
      d: `M ${sp.x.toFixed(1)} ${sp.y.toFixed(1)} A ${sr} ${sr} 0 ${large} 1 ${ep.x.toFixed(1)} ${ep.y.toFixed(1)}`,
      fill: "none",
      stroke: "#14b8a6",
      "stroke-width": 5,
      "stroke-linecap": "round",
    }));
    svg.appendChild(el("line", { x1: cx, y1: cy, x2: sp.x, y2: sp.y, stroke: "#0f766e", "stroke-width": 2 }));
    svg.appendChild(el("line", { x1: cx, y1: cy, x2: ep.x, y2: ep.y, stroke: "#0f766e", "stroke-width": 2 }));
    svg.appendChild(el("text", { x: cx - 12, y: cy - 10, fill: "#134e4a", "font-size": 15, "font-weight": 700 }, "s"));
    svg.appendChild(el("text", { x: 42, y: 292, fill: "#0f766e", "font-size": 13, "font-weight": 700 }, "Mantel: Kreisausschnitt, Bogenlänge 2πr"));
    svg.appendChild(el("circle", { cx: 386, cy: 170, r: br, fill: "rgba(20,184,166,.16)", stroke: "#0f766e", "stroke-width": 2 }));
    svg.appendChild(el("line", {
      x1: 386,
      y1: 170,
      x2: 386 + br,
      y2: 170,
      stroke: "#0f766e",
      "stroke-width": 2,
      "marker-start": "url(#net-arrow)",
      "marker-end": "url(#net-arrow)",
    }));
    svg.appendChild(el("text", { x: 390 + br / 2, y: 158, fill: "#134e4a", "font-size": 15, "font-weight": 700 }, "r"));
    svg.appendChild(el("text", { x: 338, y: 292, fill: "#0f766e", "font-size": 13, "font-weight": 700 }, "Grundfläche"));
  }

  function setupRotationsPage() {
    const root = document.querySelector("[data-page='rotations']");
    if (!root) return;
    const radiusInput = root.querySelector("#radius");
    const heightInput = root.querySelector("#height");
    const modelSvg = root.querySelector("#cone-model");
    const netSvg = root.querySelector("#cone-net");
    const formulas = root.querySelector("#formula-values");
    const values = () => ({ radius: Number(radiusInput.value), height: Number(heightInput.value) });
    const drawModel = attachConeViewer(modelSvg, values);
    function update() {
      const { radius, height } = values();
      drawModel();
      renderConeNet(netSvg, radius, height);
      formulas.innerHTML = `
        <div class="formula formula-wide">
          <div class="formula-title">Mantellinie s</div>
          <div class="math-line">s<sup>2</sup> = h<sub>k</sub><sup>2</sup> + r<sup>2</sup></div>
        </div>
        <div class="formula">
          <div class="formula-title">Volumen</div>
          <div class="math-line">V = <span class="frac"><span>1</span><span>3</span></span> · π · r<sup>2</sup> · h<sub>k</sub></div>
        </div>
        <div class="formula">
          <div class="formula-title">Mantelfläche</div>
          <div class="math-line">M = π · r · s</div>
        </div>
        <div class="formula">
          <div class="formula-title">Oberfläche</div>
          <div class="math-line">O = G + M = π · r<sup>2</sup> + M</div>
        </div>`;
    }
    [radiusInput, heightInput].forEach((input) => input.addEventListener("input", update));
    update();
  }

  function drawTriangle(svg, radius, slant, height, options = {}) {
    const unit = options.unit || "cm";
    const labels = {
      r: `r = ${fmt(radius)} ${unit}`,
      hk: `hk = ${fmt(height)} ${unit}`,
      s: `s = ${fmt(slant)} ${unit}`,
      ...(options.labels || {}),
    };
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 420 250");
    svg.appendChild(el("polygon", { points: "105,190 315,190 105,58", fill: "rgba(20,184,166,.10)", stroke: "#0f766e", "stroke-width": 3 }));
    svg.appendChild(el("line", { x1: 105, y1: 190, x2: 315, y2: 190, stroke: "#0f766e", "stroke-width": 5 }));
    svg.appendChild(el("line", { x1: 105, y1: 190, x2: 105, y2: 58, stroke: "#be185d", "stroke-width": 5 }));
    svg.appendChild(el("line", { x1: 105, y1: 58, x2: 315, y2: 190, stroke: "#334155", "stroke-width": 5 }));
    svg.appendChild(el("path", { d: "M 105 166 L 129 166 L 129 190", fill: "none", stroke: "#111827", "stroke-width": 3 }));
    svg.appendChild(el("text", { x: 132, y: 182, fill: "#111827", "font-size": 12, "font-weight": 650 }, "90°"));
    svg.appendChild(el("text", { x: 198, y: 218, fill: "#0f766e", "font-size": 15, "font-weight": 700 }, labels.r));
    const hk = el("text", { x: 60, y: 132, fill: "#be185d", "font-size": 15, "font-weight": 700 }, labels.hk);
    svg.appendChild(hk);
    svg.appendChild(el("text", { x: 218, y: 104, fill: "#334155", "font-size": 15, "font-weight": 700, transform: "rotate(32 218 104)" }, labels.s));
    svg.appendChild(el("text", { x: 58, y: 82, fill: "#be185d", "font-size": 12, "font-weight": 650, transform: "rotate(-90 58 82)" }, "Kathete hk"));
    svg.appendChild(el("text", { x: 182, y: 238, fill: "#0f766e", "font-size": 12, "font-weight": 650 }, "Kathete r"));
    svg.appendChild(el("text", { x: 216, y: 78, fill: "#334155", "font-size": 12, "font-weight": 650, transform: "rotate(32 216 78)" }, "Hypotenuse s"));
  }

  function drawTipi(svg, diameter, height, slant, options = {}) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 420 250");
    const radius = diameter / 2;
    const labels = {
      d: `d = ${fmt(diameter)} m`,
      hk: `hk = ${fmt(height)} m`,
      s: `s = ${fmt(slant)} m`,
      r: `r = ${fmt(radius)} m`,
      ...(options.labels || {}),
    };
    const centerX = 210;
    const baseY = 190;
    const topY = 42;
    const leftX = 92;
    const rightX = 328;

    svg.appendChild(el("ellipse", { cx: centerX, cy: baseY, rx: 118, ry: 24, fill: "#dcfce7", stroke: "#047857", "stroke-width": 2 }));
    for (let i = 0; i <= 11; i += 1) {
      const x = leftX + (rightX - leftX) * (i / 11);
      svg.appendChild(el("line", { x1: centerX, y1: topY, x2: x, y2: baseY, stroke: "#047857", "stroke-width": 1.5, opacity: 0.7 }));
    }
    svg.appendChild(el("path", { d: `M ${centerX} ${topY} L ${leftX} ${baseY} C 132 214 288 214 ${rightX} ${baseY} Z`, fill: "rgba(34,197,94,.22)", stroke: "#047857", "stroke-width": 2 }));
    svg.appendChild(el("path", { d: `M ${centerX} ${topY} L ${centerX} ${baseY} L ${rightX} ${baseY} Z`, fill: "rgba(20,184,166,.14)", stroke: "#0f766e", "stroke-width": 3 }));
    svg.appendChild(el("path", { d: `M ${centerX} ${baseY - 22} L ${centerX + 22} ${baseY - 22} L ${centerX + 22} ${baseY}`, fill: "none", stroke: "#111827", "stroke-width": 2.4 }));
    svg.appendChild(el("line", { x1: leftX, y1: 224, x2: rightX, y2: 224, stroke: "#334155", "stroke-width": 2 }));
    svg.appendChild(el("text", { x: 188, y: 242, fill: "#334155", "font-size": 14, "font-weight": 700 }, labels.d));
    svg.appendChild(el("text", { x: 220, y: 122, fill: "#be185d", "font-size": 14, "font-weight": 800 }, `hₖ = ${fmt(height)} m`));
    svg.appendChild(el("text", { x: 268, y: 111, fill: "#334155", "font-size": 14, "font-weight": 800, transform: "rotate(50 268 111)" }, labels.s));
    svg.appendChild(el("text", { x: 252, y: 184, fill: "#0f766e", "font-size": 13, "font-weight": 800 }, labels.r));
  }

  function drawCompoundModel(svg, task) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 520 260");
    ensureMarker(svg, "arrow", "#334155");
    const radius = task.given.d / 2;
    const d = task.given.d;
    const cylinderH = task.given.cylinderH;
    const coneH = task.given.coneH;

    svg.appendChild(el("ellipse", { cx: 145, cy: 132, rx: 34, ry: 70, fill: "rgba(148,163,184,.24)", stroke: "#334155", "stroke-width": 2 }));
    svg.appendChild(el("rect", { x: 145, y: 62, width: 150, height: 140, fill: "rgba(148,163,184,.18)", stroke: "#334155", "stroke-width": 2 }));
    svg.appendChild(el("ellipse", { cx: 295, cy: 132, rx: 34, ry: 70, fill: "rgba(148,163,184,.28)", stroke: "#334155", "stroke-width": 2 }));
    svg.appendChild(el("path", { d: "M 295 62 L 420 132 L 295 202 C 322 194 322 70 295 62 Z", fill: "rgba(251,146,60,.28)", stroke: "#9a3412", "stroke-width": 2 }));
    svg.appendChild(el("line", { x1: 145, y1: 42, x2: 295, y2: 42, stroke: "#334155", "stroke-width": 2, "marker-start": "url(#arrow)", "marker-end": "url(#arrow)" }));
    svg.appendChild(el("line", { x1: 295, y1: 222, x2: 420, y2: 222, stroke: "#334155", "stroke-width": 2, "marker-start": "url(#arrow)", "marker-end": "url(#arrow)" }));
    svg.appendChild(el("line", { x1: 108, y1: 62, x2: 108, y2: 202, stroke: "#334155", "stroke-width": 2, "marker-start": "url(#arrow)", "marker-end": "url(#arrow)" }));
    svg.appendChild(el("text", { x: 186, y: 33, fill: "#334155", "font-size": 14, "font-weight": 800 }, `Zylinder: ${fmt(cylinderH)} mm`));
    svg.appendChild(el("text", { x: 321, y: 244, fill: "#334155", "font-size": 14, "font-weight": 800 }, `Kegel: hk = ${fmt(coneH)} mm`));
    svg.appendChild(el("text", { x: 54, y: 136, fill: "#334155", "font-size": 14, "font-weight": 800 }, `d = ${fmt(d)} mm`));
    svg.appendChild(el("text", { x: 245, y: 132, fill: "#0f766e", "font-size": 14, "font-weight": 800 }, `r = ${fmt(radius)} mm`));
  }

  function setupHeightPage() {
    const root = document.querySelector("[data-page='height']");
    if (!root) return;
    const diameterInput = root.querySelector("#diameter");
    const slantInput = root.querySelector("#slant");
    const modelSvg = root.querySelector("#height-cone");
    const triangleSvg = root.querySelector("#triangle");
    const calc = root.querySelector("#calc");
    const answer = root.querySelector("#answer");
    const steps = Array.from(root.querySelectorAll(".step"));
    const focusTargets = Array.from(root.querySelectorAll(".focus-target"));
    let active = "skizze";
    const values = () => {
      const d = Number(diameterInput.value);
      const r = d / 2;
      const s = Number(slantInput.value);
      return { d, r, s, h2: s * s - r * r, h: Math.sqrt(Math.max(s * s - r * r, 0)) };
    };
    const drawCone = attachConeViewer(modelSvg, () => {
      const v = values();
      return { radius: v.r, height: Math.max(v.h, 0.1) };
    }, { fine: true });
    function update() {
      const v = values();
      steps.forEach((step) => step.classList.toggle("active", step.dataset.step === active));
      focusTargets.forEach((target) => {
        const linkedSteps = (target.dataset.focus || "").split(/\s+/);
        target.classList.toggle("focus-active", linkedSteps.includes(active));
      });
      drawCone();
      drawTriangle(triangleSvg, v.r, v.s, v.h);
      calc.innerHTML = `
        <div class="calc-line ${active === "formel" ? "active" : ""}">s<sup>2</sup> = hk<sup>2</sup> + r<sup>2</sup></div>
        <div class="calc-line ${active === "rechnung" ? "active" : ""}">${fmt(v.s)}<sup>2</sup> = hk<sup>2</sup> + ${fmt(v.r)}<sup>2</sup></div>
        <div class="calc-line ${active === "rechnung" ? "active" : ""}">${fmt(v.s * v.s)} = hk<sup>2</sup> + ${fmt(v.r * v.r)} &nbsp;&nbsp; | - ${fmt(v.r * v.r)}</div>
        <div class="calc-line ${active === "rechnung" ? "active" : ""}">hk<sup>2</sup> = ${fmt(v.h2)} &nbsp;&nbsp; | √</div>
        <div class="calc-line ${active === "antwort" ? "active" : ""}">hk = ${fmt(v.h)}</div>`;
      root.querySelector("#given").innerHTML = `d = ${fmt(v.d)} cm, also r = ${fmt(v.r)} cm (Kathete)<br>s = ${fmt(v.s)} cm (Hypotenuse)`;
      answer.textContent = `Antwort: Die Höhe des Kegels beträgt ${fmt(v.h)} cm.`;
    }
    [diameterInput, slantInput].forEach((input) => input.addEventListener("input", update));
    steps.forEach((step) => step.addEventListener("click", () => { active = step.dataset.step; update(); }));
    update();
  }

  function setupTasksPage() {
    const root = document.querySelector("[data-page='tasks']");
    if (!root) return;
    const interactiveTasks = [
      { id: "1", title: "Aufgabe 1: Radius gesucht", text: "gegeben: s = 13 cm, hk = 5 cm. gesucht: Radius des Kegels", unknown: "r", given: { s: 13, h: 5 } },
      { id: "2", title: "Aufgabe 2: Höhe gesucht", text: "gegeben: d = 12 cm, s = 10 cm. gesucht: Höhe des Kegels", unknown: "h", given: { d: 12, s: 10 } },
      { id: "3", title: "Aufgabe 3: Mantellinie gesucht", text: "gegeben: r = 5 cm, hk = 12 cm. gesucht: Mantellinie s", unknown: "s", given: { r: 5, h: 12 } },
      { id: "4", title: "Aufgabe 4: Mantellinie aus Tabelle", text: "gegeben: r = 12,5 cm, hk = 30 cm. gesucht: Mantellinie s", unknown: "s", given: { r: 12.5, h: 30 } },
      { id: "5", title: "Aufgabe 5: Höhe aus Tabelle", text: "gegeben: r = 2,5 cm, s = 6,5 cm. gesucht: Körperhöhe hk", unknown: "h", given: { r: 2.5, s: 6.5 } },
      { id: "6", title: "Aufgabe 6: Radius aus Tabelle", text: "gegeben: hk = 14 dm, s = 14,2 dm. gesucht: Radius r", unknown: "r", unit: "dm", given: { h: 14, s: 14.2 } },
      { id: "7", title: "Aufgabe 7: Tipi", text: "gegeben: d = 9 m, hk = 4 m. gesucht: Länge der Stützstange s", unknown: "s", unit: "m", sketch: "tipi", given: { d: 9, h: 4 } },
      { id: "8", title: "Aufgabe 8: Werkstück-Volumen", text: "gegeben: hk = 18 mm, s = 19,5 mm. gesucht: Volumen des Kegels", unknown: "vFromS", unit: "mm", given: { h: 18, s: 19.5 } },
      { id: "9", title: "Aufgabe 9: Zusammengesetztes Werkstück", text: "gegeben: d = 7,2 mm, Zylinderlänge = 3 mm, Kegelhöhe = 6 mm. gesucht: Gesamtvolumen", unknown: "compoundV", unit: "mm", given: { d: 7.2, cylinderH: 3, coneH: 6 } },
    ];
    let currentTask = 0;
    let visibleSteps = 1;
    const host = root.querySelector("#tasks");
    const fieldState = {};
    let fieldSerial = 0;

    function escapeAttr(value) {
      return String(value).replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }

    function pow2(value) {
      return `${value}<sup>2</sup>`;
    }

    function symbolAnswers(symbol) {
      const normalized = String(symbol).toLowerCase().replace(/<[^>]*>/g, "");
      if (normalized === "hk" || normalized === "h") return ["hk", "h"];
      if (normalized === "vgesamt") return ["vgesamt", "v gesamt", "vg", "v"];
      if (normalized === "vzylinder") return ["vzylinder", "v zylinder", "vz"];
      if (normalized === "vkegel") return ["vkegel", "v kegel", "vk"];
      if (normalized === "hz") return ["hz", "h z"];
      if (normalized === "hkegel") return ["hkegel", "h kegel", "hk"];
      return [symbol];
    }

    function cleanSymbol(value) {
      return String(value)
        .toLowerCase()
        .replace(/<[^>]*>/g, "")
        .replace(/[ₖ]/g, "k")
        .replace(/[²]/g, "2")
        .replace(/[_\s·*]/g, "")
        .trim();
    }

    function parseGermanNumber(value) {
      const normalized = String(value).replace(/\s/g, "").replace(",", ".");
      if (normalized === "") return NaN;
      return Number(normalized);
    }

    function answerPayload(type, expected) {
      if (expected === undefined || expected === null) return "";
      const values = Array.isArray(expected) ? expected : [expected];
      return ` data-kind="${type === "num" ? "num" : "text"}" data-answer="${escapeAttr(values.join("|"))}"`;
    }

    function inputMatches(input) {
      const expected = input.dataset.answer;
      const value = input.value.trim();
      if (!expected) return value !== "";
      if (value === "") return false;

      const answers = expected.split("|");
      if (input.dataset.kind === "num") {
        const typed = parseGermanNumber(value);
        return answers.some((answer) => {
          const wanted = parseGermanNumber(answer);
          const tolerance = Math.max(0.04, Math.abs(wanted) * 0.002);
          return Number.isFinite(typed) && Number.isFinite(wanted) && Math.abs(typed - wanted) <= tolerance;
        });
      }

      const typed = cleanSymbol(value);
      return answers.some((answer) => cleanSymbol(answer) === typed);
    }

    function pythagorasSides(task, solution) {
      const unit = task.unit || "cm";
      const r = task.given.r ?? (task.given.d ? task.given.d / 2 : Math.sqrt(task.given.s * task.given.s - task.given.h * task.given.h));
      const h = task.given.h ?? (task.unknown === "h" ? solution.result : task.given.coneH);
      const shortSides = [
        { symbol: "r", value: r, answers: symbolAnswers("r") },
        { symbol: "hk", value: h, answers: symbolAnswers("hk") },
      ].sort((a, b) => b.value - a.value);

      return {
        unit,
        long: { symbol: "s", value: task.given.s ?? solution.result, answers: symbolAnswers("s") },
        middle: shortSides[0],
        short: shortSides[1],
      };
    }

    function searchedSymbol(task) {
      if (task.unknown === "h") return { symbol: "hk", answers: symbolAnswers("hk") };
      if (task.unknown === "compoundV") return { symbol: "Vgesamt", answers: symbolAnswers("Vgesamt") };
      if (task.unknown === "vFromS") return { symbol: "V", answers: symbolAnswers("V") };
      return { symbol: task.unknown, answers: symbolAnswers(task.unknown) };
    }

    function sortedShortSides(r, h) {
      return [
        { symbol: "r", value: r },
        { symbol: "hk", value: h },
      ].sort((a, b) => b.value - a.value);
    }

    function solveInteractiveTask(task) {
      const unit = task.unit || "cm";
      const r = task.given.r ?? (task.given.d ? task.given.d / 2 : undefined);
      const h = task.given.h;
      const s = task.given.s;

      if (task.unknown === "r") {
        const result = Math.sqrt(s * s - h * h);
        const [middle, short] = sortedShortSides(result, h);
        return {
          result,
          resultUnit: unit,
          givenLines: [`s = ${fmt(s)} ${unit}`, `h<sub>k</sub> = ${fmt(h)} ${unit}`],
          searched: "r",
          formula: `${pow2("s")} = ${pow2(middle.symbol)} + ${pow2(short.symbol)}`,
          insert: `${pow2(fmt(s))} = ${pow2("r")} + ${pow2(fmt(h))}`,
          calc: `${fmt(s * s)} = ${pow2("r")} + ${fmt(h * h)}`,
          transform: `${pow2("r")} = ${fmt(s * s)} - ${fmt(h * h)} = ${fmt(result * result)}<br>r = √${fmt(result * result)} = ${fmt(result)} ${unit}`,
          answer: `r = ${fmt(result)} ${unit}`,
        };
      }

      if (task.unknown === "s") {
        const result = Math.sqrt(r * r + h * h);
        const [middle, short] = sortedShortSides(r, h);
        return {
          result,
          resultUnit: unit,
          givenLines: task.given.d
            ? [`d = ${fmt(task.given.d)} ${unit}, also r = ${fmt(r)} ${unit}`, `h<sub>k</sub> = ${fmt(h)} ${unit}`]
            : [`r = ${fmt(r)} ${unit}`, `h<sub>k</sub> = ${fmt(h)} ${unit}`],
          searched: "s",
          formula: `${pow2("s")} = ${pow2(middle.symbol)} + ${pow2(short.symbol)}`,
          insert: `${pow2("s")} = ${pow2(fmt(middle.value))} + ${pow2(fmt(short.value))}`,
          calc: `${pow2("s")} = ${fmt(middle.value * middle.value)} + ${fmt(short.value * short.value)} = ${fmt(result * result)}`,
          transform: `s = √${fmt(result * result)} = ${fmt(result)} ${unit}`,
          answer: `s = ${fmt(result)} ${unit}`,
        };
      }

      if (task.unknown === "h") {
        const result = Math.sqrt(s * s - r * r);
        const [middle, short] = sortedShortSides(r, result);
        return {
          result,
          resultUnit: unit,
          givenLines: task.given.d
            ? [`d = ${fmt(task.given.d)} ${unit}, also r = ${fmt(r)} ${unit}`, `s = ${fmt(s)} ${unit}`]
            : [`r = ${fmt(r)} ${unit}`, `s = ${fmt(s)} ${unit}`],
          searched: "h<sub>k</sub>",
          formula: `${pow2("s")} = ${pow2(middle.symbol)} + ${pow2(short.symbol)}`,
          insert: `${pow2(fmt(s))} = ${pow2("hk")} + ${pow2(fmt(r))}`,
          calc: `${fmt(s * s)} = ${pow2("hk")} + ${fmt(r * r)}`,
          transform: `${pow2("hk")} = ${fmt(s * s)} - ${fmt(r * r)} = ${fmt(result * result)}<br>h<sub>k</sub> = √${fmt(result * result)} = ${fmt(result)} ${unit}`,
          answer: `h<sub>k</sub> = ${fmt(result)} ${unit}`,
        };
      }

      if (task.unknown === "vFromS") {
        const radius = Math.sqrt(s * s - h * h);
        const result = Math.PI * radius * radius * h / 3;
        const [middle, short] = sortedShortSides(radius, h);
        return {
          result,
          resultUnit: `${unit}³`,
          givenLines: [`h<sub>k</sub> = ${fmt(h)} ${unit}`, `s = ${fmt(s)} ${unit}`],
          searched: "V",
          formula: `${pow2("s")} = ${pow2(middle.symbol)} + ${pow2(short.symbol)}<br>V = <span class="frac"><span>1</span><span>3</span></span> · π · ${pow2("r")} · h<sub>k</sub>`,
          insert: `${pow2(fmt(s))} = ${pow2("r")} + ${pow2(fmt(h))}`,
          calc: `${fmt(s * s)} = ${pow2("r")} + ${fmt(h * h)}`,
          transform: `${pow2("r")} = ${fmt(s * s)} - ${fmt(h * h)} = ${fmt(radius * radius)}<br>r = √${fmt(radius * radius)} = ${fmt(radius)} ${unit}<br>V = <span class="frac"><span>1</span><span>3</span></span> · π · ${pow2(fmt(radius))} · ${fmt(h)} = ${fmt(result)} ${unit}³`,
          answer: `V = ${fmt(result)} ${unit}³`,
        };
      }

      if (task.unknown === "compoundV") {
        const radius = task.given.d / 2;
        const cylinderVolume = Math.PI * radius * radius * task.given.cylinderH;
        const coneVolume = Math.PI * radius * radius * task.given.coneH / 3;
        const result = cylinderVolume + coneVolume;
        return {
          result,
          resultUnit: `${unit}³`,
          givenLines: [`d = ${fmt(task.given.d)} ${unit}, also r = ${fmt(radius)} ${unit}`, `Zylinderlänge = ${fmt(task.given.cylinderH)} ${unit}`, `Kegelhöhe = ${fmt(task.given.coneH)} ${unit}`],
          searched: "V<sub>gesamt</sub>",
          formula: "V<sub>gesamt</sub> = V<sub>Zylinder</sub> + V<sub>Kegel</sub>",
          transform: `V<sub>gesamt</sub> = ${fmt(cylinderVolume)} + ${fmt(coneVolume)} = ${fmt(result)} ${unit}³`,
          insert: `V<sub>gesamt</sub> = π · ${pow2(fmt(radius))} · ${fmt(task.given.cylinderH)} + <span class="frac"><span>1</span><span>3</span></span> · π · ${pow2(fmt(radius))} · ${fmt(task.given.coneH)}`,
          calc: `V<sub>Zylinder</sub> = ${fmt(cylinderVolume)} ${unit}³, V<sub>Kegel</sub> = ${fmt(coneVolume)} ${unit}³`,
          answer: `V<sub>gesamt</sub> = ${fmt(result)} ${unit}³`,
        };
      }

      const result = Math.PI * r * r * h / 3;
      return {
        result,
        resultUnit: `${unit}³`,
        givenLines: [`r = ${fmt(r)} ${unit}`, `h<sub>k</sub> = ${fmt(h)} ${unit}`],
        searched: "V",
        formula: `V = <span class="frac"><span>1</span><span>3</span></span> · π · ${pow2("r")} · h<sub>k</sub>`,
        transform: "Für das Volumen brauchst du kein Bestimmungsdreieck.",
        insert: `V = <span class="frac"><span>1</span><span>3</span></span> · π · ${pow2(fmt(r))} · ${fmt(h)}`,
        calc: `V = <span class="frac"><span>1</span><span>3</span></span> · π · ${fmt(r * r)} · ${fmt(h)}`,
        answer: `V = ${fmt(result)} ${unit}³`,
      };
    }

    function createTaskSvg(label) {
      const svg = document.createElementNS(svgns, "svg");
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", label);
      svg.style.display = "block";
      svg.style.width = "100%";
      return svg;
    }

    function taskGeometry(task, solution, reveal = false) {
      let r = task.given.r ?? (task.given.d ? task.given.d / 2 : undefined);
      if (r === undefined && task.unknown === "r") r = reveal ? solution.result : Math.max((task.given.h || 1) * 0.9, 1);
      if (r === undefined && task.unknown === "vFromS") {
        r = reveal ? Math.sqrt(task.given.s * task.given.s - task.given.h * task.given.h) : Math.max((task.given.h || 1) * 0.45, 1);
      }
      let h = task.given.h ?? task.given.coneH;
      if (h === undefined && task.unknown === "h") h = reveal ? solution.result : Math.max((r || 1) * 1.35, 1);
      const s = task.given.s ?? (r !== undefined && h !== undefined ? Math.hypot(r, h) : solution.result);
      return { r, h, s, d: task.given.d ?? (r !== undefined ? r * 2 : undefined) };
    }

    function taskLabels(task, solution, reveal) {
      const unit = task.unit || "cm";
      const g = taskGeometry(task, solution, reveal);
      const hideR = (task.unknown === "r" || (task.unknown === "vFromS" && !task.given.r && !task.given.d)) && !reveal;
      const hideH = task.unknown === "h" && !reveal;
      const hideS = task.unknown === "s" && !reveal;
      const value = (symbol, number, hidden) => `${symbol} = ${hidden ? "?" : fmt(number)}${hidden ? "" : ` ${unit}`}`;
      return {
        cone: {
          r: value("r", g.r, hideR),
          hk: value("hk", g.h, hideH),
          s: value("s", g.s, hideS),
          d: value("d", g.d, hideR && !task.given.d),
        },
        triangle: {
          r: value("r", g.r, hideR),
          hk: value("hk", g.h, hideH),
          s: value("s", g.s, hideS),
        },
      };
    }

    function renderTaskBody(container, task, solution, reveal) {
      container.innerHTML = "";
      const svg = createTaskSvg("Körpermodell zur Aufgabe");
      if (task.unknown === "compoundV") {
        drawCompoundModel(svg, task);
      } else if (task.sketch === "tipi") {
        const labels = taskLabels(task, solution, reveal).cone;
        drawTipi(svg, task.given.d, task.given.h, solution.result, { labels });
      } else {
        const geometry = taskGeometry(task, solution, reveal);
        const labels = taskLabels(task, solution, reveal).cone;
        renderCone(svg, { yaw: -28, pitch: -18 }, geometry.r, Math.max(geometry.h, 0.1), { fine: true, labels });
      }
      container.appendChild(svg);
    }

    function renderTaskDetail(container, task, solution, reveal) {
      container.innerHTML = "";
      const svg = createTaskSvg("Bestimmungsdreieck zur Aufgabe");
      if (task.unknown === "compoundV") {
        drawCompoundModel(svg, task);
      } else {
        const geometry = taskGeometry(task, solution, reveal);
        const labels = taskLabels(task, solution, reveal).triangle;
        drawTriangle(svg, geometry.r, geometry.s, geometry.h, { unit: task.unit || "cm", labels });
      }
      container.appendChild(svg);
    }

    function blank(type = "text", label = "", expected = null) {
      const key = `t${currentTask}-f${fieldSerial++}`;
      const value = fieldState[key] || "";
      return `<input class="blank ${type === "num" ? "blank-num" : "blank-symbol"}" type="text" aria-label="${escapeAttr(label || "Eingabefeld")}" data-field="${key}" value="${escapeAttr(value)}"${answerPayload(type, expected)} autocomplete="off">`;
    }

    function givenFields(task) {
      const unit = task.unit || "cm";
      const parts = [];
      if (task.given.d !== undefined) parts.push({ name: "Durchmesser", symbol: "d", value: task.given.d });
      if (task.given.r !== undefined) parts.push({ name: "Radius", symbol: "r", value: task.given.r });
      if (task.given.h !== undefined) parts.push({ name: "Körperhöhe", symbol: "hk", value: task.given.h });
      if (task.given.s !== undefined) parts.push({ name: "Mantellinie", symbol: "s", value: task.given.s });
      if (task.given.cylinderH !== undefined) parts.push({ name: "Zylinderlänge", symbol: "hZ", value: task.given.cylinderH });
      if (task.given.coneH !== undefined) parts.push({ name: "Kegelhöhe", symbol: "hKegel", value: task.given.coneH });
      return `<div class="fill-grid">${parts.map((part) => `
        <label>${part.name}
          <span class="fill-line">${blank("text", `${part.name} Buchstabe`, symbolAnswers(part.symbol))} = ${blank("num", `${part.name} Zahl`, part.value)} <span class="unit">${unit}</span></span>
        </label>`).join("")}</div>`;
    }

    function searchedField(task, solution) {
      const searched = searchedSymbol(task);
      return `<div class="fill-line big">${blank("text", "gesuchte Größe", searched.answers)} = <span class="unknown-value">?</span> <span class="unit">${solution.resultUnit || task.unit || "cm"}</span></div>`;
    }

    function pythUnknownSymbol(task) {
      if (task.unknown === "h") return "hk";
      if (task.unknown === "vFromS") return "r";
      return task.unknown;
    }

    function squareInput(type, label, expected) {
      return `${blank(type, label, expected)}<sup>2</sup>`;
    }

    function pythInsertTerm(side, task) {
      const unknown = pythUnknownSymbol(task);
      return side.symbol === unknown
        ? squareInput("text", `${side.symbol} Buchstabe`, side.answers)
        : squareInput("num", `${side.symbol} Zahl`, side.value);
    }

    function pythSquareTerm(side, task) {
      const unknown = pythUnknownSymbol(task);
      return side.symbol === unknown
        ? squareInput("text", `${side.symbol} Buchstabe`, side.answers)
        : blank("num", `${side.symbol} Quadrat`, side.value * side.value);
    }

    function formulaFields(task, solution) {
      if (task.unknown === "compoundV") {
        return `<div class="formula-fill">
          ${blank("text", "Gesamtvolumen", symbolAnswers("Vgesamt"))} = ${blank("text", "Zylindervolumen", symbolAnswers("Vzylinder"))} + ${blank("text", "Kegelvolumen", symbolAnswers("Vkegel"))}<br>
          ${blank("text", "Zylindervolumen", symbolAnswers("Vzylinder"))} = π · ${squareInput("text", "Radius", symbolAnswers("r"))} · ${blank("text", "Zylinderhöhe", symbolAnswers("hZ"))}<br>
          ${blank("text", "Kegelvolumen", symbolAnswers("Vkegel"))} = <span class="frac"><span>1</span><span>3</span></span> · π · ${squareInput("text", "Radius", symbolAnswers("r"))} · ${blank("text", "Kegelhöhe", symbolAnswers("hKegel"))}
        </div>`;
      }

      const sides = pythagorasSides(task, solution);
      if (task.unknown === "vFromS") {
        return `<div class="formula-fill">
          ${squareInput("text", "längste Seite", sides.long.answers)} = ${squareInput("text", "mittlere Seite", sides.middle.answers)} + ${squareInput("text", "kurze Seite", sides.short.answers)}<br>
          ${blank("text", "Volumen", symbolAnswers("V"))} = <span class="frac"><span>1</span><span>3</span></span> · π · ${squareInput("text", "Radius", symbolAnswers("r"))} · ${blank("text", "Körperhöhe", symbolAnswers("hk"))}
        </div>`;
      }
      return `<div class="formula-fill">${squareInput("text", "längste Seite", sides.long.answers)} = ${squareInput("text", "mittlere Seite", sides.middle.answers)} + ${squareInput("text", "kurze Seite", sides.short.answers)}</div>`;
    }

    function insertFields(task, solution) {
      const unit = task.unit || "cm";
      if (task.unknown === "compoundV") {
        const radius = task.given.d / 2;
        return `<div class="formula-fill">${blank("text", "Gesamtvolumen", symbolAnswers("Vgesamt"))} = π · ${squareInput("num", "Radius", radius)} · ${blank("num", "Zylinderlänge", task.given.cylinderH)} + <span class="frac"><span>1</span><span>3</span></span> · π · ${squareInput("num", "Radius", radius)} · ${blank("num", "Kegelhöhe", task.given.coneH)} <span class="unit">${unit}</span></div>`;
      }

      const sides = pythagorasSides(task, solution);
      return `<div class="formula-fill">${pythInsertTerm(sides.long, task)} = ${pythInsertTerm(sides.middle, task)} + ${pythInsertTerm(sides.short, task)}</div>`;
    }

    function calcFields(task, solution) {
      const unit = solution.resultUnit || task.unit || "cm";
      if (task.unknown === "compoundV") {
        const radius = task.given.d / 2;
        const radiusSquared = radius * radius;
        const cylinderVolume = Math.PI * radiusSquared * task.given.cylinderH;
        const coneVolume = Math.PI * radiusSquared * task.given.coneH / 3;
        return `<div class="fill-grid">
          <label>Quadrat ausrechnen <span class="fill-line">${squareInput("num", "Radius", radius)} = ${blank("num", "Radiusquadrat", radiusSquared)}</span></label>
          <label>Zylindervolumen <span class="fill-line">${blank("text", "Zylindervolumen", symbolAnswers("Vzylinder"))} = ${blank("num", "Zylindervolumen", cylinderVolume)} <span class="unit">${unit}</span></span></label>
          <label>Kegelvolumen <span class="fill-line">${blank("text", "Kegelvolumen", symbolAnswers("Vkegel"))} = ${blank("num", "Kegelvolumen", coneVolume)} <span class="unit">${unit}</span></span></label>
        </div>`;
      }

      const sides = pythagorasSides(task, solution);
      return `<div class="fill-grid">
        <label>Quadrate ausrechnen <span class="fill-line">${pythSquareTerm(sides.long, task)} = ${pythSquareTerm(sides.middle, task)} + ${pythSquareTerm(sides.short, task)}</span></label>
      </div>`;
    }

    function transformFields(task, solution) {
      const unit = task.unit || "cm";
      if (task.unknown === "compoundV") {
        const radius = task.given.d / 2;
        const cylinderVolume = Math.PI * radius * radius * task.given.cylinderH;
        const coneVolume = Math.PI * radius * radius * task.given.coneH / 3;
        return `<div class="formula-fill">${blank("text", "Gesamtvolumen", symbolAnswers("Vgesamt"))} = ${blank("num", "Zylindervolumen", cylinderVolume)} + ${blank("num", "Kegelvolumen", coneVolume)} = ${blank("num", "Gesamtvolumen", solution.result)} <span class="unit">${unit}³</span></div>`;
      }

      const sides = pythagorasSides(task, solution);
      const unknown = pythUnknownSymbol(task);
      if (unknown === "s") {
        const resultSquared = solution.result * solution.result;
        const middleSquared = sides.middle.value * sides.middle.value;
        const shortSquared = sides.short.value * sides.short.value;
        return `<div class="fill-grid">
          <label>Hinteren Teil ausrechnen <span class="fill-line">${squareInput("text", "Mantellinie", symbolAnswers("s"))} = ${blank("num", "Quadrat der mittleren Seite", middleSquared)} + ${blank("num", "Quadrat der kurzen Seite", shortSquared)} = ${blank("num", "Quadratsumme", resultSquared)}</span></label>
          <label>Wurzel ziehen <span class="fill-line">${blank("text", "Mantellinie", symbolAnswers("s"))} = √${blank("num", "Quadratsumme", resultSquared)}</span></label>
          <label>Ergebnis <span class="fill-line">${blank("text", "Mantellinie", symbolAnswers("s"))} = ${blank("num", "Mantellinie", solution.result)} <span class="unit">${unit}</span></span></label>
        </div>`;
      }

      const unknownSide = [sides.middle, sides.short].find((side) => side.symbol === unknown);
      const knownSide = [sides.middle, sides.short].find((side) => side.symbol !== unknown);
      const unknownSquared = unknownSide.value * unknownSide.value;
      const longSquared = sides.long.value * sides.long.value;
      const knownSquared = knownSide.value * knownSide.value;
      const pythLine = `<label>Umstellen <span class="fill-line">${squareInput("text", `${unknownSide.symbol} Buchstabe`, unknownSide.answers)} = ${blank("num", "Quadrat der längsten Seite", longSquared)} - ${blank("num", "bekanntes Quadrat", knownSquared)}</span></label>`;
      const calcLine = `<label>Hinteren Teil ausrechnen <span class="fill-line">${squareInput("text", `${unknownSide.symbol} Buchstabe`, unknownSide.answers)} = ${blank("num", "gesuchtes Quadrat", unknownSquared)}</span></label>`;
      const rootLine = `<label>Wurzel ziehen <span class="fill-line">${blank("text", `${unknownSide.symbol} Buchstabe`, unknownSide.answers)} = √${blank("num", "gesuchtes Quadrat", unknownSquared)}</span></label>`;
      const resultLine = `<label>Ergebnis <span class="fill-line">${blank("text", `${unknownSide.symbol} Buchstabe`, unknownSide.answers)} = ${blank("num", "gesuchter Wert", unknownSide.value)} <span class="unit">${unit}</span></span></label>`;

      if (task.unknown === "vFromS") {
        return `<div class="fill-grid">
          ${pythLine}
          ${calcLine}
          ${rootLine}
          ${resultLine}
          <label>Volumen berechnen <span class="fill-line">${blank("text", "Volumen", symbolAnswers("V"))} = ${blank("num", "Volumen", solution.result)} <span class="unit">${unit}³</span></span></label>
        </div>`;
      }

      return `<div class="fill-grid">${pythLine}${calcLine}${rootLine}${resultLine}</div>`;
    }

    function stepContent(number, task, solution, reveal) {
      if (reveal) {
        const solved = [solution.givenLines.join("<br>"), solution.searched, solution.formula, solution.insert, solution.calc, solution.transform, solution.answer];
        return solved[number - 1];
      }
      if (number === 1) return givenFields(task);
      if (number === 2) return searchedField(task, solution);
      if (number === 3) return formulaFields(task, solution);
      if (number === 4) return insertFields(task, solution);
      if (number === 5) return calcFields(task, solution);
      if (number === 6) return transformFields(task, solution);
      return "Die Antwort wird erst im letzten Schritt eingeblendet.";
    }

    function stepCard(number, title, html) {
      return `<article class="solve-step ${visibleSteps >= number ? "visible" : ""}">
        <div class="solve-step-index">${number}</div>
        <div>
          <h3>${title}</h3>
          <div>${html}</div>
          ${number < 7 && visibleSteps === number ? `<button class="secondary step-check" type="button" data-step="${number}">Prüfen</button>` : ""}
        </div>
      </article>`;
    }

    function markInputs(inputs) {
      inputs.forEach((input) => {
        const hasValue = input.value.trim() !== "";
        const ok = hasValue && inputMatches(input);
        input.classList.toggle("missing", !hasValue);
        input.classList.toggle("correct", ok);
        input.classList.toggle("wrong", hasValue && !ok);
      });
    }

    function validateStep(stepNumber) {
      const feedback = host.querySelector("#task-feedback");
      const step = host.querySelector(`.solve-step:nth-child(${stepNumber})`);
      const inputs = Array.from(step.querySelectorAll(".blank"));
      markInputs(inputs);

      const invalidInputs = inputs.filter((input) => !inputMatches(input));
      if (invalidInputs.length) {
        feedback.className = "feedback no";
        feedback.textContent = "Prüfe diesen Schritt. Leere oder falsche Eingaben sind markiert.";
        invalidInputs[0].focus();
        return false;
      }

      feedback.className = "feedback ok";
      feedback.textContent = "Richtig.";
      return true;
    }

    function checkAndAdvance(stepNumber = visibleSteps) {
      if (visibleSteps >= 7) return;
      if (!validateStep(stepNumber)) return;
      visibleSteps = Math.min(7, visibleSteps + 1);
      renderInteractiveTasks();
    }

    function renderInteractiveTasks() {
      const task = interactiveTasks[currentTask];
      const solution = solveInteractiveTask(task);
      const revealSolution = visibleSteps >= 7;
      const detailTitle = task.unknown === "compoundV" ? "Werkstück-Skizze" : "Bestimmungsdreieck";
      const detailInfo = task.unknown === "compoundV" ? "Zylinder und Kegel zusammensetzen" : "Rechtwinkliges Dreieck erkennen";
      fieldSerial = 0;
      host.innerHTML = `
        <div class="task-layout">
          <aside class="task-menu card">
            <h3>Aufgaben</h3>
            <div class="task-buttons">
              ${interactiveTasks.map((item, index) => `<button class="secondary task-choice ${index === currentTask ? "active" : ""}" data-index="${index}">${item.id}</button>`).join("")}
            </div>
            <p class="intro">Fülle den aktuellen Schritt aus und klicke auf „Prüfen“. Wenn alles stimmt, erscheint der nächste Schritt.</p>
          </aside>
          <section class="task-workspace">
            <div class="task-prompt">
              <div><strong>${task.title}</strong><p>${task.text}</p></div>
              <div class="task-actions">
                <button class="secondary" id="prev-step">Schritt zurück</button>
              </div>
            </div>
            <div class="grid two">
              <div class="visual-stack">
                <div class="viewer">
                  <div class="viewer-head"><div><strong>Körpermodell</strong><small>${task.sketch === "tipi" ? "Tipi mit Stützstange" : (task.unknown === "compoundV" ? "Zusammengesetzter Körper" : "Kegel mit Beschriftung")}</small></div></div>
                  <div id="task-body"></div>
                </div>
                <div class="viewer">
                  <div class="viewer-head"><div><strong>${detailTitle}</strong><small>${detailInfo}</small></div></div>
                  <div id="task-visual"></div>
                </div>
              </div>
              <div class="solve-panel">
                ${stepCard(1, "gegeben", stepContent(1, task, solution, revealSolution))}
                ${stepCard(2, "gesucht", stepContent(2, task, solution, revealSolution))}
                ${stepCard(3, "Formel", stepContent(3, task, solution, revealSolution))}
                ${stepCard(4, "einsetzen", stepContent(4, task, solution, revealSolution))}
                ${stepCard(5, "Quadrate", stepContent(5, task, solution, revealSolution))}
                ${stepCard(6, "weiterrechnen", stepContent(6, task, solution, revealSolution))}
                ${stepCard(7, "Antwort", stepContent(7, task, solution, revealSolution))}
              </div>
            </div>
            <div class="check-card card">
              <label for="task-answer">Deine Antwort (${solution.resultUnit})<input id="task-answer" type="text" inputmode="decimal"></label>
              <button id="check-task">Prüfen</button>
              <div id="task-feedback" class="feedback" aria-live="polite"></div>
            </div>
          </section>
        </div>`;

      renderTaskBody(host.querySelector("#task-body"), task, solution, revealSolution);
      renderTaskDetail(host.querySelector("#task-visual"), task, solution, revealSolution);
      host.querySelectorAll(".blank").forEach((input) => input.addEventListener("input", () => {
        fieldState[input.dataset.field] = input.value;
        markInputs([input]);
      }));
      host.querySelectorAll(".task-choice").forEach((button) => button.addEventListener("click", () => {
        currentTask = Number(button.dataset.index);
        visibleSteps = 1;
        renderInteractiveTasks();
      }));
      host.querySelector("#prev-step").addEventListener("click", () => {
        visibleSteps = Math.max(1, visibleSteps - 1);
        renderInteractiveTasks();
      });
      host.querySelectorAll(".step-check").forEach((button) => button.addEventListener("click", () => {
        checkAndAdvance(Number(button.dataset.step));
      }));
      host.querySelector("#check-task").addEventListener("click", () => {
        const guess = parseGermanNumber(host.querySelector("#task-answer").value);
        const feedback = host.querySelector("#task-feedback");
        const tolerance = task.unknown === "vFromS" || task.unknown === "compoundV" ? 0.6 : 0.15;
        const ok = Math.abs(guess - solution.result) <= tolerance;
        feedback.className = `feedback ${ok ? "ok" : "no"}`;
        feedback.textContent = ok
          ? (revealSolution ? `Richtig: ${solution.answer}.` : "Richtig. Die ausformulierte Lösung erscheint im letzten Schritt.")
          : "Noch nicht. Lass dir die Schritte bis zur Antwort anzeigen.";
      });
    }

    renderInteractiveTasks();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupRotationsPage();
    setupHeightPage();
    setupTasksPage();
  });
})();
