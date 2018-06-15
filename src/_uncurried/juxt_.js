import converge_ from "./converge_";

export default (fns) => converge_(function() {
    return Array.prototype.slice.call(arguments, 0)
  }, fns)
