import type from "../type";
import curry from "../curry";

export default curry((value, orderedList) => {
  switch (type(orderedList)) {
    case "String": {
      return `${value}${orderedList}`;
    }
    case "Array": {
      return [value, ...orderedList];
    }
    default: {
      throw new Error(
        `prepend doesn't know how to deal with ${type(orderedList)}`
      );
    }
  }
});
