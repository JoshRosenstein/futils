import is_ from './is_'

export default (offset, list) => {
  const idx = offset < 0 ? list.length + offset : offset
  return is_('String', list) ? list.charAt(idx) : list[idx]
}
