var question = [{
    title: "what is my favorite number?",
    options: ["1", "2", "3", "4"],
    answer: "3"
},{
    title: "what is my favorite number?",
    options: ["1", "2", "3", "4"],
    answer: "3"
}]
var nextQuestion = -1
var score = 0
var timeRemaining = 0
var timer

function start() {
    timeRemaining = 90;
    document.getElementById("timeRemaining").innerHTML= timeRemaining;
    timer = setInterval(function () {
        timeRemaining--;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
        if (timeRemaining <=0){
            clearInterval(timer);
            gameOver();
        }
        
    },1000);
    next();
    
}

function gameOver() {
    clearInterval(timer);

    var quizScore =
    `<h1>Game Over!</h1> 
    <h2> Your score is` + score +` </h2>
    <input type ="Your-name" id= "name" placeholder = "Your Name">
    <button onclick = "setYourScore()"> Set your Score "</button>`;
    document.getElementById("quizList").innerHTML = quizScore;
    function setYourScore() {
        localStorage.setItem("highscore", score);
        localStorageset.setItem("highscoreName", document.getElementById('name').value);
    }
    
    function getQuizScore() {
    `<h2>` + localStorage.getItem("highscoreName") + `Highscore:</h2>`
        `<h1>` + localStorage.getItem("highscore") +`</h1><br>`
        `<button> onclick = "clearTheScore()">Clear</button>`
        `<button> onclick = "resetQuiz()"> Play Quiz Again!</button>`;
    }
    document.getElementById("quizList").innerHTML = quizScore;

}
    function clearTheScore() {  
        localStorage.setItem("highscore", "")
        localStorage.setItem("highscoreName", "")
        resetQuiz();
}
    function resetQuiz(){
    clearInterval(timer)
    score = 0;
    nextQuestion = -1;
    timeRemaining = 0;
    timer = null;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    var quizScore = 
    `<h1> Code Quiz 101!</h1>`
    `<h2>click to start</h2>`
    `<button onclick="start()">Start Quiz</button>`
    document.getElementById("quizList").innerHTML = quizScore;
    }
    function wrong() {
        timeRemaining -=5;
        next();
    }
    function correct() {
        score += 20();
        next();
    }
    function next(){
        nextQuestion++;
        if(nextQuestion> question.length -1)
        gameOver();
        return;
    }
    var quizList = "<h2>"+question[nextQuestion].title + "</h2>"
    for (var buttonloop = 0; buttonloop < question[nextQuestion].choices.length; buttonloop++){
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[nextQuestion].choices[buttonLoop]);
        if (questions[nextQuestion].choices[buttonLoop] == questions[nextQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;


    