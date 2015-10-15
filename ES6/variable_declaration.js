'use strict';

(function() {
	//console.log(variable); //reference error
	//console.log(constant);  //reference error
	console.log(value);  // undefined because of hoisting
	
	let variable = 10;
	const constant = 90;
	var value = 34;
	//let value = 78; //already been defined
	
	console.log(typeof deadZone); //because type is safe operation show undefined otherwise gives error unknown reference

	if(true) {
		//console.log(typeof deadZone); deadZone is not defined
		let value = 56; //Redefining value in new scope is fine.
		console.log(value); //56
		let deadZone;
	}

	for(let i = 0; i<2; i++) {
		console.log('i is visible here', i);
	}
	//console.log(i); //i is not defined because it was let and was not hoisted

	console.log(variable, constant, value);

	var funs = [];
	for(var i = 0; i < 5; i++){
		funs.push(function(){console.log(i)});
	}
	funs.forEach(function(fun){fun();}) // 5 5 5 5 5 because same copy of i is shared

	var newFuns = [];
	for(let i = 0; i<5; i++) {
		newFuns.push(function(){console.log(i);});
	}
	newFuns.forEach(function(fun){fun();}); // 0 1 2 3 4 because new copy of i is created everytime
})();
