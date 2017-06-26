/// <reference  path="util/utils.ts" />


/* To Use with node
 tsc --target ES5 --outFile appout.js app.ts
 node appout.js
 */

import safeArr = Safe.SafeArray;

let names : string[] = ['Erlich', 'Richard', null, 'Gilfoyle', 'Dinesh', undefined ];
names.forEach( name => console.log(Safe.Str.ToUpperCase(name)));

safeArr(names)
    .filter(Safe.Str.HasLength)
    .forEach(name => console.log(name));

safeArr(null).forEach(name => console.log(name));