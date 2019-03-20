import {flow} from './flow'
import {filterArr} from './filterArr'
import {mapArr} from './mapArr'

const createCounter = () => {
  const count = jest.fn()
  return {
    count,
    fn: <T>() =>
      mapArr<T, T>(x => {
        count()
        return x
      }),
  }
}

describe('data_first', () => {
  it('filterArr', () => {
    const result = filterArr([1, 2, 3], x => x % 2 === 1)
    expect(result).toEqual([1, 3])
  })

  it('filterArr.indexed', () => {
    const result = filterArr.indexed(
      [1, 2, 3],
      (x, i) => x % 2 === 1 && i !== 1,
    )
    expect(result).toEqual([1, 3])
  })
})

describe('data_last', () => {
  it('filterArr', () => {
    const counter = createCounter()
    const result = flow(
      [1, 2, 3],
      filterArr(x => x % 2 === 1),
      counter.fn(),
    )
    expect(counter.count).toHaveBeenCalledTimes(2)
    expect(result).toEqual([1, 3])
  })
  it('filterArr.indexed', () => {
    const counter = createCounter()
    const result = flow(
      [1, 2, 3],
      filterArr.indexed((x, i) => x % 2 === 1 && i !== 1),
      counter.fn(),
    )
    expect(counter.count).toHaveBeenCalledTimes(2)
    expect(result).toEqual([1, 3])
  })
})
