const callTrace = require('proxies/callTrace')

describe('#callTrace', () => {
  test('it should wrap only objects', () => {
    const obj = {}

    expect(() => {
      callTrace(obj)
    }).not.toThrow()
  })

  test('it should throw error when wrapped entity is not an object', () => {
    const arr = []

    expect(() => {
      callTrace(arr)
    }).toThrow()
    
    const symbol = Symbol()

    expect(() => {
      callTrace(symbol)
    }).toThrow()
  })

  test('it should trace calls with wrapped object', () => {
    console.log = jest.fn()

    const obj = callTrace({
      a: () => {}
    })

    obj.a()
    expect(console.log).toHaveBeenCalledWith('CALL: a()')
  })

  test('it should return normal props', () => {
    const obj = callTrace({
      a: () => {},
      b: 5
    })

    obj.a()
    expect(console.log).toHaveBeenCalledWith('CALL: a()')

    expect(obj.b).toEqual(5)
  })
})
