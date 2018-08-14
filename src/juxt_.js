import converge_ from './converge_'
import argsToList from './argsToList'

export default (fns) => converge_(argsToList, fns)
