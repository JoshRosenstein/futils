import sequence from './sequence'

describe('sequence', () => {
  test('works', () => {
    const increment = x => x + 1
    const decrement = x => x - 1
    const itself = x => x
    expect(sequence([increment, decrement])(1)).toEqual([2, 0])
    expect(sequence(new Set([increment, decrement]))(1)).toEqual(
      new Set([2, 0]),
    )
    expect(sequence(new Map([['a', increment], ['b', decrement]]))(1)).toEqual(
      new Map([['a', 2], ['b', 0]]),
    )
    expect(
      sequence({
        xxx: increment,
        yyy: decrement,
        zzz: itself,
      })(1),
    ).toEqual({
      xxx: 2,
      yyy: 0,
      zzz: 1,
    })
  })
})
