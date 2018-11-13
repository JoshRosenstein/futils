import {curry2_} from './_internal/curry2_'

export const gt_ = (a, b) => a > b
export const gt = curry2_(gt_)

export default gt
