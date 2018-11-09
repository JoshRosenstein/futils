import max_ from './max_'
import pluck_ from './pluck_'

export default fns => max_(0, pluck_('length', fns))
