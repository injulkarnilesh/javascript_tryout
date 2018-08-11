globalVariable = 'The Global One';

(function myFunction(){
	var localVariable = 'The local one';
	someVariable = 'Someone';
	console.log(globalVariable);
	console.log(localVariable);
	console.log(someVariable);
})();

console.log(globalVariable);
//console.log(localVariable);
console.log(someVariable);
