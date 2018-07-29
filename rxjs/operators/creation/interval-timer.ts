import { interval, timer } from '../../node_modules/rxjs';


const intv = interval(2000);
intv.subscribe((value) => console.log('INTERVAL @', value, new Date().getSeconds()));

const tmr = timer(2000);
tmr.subscribe((value) => console.log('TIMER @', value, new Date().getSeconds()));

const tmrIntv = timer(0, 2000);
tmrIntv.subscribe((value) => console.log('TIMER INTERVAL @', value, new Date().getSeconds()));