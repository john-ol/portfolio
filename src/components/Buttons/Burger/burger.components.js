import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'
import { Button } from '../Button'

export const BurgerButton = styled(Button)`
  padding: 0.4rem;
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 0.3rem;

  ${({ open }) =>
    open &&
    css`
      z-index: 1000;
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;

      span {
        background: transparent;
        transform: translateX(-0.2rem);

        :before {
          transform: rotate(45deg) translate(0.2rem, -0.2rem);
          background-color: ${(props) => props.theme.colors.white};
        }

        :after {
          transform: rotate(-45deg) translate(0.2rem, 0.2rem);
          background-color: ${(props) => props.theme.colors.white};
        }
      }
    `}

  ${up('md')} {
    display: none;
  }
`

export const Line = styled.span`
  position: relative;
  height: 0.3rem;
  background-color: ${(props) => props.theme.colors.main};
  display: block;
  border-radius: 0.5rem;
  transition: all 0.4s ease-in-out;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.main};
    z-index: 1;
    transition: all 0.4s ease-in-out;
  }

  :after {
    transform: translateY(0.9rem);
  }

  :before {
    transform: translateY(-0.9rem);
  }
`
