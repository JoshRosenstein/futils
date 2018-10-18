import path_ from './path_'
import mapValues_ from './mapValues_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keychains, functor) =>
  mapValues_(
    obj => mapValues_(p => path_(p, obj), splitWhenNoSpace_(keychains, ',')),
    functor,
  )
