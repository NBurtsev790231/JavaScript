"use strict"
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
bark("lady", 18);
bark("range", 19)

//function declaration
function f1() {
	console.log("function 1");
}
f1()

//function expression
let message = function () {
	console.log("Hello");
};
message()

//планирование setTimeout
function showNumber(num) {
	console.log(num);
	if (num < 5) {
		setTimeout(showNumber, 1000, ++num);
	}
}
setTimeout(showNumber, 1000, 1);

//вычисление 
function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt("введите x", "");
let n = prompt("введите n", "");

if (n < 1) {
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	alert(pow(x, n));
}

//запись через классический оператор
if (5 < 10) {
	console.log("true");
} else {
	console.log("false");
}

//запись через условный оператор
let messageNumber = (5 < 10) ? console.log("true") : console.log("false");

