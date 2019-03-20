const fs = require('fs-extra')
const path = require('path')
const moduleNames = require('./typedmoduleNames').default

const SRC = path.resolve('src')

const typesFolderName = '_types'
const typesFolderPath = path.join(SRC, typesFolderName)

const copyTypes = (files, dest = 'dist') => {
  files.forEach(file => {
    fs.copyFileSync(path.join(SRC, file), path.join(path.resolve(dest), file))
  })

  fs.copy(
    typesFolderPath,
    path.join(path.resolve(dest), typesFolderName),
    function(err) {
      if (err) {
        console.log('An error occured while copying the folder.')
        return console.error(err)
      }
      console.log('Copy completed!')
    },
  )
}

const files = moduleNames()

copyTypes(files, 'es')
copyTypes(files, 'lib')

console.log(`${files.length} typed files copied`)
//copyTypes('lib')
//copyTypes('es')
