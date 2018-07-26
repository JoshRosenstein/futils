import React, { Component } from 'react'
import styled from 'react-emotion'

import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'

import 'codemirror/mode/javascript/javascript'

import CM from 'react-codemirror'
const E = styled('div')({
  // display: 'flex',
  // flex: '1 1 auto',
})

const CodeMirror = styled(CM)({
  // fontSize: '16px',
  // border: 'none',
})

const editorConfiguration = {
  lineNumbers: true,

  extraKeys: {
    Tab: 'autocomplete',
  },
  autofocus: true,
  autoCloseBrackets: true,
  mode: {
    name: 'javascript',
    statementIndent: 2,
  },
  indentUnit: 2,
  tabSize: 2,
}

class Editor extends Component {
  render() {
    const { onChange, value } = this.props

    return (
      <E>
        <CodeMirror
          value={value}
          onChange={debounce(onChange, 800).bind(this)}
          options={editorConfiguration}
        />
      </E>
    )
  }
}

Editor.displayName = 'Editor'
Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Editor
