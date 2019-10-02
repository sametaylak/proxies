const { findBy, callTrace } = require('proxies')

const arr = findBy([
  { name: 'Lily', age: 23 },
  { name: 'Lily', age: 21 },
  { name: 'Iris', age: 43 }
])

console.log(arr.findByName('Lily'))
console.log(arr.findByAge(43))

const o = callTrace({
  a: () => {},
  b: 5
})

o.a()

class TestTrace {
  hello () {}

  world () {}
}

const tt = callTrace(new TestTrace())

tt.hello()
tt.world()

