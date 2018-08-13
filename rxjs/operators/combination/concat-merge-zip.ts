import { delay, concat as pipedConcat, map } from 'rxjs/operators';
import { of, concat, interval, merge, zip, range } from 'rxjs';

//Concat -- order
const firstNumbers = of(1, 2, 3);
const laterNumbers = of(4, 5, 6, 7);

concat(firstNumbers, laterNumbers).subscribe(console.log);

const lateNumbers = firstNumbers.pipe(delay(2000));
lateNumbers.pipe(pipedConcat(laterNumbers)).subscribe((v) => console.log('DELAYED', v));


//Merge -- Throughput
const first = interval(1000).pipe(map(v => 'FIRST @' + v));
const second = interval(1500).pipe(map(v => 'SECOND @' + v));
const third = interval(2000).pipe(map(v => 'THIRD @' + v));

merge(first, second, third).subscribe(v => console.log('MERGED', v));
//also available as pipe operator


const r1 = range(10, 15);
const r2 = range(100, 104);
const r3 = range(1, 3);
zip(r1, r2, r3).subscribe(array => console.log('ZIPPED', array));