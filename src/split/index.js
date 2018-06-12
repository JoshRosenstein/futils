import { curry2 } from "../curry"

export const split = (separator, str) => str.split(separator)
export default curry2(split)
