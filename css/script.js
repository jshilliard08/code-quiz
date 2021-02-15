var questions = [
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
var questionIndex = 0;

// Declared Variables
var currentTime = document.getElementById("currentTime");
var timer = document.getElementById("startTime");
var questionsDiv = document.getElementById("questionsDiv");
var wrapper = document.getElementById("wrapper");

// 90 secounds to complete the quiz
var secondsLeft = 89;

var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates list 
var ulCreate = document.createElement("ul");

// Prompts the timer to appear on screen
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time Remaining: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // loops the array of questions
    for (var i = 0; i < questions.length; i++) {
        // Grabs only the titles as the questions
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // this lists the question and choices the correspond
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// this let player know if they are correct or incorrect
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // if correct 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! " + questions[questionIndex].answer;
            // receive a correct message
        } else {
            // if inccorrect 5 seconds will be deducted for inccorect answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect! The correct answer is " + questions[questionIndex].answer;
        }

    }
    // the number of quetion in index
    questionIndex++;

    if (questionIndex >= questions.length) {
        // when questions are complete will prompt All done
        allDone();
        createDiv.textContent = "You reached the end of the quiz!" + " " + "You scored  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// creating a last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // The final score is the amount of time left
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Labels
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // enter initials here
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("Please enter your initials");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Takes you 
            window.location.replace("./highscore.html");
        }
    });

}