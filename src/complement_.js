
import curryN from './curryN'

export default (pred)=>curryN(pred.length,
  (...args)=> !pred(...args)
)
