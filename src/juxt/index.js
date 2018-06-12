import converge from "../converge";
export default (fns) => converge(function() {
    return Array.prototype.slice.call(arguments, 0)
  }, fns)
