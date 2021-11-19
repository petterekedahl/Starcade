"use strict";

const databaseLink = "../php/assets/api.php";


function addFriendsHTML(){
    // sorterar ut mainuser/andra användare - appendar med hjälp av classes

    let friendsID = [];
    let friends = [];

    STATE.users.forEach(user => {
        if(user.userID == STATE.userID){
            user.friends.forEach(id => {
                friendsID.push(id);
            })
        }
    })

    friendsID.forEach(friend => {
        STATE.users.forEach(user => {
            if(user.userID == friend){
                friends.push(user);
            }
        })
    })

    $('#myFriends').empty();
    friends.forEach(obj => {
        let friend = new FriendsHTML({
            id: obj.userID,
            profileImage: obj.profileImg,
            username: obj.username
        })

        $('#myFriends').append(friend.listHTML())
    })
}

function addOtherUsersHTML(){
    let otherUser = STATE.users.filter(user => user.userID == otherUserID)

    let mainUser = STATE.users.filter(user => user.userID == STATE.userID)

    let areWeFriends = false;

    if(mainUser[0].friends.includes(otherUser[0].userID)){
        areWeFriends = true;
    }

    let lookingAtUser = new UsersOthers ({
        id: otherUser[0].userID,
        username: otherUser[0].username,
        name: otherUser[0].name,
        score: otherUser[0].totalPoints,
        homeplanet: otherUser[0].homeplanet,
        profileImage: otherUser[0].profileImg,
        favorite: otherUser[0].favoriteGame,
        isFriend: areWeFriends
    })

    $('#otherSpace').append(lookingAtUser.listHTML());
}

function addUserHTML(){
    let mainUser = STATE.users.filter(user => user.userID == STATE.userID)

    let loggedInUser = new UserMain ({
        id: mainUser[0].userID,
        username: mainUser[0].username,
        score: mainUser[0].totalPoints,
        homeplanet: mainUser[0].homeplanet,
        profileImage: mainUser[0].profileImg,
        name: mainUser[0].name,
        favorite: mainUser[0].favoriteGame
    })
    $("#mySpace").append(loggedInUser.listHTML());

    $('#editInfo').on('click', function(){
        $('#userDiv').prepend(loggedInUser.editableHTML())
    })
}

function deletePopUp(){
    let deletePop = $('<div>').attr('id', 'deletePopUp').html('<p>Escape pod is ready, are you sure you want to launch? All your data will be lost.</p>').addClass('transp');
  
    let btnHolder = $('<div>').addClass('flexer');

    let yesButt = $('<div>').addClass('btnHolder').append(
      $('<div>').addClass('pBtn'),
      $('<button>').addClass('pBtn').attr('id', 'yes').html('Yes, launch when ready!'),
      $('<div>').addClass('pBtn')
    );
    let noButt = $('<div>').addClass('btnHolder').append(
      $('<div>').addClass('nBtn'),
      $('<button>').addClass('nBtn').attr('id', 'no').html('No. Stay!'),
      $('<div>').addClass('nBtn')
    );

    btnHolder.append(yesButt, noButt);
    
    deletePop.append(btnHolder);

    $('main').append(deletePop);

    $('#yes').on('click', function(){
        removeAccount(STATE.userID)
    })

    $('#no').on('click', function(){
        $('#deletePopUp').remove();
    })
}

