<?php error_reporting(-1); ?>
<?php
    session_start();
    if ($_SERVER["SCRIPT_NAME"] == "/index.php" || $_SERVER["SCRIPT_NAME"] == "/starcade/index.php") { 
        require_once "php/assets/functions.php";
    } else {
        require_once "assets/functions.php";
    }
    $isLoggedIn = isset($_SESSION["userID"]);

    function aLink($href, $text, $id = "") {
        // om användaren är inne på tex index.php så ska den a länken i naven (hamburgaremenyn)
        // ha en klass(med rules som ex underscore) för att användaren ska kunna se vart han är inne någonstans.  
        if ($href === $_SERVER["SCRIPT_NAME"]) {
            return "<a class='active' href='$href'>$text</a>";
        }
        return "<a id='$id' href='$href'>$text</a>";
    }

    $username = "";

    // om användaren är inloggad så hämtar vi användarnamnet + totalpoints som vi sedan kan lägga till på sidan. 
    if ($isLoggedIn) {
        $username =  getInfoAboutUserById($_SESSION["userID"], "userName");
        $totalPoints = getInfoAboutUserById($_SESSION["userID"], "totalPoints");
    }
    $scriptNameToString = strval($_SERVER["SCRIPT_NAME"]);
    $firstCharactersScriptName = substr($scriptNameToString, 0, 4);
?>
<!doctype html>
<html>
    <head>
        <title>Starcade</title>
        <meta charset="utf-8">
        
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style/style.css">
        <link rel="stylesheet" href="../style/nav.css">
        <link rel="icon" href="../media/alien/icon.png">
        
    </head>
    <body>
        <header>
            
        </header>
        <nav>
          <?if ($isLoggedIn) {?>
						<div class="flexer" id="loggedinInfo">
                            <div>
								<span><?echo $username?></span>
								<span><?echo $totalPoints?></span>
                            </div>
                            <div>
                            </div>
						</div>
          <?php } ?>
           <div id="hamClosed">
							<input id="hamCheckbox" type="checkbox">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div id="hamOpen">
								<div id="hamOpenContent">
									<!-- Om man är inloggad-->
									<?php if ($isLoggedIn) {
                                            if ($firstCharactersScriptName == "/php") {
                                                    echo aLink("/php/commonspace.php", "Commonspace");
                                                    echo aLink("/php/myspace.php", "Myspace");
                                                    echo aLink("/php/gamecorner.php", "Game Corner");
                                                    echo aLink("/php/worldranking.php", "World Ranking");
                                                    echo aLink("/php/aboutus.php", "About us");
                                                    echo aLink("admin/logout.php", "Log out", "logout"); 
                                            } else {
                                                    echo aLink("/starcade/php/commonspace.php", "Commonspace");
                                                    echo aLink("/starcade/php/myspace.php", "Myspace");
                                                    echo aLink("/starcade/php/gamecorner.php", "Game Corner");
                                                    echo aLink("/starcade/php/worldranking.php", "World Ranking");
                                                    echo aLink("/starcade/php/aboutus.php", "About us");
                                                    echo aLink("/starcade/php/admin/logout.php", "Log out", "logout");
                                            }

										} else {
                                            if ($firstCharactersScriptName == "/php" || $firstCharactersScriptName == "/ind") {
                                                    if ($_SERVER["SCRIPT_NAME"] == "/php/gamecorner.php" || $_SERVER["SCRIPT_NAME"] == "/php/register.php" || $_SERVER["SCRIPT_NAME"] == "/php/gamescreen.php") {
                                                            echo aLink("../index.php", "Log in");

                                                    } elseif($_SERVER["SCRIPT_NAME"] == "/index.php")  {
                                                            echo aLink("php/gamecorner.php", "Game Corner");
                                                    }
                                            } else {
                                                    if ($_SERVER["SCRIPT_NAME"] == "/starcade/php/gamecorner.php" || $_SERVER["SCRIPT_NAME"] == "/starcade/php/register.php" || $_SERVER["SCRIPT_NAME"] == "/starcade/php/gamescreen.php") {
                                                            echo aLink("../index.php", "Log in");
                                                    } elseif($_SERVER["SCRIPT_NAME"] == "/starcade/index.php") {
                                                            echo aLink("/starcade/php/gamecorner.php", "Game Corner");
                                                    }
                                            }
										}      
										?>
            		</div>
            	</div>
        </nav>
    <script src="/script/jquery-3.4.1.min.js"></script>
    <script src="/script/nav.js"></script>