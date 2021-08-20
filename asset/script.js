const startBtn = $('#start')
const questionScr =$('#questionScr')
const questionTitle = $('#questionTitle')
const option1 = $("#o1")
const option2 = $("#o2")
const option3 = $("#o3")
const option4 = $("#o4")
const main = $('#main')
let index = 0
let allScores = []


let question =[{
    text:"what is the best number",
    options:["1","2","3","4"],
    Ccrrect:"1"
}, {
    text:"what is not the best number",
    options:["1","2","3","4"],
    correct:"4"
}]


function startGame(){
    console.log("start")
    $('#title').remove();
    $('#start').remove();
    $("main").show();
    loadNextQuestion()
    
}

function loadNextQuestion() {
    questionTitle.text(question[index].text);
    i
    index++;
}

startBtn.on('click', startGame)


