import * as fs from 'fs'
import marked from 'marked'
import prettier from 'prettier'

import data from '../out.json'
// https://github.com/remeda/remeda/blob/master/scripts/generate.ts
export interface MethodDoc {
  tag: string
  signature: string
  example: string
  args: JsTagProps[]
  returns: JsTagProps
}

export interface FnDocProps {
  name: string
  description: string
  category: string
  methods: MethodDoc[]
}

export interface JsTagProps {
  name: string
  description: string
}

function getReturnType(signature) {
  const type = signature.type.type
  if (type === 'intrinsic') {
    return signature.type.name
  }
  if (type === 'array') {
    return 'Array'
  }
  return 'Object'
}

const ret = data.children
  .map((method: any) => {
    const target =
      method.children &&
      method.children.filter(
        (item: any) =>
          (item.kindString === 'Function' || item.kindString === 'Module') &&
          item.flags.isExported,
        // item.kindString === 'Variable') &&
        //item.flags.isExported,  //&&
        // !RegExp('_').test(item.name),
        //   (item.signatures || item.) &&
        // item.flags.isExported,
      )[0]

    if (!target) {
      return
    }

    console.log('processing', target.name)
    let signatures = target.signatures //&& target.signatures.filter(s => s.comment)
    if (signatures && signatures.length > 1) {
      signatures = signatures.filter(s => s.comment)
    }

    //console.log('signatures', target.signatures)
    let comment = {shortText: 'TODO', text: '', tags: null}
    if (signatures && signatures.length) {
      // return null
      comment = {...comment, ...signatures[0].comment}
      if (!signatures.length) {
        return null
      }
    }
    //const comment = signatures[0].comment
    // console.log('comment', comment)
    return {
      name: target.name,
      category: '',
      description: marked(
        (comment.shortText + '\n' + (comment.text || '')).trim(),
        {breaks: true},
      ),
      methods:
        signatures &&
        signatures.map((signature, index) => {
          const sigTags = signature.comment && signature.comment.tags
          const TTags = target.comment && target.comment.tags
          const tags = sigTags || TTags || []

          const isDataFirst = tags.find(item => item.tag === 'data_first')
          const isDataLast = tags.find(item => item.tag === 'data_last')
          const getTag = name =>
            tags
              .filter(item => item.tag === name)
              .map(item => item.text.trim())
              .join('\n')
          const hasTag = name => !!tags.find(item => item.tag === name)
          function getExample() {
            let str = getTag('example')
            if (str) {
              return prettier.format(str, {
                semi: false,
                singleQuote: true,
                parser: 'babel',
              })
            }
            str = getTag('example-raw')
            return str
              .split('\n')
              .map(str => str.replace(/^   /, ''))
              .join('\n')
          }

          const parameters = index < 1 ? signature.parameters || [] : []
          const args = parameters.map((item: any) => ({
            name: item.name,
            description: item.comment && item.comment.text,
          }))
          const makeSig = `F.${target.name}(${
            signature.parameters ? args.map(v => v.name).join(',') : ''
          })`

          const getSig = getTag('signature') || index < 1 ? makeSig : ''

          return {
            tag: isDataFirst ? 'Data First' : isDataLast ? 'Data Last' : null,
            signature: prettier.format(getSig, {
              semi: false,
              singleQuote: true,
              parser: 'babel',
            }),
            category: getTag('category'),
            indexed: hasTag('indexed'),
            pipeable: hasTag('pipeable'),
            example: getExample(),
            args: parameters.map((item: any) => ({
              name: item.name,
              description: item.comment && item.comment.text,
            })),
            returns: {
              name: getReturnType(signature),
              description: getTag('returns'),
            },
          }
        }),
    }
  })
  .filter(item => item)
  .map(item => {
    item.category = item.methods
      ? item.methods[0]
        ? item.methods[0].category
        : 'TODO'
      : 'TODO'
    return item
  })

fs.writeFileSync('./def.json', JSON.stringify(ret, null, 2))
