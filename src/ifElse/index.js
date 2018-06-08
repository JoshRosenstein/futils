import { curry4 } from "../curry";

const ifElse_ = (predicate, consequent, alternative, value) => {
  predicate(value) ? consequent(value) : alternative(value);
};
export default curry4(ifElse_);
