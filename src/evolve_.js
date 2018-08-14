
import map from './map'
import xfrm_ from './xfrm_'

export default (xfrms, obj) => map((v,k)=>xfrm_(xfrms,v,k), obj)
