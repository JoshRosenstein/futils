import plucks from './plucks';

describe('plucks', () => {
  test('works', () => {
    expect(
      plucks([
        ['attributes', 'name'],
        ['attributes', 'age'],
        ['attributes', 'friends'],
        ['id'],
      ])([
        {
          id: '1',
          attributes: {
            name: 'Bond',
            age: 50,
            height: '5\'10"',
          },
        },
        {
          id: '2',
          attributes: {
            name: 'James',
            age: 50,
            height: '5\'8"',
            friends: ['Miss Money'],
          },
        },
      ]),
    ).toEqual([
      ['Bond', 50, undefined, '1'],
      ['James', 50, ['Miss Money'], '2'],
    ]);
  });

  test('DotNotation', () => {
    expect(
      plucks(['attributes.name', 'attributes.age', 'attributes.friends', 'id'])(
        [
          {
            id: '1',
            attributes: {
              name: 'Bond',
              age: 50,
              height: '5\'10"',
            },
          },
          {
            id: '2',
            attributes: {
              name: 'James',
              age: 50,
              height: '5\'8"',
              friends: ['Miss Money'],
            },
          },
        ],
      ),
    ).toEqual([
      ['Bond', 50, undefined, '1'],
      ['James', 50, ['Miss Money'], '2'],
    ]);
  });
  test('Dot&CommaNotation', () => {
    expect(
      plucks('attributes.name,attributes.age,attributes.friends,id')([
        {
          id: '1',
          attributes: {
            name: 'Bond',
            age: 50,
            height: '5\'10"',
          },
        },
        {
          id: '2',
          attributes: {
            name: 'James',
            age: 50,
            height: '5\'8"',
            friends: ['Miss Money'],
          },
        },
      ]),
    ).toEqual([
      ['Bond', 50, undefined, '1'],
      ['James', 50, ['Miss Money'], '2'],
    ]);
  });
});
