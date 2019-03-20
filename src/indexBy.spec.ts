import indexBy from './indexBy'
import prop from './prop'

describe('indexBy', () => {
  it('Multiple Object different key in Array', () => {
    const a = indexBy(prop('id'))([
      {
        id: 'aaa',
        name: 'Jack Black',
      },
      {
        id: 'bbb',
        name: 'Pamela Johnson',
      },
    ])
    const ra = {
      aaa: {
        id: 'aaa',
        name: 'Jack Black',
      },
      bbb: {
        id: 'bbb',
        name: 'Pamela Johnson',
      },
    }
    expect(a).toEqual(ra)
  })

  it('Multiple Object same key in Array', () => {
    const a = indexBy(prop('id'))([
      {
        id: 'aaa',
        name: 'Jack Black',
      },
      {
        id: 'aaa',
        name: 'Pamela Johnson',
      },
    ])
    const ra = {
      aaa: {
        id: 'aaa',
        name: 'Pamela Johnson',
      },
    }

    expect(a).toEqual(ra)
  })

  it('Multiple Map different key in Set', () => {
    const a = indexBy(prop('id'))(
      new Set([
        new Map([['id', 'aaa'], ['name', 'Jack Black']]),
        new Map([['id', 'bbb'], ['name', 'Pamela Johnson']]),
      ]),
    )

    const ra = new Map([
      ['aaa', new Map([['id', 'aaa'], ['name', 'Jack Black']])],
      ['bbb', new Map([['id', 'bbb'], ['name', 'Pamela Johnson']])],
    ])

    expect(a).toEqual(ra)
  })

  it('Multiple Map same key in Set', () => {
    const a = indexBy(prop('id'))(
      new Set([
        new Map([['id', 'aaa'], ['name', 'Jack Black']]),
        new Map([['id', 'aaa'], ['name', 'Pamela Johnson']]),
      ]),
    )

    const ra = new Map([
      ['aaa', new Map([['id', 'aaa'], ['name', 'Pamela Johnson']])],
    ])

    expect(a).toEqual(ra)
  })
})
