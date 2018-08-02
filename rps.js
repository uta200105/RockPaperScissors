var database = firebase.database();

// Enter Name
$("#add").on("click", function (event) {
    event.preventDefault();
  
    var name = $("input").val().trim();
    $("input").val('');
    console.log(name)

  if (name === "") {
    alert("Please enter your name");
  } else {
    $("#playerOne").html(name);
   
  }
})

var compScore = 0;
var playerScore = 0;
//Button Choice and check after each choice
$("#bRock").on("click", function () {
	var compChoice=getcompChoice();
	checkWhoWon(compChoice,"rock");
})

$("#bPaper").on("click", function () {
	var compChoice=getcompChoice();
	checkWhoWon(compChoice,"paper");
})

$("#bScissors").on("click", function () {
	var compChoice=getcompChoice();
	checkWhoWon(compChoice,"scissors");
})
  
// Computer's choice function
function getcompChoice(){
	var randomNumber=Math.random();
  var compChoice="rock";
	if(randomNumber<.2){
    compChoice="scissors";
	}
	else if(randomNumber<.4){
		compChoice="paper";
	}
	return compChoice;
}
// Check who won, alerts choices, and increase score
function checkWhoWon(compChoice,playerOneChoice){
	if(compChoice===playerOneChoice){
		alert("You chose " + playerOneChoice);
		alert("The computer chose " + compChoice);
		alert("There was tie");
	}
	else if(
		(compChoice==="scissors" && playerOneChoice==="paper") ||
		(compChoice==="paper" && playerOneChoice==="rock") ||
		(compChoice==="rock" && playerOneChoice==="scissors") 
		){
		alert("You chose " + playerOneChoice);
		alert("The computer chose " + compChoice);
		increaseCompScore();
	}
	else{
		alert("You chose " + playerOneChoice);
		alert("The computer chose " + compChoice);
		increasePlayerScore();
	}
}
// message when player losses
function increaseCompScore(){
	compScore+=1;
	$("#scoreTwo").text(compScore);
	alert("Sorry, you lost");
}
// message when player wins
function increasePlayerScore(){
	playerScore+=1;
	$("#scoreOne").text(playerScore);
	alert("You won");
}