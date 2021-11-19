<?php
    require_once 'sections/header.php';
    
    if (isset($_SESSION["userID"])) {
      $userID = $_SESSION["userID"];
    } else {
      $userID = "undefined";
    }
?>
    <link rel="stylesheet" href="../style/gamescreen.css"> 
    <main>
      <div id="cabinet">
       	 <div class="transp gamePopUp" id="gameStart">
            <section>
              <!-- title and paragrapgh sets dynamically in commonScript.js -->
            </section>
            <section>
              <div class="btnHolder">
                <div class="pBtn"></div>
                <button class="pBtn" id="startGameBtn">Start game</button>
                <div class="pBtn"></div>
              </div>
            </section>
        </div>
        <div class="transp flexer gamePopUp" id="warning">
          <section class="flexer">
            <h1>! WARNING !</h1>
            <p>If you quit now you won't earn any points!</p>
            <p>Are you sure you want to quit?</p> 
          </section>
          <section>
            <div class="btnHolder">
              <div class="nBtn"></div>
              <button id="warningNegBtn" class="nBtn">No</button>
              <div class="nBtn"></div>
            </div>
            <div class="btnHolder">
              <div class="pBtn"></div>
              <a class="pBtn" href="gamecorner.php">Yes</a>
              <div class="pBtn"></div>
            </div>
          </section>
        </div>
        <div class="transp flexer gamePopUp" id="gameOver">
          <section class="flexer">
            <h1>Great job!</h1>
            <h2>Game points:</h2>
            <p id="finalPts"></p>
          </section>
          <section>
            <div class="btnHolder">
              <div class="pBtn"></div>
              <a class="pBtn" href="gamecorner.php">Play another game</a>
              <div class="pBtn"></div>
            </div>
            <div class="btnHolder">
              <div class="pBtn"></div>
              <button id="playAgainBtn" class="pBtn">Play again</button>
              <div class="pBtn"></div>
            </div>
          </section>
        </div>
        <div id="cabinetTop"></div>
        <div id="cabinetLSide"></div>
        <div id="cabinetRSide"></div>
        <div id="cabinetBottom"></div>
        <div id="gameScreen"></div>
      </div>
      <div class="transp flexer" id="info">
        <section>
          <h2>Time</h2>
          <p id="timeP"></p>
        </section>
        <section>
          <h2>Current score</h2>
          <p id="currScoreP">0</p>
        </section>
        <section>
          <h2>High score</h2>
          <p id="highScoreP"></p>
        </section>
      </div>
    </main>

    <?php 
    // Get-key is game, Get-value is either yatzy, quiz, shooter, memory
      $gameParam = $_GET["game"];
      switch ($gameParam){
        case 0:
          ?>
          <link rel="stylesheet" href="../style/cssGames/yatzy/style.css">
          <script src="../script/jquery-3.4.1.min.js"></script>
          <script src="../script/games/yatzy/data.js"></script>
          <script src="../script/games/yatzy/scriptAux.js"></script>
          <script src="../script/games/yatzy/script.js"></script>
          <?php
          break;

        case 2:
          ?>
          <link rel="stylesheet" href="../style/cssGames/quiz/game.css">
          <script src="../script/jquery-3.4.1.min.js"></script>
          <script src="../script/games/quiz/data.js"></script>
          <script src="../script/games/quiz/gamefiller.js"></script>
          <?php
          break;

        case 1:
          ?>
          <link rel="stylesheet" href="../style/cssGames/shooter/style.css">
          <script src="../script/jquery-3.4.1.min.js"></script>
          <script src="../script/games/shooter/functions.js"></script>
          <script src="../script/games/shooter/script.js"></script>
          <?php
          break;

        case 3:
          ?>
          <link rel="stylesheet" href="../style/cssGames/memory/variables.css">
          <link rel="stylesheet" href="../style/cssGames/memory/game.css">
          <script src="../script/jquery-3.4.1.min.js"></script>
          <script src="../script/games/memory/data.js"></script>
          <script src="../script/games/memory/game.js"></script>
          <?php
          break;
      }
    ?>
  </body>

  <script> 
    let userID = <?echo $userID?>
  </script> 
  <script src="../script/jquery-3.4.1.min.js"></script>
  <script src="../script/data.js"></script>
  <script src="../script/functions.js"></script>
  <script src="../script/script.js"></script>
  <script src="../script/games/commonScript.js"></script>
</html>