const fs = require('fs')
const path = require('path')
const ignoredFiles = ['_internals', '_uncurried', 'index.js','JS','lambda']

const listFns = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  const ret=files
    .filter(file => (/^[^._]/).test(file) && !ignoredFiles.includes(file))
    .map(file => ({
      name: file.replace('.js', ''),
      path: `./${file}`,
      fullPath: `${file}/index.js`
    }))

//console.log(ret)
  return ret
}

const generateIndex = () => {
  const propertyRequireLines = listFns()
      .map(fn => `export { default as ${fn.name} } from './${fn.name}'`)

  const indexLines = []
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  return `${indexLines}\n`
}

fs.writeFileSync('./src/index.js', generateIndex())
