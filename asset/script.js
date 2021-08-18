console.log("test")

var score =0;
var questionAnswered = 0;
var tineOnClock = 90;


document.readyMode

const question = [
    {
        "text": "which question is true"
        "choices" :("option1", "option2","option3", "option4"
        "correctChoices" : "option1"
    }
]

const question = document.querySelector("question")
const questionOpt= document.querySelector("questionOpt")
const pick1 = document.getElementById('p1');
const pick2 = document.getElementById('p2');
const pick3 = document.getElementById('p3');
const pick4 = document.getElementById('p4');
const answer1 = document.getElementById('a1')
const answer2 = document.getElementById('a2')
const answer3 = document.getElementById('a3')
const answer4 = document.getElementById('a4')
const time = document.querySelector("#timeL")

function startTime() {
    const timerInterval = setInterval( function (){
        timeL--;
        timer.textcontent = timeL + ("seconds");
        console.log(timeL);
    }    
