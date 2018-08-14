import isNil_ from './isNil_'

import values_ from './values_'

export default obj => isNil_(obj)?undefined: obj.length || obj.size || values_(obj).length
