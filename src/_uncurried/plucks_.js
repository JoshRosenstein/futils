import path_ from "./path_"
import mapValues_ from "./mapValues_"
import toArray_ from "./toArray_"
import juxt_ from "./juxt_"

export default (keychains, functor) =>
  mapValues_(juxt_(mapValues_(p=>o=>path_(p,o), keychains)), functor)
