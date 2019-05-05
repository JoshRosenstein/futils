import { curry2_ } from './_internal/curry2_';

export type Divide = {
  (a: number, b: number): number;
  (a: number): (b: number) => number;
};

export const divide_ = (a: number, b: number) => Number(a) / Number(b);

export const divide = curry2_(divide_) as Divide;

export default divide;
