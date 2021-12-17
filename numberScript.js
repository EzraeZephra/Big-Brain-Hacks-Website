"use strict";

let randomNum = Math.trunc(Math.random() * 30) + 1;
let guessedNum = document.querySelector(".input").value;
let points = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  guessedNum = parseInt(document.querySelector(".input").value);
  //console.log(guessedNum, typeof guessedNum);
  if (Number.isInteger(guessedNum) && points > 0) {
    if (guessedNum == randomNum) {
      //when player wins
      document.querySelector(".message").textContent =
        "Congratulations! You found the number!";
      document.querySelector(".number").textContent = randomNum;
      document.querySelector(".number").style.color = "#54b369";
      if (highScore < points) {
        highScore = points;
        document.querySelector(
          ".highScoreLabel"
        ).textContent = `New Highscore!!`;
      }
    } else if (guessedNum > randomNum) {
      document.querySelector(".message").textContent = "Wrong! Too high!";
      points--;
      document.querySelector(".scoreLabel").textContent = `Score: ${points}`;
    } else {
      document.querySelector(".message").textContent = "Wrong! Too low!";
      points--;
      document.querySelector(".scoreLabel").textContent = `Score: ${points}`;
    }
  } else if (points <= 0) {
    //When player loses
    document.querySelector(
      ".message"
    ).textContent = `Game Over!! Number was ${randomNum}`;
    document.querySelector(".number").textContent = randomNum;
  } else {
    //When player inputs invalid arguement
    document.querySelector(".message").textContent =
      "Invalid input! Try again...";
  }
});

document.querySelector(".restartButton").addEventListener("click", function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  guessedNum = document.querySelector(".input").value;
  points = 20;
  document.querySelector(".message").textContent = "Start guessing!";
  document.querySelector(".scoreLabel").textContent = `Score: ${points}`;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.color = "#ffff";
  document.querySelector(".highScoreLabel").textContent = `High Score: ${highScore}`;
  document.querySelector(".input").value = " ";
});
