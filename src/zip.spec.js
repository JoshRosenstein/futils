import zip from './zip'

describe('Zip', () => {

  test('Works Arrays', () => {
    expect(
      zip([1, 2, 3], ['a', 'b', 'c'])
    ).toEqual([[1, 'a'], [2, 'b'], [3, 'c']])
  })

  test('Works Obkects', () => {
    expect(
      zip({
        aaa: '1',
        bbb: '2',
        ccc: '0',
      })({
        aaa: '0',
        bbb: '0',
        ccc: '0',
      })
    ).toEqual({
      aaa: ['1', '0'],
      bbb: ['2', '0'],
      ccc: ['0', '0'],
    })
  })

})
 
