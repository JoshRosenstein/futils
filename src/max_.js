
import toArray_ from './toArray_'
import first_ from './first_'

export default (a, b) =>
  first_([...toArray_(a), ...toArray_(b)].sort((a, b) => a < b))
