(function () {
  const svgns = "http://www.w3.org/2000/svg";
  const fmt = (value) =>
    new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 2,
      minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
    }).format(value);
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const frac = (numerator, denominator) =>
    `<span class="frac"><span>${numerator}</span><span>${denominator}</span></span>`;
  const FRAC_A2 = frac("a", "2");

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

  // --- Geometrie der quadratischen Pyramide -----------------------------
  function pyramidMetrics(a, h) {
    const halfEdge = a / 2;
    const halfDiagonal = (a * Math.SQRT2) / 2; // = a / √2
    const slantHeight = Math.sqrt(h * h + halfEdge * halfEdge); // Seitenhöhe hs
    const edge = Math.sqrt(h * h + halfDiagonal * halfDiagonal); // Seitenkante k
    const baseArea = a * a;
    const mantleArea = 2 * a * slantHeight;
    const surfaceArea = baseArea + mantleArea;
    const volume = (a * a * h) / 3;
    return { a, h, halfEdge, halfDiagonal, slantHeight, edge, baseArea, mantleArea, surfaceArea, volume };
  }

  function buildPyramid(a, h) {
    const m = a / 2;
    const apex = { x: 0, y: h, z: 0 };
    const center = { x: 0, y: 0, z: 0 };
    const c = [
      { x: m, y: 0, z: m },
      { x: m, y: 0, z: -m },
      { x: -m, y: 0, z: -m },
      { x: -m, y: 0, z: m },
    ];
    const sideFill = (i) => `rgba(124, 58, 237, ${(0.3 + 0.16 * i).toFixed(2)})`;
    const faces = [
      { points: c, fill: "rgba(20, 184, 166, .18)", stroke: "rgba(15, 118, 110, .5)" },
      { points: [apex, c[0], c[1]], fill: sideFill(0), stroke: "rgba(76, 29, 149, .45)" },
      { points: [apex, c[1], c[2]], fill: sideFill(1), stroke: "rgba(76, 29, 149, .45)" },
      { points: [apex, c[2], c[3]], fill: sideFill(2), stroke: "rgba(76, 29, 149, .45)" },
      { points: [apex, c[3], c[0]], fill: sideFill(1), stroke: "rgba(76, 29, 149, .45)" },
    ];
    return {
      faces,
      guides: [
        { from: center, to: apex, label: "hk", color: "#be185d", dashed: true },
        { from: c[3], to: c[0], label: "a", color: "#0f766e" },
        { from: apex, to: { x: 0, y: 0, z: m }, label: "hs", color: "#334155", dashed: true },
        { from: apex, to: c[0], label: "k", color: "#7c3aed" },
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

  function renderPyramid(svg, state, a, h, options = {}) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 520 340");
    ensureMarker(svg, "arrow", "#334155");
    const model = buildPyramid(a, h);
    const scale = 168 / Math.max(a, h, 1);
    const ox = 260;
    const oy = 248;
    const projectedFaces = model.faces
      .map((face) => {
        const points = face.points.map((point) => project(point, state.yaw, state.pitch, scale, ox, oy));
        const depth = points.reduce((sum, point) => sum + point.z, 0) / points.length;
        return { ...face, points, depth };
      })
      .sort((a, b) => a.depth - b.depth);

    svg.appendChild(el("line", { x1: 56, y1: 296, x2: 464, y2: 296, stroke: "#e5deff", "stroke-width": 1.4 }));
    projectedFaces.forEach((face) => {
      svg.appendChild(el("polygon", {
        points: pointString(face.points),
        fill: face.fill,
        stroke: face.stroke,
        "stroke-width": 1.4,
        "stroke-linejoin": "round",
      }));
    });

    model.guides.forEach((guide) => {
      if (options.hideGuides && options.hideGuides.includes(guide.label)) return;
      const from = project(guide.from, state.yaw, state.pitch, scale, ox, oy);
      const to = project(guide.to, state.yaw, state.pitch, scale, ox, oy);
      const mx = (from.x + to.x) / 2;
      const my = (from.y + to.y) / 2;
      const label =
        options.labels && Object.prototype.hasOwnProperty.call(options.labels, guide.label)
          ? options.labels[guide.label]
          : guide.label;
      svg.appendChild(el("line", {
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y,
        stroke: guide.color,
        "stroke-width": options.fine ? 1.8 : 2.4,
        "stroke-dasharray": guide.dashed ? "6 5" : "",
        "marker-start": "url(#arrow)",
        "marker-end": "url(#arrow)",
      }));
      svg.appendChild(el("text", {
        x: mx + 8,
        y: my - 7,
        fill: guide.color,
        "font-size": options.fine ? 13 : 15,
        "font-weight": options.fine ? 650 : 750,
        "paint-order": "stroke",
        stroke: "#fffdfa",
        "stroke-width": 3,
      }, label));
    });
  }

  function attachPyramidViewer(svg, getValues, options = {}) {
    const state = { yaw: -32, pitch: -20, drag: null };
    const draw = () => {
      const values = getValues();
      renderPyramid(svg, state, values.a, values.h, options);
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
      state.pitch = clamp(state.drag.pitch + (event.clientY - state.drag.y) * 0.35, -72, 38);
      draw();
    });
    ["pointerup", "pointercancel"].forEach((type) =>
      svg.addEventListener(type, (event) => {
        state.drag = null;
        if (svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
      }),
    );
    draw();
    return draw;
  }

  function renderPyramidNet(svg, a, slantHeight) {
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 520 340");
    const total = a + 2 * slantHeight;
    const sc = clamp(250 / total, 6, 60);
    const u = a * sc;
    const t = slantHeight * sc;
    const cx = 260;
    const cy = 175;
    const left = cx - u / 2;
    const right = cx + u / 2;
    const top = cy - u / 2;
    const bottom = cy + u / 2;

    const flap = (points, fill) =>
      svg.appendChild(el("polygon", {
        points,
        fill,
        stroke: "#6d28d9",
        "stroke-width": 2,
        "stroke-linejoin": "round",
      }));

    flap(`${left},${top} ${right},${top} ${cx},${top - t}`, "rgba(124,58,237,.18)");
    flap(`${left},${bottom} ${right},${bottom} ${cx},${bottom + t}`, "rgba(124,58,237,.18)");
    flap(`${left},${top} ${left},${bottom} ${left - t},${cy}`, "rgba(124,58,237,.12)");
    flap(`${right},${top} ${right},${bottom} ${right + t},${cy}`, "rgba(124,58,237,.12)");

    svg.appendChild(el("rect", {
      x: left,
      y: top,
      width: u,
      height: u,
      fill: "rgba(20,184,166,.18)",
      stroke: "#0f766e",
      "stroke-width": 2.5,
    }));

    svg.appendChild(el("text", { x: cx, y: cy + 5, fill: "#0f4f74", "font-size": 15, "font-weight": 800, "text-anchor": "middle" }, "G = a²"));
    svg.appendChild(el("text", { x: cx + u / 2 + 6, y: top - t / 2, fill: "#5b21b6", "font-size": 14, "font-weight": 800 }, "hₛ"));
    svg.appendChild(el("text", { x: cx, y: bottom + 18, fill: "#0f766e", "font-size": 14, "font-weight": 800, "text-anchor": "middle" }, "Grundkante a"));
    svg.appendChild(el("text", { x: 18, y: 26, fill: "#52627a", "font-size": 13, "font-weight": 700 }, "Netz: 1 Quadrat + 4 gleiche Dreiecke"));
  }

  function setupRotationsPage() {
    const root = document.querySelector("[data-page='rotations']");
    if (!root) return;
    const edgeInput = root.querySelector("#edge");
    const heightInput = root.querySelector("#bodyHeight");
    const modelSvg = root.querySelector("#pyramid-model");
    const netSvg = root.querySelector("#pyramid-net");
    const formulas = root.querySelector("#formula-values");
    const values = () => ({ a: Number(edgeInput.value), h: Number(heightInput.value) });
    const drawModel = attachPyramidViewer(modelSvg, values, {
      labels: { a: "a", hk: "hₖ", hs: "hₛ", k: "k" },
    });
    function update() {
      const { a, h } = values();
      const m = pyramidMetrics(a, h);
      drawModel();
      renderPyramidNet(netSvg, a, m.slantHeight);
      formulas.innerHTML = `
        <div class="formula">
          <div class="formula-title">1. Seitenhöhe</div>
          <div class="math-line">h<sub>s</sub>² = h<sub>k</sub>² + (${FRAC_A2})²</div>
          <div class="math-line">h<sub>s</sub> ≈ ${fmt(m.slantHeight)} cm</div>
        </div>
        <div class="formula">
          <div class="formula-title">2. Grundfläche</div>
          <div class="math-line">G = a²</div>
          <div class="math-line">G ≈ ${fmt(m.baseArea)} cm²</div>
        </div>
        <div class="formula">
          <div class="formula-title">3. Mantel</div>
          <div class="math-line">M = 2 · a · h<sub>s</sub></div>
          <div class="math-line">M ≈ ${fmt(m.mantleArea)} cm²</div>
        </div>
        <div class="formula">
          <div class="formula-title">4. Oberfläche</div>
          <div class="math-line">O = G + M</div>
          <div class="math-line">O ≈ ${fmt(m.surfaceArea)} cm²</div>
        </div>
        <div class="formula formula-wide">
          <div class="formula-title">Volumen</div>
          <div class="math-line">V = <span class="frac"><span>1</span><span>3</span></span> · a² · h<sub>k</sub> ≈ ${fmt(m.volume)} cm³</div>
        </div>`;
    }
    [edgeInput, heightInput].forEach((input) => input.addEventListener("input", update));
    update();
  }

  // --- Bestimmungsdreieck der Seitenhöhe --------------------------------
  function drawFaceTriangle(svg, halfEdge, height, slant, options = {}) {
    const unit = options.unit || "cm";
    const labels = {
      m: `a/2 = ${fmt(halfEdge)} ${unit}`,
      hk: `h<sub>k</sub> = ${fmt(height)} ${unit}`,
      hs: `h<sub>s</sub> = ${fmt(slant)} ${unit}`,
      ...(options.labels || {}),
    };
    svg.replaceChildren();
    svg.setAttribute("viewBox", "0 0 420 250");
    svg.appendChild(el("polygon", { points: "105,190 315,190 105,58", fill: "rgba(124,58,237,.10)", stroke: "#7c3aed", "stroke-width": 3 }));
    svg.appendChild(el("line", { x1: 105, y1: 190, x2: 315, y2: 190, stroke: "#0f766e", "stroke-width": 5 }));
    svg.appendChild(el("line", { x1: 105, y1: 190, x2: 105, y2: 58, stroke: "#be185d", "stroke-width": 5 }));
    svg.appendChild(el("line", { x1: 105, y1: 58, x2: 315, y2: 190, stroke: "#7c3aed", "stroke-width": 5 }));
    svg.appendChild(el("path", { d: "M 105 166 L 129 166 L 129 190", fill: "none", stroke: "#111827", "stroke-width": 3 }));
    svg.appendChild(el("text", { x: 132, y: 182, fill: "#111827", "font-size": 12, "font-weight": 650 }, "90°"));
    appendHtmlLabel(svg, 168, 214, "#0f766e", labels.m);
    appendHtmlLabel(svg, 36, 130, "#be185d", labels.hk);
    appendHtmlLabel(svg, 214, 100, "#5b21b6", labels.hs, "rotate(32 214 100)");
    svg.appendChild(el("text", { x: 150, y: 236, fill: "#0f766e", "font-size": 12, "font-weight": 650 }, "Kathete a/2"));
    svg.appendChild(el("text", { x: 54, y: 78, fill: "#be185d", "font-size": 12, "font-weight": 650, transform: "rotate(-90 54 78)" }, "Kathete hₖ"));
    svg.appendChild(el("text", { x: 214, y: 74, fill: "#5b21b6", "font-size": 12, "font-weight": 650, transform: "rotate(32 214 74)" }, "Hypotenuse hₛ"));
  }

  function appendHtmlLabel(svg, x, y, fill, html, transform) {
    const attrs = { x, y, fill, "font-size": 15, "font-weight": 750, "paint-order": "stroke", stroke: "#fffdfa", "stroke-width": 3 };
    if (transform) attrs.transform = transform;
    const text = el("text", attrs);
    text.innerHTML = html;
    svg.appendChild(text);
  }

  function setupHeightPage() {
    const root = document.querySelector("[data-page='height']");
    if (!root) return;
    const edgeInput = root.querySelector("#edge");
    const heightInput = root.querySelector("#bodyHeight");
    const modelSvg = root.querySelector("#height-pyramid");
    const triangleSvg = root.querySelector("#face-triangle");
    const calc = root.querySelector("#calc");
    const answer = root.querySelector("#answer");
    const given = root.querySelector("#given");
    const edgeOut = root.querySelector("#edge-calc");
    const steps = Array.from(root.querySelectorAll(".step"));
    const focusTargets = Array.from(root.querySelectorAll(".focus-target"));
    let active = "skizze";
    const values = () => {
      const a = Number(edgeInput.value);
      const h = Number(heightInput.value);
      return pyramidMetrics(a, h);
    };
    const drawModel = attachPyramidViewer(modelSvg, () => {
      const v = values();
      return { a: v.a, h: Math.max(v.h, 0.1) };
    }, { fine: true, labels: { a: "a", hk: "hₖ", hs: "hₛ", k: "k" } });

    function update() {
      const v = values();
      steps.forEach((step) => step.classList.toggle("active", step.dataset.step === active));
      focusTargets.forEach((target) => {
        const linkedSteps = (target.dataset.focus || "").split(/\s+/);
        target.classList.toggle("focus-active", linkedSteps.includes(active));
      });
      drawModel();
      drawFaceTriangle(triangleSvg, v.halfEdge, v.h, v.slantHeight);
      given.innerHTML = `a = ${fmt(v.a)} cm, also ${FRAC_A2} = ${fmt(v.halfEdge)} cm (Kathete)<br>h<sub>k</sub> = ${fmt(v.h)} cm (Kathete)`;
      calc.innerHTML = `
        <div class="calc-line ${active === "gegeben" ? "active" : ""}">${FRAC_A2} = ${frac(fmt(v.a), "2")} = ${fmt(v.halfEdge)} cm</div>
        <div class="calc-line ${active === "formel" ? "active" : ""}">h<sub>s</sub>² = h<sub>k</sub>² + (${FRAC_A2})²</div>
        <div class="calc-line ${active === "rechnung" ? "active" : ""}">h<sub>s</sub>² = ${fmt(v.h)}² + ${fmt(v.halfEdge)}² = ${fmt(v.h * v.h + v.halfEdge * v.halfEdge)}</div>
        <div class="calc-line ${active === "rechnung" ? "active" : ""}">h<sub>s</sub> = √${fmt(v.h * v.h + v.halfEdge * v.halfEdge)} = ${fmt(v.slantHeight)} cm</div>`;
      answer.innerHTML = `Antwort: Die Seitenhöhe (Mantelhöhe) der Pyramide beträgt h<sub>s</sub> ≈ ${fmt(v.slantHeight)} cm.`;
      if (edgeOut) {
        const diagonalSquared = 2 * v.a * v.a;
        const diagonal = Math.sqrt(diagonalSquared);
        const edgeSquared = v.h * v.h + v.halfDiagonal * v.halfDiagonal;
        edgeOut.innerHTML = `Diagonale: d² = a² + a² = ${fmt(v.a)}² + ${fmt(v.a)}² = ${fmt(diagonalSquared)}<br>d = √${fmt(diagonalSquared)} ≈ ${fmt(diagonal)} cm<br>halbe Diagonale e = ${frac("d", "2")} ≈ ${fmt(v.halfDiagonal)} cm<br>k² = h<sub>k</sub>² + e² = ${fmt(v.h)}² + ${fmt(v.halfDiagonal)}² = ${fmt(edgeSquared)}<br>k = √${fmt(edgeSquared)} ≈ ${fmt(v.edge)} cm`;
      }
    }
    [edgeInput, heightInput].forEach((input) => input.addEventListener("input", update));
    steps.forEach((step) => step.addEventListener("click", () => { active = step.dataset.step; update(); }));
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupRotationsPage();
    setupHeightPage();
  });
})();
