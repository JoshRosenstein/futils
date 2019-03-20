import {curryN_} from './curryN'
export const tryCatch_ = (tryer, catcher) =>
  curryN_(tryer.length, (...args) => {
    try {
      return tryer(...args)
    } catch (e) {
      return catcher(e, ...args)
    }
  })

export const tryCatch = curryN_(2, tryCatch_)
export default tryCatch
