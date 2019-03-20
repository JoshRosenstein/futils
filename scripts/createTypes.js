var fs = require('fs')
var path = require('path')
var program = require('commander')
const debug_ = require('debug')
const header = require('@roseys/art').default

const name = 'rosey:createTypes'
debug_.enable(name)

const log = debug_(name)

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function run(name, otherNames, options) {
  const names = [name, ...otherNames].filter(Boolean)
  log('running')
  log('input', names)
  if (!names) {
    log('Error: NO FILE NAME')
    throw Error('must have a file name')
  }

  names.forEach(name => {
    var src = path.resolve('src')
    var ts = path.resolve(src, name + '.d.ts')

    var flow = path.resolve(src, name + '.js.flow')

    const Type = `${capitalize(name)}`
    var tsContent = ` // ROSEYS TS
import {Property} from './_types/ts/$types'

export declare type ${Type}_ = {
(a: number, b: number): number
}
export declare type ${Type} ={
(a: number, b: number): number
(a: number): (b: number) => number
}
export declare var ${name}_: ${Type}_
export declare var ${name}: ${Type}
export default ${name}
  `

    var flowContent = `// @flow
import type {Property} from './_types/flow/$types'
export type ${Type}_ = (a: number, b: number) => number
export type ${Type} = ${Type}_ & ((a: number) => (b: number) => number)

declare var ${name}_: ${Type}_
declare var ${name}: ${Type}

export {${name}_, ${name}}
declare export default ${Type}
`

    if (!fs.existsSync(ts)) {
      fs.writeSync(fs.openSync(ts, 'w'), tsContent)
    } else {
      log(`File ${ts} already exists, will not overide`)
    }

    if (!fs.existsSync(flow)) {
      fs.writeSync(fs.openSync(flow, 'w'), flowContent)
    } else {
      log(`File ${flow} already exists, will not overide`)
    }

    log(`${name} type files created`)
  })
  log('Finished')
}

console.log(header)
program
  .version('0.0.1')
  //.option('-s, --styles [extension]', 'styles extension [default: css]')
  .arguments('<name> [OtherNames...]')
  .action(run)
  .parse(process.argv)
