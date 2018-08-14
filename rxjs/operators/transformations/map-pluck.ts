import { map, pluck } from 'rxjs/operators';
import { range, from } from 'rxjs';

range(1, 5).pipe(map((val: number) => val * 2)).subscribe(console.log);

from([
    { name : 'Nilesh', surname: 'Injulkar', age: 27},
    { name : 'Snehal', surname: 'Salokhe', age: 25}
]).pipe(pluck('name')).subscribe(console.log);