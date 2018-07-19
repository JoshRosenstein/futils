import always_ from './always_'
import mapValues_ from './mapValues_'
import when_ from './when_'

export default (predicate,replacement,obj)=>mapValues_(val=>when_(predicate,always_(replacement),val),obj)
