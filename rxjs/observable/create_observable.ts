import {Observable, Observer} from 'rxjs';

const observable: Observable<string> = Observable.create((ob: Observer<string>) => {
    ob.next('Hello World');
});

observable.subscribe((message) => {
    console.log('Subscriber 1', message);
});

observable.subscribe((message) => {
    console.log('Subscriber 2', message);
});


