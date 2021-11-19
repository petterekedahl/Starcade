<?php error_reporting(-1); ?>
<?php
    session_start();
    $mainUserID = $_SESSION["userID"];
    
    require "functions.php";
    $method = $_SERVER["REQUEST_METHOD"];
    
    if (!in_array($method, ["GET", "POST", "PATCH", "DELETE"])) {
        abort(405, "Only GET, POST, PATCH and DELETE allowed");
    }
    
    if ($method != "GET") {
        copy("database.json","backupFile.json");
    }

    // API METHODS
    switch ($method) {
        case "GET": 
            send($database);
            break;
        
        case "POST":
            $data = file_get_contents("php://input");
            $friendID = json_decode($data, true);

            $found = false;

            for ($i = 0; $i < count($database["users"]); $i++) {
                if ($database["users"][$i]["userID"] == $mainUserID) { 
                    $found = true;
                    if (in_array($friendID, $database["users"][$i]["friends"])) {
                        $key = array_search($friendID, $database["users"][$i]["friends"]);
                        array_splice($database["users"][$i]["friends"], $key, 1);
                    } else {
                        $database["users"][$i]["friends"][] = $friendID;
                    }                
                }
            }
            
            if ($found == false) {
                abort(400, "Something went wrong while adding: $friendID to friendslist");
            }
            
            $newjson = json_encode($database, JSON_PRETTY_PRINT);
            file_put_contents($databaseFile, $newjson);
            send(["friendID" => $friendID]);
            exit();
        
        case "DELETE":
            $data = file_get_contents("php://input");
            $json = json_decode($data, true);
            $id = $json["id"];

            $found = false;
            foreach ($database["users"] as $index => $user) {
                if ($user["userID"] == $id) {
                    $found = true;
                    array_splice($database["users"], $index, 1);
                }
            }
            if ($found == false) {
                abort(400, "Something went wrong while deleting: $id");
            }
        
            $deletejson = json_encode($database, JSON_PRETTY_PRINT);
            file_put_contents($databaseFile, $deletejson);
            unset($_SESSION["userID"]);
            session_destroy();
            send(["id" => $id]);
            exit();

        case "PATCH":
            $data = file_get_contents("php://input");
            $json = json_decode($data, true);
            $name = $json["name"];
            $profileIMG = $json["profileImg"];
            $homeplanet = $json["homeplanet"];
            $favoriteGame = $json["favoriteGame"];
            $totalPoints = $json["totalPoints"];

            $time = $json["time"];
            $highscore = $json["highscore"];
            $scoreID = $json["scoreID"];

            $found = false;
            // loopa igenom databasen för att hitta userID. sedan uppdatera hela databasen users
            // med ändringarna som kommit in från js

            for ($i = 0; $i < count($database["users"]); $i++) {
                if ($database["users"][$i]["userID"] == $mainUserID) { 
                    $found = true;
                    
                    if (!$name == null) {
                        $database["users"][$i]["name"] = $name;
                    }
                    if (!$profileIMG == null) {
                        $database["users"][$i]["profileImg"] = $profileIMG;
                    }
                    if (!$homeplanet == null) {
                        $database["users"][$i]["homeplanet"] = $homeplanet;
                    }
                    if (!$favoriteGame == null) {
                        $database["users"][$i]["favoriteGame"] = $favoriteGame;
                    }
                    if (!$totalPoints == null) {
                        $database["users"][$i]["totalPoints"] += $totalPoints;
                    }
                    
                }
            }
            
            if (!$scoreID == null) {
                for ($i = 0; $i < count($database["score"]); $i++) {
                    if($database["score"][$i]["scoreID"] == $scoreID) {
                        $found = true;
                        
                        if ($highscore > $database["score"][$i]["highscore"]) {
                            $database["score"][$i]["highscore"] = $highscore;
                            $database["score"][$i]["time"] = $time;
                        }
                    }
                }
            }
            
            if ($found == false) {
                abort(400, "Something went wrong while patching: $json");
            }
            
            $newjson = json_encode($database, JSON_PRETTY_PRINT);
            file_put_contents($databaseFile, $newjson);
            send(["found" => $found]);
            exit();    
    }
?>