'use strict'
/*
let a = 5;
let b = 10;
function sum(a, b) {
	let c = a + b;
	console.log(c);
}
sum(a, b);

a = 8;
b = 12;
sum(a, b);

let c = 2;
let d = 50;
function result(c, d) {
	let e = c * d;
	console.log(e);
}
result(c, d);

function myFn(e, f) {
	let c;
	e = e + 1;
	c = e + f;
	return c;
}
console.log(myFn(10, 3));
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7,]
console.log(arr);
arr.push('a', 'b', 'c',);
console.log(arr);

let myArray = [8, 9, 10, 11,]
console.log(myArray);
console.log(myArray.length);

myArray[2] = 'abc';
console.log(myArray);
console.log(myArray[2]);

myArray[4] = 'true';
console.log(myArray);
console.log(myArray[4]);
console.log(myArray.length);

let arrTwo = arr;
console.log(arrTwo);
//меняют оригинальный массив
arrTwo.push(8, 9, 10,);
console.log(arrTwo);

arrTwo.pop();
console.log(arrTwo);

arrTwo.unshift('hello');
console.log(arrTwo);
console.log(arrTwo.length);
*/

//не меняет оригинальный массив
let arrThree = [
	1, 2, 3, 4, 5,
	6, 7, 8, 9, 10,]
console.log(arrThree);
//arrThree.forEach(el => console.log(el * 2)); //стрелочная функция
arrThree.forEach(function (element) {
	console.log(element * 2);
}); //классичесская функция

let arrFour = ['Doruk', 'Acie', 'Berk', 'Susen', 'Omer', 'Tolga']
console.log(arrFour);
arrFour.forEach(function (name) {
	console.log(name);
});

let arrFive = ['Range Rover', 'BMW', 'Toyta', 'Mercedes', 'Kia'];
console.log(arrFive);
arrFive.forEach(function (auto) {
	console.log(auto);
});

let newArray = arrThree.map(function (element) {
	console.log(element * 3);
});
//console.log(arrThree);


