import map_ from './map_'
import applyTo_ from './applyTo_'

export default (fns, value) => map_(fn => applyTo_(value, fn), fns)
