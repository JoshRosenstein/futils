import evolve from './evolve'
import curry from './curry'
import identity from './identity'

export default curry((xfrms, val, key) => {
  let f = xfrms[key] || identity
  if (typeof f === 'object') f = evolve(f)
  return f(val)
})
