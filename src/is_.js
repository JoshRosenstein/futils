import type_ from './type_'


export default (sig, value) =>
  sig === 'null'
    ? value === null
    : sig === 'undefined'
      ? value === undefined
      : value === undefined || value === null ? false : type_(value) === sig
