import curryN_ from './curryN'

export default (arity, name )=>curryN_(arity+1,
  (...args)=>{
    const obj = args.pop()
    return obj[name](...args) 
  }
)
