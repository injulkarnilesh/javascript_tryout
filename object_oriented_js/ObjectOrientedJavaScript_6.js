var ned_stark = {
	lastName : 'Stark',
	say : function(){
		console.log('Winter is coming');
	}
};

var sansa = {
	firstName : 'Sansa',
	believeBlindly : function(){
		console.log('Once a fool, always a fool.');
	}
}
sansa.__proto__ = ned_stark;
console.log(sansa.firstName);
console.log(sansa.lastName);
sansa.say();
sansa.believeBlindly();

var arya = Object.create(ned_stark);
arya.firstName  = 'Arya';
arya.beBrave = function(){
	console.log('Being brave');
};
console.log(arya.firstName);
console.log(arya.lastName);
arya.say();
arya.beBrave();
