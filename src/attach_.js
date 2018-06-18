import type_ from "./type_"


export default (key, value, functor) => {
  switch (type_(functor)) {
    case "Object": {
      return {
        ...functor,
        [key]: value
      };
    }
    case "Array": {
      return [...functor.slice(0, key), value, ...functor.slice(key)];
    }
    case "String": {
      return `${functor.slice(0, key)}${value}${functor.slice(key)}`;
    }
    case "Map": {
      return new Map([...functor, [key, value]]);
    }
    case "Set": {
      return new Set([...functor, value]);
    }
    default: {
      throw new Error(
        `attach doesn't know how to set a key and value on ${type_(functor)}`
      );
    }
  }
};
