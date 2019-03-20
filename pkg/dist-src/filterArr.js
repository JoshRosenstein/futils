import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
export function filterArr() {
    return purry(_filterArr(false), arguments, filterArr.lazy);
}
const _filterArr = (indexed) => (array, fn) => {
    return _reduceLazy(array, indexed ? filterArrlazyIndexed(fn) : filterArrLazy(fn), indexed);
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
const filterArrLazy = _lazy(false);
const filterArrlazyIndexed = _toLazyIndexed(_lazy(true));
function filterArrindexed() {
    return purry(_filterArr(true), arguments, filterArrlazyIndexed);
}
filterArr.lazy = filterArrLazy;
filterArr.indexed = filterArrindexed;
filterArr.lazyIndexed = filterArrlazyIndexed;
export default filterArr;
//# sourceMappingURL=filterArr.js.map