import { debounceTime, take, debounce } from 'rxjs/operators';
import { interval, timer, Observable } from 'rxjs';

const obi = interval(1000);
obi.pipe(debounceTime(900), take(5)).subscribe((v) => console.log('900', v));//works
obi.pipe(debounceTime(1100), take(5)).subscribe((v) => console.log('1100', v));//ignored

obi.pipe(debounce((v:number) => timer(v * 100))).subscribe((v) => console.log('Timer increasing', v));