
function smartIdGenerator(name : string, id : number) : string {
    return id + '-' + name;
}

let IDGenerator : (string, number) => string;

IDGenerator = smartIdGenerator;
console.log(IDGenerator('Elsa', 87));

IDGenerator = (name, id) => name + '_' + id;
console.log(IDGenerator('Jessie', 34));
