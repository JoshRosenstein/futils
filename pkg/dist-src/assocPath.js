import { curry3_ } from './_internal/curry3_';
import { assoc_ } from './assoc';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';
import { empty_ } from './empty';
export const assocPath_ = (path, val, obj) => {
    const empt = empty_(obj);
    path = splitWhenNoSpace_(path, '.');
    if (path.length === 0) {
        return val;
    }
    const inner = ([head, ...tail], x, o) => assoc_(head, tail.length ? inner(tail, x, o[head] || empt) : x, o);
    return inner(path, val, obj);
};
export const assocPath = curry3_(assocPath_);
export default assocPath;
