<?php
    ob_start(); 
    require_once 'sections/header.php';
    if(!$isLoggedIn){
        header("Location: ../index.php");
        exit();
    }
?>
    <link rel="stylesheet" href="../style/friends.css">
    <main>
        <section id="userBox">
            <div id="otherSpace"></div>
        </section>
        <section class="flexer" id="lowerBox"></section>
    </main>
</body>

<script> let userID = <?php echo $_SESSION["userID"]?>;</script>
<script src="../script/jquery-3.4.1.min.js"></script>
<script src="../script/data.js"></script>
<script> 
    let otherUserID = 
        <?php
            echo $_GET['friend'];
        ?>
</script>
<script src="../script/classes.js"></script>
<script src="../script/functions.js"></script>
<script src="../script/script.js"></script>
</html>