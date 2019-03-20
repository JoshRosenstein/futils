// from https://raw.githubusercontent.com/remeda/remeda/master/src/dropArr.ts
import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
export function dropArr() {
    return purry(_dropArr, arguments, dropArrlazy);
}
function _dropArr(array, n) {
    return _reduceLazy(array, dropArrlazy(n));
}
function dropArrlazy(n) {
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
dropArr.lazy = dropArrlazy;
export default dropArr;
//# sourceMappingURL=dropArr.js.map