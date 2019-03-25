const fs = require('fs')
const path = require('path')

const SRC = path.join(process.cwd(), 'src')

const ignoredFiles = ['_internals', 'index.ts', 'index_.ts']

const listFns = () => {
  const files = fs.readdirSync(SRC)
  const ret = files
    .filter(
      file =>
        !ignoredFiles.includes(file) &&
        !RegExp('_').test(file) &&
        !RegExp('spec*').test(file),
    )
    .map(file => ({
      name: file.replace('.js', '').replace('.ts', ''),
      path: `./${file}`,
      fullPath: `${file}/index.js`,
    }))

  return ret
}

const generateIndex = (isFlow = false) => {
  const files = listFns()
  const propertyRequireLines = files.map(
    // fn => `export {default as ${fn.name}} from './${fn.name}'`,
    fn => `export {${fn.name}} from './${fn.name}'`,
  )
  const first = isFlow ? ['//@flow'] : []
  const indexLines = first.concat(propertyRequireLines.join('\n')).join('\n')

  return `${indexLines}\n`
}

// const listFns_ = () => {
//   const files = fs.readdirSync(path.join(process.cwd(), 'src'))
//   const ret = files
//     .filter(
//       file =>
//         /^[^._]/.test(file) &&
//         !ignoredFiles.includes(file) &&
//         !RegExp('.flow.js').test(file) &&
//         !RegExp('.d.ts').test(file) &&
//         RegExp('_').test(file) &&
//         !RegExp('spec*').test(file),
//     )
//     .map(file => ({
//       name: file.replace('.js', '').replace('.ts', ''),
//       path: `./${file}`,
//       fullPath: `${file}/index.js`,
//     }))

//   return ret
// }
// const generateIndex_ = (isFlow = false) => {
//   const propertyRequireLines = listFns().map(
//     fn => `export {${fn.name}_} from './${fn.name}'`,
//   )
//   const first = isFlow ? ['//@flow'] : ['//Exports of nonCurried versions']

//   const indexLines = first.concat(propertyRequireLines.join('\n')).join('\n')

//   return `${indexLines}\n`
// }

const files = generateIndex()
// const filesFlow = generateIndex(true)
// const unCurriedfiles = generateIndex_()
// const unCurriedfilesFlow = generateIndex_(true)

fs.writeFileSync('./src/index.ts', files)
// fs.writeFileSync('./src/index.js.flow', filesFlow)
// fs.writeFileSync('./src/index.d.ts', files)

// fs.writeFileSync('./src/index_.js', unCurriedfiles)
// fs.writeFileSync('./src/index_.js.flow', unCurriedfilesFlow)
// fs.writeFileSync('./src/index_.d.ts', unCurriedfiles)
