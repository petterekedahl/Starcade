class UserBase {
    constructor(data){
        this.id = data.id,
        this.username = data.username;
        this.score = data.score;
        this.homeplanet = data.homeplanet;
        this.favorite = data.favorite,
        this.name = data.name,
        this.image = data.profileImage;
    }

    listHTML(){
        let html = $('<div>').attr('id', 'userDiv');

        let infoBox = $('<div>').attr('id', 'infoDiv');
        let infoHolder = $('<div>').addClass('flexer infoHolder');
        let pictureBox = $('<div>').attr('id', 'pictureDiv');
        let pictureHolder = $('<div>').addClass('flexer');

        html.append(infoBox, pictureBox);

        //lägger in all info

        let usernameBox = $('<div>').attr('id', "userName").html('Username: ' + "<span>" + this.username + "</span>");
        let homePlanetBox = $('<div>').attr('id', "userHomeplanet").html('Homeplanet: ' + "<span>" + this.homeplanet + "</span>");
        let favoriteBox = $('<div>').attr('id', "userFavorite").html('Favorite Game: ' + "<span>" + this.favorite + "</span>")
        let nameBox = $('<div>').attr('id', "name").html('Full name: ' + "<span>" + this.name + "</span>");

        infoHolder.append(usernameBox, nameBox, favoriteBox, homePlanetBox);

        

        //lägger in profilbild

        let planetImgDiv = $('<div>').attr('id', 'planetBackGround').css('backgroundImage', `../media/planets/${this.homeplanet}.jpg`);

        //TEST HÄR ".."
        let profilePic = $('<img>').attr('src', `${this.image}`);
      
        let comet = $('<img>').attr('src', '../media/comet.png');

        planetImgDiv.append(profilePic);

        pictureHolder.append(planetImgDiv, comet);
      
        infoBox.append(infoHolder);
        pictureBox.append(pictureHolder);
        
        return html;
    }
}


class UserMain extends UserBase{
    constructor(data){
        super(data);
        this.html = $('#mySpace')
    }
    listHTML() {
        let html = super.listHTML();
        this.html.append(html);
        // lägg till andra relevanta divar
        let editHolder = $('<div>').addClass('btnHolder');
        let fEditDiv = $('<div>').addClass('pBtn');
        let editInfo = $('<button>').attr('id', 'editInfo').html('Edit your info').addClass('pBtn');
        let sEditDiv = $('<div>').addClass('pBtn');
        editHolder.append(fEditDiv, editInfo, sEditDiv);
        $('#infoDiv').append(editHolder);

        let picHolder = $('<div>').addClass('btnHolder');
        let fPicDiv = $('<div>').addClass('pBtn');
        let changePic = $('<button>').attr('id', 'changePic').html('Change profilePicture').addClass('pBtn');
        let sPicDiv = $('<div>').addClass('pBtn');
        picHolder.append(fPicDiv, changePic, sPicDiv);
        $('#pictureDiv').append(picHolder);

        $('#totalPoints > span').html(this.score);
    }

