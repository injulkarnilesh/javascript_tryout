'use strict';

class Person {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log('Hello, myself', this.name);
	}
}

let me = new Person('Bob');
me.sayHello();

var gandolf = new class {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get title() {
		return this.name;
	}

	set title(value) {
		this.name = value;
	}

	say() {
		console.log(`Hello there I am ${this.name} and I am ${this.age} years old`);
	}
}('Gandolf the great', 235);

gandolf.say();

gandolf.title = 'Gandolf';
gandolf.age = 300;

console.log(gandolf.title);
console.log(gandolf.age);

class SuperHero {
	static create(name, powers) {
		let hero = new SuperHero();
		hero.name = name;
		hero.powers = powers;
		return hero;
	}

	saveTheWorld() {
		console.log(`${this.name} saving the world with ${this.powers}`);
	}
}

const batman = SuperHero.create('Batman', ['Batmobile', 'Grappling Gun', 'Batarang', 'Batpod', 'Utility belt']);
batman.saveTheWorld();

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}
}

const rec = new Rectangle(30, 10);
console.log(rec.area());

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}
}
const sq = new Square(40);
console.log(sq.area());
console.log(sq instanceof Square);
console.log(sq instanceof Rectangle);