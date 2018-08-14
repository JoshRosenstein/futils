
import curryN_ from './curryN_'

export default (pred)=>curryN_(pred.length,
  (...args)=> !pred(...args)
)
