$('#start').on('click', function(){
    $('#supWrap').remove();
    game.start();
})

let question =[{
    Text:"what is the best number",
    Options:["1","2","3","4"],
    Correct:"1"
}]

let game ={
    correct:0,
    wrong:0,
    timer:90,

    Contdown: function(){
        game.counter--;
        $('#timer').html(game.counter);
        if(game.timer <0) {
            console.log("times up")
            game.over();
        }
    },
    start: function(){
        timer=setInterval(game.timer, 1000);
        $('#subWrap').prepend('<h3>Time: <span id = "timer">90</span> seconds </h3>')
        for(let i=0; i<text.length; i++){
        $('text').append('<h3>'+text[i].text+'<h2>')
            for(let j=0; j<text[i].options.length; j++){
            $('subWrap').append("<h3><input type ='radio' name= 'text-"+i+"'value='</h3"+question[i].option[j]+"'>"+question[i].option[j])
        }   }
    }
},
done: function(){
    $.each($('input[name="options- 5"]:checked'),
function(){
    if ($)(this).val()== options[5].correctAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
});
    
}