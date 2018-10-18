import curryN_ from './curryN_'

const curry = f => curryN_(f.length, f)
export default curry
