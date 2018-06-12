
import {path_} from "../path";
import {defaultTo_} from "../defaultTo";
import {curry3} from '../curry'

export const pathOr_=(d, p, obj)=>defaultTo_(d, path_(p, obj))

export default curry3(pathOr_)
