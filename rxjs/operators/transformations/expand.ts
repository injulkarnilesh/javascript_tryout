import { of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

of(10).pipe(
    expand((val: number) => {
        console.log('Expanding value', val)
        return of(val + 1);
    }),
    take(5)
).subscribe(val => console.log('GOT value', val));

/*
GOT value 10
Expanding value 10
GOT value 11
Expanding value 11
GOT value 12
Expanding value 12
GOT value 13
Expanding value 13
GOT value 14
Expanding value 14
*/