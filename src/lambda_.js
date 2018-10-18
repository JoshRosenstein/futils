import is_ from './is_'

export default function(exp) {
  if (!is_('String', exp)) {
    return
  }

  let parts = exp.match(/(.*)\s*[=-]>\s*(.*)/)
  parts.shift()

  const params = parts
    .shift()
    .replace(/^\s*|\s(?=\s)|\s*$|,/g, '')
    .split(' ')
  const body = parts.shift()

  parts = (!/\s*return\s+/.test(body) ? 'return ' : '') + body
  params.push(parts)

  return Function.apply({}, params)
}
