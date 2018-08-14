import dispatchWith_ from './dispatchWith_'
import curryN_ from './curryN_'
import maxArgs_ from './maxArgs_'

export default (pred,fns)=>curryN_(maxArgs_(fns),(...args)=>dispatchWith_(pred,fns,...args))
