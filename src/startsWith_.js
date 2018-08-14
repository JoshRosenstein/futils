import take_ from './take_'
import equals_ from './equals_'

export default (prefix, list) =>  equals_(take_(prefix.length, list),prefix)
