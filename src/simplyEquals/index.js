import {curry2} from '../curry'
export const simplyEquals=(a,b)=>a === b

export default curry2(simplyEquals)
