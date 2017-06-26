
function Reverse(arr : Array<T>) : Array<T> {
    let newArr : Array<T> = new Array<T>();
    arr.forEach(item => newArr.unshift(item));
    return newArr;
}

let names : string[] = ['A', 'B', 'C', 'D'];
console.log(Reverse(names));

let numbers : Array<number> = [23, 11, 22, 33];
let nums : Array<number> = Reverse<number>(numbers);
console.log(nums);


