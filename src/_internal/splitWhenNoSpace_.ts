import { isString } from 'typed-is';
import { toArray_ } from '../toArray';
import { split_ } from '../split';

export const splitWhenNoSpace_ = (keys, delim) =>
  isString(keys)
    ? /\s/g.test(keys)
      ? [keys]
      : split_(delim, keys)
    : toArray_(keys);

export default splitWhenNoSpace_;
