import { curry2_ } from './_internal/curry2_';
import { mapKeysWithValueKey_ } from './mapKeysWithValueKey';
export const mapKeys_ = (fn, functor) => mapKeysWithValueKey_((_, key) => fn(key), functor);
export const mapKeys = curry2_(mapKeys_);
export default mapKeys;
