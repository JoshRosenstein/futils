import curry2_ from './_internal/curry2_'
import {construct_} from './construct'

const Const = x => ({value: x, map: () => Const(x)})
export const view_ = (lens, x) => lens(construct_(Const))(x).value
export const view = curry2_(view_)

export default view
