import curryN_ from './curryN_'

export default (cb, enhancers) =>
  curryN_(enhancers.length, (...args) =>
    cb.apply(cb, enhancers.map((enhancer, idx) => enhancer(args[idx]))),
  )
