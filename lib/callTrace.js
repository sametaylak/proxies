const callTrace = entity => {
  if (Array.isArray(entity)) throw new Error('callTrace just for objects')
  if (typeof entity !== 'object') throw new Error('callTrace just for objects')

  return new Proxy(entity, {
    get: (target, prop) => {
      const targetValue = Reflect.get(target, prop)
      if (typeof targetValue === 'function') {
        return (...args) => {
          console.log(
            `CALL: ${prop}()`
          )
          return targetValue.apply(target, args)
        }
      } else {
        return targetValue
      }
    }
  })
}

module.exports = callTrace
