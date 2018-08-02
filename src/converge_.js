import curryN_ from './curryN_'
import pluck_ from './pluck_'
import max_ from './max_'

const converge__=(after, fns)=>(...args)=>after.apply(converge__, fns.map(fn => fn.apply(converge__, args)))


export default (after, fns) => curryN_(
  max_(0,pluck_('length', fns)) ,converge__(after, fns)

)
