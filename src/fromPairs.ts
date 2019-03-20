// // TODO: from Pairs
export const fromPairs_ = list => {
  const obj = {}
  let i = 0
  while (i < list.length) {
    obj[list[i][0]] = list[i][1]
    i++
  }
  return obj
}

export const fromPairs = fromPairs_

export default fromPairs
