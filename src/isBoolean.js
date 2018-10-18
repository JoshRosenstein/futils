// @flow
import is_ from './is_'

const isBoolean = (value: mixed): boolean => is_('Boolean', value)

export default isBoolean
