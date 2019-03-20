const fromIteratorToArrayIterator = list => iterator => {
  const {value, done} = iterator.next()

  if (done) {
    return list
  }

  return fromIteratorToArrayIterator([...list, value])(iterator)
}

export const fromIteratorToArray_ = iterator =>
  fromIteratorToArrayIterator([])(iterator)
export const fromIteratorToArray = fromIteratorToArray_
export default fromIteratorToArray
