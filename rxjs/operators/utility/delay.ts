import { range, Subject } from 'rxjs';
import { delay, delayWhen, tap } from 'rxjs/operators';

range(1, 5).pipe(
    delay(2000), //delays ob by 2 seconds not all items
    tap((value) => console.log(`TAPPING ${value} @ ${new Date().getSeconds()}`)),
    delay(1000)
).subscribe((value) => console.log('SUBSCRIBED FOR', value));

const sub: Subject<string> = new Subject();

range(10, 5).pipe(
    delayWhen(() => sub),
    tap((value) => console.log('SUB FOR', value))
).subscribe((value) => console.log('SUB WHEN', value));

setTimeout(() => sub.next('VALUE'), 10000);
