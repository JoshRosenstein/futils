import {isPopulated} from './isPopulated'

const data = [
  [[1, 2, 3], true],
  [[undefined], true],
  [[], false],
  ['', false],
  [null, false],
  [{}, false],
  [undefined, false],
  [false, true],
  [true, true],
  [0, true],
  [NaN, true],
]

test.each(data)('%# %p', (input, expected) => {
  expect(isPopulated(input)).toEqual(expected)
})
