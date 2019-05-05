import complementOne_ from './_internal/complementOne_';
import { isNumber } from 'typed-is';

export const isNotNumber_ = complementOne_(isNumber);
export const isNotNumber = isNotNumber_;
export default isNotNumber;
