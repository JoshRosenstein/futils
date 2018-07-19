import is_ from './is_'


const _isArguments = (function() {
  return Object.prototype.toString.call(arguments) === '[object Arguments]'
    ? function _isArguments(x) {
      return Object.prototype.toString.call(x) === '[object Arguments]'
    }
    : function _isArguments(x) {
      return Object.prototype.hasOwnProperty.call(x,'callee')
    }
})()

export default x =>
  x != null && typeof x.empty === 'function'
    ? x.empty()
    : x != null &&
      x.constructor != null &&
      typeof x.constructor.empty === 'function'
      ? x.constructor.empty()
      : is_('Array', x)
        ? []
        : is_('String', x)
          ? ''
          : is_('Object', x)
            ? {}
            : is_('Map', x)
              ? new Map()
              : is_('Set', x)
                ? new Set()
                : _isArguments(x)
                  ? (function() {
                    return arguments
                  })()
                  : // else
                  void 0
