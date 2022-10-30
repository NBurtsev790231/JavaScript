"use strict"
//пример объекта
let userInfo = {
	name: "Apple",
	type: "Macbook",
	processor: "M1",
	diagonal: 13
};
console.log(userInfo);
console.log(userInfo.type);

//получение значений свойств
let obj = {
	name: "Doruk",
	age: 25,
	"likes javascript": true,
};
console.log(obj.name);
console.log(obj["name"]);
console.log(obj["likes javascript"]);

//вычисление имени
let firstPart = "likes";
let user = {
	name: "Melissa",
	age: 17,
	[firstPart + " javascript"]: true,
};
console.log(user["likes javascript"]);

//передача имени
let firstPartTwo = "likes";
let userTwo = {
	name: "Melissa",
	age: 17,
	[firstPartTwo]: true,
};
console.log(userTwo[firstPartTwo]);

//создание символа id с описанием
let id = Symbol("id");
let userInfoTwo = {
	name: "Acie",
	age: 18,
	[id]: "student kolledge Atakul",
};
console.log(userInfoTwo);

//вложенность объектов
let userInfoThree = {
	name: "Melissa",
	age: 17,
	adress: {
		country: "Turkey",
		city: "Istanbul",
	}
};
console.log(userInfoThree);
console.log(userInfoThree.adress);
console.log(userInfoThree.adress.city);

//возвращение значений из переменной
function makeUserInfo(name, age, country, city) {
	return {
		name, //когда значения совпадают будет тоже что и name: name,
		age, //age: age,
		country, //country: country,
		city, //city: city,
	}
}
let userInfoFour = makeUserInfo("Doruk", 18, "Turkey", "Istanbul");
console.log(userInfoFour);

//добавление свойства
let userInfoFive = {
	name: "Melissa",
};
console.log(userInfoFive);

userInfoFive.age = 17;
userInfoFive.adress = {
	country: "Turkey",
	City: "Istanbul",
};
console.log(userInfoFive);
console.log(userInfoFive.adress);

//удаление свойства
delete userInfoFive.age;
console.log(userInfoFive);

//изменение свойства объекта 
//изменять значения свойст можно и в константе
let userInfoSix = {
	name: "Range Rover",
	model: "Sport",
};
console.log(userInfoSix);
userInfoSix.model = "Evoque"
console.log(userInfoSix);

//дублирование объектов
let auto = {
	name: "Range Rover",
	model: "Sport",
}
let autoTwo = Object.assign({}, auto);
autoTwo.model = "Defender";
console.log(auto);
console.log(autoTwo);

//проверка существования свойства
let userInfoSeven = {
	name: "Acie",
	age: 17,
	adress: {
		country: "Turkey",
		city: "Istanbul",
	}
};

if (userInfoSeven.age) {
	console.log(userInfoSeven.age);
};

if (userInfoSeven.adress.country) {
	console.log(userInfoSeven.adress.country);
};

//проверка существования свойства 2
let userInfoEight = {
	name: "Talia",
	age: 18,
	adress: {
		country: "Turkey",
		city: "Istanbul",
	}
};
console.log(userInfoEight.adress.city);

console.log(userInfoEight?.adress?.city); //оптициональная цепочка проверки


//проверка существования свойства через оператора in
let userInfoNine = {
	name: "Berk",
	age: 19,
	adress: {
		country: "Turkey",
		city: "Istanbul",
	}
};

if ("name" in userInfoNine) {
	console.log(userInfoNine.name);
}

//цикл for...in
let userInfoTen = {
	name: "Berk",
	age: 19,
	adress: {
		country: "Turkey",
		city: "Istanbul",
	}
};

for (let key in userInfoTen) { //выводит полные значения объекта
	console.log(key);
	console.log(userImfoTen[key]);
};

for (let key in userInfoTen.adress) { //выводит часть из значений объекта
	console.log(key);
	console.log(userInfoTen.adress[key]);
};
