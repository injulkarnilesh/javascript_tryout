function Person(firstname, surname, house, age){
	this.firstname = firstname;
	this.surname = surname;
	this.house = house;
	this.age = age || 50;

	this.sayHello = function(){
		console.log(this.firstname, 'of house', this.house);
	}

	this.increaseAge = function(increament){
		this.age += increament;
	}

	this.print = function(){
		console.log(this.firstname, this.surname, '(', this.age, ')' );
	}
}

Person.prototype.die = function(){
	console.log(this.firstname, this.surname, 'dies');
}

var king = new Person('Joffrey', 'Baratheon', 'Baratheon', 14);
king.sayHello();
king.increaseAge(1);
king.print();
king.die();

var ned = new Person('Ned', 'Stark', 'Stark', 55);
ned.sayHello();
ned.print();
ned.die();

Person('Jaime', 'Lannister', 'Lannister');
console.log(firstname);
console.log(surname);
sayHello();
print();
