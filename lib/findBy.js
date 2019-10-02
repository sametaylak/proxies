const findBy = entity => {
  if (!Array.isArray(entity)) throw new Error('findBy just for arrays')

  const prefix = 'findBy'
  return new Proxy(entity, {
    get: (target, prop) => {
      if (typeof prop === 'symbol') return target
      if (prop in target) return target[prop]

      if (prop.startsWith(prefix)) {
        const field = prop.substring(prefix.length, prop.length)
        return value => {
          const matches = target.filter(item => {
            return item[field.toUpperCase()] === value ||
              item[field.toLowerCase()] === value ||
              item[field] === value
          })
          return matches.length === 1 ? matches[0] : matches
        }
      }
    }
  })
}

module.exports = findBy
