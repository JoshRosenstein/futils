import {curry2_} from './_internal/curry2_'

export function decimalPlaces(value: number | string) {
  const match = String(value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)

  if (!match) {
    return 0
  }

  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) -
      // Adjust for scientific notation.
      (match[2] ? +match[2] : 0),
  )
}

export const round_ = (precision = 1, number: number) => {
  number = Math.round(number / precision) * precision
  // return number.toPrecision(precision)
  return Number(number.toFixed(decimalPlaces(precision)))
}

export const round: Round = curry2_(round_)
export default round

export type Round = {
  (a: number, b: number): number
  (a: number): (b: number) => number
}
