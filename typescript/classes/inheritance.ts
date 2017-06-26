
class Person {
    public name : string;
    protected profession : string;
    private age : number;

    constructor(name : string, job : string, age? : number) {
        console.log('Instantiating a person named ' + name);
        this.name = name;
        this.profession = job;
        this.age = age;
    }

    introduce() {
        console.log(`I am ${this.name} and I am ${this.profession}`);
        if (this.age) {
            console.log(`I am ${this.age} years old`);
        }
    }

}

class GOTPerson extends Person {
    house : string;

    constructor(name : string, profession : string, house:string) {
        super(name, profession);
        this.house = house;
    }

    introduce() {
        super.introduce();
        console.log(`of house ${this.house}`);
    }
}

let ned = new GOTPerson('Eddard', 'King', 'Stark');
ned.introduce();


class DisneyPerson extends Person {

    constructor(name : string, profession : string) {
        super(name, profession)
    }

    sing(song : string) {
        console.log(`${this.name} singing ${song}`);
    }
}

let elsa = new DisneyPerson('Elsa', 'Princess');
elsa.introduce();
elsa.sing('Let it go');


class RealPerson extends Person {
    country : string;

    exist() {
        console.log(`${this.name} exists!`);
    }
}
let me = new RealPerson('Nilesh', 'Software Developer', 26);
me.name = 'Nilesh Injulkar';
//me.profession = 'Software Engineer';
me.introduce();
me.exist();