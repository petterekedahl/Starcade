<?php error_reporting(-1); ?>
<?php
    session_start();
    require_once "../assets/functions.php";

    $mainUser = $_SESSION["userID"];
    $userArray = [
        "users" => []
    ];

    if (isset($_POST["searchFriend"])) {
        $searchAfter = $_POST["searchFriend"];
        // spara det användaren har söt på i session som vi sedan kan använda på sidan.
        $_SESSION["searchResult"] = $searchAfter;

        // spara en array med de keys som vi söker igenom databasen med för att matcha friends
        $props = ["username", "name", "homeplanet", "favoriteGame"];
        for ($i = 0; $i < count($database["users"]); $i++) {
            // om id i databasen matchar den som är inloggad, skippa att inkludera denne
            if($database["users"][$i]["userID"] != $mainUser) {
                
                // loopa igenom props 
                for ($j = 0; $j < count($props); $j++) {
                    // kolla om värdet i databasen matchar med det som användaren har sökt efter
                    $output = strSearch(strtolower($database["users"][$i][$props[$j]]), strtolower($searchAfter));
                    // om output är true
                    if ($output){  
                        $username = $database["users"][$i]["username"];
                        // kolla om användarnamnet på den person som hittats i sökresultaten redan finns i userArray
                        // för att unvika att det ploppar upp dubletter av användaren vid sökresultaten på sidan. 
                        $key = isUserIn($userArray["users"], $username);
                        // om användaren inte finns med lägg till i userArray och spara sedan i session så vi kan 
                        // använda den arrayen på sidan sedan.
                        if (!$key) {
                            $user = [
                                "userID" => $database["users"][$i]["userID"],
                                "username" => $database["users"][$i]["username"],
                                "name" => $database["users"][$i]["name"],
                                "profileImg" => $database["users"][$i]["profileImg"],
                                "homeplanet" => $database["users"][$i]["homeplanet"],
                                "favoriteGame" => $database["users"][$i]["favoriteGame"],
                                "totalPoints" => $database["users"][$i]["totalPoints"]
                            ];
                            $userArray["users"][] = $user;
                            $_SESSION["array"] = $userArray["users"];
                        }              
                    } 
                }
            }
        } 
        // om userArray är tom, vilket innebär att det inte finns någon match 
        // skicka med en GET parameter error som vi kan använda oss av på sidan sen 
        if (count($userArray["users"]) == 0) {
            header("Location: ../commonspace.php?error=negative");
            exit();
            // annars skicka med en GET parameter search
        } else{
            header("Location: ../commonspace.php?search=active");
            exit();
        }
    }
?>