import getPaths from './getPaths'


describe('getPaths ', () => {

  test('Works', () => {
    const a=getPaths({
      id: '1',
      attributes: {
        name: 'Balck Jack',
        age: 93,
      },
      meta: new Map([
        ['version', '1.0.0'],
      ]),
      included: [
        {
          id: '2',
          attributes: {
            name: 'Angela Englund',
          },
        },
      ],
    })

    const result = [
      ['id'],
      ['attributes', 'name'],
      ['attributes', 'age'],
      ['meta', 'version'],
      ['included'],
    ]
    expect(a).toEqual(result)
  })
})
