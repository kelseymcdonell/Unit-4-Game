// create function to generate random number

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// set variables

var targetNumber = getRndInteger(19,120);
var crystalCounter = 0;
var red = getRndInteger(1,12);
var blue = getRndInteger(1,12);
var green = getRndInteger(1,12);
var purple = getRndInteger(1,12);
var wins = 0;
var losses = 0;

$(document).ready(function(){
    $("#randomNum").text(targetNumber);
    $("#myNumber").text(crystalCounter);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

function resetGame(){
    targetNumber = getRndInteger(19,120);
    crystalCounter = 0;
    red = getRndInteger(1,12);
    blue = getRndInteger(1,12);
    green = getRndInteger(1,12);
    purple = getRndInteger(1,12);
    $(document).ready(function(){
        $("#randomNum").text(targetNumber);
        $("#myNumber").text(crystalCounter);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    });

};

function youWin(){
    wins = wins +1;
    $(document).ready(function(){
        $("#winOrLose").text("You Win!");
 
    });
};

function youLose(){
    losses = losses +1;
    $(document).ready(function(){
        $("#winOrLose").text("You Lose!");
     
    })
};


    $(document).ready(function(){
        $("#blue").click(function(){
            crystalCounter = crystalCounter + blue;
            $("#myNumber").text(crystalCounter);
            if (crystalCounter == targetNumber){
                youWin();
                resetGame();
            };
            if (crystalCounter > targetNumber) {
                youLose();
                resetGame();
            }
        });
    });   
    $(document).ready(function(){
        $("#red").click(function(){
            crystalCounter = crystalCounter + red;
            $("#myNumber").text(crystalCounter);
            if (crystalCounter == targetNumber){
                youWin();
                resetGame();
            };
            if (crystalCounter > targetNumber) {
                youLose();
                resetGame();
            }
        });
    });    
    $(document).ready(function(){
        $("#green").click(function(){
            crystalCounter = crystalCounter + green;
            $("#myNumber").text(crystalCounter);
            if (crystalCounter == targetNumber){
                youWin();
                resetGame();
            };
            if (crystalCounter > targetNumber) {
                youLose();
                resetGame();
            }
        });
    });   
    $(document).ready(function(){
        $("#purple").click(function(){
            crystalCounter = crystalCounter + purple;
            $("#myNumber").text(crystalCounter);
            if (crystalCounter == targetNumber){
                youWin();
                resetGame();
            };
            if (crystalCounter > targetNumber) {
                youLose();
                resetGame();
            }
        });
    });



    
