import React from 'react'
import stringifyCompact from 'json-stringify-pretty-compact'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import * as R from 'ramda'
import {transform} from 'babel-standalone'

const ramdaStr = `const {${R.keys(R).join(',')}} = R;`

const errRedeclaringRamdaFn = new RegExp(
  `^ramda: Duplicate declaration "(${R.keys(R).join('|')})"`,
)

const formatError = err =>
  err.message
    .replace(ramdaStr, '')
    .replace(/(?=\d).*(?=\|)/g, a => Number(a.trim()) - 1)
    .replace(
      errRedeclaringRamdaFn,
      'ramda: Cannot redeclare "$1" that has already been imported from Ramda',
    )

const Error = styled('div')({
  color: 'red',
})

const Output = styled('pre')({
  backgroundColor: 'white',
  height: 'auto',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  lineHeight: '1.6',

  paddingTop: '1em',
  paddingBottom: '1em',
  paddingLeft: '1em',
  paddingRight: '1em',
  '@media (max-width: 800px)': {
    paddingLeft: '36px',
  },
})

const stringifiers = {
  compact: stringifyCompact,
  expand: json => JSON.stringify(json, null, 2),
  object: json => stringifyCompact(json, {indent: 2, margins: true}),
}
let currentContent = 'Result...'
const Evaluator = props => {
  let result = null
  let error

  try {
    /* eslint-disable */
    result = eval(
      transform(props.value, {
        presets: ['es2015', 'react', 'stage-0'],
      }).code,
    )

    result = result === 'use strict' ? undefined : result
    /* eslint-enable */
  } catch (ex) {
    error = formatError(ex)
  }

  const stringify = stringifiers[props.stringify] || stringifiers.compact
  let content
  if (!error) {
    content = stringify(result)
    if (content === undefined) {
      content = (
        <React.Fragment>
          {currentContent} <Error>{`undefined`}</Error>
        </React.Fragment>
      )
    } else {
      currentContent = content
    }
  } else {
    content = (
      <React.Fragment>
        {currentContent} <Error>{error}</Error>
      </React.Fragment>
    )
  }

  return <Output>{content}</Output>
}

Evaluator.displayName = 'Evaluator'
Evaluator.defaultProps = {stringify: 'object'}
Evaluator.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Evaluator
