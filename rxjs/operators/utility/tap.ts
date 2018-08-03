import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const ob: Subject<number> = new Subject();
const pipedOb = ob.pipe(
    tap((v) => console.log('TAPPING', v)),
    map((v: number) => { return v * 10; }),
    tap((v) => console.log('TAPPING AFTER', v)),
);
pipedOb.subscribe((value) => console.log('PIPED', value));

ob.next(2);
ob.next(5);
ob.complete();