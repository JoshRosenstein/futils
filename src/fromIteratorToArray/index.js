const fromIteratorToArrayIterator = list => iterator => {
  const { value, done } = iterator.next();

  if (done) {
    return list;
  }

  return fromIteratorToArrayIterator([...list, value])(iterator);
};

export default iterator => fromIteratorToArrayIterator([])(iterator);
