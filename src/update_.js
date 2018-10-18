import assoc from './assoc'

export default (i, v, l) =>
  Math.abs(i) >= l.length ? l : assoc(i < 0 ? l.length + i : i, v, l)
