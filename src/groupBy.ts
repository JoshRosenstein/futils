import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { mergeDeepRight_ } from './mergeDeepRight';
import { objOf_ } from './objOf';
import { of_ } from './of';
import { reduceValues_ } from './reduceValues';

export const groupBy_ = (fn, list) =>
  reduceValues_(
    (accumulated, value) => {
      const key = fn(value);
      return key
        ? mergeDeepRight_(
            accumulated,
            objOf_(key, of_(null, value, empty_(list))),
          )
        : accumulated;
    },
    {},
    list,
  );
export const groupBy = curry2_(groupBy_);
export default groupBy;
