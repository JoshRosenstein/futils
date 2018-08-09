export default (f, g) =>(...args) => f(...args) && g(...args)
