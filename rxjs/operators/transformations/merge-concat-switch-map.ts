import { of, interval } from 'rxjs';
import { concatMap, delay, take, mergeMap, switchMap, map, tap } from 'rxjs/operators';

const source = of(2000, 1000);
const concatMapped = source.pipe(
    concatMap((val: number) => of(`Concated Value ${val}`).pipe(delay(val))),
    take(5)
);

const mergeMapped = source.pipe(
    mergeMap((val: number) => of(`Merged Value ${val}`).pipe(delay(val))),
    take(5)
);

concatMapped.subscribe(console.log); //2000, 1000 Order maintained
mergeMapped.subscribe(console.log); //1000, 2000 

const intv = interval(2000).pipe(take(2));
intv.pipe(
    mergeMap( (outerValue) => interval(400)
            .pipe(
                map(val => {
                    return `MergeMap Inner Ob ${outerValue} with value ${val}`;
                }
            )
        )
)
).subscribe(console.log); //inner observals go on.

intv.pipe(
    switchMap( 
        (outerValue) => interval(400).pipe(
            map(val => {
                return `SwitchMap Inner Ob ${outerValue} with value ${val}`;
            }
        )
    )
)).subscribe(console.log); //Older inner observals are cancelled.
