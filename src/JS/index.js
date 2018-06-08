

 const takesOne = name => (arg, f) => f[name](arg)
 const takesTwo = name => (arg1, arg2, f) => f[name](arg1, arg2)
 const takesN = name => (f, ...args) => f[name](...args)

//////STRINGS
export const split = takesOne("split")

//////OBJECTS

  export const instanceOf = (instanceConstructor, instance) =>
    instance instanceof instanceConstructor

  export const hasOwnProperty = takesOne("hasOwnProperty")

  export const length = x => x.length

  export const keys = obj => Object.keys(obj)

  export const assign =   (() =>
      Object.assign
        ? (obj0, ...objs) => Object.assign(obj0, ...objs)
        : (obj0, ...objs) =>
            objs.reduce((topAgg, obj) => {
              return keys(obj).reduce((agg, key) => {
                agg[key] = obj[key];
                return agg;
              }, topAgg);
            }, obj0))();

//// LISTS
  export const concat = takesN("concat")
  export const slice = takesTwo("slice")
  export const includes = (() =>
    "includes" in Array.prototype
      ? takesOne("includes")
      : (value, xs) => xs.indexOf(value) > -1)()
  export const indexOf = takesOne("indexOf")
  export const lastIndexOf = takesOne("lastIndexOf")

//// ARRAYS

export const map = takesOne("map")

export const filter = takesOne("filter")

export const reduce = takesTwo("reduce")

export const reduceRight = takesTwo("reduceRight")

export const forEach = takesOne("forEach")

export const some = takesOne("some")

export const every = takesOne("every")
export const join = takesOne("join")

export const push = takesN("push")
 
const defineReverse = () =>
  Array.prototype.reverse
    ? x => x.reverse()
    : x =>
        x.reduceRight((agg, item) => {
          agg.push(item)
          return agg
        }, [])

export const reverse = defineReverse()

///// FUNCTIONS
  export const apply = (fn, args) => fn.apply(null, args)
  export const call = (fn, ...args) => apply(fn, args)
