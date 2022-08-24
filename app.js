"use strict";

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const commpScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_paragraph = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComputerChoice());

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userPick, computerPick) {
  userScore++;
  userScore_span.innerHTML = userScore;
  commpScore_span.innerHTML = compScore;
  const userChoiceDiv = document.getElementById(userPick);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_paragraph.innerHTML = `${convertToWord(
    userPick
  )}${smallUserWord} beats ${convertToWord(
    computerPick
  )}${smallCompWord}. You win! 🎉`;

  userChoiceDiv.classList.add("green-glow");
  setTimeout(() => userChoiceDiv.classList.remove("green-glow"), 300);
}

function lose(userPick, computerPick) {
  compScore++;
  userScore_span.innerHTML = userScore;
  commpScore_span.innerHTML = compScore;
  const userChoiceDiv = document.getElementById(userPick);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_paragraph.innerHTML = `${convertToWord(
    userPick
  )}${smallUserWord} lose to ${convertToWord(
    computerPick
  )}${smallCompWord}. You lost... ☹️`;

  userChoiceDiv.classList.add("red-glow");
  setTimeout(() => userChoiceDiv.classList.remove("red-glow"), 300);
}

function draw(userPick, computerPick) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoiceDiv = document.getElementById(userPick);
  result_paragraph.innerHTML = `${convertToWord(
    userPick
  )}${smallUserWord} equals ${convertToWord(
    computerPick
  )}${smallCompWord}. It's a draw! 😐`;

  userChoiceDiv.classList.add("gray-glow");
  setTimeout(() => userChoiceDiv.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    // "rs" mean rock scissors and so on...
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();
