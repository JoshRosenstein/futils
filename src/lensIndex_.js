import lens_ from './lens_'
import assoc_ from './assoc_'

export default k => lens_(xs => xs[k], (v, o) => assoc_(k, v, o))
