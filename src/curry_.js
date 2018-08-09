import curryN_ from './curryN_'

export default  f =>
  curryN_(f.length, f)
