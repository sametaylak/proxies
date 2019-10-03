const validator = (entity, validations) => {
  if (Array.isArray(entity)) throw new Error('validator just for objects')
  if (typeof entity !== 'object') throw new Error('validator just for objects')

  return new Proxy(entity, {
    set: (target, prop, value) => {
      const validate = validations[prop] || (() => true)
      validate(value)
      Reflect.set(target, prop, value)
    }
  })
}

module.exports = validator
