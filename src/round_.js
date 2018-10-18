// From Lodash
import split_ from './split_'

export default (precision, number) => {
  precision = precision == null ? 0 : Math.min(precision, 292)
  if (precision) {
    let pair = split_('e', `${number}e`)
    const value = Math.round(`${pair[0]}e${+pair[1] + precision}`)
    pair = split_('e', `${value}e`)
    return +`${pair[0]}e${+pair[1] - precision}`
  }

  return Math.round(number)
}
