house = 'Stark';
function sayWords(words, expression){
	console.log('House', this.house, ':', words, expression);
};

sayWords('Winter is coming', ':)');
sayWords();
sayWords('Winter is coming', ':)', 'King in the north');


var lannister = {
	house : 'Lannister'
};
sayWords.call(lannister, 'Hear Me Roar!', ':|');


var baratheon = {
	house : 'Baratheon'
};
sayWords.apply(baratheon, ['Ours is the Fury!', ':(', 'NewOne']);

	
console.log(typeof Function.prototype.call);
console.log(typeof Function.prototype.apply);

console.log('********************************');
function createHouses(){
	console.log(arguments[0]);
	for(var i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}

createHouses('Baratheon', 'Stark', 'Lannister');