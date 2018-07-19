import call_ from './call_'
import always_ from './always_'
import when_ from './when_'

// const callIfDefined = (cond,fn, obj) => when(cond(obj), fn(obj))

export default (condition, whenTrueFn,input) => {
  const flag = typeof condition === 'boolean' ? condition : condition(input)
  return flag? whenTrueFn(input):input

}
