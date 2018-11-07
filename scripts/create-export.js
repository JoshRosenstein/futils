const fs = require('fs')
const path = require('path')

const ignoredFiles = [
  '_internals',
  '_uncurried',
  'index.js',
  'index_.js',
  'JS',
  'lambda',
  'flowTest/is.js',
]

const listFns = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  const ret = files
    .filter(
      file =>
        /^[^._]/.test(file) &&
        !ignoredFiles.includes(file) &&
        !RegExp('_').test(file) &&
        !RegExp('spec*').test(file),
    )
    .map(file => ({
      name: file.replace('.js', ''),
      path: `./${file}`,
      fullPath: `${file}/index.js`,
    }))

  return ret
}

const listFns_ = () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src'))
  const ret = files
    .filter(
      file =>
        /^[^._]/.test(file) &&
        !ignoredFiles.includes(file) &&
        RegExp('_').test(file) &&
        !RegExp('spec*').test(file),
    )
    .map(file => ({
      name: file.replace('.js', ''),
      path: `./${file}`,
      fullPath: `${file}/index.js`,
    }))

  return ret
}

const generateIndex = () => {
  const propertyRequireLines = listFns().map(
    fn => `export { default as ${fn.name} } from './${fn.name}'`,
  )

  const indexLines = ['//@flow']
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  return `${indexLines}\n`
}
const generateIndex_ = () => {
  const propertyRequireLines = listFns_().map(
    fn => `export { default as ${fn.name} } from './${fn.name}'`,
  )

  const indexLines = ['//@flow']
    .concat(propertyRequireLines.join('\n'))
    .join('\n')

  return `${indexLines}\n`
}

fs.writeFileSync('./src/index.js', generateIndex())
fs.writeFileSync('./src/index_.js', generateIndex_())
