import { Subject } from 'rxjs';

const mySub: Subject<string> = new Subject();
mySub.next('Message without any subscribers');

const mySubcription = mySub.subscribe((message) => {
    console.log('My Subscriber', message);
});

setTimeout(() => {
    mySub.next('Message after 2 seconds');
}, 2000);

mySub.next('Message after first subription');

const secondSub = mySub.subscribe((message) => {
    console.log('SECOND subscriber', message);
});

mySub.next('Message later');

setTimeout(() => secondSub.unsubscribe(), 3000);

setTimeout(() => mySub.next('After second one unsubsribes'), 4000);

