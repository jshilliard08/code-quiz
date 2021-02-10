//List of all your questions chaoices and answers 
var questionArr = [
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

var score = 0;
var questionArr = 0;

// write logic for application
var timeLeft = document.getElementById("timeLeft");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var container = document.getElementById("container");
var startBtn = document.getElementById("startTime")

var secondsLeft = 89;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
//var penalty = 10;
// Creates new element
var ulCreate = document.createElement("answers");

// Triggers timer on button, shows user a display on the screen
document.getElementById("startTime").addEventListener("click") {
    alert("Are you sure you want to start?")
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timeLeft.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionArr);
};

// Renders questions and choices to page: 
function render(questionArr) {
    // Clears existing data 
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsArr.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}



// variables to keep track of the quiz state


// variables to referance DOM elements
//var answer1 = document.getElementById("answer1")

// function to start quiz

// function to check the choice to the answer
//if else statement to check if answer is correct, timer goes down with incorrect answer



// function to end the quiz and tally up the score


// function to save high score to high score page
// hint (window.location.href)

//might want to make another JS page
//function that prints highscores to hight score page




