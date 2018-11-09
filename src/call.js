export function call_(fn) {
  return arguments.length > 1
    ? fn.apply(fn, [].slice.call(arguments, 1))
    : function() {
        return fn.apply(fn, arguments)
      }
}

export const call = call_

export default call
