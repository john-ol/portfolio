import React from 'react'
import { NavBar, NavList, NavItem, NavLink } from './nav.components'
import { LinkButton } from '../../Buttons/LinkButton/linkButton.components'

export const Nav = ({ open }) => {
  return (
    <NavBar open={open}>
      <NavList>
        <NavItem>
          <NavLink to='/resume' activeClassName='active'>
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/projects' activeClassName='active'>
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <LinkButton to='/contact' variant='secondary' border={0.2}>
            Contact
          </LinkButton>
        </NavItem>
      </NavList>
    </NavBar>
  )
}
