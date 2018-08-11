function Stark (firstName ) {
	this.firstName = firstName;
	
	this.print = function(){
		console.log(this.firstName, this.lastName);
	}
}
Stark.prototype.lastName = 'Stark';
Stark.prototype.say = function(){
	console.log('Winter is coming');
}

var arya = new Stark('Arya');
arya.say();
arya.print();

var robb = new Stark('Robb');
robb.print();
robb.say();

console.log('**************************');

for(var robbProperty in robb){
	console.log(robbProperty, typeof robb[robbProperty], robb[robbProperty]);
}

console.log('**************************');

for(var robbProperty in robb){
	if(robb.hasOwnProperty(robbProperty)){
		console.log(robbProperty, typeof robb[robbProperty], robb[robbProperty]);
	}
}