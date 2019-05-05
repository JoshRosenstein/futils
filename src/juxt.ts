import { argsToList } from './argsToList';
import { converge_ } from './converge';

export const juxt_ = (fns) => converge_(argsToList, fns);
export const juxt = juxt_;
export default juxt;
