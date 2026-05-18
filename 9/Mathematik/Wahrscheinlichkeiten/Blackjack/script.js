const suits = [
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" },
  { symbol: "♣", color: "black" },
  { symbol: "♠", color: "black" }
];
const ranks = [
  { label: "A", value: 11 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
  { label: "B", value: 10 },
  { label: "D", value: 10 },
  { label: "K", value: 10 }
];

const state = {
  deck: [],
  player: [],
  dealer: [],
  bankroll: 100,
  bet: 5,
  round: 0,
  inRound: false,
  dealerHidden: true
};

const dealerCardsEl = document.querySelector("#dealerCards");
const playerCardsEl = document.querySelector("#playerCards");
const dealerScoreEl = document.querySelector("#dealerScore");
const playerScoreEl = document.querySelector("#playerScore");
const bankrollEl = document.querySelector("#bankroll");
const currentBetEl = document.querySelector("#currentBet");
const deckCountEl = document.querySelector("#deckCount");
const roundCountEl = document.querySelector("#roundCount");
const messageEl = document.querySelector("#message");
const probabilityHintEl = document.querySelector("#probabilityHint");
const dealButton = document.querySelector("#dealButton");
const hitButton = document.querySelector("#hitButton");
const standButton = document.querySelector("#standButton");
const resetButton = document.querySelector("#resetButton");

function createDeck() {
  const deck = [];
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ ...rank, suit: suit.symbol, color: suit.color });
    });
  });
  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function drawCard() {
  if (state.deck.length < 12) {
    state.deck = shuffle(createDeck());
  }
  return state.deck.pop();
}

