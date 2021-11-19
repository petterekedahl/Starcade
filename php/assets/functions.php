<?php error_reporting(-1); ?>
<?php
    $databaseFile = dirname(__FILE__) . "/database.json";

    if (file_exists($databaseFile)) {
        $data = file_get_contents($databaseFile);
        $database = json_decode($data, true);
    } else {
        die("This website is currently out of service! We're working on to get it up and running asap!");
    }

    // Abort a request
    function abort($statusCode = 400, $error = "Bad request") {
        http_response_code($statusCode);
        header("Content-Type: application/json");
        echo json_encode(["error" => $error]);
        exit();
    }

    // Send a JSON response
    function send($database, $statusCode = 200) {
        http_response_code($statusCode);
        header("Content-Type: application/json");
        echo json_encode(["data" => $database]);
        exit();
    } 


    // Validate user
    function validateUser($username, $password) {
        global $database;
        foreach ($database["users"] as $user) {
            if ($user["username"] == $username && $user["password"] == $password) {
                return $user;
            }
        }
        return false;
    }

    // Get totalPoints or Username by ID
    function getInfoAboutUserById($id, $value) {
        global $database;
        if ($value == "userName") {
            foreach ($database["users"] as $user) {
                if ($user["userID"] == $id) {
                    return $user["username"];
                }
            }
        } else{
            foreach ($database["users"] as $user) {
                if ($user["userID"] == $id) {
                    return $user["totalPoints"];
                }
            }
        }
        return false;
    }

    function sortLeaderBoard($friends = false){
        global $database;
        $userArr = $database["users"];

        if($friends == false){
            //sortera ALLA databasens "users" efter rank
            usort($userArr, "comparator");
            return $userArr;
        }elseif($friends !== false){
            //sortera INLOGGAD ANVÄNDARES friends efter rank
            $mainUserFriendsObjArr = [];
            foreach($userArr as $user){
                //hitta inloggad användare
                if($user["userID"] == $_SESSION["userID"]){
                    //lägga till sig själv i Friends-filtret
                    $mainUserFriendsObjArr[] = $user;
                    //gå igenom inloggad användares friends-array
                    foreach($user["friends"] as $friendsID){
                        //gå igenom databasens "users" för att lägga
                        //till hela objektet för andra användare ifall
                        //id:et stämmer överens med det som finns i 
                        //inloggad användares friends-array
                        foreach($userArr as $user){
                            if($user["userID"] == $friendsID){
                                $mainUserFriendsObjArr[] = $user;
                            }
                        }
                    }
                }
            }
            //sortera $mainUserFriendsObjArr efter rank
            usort($mainUserFriendsObjArr, "comparator");
            return $mainUserFriendsObjArr;
        }
    }

    function comparator($a, $b){
        if($a["totalPoints"] == $b["totalPoints"]){
            return 0;
        }
        return ($a["totalPoints"] > $b["totalPoints"]) ? -1 : 1;
    }

    // search if a value exists in array
    function isUserIn($array, $value) {
        for ($i = 0; $i < count($array); $i++) {
            if ($value == $array[$i]["username"]) {
                return true;
            } 
        }
        return false;
    }

    // search if a value exists in a string
    function strSearch($strToSearch, $srtToFind){
        // Loop all characters in $strToSearch
        for ($i = 0; $i < strlen($strToSearch); $i++) {
            // if the current character equals the first character of $srtToFind
            if ($strToSearch[$i] == $srtToFind[0]){
                // search for pattern in $srtToFind
                $nMatches = 0;  
                for ($j = 0; $j < strlen($srtToFind); $j++) {
                    if (($i+$j) < strlen($strToSearch)){
                        if ($strToSearch[$i+$j] == $srtToFind[$j]){
                            $nMatches += 1;
                        } else{
                            break;
                        }
                    }
                }
                if ($nMatches == strlen($srtToFind)){
                    return true;
                }
            }
        }
        return false;
    }
?>