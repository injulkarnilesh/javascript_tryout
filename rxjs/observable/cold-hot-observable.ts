import { Observable, Observer } from 'rxjs';
import { share } from 'rxjs/operators'

const observableCold: Observable<string> = Observable.create((ob: Observer<string>) => {
    ob.next('COLD First message');
    setTimeout(() => {
        ob.next('COLD Message after 3 seconds');
    }, 3000);
});

observableCold.subscribe((message) => {
    console.log('COLD >> Immediate subsriber', message);
});

setTimeout(() => {
    observableCold.subscribe((message) => {
        console.log('COLD >> Later subsriber', message);
    });
}, 1000);



const observableHot: Observable<string> = Observable.create((ob: Observer<string>) => {
    ob.next('HOT First message');
    setTimeout(() => {
        ob.next('HOT Message after 3 seconds');
    }, 3000);
}).pipe(share());

observableHot.subscribe((message) => {
    console.log('HOT >> Immediate subsriber', message);
});

setTimeout(() => {
    observableHot.subscribe((message) => {
        //won't receive First message
        console.log('HOT >> Later subsriber', message);
    });
}, 1000);


