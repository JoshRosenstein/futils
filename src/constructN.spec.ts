import constructN from './constructN'

describe('constructN', () => {
  class Circle {
    r: number
    colors: string[]
    constructor(r: number, ...args: any[]) {
      this.r = r
      this.colors = args
    }
    area() {
      return Math.PI * Math.pow(this.r, 2)
    }
  }

  it('turns a constructor function into a function with n arguments', () => {
    const circle = constructN(2, Circle)
    const c1 = circle(1, 'red')
    expect(c1.constructor).toEqual(Circle)
    expect(c1.r).toEqual(1)
    expect(c1.area()).toEqual(Math.PI)
    expect(c1.colors).toEqual(['red'])

    const regex = constructN(1, RegExp)
    const pattern = regex('[a-z]')
    expect(pattern.constructor).toEqual(RegExp)
    expect(pattern.source).toEqual('[a-z]')
  })

  it('can be used to create Date object', () => {
    const date = constructN(3, Date)(1984, 3, 26)
    expect(date.constructor).toEqual(Date)
    expect(date.getFullYear()).toEqual(1984)
  })

  it('supports constructors with no arguments', () => {
    function Foo() {}
    const foo = constructN(0, Foo)()
    expect(foo.constructor).toEqual(Foo)
  })

  it('does not support constructor with greater than ten arguments', () => {
    function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10: number) {
      this.eleventh = $10
    }

    function testConstError() {
      constructN(11, Foo)
    }

    expect(testConstError).toThrowError(
      'Constructor with greater than ten arguments',
    )
  })
})
