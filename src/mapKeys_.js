import mapKeysWithValueKey_ from './mapKeysWithValueKey_'

export default (fn,functor)=> mapKeysWithValueKey_((v,key)=> fn(key),functor)
