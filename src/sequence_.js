import mapValues from './mapvalues'
import applyTo_ from './applyTo_'

export default (fns,value)=>mapValues(fn=>applyTo_(value,fn),fns)
