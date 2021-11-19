'use strict';
// Max allowed target positions in terms of x and y.
const ymax = 38
const xmax = 76
// Number of flip cards in memory game.
const nCards = 16

function randomNumber(min, max) {
    // Returns a random integer between the integers min and max. Max not included.
    // Example: randomNumber(3, 6) will return 3, 4 or 5.
    return min + Math.floor((max - min) * Math.random())
}

function creatGameHeader() {
    let timeMin = $('<span>').addClass('timeMin').html('1')
    let timeBetween = $('<span>').html(' : ')
    let timeSek = $('<span>').addClass('timeSek').html('30')
    $("#timeP").append(timeMin, timeBetween, timeSek).addClass("headtime");
}

// Function which sets a random target location along the perimeter of the game area.
// Returns two outputs: the x-coordinate and the y-coordinate of the target.
function setTargetpos(){
    // Draw a random integer which represents one of the four sides (0=left, 1=right, 2=bottom, 3=top).
    let randside = randomNumber(0,4);
    // If the target is on the left side, x-coordinate is 0, y-coordinate is between 0 and ymax.
    if (randside == 0){
        return [0, randomNumber(0, ymax+1)];
    }
    // If the target is on the right side, x-coordinate is xmax, y-coordinate is between 0 and ymax.
    if (randside == 1){
        return [xmax, randomNumber(0, ymax+1)];
    }
    // If the target is on the bottom, x-coordinate is between 0 and xmax, y-coordinate is ymax.
    if (randside == 2){
        return [randomNumber(0, xmax+1), ymax];
    }
    // If the target is on the top, x-coordinate is between 0 and xmax, y-coordinate is 0.
    if (randside == 3){
        return [randomNumber(0, xmax+1), 0];
    }
}  

// Function which checks if two flipcards intersect, if they do, return true otherwise false.
function checkForCollision(xpos_0, ypos_0, xpos_1, ypos_1){
    const w = 10
    const h = 12		
    if (xpos_1<(xpos_0+w) && (xpos_1+w)>xpos_0 && ypos_1<(ypos_0+h) && (ypos_1+h) > ypos_0){
        return true
    }else{
        return false
    }    
}

// Function for taking a step towards the target.
function getNewPosition(xpos, ypos, xtarget, ytarget, stepsize){
    let new_xpos = xpos
    let new_ypos = ypos
    // If the target is to the right of the card, move one step right.
    if (xtarget > xpos){
        new_xpos += stepsize
    }
    // If the target is to the left of the card, move one step left.
    if (xtarget < xpos){
        new_xpos -= stepsize
    }
    // If the target is below the card, move one step down.
    if (ytarget > ypos){
        new_ypos += stepsize
    }
    // If the target is above the card, move one step up.
    if (ytarget < ypos){
        new_ypos -= stepsize
    }
    return [new_xpos, new_ypos];
}

// Function for initializing the cards of the memory game at random positions.
function initializeMemoryCards(){
    // Array which will hold all position data etc. related to the memory cards.
    let Cards = []
    // Iteratively generate 'nCards' different positions for the cards.
    for (let c = 0; c < nCards; c++){
        // Randomly draw x and y candidate coordinates for a card.
        let xpos = randomNumber(0, 76+1)
        let ypos = randomNumber(0, 38+1)
        // Check if the generated position collides with any existing card. 
        // If so, draw a new position until there is no collision.
        // On the first iteration (c==0) there is no risk of collision.
        var collision = true
        while (collision && c != 0){
            for (let c2 = 0; c2 < Cards.length; c2++){
                if (c != c2){
                    collision = checkForCollision(xpos, ypos, Cards[c2].xpos, Cards[c2].ypos)
                    if (collision){
                        xpos = randomNumber(0, 76+1)
                        ypos = randomNumber(0, 38+1)
                        break;
                    }
                }
            }
        }
        Cards.push({'xpos': xpos, 'ypos': ypos, 'targetx': 0, 'targety': 0, 'dist': 0})
    }
    return Cards
}

