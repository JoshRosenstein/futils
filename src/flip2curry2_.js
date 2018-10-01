import curry2_ from './curry2_'

export default fn=> curry2_((a,b)=>fn(b,a))
