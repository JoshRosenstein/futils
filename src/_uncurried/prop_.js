import isNil_ from "./isNil_"


export default (name, keyedFunctor) => {
  if (isNil_(keyedFunctor)) {
    return keyedFunctor
  }

  if (keyedFunctor.get) {
    return keyedFunctor.get(name)
  }

  return keyedFunctor[name]
}
