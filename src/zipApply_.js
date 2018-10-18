import mapValues_ from './mapValues_'
import zip_ from './zip_'
import length_ from './length_'
import call_ from './call_'
import reduceValues_ from './reduceValues_'

export default (fns, functor) => {
  if (length_(fns) !== length_(functor)) {
    throw new Error('left and right werent the same size')
  }

  return mapValues_(x => reduceValues_(call_, call_, x), zip_(fns, functor))
}
