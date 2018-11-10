import {isPopulated_} from './isPopulated'
import {isObject} from './isObject'

export default x => isObject(x) && isPopulated_(x)
