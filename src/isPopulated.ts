import {isEmpty} from 'typed-is/lib/isEmpty'
export const isPopulated_ = x => !isEmpty(x)
export const isPopulated = isPopulated_

export default isPopulated
