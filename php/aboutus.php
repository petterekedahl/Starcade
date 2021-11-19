<?php
    ob_start(); 
    require_once 'sections/header.php';
    if(!$isLoggedIn){
        header("Location: ../index.php");
        exit();
    }
?>
    <link rel="stylesheet" href="../style/abotus.css">
    <main>
        <div id="aboutGrid">
            <div class="aboutCrewDiv btnHolder" id="aboutJohannachristensson">
                <div class="pBtn"></div>
                <button class="pBtn">Johanna Christensson</button>
                <div class="pBtn"></div>
            </div>
            <div class="aboutCrewDiv btnHolder" id="aboutKarolinelindroos">
                <div class="pBtn"></div>
                <button class="pBtn">Karoline Lindroos</button>
                <div class="pBtn"></div>
            </div> 
            <div class="aboutCrewDiv btnHolder" id="aboutPetterekedahl">
                <div class="pBtn"></div>
                <button class="pBtn">Petter Ekedahl</button>
                <div class="pBtn"></div>
            </div> 
            <div class="aboutCrewDiv btnHolder" id="aboutLudvigstridsberg">
                <div class="pBtn"></div>
                <button class="pBtn">Ludvig Stridsberg</button>
                <div class="pBtn"></div>
            </div> 
            <div class="flexer" id="aboutInfoPlanet">
                <div>
                    <p>This website is the final project in the course ”Databasbaserad publicering” at Malmö University. Examiner is Erik Pineiro.</p>
                </div>
            </div> 
        </div>
    </main>
    
    <script> let userID = <?php echo $_SESSION["userID"]?>;</script>
    <script src="../script/jquery-3.4.1.min.js"></script>
    <script src="../script/data.js"></script>
    <script src="../script/functions.js"></script>
    <script src="../script/script.js"></script>
</body>
</html>