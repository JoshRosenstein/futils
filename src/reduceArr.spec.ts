import {reduceArr} from './reduceArr'
import {flow} from './flow'
const array = [1, 2, 3, 4, 5]

describe('data first', () => {
  test('reduceArr', () => {
    expect(reduceArr(array, (acc, x) => acc + x, 100)).toEqual(115)
  })
  test('reduceArr.indexed', () => {
    let i = 0
    const e = reduceArr.indexed(
      array,
      (acc, x, index, items) => {
        expect(index).toBe(i)
        expect(items).toBe(array)
        i++
        return acc + x
      },
      100,
    )

    expect(e).toEqual(115)
  })
})

describe('data last', () => {
  test('reduceArr', () => {
    const e = flow(
      array,
      reduceArr((acc, x) => acc + x, 100),
    )
    expect(e).toEqual(115)
  })

  test('reduceArr.indexed', () => {
    const e = flow(
      array,
      reduceArr.indexed((acc, x) => acc + x, 100),
    )

    expect(e).toEqual(115)
  })
})
