'use strict';

let usedAnswers = [];

function randomNumber(min, max) {
	return min + Math.floor((max - min) * Math.random())
}

function makeQuizSections() {
	let gameBox = $('<div>').attr('id', 'gameBox').addClass('cFlex');
	let quizImg = $('<div>').attr('id', 'quizImg').addClass('cFlex');
	let quizSection = $('<div>').addClass('quizSection cFlex');
	let quizQuestBox = $('<div>').addClass('quizSectionQuestBox cFlex');
	let quizQuest = $('<h2>');
	let quizAlternativs = $('<div>').attr('id', 'answerAlternatives');

	gameBox.append(quizImg, quizSection);
	quizSection.append(quizQuestBox, quizAlternativs);
	quizQuestBox.append(quizQuest);

	$('#gameScreen').append(gameBox);
}

function newQuestion() {
	timerStart()

	//One random question
	let currentQuest = randomNumber(0, arrQuiz.length);

	//Quiz image
	$('#quizImg').html(`<img src="/media/gameimages/quiz/${arrQuiz[currentQuest].quizimg}.jpg">`);

	//Quiz title
	$('.quizSection h2').html(arrQuiz[currentQuest].quest);

	//Adding arrQuiz-object to new array (to splice later in click-event)
	arrAlreadyAsked.push({
		quizimg: arrQuiz[currentQuest].quizimg,
		quest: arrQuiz[currentQuest].quest,
		alternativ: arrQuiz[currentQuest].alternativ,
		corr: arrQuiz[currentQuest].corr
	});

	randomAnswer(currentQuest);

	//click-event on answerboxes
	$('.answerBox').on('click', function () {
		timerStop();
		let elementTX = $(this).html();
		checkAnswer(elementTX);
		arrQuiz.splice(currentQuest, 1);
	});

	//Save obejct to data for checking right answer
	$('.quizSection').data('character', currentQuest);
}

function randomAnswer(currentQuest) {

	for (let i = 0; i < 4; i++) {
		let rN = randomNumber(0, arrQuiz[currentQuest].alternativ.length);
		//skapa answerbox
		$('#answerAlternatives').append($('<div>').attr('id', `quizAnswer${i}`).addClass('answerBox'));
		
		//ett av alternativen (random från arrayen)
		let svar = arrQuiz[currentQuest].alternativ[rN];
		
		//lägger in valda alternativet boxarna
		$(`#quizAnswer${i}`).html(svar);
		
		//Ta bort från alternativ-arrayen och läggs in i usedAnswer-arrayen
		usedAnswers.push(svar);
		arrQuiz[currentQuest].alternativ.splice(rN, 1);
	}
	for (let i = 0; i < 4; i++) {
		//Lägger tillbaka i ursprunglig array
		arrQuiz[currentQuest].alternativ.push(usedAnswers[i]);
	}
	//tömmer använda svar 
	usedAnswers.length = 0;
}

function checkAnswer(elementTX) {
	makeAnswerPopUp();

	let currentCharacter = $('.quizSection').data('character');

	if (elementTX == arrQuiz[currentCharacter].corr) {
		$('#quizAnswerPopUp h2').html('Correct').css('color', 'green');
		addScore();
	} else {
		$('#quizAnswerPopUp h2').html('Incorrect').css('color', 'red');
	}
}

function makeAnswerPopUp() {
	//make pop-up elements when answered question
	let answerPopUp = $('<div>').attr('id', 'quizAnswerPopUp').addClass('cFlex');
	let answerInfo = $('<h2>');
	let nextQuestButt = $('<button>').html('Continue');

	answerPopUp.append(answerInfo, nextQuestButt);
	$('#answerAlternatives').append(answerPopUp);

	//click-event on button for next question
	$('#quizAnswerPopUp button').on('click', function () {
		$('#quizAnswerPopUp').css('display', 'none');
		$('#answerAlternatives').empty();
		if (arrQuiz <= 0) {
			gameOver();
		} else {
			newQuestion();
		}
	})
}

function timerStart() {
	$('#timeP').html('10');
	let timerID = setInterval(function () {
		let starttime = $('#timeP').html();
		starttime--;
		$('#timeP').html(starttime);
		if (starttime == 0) {
			timeUp();
		}
	}, 1000);
	$('#timeP').data('timer', timerID);
}

function timeUp() {
	makeAnswerPopUp();
	$('#quizAnswerPopUp h2').html('Time´s up');
	let currentQuest = $('.quizSection').data('character');
	arrQuiz.splice(currentQuest, 1);
	timerStop();
}

function timerStop() {
	let timerID = $('#timeP').data('timer');
	clearInterval(timerID);
}

function addScore() {
	let currentScore = parseInt($('#currScoreP').html());
	currentScore = currentScore + 2;
	$('#currScoreP').html(currentScore);
}

function gameOver() {
	//Taking back array-obj from arrAlreadyAsked to arrQuiz
	resetQuizArray();
	//Empty arrAlreadyAsked
	arrAlreadyAsked.length = 0;
	commonGameOver();
}

function resetQuizArray() {
	//Loop thorugh arrAlreadyAsked to push back into original arrQuiz
	arrAlreadyAsked.forEach(function (character) {
		arrQuiz.push({
			quizimg: character.quizimg,
			quest: character.quest,
			alternativ: character.alternativ,
			corr: character.corr
		})
	})
}
