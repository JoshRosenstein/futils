export default  (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)), arg => arg)
