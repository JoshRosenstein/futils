import { curry2_ } from './_internal/curry2_';
import { empty_ } from './empty';
import { first_ } from './first';
import { merge_ } from './merge';
import { of_ } from './of';
import { reduceValues_ } from './reduceValues';

export const indexBy_ = (fn, list) =>
  reduceValues_(
    (accumulated, value) =>
      merge_(accumulated, of_(fn(value), value, accumulated)),
    empty_(first_(Array.from(list))),
    list,
  );
export const indexBy = curry2_(indexBy_);
export default indexBy;
