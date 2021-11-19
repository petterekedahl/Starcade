<?php error_reporting(-1); ?>
<?php
    session_start();
    require "../assets/functions.php";
    
    if (isset($_POST["userName"]) && isset($_POST["password"])) {
        $username = strtolower($_POST["userName"]);
        $password = $_POST["password"];
        if ($username == "" || $password == "") {
            $error = "You need to fill both field";
        } else {
            $user = validateUser($username, $password);
            
            // om allt gått bra
            if ($user !== false) {
                $_SESSION["userID"] = $user["userID"];
                header("Location: ../commonspace.php?isLoggedIn=true");
                exit();
            } else {
                $error = "Username or password are invalid";
                header("Location: ../../index.php?error=$error");
                exit();
            }
        }
        
    }

    // annars skicka användaren till index.php med ett error meddelande
    $error = "Something went wrong, please try again!";
    header("Location: ../../index.php?error=$error");
    exit();
?>