import {reject_} from './reject'
import isNil from './isNil'

export const rejectNil_ = obj => reject_(isNil, obj)
export const rejectNil = rejectNil_

export default rejectNil
