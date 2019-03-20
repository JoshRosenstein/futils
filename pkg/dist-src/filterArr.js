import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
export function filterArr() {
    return purry(_filterArr(false), arguments, filterArr.lazy);
}
const _filterArr = (indexed) => (array, fn) => {
    return _reduceLazy(array, indexed ? filterArr.lazyIndexed(fn) : filterArr.lazy(fn), indexed);
};
const _lazy = (indexed) => (fn) => {
    return (value, index, array) => {
        const valid = indexed ? fn(value, index, array) : fn(value);
        if (!!valid) {
            return {
                done: false,
                hasNext: true,
                next: value,
            };
        }
        return {
            done: false,
            hasNext: false,
        };
    };
};
const lazy = _lazy(false);
const lazyIndexed = _toLazyIndexed(_lazy(true));
function indexed() {
    return purry(_filterArr(true), arguments, lazyIndexed);
}
filterArr.lazy = lazy;
filterArr.indexed = indexed;
filterArr.lazyIndexed = lazyIndexed;
export default filterArr;
//# sourceMappingURL=filterArr.js.map