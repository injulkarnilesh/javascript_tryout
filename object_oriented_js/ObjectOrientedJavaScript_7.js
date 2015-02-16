function adder(x){
	return function(y){
		return x + y;
	}
};

var five_adder = adder(5);

var result = five_adder(7);
console.log(result);

var nine_adder = adder(9);
result = nine_adder(10);
console.log(result);