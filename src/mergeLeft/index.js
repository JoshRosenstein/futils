import type from "../type";
import { curry2 } from "../curry";
import (isNil) from './isNil'

export const mergeLeft_ = (left, right) => {
  if(isNil(left)) return right
    if(isNil(right)) return left
  if (type(left) !== type(right)) {
    throw new Error(
      `mergeLeft received a ${type(left)} and ${type(
        right
      )} which aren't the same`
    );
  }
  switch (type(left)) {
    case "Array": {
      return [...right, ...left];
    }

    case "Object": {
      return {
        ...right,
        ...left
      };
    }

    case "Map": {
      return new Map([...right, ...left]);
    }

    case "Set": {
      return new Set([...right, ...left]);
    }

    case "String": {
      return `${right}${left}`;
    }

    default: {
      throw new Error(`mergeLeft doesn't know how to deal with ${type(left)}`);
    }
  }
};

export default curry2(mergeLeft_);
