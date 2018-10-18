import path_ from './path_'
import curryN_ from './curryN_'

export default curryN_(3, (paths = [], fn, obj = {}) => fn(path_(paths, obj)))
