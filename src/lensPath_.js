import assocPath from './assocPath'
import lens_ from './lens'
import path_ from './path_'


export default
k =>
  lens_(o=>path_(k,o), assocPath(k))
