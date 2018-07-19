export default str => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
}
