import React from 'react'
import { Button } from '../../Buttons/Button/Button'
import { NavBar, NavList, NavItem, NavLink } from './nav.components'

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
          <Button variant='secondary' border={0.2}>
            Contact
          </Button>
        </NavItem>
      </NavList>
    </NavBar>
  )
}
