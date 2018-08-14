import { interval } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

interval(500).pipe(bufferTime(3000), take(2)).subscribe(arr => {
    console.log('Collected :', arr);
});
