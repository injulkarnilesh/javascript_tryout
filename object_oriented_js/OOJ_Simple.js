name = 'Awesome';

var myObj = {
	name : 'UnNamed',
	'double' : function(){
		var that = this;
		console.log('****', this);
		this.helper = function(){
			that.name = 'Nilesh Injulkar';
		}
		
	}
}

console.log(name);
console.log(myObj.name);

myObj.double();

console.log(name);
console.log(myObj.name);
var sushil = new myObj.double();
sushil.helper();
console.log(sushil.name);
//myObj.helper();

function print(ob){
	console.log(ob);
}

var address = {
		street : 'Galli',
		city : 'Kale'
	};

var getAddress = function(newCity){
	address.city = newCity;
	return address;
};

var temp = {
	person : {
		fname : 'nilesh',
		lname : 'injulkar',
		address1 : getAddress('KOP'),
		walk : function(){
			console.log('walking');
		}
	},
	talk : function(){
		console.log('talking');
	}
}

print(temp);