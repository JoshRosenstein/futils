import empty_ from './empty_'
import equals_ from './equals_'
// import length_ from "./length"
import isDefined_ from './isDefined_'

export default x => isDefined_(x) && equals_(x , empty_(x))
