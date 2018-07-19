import is_ from './is_'

export default (a, b) =>
  (is_('Array', a) && is_('Array', b)) || (is_('String', a) && is_('String', b))
    ? a.concat(b)
    : null
