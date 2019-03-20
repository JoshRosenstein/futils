import {curry2_} from './_internal/curry2_'

export type And_ = <
  T extends {and?: (...a: any[]) => any} | number | boolean | string | null
>(
  fn1: T,
  val2: any,
) => boolean

export type And = And_ &
  (<T extends {and?: (...a: any[]) => any} | number | boolean | string | null>(
    fn1: T,
  ) => (val2: any) => boolean)

export const and_: And_ = (a, b) => a && b

export const and: And = curry2_(and_)

export default and
