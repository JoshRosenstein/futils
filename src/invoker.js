import curryN_ from './curryN'

export const invoker_ = (arity, name) =>
  curryN_(arity + 1, (...args) => {
    const obj = args.pop()
    return obj[name](...args)
  })
export const invoker = curryN_(2, invoker_)
export default invoker
