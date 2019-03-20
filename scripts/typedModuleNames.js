const fs = require('fs')
const path = require('path')

const ignoredFiles = ['_internals', 'index.js', 'index.ts']

const moduleNames = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  const ret = files.filter(
    file => RegExp('.d.ts').test(file) || RegExp('.js.flow').test(file),
  )

  return ret
}

exports.default = moduleNames
