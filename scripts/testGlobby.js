var globby=require('globby'),
 path =require('path')

 const buildEntry = () => {
   const results = []
   const paths = globby.sync(['src/*.js', '!src/index.js', '!src/_internals','!src/JS','src/*/index.js'])

//console.log(paths)

paths.forEach(p => {
const { name, dir } = path.parse(p)
let [, moduleName] = dir.split('/')

if (name !== 'index') {
 moduleName = name
}

console.log({name,dir,moduleName,path:path.resolve(__dirname, p)})
})

 }


   buildEntry()
