import { from, Observable } from 'rxjs';

function messageMe(name: string): any[] {
    return [ 
        (message) => console.log(name, message),
        (err) => console.log(name, 'ERROR', err),
        () => console.log(name, 'COMPLETE')
    ];
}

function subscribeWitName(ob: Observable<any>, name: string) {
    ob.subscribe.apply(ob, messageMe(name));
}

const obFromArray = from([1, 2, 3, 4, 5]);
subscribeWitName(obFromArray, 'FIRST ARRAY SUB');
subscribeWitName(obFromArray, 'SECOND ARRAY SUB');

const arr: number[] = [10, 20];
const obFromModifyingArray = from(arr);
subscribeWitName(obFromModifyingArray, 'MODIFYING ARRAY');
//Does not next
arr.push(30);

const obFromString = from('Nilesh');
subscribeWitName(obFromString, 'FROM STRING');

const map = new Map<number, string>();
map.set(1, 'Hello');
map.set(2, 'Hi');
map.set(3, 'Namaste');

const obFromMap = from(map);
subscribeWitName(obFromMap, 'FRON MAP');

const prm = new Promise(resolve => resolve('Hello World'));
const obFromPromise = from(prm);
subscribeWitName(obFromPromise, 'FROM PROMISE');
