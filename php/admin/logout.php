<?php error_reporting(-1); ?>
<?php
    session_start();
    unset($_SESSION["userID"]);
    session_destroy();
    header("Location: ../../index.php");
    exit();
?>