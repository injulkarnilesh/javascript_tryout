'use strict';

function randomBool() {
	return Math.random() >= 0.5;
}

const promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		if(randomBool()) {
			resolve('Ek number');
		} else {
			reject('Aichya gavat');
		}
	}, 1000);
});

promise.then(function(message){
	console.log(`**${message}**`);
});
promise.catch(function(message){
	console.log(`[${message}]`)
});

promise.then(function(m) {console.log('OK', m)}, function(e) {console.log('WTF',e)});


const nested = new Promise(function(success, error){
	success(100);
});
nested.then(function(value) {
	return value * 2;
}).then(function(value) {
	console.log(value);
});


const v1 = Promise.resolve('ME');
v1.then(function(who) {
	console.log(who);
});

const v2 = Promise.reject('WE');
v2.catch(function(who) {
	console.log(who);
});


const p1 = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('P1')
	}, 2000);
});

const p2 = new Promise(function(resolve, reject) {
	setTimeout(function(){
		resolve('P2')
	}, 1200)
});

const pall = Promise.all([p1, p2]);
pall.then(function(values) {
	console.log(values);
});

const prace = Promise.race([p1, p2]);
prace.then(function(winner){
	console.log(winner);
});