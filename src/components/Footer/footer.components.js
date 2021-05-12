import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.main};
`
export const FooterInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.secondary};
  ${up('md')} {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  ${up('lg')} {
    padding: 2rem 0;
  }
`
export const FooterCopyrigth = styled.p`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin-bottom: 0.5rem;
  ${up('md')} {
    margin-bottom: 0rem;
    font-size: 1.3rem;
  }
  ${up('lg')} {
    font-size: 1.5rem;
  }
`
export const FooterPlatform = styled.p`
  ${up('md')} {
    font-size: 1.1rem;
  }
  ${up('lg')} {
    font-size: 1.3rem;
  }
`
