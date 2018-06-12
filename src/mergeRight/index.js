import type from "../type";
import { curry2 } from "../curry";
//// TODO: Create empty if left or Right is Null
export const mergeRight_ = (left, right) => {
  if (type(left) !== type(right)) {
    throw new Error(
      `mergeRight received a ${type(left)} and ${type(
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
      throw new Error(`mergeRight doesn't know how to deal with ${type(left)}`);
    }
  }
};

export default curry2(mergeRight_);
