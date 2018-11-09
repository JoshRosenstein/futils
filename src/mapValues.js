import {map_} from './map'
import curryN_ from './curryN_'
import isFunction from './isFunction'

export const mapValues_ = (fn, functor) => {
  if (isFunction(functor)) {
    return curryN_(functor.length, (...args) => fn(functor(...args)))
  }
  if (functor.map instanceof Function) {
    return functor.map(value => fn(value))
  }

  return map_(value => fn(value), functor)
}

export default curryN_(2, mapValues_)
