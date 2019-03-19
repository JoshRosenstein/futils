import { max_ } from '../max';
import { pluck_ } from '../pluck';
export const maxArgs_ = fns => max_(0, pluck_('length', fns));
export default maxArgs_;
