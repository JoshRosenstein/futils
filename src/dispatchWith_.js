
import converge_ from './converge_'
import compose_ from './compose_'
import juxt_ from './juxt_'
import cond from './cond'
import map from './map'
import last from './last'
import apply from './apply'
import call from './call'
import xPairs from './xPairs'


const getPredicates = compose_(map(juxt_([apply(compose_), last])),xPairs)


export default converge_(call(cond), [getPredicates])
