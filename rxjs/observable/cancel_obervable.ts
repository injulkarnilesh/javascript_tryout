import { Observable, Observer, Subscription } from 'rxjs';

const observableCancelled: Observable<string> = Observable.create((ob: Observer<string>) => {
    setInterval(() => {
        ob.next('Ping');
    }, 2000);
});

const sub: Subscription = observableCancelled.subscribe((message) => {
    console.log('Say', message);
});

setTimeout(() => {
    sub.unsubscribe();
}, 6100);
