var questions = [{
    title: "Inside which HTML element do we put the JavaScript?",
    options: ["js", "script", "javascript", "4java"],
    answer: "script"
},
{
    title: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    answer: "onclick"
},
{
    title: "Which operator is used to assign a value to a variable??",
    options: ["+", "=", "*", "/"],
    answer: "="
},
{
    title: "Which of the following function of String object creates an HTML anchor that is used as a hypertext target? ",
    options: ["wink()", "bling()", "link()", "anchor()"],
    answer: "anchor()"
},
{
    title: "Which of the following function of Array object sorts the elements of an array??",
    options: ["toSource()", "sort()", "toString()", "unshift()"],
    answer: "sort()"
}
]

var score = 0
var nextQuestion = 0
var timeRemain = 0
var timer

function start() {

timeRemain = 30;
document.getElementById("timeLeft").innerHTML = timeRemain;

timer = setInterval(function() {
    timeRemain--;
    document.getElementById("timeLeft").innerHTML = timeRemain;
    
    if (timeRemain <= 0) {
        clearInterval(timer);
        gameOver(); 
    }
}, 1000);
next();
}


function gameOver() {
clearInterval(timer);

var quizList = 
`<h2>Game Over!</h2>
<input type="text" id="name" placeholder="First name"> 
<button onclick="setScore()">Set score!</button>`;

document.getElementById("quizList").innerHTML = quizList;
}


function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}


function getScore() {
var quizList = 
`<h2>` + localStorage.getItem("highscoreName") + `highscore:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 

<button onclick="clearScore()">Clear!</button><button onclick="resetQuiz()">Play Again!</button>`;

document.getElementById("quizList").innerHTML = quizList;
}

function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");

resetQuiz();
}

 
function resetQuiz() {
clearInterval(timer);
score = 0;
nextQuestion = 0;
timeRemain = 0;
timer = NaN;

document.getElementById("timeLeft").innerHTML = timeRemain;

var quizList = 
`<h1>Code Quiz 101!</h1>
<h3>in this quiz you will get 5 question. if you get it correct you get point and if you get it wrong, then you lose time. good luck  </h3>
<button onclick="start()">Start!</button>`;

document.getElementById("quizList").innerHTML = quizList;
}


function wrong() {
timeRemain -= 5; 
next();
}


function correct() {
score += 5;
next();
}
 
function next() {
nextQuestion++;

if (nextQuestion > questions.length -1) {
    gameOver();
    return;
}

var quizList = "<h2>" + questions[nextQuestion] + "</h2>"

for (var buttonLoop = 0; buttonLoop < questions[nextQuestion].options.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[ANS]\">[OPTION]</button>"; 
    buttonCode = buttonCode.replace("[OPTION]", questions[nextQuestion].options[buttonLoop]);
    if (questions[nextQuestion].options[buttonLoop] == questions[nextQuestion].answer) {
        buttonCode = buttonCode.replace("[ANS]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[ANS]", "wrong()");
    }
    quizList += buttonCode
}


document.getElementById("quizList").innerHTML = quizList;
}