    editableHTML(){

        $('#infoDiv').remove();

        let html = $('<form>').attr('id', 'infoDiv').addClass('flexer');
        let infoHolder = $('<div>').addClass('infoHolder flexer');

        //lägger in all info
        //Namn, Favorite, Homeplanet

        let fullNameLabel = $('<label>').html('Full name');
        let homeplanetLabel = $('<label>').html('Homeplanet');
        let favoriteLabel = $('<label>').html('Favorite Game');

        let nameBox = $('<div>').attr('id', "userName").html(this.username);

        let nameInput = $('<div>').addClass('inputHolder');
        let fNDiv = $('<div>').addClass('inputEle');
        let fullName = $('<input>').attr('id', 'fullName').attr('type', 'text').val(this.name).addClass('inputEle');
        let sNDiv = $('<div>').addClass('inputEle');
        nameInput.append(fNDiv, fullName, sNDiv);
      
        let planetInput = $('<div>').addClass('inputHolder');
        let fPDiv = $('<div>').addClass('inputEle');
        let homePlanetBox = $('<select>').attr('id', "userHomeplanet").attr('placeholder', 'homeplanet').attr('username', 'homeplanet');
        let sPDiv = $('<div>').addClass('inputEle');
        planetInput.append(fPDiv, homePlanetBox, sPDiv);
        
        let favInput = $('<div>').addClass('inputHolder');
        let fFDiv = $('<div>').addClass('inputEle');
        let favoriteChange = $('<input>').attr('id', 'favorite').attr('type', 'text').val(this.favorite).addClass('inputEle');
        let sFDiv = $('<div>').addClass('inputEle');
        favInput.append(fFDiv, favoriteChange, sFDiv);

        STATE.planets.forEach(planet => {
            let planetOpt = $('<option>').attr('value', `${planet.planetName}`).html(planet.planetName);

            if(planet.planetName == this.homeplanet){
                planetOpt.attr('selected', 'selected');
            }

            homePlanetBox.append(planetOpt);
        })
        
        let doneHolder = $('<div>').addClass('btnHolder');
        let fDDiv = $('<div>').addClass('pBtn');
        let doneEdit = $('<button>').attr('id', `${this.id}`).addClass('pBtn submitEdit').html('Submit');
        let sDDiv = $('<div>').addClass('pBtn');
        doneHolder.append(fDDiv, doneEdit, sDDiv);
      
        infoHolder.append(fullNameLabel, nameInput, favoriteLabel, favInput, homeplanetLabel, planetInput, doneHolder);
      
        html.append(nameBox, infoHolder, doneHolder);

        $(doneEdit).on('click', function(){
            event.preventDefault(doneEdit);
            let newInfo = {
                id: this.id,
                name: $('#fullName').val(),
                favoriteGame: $('#favorite').val(),
                homeplanet: $('#userHomeplanet').val()
            }

            editAccountInfo(newInfo)
        })

        return html;
    }
}
    
class UsersOthers extends UserBase{
    constructor(data){
        super(data);
        this.friends = data.isFriend;
    }
    listHTML(){
        let html = super.listHTML();
        let friendHolder = $('<div>').addClass('btnHolder');
        let boxHolder = $('<div>').addClass('transp');
        let scoreBox = $('<div>').attr('id', "userScore").html('Score: ' + "<span>" + this.score + "</span>");

        $('#otherSpace').append(html);

        boxHolder.append(scoreBox);
        $('#lowerBox').append(boxHolder);

        if(this.friends == true){
            let fFDiv = $('<div>').addClass('nBtn');
            let friendButton = $('<button>').addClass('nBtn friends').attr('id', `${this.id}`).html('Remove friend');
            let sFDiv = $('<div>').addClass('nBtn');
            friendHolder.append(fFDiv, friendButton, sFDiv);
          
        }else{
            let fFDiv = $('<div>').addClass('pBtn');
            let friendButton = $('<button>').addClass('pBtn notFriends').attr('id', `${this.id}`).html('Add friend');
            let sFDiv = $('<div>').addClass('pBtn');
            friendHolder.append(fFDiv, friendButton, sFDiv);
        }
        $('#lowerBox').append(friendHolder);
    }
}

class FriendsHTML extends UserBase{
    constructor(data){
        super(data);

    }
    listHTML(){
        let html = $('#myFriends');

        let friendDiv = $('<a>').addClass('transp flexer').attr('href', `../php/friends.php?friend=${this.id}`).html($('<div>').addClass('friendDiv').attr('id', `${this.id}`));

        let friendPic = $('<img>').attr('src', `${this.image}`);
        let friendName = $('<div>').html(this.username);

        friendDiv.append(friendPic, friendName);

        html.append(friendDiv);
    }
}