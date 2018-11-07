const fs = require('fs')
const path = require('path')

const DIST_DIR = path.resolve('dist')
const TYPE_DEFS_DIR = path.resolve('type-definitions')

const tsTypes = fs.readFileSync(path.join(TYPE_DEFS_DIR, 'futils.d.ts'), 'utf8')
// const flowTypes = fs.readFileSync(
//   path.join(TYPE_DEFS_DIR, 'futils.js.flow'),
//   'utf8',
// )

const nonAmbientTsTypes = tsTypes
  .replace(/declare\s+module\s+Futils\s*\{/, '')
  .replace(
    /\}[\s\n\r]*declare\s+module\s*.futils.[\s\n\r]*{[\s\n\r]*export\s*=\s*Futils[\s\n\r]*\}/m,
    '',
  )

fs.writeFileSync(path.join(DIST_DIR, 'futils.d.ts'), tsTypes, 'utf-8')
//fs.writeFileSync(path.join(DIST_DIR, 'futils.js.flow'), flowTypes, 'utf-8')
fs.writeFileSync(
  path.join(DIST_DIR, 'futils-nonambient.d.ts'),
  nonAmbientTsTypes,
  'utf-8',
)
