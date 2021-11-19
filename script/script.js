"use strict";

function fillGameCorner(){
    games.forEach(game => {
        let section = $('<section>').addClass("transp flexer");
        let img = $('<img>').attr('src', game.gameImg);
        let div = $('<div>').addClass("flexer");
        let h1 = $('<h1>').html(game.gameName);
        let p1 = $('<p>').html(game.description);
        let p2 = $('<p>').html(game.rules);
        let btnHolder = $('<div>').addClass("btnHolder");
        let pBtn = $('<div>').addClass("pBtn");
        let a = $('<a>').attr('href', `gamescreen.php?game=${game.gameID}`)
        a.addClass("pBtn").html("Play");
        let pBtn1 = $('<div>').addClass("pBtn");

        div.append(h1, p1, p2, btnHolder);
        btnHolder.append(pBtn, a, pBtn1);
        section.append(img, div);

        $('main').append(section);
    });
}

if(!userID){
    if(whatFile == "gamecorner.php"){
        fillGameCorner();
    }
} else {
    const getDatabase = new Request(databaseLink)
    fetch(getDatabase)
        .then(response => response.json())
        .then(svar => {
            svar.data.users.forEach(user => {
                STATE.users.push(user);
            })
            svar.data.planets.forEach(planet => {
                STATE.planets.push(planet);
            })
            svar.data.score.forEach(score => {
                STATE.scores.push(score);
            })

            if(whatFile == "myspace.php"){
                addUserHTML()
                addFriendsHTML()

                $('.deleteAcc').on('click', function(){
                    deletePopUp();
                })

                $('#changePic').on('click', function(){
                    showProfilePics()
                })
            }

            // let id = toString(otherUserID);

            if(whatFile == "friends.php"){
                addOtherUsersHTML()

                $(document).on('click', '.friends, .notFriends', function(){
                    let userID = $(this).attr('id');
                    let friendsOrNot = $(this).html();

                    if(friendsOrNot == 'Remove friend'){
                        $(this).removeClass('friends');
                        $(this).removeClass('nBtn');
                        $(this).addClass('notFriends');
                        $(this).addClass('pBtn');
                        $(this).html('Add friend');

                        $(this).siblings().removeClass('nBtn').addClass('pBtn');

                        newFriendStatus(userID)
                    }else{
                        $(this).removeClass('notFriends');
                        $(this).removeClass('pBtn');
                        $(this).addClass('friends');
                        $(this).addClass('nBtn');

                        $(this).siblings().removeClass('pBtn').addClass('nBtn');

                        $(this).html('Remove friend')

                        newFriendStatus(userID)
                    }
                })
            }

            if(whatFile == "commonspace.php"){
                STATE.planets.forEach(planet => {
                    let planetLink = $('<div>').attr('id', `${planet.planetName}`).addClass('planets').css('background-image', `url(${planet.planetImg})`);

                    $('#planets').append(planetLink);
                })

                $('#planets > div').on('click', function(){
                    selectedPlanetClick($(this).attr('id'))
                })

                $(document).on('click', '.friends, .notFriends', function(){
                    let userID = $(this).attr('id');
                    let friendsOrNot = $(this).html();

                    if(friendsOrNot == 'Remove friend'){
                        $(this).removeClass('friends');
                        $(this).removeClass('nBtn');
                        $(this).addClass('notFriends');
                        $(this).addClass('pBtn');
                        $(this).html('Add friend');

                        $(this).siblings().removeClass('nBtn').addClass('pBtn');

                        newFriendStatus(userID)
                    }else{
                        $(this).removeClass('notFriends');
                        $(this).removeClass('pBtn');
                        $(this).addClass('friends');
                        $(this).addClass('nBtn');

                        $(this).siblings().removeClass('pBtn').addClass('nBtn');

                        $(this).html('Remove friend')

                        newFriendStatus(userID)
                    }
                })

                function updateMouseLocation(e){
                    let x = e.pageX
                    let y = e.pageY
                  
                    document.documentElement.style.setProperty('--cursorX', x + 'px')
                    document.documentElement.style.setProperty('--cursorY', y + 'px')
                  }
                  
                document.addEventListener('mousemove',updateMouseLocation)
                document.addEventListener('touchmove',updateMouseLocation)
                
                $('#disable').on('click', function(){
                    let checkID = $(this).attr('id');

                    if(checkID == 'disable'){
                        $(this).removeAttr('id', 'disable');
                        $(this).attr('id', 'enable');

                        $('#planets').css('clip-path', 'none');
                        $('#planets').css('border', '0');

                    }else{
                        $(this).removeAttr('id', 'enable');
                        $(this).attr('id', 'disable');

                        $('#planets').css('clip-path', 'circle(10vh at calc(var(--cursorX) - 5%) calc(var(--cursorY) - 5%))');
                        $('#planets').css('border', '1px solid rgba(51, 255, 0, 0.747)');
                    }
                })
            }

            if(whatFile == "aboutus.php"){
                $('.aboutCrewDiv').on('click', function(){
                    $('.marked').removeClass('marked');
                    $(this).addClass('marked');
                    let clickedCrew = $(this).attr('id').toLowerCase()
                    aboutUs.forEach(crewM => {
                        let useName = crewM.name.toLowerCase().split(' ').join('');

                        if(clickedCrew == "about" + useName){
                            let aboutInfo = document.getElementById('aboutInfoPlanet');

                            aboutInfo.innerHTML = '';
                            
                            let infoDiv = document.createElement('div');
                            let name = document.createElement('h1');
                            name.innerHTML = crewM.name;
                            let info = document.createElement('p');
                            info.innerHTML = crewM.info;
                            infoDiv.append(name, info);

                            aboutInfo.append(infoDiv);
                        }
                    })
                })
            }
        
            if(whatFile == "gamecorner.php"){
                fillGameCorner();
            }

        })
    }