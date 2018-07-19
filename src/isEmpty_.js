import empty_ from './empty_'
import equals_ from './equals_'


export default x => !(x === undefined || x === null) && equals_(x , empty_(x))