function handValue(hand) {
  let total = hand.reduce((sum, card) => sum + card.value, 0);
  let aces = hand.filter((card) => card.label === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

function isBlackjack(hand) {
  return hand.length === 2 && handValue(hand) === 21;
}

function formatMoney(amount) {
  return `${amount.toLocaleString("de-DE")} €`;
}

function cardElement(card, hidden = false) {
  const element = document.createElement("div");
  element.className = hidden ? "card hidden-card" : `card ${card.color}`;
  if (hidden) {
    element.setAttribute("aria-label", "verdeckte Karte");
    return element;
  }
  element.innerHTML = `
    <span class="card-rank">${card.label}</span>
    <span class="card-suit">${card.suit}</span>
    <span class="card-rank card-bottom">${card.label}</span>
  `;
  element.setAttribute("aria-label", `${card.label} ${card.suit}`);
  return element;
}

function renderHand(container, hand, hideSecondCard = false) {
  container.replaceChildren();
  hand.forEach((card, index) => {
    container.append(cardElement(card, hideSecondCard && index === 1));
  });
}

function bustChance() {
  const value = handValue(state.player);
  const maxAllowed = 21 - value;
  if (maxAllowed >= 10) return 0;
  if (maxAllowed < 1) return 100;
  const bustCards = state.deck.filter((card) => {
    const cardValue = card.label === "A" ? 1 : card.value;
    return cardValue > maxAllowed;
  }).length;
  return Math.round((bustCards / state.deck.length) * 100);
}

function updateHint() {
  if (!state.inRound) {
    probabilityHintEl.textContent = "Starte eine Runde und beobachte, wie sich die Chance beim Ziehen verändert.";
    return;
  }
  const value = handValue(state.player);
  const chance = bustChance();
  probabilityHintEl.textContent = `Du hast ${value}. Wenn du jetzt ziehst, liegt die geschätzte Überkauf-Chance bei etwa ${chance} %.`;
}

function render() {
  renderHand(dealerCardsEl, state.dealer, state.dealerHidden);
  renderHand(playerCardsEl, state.player);
  dealerScoreEl.textContent = state.dealerHidden ? "?" : handValue(state.dealer);
  playerScoreEl.textContent = handValue(state.player);
  bankrollEl.textContent = formatMoney(state.bankroll);
  currentBetEl.textContent = formatMoney(state.bet);
  deckCountEl.textContent = `${state.deck.length} Karten`;
  roundCountEl.textContent = state.round;
  updateHint();
}

function setRoundControls(active) {
  hitButton.disabled = !active;
  standButton.disabled = !active;
  dealButton.disabled = active || state.bankroll < state.bet;
  document.querySelectorAll(".bet-chip").forEach((button) => {
    button.disabled = active;
  });
}

function startRound() {
  if (state.bankroll < state.bet) {
    messageEl.textContent = "Dein Guthaben reicht für diesen Einsatz nicht.";
    return;
  }
  state.bankroll -= state.bet;
  state.player = [drawCard(), drawCard()];
  state.dealer = [drawCard(), drawCard()];
  state.round += 1;
  state.inRound = true;
  state.dealerHidden = true;
  messageEl.textContent = "Du bist dran: Karte ziehen oder halten?";
  setRoundControls(true);

  if (isBlackjack(state.player)) {
    finishRound("blackjack");
    return;
  }
  render();
}

function playerHit() {
  if (!state.inRound) return;
  state.player.push(drawCard());
  const value = handValue(state.player);
  if (value > 21) {
    finishRound("playerBust");
    return;
  }
  messageEl.textContent = "Noch im Spiel. Ziehen oder halten?";
  render();
}

function dealerTurn() {
  state.dealerHidden = false;
  while (handValue(state.dealer) < 17) {
    state.dealer.push(drawCard());
  }
}

function playerStand() {
  if (!state.inRound) return;
  dealerTurn();
  const playerValue = handValue(state.player);
  const dealerValue = handValue(state.dealer);

  if (dealerValue > 21) {
    finishRound("dealerBust");
  } else if (playerValue > dealerValue) {
    finishRound("playerWin");
  } else if (playerValue < dealerValue) {
    finishRound("dealerWin");
  } else {
    finishRound("push");
  }
}

function finishRound(result) {
  state.inRound = false;
  state.dealerHidden = false;
  setRoundControls(false);

  const payout = {
    blackjack: Math.floor(state.bet * 2.5),
    playerBust: 0,
    dealerBust: state.bet * 2,
    playerWin: state.bet * 2,
    dealerWin: 0,
    push: state.bet
  }[result];
  state.bankroll += payout;

  const playerValue = handValue(state.player);
  const dealerValue = handValue(state.dealer);
  const messages = {
    blackjack: `Blackjack! Du bekommst ${formatMoney(payout)} zurück.`,
    playerBust: `Du hast ${playerValue} und bist über 21. Einsatz verloren.`,
    dealerBust: `Dealer hat ${dealerValue} und ist über 21. Du gewinnst.`,
    playerWin: `Du hast ${playerValue}, Dealer hat ${dealerValue}. Du gewinnst.`,
    dealerWin: `Du hast ${playerValue}, Dealer hat ${dealerValue}. Dealer gewinnt.`,
    push: `Gleichstand mit ${playerValue}. Einsatz zurück.`
  };
  messageEl.textContent = messages[result];

  if (state.bankroll < state.bet) {
    messageEl.textContent += " Starte neu oder wähle einen kleineren Einsatz.";
  }
  render();
}

function resetGame() {
  state.deck = shuffle(createDeck());
  state.player = [];
  state.dealer = [];
  state.bankroll = 100;
  state.bet = 5;
  state.round = 0;
  state.inRound = false;
  state.dealerHidden = true;
  document.querySelectorAll(".bet-chip").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.bet === "5");
  });
  messageEl.textContent = "Wähle einen Einsatz und starte die Runde.";
  setRoundControls(false);
  render();
}

document.querySelector(".bet-controls").addEventListener("click", (event) => {
  const button = event.target.closest("[data-bet]");
  if (!button || state.inRound) return;
  state.bet = Number(button.dataset.bet);
  document.querySelectorAll(".bet-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip === button);
  });
  render();
});

dealButton.addEventListener("click", startRound);
hitButton.addEventListener("click", playerHit);
standButton.addEventListener("click", playerStand);
resetButton.addEventListener("click", resetGame);

resetGame();
