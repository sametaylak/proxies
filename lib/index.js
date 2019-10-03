const fs = require('fs')
const path = require('path')
const files = fs.readdirSync(__dirname)

let modules = {}
for (let file of files) {
  const stat = fs.lstatSync(`${__dirname}/${file}`)

  if (!stat.isFile()) continue
  if (file === 'index.js') continue
  if (path.extname(file) !== '.js') continue

  const module = require(`${__dirname}/${file}`)
  modules[file.slice(0, -3)] = module
}

module.exports = modules
