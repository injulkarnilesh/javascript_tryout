function Person(name) {
	this.name = name;
	this.greet = function(greeting){
		console.log(this.name);
		this.say(greeting);
	}
}

Person.prototype.say = function(message){
	console.log('saying', message);
}

var littleFinger = new Person('Baelish');
littleFinger.greet('I did warn you not to trust me.');
littleFinger.say('Hello');

function Lannister(name){
	this.name = name;
	this.payDebt = function(){
		console.log(this.name, 'paying the debt');
	}
}

Lannister.prototype = new Person();
Lannister.prototype.trick = function(){
	console.log('Tricking someone');
}

var tyrion = new Lannister('Imp');
tyrion.payDebt();
tyrion.greet('I deemand trial by combat');
tyrion.say('Hi');
tyrion.trick();
console.log(tyrion.__proto__.name);
