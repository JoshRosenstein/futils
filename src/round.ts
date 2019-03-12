import {curry2_} from './_internal/curry2_'
import {split_} from './split'

export const round_ = (precision, number) => {
  precision = precision == null ? 0 : Math.min(precision, 292)
  if (precision) {
    let pair = split_('e', `${number}e`)
    const value = Math.round(`${pair[0]}e${+pair[1] + precision}`)
    pair = split_('e', `${value}e`)
    return +`${pair[0]}e${+pair[1] - precision}`
  }

  return Math.round(number)
}

export const round = curry2_(round_)
export default round
