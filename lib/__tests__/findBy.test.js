const findBy = require('proxies/findBy')

describe('#findBy', () => {
  test('it should wrap only arrays', () => {
    const arr = []

    expect(() => {
      findBy(arr)
    }).not.toThrow()
  })

  test('it should throw error when wrapped entity is not an array', () => {
    const obj = {}

    expect(() => {
      findBy(obj)
    }).toThrow()
  })

  test('it should find element with correct prop', () => {
    const arr = findBy([
      { name: 'Samet', age: 23 },
      { name: 'Gorkem', age: 13 }
    ])

    expect(arr.findByName('Samet')).toEqual(arr[0])
    expect(arr.findByName('Gorkem')).toEqual(arr[1])
  })

  test('it should return an array, if there is a match more than one', () => {
    const arr = findBy([
      { name: 'Samet', age: 23 },
      { name: 'Gorkem', age: 23 }
    ])

    expect(arr.findByAge(23)).toEqual(arr)
  })

  test('it should match with an lowerCase prop', () => {
    const arr = findBy([
      { name: 'Samet', age: 23 },
      { name: 'Gorkem', age: 23 }
    ])

    expect(arr.findByName('Samet')).toEqual(arr[0])
  })

  test('it should match with an upperCase prop', () => {
    const arr = findBy([
      { NAME: 'Samet', age: 23 },
      { NAME: 'Gorkem', age: 23 }
    ])

    expect(arr.findByName('Samet')).toEqual(arr[0])
  })

  test('it should match with an exact prop', () => {
    const arr = findBy([
      { Name: 'Samet', age: 23 },
      { Name: 'Gorkem', age: 23 }
    ])

    expect(arr.findByName('Samet')).toEqual(arr[0])
  })
})
