"use strict";
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "⚠️ Empty field not allowed";
  } else if (guess < 1) {
    document.querySelector(".message").textContent = "🚨 Out of range";
  } else if (guess > 20) {
    document.querySelector(".message").textContent = "🚨 Out of range";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🍸 Correct";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "↗️ Higher than the secret number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "↘️ Lower than the secret number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤦‍♂️ You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
