import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import IconLogo from '../../images/icons/logo.svg'

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 9999;
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
  background-color: ${(props) => props.theme.colors.background};
`
export const HeaderInner = styled.div`
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${up('md')} {
    padding: 1.5rem 0;
  }
`
export const Info = styled.div`
  display: flex;
`
export const Logo = styled(IconLogo)`
  border: 0.3rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.8rem;
  padding: 0.3em;
  width: 5.5em;
  height: 5.5em;
  fill: ${(props) => props.theme.colors.main};

  ${up('md')} {
    font-size: 1.1rem;
  }

  ${up('lg')} {
    font-size: 1.2rem;
  }

  ${up('xl')} {
    font-size: 1.3rem;
  }
`
export const User = styled.div`
  margin-left: 0.7rem;

  ${up('md')} {
    margin-left: 1rem;
  }

  ${up('xl')} {
    margin-left: 1.2rem;
  }
`
export const Name = styled.p`
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  white-space: pre-line;
  margin-bottom: 0.1rem;

  ${up('md')} {
    font-size: 2rem;
  }

  ${up('lg')} {
    font-size: 2.2rem;
  }

  ${up('xl')} {
    font-size: 2.3rem;
  }
`
export const Prof = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;

  ${up('md')} {
    font-size: 1.5rem;
  }

  ${up('lg')} {
    font-size: 1.6rem;
  }

  ${up('xl')} {
    font-size: 1.7rem;
  }
`
