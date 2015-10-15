'use strict';

let genederProp = 'sex';
function person(name, age, gender) {
	return {
		name,
		age,  //age : age
		[genederProp] : gender,  //key also could be evaluated
		say() {  //method
			console.log('Saying');
		}
	}
}
var he = person('Someone', 56, 'M');
console.log(he.name);
console.log(he.age)
he.say();
console.log(he[genederProp]);

const a = 34;
const b = 34;
const c = '34';
console.log(Object.is(a, b));
console.log(Object.is(a, c));

var him = {};
Object.assign(him, he);
console.log(him.name);
console.log(him.age)
him.say();
console.log(him[genederProp]);


let human = {
	talk() {
		console.log(`${this.name} says hello`);
	}
};

let friend = {
	name : 'Bob',
	say() {
		super.talk();
		console.log('How are you?');
	}
};

Object.setPrototypeOf(friend, human);
friend.say();

/*** feature is in development

let obj = {
	score : 8,
	title : 'Argo'
};

var { score : movieScore, title : movieTitle } = obj;  
console.log(movieScore);  //8
console.log(movieTitle);  //Argo


const colors = ['red', 'orange', 'yellow'];
let [fColor, sColor] = colors;
console.log(fColor);  //red
console.log(sColor);  //orange


function setCookie(name, value, {age, path, domain}) {
	console.log(name, value, age, path, domain);  // username injulkar 34 toTheWay trash.in
}

setCookie('username', 'injulkar', {
	age : 34,
	path : 'toTheWay',
	domain : 'trash.in'
});

*/
  
