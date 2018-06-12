import { curry2 } from "../curry";
const anyPass_ = (fns, value) => {
  let i = 0
  let length = fns.length
  while (i < length && !fns[i](value)) {
    i += 1
  }
  return i < length
}

export default curry2(anyPass_);
