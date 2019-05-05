import { isEmpty } from './isEmpty';

const data = [
  [[1, 2, 3], false],
  [[undefined], false],
  [false, false],
  [true, false],
  [0, false],
  [NaN, false],
  [[], true],
  ['', true],
  [null, true],
  [{}, true],
  [undefined, true],
];

test.each(data)('%# %p', (input, expected) => {
  expect(isEmpty(input)).toEqual(expected);
});
