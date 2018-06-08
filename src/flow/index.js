import pipe from "../pipe";

export default (value, ...argsToGive) => pipe(...argsToGive)(value);
