var score = 0;
var started = 0;
var lost = 0;

window.onload = function () {
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
