var vehicle = {
	getModel : function() {
		return this.model;
	},
	setModel : function(model) {
		this.model = model;
	},
	setColor : function(color) {
		this.color = color;
	},
	getColor : function() {
		return this.color;
	},
	toString : function() {
		return 'MODEL : ' + this.model + ' COLOR : ' + this.color;
	}
}

var hondaCity = Object.create(vehicle, {
	'model' : {
		value : 'Honda City',
		enumerable : true
	},
	'color' : {
		value : 'white',
		enumerable : true,
		writable : true
	}
});

console.log(hondaCity.getColor() + ' ' + hondaCity.getModel());
console.log(hondaCity.toString());

hondaCity.setColor('Black');
console.log(hondaCity.toString());


var beget = (function(){
	
	function fun(){};

	return function(proto) {
		fun.prototype = proto;
		return new fun();
	};

})();

var tataIndigo = beget(vehicle);
tataIndigo.setModel('Tata Indigo');
tataIndigo.setColor('Gray');
console.log(tataIndigo.toString());
