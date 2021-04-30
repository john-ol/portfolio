import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import IconLogo from '../../images/icons/logo.svg'

export const Header = styled.header`
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.borders};
`
export const HeaderInner = styled.div`
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
`
export const Logo = styled(IconLogo)`
  border: 0.2em solid ${(props) => props.theme.colors.main};
  border-radius: 0.8rem;
  padding: 0.4em;
  width: 5.5em;
  height: 5.5em;
  fill: ${(props) => props.theme.colors.main};

  ${up('lg')} {
    width: 6rem;
    height: 6rem;
  }
  ${up('xl')} {
    width: 6.5rem;
    height: 6.5rem;
  }
`
export const User = styled.div`
  margin-left: 1em;
`
export const Name = styled.p`
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  white-space: pre-line;
  margin-bottom: 0.1rem;

  ${up('lg')} {
    font-size: 2rem;
  }
  ${up('xl')} {
    font-size: 2.2rem;
  }
`
export const Prof = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;
  ${up('lg')} {
    font-size: 1.5rem;
  }
  ${up('xl')} {
    font-size: 1.6rem;
  }
`
