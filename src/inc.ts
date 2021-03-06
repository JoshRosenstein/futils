import { isString } from 'typed-is';
import { replace_ } from './replace';

export const inc_ = (x) => {
  const xx = parseFloat(x);
  return !xx ? x : isString(x) ? replace_(`${xx}`, `${xx + 1}`, x) : xx + 1;
};

export const inc = inc_;

export default inc;
