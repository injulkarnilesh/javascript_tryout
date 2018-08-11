var imp =  {
	first_name : 'Tyrion',
	'last-name' : 'Lannister',
	payDebt : function(){
		console.log('Lannisters always pay their debts'); 
	},
	trial : function(){
		console.log(this.first_name, 'demands trail by combat')
	}
}

console.log(imp.first_name);
console.log(imp['last-name']);

imp.payDebt();

imp.trial();

console.log(imp.girlFriend);

imp.girlFriend = 'Shae';
console.log(imp.girlFriend);

delete imp.girlFriend;
console.log(imp.girlFriend);

var firstName = 'first_name';
console.log(imp[firstName]);

console.log('*************************************************');

