import { interval, timer } from 'rxjs';
import { take, takeUntil, skip, takeWhile } from 'rxjs/operators';

const iob = interval(1000);
iob.pipe(take(5)).subscribe(console.log);

const tim = timer(2500);
iob.pipe(takeUntil(tim)).subscribe((v) => console.log('Until', v));

iob.pipe(takeWhile((v) => v < 10)).subscribe((v) => console.log('WHILE', v));

iob.pipe(skip(5)).subscribe((v) => console.log('UNSKIPPED', v));
