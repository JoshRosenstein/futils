// @ts-nocheck
import {curryN_} from './curryN'
import {Constructor} from './_types/ts/$types'

const throwConstructError = () => {
  throw new Error('Constructor with greater than ten arguments')
}

export const constructN_ = (n, Func) =>
  Func.length > 10
    ? throwConstructError()
    : curryN_(n, (...args) => new Func(...args))

export const constructN = curryN_(2, constructN_)

export default constructN
