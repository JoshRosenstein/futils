import {mergeAllObj} from './mergeAllObj'

test('merge objects', () => {
  const e = mergeAllObj([{a: 1, b: 1}, {b: '2', c: 3}, {d: 10}])
  const r = {
    a: 1,
    b: '2',
    c: 3,
    d: 10,
  }

  expect(e).toEqual(r)
})
