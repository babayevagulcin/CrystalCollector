let targetNumber;
let userTotal;
let wins = 0;
let loses = 0;
const crystals = {};

function startGame() {
  targetNumber = Math.floor(Math.random() * 100) + 20;
  userTotal = 0;
  document.getElementById("match").innerText = targetNumber;
  document.getElementById("score").innerText = userTotal;

  crystals["greenCrystal"] = Math.floor(Math.random() * 12) + 1;
  crystals["blueCrystal"] = Math.floor(Math.random() * 12) + 1;
  crystals["redCrystal"] = Math.floor(Math.random() * 12) + 1;
  crystals["purpleCrystal"] = Math.floor(Math.random() * 12) + 1;
}

function crystalClick(id) {
  userTotal += crystals[id];
  document.getElementById("score").innerText = userTotal;

  if (userTotal === targetNumber) {
    wins++;
    document.getElementById("win").innerText = wins;
    document.getElementById("score").innerText = "Siz qalib oldunuz!";
    startGame();
  } else if (userTotal > targetNumber) {
    loses++;
    document.getElementById("lose").innerText = loses;
    document.getElementById("score").innerText =
      "Siz uduzdunuz. Yenidən cəhd edin!";
    startGame();
  }
}

document.querySelectorAll(".crystal img").forEach((crystal) => {
  crystal.addEventListener("click", () => crystalClick(crystal.id));
});

startGame();
