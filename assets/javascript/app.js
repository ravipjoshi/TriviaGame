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
    if(timerCounter==0)
    {
        gameStop();
        timerStop();
        console.log("game is started");
    }
}
function setpage(){
    console.log("page is set up");
}
function timerStart(){
    if(timerCounter==0)
    {
        gameStop();
        timerStop();
        console.log("game is started");
    }
    else{
    clearInterval(timer);
    timer = setInterval(timerDecCounter,1000)
 
    console.log("game is started");
    }
}
function timerStop(){
    clearInterval(timer);
    timerCounter==0;

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
    displayQuestions();
   // debugger; 
   

    
}
function gameStop(){
    //debugger;
    timerStop();
    displayResult();
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
    $("#questionList").append("<button id='finish' > Done </botton>")

}
function displayResult(){

    var checkans = $("#questionList").children("input:checked");
    console.log("answer given is :" + checkans);
    var uncheckans = questions.length - $("#questionList").children("input:checked").length;
    for(var i=0; i < checkans.length ; i++ )
    { 
        console.log(checkans[i]);
        console.log(checkans.length)
        if($(checkans[i]).val() === queAnswers[i])
        {
           correct++;
        }
        else
        {
            incorrect++;
        }
    }

    $("#questionList").empty();
    //debugger;
    $("#questionList").append("<h2> Well Done </h2>");
    $("#questionList").append("<h3> Correct Answer :"+ correct+"</h3>" ); 
       
    $("#questionList").append("<h3> Incorrect Answer :"+ incorrect+"</h3>" ); 
    $("#questionList").append("<h3> Unanswered Questions :"+ uncheckans+"</h3>" ); 
  
    

}

$(document).on("click","#startBtn", function(){
    gameStart();
});


$(document).on("click","#finish", function(){
    gameStop();
});
