import { of, range } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

const source = range(1, 5);

source.pipe(reduce((acc, val) => acc + val, 0))
.subscribe(val => console.log('REDUCED :', val));


source.pipe(scan((acc, val) => acc + val, 0))
.subscribe(val => console.log('SCANNED :', val));