<?php
    ob_start(); 
    require_once 'sections/header.php';
    if(!$isLoggedIn){
        header("Location: ../index.php");
        exit();
    }
    require_once 'assets/functions.php';
    if (isset($_SESSION["array"])) {
        $searchArray = $_SESSION["array"];
    }
    if (isset($_SESSION["searchResult"])) {
        $searchResult = $_SESSION["searchResult"];
    }
    $userID = $_SESSION["userID"];
?>
<link rel="stylesheet" href="../style/commonspace.css">
<main>
    <div id="planets"> <!--Alla planeter, (förslag)dessa skulle man kunna skapa i en grid med grid area.-->
    </div>
    <div class="flexer" id="popUpMaskot">
        <img src="../media/alien/CommonSpaceAlien.png">
        <div id="talkPoint"></div>
        <p class="mascotTalk">
            Welcome to Common Space! This is where you’re able to see what planets there are and befriend the people who live on them. Move your mouse to discover a planet and click to see inhabitants. Use the controls below to see everything at once.
        </p>
    </div>
    <div class="transp" id="popupSearch">
        <nav class="flexer">
            <div>
            <?if (isset($_GET["search"])) {?>
                <h3>Your search matched <?echo count($searchArray)?> friends</h3>
            <?} elseif (isset($_GET["error"])) {?>
                <h3></h3>
            <?} else {?>
                <h2>Name: <span id="planet"></span></h2>
                <h2>Population: <span id="pop"></span></h2>
            <?}?>
            </div>
            <div class="flexer" id="cross">
                <h1>+</h1>
            </div>
        </nav>
        <div class="flexer" id="wrapFriends">
            <?if (isset($_GET["search"])) {
                foreach($searchArray as $key) { ?>
                    <script>var popUp = document.getElementById('popupSearch')
                                popUp.style.display = "block";
                    </script>
                    <div class="transp flexer foundUser">
                        <div class="flexer">
                            <img src="<?echo $key["profileImg"]?>">
                            <h2> <?echo $key["username"]?> </h2>
                        </div>
                        <div>
                            <h3> Full Name: <span><?echo $key["name"]?></span></h3>
                            <h3> Favorite Game: <span><?echo $key["favoriteGame"]?></span> </h3>
                            <h3> Homeplanet: <span><?echo $key["homeplanet"]?></span> </h3>
                            <h3> Score: <span><?echo $key["totalPoints"]?></span> </h3>
                        </div>
                      
                        <!-- kolla om personen vars id i sökresultatet finns med bland Användarens vänner -->
                        <?forEach($database["users"] as $index => $user){
                            if($user["userID"] == $userID){
                                $foundFriend = in_array($key["userID"], $database["users"][$index]["friends"]);
                            }
                        }
                        // om det gör det, lägg till en knapp remove friend
                        if ($foundFriend) { ?>
                            <div class="btnHolder">
                                <div class="nBtn"></div>
                                    <button class="nBtn friends" id="<?echo $key["userID"]?>">Remove friend</button>
                                <div class="nBtn"></div>
                            </div>
                        <?  // annars lägg till en knapp Add friend
                        } else { ?>
                            <div class="btnHolder">
                                <div class="pBtn"></div>
                                    <button class="pBtn notFriends" id="<?echo $key["userID"]?>">Add friend</button>
                                <div class="pBtn"></div>
                            </div>
                        <?}?>
                    </div>
                <?}?>
            <?} elseif (isset($_GET["error"])) { ?>
                <script>var popUp = document.getElementById('popupSearch')
                            popUp.style.display = "block";
                </script>
                <h3>Your search - <?echo $searchResult;?> - did not match any friends</h3>
            <?}?>
        </div> 
    </div>
    <div class="transp flexer boxxx" id="controls">
        <form action="admin/friendreceiver.php" method="POST">
            <div class="inputHolder">
                <div class="inputEle"></div>
                <input class="inputEle" name="searchFriend" type="text" placeholder="Search for name">
                <div class="inputEle"></div>
            </div> 
        </form>
      <div class="boxxx"> <!--rutan för att ta bort hovereffekten-->
          <input type="checkbox" id="disable" name="disable">
          <label for="disable">Show planets</label> 
      </div>
    </div> 
</main>  

<script> let userID = <?php echo $userID?>;</script>
<script src="../script/jquery-3.4.1.min.js"></script>
<script src="../script/data.js"></script>
<script src="../script/functions.js"></script>
<script src="../script/script.js"></script>
</body>
</html>