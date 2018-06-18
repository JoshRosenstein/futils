export default (fns, value) => {
  let i = 0
  let length = fns.length
  while (i < length && !fns[i](value)) {
    i += 1
  }
  return i < length
}
