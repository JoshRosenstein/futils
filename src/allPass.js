import curryN_ from './curryN_'
import allPass_ from './allPass_'
import maxArgs from './maxArgs'


export default fns=>curryN_(maxArgs(fns),(...args)=>allPass_(fns,...args))
