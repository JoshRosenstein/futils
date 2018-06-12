import type from "../type";
import { curry2 } from "../curry";
import isNil from '../isNil'

export const merge_ = (left, right) => {
  if(isNil(left)) return right
    if(isNil(right)) return left
  if (type(left) !== type(right)) {
    throw new Error(
      `merge received a ${type(left)} and ${type(
        right
      )} which aren't the same`
    );
  }
  switch (type(left)) {
    case "Array": {
      return [...left, ...right];
    }

    case "Object": {
      return {
        ...left,
        ...right
      };
    }

    case "Map": {
      return new Map([...left, ...right]);
    }

    case "Set": {
      return new Set([...left, ...right]);
    }

    case "String": {
      return `${left}${right}`;
    }

    default: {
      throw new Error(`merge doesn't know how to deal with ${type(left)}`);
    }
  }
};

export default curry2(merge_);
