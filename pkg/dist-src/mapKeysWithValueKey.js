import { curry2_ } from './_internal/curry2_';
import { merge_ } from './merge';
import { empty_ } from './empty';
import { of_ } from './of';
import { reduce_ } from './reduce';
export const mapKeysWithValueKey_ = (fn, functor) => reduce_((accumulated, value, key) => merge_(accumulated, of_(fn(value, key), value, accumulated)), empty_(functor), functor);
export const mapKeysWithValueKey = curry2_(mapKeysWithValueKey_);
export default mapKeysWithValueKey;
