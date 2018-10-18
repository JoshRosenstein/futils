// @flow
export default (str: string): string => {
  if (typeof str !== 'string') {
    throw new TypeError('Escape String expected a string')
  }
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
}
