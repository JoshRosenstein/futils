import isNil_ from './isNil_'
import complementOne_ from './complementOne_'

const isDefined_ = complementOne_(isNil_)

//const isNil_ = (val: mixed): boolean %checks => val == null

export default isDefined_
