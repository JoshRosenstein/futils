import mapValuesWithValueKey_ from './mapValuesWithValueKey_'
import curryN_ from './curryN_'
import isFunction from './isFunction'


export default (fn, functor) => {
  if (isFunction(functor)) {
    return curryN_(functor.length,
      (...args)=>fn(functor(...args)))
  }
  if (functor.map instanceof Function) {
    return functor.map(value => fn(value))
  }

  return mapValuesWithValueKey_(value => fn(value), functor)
}
