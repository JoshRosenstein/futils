import assoc from './assoc'
import lens_ from './lens'
import prop from './prop'


export default
k =>
  lens_(prop(k), assoc(k))
