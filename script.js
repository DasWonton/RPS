// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(choiceId, image) {
  let el = document.getElementById(choiceId);
  el.src = image;
}

function getCompChoice() {
  const choice = ["rock", "paper", "scissors"][Math.random() * 3 << 0];
  displayChoice("computer-choice", `images/${choice}.png`);
  return choice;
}

function getResult(pChoice, cChoice) {
  if (pChoice === cChoice) return "tie";

  const pChoice_Destroys_cChoice_With = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (
    pChoice_Destroys_cChoice_With[pChoice] === cChoice
  ) return "player-choice";

  return "computer-choice";
}

function showResult(result) {
  buttonsArea.innerHTML = `<p>${{
    "player-choice": "Player wins!",
    "computer-choice": "Computer wins!",
    "tie": "Tie!",
  }[result]}</p>`;
}

function updateScore(result) {
  if (result === "player-choice") {
    pScore++;
    playerScoreEl.innerHTML = pScore;
  } else if (result === "computer-choice") {
    cScore++;
    computerScoreEl.innerHTML = cScore;
  };
}
