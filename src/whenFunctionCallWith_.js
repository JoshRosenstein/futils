import isFunction from './isFunction'

export default  (...args) =>test=> isFunction(test)?test(...args):test
