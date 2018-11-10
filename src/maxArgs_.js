import {max_} from './max'
import {pluck_} from './pluck'

export default fns => max_(0, pluck_('length', fns))
