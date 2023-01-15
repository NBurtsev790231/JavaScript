'use strict'

console.log(navigator.userAgent);

if (navigator.userAgent.includes('Chrome')) {
	console.log('Browser Chrome');
} else if (navigator.userAgent.includes('Firefox')) {
	console.log('Browser Firefox');
}

/*
alert('Hello');

const promptResult = prompt('why are you')
console.log(promptResult);

const confirmResult = confirm('Document object model');
console.log(confirmResult);
*/
console.log(location.href);
console.log(navigator.language);

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(htmlElement);
//console.log(headElement);
//console.log(bodyElement);

const firstBodyElement = bodyElement.firstChild;
const lastBodyElement = bodyElement.lastChild;
console.log(firstBodyElement);
console.log(lastBodyElement);

const childNodesBody = bodyElement.childNodes;
console.log(childNodesBody);

console.log(bodyElement.hasChildNodes());

const previousNode = bodyElement.previousSibling;
const nextNode = bodyElement.nextSibling;
const userParentNode = bodyElement.parentNode;
console.log(previousNode);
console.log(nextNode);
console.log(userParentNode);

const bodyChildren = bodyElement.children;
console.log(bodyChildren);


