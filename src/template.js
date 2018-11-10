import {curry2_} from './curry2_'
import {path_} from './path'
import safeEval_ from './safeEval_'
import {isString} from 'typed-is'

export const template_ = (string, data) =>
  isString(string)
    ? safeEval_(
        string.replace(/{\!([^}]+)}/g, (_, key) => {
          const res = path_(key, data)
          return res
        }),
      )
    : string
export const template = curry2_(template_)
export default template
