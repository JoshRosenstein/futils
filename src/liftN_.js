import reduce_ from './reduce_'
import ap_ from './ap'
import curryN_ from './curryN'
import mapValues_ from './mapValues_'

export default (arity, fn)=>{
  const lifted = curryN_(arity, fn)
  return curryN_(arity,(...args)=>{
    const first = args.shift()
    return reduce_((acc,v)=>ap_(acc,v), mapValues_(lifted, first), args)}

  )}
