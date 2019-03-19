import { isPopulated_ } from './isPopulated';
import { isObject } from './isObject';
export const isPopulatedObject_ = x => isObject(x) && isPopulated_(x);
export const isPopulatedObject = isPopulatedObject_;
export default isPopulatedObject;
