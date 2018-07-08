import cond from './cond'
import always from './always'
import T from './T'
import equals from './equals'
describe("cond", () => {
test('returns value from callback for matched condition', () => {
  const val = cond([
    [i => i === 3, i => 3],
    [i => i > 1, i => 2],
    [i => true, i => 1]
  ])
  expect(val(1)).toBe(1)
  expect(val(2)).toBe(2)
  expect(val(3)).toBe(3)
})

test('returns undefined when no one condition is true', () => {
  const val = cond([[i => i === 3, i => 3]])
  expect(val(4)).toBe(undefined)
})

test('returns undefined when no conditions passes', () => {
  const val = cond([])
  expect(val(4)).toBe(undefined)
})

test('R', () => {
  var fn = cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => 'nothing special happens at ' + temp + '°C']
]);

  expect(fn(0)).toBe('water freezes at 0°C')
    expect(fn(50)).toBe('nothing special happens at 50°C')
      expect(fn(100)).toBe('water boils at 100°C')
})
})
