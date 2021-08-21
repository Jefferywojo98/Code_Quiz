var questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["js", "script", "javascript", "4java"],
    answer: "script"
},
{
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    answer: "onclick"
},
{
    title: "Which operator is used to assign a value to a variable??",
    choices: ["+", "=", "*", "/"],
    answer: "="
},
{
    title: "Which of the following function of String object creates an HTML anchor that is used as a hypertext target? ",
    choices: ["wink()", "bling()", "link()", "anchor()"],
    answer: "anchor()"
},
{
    title: "Which of the following function of Array object sorts the elements of an array??",
    choices: ["toSource()", "sort()", "toString()", "unshift()"],
    answer: "sort()"
}
]

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame(); 
    }
}, 1000);
next();
}


function endGame() {
clearInterval(timer);

var quizContent = `
<h2>Game Over!</h2>
<input type="text" id="name" placeholder="First name"> 
<button onclick="setScore()">Set score!</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}


function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}


function getScore() {
var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `highscore:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 

<button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>

`;

document.getElementById("quizBody").innerHTML = quizContent;
}

function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");

resetGame();
}

 
function resetGame() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeLeft = 0;
timer = null;

document.getElementById("timeLeft").innerHTML = timeLeft;

var quizContent = 
`<h1>Code Quiz 101!</h1>
<h3>in this quiz you will get 5 question. if you get it correct you get point and if you get it wrong, then you lose time. good luck  </h3>
<button onclick="start()">Start!</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}


function incorrect() {
timeLeft -= 5; 
next();
}


function correct() {
score += 5;
next();
}
 
function next() {
currentQuestion++;

if (currentQuestion > questions.length -1) {
    endGame();
    return;
}

var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
    buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
        buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonCode
}


document.getElementById("quizBody").innerHTML = quizContent;
}
