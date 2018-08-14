import where_ from './where_'
import equals_ from './equals_'
import curry2_ from './curry2_'
import mapValues_ from './mapValues_'

export default curry2_((spec, testObj)=> where_(mapValues_(a=>b=>equals_(a,b), spec), testObj))
