import assoc_ from './assoc_'
import lens_ from './lens_'
import prop_ from './prop_'


export default
k =>
  lens_(o=>prop_(k,o), (v,o)=>assoc_(k,v,o))
