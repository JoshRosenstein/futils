import { curry2_ } from './_internal/curry2_';
import { mergeDeepRight_ } from './mergeDeepRight';
import { reduceValues_ } from './reduceValues';
import { empty_ } from './empty';
import { of_ } from './of';
import { objOf_ } from './objOf';
export const groupBy_ = (fn, list) => reduceValues_((accumulated, value) => {
    const key = fn(value);
    return key
        ? mergeDeepRight_(accumulated, objOf_(key, of_(null, value, empty_(list))))
        : accumulated;
}, {}, list);
export const groupBy = curry2_(groupBy_);
export default groupBy;
