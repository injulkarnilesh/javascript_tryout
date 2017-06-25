function getMovie(name : string) : string;
function getMovie(isReal : boolean) : string;

function getMovie(property : any) : string {
    if (typeof property === 'string') {
        return property;
    }

    return property ? 'The Jungle Book (2016)' : 'The Jungle Book (1967)';
}


console.log(getMovie('Cars'));
console.log(getMovie(true));
console.log(getMovie(false));
