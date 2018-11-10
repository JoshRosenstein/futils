import {constructN_} from './constructN'

export const construct_ = Func => constructN_(Func.length, Func)
export const construct = construct_
export default construct
