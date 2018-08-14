import assocPath_ from './assocPath_'
import lens_ from './lens_'
import path_ from './path_'


export default
k =>
  lens_(o=>path_(k,o), (v,o)=>assocPath_(k,v,o))
