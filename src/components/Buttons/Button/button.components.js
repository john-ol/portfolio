import styled, { css } from 'styled-components'
import { Button } from '../Button'

export const RegularButton = styled(Button)`
  border-radius: 0.4rem;
  padding: 0.8em 1em;
  text-transform: uppercase;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border-color: inherit;
  transition: all 0.3s ease-in;

  border: ${({ border }) => (border ? `${border}rem` : '0.1rem')} solid;

  ${(props) =>
    props.variant === 'primary' &&
    css`
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.main};
      border-color: transparent;

      :hover {
        color: ${(props) => props.theme.colors.main};
        border: ${(props) => (props.border ? `${props.border}rem` : '0.1rem')}
          solid ${(props) => props.theme.colors.main};
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      color: inherit;

      :hover {
        color: ${(props) => props.theme.colors.white};
        border: ${(props) => (props.border ? `${props.border}rem` : '0.1rem')}
          solid transparent;
        background-color: ${(props) => props.theme.colors.main};
      }
    `};
`
