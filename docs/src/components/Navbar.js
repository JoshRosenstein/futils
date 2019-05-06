import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Nav=styled('header')({
  // padding: '15px var(--default-padding)',
  // backgroundColor: 'var(--blue)',
  // color: 'var(--white)',
})

const NavTitle=styled('div')({
  fontSize: '18px',
})

const Navbar=props => {
  return (
    <Nav>
      <NavTitle>{props.title}</NavTitle>
    </Nav>
  )
}

Navbar.displayName='Navbar'


export default Navbar
