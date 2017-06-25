
let people : string[] = [ 'Simba', 'Nimo', 'Rapunzel', 'Buzz Lightyear'];


function printPeople(somePeople) : void {
    somePeople.forEach(person => console.log(person));
}

printPeople(people);

const smallerNames = people.filter((person, index ) => person.length <= 5);
printPeople(smallerNames);


function printMessageWIthFunction(message : string) : void {
    let self = this;
    self.message = message;

    setInterval(function() {
        console.log("WITH FUNCTION", self.message, this.message);
    }, 1000);

}

printMessageWIthFunction('Jasmine');


function printMessageWithArrow(message : string) : void {
    this.saying = message;
    setInterval(()=> console.log('WITH ARROW', this.saying), 1000)
}

printMessageWithArrow('Merida');

