var target;
var color = ["azure", "black", "blue", "brown", "cyan", "gold", "green", 
			"gray", "magenta", "navy", "orange", "pink", "red", 
			"silver", "violet", "yellow"];
var guessInput;
var index;
var finished = false;
var count = 0;

function do_game() {
	var random_num = Math.floor(Math.random() * 16);
	color.sort();
	target = random_num;
	alert(color[target]);
	while (!finished) {
		guessInput = prompt("I am thinking of one of these colors\n\n" 
			+ color + "\n\nWhat color am I thinking of?");
		index = color.indexOf(guessInput);
		count++;
		finished = check_guess();
	}
}

function check_guess() {
	if (index < 0)
		alert("I do not recognize that color!");
	else if (index < target)
		alert("Your input is alphabetically lower than mine!");
	else if (index > target)
		alert("Your input is alphabetically higher than mine!");
	else {
		alert("You are right! You took " + count + " guesses!");
		return true;
	}
	return false;
}