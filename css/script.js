var startButton = document.getElementById("startTime")
var questionContainerEl = document.getElementById("question-container")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var startPageEl = document.getElementById("startPage")



var question = [
    {
        title: "JavaScript is a ___ -side programming language.",
        choices: ["client", "server", "both", "none"],
        answer: "both"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
  
    {   title: "Who invented JavaScript?",
        choices: ["Douglas Crockford", "Joe Han", "Brendan Eich", "Sheryl Sandberg"],
        answer: "Brendan Eich"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
];

var questionIndex = 0

startButton.addEventListener("click", startTime)

function startTime() {
    alert("Are you sure?");
    startButton.classList.add("quiz-container")
    startButton.classList.remove("startPage")
    //trying to get my quiz container to appear
    //shuffleQuestions = questionArr.sort(() => Math.random() -.5)
    //questionIndex = 0
}

function showQuestion(question) {
    console.log(question)
    questionElement.innerText = question.question
    question.choices.forEach(choices => {
      var button = document.createElement('button')
      button.innerText = choices.text
      button.classList.add('btn')
      if (choices.answer) {
        button.dataset.correct = choices.answer
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }


