<?php
	ob_start(); 
    require_once "sections/header.php";
    require_once "assets/functions.php";
    if(!$isLoggedIn){
		header("Location: ../index.php");
		exit();
	}
	
	$leaders = [];
	$rest = [];
?>
<link rel="stylesheet" href="../style/worldranking.css">
<main>
	<div class="flexer" id="rankingMascot">
        <img src="../media/alien/LeaderboardAlien.png">
        <div id="talkingPoint"></div>
        <p class="mascotTalk">
            Oh, the leaderboard - Our well-fought champions of Starcade! Here you can see how you stack up to all the others who play our games. You can choose between seeing everyone or just your friends! Click on the buttons below to filter the leaderboard.
        </p>
	</div>
	<div id="rankingWrap">
		<div class="flexer" id="rankingControls">
			<form>
				<input type="hidden" name="filterRanking" value="all">
				<div class="btnHolder">
                    <div class="pBtn"></div>
                    <button class="pBtn" type="submit" id="filterRankingByAll">All</button>
                    <div class="pBtn"></div>
                </div>
			</form>
			<form>
				<input type="hidden" name="filterRanking" value="friends">
				<div class="btnHolder">
                    <div class="pBtn"></div>
                    <button class="pBtn" type="submit" id="filterRankingByFriends">Friends</button>
                   <div class="pBtn"></div>
                </div>
			</form>
		</div>
		<div class="transp">
			<?php
				//skapar element i leaderboard
				function rankingElement($sortedDatabase){
					global $leaders;
					global $rest;

					foreach($sortedDatabase as $index => $user){
						$rank = $index + 1;
						$leaderboardElmt = "<div class='transp wRanking_div' id='".$user["username"]."'>
								<span class='wRanking_placement'>".$rank."</span>
								<img class='wRanking_profilepic' src= '".$user["profileImg"]."'></span>
								<span class='wRanking_name'>".$user["name"]."</span>
								<span class='wRanking_tp'>".$user["totalPoints"]."</span>
						</div>";
						if($rank == 1 || $rank == 2 || $rank == 3){
							array_push($leaders, $leaderboardElmt);
						} else{
							array_push($rest, $leaderboardElmt);
						}
					}

					?>
					<div id="leaders">
					<?php 
						foreach($leaders as $user){
							echo $user;
					}
					?>
					</div>
					<div id="rest">
					<?php 
						foreach($rest as $user){
							echo $user;
					}
					?>
					</div>
					
				<?php
				}
			
				if(isset($_GET["filterRanking"])){
					$rankingValue = $_GET["filterRanking"];

					//Om get-parameterns värde är "friends", 
					//Lägg till / Ta bort klassen ranking_clicked på rätt element
					//anropar funktioner som sorterar array efter rank + skapat list-elementen
					if($rankingValue == "friends"){
					?>
						<script>
							document.getElementById("filterRankingByAll").classList.remove("ranking_ clicked");
							document.getElementById("filterRankingByFriends").classList.add("ranking_clicked");
						</script>
					<?php
							rankingElement(sortLeaderBoard($friends = true));
						}elseif($rankingValue == "all"){
					?>
						<script>
							document.getElementById("filterRankingByFriends").classList.remove("ranking_clicked");
							document.getElementById("filterRankingByAll").classList.add("ranking_clicked");
						</script>
					<?php
							rankingElement(sortLeaderBoard());
						}
					} else{
							?>
						<script>
							document.getElementById("filterRankingByFriends").classList.remove("ranking_clicked");
							document.getElementById("filterRankingByAll").classList.add("ranking_clicked");
						</script>
						<?php
							rankingElement(sortLeaderboard());
					}
				?>
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
