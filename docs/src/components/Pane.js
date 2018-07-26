import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Root = styled('div')({
  label: 'Editor',
  boxSizing: 'border-box',
  display: 'flex',
  flex: '1 1 100%',
  position: 'relative',
  borderBottom: '1px solid #ddd',

  '@media (min-width: 800px)': {
    flexBasis: '50%',
    borderLeft: '1px solid #ddd',
    marginLeft: '-1px',
  },
  '@media (min-width: 1200px)': {
    flexBasis: '25%',
  },
})

const Title = styled('div')({
  display: 'flex',

  position: 'relative',
  padding: '5px var(--default-padding)',
  backgroundColor: 'var(--silver)',
  color: 'var(--black)',
  fontSize: '12px',
})

const Content = styled('div')({
  fontFamily: "'Inconsolata', monospace",

  overflowY: 'auto',
})
// < Title > { props.title }</Title>
//   <Content>{props.children}</Content>
const Pane = props => {
  return (
    <React.Fragment>
      <Root className="editor input">{props.children}</Root>
    </React.Fragment>
  )
}

Pane.displayName = 'Pane'
Pane.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Pane
