'use strict'
let randomloc = Math.floor(Math.random() * 6);
let location1 = randomloc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready , aim, fire! (enter a number from 0-7) : ");
	if (guess < 0 || guess > 7) {
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			alert("HIT!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("you sank my battleships!");
			}
		} else {
			alert("MISS!");
		}
	}
}
/*let stats = "You took " + guesses + " guesses to sink the battleship, " +
	"which means your shooting accuracy was " + (3 / guesses);*/
alert(stats);



function bark(name, weight) {
	if (weight > 20) {
		console.log(name + " says WOOF WOOF");
	} else {
		console.log(name + " says woof woof");
	}
}
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);