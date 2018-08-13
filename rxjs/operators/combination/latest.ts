import { interval, timer, combineLatest } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

const ob3000 = interval(3000);
const ob1000 = interval(1000);

ob3000.pipe(withLatestFrom(ob1000), map(([first, second]) => {
    return `Interval3000  ${first}, Interval1000 ${second} @ ${new Date().getSeconds()}`; 
})).subscribe(console.log);


const ob1 = timer(1000, 2000);
const ob2 = timer(2000, 2000);
const ob3 = timer(3000, 2000);//starts from here
combineLatest(ob1, ob2, ob3).subscribe(([v1, v2, v3]) => {
    console.log(`Values ${v1}, ${v2}, ${v3} @ ${new Date().getSeconds()}`);
});