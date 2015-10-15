'use strict';

/* NOT YET IMPLEMENTED https://www.chromestatus.com/features/5275456790069248
function wish(name, message = 'Hello') {
	console.log(message, name);
}

wish('Nilesh');  // Namaste Nilesh
wish('Injulkar', 'Namaste');  // Namaste Injulkar
*/

function describe(name, ...qualities) {  //rest parameters
	let message = name + ' is ';
	for(let i=0; i< qualities.length; i++) {
		message += qualities[i];
		if (i < (qualities.length - 2)) 
			message += ', ';
		if (i === (qualities.length - 2))
			message += ' and ';
	}
	console.log(message);
}

describe('He', 'Good', 'Bad', 'Uagly');
describe('It', 'breathtaking', 'stunning');
describe('Movie', 'awesome');

function print() {  
	for(let i=0; i<arguments.length; i++) {
		console.log(arguments[i]);
	}
}
print('a', 'b', 'c', 'd');
const numbers = [1, 2, 3];
print(...numbers);  //Spread operator spreds array into aruments

console.log(describe.name);
console.log(print.name);

/* new.target - unexpected token 
function Person(name, age) {
	if(new.target = Person)  {
		this.name = name;
		this.age = age;
	} else {
		throw new Error('Must use new with Person');
	}
}
var batman = new Person('Bruce Wayne', 34);
Person('Bruce Baner', 45);
*/

if('this is me'.includes('this')) {
	doSomething();  //hoisted
	//doSomethingElse();  not hoisted

	function doSomething() {
		console.log('Doing something');
	}

	let doSomethingElse = function() {
		console.log('Doing something else');
	}

	doSomething();
	doSomethingElse();
}

//doSomething(); works in non strict mode

const add = (a, b) => a+b;
console.log(add(2, 5));
const square = a => { return a*a };
console.log(square(4));
const math = (a, b) => { 
	return {
		addition : a+b,
		substraction : a-b,
	}
};
console.log(math(10, 5));
const withName = n => ({name : n});  //withoud surounding () returns undefined
console.log(withName('Stark'));

