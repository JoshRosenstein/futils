import {curry2} from '../curry'


const round_ = (precision, num) => Number(`${Math.round(`${num}e${precision}`)}e-${precision}`)

export default curry2(round_)
