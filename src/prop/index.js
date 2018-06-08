import isNil from "../isNil"
import { curry2 } from "../curry"

export const prop_ = (name, keyedFunctor) => {
  if (isNil(keyedFunctor)) {
    return keyedFunctor
  }

  if (keyedFunctor.get) {
    return keyedFunctor.get(name)
  }

  return keyedFunctor[name]
}

export default curry2(prop_)
