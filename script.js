
'use strict'
//булевое значение
let willYou = true;
if (willYou) {
	console.log(':)');
} else {
	console.log(':(');
}
console.log(typeof willYou);


//булевое значение
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
console.log(typeof trueOrFalse);


//строка
let userName = 'Фрилансер по жизни';
console.log(userName);
console.log(typeof userName);


//объект
let userInfo = {
	name: 'Фрилансер по жизни',
	age: 25
}
console.log(userInfo);
console.log(typeof userInfo);


//символ
let id = Symbol('id');
console.log(typeof id);

//функция 
let funcVariable = function name(params) {
	//код функции
}
console.log(typeof funcVariable);

//число
let myAge = 19;
console.log(myAge);
console.log(typeof myAge);

//преобразование типа данных из числа в строку
let userAge = 25;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);

//преобразование типа данных из строки в число
let userAge2 = '25';
console.log(userAge2);
console.log(typeof userAge2);

userAge2 = Number(userAge2);

console.log(userAge2);
console.log(typeof userAge2);




let scoops = 10;
while (scoops > 0) {
	document.write("Another scoop!<br>");
	scoops = scoops - 1;
}
document.write("Life without ice cream isn't  the same");



let name = "Joe";
let i = 0;
while (i < 4) {
	document.write("Happy Birthday to you. <br>");
	i = i + 1;
}
document.write("Happy Birthday dear" + name + ", <br>");




