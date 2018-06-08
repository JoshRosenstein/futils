import curry from "../curry";
export default curry((fn, left, right) => fn(right)(left));
