import template from './template'

describe('template', () => {

  test('Works', () => {
    expect(template('{!a.b}')({a:{b:1}})).toEqual(1)

  })

  test('Adds', () => {
    expect(template('{!a.b}+{!a.c}')({a:{b:1, c:2}})).toEqual(3)

  })

  test('Adds and appends string', () => {
    expect(template('{!a.b}+{!a.c}+"px"')({a:{b:1, c:2}})).toEqual('3px')

  })
})
