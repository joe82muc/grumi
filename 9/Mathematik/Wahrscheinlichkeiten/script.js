const wheelCanvas = document.querySelector("#wheel");
const ctx = wheelCanvas.getContext("2d");
const spinButton = document.querySelector("#spinButton");
const numberGrid = document.querySelector("#numberGrid");
const balanceEl = document.querySelector("#balance");
const currentBetEl = document.querySelector("#currentBet");
const lastWinEl = document.querySelector("#lastWin");
const messageEl = document.querySelector("#message");
const historyEl = document.querySelector("#history");
const winningNumberEl = document.querySelector("#winningNumber");

const wheelOrder = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10,
  5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];

const redNumbers = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
const state = {
  balance: 100,
  selectedChip: 1,
  bets: new Map(),
  rotation: 0,
  isSpinning: false,
  history: []
};

function getNumberColor(number) {
  if (number === 0) return "green";
  return redNumbers.has(number) ? "red" : "black";
}

function formatBetKey(type, value) {
  return `${type}:${value}`;
}

function parseBetKey(key) {
  const [type, value] = key.split(":");
  return { type, value };
}

function betLabel(type, value) {
  if (type === "number") return value;
  const labels = {
    low: "1-18",
    high: "19-36",
    even: "Gerade",
    odd: "Ungerade",
    red: "Rot",
    green: "Grün",
    black: "Schwarz"
  };
  return labels[value] || value;
}

function drawWheel() {
  const size = wheelCanvas.width;
  const center = size / 2;
  const radius = center - 12;
  const innerRadius = radius * 0.50;
  const textRadius = radius * 0.80;
  const segment = (Math.PI * 2) / wheelOrder.length;

  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(center, center);
  ctx.rotate(state.rotation);

  for (let i = 0; i < wheelOrder.length; i += 1) {
    const number = wheelOrder[i];
    const centerAngle = -Math.PI / 2 + i * segment;
    const start = centerAngle - segment / 2;
    const end = start + segment;
    const color = getNumberColor(number);

    ctx.beginPath();
    ctx.moveTo(Math.cos(start) * innerRadius, Math.sin(start) * innerRadius);
    ctx.lineTo(Math.cos(start) * radius, Math.sin(start) * radius);
    ctx.arc(0, 0, radius, start, end);
    ctx.lineTo(Math.cos(end) * innerRadius, Math.sin(end) * innerRadius);
    ctx.arc(0, 0, innerRadius, end, start, true);
    ctx.closePath();
    ctx.fillStyle = color === "green" ? "#168456" : color === "red" ? "#c93f3a" : "#15171b";
    ctx.fill();
    ctx.strokeStyle = "rgba(244, 234, 214, 0.58)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(Math.cos(centerAngle) * textRadius, Math.sin(centerAngle) * textRadius);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(0, 0, 0, 0.72)";
    ctx.font = number === 0 ? "bold 26px system-ui, sans-serif" : "bold 20px system-ui, sans-serif";
    ctx.strokeText(String(number), 0, 0);
    ctx.fillStyle = "#f4ead6";
    ctx.fillText(String(number), 0, 0);
    ctx.restore();
  }

  ctx.beginPath();
  ctx.arc(0, 0, innerRadius * 0.92, 0, Math.PI * 2);
  ctx.fillStyle = "#4a2917";
  ctx.fill();
  ctx.strokeStyle = "#e3bd68";
  ctx.lineWidth = 10;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius - 3, 0, Math.PI * 2);
  ctx.strokeStyle = "#d7a84c";
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.restore();
}

function buildNumberGrid() {
  for (let i = 1; i <= 36; i += 1) {
    const button = document.createElement("button");
    button.className = `number ${getNumberColor(i)}`;
    button.type = "button";
    button.textContent = i;
    button.dataset.betType = "number";
    button.dataset.betValue = String(i);
    numberGrid.append(button);
  }
}

function totalBet() {
  return [...state.bets.values()].reduce((sum, amount) => sum + amount, 0);
}

function updateMoney() {
  balanceEl.textContent = state.balance;
  currentBetEl.textContent = totalBet();
}

function updateBetBadges() {
  document.querySelectorAll(".bet-badge").forEach((badge) => badge.remove());

  state.bets.forEach((amount, key) => {
    const { type, value } = parseBetKey(key);
    const target = document.querySelector(`[data-bet-type="${type}"][data-bet-value="${value}"]`);
    if (!target) return;
    const badge = document.createElement("span");
    badge.className = "bet-badge";
    badge.textContent = `${amount}€`;
    target.append(badge);
  });
}

function setMessage(text) {
  messageEl.textContent = text;
}

function setControlsDisabled(disabled) {
  document.querySelectorAll("button").forEach((button) => {
    if (button.id === "resetGame") return;
    button.disabled = disabled;
  });
}

function placeBet(type, value) {
  if (state.isSpinning) return;
  if (state.balance < state.selectedChip) {
    setMessage("Du hast nicht genug Geld für diesen Einsatz.");
    return;
  }

  const key = formatBetKey(type, value);
  state.balance -= state.selectedChip;
  state.bets.set(key, (state.bets.get(key) || 0) + state.selectedChip);
  updateMoney();
  updateBetBadges();
  setMessage(`${state.selectedChip} € auf ${betLabel(type, value)} gesetzt.`);
}

