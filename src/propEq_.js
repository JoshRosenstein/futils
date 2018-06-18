import prop_ from './prop_'
import equals_ from './equals_'

export default (name, v,obj) => equals_(v,prop_(name,obj))
