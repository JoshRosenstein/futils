import is_ from './is_'
import replace_ from './replace_'
import toString_ from './toString_'
import isNil_ from './isNil_'

export default x => {
  if (isNil_(x)) {
    return x
  }
  if (is_('String',x)) {
    const xx = parseInt(x)

    return replace_(toString_(xx), toString_(xx - 1), x)
  } 
  return x - 1
  
}
