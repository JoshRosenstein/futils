export default  f => function curried(a, b, c) {
  if (arguments.length >= 3) return f(a, b, c)
  if (arguments.length === 2) return c2 => f(a, b, c2)
  return function(b2, c2) {
    if (arguments.length === 2) return f(a, b2, c2)
    return c3 => f(a, b2, c3)
  }
}
