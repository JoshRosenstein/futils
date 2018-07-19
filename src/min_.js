import toArray_ from './toArray_'
import first_ from './first_'

export default (l, r) =>
  first_([...toArray_(l), ...toArray_(r)].sort((a, b) => a > b))
