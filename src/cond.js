import curry2_ from './curry2_'

const cond_ = (conds, data) =>
  conds.length
    ? conds[0][0](data)
      ? conds[0][1](data)
      : cond_(conds.slice(1), data)
    : undefined

const cond = curry2_(cond_)

export default cond
