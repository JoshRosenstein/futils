import { isObject } from './isObject';
import { isPopulated_ } from './isPopulated';

export const isPopulatedObject_ = (x) => isObject(x) && isPopulated_(x);
export const isPopulatedObject = isPopulatedObject_;

export default isPopulatedObject;
