
function printCharacter(name : string, age? : number) : void {
    console.log('____________________________');
    console.log('Printing Character ' + name);
    if (age) {
        console.log('Of age ' + age);
    }
    console.log('____________________________');
}

printCharacter('Olaf');
printCharacter('Piglet', 23);

function logCharacter(name : string, ...movies : string[]) : void {
    console.log('Character ' + name + ' appeared in : ');
    movies.forEach((movie) => console.log(movie));
    console.log('-----------------------------------');
}

logCharacter('Sheriff Woody', 'ToyStory 1', 'ToyStory 2', 'ToyStory 3');
logCharacter('Elena');


function describeCharacter(name : string, trait : string = 'Sweet' ) : void {
    console.log('Character ' + name + ' was ' + trait);
}

describeCharacter('Snow White');
describeCharacter('Goofy', 'dumb');


function checkRequiredParameters(required1 : string = 'MISSING', required2 : number, optional? : string) : void {
    console.log(required1, required2, optional);
}
checkRequiredParameters('Tigger', 'Winnie', 'Piglet');
checkRequiredParameters(undefined, 'Nemo');
