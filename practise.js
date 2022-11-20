'use strict'
//array

let a = [1, 2, 3,];
let b = [4, 5, 6,];
let result = a.concat(b);
console.log(result);
let resultTwo = b.concat(a);
console.log(resultTwo);

let c = [1, 2, 3,];
console.log(c);
c.reverse();
console.log(c);

let d = [7, 8, 9,]
d.push(10, 11, 12,);
console.log(d);
d.unshift(4, 5, 6,);
console.log(d);

let arr = ['js', 'css', 'jq'];
console.log(arr);
let element = arr.shift();
console.log(element);
let elementTwo = arr.pop();
console.log(elementTwo);

let e = [1, 2, 3, 4, 5,];
console.log(e);
let resultThree = e.slice(0, 3,);
console.log(resultThree);
let resultFour = e.slice(3, 5,);
console.log(resultFour);

let f = [1, 2, 3, 4, 5,];
console.log(f);
f.splice(1, 3, 4,);
console.log(f);

let g = [6, 7, 8, 9, 10,];
g.splice(3, 0, 'a', 'b', 'c',);
console.log(g);

let h = [6, 7, 8, 9, 10,];
h.splice(1, 0, 'a', 'b',);
h.splice(6, 0, 'c',);
h.splice(8, 0, 'e',);
console.log(h);

let i = [3, 4, 1, 2, 7,];
console.log(i);
i.sort();
console.log(i);

let obj = {
	js: 'test',
	jq: 'hello',
	css: 'world',
}
console.log(obj);
console.log(Object.keys(obj));

//object

function sumSalaries(salaries) {
	let sum = 0;
	for (let salary of Object.values(salaries)) {
		sum += salary;
	}
	return sum;
}

let salaries = {
	Jonn: 100,
	Ann: 160,
	Pete: 130.
}
console.log(sumSalaries(salaries));


let cityOne = {
	name: 'CityN',
	population: 1e6,
};
console.log(cityOne);

let cityTwo = {
	name: 'cityM',
	population: 2e6,
};
console.log(cityTwo);

