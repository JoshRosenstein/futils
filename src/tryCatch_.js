import curryN_ from './curryN_'

export default (tryer, catcher) =>
  curryN_(tryer.length, (...args) => {
    try {
      return tryer(...args)
    } catch (e) {
      return catcher(e, ...args)
    }
  })
