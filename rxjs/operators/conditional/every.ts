import { of, Subject } from 'rxjs';
import { every } from '../../node_modules/rxjs/operators';

const isEven = (no:number) => 0 === no%2 ;

const ob: Subject<number> = new Subject();
ob.pipe(every(isEven))
.subscribe((allEven) => console.log('All EVEN', allEven));
ob.next(2);
ob.next(3);
ob.complete();

of(2, 4, 6).pipe(every(isEven))
.subscribe((allEven) => console.log('OF All EVEN', allEven));