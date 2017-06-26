interface Person {
    name : string;
    age : number;
    say : (message : string) => void;
}

interface CartoonCharacter {
    charmIndex : number;
}

interface DisneyLady extends Person, CartoonCharacter {
    movie : string;
}

let her : DisneyLady = {
    name : 'Rapunzel',
    age : 18,
    charmIndex :  100,
    movie : 'Tangled',
    say : function (message : string) {
        console.log(this.name + ' saying ' + message)
    }
};
her.say('I\'ve got a dream.');

class Princess implements DisneyLady {
    name : string;
    age : number;
    charmIndex : number;
    movie : string;
    say(message : string) {
        console.log('My lady ' + this.name + ' says : ' + message);
    }
}

let merida : DisneyLady = new Princess();
merida.name = 'Princess Merida';
merida.say('Mum, you will never guess what I did today');



