"use strict"

let userInfo = {
	name: "Apple",
	type: "Macbook",
	processor: "M1",
	diagonal: 13
};
console.log(userInfo);
console.log(userInfo.type);


const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA',
};
console.log(myCity);
console.log(myCity.country);
console.log(myCity.city);

const myCityTwo = {
	city: 'New York',
	popular: true,
	country: 'USA',
};
myCityTwo.city = 'Los Angeles';
console.log(myCityTwo);
console.log(myCityTwo.city);


const myAuto = {
	brand: 'Range Rover',
};
myAuto.model = 'Sport';
myAuto.age = 2021;
myAuto.popular = true;
console.log(myAuto);
console.log(myAuto.model);

delete myAuto.popular;
console.log(myAuto);

const myCityThree = {
	city: 'California',
	info: {
		isPopular: true,
		country: 'USA',
	}
};
console.log(myCityThree.info);
console.log(myCityThree.info.isPopular);

let name = 'Nikita';
let age = 25;
let work = 'Frontend developer';
let city = 'Sochi';
const userProfile = {
	name, //name
	age, //age
	work, //work
	city, //city
};
console.log(userProfile);

const myCityFour = {
	city: 'Sochi',
	cityGreeting: function () {
		console.log('my favorite city!');   //myCityFour.city -доступ к значению свойства объекта
	}                                      //myCityFour.cityGreeting() -вызов метода объекта
};
myCityFour.cityGreeting();

const myCityFive = {
	city: 'Sochi',
	cityGreeting() {
		console.log('my favorite city!');
	}
};
myCityFive.cityGreeting();

