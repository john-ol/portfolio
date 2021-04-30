import styled, { css } from 'styled-components'
import { Button } from '../Button'

export const RegularButton = styled(Button)`
  border-radius: 0.5rem;
  padding: 0.8em 1em;
  text-transform: uppercase;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: ${(props) =>
      props.variant.border ? `${props.variant.border}rem` : '0.1rem'}
    solid ${(props) => props.theme.colors.main};

  ${(props) =>
    props.variant.primary &&
    css`
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.main};
      border-color: transparent;
      :hover {
        color: ${(props) => props.theme.colors.main};
        border: ${(props) =>
            props.variant.border ? `${props.variant.border}rem` : '0.1rem'}
          solid ${(props) => props.theme.colors.main};
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.variant.secondary &&
    css`
      color: ${(props) => props.theme.colors.main};
      :hover {
        color: ${(props) => props.theme.colors.white};
        border: ${(props) =>
            props.variant.border ? `${props.variant.border}rem` : '0.1rem'}
          solid transparent;
        background-color: ${(props) => props.theme.colors.main};
      }
    `}
`
