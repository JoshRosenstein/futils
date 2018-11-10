import {isNil, isEmpty} from 'typed-is'

export default value => isNil(value) || isEmpty(value)
