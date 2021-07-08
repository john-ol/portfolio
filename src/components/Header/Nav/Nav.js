import React from 'react'
import { NavBar, NavList, NavItem, NavLink } from './nav.components'
import { LinkButton } from '../../Buttons/LinkButton/linkButton.components'

export const Nav = ({ open, setOpen }) => {
  const setOpenHandler = () => {
    setOpen(false)
  }
  return (
    <NavBar open={open}>
      <NavList>
        <NavItem>
          <NavLink
            to='/resume'
            activeClassName='active'
            onClick={setOpenHandler}
          >
            Resume
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/projects'
            activeClassName='active'
            onClick={setOpenHandler}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/about'
            activeClassName='active'
            onClick={setOpenHandler}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <LinkButton
            to='/contact'
            variant='secondary'
            border={0.2}
            onClick={setOpenHandler}
          >
            Contact
          </LinkButton>
        </NavItem>
      </NavList>
    </NavBar>
  )
}
