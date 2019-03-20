// from https://github.com/remeda/remeda/blob/master/src/mapArr.ts
import { purry } from './purry';
import { _reduceLazy } from './_internal/_reduceLazy';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
function mapArr() {
    return purry(_mapArr(false), arguments, mapArr.lazy);
}
const _mapArr = (indexed) => (array, fn) => _reduceLazy(array, indexed ? MaplazyIndexed(fn) : Maplazy(fn), indexed);
const _lazy = (indexed) => (fn) => (value, index, array) => ({
    done: false,
    hasNext: true,
    next: indexed ? fn(value, index, array) : fn(value),
});
const Maplazy = _lazy(false);
const MaplazyIndexed = _toLazyIndexed(_lazy(true));
function mapArrindexed() {
    return purry(_mapArr(true), arguments, MaplazyIndexed);
}
mapArr.lazy = Maplazy;
mapArr.lazyIndexed = MaplazyIndexed;
mapArr.indexed = mapArrindexed;
export { mapArr };
//# sourceMappingURL=mapArr.js.map