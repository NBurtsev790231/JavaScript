"use strict"
let arrOne = [
	"Яблоко",
	"Груша",
	"Апельсин",
	"Вишня",
];
console.log(arrOne);

arrOne.pop();
console.log(arrOne);

arrOne.push("Банан", "Киви", "Манго");
console.log(arrOne);

arrOne.shift();
console.log(arrOne);

arrOne.unshift("Яблоко");
console.log(arrOne);

console.log(arrOne[2]);
console.log(arrOne[0]);
console.log(arrOne[1]);

console.log(arrOne.length);

arrOne.splice(2, 1);
console.log(arrOne);
let removed = arrOne.splice(2, 1);
console.log(removed);

arrOne.splice(0, 1, "Вишня");
console.log(arrOne);

let arrTwo = arrOne.slice()
console.log(arrTwo);

let arrThree = arrOne.concat("Имбирь");
console.log(arrThree);

let arrFour = [
	"Холодильник",
	"Машина",
	"Душевая",
	"Гараж",
];
console.log(arrFour);
console.log(arrFour.sort());
console.log(arrFour.indexOf("Душевая"));
console.log(arrFour.indexOf("Гараж"));
console.log(arrFour.indexOf("Холодильник"));

console.log(arrFour.includes("Душевая"));
console.log(arrFour.includes("Гараж"));
console.log(arrFour.includes("Стол"));

let arrFive = [
	{ name: "Маша", age: 18 },
	{ name: "Даша", age: 21 },
	{ name: "Оля", age: 16 },
]
let result = arrFive.find(function (item, index, array) {
	return item.age === 21;
});
console.log(result);

let resultTwo = arrFive.findIndex(function (item, index, array) {
	return item.age === 21;
});
console.log(resultTwo);



