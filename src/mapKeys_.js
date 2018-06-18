import mapKeysWithValueKey_ from "./mapKeysWithValueKey_";

export default (fn,functor)=> {
    return mapKeysWithValueKey_((v,key)=> fn(key),functor)
  }
