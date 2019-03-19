import { mapValues_ } from './mapValues';
import { last_ } from './last';
export const pairsValues_ = pairs => mapValues_(last_, pairs);
export const pairsValues = pairsValues_;
export default pairsValues;