let grid = $('<div>').addClass('gameGrid')
function createGameStyle() {
    //Create all the 16 cards
    $('.gameGrid').empty()
    let ci = 0
    const nUniqueCards = nCards/2
    for (let copy = 0; copy < 2; copy++) { // force inner loop to loop twice
        for (let i = 2; i < nUniqueCards+2; i++) {
            let im = data[i].painting[0]
            let flipGameDiv = $('<div>').addClass('flipCardGame')
            let flipGameInner = $('<div>').addClass('flipCardInnerGame')
            //Create flipcardfront with 'back of frame' picture
            if (window.location.pathname == "/php/gamescreen.php") {
                var flipGameFront = $('<img>').addClass('flipCardFrontGame').attr('src', `/media/gameimages/memory/${data[0].portrait[2]}`)
                //Create flipcardback with 'front of frame' picture
                var flipGameBack = $('<img>').addClass('flipCardBackGame').attr('src', `/media/gameimages/memory/${im}`)
            } else {
                var flipGameFront = $('<img>').addClass('flipCardFrontGame').attr('src', `/starcade/media/gameimages/memory/${data[0].portrait[2]}`)
                //Create flipcardback with 'front of frame' picture
                var flipGameBack = $('<img>').addClass('flipCardBackGame').attr('src', `/starcade/media/gameimages/memory/${im}`)
            }
            //append everything to its right place
            flipGameDiv.append(flipGameInner)
            flipGameInner.append(flipGameFront, flipGameBack)
            grid.append(flipGameDiv)
            $('#gameScreen').append(grid) 
            
            $(`.gameGrid .flipCardGame:nth-of-type(${ci+1}) .flipCardInnerGame`).data({'id': ci+1,'isFlipped': false, 'isMatched': false, 'imName': im})
            ci += 1
        }
    }

    // Create array with positional data etc. for the memory game.
    let Cards = initializeMemoryCards();

    // Set the css marginLeft/top according to the randomly generated x & y coordinates.
    for (let c = 0; c < Cards.length; c++){
        $(`.flipCardGame:nth-of-type(${c+1})`).css({
            marginLeft: `calc(${Cards[c].xpos}vw/1.9)`,
            marginTop: `calc(${Cards[c].ypos}vw/1.9)`,
            transition: 'margin 0.75s linear'
        })
    }

    // Set target location for each card - positioned on somewhere on the perimeter
    for (let c = 0; c < Cards.length; c++){
        var targetx, targety;
        [targetx, targety] = setTargetpos();
        Cards[c].targetx = targetx
        Cards[c].targety = targety
    }

    // every card moves a step closer to its target goal
    setInterval(function() {
        let stepsize = 1
    
        // ----- Calculate the current distance to target for each card -----
        for (let c = 0; c < Cards.length; c++){
            // Calculate the distance to the target, i.e., the hypotenuse using the pythagorean theorem.
            // a^2 + b^2 = c^2 -> c = sqrt(a^2 + b^2)
            let a = Cards[c].targetx - Cards[c].xpos
            let b = Cards[c].targety - Cards[c].ypos
            Cards[c].dist = Math.sqrt(a**2 + b**2)

            // If box is at target position (dist == 0), set new target.
            if (Cards[c].dist == 0){
                var targetx, targety;
                [targetx, targety] = setTargetpos()
                Cards[c].targetx = targetx
                Cards[c].targety = targety
            }
        }
			

        // ----- Move to new position -----
        for (let c = 0; c < Cards.length; c++){

            // If a card has been matched in the game - set its position to NaN so it doesn't cause collisions anymore
            if ($(`.gameGrid .flipCardGame:nth-of-type(${c+1}) .flipCardInnerGame`).data('isMatched')){
                Cards[c].xpos = NaN
                Cards[c].ypos = NaN
            }
            // card wants to take a step towards its target, gets a path towards its target. 
            let new_xpos, new_ypos
            [new_xpos, new_ypos] = getNewPosition(Cards[c].xpos, Cards[c].ypos, Cards[c].targetx, Cards[c].targety, stepsize)
           
            // ----- Check against collision with all other cards -----
            let collision
            // loop all cards
            for (let c2 = 0; c2 < Cards.length; c2++){
                // Dont let card c check for collision against itself
                if (c != c2){
                    // Returns true if there is a collision otherwise false.
                    collision = checkForCollision(new_xpos, new_ypos, Cards[c2].xpos, Cards[c2].ypos)
                    // If there is a collision, set a new target for both card c and c2.
                    if (collision){
                        var targetx, targety;
                        [targetx, targety] = setTargetpos()
                        Cards[c]['targetx'] = targetx
                        Cards[c]['targety'] = targety
                       
                        var targetx, targety;
                        [targetx, targety] = setTargetpos()
                        Cards[c2]['targetx'] = targetx
                        Cards[c2]['targety'] = targety
                        
                        break;
                    }
                }
            }
            // If there is no collision, move to new position
            if (!collision){
                // write new_xpos and new_ypos into the Cards array.
                Cards[c].xpos = new_xpos
                Cards[c].ypos = new_ypos
                
                // Update x and y position in css and draw on screen.
                $(`.flipCardGame:nth-of-type(${c+1})`).css({
                    marginLeft: `calc(${Cards[c].xpos}vw/1.9)`,
                    marginTop: `calc(${Cards[c].ypos}vw/1.9)`
                })
            }
       }
    }, 750);

    // when clicking on a frame in the grid
    $('.flipCardInnerGame').on('click', function() {

        // Count how many cards currently have the picture-side up.
        let nVisibleCards = 0
        for (let i = 0; i < Cards.length; i++) {
            if ($(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data('isFlipped')){
                nVisibleCards += 1
            }
        }

        //this will only happen if nVisibleCards is not counted to two, there shouldn't be a possibility
        //to flip a third card while playing the game, only two cards at a time
        if (nVisibleCards != 2){

            // id (nth-of-type index) of card clicked on.
            let id = $(this).data('id')
            // The user us allowed to flip a card if and only if it has not yet been matched to another card.
            let userIsAllowedToFlip = !$(this).data('isFlipped') //&& nVisibleCards < 2

            // If the user clicks a card, flip it if its not already. If flipped already, unflip it.
            if (userIsAllowedToFlip){
                $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).css({transform: 'rotateY(180deg)'})
                $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data('isFlipped', true)
            }
            else{
                // Unflip (show backside of card) if already flipped.
                $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).css({transform: 'rotateY(0deg)'})
                $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data('isFlipped', false)
            }
            
            // Check if any other card is looking for a match (means it is showing its picture-side to the user)
            for (let i = 0; i < Cards.length; i++) {
                let c2_isMatched = $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data('isMatched')
                let c2_isFlipped = $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data('isFlipped')
								//(i+1) och id ska ej vara samma, ska inte gå att matcha med sig själv.
                if (c2_isFlipped && !c2_isMatched && (i+1) != id ){
                    // If another card currently waiting for a match is found, check if it matches the card just clicked.
                    let im1 = $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data('imName')
                    let im2 = $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data('imName')
                    
                    // If its a match, spin around x times to indicate success, then permanently disable the card from the game.
                    if (im1 == im2 && $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data('isFlipped')){
                        //console.log('Match!')
                        setTimeout(function() {
                            $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data({'isMatched': true, 'isFlipped': false})
                            $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data({'isMatched': true, 'isFlipped': false})
                            // Check if game is solved
                            let nMatched = 0
                            for (let j = 0; j < Cards.length; j++){
                                if ($(`.gameGrid .flipCardGame:nth-of-type(${j+1}) .flipCardInnerGame`).data('isMatched')){
                                    nMatched += 1;
                                }
                            }
                            addScoreForMatch();
                            if (nMatched == Cards.length){
                                //console.log('GAME SOLVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                                gameOver()
                            }
                
                        //this is how long it takes for the next setTimeout function to finish
                        }, 1500 + 500);

                        setTimeout(function() {
                            let totaltime = 0
                            let rotationCounter = 0
                            let rot
                            for (let fast = 0.5; fast >= 0.1; fast-=0.1) {
                                setTimeout(function() {
                                    
                                    if (rotationCounter==0){
                                        rot = 0
                                    }else{
                                        rot = 180
                                        rotationCounter = -1
                                    }
                                    //'fast' blir aldrig exakt 0.1 därför händer if här nedan efter 0.15
                                    if (fast < 0.15) {
                                        rot = 90
                                    }
                                    rotationCounter += 1
                                    $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).css({transition: `transform ${fast}s`, transform: `rotateY(${rot}deg)`}) 
                                    $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).css({transition: `transform ${fast}s`, transform: `rotateY(${rot}deg)`})
                    
                                }, totaltime + fast*1000);
                                totaltime += fast*1000;
                            }
                        }, 500)
                    }
                    // If its not a match, flip both cards back to their hidden state with a small delay.
                    else{
                        //console.log('No match..')
                        setTimeout(function() {
                            $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).css({transform: 'rotateY(0deg)'})
                            $(`.gameGrid .flipCardGame:nth-of-type(${id}) .flipCardInnerGame`).data('isFlipped', false)
                            $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).css({transform: 'rotateY(0deg)'})
                            $(`.gameGrid .flipCardGame:nth-of-type(${i+1}) .flipCardInnerGame`).data('isFlipped', false)
                        }, 750);

                    }
                }
            }
        }
    })
}

function addScoreForMatch(){
    let score = parseInt($("#currScoreP").html())
    score = score + 15
    $("#currScoreP").html(score)
}

function startTimer() {
    let sekId = setInterval(countSek, 1000)
    $('#timeP .timeSek').data('sekID', sekId)
}

function stopTimer() {
    clearInterval($('#timeP .timeSek').data('sekID'))
}

function countSek() {
    let minAux = parseInt($('#timeP .timeMin').html())
    let aux = parseInt($('#timeP .timeSek').html())
    aux--
    if (aux == 0) {
        minAux--
        $('#timeP .timeMin').html(minAux)
        aux = 59
    }
    $('#timeP .timeSek').html(aux)
    if (aux == 59 && minAux == -1) {
        $('.gameGrid .flipCardGame .flipCardInnerGame').data('isFlipped', true)
        $('.gameGrid .flipCardGame .flipCardInnerGame').data('isMatched', true)
        gameOver()
    }
}

function gameOver() {
    $('#timeP .timeMin').html("0")
    $('#timeP .timeSek').html("0")
    stopTimer()
    commonGameOver()
}

jQuery(window).on('load', function() {
    $('.startBg').removeClass('hidden').addClass('visible')
})