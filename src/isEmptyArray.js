import isArray from './isArray'
import isEmpty from './isEmpty'

export default function isEmptyArray(value) {
  return isArray(value) && isEmpty(value)
}

// const a = (v: any) => {
//   if (!isEmptyArray(v)) {
//     return v[1]
//   }
//   return v
// }
