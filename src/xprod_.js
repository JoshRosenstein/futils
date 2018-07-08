
export default (a, b)=> {
  const res = []
  var ia = 0
  var ib
  var alen = a.length
  var blen = b.length
  while (ia < alen) {
    ib = 0
    while (ib < blen) {
      res.push([a[ia], b[ib]])
      ib += 1
    }
    ia += 1
  }
  return res
}
