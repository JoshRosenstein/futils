import converge_ from './converge_'

export default (fns) => converge_((...args)=>args, fns)
