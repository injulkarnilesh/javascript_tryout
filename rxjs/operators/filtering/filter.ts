import { range } from 'rxjs';
import { filter } from 'rxjs/operators';

const ob = range(1, 10);
ob.pipe(filter((v:number) => v%2 === 0)).subscribe(console.log);