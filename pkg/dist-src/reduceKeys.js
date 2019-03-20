import { curry3_ } from './_internal/curry3_';
import { reduce_ } from './reduce';
export const reduceKeys_ = (fn, initial, functor) => reduce_((acc, _, key) => fn(acc, key), initial, functor);
export const reduceKeys = curry3_(reduceKeys_);
export default reduceKeys;
//# sourceMappingURL=reduceKeys.js.map