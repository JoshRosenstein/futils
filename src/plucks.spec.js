import plucks from './plucks'

test('works', () => {
  expect(
    plucks([
      ['attributes', 'name'],
      ['attributes', 'age'],
      ['attributes', 'friends'],
      ['id']
    ])([
      {
        id: '1',
        attributes: {
          name: 'Kurtis',
          age: 29,
          height: "5'10\""
        }
      },
      {
        id: '2',
        attributes: {
          name: 'Chris',
          age: 29,
          height: "5'8\""
        }
      }
    ])
  ).toEqual([['Kurtis', 29, undefined, '1'], ['Chris', 29, undefined, '2']])
})
