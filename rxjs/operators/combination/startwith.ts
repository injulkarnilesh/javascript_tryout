import { range } from 'rxjs';
import { startWith } from 'rxjs/operators';

range(1, 5)
.pipe(startWith(0)).subscribe(console.log);