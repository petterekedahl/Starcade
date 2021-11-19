<?php error_reporting(-1); ?>
<?php
    session_start();
    require_once "../assets/functions.php";

    if (isset($_POST["username"]) && 
        isset($_POST["password"]) && 
        isset($_POST["favoriteGame"]) && 
        isset($_POST["name"]) &&
        isset($_POST["birthday"]) &&
        isset($_POST["pic"])) {

        $username = strtolower($_POST["username"]);
        $password = $_POST["password"];
        $favoriteGame = $_POST["favoriteGame"];
        $birthday = $_POST["birthday"];
        $name = $_POST["name"];
        $attrPost = $_POST["pic"];
    
        if ($username == "" || 
            $password == "" || 
            $favoriteGame == "" || 
            $_POST["choosePlanet"] == NULL ||
            $name == "" || 
            $birthday == "" ||
            $attrPost == "") {

            $error = "All fields must be filled out.";
            header("Location: ../register.php?registrations=$error");
            exit();
        } else {

            $homeplanet = $_POST["choosePlanet"];

            foreach ($database["users"] as $user) {
                if ($user["username"] == $username) {
                    $error = "Username already exists.";
                    header("Location: ../register.php?registrations=$error");
                    exit();
                }
            }
            $highestID = 0;

            foreach ($database["users"] as $user) {
                if ($user["userID"] > $highestID) {
                    $highestID = $user["userID"];
                }
            }
            
            $newUser = [
                "userID" => $highestID + 1,
                "username" => $username,
                "password" => $password,
                "name" => $name,
                "profileImg" => $attrPost,  
                "birthYear" => $birthday,
                "homeplanet" => $homeplanet,
                "favoriteGame" => $favoriteGame,
                "totalPoints" => 0,
                "friends" => []
            ];

            $database["users"][] = $newUser;

            $json = json_encode($database, JSON_PRETTY_PRINT);
            file_put_contents($databaseFile, $json);
            $ok = "Great! Now all you have to do is log in";
            header("Location: ../../index.php?registrations=$ok");
            exit();
        }
    }
?>
