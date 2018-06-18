import path_ from "./path_"
import mapValues_ from "./mapValues_"
import toArray_ from "./toArray_"

export default(p, obj) => mapValues_(x => path_(toArray_(p), x), obj)
