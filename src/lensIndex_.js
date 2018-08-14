import lens_ from './lens_'
import assoc from './assoc'

export default
k =>
  lens_(
    xs => xs[k],
    assoc(k)
  )
