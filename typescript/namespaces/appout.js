var Safe;
(function (Safe) {
    function _isDefined(str) {
        return str !== null && str !== undefined;
    }
    var Str;
    (function (Str) {
        function ToLowwerCase(str) {
            if (_isDefined(str)) {
                return str.toLowerCase();
            }
            return null;
        }
        Str.ToLowwerCase = ToLowwerCase;
        function ToUpperCase(str) {
            if (_isDefined(str)) {
                return str.toUpperCase();
            }
            return null;
        }
        Str.ToUpperCase = ToUpperCase;
        function HasLength(str) {
            if (_isDefined(str)) {
                return str.length > 0;
            }
            return false;
        }
        Str.HasLength = HasLength;
    })(Str = Safe.Str || (Safe.Str = {}));
    function SafeArray(arr) {
        if (arr && arr.length) {
            return arr;
        }
        return [];
    }
    Safe.SafeArray = SafeArray;
})(Safe || (Safe = {}));
/// <reference  path="util/utils.ts" />
/* To Use with node
 tsc --target ES5 --outFile appout.js app.ts
 node appout.js
 */
var safeArr = Safe.SafeArray;
var names = ['Erlich', 'Richard', null, 'Gilfoyle', 'Dinesh', undefined];
names.forEach(function (name) { return console.log(Safe.Str.ToUpperCase(name)); });
safeArr(names)
    .filter(Safe.Str.HasLength)
    .forEach(function (name) { return console.log(name); });
safeArr(null).forEach(function (name) { return console.log(name); });
