var randomToGuess = randomRange(19, 120);


var randomGreenCrystal = randomRange(1, 12);

var randomRedCrystal = randomRange(1, 12);

var randomYellowCrystal = randomRange(1, 12);

var randomBlueCrystal = randomRange(1, 12);


var greenCounter = randomGreenCrystal;

var redCounter = randomRedCrystal;

var yellowCounter = randomYellowCrystal;

var blueCounter = randomBlueCrystal;

var counter = 0;

var wins = 0;

var losses = 0;


function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

function win() {
	$("#score-wins").text("Wins: " + (++wins));
}

function lose() {
	$("#score-losses").text("Losses: " + (++losses));
}

function newGame() {
	counter = 0;
	randomToGuess = randomRange(19, 120);
	randomGreenCrystal = randomRange(1, 12);
	randomRedCrystal = randomRange(1, 12);
	randomYellowCrystal = randomRange(1, 12);
	randomBlueCrystal = randomRange(1, 12);
	greenCounter = randomGreenCrystal;
	redCounter = randomRedCrystal;
	yellowCounter = randomYellowCrystal;
	blueCounter = randomBlueCrystal;
	$("#score-to-match").text("Match this score: " + randomToGuess);
	$("#player-score").text("Your score is: " + counter);
}



$("#score-to-match").text("Match this score: " + randomToGuess);




$("#green-crystal").on("click", function() {

	counter = greenCounter + counter;

    $("#player-score").text("Your score is: " + counter);

    if (counter === randomToGuess) {
		win();
		newGame();
	} 
	else if (counter > randomToGuess) {
		lose();
		newGame();
	}

});

$("#red-crystal").on("click", function() {

	counter = redCounter + counter;

    $("#player-score").text("Your score is: " + counter);

    if (counter === randomToGuess) {
		win();
		newGame();
	} 
	else if (counter > randomToGuess) {
		lose();
		newGame();
	}

});

$("#yellow-crystal").on("click", function() {

	counter = yellowCounter + counter;

    $("#player-score").text("Your score is: " + counter);

    if (counter === randomToGuess) {
		win();
		newGame();
	} 
	else if (counter > randomToGuess) {
		lose();
		newGame();
	}

});

$("#blue-crystal").on("click", function() {

	counter = blueCounter + counter;

    $("#player-score").text("Your score is: " + counter);

    if (counter === randomToGuess) {
		win();
		newGame();
	} 
	else if (counter > randomToGuess) {
		lose();
		newGame();
	}

});
