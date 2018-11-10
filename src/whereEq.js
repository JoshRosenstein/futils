import {where_} from './where'
import {equals_} from './equals'
import {curry2_} from './curry2_'
import {mapValues_} from './mapValues'

export const whereEq_ = (spec, testObj) =>
  where_(mapValues_(a => b => equals_(a, b), spec), testObj)

export const whereEq = curry2_(whereEq_)

export default whereEq
