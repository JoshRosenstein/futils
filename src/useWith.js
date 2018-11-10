import curryN_ from './curryN_'

export const useWith_ = (cb, enhancers) =>
  curryN_(enhancers.length, (...args) =>
    cb.apply(cb, enhancers.map((enhancer, idx) => enhancer(args[idx]))),
  )

export const useWith = curryN_(2, useWith_)

export default useWith
