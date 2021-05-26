import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { up } from 'styled-breakpoints'
export const NavBar = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  ${({ open }) =>
    open &&
    css`
      display: flex;
      background-color: ${(props) => props.theme.colors.main};
    `}

  ${up('md')} {
    position: static;
    display: block;
    height: 100%;
    width: inherit;
    background-color: transparent;
  }
`
export const NavList = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.colors.white};

  ${up('md')} {
    flex-direction: row;
    font-size: 1.5em;
    color: ${(props) => props.theme.colors.main};
  }

  ${up('lg')} {
    font-size: 1.6em;
  }

  ${up('xl')} {
    font-size: 1.8em;
  }
`
export const NavItem = styled.li`
  ${up('md')} {
    :not(:last-child) {
      position: relative;
      margin-right: 5rem;
    }
  }

  ${up('lg')} {
    :not(:last-child) {
      margin-right: 8rem;
    }
  }

  ${up('xl')} {
    :not(:last-child) {
      margin-right: 10rem;
    }
  }
`
export const NavLink = styled(Link)`
  :after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -1.1rem;
    left: 0;
    width: 100%;
    opacity: 0;
    height: 0.3rem;
    background-color: ${(props) => props.theme.colors.main};
    transition: opacity 0.2s linear;
  }
  :hover {
    :after {
      opacity: 1;
    }
  }

  &.active {
    position: relative;

    :after {
      content: '';
      position: absolute;
      bottom: -1.1rem;
      left: 0;
      opacity: 1;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.colors.main};
    }
  }
`
