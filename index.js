var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to Do You Know Me?");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!")
  }
  console.log("Current Score: " + score);
  console.log("============================");
}

var questions = [
  {
    question: "Where do I live? ",
    answer: "Kolkata"
  },
  {
    question: "My favourite food? ",
    answer: "Biriyani"
  },
  {
    question: "Who is my favourite footballer? ",
    answer: "Lionel Messi"
  }
];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Congrats!! You scored " + score);