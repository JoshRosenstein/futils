// // @flow
// import type_ from './type_'
// import has_ from './has_'
// import keys_ from './keys_'

// const eq = (a, b, aStack = [], bStack = []) => {
//   if (a === b) return true
//   if (a == null || b == null) return a === b
//   let result = true
//   const typeA = type_(a)
//   const typeB = type_(b)
//   if (typeA !== typeB) return false

//   switch (typeA) {
//     case 'String':
//     case 'Number': {
//       return a.valueOf() === b.valueOf()
//     }
//     case 'Boolean':
//     case 'Date': {
//       return +a === +b
//     }
//     case 'RegExp': {
//       return a.toString() === b.toString()
//     }
//     default:
//   }

//   if (typeof a !== 'object' || typeof b !== 'object') {
//     return false
//   }

//   let length = aStack.length
//   while (length--) {
//     // Linear search. Performance is inversely proportional to the number of
//     // unique nested structures.
//     if (aStack[length] === a) {
//       return bStack[length] === b
//     }
//   }

//   // Add the first object to the stack of traversed objects.
//   aStack.push(a)
//   bStack.push(b)
//   let size = 0

//   if (typeA === 'Array') {
//     size = a.length
//     if (size !== b.length) {
//       return false
//     }

//     while (size--) {
//       result = eq(a[size], b[size], aStack, bStack)
//       if (!result) {
//         return false
//       }
//     }
//   }

//   // Deep compare objects.
//   const aKeys = keys_(a)
//   let key
//   size = aKeys.length

//   const bKeys = keys_(b)
//   if (bKeys.length !== size) {
//     return false
//   }

//   while (size--) {
//     key = aKeys[size]

//     // Deep compare each member
//     result = has_(key, b) && eq(a[key], b[key], aStack, bStack)

//     if (!result) {
//       return false
//     }
//   }
//   // Remove the first object from the stack of traversed objects.
//   aStack.pop()
//   bStack.pop()

//   return result
// }

// export default (a: any, b: any): boolean => eq(a, b)
