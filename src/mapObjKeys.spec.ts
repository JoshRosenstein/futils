import {mapObjKeys} from './mapObjKeys'
import {flow} from './flow'
describe('data_first', () => {
  test('Object', () => {
    const a = mapObjKeys(
      {
        age: 29,
        interval: 10,
      },
      key => key + 1,
    )
    const eA = {age1: 29, interval1: 10}

    expect(a).toEqual(eA)
  })
})

describe('data_last', () => {})
test('Object', () => {
  const a = flow(
    {
      age: 29,
      interval: 10,
    },
    mapObjKeys(key => key + 1),
  )

  const eA = {age1: 29, interval1: 10}

  expect(a).toEqual(eA)
})
