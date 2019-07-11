var isGameOn = false;
var timer;
var timerCounter = 30;
var questions = [];
var queAnswers=[];
var queOptions=[];
var div = $("<div>");


function timerDecCounter()
{ 
    timerCounter--;
    $(".time").text(timerCounter);
}
function setpage(){
    console.log("page is set up");
}
function timerStart(){
    clearInterval(timer);
    timer = setInterval(timerDecCounter,1000)

    
    console.log("game is started");
    if()
}
function timerStop(){
    clearInterval(timer);

}
function gameStart(game){
    isGameOn =true;
    div.addClass("timerLbl");
    div.text("Time Remaining");
    $("#questionList").append(div);
    div = $("<div>").addClass("time");
    div.text(timerCounter);
    $("#questionList").append(div);
    
    timerStart();
    
}
function gameStop(){
    timerStop();
}
function displayQuestions(){

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