import { Subject } from 'rxjs';
import { defaultIfEmpty } from '../../node_modules/rxjs/operators';

const sub: Subject<any> = new Subject();
sub.pipe(defaultIfEmpty('NONE')).subscribe(console.log);
sub.complete();
