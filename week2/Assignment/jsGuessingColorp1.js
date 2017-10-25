var target;
var color = ["azure", "black", "blue", "brown", "cyan", "gold", "green", 
			"gray", "magenta", "navy", "orange", "pink", "red", 
			"silver", "violet", "yellow"];
var guessInput;
var index;
var finished = false;

function do_game() {
	var random_num = Math.floor(Math.random() * 16);
	target = random_num;
	while (!finished) {
		guessInput = prompt("I am thinking of one of these colors\n\n" 
			+ color + "\n\nWhat color am I thinking of?");
		index = color.indexOf(guessInput);
		if (index == target) {
			finished = true;
		}
	}

}

