const startBtn = $('#start')
const questionScr =$('#questionScr')
const questionTitle = $('#questionTitle')
const option1 = $("#o1")
const option2 = $("#o2")
const option3 = $("#o3")
const option4 = $("#o4")
let index = 0

let question =[{
    text:"what is the best number",
    options:["1","2","3","4"],
    Correct:"1"
}, {
    text:"what is not the best number",
    options:["1","2","3","4"],
    Correct:"4"
}]

function startGame(){
    console.log("start")
    $('#supWrap').remove();
    loadNextQuestion()
    
}

function loadNextQuestion() {
    questionTitle.text(question[index].text);
    
}

startBtn.on('click', startGame)


