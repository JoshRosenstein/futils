
export default fn=>function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  }
