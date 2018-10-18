export default function cond_(conds, data) {
  return conds.length
    ? conds[0][0](data)
      ? conds[0][1](data)
      : cond_(conds.slice(1), data)
    : undefined
}
