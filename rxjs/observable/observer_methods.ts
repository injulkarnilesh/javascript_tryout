import {Observable, Observer} from 'rxjs';

const observableComplete: Observable<string> = Observable.create((ob: Observer<string>) => {
    ob.next('Hello World');
    ob.next('Hi World');
    //ob.error('Won\'t complete');
    ob.complete();
    ob.next('Post complete');
});

observableComplete.subscribe(
    (message) => { console.log('Subscriber says', message); }, 
    (err) => { console.log('Subscriber errored', err); }, 
    () => { console.log('Subscriber done'); }, 
);


const observableErr: Observable<string> = Observable.create((ob: Observer<string>) => {
    ob.next('Working fine');
    ob.next('Going good');
    ob.error('Opps');
});

observableErr.subscribe(
    (message) => { console.log('Subscriberrr says', message); }, 
    (err) => { console.log('Subscriberrr errored', err); }, 
    () => { console.log('Subscriberrr done'); }, 
);



