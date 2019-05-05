import { type_ } from './type';

export const empty_ = (value) => {
  const t = type_(value);
  switch (t) {
    case 'null': {
      return null;
    }
    case 'undefined': {
      return undefined;
    }
    case 'String': {
      return '';
    }
    case 'Array': {
      return [];
    }
    case 'Object': {
      return {};
    }
    case 'Map': {
      return new Map();
    }
    case 'Set': {
      return new Set();
    }

    default: {
      return typeof value.empty === 'function'
        ? value.empty()
        : value.constructor != null &&
          typeof value.constructor.empty === 'function'
        ? value.constructor.empty()
        : null;

      // throw new Error(`empty doesn't know how to handle ${t}`)
    }
  }
};

export const empty = empty_;
export default empty;
