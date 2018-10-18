import type_ from './type_'

const fromMapping = {
  Object: (key, value, functor) => ({
    ...functor,
    [key]: value,
  }),
  Array: (key, value, functor) => [
    ...functor.slice(0, key),
    value,
    ...functor.slice(key),
  ],
  String: (key, value, functor) =>
    `${functor.slice(0, key)}${value}${functor.slice(key)}`,
  Map: (key, value, functor) => new Map([...functor, [key, value]]),
  Set: (key, value, functor) => new Set([...functor, value]),
}

export default (key, value, functor) => {
  const type = type_(functor)
  // eslint-disable-line no-redeclare
  if (fromMapping.hasOwnProperty(type)) {
    return fromMapping[type](key, value, functor)
  }
  throw new Error(`attach doesn't know how to set a key and value on ${type}`)
}

// export default (key, value, functor) =>
//   ({
//     Object: () => ({
//       ...functor,
//       [key]: value,
//     }),
//     Array: () => [...functor.slice(0, key), value, ...functor.slice(key)],
//     String: () => `${functor.slice(0, key)}${value}${functor.slice(key)}`,
//     Map: () => new Map([...functor, [key, value]]),
//     Set: () => new Set([...functor, value]),
//   }[type_(functor)]) ||

// {
//   switch (type_(functor)) {
//     case 'Object': {
//       return {
//         ...functor,
//         [key]: value,
//       }
//     }
//     case 'Array': {
//       return [...functor.slice(0, key), value, ...functor.slice(key)]
//     }
//     case 'String': {
//       return `${functor.slice(0, key)}${value}${functor.slice(key)}`
//     }
//     case 'Map': {
//       return new Map([...functor, [key, value]])
//     }
//     case 'Set': {
//       return new Set([...functor, value])
//     }
//     default: {
//       throw new Error(
//         `attach doesn't know how to set a key and value on ${type_(functor)}`,
//       )
//     }
//   }
// }
