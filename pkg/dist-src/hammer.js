import { curry2_ } from './_internal/curry2_';
import { path_ } from './path';
import { merge_ } from './merge';
import { omitKey_ } from './omitKey';
export const hammer_ = (key, keyedEnumerable) => merge_(omitKey_(key, keyedEnumerable), path_(key, keyedEnumerable));
export const hammer = curry2_(hammer_);
export default hammer;
