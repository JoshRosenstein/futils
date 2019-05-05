import { curry2_ } from './_internal/curry2_';
import { type_ } from './type';

export function append_<V extends string | number, O extends number | string>(
  value: V,
  orderedList: O,
): string;

export function append_<V extends any[], O extends any[]>(
  value: V,
  orderedList: O,
): V & O;

export function append_(value, orderedList) {
  switch (type_(orderedList)) {
    case 'Number':
    case 'String': {
      return `${orderedList}${value}`;
    }
    case 'Array': {
      return [...orderedList, value];
    }

    default: {
      throw new TypeError(
        `append doesn't know how to deal with ${type_(orderedList)}`,
      );
    }
  }
}

export const append: any = curry2_(append_);

export default append;
