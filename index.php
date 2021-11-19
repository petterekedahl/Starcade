<?php
    ob_start();
    require_once 'php/sections/header.php';
    if($isLoggedIn) {
        header("Location: php/commonspace.php");
        exit();
    }
?>
    <link rel="stylesheet" href="style/index.css">
    <main>
        <div class="flexer">
            <div class="flexer" id="welcomeMessage">
                <h1>Welcome to</h1>
                <img src="media/Logo.png">
                <p>
                    This universe is also an arcade! Sign up or log in to play games and if you are lucky, your scores will end up at the top of the World Ranking.   If not, add friends and compete against each other on the scoreboard. Good luck!
                </p>
            </div>
            <div class="flexer">
                <div class="flexer transp" id="wrapForm">
                    <?if (isset($_GET["registrations"])) { ?>
                        <p class="ok"><?echo $_GET["registrations"];?></p>
                    <?} elseif (isset($_GET["error"])) { ?>
                        <p class="error"><?echo $_GET["error"];?></p>
                    <?}?>
                    <form class="flexer" action="php/admin/login.php" id="loginform" method="POST">
                        <div class="inputHolder">
                            <div class="inputEle"></div>
                            <input class="inputEle" type="text" name="userName" placeholder="Username">
                            <div class="inputEle"></div>
                        </div>
                        <div class="inputHolder">
                            <div class="inputEle"></div>
                            <input class="inputEle" type="password" name="password" placeholder="Password">
                            <div class="inputEle"></div>
                        </div>
                        <div class="btnHolder">
                            <div class="pBtn"></div>
                            <button class="pBtn" type="submit">Log in</button>
                            <div class="pBtn"></div>
                        </div>
                    </form>
                    <div class="btnHolder">
                        <div class="pBtn"></div>
                        <button class=" pBtn signUp" onclick="location.href='php/register.php'">Sign up</button>
                        <div class="pBtn"></div>
                    </div>
                </div>
                <div class="btnHolder">
                    <div class="pBtn"></div>
                    <button class="skip pBtn" onclick="location.href='php/gamecorner.php'">Skip</button>
                    <div class="pBtn"></div>
                </div>
            </div>
      </div>
      <div class="flexer" id="popUpMaskotIndex">
        <p class="mascotTalk">I’m Allan and I’ll guide you! Login to compete in the World Ranking! Click this button if you just want to play our games for fun!</p>
        <div id="talkPoint"></div>
        <img src="media/alien/LoginAlien.png">
      </div>
    </main>

    <script>    
        let userID = "undefined";
    </script> 
    <script src="/script/jquery-3.4.1.min.js"></script>
    <script src="/script/data.js"></script>
    <script src="/script/functions.js"></script>
    <script src="/script/script.js"></script>
</body>
</html>