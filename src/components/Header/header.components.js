import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

import IconLogo from '../../images/icons/logo.svg'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 9999;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
  background-color: ${(props) => props.theme.colors.background};
  transition: all 0.4s linear;
  ${({ scrollable }) =>
    scrollable > 0 &&
    css`
      font-size: 0.8rem;
      background-color: ${(props) => props.theme.colors.white};
      box-shadow: 0px 8px 4px -4px rgba(9, 9, 9, 0.4);
    `}
`
export const HeaderInner = styled.div`
  padding: 0.8em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${up('md')} {
    padding: 1.5em 0;
  }
`
export const Info = styled.div`
  display: flex;
`
export const Logo = styled(IconLogo)`
  border: 0.3em solid ${(props) => props.theme.colors.main};
  border-radius: 0.8rem;
  padding: 0.3em;
  width: 5.5em;
  height: 5.5em;
  fill: ${(props) => props.theme.colors.main};

  ${up('md')} {
    font-size: 1.1em;
  }

  ${up('lg')} {
    font-size: 1.2em;
  }

  ${up('xl')} {
    font-size: 1.3em;
  }
`
export const User = styled.div`
  margin-left: 0.7em;

  ${up('md')} {
    margin-left: 1em;
  }

  ${up('xl')} {
    margin-left: 1.2em;
  }
`
export const Name = styled.p`
  font-size: 1.8em;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  white-space: pre-line;
  margin-bottom: 0.1rem;

  ${up('md')} {
    font-size: 2em;
  }

  ${up('lg')} {
    font-size: 2.2em;
  }

  ${up('xl')} {
    font-size: 2.3em;
  }
`
export const Prof = styled.p`
  font-size: 1.3em;
  opacity: 0.8;

  ${up('md')} {
    font-size: 1.5em;
  }

  ${up('lg')} {
    font-size: 1.6em;
  }

  ${up('xl')} {
    font-size: 1.7em;
  }
`
