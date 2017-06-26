
class LazyPerson {
    name : string;
    age : number;

    constructor() {

    }

    sayHello() {
        console.log(`Hey! myself ${this.name}`);
    }
}

let lazyMe = new LazyPerson();
lazyMe.name = 'Nilesh';
lazyMe.age = 22;
lazyMe.sayHello();

class ProActivePerson {
    name : string;
    age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello! I am ${this.name} and I am ${this.age} years old`);
    }

}
let sagar = new ProActivePerson('Sagar', 56);
sagar.sayHello();


class OldLady {
    name : string;
    age : number;

    constructor(name : string, age? : number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi! I am ${this.name} and my age is hmmm hmm ${this.age ? this.age - 5 : 18}`);
    }
}

let sarah = new OldLady('Sarah');
sarah.sayHello();

let linda = new OldLady('Linda', 40);
linda.sayHello();

class ShortPerson {

    public static NickName = 'Imp';

    constructor(public name : string, public age : number) {

    }

    sayHello() {
        console.log(`Hear me roar! I am ${this.name} first of his name and height, and I am ${this.age}`);
    }
}

let tyrian = new ShortPerson('Tyrian Lannister', 34);
tyrian.sayHello();
//console.log(tyrian.NickName); not allowed to access static from object
console.log(ShortPerson.NickName);


class PrivatePerson {
    private _problem : string;

    constructor(public name : string, public age : number) {

    }

    sayHello() {
        console.log(`${this.name} and ${this.age}`);
    }

    set problem(myProblem : string) {
        this._problem = myProblem
    }

    get problem() : string {
        return this._problem.toLocaleUpperCase();
    }
}

let house = new PrivatePerson('Gregory House', 45);
house.problem = 'Leg infraction';
house.sayHello();
console.log(house.problem);
