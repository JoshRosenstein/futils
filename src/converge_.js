import curryN_ from './curryN_'
import pluck_ from './pluck_'
import max_ from './max_'

const converge_=(after, fns)=>(...args)=>after.apply(converge_, fns.map(fn => fn.apply(converge_, args)))


export default (after, fns) => curryN_(
  max_(0,pluck_('length', fns)) ,converge_(after, fns)

)
