import mapValuesWithValueKey_ from './mapValuesWithValueKey_'


export default (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map(value => fn(value))
  }

  return mapValuesWithValueKey_(value => fn(value), functor)
}
