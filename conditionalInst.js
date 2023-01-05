'use strict'

let val = 10;
if (val < 5) {
	val += 20;
} else {
	val -= 20;
};
console.log(val);

let valTwo = 20;
if (valTwo < 10) {
	valTwo -= 20;
} else if (valTwo > 10) {
	valTwo += 20;
} else {
	valTwo = false;
};
console.log(valTwo);

//if else
let userAge = 25;
if (userAge >= 18) {
	console.log('Is adult');
} else if (userAge >= 12) {
	console.log('Is teenager');
} else {
	console.log('Is child');
};

//if,if
let userAgeTwo = 25;
if (userAgeTwo >= 18) {
	console.log('Is adult');
}
if (userAgeTwo >= 12 && userAgeTwo < 18) {
	console.log('Is teenager');
}
if (userAgeTwo < 12) {
	console.log('Is child');
};

let sumPositiveNumbers = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of arguments is not a number';
	}
	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive';
	}
	return a + b;
};