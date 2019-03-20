// from https://raw.githubusercontent.com/remeda/remeda/master/src/reduce.ts
import { purry } from './purry';
export function reduceArr() {
    return purry(reduceArr_(false), arguments);
}
export const reduceArr_ = (indexed) => (items, fn, initialValue) => items.reduce((acc, item, index) => indexed ? fn(acc, item, index, items) : fn(acc, item), initialValue);
function _indexed() {
    return purry(reduceArr_(true), arguments);
}
reduceArr.indexed = _indexed;
export default reduceArr;
//# sourceMappingURL=reduceArr.js.map