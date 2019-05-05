import complementOne_ from './_internal/complementOne_';
import { isObject } from './isObject';

export const isNotObject_ = complementOne_(isObject);
export const isNotObject = isNotObject_;
export default isNotObject;
