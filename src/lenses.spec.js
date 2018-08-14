import lensProp from './lensProp'
import lensIndex from './lensIndex'
import lens from './lens'
import prop from './prop'
import assoc from './assoc'
import view from './view'
import set from './set'
import over from './over'
import toUpper from './toUpper'
import compose from './compose'

const alice = {
  name: 'Alice Jones',
  address: ['22 Walnut St', 'San Francisco', 'CA']
}


describe('lensProp', () => {
  const nameLens = lens(prop('name'), assoc('name'))
  const addressLens = lensProp('address')
  const headLens = lensIndex(0)

  test('may be applied to a lens created by `lens`', () => {
    expect(view(nameLens,alice)).toBe('Alice Jones')
    expect(over(nameLens, toUpper, alice)).toEqual({name: 'ALICE JONES',
      address: ['22 Walnut St', 'San Francisco', 'CA']})

    expect(set(nameLens, 'Alice Smith', alice)).toEqual( {name: 'Alice Smith',
      address: ['22 Walnut St', 'San Francisco', 'CA']})


  }) 

  test('may be applied to a lens created by `lensIndex`', () => {
    expect(view(headLens,alice.address)).toBe('22 Walnut St')
    expect(over(headLens, toUpper, alice.address)).toEqual(['22 WALNUT ST', 'San Francisco', 'CA'])

    expect(set(headLens, '52 Crane Ave', alice.address)).toEqual( ['52 Crane Ave', 'San Francisco', 'CA'])


  })

  test('may be applied to composed lenses', () => {
    const streetLens = compose(addressLens, headLens)

    expect(view(streetLens, alice)).toBe('22 Walnut St')
    expect(over(streetLens, toUpper, alice)).toEqual({name: 'Alice Jones',
      address: ['22 WALNUT ST', 'San Francisco', 'CA']})

    expect(set(streetLens, '52 Crane Ave', alice)).toEqual( {name: 'Alice Jones',
      address: ['52 Crane Ave', 'San Francisco', 'CA']})
  })


})
