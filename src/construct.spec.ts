import construct from './construct'

describe('construct', () => {
  const Rectangle = function(w, h) {
    this.width = w
    this.height = h
  }
  Rectangle.prototype.area = function() {
    return this.width * this.height
  }

  it('turns a constructor function into one that can be called without `new`', () => {
    const rect = construct(Rectangle)
    const r1 = rect(3, 4)
    expect(r1.constructor).toEqual(Rectangle)
    expect(r1.width).toEqual(3)
    expect(r1.area()).toEqual(12)

    const regex = construct(RegExp)
    const word = regex('word', 'gi')
    expect(word.constructor).toEqual(RegExp)
    expect(word.source).toEqual('word')
    expect(word.global).toEqual(true)
  })

  it('can be used to create Date object', () => {
    const date = construct(Date)(1984, 3, 26, 0, 0, 0, 0)
    expect(date.constructor).toEqual(Date)
    expect(date.getFullYear()).toEqual(1984)
  })

  it('supports constructors with no arguments', () => {
    function Foo() {}
    const foo = construct(Foo)()
    expect(foo.constructor).toEqual(Foo)
  })

  it('does not support constructor with greater than ten arguments', () => {
    function Foo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
      this.eleventh = $10
    }

    function testConstError() {
      construct(Foo)
    }

    expect(testConstError).toThrowError(
      'Constructor with greater than ten arguments',
    )
  })

  it('returns a curried function', () => {
    const rect = construct(Rectangle)
    const rect3 = rect(3)
    const r1 = rect3(4)
    expect(r1.constructor).toEqual(Rectangle)
    expect(r1.width).toEqual(3)
    expect(r1.height).toEqual(4)
    expect(r1.area()).toEqual(12)

    const regex = construct(RegExp)
    const word = regex('word')
    const complete = word('gi')
    expect(complete.constructor).toEqual(RegExp)
    expect(complete.source).toEqual('word')
    expect(complete.global).toEqual(true)
  })
})
