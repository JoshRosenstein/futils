import path from "../path"
import { mapValues_ } from "../mapValues"
import { curry2 } from "../curry"
import  juxt  from "../juxt"

const plucks_ = (keychains, functor) =>
  mapValues_(juxt(mapValues_(path, keychains)), functor)

export default curry2(plucks_)
