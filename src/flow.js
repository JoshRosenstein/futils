import {curry2_} from './curry2_'
import {pipe_} from './pipe'

export const flow_ = (value, ...argsToGive) => pipe_(...argsToGive)(value)

export const flow = curry2_(flow_)
export default flow
