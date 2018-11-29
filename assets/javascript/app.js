//JS = logic
//jQuery = display

//timer variable
//correct answer variable
//max number of answers
//for loop for questions answered

//Timer
var timer = 5;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  timer--;

  $("#timer").text(timer);

  if (timer === 0) {
    stop();

    alert("Time Up! Your score is ");
  }
}

function stop() {
  clearInterval(intervalId);
}

//Code correct answer increments
//stop() when user answers all the questions
run();
