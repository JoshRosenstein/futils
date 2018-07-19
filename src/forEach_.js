import toPairs_ from './toPairs_'


export default (fn, functor) => {
  if (typeof functor.forEach === 'function') {
    functor.forEach((value, key) => {
      fn(value,key)
    })

    return functor
  }

  return toPairs_(functor).forEach(([key, value]) => {
    fn(value,key)
  })
}
  
