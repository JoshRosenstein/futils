import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
// export function takeArr<T0 = never>(
//   n: number,
// ): <T extends [T0] extends [never] ? any : T0>(array: T[]) => T[]
export function takeArr() {
    return purry(_takeArr, arguments, takeArr.lazy);
}
function _takeArr(array, n) {
    return _reduceLazy(array, takeArr.lazy(n));
}
function lazy(n) {
    return (value) => {
        if (n === 0) {
            return {
                done: true,
                hasNext: false,
            };
        }
        n--;
        if (n === 0) {
            return {
                done: true,
                hasNext: true,
                next: value,
            };
        }
        return {
            done: false,
            hasNext: true,
            next: value,
        };
    };
}
takeArr.lazy = lazy;
export default takeArr;