function editAccountInfo(obj){
        const patchData = new Request(databaseLink,{
            method: "PATCH",
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        fetch(patchData)
            .then(response => {})
            .then(response => {
                location.reload();
            })
}

function newFriendStatus(userID){
    const postDatabase = new Request(databaseLink, {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: userID,
    })
    fetch(postDatabase)
        .then(response => {})
        .then(response => {
        })
}

function patchNewPic(picture){

    let newPic = {
        id: STATE.userID,
        profileImg: picture
    }

    const patchData = new Request(databaseLink,{
        method: "PATCH",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(newPic),
    })
    fetch(patchData)
        .then(response => {})
        .then(response => {
            location.reload();
        })
}

function removeAccount(userID){
    let obj = {
        id: userID
    }

    const deleteData = new Request(databaseLink,{
        method: "DELETE",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(obj)
    })
    fetch(deleteData)
        .then(response => {response.json()})
        .then(response => {
            location.replace("../index.php");
        })
}

function selectedPlanetClick(planetName){
    $('#popupSearch').empty();
    $('#popupSearch').css('display', 'block');
    let selectedPlanet = planetName;
    let planetPopu = 0;

    STATE.users.forEach(user => {
        if(user.homeplanet == selectedPlanet){
            planetPopu = planetPopu + 1;
        }
    })


    let planetNav = $('<nav>').addClass('flexer');

    let planetInfoDiv = $('<div>').html(`<h2>Name: <span id='planet'>${selectedPlanet}</span></h2>` + `<h2>Population: <span id='pop'>${planetPopu}</span></h2>`);

    let closeDiv = $('<div>').addClass('flexer').attr('id', 'cross').append($('<h1>').html('+'));

    planetNav.append(planetInfoDiv, closeDiv);
    $('#popupSearch').append(planetNav, $('<div id="wrapFriends">'));

    let mainUser = STATE.users.filter(user => user.userID == STATE.userID);


    STATE.users.forEach(user => {
        if(user.homeplanet == selectedPlanet){
            let userDiv = $('<div>').addClass('transp flexer foundUser');

            let alink = $(`<a href='../php/friends.php?friend=${user.userID}'>`);
            let infoHolder = $('<div>').addClass('flexer');

            //TEST HÄR ".."
            let profilePic = $('<img>').attr('src', `${user.profileImg}`);
            let userName = $('<div>').html(user.username);
            
            alink.append(profilePic, userName)
          
            infoHolder.append(alink);

            let friendButton = $('<div>').addClass('btnHolder').append(
                $('<div>').addClass('pBtn'),
                $('<button>').addClass('pBtn notFriends').attr('id', `${user.userID}`).html('Add friend'),
                $('<div>').addClass('pBtn')
              );

            if(mainUser[0].friends.includes(user.userID)){
                friendButton = $('<div>').addClass('btnHolder').append(
                $('<div>').addClass('nBtn'),
                  $('<button>').addClass('nBtn friends').attr('id', `${user.userID}`).html('Remove friend'),
                $('<div>').addClass('nBtn')
              );
            }

            if(mainUser[0].userID == user.userID){
                userDiv.append(infoHolder);
            }else{
                userDiv.append(infoHolder, friendButton);
            }

            $('#wrapFriends').append(userDiv);
        }
    })
    
}

function showProfilePics(){
    $('main').append($('<div>').addClass('flexer').attr('id', 'cover'));
  
    $('#cover').append('<div class="transp" id="picChoices">');

    let picNav = $('<nav>').html('Choose a new picture').attr('id', 'coverNav');
    let closeDiv = $('<div>').attr('id', 'cross').addClass("flexer");
    let cross = $('<h1>').html("+");
    closeDiv.append(cross);
    picNav.append(closeDiv);
    $('#picChoices').prepend(picNav);


    profileImages.forEach(pic => {
        //Byt sökväg!!!
        let img = $('<img>').attr('src', `../media/profileimages/${pic}`).addClass('proPicChoice');

        $('#picChoices').append(img);
    })

    $('.proPicChoice').on('click', function(){
        let chosenPic = $(this).attr('src')
        patchNewPic(chosenPic);
    })

    $('#cross').on('click', function(){
        $('#cover').remove();
    });
}

// 
// function addLeaderboard(){}
$("#pictureGrid div").on("click", function() {
    $('.chosenPic').removeClass('chosenPic');
    $(this).addClass('chosenPic');
    let attr = $(this).children().attr("src");
    $("#pic").val(attr);
})

$(document).on('click', '#cross', function(){
    $(this).parents('#popupSearch').css('display', 'none');
})