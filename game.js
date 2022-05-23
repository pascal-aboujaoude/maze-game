var score = 0;
var started = 0;
var lost = 0;

function gameOver() {
  started = 0;
  lost = 1;
  score = score - 15;
  var boundries = document.getElementsByClassName("boundary");
  for (var x = 0; x < boundries.length; x++) {
    boundries[x].style.backgroundColor = "red";
  }
  var example = document.getElementsByClassName("example")[0];
  example.innerHTML = score;
  var status = document.getElementById("status");
  status.innerHTML = "YOU LOST";
}

function gameSucess() {
  started = 0;
  score = score + 5;
  var boundries = document.getElementsByClassName("boundary");
  for (var x = 0; x < boundries.length; x++) {
    boundries[x].style.backgroundColor = "green";
  }
  var example = document.getElementsByClassName("example")[0];
  example.innerHTML = score;
  var status = document.getElementById("status");
  status.innerHTML = "YOU WON";
}

function restartGame() {
  var boundries = document.getElementsByClassName("boundary");
  for (var x = 0; x < boundries.length; x++) {
    boundries[x].style.backgroundColor = "#eeeeee";
  }
  lost = 0;
  var status = document.getElementById("status");
  status.innerHTML = "Try Again";
}

window.onload = function () {
  var lines = document.getElementsByClassName("boundary");
  for (var y = 0; y < lines.length; y++) {
    lines[y].addEventListener("mouseover", function () {
      if (started == 1) {
        gameOver();
      }
    });
  }

  var game = document.getElementById("game");
  game.addEventListener("mouseleave", function () {
    if (started == 1) {
      gameOver();
    }
  });

  var start = document.getElementById("start");
  start.addEventListener("click", function () {
    started = 1;
    restartGame();
  });

  var end = document.getElementById("end");
  end.addEventListener("mouseover", function () {
    if (started == 1 && lost != 1) {
      gameSucess();
    }
  });
};
