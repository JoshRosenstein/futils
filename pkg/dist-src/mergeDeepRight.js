import { curry2_ } from './_internal/curry2_';
import { merge_ } from './merge';
import { mergeWith_ } from './mergeWith';
import isObject from './isObject';
import isArray from './isArray';
export const mergeDeepRight_ = (left, right) => {
    if (isArray(left) && isArray(right)) {
        return merge_(left, right);
    }
    if (isObject(left) && isObject(right)) {
        return mergeWith_(mergeDeepRight_, left, right);
    }
    return right;
};
export const mergeDeepRight = curry2_(mergeDeepRight_);
export default mergeDeepRight;
