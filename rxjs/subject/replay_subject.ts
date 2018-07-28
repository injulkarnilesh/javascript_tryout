import { ReplaySubject } from 'rxjs';

const replaySub: ReplaySubject<string> = new ReplaySubject(3);
replaySub.subscribe((message) => console.log('OLD SUB', message) );

replaySub.next('First message');
replaySub.next('Second message');
replaySub.next('Third message');
replaySub.next('Forth message');
replaySub.next('Fifth message');

// new sub gets last 3 messages
replaySub.subscribe((message) => console.log('NEW SUB', message) ); 

const timedReplaySub: ReplaySubject<string> = new ReplaySubject(2, 500);
timedReplaySub.next('Message 1');
timedReplaySub.next('Message 2');
timedReplaySub.next('Message 3');
timedReplaySub.next('Message 4');
timedReplaySub.next('Message 5');

setTimeout(()=> {
    timedReplaySub.subscribe((message) => console.log('Within time', message));
}, 300);

setTimeout(()=> {
    timedReplaySub.subscribe((message) => console.log('Out of time', message));
}, 600);