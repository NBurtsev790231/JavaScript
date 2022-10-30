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

//поиск по индексу в массиве
let resultTwo = arrFive.findIndex(function (item, index, array) {
	return item.age === 21;
});
console.log(resultTwo);

//преобразование массива
let arrSix = [
	"Арбуз",
	"Ананас",
	"Грейпфрут",
	"Манго",
]
let resultOne = arrSix.map(function (item, index, array) {
	return item[0];
});
console.log(arrSix);
console.log(resultOne);

//преобразование строки в массив
let strict = "Ноутбук, планшет, смартфон, наушники";
let arr = strict.split(",");
console.log(arr);

//преобразвоание строки в массив с ограничением по эллементам
let strictTwo = "Ноутбук, планшет, смартфон, наушники";
let arrStrict = strict.split(",", 3);
console.log(arrStrict);

//преобразование массива в строку
let arrEight = [
	"Микроскоп",
	"Телескоп",
	"Калейдоскоп",
]
let strictThree = arrEight.join("; ");
console.log(arrEight);
console.log(strictThree);

//преобразование массива в строку способ 2
let arrNine = [
	"Микроскоп",
	"Телескоп",
	"Калейдоскоп",
]
console.log(arrNine);
console.log(String(arrNine));

//функция для проверки массива
let obj = {};
let arrTen = [];
console.log(typeof obj);
console.log(typeof arrTen);

if (Array.isArray(arrTen)) {
	console.log("true");
} else {
	console.log("false");
};

//методы перебора массива (цикл for)
let arrEleven = [
	"Turkey",
	"Canada",
	"USA",
	"Finland",
];
console.log(arrEleven);
console.log(arrEleven.length);

for (let i = 0; i < arrEleven.length; i++) {
	console.log(arrEleven[i]);
};

//методы перебора мсссива (цикл for...of)
let arrTwelve = [
	"Finland",
	"USA",
	"Canada",
	"Turkey",
];
console.log(arrTwelve);
console.log(arrTwelve.length);

for (let arrItem of arrTwelve) {
	console.log(arrItem);
};

//метод перебора массива forEach
//выполняет функцию для каждого элемента массива
let arrThirteen = [
	"Acura",
	"Toyota",
	"Range Rover",
	"BMW",
];
console.log(arrThirteen);
console.log(arrThirteen.length);

arrThirteen.forEach(function (item, index, array) {
	console.log("${item} находится на ${index} позиции в ${array}");
});
//стрелочная функция
arrThirteen.forEach((item, index, array) => {
	console.log("${item} находится на ${index} позиции в ${array}");
});

//второй варинат метода перебора массива forEach
let arrFourteen = [
	"Acura",
	"Toyota",
	"Range Rover",
	"BMW",
];
arrFourteen.forEach(show);
function show(item) {
	console.log(item);
};

//метод reduce
let arrFifteen = [1, 2, 3, 4]
let reduceValueOne = arrFifteen.reduce(function(previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);

//метод reduceRight делает все тоже самое, но начинает справа
let arrSixteen = [5, 6, 7, 8]
let reduceValueTwo = arrSixteen.reduce(function(previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueTwo);

