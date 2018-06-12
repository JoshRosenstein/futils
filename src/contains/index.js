import { equals_ } from "../equals";
import { curry2 } from "../curry";

export const contains_=(x, arr) =>{
  if (arr === undefined) {
    return arrHolder => contains_(x, arrHolder);
  }
  let index = -1;
  let flag = false;

  while (++index < arr.length && !flag) {
    if (equals_(arr[index], x)) {
      flag = true;
    }
  }

  return flag;
}

export default curry2(contains_)
