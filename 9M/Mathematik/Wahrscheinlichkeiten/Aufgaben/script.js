function normalize(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/€/g, "")
    .replace(/prozent/g, "%")
    .replace(/,/g, ",");
}

function normalizeLoose(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function checkExact(input) {
  const value = normalize(input.value);
  const answers = input.dataset.answer.split("|").map(normalize);
  return answers.includes(value);
}

function checkKeywords(input) {
  const value = normalizeLoose(input.value);
  const groups = input.dataset.keywords.split(";").map(group => group.split("|"));
  return groups.every(group => group.some(keyword => value.includes(normalizeLoose(keyword))));
}

function checkNumber(input) {
  return input.value.trim() !== "" && !Number.isNaN(Number(input.value.trim().replace(",", ".")));
}

function checkInput(input) {
  if (input.dataset.answer) return checkExact(input);
  if (input.dataset.keywords) return checkKeywords(input);
  if (input.dataset.number) return checkNumber(input);
  return input.value.trim() !== "";
}

document.querySelectorAll(".check-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = [...form.querySelectorAll("input")];
    let correct = 0;

    inputs.forEach((input) => {
      const isCorrect = checkInput(input);
      input.classList.toggle("is-correct", isCorrect);
      input.classList.toggle("is-wrong", !isCorrect);
      if (isCorrect) correct += 1;
    });

    const feedback = form.querySelector(".feedback");
    if (correct === inputs.length) {
      feedback.textContent = "Alles richtig.";
      feedback.className = "feedback ok";
    } else {
      feedback.textContent = `${correct} von ${inputs.length} richtig. Pruefe die rot markierten Felder.`;
      feedback.className = "feedback warn";
    }
  });
});

document.querySelectorAll(".solution-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const solution = document.getElementById(button.dataset.target);
    const isHidden = solution.hidden;
    solution.hidden = !isHidden;
    button.textContent = isHidden ? "Lösung ausblenden" : "Lösung anzeigen";
  });
});
