import toPairs_ from "./toPairs_"
import type_ from "./type_"

export default (pred,reducer, initial, functor) => {
  let fn
 let predfn
  switch (type_(functor)) {
    case "Array":
      fn = (acc, value, key) => reducer(acc, value, key)
      predfn = (acc, value, key) => pred(acc, value, key)
      break
    case "Object":
    case "Map":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs_(functor)
      predfn = (acc, [key, value]) => pred(acc, value, key)
      break
    case "Set":
      fn = (acc, [, value]) => reducer(acc, value)
      functor = toPairs_(functor)
      predfn = (acc, [, value]) => pred(acc, value)
      break
    case "String":
      fn = (acc, [key, value]) => reducer(acc, value, key)
      functor = toPairs_(functor.split(""))
       predfn = (acc, [key, value]) => pred(acc, value, key)
      break

    default: {
      throw new Error(
        `reduce couldn't figure out how to reduce ${type_(functor)}`
      )
    }
  }

  const length = functor.length;
  let b = initial;

  for (let i = 0; i < length; ++i) {
    const a = functor[i];
    if (!predfn(b, a, i)) break;

    b = fn(b, a, i);
  }

  return b;
}
