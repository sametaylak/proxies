const validator = require('proxies/validator')

describe('#validator', () => {
  test('it should wrap only objects', () => {
    const obj = {}

    expect(() => {
      validator(obj, {})
    }).not.toThrow()
  })

  test('it should throw error when wrapped entity is not an object', () => {
    const arr = []

    expect(() => {
      validator(arr, {})
    }).toThrow()
  })

  test('it should validate correctly', () => {
    const o = validator({}, {
      age: value => {
        if (typeof value !== 'number') {
          throw new Error('Age must be number')
        }
      }
    })

    expect(() => {
      o.age = 5
    }).not.toThrow()

    expect(() => {
      o.age = '1'
    }).toThrow()
  })
})
