const fs = require('fs')
const path = require('path')
const moduleNames = require('./typedmoduleNames').default

const SRC = path.resolve('src')

const copyTypes = (files, dest = 'dist') => {
  files.forEach(file => {
    fs.copyFileSync(path.join(SRC, file), path.join(path.resolve(dest), file))
  })
}

const files = moduleNames()

copyTypes(files, 'es')
copyTypes(files, 'lib')
console.log(`${files.length} typed files copied`)
//copyTypes('lib')
//copyTypes('es')
