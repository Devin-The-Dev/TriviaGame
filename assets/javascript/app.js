//correct answer variable
//for loop for questions answered
$(document).ready(function() {
  var timer = 30;
  var intervalId;
  var correct = 0;
  var wrong = 0;
  var answered = 0;

  //Wrong Answers
  document.getElementById("choice1").onclick = function() {
    wrong++;
    answered++;
  };
  document.getElementById("choice2").onclick = function() {
    wrong++;
    answered++;
  };
  document.getElementById("choice5").onclick = function() {
    wrong++;
    answered++;
  };
  document.getElementById("choice6").onclick = function() {
    wrong++;
    answered++;
  };
  document.getElementById("choice8").onclick = function() {
    wrong++;
    answered++;
  };
  document.getElementById("choice9").onclick = function() {
    wrong++;
    answered++;
  };

  //Correct Answers
  document.getElementById("choice3").onclick = function() {
    correct++;
    answered++;
  };
  document.getElementById("choice4").onclick = function() {
    correct++;
    answered++;
  };
  document.getElementById("choice7").onclick = function() {
    correct++;
    answered++;
  };

  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {
    timer--;

    $("#timer").text(timer);

    if (timer === 0 || answered === 3) {
      stop();
      alert("You answered " + correct + " right and " + wrong + " wrong.");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  run();
});
