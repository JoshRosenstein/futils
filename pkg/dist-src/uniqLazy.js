import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
export function uniqLazy() {
    return purry(_uniqLazy, arguments, _lazy);
}
function _uniqLazy(array) {
    return _reduceLazy(array, _lazy());
}
function _lazy() {
    const set = new Set();
    return (value) => {
        if (set.has(value)) {
            return {
                done: false,
                hasNext: false,
            };
        }
        set.add(value);
        return {
            done: false,
            hasNext: true,
            next: value,
        };
    };
}
uniqLazy.lazy = _lazy;
export default uniqLazy;
//# sourceMappingURL=uniqLazy.js.map