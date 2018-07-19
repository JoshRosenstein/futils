import type_ from './type_'

export default value=>  {switch (type_(value)) {
case 'Array':
case 'Object':
case 'Map':
case 'Set':
case 'String':
case 'Stream': {
  return true
}
default: {
  return false
}
}}
