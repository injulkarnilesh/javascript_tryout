'use strict'

const rule = 'You DO NOT talk about FIGHT CLUB';
console.log(rule.includes('FIGHT')); //true
console.log(rule.startsWith('You')); //true
console.log(rule.startsWith('We')); //false
console.log(rule.endsWith('CLUB')); //true
console.log(rule.endsWith('talk'));  //false

const oldStringWithNewLine = 'I dare you \nI double dare you';
console.log(oldStringWithNewLine);

const templateLiteralWithNewLine = `It's not about money
It's about sending a message`;
console.log(templateLiteralWithNewLine);

const name = 'nilesh',
	  surname = 'injulkar',
	  age = 15;

let intro = `Hello there, myself ${name} ${surname}, I am ${age * 12} months old`;
console.log(intro);

function read(literals, ...substitutions) {
	let output = '';
	for(let i = 0; i<substitutions.length; i++) {
		output += literals[i];
		output += substitutions[i];
	}
	output += literals[literals.length - 1];
	return output;	
}

let text = read`Name is ${surname}, ${name} ${surname}.`;
console.log(text);
