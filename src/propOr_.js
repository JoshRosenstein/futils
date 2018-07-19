import prop_ from './prop_'
import defaultTo_ from './defaultTo_'

export default (d,name, keyedFunctor) => defaultTo_(d,prop_(name, keyedFunctor))
