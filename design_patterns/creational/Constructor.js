var myCar = {
	model : 'Honda City',
	year : 2016,
	miles : 1000,
	toString : function() {
		console.log(this.model + ' of ' + this.year + ' ran ' + this.miles + 'miles');
	}
};

myCar.toString();


function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;
}

Car.prototype.toString = function() {
	console.log(this.model + ' of ' + this.year + ' ran ' + this.miles + 'miles');
}

var accord = new Car('Honda Accord', 2014, 3909);
accord.toString();

var i20 = new Car('Hyundai I20', 2010, 89998);
i20.toString();
