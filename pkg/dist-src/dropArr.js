// from https://raw.githubusercontent.com/remeda/remeda/master/src/dropArr.ts
import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
export function dropArr() {
    return purry(_dropArr, arguments, dropArr.lazy);
}
function _dropArr(array, n) {
    return _reduceLazy(array, dropArr.lazy(n));
}
function lazy(n) {
    let left = n;
    return (value) => {
        if (left > 0) {
            left--;
            return {
                done: false,
                hasNext: false,
            };
        }
        return {
            done: false,
            hasNext: true,
            next: value,
        };
    };
}
dropArr.lazy = lazy;
export default dropArr;
//# sourceMappingURL=dropArr.js.map