"use strict";

function startShooter(){
    let grid = $("<div>").attr("id", "shootingGrid");
    $("#gameScreen").append(grid);

    $('#timeP').html('60');

    for(let i = 1; i <=100; i++){
        let targetButton = $('<button>');
        targetButton.attr('id', i).attr('disabled', true).addClass('target');

        $('#shootingGrid').append(targetButton);
    }

    let scoreKeeper = setInterval(function(){
        let rN = randomNumber(1, 100);
        for(let i = 1; i <= 100; i++){

            if($(`#${i}`).attr('id') == i){
                $(`#${i}`).css('background', 'transparent').attr('disabled', true);
            }
        }
        
        $(`#${rN}`).css('background', 'red').removeAttr('disabled');
    }, 1000)


    let timeKeeper = setInterval(function(){
        let timeLeft = parseInt($('#timeP').html());

        if(timeLeft == 1){
            clearInterval(timeKeeper);
            clearInterval(scoreKeeper);
            gameOver()
        }

        $('#timeP').html(timeLeft - 1);
    }, 1000)

    $(document).on('click', ".target", function(){
        $(this).css('background', 'transparent').attr('disabled', true);
        let points = parseInt($('#currScoreP').html());
        $('#currScoreP').html(points + 5);
    })

    $(document).on('click', "#restart", function(){
        location.reload();
    })

    function gameOver(){
        commonGameOver();
    }
}