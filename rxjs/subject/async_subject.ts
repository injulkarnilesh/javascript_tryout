import { AsyncSubject } from 'rxjs';

const asyncSub: AsyncSubject<string> = new AsyncSubject();
asyncSub.subscribe((message) => console.log('FIRST SUB', message),
    (err) => console.log('FIRST SUB ERROR', err),
    () => console.log('FIRST SUB complete'));

asyncSub.next('First message');
asyncSub.next('Seond message');
asyncSub.next('Third message');

asyncSub.subscribe((message) => console.log('SECOND SUB', message),
    (err) => console.log('SECOND SUB ERROR', err),
    () => console.log('SECOND SUB complete'));

//last message receieved when complete
asyncSub.complete();
