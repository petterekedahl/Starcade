<?php
    require_once 'sections/header.php';
?>
<link rel="stylesheet" href="../style/register.css">
<main>
    <div class="flexer">
        <form class="flexer" method="POST" action="admin/receiver.php">
            <div id="ticket">
                <div class="flexer" id="registerTitle">
                    <img id="registerLogo" src="../media/BlackLogo.png" alt="Starcade">
                    <span id="strecket">|</span>
                    <h2>Admission</h2>
                </div>
              <div id="firstRow">
                  <?if (isset($_GET["registrations"])) { ?>
                      <p class="error"><?echo $_GET["registrations"];?></p>
                  <?}?>
                    <div id="firstRow">
                        <div class="inputHolder">
                            <div class="inputEle"></div>
                            <input class="inputEle" name="username" placeholder="Username">
                            <div class="inputEle"></div>
                        </div>
                        <div class="inputHolder">
                            <div class="inputEle"></div>
                            <input class="inputEle" name="password" placeholder="Password" type="password">
                            <div class="inputEle"></div>
                        </div>
                    </div>
              </div>
              <div id="secondRow">
                  <div class="inputHolder">
                      <div class="inputEle"></div>
                      <select id="choosePlanet" name="choosePlanet">
                          <option value="" disabled selected>Select a home planet</option>
                          <option value="Mercury">Mercury</option>
                          <option value="Venus">Venus</option>
                          <option value="Earth">Earth</option>
                          <option value="Mars">Mars</option>
                          <option value="Jupiter">Jupiter</option>
                          <option value="Saturn">Saturn</option>
                          <option value="Neptune">Neptune</option>
                          <option value="Uranus">Uranus</option>
                          <option value="Pluto">Pluto</option>
                      </select>
                      <div class="inputEle"></div>
                  </div>
                      <div class="inputHolder">
                          <div class="inputEle"></div>
                          <input class="inputEle" name="favoriteGame" placeholder="Favorite Game">
                          <div class="inputEle"></div>
                      </div>
              </div>
              <div class="flexer" id="selectBirthday">
                  <label>Birthday:</label>
                  <div class="inputHolder">
                      <div class="inputEle"></div>
                      <input class="inputEle" name="birthday" type="date">
                      <div class="inputEle"></div>
                  </div>
              </div>
              <div class="flexer" id="thirdRow">
                  <div class="flexer" id="selectName">
                      <div class="inputHolder">
                          <div class="inputEle"></div>
                          <input class="inputEle" name="name" type="text" placeholder="Full name">
                          <div class="inputEle"></div>
                      </div>
                  </div>
                  <div class="btnHolder">
                      <div class="pBtn"></div>
                      <button class="pBtn" type="submit" id="submitButton">Enter</button>
                      <div class="pBtn"></div>
                  </div>
              </div>
          </div>
              <div class="transp" id="chooseAPic">
                  <h2>Choose a profile picture</h2>
                  <div id="pictureGrid">
                      <? $path    = '../media/profileimages/*.png';
                         // $files är en array med bilderna
                         $files = glob($path);
                      for($i = 0; $i < count($files); $i++) { ?>
                          <div class="<?echo $i?>"><img src=<?echo $files[$i]?> ></div>
                      <?}?>
                  </div>
                  <input type="hidden" id="pic" name="pic">
              </div>
        </form>
    </div>
</main>
</body>
<script src="../script/jquery-3.4.1.min.js"></script>
<script src="../script/functions.js"></script>
</html>