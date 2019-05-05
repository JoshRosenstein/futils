import { curry2_ } from './_internal/curry2_';
import { type_ } from './type';

export type Prepend = {
  <T>(value: T, list2: T[]): T[];
  <T>(value: T | string): (list2: T[] | string) => T[] | string;
  (list1: string, list2: string): string;
  (list1: string): (list2: string) => string;
};
export const prepend_ = (value, orderedList) => {
  switch (type_(orderedList)) {
    case 'String': {
      return `${value}${orderedList}`;
    }
    case 'Array': {
      return [value, ...orderedList];
    }
    default: {
      throw new Error(
        `prepend doesn't know how to deal with ${type_(orderedList)}`,
      );
    }
  }
};

export const prepend: Prepend = curry2_(prepend_);

export default prepend;
