<?php
    ob_start(); 
    require_once 'sections/header.php';
    if(!$isLoggedIn){
        header("Location: ../index.php");
        exit();
    }
?>
    <link rel="stylesheet" href="../style/myspace.css">
    <main>
        <section class="flexer" id="userBox">
            <div class="transp" id="userFriendsBox">
                <h2>Friends</h2>
                <div id="myFriends"></div>
            </div>
            <div id="mySpace"></div>
        </section>
        <div class="flexer" id="lowerBox">
            <div class="transp" id="userScores">
                <p id="totalPoints">Total Points: <span></span></p>
            </div>
            <div class="btnHolder">
                <div class="nBtn"></div>
                <button class="nBtn deleteAcc">Delete Account</button>
                <div class="nBtn"></div>
            </div>
        </div>
    </main>
</body>

<script> let userID = <?php echo $_SESSION["userID"];?>;</script>
<script src="../script/jquery-3.4.1.min.js"></script>
<script src="../script/data.js"></script>
<script src="../script/classes.js"></script>
<script src="../script/functions.js"></script>
<script src="../script/script.js"></script>
</html>