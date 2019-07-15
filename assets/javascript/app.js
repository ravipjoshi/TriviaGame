var isGameOn = false;
var timer;
var timerCounter = 30;
var questions = ["Who invented the telephone?", "Which nail grows fastest?","What temperature does water boil at?","Who discovered penicillin?","What Spanish artist said he would eat his wife when she died?","Who wrote Julius Caesar, Macbeth and Hamlet?","Who wrote Lazarillo de Tormes?","What did the crocodile swallow in Peter Pan?","Where was Lope de Vega born?","Who did Lady Diana Spencer marry?"];
var queAnswers=["Bell","middle","100C","Fleming","Dali","Shakespeare","anonymous","alarm clock","Madrid","Prince Charles"];
var queOptions=[["Bell" ,"Tesla" , "Kepler" , "Newton"],["ring" , "index","middle" ," thumb"],["10F" , "20K" , "40C", "100C"],["Mayr" ,"Fleming", "Darwin" , "Carson"]
,["Goya" , "Picasso" , "Miro" , "Dali"],["Marlowe", "Shakespeare", "Jonson", "Kyd"],["The Spanish Tragedies", "The Jew of Malta", "The Alchemist", "Anonymous"],[" Alarm Clock", "Pen" ,"Pencil" ,"Ring"],["Madrid", "Barcelona", "Rome", "Lisbon"],["Barry Mannakee", "James Gibly","Prince Charles", "Hasnat Khan"]];
var div = $("<div>");
var correct = 0;
var incorrect = 0;
var notanswered=0;


function timerDecCounter()
{ 
    timerCounter--;
    $(".time").text(timerCounter);
}
function setpage(){
    console.log("page is set up");
}
function timerStart(){
    if(timerCounter==0)
    {
        timerStop();
        
    }
    else{
        clearInterval(timer);
    timer = setInterval(timerDecCounter,1000)
 
    console.log("game is started");
    }
}
function timerStop(){
    clearInterval(timer);
    timecounter==0;

}
function gameStart(game){
    isGameOn =true;
    $("#startBtn").hide();
    div.addClass("timerLbl");
    div.text("Time Remaining");
    $("#questionList").append(div);
    div = $("<div>").addClass("time");
    div.text(timerCounter);
    $("#questionList").append(div);
    timerStart(); 
    debugger; 
   

    
}
function gameStop(){
    timerStop();
}
function displayQuestions(){

    for(var i=0; i<questions.length;i++)
    {
        $("#questionList").append("<h2>"+questions[i]+"</h2>");
        for(var j=0; j < queOptions[i].length; j++)
        {
            $("#questionList").append("<input type='radio' name='question-" + i +
            "' value='" + queOptions[i][j] + "''>" + queOptions[i][j]);
        }
        
    }
    $("#questionList").append("<button id='Finish'> Done </botton>")

}
function displayResult(){
    
}


$(document).ready(function(){
 
    

});

/*
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>*/