import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

interval(2001).pipe(
    timeout(2000)
).subscribe(
    console.log,
    (err) => console.error('GOT ERROR', err)
);