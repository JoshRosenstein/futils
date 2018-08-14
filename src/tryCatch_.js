export default (tryer, catcher) => (...args) => {
  try {
    return tryer.apply(this, args)
  } catch (e) {
    args.unshift(e)
    return catcher.apply(this, args)
  }
}
