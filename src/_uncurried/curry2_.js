export default f => {
  return function curried(a, b) {
    return arguments.length >= 2 ? f(a, b) : b2 => f(a, b2)
  }
}
