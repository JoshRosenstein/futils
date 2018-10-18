import curryN_ from './curryN_'

const throwConstructError = () => {
  throw new Error('Constructor with greater than ten arguments')
}

export default (n, Func) =>
  Func.length > 10
    ? throwConstructError()
    : curryN_(n, (...args) => new Func(...args))
