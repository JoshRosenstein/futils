import {curry2} from '../curry'


const round_ = curry2(
  (by, num) => Math.round(num * Math.pow(10, by)) / Math.pow(10, by)
);

export default curry2(round_)
