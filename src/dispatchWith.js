import dispatchWith_ from './dispatchWith_'
import curryN_ from './curryN_'
import maxArgs from './maxArgs'

export default (pred,fns)=>curryN_(maxArgs(fns),(...args)=>dispatchWith_(pred,fns,...args))
