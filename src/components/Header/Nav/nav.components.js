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
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.main};
  }
  ${up('lg')} {
    font-size: 1.6rem;
  }
  ${up('xl')} {
    font-size: 1.8rem;
  }
`
export const NavItem = styled.li`
  ${up('md')} {
    :not(:last-child) {
      position: relative;
      margin-right: 5rem;
      :after {
        content: '';
        position: absolute;
        z-index: 1;
        bottom: -1.2rem;
        left: 0;
        width: 0;
        height: 0.3rem;
        background-color: ${(props) => props.theme.colors.main};
        transition: width 0.2s linear;
      }
      :hover {
        :after {
          width: 100%;
        }
      }
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
  &.active {
    position: relative;
    :after {
      content: '';
      position: absolute;
      bottom: -1.1rem;
      left: 0;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.colors.main};
    }
  }
`