// from https://github.com/remeda/remeda/blob/master/src/mapArr.ts
import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
function mapArr() {
    return purry(_mapArr(false), arguments, mapArr.lazy);
}
const _mapArr = (indexed) => (array, fn) => {
    return _reduceLazy(array, indexed ? mapArr.lazyIndexed(fn) : mapArr.lazy(fn), indexed);
};
const _lazy = (indexed) => (fn) => {
    return (value, index, array) => {
        return {
            done: false,
            hasNext: true,
            next: indexed ? fn(value, index, array) : fn(value),
        };
    };
};
const lazy = _lazy(false);
const lazyIndexed = _toLazyIndexed(_lazy(true));
function indexed() {
    return purry(_mapArr(true), arguments, lazyIndexed);
}
mapArr.lazy = lazy;
mapArr.lazyIndexed = lazyIndexed;
mapArr.indexed = indexed;
export { mapArr };