function isWinningBet(type, value, result) {
  if (type === "number") return Number(value) === result;
  if (type === "color") return getNumberColor(result) === value;
  if (result === 0) return false;
  if (type === "parity") return value === "even" ? result % 2 === 0 : result % 2 === 1;
  if (type === "range") return value === "low" ? result >= 1 && result <= 18 : result >= 19 && result <= 36;
  return false;
}

function payoutFor(type, amount, value) {
  if (type === "color" && value === "green") return amount * 36;
  return type === "number" ? amount * 36 : amount * 2;
}

function settleBets(result) {
  let win = 0;

  state.bets.forEach((amount, key) => {
    const { type, value } = parseBetKey(key);
    if (isWinningBet(type, value, result)) {
      win += payoutFor(type, amount, value);
    }
  });

  state.balance += win;
  state.bets.clear();
  lastWinEl.textContent = win;
  updateMoney();
  updateBetBadges();
  addHistory(result);

  const color = getNumberColor(result);
  const colorText = color === "green" ? "Grün" : color === "red" ? "Rot" : "Schwarz";
  if (win > 0) {
    setMessage(`${result} ${colorText}. Gewinn: ${win} €.`);
  } else {
    setMessage(`${result} ${colorText}. Diese Runde war leider ohne Gewinn.`);
  }

  if (state.balance === 0) {
    setMessage("Kein Geld mehr. Starte neu, um weiterzuspielen.");
  }
}

function addHistory(result) {
  state.history.unshift(result);
  state.history = state.history.slice(0, 14);
  historyEl.replaceChildren();

  state.history.forEach((number) => {
    const item = document.createElement("span");
    item.className = `history-item ${getNumberColor(number)}`;
    item.textContent = number;
    historyEl.append(item);
  });
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function clockwiseDelta(from, to) {
  const fullCircle = Math.PI * 2;
  return ((to - from) % fullCircle + fullCircle) % fullCircle;
}

function normalizeAngle(angle) {
  const fullCircle = Math.PI * 2;
  return ((angle % fullCircle) + fullCircle) % fullCircle;
}

function numberAtPointer() {
  const segment = (Math.PI * 2) / wheelOrder.length;
  const index = Math.round(normalizeAngle(-state.rotation) / segment) % wheelOrder.length;
  return wheelOrder[index];
}

function spin() {
  if (state.isSpinning || totalBet() === 0 || state.balance < 0) {
    if (totalBet() === 0) setMessage("Setze zuerst einen Einsatz.");
    return;
  }

  state.isSpinning = true;
  setControlsDisabled(true);
  setMessage("Das Rad dreht...");
  winningNumberEl.textContent = "?";

  const resultIndex = Math.floor(Math.random() * wheelOrder.length);
  const segment = (Math.PI * 2) / wheelOrder.length;
  const pointerAngle = -Math.PI / 2;
  const targetSegmentCenter = -Math.PI / 2 + resultIndex * segment;
  const fullTurns = 7 + Math.floor(Math.random() * 3);
  const startRotation = state.rotation;
  const desiredRotation = pointerAngle - targetSegmentCenter;
  const targetRotation = startRotation + fullTurns * Math.PI * 2 + clockwiseDelta(startRotation, desiredRotation);
  const duration = 4300;
  const startTime = performance.now();

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    state.rotation = startRotation + (targetRotation - startRotation) * easeOutCubic(progress);
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    state.rotation = normalizeAngle(desiredRotation);
    drawWheel();

    const result = numberAtPointer();
    winningNumberEl.textContent = result;
    state.isSpinning = false;
    setControlsDisabled(false);
    settleBets(result);
  }

  requestAnimationFrame(frame);
}

function clearBets() {
  if (state.isSpinning) return;
  const refund = totalBet();
  if (refund === 0) return;
  state.balance += refund;
  state.bets.clear();
  updateMoney();
  updateBetBadges();
  setMessage("Einsätze wurden zurückgenommen.");
}

function resetGame() {
  state.balance = 100;
  state.selectedChip = 1;
  state.bets.clear();
  state.history = [];
  state.rotation = 0;
  state.isSpinning = false;
  winningNumberEl.textContent = "?";
  lastWinEl.textContent = "0";
  historyEl.replaceChildren();
  document.querySelectorAll(".chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.chip === "1");
  });
  setControlsDisabled(false);
  updateMoney();
  updateBetBadges();
  setMessage("Neues Spiel. Wähle einen Einsatz und setze auf Zahlen oder Felder.");
  drawWheel();
}

document.querySelector(".chips").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-chip]");
  if (!chip || state.isSpinning) return;
  state.selectedChip = Number(chip.dataset.chip);
  document.querySelectorAll(".chip").forEach((button) => button.classList.toggle("is-active", button === chip));
});

document.querySelector(".roulette-table").addEventListener("click", (event) => {
  const target = event.target.closest("[data-bet-type]");
  if (!target) return;
  placeBet(target.dataset.betType, target.dataset.betValue);
});

spinButton.addEventListener("click", spin);
document.querySelector("#clearBets").addEventListener("click", clearBets);
document.querySelector("#resetGame").addEventListener("click", resetGame);

buildNumberGrid();
drawWheel();
updateMoney();
