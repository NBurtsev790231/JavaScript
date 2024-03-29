const people = [
    {name: 'Maria', age: 23, budget: 40000},
    {name: 'Anna', age: 18, budget: 30000},
    {name: 'Nikolay', age: 20, budget: 25000},
    {name: 'Tasha', age: 17, budget: 2300},
    {name: 'Egor', age: 15, budget: 5000},
    {name: 'Elena', age: 21, budget: 60000},
]
 console.log(people);


 /*for (let i=0; i< people.length; i++) {
    console.log(people[i]);
 };*/

 /*for (let person of people) {
    console.log(person);
 };*/



//forEach
 /*people.forEach(function(person, index, pArr) {
    console.log(person);
    console.log(index);
    console.log(pArr);
 });

 people.forEach(function(person) {
    console.log(person);
 });

//ES6
 people.forEach(person => console.log(person));
*/

//Map
const  people2 = people.map(person => {return person.name});
    console.log(people2);

//ES6
const  people3 = people.map(person => `${person.name} (${person.age}, ${person.budget})`);
console.log(people3);


//Filter
const adults = people.filter(function(person) {
    if (person.age >= 18 ) {
        return true;
    }
});
console.log(adults);

//ES6
const adults2 = people.filter(person => person.age >= 18);
console.log(adults2);

let number = [1,2,3,4,5,];
for (let a = 0; a <= number.length; a++) {
    console.log(a);
}

number.forEach(num => console.log(num));



let number2 = [100,200,300,400,500,];

number2.push(600,700,800,900,1000);

number2.forEach(elem => console.log(elem));

let number3 = ['One','Two','Three','Four','Five'];

/*for (let b = 0; b < number3.length; b++) {
    console.log(number3[b]);
}*/

number3.forEach(param => console.log(param));

let people4 = [
    {name: 'Andrey', age: 18},
    {name: 'Maria', age: 12},
    {name: 'Ekaterina', age: 10},
    {name: 'Pavel', age: 20},
    {name: 'Elena', age: 22},
];

people4.forEach(person => console.log(person));


//FILTER
let newPeople = people4.filter(function(item) {
    if (item.age > 18) {
        return true;
    }
});

console.log(newPeople);

let newPeople2 = people4.filter(item => item.age > 18);
console.log(newPeople2);



const number4 = [23,18,45,17,34,67,90];

number4.forEach(elem => console.log(elem));


let newNumber = number4.filter(elem => elem < 30);

console.log(newNumber);


//CLONE
//slice
let peopleClone = people.slice();
console.log(peopleClone);

//spread
let peopleClone2 = [...people]
console.log(peopleClone2);

//Array.from()
let peopleClone3 = Array.from(people);
console.log(peopleClone3);

//Array.concat()
let peopleClone4 = [].concat(people);
console.log(peopleClone4);

//Spred
const citiesRussia = ['Москва','Казань','Тула','Владивосток']
const citiesEurope = ['Берлин','Прага','Париж','Рига']

let allCities = [...citiesRussia, ...citiesEurope];

console.log(allCities);

//Rest
function converUSD(rate, ...totals) {
    return totals.map(total => total/rate);
}
const total = converUSD(97, 1000, 800, 6300, 2500, 440, 680);

console.log(total);



const car = ['Tesla model X', 11, 'red', '50000', '10%', '4wd']

const [name, id, ...options] = car;

console.log(name, id, options);

//Javascript class
function carTwo(brand, color) {
    this.brand = brand;
    this.color = color;
}

carTwo.prototype.start = function() {
    console.log(`${this.brand} -start!`);
}
carTwo.prototype.start = function() {
    console.log(`${this.brand} (${this.color}) -start!`);
}

const toyota = new carTwo('Toyota', 'red');
const nissan = new carTwo('Nissan', 'black');
const mazda = new carTwo('Mazda', 'yellow');
const tesla = new carTwo('Tesla', 'silver');

console.log(toyota);


class Box {
    constructor(name, age, work) {
        this.name = name; 
        this.age = age;
        this.work = work
    }
    hi() {
        console.log(this.name + this.age + this.work);
    };
}

let myBox  = new Box('Maria, ', 22, ' frontend developer');

let myBoxTwo  = new Box('Anna, ', 17, ' UX/Ui designer');

let myBoxThree  = new Box('Elena, ', 20, ' product manager');

myBox.hi();
myBoxTwo.hi();
myBoxThree.hi();
 

             



