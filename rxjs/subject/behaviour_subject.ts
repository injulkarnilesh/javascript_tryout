import { BehaviorSubject } from 'rxjs';

const bSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Inital Value');
bSubject.subscribe((message) => console.log('FIRST SUB', message));

bSubject.next('New value');

//recerives last value
bSubject.subscribe((message) => console.log('SECOND SUB', message));

bSubject.next('Value for both');