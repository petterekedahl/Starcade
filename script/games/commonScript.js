"use strict";

$("#gameOver").hide();
$("#warning").hide();

//get get-parameter from url
let endpoint = window.location.search;
let gameID = findIdToGame();

// Custom pop-up to start each game
let h2;
switch (endpoint){
    case "?game=3":
        h2 = "You've choosen the Moving Memory Game!";
        break;
    case "?game=0":
        h2 = "Let's go YATHZEE!";
        break;
    case "?game=2":
        h2 = "Hogwarts Express coming your way!";
        break;
    case "?game=1":
        h2 = "Catch'em all in this Shooter-game";
        break;
}
let p = $('<p>').html("Click button to start game");
$('#gameStart section:nth-of-type(1)').append(h2, p);

// updateLoggedInUserScore and updateHighscore 
// timeout because async loading
setTimeout(upDateScoreInfo, 1000);

// updateLoggedInUserScore and updateHighscore html
function upDateScoreInfo() {
    console.log(STATE.scores)
    //get current highscore
    STATE.scores.forEach(elmt => {
        if(elmt.scoreID == gameID){
            $('#highScoreP').html(elmt.highscore);
        }
    });
    STATE.users.forEach(user => {
        if(user.userID == userID) {
            $('#loggedinInfo div:first-child span:last-child').html(user.totalPoints);
        }
    });
}

//Click event-handler on start game button, begin countdown.
$('#startGameBtn').on('click', function(){
    countdownToStartGame();
});

//Function returns id of game in scores in DB.
//Used to update high score on UI
function findIdToGame(){
    let idToGame;
    switch (endpoint){
        case "?game=3":
            idToGame = 3;
            break;
        case "?game=0":
            idToGame = 0;
            break;
        case "?game=2":
            idToGame = 2;
            break;
        case "?game=1":
            idToGame = 1;
            break;
    }
    return idToGame;
}

//Reset controls, give user a count down and trigger games
function countdownToStartGame(){
    //reset time and score
    $('#timeP').html("");
    $('#currScoreP').html("0");

    //get current highscore
    upDateScoreInfo();

    //hide pop-up
    $("#gameOver").hide();
    //show correct pop-up
    $("#gameStart").show();

    //inital countdown
    $("#gameStart").html(3);
    let countdown = setInterval(function(){
        let time = $("#gameStart").html();
        time--;
        $("#gameStart").html(time);
        if(time == 0){
            clearInterval(countdown);
            if (endpoint == "?game=3") {
                $('#gameScreen').show();
            }
            startGames();
        }
    }, 1000);
}

function startGames(){
    //Check what game is choosen and call functions to start game
    switch (endpoint){
        case "?game=3":
            creatGameHeader();
            createGameStyle();
            startTimer();
            break;
    
        case "?game=0":
            startYatzy();
            break;

        case "?game=2":
            makeQuizSections();
	        newQuestion();
            break;

        case "?game=1":
            startShooter();
            break;
    }

    //Hide pop-up with start-button
    $("#gameStart").hide();
}

//A common gameover function + popup for all games.
function commonGameOver(){
    if (endpoint == "?game=3") {
        $('#gameScreen').hide();
		}else{
        $('#gameScreen').empty();
    }
    $("#gameOver").show();
    let thisGameTotPts = parseInt($("#currScoreP").html());
    $("#finalPts").html(thisGameTotPts);
    addScoreToUserDB(thisGameTotPts);
    highScoreControl(thisGameTotPts);
}

//Adding score to DB:s users -> totalPoints
function addScoreToUserDB(score){
    let requestAddScore = new Request(databaseLink, {
        method: "PATCH",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({"totalPoints": score})
    });

    fetch(requestAddScore)
}

//Main function to control if any highscore have been made.
//Checks to what game, and calls function to check if the users
//latest score is higher than high score for each game in STATE!
function highScoreControl(gamePoints){
    // let yatzyID = games[0].gameID;
    // let shooterID = games[1].gameID;
    // let quizID = games[2].gameID;
    // let memoryID = games[3].gameID;

    //IF YATZY DOSEN'T WORK
    let shooterID = games[0].gameID;
    let quizID = games[1].gameID;
    let memoryID = games[2].gameID;

    switch (endpoint){
        case `?game=3`:
            highScoreCheck(memoryID, gamePoints);
            break;
        case `?game=0`:
            highScoreCheck(yatzyID, gamePoints);
            break;
        case `?game=2`:
            highScoreCheck(quizID, gamePoints);
            break;
        case `?game=1`:
            highScoreCheck(shooterID, gamePoints);
            break;
    }

    //update users totalPoints in STATE
    updateScoreToStateUser(gamePoints)
}

// updates usersScore in STATE
// dynamically update score to html for ux
function updateScoreToStateUser(gamePoints) {
    STATE.users.forEach(thisUser=> {
        if(thisUser.userID == userID){
            thisUser.totalPoints += parseInt(gamePoints);
        }
    });
}

// Checks if the users latest score is higher than high score 
//for each game in STATE and calls function to update
function highScoreCheck(gameID, gamePoints){
    STATE.scores.forEach(thisScore=> {
        if(thisScore.game == gameID){
            if (gamePoints > thisScore.highscore){
                let newHighScore = {
                    time: getNowAsISO(),
                    highscore: gamePoints,
                    scoreID: gameID
                }
                //updates in STATE
                thisScore.time = newHighScore.time;
                thisScore.highscore = newHighScore.highscore;

                //function call updates in DB
                addHighScoreToDB(newHighScore);
            }
        }
    });
}

function addHighScoreToDB(newHighScore){
    let requestAddHighScore = new Request(databaseLink, {
        method: "PATCH",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(newHighScore)
    });

    fetch(requestAddHighScore)
}

function getNowAsISO() {
	// Returns the current time and date as a string with ISO format
	// The return from this function can be saved in a DB as a string.
	return new Date().toISOString();
}

//Play Again-button appears on pop-up for Game Over, enables restart a game
$("#playAgainBtn").on('click', function(){
    countdownToStartGame();
});


//Click outside GameScreen/controls (main-element) trigger Warning-pop-up
$(document).on("mouseup", function(e){
    var container = $("#cabinet");
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
        $("#warning").show();
    }
});

//If user DOSEN'T want to quit when receiving Warning-pop-up
$('#warningNegBtn').on('click', function(){
    //hide pop-up
    $("#warning").hide();
});

//If user DOES want to quit when receiving Warning-pop-up
$('#warningPosBtn').on('click', function(){
    //redirect user to game corner
    window.location.replace("/starcade/php/gamecorner.php");
});