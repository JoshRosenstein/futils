
export default (fn1, fn2) => function() {
  return fn1.apply(fn1, arguments) || fn2.apply(fn2, arguments)
}
