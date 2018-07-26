import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Nav = styled('header')({
  // padding: '15px var(--default-padding)',
  // backgroundColor: 'var(--blue)',
  // color: 'var(--white)',
})

const NavTitle = styled('div')({
  fontSize: '18px',
})

const Navbar = props => {
  return (
    <Nav>
      <NavTitle>{props.title}</NavTitle>
    </Nav>
  )
}

Navbar.displayName = 'Navbar'
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
