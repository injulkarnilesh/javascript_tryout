import { range } from 'rxjs';

const rangeOb = range(1, 10);
rangeOb.subscribe((no) => console.log('GOT', no), (er) => {}, () => console.log('DONE'));