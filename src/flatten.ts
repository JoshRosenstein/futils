import { empty_ } from './empty';
import { is_ } from './is';
import { merge_ } from './merge';
import { of_ } from './of';
import { reduce_ } from './reduce';
import { type_ } from './type';

export const flatten_ = (functor, recursive = true) => {
  const reducer = (subFuc, init = empty_(functor)) =>
    reduce_(
      (acc, value, key) => {
        if (is_(type_(init), value)) {
          return recursive ? reducer(value, acc) : merge_(acc, value);
        }
        return merge_(acc, of_(key, value, init));
      },
      init,
      subFuc,
    );

  return reducer(functor);
};
export const flatten = (functor) => flatten_(functor);
export default flatten;
