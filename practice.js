'use strict'

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

let fruits = ['Apple', 'Chery', 'Pear',]
console.log(fruits);
fruits.push('Orange', 'Watermelon');
console.log(fruits);
fruits.unshift('Melon');
console.log(fruits);
fruits.forEach(function (element) {
	console.log(element);
});

let fruitsTwo = fruits.map(result => console.log(result));

//=======================================================
let people = [
	{name:'Владилен', age: 25, budget: 40000},
	{name:'Елена', age: 17, budget: 3400},
	{name:'Игорь', age: 49, budget: 50000},
	{name:'Михаил', age: 15, budget: 1800},
	{name:'Василиса', age: 24, budget: 25000},
	{name:'Виктория', age: 38, budget: 2300},
]

/*for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
};

for (let person of people) {
	console.log(person);
}
*/

/*
people.forEach(function (person) {
	console.log(person);
})
*/

//people.forEach(person => console.log(person));

/*
let newPeople = people.map(function (person) {
	return `${person.name} (${person.age})`
})
console.log(newPeople);

let newPeopleTwo = people.map(person => `${person.name} (${person.age})`);
console.log(newPeopleTwo);
*/

let newPeopleThree = people.map(person => console.log(person));

//Filter
/*
let adults = []
for (let i = 0; i < people.length; i++) {
	if (people[i].age >= 18) {
		adults.push(people[i])
	}
};
console.log(adults);


let adultsTwo = people.filter(person => {
	if (person.age >= 18) {
		return true
	}
});
console.log(adultsTwo);
*/

let adultsThree = people.filter(person => person.age >= 18);
console.log(adultsThree);

let userBudget = people.filter(person => person.budget >= 20000);
console.log(userBudget);

let userBudgetTwo = people.filter(person => person.budget <= 30000);
console.log(userBudgetTwo);

let userName = people.filter(person => person.name === 'Виктория');
console.log(userName);

//Reduce
/*
let amount = 0;
for (let i =0; i < people.length; i++) {
	amount += people[i].budget;
};
console.log(amount);

let amountTwo = people.reduce((total, person) => {
	return total + person.budget;
}, 0);
console.log(amountTwo);
*/

let amountThree = people.reduce((total, person) => total + person.budget, 0);
console.log(amountThree);

let amountFour = people.reduce((total, person) => total + person.budget * 2, 0);
console.log(amountFour);