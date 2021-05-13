import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import Github from '../../images/icons/github.svg'
import Linkedin from '../../images/icons/linkedin.svg'

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

export const FooterInfo = styled.div`
  align-items: center;
  display: flex;
`
export const FooterCopyrigth = styled.p`
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin-bottom: 0.5rem;

  ${up('md')} {
    margin-bottom: 0rem;
    font-size: 1.3rem;
    margin-right: 2rem;
  }

  ${up('lg')} {
    font-size: 1.5rem;
  }
`
export const FooterSocialIcons = styled.ul`
  display: none;

  ${up('md')} {
    display: flex;
  }
`

export const SocialIcon = styled.li`
  cursor: pointer;

  :not(:last-child) {
    margin-right: 1.2rem;
  }
  svg {
    fill: ${(props) => props.theme.colors.secondary};
    width: 2rem;
    height: 2rem;
    transition: fill 0.3s linear;
    :hover {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`

export const GithubIcon = styled(Github)``
export const LinkedinIcon = styled(Linkedin)``

export const FooterPlatform = styled.p`
  ${up('md')} {
    font-size: 1.1rem;
  }

  ${up('lg')} {
    font-size: 1.3rem;
  }
`
