import { curry2_ } from './_internal/curry2_';

export type Join = {
  (separator: string): (list: any[]) => string;
  (separator: string, list: any[]): string;
};

export const join_ = (del: string, arr: any[]) => arr.join(del);

export const join = curry2_(join_) as Join;
export default join;
