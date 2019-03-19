import { path_ } from './path';
import { curry3_ } from './_internal/curry3_';
export const pathEq_ = (paths = [], value, obj = {}) => path_(paths, obj) === value;
export const pathEq = curry3_(pathEq_);
export default pathEq;
