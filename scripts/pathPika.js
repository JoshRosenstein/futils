const fs = require('fs')
const path = require('path')

const MODULES = path.resolve('node_modules')
const BADFILE = path.join(MODULES, '@pika', 'pack', 'dist-node', 'index.js')

const SCRIPTS = path.resolve('scripts')
const REPLACEMENTFILE = path.join(SCRIPTS, 'pikaReplacement.txt')

const replacement = fs.readFileSync(REPLACEMENTFILE, 'utf8')

fs.writeFileSync(BADFILE, replacement, 'utf-8')
