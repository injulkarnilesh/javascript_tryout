import { of } from 'rxjs';

const obOf = of('Hello world');

obOf.subscribe((message) => console.log('FIRST OB', message),
    (err) => console.log('FIRST OB ERROR', err),
    () => console.log('FIRST OB COMPLETE')
);

obOf.subscribe((message) => console.log('SECOND OB', message),
    (err) => console.log('SECOND OB ERROR', err),
    () => console.log('SECOND OB COMPLETE')
);