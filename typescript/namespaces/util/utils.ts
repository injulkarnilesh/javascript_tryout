namespace Safe {

    function _isDefined(str : string) : boolean {
        return str !== null && str !== undefined;
    }

    export namespace Str {
        export function ToLowwerCase(str : string) : string {
            if (_isDefined(str)) {
                return str.toLowerCase();
            }
            return null;
        }

        export function ToUpperCase(str : string) : string {
            if (_isDefined(str)) {
                return str.toUpperCase();
            }
            return null;
        }

        export function HasLength(str : string) : boolean {
            if (_isDefined(str)) {
                return str.length > 0;
            }
            return false;
        }
    }

    export function SafeArray(arr : any[]) : any[] {
        if (arr && arr.length) {
            return arr;
        }

        return [];
    }
}
