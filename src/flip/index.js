import { curry3 } from "../curry"

export default curry3((fn, left, right) => fn(right, left))
