import {liftN_} from './liftN'

export const lift_ = fn => liftN_(fn.length, fn)
export const lift = lift_
export default lift
