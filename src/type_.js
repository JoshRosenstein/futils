// @flow

export default (value: ?any): string => {
  if (value === null) {
    return 'null'
  }

  if (value === undefined) {
    return 'undefined'
  }

  return Object.prototype.toString.call(value).slice(8, -1)
}
