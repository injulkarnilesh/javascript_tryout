enum Gender {MALE, FEMALE}

abstract class Pet {
    protected name : string;
    protected gender : Gender;

    constructor(name:string, gender:Gender) {
        this.name = name;
        this.gender = gender;
    }

    walk() : void {
        console.log(`${this.name} walking`);
    }

    abstract talk() : void;
}

class Cat extends Pet {

    constructor(name:string, gender:Gender) {
        super(name, gender);
    }

    talk() : void {
        console.log(`${Gender[this.gender]} ${this.name} is saying Mewwwww`);
    }
}

let Dog = class extends Pet {
    talk() : void {
        console.log(`${Gender[this.gender]} ${this.name} is saying bhowww bhow`);
    }
};

let grump : Pet = new Cat('Grumpy', Gender.MALE);
grump.talk();
grump.walk();


let snoop : Pet = new Dog('Snoop', Gender.FEMALE);
snoop.walk();
snoop.talk();
