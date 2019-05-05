export const type_ = (value) =>
  value === null
    ? 'null'
    : value === undefined
    ? 'undefined'
    : Object.prototype.toString.call(value).slice(8, -1);

export const type = type_;

export default type;
