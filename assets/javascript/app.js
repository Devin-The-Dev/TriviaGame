//JS = logic
//jQuery = display

//timer variable
//correct answer variable
//max number of answers
//for loop for questions answered

//Timer
var timer = 30;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  timer--;

  $("#timer").text("<p>" + timer + "</p>");

  if (number === 0) {
    stop();

    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();
