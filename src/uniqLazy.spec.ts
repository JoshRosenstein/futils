import {uniqLazy} from './uniqLazy'
import {flow} from './flow'
import {createCounter} from './_internal/_counter'
import {takeArr} from './takeArr'

it('uniqLazy', () => {
  expect(uniqLazy([1, 2, 2, 5, 1, 6, 7])).toEqual([1, 2, 5, 6, 7])
})

describe('flow', () => {
  it('uniqLazy', () => {
    const counter = createCounter()
    const result = flow(
      [1, 2, 2, 5, 1, 6, 7],
      counter.fn(),
      uniqLazy(),
      takeArr(3),
    )
    expect(counter.count).toHaveBeenCalledTimes(4)
    expect(result).toEqual([1, 2, 5])
  })

  it('takeArr before uniqLazy', () => {
    // bug from https://github.com/remeda/remeda/issues/14
    const counter = createCounter()
    const result = flow(
      [1, 2, 2, 5, 1, 6, 7],
      counter.fn(),
      takeArr(3),
      uniqLazy(),
    )
    expect(counter.count).toHaveBeenCalledTimes(3)
    expect(result).toEqual([1, 2])
  })
})
