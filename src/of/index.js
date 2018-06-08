import type from "../type";
import curry from "../curry";

export default curry((key, value, functor) => {
  switch (type(functor)) {
    case "Array": {
      return [value];
    }
    case "Object": {
      return { [key]: value };
    }
    case "Set": {
      return new Set([value]);
    }
    case "Map": {
      return new Map([[key, value]]);
    }
    case "String": {
      return `${value}`;
    }

    default: {
      throw new Error(`of doesn't know how to type ${type(functor)}`);
    }
  }
});
