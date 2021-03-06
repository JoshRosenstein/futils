// from https://github.com/remeda/remeda/blob/master/src/take.test.ts
import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
export function takeLazy() {
    return purry(_takeLazy, arguments, _lazy);
}
function _takeLazy(array, n) {
    return _reduceLazy(array, _lazy(n));
}
function _lazy(n) {
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
takeLazy.lazy = _lazy;
export default takeLazy;
//# sourceMappingURL=takeLazy.js.map