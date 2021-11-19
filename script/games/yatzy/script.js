"use strict";

function startYatzy(){
    createHTML();

    //dynamically created elements (by Johanna)
    function createHTML(){
        let mainDiv = $('<div>');

        //mainDiv sections
        let scoreboard = $('<div>').attr('id', 'scoreboard');
        let savedDices = $('<div>').attr('id', 'savedDices');
        let results = $('<div>').attr('id', 'results');
        let knappar = $('<div>').attr('id', 'knappar');

        // -------
        
        //scoreboard sections 
        let topScore = $('<div>').attr('id', 'topScore');
        let finishing = $('<div>').attr('id', 'finishing');
        let totalScore = $('<div>').attr('id', 'totalScore');

        //topScore content elements:
        let score1 = $('<div>').attr('id', 'score1');
        let ones = $('<p>').html('Ones');
        let none1 = $('<p>').html(' - ');
        score1.append(ones, none1);
        let score2 = $('<div>').attr('id', 'score2');
        let twos = $('<p>').html('Twos');
        let none2 = $('<p>').html(' - ');
        score2.append(twos, none2);
        let score3 = $('<div>').attr('id', 'score3');
        let threes = $('<p>').html('Threes');
        let none3 = $('<p>').html(' - ');
        score3.append(threes, none3);
        let score4 = $('<div>').attr('id', 'score4');
        let fours = $('<p>').html('Fours');
        let none4 = $('<p>').html(' - ');
        score4.append(fours, none4);
        let score5 = $('<div>').attr('id', 'score5');
        let fives = $('<p>').html('Fives');
        let none5 = $('<p>').html(' - ');
        score5.append(fives, none5);
        let score6 = $('<div>').attr('id', 'score6');
        let sixes = $('<p>').html('Sixes');
        let none6 = $('<p>').html(' - ');
        score6.append(sixes, none6);
        let topScores = $('<div>').attr('id', 'topScores');
        let topPoints = $('<p>').html('Points');
        let noneTop = $('<p>').html(' - ');
        topScores.append(topPoints, noneTop)
        topScore.append(score1, score2, score3, score4, score5, score6, topScores);

        //finishing content elements:
        let twoPairs = $('<div>').attr('id', 'twoPairs');
        let txtTwo = $('<p>').html('Two Pairs');
        let noneTwo = $('<p>').html(' - ');
        twoPairs.append(txtTwo, noneTwo);
        let threeKind = $('<div>').attr('id', 'threeKind');
        let txtThree = $('<p>').html('Three of A Kind');
        let noneThree = $('<p>').html(' - ');
        threeKind.append(txtThree, noneThree);
        let fourKind = $('<div>').attr('id', 'fourKind');
        let txtFour = $('<p>').html('Four of A Kind');
        let noneFour = $('<p>').html(' - ');
        fourKind.append(txtFour, noneFour);
        let sStraight = $('<div>').attr('id', 'sStraight');
        let txtSS = $('<p>').html('Small Straight');
        let noneSS = $('<p>').html(' - ');
        sStraight.append(txtSS, noneSS);
        let lStraight = $('<div>').attr('id', 'lStraight');
        let txtLS = $('<p>').html('Large Straight');
        let noneLS = $('<p>').html(' - ');
        lStraight.append(txtLS, noneLS);
        let fullHouse = $('<div>').attr('id', 'fullHouse');
        let txtFull = $('<p>').html('Full House');
        let noneFull = $('<p>').html(' - ');
        fullHouse.append(txtFull, noneFull);
        let chance = $('<div>').attr('id', 'chance');
        let txtChance = $('<p>').html('Chance');
        let noneChance = $('<p>').html(' - ');
        chance.append(txtChance, noneChance);
        let yatzy = $('<div>').attr('id', 'yatzy');
        let txtYatzy =  $('<p>').html('YAHTZEE!');
        let noneYatzy = $('<p>').html(' - ');
        yatzy.append(txtYatzy, noneYatzy);
        finishing.append(twoPairs, threeKind, fourKind, sStraight, lStraight,fullHouse, chance, yatzy);

        //totalScore content elements:
        let txtTotal =  $('<p>').html('Total:');
        let noneTotal = $('<p>').html(' - ');
        totalScore.append(txtTotal, noneTotal);

        //scoreboard total appending of sections:
        scoreboard.append(topScore, finishing, totalScore);
        
        // -------

        //knappar sections and content elements
        let playButton = $('<button>').attr('id', 'playButton').html('Roll The Dices');
        let throwsLeft = $('<div>').attr('id', 'throwsLeft').html('Rolls left: <span></span>');
        let saveScore = $('<button>').attr('id', 'saveScore').html('Save score');

        // knappar total appending of sections:
        knappar.append(playButton, throwsLeft, saveScore);
        
        // -------
        
        //total appending of elements
        mainDiv.append(scoreboard, savedDices, results, knappar);
        $("#gameScreen").append(mainDiv);
    }
    let yatzyTrue = '';
    let throws = 3;
    
    $('#savedDices').html('Save your dices by clicking on them.')
    $('#throwsLeft > span').html('3')
    
    savedDices.length = 0
    
    for(let i = 1; i < 6; i++){
        $('#results').append($(`<div class='sladaTarningar'>-</div>`))
    }
    
    
    function resetDivs(){
        savedDices.length = 0
        scores.length = 0
        singleNumberScores.length = 0;
        totalScore.length = 0;
    
        $('#wdyw').remove()
    
        $('#savedDices').empty()
        $('#results').empty()
        $('#throwsLeft > span').html('3');
    
        $('#savedDices').html('Save your dices by clicking on them.')
    
        for(let i = 1; i < 6; i++){
            $('#results').append($(`<div class='sladaTarningar'>-</div>`))
        }
    
        getBonus()
        getTotal()
    }
    
    function playButtonFunc(){
    
        let decendingRolls = parseInt($('#throwsLeft > span').html())
        console.log(decendingRolls--)
        $('#throwsLeft > span').html(decendingRolls--)
        
        for (let i = 0; i < 7; i++){
    
            let rN = randomNumber(0, 6)
            let dice = dices[rN]
    
    
            $(`#results > div:nth-of-type(${i})`).empty()
            $(`#results > div:nth-of-type(${i})`).css('backgroundImage', `${dice}`)
            $(`#results > div:nth-of-type(${i})`).attr('id', `${rN + 1}`)
        }
    
        if (parseInt($('#throwsLeft > span').html()) == 0){
            $('#playButton').attr('disabled', true);
        }else{}
    
        for(let i = 1; i < 7; i++){
    
            let diceHtml = $(`#results > div:nth-of-type(${i})`).html()
        
            if(diceHtml === ''){
                $(`#results > div:nth-of-type(${i})`).addClass('pointer sladaTarningar')
            }
            else('')
        }
        
    }
    
    $(document).on('click', '#playButton', playButtonFunc)
    
    $(document).on('click', 'div.sladaTarningar', function(){
        let whatDiceNumber = $(this).attr('id')
    
        if($('#savedDices').html() === 'Save your dices by clicking on them.'){
    
            $('#savedDices').empty()
        }
    
    
        if (whatDiceNumber === '1'){
            let i = 1
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
    
            savedDicesOnes.push(i)
            savedDices.push(i)
    
        }if (whatDiceNumber === '2'){
    
            let i = 2
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
            savedDicesTwos.push(i)
            savedDices.push(i)
    
        }if (whatDiceNumber === '3'){
    
            let i = 3
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
            savedDicesThrees.push(i)
            savedDices.push(i)
        
        }if (whatDiceNumber === '4'){
    
            let i = 4
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
            savedDicesFours.push(i)
            savedDices.push(i)
    
        }if (whatDiceNumber === '5'){
    
            let i = 5
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
            savedDicesFives.push(i)
            savedDices.push(i)
    
        }if (whatDiceNumber === '6'){
            
    
            let i = 6
            let diceBackground = dices[i-1]
    
            $('#results').find(this).remove()
    
            $('#savedDices').append($(`<div class="dice${i} tarning">`))
    
            $(`.dice${i}`).css('backgroundImage', `${diceBackground}`)
    
            savedDicesSixes.push(i)
            savedDices.push(i)
    
        }
    
        savedDices.sort(function(a, b){
            return a - b
        })
    })
    
    
    $(document).on('click', '.tarning', function(){
        $('#results').append($('<div> - </div>'))
        $('#savedDices').find(this).remove()
    
        let whatDiceNumber = $(this).css('backgroundImage')
    
        if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image1.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 1) { 
                    savedDices.splice(i, 1);
                }
            }
            
            for(var i = 0; i < savedDicesOnes.length; i++){
                if (savedDicesOnes[i] === 1){
                    savedDicesOnes.splice(i, 1)
                }
            }
    
        }if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image2.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 2) { 
                    savedDices.splice(i, 1); 
                }
            }
    
            for(var i = 0; i < savedDicesTwos.length; i++){
                if (savedDicesTwos[i] === 2){
                    savedDicesTwos.splice(i, 1)
                }
            }
    
        }if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image3.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 3) { 
                    savedDices.splice(i, 1); 
                }
            }
            
            for(var i = 0; i < savedDicesThrees.length; i++){
                if (savedDicesThrees[i] === 3){
                    savedDicesThrees.splice(i, 1)
                }
            }
    
        }if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image4.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 4) { 
                    savedDices.splice(i, 1); 
                }
            }
    
            for(var i = 0; i < savedDicesFours.length; i++){
                if (savedDicesFours[i] === 4){
                    savedDicesFours.splice(i, 1)
                }
            }
    
        }if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image5.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 5) { 
                    savedDices.splice(i, 1); 
                }
            }
    
            for(var i = 0; i < savedDicesFives.length; i++){
                if (savedDicesFives[i] === 5){
                    savedDicesFives.splice(i, 1)
                }
            }
    
        }if (whatDiceNumber === 'url("/starcade/media/gameimages/yatzy/image6.png")'){
    
            for(var i = 0; i < savedDices.length; i++){ 
                if ( savedDices[i] === 6) {
                    savedDices.splice(i, 1); 
                }
            }
    
            for(var i = 0; i < savedDicesSixes.length; i++){
                if (savedDicesSixes[i] === 6){
                    savedDicesSixes.splice(i, 1)
                }
            }
    
        }
    
        savedDices.sort(function(a, b){
            return a - b
        })
        
    })
    
    $('#saveScore').on('click', function(){
        checkScore()
        sparaTarningarna()
    })
    
    $(document).on('click', "#scoreOptions > button", function(){
        let knappValue = $(this).html()
    
        if(knappValue == "Ones"){
            let howMany = savedDicesOnes.length
    
            if($(this).attr('class') == 'stryk'){
                $('#score1 > p:nth-child(2)').html('X');
            }else{
                $('#score1 > p:nth-child(2)').html(howMany.toString());
            }
        }else if(knappValue == "Twos"){
            let howMany = savedDicesTwos.length
            let correctScore = howMany * 2
    
            if($(this).attr('class') == 'stryk'){
                $('#score2 > p:nth-child(2)').html('X');
            }else{
                $('#score2 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Threes"){
            let howMany = savedDicesThrees.length
            let correctScore = howMany * 3
    
            if($(this).attr('class') == 'stryk'){
                $('#score3 > p:nth-child(2)').html('X');
            }else{
                $('#score3 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Fours"){
            let howMany = savedDicesFours.length
            let correctScore = howMany * 4
    
            if($(this).attr('class') == 'stryk'){
                $('#score4 > p:nth-child(2)').html('X');
            }else{
                $('#score4 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Fives"){
            let howMany = savedDicesFives.length
            let correctScore = howMany * 5
    
            if($(this).attr('class') == 'stryk'){
                $('#score5 > p:nth-child(2)').html('X');
            }else{
                $('#score5 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Sixes"){
            let howMany = savedDicesSixes.length
            let correctScore = howMany * 6
    
            if($(this).attr('class') == 'stryk'){
                $('#score6 > p:nth-child(2)').html('X');
            }else{
                $('#score6 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Small Straight"){
    
            if($(this).attr('class') == 'stryk'){
                $('#sStraight > p:nth-child(2)').html('X');
            }else{
                $('#sStraight > p:nth-child(2)').html('15');
            }
        }else if(knappValue == "Large Straight"){
    
            if($(this).attr('class') == 'stryk'){
                $('#lStraight > p:nth-child(2)').html('X');
            }else{
                $('#lStraight > p:nth-child(2)').html('20')
            }
        }else if(knappValue == "Full House"){
            if($(this).attr('class') == 'stryk'){
                $('#fullHouse > p:nth-child(2)').html('X');
            }else{
                addFullHouseScore()
            }
        }else if(knappValue == 'YAHTZEE!'){
            if($(this).attr('class') == 'stryk'){
                $('#yatzy > p:nth-child(2)').html('X');
            }else{
                $('#yatzy > p:nth-child(2)').html('50');
            }
        }else if(knappValue == "Pair"){
            if($(this).attr('class') == 'stryk'){
                $('#pair > p:nth-child(2)').html('X');
            }else{
                addPairScore()
            }
        }else if(knappValue == "Three Of A Kind"){
            if($(this).attr('class') == 'stryk'){
                $('#threeKind > p:nth-child(2)').html('X');
            }else{
                addTOKScore()
            }
        }else if(knappValue == "Four Of A Kind"){
            if($(this).attr('class') == 'stryk'){
                $('#fourKind > p:nth-child(2)').html('X');
            }else{
                addFOKScore()
            }
        }else if(knappValue == "Two Pairs"){
            if($(this).attr('class') == 'stryk'){
                $('#twoPairs > p:nth-child(2)').html('X');
            }else{
                addTwoPairScore()
            }
        }else if(knappValue == "Chance"){
            if($(this).attr('class') == 'stryk'){
                $('#chance > p:nth-child(2)').html('X');
            }else{
                addChanceScore()
            }
        }else if($(this).attr('id') == 'finishGame'){
            resetDivs()
            getTotal()
        }
    
        $('#playButton').removeAttr('disabled');
        $('#saveScore').removeAttr('disabled');
        pair1.lenght = 0;
        pair2.lenght = 0;
        pair3.lenght = 0;
        pair4.lenght = 0;
        pair5.lenght = 0;
        pair6.lenght = 0;
    
        resetDivs()
    
    })
    
    $(document).on('click', "#strykOptions > button", function(){
        let knappValue = $(this).html()
    
        if(knappValue == "Ones"){
            let howMany = savedDicesOnes.length
    
            if($(this).attr('class') == 'stryk'){
                $('#score1 > p:nth-child(2)').html('X');
            }else{
                $('#score1 > p:nth-child(2)').html(howMany.toString());
            }
        }else if(knappValue == "Twos"){
            let howMany = savedDicesTwos.length
            let correctScore = howMany * 2
    
            if($(this).attr('class') == 'stryk'){
                $('#score2 > p:nth-child(2)').html('X');
            }else{
                $('#score2 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Threes"){
            let howMany = savedDicesThrees.length
            let correctScore = howMany * 3
    
            if($(this).attr('class') == 'stryk'){
                $('#score3 > p:nth-child(2)').html('X');
            }else{
                $('#score3 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Fours"){
            let howMany = savedDicesFours.length
            let correctScore = howMany * 4
    
            if($(this).attr('class') == 'stryk'){
                $('#score4 > p:nth-child(2)').html('X');
            }else{
                $('#score4 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Fives"){
            let howMany = savedDicesFives.length
            let correctScore = howMany * 5
    
            if($(this).attr('class') == 'stryk'){
                $('#score5 > p:nth-child(2)').html('X');
            }else{
                $('#score5 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Sixes"){
            let howMany = savedDicesSixes.length
            let correctScore = howMany * 6
    
            if($(this).attr('class') == 'stryk'){
                $('#score6 > p:nth-child(2)').html('X');
            }else{
                $('#score6 > p:nth-child(2)').html(correctScore.toString());
            }
        }else if(knappValue == "Small Straight"){
    
            if($(this).attr('class') == 'stryk'){
                $('#sStraight > p:nth-child(2)').html('X');
            }else{
                $('#sStraight > p:nth-child(2)').html('15');
            }
        }else if(knappValue == "Large Straight"){
    
            if($(this).attr('class') == 'stryk'){
                $('#lStraight > p:nth-child(2)').html('X');
            }else{
                $('#lStraight > p:nth-child(2)').html('20')
            }
        }else if(knappValue == "Full House"){
            if($(this).attr('class') == 'stryk'){
                $('#fullHouse > p:nth-child(2)').html('X');
            }else{
                addFullHouseScore()
            }
        }else if(knappValue == 'YAHTZEE!'){
            if($(this).attr('class') == 'stryk'){
                $('#yatzy > p:nth-child(2)').html('X');
            }else{
                $('#yatzy > p:nth-child(2)').html('50');
            }
        }else if(knappValue == "Pair"){
            if($(this).attr('class') == 'stryk'){
                $('#pair > p:nth-child(2)').html('X');
            }else{
                addPairScore()
            }
        }else if(knappValue == "Three of A Kind"){
            if($(this).attr('class') == 'stryk'){
                $('#threeKind > p:nth-child(2)').html('X');
            }else{
                addTOKScore()
            }
        }else if(knappValue == "Four of A Kind"){
            if($(this).attr('class') == 'stryk'){
                $('#fourKind > p:nth-child(2)').html('X');
            }else{
                addFOKScore()
            }
        }else if(knappValue == "Two Pairs"){
            if($(this).attr('class') == 'stryk'){
                $('#twoPairs > p:nth-child(2)').html('X');
            }else{
                addTwoPairScore()
            }
        }else if(knappValue == "Chance"){
            if($(this).attr('class') == 'stryk'){
                $('#chance > p:nth-child(2)').html('X');
            }else{
                addChanceScore()
            }
        }
    
        $('#playButton').removeAttr('disabled');
        $('#saveScore').removeAttr('disabled');
        pair1.lenght = 0;
        pair2.lenght = 0;
        pair3.lenght = 0;
        pair4.lenght = 0;
        pair5.lenght = 0;
        pair6.lenght = 0;
    
        resetDivs()
    
    })
    //Sortera savedDice array för att kunna ha koll på score? - Funkar
    
    function sparaTarningarna(){
        $('#playButton').attr('disabled', true);
        $('#saveScore').attr('disabled', true);
    }
    
    function checkScore(){
            checkArrayForDices()
            addToPairArrays()
            checkYatzy()
            checkSmallStraight()
            checkLargeStraight()
            fullHouse()
            checkOnes()
            checkTwos()
            checkThrees()
            checkFours()
            checkFives()
            checkSixes()
            checkPair()
            checkTwoPairs()
            checkThreeOfAKind()
            checkFourOfAKind()
    
            chooseWhatYouWant()
    }
    
    function checkYatzy(){
        let theSavedDices = savedDices.toString()
    
        yahtzee.forEach(function(number){
            let yahtzeeNumber = number.toString()
    
            if($('#yatzy > p:nth-child(2)').html() == ' - '){
                if(theSavedDices == yahtzeeNumber){
                    yatzyTrue = true;
                }
            }else{
                yatzyTrue = false;
            }
        })
    
        return yatzyTrue;
    }
    
    function checkSmallStraight(){
        let theSavedDices = savedDices.toString()
        let smallStraights = smallStraight.toString()
    
        if($('#sStraight > p:nth-child(2)').html() == ' - '){
            if (theSavedDices == smallStraights){
                return true
            }
        }else{
            return false
        }
    }
    
    function checkLargeStraight(){
        let theSavedDices = savedDices.toString()
        let largeStraights = largeStraight.toString()
    
        if($('#lStraight > p:nth-child(2)').html() == ' - '){
            if (theSavedDices == largeStraights){
                return true
            }
        }
    }
    
    function fullHouse(){
        let i = savedDices[0];
        let y = savedDices[3];
    
        let score = savedDices
        let alternativ1 = [i, i, i, y, y]
        let alternativ2 = [i, i, y, y, y]
    
        if(score.toString() === alternativ1.toString() || score.toString() === alternativ2.toString() ){
            if($('#fullHouse > p:nth-child(2)').html() == ' - '){
                if(score.toString() != [i, i, i, i, i]){
                    if (score.toString() === alternativ1.toString()){
                        return true
                    }else{
                        return true
                    }
                }
            }
        }else{
            return false;
        }
    }
    
    function checkArrayForDices(){
        savedDicesOnes.length = 0
        savedDicesTwos.length = 0
        savedDicesThrees.length = 0
        savedDicesFours.length = 0
        savedDicesFives.length = 0
        savedDicesSixes.length = 0
    
        pair1.length = 0
        pair2.length = 0
        pair3.length = 0
        pair4.length = 0
        pair5.length = 0
        pair6.length = 0
    
    
        savedDicesOnes = savedDices.filter(dice => dice == 1)
        savedDicesTwos = savedDices.filter(dice => dice == 2)
        savedDicesThrees = savedDices.filter(dice => dice == 3)
        savedDicesFours = savedDices.filter(dice => dice == 4)
        savedDicesFives = savedDices.filter(dice => dice == 5)
        savedDicesSixes = savedDices.filter(dice => dice == 6)
    
        
    
    }
    
    function checkOnes(){
        let howMany = savedDicesOnes.length
    
        if (howMany >= 1){
            if($('#score1 > p:nth-child(2)').html() == ' - '){
                    return true
            }
        }
        return false
    
        
    }
    
    function checkTwos(){
        let howMany = savedDicesTwos.length
    
        if (howMany >= 1){
            if($('#score2 > p:nth-child(2)').html() == ' - '){
                return true
        }
        }else{
            return false
        }
    }
    
    function checkThrees(){
        let howMany = savedDicesThrees.length
    
        if (howMany >= 1){
            if($('#score3 > p:nth-child(2)').html() == ' - '){
                return true
        }
        }else{
            return false
        }
    }
    
    function checkFours(){
        let howMany = savedDicesFours.length
    
        if (howMany >= 1){
            if($('#score4 > p:nth-child(2)').html() == ' - '){
                return true
        }
        }else{
            return false
        }
    }
    
    function checkFives(){
        let howMany = savedDicesFives.length
     
        if (howMany >= 1){
            if($('#score5 > p:nth-child(2)').html() == ' - '){
                return true
        }
        }else{
            return false
        }
    }
    
    function checkSixes(){
        let howMany = savedDicesSixes.length
    
        console.log(howMany)
        if (howMany >= 1){
            if($('#score6 > p:nth-child(2)').html() == ' - '){
                return true
        }
        }else{
            return false
        }
    }
    
    function checkPair(){
        let one = pair1.length
        let two = pair2.length
        let three = pair3.length
        let four = pair4.length
        let five = pair5.length
        let six = pair6.length
    
        if($('#pair > p:nth-child(2)').html() == ' - '){
            if(one >= 2 || two >= 2 || three >= 2 || four >= 2 || five >= 2 || six >= 2){
                return true;
            }
        }
        return false;
    }
    
    function checkTwoPairs(){
        let i = savedDices[0];
        let y = savedDices[2];
        let z = savedDices[4];
    
        let twoPair1 = [i, i, y, y, z];
        let twoPair2 = [i, i, y, z, z];
        let twoPair3 = [i, y, y, z, z];
        let twoPair4 = [i, i, y, y];
    
        if($('#twoPairs > p:nth-child(2)').html() == ' - '){
            if(savedDices.toString() == twoPair1.toString() || savedDices.toString() == twoPair2.toString() || savedDices.toString() == twoPair3.toString() || savedDices.toString() == twoPair4.toString()){
                return true;
            }
        }
        return false
    }
    
    function checkThreeOfAKind(){
        let one = pair1.length
        let two = pair2.length
        let three = pair3.length
        let four = pair4.length
        let five = pair5.length
        let six = pair6.length
    
        if($('#threeKind > p:nth-child(2)').html() == ' - '){
            if(one >= 3 || two >= 3 || three >= 3 || four >= 3 || five >= 3 || six >= 3){
                return true;
            }
        }
        return false
    }
    
    function checkFourOfAKind(){
        let one = pair1.length
        let two = pair2.length
        let three = pair3.length
        let four = pair4.length
        let five = pair5.length
        let six = pair6.length
    
        if($('#fourKind > p:nth-child(2)').html() == ' - '){
            if(one >= 4 || two >= 4 || three >= 4 || four >= 4 || five >= 4 || six >= 4){
                return true;
            }
        }
        return false
    }
    
    function checkChance(){
        if($('#chance > p:nth-child(2)').html() == ' - '){
            return true;
        }
        return false
    }
    
    function createSelectWindow(){
        $('#gameScreen').append($(`<div id='wdyw'>`))
        $('#wdyw').append($('<h1>'))
        $('#wdyw').append($(`<div id='scoreOptions'>`))
        $('#wdyw').append($(`<div id='strykOptions'>`))
    }
    
    function chooseWhatYouWant(){
    
        createSelectWindow()
    
        if(checkYatzy() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('YAHTZEE!'))
        }
    
        if(checkSmallStraight() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Small Straight'))
        }
    
        if(checkLargeStraight() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Large Straight'))
        }
    
        if(fullHouse() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Full House'))
        }
    
        if(checkOnes() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Ones'))
        }
    
        if(checkTwos() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Twos'))
        }
    
        if(checkThrees() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Threes'))
        }
    
        if(checkFours() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Fours'))
        }
    
        if(checkFives() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Fives'))
        }
    
        if(checkSixes() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Sixes'))
        }
    
        if(checkPair() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Pair'))
        }
    
        if(checkTwoPairs() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Two Pairs'))
        }
    
        if(checkThreeOfAKind() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Three Of A Kind'))
        }
    
        if(checkFourOfAKind() === true){
            $('#wdyw > h1').html('You Can Put Your Points Here:')
            $('#scoreOptions').append($('<button class="poang">').html('Four Of A Kind'))
        }
    
        ifNothing()
        isThereAChance()
    }
    
    //lägg in allt i egna functions ^^^^^^^
    // checkScore()
    
    function ifNothing(){
        let nothing = $('#scoreOptions > button').length
    
        // if(nothing == 0){
            $('#strykOptions').append(`<div>Du behöver styka en.</div>`)
            
            let topscoreL = $('#topScore > div').length
            let bottomScoreL = $('#finishing > div').length
    
            for (let i = 1; i <= topscoreL - 1; i++){
                let emptyScore = $(`#topScore > div:nth-child(${i}) > p:nth-child(2)`).html()
    
                if(emptyScore == ' - '){
                    let foundEmpty = $(`#topScore > div:nth-child(${i}) > p:nth-child(1)`).html()
    
                    $('#strykOptions').append(`<button class="stryk">${foundEmpty}</button>`)
                }
            }
            for (let i = 1; i <= bottomScoreL; i++){
                let emptyScore = $(`#finishing > div:nth-child(${i}) > p:nth-child(2)`).html()
    
                if(emptyScore == ' - '){
                    let foundEmpty = $(`#finishing > div:nth-child(${i}) > p:nth-child(1)`).html()
    
                    $('#strykOptions').append(`<button class="stryk">${foundEmpty}</button>`)
                }
            }
        // }
    }
    
    function addToPairArrays(){
        savedDices.forEach(dice =>{
            if(dice == 1){
                pair1.push(1)
            }
            if(dice == 2){
                pair2.push(2)
            }
            if(dice == 3){
                pair3.push(3)
            }
            if(dice == 4){
                pair4.push(4)
            }
            if(dice == 5){
                pair5.push(5)
            }
            if(dice == 6){
                pair6.push(6)
            }
        })
    }
    
    function addPairScore(){
        if(pair6.length >= 2){
            $('#pair > p:nth-child(2)').html(6*2)
        }else if(pair5.length >= 2){
            $('#pair > p:nth-child(2)').html(5*2)
        }else if(pair4.length >= 2){
            $('#pair > p:nth-child(2)').html(4*2)
        }else if(pair3.length >= 2){
            $('#pair > p:nth-child(2)').html(3*2)
        }else if(pair2.length >= 2){
            $('#pair > p:nth-child(2)').html(2*2)
        }else if(pair1.length >= 2){
            $('#pair > p:nth-child(2)').html(1*2)
        }
    }
    
    function addTOKScore(){
        if(pair6.length >= 3){
            $('#threeKind > p:nth-child(2)').html(6*3)
        }else if(pair5.length >= 3){
            $('#threeKind > p:nth-child(2)').html(5*3)
        }else if(pair4.length >= 3){
            $('#threeKind > p:nth-child(2)').html(4*3)
        }else if(pair3.length >= 3){
            $('#threeKind > p:nth-child(2)').html(3*3)
        }else if(pair2.length >= 3){
            $('#threeKind > p:nth-child(2)').html(2*3)
        }else if(pair1.length >= 3){
            $('#threeKind > p:nth-child(2)').html(1*3)
        }
    }
    
    function addFOKScore(){
        if(pair6.length >= 4){
            $('#fourKind > p:nth-child(2)').html(6*4)
        }else if(pair5.length >= 4){
            $('#fourKind > p:nth-child(2)').html(5*4)
        }else if(pair4.length >= 4){
            $('#fourKind > p:nth-child(2)').html(4*4)
        }else if(pair3.length >= 4){
            $('#fourKind > p:nth-child(2)').html(3*4)
        }else if(pair2.length >= 4){
            $('#fourKind > p:nth-child(2)').html(2*4)
        }else if(pair1.length >= 4){
            $('#fourKind > p:nth-child(2)').html(1*4)
        }
    }
    
    function addTwoPairScore(){
        let i = savedDices[0];
        let y = savedDices[2];
        let z = savedDices[4];
    
        let dices = savedDices.toString();
    
        let twoPair1 = [i, i, y, y, z];
        let twoPair2 = [i, i, y, z, z];
        let twoPair3 = [i, y, y, z, z];
        let twoPair4 = [i, i, y, y];
    
        if(dices == twoPair1.toString()){
            let score = i + i + y + y;
            $('#twoPairs > p:nth-child(2)').html(score);
        }else if(dices == twoPair2.toString()){
            let score = i + i + z + z;
            $('#twoPairs > p:nth-child(2)').html(score);
        }else if(dices == twoPair3.toString()){
            let score = y + y + z + z;
            $('#twoPairs > p:nth-child(2)').html(score);
        }else if(dices == twoPair4.toString()){
            let score = i + i + y + y;
            $('#twoPairs > p:nth-child(2)').html(score);
        }
    }
    
    function addChanceScore(){
        let score = savedDices.reduce((a, b) => a + b)
        $('#chance > p:nth-child(2)').html(score);
    }
    
    function addFullHouseScore(){
        let score = savedDices.reduce((a, b) => a + b)
        $('#fullHouse > p:nth-child(2)').html(score);
    }
    
    function isThereAChance(){
        if(checkChance() === true){
        $('#scoreOptions').append(`<div id="chanceInfo">`)
        $('#chanceInfo').html('You Can Always Use The Chance:')
        $('#scoreOptions').append($('<button class="poang">').html('Chance'))
        }
    }
    
    function getBonus(){
        let one = $('#score1 > p:nth-child(2)').html()
        let two = $('#score2 > p:nth-child(2)').html()
        let three = $('#score3 > p:nth-child(2)').html()
        let four = $('#score4 > p:nth-child(2)').html()
        let five = $('#score5 > p:nth-child(2)').html()
        let six = $('#score6 > p:nth-child(2)').html()
    
        if(one != ' - ' || one != 'X'){
            if(one != 'X'){
                let useOne = parseInt($('#score1 > p:nth-child(2)').html())
                singleNumberScores.push(useOne)
            }
        }
        if(two != ' - '){
            if(two != 'X'){
                let useTwo = parseInt($('#score2 > p:nth-child(2)').html())
                singleNumberScores.push(useTwo)
            }
        }
        if(three != ' - '){
            if(three != 'X'){
                let useThree = parseInt($('#score3 > p:nth-child(2)').html())
                singleNumberScores.push(useThree)
            }
        }
        if(four != ' - '){
            if(four != 'X'){
                let useFour = parseInt($('#score4 > p:nth-child(2)').html())
                singleNumberScores.push(useFour)
            }
        }
        if(five != ' - '){
            if(five != 'X'){
                let useFive = parseInt($('#score5 > p:nth-child(2)').html())
                singleNumberScores.push(useFive)
            }
        }
        if(six != ' - '){
            if(six != 'X'){
                let useSix = parseInt($('#score6 > p:nth-child(2)').html())
                singleNumberScores.push(useSix)
            }
        }
    
        if(one != ' - ' && two != ' - ' && three != ' - ' && four != ' - ' && five != ' - ' && six != ' - '){
            let totalScore = '';

            if(singleNumberScores.length > 0){
                totalScore = singleNumberScores.reduce((a, b) => a + b)
            }
    
            $('#topScores > p:nth-child(2)').html(totalScore);
    
            if(totalScore >= 63){
                let currentScore = parseInt($('#topScores > p:nth-child(2)').html())
    
                $('#topScores > p:nth-child(2)').html(currentScore + 50)
            }
        }else{
            $('#topScores > p:nth-child(2)').html('X')
        }
    }
    
    function getTotal(){
        let bonusScore = $('#topScores > p:nth-child(2)').html();
        let pairScore = $('#pair > p:nth-child(2)').html();
        let twoPairScore = $('#twoPairs > p:nth-child(2)').html();
        let TOKScore = $('#threeKind > p:nth-child(2)').html();
        let FOKScore = $('#fourKind > p:nth-child(2)').html();
        let smallScore = $('#sStraight > p:nth-child(2)').html();
        let largeScore = $('#lStraight > p:nth-child(2)').html();
        let fullHouseScore = $('#fullHouse > p:nth-child(2)').html();
        let chanceScore = $('#chance > p:nth-child(2)').html();
        let yatzyScore = $('#yatzy > p:nth-child(2)').html();

        let totalaPoang = 0;
    
        if(bonusScore != ' - ' || pairScore != ' - ' || twoPairScore != ' - ' || TOKScore != ' - ' || FOKScore != ' - ' || smallScore != ' - ' || largeScore != ' - ' || fullHouseScore != ' - ' || chanceScore != ' - ' || yatzyScore != ' - '){
            if(bonusScore != 'X'){
                let useScore = parseInt(bonusScore);
                totalScore.push(useScore);
            }
            if(pairScore != 'X'){
                let useScore = parseInt(pairScore);
                totalScore.push(useScore);
            }
            if(twoPairScore != 'X'){
                let useScore = parseInt(twoPairScore);
                totalScore.push(useScore);
            }
            if(TOKScore != 'X'){
                let useScore = parseInt(TOKScore);
                totalScore.push(useScore);
            }
            if(FOKScore != 'X'){
                let useScore = parseInt(FOKScore);
                totalScore.push(useScore);
            }
            if(smallScore != 'X'){
                let useScore = parseInt(smallScore);
                totalScore.push(useScore);
            }
            if(largeScore != 'X'){
                let useScore = parseInt(largeScore);
                totalScore.push(useScore);
            }
            if(fullHouseScore != 'X'){
                let useScore = parseInt(fullHouseScore);
                totalScore.push(useScore);
            }
            if(chanceScore != 'X'){
                let useScore = parseInt(chanceScore);
                totalScore.push(useScore);
            }
            if(yatzyScore != 'X'){
                let useScore = parseInt(yatzyScore);
                totalScore.push(useScore);
            }
    
            console.log(totalScore);
            totalaPoang = totalScore.reduce((a, b) => a + b);
            console.log(totalaPoang);
    
            $('#totalScore > p:nth-child(2)').html(totalaPoang);
        }

        $('#currScoreP').html(totalaPoang);

        gameDone()
    }
    
    $('#resetGame').on('click', function(){
        location.reload()
    })

    //Försök till gameOver lösning
    function gameDone(){
        let checkTop = false;
        let topLength = $('#topScore').children().length;

        let checkBottom = false;
        let bottomLength = $('#finishing').children().length;

        for(let i = 1; i <= topLength; i++){
            if($(`#topScore > div:nth-child(${i}) > p:nth-of-type(2)`).html() != ' - '){
                checkTop = true;
            }else{
                checkTop = false;
            }
        }

        for(let i = 1; i <= bottomLength; i++){
            if($(`#finishing > div:nth-child(${i}) > p:nth-of-type(2)`).html() != ' - '){
                checkBottom = true;
            }else {
                checkBottom = false;
            }
        }

        if(checkTop == true && checkBottom == true){
            //trigga pop-upen!
            commonGameOver();
        }
    }

}