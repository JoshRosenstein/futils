import reduceWhile_ from './reduceWhile_'


export default (handlerFn, list) =>
  reduceWhile_(
    acc => acc === false,
    (acc, value, key) => handlerFn(value,key),
    false,
    list
  )
