import { House, GetHouseWords as getHouseWords } from './lib/got';
import * as Devices from './lib/devices';
import RandomInt from './lib/random-int';

console.log(getHouseWords(House.BARATHEON));
console.log(getHouseWords(House.LANISTER));

let myMac : Devices.Mac = Devices.Mac.PRO;
let mySurface : Devices.MicroSoftSurface = Devices.MicroSoftSurface.PRO4;
let myKindle : Devices.Kindle = Devices.Kindle.ALL_NEW;

console.log('Macbook', Devices.Mac[myMac]);
console.log('Microsoft Surface', Devices.MicroSoftSurface[mySurface]);
console.log('Kindle', Devices.Kindle[myKindle]);
console.log(RandomInt());
console.log(RandomInt(100));




